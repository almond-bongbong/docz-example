(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/components/Preloader/Preloader.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),i=t("./node_modules/@mdx-js/tag/dist/index.js"),a=t("./node_modules/docz/dist/index.m.js"),c=t("./node_modules/styled-components/dist/styled-components.browser.esm.js");function s(){var e=p(["\n  position: relative;\n  \n  .loader {\n    display: block;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border: ","px solid transparent;\n    border-top-color: #ff69b4;\n    animation: ",' 2s linear infinite;\n  }\n  .loader:before {\n    content: "";\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    right: 2px;\n    bottom: 2px;\n    border-radius: 50%;\n    border: ',"px solid transparent;\n    border-top-color: #da032c;\n    animation: ",' 3s linear infinite;\n  }\n  .loader:after {\n    content: "";\n    position: absolute;\n    top: 6px;\n    left: 6px;\n    right: 6px;\n    bottom: 6px;\n    border-radius: 50%;\n    border: ',"px solid transparent;\n    border-top-color: #ff5071;\n    animation: "," 1.5s linear infinite;\n  }\n"]);return s=function(){return e},e}function l(){var e=p(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return l=function(){return e},e}function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var u=2,f=Object(c.c)(l()),d=c.b.div(s(),u,f,u,f,u,f),b=function(){return r.a.createElement(d,null,r.a.createElement("div",{className:"loader"}))},m=b;function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function g(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,n){return!n||"object"!==y(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,n){return(_=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}b.__docgenInfo={description:"",methods:[],displayName:"Preloader"},t.d(n,"default",function(){return x});var x=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=v(this,O(n).call(this,e))).layout=null,t}var t,o,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&_(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=h(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:n},r.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"preloader"}},"Preloader"),r.a.createElement(a.f,{of:m}),r.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic Usage"),r.a.createElement(a.e,{__position:1,__code:"<Preloader />",__scope:{props:this?this.props:t,Preloader:m}},r.a.createElement(m,null)))}}])&&g(t.prototype,o),c&&g(t,c),n}();x.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-components-preloader-preloader.db6ebbb836ab94718720.js.map