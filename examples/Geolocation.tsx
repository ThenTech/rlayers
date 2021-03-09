import React from 'react';
import {fromLonLat} from 'ol/proj';
import {Geometry, Point} from 'ol/geom';
import 'ol/ol.css';

import {RMap, ROSM, RLayerVector, RFeature, RGeolocation, RStyle} from 'rlayers';
import locationIcon from './svg/location.svg';

export default function Geolocation(): JSX.Element {
    const [pos, setPos] = React.useState(new Point(fromLonLat([0, 0])));
    const [accuracy, setAccuracy] = React.useState(null as Geometry);
    const mapRef = React.useRef() as React.RefObject<RMap>;
    return (
        <RMap ref={mapRef} className='example-map' center={fromLonLat([0, 0])} zoom={4}>
            <ROSM />
            <RGeolocation
                tracking={true}
                trackingOptions={{enableHighAccuracy: true}}
                onChange={React.useCallback((e) => {
                    setPos(new Point(e.target.getPosition()));
                    setAccuracy(e.target.getAccuracyGeometry());
                    mapRef.current.ol.getView().fit(e.target.getAccuracyGeometry(), {
                        duration: 250,
                        maxZoom: 15
                    });
                }, [])}
            />
            <RLayerVector zIndex={10}>
                <RStyle.RStyle>
                    <RStyle.RIcon src={locationIcon} anchor={[0.5, 0.8]} />
                    <RStyle.RStroke color={'#007bff'} width={3} />
                </RStyle.RStyle>
                <RFeature geometry={pos}></RFeature>
                <RFeature geometry={accuracy}></RFeature>
            </RLayerVector>
        </RMap>
    );
}
