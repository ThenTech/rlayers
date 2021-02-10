window.URL.createObjectURL = jest.fn();
import * as fs from 'fs';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';

import {Polygon, Point} from 'ol/geom';
import {Feature, LayerVector, Map, LocationContext} from 'react-layers';
import * as common from './common';
import {Pixel} from 'ol/pixel';

describe('<Feature>', () => {
    it('should create features', async () => {
        const mapEvents = ['Click', 'PointerDrag', 'PointerMove'];
        const handler = jest.fn();
        const handlers = mapEvents.reduce((ac, a) => ({...ac, ['on' + a]: handler}), {});
        const map = React.createRef() as React.RefObject<Map>;
        const ref = [
            React.createRef() as React.RefObject<Feature>,
            React.createRef() as React.RefObject<Feature>
        ];
        const {container, unmount} = render(
            <Map ref={map} {...common.mapProps}>
                <LayerVector zIndex={10}>
                    <Feature
                        ref={ref[0]}
                        {...handlers}
                        style={common.styles.blueDot}
                        geometry={new Point(common.coords.ArcDeTriomphe)}
                    >
                        <LocationContext.Consumer>
                            {(c) => <div>marker {JSON.stringify(c, common.safeStringify)}</div>}
                        </LocationContext.Consumer>
                    </Feature>
                    <Feature
                        ref={ref[1]}
                        {...handlers}
                        style={common.styles.yellow}
                        geometry={
                            new Polygon([
                                [
                                    common.coords.PlaceDItalie,
                                    common.coords.Bastille,
                                    common.coords.TourEiffel,
                                    common.coords.PlaceDItalie
                                ]
                            ])
                        }
                    >
                        <LocationContext.Consumer>
                            {(c) => <div>marker {JSON.stringify(c, common.safeStringify)}</div>}
                        </LocationContext.Consumer>
                    </Feature>
                </LayerVector>
            </Map>
        );
        for (const evname of mapEvents)
            for (const r of ref)
                r.current.ol.dispatchEvent(
                    common.createEvent(evname.toLowerCase(), map.current.ol)
                );
        expect(container.innerHTML).toMatchSnapshot();
        expect(handler.mock.calls.length).toBe(mapEvents.length * 2);
        unmount();
    });

    it('should support updating feature props', async () => {
        const {container, rerender} = render(
            <Map {...common.mapProps}>
                <LayerVector>
                    <Feature
                        properties={{name: 'Arc de Triomphe'}}
                        geometry={new Point(common.coords.ArcDeTriomphe)}
                    >
                        <LocationContext.Consumer>
                            {(c) => <div>marker {JSON.stringify(c, common.safeStringify)}</div>}
                        </LocationContext.Consumer>
                    </Feature>
                </LayerVector>
            </Map>
        );
        expect(container.innerHTML).toMatchSnapshot();
        rerender(
            <Map {...common.mapProps}>
                <LayerVector>
                    <Feature
                        properties={{name: "Place d'Italie"}}
                        geometry={new Point(common.coords.PlaceDItalie)}
                    >
                        <LocationContext.Consumer>
                            {(c) => <div>marker {JSON.stringify(c, common.safeStringify)}</div>}
                        </LocationContext.Consumer>
                    </Feature>
                </LayerVector>
            </Map>
        );
        expect(container.innerHTML).toMatchSnapshot();
    });

    it('should relay map events to features', () => {
        const map = React.createRef() as React.RefObject<Map>;
        const ref = [
            React.createRef() as React.RefObject<Feature>,
            React.createRef() as React.RefObject<Feature>
        ];
        const mapEvents = ['Click', 'SingleClick', 'DblClick', 'PointerDrag', 'PointerMove'];
        const handlers = [jest.fn(), jest.fn()];
        const handlerProps = [
            mapEvents.reduce((ac, a) => ({...ac, ['on' + a]: handlers[0]}), {}),
            mapEvents.reduce((ac, a) => ({...ac, ['on' + a]: handlers[1]}), {})
        ];
        const {container} = render(
            <Map ref={map} {...common.mapProps}>
                <LayerVector>
                    <Feature
                        ref={ref[0]}
                        properties={{name: 'Arc de Triomphe'}}
                        {...handlerProps[0]}
                        geometry={new Point(common.coords.ArcDeTriomphe)}
                    />
                    <Feature
                        ref={ref[1]}
                        properties={{name: "Place d'Italie"}}
                        {...handlerProps[1]}
                        geometry={new Point(common.coords.PlaceDItalie)}
                    />
                </LayerVector>
            </Map>
        );
        map.current.ol.forEachFeatureAtPixel = jest.fn((pixel: Pixel, cb) => {
            if (pixel[0] === 10) return cb.call(this, ref[0].current.ol, null);
            if (pixel[0] === 20) return cb.call(this, ref[1].current.ol, null);
            throw new Error('unexpected');
        });
        for (const ev of mapEvents) {
            map.current.ol.dispatchEvent(common.createEvent(ev, map.current.ol, 10));
            map.current.ol.dispatchEvent(common.createEvent(ev, map.current.ol, 20));
        }
        expect(handlers[0].mock.calls.length).toBe(mapEvents.length);
        expect(handlers[1].mock.calls.length).toBe(mapEvents.length);
    });

    it('should generate pointerenter, pointerleave and pointerdragend', () => {
        const map = React.createRef() as React.RefObject<Map>;
        const ref = [
            React.createRef() as React.RefObject<Feature>,
            React.createRef() as React.RefObject<Feature>
        ];
        const mapEvents = ['PointerEnter', 'PointerLeave', 'PointerDragEnd'];
        const handlerProps = mapEvents.reduce((ac, a) => ({...ac, ['on' + a]: jest.fn()}), {});
        const {container} = render(
            <Map ref={map} {...common.mapProps}>
                <LayerVector>
                    <Feature
                        ref={ref[0]}
                        properties={{name: 'Arc de Triomphe'}}
                        {...handlerProps}
                        geometry={new Point(common.coords.ArcDeTriomphe)}
                    />
                    <Feature
                        ref={ref[1]}
                        properties={{name: "Place d'Italie"}}
                        geometry={new Point(common.coords.PlaceDItalie)}
                    />
                </LayerVector>
            </Map>
        );
        map.current.ol.forEachFeatureAtPixel = jest.fn((pixel: Pixel, cb) => {
            if (pixel[0] === 10) return cb.call(this, ref[0].current.ol, null);
            if (pixel[0] === 20) return cb.call(this, ref[1].current.ol, null);
            return undefined;
        });

        map.current.ol.dispatchEvent(common.createEvent('pointermove', map.current.ol, 0));
        map.current.ol.dispatchEvent(common.createEvent('pointermove', map.current.ol, 10));
        map.current.ol.dispatchEvent(common.createEvent('pointermove', map.current.ol, 20));

        map.current.ol.dispatchEvent(common.createEvent('pointermove', map.current.ol, 0));
        map.current.ol.dispatchEvent(common.createEvent('pointermove', map.current.ol, 10));
        map.current.ol.dispatchEvent(common.createEvent('pointermove', map.current.ol, 0));

        map.current.ol.dispatchEvent(common.createEvent('pointerdrag', map.current.ol, 10, true));
        map.current.ol.dispatchEvent(common.createEvent('pointermove', map.current.ol, 0));

        expect(handlerProps['onPointerEnter'].mock.calls.length).toBe(2);
        expect(handlerProps['onPointerLeave'].mock.calls.length).toBe(2);
        expect(handlerProps['onPointerDragEnd'].mock.calls.length).toBe(1);
    });
    it('should throw an error without a Layer', () => {
        jest.spyOn(console, 'error');
        const err = console.error;
        console.error = () => undefined;
        expect(() => render(<Feature />)).toThrow('must be part of a');
        console.error = err;
    });
});