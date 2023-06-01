// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Math.fround?Math.fround:null,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString,o=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"",u=r()?function(t){var e,r,u,a,l;if(null==t)return n.call(t);r=t[i],l=i,e=null!=(a=t)&&o.call(a,l);try{t[i]=void 0}catch(e){return n.call(t)}return u=n.call(t),e?t[i]=r:delete t[i],u}:function(t){return n.call(t)},a="function"==typeof Float32Array,l=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null,f="function"==typeof Float32Array?Float32Array:void 0,p=new(function(){var t,e,r;if("function"!=typeof c)return!1;try{e=new c([1,3.14,-3.14,5e40]),r=e,t=(a&&r instanceof Float32Array||"[object Float32Array]"===u(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===l}catch(e){t=!1}return t}()?f:function(){throw new Error("not implemented")})(1),y="function"==typeof t?t:function(t){return p[0]=t,p[0]},b="function"==typeof Object.defineProperty?Object.defineProperty:null,m=Object.defineProperty,s=Object.prototype,d=s.toString,_=s.__defineGetter__,h=s.__defineSetter__,v=s.__lookupGetter__,w=s.__lookupSetter__,g=function(){try{return b({},"x",{}),!0}catch(t){return!1}}()?m:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===d.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===d.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(v.call(t,e)||w.call(t,e)?(n=t.__proto__,t.__proto__=s,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&_&&_.call(t,e,r.get),u&&h&&h.call(t,e,r.set),t};function E(t,e,r){g(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function j(t){return"number"==typeof t}var S=Number,T=S.prototype.toString,O=r();function A(t){return"object"==typeof t&&(t instanceof S||(O?function(t){try{return T.call(t),!0}catch(t){return!1}}(t):"[object Number]"===u(t)))}function F(t){return j(t)||A(t)}function P(t,e){if(!(this instanceof P))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!j(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!j(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return g(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:y(t)}),g(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:y(e)}),this}function N(t){return t.re}function I(t){return t.im}return E(F,"isPrimitive",j),E(F,"isObject",A),E(P,"BYTES_PER_ELEMENT",4),E(P.prototype,"BYTES_PER_ELEMENT",4),E(P.prototype,"byteLength",8),E(P.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),E(P.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t})),function(t,e){return new P(y(N(t)-N(e)),y(I(t)-I(e)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).csubf=e();
//# sourceMappingURL=browser.js.map
