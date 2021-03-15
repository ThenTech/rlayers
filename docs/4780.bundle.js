/*! For license information please see 4780.bundle.js.LICENSE.txt */
(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[4780],{645:(t,e)=>{e.read=function(t,e,i,r,n){var s,o,a=8*n-r-1,h=(1<<a)-1,u=h>>1,f=-7,p=i?n-1:0,d=i?-1:1,l=t[e+p];for(p+=d,s=l&(1<<-f)-1,l>>=-f,f+=a;f>0;s=256*s+t[e+p],p+=d,f-=8);for(o=s&(1<<-f)-1,s>>=-f,f+=r;f>0;o=256*o+t[e+p],p+=d,f-=8);if(0===s)s=1-u;else{if(s===h)return o?NaN:1/0*(l?-1:1);o+=Math.pow(2,r),s-=u}return(l?-1:1)*o*Math.pow(2,s-r)},e.write=function(t,e,i,r,n,s){var o,a,h,u=8*s-n-1,f=(1<<u)-1,p=f>>1,d=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,l=r?0:s-1,c=r?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=f):(o=Math.floor(Math.log(e)/Math.LN2),e*(h=Math.pow(2,-o))<1&&(o--,h*=2),(e+=o+p>=1?d/h:d*Math.pow(2,1-p))*h>=2&&(o++,h/=2),o+p>=f?(a=0,o=f):o+p>=1?(a=(e*h-1)*Math.pow(2,n),o+=p):(a=e*Math.pow(2,p-1)*Math.pow(2,n),o=0));n>=8;t[i+l]=255&a,l+=c,a/=256,n-=8);for(o=o<<n|a,u+=n;u>0;t[i+l]=255&o,l+=c,o/=256,u-=8);t[i+l-c]|=128*y}},8334:(t,e,i)=>{"use strict";i.d(e,{ZP:()=>a,fI:()=>h});var r=i(868),n=i(9179),s=i(3580),o=i(8672);const a=function(){function t(){this.dataProjection=null,this.defaultFeatureProjection=null}return t.prototype.getReadOptions=function(t,e){var i;if(e){var n=e.dataProjection?(0,o.U2)(e.dataProjection):this.readProjection(t);e.extent&&n&&n.getUnits()===r.Z.TILE_PIXELS&&(n=(0,o.U2)(n)).setWorldExtent(e.extent),i={dataProjection:n,featureProjection:e.featureProjection}}return this.adaptOptions(i)},t.prototype.adaptOptions=function(t){return(0,s.f0)({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection},t)},t.prototype.getType=function(){return(0,n.O3)()},t.prototype.readFeature=function(t,e){return(0,n.O3)()},t.prototype.readFeatures=function(t,e){return(0,n.O3)()},t.prototype.readGeometry=function(t,e){return(0,n.O3)()},t.prototype.readProjection=function(t){return(0,n.O3)()},t.prototype.writeFeature=function(t,e){return(0,n.O3)()},t.prototype.writeFeatures=function(t,e){return(0,n.O3)()},t.prototype.writeGeometry=function(t,e){return(0,n.O3)()},t}();function h(t,e,i){var r,n=i?(0,o.U2)(i.featureProjection):null,s=i?(0,o.U2)(i.dataProjection):null;if(r=n&&s&&!(0,o.OP)(n,s)?(e?t.clone():t).transform(e?n:s,e?s:n):t,e&&i&&void 0!==i.decimals){var a=Math.pow(10,i.decimals);r===t&&(r=t.clone()),r.applyTransform((function(t){for(var e=0,i=t.length;e<i;++e)t[e]=Math.round(t[e]*a)/a;return t}))}return r}},4780:(t,e,i)=>{"use strict";i.d(e,{Z:()=>j});var r=i(8334),n=i(4007),s=i(3696),o=i(8795),a=i(4538),h=i(5642),u=i(2329),f=i(3987),p=i(3614),d=i.n(p),l=i(2043),c=i(353),y=i(4183),w=i(2359),g=i(1915),v=i(9682),F=i(8529),_=i(8672),P=i(1422),b=i(2526),x=i(7882),V=(0,w.Ue)(),S=function(){function t(t,e,i,r,n){this.extent_,this.id_=n,this.type_=t,this.flatCoordinates_=e,this.flatInteriorPoints_=null,this.flatMidpoints_=null,this.ends_=i,this.properties_=r}return t.prototype.get=function(t){return this.properties_[t]},t.prototype.getExtent=function(){return this.extent_||(this.extent_=this.type_===o.Z.POINT?(0,g.HK)(this.flatCoordinates_):(0,g.GN)(this.flatCoordinates_,0,this.flatCoordinates_.length,2)),this.extent_},t.prototype.getFlatInteriorPoint=function(){if(!this.flatInteriorPoints_){var t=(0,g.qg)(this.getExtent());this.flatInteriorPoints_=(0,F.X)(this.flatCoordinates_,0,this.ends_,2,t,0)}return this.flatInteriorPoints_},t.prototype.getFlatInteriorPoints=function(){if(!this.flatInteriorPoints_){var t=(0,b.E)(this.flatCoordinates_,0,this.ends_,2);this.flatInteriorPoints_=(0,F.U)(this.flatCoordinates_,0,this.ends_,2,t)}return this.flatInteriorPoints_},t.prototype.getFlatMidpoint=function(){return this.flatMidpoints_||(this.flatMidpoints_=(0,P.WW)(this.flatCoordinates_,0,this.flatCoordinates_.length,2,.5)),this.flatMidpoints_},t.prototype.getFlatMidpoints=function(){if(!this.flatMidpoints_){this.flatMidpoints_=[];for(var t=this.flatCoordinates_,e=0,i=this.ends_,r=0,n=i.length;r<n;++r){var s=i[r],o=(0,P.WW)(t,e,s,2,.5);(0,v.l7)(this.flatMidpoints_,o),e=s}}return this.flatMidpoints_},t.prototype.getId=function(){return this.id_},t.prototype.getOrientedFlatCoordinates=function(){return this.flatCoordinates_},t.prototype.getGeometry=function(){return this},t.prototype.getSimplifiedGeometry=function(t){return this},t.prototype.simplifyTransformed=function(t,e){return this},t.prototype.getProperties=function(){return this.properties_},t.prototype.getStride=function(){return 2},t.prototype.getStyleFunction=function(){},t.prototype.getType=function(){return this.type_},t.prototype.transform=function(t){var e=(t=(0,_.U2)(t)).getExtent(),i=t.getWorldExtent();if(e&&i){var r=(0,g.Cr)(i)/(0,g.Cr)(e);(0,w.qC)(V,i[0],i[3],r,-r,0,0,0),(0,x.vT)(this.flatCoordinates_,0,this.flatCoordinates_.length,2,V,this.flatCoordinates_)}},t.prototype.getEnds=function(){return this.ends_},t}();S.prototype.getEndss=S.prototype.getEnds,S.prototype.getFlatCoordinates=S.prototype.getOrientedFlatCoordinates;const M=S;var m,T=i(868),B=i(8906),I=i(793),N=(m=function(t,e){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}m(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});function C(t,e,i){if(3===t){var r={keys:[],values:[],features:[]},n=i.readVarint()+i.pos;i.readFields(Z,r,n),r.length=r.features.length,r.length&&(e[r.name]=r)}}function Z(t,e,i){if(15===t)e.version=i.readVarint();else if(1===t)e.name=i.readString();else if(5===t)e.extent=i.readVarint();else if(2===t)e.features.push(i.pos);else if(3===t)e.keys.push(i.readString());else if(4===t){for(var r=null,n=i.readVarint()+i.pos;i.pos<n;)r=1==(t=i.readVarint()>>3)?i.readString():2===t?i.readFloat():3===t?i.readDouble():4===t?i.readVarint64():5===t?i.readVarint():6===t?i.readSVarint():7===t?i.readBoolean():null;e.values.push(r)}}function O(t,e,i){if(1==t)e.id=i.readVarint();else if(2==t)for(var r=i.readVarint()+i.pos;i.pos<r;){var n=e.layer.keys[i.readVarint()],s=e.layer.values[i.readVarint()];e.properties[n]=s}else 3==t?e.type=i.readVarint():4==t&&(e.geometry=i.pos)}function k(t,e,i){t.pos=e.features[i];var r=t.readVarint()+t.pos,n={layer:e,type:0,properties:{}};return t.readFields(O,n,r),n}const j=function(t){function e(e){var i=t.call(this)||this,r=e||{};return i.dataProjection=new y.Z({code:"",units:T.Z.TILE_PIXELS}),i.featureClass_=r.featureClass?r.featureClass:M,i.geometryName_=r.geometryName,i.layerName_=r.layerName?r.layerName:"layer",i.layers_=r.layers?r.layers:null,i.idProperty_=r.idProperty,i}return N(e,t),e.prototype.readRawGeometry_=function(t,e,i,r){t.pos=e.geometry;for(var n=t.readVarint()+t.pos,s=1,o=0,a=0,h=0,u=0,f=0;t.pos<n;){if(!o){var p=t.readVarint();s=7&p,o=p>>3}o--,1===s||2===s?(a+=t.readSVarint(),h+=t.readSVarint(),1===s&&u>f&&(r.push(u),f=u),i.push(a,h),u+=2):7===s?u>f&&(i.push(i[f],i[f+1]),u+=2):(0,B.h)(!1,59)}u>f&&(r.push(u),f=u)},e.prototype.createFeature_=function(t,e,i){var n,p=e.type;if(0===p)return null;var d,y=e.properties;this.idProperty_?(d=y[this.idProperty_],delete y[this.idProperty_]):d=e.id,y[this.layerName_]=e.layer.name;var w=[],g=[];this.readRawGeometry_(t,e,w,g);var v=function(t,e){var i;return 1===t?i=1===e?o.Z.POINT:o.Z.MULTI_POINT:2===t?i=1===e?o.Z.LINE_STRING:o.Z.MULTI_LINE_STRING:3===t&&(i=o.Z.POLYGON),i}(p,g.length);if(this.featureClass_===M)(n=new this.featureClass_(v,w,g,y,d)).transform(i.dataProjection);else{var F=void 0;if(v==o.Z.POLYGON){for(var _=[],P=0,b=0,x=0,V=g.length;x<V;++x){var S=g[x];if((0,I.bt)(w,P,S,2)){if(0===_.length)continue;_[_.length-1].push(g[b])}else _.push(g.slice(b,x+1));b=x+1,P=S}F=_.length>1?new f.Z(w,s.Z.XY,_):new c.ZP(w,s.Z.XY,g)}else F=v===o.Z.POINT?new l.Z(w,s.Z.XY):v===o.Z.LINE_STRING?new a.Z(w,s.Z.XY):v===o.Z.POLYGON?new c.ZP(w,s.Z.XY,g):v===o.Z.MULTI_POINT?new u.Z(w,s.Z.XY):v===o.Z.MULTI_LINE_STRING?new h.Z(w,s.Z.XY,g):null;n=new(0,this.featureClass_),this.geometryName_&&n.setGeometryName(this.geometryName_);var m=(0,r.fI)(F,!1,i);n.setGeometry(m),n.setId(d),n.setProperties(y,!0)}return n},e.prototype.getType=function(){return n.Z.ARRAY_BUFFER},e.prototype.readFeatures=function(t,e){var i=this.layers_,r=this.adaptOptions(e),n=(0,_.U2)(r.dataProjection);n.setWorldExtent(r.extent),r.dataProjection=n;var s=new(d())(t),o=s.readFields(C,{}),a=[];for(var h in o)if(!i||-1!=i.indexOf(h)){var u=o[h],f=u?[0,0,u.extent,u.extent]:null;n.setExtent(f);for(var p=0,l=u.length;p<l;++p){var c=k(s,u,p);a.push(this.createFeature_(s,c,r))}}return a},e.prototype.readProjection=function(t){return this.dataProjection},e.prototype.setLayers=function(t){this.layers_=t},e}(r.ZP)},3614:(t,e,i)=>{"use strict";t.exports=n;var r=i(645);function n(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}n.Varint=0,n.Fixed64=1,n.Bytes=2,n.Fixed32=5;var s=4294967296,o=1/s,a="undefined"==typeof TextDecoder?null:new TextDecoder("utf8");function h(t){return t.type===n.Bytes?t.readVarint()+t.pos:t.pos+1}function u(t,e,i){return i?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function f(t,e,i){var r=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2));i.realloc(r);for(var n=i.pos-1;n>=t;n--)i.buf[n+r]=i.buf[n]}function p(t,e){for(var i=0;i<t.length;i++)e.writeVarint(t[i])}function d(t,e){for(var i=0;i<t.length;i++)e.writeSVarint(t[i])}function l(t,e){for(var i=0;i<t.length;i++)e.writeFloat(t[i])}function c(t,e){for(var i=0;i<t.length;i++)e.writeDouble(t[i])}function y(t,e){for(var i=0;i<t.length;i++)e.writeBoolean(t[i])}function w(t,e){for(var i=0;i<t.length;i++)e.writeFixed32(t[i])}function g(t,e){for(var i=0;i<t.length;i++)e.writeSFixed32(t[i])}function v(t,e){for(var i=0;i<t.length;i++)e.writeFixed64(t[i])}function F(t,e){for(var i=0;i<t.length;i++)e.writeSFixed64(t[i])}function _(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function P(t,e,i){t[i]=e,t[i+1]=e>>>8,t[i+2]=e>>>16,t[i+3]=e>>>24}function b(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}n.prototype={destroy:function(){this.buf=null},readFields:function(t,e,i){for(i=i||this.length;this.pos<i;){var r=this.readVarint(),n=r>>3,s=this.pos;this.type=7&r,t(n,e,this),this.pos===s&&this.skip(r)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=_(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=b(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=_(this.buf,this.pos)+_(this.buf,this.pos+4)*s;return this.pos+=8,t},readSFixed64:function(){var t=_(this.buf,this.pos)+b(this.buf,this.pos+4)*s;return this.pos+=8,t},readFloat:function(){var t=r.read(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=r.read(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,i,r=this.buf;return e=127&(i=r[this.pos++]),i<128?e:(e|=(127&(i=r[this.pos++]))<<7,i<128?e:(e|=(127&(i=r[this.pos++]))<<14,i<128?e:(e|=(127&(i=r[this.pos++]))<<21,i<128?e:function(t,e,i){var r,n,s=i.buf;if(r=(112&(n=s[i.pos++]))>>4,n<128)return u(t,r,e);if(r|=(127&(n=s[i.pos++]))<<3,n<128)return u(t,r,e);if(r|=(127&(n=s[i.pos++]))<<10,n<128)return u(t,r,e);if(r|=(127&(n=s[i.pos++]))<<17,n<128)return u(t,r,e);if(r|=(127&(n=s[i.pos++]))<<24,n<128)return u(t,r,e);if(r|=(1&(n=s[i.pos++]))<<31,n<128)return u(t,r,e);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(i=r[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=12&&a?function(t,e,i){return a.decode(t.subarray(e,i))}(this.buf,e,t):function(t,e,i){for(var r="",n=e;n<i;){var s,o,a,h=t[n],u=null,f=h>239?4:h>223?3:h>191?2:1;if(n+f>i)break;1===f?h<128&&(u=h):2===f?128==(192&(s=t[n+1]))&&(u=(31&h)<<6|63&s)<=127&&(u=null):3===f?(s=t[n+1],o=t[n+2],128==(192&s)&&128==(192&o)&&((u=(15&h)<<12|(63&s)<<6|63&o)<=2047||u>=55296&&u<=57343)&&(u=null)):4===f&&(s=t[n+1],o=t[n+2],a=t[n+3],128==(192&s)&&128==(192&o)&&128==(192&a)&&((u=(15&h)<<18|(63&s)<<12|(63&o)<<6|63&a)<=65535||u>=1114112)&&(u=null)),null===u?(u=65533,f=1):u>65535&&(u-=65536,r+=String.fromCharCode(u>>>10&1023|55296),u=56320|1023&u),r+=String.fromCharCode(u),n+=f}return r}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==n.Bytes)return t.push(this.readVarint(e));var i=h(this);for(t=t||[];this.pos<i;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==n.Bytes)return t.push(this.readSVarint());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==n.Bytes)return t.push(this.readBoolean());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==n.Bytes)return t.push(this.readFloat());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==n.Bytes)return t.push(this.readDouble());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==n.Bytes)return t.push(this.readFixed32());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==n.Bytes)return t.push(this.readSFixed32());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==n.Bytes)return t.push(this.readFixed64());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==n.Bytes)return t.push(this.readSFixed64());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===n.Varint)for(;this.buf[this.pos++]>127;);else if(e===n.Bytes)this.pos=this.readVarint()+this.pos;else if(e===n.Fixed32)this.pos+=4;else{if(e!==n.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8}},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var i=new Uint8Array(e);i.set(this.buf),this.buf=i,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),P(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),P(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),P(this.buf,-1&t,this.pos),P(this.buf,Math.floor(t*o),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),P(this.buf,-1&t,this.pos),P(this.buf,Math.floor(t*o),this.pos+4),this.pos+=8},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var i,r;if(t>=0?(i=t%4294967296|0,r=t/4294967296|0):(r=~(-t/4294967296),4294967295^(i=~(-t%4294967296))?i=i+1|0:(i=0,r=r+1|0)),t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(t,e,i){i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos]=127&t}(i,0,e),function(t,e){var i=(7&t)<<4;e.buf[e.pos++]|=i|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t)))))}(r,e)}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(Boolean(t))},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(t,e,i){for(var r,n,s=0;s<e.length;s++){if((r=e.charCodeAt(s))>55295&&r<57344){if(!n){r>56319||s+1===e.length?(t[i++]=239,t[i++]=191,t[i++]=189):n=r;continue}if(r<56320){t[i++]=239,t[i++]=191,t[i++]=189,n=r;continue}r=n-55296<<10|r-56320|65536,n=null}else n&&(t[i++]=239,t[i++]=191,t[i++]=189,n=null);r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:(r<65536?t[i++]=r>>12|224:(t[i++]=r>>18|240,t[i++]=r>>12&63|128),t[i++]=r>>6&63|128),t[i++]=63&r|128)}return i}(this.buf,t,this.pos);var i=this.pos-e;i>=128&&f(e,i,this),this.pos=e-1,this.writeVarint(i),this.pos+=i},writeFloat:function(t){this.realloc(4),r.write(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),r.write(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var i=0;i<e;i++)this.buf[this.pos++]=t[i]},writeRawMessage:function(t,e){this.pos++;var i=this.pos;t(e,this);var r=this.pos-i;r>=128&&f(i,r,this),this.pos=i-1,this.writeVarint(r),this.pos+=r},writeMessage:function(t,e,i){this.writeTag(t,n.Bytes),this.writeRawMessage(e,i)},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,p,e)},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,d,e)},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,y,e)},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,l,e)},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,c,e)},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,w,e)},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,g,e)},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,v,e)},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,F,e)},writeBytesField:function(t,e){this.writeTag(t,n.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,n.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,n.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,n.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,n.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,n.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,n.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,n.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,n.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,n.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e))}}}}]);