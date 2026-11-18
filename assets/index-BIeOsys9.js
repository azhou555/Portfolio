var bd=Object.defineProperty;var Td=(e,n,t)=>n in e?bd(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var x=(e,n,t)=>Td(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Nd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xa={exports:{}},Ni={},Ja={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),Pd=Symbol.for("react.portal"),Rd=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),Id=Symbol.for("react.profiler"),jd=Symbol.for("react.provider"),Ad=Symbol.for("react.context"),zd=Symbol.for("react.forward_ref"),Md=Symbol.for("react.suspense"),Dd=Symbol.for("react.memo"),Od=Symbol.for("react.lazy"),bl=Symbol.iterator;function Fd(e){return e===null||typeof e!="object"?null:(e=bl&&e[bl]||e["@@iterator"],typeof e=="function"?e:null)}var Za={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eu=Object.assign,nu={};function xt(e,n,t){this.props=e,this.context=n,this.refs=nu,this.updater=t||Za}xt.prototype.isReactComponent={};xt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};xt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tu(){}tu.prototype=xt.prototype;function So(e,n,t){this.props=e,this.context=n,this.refs=nu,this.updater=t||Za}var xo=So.prototype=new tu;xo.constructor=So;eu(xo,xt.prototype);xo.isPureReactComponent=!0;var Tl=Array.isArray,ru=Object.prototype.hasOwnProperty,Eo={current:null},iu={key:!0,ref:!0,__self:!0,__source:!0};function su(e,n,t){var r,i={},s=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(s=""+n.key),n)ru.call(n,r)&&!iu.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fr,type:e,key:s,ref:o,props:i,_owner:Eo.current}}function $d(e,n){return{$$typeof:fr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function _o(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function Bd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Nl=/\/+/g;function Yi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Bd(""+e.key):n.toString(36)}function Br(e,n,t,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fr:case Pd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Yi(o,0):r,Tl(i)?(t="",e!=null&&(t=e.replace(Nl,"$&/")+"/"),Br(i,n,t,"",function(u){return u})):i!=null&&(_o(i)&&(i=$d(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nl,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Tl(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Yi(s,a);o+=Br(s,n,t,l,i)}else if(l=Fd(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Yi(s,a++),o+=Br(s,n,t,l,i);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function xr(e,n,t){if(e==null)return e;var r=[],i=0;return Br(e,r,"","",function(s){return n.call(t,s,i++)}),r}function Ud(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Ur={transition:null},Hd={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Ur,ReactCurrentOwner:Eo};function ou(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:xr,forEach:function(e,n,t){xr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return xr(e,function(){n++}),n},toArray:function(e){return xr(e,function(n){return n})||[]},only:function(e){if(!_o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=xt;j.Fragment=Rd;j.Profiler=Id;j.PureComponent=So;j.StrictMode=Ld;j.Suspense=Md;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hd;j.act=ou;j.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=eu({},e.props),i=e.key,s=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,o=Eo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in n)ru.call(n,l)&&!iu.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&a!==void 0?a[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fr,type:e.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:Ad,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jd,_context:e},e.Consumer=e};j.createElement=su;j.createFactory=function(e){var n=su.bind(null,e);return n.type=e,n};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:zd,render:e}};j.isValidElement=_o;j.lazy=function(e){return{$$typeof:Od,_payload:{_status:-1,_result:e},_init:Ud}};j.memo=function(e,n){return{$$typeof:Dd,type:e,compare:n===void 0?null:n}};j.startTransition=function(e){var n=Ur.transition;Ur.transition={};try{e()}finally{Ur.transition=n}};j.unstable_act=ou;j.useCallback=function(e,n){return pe.current.useCallback(e,n)};j.useContext=function(e){return pe.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};j.useEffect=function(e,n){return pe.current.useEffect(e,n)};j.useId=function(){return pe.current.useId()};j.useImperativeHandle=function(e,n,t){return pe.current.useImperativeHandle(e,n,t)};j.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};j.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};j.useMemo=function(e,n){return pe.current.useMemo(e,n)};j.useReducer=function(e,n,t){return pe.current.useReducer(e,n,t)};j.useRef=function(e){return pe.current.useRef(e)};j.useState=function(e){return pe.current.useState(e)};j.useSyncExternalStore=function(e,n,t){return pe.current.useSyncExternalStore(e,n,t)};j.useTransition=function(){return pe.current.useTransition()};j.version="18.3.1";Ja.exports=j;var M=Ja.exports;const Wd=Nd(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd=M,Qd=Symbol.for("react.element"),qd=Symbol.for("react.fragment"),Gd=Object.prototype.hasOwnProperty,Yd=Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kd={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,n,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Gd.call(n,r)&&!Kd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Qd,type:e,key:s,ref:o,props:i,_owner:Yd.current}}Ni.Fragment=qd;Ni.jsx=lu;Ni.jsxs=lu;Xa.exports=Ni;var c=Xa.exports,Es={},au={exports:{}},Ee={},uu={exports:{}},cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,R){var L=T.length;T.push(R);e:for(;0<L;){var G=L-1>>>1,Z=T[G];if(0<i(Z,R))T[G]=R,T[L]=Z,L=G;else break e}}function t(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],L=T.pop();if(L!==R){T[0]=L;e:for(var G=0,Z=T.length,wr=Z>>>1;G<wr;){var Pn=2*(G+1)-1,Gi=T[Pn],Rn=Pn+1,Sr=T[Rn];if(0>i(Gi,L))Rn<Z&&0>i(Sr,Gi)?(T[G]=Sr,T[Rn]=L,G=Rn):(T[G]=Gi,T[Pn]=L,G=Pn);else if(Rn<Z&&0>i(Sr,L))T[G]=Sr,T[Rn]=L,G=Rn;else break e}}return R}function i(T,R){var L=T.sortIndex-R.sortIndex;return L!==0?L:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,f=null,d=3,v=!1,y=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var R=t(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=T)r(u),R.sortIndex=R.expirationTime,n(l,R);else break;R=t(u)}}function w(T){if(k=!1,g(T),!y)if(t(l)!==null)y=!0,Qi(E);else{var R=t(u);R!==null&&qi(w,R.startTime-T)}}function E(T,R){y=!1,k&&(k=!1,m(N),N=-1),v=!0;var L=d;try{for(g(R),f=t(l);f!==null&&(!(f.expirationTime>R)||T&&!je());){var G=f.callback;if(typeof G=="function"){f.callback=null,d=f.priorityLevel;var Z=G(f.expirationTime<=R);R=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===t(l)&&r(l),g(R)}else r(l);f=t(l)}if(f!==null)var wr=!0;else{var Pn=t(u);Pn!==null&&qi(w,Pn.startTime-R),wr=!1}return wr}finally{f=null,d=L,v=!1}}var _=!1,C=null,N=-1,H=5,I=-1;function je(){return!(e.unstable_now()-I<H)}function bt(){if(C!==null){var T=e.unstable_now();I=T;var R=!0;try{R=C(!0,T)}finally{R?Tt():(_=!1,C=null)}}else _=!1}var Tt;if(typeof p=="function")Tt=function(){p(bt)};else if(typeof MessageChannel<"u"){var Cl=new MessageChannel,Cd=Cl.port2;Cl.port1.onmessage=bt,Tt=function(){Cd.postMessage(null)}}else Tt=function(){P(bt,0)};function Qi(T){C=T,_||(_=!0,Tt())}function qi(T,R){N=P(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Qi(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(T){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var L=d;d=R;try{return T()}finally{d=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=d;d=T;try{return R()}finally{d=L}},e.unstable_scheduleCallback=function(T,R,L){var G=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?G+L:G):L=G,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,T={id:h++,callback:R,priorityLevel:T,startTime:L,expirationTime:Z,sortIndex:-1},L>G?(T.sortIndex=L,n(u,T),t(l)===null&&T===t(u)&&(k?(m(N),N=-1):k=!0,qi(w,L-G))):(T.sortIndex=Z,n(l,T),y||v||(y=!0,Qi(E))),T},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(T){var R=d;return function(){var L=d;d=R;try{return T.apply(this,arguments)}finally{d=L}}}})(cu);uu.exports=cu;var Xd=uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd=M,xe=Xd;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var du=new Set,Xt={};function Vn(e,n){mt(e,n),mt(e+"Capture",n)}function mt(e,n){for(Xt[e]=n,e=0;e<n.length;e++)du.add(n[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_s=Object.prototype.hasOwnProperty,Zd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pl={},Rl={};function ep(e){return _s.call(Rl,e)?!0:_s.call(Pl,e)?!1:Zd.test(e)?Rl[e]=!0:(Pl[e]=!0,!1)}function np(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tp(e,n,t,r){if(n===null||typeof n>"u"||np(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function he(e,n,t,r,i,s,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ie[n]=new he(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Co=/[\-:]([a-z])/g;function bo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Co,bo);ie[n]=new he(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Co,bo);ie[n]=new he(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Co,bo);ie[n]=new he(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function To(e,n,t,r){var i=ie.hasOwnProperty(n)?ie[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(tp(n,t,i,r)&&(t=null),r||i===null?ep(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var sn=Jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),No=Symbol.for("react.strict_mode"),Cs=Symbol.for("react.profiler"),pu=Symbol.for("react.provider"),hu=Symbol.for("react.context"),Po=Symbol.for("react.forward_ref"),bs=Symbol.for("react.suspense"),Ts=Symbol.for("react.suspense_list"),Ro=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),fu=Symbol.for("react.offscreen"),Ll=Symbol.iterator;function Nt(e){return e===null||typeof e!="object"?null:(e=Ll&&e[Ll]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Ki;function Dt(e){if(Ki===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ki=n&&n[1]||""}return`
`+Ki+e}var Xi=!1;function Ji(e,n){if(!e||Xi)return"";Xi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Dt(e):""}function rp(e){switch(e.tag){case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 2:case 15:return e=Ji(e.type,!1),e;case 11:return e=Ji(e.type.render,!1),e;case 1:return e=Ji(e.type,!0),e;default:return""}}function Ns(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Xn:return"Portal";case Cs:return"Profiler";case No:return"StrictMode";case bs:return"Suspense";case Ts:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hu:return(e.displayName||"Context")+".Consumer";case pu:return(e._context.displayName||"Context")+".Provider";case Po:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ro:return n=e.displayName||null,n!==null?n:Ns(e.type)||"Memo";case un:n=e._payload,e=e._init;try{return Ns(e(n))}catch{}}return null}function ip(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ns(n);case 8:return n===No?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function _n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sp(e){var n=mu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function _r(e){e._valueTracker||(e._valueTracker=sp(e))}function gu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=mu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ps(e,n){var t=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Il(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=_n(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function yu(e,n){n=n.checked,n!=null&&To(e,"checked",n,!1)}function Rs(e,n){yu(e,n);var t=_n(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ls(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ls(e,n.type,_n(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function jl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ls(e,n,t){(n!=="number"||Zr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ot=Array.isArray;function ut(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+_n(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Is(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Al(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(Ot(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:_n(t)}}function vu(e,n){var t=_n(n.value),r=_n(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function zl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ku(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function js(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ku(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,wu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Jt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},op=["Webkit","ms","Moz","O"];Object.keys(Ut).forEach(function(e){op.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ut[n]=Ut[e]})});function Su(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ut.hasOwnProperty(e)&&Ut[e]?(""+n).trim():n+"px"}function xu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Su(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var lp=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function As(e,n){if(n){if(lp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function zs(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ms=null;function Lo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,ct=null,dt=null;function Ml(e){if(e=yr(e)){if(typeof Ds!="function")throw Error(S(280));var n=e.stateNode;n&&(n=ji(n),Ds(e.stateNode,e.type,n))}}function Eu(e){ct?dt?dt.push(e):dt=[e]:ct=e}function _u(){if(ct){var e=ct,n=dt;if(dt=ct=null,Ml(e),n)for(e=0;e<n.length;e++)Ml(n[e])}}function Cu(e,n){return e(n)}function bu(){}var Zi=!1;function Tu(e,n,t){if(Zi)return e(n,t);Zi=!0;try{return Cu(e,n,t)}finally{Zi=!1,(ct!==null||dt!==null)&&(bu(),_u())}}function Zt(e,n){var t=e.stateNode;if(t===null)return null;var r=ji(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Os=!1;if(en)try{var Pt={};Object.defineProperty(Pt,"passive",{get:function(){Os=!0}}),window.addEventListener("test",Pt,Pt),window.removeEventListener("test",Pt,Pt)}catch{Os=!1}function ap(e,n,t,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(h){this.onError(h)}}var Ht=!1,ei=null,ni=!1,Fs=null,up={onError:function(e){Ht=!0,ei=e}};function cp(e,n,t,r,i,s,o,a,l){Ht=!1,ei=null,ap.apply(up,arguments)}function dp(e,n,t,r,i,s,o,a,l){if(cp.apply(this,arguments),Ht){if(Ht){var u=ei;Ht=!1,ei=null}else throw Error(S(198));ni||(ni=!0,Fs=u)}}function Qn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Nu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Dl(e){if(Qn(e)!==e)throw Error(S(188))}function pp(e){var n=e.alternate;if(!n){if(n=Qn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return Dl(i),e;if(s===r)return Dl(i),n;s=s.sibling}throw Error(S(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=s;break}if(a===r){o=!0,r=i,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,r=i;break}if(a===r){o=!0,r=s,t=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function Pu(e){return e=pp(e),e!==null?Ru(e):null}function Ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ru(e);if(n!==null)return n;e=e.sibling}return null}var Lu=xe.unstable_scheduleCallback,Ol=xe.unstable_cancelCallback,hp=xe.unstable_shouldYield,fp=xe.unstable_requestPaint,Y=xe.unstable_now,mp=xe.unstable_getCurrentPriorityLevel,Io=xe.unstable_ImmediatePriority,Iu=xe.unstable_UserBlockingPriority,ti=xe.unstable_NormalPriority,gp=xe.unstable_LowPriority,ju=xe.unstable_IdlePriority,Pi=null,qe=null;function yp(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Pi,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:wp,vp=Math.log,kp=Math.LN2;function wp(e){return e>>>=0,e===0?32:31-(vp(e)/kp|0)|0}var br=64,Tr=4194304;function Ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=Ft(a):(s&=o,s!==0&&(r=Ft(s)))}else o=t&~i,o!==0?r=Ft(o):s!==0&&(r=Ft(s));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,s=n&-n,i>=s||i===16&&(s&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-$e(n),i=1<<t,r|=e[t],n&=~i;return r}function Sp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-$e(s),a=1<<o,l=i[o];l===-1?(!(a&t)||a&r)&&(i[o]=Sp(a,n)):l<=n&&(e.expiredLanes|=a),s&=~a}}function $s(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Au(){var e=br;return br<<=1,!(br&4194240)&&(br=64),e}function es(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function mr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-$e(n),e[n]=t}function Ep(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-$e(t),s=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~s}}function jo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-$e(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var O=0;function zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mu,Ao,Du,Ou,Fu,Bs=!1,Nr=[],gn=null,yn=null,vn=null,er=new Map,nr=new Map,dn=[],_p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fl(e,n){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":er.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nr.delete(n.pointerId)}}function Rt(e,n,t,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},n!==null&&(n=yr(n),n!==null&&Ao(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Cp(e,n,t,r,i){switch(n){case"focusin":return gn=Rt(gn,e,n,t,r,i),!0;case"dragenter":return yn=Rt(yn,e,n,t,r,i),!0;case"mouseover":return vn=Rt(vn,e,n,t,r,i),!0;case"pointerover":var s=i.pointerId;return er.set(s,Rt(er.get(s)||null,e,n,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,nr.set(s,Rt(nr.get(s)||null,e,n,t,r,i)),!0}return!1}function $u(e){var n=An(e.target);if(n!==null){var t=Qn(n);if(t!==null){if(n=t.tag,n===13){if(n=Nu(t),n!==null){e.blockedOn=n,Fu(e.priority,function(){Du(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Us(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ms=r,t.target.dispatchEvent(r),Ms=null}else return n=yr(t),n!==null&&Ao(n),e.blockedOn=t,!1;n.shift()}return!0}function $l(e,n,t){Hr(e)&&t.delete(n)}function bp(){Bs=!1,gn!==null&&Hr(gn)&&(gn=null),yn!==null&&Hr(yn)&&(yn=null),vn!==null&&Hr(vn)&&(vn=null),er.forEach($l),nr.forEach($l)}function Lt(e,n){e.blockedOn===n&&(e.blockedOn=null,Bs||(Bs=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,bp)))}function tr(e){function n(i){return Lt(i,e)}if(0<Nr.length){Lt(Nr[0],e);for(var t=1;t<Nr.length;t++){var r=Nr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&Lt(gn,e),yn!==null&&Lt(yn,e),vn!==null&&Lt(vn,e),er.forEach(n),nr.forEach(n),t=0;t<dn.length;t++)r=dn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(t=dn[0],t.blockedOn===null);)$u(t),t.blockedOn===null&&dn.shift()}var pt=sn.ReactCurrentBatchConfig,ii=!0;function Tp(e,n,t,r){var i=O,s=pt.transition;pt.transition=null;try{O=1,zo(e,n,t,r)}finally{O=i,pt.transition=s}}function Np(e,n,t,r){var i=O,s=pt.transition;pt.transition=null;try{O=4,zo(e,n,t,r)}finally{O=i,pt.transition=s}}function zo(e,n,t,r){if(ii){var i=Us(e,n,t,r);if(i===null)cs(e,n,r,si,t),Fl(e,r);else if(Cp(i,e,n,t,r))r.stopPropagation();else if(Fl(e,r),n&4&&-1<_p.indexOf(e)){for(;i!==null;){var s=yr(i);if(s!==null&&Mu(s),s=Us(e,n,t,r),s===null&&cs(e,n,r,si,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else cs(e,n,r,null,t)}}var si=null;function Us(e,n,t,r){if(si=null,e=Lo(r),e=An(e),e!==null)if(n=Qn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Nu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return si=e,null}function Bu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mp()){case Io:return 1;case Iu:return 4;case ti:case gp:return 16;case ju:return 536870912;default:return 16}default:return 16}}var hn=null,Mo=null,Wr=null;function Uu(){if(Wr)return Wr;var e,n=Mo,t=n.length,r,i="value"in hn?hn.value:hn.textContent,s=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[s-r];r++);return Wr=i.slice(e,1<r?1-r:void 0)}function Vr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Pr(){return!0}function Bl(){return!1}function _e(e){function n(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pr:Bl,this.isPropagationStopped=Bl,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Pr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Pr)},persist:function(){},isPersistent:Pr}),n}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Do=_e(Et),gr=Q({},Et,{view:0,detail:0}),Pp=_e(gr),ns,ts,It,Ri=Q({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==It&&(It&&e.type==="mousemove"?(ns=e.screenX-It.screenX,ts=e.screenY-It.screenY):ts=ns=0,It=e),ns)},movementY:function(e){return"movementY"in e?e.movementY:ts}}),Ul=_e(Ri),Rp=Q({},Ri,{dataTransfer:0}),Lp=_e(Rp),Ip=Q({},gr,{relatedTarget:0}),rs=_e(Ip),jp=Q({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),Ap=_e(jp),zp=Q({},Et,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mp=_e(zp),Dp=Q({},Et,{data:0}),Hl=_e(Dp),Op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$p={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$p[e])?!!n[e]:!1}function Oo(){return Bp}var Up=Q({},gr,{key:function(e){if(e.key){var n=Op[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oo,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hp=_e(Up),Wp=Q({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wl=_e(Wp),Vp=Q({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oo}),Qp=_e(Vp),qp=Q({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gp=_e(qp),Yp=Q({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kp=_e(Yp),Xp=[9,13,27,32],Fo=en&&"CompositionEvent"in window,Wt=null;en&&"documentMode"in document&&(Wt=document.documentMode);var Jp=en&&"TextEvent"in window&&!Wt,Hu=en&&(!Fo||Wt&&8<Wt&&11>=Wt),Vl=" ",Ql=!1;function Wu(e,n){switch(e){case"keyup":return Xp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function Zp(e,n){switch(e){case"compositionend":return Vu(n);case"keypress":return n.which!==32?null:(Ql=!0,Vl);case"textInput":return e=n.data,e===Vl&&Ql?null:e;default:return null}}function eh(e,n){if(Zn)return e==="compositionend"||!Fo&&Wu(e,n)?(e=Uu(),Wr=Mo=hn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hu&&n.locale!=="ko"?null:n.data;default:return null}}var nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ql(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!nh[e.type]:n==="textarea"}function Qu(e,n,t,r){Eu(r),n=oi(n,"onChange"),0<n.length&&(t=new Do("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Vt=null,rr=null;function th(e){rc(e,0)}function Li(e){var n=tt(e);if(gu(n))return e}function rh(e,n){if(e==="change")return n}var qu=!1;if(en){var is;if(en){var ss="oninput"in document;if(!ss){var Gl=document.createElement("div");Gl.setAttribute("oninput","return;"),ss=typeof Gl.oninput=="function"}is=ss}else is=!1;qu=is&&(!document.documentMode||9<document.documentMode)}function Yl(){Vt&&(Vt.detachEvent("onpropertychange",Gu),rr=Vt=null)}function Gu(e){if(e.propertyName==="value"&&Li(rr)){var n=[];Qu(n,rr,e,Lo(e)),Tu(th,n)}}function ih(e,n,t){e==="focusin"?(Yl(),Vt=n,rr=t,Vt.attachEvent("onpropertychange",Gu)):e==="focusout"&&Yl()}function sh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(rr)}function oh(e,n){if(e==="click")return Li(n)}function lh(e,n){if(e==="input"||e==="change")return Li(n)}function ah(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ue=typeof Object.is=="function"?Object.is:ah;function ir(e,n){if(Ue(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!_s.call(n,i)||!Ue(e[i],n[i]))return!1}return!0}function Kl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xl(e,n){var t=Kl(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Kl(t)}}function Yu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ku(){for(var e=window,n=Zr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Zr(e.document)}return n}function $o(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function uh(e){var n=Ku(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Yu(t.ownerDocument.documentElement,t)){if(r!==null&&$o(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Xl(t,s);var o=Xl(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ch=en&&"documentMode"in document&&11>=document.documentMode,et=null,Hs=null,Qt=null,Ws=!1;function Jl(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ws||et==null||et!==Zr(r)||(r=et,"selectionStart"in r&&$o(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qt&&ir(Qt,r)||(Qt=r,r=oi(Hs,"onSelect"),0<r.length&&(n=new Do("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=et)))}function Rr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var nt={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},os={},Xu={};en&&(Xu=document.createElement("div").style,"AnimationEvent"in window||(delete nt.animationend.animation,delete nt.animationiteration.animation,delete nt.animationstart.animation),"TransitionEvent"in window||delete nt.transitionend.transition);function Ii(e){if(os[e])return os[e];if(!nt[e])return e;var n=nt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Xu)return os[e]=n[t];return e}var Ju=Ii("animationend"),Zu=Ii("animationiteration"),ec=Ii("animationstart"),nc=Ii("transitionend"),tc=new Map,Zl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,n){tc.set(e,n),Vn(n,[e])}for(var ls=0;ls<Zl.length;ls++){var as=Zl[ls],dh=as.toLowerCase(),ph=as[0].toUpperCase()+as.slice(1);bn(dh,"on"+ph)}bn(Ju,"onAnimationEnd");bn(Zu,"onAnimationIteration");bn(ec,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(nc,"onTransitionEnd");mt("onMouseEnter",["mouseout","mouseover"]);mt("onMouseLeave",["mouseout","mouseover"]);mt("onPointerEnter",["pointerout","pointerover"]);mt("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $t="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hh=new Set("cancel close invalid load scroll toggle".split(" ").concat($t));function ea(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,dp(r,n,void 0,e),e.currentTarget=null}function rc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var s=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ea(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ea(i,a,u),s=l}}}if(ni)throw e=Fs,ni=!1,Fs=null,e}function $(e,n){var t=n[Ys];t===void 0&&(t=n[Ys]=new Set);var r=e+"__bubble";t.has(r)||(ic(n,e,2,!1),t.add(r))}function us(e,n,t){var r=0;n&&(r|=4),ic(t,e,r,n)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Lr]){e[Lr]=!0,du.forEach(function(t){t!=="selectionchange"&&(hh.has(t)||us(t,!1,e),us(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Lr]||(n[Lr]=!0,us("selectionchange",!1,n))}}function ic(e,n,t,r){switch(Bu(n)){case 1:var i=Tp;break;case 4:i=Np;break;default:i=zo}t=i.bind(null,n,t,e),i=void 0,!Os||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function cs(e,n,t,r,i){var s=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=An(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Tu(function(){var u=s,h=Lo(t),f=[];e:{var d=tc.get(e);if(d!==void 0){var v=Do,y=e;switch(e){case"keypress":if(Vr(t)===0)break e;case"keydown":case"keyup":v=Hp;break;case"focusin":y="focus",v=rs;break;case"focusout":y="blur",v=rs;break;case"beforeblur":case"afterblur":v=rs;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ul;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Lp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Qp;break;case Ju:case Zu:case ec:v=Ap;break;case nc:v=Gp;break;case"scroll":v=Pp;break;case"wheel":v=Kp;break;case"copy":case"cut":case"paste":v=Mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Wl}var k=(n&4)!==0,P=!k&&e==="scroll",m=k?d!==null?d+"Capture":null:d;k=[];for(var p=u,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Zt(p,m),w!=null&&k.push(or(p,w,g)))),P)break;p=p.return}0<k.length&&(d=new v(d,y,null,t,h),f.push({event:d,listeners:k}))}}if(!(n&7)){e:{if(d=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",d&&t!==Ms&&(y=t.relatedTarget||t.fromElement)&&(An(y)||y[nn]))break e;if((v||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,v?(y=t.relatedTarget||t.toElement,v=u,y=y?An(y):null,y!==null&&(P=Qn(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(k=Ul,w="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(k=Wl,w="onPointerLeave",m="onPointerEnter",p="pointer"),P=v==null?d:tt(v),g=y==null?d:tt(y),d=new k(w,p+"leave",v,t,h),d.target=P,d.relatedTarget=g,w=null,An(h)===u&&(k=new k(m,p+"enter",y,t,h),k.target=g,k.relatedTarget=P,w=k),P=w,v&&y)n:{for(k=v,m=y,p=0,g=k;g;g=Gn(g))p++;for(g=0,w=m;w;w=Gn(w))g++;for(;0<p-g;)k=Gn(k),p--;for(;0<g-p;)m=Gn(m),g--;for(;p--;){if(k===m||m!==null&&k===m.alternate)break n;k=Gn(k),m=Gn(m)}k=null}else k=null;v!==null&&na(f,d,v,k,!1),y!==null&&P!==null&&na(f,P,y,k,!0)}}e:{if(d=u?tt(u):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var E=rh;else if(ql(d))if(qu)E=lh;else{E=sh;var _=ih}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=oh);if(E&&(E=E(e,u))){Qu(f,E,t,h);break e}_&&_(e,d,u),e==="focusout"&&(_=d._wrapperState)&&_.controlled&&d.type==="number"&&Ls(d,"number",d.value)}switch(_=u?tt(u):window,e){case"focusin":(ql(_)||_.contentEditable==="true")&&(et=_,Hs=u,Qt=null);break;case"focusout":Qt=Hs=et=null;break;case"mousedown":Ws=!0;break;case"contextmenu":case"mouseup":case"dragend":Ws=!1,Jl(f,t,h);break;case"selectionchange":if(ch)break;case"keydown":case"keyup":Jl(f,t,h)}var C;if(Fo)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Zn?Wu(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(Hu&&t.locale!=="ko"&&(Zn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Zn&&(C=Uu()):(hn=h,Mo="value"in hn?hn.value:hn.textContent,Zn=!0)),_=oi(u,N),0<_.length&&(N=new Hl(N,e,null,t,h),f.push({event:N,listeners:_}),C?N.data=C:(C=Vu(t),C!==null&&(N.data=C)))),(C=Jp?Zp(e,t):eh(e,t))&&(u=oi(u,"onBeforeInput"),0<u.length&&(h=new Hl("onBeforeInput","beforeinput",null,t,h),f.push({event:h,listeners:u}),h.data=C))}rc(f,n)})}function or(e,n,t){return{instance:e,listener:n,currentTarget:t}}function oi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zt(e,t),s!=null&&r.unshift(or(e,s,i)),s=Zt(e,n),s!=null&&r.push(or(e,s,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function na(e,n,t,r,i){for(var s=n._reactName,o=[];t!==null&&t!==r;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Zt(t,s),l!=null&&o.unshift(or(t,l,a))):i||(l=Zt(t,s),l!=null&&o.push(or(t,l,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var fh=/\r\n?/g,mh=/\u0000|\uFFFD/g;function ta(e){return(typeof e=="string"?e:""+e).replace(fh,`
`).replace(mh,"")}function Ir(e,n,t){if(n=ta(n),ta(e)!==n&&t)throw Error(S(425))}function li(){}var Vs=null,Qs=null;function qs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gs=typeof setTimeout=="function"?setTimeout:void 0,gh=typeof clearTimeout=="function"?clearTimeout:void 0,ra=typeof Promise=="function"?Promise:void 0,yh=typeof queueMicrotask=="function"?queueMicrotask:typeof ra<"u"?function(e){return ra.resolve(null).then(e).catch(vh)}:Gs;function vh(e){setTimeout(function(){throw e})}function ds(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),tr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);tr(n)}function kn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ia(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var _t=Math.random().toString(36).slice(2),Qe="__reactFiber$"+_t,lr="__reactProps$"+_t,nn="__reactContainer$"+_t,Ys="__reactEvents$"+_t,kh="__reactListeners$"+_t,wh="__reactHandles$"+_t;function An(e){var n=e[Qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[nn]||t[Qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ia(e);e!==null;){if(t=e[Qe])return t;e=ia(e)}return n}e=t,t=e.parentNode}return null}function yr(e){return e=e[Qe]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ji(e){return e[lr]||null}var Ks=[],rt=-1;function Tn(e){return{current:e}}function B(e){0>rt||(e.current=Ks[rt],Ks[rt]=null,rt--)}function F(e,n){rt++,Ks[rt]=e.current,e.current=n}var Cn={},ue=Tn(Cn),ge=Tn(!1),Fn=Cn;function gt(e,n){var t=e.type.contextTypes;if(!t)return Cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=n[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function ai(){B(ge),B(ue)}function sa(e,n,t){if(ue.current!==Cn)throw Error(S(168));F(ue,n),F(ge,t)}function sc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(S(108,ip(e)||"Unknown",i));return Q({},t,r)}function ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Fn=ue.current,F(ue,e),F(ge,ge.current),!0}function oa(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=sc(e,n,Fn),r.__reactInternalMemoizedMergedChildContext=e,B(ge),B(ue),F(ue,e)):B(ge),F(ge,t)}var Ke=null,Ai=!1,ps=!1;function oc(e){Ke===null?Ke=[e]:Ke.push(e)}function Sh(e){Ai=!0,oc(e)}function Nn(){if(!ps&&Ke!==null){ps=!0;var e=0,n=O;try{var t=Ke;for(O=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ke=null,Ai=!1}catch(i){throw Ke!==null&&(Ke=Ke.slice(e+1)),Lu(Io,Nn),i}finally{O=n,ps=!1}}return null}var it=[],st=0,ci=null,di=0,be=[],Te=0,$n=null,Xe=1,Je="";function Ln(e,n){it[st++]=di,it[st++]=ci,ci=e,di=n}function lc(e,n,t){be[Te++]=Xe,be[Te++]=Je,be[Te++]=$n,$n=e;var r=Xe;e=Je;var i=32-$e(r)-1;r&=~(1<<i),t+=1;var s=32-$e(n)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xe=1<<32-$e(n)+i|t<<i|r,Je=s+e}else Xe=1<<s|t<<i|r,Je=e}function Bo(e){e.return!==null&&(Ln(e,1),lc(e,1,0))}function Uo(e){for(;e===ci;)ci=it[--st],it[st]=null,di=it[--st],it[st]=null;for(;e===$n;)$n=be[--Te],be[Te]=null,Je=be[--Te],be[Te]=null,Xe=be[--Te],be[Te]=null}var Se=null,we=null,U=!1,De=null;function ac(e,n){var t=Pe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function la(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,we=kn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=$n!==null?{id:Xe,overflow:Je}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Pe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,we=null,!0):!1;default:return!1}}function Xs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Js(e){if(U){var n=we;if(n){var t=n;if(!la(e,n)){if(Xs(e))throw Error(S(418));n=kn(t.nextSibling);var r=Se;n&&la(e,n)?ac(r,t):(e.flags=e.flags&-4097|2,U=!1,Se=e)}}else{if(Xs(e))throw Error(S(418));e.flags=e.flags&-4097|2,U=!1,Se=e}}}function aa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function jr(e){if(e!==Se)return!1;if(!U)return aa(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!qs(e.type,e.memoizedProps)),n&&(n=we)){if(Xs(e))throw uc(),Error(S(418));for(;n;)ac(e,n),n=kn(n.nextSibling)}if(aa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=kn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=Se?kn(e.stateNode.nextSibling):null;return!0}function uc(){for(var e=we;e;)e=kn(e.nextSibling)}function yt(){we=Se=null,U=!1}function Ho(e){De===null?De=[e]:De.push(e)}var xh=sn.ReactCurrentBatchConfig;function jt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var i=r,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},n._stringRef=s,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function Ar(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ua(e){var n=e._init;return n(e._payload)}function cc(e){function n(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function t(m,p){if(!e)return null;for(;p!==null;)n(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=En(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,w){return p===null||p.tag!==6?(p=ks(g,m.mode,w),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,w){var E=g.type;return E===Jn?h(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===un&&ua(E)===p.type)?(w=i(p,g.props),w.ref=jt(m,p,g),w.return=m,w):(w=Jr(g.type,g.key,g.props,null,m.mode,w),w.ref=jt(m,p,g),w.return=m,w)}function u(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=ws(g,m.mode,w),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function h(m,p,g,w,E){return p===null||p.tag!==7?(p=On(g,m.mode,w,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function f(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ks(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Er:return g=Jr(p.type,p.key,p.props,null,m.mode,g),g.ref=jt(m,null,p),g.return=m,g;case Xn:return p=ws(p,m.mode,g),p.return=m,p;case un:var w=p._init;return f(m,w(p._payload),g)}if(Ot(p)||Nt(p))return p=On(p,m.mode,g,null),p.return=m,p;Ar(m,p)}return null}function d(m,p,g,w){var E=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:return g.key===E?l(m,p,g,w):null;case Xn:return g.key===E?u(m,p,g,w):null;case un:return E=g._init,d(m,p,E(g._payload),w)}if(Ot(g)||Nt(g))return E!==null?null:h(m,p,g,w,null);Ar(m,g)}return null}function v(m,p,g,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(p,m,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Er:return m=m.get(w.key===null?g:w.key)||null,l(p,m,w,E);case Xn:return m=m.get(w.key===null?g:w.key)||null,u(p,m,w,E);case un:var _=w._init;return v(m,p,g,_(w._payload),E)}if(Ot(w)||Nt(w))return m=m.get(g)||null,h(p,m,w,E,null);Ar(p,w)}return null}function y(m,p,g,w){for(var E=null,_=null,C=p,N=p=0,H=null;C!==null&&N<g.length;N++){C.index>N?(H=C,C=null):H=C.sibling;var I=d(m,C,g[N],w);if(I===null){C===null&&(C=H);break}e&&C&&I.alternate===null&&n(m,C),p=s(I,p,N),_===null?E=I:_.sibling=I,_=I,C=H}if(N===g.length)return t(m,C),U&&Ln(m,N),E;if(C===null){for(;N<g.length;N++)C=f(m,g[N],w),C!==null&&(p=s(C,p,N),_===null?E=C:_.sibling=C,_=C);return U&&Ln(m,N),E}for(C=r(m,C);N<g.length;N++)H=v(C,m,N,g[N],w),H!==null&&(e&&H.alternate!==null&&C.delete(H.key===null?N:H.key),p=s(H,p,N),_===null?E=H:_.sibling=H,_=H);return e&&C.forEach(function(je){return n(m,je)}),U&&Ln(m,N),E}function k(m,p,g,w){var E=Nt(g);if(typeof E!="function")throw Error(S(150));if(g=E.call(g),g==null)throw Error(S(151));for(var _=E=null,C=p,N=p=0,H=null,I=g.next();C!==null&&!I.done;N++,I=g.next()){C.index>N?(H=C,C=null):H=C.sibling;var je=d(m,C,I.value,w);if(je===null){C===null&&(C=H);break}e&&C&&je.alternate===null&&n(m,C),p=s(je,p,N),_===null?E=je:_.sibling=je,_=je,C=H}if(I.done)return t(m,C),U&&Ln(m,N),E;if(C===null){for(;!I.done;N++,I=g.next())I=f(m,I.value,w),I!==null&&(p=s(I,p,N),_===null?E=I:_.sibling=I,_=I);return U&&Ln(m,N),E}for(C=r(m,C);!I.done;N++,I=g.next())I=v(C,m,N,I.value,w),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?N:I.key),p=s(I,p,N),_===null?E=I:_.sibling=I,_=I);return e&&C.forEach(function(bt){return n(m,bt)}),U&&Ln(m,N),E}function P(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===Jn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Er:e:{for(var E=g.key,_=p;_!==null;){if(_.key===E){if(E=g.type,E===Jn){if(_.tag===7){t(m,_.sibling),p=i(_,g.props.children),p.return=m,m=p;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===un&&ua(E)===_.type){t(m,_.sibling),p=i(_,g.props),p.ref=jt(m,_,g),p.return=m,m=p;break e}t(m,_);break}else n(m,_);_=_.sibling}g.type===Jn?(p=On(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=Jr(g.type,g.key,g.props,null,m.mode,w),w.ref=jt(m,p,g),w.return=m,m=w)}return o(m);case Xn:e:{for(_=g.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){t(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{t(m,p);break}else n(m,p);p=p.sibling}p=ws(g,m.mode,w),p.return=m,m=p}return o(m);case un:return _=g._init,P(m,p,_(g._payload),w)}if(Ot(g))return y(m,p,g,w);if(Nt(g))return k(m,p,g,w);Ar(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(t(m,p.sibling),p=i(p,g),p.return=m,m=p):(t(m,p),p=ks(g,m.mode,w),p.return=m,m=p),o(m)):t(m,p)}return P}var vt=cc(!0),dc=cc(!1),pi=Tn(null),hi=null,ot=null,Wo=null;function Vo(){Wo=ot=hi=null}function Qo(e){var n=pi.current;B(pi),e._currentValue=n}function Zs(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ht(e,n){hi=e,Wo=ot=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function Le(e){var n=e._currentValue;if(Wo!==e)if(e={context:e,memoizedValue:n,next:null},ot===null){if(hi===null)throw Error(S(308));ot=e,hi.dependencies={lanes:0,firstContext:e}}else ot=ot.next=e;return n}var zn=null;function qo(e){zn===null?zn=[e]:zn.push(e)}function pc(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,qo(n)):(t.next=i.next,i.next=t),n.interleaved=t,tn(e,r)}function tn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var cn=!1;function Go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function wn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,tn(e,t)}return i=r.interleaved,i===null?(n.next=n,qo(r)):(n.next=i.next,i.next=n),r.interleaved=n,tn(e,t)}function Qr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,jo(e,t)}}function ca(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=n:s=s.next=n}else i=s=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function fi(e,n,t,r){var i=e.updateQueue;cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=u=l=null,a=s;do{var d=a.lane,v=a.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,k=a;switch(d=n,v=t,k.tag){case 1:if(y=k.payload,typeof y=="function"){f=y.call(v,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,d=typeof y=="function"?y.call(v,f,d):y,d==null)break e;f=Q({},f,d);break e;case 2:cn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else v={eventTime:v,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=v,l=f):h=h.next=v,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else s===null&&(i.shared.lanes=0);Un|=o,e.lanes=o,e.memoizedState=f}}function da(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var vr={},Ge=Tn(vr),ar=Tn(vr),ur=Tn(vr);function Mn(e){if(e===vr)throw Error(S(174));return e}function Yo(e,n){switch(F(ur,n),F(ar,e),F(Ge,vr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:js(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=js(n,e)}B(Ge),F(Ge,n)}function kt(){B(Ge),B(ar),B(ur)}function fc(e){Mn(ur.current);var n=Mn(Ge.current),t=js(n,e.type);n!==t&&(F(ar,e),F(Ge,t))}function Ko(e){ar.current===e&&(B(Ge),B(ar))}var W=Tn(0);function mi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var hs=[];function Xo(){for(var e=0;e<hs.length;e++)hs[e]._workInProgressVersionPrimary=null;hs.length=0}var qr=sn.ReactCurrentDispatcher,fs=sn.ReactCurrentBatchConfig,Bn=0,V=null,X=null,ee=null,gi=!1,qt=!1,cr=0,Eh=0;function se(){throw Error(S(321))}function Jo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ue(e[t],n[t]))return!1;return!0}function Zo(e,n,t,r,i,s){if(Bn=s,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,qr.current=e===null||e.memoizedState===null?Th:Nh,e=t(r,i),qt){s=0;do{if(qt=!1,cr=0,25<=s)throw Error(S(301));s+=1,ee=X=null,n.updateQueue=null,qr.current=Ph,e=t(r,i)}while(qt)}if(qr.current=yi,n=X!==null&&X.next!==null,Bn=0,ee=X=V=null,gi=!1,n)throw Error(S(300));return e}function el(){var e=cr!==0;return cr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?V.memoizedState=ee=e:ee=ee.next=e,ee}function Ie(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=ee===null?V.memoizedState:ee.next;if(n!==null)ee=n,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?V.memoizedState=ee=e:ee=ee.next=e}return ee}function dr(e,n){return typeof n=="function"?n(e):n}function ms(e){var n=Ie(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=X,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Bn&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,V.lanes|=h,Un|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ue(r,n.memoizedState)||(me=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do s=i.lane,V.lanes|=s,Un|=s,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function gs(e){var n=Ie(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,s=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ue(s,n.memoizedState)||(me=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,r]}function mc(){}function gc(e,n){var t=V,r=Ie(),i=n(),s=!Ue(r.memoizedState,i);if(s&&(r.memoizedState=i,me=!0),r=r.queue,nl(kc.bind(null,t,r,e),[e]),r.getSnapshot!==n||s||ee!==null&&ee.memoizedState.tag&1){if(t.flags|=2048,pr(9,vc.bind(null,t,r,i,n),void 0,null),ne===null)throw Error(S(349));Bn&30||yc(t,n,i)}return i}function yc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function vc(e,n,t,r){n.value=t,n.getSnapshot=r,wc(n)&&Sc(e)}function kc(e,n,t){return t(function(){wc(n)&&Sc(e)})}function wc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ue(e,t)}catch{return!0}}function Sc(e){var n=tn(e,1);n!==null&&Be(n,e,1,-1)}function pa(e){var n=Ve();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},n.queue=e,e=e.dispatch=bh.bind(null,V,e),[n.memoizedState,e]}function pr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function xc(){return Ie().memoizedState}function Gr(e,n,t,r){var i=Ve();V.flags|=e,i.memoizedState=pr(1|n,t,void 0,r===void 0?null:r)}function zi(e,n,t,r){var i=Ie();r=r===void 0?null:r;var s=void 0;if(X!==null){var o=X.memoizedState;if(s=o.destroy,r!==null&&Jo(r,o.deps)){i.memoizedState=pr(n,t,s,r);return}}V.flags|=e,i.memoizedState=pr(1|n,t,s,r)}function ha(e,n){return Gr(8390656,8,e,n)}function nl(e,n){return zi(2048,8,e,n)}function Ec(e,n){return zi(4,2,e,n)}function _c(e,n){return zi(4,4,e,n)}function Cc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bc(e,n,t){return t=t!=null?t.concat([e]):null,zi(4,4,Cc.bind(null,n,e),t)}function tl(){}function Tc(e,n){var t=Ie();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Jo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Nc(e,n){var t=Ie();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Jo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Pc(e,n,t){return Bn&21?(Ue(t,n)||(t=Au(),V.lanes|=t,Un|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function _h(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var r=fs.transition;fs.transition={};try{e(!1),n()}finally{O=t,fs.transition=r}}function Rc(){return Ie().memoizedState}function Ch(e,n,t){var r=xn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Lc(e))Ic(n,t);else if(t=pc(e,n,t,r),t!==null){var i=de();Be(t,e,r,i),jc(t,n,r)}}function bh(e,n,t){var r=xn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Lc(e))Ic(n,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var o=n.lastRenderedState,a=s(o,t);if(i.hasEagerState=!0,i.eagerState=a,Ue(a,o)){var l=n.interleaved;l===null?(i.next=i,qo(n)):(i.next=l.next,l.next=i),n.interleaved=i;return}}catch{}finally{}t=pc(e,n,i,r),t!==null&&(i=de(),Be(t,e,r,i),jc(t,n,r))}}function Lc(e){var n=e.alternate;return e===V||n!==null&&n===V}function Ic(e,n){qt=gi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function jc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,jo(e,t)}}var yi={readContext:Le,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Th={readContext:Le,useCallback:function(e,n){return Ve().memoizedState=[e,n===void 0?null:n],e},useContext:Le,useEffect:ha,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Gr(4194308,4,Cc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Gr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Gr(4,2,e,n)},useMemo:function(e,n){var t=Ve();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ve();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Ch.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var n=Ve();return e={current:e},n.memoizedState=e},useState:pa,useDebugValue:tl,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=pa(!1),n=e[0];return e=_h.bind(null,e[1]),Ve().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=V,i=Ve();if(U){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),ne===null)throw Error(S(349));Bn&30||yc(r,n,t)}i.memoizedState=t;var s={value:t,getSnapshot:n};return i.queue=s,ha(kc.bind(null,r,s,e),[e]),r.flags|=2048,pr(9,vc.bind(null,r,s,t,n),void 0,null),t},useId:function(){var e=Ve(),n=ne.identifierPrefix;if(U){var t=Je,r=Xe;t=(r&~(1<<32-$e(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=cr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Eh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Nh={readContext:Le,useCallback:Tc,useContext:Le,useEffect:nl,useImperativeHandle:bc,useInsertionEffect:Ec,useLayoutEffect:_c,useMemo:Nc,useReducer:ms,useRef:xc,useState:function(){return ms(dr)},useDebugValue:tl,useDeferredValue:function(e){var n=Ie();return Pc(n,X.memoizedState,e)},useTransition:function(){var e=ms(dr)[0],n=Ie().memoizedState;return[e,n]},useMutableSource:mc,useSyncExternalStore:gc,useId:Rc,unstable_isNewReconciler:!1},Ph={readContext:Le,useCallback:Tc,useContext:Le,useEffect:nl,useImperativeHandle:bc,useInsertionEffect:Ec,useLayoutEffect:_c,useMemo:Nc,useReducer:gs,useRef:xc,useState:function(){return gs(dr)},useDebugValue:tl,useDeferredValue:function(e){var n=Ie();return X===null?n.memoizedState=e:Pc(n,X.memoizedState,e)},useTransition:function(){var e=gs(dr)[0],n=Ie().memoizedState;return[e,n]},useMutableSource:mc,useSyncExternalStore:gc,useId:Rc,unstable_isNewReconciler:!1};function ze(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function eo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Mi={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=de(),i=xn(e),s=Ze(r,i);s.payload=n,t!=null&&(s.callback=t),n=wn(e,s,i),n!==null&&(Be(n,e,i,r),Qr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=de(),i=xn(e),s=Ze(r,i);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=wn(e,s,i),n!==null&&(Be(n,e,i,r),Qr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=de(),r=xn(e),i=Ze(t,r);i.tag=2,n!=null&&(i.callback=n),n=wn(e,i,r),n!==null&&(Be(n,e,r,t),Qr(n,e,r))}};function fa(e,n,t,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):n.prototype&&n.prototype.isPureReactComponent?!ir(t,r)||!ir(i,s):!0}function Ac(e,n,t){var r=!1,i=Cn,s=n.contextType;return typeof s=="object"&&s!==null?s=Le(s):(i=ye(n)?Fn:ue.current,r=n.contextTypes,s=(r=r!=null)?gt(e,i):Cn),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Mi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),n}function ma(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Mi.enqueueReplaceState(n,n.state,null)}function no(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Go(e);var s=n.contextType;typeof s=="object"&&s!==null?i.context=Le(s):(s=ye(n)?Fn:ue.current,i.context=gt(e,s)),i.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(eo(e,n,s,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Mi.enqueueReplaceState(i,i.state,null),fi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wt(e,n){try{var t="",r=n;do t+=rp(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:i,digest:null}}function ys(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function to(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Rh=typeof WeakMap=="function"?WeakMap:Map;function zc(e,n,t){t=Ze(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ki||(ki=!0,ho=r),to(e,n)},t}function Mc(e,n,t){t=Ze(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){to(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){to(e,n),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function ga(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Rh;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Wh.bind(null,e,n,t),n.then(e,e))}function ya(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function va(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ze(-1,1),n.tag=2,wn(t,n,1))),t.lanes|=1),e)}var Lh=sn.ReactCurrentOwner,me=!1;function ce(e,n,t,r){n.child=e===null?dc(n,null,t,r):vt(n,e.child,t,r)}function ka(e,n,t,r,i){t=t.render;var s=n.ref;return ht(n,i),r=Zo(e,n,t,r,s,i),t=el(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rn(e,n,i)):(U&&t&&Bo(n),n.flags|=1,ce(e,n,r,i),n.child)}function wa(e,n,t,r,i){if(e===null){var s=t.type;return typeof s=="function"&&!cl(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,Dc(e,n,s,r,i)):(e=Jr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ir,t(o,r)&&e.ref===n.ref)return rn(e,n,i)}return n.flags|=1,e=En(s,r),e.ref=n.ref,e.return=n,n.child=e}function Dc(e,n,t,r,i){if(e!==null){var s=e.memoizedProps;if(ir(s,r)&&e.ref===n.ref)if(me=!1,n.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,rn(e,n,i)}return ro(e,n,t,r,i)}function Oc(e,n,t){var r=n.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(at,ke),ke|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(at,ke),ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,F(at,ke),ke|=r}else s!==null?(r=s.baseLanes|t,n.memoizedState=null):r=t,F(at,ke),ke|=r;return ce(e,n,i,t),n.child}function Fc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ro(e,n,t,r,i){var s=ye(t)?Fn:ue.current;return s=gt(n,s),ht(n,i),t=Zo(e,n,t,r,s,i),r=el(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rn(e,n,i)):(U&&r&&Bo(n),n.flags|=1,ce(e,n,t,i),n.child)}function Sa(e,n,t,r,i){if(ye(t)){var s=!0;ui(n)}else s=!1;if(ht(n,i),n.stateNode===null)Yr(e,n),Ac(n,t,r),no(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=ye(t)?Fn:ue.current,u=gt(n,u));var h=t.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ma(n,o,r,u),cn=!1;var d=n.memoizedState;o.state=d,fi(n,r,o,i),l=n.memoizedState,a!==r||d!==l||ge.current||cn?(typeof h=="function"&&(eo(n,t,h,r),l=n.memoizedState),(a=cn||fa(n,t,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,hc(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:ze(n.type,a),o.props=u,f=n.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Le(l):(l=ye(t)?Fn:ue.current,l=gt(n,l));var v=t.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&ma(n,o,r,l),cn=!1,d=n.memoizedState,o.state=d,fi(n,r,o,i);var y=n.memoizedState;a!==f||d!==y||ge.current||cn?(typeof v=="function"&&(eo(n,t,v,r),y=n.memoizedState),(u=cn||fa(n,t,u,r,d,y,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),r=!1)}return io(e,n,t,r,s,i)}function io(e,n,t,r,i,s){Fc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&oa(n,t,!1),rn(e,n,s);r=n.stateNode,Lh.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=vt(n,e.child,null,s),n.child=vt(n,null,a,s)):ce(e,n,a,s),n.memoizedState=r.state,i&&oa(n,t,!0),n.child}function $c(e){var n=e.stateNode;n.pendingContext?sa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&sa(e,n.context,!1),Yo(e,n.containerInfo)}function xa(e,n,t,r,i){return yt(),Ho(i),n.flags|=256,ce(e,n,t,r),n.child}var so={dehydrated:null,treeContext:null,retryLane:0};function oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bc(e,n,t){var r=n.pendingProps,i=W.current,s=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(W,i&1),e===null)return Js(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,s?(r=n.mode,s=n.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fi(o,r,0,null),e=On(e,r,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=oo(t),n.memoizedState=so,e):rl(n,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ih(e,n,o,r,a,i,t);if(s){s=r.fallback,o=n.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=En(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=En(a,s):(s=On(s,o,t,null),s.flags|=2),s.return=n,r.return=n,r.sibling=s,n.child=r,r=s,s=n.child,o=e.child.memoizedState,o=o===null?oo(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~t,n.memoizedState=so,r}return s=e.child,e=s.sibling,r=En(s,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function rl(e,n){return n=Fi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function zr(e,n,t,r){return r!==null&&Ho(r),vt(n,e.child,null,t),e=rl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ih(e,n,t,r,i,s,o){if(t)return n.flags&256?(n.flags&=-257,r=ys(Error(S(422))),zr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=r.fallback,i=n.mode,r=Fi({mode:"visible",children:r.children},i,0,null),s=On(s,i,o,null),s.flags|=2,r.return=n,s.return=n,r.sibling=s,n.child=r,n.mode&1&&vt(n,e.child,null,o),n.child.memoizedState=oo(o),n.memoizedState=so,s);if(!(n.mode&1))return zr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=ys(s,r,void 0),zr(e,n,o,r)}if(a=(o&e.childLanes)!==0,me||a){if(r=ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tn(e,i),Be(r,e,i,-1))}return ul(),r=ys(Error(S(421))),zr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Vh.bind(null,e),i._reactRetry=n,null):(e=s.treeContext,we=kn(i.nextSibling),Se=n,U=!0,De=null,e!==null&&(be[Te++]=Xe,be[Te++]=Je,be[Te++]=$n,Xe=e.id,Je=e.overflow,$n=n),n=rl(n,r.children),n.flags|=4096,n)}function Ea(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Zs(e.return,n,t)}function vs(e,n,t,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function Uc(e,n,t){var r=n.pendingProps,i=r.revealOrder,s=r.tail;if(ce(e,n,r.children,t),r=W.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ea(e,t,n);else if(e.tag===19)Ea(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(W,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&mi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),vs(n,!1,i,t,s);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&mi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}vs(n,!0,t,null,s);break;case"together":vs(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Un|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=En(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=En(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function jh(e,n,t){switch(n.tag){case 3:$c(n),yt();break;case 5:fc(n);break;case 1:ye(n.type)&&ui(n);break;case 4:Yo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;F(pi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(W,W.current&1),n.flags|=128,null):t&n.child.childLanes?Bc(e,n,t):(F(W,W.current&1),e=rn(e,n,t),e!==null?e.sibling:null);F(W,W.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Uc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(W,W.current),r)break;return null;case 22:case 23:return n.lanes=0,Oc(e,n,t)}return rn(e,n,t)}var Hc,lo,Wc,Vc;Hc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};lo=function(){};Wc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Mn(Ge.current);var s=null;switch(t){case"input":i=Ps(e,i),r=Ps(e,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=Is(e,i),r=Is(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=li)}As(t,r);var o;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xt.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xt.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(n.updateQueue=u)&&(n.flags|=4)}};Vc=function(e,n,t,r){t!==r&&(n.flags|=4)};function At(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Ah(e,n,t){var r=n.pendingProps;switch(Uo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(n),null;case 1:return ye(n.type)&&ai(),oe(n),null;case 3:return r=n.stateNode,kt(),B(ge),B(ue),Xo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,De!==null&&(go(De),De=null))),lo(e,n),oe(n),null;case 5:Ko(n);var i=Mn(ur.current);if(t=n.type,e!==null&&n.stateNode!=null)Wc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return oe(n),null}if(e=Mn(Ge.current),jr(n)){r=n.stateNode,t=n.type;var s=n.memoizedProps;switch(r[Qe]=n,r[lr]=s,e=(n.mode&1)!==0,t){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<$t.length;i++)$($t[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Il(r,s),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},$("invalid",r);break;case"textarea":Al(r,s),$("invalid",r)}As(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ir(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ir(r.textContent,a,e),i=["children",""+a]):Xt.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$("scroll",r)}switch(t){case"input":_r(r),jl(r,s,!0);break;case"textarea":_r(r),zl(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=li)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ku(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Qe]=n,e[lr]=r,Hc(e,n,!1,!1),n.stateNode=e;e:{switch(o=zs(t,r),t){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<$t.length;i++)$($t[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":Il(e,r),i=Ps(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),$("invalid",e);break;case"textarea":Al(e,r),i=Is(e,r),$("invalid",e);break;default:i=r}As(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xu(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wu(e,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Jt(e,l):typeof l=="number"&&Jt(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xt.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$("scroll",e):l!=null&&To(e,s,l,o))}switch(t){case"input":_r(e),jl(e,r,!1);break;case"textarea":_r(e),zl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_n(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ut(e,!!r.multiple,s,!1):r.defaultValue!=null&&ut(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=li)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return oe(n),null;case 6:if(e&&n.stateNode!=null)Vc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=Mn(ur.current),Mn(Ge.current),jr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Qe]=n,(s=r.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Qe]=n,n.stateNode=r}return oe(n),null;case 13:if(B(W),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&n.mode&1&&!(n.flags&128))uc(),yt(),n.flags|=98560,s=!1;else if(s=jr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(S(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Qe]=n}else yt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;oe(n),s=!1}else De!==null&&(go(De),De=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||W.current&1?J===0&&(J=3):ul())),n.updateQueue!==null&&(n.flags|=4),oe(n),null);case 4:return kt(),lo(e,n),e===null&&sr(n.stateNode.containerInfo),oe(n),null;case 10:return Qo(n.type._context),oe(n),null;case 17:return ye(n.type)&&ai(),oe(n),null;case 19:if(B(W),s=n.memoizedState,s===null)return oe(n),null;if(r=(n.flags&128)!==0,o=s.rendering,o===null)if(r)At(s,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=mi(e),o!==null){for(n.flags|=128,At(s,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)s=t,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(W,W.current&1|2),n.child}e=e.sibling}s.tail!==null&&Y()>St&&(n.flags|=128,r=!0,At(s,!1),n.lanes=4194304)}else{if(!r)if(e=mi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),At(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!U)return oe(n),null}else 2*Y()-s.renderingStartTime>St&&t!==1073741824&&(n.flags|=128,r=!0,At(s,!1),n.lanes=4194304);s.isBackwards?(o.sibling=n.child,n.child=o):(t=s.last,t!==null?t.sibling=o:n.child=o,s.last=o)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=Y(),n.sibling=null,t=W.current,F(W,r?t&1|2:t&1),n):(oe(n),null);case 22:case 23:return al(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ke&1073741824&&(oe(n),n.subtreeFlags&6&&(n.flags|=8192)):oe(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function zh(e,n){switch(Uo(n),n.tag){case 1:return ye(n.type)&&ai(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return kt(),B(ge),B(ue),Xo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ko(n),null;case 13:if(B(W),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));yt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(W),null;case 4:return kt(),null;case 10:return Qo(n.type._context),null;case 22:case 23:return al(),null;case 24:return null;default:return null}}var Mr=!1,le=!1,Mh=typeof WeakSet=="function"?WeakSet:Set,b=null;function lt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){q(e,n,r)}else t.current=null}function ao(e,n,t){try{t()}catch(r){q(e,n,r)}}var _a=!1;function Dh(e,n){if(Vs=ii,e=Ku(),$o(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,h=0,f=e,d=null;n:for(;;){for(var v;f!==t||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)d=f,f=v;for(;;){if(f===e)break n;if(d===t&&++u===i&&(a=o),d===s&&++h===r&&(l=o),(v=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=v}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Qs={focusedElem:e,selectionRange:t},ii=!1,b=n;b!==null;)if(n=b,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,b=e;else for(;b!==null;){n=b;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var k=y.memoizedProps,P=y.memoizedState,m=n.stateNode,p=m.getSnapshotBeforeUpdate(n.elementType===n.type?k:ze(n.type,k),P);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){q(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,b=e;break}b=n.return}return y=_a,_a=!1,y}function Gt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ao(n,t,s)}i=i.next}while(i!==r)}}function Di(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function uo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Qc(e){var n=e.alternate;n!==null&&(e.alternate=null,Qc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Qe],delete n[lr],delete n[Ys],delete n[kh],delete n[wh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qc(e){return e.tag===5||e.tag===3||e.tag===4}function Ca(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function co(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=li));else if(r!==4&&(e=e.child,e!==null))for(co(e,n,t),e=e.sibling;e!==null;)co(e,n,t),e=e.sibling}function po(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(po(e,n,t),e=e.sibling;e!==null;)po(e,n,t),e=e.sibling}var te=null,Me=!1;function on(e,n,t){for(t=t.child;t!==null;)Gc(e,n,t),t=t.sibling}function Gc(e,n,t){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Pi,t)}catch{}switch(t.tag){case 5:le||lt(t,n);case 6:var r=te,i=Me;te=null,on(e,n,t),te=r,Me=i,te!==null&&(Me?(e=te,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):te.removeChild(t.stateNode));break;case 18:te!==null&&(Me?(e=te,t=t.stateNode,e.nodeType===8?ds(e.parentNode,t):e.nodeType===1&&ds(e,t),tr(e)):ds(te,t.stateNode));break;case 4:r=te,i=Me,te=t.stateNode.containerInfo,Me=!0,on(e,n,t),te=r,Me=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ao(t,n,o),i=i.next}while(i!==r)}on(e,n,t);break;case 1:if(!le&&(lt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){q(t,n,a)}on(e,n,t);break;case 21:on(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,on(e,n,t),le=r):on(e,n,t);break;default:on(e,n,t)}}function ba(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Mh),n.forEach(function(r){var i=Qh.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ae(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Me=!1;break e;case 3:te=a.stateNode.containerInfo,Me=!0;break e;case 4:te=a.stateNode.containerInfo,Me=!0;break e}a=a.return}if(te===null)throw Error(S(160));Gc(s,o,i),te=null,Me=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){q(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Yc(n,e),n=n.sibling}function Yc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(n,e),He(e),r&4){try{Gt(3,e,e.return),Di(3,e)}catch(k){q(e,e.return,k)}try{Gt(5,e,e.return)}catch(k){q(e,e.return,k)}}break;case 1:Ae(n,e),He(e),r&512&&t!==null&&lt(t,t.return);break;case 5:if(Ae(n,e),He(e),r&512&&t!==null&&lt(t,t.return),e.flags&32){var i=e.stateNode;try{Jt(i,"")}catch(k){q(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=t!==null?t.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yu(i,s),zs(a,o);var u=zs(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?xu(i,f):h==="dangerouslySetInnerHTML"?wu(i,f):h==="children"?Jt(i,f):To(i,h,f,u)}switch(a){case"input":Rs(i,s);break;case"textarea":vu(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ut(i,!!s.multiple,v,!1):d!==!!s.multiple&&(s.defaultValue!=null?ut(i,!!s.multiple,s.defaultValue,!0):ut(i,!!s.multiple,s.multiple?[]:"",!1))}i[lr]=s}catch(k){q(e,e.return,k)}}break;case 6:if(Ae(n,e),He(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(k){q(e,e.return,k)}}break;case 3:if(Ae(n,e),He(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{tr(n.containerInfo)}catch(k){q(e,e.return,k)}break;case 4:Ae(n,e),He(e);break;case 13:Ae(n,e),He(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ol=Y())),r&4&&ba(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(le=(u=le)||h,Ae(n,e),le=u):Ae(n,e),He(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(b=e,h=e.child;h!==null;){for(f=b=h;b!==null;){switch(d=b,v=d.child,d.tag){case 0:case 11:case 14:case 15:Gt(4,d,d.return);break;case 1:lt(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,t=d.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(k){q(r,t,k)}}break;case 5:lt(d,d.return);break;case 22:if(d.memoizedState!==null){Na(f);continue}}v!==null?(v.return=d,b=v):Na(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Su("display",o))}catch(k){q(e,e.return,k)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(k){q(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ae(n,e),He(e),r&4&&ba(e);break;case 21:break;default:Ae(n,e),He(e)}}function He(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(qc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Jt(i,""),r.flags&=-33);var s=Ca(e);po(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ca(e);co(e,a,o);break;default:throw Error(S(161))}}catch(l){q(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Oh(e,n,t){b=e,Kc(e)}function Kc(e,n,t){for(var r=(e.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Mr;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||le;a=Mr;var u=le;if(Mr=o,(le=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?Pa(i):l!==null?(l.return=o,b=l):Pa(i);for(;s!==null;)b=s,Kc(s),s=s.sibling;b=i,Mr=a,le=u}Ta(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):Ta(e)}}function Ta(e){for(;b!==null;){var n=b;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Di(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&da(n,s,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}da(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&tr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}le||n.flags&512&&uo(n)}catch(d){q(n,n.return,d)}}if(n===e){b=null;break}if(t=n.sibling,t!==null){t.return=n.return,b=t;break}b=n.return}}function Na(e){for(;b!==null;){var n=b;if(n===e){b=null;break}var t=n.sibling;if(t!==null){t.return=n.return,b=t;break}b=n.return}}function Pa(e){for(;b!==null;){var n=b;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Di(4,n)}catch(l){q(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(l){q(n,i,l)}}var s=n.return;try{uo(n)}catch(l){q(n,s,l)}break;case 5:var o=n.return;try{uo(n)}catch(l){q(n,o,l)}}}catch(l){q(n,n.return,l)}if(n===e){b=null;break}var a=n.sibling;if(a!==null){a.return=n.return,b=a;break}b=n.return}}var Fh=Math.ceil,vi=sn.ReactCurrentDispatcher,il=sn.ReactCurrentOwner,Re=sn.ReactCurrentBatchConfig,z=0,ne=null,K=null,re=0,ke=0,at=Tn(0),J=0,hr=null,Un=0,Oi=0,sl=0,Yt=null,fe=null,ol=0,St=1/0,Ye=null,ki=!1,ho=null,Sn=null,Dr=!1,fn=null,wi=0,Kt=0,fo=null,Kr=-1,Xr=0;function de(){return z&6?Y():Kr!==-1?Kr:Kr=Y()}function xn(e){return e.mode&1?z&2&&re!==0?re&-re:xh.transition!==null?(Xr===0&&(Xr=Au()),Xr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Bu(e.type)),e):1}function Be(e,n,t,r){if(50<Kt)throw Kt=0,fo=null,Error(S(185));mr(e,t,r),(!(z&2)||e!==ne)&&(e===ne&&(!(z&2)&&(Oi|=t),J===4&&pn(e,re)),ve(e,r),t===1&&z===0&&!(n.mode&1)&&(St=Y()+500,Ai&&Nn()))}function ve(e,n){var t=e.callbackNode;xp(e,n);var r=ri(e,e===ne?re:0);if(r===0)t!==null&&Ol(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ol(t),n===1)e.tag===0?Sh(Ra.bind(null,e)):oc(Ra.bind(null,e)),yh(function(){!(z&6)&&Nn()}),t=null;else{switch(zu(r)){case 1:t=Io;break;case 4:t=Iu;break;case 16:t=ti;break;case 536870912:t=ju;break;default:t=ti}t=id(t,Xc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Xc(e,n){if(Kr=-1,Xr=0,z&6)throw Error(S(327));var t=e.callbackNode;if(ft()&&e.callbackNode!==t)return null;var r=ri(e,e===ne?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Si(e,r);else{n=r;var i=z;z|=2;var s=Zc();(ne!==e||re!==n)&&(Ye=null,St=Y()+500,Dn(e,n));do try{Uh();break}catch(a){Jc(e,a)}while(!0);Vo(),vi.current=s,z=i,K!==null?n=0:(ne=null,re=0,n=J)}if(n!==0){if(n===2&&(i=$s(e),i!==0&&(r=i,n=mo(e,i))),n===1)throw t=hr,Dn(e,0),pn(e,r),ve(e,Y()),t;if(n===6)pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!$h(i)&&(n=Si(e,r),n===2&&(s=$s(e),s!==0&&(r=s,n=mo(e,s))),n===1))throw t=hr,Dn(e,0),pn(e,r),ve(e,Y()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:In(e,fe,Ye);break;case 3:if(pn(e,r),(r&130023424)===r&&(n=ol+500-Y(),10<n)){if(ri(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gs(In.bind(null,e,fe,Ye),n);break}In(e,fe,Ye);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-$e(r);s=1<<o,o=n[o],o>i&&(i=o),r&=~s}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fh(r/1960))-r,10<r){e.timeoutHandle=Gs(In.bind(null,e,fe,Ye),r);break}In(e,fe,Ye);break;case 5:In(e,fe,Ye);break;default:throw Error(S(329))}}}return ve(e,Y()),e.callbackNode===t?Xc.bind(null,e):null}function mo(e,n){var t=Yt;return e.current.memoizedState.isDehydrated&&(Dn(e,n).flags|=256),e=Si(e,n),e!==2&&(n=fe,fe=t,n!==null&&go(n)),e}function go(e){fe===null?fe=e:fe.push.apply(fe,e)}function $h(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!Ue(s(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pn(e,n){for(n&=~sl,n&=~Oi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-$e(n),r=1<<t;e[t]=-1,n&=~r}}function Ra(e){if(z&6)throw Error(S(327));ft();var n=ri(e,0);if(!(n&1))return ve(e,Y()),null;var t=Si(e,n);if(e.tag!==0&&t===2){var r=$s(e);r!==0&&(n=r,t=mo(e,r))}if(t===1)throw t=hr,Dn(e,0),pn(e,n),ve(e,Y()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,In(e,fe,Ye),ve(e,Y()),null}function ll(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(St=Y()+500,Ai&&Nn())}}function Hn(e){fn!==null&&fn.tag===0&&!(z&6)&&ft();var n=z;z|=1;var t=Re.transition,r=O;try{if(Re.transition=null,O=1,e)return e()}finally{O=r,Re.transition=t,z=n,!(z&6)&&Nn()}}function al(){ke=at.current,B(at)}function Dn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,gh(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(Uo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ai();break;case 3:kt(),B(ge),B(ue),Xo();break;case 5:Ko(r);break;case 4:kt();break;case 13:B(W);break;case 19:B(W);break;case 10:Qo(r.type._context);break;case 22:case 23:al()}t=t.return}if(ne=e,K=e=En(e.current,null),re=ke=n,J=0,hr=null,sl=Oi=Un=0,fe=Yt=null,zn!==null){for(n=0;n<zn.length;n++)if(t=zn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}zn=null}return e}function Jc(e,n){do{var t=K;try{if(Vo(),qr.current=yi,gi){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gi=!1}if(Bn=0,ee=X=V=null,qt=!1,cr=0,il.current=null,t===null||t.return===null){J=1,hr=n,K=null;break}e:{var s=e,o=t.return,a=t,l=n;if(n=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=ya(o);if(v!==null){v.flags&=-257,va(v,o,a,s,n),v.mode&1&&ga(s,u,n),n=v,l=u;var y=n.updateQueue;if(y===null){var k=new Set;k.add(l),n.updateQueue=k}else y.add(l);break e}else{if(!(n&1)){ga(s,u,n),ul();break e}l=Error(S(426))}}else if(U&&a.mode&1){var P=ya(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),va(P,o,a,s,n),Ho(wt(l,a));break e}}s=l=wt(l,a),J!==4&&(J=2),Yt===null?Yt=[s]:Yt.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var m=zc(s,l,n);ca(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Sn===null||!Sn.has(g)))){s.flags|=65536,n&=-n,s.lanes|=n;var w=Mc(s,a,n);ca(s,w);break e}}s=s.return}while(s!==null)}nd(t)}catch(E){n=E,K===t&&t!==null&&(K=t=t.return);continue}break}while(!0)}function Zc(){var e=vi.current;return vi.current=yi,e===null?yi:e}function ul(){(J===0||J===3||J===2)&&(J=4),ne===null||!(Un&268435455)&&!(Oi&268435455)||pn(ne,re)}function Si(e,n){var t=z;z|=2;var r=Zc();(ne!==e||re!==n)&&(Ye=null,Dn(e,n));do try{Bh();break}catch(i){Jc(e,i)}while(!0);if(Vo(),z=t,vi.current=r,K!==null)throw Error(S(261));return ne=null,re=0,J}function Bh(){for(;K!==null;)ed(K)}function Uh(){for(;K!==null&&!hp();)ed(K)}function ed(e){var n=rd(e.alternate,e,ke);e.memoizedProps=e.pendingProps,n===null?nd(e):K=n,il.current=null}function nd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=zh(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,K=null;return}}else if(t=Ah(t,n,ke),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);J===0&&(J=5)}function In(e,n,t){var r=O,i=Re.transition;try{Re.transition=null,O=1,Hh(e,n,t,r)}finally{Re.transition=i,O=r}return null}function Hh(e,n,t,r){do ft();while(fn!==null);if(z&6)throw Error(S(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Ep(e,s),e===ne&&(K=ne=null,re=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Dr||(Dr=!0,id(ti,function(){return ft(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Re.transition,Re.transition=null;var o=O;O=1;var a=z;z|=4,il.current=null,Dh(e,t),Yc(t,e),uh(Qs),ii=!!Vs,Qs=Vs=null,e.current=t,Oh(t),fp(),z=a,O=o,Re.transition=s}else e.current=t;if(Dr&&(Dr=!1,fn=e,wi=i),s=e.pendingLanes,s===0&&(Sn=null),yp(t.stateNode),ve(e,Y()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ki)throw ki=!1,e=ho,ho=null,e;return wi&1&&e.tag!==0&&ft(),s=e.pendingLanes,s&1?e===fo?Kt++:(Kt=0,fo=e):Kt=0,Nn(),null}function ft(){if(fn!==null){var e=zu(wi),n=Re.transition,t=O;try{if(Re.transition=null,O=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,wi=0,z&6)throw Error(S(331));var i=z;for(z|=4,b=e.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var h=b;switch(h.tag){case 0:case 11:case 15:Gt(8,h,s)}var f=h.child;if(f!==null)f.return=h,b=f;else for(;b!==null;){h=b;var d=h.sibling,v=h.return;if(Qc(h),h===u){b=null;break}if(d!==null){d.return=v,b=d;break}b=v}}}var y=s.alternate;if(y!==null){var k=y.child;if(k!==null){y.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gt(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,b=m;break e}b=s.return}}var p=e.current;for(b=p;b!==null;){o=b;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,b=g;else e:for(o=p;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Di(9,a)}}catch(E){q(a,a.return,E)}if(a===o){b=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,b=w;break e}b=a.return}}if(z=i,Nn(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Pi,e)}catch{}r=!0}return r}finally{O=t,Re.transition=n}}return!1}function La(e,n,t){n=wt(t,n),n=zc(e,n,1),e=wn(e,n,1),n=de(),e!==null&&(mr(e,1,n),ve(e,n))}function q(e,n,t){if(e.tag===3)La(e,e,t);else for(;n!==null;){if(n.tag===3){La(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=wt(t,e),e=Mc(n,e,1),n=wn(n,e,1),e=de(),n!==null&&(mr(n,1,e),ve(n,e));break}}n=n.return}}function Wh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=de(),e.pingedLanes|=e.suspendedLanes&t,ne===e&&(re&t)===t&&(J===4||J===3&&(re&130023424)===re&&500>Y()-ol?Dn(e,0):sl|=t),ve(e,n)}function td(e,n){n===0&&(e.mode&1?(n=Tr,Tr<<=1,!(Tr&130023424)&&(Tr=4194304)):n=1);var t=de();e=tn(e,n),e!==null&&(mr(e,n,t),ve(e,t))}function Vh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),td(e,t)}function Qh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),td(e,t)}var rd;rd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ge.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,jh(e,n,t);me=!!(e.flags&131072)}else me=!1,U&&n.flags&1048576&&lc(n,di,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Yr(e,n),e=n.pendingProps;var i=gt(n,ue.current);ht(n,t),i=Zo(null,n,r,e,i,t);var s=el();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ye(r)?(s=!0,ui(n)):s=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Go(n),i.updater=Mi,n.stateNode=i,i._reactInternals=n,no(n,r,e,t),n=io(null,n,r,!0,s,t)):(n.tag=0,U&&s&&Bo(n),ce(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Yr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Gh(r),e=ze(r,e),i){case 0:n=ro(null,n,r,e,t);break e;case 1:n=Sa(null,n,r,e,t);break e;case 11:n=ka(null,n,r,e,t);break e;case 14:n=wa(null,n,r,ze(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),ro(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Sa(e,n,r,i,t);case 3:e:{if($c(n),e===null)throw Error(S(387));r=n.pendingProps,s=n.memoizedState,i=s.element,hc(e,n),fi(n,r,null,t);var o=n.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){i=wt(Error(S(423)),n),n=xa(e,n,r,t,i);break e}else if(r!==i){i=wt(Error(S(424)),n),n=xa(e,n,r,t,i);break e}else for(we=kn(n.stateNode.containerInfo.firstChild),Se=n,U=!0,De=null,t=dc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(yt(),r===i){n=rn(e,n,t);break e}ce(e,n,r,t)}n=n.child}return n;case 5:return fc(n),e===null&&Js(n),r=n.type,i=n.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,qs(r,i)?o=null:s!==null&&qs(r,s)&&(n.flags|=32),Fc(e,n),ce(e,n,o,t),n.child;case 6:return e===null&&Js(n),null;case 13:return Bc(e,n,t);case 4:return Yo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=vt(n,null,r,t):ce(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),ka(e,n,r,i,t);case 7:return ce(e,n,n.pendingProps,t),n.child;case 8:return ce(e,n,n.pendingProps.children,t),n.child;case 12:return ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,s=n.memoizedProps,o=i.value,F(pi,r._currentValue),r._currentValue=o,s!==null)if(Ue(s.value,o)){if(s.children===i.children&&!ge.current){n=rn(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ze(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Zs(s.return,t,n),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===n.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Zs(o,t,n),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===n){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ce(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,ht(n,t),i=Le(i),r=r(i),n.flags|=1,ce(e,n,r,t),n.child;case 14:return r=n.type,i=ze(r,n.pendingProps),i=ze(r.type,i),wa(e,n,r,i,t);case 15:return Dc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Yr(e,n),n.tag=1,ye(r)?(e=!0,ui(n)):e=!1,ht(n,t),Ac(n,r,i),no(n,r,i,t),io(null,n,r,!0,e,t);case 19:return Uc(e,n,t);case 22:return Oc(e,n,t)}throw Error(S(156,n.tag))};function id(e,n){return Lu(e,n)}function qh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,n,t,r){return new qh(e,n,t,r)}function cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gh(e){if(typeof e=="function")return cl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Po)return 11;if(e===Ro)return 14}return 2}function En(e,n){var t=e.alternate;return t===null?(t=Pe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Jr(e,n,t,r,i,s){var o=2;if(r=e,typeof e=="function")cl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Jn:return On(t.children,i,s,n);case No:o=8,i|=8;break;case Cs:return e=Pe(12,t,n,i|2),e.elementType=Cs,e.lanes=s,e;case bs:return e=Pe(13,t,n,i),e.elementType=bs,e.lanes=s,e;case Ts:return e=Pe(19,t,n,i),e.elementType=Ts,e.lanes=s,e;case fu:return Fi(t,i,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pu:o=10;break e;case hu:o=9;break e;case Po:o=11;break e;case Ro:o=14;break e;case un:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Pe(o,t,n,i),n.elementType=e,n.type=r,n.lanes=s,n}function On(e,n,t,r){return e=Pe(7,e,r,n),e.lanes=t,e}function Fi(e,n,t,r){return e=Pe(22,e,r,n),e.elementType=fu,e.lanes=t,e.stateNode={isHidden:!1},e}function ks(e,n,t){return e=Pe(6,e,null,n),e.lanes=t,e}function ws(e,n,t){return n=Pe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Yh(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=es(0),this.expirationTimes=es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dl(e,n,t,r,i,s,o,a,l){return e=new Yh(e,n,t,a,l),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Pe(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Go(s),e}function Kh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function sd(e){if(!e)return Cn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(ye(t))return sc(e,t,n)}return n}function od(e,n,t,r,i,s,o,a,l){return e=dl(t,r,!0,e,i,s,o,a,l),e.context=sd(null),t=e.current,r=de(),i=xn(t),s=Ze(r,i),s.callback=n??null,wn(t,s,i),e.current.lanes=i,mr(e,i,r),ve(e,r),e}function $i(e,n,t,r){var i=n.current,s=de(),o=xn(i);return t=sd(t),n.context===null?n.context=t:n.pendingContext=t,n=Ze(s,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=wn(i,n,o),e!==null&&(Be(e,i,o,s),Qr(e,i,o)),o}function xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ia(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function pl(e,n){Ia(e,n),(e=e.alternate)&&Ia(e,n)}function Xh(){return null}var ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function hl(e){this._internalRoot=e}Bi.prototype.render=hl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));$i(e,n,null,null)};Bi.prototype.unmount=hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Hn(function(){$i(null,e,null,null)}),n[nn]=null}};function Bi(e){this._internalRoot=e}Bi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ou();e={blockedOn:null,target:e,priority:n};for(var t=0;t<dn.length&&n!==0&&n<dn[t].priority;t++);dn.splice(t,0,e),t===0&&$u(e)}};function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ja(){}function Jh(e,n,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=xi(o);s.call(u)}}var o=od(n,r,e,0,null,!1,!1,"",ja);return e._reactRootContainer=o,e[nn]=o.current,sr(e.nodeType===8?e.parentNode:e),Hn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=xi(l);a.call(u)}}var l=dl(e,0,!1,null,null,!1,!1,"",ja);return e._reactRootContainer=l,e[nn]=l.current,sr(e.nodeType===8?e.parentNode:e),Hn(function(){$i(n,l,t,r)}),l}function Hi(e,n,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=xi(o);a.call(l)}}$i(n,o,e,i)}else o=Jh(t,n,e,i,r);return xi(o)}Mu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ft(n.pendingLanes);t!==0&&(jo(n,t|1),ve(n,Y()),!(z&6)&&(St=Y()+500,Nn()))}break;case 13:Hn(function(){var r=tn(e,1);if(r!==null){var i=de();Be(r,e,1,i)}}),pl(e,1)}};Ao=function(e){if(e.tag===13){var n=tn(e,134217728);if(n!==null){var t=de();Be(n,e,134217728,t)}pl(e,134217728)}};Du=function(e){if(e.tag===13){var n=xn(e),t=tn(e,n);if(t!==null){var r=de();Be(t,e,n,r)}pl(e,n)}};Ou=function(){return O};Fu=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};Ds=function(e,n,t){switch(n){case"input":if(Rs(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ji(r);if(!i)throw Error(S(90));gu(r),Rs(r,i)}}}break;case"textarea":vu(e,t);break;case"select":n=t.value,n!=null&&ut(e,!!t.multiple,n,!1)}};Cu=ll;bu=Hn;var Zh={usingClientEntryPoint:!1,Events:[yr,tt,ji,Eu,_u,ll]},zt={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ef={bundleType:zt.bundleType,version:zt.version,rendererPackageName:zt.rendererPackageName,rendererConfig:zt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pu(e),e===null?null:e.stateNode},findFiberByHostInstance:zt.findFiberByHostInstance||Xh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{Pi=Or.inject(ef),qe=Or}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zh;Ee.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fl(n))throw Error(S(200));return Kh(e,n,null,t)};Ee.createRoot=function(e,n){if(!fl(e))throw Error(S(299));var t=!1,r="",i=ld;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=dl(e,1,!1,null,null,t,!1,r,i),e[nn]=n.current,sr(e.nodeType===8?e.parentNode:e),new hl(n)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Pu(n),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Hn(e)};Ee.hydrate=function(e,n,t){if(!Ui(n))throw Error(S(200));return Hi(null,e,n,!0,t)};Ee.hydrateRoot=function(e,n,t){if(!fl(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=ld;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=od(n,null,e,1,t??null,i,!1,s,o),e[nn]=n.current,sr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Bi(n)};Ee.render=function(e,n,t){if(!Ui(n))throw Error(S(200));return Hi(null,e,n,!1,t)};Ee.unmountComponentAtNode=function(e){if(!Ui(e))throw Error(S(40));return e._reactRootContainer?(Hn(function(){Hi(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};Ee.unstable_batchedUpdates=ll;Ee.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ui(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Hi(e,n,t,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function ad(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ad)}catch(e){console.error(e)}}ad(),au.exports=Ee;var nf=au.exports,Aa=nf;Es.createRoot=Aa.createRoot,Es.hydrateRoot=Aa.hydrateRoot;var za="1.3.27";function ud(e,n,t){return Math.max(e,Math.min(n,t))}function tf(e,n,t){return(1-t)*e+t*n}function rf(e,n,t,r){return tf(e,n,1-Math.exp(-t*r))}function sf(e,n){return(e%n+n)%n}var of=class{constructor(){x(this,"isRunning",!1);x(this,"value",0);x(this,"from",0);x(this,"to",0);x(this,"currentTime",0);x(this,"lerp");x(this,"duration");x(this,"easing");x(this,"onUpdate")}advance(e){var t;if(!this.isRunning)return;let n=!1;if(this.duration&&this.easing){this.currentTime+=e;const r=ud(0,this.currentTime/this.duration,1);n=r>=1;const i=n?1:this.easing(r);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=rf(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,n=!0)):(this.value=this.to,n=!0);n&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,n)}stop(){this.isRunning=!1}fromTo(e,n,{lerp:t,duration:r,easing:i,onStart:s,onUpdate:o}){this.from=this.value=e,this.to=n,this.lerp=t,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function lf(e,n){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>{t=void 0,e.apply(this,r)},n)}}var af=class{constructor(e,n,{autoResize:t=!0,debounce:r=250}={}){x(this,"width",0);x(this,"height",0);x(this,"scrollHeight",0);x(this,"scrollWidth",0);x(this,"debouncedResize");x(this,"wrapperResizeObserver");x(this,"contentResizeObserver");x(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});x(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});x(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=n,t&&(this.debouncedResize=lf(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,n;(e=this.wrapperResizeObserver)==null||e.disconnect(),(n=this.contentResizeObserver)==null||n.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},cd=class{constructor(){x(this,"events",{})}emit(e,...n){var r;const t=this.events[e]||[];for(let i=0,s=t.length;i<s;i++)(r=t[i])==null||r.call(t,...n)}on(e,n){return this.events[e]?this.events[e].push(n):this.events[e]=[n],()=>{var t;this.events[e]=(t=this.events[e])==null?void 0:t.filter(r=>n!==r)}}off(e,n){var t;this.events[e]=(t=this.events[e])==null?void 0:t.filter(r=>n!==r)}destroy(){this.events={}}};const uf=100/6,ln={passive:!1};function Ma(e,n){return e===1?uf:e===2?n:1}var cf=class{constructor(e,n={wheelMultiplier:1,touchMultiplier:1}){x(this,"touchStart",{x:0,y:0});x(this,"lastDelta",{x:0,y:0});x(this,"window",{width:0,height:0});x(this,"emitter",new cd);x(this,"onTouchStart",e=>{const{clientX:n,clientY:t}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=n,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});x(this,"onTouchMove",e=>{const{clientX:n,clientY:t}=e.targetTouches?e.targetTouches[0]:e,r=-(n-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=n,this.touchStart.y=t,this.lastDelta={x:r,y:i},this.emitter.emit("scroll",{deltaX:r,deltaY:i,event:e})});x(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});x(this,"onWheel",e=>{let{deltaX:n,deltaY:t,deltaMode:r}=e;const i=Ma(r,this.window.width),s=Ma(r,this.window.height);n*=i,t*=s,n*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:n,deltaY:t,event:e})});x(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=n,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ln),this.element.addEventListener("touchstart",this.onTouchStart,ln),this.element.addEventListener("touchmove",this.onTouchMove,ln),this.element.addEventListener("touchend",this.onTouchEnd,ln)}on(e,n){return this.emitter.on(e,n)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ln),this.element.removeEventListener("touchstart",this.onTouchStart,ln),this.element.removeEventListener("touchmove",this.onTouchMove,ln),this.element.removeEventListener("touchend",this.onTouchEnd,ln)}};const Da=e=>Math.min(1,1.001-2**(-10*e));var df=class{constructor({wrapper:e=window,content:n=document.documentElement,eventsTarget:t=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:u=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:v=1,wheelMultiplier:y=1,autoResize:k=!0,prevent:P,virtualScroll:m,overscroll:p=!0,autoRaf:g=!1,anchors:w=!1,autoToggle:E=!1,allowNestedScroll:_=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:N=C,stopInertiaOnNavigate:H=!1,respectReducedMotion:I=!0}={}){x(this,"_isScrolling",!1);x(this,"_isStopped",!1);x(this,"_isLocked",!1);x(this,"_preventNextNativeScrollEvent",!1);x(this,"_resetVelocityTimeout",null);x(this,"_rafId",null);x(this,"_isDraggingSelection",!1);x(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));x(this,"isTouching");x(this,"isIos");x(this,"time",0);x(this,"userData",{});x(this,"lastVelocity",0);x(this,"velocity",0);x(this,"direction",0);x(this,"options");x(this,"targetScroll");x(this,"animatedScroll");x(this,"animate",new of);x(this,"emitter",new cd);x(this,"dimensions");x(this,"virtualScroll");x(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});x(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});x(this,"onTransitionEnd",e=>{var n;(n=e.propertyName)!=null&&n.includes("overflow")&&e.target===this.rootElement&&this.checkOverflow()});x(this,"onClick",e=>{const n=e.composedPath().filter(r=>r instanceof HTMLAnchorElement&&r.href).map(r=>new URL(r.href)),t=new URL(window.location.href);if(this.options.anchors){const r=n.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(r){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(r.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&n.some(r=>t.host===r.host&&t.pathname!==r.pathname)){this.reset();return}});x(this,"onPointerDown",e=>{e.button===1&&this.reset()});x(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:n,deltaY:t,event:r}=e;if(this.emitter.emit("virtual-scroll",{deltaX:n,deltaY:t,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const i=r.type.includes("touch"),s=r.type.includes("wheel");if(i&&this.isIos&&(r.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=r.type==="touchstart"||r.type==="touchmove";const o=n===0&&t===0;if(this.options.syncTouch&&i&&r.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&n===0;if(o||a)return;let l=r.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const u=this.options.prevent,h=Math.abs(n)>=Math.abs(t)?"horizontal":"vertical";if(l.find(y=>{var k,P,m,p,g;return y instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(y))||((k=y.hasAttribute)==null?void 0:k.call(y,"data-lenis-prevent"))||h==="vertical"&&((P=y.hasAttribute)==null?void 0:P.call(y,"data-lenis-prevent-vertical"))||h==="horizontal"&&((m=y.hasAttribute)==null?void 0:m.call(y,"data-lenis-prevent-horizontal"))||i&&((p=y.hasAttribute)==null?void 0:p.call(y,"data-lenis-prevent-touch"))||s&&((g=y.hasAttribute)==null?void 0:g.call(y,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(y,{deltaX:n,deltaY:t}))}))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(n)?t:n:this.options.gestureOrientation==="horizontal"&&(f=n),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const d=i&&this.options.syncTouch,v=i&&r.type==="touchend";v&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:v?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});x(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});x(this,"raf",e=>{const n=e-(this.time||e);this.time=e,this.animate.advance(n*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=za,window.lenis||(window.lenis={}),window.lenis.version=za,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!e||e===document.documentElement)&&(e=window),typeof a=="number"&&typeof l!="function"?l=Da:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:e,content:n,eventsTarget:t,smoothWheel:r,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:u,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:v,wheelMultiplier:y,autoResize:k,prevent:P,virtualScroll:m,overscroll:p,autoRaf:g,anchors:w,autoToggle:E,allowNestedScroll:_,naiveDimensions:N,stopInertiaOnNavigate:H,respectReducedMotion:I},this.dimensions=new af(e,n,{autoResize:k}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new cf(t,{touchMultiplier:v,wheelMultiplier:y}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,n){return this.emitter.on(e,n)}off(e,n){return this.emitter.off(e,n)}get overflow(){const e=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[e]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}isTouchOnSelectionHandle(e){const n=window.getSelection();if(!n||n.isCollapsed||n.rangeCount===0)return!1;const t=e.targetTouches[0]??e.changedTouches[0];if(!t)return!1;const r=n.getRangeAt(0).getClientRects();if(r.length===0)return!1;const i=r[0],s=r[r.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:n=0,immediate:t=!1,lock:r=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:u,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=e,v=n;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let y=null;if(typeof d=="string"?(y=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),y||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(y=d),y){if(this.options.wrapper!==window){const w=this.rootElement.getBoundingClientRect();v-=this.isHorizontal?w.left:w.top}const k=y.getBoundingClientRect(),P=getComputedStyle(y),m=this.isHorizontal?Number.parseFloat(P.scrollMarginLeft):Number.parseFloat(P.scrollMarginTop),p=getComputedStyle(this.rootElement),g=this.isHorizontal?Number.parseFloat(p.scrollPaddingLeft):Number.parseFloat(p.scrollPaddingTop);d=(this.isHorizontal?k.left:k.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(g)?0:g)}}if(typeof d=="number"){if(d+=v,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const y=d-this.animatedScroll;y>this.limit/2?d-=this.limit:y<-this.limit/2&&(d+=this.limit)}}else d=ud(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),u==null||u(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=Da:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(y,k)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=y-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=y,this.setScroll(this.scroll),i&&(this.targetScroll=y),k||this.emit(),k&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:n,deltaY:t}){const r=Date.now();e._lenis||(e._lenis={});const i=e._lenis;let s,o,a,l,u,h,f,d,v,y;if(r-(i.time??0)>2e3){i.time=Date.now();const _=window.getComputedStyle(e);if(i.computedStyle=_,s=["auto","overlay","scroll"].includes(_.overflowX),o=["auto","overlay","scroll"].includes(_.overflowY),u=["auto"].includes(_.overscrollBehaviorX),h=["auto"].includes(_.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=e.scrollWidth,d=e.scrollHeight,v=e.clientWidth,y=e.clientHeight,a=f>v,l=d>y,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=d,i.clientWidth=v,i.clientHeight=y,i.hasOverscrollBehaviorX=u,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,d=i.scrollHeight,v=i.clientWidth,y=i.clientHeight,u=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const k=Math.abs(n)>=Math.abs(t)?"horizontal":"vertical";let P,m,p,g,w,E;if(k==="horizontal")P=Math.round(e.scrollLeft),m=f-v,p=n,g=s,w=a,E=u;else if(k==="vertical")P=Math.round(e.scrollTop),m=d-y,p=t,g=o,w=l,E=h;else return!1;return!E&&(P>=m||P<=0)?!0:(p>0?P<m:P>0)&&g&&w}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?sf(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(const e of Array.from(this.rootElement.classList))(e==="lenis"||e.startsWith("lenis-"))&&this.rootElement.classList.remove(e)}};let Ne=null;function pf(){return Ne||(Ne=new df({autoRaf:!0,lerp:.085})),()=>{Ne==null||Ne.destroy(),Ne=null}}const hf=()=>-parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-height")||"0");function ff(e){const n=document.getElementById(e);return n?(Ne?Ne.scrollTo(n,{offset:hf()}):n.scrollIntoView({behavior:"smooth"}),!0):!1}function Oa(e){Ne?Ne.scrollTo(e,{immediate:!0,force:!0}):window.scrollTo(0,e)}function mf(e){Ne?Ne.scrollTo(e,{duration:1.2}):window.scrollTo({top:e,behavior:"smooth"})}const gf=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"experience",label:"Experience"},{id:"featured",label:"Featured"},{id:"projects",label:"Projects"},{id:"notes",label:"Notes"},{id:"contact",label:"Contact"}];function yf(e){M.useEffect(()=>{const n=document.documentElement,t=new ResizeObserver(([r])=>{n.style.setProperty("--nav-height",`${Math.ceil(r.borderBoxSize[0].blockSize)}px`)});return t.observe(e.current),()=>t.disconnect()},[e])}function vf(e,n){window.location.hash.startsWith("#/notes/")||ff(n)&&(e.preventDefault(),history.replaceState(null,"",`#${n}`))}const kf=()=>{const e=M.useRef(null);return yf(e),c.jsx("nav",{className:"navigation",ref:e,children:c.jsxs("div",{className:"nav-container",children:[c.jsx("div",{className:"nav-logo",children:c.jsx("a",{href:"#home",children:"Alec Zhou"})}),c.jsx("ul",{className:"nav-menu",children:gf.map(n=>c.jsx("li",{className:"nav-item",children:c.jsx("a",{className:"nav-link",href:`#${n.id}`,onClick:t=>vf(t,n.id),children:n.label})},n.id))})]})})},wf=String.raw`
 █████╗ ██╗     ███████╗ ██████╗    ███████╗██╗  ██╗ ██████╗ ██╗   ██╗
██╔══██╗██║     ██╔════╝██╔════╝    ╚══███╔╝██║  ██║██╔═══██╗██║   ██║
███████║██║     █████╗  ██║           ███╔╝ ███████║██║   ██║██║   ██║
██╔══██║██║     ██╔══╝  ██║          ███╔╝  ██╔══██║██║   ██║██║   ██║
██║  ██║███████╗███████╗╚██████╗    ███████╗██║  ██║╚██████╔╝╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝    ╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝`.slice(1),Sf=()=>c.jsx("section",{id:"home",className:"hero",children:c.jsx("div",{className:"hero-container",children:c.jsxs("div",{className:"hero-content",children:[c.jsx("h1",{className:"hero-title",children:"Alec Zhou"}),c.jsx("pre",{className:"hero-banner","aria-hidden":"true",children:wf}),c.jsxs("h2",{className:"hero-subtitle",children:["$ Computer Science & Mathematics Student",c.jsx("span",{className:"cursor","aria-hidden":"true",children:"█"})]}),c.jsx("p",{className:"hero-description",children:"Full-stack developer and AI enthusiast pursuing Computer Science and Applied Mathematics at the University of Maryland. Passionate about building innovative solutions and automating complex processes."}),c.jsxs("div",{className:"hero-links",children:[c.jsx("a",{href:"https://linkedin.com/in/alec-zhou-a59863286/",target:"_blank",rel:"noopener noreferrer",className:"hero-link",children:"LinkedIn"}),c.jsx("a",{href:"https://github.com/azhou555",target:"_blank",rel:"noopener noreferrer",className:"hero-link",children:"GitHub"}),c.jsx("a",{href:"mailto:alec1.zhou@gmail.com",className:"hero-link",children:"Email"}),c.jsx("a",{href:"./AlecZhou_Resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"hero-link",children:"Resume"}),c.jsx("a",{href:"./AlecZhou_Unofficial_Transcript.pdf",target:"_blank",rel:"noopener noreferrer",className:"hero-link",children:"Transcript"})]})]})})}),xf=()=>{const e=["Advanced Calculus","Discrete Structures","Theory and Methods of Statistics","Linear Algebra","Mathematics of Finance","Computational Methods","Dynamics and Chaos"],n=["Algorithms","Operating Systems","Distributed Systems","Database Design","Compilers","Deep Learning","Computer and Network Security","Networks","Computer Architecture","Software Development with GenAI"],t=["Java","Python","TypeScript","JavaScript","Rust","C","C++","SQL","HTML","CSS"],r=["Spring Boot","FastAPI","React","Next.js","Node.js","LangChain","PyTorch","Pandas","Azure","AWS","Docker","Git","CI/CD"],i=["MySQL","PostgreSQL","SQLite","MongoDB","Redis"],s=["Linux","Unix"];return c.jsx("section",{id:"about",className:"about",children:c.jsxs("div",{className:"about-container",children:[c.jsx("h2",{className:"section-title",children:"About Me"}),c.jsxs("div",{className:"about-grid",children:[c.jsxs("div",{className:"about-card",children:[c.jsx("h3",{children:"Education"}),c.jsxs("div",{className:"education-info",children:[c.jsx("h4",{children:"University of Maryland - College Park"}),c.jsx("p",{className:"degree",children:"Computer Science & Mathematics: Applied Math Track"}),c.jsx("p",{className:"gpa",children:"GPA: 3.9/4.0"}),c.jsx("p",{className:"graduation",children:"Expected Graduation: May 2027"})]})]}),c.jsxs("div",{className:"about-card",children:[c.jsx("h3",{children:"Relevant Coursework"}),c.jsxs("div",{className:"coursework",children:[c.jsxs("div",{className:"course-category",children:[c.jsx("h4",{children:"Mathematics"}),c.jsx("ul",{children:e.map((o,a)=>c.jsx("li",{children:o},a))})]}),c.jsxs("div",{className:"course-category",children:[c.jsx("h4",{children:"Computer Science"}),c.jsx("ul",{children:n.map((o,a)=>c.jsx("li",{children:o},a))})]})]})]}),c.jsxs("div",{className:"about-card",children:[c.jsx("h3",{children:"Technical Skills"}),c.jsxs("div",{className:"skills",children:[c.jsxs("div",{className:"skill-category",children:[c.jsx("h4",{children:"Languages"}),c.jsx("div",{className:"skill-tags",children:t.map((o,a)=>c.jsx("span",{className:"skill-tag",children:o},a))})]}),c.jsxs("div",{className:"skill-category",children:[c.jsx("h4",{children:"Frameworks, Cloud & Tools"}),c.jsx("div",{className:"skill-tags",children:r.map((o,a)=>c.jsx("span",{className:"skill-tag",children:o},a))})]}),c.jsxs("div",{className:"skill-category",children:[c.jsx("h4",{children:"Databases"}),c.jsx("div",{className:"skill-tags",children:i.map((o,a)=>c.jsx("span",{className:"skill-tag",children:o},a))})]}),c.jsxs("div",{className:"skill-category",children:[c.jsx("h4",{children:"Operating Systems"}),c.jsx("div",{className:"skill-tags",children:s.map((o,a)=>c.jsx("span",{className:"skill-tag",children:o},a))})]})]})]})]})]})})},Ef=[{company:"M&T Bank",location:"Buffalo, NY",position:"Software Engineer Intern",duration:"June 2026 – August 2026",responsibilities:["Delivered changes across 15+ core-banking Java Spring Boot microservices, carrying REST API and SQL work from technical discovery and design documentation through implementation and testing","Prepared 15+ services for an Azure migration by improving logging accuracy and PII masking across application and third-party logs","Designed and implemented an end-to-end Spring Boot API-key service with generation, validation, rotation, and revocation backed by PostgreSQL and secure hashing and encryption","Implemented positive and negative caching, secret handling, failure behavior, and integration tests for a critical request path designed to support millions of daily requests","Upgraded legacy services to newer Spring Boot versions and remediated dependency-audit vulnerabilities"]},{company:"Blake Willson Group",location:"Arlington, VA",position:"AI and Process Automation Intern",duration:"June 2025 – August 2025",responsibilities:["Built a Python/LangChain RAG system over internal company data with a chat interface supporting semantic retrieval and fuzzy search","Integrated external APIs into AI-assisted workflows for contract drafting and data processing","Presented AI and automation solutions to the CEO and senior leadership, translating technical capabilities into business use cases"]},{company:"Oceus Networks",location:"Herndon, VA",position:"Software Engineer Intern",duration:"July 2023 – August 2023",responsibilities:["Enhanced an internal asset-management application using PHP, Laravel, and MySQL","Built and tested Python/Pandas pipelines to sanitize and transform operational data for integration with the asset-management application"]}],_f=[{organization:"King Farm Tennis",location:"Rockville & Bethesda, MD",position:"Founder & Coach",duration:"2019 – 2025",responsibilities:["Founded a program serving 20+ students through group and private instruction"]}],Cf=()=>c.jsx("section",{id:"experience",className:"experience",children:c.jsxs("div",{className:"experience-container",children:[c.jsx("h2",{className:"section-title",children:"Experience"}),c.jsxs("div",{className:"experience-section",children:[c.jsx("h3",{className:"experience-category-title",children:"Professional Experience"}),Ef.map((e,n)=>c.jsxs("div",{className:"experience-card",children:[c.jsxs("div",{className:"experience-header",children:[c.jsxs("div",{className:"experience-title",children:[c.jsx("h4",{children:e.position}),c.jsx("h5",{children:e.company})]}),c.jsxs("div",{className:"experience-meta",children:[c.jsx("span",{className:"experience-location",children:e.location}),c.jsx("span",{className:"experience-duration",children:e.duration})]})]}),c.jsx("ul",{className:"experience-responsibilities",children:e.responsibilities.map((t,r)=>c.jsx("li",{children:t},r))})]},n))]}),c.jsxs("div",{className:"experience-section",children:[c.jsx("h3",{className:"experience-category-title",children:"Leadership Experience"}),_f.map((e,n)=>c.jsxs("div",{className:"experience-card",children:[c.jsxs("div",{className:"experience-header",children:[c.jsxs("div",{className:"experience-title",children:[c.jsx("h4",{children:e.position}),c.jsx("h5",{children:e.organization})]}),c.jsxs("div",{className:"experience-meta",children:[c.jsx("span",{className:"experience-location",children:e.location}),c.jsx("span",{className:"experience-duration",children:e.duration})]})]}),c.jsx("ul",{className:"experience-responsibilities",children:e.responsibilities.map((t,r)=>c.jsx("li",{children:t},r))})]},n))]})]})}),bf=[{id:"tagteam",title:"tagteam",body:["Cross-agent review for coding agents. When one agent ends a turn that changed code, a plan, or a design doc, a different agent reviews the change, read-only.","Large, high-risk, and design changes block: the author waits and fixes real problems before the turn ends. Small changes are reviewed in the background and come back as suggestions."],points:["Works across Claude Code, Codex, Copilot CLI, Antigravity, and OpenCode","Runs locally on your own accounts; sends nothing anywhere else","Hooks fail open, so a broken tagteam never blocks an agent"],repoLink:"https://github.com/azhou555/tagteam",review:{file:"tagteam / README.md",author:"claude",reviewer:"codex",lines:[{text:"Cross-agent review for coding agents."},{text:"When one agent ends a turn that changed code,"},{text:"a plan, or a design doc, a different agent"},{text:"reviews the change, read-only."},{text:""},{text:"Large, high-risk, and design changes block:"},{text:"the author waits.",note:"Waits for what? Say what the author does.",fix:"the author waits and fixes real problems."},{text:"Small changes come back as suggestions."},{text:""},{text:"* Claude Code, Codex, Copilot CLI, Antigravity, OpenCode"},{text:"* Runs locally, on your own accounts"},{text:"* Hooks fail open: tagteam never blocks an agent"}]}},{id:"gatoway",title:"gatoway",body:["A cost-aware LLM gateway. Each request is embedded locally and matched against a bank of past requests and how well each model answered them.","The router walks eight model rungs from cheapest up and takes the first whose scores on the nearest past requests average at least 0.7, falling back to gpt-oss when there is no evidence. Every rung has a circuit breaker with a configured fallback model."],points:["OpenAI-compatible endpoint; embeddings stay local","Eight rungs, from a 12B model up to a 1T model","Eight-task dry run: compute proxy cut 71% for a three-point effectiveness delta"],repoLink:"https://github.com/azhou555/gatoway"}],Tf=(()=>{try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}})(),Nf=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Fa(){const e=getComputedStyle(document.documentElement),n=t=>e.getPropertyValue(t).trim();return{text:n("--color-text"),muted:n("--color-muted"),background:n("--color-background")}}function Pf(){const[e,n]=M.useState(Fa);return M.useEffect(()=>{const t=window.matchMedia("(prefers-color-scheme: dark)"),r=()=>n(Fa());return t.addEventListener("change",r),()=>t.removeEventListener("change",r)},[]),e}class Rf extends M.Component{constructor(){super(...arguments);x(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?this.props.fallback:this.props.children}}const Lf=()=>c.jsx("div",{className:"feature-frame","aria-hidden":"true"}),If=({project:e,Scene:n})=>{const t=M.useRef(null),r=M.useRef(null),i=M.useRef(0),[s,o]=M.useState(!1),[a]=M.useState(Nf),l=Pf();M.useEffect(()=>{const f=new IntersectionObserver(([d])=>o(d.isIntersecting));return f.observe(t.current),()=>f.disconnect()},[]),M.useEffect(()=>{if(!s)return;const f=()=>{const d=r.current.getBoundingClientRect(),v=(window.innerHeight-d.top)/(window.innerHeight+d.height);i.current=Math.min(1,Math.max(0,v))};return f(),window.addEventListener("scroll",f,{passive:!0}),window.addEventListener("resize",f),()=>{window.removeEventListener("scroll",f),window.removeEventListener("resize",f)}},[s]);const u=c.jsx(Lf,{}),h=a?"demand":s?"always":"never";return c.jsxs("section",{id:e.id,className:"feature",ref:t,children:[c.jsxs("div",{className:"feature-text",children:[c.jsxs("h3",{className:"feature-title",children:["## ",e.title.toUpperCase()]}),e.body.map(f=>c.jsx("p",{children:f},f)),c.jsx("ul",{className:"feature-points",children:e.points.map(f=>c.jsx("li",{children:f},f))}),c.jsx("a",{className:"hero-link",href:e.repoLink,target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]}),c.jsx("div",{className:"feature-visual",ref:r,children:n&&Tf?c.jsx(Rf,{fallback:u,children:c.jsx(M.Suspense,{fallback:u,children:c.jsx(n,{progressRef:i,staticProgress:a?e.staticProgress:void 0,colors:l,frameloop:h,visible:s})})}):u})]})},dd=e=>Math.min(1,Math.max(0,e)),mn=(e,[n,t])=>dd((e-n)/(t-n)),Ei=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function jf(e){const[n,t]=M.useState(()=>Ei()?1:0);return M.useEffect(()=>{if(Ei())return;let r=0,i=0,s=!1;const o=()=>{const u=e.current.getBoundingClientRect(),h=u.height-window.innerHeight;return dd(-u.top/Math.max(1,h))},a=()=>{const u=o();i+=(u-i)*.12,Math.abs(u-i)<4e-4&&(i=u),t(h=>Math.abs(h-i)>3e-4?i:h),r=s?requestAnimationFrame(a):0},l=new IntersectionObserver(([u])=>{s=u.isIntersecting,s&&!r&&(r=requestAnimationFrame(a))});return l.observe(e.current),()=>{l.disconnect(),cancelAnimationFrame(r)}},[e]),n}function pd({p:e,wireAt:n,typeAt:t,text:r}){const i=mn(e,n),s=Math.round(mn(e,t)*r.length);return c.jsxs("div",{className:"outcome","aria-hidden":s===0,children:[c.jsx("span",{className:"outcome-wire",style:{transform:`scaleY(${i})`}}),c.jsx("span",{className:`outcome-node${i>=1?" is-on":""}`}),s>0&&c.jsxs("span",{className:"outcome-callout",children:[r.slice(0,s),s<r.length&&c.jsx("span",{className:"sheet-caret"})]})]})}const yo=[.04,.38],ml=[.38,.46],Kn=[.46,.68],hd=[.7,.73],Af=[.73,.81],$a=.82,_i=[.84,.88],zf=[.88,.905],Mf=[.905,.95],Ba=[{label:"Write",at:yo[0]},{label:"Hook",at:ml[0]},{label:"Review",at:Kn[0]},{label:"Fix",at:hd[0]},{label:"Approved",at:_i[0]}];function Df(e,n){const{lines:t,author:r,reviewer:i}=n,s=t.reduce((k,P)=>k+P.text.length,0),o=mn(e,yo);let a=o<1?Math.floor(o*s):1/0;const l=mn(e,Kn)*t.length,u=e>=Kn[0]&&e<Kn[1],h=t.map((k,P)=>{const m=a>0,p=k.text.slice(0,Math.max(0,a)),g=a>=0&&a<k.text.length;a-=k.text.length;const w=l>=P+1,E=!!k.note&&w,_=k.fix?mn(e,hd):0,C=k.fix?Math.floor(mn(e,Af)*k.fix.length):0,N=k.fix&&e>=$a;return{n:P+1,sign:k.text?"+":"",text:C>0?k.fix.slice(0,C):p,caret:g||k.fix&&C>0&&C<k.fix.length,strike:C>0?0:_,visible:k.text?p.length>0:m,scanning:u&&Math.floor(l)===P,mark:w?E&&!N?"✗":"✓":"",flagged:E&&!N,note:E?k.note:null,resolved:N}}),f=h.filter(k=>k.sign&&k.text).length,d=e<yo[1]?`${r} · writing…`:e<ml[1]?`turn ended → hook → ${i}`:e<Kn[1]?`${i} · reviewing, read-only…`:e<_i[0]?`${r} · fixing 1 issue…`:`✓ approved by ${i}`,v=e>=Kn[0]?t.filter((k,P)=>k.note&&l>=P+1).length:0,y=e>=$a?0:v;return{rows:h,status:d,linesTyped:f,issues:v,open:y}}function Of({project:e}){const n=M.useRef(null),t=jf(n),{review:r}=e,{rows:i,status:s,linesTyped:o,issues:a,open:l}=Df(t,r),u=mn(t,ml),h=mn(t,_i)*i.length,f=Ba.reduce((v,y,k)=>t>=y.at?k:v,0),d=v=>{const y=n.current.getBoundingClientRect(),k=y.height-window.innerHeight;mf(window.scrollY+y.top+(v+.02)*k)};return c.jsxs("section",{id:e.id,className:"feature pinned",ref:n,children:[c.jsx("div",{className:"pin-col",children:c.jsxs("div",{className:"pin-sticky review-intro",children:[c.jsxs("h3",{className:"feature-title",children:["## ",e.title.toUpperCase()]}),c.jsx("p",{children:"This description is reviewed the way tagteam reviews code: written by one agent, checked by another, fixed, then approved. Scroll to watch."}),c.jsx("ol",{className:"review-rail",children:Ba.map((v,y)=>c.jsx("li",{className:y<f?"is-done":y===f?"is-active":void 0,children:c.jsxs("button",{type:"button",onClick:()=>d(v.at),children:[c.jsx("span",{className:"review-rail-num",children:String(y+1).padStart(2,"0")})," ",v.label]})},v.label))}),c.jsx("a",{className:"hero-link",href:e.repoLink,target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]})}),c.jsx("div",{className:"pin-col feature-visual",children:c.jsx("div",{className:"pin-sticky",children:c.jsxs("div",{className:"sheet",children:[c.jsxs("header",{className:"sheet-head",children:[c.jsx("span",{children:r.file}),c.jsx("span",{className:"sheet-status",children:s}),c.jsx("span",{className:"sheet-hook",style:{transform:`scaleX(${u})`,opacity:u>0&&u<1?1:0}})]}),c.jsx("ol",{className:"sheet-lines","aria-label":`${e.title} description under review`,children:i.map(v=>c.jsxs("li",{className:["sheet-line",v.scanning&&"is-scanning",v.flagged&&"is-flagged",!v.visible&&"is-pending",h>v.n-1&&"is-signed"].filter(Boolean).join(" "),children:[c.jsx("span",{className:"sheet-num",children:v.n}),c.jsx("span",{className:"sheet-sign",children:v.sign}),c.jsxs("span",{className:"sheet-text",children:[c.jsx("span",{className:"sheet-strike",style:{"--strike":v.strike},children:v.text}),v.caret&&c.jsx("span",{className:"sheet-caret"})]}),c.jsx("span",{className:`sheet-mark${v.mark==="✗"||v.resolved?" is-red":""}`,children:v.mark}),c.jsx("span",{className:`sheet-thread${v.note&&t<_i[0]?" is-open":""}${v.resolved?" is-resolved":""}`,children:c.jsxs("span",{className:"sheet-note",children:[c.jsx("b",{children:r.reviewer})," ",v.resolved?"Resolved.":v.note||""]})})]},v.n))}),c.jsxs("footer",{className:"sheet-foot",children:[c.jsxs("span",{children:["+",o," lines"]}),c.jsxs("span",{children:[a," issue",a===1?"":"s"]}),c.jsxs("span",{children:[l," open"]})]}),c.jsx(pd,{p:t,wireAt:zf,typeAt:Mf,text:`approved · ${r.reviewer} · 0 open`})]})})})]})}const Ff=102,$f=.7,Bf=.3,Uf=2,Hf=[{name:"gemma-small",params:12},{name:"qwen3-small",params:27},{name:"gpt-oss",params:120},{name:"qwen3",params:180},{name:"minimax-m2",params:230},{name:"deepseek-v4-flash",params:304},{name:"glm-5",params:753},{name:"kimi",params:1e3}],Wf=[{task_id:"capital_france",prompt:"What is the capital of France?",rung:"gemma-small",low_confidence:!1,neighbors:[{prompt:"Name Portugal's capital city.",similarity:.511,scores:[1,1,1,1,1,1,1,1]},{prompt:"Which city serves as Kenya's national capital?",similarity:.327,scores:[1,1,1,1,1,1,1,1]},{prompt:"Identify the capital city of Peru.",similarity:.273,scores:[1,1,1,1,1,1,1,1]},{prompt:"What Celsius temperature corresponds to a reading of 14 F?",similarity:.21,scores:[1,1,1,1,1,1,1,1]},{prompt:"A thermometer reads 86 F. Express that temperature in Celsius.",similarity:.14,scores:[1,1,1,1,1,1,1,1]}]},{task_id:"sql_query",prompt:"Write a SQL query to find the second-highest salary from an employees table.",rung:"qwen3-small",low_confidence:!1,neighbors:[{prompt:"Return the two largest distinct salary amounts from employees(id, name, salary), in descending order, using SQL. Return the available amounts when fewer than two exist.",similarity:.813,scores:[1,1,0,1,1,1,1,1]},{prompt:"Query employees(id, name, salary) for its third-largest distinct salary. Ignore duplicate amounts; return no rows if fewer than three distinct amounts exist. Return exactly one column named salary containing the amount, not employee records. Use a read-only SQL SELECT.",similarity:.759,scores:[1,0,0,0,0,0,1,1]},{prompt:"Using employees(id, name, salary), return the maximum salary as one SQL scalar aggregate. An empty table should return NULL.",similarity:.676,scores:[1,1,1,1,1,1,1,1]},{prompt:'Crate A weighs 5 kg, value 9; B weighs 3, value 7; C weighs 2, value 4; D weighs 4, value 8. The van holds at most 7 kg and each crate ships at most once. Maximize total value. Return {"jobs": sorted array of letters, "value": integer}. Respond with only a JSON object (no prose, no markdown fence).',similarity:.321,scores:[0,1,1,1,1,1,1,1]},{prompt:'Patient A needs 4 minutes for benefit 7; B needs 6 for 10; C needs 3 for 6; D needs 5 for 8. The slot is 9 minutes and each patient is seen at most once. Maximize total benefit. Return {"jobs": sorted array of letters, "value": integer}. Respond with only a JSON object (no prose, no markdown fence).',similarity:.32,scores:[0,1,1,1,0,1,1,1]}]},{task_id:"longest_unique",prompt:`Export function longestUnique(text: string): number. Return the longest contiguous substring length with no repeated Unicode code points. Count code points, not UTF-16 code units. Empty input returns 0.
Return a single fenced typescript code block, with no dependencies.`,rung:"gpt-oss",low_confidence:!1,neighbors:[{prompt:`Export function maxWindowSum(nums: number[], k: number): number | null. Return the largest sum of exactly k consecutive entries. Return null when k<=0 or k>nums.length. All inputs are integers and sums fit safely in a number.
Return a single fenced typescript code block, with no dependencies.`,similarity:.597,scores:[1,1,1,1,1,1,1,1]},{prompt:`Export function minWindowLength(nums: number[], target: number): number. All nums and target are positive integers. Return the shortest nonempty contiguous subarray length whose sum is at least target, or 0 if none exists.
Return a single fenced typescript code block, with no dependencies.`,similarity:.517,scores:[0,1,1,1,1,1,1,1]},{prompt:`Export function evaluateRpn(tokens: string[]): number. Evaluate a valid nonempty reverse Polish expression using integer tokens and +,-,*,/. Division truncates toward zero; divisors are nonzero. Results fit safely in a number.
Return a single fenced typescript code block, with no dependencies.`,similarity:.517,scores:[0,0,1,1,1,1,1,1]},{prompt:`Export class MinStack with constructor(), push(value: number): void, pop(): number | undefined, top(): number | undefined, getMin(): number | undefined. Maintain a stack and its minimum in O(1) per operation. Empty queries/pop return undefined. Duplicated minima must work.
Return a single fenced typescript code block, with no dependencies.`,similarity:.448,scores:[1,0,1,1,1,1,1,1]},{prompt:`Export class TimeMap with constructor(), set(key: string, value: string, timestamp: number): void and get(key: string, timestamp: number): string | undefined. Set timestamps are nondecreasing per key. Get returns the value at the largest timestamp <= query, or undefined. A repeated set at the same timestamp replaces its value. Reads may arrive in any time order.
Return a single fenced typescript code block, with no dependencies.`,similarity:.428,scores:[1,0,1,1,0,1,0,1]}]},{task_id:"code_fix",prompt:"Fix the off-by-one bug in: for i in range(1, n): print(arr[i])",rung:"glm-5",low_confidence:!1,neighbors:[{prompt:"Given arr and n=len(arr), repair this loop so it prints each element except the last, one per line: for i in range(n): print(arr[i]). Use one for loop; empty and singleton arrays should print nothing.",similarity:.778,scores:[1,1,1,1,0,0,1,1]},{prompt:"Print each zero-based index followed by its item from arr using print(index, item). Fix the indexing in for i in range(1, n+1): print(i, arr[i]), where n=len(arr). Return one for loop, including correct behavior for an empty array.",similarity:.763,scores:[1,0,0,0,0,0,1,0]},{prompt:"For arr with n=len(arr), print all items after the first, one per line. The current loop starts at index 2 and skips too much. Supply a single corrected for loop that also works for empty or singleton arrays.",similarity:.723,scores:[0,1,1,1,0,0,1,1]},{prompt:`Implement first_unique(text: str) -> int. Return the index of the first character occurring exactly once, or -1 if absent. Matching is case-sensitive.
Return a single fenced python code block, with no dependencies.`,similarity:.299,scores:[1,1,1,1,1,1,1,1]},{prompt:`Implement meeting_rooms(meetings: list[list[int]]) -> int. Return the minimum simultaneous rooms for half-open meetings [start,end), with start<end. A room finishing at time t can serve a meeting starting at t. Input is unsorted.
Return a single fenced python code block, with no dependencies.`,similarity:.291,scores:[1,1,1,1,0,1,1,1]}]}],Ce={bank_size:Ff,bar:$f,floor:Bf,min_obs:Uf,rungs:Hf,prompts:Wf},Ua=.35,Vf=.09,Qf=.85,Ss=1.1,Ha=.28,qf=["capital","sql","substring","off-by-one"],xs=e=>e>=1e3?`${e/1e3}T`:`${e}B`,Gf=e=>e>=1?"1.0":e.toFixed(2).slice(1);function Yf(e){const n=e.neighbors.filter(i=>i.similarity>=Ce.floor),t=Ce.rungs.map((i,s)=>n.length?n.reduce((o,a)=>o+a.scores[s],0)/n.length:0),r=Ce.rungs.findIndex(i=>i.name===e.rung);return{counted:n.length,means:t,pick:r}}function Kf(e,n){const[t,r]=M.useState(()=>Ei()?1/0:0);return M.useEffect(()=>{if(Ei())return r(1/0);if(!n)return;r(0);const i=performance.now();let s=requestAnimationFrame(function o(a){const l=(a-i)/1e3;r(l),l<6&&(s=requestAnimationFrame(o))});return()=>cancelAnimationFrame(s)},[e,n]),t}function Xf({project:e}){const n=M.useRef(null),[t,r]=M.useState(0),[i,s]=M.useState(!1),o=Kf(t,i);M.useEffect(()=>{const p=new IntersectionObserver(([g])=>g.isIntersecting&&s(!0),{threshold:.4});return p.observe(n.current),()=>p.disconnect()},[]);const a=Ce.prompts[t],{counted:l,means:u,pick:h}=Yf(a),f=Ce.rungs[h],d=o<Ss?-1:Math.min(h,Math.floor((o-Ss)/Ha)),v=d===h,y=Ss+h*Ha,k=`routed · ${f.name} · ${xs(f.params)}`,P=o<Ua?"embedding…":d<0?`${a.neighbors.length} nearest past requests`:v?`→ ${f.name}`:"cheapest first…",m=p=>p===h&&v?"is-pick":p===d?"is-scan":void 0;return c.jsxs("section",{id:e.id,className:"feature",ref:n,children:[c.jsxs("div",{className:"feature-text",children:[c.jsxs("h3",{className:"feature-title",children:["## ",e.title.toUpperCase()]}),e.body.map(p=>c.jsx("p",{children:p},p)),c.jsx("ul",{className:"feature-points",children:e.points.map(p=>c.jsx("li",{children:p},p))}),c.jsxs("p",{className:"route-note",children:["Pick a request. None of them is in the ",Ce.bank_size,"-request bank; each route was worked out ahead of time by gatoway's own router."]}),c.jsx("a",{className:"hero-link",href:e.repoLink,target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]}),c.jsx("div",{className:"feature-visual",children:c.jsxs("div",{className:"sheet route",children:[c.jsxs("header",{className:"sheet-head",children:[c.jsx("span",{children:"gatoway / route"}),c.jsx("span",{className:"sheet-status",children:P})]}),c.jsx("div",{className:"route-picks",role:"group","aria-label":"Example requests",children:qf.map((p,g)=>c.jsxs("button",{type:"button","aria-pressed":g===t,onClick:()=>r(g),children:[c.jsx("span",{className:"route-pick-num",children:String(g+1).padStart(2,"0")})," ",p]},p))}),c.jsxs("p",{className:"route-request",children:[c.jsx("span",{"aria-hidden":"true",children:"> "}),a.prompt]}),c.jsxs("table",{className:"route-table",children:[c.jsx("caption",{className:"sr-only",children:"Each rung's scores on the five nearest past requests. 1 square = answered well."}),c.jsxs("colgroup",{children:[c.jsx("col",{className:"route-col-sim"}),c.jsx("col",{}),Ce.rungs.map(p=>c.jsx("col",{className:"route-col-rung"},p.name))]}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{scope:"col",children:"sim"}),c.jsx("th",{scope:"col",children:"past requests"}),Ce.rungs.map((p,g)=>c.jsx("th",{scope:"col",title:p.name,className:m(g),children:xs(p.params)},p.name))]})}),c.jsx("tbody",{children:a.neighbors.map((p,g)=>{const w=o>=Ua+g*Vf,E=p.similarity<Ce.floor&&o>=Qf;return c.jsxs("tr",{className:`${w?"":"is-pending"}${E?" is-under":""}`,children:[c.jsx("td",{className:"route-sim",children:p.similarity.toFixed(3)}),c.jsx("td",{className:"route-text",title:p.prompt,children:c.jsx("span",{children:p.prompt})}),p.scores.map((_,C)=>c.jsx("td",{className:m(C),children:c.jsx("span",{className:`route-cell${_>=1?" is-pass":""}`,"aria-label":_>=1?"pass":"fail"})},C))]},p.prompt)})}),c.jsx("tfoot",{children:c.jsxs("tr",{children:[c.jsx("td",{}),c.jsxs("th",{scope:"row",children:["mean ≥ ",Ce.bar.toFixed(2)]}),u.map((p,g)=>c.jsx("td",{className:m(g),children:g<=d?Gf(p):""},g))]})})]}),c.jsxs("footer",{className:"sheet-foot",children:[c.jsxs("span",{children:[l,"/",a.neighbors.length," over floor ",Ce.floor.toFixed(2)]}),c.jsx("span",{children:v?`${xs(f.params)} vs 1T top rung`:"—"})]}),c.jsx(pd,{p:o,wireAt:[y+.2,y+.45],typeAt:[y+.45,y+.95],text:k},t),c.jsx("p",{className:"sr-only","aria-live":"polite",children:v?`${k}: the cheapest rung whose neighbors averaged at least ${Ce.bar}`:""})]})})]})}const Jf={tagteam:Of,gatoway:Xf},Zf={},em=()=>c.jsxs("div",{id:"featured",className:"featured",children:[c.jsx("h2",{className:"section-title",children:"Featured"}),bf.map(e=>{const n=Jf[e.id];return n?c.jsx(n,{project:e},e.id):c.jsx(If,{project:e,Scene:Zf[e.id]},e.id)})]}),nm=[{title:"tagteam",status:"October 2026 - Present",description:"Cross-agent review hooks for Claude Code, Codex, Copilot CLI, and Antigravity",technologies:["Python","Agent Hooks","Git","uv","SwiftBar"],features:["When one coding agent ends a turn that changed code, a plan, or a design doc, a different agent reviews it read-only","Blocking reviews for large, high-risk, and design changes; small changes are reviewed in the background as suggestions","Works with Claude Code, Codex, Copilot CLI, Antigravity, and OpenCode, all running locally on your own accounts","Hooks fail open and merge into existing agent configs with backups, so a broken tagteam never blocks an agent"],repoLink:"https://github.com/azhou555/tagteam"},{title:"gatoway",status:"July 2026 - Present",description:"Cost-aware LLM gateway that routes each request to the cheapest model tier likely to produce an acceptable result",technologies:["Python","FastAPI","PostgreSQL","pgvector","Sentence Transformers","LiteLLM"],features:["OpenAI-compatible gateway using embedding similarity to select the cheapest adequate model","Circuit breaker with automatic provider fallback","Eight-task dry-run evaluation cut compute proxy 71% for a three-point effectiveness delta, with limitations documented"],repoLink:"https://github.com/azhou555/gatoway"},{title:"dbb",status:"June 2026 - July 2026",description:"Relational database engine built from scratch in Rust",technologies:["Rust"],features:["Page-based disk storage with an LRU buffer pool and B+ tree indexing","Recursive-descent SQL parser","Cost-based optimizer with predicate pushdown and index selection","Volcano executor supporting scans, joins, sorts, DELETE, and UPDATE","Unit and end-to-end tests across the full database stack"],repoLink:"https://github.com/azhou555/dbb"},{title:"court-sight",status:"June 2026 - Present",description:"CV and deep learning project aiming to classify and provide feedback on tennis point data",technologies:["Python","HuggingFace Models","YOLO26","BoT Sort","MMPose","OpenCV","NumPy","SciPy","PyTorch","scikit","Pandas","XGBoost","ffmpeg"],features:["Actively training using real Grand-Slam match data","Semantic classification of point versus non-point shots by running a stripped version of court detection to run full training only on relevant frames","Working court line detection","Goal is to be able to effectively classify all points and provide feedback"],repoLink:"https://github.com/azhou555/court-sight"},{title:"gritter",status:"July 2026 - August 2026",description:"Provider-agnostic CLI for answering questions about codebases with verified file and line citations",technologies:["Python","tree-sitter","ChromaDB","BM25","Anthropic API","OpenAI API"],features:["AST-aware chunking with hybrid dense and BM25 retrieval","Verified citations to source files and line ranges","Swappable embedding and LLM backends across multiple indexed repositories","Published on PyPI as gritter"],deployLink:"https://pypi.org/project/gritter/",deployLabel:"View on PyPI",repoLink:"https://github.com/azhou555/gritter"},{title:"DJ Rara",status:"November 2025",description:"Spotify recommendation TUI originally built during a one-day Anthropic x Maryland Hackathon",technologies:["Python","Textual","Spotipy"],features:["Built during a one-day hackathon","Later expanded with Spotify OAuth, mood-based discovery, and playlist creation","Published on PyPI"],deployLink:"https://pypi.org/project/dj-rara/",deployLabel:"View on PyPI",repoLink:"https://github.com/azhou555/dj-rara"},{title:"sserafy",status:"July 2025 - August 2025",description:"Full stack guitar learning platform with a real-time tuner, tab rendering, and paid lesson tier",technologies:["React","TypeScript","Node.js","Express","Prisma","PostgreSQL","Redis","AWS S3","Stripe","Docker"],features:["Real-time pitch detection tuner using the Web Audio API","MusicXML/Guitar Pro tab upload and rendering via OpenSheetMusicDisplay","Google/Apple OAuth2 authentication with account linking","Redis-backed caching, rate limiting, and background jobs; Stripe subscriptions for the paid tier"],deployLink:null,repoLink:"https://github.com/azhou555/sserafy"},{title:"Travel App",status:"June 2025 – July 2025",description:"Full stack travel app with Spring Boot, React, MySQL, and Google OAuth",technologies:["Spring Boot","React","MySQL","Google OAuth","OpenAI API"],features:["Development of RESTful API and CI/CD pipeline in combination with comprehensive SQL database","OpenAI API integration for enhanced planning, suggestions, and front-facing chatbot features"],deployLink:null},{title:"Super Sudoku",status:"October 2024 - August 2025",description:"Cross-platform Sudoku suite spanning desktop, web, and iOS with AI-powered solving assistance",technologies:["Python","PyQt6","Flask","Swift","Py-Sudoku","Langchain","OpenAI LLM"],features:["Synchronized gameplay, themes, and AI chat history across desktop, web, and mobile","Langchain + OpenAI LLM integration for RAG-based puzzle-solving assistance","Flask backend serving a shared web client alongside the native desktop and iOS apps"],deployLink:null,isDownload:!0,repoLink:"https://github.com/azhou555/Super-Sudoku"},{title:"ccross",status:"March 2026",description:"GNN-based crossword solver that jointly reasons over letter constraints and semantic coherence",technologies:["Python","PyTorch","T5","Graph Attention Networks"],features:["T5-small clue encoder fine-tuned as seq2seq, producing ranked candidate answers via beam search","Graph Attention Network grid solver treating word slots as nodes and letter intersections as edges","Trained on 7.5M clue-answer pairs and 86K puzzle grids from xd.saul.pw","Improves on solvers like the Berkeley Crossword Solver by propagating semantic coherence, not just letter constraints"],repoLink:"https://github.com/azhou555/CrosswordSolver"},{title:"court-reserver",status:"April 2026 - May 2026",description:"GitHub Actions bot that automatically reserves a UMD tennis court 48 hours in advance every day",technologies:["Python","GitHub Actions","Discord Webhooks"],features:["Runs on a daily cron schedule with no server to maintain","Falls back through a configurable list of courts if the preferred one is unavailable","Sends Discord notifications on booking success or failure"],repoLink:"https://github.com/azhou555/court-bot"},{title:"page-rank",status:"April 2026",description:"Interactive PageRank algorithm visualizer with multiple explorable modes",technologies:["React","TypeScript","D3","Recharts","Vite","Vitest"],features:["Random-surfer, rank-flow, and what-if simulation modes over an editable graph","Live matrix view and convergence sparkline alongside the graph canvas","Built-in math explainer and PageRank 101 panel for teaching the algorithm"],repoLink:"https://github.com/azhou555/page-rank"},{title:"editor-theme",status:"May 2026",description:'"Northern Lights" — three dark VS Code/Zed themes tuned for long coding sessions',technologies:["VS Code Theme API","Zed"],features:["Three variants (Aurora, Solstice, Boreal) sharing a slate/midnight-navy base with low-glare contrast","Restrained syntax palette using blues and a single lavender accent instead of red/orange","Not yet published to a marketplace"],notPublished:!0},{title:"ttera-themes",status:"August 2025",description:"Collection of 18 nature- and media-inspired VS Code themes, published to the VS Code Marketplace",technologies:["VS Code Theme API"],features:["18 themes with full UI coverage and accessibility-focused contrast",'Published on the VS Code Marketplace (formerly "Naturefy Themes")'],repoLink:"https://github.com/azhou555/naturefy-theme"}],tm=()=>c.jsx("section",{id:"projects",className:"projects",children:c.jsxs("div",{className:"projects-container",children:[c.jsx("h2",{className:"section-title",children:"Projects"}),c.jsx("div",{className:"projects-grid",children:nm.map((e,n)=>c.jsxs("div",{className:"project-card",children:[c.jsxs("div",{className:"project-header",children:[c.jsx("h3",{className:"project-title",children:e.title}),c.jsx("span",{className:"project-status",children:e.status})]}),c.jsx("p",{className:"project-description",children:e.description}),c.jsxs("div",{className:"project-technologies",children:[c.jsx("h4",{children:"Technologies"}),c.jsx("div",{className:"tech-tags",children:e.technologies.map((t,r)=>c.jsx("span",{className:"tech-tag",children:t},r))})]}),c.jsxs("div",{className:"project-features",children:[c.jsx("h4",{children:"Key Features"}),c.jsx("ul",{children:e.features.map((t,r)=>c.jsx("li",{children:t},r))})]}),c.jsxs("div",{className:"project-actions",children:[e.deployLink&&c.jsx("a",{href:e.deployLink,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:e.deployLabel||"View Live"}),e.deployLink&&e.repoLink&&" · ",e.repoLink&&c.jsx("a",{href:e.repoLink,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:"View on GitHub"}),!e.deployLink&&!e.repoLink&&c.jsx("span",{className:"project-link-placeholder",children:e.isDownload?"Download Coming Soon":e.notPublished?"Not Yet Published":"No longer deployed"})]})]},n))})]})}),rm=`---
title: Backend Engineering Notes
date: 2026-08-01
---

# Complete Backend Engineering Interview Preparation Guide

## Table of Contents

- [Design Patterns](## design-patterns)
- [Code Design](#code-design)
- [Programming Languages](#programming-languages)
- [Web Development](#web-development)
- [Databases](#databases)
- [NoSQL](#nosql)
- [Version Control](#version-control)
- [Concurrency](#concurrency)
- [Distributed Systems](#distributed-systems)
- [Software Lifecycle & Team Management](#software-lifecycle--team-management)
- [Algorithms & Logic](#algorithms--logic)
- [Software Architecture](#software-architecture)
- [SOA and Microservices](#soa-and-microservices)
- [Security](#security)
- [General Questions](#general-questions)
- [Open Questions](#open-questions)
- [Code Snippet Problems](#code-snippet-problems)
- [Behavioral Questions](#behavioral-questions)

---

## Design Patterns

### Globals Are Evil

**Why are global and static objects problematic?**

1. **Hidden dependencies** and tight coupling
2. **Testing difficulties** - hard to mock/isolate
3. **Unpredictable initialization order**
4. **Thread-safety issues**
5. **Violation of encapsulation**

#### Bad Example:

\`\`\`java
// Bad - Global State
public class DatabaseConnection {
    public static Connection conn = null;

    public static void connect() {
        conn = DriverManager.getConnection("jdbc:mysql://localhost/db");
    }
}

public class UserService {
    public void saveUser(User user) {
        // Hidden dependency on global state
        DatabaseConnection.conn.execute("INSERT INTO users...");
    }
}
\`\`\`

#### Good Example - Dependency Injection:

\`\`\`java
public class UserService {
    private final Connection connection;

    public UserService(Connection connection) {
        this.connection = connection; // Explicit dependency
    }

    public void saveUser(User user) {
        connection.execute("INSERT INTO users...");
    }
}
\`\`\`

---

### Inversion of Control (IoC)

**Definition**: The control flow is inverted - instead of your code calling a framework, the framework calls your code.

**Benefits:**

- Loose coupling
- Better testability
- Flexibility in implementation swapping

\`\`\`java
// Without IoC - Tight Coupling
public class EmailService {
    public void sendEmail() {
        SmtpClient client = new SmtpClient(); // Direct instantiation
        client.send();
    }
}

// With IoC - Loose Coupling
public class EmailService {
    private final EmailClient client;

    public EmailService(EmailClient client) { // Injected dependency
        this.client = client;
    }

    public void sendEmail() {
        client.send();
    }
}
\`\`\`

---

### Law of Demeter

**Principle**: "Only talk to your immediate friends"

An object should only call methods on:

- Itself
- Objects passed as parameters
- Objects it creates
- Its direct component objects

#### Violation Example:

\`\`\`java
// Bad - Train Wreck
public class Customer {
    public void purchaseItem(Item item) {
        double price = item.getStore().getInventory().getPrice(item.getId());
        // Knows too much about object structure
    }
}
\`\`\`

#### Fixed Version:

\`\`\`java
// Good - Following Law of Demeter
public class Customer {
    public void purchaseItem(Item item) {
        double price = item.getPrice(); // Item handles its own pricing logic
    }
}

public class Item {
    private Store store;

    public double getPrice() {
        return store.getPriceFor(this); // Delegate to immediate friend
    }
}
\`\`\`

---

### Active-Record Pattern

**Definition**: Combines data access logic with domain logic in a single class.

**Limitations:**

1. Tight coupling to database schema
2. Violates Single Responsibility Principle
3. Testing requires database
4. Complex queries become awkward
5. Poor for complex domain logic

\`\`\`ruby
# Active Record Example (Ruby/Rails style)
class User < ActiveRecord::Base
  validates :email, presence: true

  def full_name
    "#{first_name} #{last_name}"
  end

  # This mixes domain logic with persistence
  def promote_to_admin
    self.role = 'admin'
    self.promoted_at = Time.now
    save! # Database operation mixed with business logic
  end
end
\`\`\`

---

### Data-Mapper Pattern

**Definition**: Completely separates domain objects from persistence layer.

\`\`\`java
// Domain Object - Pure business logic
public class User {
    private String id;
    private String email;

    public void promote() {
        this.role = Role.ADMIN;
        this.promotedAt = Instant.now();
        // Pure domain logic, no DB awareness
    }
}

// Separate Mapper handles persistence
public class UserMapper {
    public User findById(String id) {
        ResultSet rs = db.query("SELECT * FROM users WHERE id = ?", id);
        return hydrate(rs);
    }

    public void save(User user) {
        db.execute("UPDATE users SET ...", user.getFields());
    }
}
\`\`\`

**When to use each:**

- **Active-Record**: Simple CRUD apps, rapid prototyping
- **Data-Mapper**: Complex domain logic, large teams, DDD approaches

---

### Billion Dollar Mistake (Null References)

Tony Hoare's "billion-dollar mistake" - null references causing countless bugs.

#### Solutions:

**1. Null Object Pattern:**

\`\`\`java
public interface Logger {
    void log(String message);
}

public class ConsoleLogger implements Logger {
    public void log(String message) {
        System.out.println(message);
    }
}

public class NullLogger implements Logger {
    public void log(String message) {
        // Do nothing - no null checks needed
    }
}
\`\`\`

**2. Option Types (Optional/Maybe):**

\`\`\`java
// Java Optional
Optional<User> user = userRepository.findById(id);
user.ifPresent(u -> u.sendEmail());

// Or chain operations safely
String email = userRepository.findById(id)
    .map(User::getEmail)
    .orElse("no-email@example.com");
\`\`\`

**3. Kotlin's Null Safety:**

\`\`\`kotlin
var name: String = "John"  // Cannot be null
var nullable: String? = null  // Can be null
nullable?.length  // Safe call
\`\`\`

---

### Inheritance vs Composition

**Principle**: "Favor composition over inheritance"

#### Inheritance Problems:

\`\`\`java
// Rigid hierarchy
class Bird {
    void fly() { }
}

class Penguin extends Bird {
    @Override
    void fly() {
        throw new UnsupportedOperationException(); // Violates LSP
    }
}
\`\`\`

#### Composition Solution:

\`\`\`java
interface FlyingBehavior {
    void fly();
}

class Bird {
    private FlyingBehavior flyingBehavior;

    public Bird(FlyingBehavior behavior) {
        this.flyingBehavior = behavior;
    }
}

// Flexible - can change behavior at runtime
Bird penguin = new Bird(new NonFlyingBehavior());
Bird eagle = new Bird(new SoaringBehavior());
\`\`\`

---

### Anti-Corruption Layer

**Definition**: A layer that translates between different domain models.

\`\`\`java
// External system's model (we don't control)
class LegacyUser {
    String usr_nm;
    String e_mail;
}

// Anti-corruption layer
class UserTranslator {
    User fromLegacy(LegacyUser legacy) {
        return new User(
            legacy.usr_nm,
            EmailAddress.parse(legacy.e_mail)
        );
    }
}

// Our clean domain model
class User {
    private String username;
    private EmailAddress email;
}
\`\`\`

---

### Singleton Pattern (Thread-Safe)

\`\`\`java
// Thread-Safe Singleton using Double-Checked Locking
public class Singleton {
    private static volatile Singleton instance;
    private static final Object lock = new Object();

    private Singleton() {
        // Prevent reflection attacks
        if (instance != null) {
            throw new IllegalStateException("Instance already exists");
        }
    }

    public static Singleton getInstance() {
        if (instance == null) { // First check (no locking)
            synchronized (lock) {
                if (instance == null) { // Second check (with locking)
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}

// Modern Java - Enum Singleton (Best Practice)
public enum BetterSingleton {
    INSTANCE;

    public void doSomething() {
        // Business logic
    }
}
\`\`\`

---

### Data Abstraction

#### Violation:

\`\`\`java
// Bad - Exposes implementation
class Rectangle {
    public double x1, y1, x2, y2; // Direct coordinate access
}

Rectangle r = new Rectangle();
double width = r.x2 - r.x1; // Client depends on representation
\`\`\`

#### Fixed:

\`\`\`java
// Good - Hides implementation
class Rectangle {
    private Point topLeft, bottomRight;

    public double getWidth() {
        return bottomRight.getX() - topLeft.getX();
    }

    public void setDimensions(double width, double height) {
        // Can change internal representation without affecting clients
    }
}
\`\`\`

---

### DRY Principle Violation and Fix

#### Violation:

\`\`\`python
def calculate_user_discount(user):
    if user.years_member > 5:
        return 0.20
    elif user.years_member > 3:
        return 0.15
    elif user.years_member > 1:
        return 0.10
    return 0.05

def calculate_user_shipping(user):
    if user.years_member > 5:
        return 0
    elif user.years_member > 3:
        return 5
    elif user.years_member > 1:
        return 10
    return 15
\`\`\`

#### Fixed:

\`\`\`python
class MembershipTier:
    TIERS = [
        (5, 'platinum', 0.20, 0),
        (3, 'gold', 0.15, 5),
        (1, 'silver', 0.10, 10),
        (0, 'bronze', 0.05, 15)
    ]

    @classmethod
    def get_tier(cls, years):
        for min_years, name, discount, shipping in cls.TIERS:
            if years > min_years:
                return name, discount, shipping
        return cls.TIERS[-1][1:]
\`\`\`

---

### Dependency Hell Solutions

1. **Semantic Versioning**: MAJOR.MINOR.PATCH
2. **Lock Files**: \`package-lock.json\`, \`Gemfile.lock\`
3. **Virtual Environments**: Python venv, Node nvm
4. **Containerization**: Docker
5. **Dependency Injection**: Reduce tight coupling
6. **Module Systems**: OSGi for Java

---

### Goto Statement

**Problems:**

- Breaks structured programming
- Hard to follow code flow
- Complicates debugging

**Legitimate Uses:**

\`\`\`c
// Acceptable use - cleanup in C
int process_file() {
    FILE *f1 = NULL, *f2 = NULL;
    char *buffer = NULL;
    int ret = -1;

    f1 = fopen("input.txt", "r");
    if (!f1) goto cleanup;

    f2 = fopen("output.txt", "w");
    if (!f2) goto cleanup;

    buffer = malloc(1024);
    if (!buffer) goto cleanup;

    // Process...
    ret = 0;

cleanup:
    if (buffer) free(buffer);
    if (f2) fclose(f2);
    if (f1) fclose(f1);
    return ret;
}
\`\`\`

---

### Robustness Principle (Postel's Law)

**"Be conservative in what you send, liberal in what you accept"**

\`\`\`python
class APIEndpoint:
    def process_request(self, data):
        # Liberal in accepting - handle various formats
        if isinstance(data, str):
            data = json.loads(data)
        elif isinstance(data, bytes):
            data = json.loads(data.decode('utf-8'))

        # Normalize inconsistent field names
        user_id = data.get('userId') or data.get('user_id') or data.get('id')

        # Conservative in sending - strict, consistent format
        return {
            'status': 'success',
            'data': {
                'userId': str(user_id),
                'timestamp': datetime.utcnow().isoformat()
            }
        }
\`\`\`

---

### Separation of Concerns

**MVC Example:**

\`\`\`python
# Model - Data logic
class User:
    def save(self): pass

# View - Presentation
class UserView:
    def render(self, user): pass

# Controller - Business logic
class UserController:
    def create_user(self, data):
        user = User(**data)
        user.save()
        return UserView().render(user)
\`\`\`

**Aspect-Oriented Programming:**

\`\`\`java
@Aspect
public class LoggingAspect {
    @Before("@annotation(Loggable)")
    public void logMethodCall(JoinPoint joinPoint) {
        // Logging concern separated from business logic
    }
}
\`\`\`

---

## Code Design

### High Cohesion, Loose Coupling

**Definitions:**

- **High Cohesion**: Elements within module work toward single purpose
- **Loose Coupling**: Minimal dependencies between modules

\`\`\`python
# High Cohesion - All methods relate to user authentication
class AuthenticationService:
    def login(self, credentials): pass
    def logout(self, token): pass
    def refresh_token(self, token): pass
    def validate_token(self, token): pass

# Loose Coupling - Uses interfaces, not concrete implementations
class OrderService:
    def __init__(self, payment_gateway: PaymentInterface):
        self.gateway = payment_gateway
\`\`\`

---

### Why Array Indexes Start at 0

Arrays are contiguous memory blocks. Index represents offset from base address:

- \`array[0]\` = base_address + (0 × element_size)
- \`array[i]\` = base_address + (i × element_size)

Starting at 0 makes pointer arithmetic simpler and more efficient.

---

### TDD's Impact on Design

TDD naturally leads to:

1. **Smaller, focused methods** (easier to test)
2. **Loose coupling** (for mocking)
3. **Interface-based design** (testable boundaries)
4. **SOLID principles** adherence

\`\`\`python
# TDD naturally produces this design
class EmailService:
    def __init__(self, smtp_client):  # Dependency injection for testing
        self.smtp_client = smtp_client

    def send(self, email):  # Single responsibility
        if not self.validate(email):  # Small, testable methods
            raise ValueError()
        return self.smtp_client.send(email)
\`\`\`

---

### Refactoring Purpose

1. **Improves readability**
2. **Reduces complexity**
3. **Eliminates duplication**
4. **Improves performance**
5. **Prepares for new features**

---

### Code Comments Best Practices

\`\`\`java
// Bad - explains what
// Increment i by 1
i++;

// Good - explains why
// We skip the header row when processing CSV data
i = 1;

// Better - self-documenting code
int firstDataRow = 1; // Skip header
for (int row = firstDataRow; row < data.length; row++) {
    processRow(data[row]);
}
\`\`\`

---

### Design vs Architecture

- **Architecture**: High-level structure, technology choices, system boundaries
- **Design**: Lower-level decisions, class structures, patterns within components

Examples:

- Architecture: "Microservices with Kafka messaging"
- Design: "Use Strategy pattern for payment processing"

---

### Multiple Inheritance Impact

\`\`\`java
// Diamond Problem in C++
class A { virtual void method(); }
class B : public A { }
class C : public A { }
class D : public B, public C { } // Which A::method?

// Java Interfaces - Cleaner
interface Flyable { void fly(); }
interface Swimmable { void swim(); }
class Duck implements Flyable, Swimmable { }

// Delegation - Most explicit
class Duck {
    private FlyingBehavior flyer = new FlyingBehavior();
    private SwimmingBehavior swimmer = new SwimmingBehavior();

    public void fly() { flyer.fly(); }
    public void swim() { swimmer.swim(); }
}
\`\`\`

---

### Domain Logic in Stored Procedures

**Pros:**

- Performance (close to data)
- Centralized business rules
- Database-level consistency

**Cons:**

- Hard to version control
- Difficult to test
- Vendor lock-in
- Limited debugging tools
- Splits logic across tiers

---

### Detecting Bad Design

**Code Smells:**

\`\`\`python
# 1. Long methods
def process_order(order):
    # 200 lines of code...

# 2. Feature envy
class Order:
    def calculate_total(self, customer):
        discount = customer.loyalty_points * customer.tier.multiplier
        # Using more customer data than order data

# 3. Shotgun surgery - changing one feature requires many file edits
# 4. Large classes doing too much
# 5. Duplicate code
# 6. Long parameter lists
\`\`\`

---

## Programming Languages

### Three Worst Defects (Java Example)

1. **Type Erasure**: Generics information lost at runtime
2. **Checked Exceptions**: Force handling even when inappropriate
3. **Verbose Syntax**: Boilerplate code requirements

---

### Functional Programming Rising Interest

1. **Concurrency** - Immutability prevents race conditions
2. **Testability** - Pure functions are predictable
3. **Composability** - Functions compose naturally
4. **Modern hardware** - Multi-core processors
5. **Bug reduction** - No side effects

---

### Closures

**Definition**: Functions that capture variables from enclosing scope.

\`\`\`javascript
function createCounter() {
  let count = 0; // Captured by closure
  return function () {
    return ++count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
\`\`\`

**Similarity to classes**: Both encapsulate state and behavior.

---

### Generics

**Purpose**: Type-safe code reuse without casting.

\`\`\`java
// Without generics
List list = new ArrayList();
list.add("string");
String s = (String) list.get(0); // Unsafe cast

// With generics
List<String> list = new ArrayList<>();
list.add("string");
String s = list.get(0); // Type safe
\`\`\`

---

### Higher-Order Functions

Functions that take or return other functions.

\`\`\`python
# Takes function as parameter
def apply_twice(func, value):
    return func(func(value))

# Returns a function
def make_multiplier(n):
    return lambda x: x * n

double = make_multiplier(2)
result = apply_twice(double, 5)  # 20
\`\`\`

---

### Loop to Recursion

\`\`\`javascript
// Loop
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Recursive with immutability
function sumArrayRecursive(arr) {
  if (arr.length === 0) return 0;
  const [head, ...tail] = arr; // Destructuring, immutable
  return head + sumArrayRecursive(tail);
}

// Tail-recursive optimization
function sumArrayTailRec(arr, acc = 0) {
  if (arr.length === 0) return acc;
  const [head, ...tail] = arr;
  return sumArrayTailRec(tail, acc + head);
}
\`\`\`

---

### Functions as First-Class Citizens

Functions can be:

- Assigned to variables
- Passed as arguments
- Returned from functions
- Stored in data structures

\`\`\`python
# All first-class operations
functions = [print, len, str]  # Stored in list
my_func = print  # Assigned to variable
map(str, [1, 2, 3])  # Passed as argument
def get_printer():
    return print  # Returned from function
\`\`\`

---

### Anonymous Functions

\`\`\`python
# Sorting with custom key
users = [{'name': 'Alice', 'age': 30}, {'name': 'Bob', 'age': 25}]
users.sort(key=lambda u: u['age'])  # Anonymous function as key

# Event handlers
button.onclick = lambda e: print(f"Clicked at {e.x}, {e.y}")

# Map/filter/reduce
squared = map(lambda x: x**2, numbers)
\`\`\`

---

### Type Systems

**Static vs Dynamic:**

- **Static**: Types checked at compile time (Java, C++)
- **Dynamic**: Types checked at runtime (Python, JavaScript)

**Strong vs Weak:**

- **Strong**: No implicit conversions (Python, Java)
- **Weak**: Implicit conversions (JavaScript, C)

---

### Referential Transparency

\`\`\`haskell
-- Referentially transparent (pure)
add x y = x + y
result = add 2 3  -- Can replace with 5 anywhere

-- Referentially opaque (impure)
getCurrentTime :: IO Time
printLine :: String -> IO ()
-- Cannot replace with value, depends on external state
\`\`\`

---

### Stack vs Heap

**Stack:**

- Local variables
- Function parameters
- Return addresses
- Fast allocation/deallocation
- Limited size

**Heap:**

- Dynamic allocation
- Objects/arrays
- Slower allocation
- Garbage collected
- Larger size

**Stack Overflow**: Recursion too deep or large local arrays.

---

### Pattern Matching

\`\`\`scala
// Pattern matching (Scala)
def describe(x: Any) = x match {
  case 0 => "zero"
  case i: Int if i > 0 => "positive"
  case s: String => s"string: $s"
  case list: List[_] => s"list of \${list.size}"
  case _ => "unknown"
}

// vs Switch (limited)
switch(x) {
  case 0: return "zero";
  case 1: return "one";
  default: return "other";
}
\`\`\`

---

### Languages Without Exceptions

**Go Example:**

\`\`\`go
// No exceptions, explicit error handling
result, err := doSomething()
if err != nil {
    return nil, err
}
\`\`\`

**Pros**: Explicit error paths, no hidden control flow  
**Cons**: Verbose, easy to ignore errors

---

### Variance in Generics

\`\`\`java
// Covariance: Cat extends Animal
List<? extends Animal> animals = new ArrayList<Cat>(); // OK

// Contravariance
Comparator<Animal> animalComp = ...;
Comparator<? super Cat> catComp = animalComp; // OK

// Invariance (default)
List<Animal> != List<Cat>  // Not related
\`\`\`

---

## Web Development

### First vs Third-Party Cookies

**First-Party**: Set by visited domain

- Trusted more
- Used for sessions, preferences
- Not blocked by default

**Third-Party**: Set by different domain

- Used for tracking
- Often blocked
- Privacy concerns

\`\`\`javascript
// First-party
document.cookie = "session=abc123; domain=.example.com";

// Third-party (from embedded ad)
// Set by adserver.net while on example.com
\`\`\`

---

### API Versioning Strategies

\`\`\`python
# 1. URL Versioning
GET /api/v1/users
GET /api/v2/users

# 2. Header Versioning
GET /api/users
Accept: application/vnd.myapp.v2+json

# 3. Query Parameter
GET /api/users?version=2

# 4. Semantic Versioning + Backwards Compatibility
{
    "name": "John",  # v1 field
    "full_name": {   # v2 addition
        "first": "John",
        "last": "Doe"
    }
}
\`\`\`

---

### SPA Disadvantages (Backend Perspective)

1. **SEO challenges** - Need SSR or pre-rendering
2. **Initial load** - Large JavaScript bundles
3. **Session management** - Complex token refresh
4. **CORS complexity**
5. **API versioning** - Frontend/backend coupling

---

### Statelessness Benefits

\`\`\`python
# Stateless - Scalable
def process_request(request, db):
    user = db.get_user(request.user_id)
    # No server-side session state
    return response

# Stateful - Hard to scale
class Server:
    def __init__(self):
        self.sessions = {}  # Server state

    def process(self, request):
        session = self.sessions[request.session_id]
        # Tied to specific server
\`\`\`

Benefits: Horizontal scaling, fault tolerance, caching

---

### REST vs SOAP

**REST:**

- Simple, uses HTTP verbs
- Stateless
- Multiple formats (JSON, XML)
- Cacheable

**SOAP:**

- Protocol-independent
- Built-in error handling
- WS-Security
- ACID transactions

**When to use:**

- REST: Public APIs, mobile apps, microservices
- SOAP: Enterprise, financial systems, formal contracts

---

### MVC and MVVM

**MVC:**

\`\`\`python
# Model
class User:
    def __init__(self, name):
        self.name = name

# View
class UserView:
    def render(self, user):
        return f"<h1>{user.name}</h1>"

# Controller
class UserController:
    def show(self, user_id):
        user = User.get(user_id)
        return UserView().render(user)
\`\`\`

**MVVM**: View binds to ViewModel, which wraps Model

- Two-way data binding
- Better for complex UIs
- Popular in frontend (Angular, Vue)

---

## Databases

### Database Migration Strategy

**MySQL to PostgreSQL:**

\`\`\`sql
-- MySQL
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PostgreSQL
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
\`\`\`

**Migration Steps:**

1. Dual writes during transition
2. Data validation
3. Feature flags for cutover
4. Rollback plan

---

### NULL in SQL

**Why \`WHERE field = NULL\` doesn't work:**

- NULL represents unknown
- Unknown = Unknown is Unknown (not TRUE)
- Must use \`IS NULL\`

\`\`\`sql
-- Wrong
SELECT * FROM users WHERE age = NULL;  -- Returns nothing

-- Correct
SELECT * FROM users WHERE age IS NULL;

-- Three-valued logic
NULL = NULL  -- Results in NULL, not TRUE
\`\`\`

---

### ACID Properties

- **Atomicity**: Transactions are all-or-nothing
- **Consistency**: Database remains valid after transactions
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Committed changes persist

---

### Schema Migration Management

\`\`\`python
# Migration framework example
class Migration_001_AddUserTable:
    def up(self):
        execute("""
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) UNIQUE
            )
        """)

    def down(self):
        execute("DROP TABLE users")

# Version tracking
CREATE TABLE schema_migrations (
    version VARCHAR(255) PRIMARY KEY,
    applied_at TIMESTAMP
);
\`\`\`

---

### Lazy Loading

\`\`\`python
class User:
    def __init__(self, id):
        self.id = id
        self._orders = None

    @property
    def orders(self):
        if self._orders is None:
            self._orders = Order.fetch_by_user(self.id)
        return self._orders
\`\`\`

**Pitfalls**: N+1 queries, unexpected database hits, transaction boundaries

---

### N+1 Problem

\`\`\`sql
-- N+1 Problem
SELECT * FROM users WHERE active = true; -- 1 query
-- Then for each user:
SELECT * FROM orders WHERE user_id = ?; -- N queries

-- Solution: Join or Include
SELECT users.*, orders.*
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE users.active = true; -- 1 query total
\`\`\`

---

### Finding Expensive Queries

\`\`\`sql
-- PostgreSQL
SELECT query,
       mean_exec_time,
       calls,
       total_exec_time
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;

-- MySQL
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2;
\`\`\`

---

### Normalization vs Denormalization

**Normalize when:**

- Data integrity critical
- Write-heavy workloads
- Storage expensive

**Denormalize when:**

- Read performance critical
- Analytics/reporting
- Real-time queries needed

\`\`\`sql
-- Normalized
SELECT u.name, COUNT(o.id)
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id;

-- Denormalized
SELECT name, order_count
FROM user_stats;  -- Pre-calculated
\`\`\`

---

### Blue-Green Deployment with DB Changes

**Expand-Contract Pattern:**

\`\`\`sql
-- Phase 1: Add new column (expand)
ALTER TABLE users ADD COLUMN email_verified BOOLEAN;

-- Phase 2: Dual writes
-- Phase 3: Migrate data
UPDATE users SET email_verified = true WHERE email_confirmed_at IS NOT NULL;

-- Phase 4: Switch reads to new column
-- Phase 5: Remove old column (contract)
ALTER TABLE users DROP COLUMN email_confirmed_at;
\`\`\`

---

## NoSQL

### Eventual Consistency

System will become consistent over time, but may show different values temporarily.

**Example**: Social media view counts - different servers might show slightly different numbers, but eventually converge.

---

### CAP Theorem

You can only guarantee 2 of 3:

- **Consistency**: All nodes see same data
- **Availability**: System remains operational
- **Partition Tolerance**: System continues despite network failures

**Examples:**

- **CP Systems**: HBase, MongoDB (strong consistency)
- **AP Systems**: Cassandra, DynamoDB (eventual consistency)
- **CA Systems**: Traditional RDBMS (impractical in distributed settings)

---

### NoSQL Scalability Approaches

\`\`\`python
# Sharding example
def get_shard(key):
    return hash(key) % NUM_SHARDS

# Consistent hashing for dynamic scaling
class ConsistentHash:
    def __init__(self):
        self.ring = {}
        self.sorted_keys = []

    def add_node(self, node):
        for i in range(150):  # Virtual nodes
            virtual = f"{node}:{i}"
            hash_val = hash(virtual)
            self.ring[hash_val] = node
\`\`\`

---

### Document vs Relational

**Use Document DB when:**

- Hierarchical data
- Varying schemas
- Rapid development
- Read-heavy workloads

**Use Relational when:**

- ACID required
- Complex joins
- Established schemas
- Reporting/analytics

---

## Version Control

### Easier Branching in Git/Mercurial

**Why easier than SVN:**

1. **Local branches** - No server communication
2. **Lightweight** - Branches are pointers
3. **Fast switching** - Instant context switch
4. **Better merging** - Tracks common ancestors

\`\`\`bash
# Git - Easy branching
git checkout -b feature
# Work...
git checkout main
git merge feature

# SVN - Cumbersome
svn copy trunk branches/feature  # Server operation
svn switch branches/feature
\`\`\`

---

### DVCS Pros and Cons

**Pros:**

- Work offline
- Fast operations
- Full history locally
- Flexible workflows
- Natural backup

**Cons:**

- Large repositories problematic
- Steeper learning curve
- Security (full history distributed)

---

### GitFlow vs GitHub Flow

**GitFlow:**

\`\`\`bash
# Multiple branches
main (production)
develop (integration)
feature/* (features)
release/* (release prep)
hotfix/* (emergency fixes)
\`\`\`

**GitHub Flow:**

\`\`\`bash
# Simplified
main (always deployable)
feature branches (short-lived)
# Deploy from feature branch
# Merge after verification
\`\`\`

---

### Git Rebase

\`\`\`bash
# Before rebase
      A---B---C feature
     /
D---E---F---G main

# After rebase
              A'--B'--C' feature
             /
D---E---F---G main

git checkout feature
git rebase main
\`\`\`

⚠️ **Caution**: Never rebase public branches

---

## Concurrency

### Why We Need Concurrency

1. **CPU utilization** - Don't waste cycles waiting for I/O
2. **Responsiveness** - UI remains interactive
3. **Throughput** - Handle multiple requests
4. **Real-world modeling** - Natural parallelism

\`\`\`python
# Without concurrency - Sequential
def process_files(files):
    for file in files:
        data = read_file(file)  # Blocks
        process(data)
        write_result(data)

# With concurrency - Parallel
async def process_files(files):
    tasks = [process_file(f) for f in files]
    await asyncio.gather(*tasks)
\`\`\`

---

### Testing Concurrent Code Difficulties

1. **Non-determinism** - Different execution orders
2. **Timing issues** - Race conditions intermittent
3. **Deadlock** - May only occur under load
4. **Shared state** - Unexpected interactions

\`\`\`java
// Hard to test race condition
class Counter {
    private int count = 0;

    public void increment() {
        count++;  // Race condition, but test might pass
    }
}
\`\`\`

---

### Race Condition Example

\`\`\`java
public class Counter {
    private int count = 0;

    // Race condition - multiple threads can read-modify-write simultaneously
    public void increment() {
        count++; // Not atomic: read, increment, write
    }

    // Fixed version
    private AtomicInteger atomicCount = new AtomicInteger(0);

    public void safeIncrement() {
        atomicCount.incrementAndGet(); // Atomic operation
    }
}
\`\`\`

---

### Deadlock Example

\`\`\`java
public class BankAccount {
    private final Object lock = new Object();
    private double balance;

    public void transfer(BankAccount to, double amount) {
        synchronized(this.lock) {  // Lock this account
            synchronized(to.lock) {  // Lock other account
                this.balance -= amount;
                to.balance += amount;
            }
        }
    }
}

// Deadlock scenario:
// Thread 1: account1.transfer(account2, 100)
// Thread 2: account2.transfer(account1, 50)
// Thread 1 locks account1, Thread 2 locks account2
// Both wait forever for the other lock
\`\`\`

---

### Process Starvation

\`\`\`java
// High priority threads starve low priority
class TaskScheduler {
    PriorityQueue<Task> highPriority = new PriorityQueue<>();
    PriorityQueue<Task> lowPriority = new PriorityQueue<>();

    public Task getNext() {
        // Low priority tasks starve if high priority keeps coming
        if (!highPriority.isEmpty()) {
            return highPriority.poll();
        }
        return lowPriority.poll();
    }
}

// Solution: Aging or fair scheduling
\`\`\`

---

### Wait-Free Algorithm

Every thread completes in bounded steps regardless of other threads.

\`\`\`java
// Wait-free example using AtomicReference
public class WaitFreeStack<T> {
    private AtomicReference<Node<T>> head = new AtomicReference<>();

    public void push(T value) {
        Node<T> newHead = new Node<>(value);
        Node<T> oldHead;
        do {
            oldHead = head.get();
            newHead.next = oldHead;
        } while (!head.compareAndSet(oldHead, newHead));
        // Guaranteed to complete eventually
    }
}
\`\`\`

---

## Distributed Systems

### Testing Distributed Systems

**Strategies:**

1. **Chaos Engineering:**

\`\`\`python
# Randomly kill services
def chaos_monkey():
    service = random.choice(services)
    service.kill()
    time.sleep(random.randint(1, 60))
    service.restart()
\`\`\`

2. **Contract Testing**: Verify API contracts
3. **Distributed Tracing**: Zipkin, Jaeger
4. **Fault Injection**: Network delays, partitions
5. **Property-Based Testing**: Test invariants

---

### Async Communication Use Cases

**When to use:**

- Long-running operations
- Fire-and-forget tasks
- Decoupling services
- Handling traffic spikes

\`\`\`python
# Synchronous - Blocks
response = payment_service.process(order)
if response.success:
    send_email(order)

# Asynchronous - Non-blocking
queue.publish({
    'type': 'process_payment',
    'order': order
})
# Payment service processes when ready
\`\`\`

---

### RPC Pitfalls

1. **Network failures** look like application errors
2. **Latency** unpredictable
3. **Ordering** not guaranteed
4. **Partial failures** complex
5. **Debugging** across systems

---

### Distributed System Design Considerations

**Closed/Secure Network:**

- Trust between nodes
- Reliable network
- Predictable latency
- Centralized monitoring

**Public/Geographic:**

- Authentication required
- Network partitions common
- Variable latency
- Edge caching critical
- DDoS protection

---

### Fallacies of Distributed Computing

1. **Network is reliable** - It's not
2. **Latency is zero** - It's significant
3. **Bandwidth is infinite** - It's limited
4. **Network is secure** - Needs encryption
5. **Topology doesn't change** - It does
6. **One administrator** - Multiple owners
7. **Transport cost is zero** - Data transfer costs
8. **Network is homogeneous** - Different protocols

---

### Request/Reply vs Publish/Subscribe

**Request/Reply:**

\`\`\`python
# Direct communication
response = service.request(data)
\`\`\`

Use for: Queries, synchronous operations, known recipients

**Publish/Subscribe:**

\`\`\`python
# Indirect communication
publisher.publish('user.created', user_data)
# Multiple subscribers handle independently
\`\`\`

Use for: Events, notifications, decoupling, fan-out

---

### Implementing Transactions from Scratch

\`\`\`python
class Transaction:
    def __init__(self):
        self.operations = []
        self.rollback_operations = []

    def add_operation(self, do_op, undo_op):
        self.operations.append(do_op)
        self.rollback_operations.append(undo_op)

    def commit(self):
        completed = []
        try:
            for op in self.operations:
                op()
                completed.append(op)
        except Exception:
            # Rollback in reverse order
            for undo_op in reversed(self.rollback_operations[:len(completed)]):
                undo_op()
            raise
\`\`\`

---

## Software Lifecycle & Team Management

### What is Agility

**Definition**: Ability to respond to change quickly and effectively

- Iterative development
- Customer collaboration
- Continuous feedback
- Adaptive planning

---

### Legacy Code Management

**Strategies:**

1. **Characterization tests** - Document current behavior
2. **Refactor incrementally** - Small, safe changes
3. **Strangler pattern** - Gradually replace
4. **Add tests before changes**

\`\`\`python
# Dealing with legacy code
class LegacyCalculator:
    def calc(self, a, b, op):  # No tests, unclear logic
        if op == 1:
            return a + b * 2  # Why *2?
        # ... 100 more lines

# Step 1: Write characterization tests
def test_existing_behavior():
    assert calc(2, 3, 1) == 8  # Document current behavior

# Step 2: Refactor gradually
class ModernCalculator:
    def calculate(self, a, b, operation):
        # Clear, tested implementation
\`\`\`

---

### Legacy Code ELI5

"Legacy code is like an old house - it still works, but it's hard to renovate because we don't know what might break if we change something. Without proper documentation (blueprints) and tests (safety inspections), making improvements is risky and expensive. Code quality matters because poor quality code becomes expensive to maintain and slows down new feature development."

---

### Selling Kanban

"Kanban visualizes our work pipeline, limits work-in-progress, and identifies bottlenecks.

**Benefits:**

- 30% faster delivery (measured)
- Reduced context switching
- Clear priorities
- Predictable delivery dates
- No major process overhaul needed

**ROI**: Teams typically see 20-30% productivity improvement within 3 months."

---

### Agile vs Waterfall

**Biggest difference**: Response to change

\`\`\`
Waterfall: Requirements → Design → Implementation → Testing → Deployment
Agile: Sprint 1 → Review → Sprint 2 → Review → Sprint 3...
\`\`\`

---

### Managing Too Many Meetings

1. **No-meeting blocks** - Protected coding time
2. **Async updates** - Written standups
3. **Meeting audit** - Cancel non-valuable meetings
4. **Delegate attendance** - Rotate representatives
5. **Time-box strictly** - 25/50 minute meetings

---

### Managing Late Projects

1. **Assess honestly** - How late? Why?
2. **Re-scope** - Cut features, not quality
3. **Parallel work** - Identify independent tasks
4. **Add resources carefully** - Brooks' Law
5. **Communicate transparently** - Regular updates
6. **Post-mortem** - Learn for next time

---

### Managing High Turnover

**Without increasing compensation:**

1. **Career development** - Clear growth paths
2. **Technical challenges** - Interesting projects
3. **Autonomy** - Trust and ownership
4. **Recognition** - Public appreciation
5. **Work-life balance** - Flexible hours
6. **Team culture** - Psychological safety
7. **Modern tech stack** - Keep skills relevant

---

### Top 3 Colleague Qualities

1. **Communication** - Clear, honest, respectful
2. **Reliability** - Delivers on commitments
3. **Growth mindset** - Learns from mistakes, shares knowledge

---

### Things Non-Technical People Should Know

1. **Estimates are probabilities**, not promises
2. **Technical debt** is like financial debt - pays interest
3. **Good code takes time** upfront but saves time long-term

---

## Algorithms & Logic

### FIFO Queue Using LIFO Stacks

\`\`\`python
class QueueUsingStacks:
    def __init__(self):
        self.inbox = []   # LIFO stack for enqueue
        self.outbox = []  # LIFO stack for dequeue

    def enqueue(self, item):
        self.inbox.append(item)

    def dequeue(self):
        if not self.outbox:  # Transfer when needed
            while self.inbox:
                self.outbox.append(self.inbox.pop())
        return self.outbox.pop() if self.outbox else None
\`\`\`

---

### Stack Overflow Code

\`\`\`c
// Recursive without base case
int factorial(int n) {
    return n * factorial(n - 1);  // No base case!
}

// Large local array
void causeOverflow() {
    int huge[10000000];  // Too large for stack
}
\`\`\`

---

### Tail-Recursive Factorial

\`\`\`scala
// Not tail-recursive (builds call stack)
def factorial(n: Int): Int = {
    if (n <= 1) 1
    else n * factorial(n - 1)  // Operation after recursion
}

// Tail-recursive (optimizable to loop)
def factorialTail(n: Int, acc: Int = 1): Int = {
    if (n <= 1) acc
    else factorialTail(n - 1, n * acc)  // Recursion is last operation
}
\`\`\`

---

### Simple REPL / RPN Calculator

\`\`\`python
# Basic REPL
while True:
    user_input = input("> ")
    if user_input == "exit":
        break
    print(user_input)

# RPN Calculator
def rpn_calc():
    stack = []
    while True:
        token = input("> ")
        if token in ['+', '-', '*', '/']:
            b, a = stack.pop(), stack.pop()
            if token == '+': stack.append(a + b)
            elif token == '-': stack.append(a - b)
            elif token == '*': stack.append(a * b)
            elif token == '/': stack.append(a / b)
        else:
            stack.append(float(token))
        print(f"Stack: {stack}")
\`\`\`

---

### Memory Leak Example

\`\`\`java
public class MemoryLeak {
    private static List<Object> leak = new ArrayList<>();

    public void addButNeverRemove() {
        leak.add(new byte[1000000]);  // Keeps growing
    }
}

// JavaScript closure leak
function createLeak() {
    let huge = new Array(1000000);
    return function() {
        console.log(huge.length);  // Closure keeps huge alive
    };
}
\`\`\`

---

### Unique Random Numbers

\`\`\`python
import random

class UniqueRandomGenerator:
    def __init__(self, min_val, max_val):
        self.available = list(range(min_val, max_val + 1))
        random.shuffle(self.available)
        self.index = 0

    def next(self):
        if self.index >= len(self.available):
            raise ValueError("All numbers used")
        value = self.available[self.index]
        self.index += 1
        return value
\`\`\`

---

### Basic Message Broker

\`\`\`python
import queue
import threading

class SimpleBroker:
    def __init__(self):
        self.topics = {}

    def subscribe(self, topic, callback):
        if topic not in self.topics:
            self.topics[topic] = []
        self.topics[topic].append(callback)

    def publish(self, topic, message):
        if topic in self.topics:
            for callback in self.topics[topic]:
                threading.Thread(
                    target=callback,
                    args=(message,)
                ).start()
\`\`\`

---

### Sorting Large Files

**10GB File:**

\`\`\`python
def sort_large_file(filename):
    # External merge sort
    chunk_files = []
    with open(filename) as f:
        chunk = []
        for line in f:
            chunk.append(line)
            if len(chunk) >= 1000000:  # 1M lines per chunk
                chunk.sort()
                chunk_file = write_chunk(chunk)
                chunk_files.append(chunk_file)
                chunk = []

    # Merge sorted chunks
    return merge_files(chunk_files)
\`\`\`

**10TB File:**

- Use distributed sorting (MapReduce)
- Multiple machines sort chunks
- Distributed merge phase

---

### Detecting Duplicates

\`\`\`python
import hashlib

def find_duplicates(directory):
    hashes = {}
    for filepath in walk_directory(directory):
        file_hash = calculate_hash(filepath)
        if file_hash in hashes:
            print(f"Duplicate: {filepath} = {hashes[file_hash]}")
        else:
            hashes[file_hash] = filepath

def calculate_hash(filepath, chunk_size=8192):
    hasher = hashlib.md5()
    with open(filepath, 'rb') as f:
        while chunk := f.read(chunk_size):
            hasher.update(chunk)
    return hasher.hexdigest()
\`\`\`

---

## Software Architecture

### When Cache is Dangerous

1. **Stale data** in critical operations (payments)
2. **Cache stampede** - Multiple misses trigger parallel fetches
3. **Memory pressure** - Caching too much
4. **Consistency issues** - Distributed cache sync

\`\`\`python
# Dangerous caching
@cache(timeout=3600)
def get_account_balance(user_id):
    return db.query(...)  # Cached balance could be wrong!
\`\`\`

---

### Event-Driven Architecture Scalability

**Benefits:**

1. **Decoupling** - Services independent
2. **Async processing** - No blocking
3. **Load leveling** - Queue absorbs spikes
4. **Parallelism** - Multiple consumers

\`\`\`python
# Event-driven scaling
class OrderService:
    def create_order(self, order):
        # Just publish event, don't wait
        event_bus.publish('order.created', order)
        return order.id

# Multiple services handle independently
class EmailService:
    @subscribe('order.created')
    def send_confirmation(self, order): pass

class InventoryService:
    @subscribe('order.created')
    def reserve_items(self, order): pass
\`\`\`

---

### Code Readability Factors

1. **Clear naming** - Self-documenting
2. **Consistent style** - Predictable patterns
3. **Small functions** - Single purpose
4. **Good abstractions** - Hide complexity
5. **Meaningful comments** - Explain why

---

### Scale-Out vs Scale-Up

**Scale-Up (Vertical):**

- Add CPU/RAM to existing server
- Simpler architecture
- Hardware limits
- Single point of failure

**Scale-Out (Horizontal):**

- Add more servers
- Complex coordination
- Theoretically unlimited
- Fault tolerant

---

### CQRS

**Command Query Responsibility Segregation:**

\`\`\`python
# Separate models for reads/writes
class WriteModel:
    def create_order(self, data):
        # Optimized for writes
        order = Order.create(data)
        event_store.append('OrderCreated', order)

class ReadModel:
    def get_order_summary(self):
        # Optimized for reads (denormalized)
        return read_db.query("SELECT * FROM order_summary_view")
\`\`\`

---

### C10k Problem Solutions

1. **Event-driven I/O** (epoll, kqueue)
2. **Async frameworks** (Node.js, Netty)
3. **User-space networking** (DPDK)
4. **Connection pooling**
5. **Load balancing**

\`\`\`c
// Traditional - Thread per connection (doesn't scale)
while (1) {
    int client = accept(server_socket);
    pthread_create(&thread, NULL, handle_client, client);
}

// Event-driven - Single thread, many connections
epoll_wait(epfd, events, MAX_EVENTS, -1);
for (int i = 0; i < n; i++) {
    handle_event(events[i]);
}
\`\`\`

---

### P2P System Design

\`\`\`python
class P2PNode:
    def __init__(self):
        self.peers = []
        self.files = {}
        self.dht = DistributedHashTable()

    def join_network(self, bootstrap_peer):
        # Get initial peers
        self.peers = bootstrap_peer.get_peers()
        # Announce presence
        self.broadcast('node_joined', self.id)

    def find_file(self, file_hash):
        # Query DHT
        peer = self.dht.lookup(file_hash)
        return self.download_from(peer, file_hash)
\`\`\`

---

### Vendor Lock-in Defense

\`\`\`python
# Abstraction layer
class StorageInterface:
    def store(self, key, data): pass

class S3Storage(StorageInterface):
    def store(self, key, data):
        boto3.client('s3').put_object(...)

class AzureStorage(StorageInterface):
    def store(self, key, data):
        azure.storage.blob.upload(...)
\`\`\`

---

### Cloud Readiness Characteristics

1. **Stateless** - Horizontal scaling
2. **Containerized** - Portable deployment
3. **Config externalized** - Environment-specific
4. **Service discovery** - Dynamic endpoints
5. **Circuit breakers** - Fault tolerance
6. **Health checks** - Auto-recovery
7. **Metrics/logging** - Observability

---

## SOA and Microservices

### Long-lived Transactions Problem

**Why discouraged**: Locks resources, complex rollback, distributed coordination hard

**Saga Pattern:**

\`\`\`python
class OrderSaga:
    def execute(self):
        try:
            payment_id = payment_service.reserve(amount)
            inventory_id = inventory_service.reserve(items)
            shipping_id = shipping_service.schedule()
            payment_service.confirm(payment_id)
        except:
            # Compensate in reverse order
            shipping_service.cancel(shipping_id)
            inventory_service.release(inventory_id)
            payment_service.release(payment_id)
\`\`\`

---

### SOA vs Microservices

**SOA:**

- Enterprise-wide
- ESB communication
- Shared databases common
- SOAP/XML often

**Microservices:**

- Team-owned services
- Direct communication
- Database per service
- REST/JSON common
- DevOps culture

---

### Transaction vs Compensation

\`\`\`python
# Transaction
with db.transaction():
    db.debit_account(from_acc, amount)
    db.credit_account(to_acc, amount)
    # Both succeed or both fail

# Compensation
def transfer_saga():
    debit_id = debit_account(from_acc, amount)
    try:
        credit_account(to_acc, amount)
    except:
        compensate_debit(debit_id)  # Undo the debit
\`\`\`

---

### When Microservice Too Micro

Signs of too granular:

1. **Excessive network calls** between services
2. **Deployment dependencies** - Always deployed together
3. **Shared database** required
4. **Single developer** owns multiple services
5. **CRUD only** - No business logic

---

### Microservices Pros/Cons

**Pros:**

- Independent deployment
- Technology diversity
- Fault isolation
- Team autonomy
- Scalability

**Cons:**

- Distributed complexity
- Network latency
- Data consistency challenges
- Operational overhead
- Testing complexity

---

## Security

### Writing Secure Code

**Practices:**

1. Input validation
2. Parameterized queries
3. Principle of least privilege
4. Secure defaults
5. Regular security reviews

**Developer duty vs specialized**: Both - developers need security awareness, specialists for architecture and audits

---

### Don't Invent Cryptography

**Why not:**

- Subtle vulnerabilities
- Years of cryptanalysis needed
- Side-channel attacks
- Implementation pitfalls

\`\`\`python
# Bad - Custom "encryption"
def bad_encrypt(data, key):
    return ''.join(chr(ord(c) ^ key) for c in data)

# Good - Use established library
from cryptography.fernet import Fernet
key = Fernet.generate_key()
f = Fernet(key)
encrypted = f.encrypt(data)
\`\`\`

---

### Two-Factor Authentication

\`\`\`python
import pyotp
import qrcode

class TwoFactorAuth:
    def setup_2fa(self, user):
        # Generate secret
        secret = pyotp.random_base32()
        user.tfa_secret = secret

        # Generate QR code for authenticator app
        uri = pyotp.totp.TOTP(secret).provisioning_uri(
            user.email,
            issuer_name="MyApp"
        )
        qr = qrcode.make(uri)
        return qr

    def verify_code(self, user, code):
        totp = pyotp.TOTP(user.tfa_secret)
        return totp.verify(code, valid_window=1)
\`\`\`

---

### Preventing Sensitive Data in Logs

\`\`\`python
class SecureLogger:
    SENSITIVE_FIELDS = ['password', 'ssn', 'credit_card']

    def log(self, data):
        cleaned = self.sanitize(data)
        logger.info(cleaned)

    def sanitize(self, data):
        if isinstance(data, dict):
            return {
                k: '***' if k in self.SENSITIVE_FIELDS else v
                for k, v in data.items()
            }
        return data
\`\`\`

---

### SQL Injection

**Vulnerable:**

\`\`\`java
String query = "SELECT * FROM users WHERE name = '" + userInput + "'";
// If userInput = "admin' OR '1'='1", it returns all users
\`\`\`

**Fixed:**

\`\`\`java
PreparedStatement ps = connection.prepareStatement(
    "SELECT * FROM users WHERE name = ?"
);
ps.setString(1, userInput); // Parameterized query
\`\`\`

---

### Cross-Site Scripting (XSS)

**Prevention:**

\`\`\`javascript
// Bad
element.innerHTML = userInput; // Can execute scripts

// Good
element.textContent = userInput; // Treats as text only
// Or sanitize HTML
element.innerHTML = DOMPurify.sanitize(userInput);
\`\`\`

---

### CSRF Protection

\`\`\`python
# Generate token
def generate_csrf_token():
    token = secrets.token_urlsafe(32)
    session['csrf_token'] = token
    return token

# Validate on submission
def validate_csrf(request):
    token = request.form.get('csrf_token')
    if not token or token != session.get('csrf_token'):
        raise CSRFError()

# In template
<form method="POST">
    <input type="hidden" name="csrf_token" value="{{ csrf_token }}">
</form>
\`\`\`

---

### HTTPS Working

1. **Client Hello** - Supported ciphers
2. **Server Hello** - Chosen cipher, certificate
3. **Certificate Verification** - Check CA signature
4. **Key Exchange** - Generate session keys
5. **Encrypted Communication** - Using session keys

---

### Session Hijacking Prevention

\`\`\`python
# Secure session configuration
app.config['SESSION_COOKIE_SECURE'] = True  # HTTPS only
app.config['SESSION_COOKIE_HTTPONLY'] = True  # No JS access
app.config['SESSION_COOKIE_SAMESITE'] = 'Strict'
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(hours=1)
\`\`\`

---

## General Questions

### Why Functional Programming Matters

1. **Concurrency** - No shared mutable state
2. **Reasoning** - Pure functions predictable
3. **Testing** - No side effects
4. **Composability** - Functions combine naturally
5. **Correctness** - Fewer bugs from immutability

---

### Browser Business Models

- **Google Chrome**: Ad revenue from search/data
- **Mozilla Firefox**: Search engine partnerships
- **Microsoft Edge**: Ecosystem lock-in, enterprise
- **Opera**: Partnerships, built-in services

---

### TCP Socket Overhead

1. **Three-way handshake** - RTT latency
2. **Kernel resources** - File descriptors, buffers
3. **State maintenance** - Connection tracking
4. **Slow start** - Congestion control

---

### Real-time Systems

**Differences:**

- **Deadlines** - Must meet timing constraints
- **Predictability** - Worst-case execution time
- **Priority** - Preemptive scheduling
- **Memory** - No unpredictable GC

---

### Immutability Benefits

\`\`\`scala
// Immutable - Thread-safe, predictable
case class User(name: String, age: Int)
val user = User("John", 30)
val older = user.copy(age = 31)  // New object

// Mutable - Requires synchronization
class MutableUser {
    var name: String
    var age: Int  // Can change unexpectedly
}
\`\`\`

---

### Object-Relational Impedance Mismatch

**Problems:**

- Objects: Inheritance, encapsulation, behavior
- Relations: Tables, rows, columns, joins

**Mismatches:**

- Inheritance mapping
- Object identity vs primary keys
- Associations vs foreign keys
- Encapsulation vs data access

---

### Cache Sizing Principles

1. **Working set size** - Frequently accessed data
2. **Hit rate target** - 80/20 rule often
3. **Memory constraints** - Available RAM
4. **Eviction cost** - Expense of cache miss
5. **Update frequency** - Invalidation rate

---

### TCP vs HTTP

**TCP**: Transport layer protocol

- Connection establishment
- Reliable delivery
- Flow control

**HTTP**: Application layer protocol

- Built on TCP
- Request/response model
- Stateless
- Headers and methods

---

### Client vs Server Rendering

**Client-Side (SPA):**

- Rich interactions
- Reduced server load
- Poor SEO
- Initial load time

**Server-Side (SSR):**

- Better SEO
- Faster initial paint
- Server load
- Full page refreshes

---

### Reliable Protocol over Unreliable

\`\`\`python
class ReliableProtocol:
    def __init__(self, unreliable_channel):
        self.channel = unreliable_channel
        self.sent = {}  # Track sent messages
        self.received = set()  # Deduplication

    def send(self, data):
        msg_id = generate_id()
        packet = {
            'id': msg_id,
            'data': data,
            'checksum': calculate_checksum(data)
        }

        # Retry until acknowledged
        while msg_id not in self.acknowledged:
            self.channel.send(packet)
            wait_for_ack(timeout=1)

    def receive(self):
        packet = self.channel.receive()
        if validate_checksum(packet):
            if packet['id'] not in self.received:
                self.received.add(packet['id'])
                send_ack(packet['id'])
                return packet['data']
\`\`\`

---

## Open Questions

### Why People Resist Change

1. **Fear of unknown** - Comfort in familiar
2. **Loss of control** - New processes uncertain
3. **Previous failures** - Bad experiences
4. **Invested effort** - Sunk cost in current way
5. **Social dynamics** - Peer pressure

---

### Threading ELI5

"Imagine a restaurant kitchen. With one chef (single thread), orders are cooked one at a time. With multiple chefs (multi-threading), several orders cook simultaneously. But they need to coordinate - if two chefs grab the same pan (shared resource), chaos ensues. That's why we need rules (synchronization) about who uses what when."

---

### Innovation vs Predictability

Balance through:

1. **Innovation sprints** - Dedicated exploration time
2. **Core/Edge** - Stable core, experimental edges
3. **Feature flags** - Safe experimentation
4. **Metrics-driven** - Measure innovation impact
5. **Risk budget** - Acceptable failure rate

---

### Good Code Characteristics

1. **Readable** - Self-documenting
2. **Testable** - Easy to verify
3. **Maintainable** - Easy to modify
4. **Efficient** - Appropriate performance
5. **Simple** - No unnecessary complexity

---

### Streaming Implementation

\`\`\`python
def stream_file(filepath):
    chunk_size = 4096
    with open(filepath, 'rb') as f:
        while True:
            chunk = f.read(chunk_size)
            if not chunk:
                break
            yield chunk

# Usage
for chunk in stream_file('large_video.mp4'):
    send_to_client(chunk)
\`\`\`

---

### Introducing CI/CD in Large Company

1. **Pilot project** - Prove value small scale
2. **Executive buy-in** - Show ROI metrics
3. **Training program** - Upskill teams
4. **Gradual rollout** - Department by department
5. **Tool selection** - Enterprise-ready solutions
6. **Cultural change** - DevOps mindset

---

### When to Reinvent the Wheel

**Justified when:**

- Core competency
- Specific requirements unmet
- Learning opportunity
- Performance critical
- Security requirements

---

### What Happens When You Type Google.com

1. **DNS lookup** - Resolve IP address
2. **TCP handshake** - Establish connection
3. **TLS negotiation** - Secure connection
4. **HTTP request** - GET /
5. **Server processing** - Generate response
6. **Response transfer** - HTML/CSS/JS
7. **Browser parsing** - Build DOM
8. **Resource fetching** - Images, scripts
9. **Rendering** - Paint pixels
10. **JavaScript execution** - Interactive page

---

### OS When Idle

- **Scheduler** runs idle process
- **Interrupts** handled (timer, I/O)
- **Power management** - CPU scaling
- **Background tasks** - GC, indexing
- **System calls** waiting
- **Context switches** ready

---

### Unicode to 5-Year-Old

"Imagine you have a big box of letters from all languages - English, Chinese, emoji. Unicode is like giving each letter a special number so computers everywhere know exactly which letter you mean. So when you send 😊 to grandma, her computer knows to show the same smiley!"

---

### Database Transactions to 5-Year-Old

"Imagine moving toys between two boxes. A transaction means either ALL toys move, or NONE move - never half. If you drop a toy midway, everything goes back to how it started. This keeps your toy boxes organized!"

---

### Defending Monoliths

**Advantages:**

1. **Simplicity** - One codebase, deployment
2. **Performance** - No network calls
3. **Transactions** - ACID guarantees easy
4. **Debugging** - Single process
5. **Development speed** - Initially faster
6. **Cost** - Less infrastructure

---

### People Who Like This Also Like

\`\`\`python
class RecommendationEngine:
    def collaborative_filtering(self, user_id, item_id):
        # Find users who liked the same item
        similar_users = self.find_users_who_liked(item_id)

        # Find what else they liked
        other_items = {}
        for user in similar_users:
            for item in user.liked_items:
                if item != item_id:
                    other_items[item] = other_items.get(item, 0) + 1

        # Return most common
        return sorted(other_items.items(),
                     key=lambda x: x[1],
                     reverse=True)[:10]
\`\`\`

---

### Why Corporations Slower than Startups

1. **Process overhead** - Multiple approvals
2. **Risk aversion** - Can't fail publicly
3. **Legacy systems** - Technical debt
4. **Politics** - Internal competition
5. **Size** - Communication overhead
6. **Incentives** - Optimized for stability

---

## Code Snippet Problems

### JavaScript Closure Issue

\`\`\`javascript
function hookupevents() {
  for (var i = 0; i < 3; i++) {
    document
      .getElementById("button" + i)
      .addEventListener("click", function () {
        alert(i);
      });
  }
}
\`\`\`

**Output**: Always alerts "3"  
**Why**: \`var\` is function-scoped, closures capture reference, not value

**Fix:**

\`\`\`javascript
// Use let (block-scoped)
for (let i = 0; i < 3; i++) {
  // Each iteration has its own i
}

// Or IIFE
for (var i = 0; i < 3; i++) {
  (function (index) {
    document
      .getElementById("button" + index)
      .addEventListener("click", function () {
        alert(index);
      });
  })(i);
}
\`\`\`

---

### Java Type Erasure

\`\`\`java
ArrayList<Integer> li = new ArrayList<Integer>();
ArrayList<Float> lf = new ArrayList<Float>();
if (li.getClass() == lf.getClass()) // true
    System.out.println("Equal");
\`\`\`

**Output**: "Equal"  
**Why**: Generics erased at runtime, both are just \`ArrayList\`

---

### Stack Memory Leak

\`\`\`java
public Object pop() {
    if (size == 0)
        throw new EmptyStackException();
    return elements[--size];  // Leak: reference still held
}
\`\`\`

**Fix:**

\`\`\`java
public Object pop() {
    if (size == 0)
        throw new EmptyStackException();
    Object result = elements[--size];
    elements[size] = null;  // Clear reference
    return result;
}
\`\`\`

---

### Eliminating Switch (Strategy Pattern)

\`\`\`java
interface ResponseHandler {
    String handle(String input);
}

class FailHandler implements ResponseHandler {
    public String handle(String input) { return "error"; }
}

class OkHandler implements ResponseHandler {
    public String handle(String input) {
        return String.format("%s%s", input, input);
    }
}

class Formatter {
    private Map<String, ResponseHandler> handlers = Map.of(
        "FAIL", new FailHandler(),
        "OK", new OkHandler()
    );

    public String doTheJob(String input) {
        String response = service.askForPermission();
        return handlers.getOrDefault(response, i -> null).handle(input);
    }
}
\`\`\`

---

### Eliminating If Chains

\`\`\`java
public String Execute(String file) {
    String rewrittenUrl = fileHandler.getXmlFileFromFileName(file);
    if (rewrittenUrl.isEmpty()) return "";

    String executionId = fileHandler.getExecutionIdFromFileName(file);
    if (executionId.isEmpty()) return "";

    Foo knownFoo = fooRepository.getFooByXmlFileName(rewrittenUrl);
    if (knownFoo == null) return "";

    return knownFoo.DoThat(file);
}
\`\`\`

---

### Refactoring Nested Ifs

\`\`\`c
HRESULT error = S_OK;
error = Operation1();
if (FAILED(error)) return OPERATION1FAILED;

error = Operation2();
if (FAILED(error)) return OPERATION2FAILED;

error = Operation3();
if (FAILED(error)) return OPERATION3FAILED;

error = Operation4();
if (FAILED(error)) return OPERATION4FAILED;

return S_OK;
\`\`\`

---

### Defend COBOL

1. **Reliability** - Powers 70% of business transactions
2. **Decimal arithmetic** - Perfect for finance
3. **Readability** - English-like syntax
4. **Stability** - Proven over 60 years
5. **Performance** - Optimized compilers

---

### Advice to Younger Self

1. **Focus on fundamentals** - Algorithms, systems design
2. **Build real projects** - Theory isn't enough
3. **Contribute to open source** - Learn from experts
4. **Network early** - Relationships matter
5. **Learn to communicate** - Technical skills aren't everything

---

## Additional Resources

### Books

- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "Clean Code" by Robert Martin
- "The Pragmatic Programmer" by Andrew Hunt and David Thomas
- "Cracking the Coding Interview" by Gayle Laakmann McDowell

### Online Resources

- System Design Primer (GitHub)
- LeetCode (Algorithms practice)
- HackerRank (Coding challenges)
- Pramp (Mock interviews)
- High Scalability (Architecture case studies)

### Key Technologies to Master

- **Languages**: Java, Python, Go, JavaScript
- **Databases**: MySQL, PostgreSQL, Redis, MongoDB
- **Message Queues**: Kafka, RabbitMQ, AWS SQS
- **Cloud**: AWS, GCP, Azure basics
- **Containers**: Docker, Kubernetes
- **CI/CD**: Jenkins, GitHub Actions
- **Monitoring**: Prometheus, Grafana, ELK Stack

---
`,im=`---
title: Claude Code
date: 2026-06-25
---

# My Experience with Claude Code

## Intro
After roughly one year of working with claude code on a variety of projects, I wanted to take the time to reflect and write down some of the stuff I've learned during that time. If I had to break it down, it really comes down to trying to look past the bells and whistles and trying to understand, even a little bit, as to how it works. I think the most important thing of that aspect, at least that we have access to as a user, is context management. We'll also talk about skills and subagents and hooks and whatnot but in my opinion most of it comes down to context management. 

## Context Management
I think at this point everyone knows a little bit about the context window. If you watch any youtube video, even the official ones by Anthropic, they'll tell you that just because a model has a 1m token window or whatever, absolutely does not mean that you should be using all 1m tokens of that window. If we look and treat claude code just as a fancy character/word predictor, it makes sense. When there are thousands of characters that come before it, it will naturally struggle to pick out signals from the clump. 

The first part to this is being willing to just set up a new session, or run compact regularly. I typically try to keep the context usage to under 150k tokens at the max. That seems pretty small, but we'll discuss more on how to achieve this when we get to subagents. I think a lot of people tend not to run compact or start new sessions because they're afraid of losing context(information). While that may be the case, you have to really ask yourself how much of that context is really needed. Odds are, you don't need every single one of those 200k tokens - maybe only 20k of them. Claude Code and many other agentic harnesses already have the ability to compact based on instructions, so you can pick out those 20k tokens and tell it to keep only those. 

Another practice that I think has worked out pretty well for me is just keeping a docs folder in your project directory. How it is layed out and managed is up to you and/or your agent, but the gist of it is to keep a well maintained library of your specs, design decisions, completed and uncompleted tasks, and any other notes relevant to your work. Your agent can pretty easily parse through the docs to find the right information, as long as you give it the right tools and organize and update information in a deliberate way. This also allows you to keep track of information and work accomplished across sessions. When sessions go long, your previous context is evicted out of the models cache, and reinserting it becomes expensive. Keeping an up to date docs means that when you step away, you can just restart a new session and reference the critical information in the docs rather than shoving the entire stale session back to the model. 

## Subagents
As the name implies, subagents are just subordinate agents to the main one that you are interfacing with. What makes them great is that you can specialize them for certain tasks, give them specific tools and instructions, and have them complete the tasks they are most fit for. They also help with context management. Say you are working on a complex feature with a set of changes that need to be rolled out. If you have your main agent do the entire thing, it will not only complete tasks sequentially, it will also keep all information of previous tasks in context, whether its needed or not. Instead, you can create a subagent for each task that will work asynchronously. Each subagent has a fresh context that only pertains to the task it needs to complete, and nothing else. This is a great way of working on more complex features with moving parts. The best part of this is that harnesses such as claude code already know what subagents are and can create and manage them. If you just tell it to create subagents to do x y and z, it will. You can define your own subagents and activate them if you want, but just know that there are other options as well. 

## Skills
When I first read about skills way back when it first came out, I thought it seemed really interesting. MCP was all the hype back then, but I felt inclined to try out skills as well. Skills are loaded in at the start of a session, and all they really are are a markdown file that describe a "skill" and when to use it. Pretty handy, right? However, I took that as I should just add in skills for pretty much everything I do (or might do) so that my agent could do anything I wanted to. ~250 skills later, my agent was slower and frankly dumber than ever. I didn't do my due diligence and just added an absurd amount of skills, and it took me a bit to realize that they were the reason why I was running through usage faster, and why my context was bloating so fast. My agent also kept trying to invoke random skills that were not at all relevant, which burned through both tokens and my patience. After some serious reflection and pruning, I'm now down to around 10 skills and 20 locked behind plugins. In total, they take up around 3k tokens per session. Not negligible, but a lot more manageable than before. I plan on cutting down that number further after some reviews of what skills I typically actually use. My big takeaway? Skills are a useful tool that should be taken advantage of. But skill bloat can still be impactful, so be realistic in terms of what skills you actually need. There's a lot of stuff that claude code can already do. 

## Models and Modes
A lot of people seem to treat Claude Code like some sort of Doraemon-esque tools that can do everything and anything. I'm here to suggest that that's not the case. It's definitely a lot better at a lot of things than me, but I won't delude myself into believing that it can do everything. For one, some people have claimed that the planning mode is useless, and that the Opus/Fable models can just one shot everything without planning. That is an absurd take. These models still can't generate anything good from nothing. It's up to you to still go through the planning phase, define expected results, and go through the SDLC. To continue with this train of thought, Opus and Fable are great models but not omniscient. Temper your expectations, and take the time to maximize your results. You should not be using Opus/Fable for everything. Quite frankly, it's overkill. Plan using the models that are good at it, and just use Sonnett for the coding parts. For even better effects, use Fable to generate skills that can be used by the lower tier models for coding tasks that are tricky. I have ones for test design, concurrency and consistency problems, performance pitfalls, resilient integrations, and a couple of language/framework specific ones. In my humble opinion, choosing the right model for the right task and giving it the right tools is much more efficient than just going max on everything. 

## TLDR
Use as little context as possible. You'll get better results for cheaper.
`,sm=`---
title: Intern Reflections at M&T
date: 2026-08-02
---
# Reflections on Internship

## Breakdown
As I'm writing this, there's just one week left in my internship at M&T Bank. I wanted to jot down the things I've learned, the things I wish I learned, and anything else I find meaningful about my summer here. 

### My Work
I was one of two interns on the CBA(Core Banking APIs) team here at M&T Bank. We managed a variety of services(off the top of my head around 26 microservices+1 I made that has not been deployed yet) which included FDX(Financial Data Exchange) and some other app codes. While I did have some larger project tasks, most of the weekly work was contributing to sprint tasks and completing tickets. That really accustomed me to what its like working on a team with actual deadlines and expectations that had to be met. 

## Interning in General
Although it varies team to team, I'm happy to say that CBA has been exceptionally welcoming and accomodating for my duration on the team. While this is by no means a knock at any of the other places I've been at previously, they helped me get familiar with the codebase(s) and answered any question I had. They were forthcoming with assistance and information, and involved me whenever possible. When I asked to get involved with projects or stories, they were always willing to let me pitch in. That leads to the first reflection I have: having initiative is unbelievably important. 

### Initiative
If I had just sat at my desk and only did the things I was asked to, I don't think I would have gotten nearly as much done as I had. My first actual code change beyond changing poms and properties came after insistent bugging of my mentor, after which he gave me a known bug ticket to work on. After that, I gained a lot more confidence and trust from the team to work on tickets, and let me do a lot more than I otherwise could have. Of the two biggest projects that I did over the summer, the first came from the team lead that had planned work in preparation for an upcoming cloud migration, whereas the other came from explicitly asking for a larger project, after which I was given permission to create a new service to overhaul the existing API key system. 

### Due Diligence
Working on code is scary. Even though there are reviews and testing environments and whatnot before things reach production, it is still scary. Many people have probably heard the phrase "Move fast, break things" or however it goes, but I'm more of a "Move fast, try not to break things" kind of person. What it comes down to is just doing your due diligence. Triage your tickets properly, think things through, and don't be afraid to get a second opinion. It's easier to revise your implementation in the planning phase than after your merge request has been denied and you have to start from scratch. 

### Bigger Picture
Always think about the bigger picture. To work on a service, you have to understand:
1. What it does
2. What it relies on
3. Who relies on it
When implementing a new feature or even a new service, you need to fully understand all the parts involved. How to make your changes to satisfy a request from a consumer without breaking other consumers, how to roll out a feature that won't impact consumers who don't opt in, that kind of stuff.
`,om=Object.assign({"../content/notes/backend-notes.md":rm,"../content/notes/claude-code.md":im,"../content/notes/mtb-intern-reflections.md":sm});function lm(e){const n=e.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);if(!n)return{meta:{},body:e};const t={};for(const r of n[1].split(`
`)){const i=r.indexOf(":");i!==-1&&(t[r.slice(0,i).trim()]=r.slice(i+1).trim())}return{meta:t,body:n[2].trim()}}function am(e,n=160){const r=(e.split(`
`).find(i=>i.trim().length>0)||"").replace(/[#*_`>[\]]/g,"").trim();return r.length>n?r.slice(0,n).trim()+"…":r}const fd=Object.entries(om).map(([e,n])=>{const t=e.split("/").pop().replace(/\.md$/,""),{meta:r,body:i}=lm(n);return{slug:t,title:r.title||t,date:r.date||"",body:i,excerpt:am(i)}}).sort((e,n)=>e.date<n.date?1:-1),um=()=>c.jsx("section",{id:"notes",className:"notes",children:c.jsxs("div",{className:"notes-container",children:[c.jsx("h2",{className:"section-title",children:"Notes"}),c.jsx("div",{className:"notes-list",children:fd.map(e=>c.jsxs("article",{className:"note-preview",children:[c.jsxs("div",{className:"note-preview-header",children:[c.jsx("h3",{className:"note-preview-title",children:c.jsx("a",{href:`#/notes/${e.slug}`,children:e.title})}),c.jsx("span",{className:"note-preview-date",children:e.date})]}),c.jsx("p",{className:"note-preview-excerpt",children:e.excerpt}),c.jsx("a",{className:"note-read-link",href:`#/notes/${e.slug}`,children:"Read →"})]},e.slug))})]})});function gl(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var qn=gl();function md(e){qn=e}var jn={exec:()=>null};function Yn(e){let n=[];return t=>{let r=Math.max(0,Math.min(3,t-1)),i=n[r];return i||(i=e(r),n[r]=i),i}}function A(e,n=""){let t=typeof e=="string"?e:e.source,r={replace:(i,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(ae.caret,"$1"),t=t.replace(i,o),r},getRegex:()=>new RegExp(t,n)};return r}var cm=((e="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+e)}catch{return!1}})(),ae={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Yn(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Yn(e=>new RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Yn(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:Yn(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:Yn(e=>new RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Yn(e=>new RegExp(`^ {0,${e}}>`))},dm=/^(?:[ \t]*(?:\n|$))+/,pm=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,hm=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,kr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,fm=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,yl=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,gd=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,yd=A(gd).replace(/bull/g,yl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),mm=A(gd).replace(/bull/g,yl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),vl=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,gm=/^[^\n]+/,kl=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ym=A(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",kl).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),vm=A(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,yl).getRegex(),Wi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",wl=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,km=A("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",wl).replace("tag",Wi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),vd=e=>A(vl).replace("hr",kr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list",e).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Wi).getRegex(),wm=vd(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Sm=vd(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),xm=A(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Sm).getRegex(),Sl={blockquote:xm,code:pm,def:ym,fences:hm,heading:fm,hr:kr,html:km,lheading:yd,list:vm,newline:dm,paragraph:wm,table:jn,text:gm},Wa=A("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",kr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Wi).getRegex(),Em={...Sl,lheading:mm,table:Wa,paragraph:A(vl).replace("hr",kr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Wa).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Wi).getRegex()},_m={...Sl,html:A(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",wl).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:jn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:A(vl).replace("hr",kr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",yd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Cm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,bm=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,kd=/^( {2,}|\\)\n(?!\s*$)/,Tm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ct=/[\p{P}\p{S}]/u,Vi=/[\s\p{P}\p{S}]/u,xl=/[^\s\p{P}\p{S}]/u,Nm=A(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Vi).getRegex(),wd=/(?!~)[\p{P}\p{S}]/u,Pm=/(?!~)[\s\p{P}\p{S}]/u,Rm=/(?:[^\s\p{P}\p{S}]|~)/u,Lm=A(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",cm?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Sd=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Im=A(Sd,"u").replace(/punct/g,Ct).getRegex(),jm=A(Sd,"u").replace(/punct/g,wd).getRegex(),xd="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Am=A(xd,"gu").replace(/notPunctSpace/g,xl).replace(/punctSpace/g,Vi).replace(/punct/g,Ct).getRegex(),zm=A(xd,"gu").replace(/notPunctSpace/g,Rm).replace(/punctSpace/g,Pm).replace(/punct/g,wd).getRegex(),Mm=A("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,xl).replace(/punctSpace/g,Vi).replace(/punct/g,Ct).getRegex(),Dm=A(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Ct).getRegex(),Om="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Fm=A(Om,"gu").replace(/notPunctSpace/g,xl).replace(/punctSpace/g,Vi).replace(/punct/g,Ct).getRegex(),$m=A(/\\(punct)/,"gu").replace(/punct/g,Ct).getRegex(),Bm=A(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Um=A(wl).replace("(?:-->|$)","-->").getRegex(),Hm=A("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Um).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ci=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Wm=A(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Ci).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ed=A(/^!?\[(label)\]\[(ref)\]/).replace("label",Ci).replace("ref",kl).getRegex(),_d=A(/^!?\[(ref)\](?:\[\])?/).replace("ref",kl).getRegex(),Vm=A("reflink|nolink(?!\\()","g").replace("reflink",Ed).replace("nolink",_d).getRegex(),Va=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,El={_backpedal:jn,anyPunctuation:$m,autolink:Bm,blockSkip:Lm,br:kd,code:bm,del:jn,delLDelim:jn,delRDelim:jn,emStrongLDelim:Im,emStrongRDelimAst:Am,emStrongRDelimUnd:Mm,escape:Cm,link:Wm,nolink:_d,punctuation:Nm,reflink:Ed,reflinkSearch:Vm,tag:Hm,text:Tm,url:jn},Qm={...El,link:A(/^!?\[(label)\]\((.*?)\)/).replace("label",Ci).getRegex(),reflink:A(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ci).getRegex()},vo={...El,emStrongRDelimAst:zm,emStrongLDelim:jm,delLDelim:Dm,delRDelim:Fm,url:A(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Va).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:A(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Va).getRegex()},qm={...vo,br:A(kd).replace("{2,}","*").getRegex(),text:A(vo.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Fr={normal:Sl,gfm:Em,pedantic:_m},Mt={normal:El,gfm:vo,breaks:qm,pedantic:Qm},Gm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qa=e=>Gm[e];function We(e,n){if(n){if(ae.escapeTest.test(e))return e.replace(ae.escapeReplace,Qa)}else if(ae.escapeTestNoEncode.test(e))return e.replace(ae.escapeReplaceNoEncode,Qa);return e}function qa(e){try{e=encodeURI(e).replace(ae.percentDecode,"%")}catch{return null}return e}function Ga(e,n){var s;let t=e.replace(ae.findPipe,(o,a,l)=>{let u=!1,h=a;for(;--h>=0&&l[h]==="\\";)u=!u;return u?"|":" |"}),r=t.split(ae.splitPipe),i=0;if(r[0].trim()||r.shift(),r.length>0&&!((s=r.at(-1))!=null&&s.trim())&&r.pop(),n)if(r.length>n)r.splice(n);else for(;r.length<n;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(ae.slashPipe,"|");return r}function an(e,n,t){let r=e.length;if(r===0)return"";let i=0;for(;i<r;){let s=e.charAt(r-i-1);if(s===n&&!t)i++;else if(s!==n&&t)i++;else break}return e.slice(0,r-i)}function Ya(e){let n=e.split(`
`),t=n.length-1;for(;t>=0&&ae.blankLine.test(n[t]);)t--;return n.length-t<=2?e:n.slice(0,t+1).join(`
`)}function Ym(e,n){if(e.indexOf(n[1])===-1)return-1;let t=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===n[0])t++;else if(e[r]===n[1]&&(t--,t<0))return r;return t>0?-2:-1}function Km(e,n=0){let t=n,r="";for(let i of e)if(i==="	"){let s=4-t%4;r+=" ".repeat(s),t+=s}else r+=i,t++;return r}function Ka(e,n,t,r,i){let s=n.href,o=n.title||null,a=e[1].replace(i.other.outputLinkReplace,"$1");r.state.inLink=!0;let l={type:e[0].charAt(0)==="!"?"image":"link",raw:t,href:s,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,l}function Xm(e,n,t){let r=e.match(t.other.indentCodeCompensation);if(r===null)return n;let i=r[1];return n.split(`
`).map(s=>{let o=s.match(t.other.beginningSpace);if(o===null)return s;let[a]=o;return a.length>=i.length?s.slice(i.length):s}).join(`
`)}var bi=class{constructor(e){x(this,"options");x(this,"rules");x(this,"lexer");this.options=e||qn}space(e){let n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){let n=this.rules.block.code.exec(e);if(n){let t=this.options.pedantic?n[0]:Ya(n[0]),r=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:r}}}fences(e){let n=this.rules.block.fences.exec(e);if(n){let t=n[0],r=Xm(t,n[3]||"",this.rules);return{type:"code",raw:t,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:r}}}heading(e){let n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(this.rules.other.endingHash.test(t)){let r=an(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:an(n[0],`
`),depth:n[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(e){let n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:an(n[0],`
`)}}blockquote(e){let n=this.rules.block.blockquote.exec(e);if(n){let t=an(n[0],`
`).split(`
`),r="",i="",s=[];for(;t.length>0;){let o=!1,a=[],l;for(l=0;l<t.length;l++)if(this.rules.other.blockquoteStart.test(t[l]))a.push(t[l]),o=!0;else if(!o)a.push(t[l]);else break;t=t.slice(l);let u=a.join(`
`),h=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,i=i?`${i}
${h}`:h;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,s,!0),this.lexer.state.top=f,t.length===0)break;let d=s.at(-1);if((d==null?void 0:d.type)==="code")break;if((d==null?void 0:d.type)==="blockquote"){let v=d,y=v.raw+`
`+t.join(`
`),k=this.blockquote(y);s[s.length-1]=k,r=r.substring(0,r.length-v.raw.length)+k.raw,i=i.substring(0,i.length-v.text.length)+k.text;break}else if((d==null?void 0:d.type)==="list"){let v=d,y=v.raw+`
`+t.join(`
`),k=this.list(y);s[s.length-1]=k,r=r.substring(0,r.length-d.raw.length)+k.raw,i=i.substring(0,i.length-v.raw.length)+k.raw,t=y.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:s,text:i}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t=n[1].trim(),r=t.length>1,i={type:"list",raw:"",ordered:r,start:r?+t.slice(0,-1):"",loose:!1,items:[]};t=r?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=r?t:"[*+-]");let s=this.rules.other.listItemRegex(t),o=!1;for(;e;){let l=!1,u="",h="";if(!(n=s.exec(e))||this.rules.block.hr.test(e))break;u=n[0],e=e.substring(u.length);let f=Km(n[2].split(`
`,1)[0],n[1].length),d=e.split(`
`,1)[0],v=!f.trim(),y=0;if(this.options.pedantic?(y=2,h=f.trimStart()):v?y=n[1].length+1:(y=f.search(this.rules.other.nonSpaceChar),y=y>4?1:y,h=f.slice(y),y+=n[1].length),v&&this.rules.other.blankLine.test(d)&&(u+=d+`
`,e=e.substring(d.length+1),l=!0),!l){let k=this.rules.other.nextBulletRegex(y),P=this.rules.other.hrRegex(y),m=this.rules.other.fencesBeginRegex(y),p=this.rules.other.headingBeginRegex(y),g=this.rules.other.htmlBeginRegex(y),w=this.rules.other.blockquoteBeginRegex(y);for(;e;){let E=e.split(`
`,1)[0],_;if(d=E,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),_=d):_=d.replace(this.rules.other.tabCharGlobal,"    "),m.test(d)||p.test(d)||g.test(d)||w.test(d)||k.test(d)||P.test(d))break;if(_.search(this.rules.other.nonSpaceChar)>=y||!d.trim())h+=`
`+_.slice(y);else{if(v||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||m.test(f)||p.test(f)||P.test(f))break;h+=`
`+d}v=!d.trim(),u+=E+`
`,e=e.substring(E.length+1),f=_.slice(y)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(o=!0)),i.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(h),loose:!1,text:h,tokens:[]}),i.raw+=u}let a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let l of i.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let u=l.tokens[0];if(l.task&&((u==null?void 0:u.type)==="text"||(u==null?void 0:u.type)==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),u.raw=u.raw.replace(this.rules.other.listReplaceTask,""),u.text=u.text.replace(this.rules.other.listReplaceTask,"");for(let f=this.lexer.inlineQueue.length-1;f>=0;f--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)){this.lexer.inlineQueue[f].src=this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask,"");break}let h=this.rules.other.listTaskCheckbox.exec(l.raw);if(h){let f={type:"checkbox",raw:h[0]+" ",checked:h[0]!=="[ ]"};l.checked=f.checked,i.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=f.raw+l.tokens[0].raw,l.tokens[0].text=f.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(f)):l.tokens.unshift({type:"paragraph",raw:f.raw,text:f.raw,tokens:[f]}):l.tokens.unshift(f)}}else l.task&&(l.task=!1);if(!i.loose){let h=l.tokens.filter(d=>d.type==="space"),f=h.length>0&&h.some(d=>this.rules.other.anyLine.test(d.raw));i.loose=f}}if(i.loose)for(let l of i.items){l.loose=!0;for(let u of l.tokens)u.type==="text"&&(u.type="paragraph")}return i}}html(e){let n=this.rules.block.html.exec(e);if(n){let t=Ya(n[0]);return{type:"html",block:!0,raw:t,pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:t}}}def(e){let n=this.rules.block.def.exec(e);if(n){let t=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:t,raw:an(n[0],`
`),href:r,title:i}}}table(e){var o;let n=this.rules.block.table.exec(e);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;let t=Ga(n[1]),r=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(o=n[3])!=null&&o.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:an(n[0],`
`),header:[],align:[],rows:[]};if(t.length===r.length){for(let a of r)this.rules.other.tableAlignRight.test(a)?s.align.push("right"):this.rules.other.tableAlignCenter.test(a)?s.align.push("center"):this.rules.other.tableAlignLeft.test(a)?s.align.push("left"):s.align.push(null);for(let a=0;a<t.length;a++)s.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:s.align[a]});for(let a of i)s.rows.push(Ga(a,s.header.length).map((l,u)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:s.align[u]})));return s}}lheading(e){let n=this.rules.block.lheading.exec(e);if(n){let t=n[1].trim();return{type:"heading",raw:an(n[0],`
`),depth:n[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(e){let n=this.rules.block.paragraph.exec(e);if(n){let t=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:t,tokens:this.lexer.inline(t)}}}text(e){let n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){let n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(e){let n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){let n=this.rules.inline.link.exec(e);if(n){let t=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let s=an(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{let s=Ym(n[2],"()");if(s===-2)return;if(s>-1){let o=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,o).trim(),n[3]=""}}let r=n[2],i="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(r);s&&(r=s[1],i=s[3])}else i=n[3]?n[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),Ka(n,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=n[r.toLowerCase()];if(!i){let s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return Ka(t,i,t[0],this.lexer,this.rules)}}emStrong(e,n,t=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!t||this.rules.inline.punctuation.exec(t))){let i=[...r[0]].length-1,s,o,a=i,l=0,u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,n=n.slice(-1*e.length+i);(r=u.exec(n))!==null;){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s)continue;if(o=[...s].length,r[3]||r[4]){a+=o;continue}else if((r[5]||r[6])&&i%3&&!((i+o)%3)){l+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a+l);let h=[...r[0]][0].length,f=e.slice(0,i+r.index+h+o);if(Math.min(i,o)%2){let v=f.slice(1,-1);return{type:"em",raw:f,text:v,tokens:this.lexer.inlineTokens(v)}}let d=f.slice(2,-2);return{type:"strong",raw:f,text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(e){let n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:n[0],text:t}}}br(e){let n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e,n,t=""){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!t||this.rules.inline.punctuation.exec(t))){let i=[...r[0]].length-1,s,o,a=i,l=this.rules.inline.delRDelim;for(l.lastIndex=0,n=n.slice(-1*e.length+i);(r=l.exec(n))!==null;){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s||(o=[...s].length,o!==i))continue;if(r[3]||r[4]){a+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a);let u=[...r[0]][0].length,h=e.slice(0,i+r.index+u+o),f=h.slice(i,-i);return{type:"del",raw:h,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(e){let n=this.rules.inline.autolink.exec(e);if(n){let t,r;return n[2]==="@"?(t=n[1],r="mailto:"+t):(t=n[1],r=t),{type:"link",raw:n[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(e){var t;let n;if(n=this.rules.inline.url.exec(e)){let r,i;if(n[2]==="@")r=n[0],i="mailto:"+r;else{let s;do s=n[0],n[0]=((t=this.rules.inline._backpedal.exec(n[0]))==null?void 0:t[0])??"";while(s!==n[0]);r=n[0],n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){let n=this.rules.inline.text.exec(e);if(n){let t=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:t}}}},Oe=class ko{constructor(n){x(this,"tokens");x(this,"options");x(this,"state");x(this,"inlineQueue");x(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||qn,this.options.tokenizer=this.options.tokenizer||new bi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:ae,block:Fr.normal,inline:Mt.normal};this.options.pedantic?(t.block=Fr.pedantic,t.inline=Mt.pedantic):this.options.gfm&&(t.block=Fr.gfm,this.options.breaks?t.inline=Mt.breaks:t.inline=Mt.gfm),this.tokenizer.rules=t}static get rules(){return{block:Fr,inline:Mt}}static lex(n,t){return new ko(t).lex(n)}static lexInline(n,t){return new ko(t).inlineTokens(n)}lex(n){n=n.replace(ae.carriageReturn,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],r=!1){var s,o,a;this.tokenizer.lexer=this,this.options.pedantic&&(n=n.replace(ae.tabCharGlobal,"    ").replace(ae.spaceLine,""));let i=1/0;for(;n;){if(n.length<i)i=n.length;else{this.infiniteLoopError(n.charCodeAt(0));break}let l;if((o=(s=this.options.extensions)==null?void 0:s.block)!=null&&o.some(h=>(l=h.call({lexer:this},n,t))?(n=n.substring(l.raw.length),t.push(l),!0):!1))continue;if(l=this.tokenizer.space(n)){n=n.substring(l.raw.length);let h=t.at(-1);l.raw.length===1&&h!==void 0?h.raw+=`
`:t.push(l);continue}if(l=this.tokenizer.code(n)){n=n.substring(l.raw.length);let h=t.at(-1);(h==null?void 0:h.type)==="paragraph"||(h==null?void 0:h.type)==="text"?(h.raw+=(h.raw.endsWith(`
`)?"":`
`)+l.raw,h.text+=`
`+l.text,this.inlineQueue.at(-1).src=h.text):t.push(l);continue}if(l=this.tokenizer.fences(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.heading(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.hr(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.blockquote(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.list(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.html(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.def(n)){n=n.substring(l.raw.length);let h=t.at(-1);(h==null?void 0:h.type)==="paragraph"||(h==null?void 0:h.type)==="text"?(h.raw+=(h.raw.endsWith(`
`)?"":`
`)+l.raw,h.text+=`
`+l.raw,this.inlineQueue.at(-1).src=h.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title},t.push(l));continue}if(l=this.tokenizer.table(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.lheading(n)){n=n.substring(l.raw.length),t.push(l);continue}let u=n;if((a=this.options.extensions)!=null&&a.startBlock){let h=1/0,f=n.slice(1),d;this.options.extensions.startBlock.forEach(v=>{d=v.call({lexer:this},f),typeof d=="number"&&d>=0&&(h=Math.min(h,d))}),h<1/0&&h>=0&&(u=n.substring(0,h+1))}if(this.state.top&&(l=this.tokenizer.paragraph(u))){let h=t.at(-1);r&&(h==null?void 0:h.type)==="paragraph"?(h.raw+=(h.raw.endsWith(`
`)?"":`
`)+l.raw,h.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=h.text):t.push(l),r=u.length!==n.length,n=n.substring(l.raw.length);continue}if(l=this.tokenizer.text(n)){n=n.substring(l.raw.length);let h=t.at(-1);(h==null?void 0:h.type)==="text"?(h.raw+=(h.raw.endsWith(`
`)?"":`
`)+l.raw,h.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=h.text):t.push(l);continue}if(n){this.infiniteLoopError(n.charCodeAt(0));break}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){var a,l,u,h,f;this.tokenizer.lexer=this;let r=n;if(this.tokens.links){let d=Object.keys(this.tokens.links);d.length>0&&(r=r.replace(this.tokenizer.rules.inline.reflinkSearch,v=>d.includes(v.slice(v.lastIndexOf("[")+1,-1))?"["+"a".repeat(v.length-2)+"]":v))}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,"++"),r=r.replace(this.tokenizer.rules.inline.blockSkip,(d,v,y)=>{let k=y?y.length:0;return d.slice(0,k)+"["+"a".repeat(d.length-k-2)+"]"}),r=((l=(a=this.options.hooks)==null?void 0:a.emStrongMask)==null?void 0:l.call({lexer:this},r))??r;let i=!1,s="",o=1/0;for(;n;){if(n.length<o)o=n.length;else{this.infiniteLoopError(n.charCodeAt(0));break}i||(s=""),i=!1;let d;if((h=(u=this.options.extensions)==null?void 0:u.inline)!=null&&h.some(y=>(d=y.call({lexer:this},n,t))?(n=n.substring(d.raw.length),t.push(d),!0):!1))continue;if(d=this.tokenizer.escape(n)){n=n.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.tag(n)){n=n.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.link(n)){n=n.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(d.raw.length);let y=t.at(-1);d.type==="text"&&(y==null?void 0:y.type)==="text"?(y.raw+=d.raw,y.text+=d.text):t.push(d);continue}if(d=this.tokenizer.emStrong(n,r,s)){n=n.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.codespan(n)){n=n.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.br(n)){n=n.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.del(n,r,s)){n=n.substring(d.raw.length),t.push(d);continue}if(d=this.tokenizer.autolink(n)){n=n.substring(d.raw.length),t.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(n))){n=n.substring(d.raw.length),t.push(d);continue}let v=n;if((f=this.options.extensions)!=null&&f.startInline){let y=1/0,k=n.slice(1),P;this.options.extensions.startInline.forEach(m=>{P=m.call({lexer:this},k),typeof P=="number"&&P>=0&&(y=Math.min(y,P))}),y<1/0&&y>=0&&(v=n.substring(0,y+1))}if(d=this.tokenizer.inlineText(v)){n=n.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(s=d.raw.slice(-1)),i=!0;let y=t.at(-1);(y==null?void 0:y.type)==="text"?(y.raw+=d.raw,y.text+=d.text):t.push(d);continue}if(n){this.infiniteLoopError(n.charCodeAt(0));break}}return t}infiniteLoopError(n){let t="Infinite loop on byte: "+n;if(this.options.silent)console.error(t);else throw new Error(t)}},Ti=class{constructor(e){x(this,"options");x(this,"parser");this.options=e||qn}space(e){return""}code({text:e,lang:n,escaped:t}){var s;let r=(s=(n||"").match(ae.notSpaceStart))==null?void 0:s[0],i=e.replace(ae.endingNewline,"")+`
`;return r?'<pre><code class="language-'+We(r)+'">'+(t?i:We(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:We(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){let n=e.ordered,t=e.start,r="";for(let o=0;o<e.items.length;o++){let a=e.items[o];r+=this.listitem(a)}let i=n?"ol":"ul",s=n&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
`+r+"</"+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",t="";for(let i=0;i<e.header.length;i++)t+=this.tablecell(e.header[i]);n+=this.tablerow({text:t});let r="";for(let i=0;i<e.rows.length;i++){let s=e.rows[i];t="";for(let o=0;o<s.length;o++)t+=this.tablecell(s[o]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let n=this.parser.parseInline(e.tokens),t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${We(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:t}){let r=this.parser.parseInline(t),i=qa(e);if(i===null)return r;e=i;let s='<a href="'+e+'"';return n&&(s+=' title="'+We(n)+'"'),s+=">"+r+"</a>",s}image({href:e,title:n,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));let i=qa(e);if(i===null)return We(t);e=i;let s=`<img src="${e}" alt="${We(t)}"`;return n&&(s+=` title="${We(n)}"`),s+=">",s}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:We(e.text)}},_l=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Fe=class wo{constructor(n){x(this,"options");x(this,"renderer");x(this,"textRenderer");this.options=n||qn,this.options.renderer=this.options.renderer||new Ti,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new _l}static parse(n,t){return new wo(t).parse(n)}static parseInline(n,t){return new wo(t).parseInline(n)}parse(n){var r,i;this.renderer.parser=this;let t="";for(let s=0;s<n.length;s++){let o=n[s];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[o.type]){let l=o,u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){t+=u||"";continue}}let a=o;switch(a.type){case"space":{t+=this.renderer.space(a);break}case"hr":{t+=this.renderer.hr(a);break}case"heading":{t+=this.renderer.heading(a);break}case"code":{t+=this.renderer.code(a);break}case"table":{t+=this.renderer.table(a);break}case"blockquote":{t+=this.renderer.blockquote(a);break}case"list":{t+=this.renderer.list(a);break}case"checkbox":{t+=this.renderer.checkbox(a);break}case"html":{t+=this.renderer.html(a);break}case"def":{t+=this.renderer.def(a);break}case"paragraph":{t+=this.renderer.paragraph(a);break}case"text":{t+=this.renderer.text(a);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return t}parseInline(n,t=this.renderer){var i,s;this.renderer.parser=this;let r="";for(let o=0;o<n.length;o++){let a=n[o];if((s=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&s[a.type]){let u=this.options.extensions.renderers[a.type].call({parser:this},a);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=u||"";continue}}let l=a;switch(l.type){case"escape":{r+=t.text(l);break}case"html":{r+=t.html(l);break}case"link":{r+=t.link(l);break}case"image":{r+=t.image(l);break}case"checkbox":{r+=t.checkbox(l);break}case"strong":{r+=t.strong(l);break}case"em":{r+=t.em(l);break}case"codespan":{r+=t.codespan(l);break}case"br":{r+=t.br(l);break}case"del":{r+=t.del(l);break}case"text":{r+=t.text(l);break}default:{let u='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},$r,Bt=($r=class{constructor(e){x(this,"options");x(this,"block");this.options=e||qn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Oe.lex:Oe.lexInline}provideParser(e=this.block){return e?Fe.parse:Fe.parseInline}},x($r,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),x($r,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),$r),Jm=class{constructor(...e){x(this,"defaults",gl());x(this,"options",this.setOptions);x(this,"parse",this.parseMarkdown(!0));x(this,"parseInline",this.parseMarkdown(!1));x(this,"Parser",Fe);x(this,"Renderer",Ti);x(this,"TextRenderer",_l);x(this,"Lexer",Oe);x(this,"Tokenizer",bi);x(this,"Hooks",Bt);this.use(...e)}walkTokens(e,n){var r,i;let t=[];for(let s of e)switch(t=t.concat(n.call(this,s)),s.type){case"table":{let o=s;for(let a of o.header)t=t.concat(this.walkTokens(a.tokens,n));for(let a of o.rows)for(let l of a)t=t.concat(this.walkTokens(l.tokens,n));break}case"list":{let o=s;t=t.concat(this.walkTokens(o.items,n));break}default:{let o=s;(i=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&i[o.type]?this.defaults.extensions.childTokens[o.type].forEach(a=>{let l=o[a].flat(1/0);t=t.concat(this.walkTokens(l,n))}):o.tokens&&(t=t.concat(this.walkTokens(o.tokens,n)))}}return t}use(...e){let n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(t=>{let r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let s=n.renderers[i.name];s?n.renderers[i.name]=function(...o){let a=i.renderer.apply(this,o);return a===!1&&(a=s.apply(this,o)),a}:n.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=n[i.level];s?s.unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(n.childTokens[i.name]=i.childTokens)}),r.extensions=n),t.renderer){let i=this.defaults.renderer||new Ti(this.defaults);for(let s in t.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let o=s,a=t.renderer[o],l=i[o];i[o]=(...u)=>{let h=a.apply(i,u);return h===!1&&(h=l.apply(i,u)),h||""}}r.renderer=i}if(t.tokenizer){let i=this.defaults.tokenizer||new bi(this.defaults);for(let s in t.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let o=s,a=t.tokenizer[o],l=i[o];i[o]=(...u)=>{let h=a.apply(i,u);return h===!1&&(h=l.apply(i,u)),h}}r.tokenizer=i}if(t.hooks){let i=this.defaults.hooks||new Bt;for(let s in t.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let o=s,a=t.hooks[o],l=i[o];Bt.passThroughHooks.has(s)?i[o]=u=>{if(this.defaults.async&&Bt.passThroughHooksRespectAsync.has(s))return(async()=>{let f=await a.call(i,u);return l.call(i,f)})();let h=a.call(i,u);return l.call(i,h)}:i[o]=(...u)=>{if(this.defaults.async)return(async()=>{let f=await a.apply(i,u);return f===!1&&(f=await l.apply(i,u)),f})();let h=a.apply(i,u);return h===!1&&(h=l.apply(i,u)),h}}r.hooks=i}if(t.walkTokens){let i=this.defaults.walkTokens,s=t.walkTokens;r.walkTokens=function(o){let a=[];return a.push(s.call(this,o)),i&&(a=a.concat(i.call(this,o))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Oe.lex(e,n??this.defaults)}parser(e,n){return Fe.parse(e,n??this.defaults)}parseMarkdown(e){return(n,t)=>{let r={...t},i={...this.defaults,...r},s=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let o=i.hooks?await i.hooks.preprocess(n):n,a=await(i.hooks?await i.hooks.provideLexer(e):e?Oe.lex:Oe.lexInline)(o,i),l=i.hooks?await i.hooks.processAllTokens(a):a;i.walkTokens&&await Promise.all(this.walkTokens(l,i.walkTokens));let u=await(i.hooks?await i.hooks.provideParser(e):e?Fe.parse:Fe.parseInline)(l,i);return i.hooks?await i.hooks.postprocess(u):u})().catch(s);try{i.hooks&&(n=i.hooks.preprocess(n));let o=(i.hooks?i.hooks.provideLexer(e):e?Oe.lex:Oe.lexInline)(n,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let a=(i.hooks?i.hooks.provideParser(e):e?Fe.parse:Fe.parseInline)(o,i);return i.hooks&&(a=i.hooks.postprocess(a)),a}catch(o){return s(o)}}}onError(e,n){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let r="<p>An error occurred:</p><pre>"+We(t.message+"",!0)+"</pre>";return n?Promise.resolve(r):r}if(n)return Promise.reject(t);throw t}}},Wn=new Jm;function D(e,n){return Wn.parse(e,n)}D.options=D.setOptions=function(e){return Wn.setOptions(e),D.defaults=Wn.defaults,md(D.defaults),D};D.getDefaults=gl;D.defaults=qn;D.use=function(...e){return Wn.use(...e),D.defaults=Wn.defaults,md(D.defaults),D};D.walkTokens=function(e,n){return Wn.walkTokens(e,n)};D.parseInline=Wn.parseInline;D.Parser=Fe;D.parser=Fe.parse;D.Renderer=Ti;D.TextRenderer=_l;D.Lexer=Oe;D.lexer=Oe.lex;D.Tokenizer=bi;D.Hooks=Bt;D.parse=D;D.options;D.setOptions;D.use;D.walkTokens;D.parseInline;Fe.parse;Oe.lex;const Zm=({slug:e})=>{const n=fd.find(r=>r.slug===e),t=M.useMemo(()=>n?D.parse(n.body):"",[n]);return n?c.jsxs("section",{className:"note-post",children:[c.jsx("a",{className:"note-back-link",href:"#notes",onClick:r=>{r.preventDefault(),window.history.back()},children:"← Back to notes"}),c.jsx("h1",{className:"note-post-title",children:n.title}),c.jsx("p",{className:"note-post-date",children:n.date}),c.jsx("div",{className:"note-post-body",dangerouslySetInnerHTML:{__html:t}})]}):c.jsxs("section",{className:"note-post",children:[c.jsx("a",{className:"note-back-link",href:"#notes",children:"← Back to notes"}),c.jsx("p",{children:"Note not found."})]})},eg=()=>{const e={email:"alec1.zhou@gmail.com",phone:"240-421-7224",address:"6701 Honesty Dr • Bethesda, MD 20817",linkedin:"https://linkedin.com/in/alec-zhou-a59863286/",github:"https://github.com/azhou555"};return c.jsx("section",{id:"contact",className:"contact",children:c.jsxs("div",{className:"contact-container",children:[c.jsx("h2",{className:"section-title",children:"Contact"}),c.jsx("p",{className:"contact-description",children:"I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to connect!"}),c.jsxs("div",{className:"contact-content",children:[c.jsxs("div",{className:"contact-item",children:[c.jsxs("div",{className:"contact-info",children:[c.jsx("h4",{children:"Email"}),c.jsx("a",{href:`mailto:${e.email}`,className:"contact-link",children:e.email})]}),c.jsx("a",{href:`mailto:${e.email}`,className:"social-link",children:"Email"})]}),c.jsxs("div",{className:"contact-item",children:[c.jsxs("div",{className:"contact-info",children:[c.jsx("h4",{children:"LinkedIn"}),c.jsx("a",{href:e.linkedin,target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:"linkedin.com/in/alec-zhou-a59863286/"})]}),c.jsx("a",{href:e.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-link",children:"LinkedIn"})]}),c.jsxs("div",{className:"contact-item",children:[c.jsxs("div",{className:"contact-info",children:[c.jsx("h4",{children:"GitHub"}),c.jsx("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:"github.com/azhou555"})]}),c.jsx("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"social-link",children:"GitHub"})]}),c.jsxs("div",{className:"contact-item",children:[c.jsxs("div",{className:"contact-info",children:[c.jsx("h4",{children:"Phone"}),c.jsx("a",{href:`tel:${e.phone}`,className:"contact-link",children:e.phone})]}),c.jsx("span",{className:"social-link-placeholder",children:"Call"})]})]})]})})};function ng(){const[e,n]=M.useState(window.location.hash);M.useEffect(()=>pf(),[]),M.useEffect(()=>{const o=()=>n(window.location.hash);return window.addEventListener("hashchange",o),()=>window.removeEventListener("hashchange",o)},[]);const t=e.match(/^#\/notes\/(.+)$/),r=!!t,i=M.useRef(0),s=M.useRef(!1);return M.useEffect(()=>{r&&!s.current?(i.current=window.scrollY,Oa(0)):!r&&s.current&&Oa(i.current),s.current=r},[r]),c.jsxs("div",{className:"App",children:[c.jsx(kf,{}),c.jsx("main",{children:t?c.jsx(Zm,{slug:t[1]}):c.jsxs(c.Fragment,{children:[c.jsx(Sf,{}),c.jsx(xf,{}),c.jsx(Cf,{}),c.jsx(em,{}),c.jsx(tm,{}),c.jsx(um,{}),c.jsx(eg,{})]})})]})}Es.createRoot(document.getElementById("root")).render(c.jsx(Wd.StrictMode,{children:c.jsx(ng,{})}));
