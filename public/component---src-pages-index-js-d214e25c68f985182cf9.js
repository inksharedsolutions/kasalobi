/*! For license information please see component---src-pages-index-js-d214e25c68f985182cf9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0a4Y":function(e,t,n){"use strict";n("q1tI")},"P+8r":function(e,t,n){"use strict";(function(e){var r=n("q1tI"),a=void 0!==e&&e.navigator&&"ReactNative"===e.navigator.product,o="undefined"!=typeof document;t.a=o||a?r.useLayoutEffect:r.useEffect}).call(this,n("yLpj"))},"P/Gh":function(e,t,n){e.exports=n.p+"static/book-min-fcdf57315f3202e4fc6a7c6235e5b322.png"},QSOs:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("LjBS"),c=n.n(i);t.a=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(!1),i=n[0],l=n[1],u=["Home","About-the-Author","About-the-Book","Contact"].map((function(e){var t=e.replace(/[ /]/g,"-").trim().toLowerCase(),n="home"===t?"/":"/"+t;return a.a.createElement("li",null,a.a.createElement(o.Link,{to:n},e.replace(/[-/]/g," ").trim()))})),s=function(e){l(!i)};return a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:"navigation"},a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/about-the-author"},"About the Author")),a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/"},a.a.createElement("img",{alt:"author-logo",src:c.a}))),a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/about-the-book"},"About the Book")),a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/contact"},"Contact"))),a.a.createElement("nav",{className:"burger-nav"},a.a.createElement("h1",null,a.a.createElement(o.Link,{style:"/"===e.pathExt||""===e.pathExt?{color:"rgb(255, 202, 0)"}:{color:"#000"},to:"/"},a.a.createElement("img",{className:"logo-img",src:c.a,alt:"logo"}))),a.a.createElement("ul",{className:"hamburger-ul",onClick:function(e){return s()},ref:t},a.a.createElement("span",{className:"hamburger-span"}),a.a.createElement("span",{className:"hamburger-span"})),a.a.createElement("section",{className:i?"active-nav":"non-active-nav"},a.a.createElement("span",{className:"close-mark",onClick:function(e){return s()}},a.a.createElement("span",{className:"hamburger-x-mark"}),a.a.createElement("span",{className:"hamburger-x-mark"})),a.a.createElement("ul",null,a.a.createElement("p",{class:"list-label"},"Navigations"),u))))}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("qhky");function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=n("BsWD");function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(l){c=!0,a=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function s(e,t){if(null==e)return{};var n,r,a=u(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function d(e){var t=f(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var m=function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)};function p(e){var t,n,a=(t=e,(n=Object(r.useRef)(t)).current=t,n);Object(r.useEffect)((function(){return function(){return a.current()}}),[])}var b=Math.pow(2,31)-1;function v(){var e=function(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=Object(r.useRef)();return p((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=b?t.current=setTimeout(r,a):function e(t,n,r){var a=r-Date.now();t.current=a<=b?setTimeout(n,a):setTimeout((function(){return e(t,n,r)}),b)}(t,r,Date.now()+a))},clear:n}}),[])}var E=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function h(e){var t=E(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}n("0a4Y");n("P+8r"),new WeakMap;var g=n("nKUr"),O=["as","disabled"];function y(e){var t=e.tagName,n=e.disabled,r=e.href,a=e.target,o=e.rel,i=e.onClick,c=e.tabIndex,l=void 0===c?0:c,u=e.type;t||(t=null!=r||null!=a||null!=o?"a":"button");var s={tagName:t};if("button"===t)return[{type:u||"button",disabled:n},s];var f=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==i||i(e)};return[{role:"button",disabled:void 0,tabIndex:n?void 0:l,href:"a"===t&&n?void 0:r,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?o:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},s]}var j=r.forwardRef((function(e,t){var n=e.as,r=e.disabled,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,O),o=l(y(Object.assign({tagName:n,disabled:r},a)),2),i=o[0],c=o[1].tagName;return Object(g.jsx)(c,Object.assign({},a,i,{ref:t}))}));j.displayName="Button";var x=["onKeyDown"];var w=r.forwardRef((function(e,t){var n,r=e.onKeyDown,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,x),o=l(y(Object.assign({tagName:"a"},a)),1)[0],i=h((function(e){o.onKeyDown(e),null==r||r(e)}));return((n=a.href)&&"#"!==n.trim()||a.role)&&"button"!==a.role?Object(g.jsx)("a",Object.assign({ref:t},a,{onKeyDown:r})):Object(g.jsx)("a",Object.assign({ref:t},a,o,{onKeyDown:i}))}));w.displayName="Anchor";var k=w,N=n("TSYQ"),S=n.n(N);n("E9XD");function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n("QLaP");function P(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function D(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function T(e,t){return Object.keys(t).reduce((function(n,a){var o,i=n,c=i[P(a)],l=i[a],s=u(i,[P(a),a].map(D)),f=t[a],d=function(e,t,n){var a=Object(r.useRef)(void 0!==e),o=Object(r.useState)(t),i=o[0],c=o[1],l=void 0!==e,u=a.current;return a.current=l,!l&&u&&i!==t&&c(t),[l?e:i,Object(r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(l,c,e[f]),m=d[0],p=d[1];return C({},s,((o={})[a]=m,o[f]=p,o))}),e)}var L=n("dI71");n("94VI");var R=/-(.)/g;var I=r.createContext({prefixes:{}});I.Consumer,I.Provider;function M(e,t){var n=Object(r.useContext)(I).prefixes;return e||n[t]||t}var A=["className","bsPrefix","as"];function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){return e[0].toUpperCase()+(t=e,t.replace(R,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,a=void 0===n?B(e):n,o=t.Component,i=t.defaultProps,c=r.forwardRef((function(t,n){var r=t.className,a=t.bsPrefix,i=t.as,c=void 0===i?o||"div":i,l=s(t,A),u=M(a,e);return Object(g.jsx)(c,q({ref:n,className:S()(r,u)},l))}));return c.defaultProps=i,c.displayName=a,c}("carousel-caption"),U=["as","bsPrefix","className"];function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=r.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,a=e.bsPrefix,o=e.className,i=s(e,U),c=S()(o,M(a,"carousel-item"));return Object(g.jsx)(r,z(z({ref:t},i),{},{className:c}))}));H.displayName="CarouselItem";var W=H;function X(e,t){var n=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?t(e,n++):e}))}var Y=n("dZvc");function _(e,t){return function(e){var t=Object(Y.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var Q=/([A-Z])/g;var J=/^ms-/;function Z(e){return function(e){return e.replace(Q,"-$1").toLowerCase()}(e).replace(J,"-ms-")}var G=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var $=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(Z(t))||_(e).getPropertyValue(Z(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!G.test(e))}(a)?n+=Z(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(Z(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},ee=n("SJxq"),te=!1,ne=!1;try{var re={get passive(){return te=!0},get once(){return ne=te=!0}};ee.a&&(window.addEventListener("test",re,re),window.removeEventListener("test",re,!0))}catch(Ge){}var ae=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!ne){var a=r.once,o=r.capture,i=n;!ne&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,te?r:o)}e.addEventListener(t,n,r)};var oe=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var ie=function(e,t,n,r){return ae(e,t,n,r),function(){oe(e,t,n,r)}};function ce(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}(e,"transitionend",!0)}),t+n),o=ie(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function le(e,t,n,r){var a,o;null==n&&(a=$(e,"transitionDuration")||"",o=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*o||0);var i=ce(e,n,r),c=ie(e,"transitionend",t);return function(){i(),c()}}function ue(e,t){var n=$(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function se(e,t){var n=ue(e,"transitionDuration"),r=ue(e,"transitionDelay"),a=le(e,(function(n){n.target===e&&(a(),t(n))}),n+r)}var fe=n("i8i4"),de=n.n(fe),me=!1,pe=a.a.createContext(null),be=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(L.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[de.a.findDOMNode(this),r],o=a[0],i=a[1],c=this.getTimeouts(),l=r?c.appear:c.enter;!e&&!n||me?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,i),t.onTransitionEnd(l,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:de.a.findDOMNode(this);t&&!me?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:de.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,u(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(pe.Provider,{value:null},"function"==typeof n?n(e,r):a.a.cloneElement(a.a.Children.only(n),r))},t}(a.a.Component);function ve(){}be.contextType=pe,be.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ve,onEntering:ve,onEntered:ve,onExit:ve,onExiting:ve,onExited:ve},be.UNMOUNTED="unmounted",be.EXITED="exited",be.ENTERING="entering",be.ENTERED="entered",be.EXITING="exiting";var Ee=be,he=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var ge=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=he(e),r=he(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};var Oe=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"];function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xe=a.a.forwardRef((function(e,t){var n=e.onEnter,o=e.onEntering,i=e.onEntered,c=e.onExit,l=e.onExiting,u=e.onExited,f=e.addEndListener,d=e.children,m=e.childRef,p=s(e,Oe),b=Object(r.useRef)(null),v=ge(b,m),E=function(e){var t;v((t=e)&&"setState"in t?de.a.findDOMNode(t):null!=t?t:null)},h=function(e){return function(t){e&&b.current&&e(b.current,t)}},O=Object(r.useCallback)(h(n),[n]),y=Object(r.useCallback)(h(o),[o]),j=Object(r.useCallback)(h(i),[i]),x=Object(r.useCallback)(h(c),[c]),w=Object(r.useCallback)(h(l),[l]),k=Object(r.useCallback)(h(u),[u]),N=Object(r.useCallback)(h(f),[f]);return Object(g.jsx)(Ee,je(je({ref:t},p),{},{onEnter:O,onEntered:j,onEntering:y,onExit:x,onExited:k,onExiting:w,addEndListener:N,nodeRef:b,children:"function"==typeof d?function(e,t){return d(e,je(je({},t),{},{ref:E}))}:a.a.cloneElement(d,{ref:E})}))})),we=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Se={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:Object(g.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:Object(g.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var Ce=r.forwardRef((function(e,t){var n=T(e,{activeIndex:"onSelect"}),a=n.as,o=void 0===a?"div":a,i=n.bsPrefix,c=n.slide,u=n.fade,p=n.controls,b=n.indicators,E=n.indicatorLabels,h=n.activeIndex,O=n.onSelect,y=n.onSlide,j=n.onSlid,x=n.interval,w=n.keyboard,N=n.onKeyDown,C=n.pause,P=n.onMouseOver,D=n.onMouseOut,L=n.wrap,R=n.touch,A=n.onTouchStart,F=n.onTouchMove,q=n.onTouchEnd,B=n.prevIcon,K=n.prevLabel,U=n.nextIcon,V=n.nextLabel,z=n.variant,H=n.className,W=n.children,Y=s(n,we),_=M(i,"carousel"),Q="rtl"===Object(r.useContext)(I).dir,J=Object(r.useRef)(null),Z=l(Object(r.useState)("next"),2),G=Z[0],$=Z[1],ee=l(Object(r.useState)(!1),2),te=ee[0],ne=ee[1],re=l(Object(r.useState)(!1),2),ae=re[0],oe=re[1],ie=l(Object(r.useState)(h||0),2),ce=ie[0],le=ie[1];ae||h===ce||(J.current?$(J.current):$((h||0)>ce?"next":"prev"),c&&oe(!0),le(h||0)),Object(r.useEffect)((function(){J.current&&(J.current=null)}));var ue,fe=0;!function(e,t){var n=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&t(e,n++)}))}(W,(function(e,t){++fe,t===h&&(ue=e.props.interval)}));var de=f(ue),me=Object(r.useCallback)((function(e){if(!ae){var t=ce-1;if(t<0){if(!L)return;t=fe-1}J.current="prev",null==O||O(t,e)}}),[ae,ce,O,L,fe]),pe=d((function(e){if(!ae){var t=ce+1;if(t>=fe){if(!L)return;t=0}J.current="next",null==O||O(t,e)}})),be=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:be.current,prev:me,next:pe}}));var ve=d((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(be.current)&&(Q?me():pe())})),Ee="next"===G?"start":"end";m((function(){c||(null==y||y(ce,Ee),null==j||j(ce,Ee))}),[ce]);var he="".concat(_,"-item-").concat(G),ge="".concat(_,"-item-").concat(Ee),Oe=Object(r.useCallback)((function(e){!function(e){e.offsetHeight}(e),null==y||y(ce,Ee)}),[y,ce,Ee]),ye=Object(r.useCallback)((function(){oe(!1),null==j||j(ce,Ee)}),[j,ce,Ee]),je=Object(r.useCallback)((function(e){if(w&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(Q?pe(e):me(e));case"ArrowRight":return e.preventDefault(),void(Q?me(e):pe(e))}null==N||N(e)}),[w,N,me,pe,Q]),ke=Object(r.useCallback)((function(e){"hover"===C&&ne(!0),null==P||P(e)}),[C,P]),Se=Object(r.useCallback)((function(e){ne(!1),null==D||D(e)}),[D]),Ce=Object(r.useRef)(0),Pe=Object(r.useRef)(0),De=v(),Te=Object(r.useCallback)((function(e){Ce.current=e.touches[0].clientX,Pe.current=0,"hover"===C&&ne(!0),null==A||A(e)}),[C,A]),Le=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?Pe.current=0:Pe.current=e.touches[0].clientX-Ce.current,null==F||F(e)}),[F]),Re=Object(r.useCallback)((function(e){if(R){var t=Pe.current;Math.abs(t)>40&&(t>0?me(e):pe(e))}"hover"===C&&De.set((function(){ne(!1)}),x||void 0),null==q||q(e)}),[R,C,me,pe,De,x,q]),Ie=null!=x&&!te&&!ae,Me=Object(r.useRef)();Object(r.useEffect)((function(){var e,t;if(Ie){var n=Q?me:pe;return Me.current=window.setInterval(document.visibilityState?ve:n,null!=(e=null!=(t=de.current)?t:x)?e:void 0),function(){null!==Me.current&&clearInterval(Me.current)}}}),[Ie,me,pe,de,x,ve,Q]);var Ae=Object(r.useMemo)((function(){return b&&Array.from({length:fe},(function(e,t){return function(e){null==O||O(t,e)}}))}),[b,fe,O]);return Object(g.jsxs)(o,Ne(Ne({ref:be},Y),{},{onKeyDown:je,onMouseOver:ke,onMouseOut:Se,onTouchStart:Te,onTouchMove:Le,onTouchEnd:Re,className:S()(H,_,c&&"slide",u&&"".concat(_,"-fade"),z&&"".concat(_,"-").concat(z)),children:[b&&Object(g.jsx)("div",{className:"".concat(_,"-indicators"),children:X(W,(function(e,t){return Object(g.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=E&&E.length?E[t]:"Slide ".concat(t+1),className:t===ce?"active":void 0,onClick:Ae?Ae[t]:void 0,"aria-current":t===ce},t)}))}),Object(g.jsx)("div",{className:"".concat(_,"-inner"),children:X(W,(function(e,t){var n=t===ce;return c?Object(g.jsx)(xe,{in:n,onEnter:n?Oe:void 0,onEntered:n?ye:void 0,addEndListener:se,children:function(t,a){return r.cloneElement(e,Ne(Ne({},a),{},{className:S()(e.props.className,n&&"entered"!==t&&he,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&ge)}))}}):r.cloneElement(e,{className:S()(e.props.className,n&&"active")})}))}),p&&Object(g.jsxs)(g.Fragment,{children:[(L||0!==h)&&Object(g.jsxs)(k,{className:"".concat(_,"-control-prev"),onClick:me,children:[B,K&&Object(g.jsx)("span",{className:"visually-hidden",children:K})]}),(L||h!==fe-1)&&Object(g.jsxs)(k,{className:"".concat(_,"-control-next"),onClick:pe,children:[U,V&&Object(g.jsx)("span",{className:"visually-hidden",children:V})]})]})]}))}));Ce.displayName="Carousel",Ce.defaultProps=Se;var Pe=Object.assign(Ce,{Caption:K,Item:W}),De=(n("q4sD"),n("oqTY")),Te=n.n(De),Le=n("tCRZ"),Re=n.n(Le),Ie=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Pe,{fade:!0},a.a.createElement(Pe.Item,null,a.a.createElement("img",{src:Te.a,alt:"First slide"})),a.a.createElement(Pe.Item,null,a.a.createElement("img",{src:Re.a,alt:"Second slide"}))))},Me=n("Bl7J"),Ae=n("QSOs"),Fe=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"banner-section"},a.a.createElement("div",{className:"container-gt"},a.a.createElement("div",{className:"one-grid-columns"},a.a.createElement("div",{className:"grid-child-elem"},a.a.createElement("div",{className:"banner-text"},a.a.createElement("h1",null,"A True Heart ",a.a.createElement("br",null),a.a.createElement("span",null,"-Wrenching Story ",a.a.createElement("br",null))," About Victory… Forfeited!")))))))},qe=n("Wbzz"),Be=n("P/Gh"),Ke=n.n(Be),Ue=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"upper-main"},a.a.createElement("div",{className:"container-gt separator-line"},a.a.createElement("div",{className:"grid-two-columns",id:"wrapper-two-books"},a.a.createElement("div",{className:"book-wraps"},a.a.createElement("img",{src:Ke.a,alt:"book-img"})),a.a.createElement("div",{className:"content-wraps"},a.a.createElement("span",{className:"italic-tag"},"Read, listen, and learn in various formats"),a.a.createElement("h1",{className:"heading--featured"},a.a.createElement("span",null,"Featured"),a.a.createElement("span",null,"Book")),a.a.createElement("p",null,"Earl “Dusty” Trimmer relates with both skill and personal experience events surrounding our most forgetable and misunderstood war in America’s history. He brings it all home with his down-to-earth style considerable knowledge and a ton of research."),a.a.createElement("button",{className:"btn-book-featured"},a.a.createElement(qe.Link,{to:"/about-the-book"},"Read More")))))))},Ve=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"upper-main",id:"main-upper-author"},a.a.createElement("div",{className:"grid-two-columns"},a.a.createElement("div",{className:"grid-child",id:"author-contents"},a.a.createElement("p",null,"Many of us who were combat soldiers or marines in the Vietnam War still consider themselves as soldiers.  I served during what has been referred to as the “bloody years” of 1968-69.  Actually 1968 alone owns the title.  I am not a college graduate, but I ground out seven and a half years of college classes day and evening, at four different universities — majoring in nothing, and working full time while attending evening classes, . . . just like an infantry “grunt” did in Vietnam.  I was working almost 24-7 before and after Vietnam service."),a.a.createElement("button",{className:"btn-book-featured-red"},a.a.createElement(qe.Link,{to:"/about-the-author"},"Read More")),a.a.createElement("h1",{className:"author-name-tag"},a.a.createElement("span",null),a.a.createElement("span",null,'Earl "Dusty" Trimmer')),a.a.createElement("span",{className:"author-tagline"},"Author & Writer")),a.a.createElement("div",{className:"group-sec"},a.a.createElement("div",{className:"flex"},a.a.createElement("div",{className:"ml-15"},a.a.createElement(Ie,null)),a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("span",null,"  Dusty Trimmer ")," - Combat Infantry, ",a.a.createElement("span",null,"  John Bellemy ")," - Combat Engineer, ",a.a.createElement("span",null,"  Tom Gretsko ")," - Army Ranger.",a.a.createElement("br",null),"All reserved with the 25th Infantry Division 1968-1970.")))))))},ze=n("miiQ"),He=n.n(ze),We=n("lcIz"),Xe=n.n(We),Ye=n("ucjU"),_e=n.n(Ye),Qe=n("lwbg"),Je=n.n(Qe),Ze=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"mid-main"},a.a.createElement("div",{className:"container-gt separator-line"},a.a.createElement("h1",null,"Featured"),a.a.createElement("p",{className:"middle-params"},'Earl "Dusty" Trimmer  has been featured numerous times on...'),a.a.createElement("div",{className:"grid-template-four-col",id:"logos-col"},a.a.createElement("li",null,a.a.createElement("img",{src:He.a,alt:"amazon-logo"})),a.a.createElement("li",null,a.a.createElement("img",{src:Xe.a,alt:"bam-logo"})),a.a.createElement("li",null,a.a.createElement("img",{src:_e.a,alt:"b-and-n-logo"})),a.a.createElement("li",null,a.a.createElement("img",{src:Je.a,alt:"stratton-logo"}))))))};t.default=function(e){return a.a.createElement(Me.a,null,a.a.createElement(o.a,{title:'Home | Earl "Dusty" Trimmer '}),a.a.createElement(Ae.a,{pathExt:e.path}),a.a.createElement(Fe,null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(Ue,null),a.a.createElement(Ve,null),a.a.createElement(Ze,null))}},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},lcIz:function(e,t,n){e.exports=n.p+"static/bam-ec9be395bbd5faaef12d3454df6f02fa.png"},lwbg:function(e,t,n){e.exports=n.p+"static/stratton-logo-eb5aa58559551e375b60208cbaa9695d.png"},miiQ:function(e,t,n){e.exports=n.p+"static/amazon-b98e976e2b39b0a22f1bcc9e9ee48f1f.png"},oqTY:function(e,t,n){e.exports=n.p+"static/Dusty trimmer-461adc02a1a5e152b459cd20df46ca66.png"},tCRZ:function(e,t,n){e.exports=n.p+"static/home-picture-5c9386a6b0ac1910e0cbf7d487e99e3a.jpg"},ucjU:function(e,t,n){e.exports=n.p+"static/Barnes-and-noble-booksellers-logo-34f85772a9aa5536e6f69c4310a6249e.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-d214e25c68f985182cf9.js.map