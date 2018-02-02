!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t){e.exports=React},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.Book=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n(6),i=n(7);n(8);var a=Object.assign(r.default,{Page:Object.assign(o.default,{Side:i.default})});t.default=a},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);n(5);var a=function(e){function t(t){var n=e.call(this,t)||this;return n.state={currentPage:0},n.handleClick=n.handleClick.bind(n),n.nextPage=n.nextPage.bind(n),n.previousPage=n.previousPage.bind(n),n}return o(t,e),t.prototype.componentDidMount=function(){var e=this.nodes.book;e.addEventListener("swipeleft",this.nextPage),e.addEventListener("swiperight",this.previousPage)},t.prototype.componentWillUnmount=function(){var e=this.nodes.book;e.removeEventListener("swipeleft",this.nextPage),e.removeEventListener("swiperight",this.previousPage)},t.prototype.handleClick=function(e){e.page<this.state.currentPage?this.previousPage():this.nextPage()},t.prototype.nextPage=function(){var e=this.state.currentPage;e!==this.props.children.length&&this.setState({currentPage:e+1})},t.prototype.previousPage=function(){0!==this.state.currentPage&&this.setState({currentPage:this.state.currentPage-1})},t.prototype.render=function(){var e=this,t=this.props,n=t.width,r=void 0===n?1080:n,o=t.height,a=void 0===o?640:o,s=t.children,u=this.state.currentPage;return i.createElement("div",{className:"book",style:{width:r,height:a},ref:function(t){return e.nodes.book=t}},i.createElement("div",{className:"book-wrapper"},i.Children.map(s,function(t,n){return i.cloneElement(t,{active:n===u,flipped:n<u,onClick:e.handleClick,page:n})})))},t}(i.Component);t.default=a},function(e,t){!function(e,t){if("function"!=typeof e.createEvent)return!1;var n,r,o,i,a,s,u,c,p,f=function(e){var t=e.toLowerCase(),n="MS"+e;return navigator.msPointerEnabled?n:!!window.PointerEvent&&t},l=function(e){return"on"+e in window&&e},d={useJquery:!t.IGNORE_JQUERY&&"undefined"!=typeof jQuery,swipeThreshold:t.SWIPE_THRESHOLD||100,tapThreshold:t.TAP_THRESHOLD||150,dbltapThreshold:t.DBL_TAP_THRESHOLD||200,longtapThreshold:t.LONG_TAP_THRESHOLD||1e3,tapPrecision:t.TAP_PRECISION/2||30,justTouchEvents:t.JUST_ON_TOUCH_DEVICES},h=!1,v=l("touchstart")||f("PointerDown"),g=l("touchend")||f("PointerUp"),b=l("touchmove")||f("PointerMove"),y=function(e){return!e.pointerId||void 0===n||e.pointerId===n},m=function(e,t,n){for(var r=t.split(" "),o=r.length;o--;)e.addEventListener(r[o],n,!1)},w=function(e){return e.targetTouches?e.targetTouches[0]:e},_=function(){return(new Date).getTime()},P=function(t,n,i,a){var s=e.createEvent("Event");if(s.originalEvent=i,(a=a||{}).x=r,a.y=o,a.distance=a.distance,d.useJquery&&(s=jQuery.Event(n,{originalEvent:i}),jQuery(t).trigger(s,a)),s.initEvent){for(var u in a)s[u]=a[u];s.initEvent(n,!0,!0),t.dispatchEvent(s)}for(;t;)t["on"+n]&&t["on"+n](s),t=t.parentNode},E=0;m(e,v+(d.justTouchEvents?"":" mousedown"),function(e){if(y(e)&&(n=e.pointerId,"mousedown"!==e.type&&(h=!0),"mousedown"!==e.type||!h)){var t=w(e);i=r=t.pageX,a=o=t.pageY,p=setTimeout(function(){P(e.target,"longtap",e),u=e.target},d.longtapThreshold),s=_(),E++}}),m(e,g+(d.justTouchEvents?"":" mouseup"),function(e){if(y(e))if(n=void 0,"mouseup"===e.type&&h)h=!1;else{var t=[],f=_(),l=a-o,v=i-r;if(clearTimeout(c),clearTimeout(p),v<=-d.swipeThreshold&&t.push("swiperight"),v>=d.swipeThreshold&&t.push("swipeleft"),l<=-d.swipeThreshold&&t.push("swipedown"),l>=d.swipeThreshold&&t.push("swipeup"),t.length){for(var g=0;g<t.length;g++){var b=t[g];P(e.target,b,e,{distance:{x:Math.abs(v),y:Math.abs(l)}})}E=0}else i>=r-d.tapPrecision&&i<=r+d.tapPrecision&&a>=o-d.tapPrecision&&a<=o+d.tapPrecision&&s+d.tapThreshold-f>=0&&(P(e.target,E>=2&&u===e.target?"dbltap":"tap",e),u=e.target),c=setTimeout(function(){E=0},d.dbltapThreshold)}}),m(e,b+(d.justTouchEvents?"":" mousemove"),function(e){if(y(e)&&("mousemove"!==e.type||!h)){var t=w(e);r=t.pageX,o=t.pageY}}),t.tocca=function(e){for(var t in e)d[t]=e[t];return d}}(document,window)},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){function t(t){var n=e.call(this,t)||this;return n.handleClick=n.handleClick.bind(n),n}return o(t,e),t.prototype.handleClick=function(){var e=this.props,t=e.page;e.active;(0,e.onClick)({page:t})},t.prototype.render=function(){var e=this.props,t=e.active,n=e.flipped,r=e.children;return i.createElement("div",{className:"book-wrapper-page"+(t?" is-active":"")+(n?" is-flipped":""),onClick:this.handleClick},i.Children.map(r,function(e,t){return i.cloneElement(e,{side:t%2==0?"front":"back"})}))},t}(i.Component);t.default=a},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.side,n=e.children;return i.createElement("div",{className:"book-wrapper-page-side book-wrapper-page-side--"+t},n)},t}(i.Component);t.default=a},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0};n(11)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".book {\r\n  perspective: 2000px;\r\n}\r\n\r\n  .book-wrapper {\r\n    position: relative;\r\n    transform-style: preserve-3d;\r\n\r\n    width: 50%;\r\n    height: 100%;\r\n\r\n    margin-left: 50%;\r\n  }\r\n\r\n    .book-wrapper-page {\r\n      position: absolute;\r\n      width: 100%;\r\n      height: 100%;\r\n\r\n      cursor: pointer;\r\n\r\n      transform-style: preserve-3d;\r\n      transform-origin: left center;\r\n\r\n      transition-property: transform;\r\n      transition-duration: 1000ms;\r\n      transition-timing-function: cubic-bezier(.4, .37, .15, .98);\r\n    }\r\n\r\n    .book-wrapper-page.is-active {\r\n      z-index: 1;\r\n    }\r\n\r\n    .book-wrapper-page.is-flipped {\r\n      transform: rotate3d(0, 1, 0, -180deg);\r\n    }\r\n\r\n    .book-wrapper-page.book-wrapper-page.is-flipped:last-of-type {\r\n      z-index: 1;\r\n    }\r\n\r\n      .book-wrapper-page-side {\r\n        position: absolute;\r\n\r\n        width: 100%;\r\n        height: 100%;\r\n\r\n        background: linear-gradient(to bottom right, #fff, #ccc);\r\n\r\n        box-sizing: border-box;\r\n        backface-visibility: hidden;\r\n      }\r\n\r\n      .book-wrapper-page-side--back {\r\n        transform: rotate3d(0, 1, 0, 180deg);\r\n      }",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e){if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),u=null,c=0,p=[],f=n(12);function l(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),p.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);t>=0&&p.splice(t,1)}function g(e){var t=document.createElement("style");return e.attrs.type="text/css",b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=c++;n=u||(u=g(t)),r=_.bind(null,n,a,!1),o=_.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return l(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&l(d(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}};var m,w=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function _(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);