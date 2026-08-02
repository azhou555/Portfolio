var nd=Object.defineProperty;var td=(e,n,t)=>n in e?nd(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var M=(e,n,t)=>td(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var La={exports:{}},Si={},Ia={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=Symbol.for("react.element"),id=Symbol.for("react.portal"),ld=Symbol.for("react.fragment"),od=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),ad=Symbol.for("react.provider"),ud=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),pd=Symbol.for("react.memo"),fd=Symbol.for("react.lazy"),ms=Symbol.iterator;function hd(e){return e===null||typeof e!="object"?null:(e=ms&&e[ms]||e["@@iterator"],typeof e=="function"?e:null)}var Aa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ja=Object.assign,za={};function yt(e,n,t){this.props=e,this.context=n,this.refs=za,this.updater=t||Aa}yt.prototype.isReactComponent={};yt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};yt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Da(){}Da.prototype=yt.prototype;function co(e,n,t){this.props=e,this.context=n,this.refs=za,this.updater=t||Aa}var po=co.prototype=new Da;po.constructor=co;ja(po,yt.prototype);po.isPureReactComponent=!0;var gs=Array.isArray,Ma=Object.prototype.hasOwnProperty,fo={current:null},Oa={key:!0,ref:!0,__self:!0,__source:!0};function Fa(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Ma.call(n,r)&&!Oa.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ur,type:e,key:l,ref:o,props:i,_owner:fo.current}}function md(e,n){return{$$typeof:ur,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ho(e){return typeof e=="object"&&e!==null&&e.$$typeof===ur}function gd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ys=/\/+/g;function Ui(e,n){return typeof e=="object"&&e!==null&&e.key!=null?gd(""+e.key):n.toString(36)}function Dr(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ur:case id:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ui(o,0):r,gs(i)?(t="",e!=null&&(t=e.replace(ys,"$&/")+"/"),Dr(i,n,t,"",function(u){return u})):i!=null&&(ho(i)&&(i=md(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ys,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",gs(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Ui(l,a);o+=Dr(l,n,t,s,i)}else if(s=hd(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Ui(l,a++),o+=Dr(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function yr(e,n,t){if(e==null)return e;var r=[],i=0;return Dr(e,r,"","",function(l){return n.call(t,l,i++)}),r}function yd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Mr={transition:null},vd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:fo};function $a(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:yr,forEach:function(e,n,t){yr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return yr(e,function(){n++}),n},toArray:function(e){return yr(e,function(n){return n})||[]},only:function(e){if(!ho(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=yt;N.Fragment=ld;N.Profiler=sd;N.PureComponent=co;N.StrictMode=od;N.Suspense=dd;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vd;N.act=$a;N.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ja({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=fo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Ma.call(n,s)&&!Oa.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ur,type:e.type,key:i,ref:l,props:r,_owner:o}};N.createContext=function(e){return e={$$typeof:ud,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ad,_context:e},e.Consumer=e};N.createElement=Fa;N.createFactory=function(e){var n=Fa.bind(null,e);return n.type=e,n};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:cd,render:e}};N.isValidElement=ho;N.lazy=function(e){return{$$typeof:fd,_payload:{_status:-1,_result:e},_init:yd}};N.memo=function(e,n){return{$$typeof:pd,type:e,compare:n===void 0?null:n}};N.startTransition=function(e){var n=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=n}};N.unstable_act=$a;N.useCallback=function(e,n){return de.current.useCallback(e,n)};N.useContext=function(e){return de.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return de.current.useDeferredValue(e)};N.useEffect=function(e,n){return de.current.useEffect(e,n)};N.useId=function(){return de.current.useId()};N.useImperativeHandle=function(e,n,t){return de.current.useImperativeHandle(e,n,t)};N.useInsertionEffect=function(e,n){return de.current.useInsertionEffect(e,n)};N.useLayoutEffect=function(e,n){return de.current.useLayoutEffect(e,n)};N.useMemo=function(e,n){return de.current.useMemo(e,n)};N.useReducer=function(e,n,t){return de.current.useReducer(e,n,t)};N.useRef=function(e){return de.current.useRef(e)};N.useState=function(e){return de.current.useState(e)};N.useSyncExternalStore=function(e,n,t){return de.current.useSyncExternalStore(e,n,t)};N.useTransition=function(){return de.current.useTransition()};N.version="18.3.1";Ia.exports=N;var qe=Ia.exports;const kd=rd(qe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd=qe,Sd=Symbol.for("react.element"),xd=Symbol.for("react.fragment"),_d=Object.prototype.hasOwnProperty,Cd=wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ed={key:!0,ref:!0,__self:!0,__source:!0};function Ba(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)_d.call(n,r)&&!Ed.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Sd,type:e,key:l,ref:o,props:i,_owner:Cd.current}}Si.Fragment=xd;Si.jsx=Ba;Si.jsxs=Ba;La.exports=Si;var h=La.exports,hl={},Ua={exports:{}},xe={},Ha={exports:{}},Wa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,R){var b=C.length;C.push(R);e:for(;0<b;){var G=b-1>>>1,X=C[G];if(0<i(X,R))C[G]=R,C[b]=X,b=G;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var R=C[0],b=C.pop();if(b!==R){C[0]=b;e:for(var G=0,X=C.length,mr=X>>>1;G<mr;){var En=2*(G+1)-1,Bi=C[En],Pn=En+1,gr=C[Pn];if(0>i(Bi,b))Pn<X&&0>i(gr,Bi)?(C[G]=gr,C[Pn]=b,G=Pn):(C[G]=Bi,C[En]=b,G=En);else if(Pn<X&&0>i(gr,b))C[G]=gr,C[Pn]=b,G=Pn;else break e}}return R}function i(C,R){var b=C.sortIndex-R.sortIndex;return b!==0?b:C.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],u=[],p=1,g=null,c=3,v=!1,y=!1,S=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var R=t(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=C)r(u),R.sortIndex=R.expirationTime,n(s,R);else break;R=t(u)}}function k(C){if(S=!1,m(C),!y)if(t(s)!==null)y=!0,Fi(x);else{var R=t(u);R!==null&&$i(k,R.startTime-C)}}function x(C,R){y=!1,S&&(S=!1,f(T),T=-1),v=!0;var b=c;try{for(m(R),g=t(s);g!==null&&(!(g.expirationTime>R)||C&&!Ne());){var G=g.callback;if(typeof G=="function"){g.callback=null,c=g.priorityLevel;var X=G(g.expirationTime<=R);R=e.unstable_now(),typeof X=="function"?g.callback=X:g===t(s)&&r(s),m(R)}else r(s);g=t(s)}if(g!==null)var mr=!0;else{var En=t(u);En!==null&&$i(k,En.startTime-R),mr=!1}return mr}finally{g=null,c=b,v=!1}}var E=!1,P=null,T=-1,Q=5,L=-1;function Ne(){return!(e.unstable_now()-L<Q)}function St(){if(P!==null){var C=e.unstable_now();L=C;var R=!0;try{R=P(!0,C)}finally{R?xt():(E=!1,P=null)}}else E=!1}var xt;if(typeof d=="function")xt=function(){d(St)};else if(typeof MessageChannel<"u"){var hs=new MessageChannel,ed=hs.port2;hs.port1.onmessage=St,xt=function(){ed.postMessage(null)}}else xt=function(){j(St,0)};function Fi(C){P=C,E||(E=!0,xt())}function $i(C,R){T=j(function(){C(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Fi(x))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(C){switch(c){case 1:case 2:case 3:var R=3;break;default:R=c}var b=c;c=R;try{return C()}finally{c=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,R){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var b=c;c=C;try{return R()}finally{c=b}},e.unstable_scheduleCallback=function(C,R,b){var G=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?G+b:G):b=G,C){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=b+X,C={id:p++,callback:R,priorityLevel:C,startTime:b,expirationTime:X,sortIndex:-1},b>G?(C.sortIndex=b,n(u,C),t(s)===null&&C===t(u)&&(S?(f(T),T=-1):S=!0,$i(k,b-G))):(C.sortIndex=X,n(s,C),y||v||(y=!0,Fi(x))),C},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(C){var R=c;return function(){var b=c;c=R;try{return C.apply(this,arguments)}finally{c=b}}}})(Wa);Ha.exports=Wa;var Pd=Ha.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=qe,Se=Pd;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Va=new Set,Qt={};function Bn(e,n){ct(e,n),ct(e+"Capture",n)}function ct(e,n){for(Qt[e]=n,e=0;e<n.length;e++)Va.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,Rd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vs={},ks={};function bd(e){return ml.call(ks,e)?!0:ml.call(vs,e)?!1:Rd.test(e)?ks[e]=!0:(vs[e]=!0,!1)}function Nd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ld(e,n,t,r){if(n===null||typeof n>"u"||Nd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function pe(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new pe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var mo=/[\-:]([a-z])/g;function go(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(mo,go);re[n]=new pe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(mo,go);re[n]=new pe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(mo,go);re[n]=new pe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function yo(e,n,t,r){var i=re.hasOwnProperty(n)?re[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ld(n,t,i,r)&&(t=null),r||i===null?bd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var tn=Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),vo=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),Qa=Symbol.for("react.provider"),Ga=Symbol.for("react.context"),ko=Symbol.for("react.forward_ref"),yl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),wo=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),qa=Symbol.for("react.offscreen"),ws=Symbol.iterator;function _t(e){return e===null||typeof e!="object"?null:(e=ws&&e[ws]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Hi;function It(e){if(Hi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Hi=n&&n[1]||""}return`
`+Hi+e}var Wi=!1;function Vi(e,n){if(!e||Wi)return"";Wi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Wi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?It(e):""}function Id(e){switch(e.tag){case 5:return It(e.type);case 16:return It("Lazy");case 13:return It("Suspense");case 19:return It("SuspenseList");case 0:case 2:case 15:return e=Vi(e.type,!1),e;case 11:return e=Vi(e.type.render,!1),e;case 1:return e=Vi(e.type,!0),e;default:return""}}function kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Qn:return"Portal";case gl:return"Profiler";case vo:return"StrictMode";case yl:return"Suspense";case vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ga:return(e.displayName||"Context")+".Consumer";case Qa:return(e._context.displayName||"Context")+".Provider";case ko:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wo:return n=e.displayName||null,n!==null?n:kl(e.type)||"Memo";case on:n=e._payload,e=e._init;try{return kl(e(n))}catch{}}return null}function Ad(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kl(n);case 8:return n===vo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ka(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jd(e){var n=Ka(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function kr(e){e._valueTracker||(e._valueTracker=jd(e))}function Ya(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ka(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wl(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ss(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=wn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ja(e,n){n=n.checked,n!=null&&yo(e,"checked",n,!1)}function Sl(e,n){Ja(e,n);var t=wn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?xl(e,n.type,t):n.hasOwnProperty("defaultValue")&&xl(e,n.type,wn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function xl(e,n,t){(n!=="number"||qr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var At=Array.isArray;function it(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+wn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function _l(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _s(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(w(92));if(At(t)){if(1<t.length)throw Error(w(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:wn(t)}}function Xa(e,n){var t=wn(n.value),r=wn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Cs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Za(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Za(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,eu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Gt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zd=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(e){zd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mt[n]=Mt[e]})});function nu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mt.hasOwnProperty(e)&&Mt[e]?(""+n).trim():n+"px"}function tu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=nu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Dd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function El(e,n){if(n){if(Dd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function Pl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function So(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rl=null,lt=null,ot=null;function Es(e){if(e=pr(e)){if(typeof Rl!="function")throw Error(w(280));var n=e.stateNode;n&&(n=Pi(n),Rl(e.stateNode,e.type,n))}}function ru(e){lt?ot?ot.push(e):ot=[e]:lt=e}function iu(){if(lt){var e=lt,n=ot;if(ot=lt=null,Es(e),n)for(e=0;e<n.length;e++)Es(n[e])}}function lu(e,n){return e(n)}function ou(){}var Qi=!1;function su(e,n,t){if(Qi)return e(n,t);Qi=!0;try{return lu(e,n,t)}finally{Qi=!1,(lt!==null||ot!==null)&&(ou(),iu())}}function qt(e,n){var t=e.stateNode;if(t===null)return null;var r=Pi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(w(231,n,typeof t));return t}var bl=!1;if(Xe)try{var Ct={};Object.defineProperty(Ct,"passive",{get:function(){bl=!0}}),window.addEventListener("test",Ct,Ct),window.removeEventListener("test",Ct,Ct)}catch{bl=!1}function Md(e,n,t,r,i,l,o,a,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var Ot=!1,Kr=null,Yr=!1,Nl=null,Od={onError:function(e){Ot=!0,Kr=e}};function Fd(e,n,t,r,i,l,o,a,s){Ot=!1,Kr=null,Md.apply(Od,arguments)}function $d(e,n,t,r,i,l,o,a,s){if(Fd.apply(this,arguments),Ot){if(Ot){var u=Kr;Ot=!1,Kr=null}else throw Error(w(198));Yr||(Yr=!0,Nl=u)}}function Un(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function au(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ps(e){if(Un(e)!==e)throw Error(w(188))}function Bd(e){var n=e.alternate;if(!n){if(n=Un(e),n===null)throw Error(w(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Ps(i),e;if(l===r)return Ps(i),n;l=l.sibling}throw Error(w(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(t.alternate!==r)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?e:n}function uu(e){return e=Bd(e),e!==null?cu(e):null}function cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=cu(e);if(n!==null)return n;e=e.sibling}return null}var du=Se.unstable_scheduleCallback,Ts=Se.unstable_cancelCallback,Ud=Se.unstable_shouldYield,Hd=Se.unstable_requestPaint,q=Se.unstable_now,Wd=Se.unstable_getCurrentPriorityLevel,xo=Se.unstable_ImmediatePriority,pu=Se.unstable_UserBlockingPriority,Jr=Se.unstable_NormalPriority,Vd=Se.unstable_LowPriority,fu=Se.unstable_IdlePriority,xi=null,We=null;function Qd(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(xi,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Kd,Gd=Math.log,qd=Math.LN2;function Kd(e){return e>>>=0,e===0?32:31-(Gd(e)/qd|0)|0}var Sr=64,xr=4194304;function jt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=jt(a):(l&=o,l!==0&&(r=jt(l)))}else o=t&~i,o!==0?r=jt(o):l!==0&&(r=jt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Me(n),i=1<<t,r|=e[t],n&=~i;return r}function Yd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Me(l),a=1<<o,s=i[o];s===-1?(!(a&t)||a&r)&&(i[o]=Yd(a,n)):s<=n&&(e.expiredLanes|=a),l&=~a}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hu(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function Gi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function cr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Me(n),e[n]=t}function Xd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Me(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function _o(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Me(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var D=0;function mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gu,Co,yu,vu,ku,Il=!1,_r=[],pn=null,fn=null,hn=null,Kt=new Map,Yt=new Map,an=[],Zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rs(e,n){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Kt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yt.delete(n.pointerId)}}function Et(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=pr(n),n!==null&&Co(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function ep(e,n,t,r,i){switch(n){case"focusin":return pn=Et(pn,e,n,t,r,i),!0;case"dragenter":return fn=Et(fn,e,n,t,r,i),!0;case"mouseover":return hn=Et(hn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Kt.set(l,Et(Kt.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Yt.set(l,Et(Yt.get(l)||null,e,n,t,r,i)),!0}return!1}function wu(e){var n=Nn(e.target);if(n!==null){var t=Un(n);if(t!==null){if(n=t.tag,n===13){if(n=au(t),n!==null){e.blockedOn=n,ku(e.priority,function(){yu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Al(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Tl=r,t.target.dispatchEvent(r),Tl=null}else return n=pr(t),n!==null&&Co(n),e.blockedOn=t,!1;n.shift()}return!0}function bs(e,n,t){Or(e)&&t.delete(n)}function np(){Il=!1,pn!==null&&Or(pn)&&(pn=null),fn!==null&&Or(fn)&&(fn=null),hn!==null&&Or(hn)&&(hn=null),Kt.forEach(bs),Yt.forEach(bs)}function Pt(e,n){e.blockedOn===n&&(e.blockedOn=null,Il||(Il=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,np)))}function Jt(e){function n(i){return Pt(i,e)}if(0<_r.length){Pt(_r[0],e);for(var t=1;t<_r.length;t++){var r=_r[t];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&Pt(pn,e),fn!==null&&Pt(fn,e),hn!==null&&Pt(hn,e),Kt.forEach(n),Yt.forEach(n),t=0;t<an.length;t++)r=an[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(t=an[0],t.blockedOn===null);)wu(t),t.blockedOn===null&&an.shift()}var st=tn.ReactCurrentBatchConfig,Zr=!0;function tp(e,n,t,r){var i=D,l=st.transition;st.transition=null;try{D=1,Eo(e,n,t,r)}finally{D=i,st.transition=l}}function rp(e,n,t,r){var i=D,l=st.transition;st.transition=null;try{D=4,Eo(e,n,t,r)}finally{D=i,st.transition=l}}function Eo(e,n,t,r){if(Zr){var i=Al(e,n,t,r);if(i===null)rl(e,n,r,ei,t),Rs(e,r);else if(ep(i,e,n,t,r))r.stopPropagation();else if(Rs(e,r),n&4&&-1<Zd.indexOf(e)){for(;i!==null;){var l=pr(i);if(l!==null&&gu(l),l=Al(e,n,t,r),l===null&&rl(e,n,r,ei,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else rl(e,n,r,null,t)}}var ei=null;function Al(e,n,t,r){if(ei=null,e=So(r),e=Nn(e),e!==null)if(n=Un(e),n===null)e=null;else if(t=n.tag,t===13){if(e=au(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ei=e,null}function Su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wd()){case xo:return 1;case pu:return 4;case Jr:case Vd:return 16;case fu:return 536870912;default:return 16}default:return 16}}var cn=null,Po=null,Fr=null;function xu(){if(Fr)return Fr;var e,n=Po,t=n.length,r,i="value"in cn?cn.value:cn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Fr=i.slice(e,1<r?1-r:void 0)}function $r(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function Ns(){return!1}function _e(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Cr:Ns,this.isPropagationStopped=Ns,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),n}var vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=_e(vt),dr=W({},vt,{view:0,detail:0}),ip=_e(dr),qi,Ki,Tt,_i=W({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tt&&(Tt&&e.type==="mousemove"?(qi=e.screenX-Tt.screenX,Ki=e.screenY-Tt.screenY):Ki=qi=0,Tt=e),qi)},movementY:function(e){return"movementY"in e?e.movementY:Ki}}),Ls=_e(_i),lp=W({},_i,{dataTransfer:0}),op=_e(lp),sp=W({},dr,{relatedTarget:0}),Yi=_e(sp),ap=W({},vt,{animationName:0,elapsedTime:0,pseudoElement:0}),up=_e(ap),cp=W({},vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dp=_e(cp),pp=W({},vt,{data:0}),Is=_e(pp),fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=mp[e])?!!n[e]:!1}function Ro(){return gp}var yp=W({},dr,{key:function(e){if(e.key){var n=fp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(e){return e.type==="keypress"?$r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vp=_e(yp),kp=W({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),As=_e(kp),wp=W({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),Sp=_e(wp),xp=W({},vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),_p=_e(xp),Cp=W({},_i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ep=_e(Cp),Pp=[9,13,27,32],bo=Xe&&"CompositionEvent"in window,Ft=null;Xe&&"documentMode"in document&&(Ft=document.documentMode);var Tp=Xe&&"TextEvent"in window&&!Ft,_u=Xe&&(!bo||Ft&&8<Ft&&11>=Ft),js=" ",zs=!1;function Cu(e,n){switch(e){case"keyup":return Pp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function Rp(e,n){switch(e){case"compositionend":return Eu(n);case"keypress":return n.which!==32?null:(zs=!0,js);case"textInput":return e=n.data,e===js&&zs?null:e;default:return null}}function bp(e,n){if(qn)return e==="compositionend"||!bo&&Cu(e,n)?(e=xu(),Fr=Po=cn=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _u&&n.locale!=="ko"?null:n.data;default:return null}}var Np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ds(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Np[e.type]:n==="textarea"}function Pu(e,n,t,r){ru(r),n=ni(n,"onChange"),0<n.length&&(t=new To("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var $t=null,Xt=null;function Lp(e){Mu(e,0)}function Ci(e){var n=Jn(e);if(Ya(n))return e}function Ip(e,n){if(e==="change")return n}var Tu=!1;if(Xe){var Ji;if(Xe){var Xi="oninput"in document;if(!Xi){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),Xi=typeof Ms.oninput=="function"}Ji=Xi}else Ji=!1;Tu=Ji&&(!document.documentMode||9<document.documentMode)}function Os(){$t&&($t.detachEvent("onpropertychange",Ru),Xt=$t=null)}function Ru(e){if(e.propertyName==="value"&&Ci(Xt)){var n=[];Pu(n,Xt,e,So(e)),su(Lp,n)}}function Ap(e,n,t){e==="focusin"?(Os(),$t=n,Xt=t,$t.attachEvent("onpropertychange",Ru)):e==="focusout"&&Os()}function jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ci(Xt)}function zp(e,n){if(e==="click")return Ci(n)}function Dp(e,n){if(e==="input"||e==="change")return Ci(n)}function Mp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:Mp;function Zt(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!ml.call(n,i)||!Fe(e[i],n[i]))return!1}return!0}function Fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $s(e,n){var t=Fs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fs(t)}}function bu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?bu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Nu(){for(var e=window,n=qr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=qr(e.document)}return n}function No(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Op(e){var n=Nu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&bu(t.ownerDocument.documentElement,t)){if(r!==null&&No(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=$s(t,l);var o=$s(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fp=Xe&&"documentMode"in document&&11>=document.documentMode,Kn=null,jl=null,Bt=null,zl=!1;function Bs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zl||Kn==null||Kn!==qr(r)||(r=Kn,"selectionStart"in r&&No(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bt&&Zt(Bt,r)||(Bt=r,r=ni(jl,"onSelect"),0<r.length&&(n=new To("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Kn)))}function Er(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Yn={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},Zi={},Lu={};Xe&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Ei(e){if(Zi[e])return Zi[e];if(!Yn[e])return e;var n=Yn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Lu)return Zi[e]=n[t];return e}var Iu=Ei("animationend"),Au=Ei("animationiteration"),ju=Ei("animationstart"),zu=Ei("transitionend"),Du=new Map,Us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,n){Du.set(e,n),Bn(n,[e])}for(var el=0;el<Us.length;el++){var nl=Us[el],$p=nl.toLowerCase(),Bp=nl[0].toUpperCase()+nl.slice(1);xn($p,"on"+Bp)}xn(Iu,"onAnimationEnd");xn(Au,"onAnimationIteration");xn(ju,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(zu,"onTransitionEnd");ct("onMouseEnter",["mouseout","mouseover"]);ct("onMouseLeave",["mouseout","mouseover"]);ct("onPointerEnter",["pointerout","pointerover"]);ct("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Up=new Set("cancel close invalid load scroll toggle".split(" ").concat(zt));function Hs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,$d(r,n,void 0,e),e.currentTarget=null}function Mu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;Hs(i,a,u),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;Hs(i,a,u),l=s}}}if(Yr)throw e=Nl,Yr=!1,Nl=null,e}function F(e,n){var t=n[$l];t===void 0&&(t=n[$l]=new Set);var r=e+"__bubble";t.has(r)||(Ou(n,e,2,!1),t.add(r))}function tl(e,n,t){var r=0;n&&(r|=4),Ou(t,e,r,n)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Pr]){e[Pr]=!0,Va.forEach(function(t){t!=="selectionchange"&&(Up.has(t)||tl(t,!1,e),tl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pr]||(n[Pr]=!0,tl("selectionchange",!1,n))}}function Ou(e,n,t,r){switch(Su(n)){case 1:var i=tp;break;case 4:i=rp;break;default:i=Eo}t=i.bind(null,n,t,e),i=void 0,!bl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function rl(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Nn(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}su(function(){var u=l,p=So(t),g=[];e:{var c=Du.get(e);if(c!==void 0){var v=To,y=e;switch(e){case"keypress":if($r(t)===0)break e;case"keydown":case"keyup":v=vp;break;case"focusin":y="focus",v=Yi;break;case"focusout":y="blur",v=Yi;break;case"beforeblur":case"afterblur":v=Yi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Sp;break;case Iu:case Au:case ju:v=up;break;case zu:v=_p;break;case"scroll":v=ip;break;case"wheel":v=Ep;break;case"copy":case"cut":case"paste":v=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=As}var S=(n&4)!==0,j=!S&&e==="scroll",f=S?c!==null?c+"Capture":null:c;S=[];for(var d=u,m;d!==null;){m=d;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,f!==null&&(k=qt(d,f),k!=null&&S.push(nr(d,k,m)))),j)break;d=d.return}0<S.length&&(c=new v(c,y,null,t,p),g.push({event:c,listeners:S}))}}if(!(n&7)){e:{if(c=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",c&&t!==Tl&&(y=t.relatedTarget||t.fromElement)&&(Nn(y)||y[Ze]))break e;if((v||c)&&(c=p.window===p?p:(c=p.ownerDocument)?c.defaultView||c.parentWindow:window,v?(y=t.relatedTarget||t.toElement,v=u,y=y?Nn(y):null,y!==null&&(j=Un(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(S=Ls,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=As,k="onPointerLeave",f="onPointerEnter",d="pointer"),j=v==null?c:Jn(v),m=y==null?c:Jn(y),c=new S(k,d+"leave",v,t,p),c.target=j,c.relatedTarget=m,k=null,Nn(p)===u&&(S=new S(f,d+"enter",y,t,p),S.target=m,S.relatedTarget=j,k=S),j=k,v&&y)n:{for(S=v,f=y,d=0,m=S;m;m=Wn(m))d++;for(m=0,k=f;k;k=Wn(k))m++;for(;0<d-m;)S=Wn(S),d--;for(;0<m-d;)f=Wn(f),m--;for(;d--;){if(S===f||f!==null&&S===f.alternate)break n;S=Wn(S),f=Wn(f)}S=null}else S=null;v!==null&&Ws(g,c,v,S,!1),y!==null&&j!==null&&Ws(g,j,y,S,!0)}}e:{if(c=u?Jn(u):window,v=c.nodeName&&c.nodeName.toLowerCase(),v==="select"||v==="input"&&c.type==="file")var x=Ip;else if(Ds(c))if(Tu)x=Dp;else{x=jp;var E=Ap}else(v=c.nodeName)&&v.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(x=zp);if(x&&(x=x(e,u))){Pu(g,x,t,p);break e}E&&E(e,c,u),e==="focusout"&&(E=c._wrapperState)&&E.controlled&&c.type==="number"&&xl(c,"number",c.value)}switch(E=u?Jn(u):window,e){case"focusin":(Ds(E)||E.contentEditable==="true")&&(Kn=E,jl=u,Bt=null);break;case"focusout":Bt=jl=Kn=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,Bs(g,t,p);break;case"selectionchange":if(Fp)break;case"keydown":case"keyup":Bs(g,t,p)}var P;if(bo)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else qn?Cu(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(_u&&t.locale!=="ko"&&(qn||T!=="onCompositionStart"?T==="onCompositionEnd"&&qn&&(P=xu()):(cn=p,Po="value"in cn?cn.value:cn.textContent,qn=!0)),E=ni(u,T),0<E.length&&(T=new Is(T,e,null,t,p),g.push({event:T,listeners:E}),P?T.data=P:(P=Eu(t),P!==null&&(T.data=P)))),(P=Tp?Rp(e,t):bp(e,t))&&(u=ni(u,"onBeforeInput"),0<u.length&&(p=new Is("onBeforeInput","beforeinput",null,t,p),g.push({event:p,listeners:u}),p.data=P))}Mu(g,n)})}function nr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ni(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=qt(e,t),l!=null&&r.unshift(nr(e,l,i)),l=qt(e,n),l!=null&&r.push(nr(e,l,i))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ws(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=qt(t,l),s!=null&&o.unshift(nr(t,s,a))):i||(s=qt(t,l),s!=null&&o.push(nr(t,s,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Hp=/\r\n?/g,Wp=/\u0000|\uFFFD/g;function Vs(e){return(typeof e=="string"?e:""+e).replace(Hp,`
`).replace(Wp,"")}function Tr(e,n,t){if(n=Vs(n),Vs(e)!==n&&t)throw Error(w(425))}function ti(){}var Dl=null,Ml=null;function Ol(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fl=typeof setTimeout=="function"?setTimeout:void 0,Vp=typeof clearTimeout=="function"?clearTimeout:void 0,Qs=typeof Promise=="function"?Promise:void 0,Qp=typeof queueMicrotask=="function"?queueMicrotask:typeof Qs<"u"?function(e){return Qs.resolve(null).then(e).catch(Gp)}:Fl;function Gp(e){setTimeout(function(){throw e})}function il(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Jt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Jt(n)}function mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Gs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var kt=Math.random().toString(36).slice(2),He="__reactFiber$"+kt,tr="__reactProps$"+kt,Ze="__reactContainer$"+kt,$l="__reactEvents$"+kt,qp="__reactListeners$"+kt,Kp="__reactHandles$"+kt;function Nn(e){var n=e[He];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ze]||t[He]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Gs(e);e!==null;){if(t=e[He])return t;e=Gs(e)}return n}e=t,t=e.parentNode}return null}function pr(e){return e=e[He]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Pi(e){return e[tr]||null}var Bl=[],Xn=-1;function _n(e){return{current:e}}function $(e){0>Xn||(e.current=Bl[Xn],Bl[Xn]=null,Xn--)}function O(e,n){Xn++,Bl[Xn]=e.current,e.current=n}var Sn={},ae=_n(Sn),me=_n(!1),zn=Sn;function dt(e,n){var t=e.type.contextTypes;if(!t)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function ri(){$(me),$(ae)}function qs(e,n,t){if(ae.current!==Sn)throw Error(w(168));O(ae,n),O(me,t)}function Fu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(w(108,Ad(e)||"Unknown",i));return W({},t,r)}function ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,zn=ae.current,O(ae,e),O(me,me.current),!0}function Ks(e,n,t){var r=e.stateNode;if(!r)throw Error(w(169));t?(e=Fu(e,n,zn),r.__reactInternalMemoizedMergedChildContext=e,$(me),$(ae),O(ae,e)):$(me),O(me,t)}var Ge=null,Ti=!1,ll=!1;function $u(e){Ge===null?Ge=[e]:Ge.push(e)}function Yp(e){Ti=!0,$u(e)}function Cn(){if(!ll&&Ge!==null){ll=!0;var e=0,n=D;try{var t=Ge;for(D=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ge=null,Ti=!1}catch(i){throw Ge!==null&&(Ge=Ge.slice(e+1)),du(xo,Cn),i}finally{D=n,ll=!1}}return null}var Zn=[],et=0,li=null,oi=0,Ce=[],Ee=0,Dn=null,Ke=1,Ye="";function Tn(e,n){Zn[et++]=oi,Zn[et++]=li,li=e,oi=n}function Bu(e,n,t){Ce[Ee++]=Ke,Ce[Ee++]=Ye,Ce[Ee++]=Dn,Dn=e;var r=Ke;e=Ye;var i=32-Me(r)-1;r&=~(1<<i),t+=1;var l=32-Me(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ke=1<<32-Me(n)+i|t<<i|r,Ye=l+e}else Ke=1<<l|t<<i|r,Ye=e}function Lo(e){e.return!==null&&(Tn(e,1),Bu(e,1,0))}function Io(e){for(;e===li;)li=Zn[--et],Zn[et]=null,oi=Zn[--et],Zn[et]=null;for(;e===Dn;)Dn=Ce[--Ee],Ce[Ee]=null,Ye=Ce[--Ee],Ce[Ee]=null,Ke=Ce[--Ee],Ce[Ee]=null}var we=null,ke=null,B=!1,je=null;function Uu(e,n){var t=Pe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ys(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,we=e,ke=mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,we=e,ke=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dn!==null?{id:Ke,overflow:Ye}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Pe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,we=e,ke=null,!0):!1;default:return!1}}function Ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hl(e){if(B){var n=ke;if(n){var t=n;if(!Ys(e,n)){if(Ul(e))throw Error(w(418));n=mn(t.nextSibling);var r=we;n&&Ys(e,n)?Uu(r,t):(e.flags=e.flags&-4097|2,B=!1,we=e)}}else{if(Ul(e))throw Error(w(418));e.flags=e.flags&-4097|2,B=!1,we=e}}}function Js(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Rr(e){if(e!==we)return!1;if(!B)return Js(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ol(e.type,e.memoizedProps)),n&&(n=ke)){if(Ul(e))throw Hu(),Error(w(418));for(;n;)Uu(e,n),n=mn(n.nextSibling)}if(Js(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ke=mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ke=null}}else ke=we?mn(e.stateNode.nextSibling):null;return!0}function Hu(){for(var e=ke;e;)e=mn(e.nextSibling)}function pt(){ke=we=null,B=!1}function Ao(e){je===null?je=[e]:je.push(e)}var Jp=tn.ReactCurrentBatchConfig;function Rt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var r=t.stateNode}if(!r)throw Error(w(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,e))}return e}function br(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Xs(e){var n=e._init;return n(e._payload)}function Wu(e){function n(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function t(f,d){if(!e)return null;for(;d!==null;)n(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=kn(f,d),f.index=0,f.sibling=null,f}function l(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,m,k){return d===null||d.tag!==6?(d=pl(m,f.mode,k),d.return=f,d):(d=i(d,m),d.return=f,d)}function s(f,d,m,k){var x=m.type;return x===Gn?p(f,d,m.props.children,k,m.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===on&&Xs(x)===d.type)?(k=i(d,m.props),k.ref=Rt(f,d,m),k.return=f,k):(k=Gr(m.type,m.key,m.props,null,f.mode,k),k.ref=Rt(f,d,m),k.return=f,k)}function u(f,d,m,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=fl(m,f.mode,k),d.return=f,d):(d=i(d,m.children||[]),d.return=f,d)}function p(f,d,m,k,x){return d===null||d.tag!==7?(d=jn(m,f.mode,k,x),d.return=f,d):(d=i(d,m),d.return=f,d)}function g(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=pl(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vr:return m=Gr(d.type,d.key,d.props,null,f.mode,m),m.ref=Rt(f,null,d),m.return=f,m;case Qn:return d=fl(d,f.mode,m),d.return=f,d;case on:var k=d._init;return g(f,k(d._payload),m)}if(At(d)||_t(d))return d=jn(d,f.mode,m,null),d.return=f,d;br(f,d)}return null}function c(f,d,m,k){var x=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:a(f,d,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vr:return m.key===x?s(f,d,m,k):null;case Qn:return m.key===x?u(f,d,m,k):null;case on:return x=m._init,c(f,d,x(m._payload),k)}if(At(m)||_t(m))return x!==null?null:p(f,d,m,k,null);br(f,m)}return null}function v(f,d,m,k,x){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(m)||null,a(d,f,""+k,x);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case vr:return f=f.get(k.key===null?m:k.key)||null,s(d,f,k,x);case Qn:return f=f.get(k.key===null?m:k.key)||null,u(d,f,k,x);case on:var E=k._init;return v(f,d,m,E(k._payload),x)}if(At(k)||_t(k))return f=f.get(m)||null,p(d,f,k,x,null);br(d,k)}return null}function y(f,d,m,k){for(var x=null,E=null,P=d,T=d=0,Q=null;P!==null&&T<m.length;T++){P.index>T?(Q=P,P=null):Q=P.sibling;var L=c(f,P,m[T],k);if(L===null){P===null&&(P=Q);break}e&&P&&L.alternate===null&&n(f,P),d=l(L,d,T),E===null?x=L:E.sibling=L,E=L,P=Q}if(T===m.length)return t(f,P),B&&Tn(f,T),x;if(P===null){for(;T<m.length;T++)P=g(f,m[T],k),P!==null&&(d=l(P,d,T),E===null?x=P:E.sibling=P,E=P);return B&&Tn(f,T),x}for(P=r(f,P);T<m.length;T++)Q=v(P,f,T,m[T],k),Q!==null&&(e&&Q.alternate!==null&&P.delete(Q.key===null?T:Q.key),d=l(Q,d,T),E===null?x=Q:E.sibling=Q,E=Q);return e&&P.forEach(function(Ne){return n(f,Ne)}),B&&Tn(f,T),x}function S(f,d,m,k){var x=_t(m);if(typeof x!="function")throw Error(w(150));if(m=x.call(m),m==null)throw Error(w(151));for(var E=x=null,P=d,T=d=0,Q=null,L=m.next();P!==null&&!L.done;T++,L=m.next()){P.index>T?(Q=P,P=null):Q=P.sibling;var Ne=c(f,P,L.value,k);if(Ne===null){P===null&&(P=Q);break}e&&P&&Ne.alternate===null&&n(f,P),d=l(Ne,d,T),E===null?x=Ne:E.sibling=Ne,E=Ne,P=Q}if(L.done)return t(f,P),B&&Tn(f,T),x;if(P===null){for(;!L.done;T++,L=m.next())L=g(f,L.value,k),L!==null&&(d=l(L,d,T),E===null?x=L:E.sibling=L,E=L);return B&&Tn(f,T),x}for(P=r(f,P);!L.done;T++,L=m.next())L=v(P,f,T,L.value,k),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?T:L.key),d=l(L,d,T),E===null?x=L:E.sibling=L,E=L);return e&&P.forEach(function(St){return n(f,St)}),B&&Tn(f,T),x}function j(f,d,m,k){if(typeof m=="object"&&m!==null&&m.type===Gn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case vr:e:{for(var x=m.key,E=d;E!==null;){if(E.key===x){if(x=m.type,x===Gn){if(E.tag===7){t(f,E.sibling),d=i(E,m.props.children),d.return=f,f=d;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===on&&Xs(x)===E.type){t(f,E.sibling),d=i(E,m.props),d.ref=Rt(f,E,m),d.return=f,f=d;break e}t(f,E);break}else n(f,E);E=E.sibling}m.type===Gn?(d=jn(m.props.children,f.mode,k,m.key),d.return=f,f=d):(k=Gr(m.type,m.key,m.props,null,f.mode,k),k.ref=Rt(f,d,m),k.return=f,f=k)}return o(f);case Qn:e:{for(E=m.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){t(f,d.sibling),d=i(d,m.children||[]),d.return=f,f=d;break e}else{t(f,d);break}else n(f,d);d=d.sibling}d=fl(m,f.mode,k),d.return=f,f=d}return o(f);case on:return E=m._init,j(f,d,E(m._payload),k)}if(At(m))return y(f,d,m,k);if(_t(m))return S(f,d,m,k);br(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(t(f,d.sibling),d=i(d,m),d.return=f,f=d):(t(f,d),d=pl(m,f.mode,k),d.return=f,f=d),o(f)):t(f,d)}return j}var ft=Wu(!0),Vu=Wu(!1),si=_n(null),ai=null,nt=null,jo=null;function zo(){jo=nt=ai=null}function Do(e){var n=si.current;$(si),e._currentValue=n}function Wl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function at(e,n){ai=e,jo=nt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(he=!0),e.firstContext=null)}function Re(e){var n=e._currentValue;if(jo!==e)if(e={context:e,memoizedValue:n,next:null},nt===null){if(ai===null)throw Error(w(308));nt=e,ai.dependencies={lanes:0,firstContext:e}}else nt=nt.next=e;return n}var Ln=null;function Mo(e){Ln===null?Ln=[e]:Ln.push(e)}function Qu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Mo(n)):(t.next=i.next,i.next=t),n.interleaved=t,en(e,r)}function en(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var sn=!1;function Oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function gn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,en(e,t)}return i=r.interleaved,i===null?(n.next=n,Mo(r)):(n.next=i.next,i.next=n),r.interleaved=n,en(e,t)}function Br(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,_o(e,t)}}function Zs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ui(e,n,t,r){var i=e.updateQueue;sn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,o===null?l=u:o.next=u,o=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(l!==null){var g=i.baseState;o=0,p=u=s=null,a=l;do{var c=a.lane,v=a.eventTime;if((r&c)===c){p!==null&&(p=p.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,S=a;switch(c=n,v=t,S.tag){case 1:if(y=S.payload,typeof y=="function"){g=y.call(v,g,c);break e}g=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,c=typeof y=="function"?y.call(v,g,c):y,c==null)break e;g=W({},g,c);break e;case 2:sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,c=i.effects,c===null?i.effects=[a]:c.push(a))}else v={eventTime:v,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=v,s=g):p=p.next=v,o|=c;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;c=a,a=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(!0);if(p===null&&(s=g),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);On|=o,e.lanes=o,e.memoizedState=g}}function ea(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var fr={},Ve=_n(fr),rr=_n(fr),ir=_n(fr);function In(e){if(e===fr)throw Error(w(174));return e}function Fo(e,n){switch(O(ir,n),O(rr,e),O(Ve,fr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Cl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Cl(n,e)}$(Ve),O(Ve,n)}function ht(){$(Ve),$(rr),$(ir)}function qu(e){In(ir.current);var n=In(Ve.current),t=Cl(n,e.type);n!==t&&(O(rr,e),O(Ve,t))}function $o(e){rr.current===e&&($(Ve),$(rr))}var U=_n(0);function ci(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ol=[];function Bo(){for(var e=0;e<ol.length;e++)ol[e]._workInProgressVersionPrimary=null;ol.length=0}var Ur=tn.ReactCurrentDispatcher,sl=tn.ReactCurrentBatchConfig,Mn=0,H=null,Y=null,Z=null,di=!1,Ut=!1,lr=0,Xp=0;function ie(){throw Error(w(321))}function Uo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function Ho(e,n,t,r,i,l){if(Mn=l,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ur.current=e===null||e.memoizedState===null?tf:rf,e=t(r,i),Ut){l=0;do{if(Ut=!1,lr=0,25<=l)throw Error(w(301));l+=1,Z=Y=null,n.updateQueue=null,Ur.current=lf,e=t(r,i)}while(Ut)}if(Ur.current=pi,n=Y!==null&&Y.next!==null,Mn=0,Z=Y=H=null,di=!1,n)throw Error(w(300));return e}function Wo(){var e=lr!==0;return lr=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function be(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=Z===null?H.memoizedState:Z.next;if(n!==null)Z=n,Y=e;else{if(e===null)throw Error(w(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function or(e,n){return typeof n=="function"?n(e):n}function al(e){var n=be(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=Y,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,u=l;do{var p=u.lane;if((Mn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=g,o=r):s=s.next=g,H.lanes|=p,On|=p}u=u.next}while(u!==null&&u!==l);s===null?o=r:s.next=a,Fe(r,n.memoizedState)||(he=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,H.lanes|=l,On|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ul(e){var n=be(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Fe(l,n.memoizedState)||(he=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Ku(){}function Yu(e,n){var t=H,r=be(),i=n(),l=!Fe(r.memoizedState,i);if(l&&(r.memoizedState=i,he=!0),r=r.queue,Vo(Zu.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,sr(9,Xu.bind(null,t,r,i,n),void 0,null),ee===null)throw Error(w(349));Mn&30||Ju(t,n,i)}return i}function Ju(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Xu(e,n,t,r){n.value=t,n.getSnapshot=r,ec(n)&&nc(e)}function Zu(e,n,t){return t(function(){ec(n)&&nc(e)})}function ec(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function nc(e){var n=en(e,1);n!==null&&Oe(n,e,1,-1)}function na(e){var n=Ue();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},n.queue=e,e=e.dispatch=nf.bind(null,H,e),[n.memoizedState,e]}function sr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function tc(){return be().memoizedState}function Hr(e,n,t,r){var i=Ue();H.flags|=e,i.memoizedState=sr(1|n,t,void 0,r===void 0?null:r)}function Ri(e,n,t,r){var i=be();r=r===void 0?null:r;var l=void 0;if(Y!==null){var o=Y.memoizedState;if(l=o.destroy,r!==null&&Uo(r,o.deps)){i.memoizedState=sr(n,t,l,r);return}}H.flags|=e,i.memoizedState=sr(1|n,t,l,r)}function ta(e,n){return Hr(8390656,8,e,n)}function Vo(e,n){return Ri(2048,8,e,n)}function rc(e,n){return Ri(4,2,e,n)}function ic(e,n){return Ri(4,4,e,n)}function lc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function oc(e,n,t){return t=t!=null?t.concat([e]):null,Ri(4,4,lc.bind(null,n,e),t)}function Qo(){}function sc(e,n){var t=be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Uo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ac(e,n){var t=be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Uo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function uc(e,n,t){return Mn&21?(Fe(t,n)||(t=hu(),H.lanes|=t,On|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=t)}function Zp(e,n){var t=D;D=t!==0&&4>t?t:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),n()}finally{D=t,sl.transition=r}}function cc(){return be().memoizedState}function ef(e,n,t){var r=vn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},dc(e))pc(n,t);else if(t=Qu(e,n,t,r),t!==null){var i=ce();Oe(t,e,r,i),fc(t,n,r)}}function nf(e,n,t){var r=vn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(dc(e))pc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,a=l(o,t);if(i.hasEagerState=!0,i.eagerState=a,Fe(a,o)){var s=n.interleaved;s===null?(i.next=i,Mo(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Qu(e,n,i,r),t!==null&&(i=ce(),Oe(t,e,r,i),fc(t,n,r))}}function dc(e){var n=e.alternate;return e===H||n!==null&&n===H}function pc(e,n){Ut=di=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function fc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,_o(e,t)}}var pi={readContext:Re,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},tf={readContext:Re,useCallback:function(e,n){return Ue().memoizedState=[e,n===void 0?null:n],e},useContext:Re,useEffect:ta,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Hr(4194308,4,lc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Hr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Hr(4,2,e,n)},useMemo:function(e,n){var t=Ue();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ue();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ef.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=Ue();return e={current:e},n.memoizedState=e},useState:na,useDebugValue:Qo,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=na(!1),n=e[0];return e=Zp.bind(null,e[1]),Ue().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=Ue();if(B){if(t===void 0)throw Error(w(407));t=t()}else{if(t=n(),ee===null)throw Error(w(349));Mn&30||Ju(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,ta(Zu.bind(null,r,l,e),[e]),r.flags|=2048,sr(9,Xu.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Ue(),n=ee.identifierPrefix;if(B){var t=Ye,r=Ke;t=(r&~(1<<32-Me(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=lr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Xp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rf={readContext:Re,useCallback:sc,useContext:Re,useEffect:Vo,useImperativeHandle:oc,useInsertionEffect:rc,useLayoutEffect:ic,useMemo:ac,useReducer:al,useRef:tc,useState:function(){return al(or)},useDebugValue:Qo,useDeferredValue:function(e){var n=be();return uc(n,Y.memoizedState,e)},useTransition:function(){var e=al(or)[0],n=be().memoizedState;return[e,n]},useMutableSource:Ku,useSyncExternalStore:Yu,useId:cc,unstable_isNewReconciler:!1},lf={readContext:Re,useCallback:sc,useContext:Re,useEffect:Vo,useImperativeHandle:oc,useInsertionEffect:rc,useLayoutEffect:ic,useMemo:ac,useReducer:ul,useRef:tc,useState:function(){return ul(or)},useDebugValue:Qo,useDeferredValue:function(e){var n=be();return Y===null?n.memoizedState=e:uc(n,Y.memoizedState,e)},useTransition:function(){var e=ul(or)[0],n=be().memoizedState;return[e,n]},useMutableSource:Ku,useSyncExternalStore:Yu,useId:cc,unstable_isNewReconciler:!1};function Ie(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Vl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var bi={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ce(),i=vn(e),l=Je(r,i);l.payload=n,t!=null&&(l.callback=t),n=gn(e,l,i),n!==null&&(Oe(n,e,i,r),Br(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ce(),i=vn(e),l=Je(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=gn(e,l,i),n!==null&&(Oe(n,e,i,r),Br(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ce(),r=vn(e),i=Je(t,r);i.tag=2,n!=null&&(i.callback=n),n=gn(e,i,r),n!==null&&(Oe(n,e,r,t),Br(n,e,r))}};function ra(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Zt(t,r)||!Zt(i,l):!0}function hc(e,n,t){var r=!1,i=Sn,l=n.contextType;return typeof l=="object"&&l!==null?l=Re(l):(i=ge(n)?zn:ae.current,r=n.contextTypes,l=(r=r!=null)?dt(e,i):Sn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=bi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function ia(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&bi.enqueueReplaceState(n,n.state,null)}function Ql(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Oo(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Re(l):(l=ge(n)?zn:ae.current,i.context=dt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Vl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&bi.enqueueReplaceState(i,i.state,null),ui(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mt(e,n){try{var t="",r=n;do t+=Id(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function cl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Gl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var of=typeof WeakMap=="function"?WeakMap:Map;function mc(e,n,t){t=Je(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){hi||(hi=!0,ro=r),Gl(e,n)},t}function gc(e,n,t){t=Je(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Gl(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Gl(e,n),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function la(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new of;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=wf.bind(null,e,n,t),n.then(e,e))}function oa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function sa(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Je(-1,1),n.tag=2,gn(t,n,1))),t.lanes|=1),e)}var sf=tn.ReactCurrentOwner,he=!1;function ue(e,n,t,r){n.child=e===null?Vu(n,null,t,r):ft(n,e.child,t,r)}function aa(e,n,t,r,i){t=t.render;var l=n.ref;return at(n,i),r=Ho(e,n,t,r,l,i),t=Wo(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,nn(e,n,i)):(B&&t&&Lo(n),n.flags|=1,ue(e,n,r,i),n.child)}function ua(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!es(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,yc(e,n,l,r,i)):(e=Gr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Zt,t(o,r)&&e.ref===n.ref)return nn(e,n,i)}return n.flags|=1,e=kn(l,r),e.ref=n.ref,e.return=n,n.child=e}function yc(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Zt(l,r)&&e.ref===n.ref)if(he=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return n.lanes=e.lanes,nn(e,n,i)}return ql(e,n,t,r,i)}function vc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(rt,ve),ve|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(rt,ve),ve|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,O(rt,ve),ve|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,O(rt,ve),ve|=r;return ue(e,n,i,t),n.child}function kc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ql(e,n,t,r,i){var l=ge(t)?zn:ae.current;return l=dt(n,l),at(n,i),t=Ho(e,n,t,r,l,i),r=Wo(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,nn(e,n,i)):(B&&r&&Lo(n),n.flags|=1,ue(e,n,t,i),n.child)}function ca(e,n,t,r,i){if(ge(t)){var l=!0;ii(n)}else l=!1;if(at(n,i),n.stateNode===null)Wr(e,n),hc(n,t,r),Ql(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var s=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Re(u):(u=ge(t)?zn:ae.current,u=dt(n,u));var p=t.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==u)&&ia(n,o,r,u),sn=!1;var c=n.memoizedState;o.state=c,ui(n,r,o,i),s=n.memoizedState,a!==r||c!==s||me.current||sn?(typeof p=="function"&&(Vl(n,t,p,r),s=n.memoizedState),(a=sn||ra(n,t,a,r,c,s,u))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Gu(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:Ie(n.type,a),o.props=u,g=n.pendingProps,c=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Re(s):(s=ge(t)?zn:ae.current,s=dt(n,s));var v=t.getDerivedStateFromProps;(p=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||c!==s)&&ia(n,o,r,s),sn=!1,c=n.memoizedState,o.state=c,ui(n,r,o,i);var y=n.memoizedState;a!==g||c!==y||me.current||sn?(typeof v=="function"&&(Vl(n,t,v,r),y=n.memoizedState),(u=sn||ra(n,t,u,r,c,y,s)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(n.flags|=1024),r=!1)}return Kl(e,n,t,r,l,i)}function Kl(e,n,t,r,i,l){kc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Ks(n,t,!1),nn(e,n,l);r=n.stateNode,sf.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=ft(n,e.child,null,l),n.child=ft(n,null,a,l)):ue(e,n,a,l),n.memoizedState=r.state,i&&Ks(n,t,!0),n.child}function wc(e){var n=e.stateNode;n.pendingContext?qs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&qs(e,n.context,!1),Fo(e,n.containerInfo)}function da(e,n,t,r,i){return pt(),Ao(i),n.flags|=256,ue(e,n,t,r),n.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sc(e,n,t){var r=n.pendingProps,i=U.current,l=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(U,i&1),e===null)return Hl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ii(o,r,0,null),e=jn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Jl(t),n.memoizedState=Yl,e):Go(n,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return af(e,n,o,r,a,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=kn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=kn(a,l):(l=jn(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?Jl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Yl,r}return l=e.child,e=l.sibling,r=kn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Go(e,n){return n=Ii({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Nr(e,n,t,r){return r!==null&&Ao(r),ft(n,e.child,null,t),e=Go(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function af(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=cl(Error(w(422))),Nr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ii({mode:"visible",children:r.children},i,0,null),l=jn(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&ft(n,e.child,null,o),n.child.memoizedState=Jl(o),n.memoizedState=Yl,l);if(!(n.mode&1))return Nr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(w(419)),r=cl(l,r,void 0),Nr(e,n,o,r)}if(a=(o&e.childLanes)!==0,he||a){if(r=ee,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,en(e,i),Oe(r,e,i,-1))}return Zo(),r=cl(Error(w(421))),Nr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Sf.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,ke=mn(i.nextSibling),we=n,B=!0,je=null,e!==null&&(Ce[Ee++]=Ke,Ce[Ee++]=Ye,Ce[Ee++]=Dn,Ke=e.id,Ye=e.overflow,Dn=n),n=Go(n,r.children),n.flags|=4096,n)}function pa(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Wl(e.return,n,t)}function dl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function xc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(ue(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pa(e,t,n);else if(e.tag===19)pa(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(U,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ci(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),dl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ci(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}dl(n,!0,t,null,l);break;case"together":dl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function nn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),On|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,t=kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function uf(e,n,t){switch(n.tag){case 3:wc(n),pt();break;case 5:qu(n);break;case 1:ge(n.type)&&ii(n);break;case 4:Fo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;O(si,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(O(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?Sc(e,n,t):(O(U,U.current&1),e=nn(e,n,t),e!==null?e.sibling:null);O(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return xc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,vc(e,n,t)}return nn(e,n,t)}var _c,Xl,Cc,Ec;_c=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Xl=function(){};Cc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,In(Ve.current);var l=null;switch(t){case"input":i=wl(e,i),r=wl(e,r),l=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),l=[];break;case"textarea":i=_l(e,i),r=_l(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ti)}El(t,r);var o;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qt.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(l||(l=[]),l.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qt.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&F("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}t&&(l=l||[]).push("style",t);var u=l;(n.updateQueue=u)&&(n.flags|=4)}};Ec=function(e,n,t,r){t!==r&&(n.flags|=4)};function bt(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function cf(e,n,t){var r=n.pendingProps;switch(Io(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(n),null;case 1:return ge(n.type)&&ri(),le(n),null;case 3:return r=n.stateNode,ht(),$(me),$(ae),Bo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,je!==null&&(oo(je),je=null))),Xl(e,n),le(n),null;case 5:$o(n);var i=In(ir.current);if(t=n.type,e!==null&&n.stateNode!=null)Cc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(w(166));return le(n),null}if(e=In(Ve.current),Rr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[He]=n,r[tr]=l,e=(n.mode&1)!==0,t){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<zt.length;i++)F(zt[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Ss(r,l),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},F("invalid",r);break;case"textarea":_s(r,l),F("invalid",r)}El(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Tr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Tr(r.textContent,a,e),i=["children",""+a]):Qt.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&F("scroll",r)}switch(t){case"input":kr(r),xs(r,l,!0);break;case"textarea":kr(r),Cs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ti)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Za(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[He]=n,e[tr]=r,_c(e,n,!1,!1),n.stateNode=e;e:{switch(o=Pl(t,r),t){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<zt.length;i++)F(zt[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":Ss(e,r),i=wl(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),F("invalid",e);break;case"textarea":_s(e,r),i=_l(e,r),F("invalid",e);break;default:i=r}El(t,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?tu(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&eu(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Gt(e,s):typeof s=="number"&&Gt(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Qt.hasOwnProperty(l)?s!=null&&l==="onScroll"&&F("scroll",e):s!=null&&yo(e,l,s,o))}switch(t){case"input":kr(e),xs(e,r,!1);break;case"textarea":kr(e),Cs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?it(e,!!r.multiple,l,!1):r.defaultValue!=null&&it(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ti)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return le(n),null;case 6:if(e&&n.stateNode!=null)Ec(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(w(166));if(t=In(ir.current),In(Ve.current),Rr(n)){if(r=n.stateNode,t=n.memoizedProps,r[He]=n,(l=r.nodeValue!==t)&&(e=we,e!==null))switch(e.tag){case 3:Tr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[He]=n,n.stateNode=r}return le(n),null;case 13:if($(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ke!==null&&n.mode&1&&!(n.flags&128))Hu(),pt(),n.flags|=98560,l=!1;else if(l=Rr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[He]=n}else pt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;le(n),l=!1}else je!==null&&(oo(je),je=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?J===0&&(J=3):Zo())),n.updateQueue!==null&&(n.flags|=4),le(n),null);case 4:return ht(),Xl(e,n),e===null&&er(n.stateNode.containerInfo),le(n),null;case 10:return Do(n.type._context),le(n),null;case 17:return ge(n.type)&&ri(),le(n),null;case 19:if($(U),l=n.memoizedState,l===null)return le(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)bt(l,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=ci(e),o!==null){for(n.flags|=128,bt(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(U,U.current&1|2),n.child}e=e.sibling}l.tail!==null&&q()>gt&&(n.flags|=128,r=!0,bt(l,!1),n.lanes=4194304)}else{if(!r)if(e=ci(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),bt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!B)return le(n),null}else 2*q()-l.renderingStartTime>gt&&t!==1073741824&&(n.flags|=128,r=!0,bt(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=q(),n.sibling=null,t=U.current,O(U,r?t&1|2:t&1),n):(le(n),null);case 22:case 23:return Xo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ve&1073741824&&(le(n),n.subtreeFlags&6&&(n.flags|=8192)):le(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function df(e,n){switch(Io(n),n.tag){case 1:return ge(n.type)&&ri(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ht(),$(me),$(ae),Bo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return $o(n),null;case 13:if($(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));pt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(U),null;case 4:return ht(),null;case 10:return Do(n.type._context),null;case 22:case 23:return Xo(),null;case 24:return null;default:return null}}var Lr=!1,oe=!1,pf=typeof WeakSet=="function"?WeakSet:Set,_=null;function tt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function Zl(e,n,t){try{t()}catch(r){V(e,n,r)}}var fa=!1;function ff(e,n){if(Dl=Zr,e=Nu(),No(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,a=-1,s=-1,u=0,p=0,g=e,c=null;n:for(;;){for(var v;g!==t||i!==0&&g.nodeType!==3||(a=o+i),g!==l||r!==0&&g.nodeType!==3||(s=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(v=g.firstChild)!==null;)c=g,g=v;for(;;){if(g===e)break n;if(c===t&&++u===i&&(a=o),c===l&&++p===r&&(s=o),(v=g.nextSibling)!==null)break;g=c,c=g.parentNode}g=v}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ml={focusedElem:e,selectionRange:t},Zr=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,j=y.memoizedState,f=n.stateNode,d=f.getSnapshotBeforeUpdate(n.elementType===n.type?S:Ie(n.type,S),j);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(k){V(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return y=fa,fa=!1,y}function Ht(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Zl(n,t,l)}i=i.next}while(i!==r)}}function Ni(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function eo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pc(e){var n=e.alternate;n!==null&&(e.alternate=null,Pc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[He],delete n[tr],delete n[$l],delete n[qp],delete n[Kp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tc(e){return e.tag===5||e.tag===3||e.tag===4}function ha(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function no(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ti));else if(r!==4&&(e=e.child,e!==null))for(no(e,n,t),e=e.sibling;e!==null;)no(e,n,t),e=e.sibling}function to(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(to(e,n,t),e=e.sibling;e!==null;)to(e,n,t),e=e.sibling}var ne=null,Ae=!1;function rn(e,n,t){for(t=t.child;t!==null;)Rc(e,n,t),t=t.sibling}function Rc(e,n,t){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(xi,t)}catch{}switch(t.tag){case 5:oe||tt(t,n);case 6:var r=ne,i=Ae;ne=null,rn(e,n,t),ne=r,Ae=i,ne!==null&&(Ae?(e=ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ne.removeChild(t.stateNode));break;case 18:ne!==null&&(Ae?(e=ne,t=t.stateNode,e.nodeType===8?il(e.parentNode,t):e.nodeType===1&&il(e,t),Jt(e)):il(ne,t.stateNode));break;case 4:r=ne,i=Ae,ne=t.stateNode.containerInfo,Ae=!0,rn(e,n,t),ne=r,Ae=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Zl(t,n,o),i=i.next}while(i!==r)}rn(e,n,t);break;case 1:if(!oe&&(tt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){V(t,n,a)}rn(e,n,t);break;case 21:rn(e,n,t);break;case 22:t.mode&1?(oe=(r=oe)||t.memoizedState!==null,rn(e,n,t),oe=r):rn(e,n,t);break;default:rn(e,n,t)}}function ma(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new pf),n.forEach(function(r){var i=xf.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Le(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ae=!1;break e;case 3:ne=a.stateNode.containerInfo,Ae=!0;break e;case 4:ne=a.stateNode.containerInfo,Ae=!0;break e}a=a.return}if(ne===null)throw Error(w(160));Rc(l,o,i),ne=null,Ae=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){V(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)bc(n,e),n=n.sibling}function bc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(n,e),$e(e),r&4){try{Ht(3,e,e.return),Ni(3,e)}catch(S){V(e,e.return,S)}try{Ht(5,e,e.return)}catch(S){V(e,e.return,S)}}break;case 1:Le(n,e),$e(e),r&512&&t!==null&&tt(t,t.return);break;case 5:if(Le(n,e),$e(e),r&512&&t!==null&&tt(t,t.return),e.flags&32){var i=e.stateNode;try{Gt(i,"")}catch(S){V(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Ja(i,l),Pl(a,o);var u=Pl(a,l);for(o=0;o<s.length;o+=2){var p=s[o],g=s[o+1];p==="style"?tu(i,g):p==="dangerouslySetInnerHTML"?eu(i,g):p==="children"?Gt(i,g):yo(i,p,g,u)}switch(a){case"input":Sl(i,l);break;case"textarea":Xa(i,l);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?it(i,!!l.multiple,v,!1):c!==!!l.multiple&&(l.defaultValue!=null?it(i,!!l.multiple,l.defaultValue,!0):it(i,!!l.multiple,l.multiple?[]:"",!1))}i[tr]=l}catch(S){V(e,e.return,S)}}break;case 6:if(Le(n,e),$e(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(S){V(e,e.return,S)}}break;case 3:if(Le(n,e),$e(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Jt(n.containerInfo)}catch(S){V(e,e.return,S)}break;case 4:Le(n,e),$e(e);break;case 13:Le(n,e),$e(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Yo=q())),r&4&&ma(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(u=oe)||p,Le(n,e),oe=u):Le(n,e),$e(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(_=e,p=e.child;p!==null;){for(g=_=p;_!==null;){switch(c=_,v=c.child,c.tag){case 0:case 11:case 14:case 15:Ht(4,c,c.return);break;case 1:tt(c,c.return);var y=c.stateNode;if(typeof y.componentWillUnmount=="function"){r=c,t=c.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(S){V(r,t,S)}}break;case 5:tt(c,c.return);break;case 22:if(c.memoizedState!==null){ya(g);continue}}v!==null?(v.return=c,_=v):ya(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=g.stateNode,s=g.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=nu("display",o))}catch(S){V(e,e.return,S)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(S){V(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Le(n,e),$e(e),r&4&&ma(e);break;case 21:break;default:Le(n,e),$e(e)}}function $e(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Tc(t)){var r=t;break e}t=t.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gt(i,""),r.flags&=-33);var l=ha(e);to(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ha(e);no(e,a,o);break;default:throw Error(w(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function hf(e,n,t){_=e,Nc(e)}function Nc(e,n,t){for(var r=(e.mode&1)!==0;_!==null;){var i=_,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Lr;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||oe;a=Lr;var u=oe;if(Lr=o,(oe=s)&&!u)for(_=i;_!==null;)o=_,s=o.child,o.tag===22&&o.memoizedState!==null?va(i):s!==null?(s.return=o,_=s):va(i);for(;l!==null;)_=l,Nc(l),l=l.sibling;_=i,Lr=a,oe=u}ga(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,_=l):ga(e)}}function ga(e){for(;_!==null;){var n=_;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||Ni(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!oe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Ie(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&ea(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ea(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Jt(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}oe||n.flags&512&&eo(n)}catch(c){V(n,n.return,c)}}if(n===e){_=null;break}if(t=n.sibling,t!==null){t.return=n.return,_=t;break}_=n.return}}function ya(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_=t;break}_=n.return}}function va(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ni(4,n)}catch(s){V(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){V(n,i,s)}}var l=n.return;try{eo(n)}catch(s){V(n,l,s)}break;case 5:var o=n.return;try{eo(n)}catch(s){V(n,o,s)}}}catch(s){V(n,n.return,s)}if(n===e){_=null;break}var a=n.sibling;if(a!==null){a.return=n.return,_=a;break}_=n.return}}var mf=Math.ceil,fi=tn.ReactCurrentDispatcher,qo=tn.ReactCurrentOwner,Te=tn.ReactCurrentBatchConfig,A=0,ee=null,K=null,te=0,ve=0,rt=_n(0),J=0,ar=null,On=0,Li=0,Ko=0,Wt=null,fe=null,Yo=0,gt=1/0,Qe=null,hi=!1,ro=null,yn=null,Ir=!1,dn=null,mi=0,Vt=0,io=null,Vr=-1,Qr=0;function ce(){return A&6?q():Vr!==-1?Vr:Vr=q()}function vn(e){return e.mode&1?A&2&&te!==0?te&-te:Jp.transition!==null?(Qr===0&&(Qr=hu()),Qr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Su(e.type)),e):1}function Oe(e,n,t,r){if(50<Vt)throw Vt=0,io=null,Error(w(185));cr(e,t,r),(!(A&2)||e!==ee)&&(e===ee&&(!(A&2)&&(Li|=t),J===4&&un(e,te)),ye(e,r),t===1&&A===0&&!(n.mode&1)&&(gt=q()+500,Ti&&Cn()))}function ye(e,n){var t=e.callbackNode;Jd(e,n);var r=Xr(e,e===ee?te:0);if(r===0)t!==null&&Ts(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ts(t),n===1)e.tag===0?Yp(ka.bind(null,e)):$u(ka.bind(null,e)),Qp(function(){!(A&6)&&Cn()}),t=null;else{switch(mu(r)){case 1:t=xo;break;case 4:t=pu;break;case 16:t=Jr;break;case 536870912:t=fu;break;default:t=Jr}t=Oc(t,Lc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Lc(e,n){if(Vr=-1,Qr=0,A&6)throw Error(w(327));var t=e.callbackNode;if(ut()&&e.callbackNode!==t)return null;var r=Xr(e,e===ee?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=gi(e,r);else{n=r;var i=A;A|=2;var l=Ac();(ee!==e||te!==n)&&(Qe=null,gt=q()+500,An(e,n));do try{vf();break}catch(a){Ic(e,a)}while(!0);zo(),fi.current=l,A=i,K!==null?n=0:(ee=null,te=0,n=J)}if(n!==0){if(n===2&&(i=Ll(e),i!==0&&(r=i,n=lo(e,i))),n===1)throw t=ar,An(e,0),un(e,r),ye(e,q()),t;if(n===6)un(e,r);else{if(i=e.current.alternate,!(r&30)&&!gf(i)&&(n=gi(e,r),n===2&&(l=Ll(e),l!==0&&(r=l,n=lo(e,l))),n===1))throw t=ar,An(e,0),un(e,r),ye(e,q()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(w(345));case 2:Rn(e,fe,Qe);break;case 3:if(un(e,r),(r&130023424)===r&&(n=Yo+500-q(),10<n)){if(Xr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fl(Rn.bind(null,e,fe,Qe),n);break}Rn(e,fe,Qe);break;case 4:if(un(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Me(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mf(r/1960))-r,10<r){e.timeoutHandle=Fl(Rn.bind(null,e,fe,Qe),r);break}Rn(e,fe,Qe);break;case 5:Rn(e,fe,Qe);break;default:throw Error(w(329))}}}return ye(e,q()),e.callbackNode===t?Lc.bind(null,e):null}function lo(e,n){var t=Wt;return e.current.memoizedState.isDehydrated&&(An(e,n).flags|=256),e=gi(e,n),e!==2&&(n=fe,fe=t,n!==null&&oo(n)),e}function oo(e){fe===null?fe=e:fe.push.apply(fe,e)}function gf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Fe(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(e,n){for(n&=~Ko,n&=~Li,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Me(n),r=1<<t;e[t]=-1,n&=~r}}function ka(e){if(A&6)throw Error(w(327));ut();var n=Xr(e,0);if(!(n&1))return ye(e,q()),null;var t=gi(e,n);if(e.tag!==0&&t===2){var r=Ll(e);r!==0&&(n=r,t=lo(e,r))}if(t===1)throw t=ar,An(e,0),un(e,n),ye(e,q()),t;if(t===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Rn(e,fe,Qe),ye(e,q()),null}function Jo(e,n){var t=A;A|=1;try{return e(n)}finally{A=t,A===0&&(gt=q()+500,Ti&&Cn())}}function Fn(e){dn!==null&&dn.tag===0&&!(A&6)&&ut();var n=A;A|=1;var t=Te.transition,r=D;try{if(Te.transition=null,D=1,e)return e()}finally{D=r,Te.transition=t,A=n,!(A&6)&&Cn()}}function Xo(){ve=rt.current,$(rt)}function An(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Vp(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(Io(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ri();break;case 3:ht(),$(me),$(ae),Bo();break;case 5:$o(r);break;case 4:ht();break;case 13:$(U);break;case 19:$(U);break;case 10:Do(r.type._context);break;case 22:case 23:Xo()}t=t.return}if(ee=e,K=e=kn(e.current,null),te=ve=n,J=0,ar=null,Ko=Li=On=0,fe=Wt=null,Ln!==null){for(n=0;n<Ln.length;n++)if(t=Ln[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Ln=null}return e}function Ic(e,n){do{var t=K;try{if(zo(),Ur.current=pi,di){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}di=!1}if(Mn=0,Z=Y=H=null,Ut=!1,lr=0,qo.current=null,t===null||t.return===null){J=1,ar=n,K=null;break}e:{var l=e,o=t.return,a=t,s=n;if(n=te,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var c=p.alternate;c?(p.updateQueue=c.updateQueue,p.memoizedState=c.memoizedState,p.lanes=c.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=oa(o);if(v!==null){v.flags&=-257,sa(v,o,a,l,n),v.mode&1&&la(l,u,n),n=v,s=u;var y=n.updateQueue;if(y===null){var S=new Set;S.add(s),n.updateQueue=S}else y.add(s);break e}else{if(!(n&1)){la(l,u,n),Zo();break e}s=Error(w(426))}}else if(B&&a.mode&1){var j=oa(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),sa(j,o,a,l,n),Ao(mt(s,a));break e}}l=s=mt(s,a),J!==4&&(J=2),Wt===null?Wt=[l]:Wt.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var f=mc(l,s,n);Zs(l,f);break e;case 1:a=s;var d=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(yn===null||!yn.has(m)))){l.flags|=65536,n&=-n,l.lanes|=n;var k=gc(l,a,n);Zs(l,k);break e}}l=l.return}while(l!==null)}zc(t)}catch(x){n=x,K===t&&t!==null&&(K=t=t.return);continue}break}while(!0)}function Ac(){var e=fi.current;return fi.current=pi,e===null?pi:e}function Zo(){(J===0||J===3||J===2)&&(J=4),ee===null||!(On&268435455)&&!(Li&268435455)||un(ee,te)}function gi(e,n){var t=A;A|=2;var r=Ac();(ee!==e||te!==n)&&(Qe=null,An(e,n));do try{yf();break}catch(i){Ic(e,i)}while(!0);if(zo(),A=t,fi.current=r,K!==null)throw Error(w(261));return ee=null,te=0,J}function yf(){for(;K!==null;)jc(K)}function vf(){for(;K!==null&&!Ud();)jc(K)}function jc(e){var n=Mc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,n===null?zc(e):K=n,qo.current=null}function zc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=df(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,K=null;return}}else if(t=cf(t,n,ve),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);J===0&&(J=5)}function Rn(e,n,t){var r=D,i=Te.transition;try{Te.transition=null,D=1,kf(e,n,t,r)}finally{Te.transition=i,D=r}return null}function kf(e,n,t,r){do ut();while(dn!==null);if(A&6)throw Error(w(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Xd(e,l),e===ee&&(K=ee=null,te=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ir||(Ir=!0,Oc(Jr,function(){return ut(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Te.transition,Te.transition=null;var o=D;D=1;var a=A;A|=4,qo.current=null,ff(e,t),bc(t,e),Op(Ml),Zr=!!Dl,Ml=Dl=null,e.current=t,hf(t),Hd(),A=a,D=o,Te.transition=l}else e.current=t;if(Ir&&(Ir=!1,dn=e,mi=i),l=e.pendingLanes,l===0&&(yn=null),Qd(t.stateNode),ye(e,q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(hi)throw hi=!1,e=ro,ro=null,e;return mi&1&&e.tag!==0&&ut(),l=e.pendingLanes,l&1?e===io?Vt++:(Vt=0,io=e):Vt=0,Cn(),null}function ut(){if(dn!==null){var e=mu(mi),n=Te.transition,t=D;try{if(Te.transition=null,D=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,mi=0,A&6)throw Error(w(331));var i=A;for(A|=4,_=e.current;_!==null;){var l=_,o=l.child;if(_.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(_=u;_!==null;){var p=_;switch(p.tag){case 0:case 11:case 15:Ht(8,p,l)}var g=p.child;if(g!==null)g.return=p,_=g;else for(;_!==null;){p=_;var c=p.sibling,v=p.return;if(Pc(p),p===u){_=null;break}if(c!==null){c.return=v,_=c;break}_=v}}}var y=l.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var j=S.sibling;S.sibling=null,S=j}while(S!==null)}}_=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,_=o;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ht(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,_=f;break e}_=l.return}}var d=e.current;for(_=d;_!==null;){o=_;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,_=m;else e:for(o=d;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ni(9,a)}}catch(x){V(a,a.return,x)}if(a===o){_=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,_=k;break e}_=a.return}}if(A=i,Cn(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(xi,e)}catch{}r=!0}return r}finally{D=t,Te.transition=n}}return!1}function wa(e,n,t){n=mt(t,n),n=mc(e,n,1),e=gn(e,n,1),n=ce(),e!==null&&(cr(e,1,n),ye(e,n))}function V(e,n,t){if(e.tag===3)wa(e,e,t);else for(;n!==null;){if(n.tag===3){wa(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=mt(t,e),e=gc(n,e,1),n=gn(n,e,1),e=ce(),n!==null&&(cr(n,1,e),ye(n,e));break}}n=n.return}}function wf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ce(),e.pingedLanes|=e.suspendedLanes&t,ee===e&&(te&t)===t&&(J===4||J===3&&(te&130023424)===te&&500>q()-Yo?An(e,0):Ko|=t),ye(e,n)}function Dc(e,n){n===0&&(e.mode&1?(n=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):n=1);var t=ce();e=en(e,n),e!==null&&(cr(e,n,t),ye(e,t))}function Sf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Dc(e,t)}function xf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(n),Dc(e,t)}var Mc;Mc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)he=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return he=!1,uf(e,n,t);he=!!(e.flags&131072)}else he=!1,B&&n.flags&1048576&&Bu(n,oi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Wr(e,n),e=n.pendingProps;var i=dt(n,ae.current);at(n,t),i=Ho(null,n,r,e,i,t);var l=Wo();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ge(r)?(l=!0,ii(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Oo(n),i.updater=bi,n.stateNode=i,i._reactInternals=n,Ql(n,r,e,t),n=Kl(null,n,r,!0,l,t)):(n.tag=0,B&&l&&Lo(n),ue(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Wr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Cf(r),e=Ie(r,e),i){case 0:n=ql(null,n,r,e,t);break e;case 1:n=ca(null,n,r,e,t);break e;case 11:n=aa(null,n,r,e,t);break e;case 14:n=ua(null,n,r,Ie(r.type,e),t);break e}throw Error(w(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ie(r,i),ql(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ie(r,i),ca(e,n,r,i,t);case 3:e:{if(wc(n),e===null)throw Error(w(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Gu(e,n),ui(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=mt(Error(w(423)),n),n=da(e,n,r,t,i);break e}else if(r!==i){i=mt(Error(w(424)),n),n=da(e,n,r,t,i);break e}else for(ke=mn(n.stateNode.containerInfo.firstChild),we=n,B=!0,je=null,t=Vu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(pt(),r===i){n=nn(e,n,t);break e}ue(e,n,r,t)}n=n.child}return n;case 5:return qu(n),e===null&&Hl(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ol(r,i)?o=null:l!==null&&Ol(r,l)&&(n.flags|=32),kc(e,n),ue(e,n,o,t),n.child;case 6:return e===null&&Hl(n),null;case 13:return Sc(e,n,t);case 4:return Fo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ft(n,null,r,t):ue(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ie(r,i),aa(e,n,r,i,t);case 7:return ue(e,n,n.pendingProps,t),n.child;case 8:return ue(e,n,n.pendingProps.children,t),n.child;case 12:return ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,O(si,r._currentValue),r._currentValue=o,l!==null)if(Fe(l.value,o)){if(l.children===i.children&&!me.current){n=nn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Je(-1,t&-t),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Wl(l.return,t,n),a.lanes|=t;break}s=s.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(w(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Wl(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ue(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,at(n,t),i=Re(i),r=r(i),n.flags|=1,ue(e,n,r,t),n.child;case 14:return r=n.type,i=Ie(r,n.pendingProps),i=Ie(r.type,i),ua(e,n,r,i,t);case 15:return yc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ie(r,i),Wr(e,n),n.tag=1,ge(r)?(e=!0,ii(n)):e=!1,at(n,t),hc(n,r,i),Ql(n,r,i,t),Kl(null,n,r,!0,e,t);case 19:return xc(e,n,t);case 22:return vc(e,n,t)}throw Error(w(156,n.tag))};function Oc(e,n){return du(e,n)}function _f(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,n,t,r){return new _f(e,n,t,r)}function es(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cf(e){if(typeof e=="function")return es(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ko)return 11;if(e===wo)return 14}return 2}function kn(e,n){var t=e.alternate;return t===null?(t=Pe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Gr(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")es(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Gn:return jn(t.children,i,l,n);case vo:o=8,i|=8;break;case gl:return e=Pe(12,t,n,i|2),e.elementType=gl,e.lanes=l,e;case yl:return e=Pe(13,t,n,i),e.elementType=yl,e.lanes=l,e;case vl:return e=Pe(19,t,n,i),e.elementType=vl,e.lanes=l,e;case qa:return Ii(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qa:o=10;break e;case Ga:o=9;break e;case ko:o=11;break e;case wo:o=14;break e;case on:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=Pe(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function jn(e,n,t,r){return e=Pe(7,e,r,n),e.lanes=t,e}function Ii(e,n,t,r){return e=Pe(22,e,r,n),e.elementType=qa,e.lanes=t,e.stateNode={isHidden:!1},e}function pl(e,n,t){return e=Pe(6,e,null,n),e.lanes=t,e}function fl(e,n,t){return n=Pe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ef(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gi(0),this.expirationTimes=Gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ns(e,n,t,r,i,l,o,a,s){return e=new Ef(e,n,t,a,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Pe(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oo(l),e}function Pf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Fc(e){if(!e)return Sn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var t=e.type;if(ge(t))return Fu(e,t,n)}return n}function $c(e,n,t,r,i,l,o,a,s){return e=ns(t,r,!0,e,i,l,o,a,s),e.context=Fc(null),t=e.current,r=ce(),i=vn(t),l=Je(r,i),l.callback=n??null,gn(t,l,i),e.current.lanes=i,cr(e,i,r),ye(e,r),e}function Ai(e,n,t,r){var i=n.current,l=ce(),o=vn(i);return t=Fc(t),n.context===null?n.context=t:n.pendingContext=t,n=Je(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=gn(i,n,o),e!==null&&(Oe(e,i,o,l),Br(e,i,o)),o}function yi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sa(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ts(e,n){Sa(e,n),(e=e.alternate)&&Sa(e,n)}function Tf(){return null}var Bc=typeof reportError=="function"?reportError:function(e){console.error(e)};function rs(e){this._internalRoot=e}ji.prototype.render=rs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));Ai(e,n,null,null)};ji.prototype.unmount=rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Fn(function(){Ai(null,e,null,null)}),n[Ze]=null}};function ji(e){this._internalRoot=e}ji.prototype.unstable_scheduleHydration=function(e){if(e){var n=vu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<an.length&&n!==0&&n<an[t].priority;t++);an.splice(t,0,e),t===0&&wu(e)}};function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xa(){}function Rf(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=yi(o);l.call(u)}}var o=$c(n,r,e,0,null,!1,!1,"",xa);return e._reactRootContainer=o,e[Ze]=o.current,er(e.nodeType===8?e.parentNode:e),Fn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=yi(s);a.call(u)}}var s=ns(e,0,!1,null,null,!1,!1,"",xa);return e._reactRootContainer=s,e[Ze]=s.current,er(e.nodeType===8?e.parentNode:e),Fn(function(){Ai(n,s,t,r)}),s}function Di(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=yi(o);a.call(s)}}Ai(n,o,e,i)}else o=Rf(t,n,e,i,r);return yi(o)}gu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=jt(n.pendingLanes);t!==0&&(_o(n,t|1),ye(n,q()),!(A&6)&&(gt=q()+500,Cn()))}break;case 13:Fn(function(){var r=en(e,1);if(r!==null){var i=ce();Oe(r,e,1,i)}}),ts(e,1)}};Co=function(e){if(e.tag===13){var n=en(e,134217728);if(n!==null){var t=ce();Oe(n,e,134217728,t)}ts(e,134217728)}};yu=function(e){if(e.tag===13){var n=vn(e),t=en(e,n);if(t!==null){var r=ce();Oe(t,e,n,r)}ts(e,n)}};vu=function(){return D};ku=function(e,n){var t=D;try{return D=e,n()}finally{D=t}};Rl=function(e,n,t){switch(n){case"input":if(Sl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Pi(r);if(!i)throw Error(w(90));Ya(r),Sl(r,i)}}}break;case"textarea":Xa(e,t);break;case"select":n=t.value,n!=null&&it(e,!!t.multiple,n,!1)}};lu=Jo;ou=Fn;var bf={usingClientEntryPoint:!1,Events:[pr,Jn,Pi,ru,iu,Jo]},Nt={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nf={bundleType:Nt.bundleType,version:Nt.version,rendererPackageName:Nt.rendererPackageName,rendererConfig:Nt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uu(e),e===null?null:e.stateNode},findFiberByHostInstance:Nt.findFiberByHostInstance||Tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ar.isDisabled&&Ar.supportsFiber)try{xi=Ar.inject(Nf),We=Ar}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bf;xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!is(n))throw Error(w(200));return Pf(e,n,null,t)};xe.createRoot=function(e,n){if(!is(e))throw Error(w(299));var t=!1,r="",i=Bc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=ns(e,1,!1,null,null,t,!1,r,i),e[Ze]=n.current,er(e.nodeType===8?e.parentNode:e),new rs(n)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=uu(n),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Fn(e)};xe.hydrate=function(e,n,t){if(!zi(n))throw Error(w(200));return Di(null,e,n,!0,t)};xe.hydrateRoot=function(e,n,t){if(!is(e))throw Error(w(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Bc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=$c(n,null,e,1,t??null,i,!1,l,o),e[Ze]=n.current,er(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new ji(n)};xe.render=function(e,n,t){if(!zi(n))throw Error(w(200));return Di(null,e,n,!1,t)};xe.unmountComponentAtNode=function(e){if(!zi(e))throw Error(w(40));return e._reactRootContainer?(Fn(function(){Di(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};xe.unstable_batchedUpdates=Jo;xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!zi(t))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Di(e,n,t,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function Uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc)}catch(e){console.error(e)}}Uc(),Ua.exports=xe;var Lf=Ua.exports,_a=Lf;hl.createRoot=_a.createRoot,hl.hydrateRoot=_a.hydrateRoot;const If=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"experience",label:"Experience"},{id:"projects",label:"Projects"},{id:"notes",label:"Notes"},{id:"contact",label:"Contact"}],Af=()=>h.jsx("nav",{className:"navigation",children:h.jsxs("div",{className:"nav-container",children:[h.jsx("div",{className:"nav-logo",children:h.jsx("a",{href:"#home",children:"Alec Zhou"})}),h.jsx("ul",{className:"nav-menu",children:If.map(e=>h.jsx("li",{className:"nav-item",children:h.jsx("a",{className:"nav-link",href:`#${e.id}`,children:e.label})},e.id))})]})}),jf=()=>h.jsx("section",{id:"home",className:"hero",children:h.jsx("div",{className:"hero-container",children:h.jsxs("div",{className:"hero-content",children:[h.jsx("h1",{className:"hero-title",children:"Alec Zhou"}),h.jsx("h2",{className:"hero-subtitle",children:"Computer Science & Mathematics Student"}),h.jsx("p",{className:"hero-description",children:"Full-stack developer and AI enthusiast pursuing Computer Science and Applied Mathematics at the University of Maryland. Passionate about building innovative solutions and automating complex processes."}),h.jsxs("div",{className:"hero-links",children:[h.jsx("a",{href:"https://linkedin.com/in/alec-zhou-a59863286/",target:"_blank",rel:"noopener noreferrer",className:"hero-link",children:"LinkedIn"}),h.jsx("a",{href:"https://github.com/azhou555",target:"_blank",rel:"noopener noreferrer",className:"hero-link",children:"GitHub"}),h.jsx("a",{href:"mailto:alec1.zhou@gmail.com",className:"hero-link",children:"Email"})]})]})})}),zf=()=>{const e=["Advanced Calculus","Discrete Structures","Theory and Methods of Statistics","Linear Algebra"],n=["Computer and Network Security","Web Application Development","Algorithms","Organization of Programming Languages","Computer Graphics","Software Design","Intro to AI","Introduction to Computer Systems","Object Oriented Programming"],t=["Java","Python","TypeScript","JavaScript","HTML","CSS","C","C++","OCaml","SQL","x86 Assembly"],r=["Claude Code","Spring Boot","Spring","Docker","AWS","Jupyter Notebook","RStudio","Postman","React","Next.js","Pandas","NumPy","PyQt6","Langchain","JavaFX","JUnit","Power Automate","Power BI","Microsoft Suite"],i=["SQL","MySQL","PostgreSQL","SQLite","MongoDB"],l=["Linux","Unix","Windows"];return h.jsx("section",{id:"about",className:"about",children:h.jsxs("div",{className:"about-container",children:[h.jsx("h2",{className:"section-title",children:"About Me"}),h.jsxs("div",{className:"about-grid",children:[h.jsxs("div",{className:"about-card",children:[h.jsx("h3",{children:"Education"}),h.jsxs("div",{className:"education-info",children:[h.jsx("h4",{children:"University of Maryland - College Park"}),h.jsx("p",{className:"degree",children:"Computer Science & Mathematics: Applied Math Track"}),h.jsx("p",{className:"gpa",children:"GPA: 3.87/4.0"}),h.jsx("p",{className:"graduation",children:"Expected Graduation: Spring 2027"})]})]}),h.jsxs("div",{className:"about-card",children:[h.jsx("h3",{children:"Relevant Coursework"}),h.jsxs("div",{className:"coursework",children:[h.jsxs("div",{className:"course-category",children:[h.jsx("h4",{children:"Mathematics"}),h.jsx("ul",{children:e.map((o,a)=>h.jsx("li",{children:o},a))})]}),h.jsxs("div",{className:"course-category",children:[h.jsx("h4",{children:"Computer Science"}),h.jsx("ul",{children:n.map((o,a)=>h.jsx("li",{children:o},a))})]})]})]}),h.jsxs("div",{className:"about-card",children:[h.jsx("h3",{children:"Technical Skills"}),h.jsxs("div",{className:"skills",children:[h.jsxs("div",{className:"skill-category",children:[h.jsx("h4",{children:"Languages"}),h.jsx("div",{className:"skill-tags",children:t.map((o,a)=>h.jsx("span",{className:"skill-tag",children:o},a))})]}),h.jsxs("div",{className:"skill-category",children:[h.jsx("h4",{children:"Tools & Frameworks"}),h.jsx("div",{className:"skill-tags",children:r.map((o,a)=>h.jsx("span",{className:"skill-tag",children:o},a))})]}),h.jsxs("div",{className:"skill-category",children:[h.jsx("h4",{children:"Databases"}),h.jsx("div",{className:"skill-tags",children:i.map((o,a)=>h.jsx("span",{className:"skill-tag",children:o},a))})]}),h.jsxs("div",{className:"skill-category",children:[h.jsx("h4",{children:"Operating Systems"}),h.jsx("div",{className:"skill-tags",children:l.map((o,a)=>h.jsx("span",{className:"skill-tag",children:o},a))})]})]})]})]})]})})},Df=[{company:"M&T Bank",location:"Buffalo, NY",position:"Software Engineer Intern",duration:"June 2026 – Present",responsibilities:["Developed and tested REST API endpoints in Spring Boot for core banking services powering customer login, account/card info, checks, statements, contacts, and more","Upgraded legacy services to newer Spring Boot versions and remediated dependency-audit vulnerabilities; built custom regex-based PII masking for logs and third-party logging tools across all layers","Contributed to a live production codebase on an 11-person Agile team -- backlog tickets, break/fix issues, and API gateway routing","Actively investigated latency errors to report findings and propose solutions","Adhered to strict API contracts with downstream and upstream services to maintain high availability","Implemented accurate logging and filtering across all microservices"]},{company:"Blake Willson Group",location:"Arlington, VA",position:"AI and Process Automation Intern",duration:"June 2025 – August 2025",responsibilities:["Designed and implemented solutions utilizing AI models and frameworks including Langchain","Automated internal processes such as invoice processing and interactions with external APIs using AI methodologies","Researched, proposed, developed AI agents and cloud solutions on Azure and AWS","Developed internal-facing applications to complement automations and enhance user experience"]},{company:"Oceus Networks",location:"Herndon, VA",position:"Software Engineer Intern",duration:"July 2023 – August 2023",responsibilities:["Implemented and maintained a professional website and integrated MySQL database with PHP, JavaScript & Laravel","Implemented an optimized script to parse and reformat large Excel datasheets using Python and Pandas library","Conducted comprehensive functional and integration testing, leading to the successful launch of the application","Participated in code reviews under the guidance of a mentor, incorporating feedback to enhance code quality","Utilized GitHub and Agile methodology for collaborative project management and source control"]}],Mf=[{organization:"King Farm Tennis Team/Private Coaching",location:"Rockville & Bethesda, MD",position:"Founder and Coach",duration:"2019-2025",responsibilities:["Founded a tennis organization, taught lessons, and oversaw 20+ students aged 5-50 in group and private settings"]}],Of=()=>h.jsx("section",{id:"experience",className:"experience",children:h.jsxs("div",{className:"experience-container",children:[h.jsx("h2",{className:"section-title",children:"Experience"}),h.jsxs("div",{className:"experience-section",children:[h.jsx("h3",{className:"experience-category-title",children:"Professional Experience"}),Df.map((e,n)=>h.jsxs("div",{className:"experience-card",children:[h.jsxs("div",{className:"experience-header",children:[h.jsxs("div",{className:"experience-title",children:[h.jsx("h4",{children:e.position}),h.jsx("h5",{children:e.company})]}),h.jsxs("div",{className:"experience-meta",children:[h.jsx("span",{className:"experience-location",children:e.location}),h.jsx("span",{className:"experience-duration",children:e.duration})]})]}),h.jsx("ul",{className:"experience-responsibilities",children:e.responsibilities.map((t,r)=>h.jsx("li",{children:t},r))})]},n))]}),h.jsxs("div",{className:"experience-section",children:[h.jsx("h3",{className:"experience-category-title",children:"Leadership Experience"}),Mf.map((e,n)=>h.jsxs("div",{className:"experience-card",children:[h.jsxs("div",{className:"experience-header",children:[h.jsxs("div",{className:"experience-title",children:[h.jsx("h4",{children:e.position}),h.jsx("h5",{children:e.organization})]}),h.jsxs("div",{className:"experience-meta",children:[h.jsx("span",{className:"experience-location",children:e.location}),h.jsx("span",{className:"experience-duration",children:e.duration})]})]}),h.jsx("ul",{className:"experience-responsibilities",children:e.responsibilities.map((t,r)=>h.jsx("li",{children:t},r))})]},n))]})]})}),Ff=[{title:"dbb",status:"June 2026",description:"Single user local database written in Rust",technologies:["Rust"],features:["All core features of a relational SQL database","Page-based disk storage","B+ tree index","Volcano-model query executor","Cost based optimizer","Several optimization passes"],repoLink:"https://github.com/azhou555/dbb"},{title:"court-sight",status:"June 2026 - Present",description:"CV and deep learning project aiming to classify and provide feedback on tennis point data",technologies:["Python","HuggingFace Models","YOLO26","BoT Sort","MMPose","OpenCV","NumPy","SciPy","PyTorch","scikit","Pandas","XGBoost","ffmpeg"],features:["Actively training using real Grand-Slam match data","Semantic classification of point versus non-point shots by running a stripped version of court detection to run full training only on relevant frames","Working court line detection","Goal is to be able to effectively classify all points and provide feedback"],repoLink:"https://github.com/azhou555/court-sight"},{title:"gritter",status:"April 2026",description:"AST based codebase explainer built on configurable LLM models",technologies:["Rust","Embeddings","BM25 Retreival"],features:["AST-aware chunking for Python, Typescript, and Rust","Heuristic chunking fallback","Dense and sparse retrieval","Lightweight eval harness","Effectively answer questions about codebase with real citations"],repoLink:"https://github.com/azhou555/gritter"},{title:"dj-rara",status:"November 2025",description:"Spotify reccomendation TUI built as part of Anthropic x UMD Hackathon",technologies:["Python","Spotify API","Textual"],features:["Spotify integration","Uses listening history to generate song recommendations","Customizable variance","Auto-create playlists","Feature-rich and user-friendly interface"],deployLink:"https://pypi.org/project/dj-rara/",repoLink:"https://github.com/azhou555/dj-rara"},{title:"sserafy",status:"July 2025 - August 2025",description:"Full stack guitar learning platform with a real-time tuner, tab rendering, and paid lesson tier",technologies:["React","TypeScript","Node.js","Express","Prisma","PostgreSQL","Redis","AWS S3","Stripe","Docker"],features:["Real-time pitch detection tuner using the Web Audio API","MusicXML/Guitar Pro tab upload and rendering via OpenSheetMusicDisplay","Google/Apple OAuth2 authentication with account linking","Redis-backed caching, rate limiting, and background jobs; Stripe subscriptions for the paid tier"],deployLink:null,repoLink:"https://github.com/azhou555/sserafy"},{title:"Travel App",status:"June 2025 – July 2025",description:"Full stack travel app with Spring Boot, React, MySQL, and Google OAuth",technologies:["Spring Boot","React","MySQL","Google OAuth","OpenAI API"],features:["Development of RESTful API and CI/CD pipeline in combination with comprehensive SQL database","OpenAI API integration for enhanced planning, suggestions, and front-facing chatbot features"],deployLink:null},{title:"Super Sudoku",status:"October 2024 - August 2025",description:"Cross-platform Sudoku suite spanning desktop, web, and iOS with AI-powered solving assistance",technologies:["Python","PyQt6","Flask","Swift","Py-Sudoku","Langchain","OpenAI LLM"],features:["Synchronized gameplay, themes, and AI chat history across desktop, web, and mobile","Langchain + OpenAI LLM integration for RAG-based puzzle-solving assistance","Flask backend serving a shared web client alongside the native desktop and iOS apps"],deployLink:null,isDownload:!0,repoLink:"https://github.com/azhou555/Super-Sudoku"},{title:"ccross",status:"March 2026",description:"GNN-based crossword solver that jointly reasons over letter constraints and semantic coherence",technologies:["Python","PyTorch","T5","Graph Attention Networks"],features:["T5-small clue encoder fine-tuned as seq2seq, producing ranked candidate answers via beam search","Graph Attention Network grid solver treating word slots as nodes and letter intersections as edges","Trained on 7.5M clue-answer pairs and 86K puzzle grids from xd.saul.pw","Improves on solvers like the Berkeley Crossword Solver by propagating semantic coherence, not just letter constraints"],repoLink:"https://github.com/azhou555/CrosswordSolver"},{title:"court-reserver",status:"April 2026 - May 2026",description:"GitHub Actions bot that automatically reserves a UMD tennis court 48 hours in advance every day",technologies:["Python","GitHub Actions","Discord Webhooks"],features:["Runs on a daily cron schedule with no server to maintain","Falls back through a configurable list of courts if the preferred one is unavailable","Sends Discord notifications on booking success or failure"],repoLink:"https://github.com/azhou555/court-bot"},{title:"page-rank",status:"April 2026",description:"Interactive PageRank algorithm visualizer with multiple explorable modes",technologies:["React","TypeScript","D3","Recharts","Vite","Vitest"],features:["Random-surfer, rank-flow, and what-if simulation modes over an editable graph","Live matrix view and convergence sparkline alongside the graph canvas","Built-in math explainer and PageRank 101 panel for teaching the algorithm"],repoLink:"https://github.com/azhou555/page-rank"},{title:"editor-theme",status:"May 2026",description:'"Northern Lights" — three dark VS Code/Zed themes tuned for long coding sessions',technologies:["VS Code Theme API","Zed"],features:["Three variants (Aurora, Solstice, Boreal) sharing a slate/midnight-navy base with low-glare contrast","Restrained syntax palette using blues and a single lavender accent instead of red/orange","Not yet published to a marketplace"],notPublished:!0},{title:"ttera-themes",status:"August 2025",description:"Collection of 18 nature- and media-inspired VS Code themes, published to the VS Code Marketplace",technologies:["VS Code Theme API"],features:["18 themes with full UI coverage and accessibility-focused contrast",'Published on the VS Code Marketplace (formerly "Naturefy Themes")'],repoLink:"https://github.com/azhou555/naturefy-theme"}],$f=()=>h.jsx("section",{id:"projects",className:"projects",children:h.jsxs("div",{className:"projects-container",children:[h.jsx("h2",{className:"section-title",children:"Projects"}),h.jsx("div",{className:"projects-grid",children:Ff.map((e,n)=>h.jsxs("div",{className:"project-card",children:[h.jsxs("div",{className:"project-header",children:[h.jsx("h3",{className:"project-title",children:e.title}),h.jsx("span",{className:"project-status",children:e.status})]}),h.jsx("p",{className:"project-description",children:e.description}),h.jsxs("div",{className:"project-technologies",children:[h.jsx("h4",{children:"Technologies"}),h.jsx("div",{className:"tech-tags",children:e.technologies.map((t,r)=>h.jsx("span",{className:"tech-tag",children:t},r))})]}),h.jsxs("div",{className:"project-features",children:[h.jsx("h4",{children:"Key Features"}),h.jsx("ul",{children:e.features.map((t,r)=>h.jsx("li",{children:t},r))})]}),h.jsx("div",{className:"project-actions",children:e.deployLink?h.jsx("a",{href:e.deployLink,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:"View Live"}):e.repoLink?h.jsx("a",{href:e.repoLink,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:"View on GitHub"}):h.jsx("span",{className:"project-link-placeholder",children:e.isDownload?"Download Coming Soon":e.notPublished?"Not Yet Published":"No longer deployed"})})]},n))})]})}),Bf=`---
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
`,Uf=`---
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
`,Hf=`---
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
`,Wf=Object.assign({"../content/notes/backend-notes.md":Bf,"../content/notes/claude-code.md":Uf,"../content/notes/mtb-intern-reflections.md":Hf});function Vf(e){const n=e.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);if(!n)return{meta:{},body:e};const t={};for(const r of n[1].split(`
`)){const i=r.indexOf(":");i!==-1&&(t[r.slice(0,i).trim()]=r.slice(i+1).trim())}return{meta:t,body:n[2].trim()}}function Qf(e,n=160){const r=(e.split(`
`).find(i=>i.trim().length>0)||"").replace(/[#*_`>[\]]/g,"").trim();return r.length>n?r.slice(0,n).trim()+"…":r}const Hc=Object.entries(Wf).map(([e,n])=>{const t=e.split("/").pop().replace(/\.md$/,""),{meta:r,body:i}=Vf(n);return{slug:t,title:r.title||t,date:r.date||"",body:i,excerpt:Qf(i)}}).sort((e,n)=>e.date<n.date?1:-1),Gf=()=>h.jsx("section",{id:"notes",className:"notes",children:h.jsxs("div",{className:"notes-container",children:[h.jsx("h2",{className:"section-title",children:"Notes"}),h.jsx("div",{className:"notes-list",children:Hc.map(e=>h.jsxs("article",{className:"note-preview",children:[h.jsxs("div",{className:"note-preview-header",children:[h.jsx("h3",{className:"note-preview-title",children:h.jsx("a",{href:`#/notes/${e.slug}`,children:e.title})}),h.jsx("span",{className:"note-preview-date",children:e.date})]}),h.jsx("p",{className:"note-preview-excerpt",children:e.excerpt}),h.jsx("a",{className:"note-read-link",href:`#/notes/${e.slug}`,children:"Read →"})]},e.slug))})]})});function ls(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Hn=ls();function Wc(e){Hn=e}var bn={exec:()=>null};function Vn(e){let n=[];return t=>{let r=Math.max(0,Math.min(3,t-1)),i=n[r];return i||(i=e(r),n[r]=i),i}}function I(e,n=""){let t=typeof e=="string"?e:e.source,r={replace:(i,l)=>{let o=typeof l=="string"?l:l.source;return o=o.replace(se.caret,"$1"),t=t.replace(i,o),r},getRegex:()=>new RegExp(t,n)};return r}var qf=((e="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+e)}catch{return!1}})(),se={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Vn(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Vn(e=>new RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Vn(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:Vn(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:Vn(e=>new RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Vn(e=>new RegExp(`^ {0,${e}}>`))},Kf=/^(?:[ \t]*(?:\n|$))+/,Yf=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Jf=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Xf=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,os=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Vc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Qc=I(Vc).replace(/bull/g,os).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Zf=I(Vc).replace(/bull/g,os).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ss=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,eh=/^[^\n]+/,as=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,nh=I(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",as).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),th=I(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,os).getRegex(),Mi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",us=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,rh=I("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",us).replace("tag",Mi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Gc=e=>I(ss).replace("hr",hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list",e).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mi).getRegex(),ih=Gc(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),lh=Gc(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),oh=I(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",lh).getRegex(),cs={blockquote:oh,code:Yf,def:nh,fences:Jf,heading:Xf,hr,html:rh,lheading:Qc,list:th,newline:Kf,paragraph:ih,table:bn,text:eh},Ca=I("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mi).getRegex(),sh={...cs,lheading:Zf,table:Ca,paragraph:I(ss).replace("hr",hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ca).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mi).getRegex()},ah={...cs,html:I(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",us).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:bn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:I(ss).replace("hr",hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Qc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},uh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ch=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,qc=/^( {2,}|\\)\n(?!\s*$)/,dh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,wt=/[\p{P}\p{S}]/u,Oi=/[\s\p{P}\p{S}]/u,ds=/[^\s\p{P}\p{S}]/u,ph=I(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Oi).getRegex(),Kc=/(?!~)[\p{P}\p{S}]/u,fh=/(?!~)[\s\p{P}\p{S}]/u,hh=/(?:[^\s\p{P}\p{S}]|~)/u,mh=I(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",qf?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Yc=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,gh=I(Yc,"u").replace(/punct/g,wt).getRegex(),yh=I(Yc,"u").replace(/punct/g,Kc).getRegex(),Jc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",vh=I(Jc,"gu").replace(/notPunctSpace/g,ds).replace(/punctSpace/g,Oi).replace(/punct/g,wt).getRegex(),kh=I(Jc,"gu").replace(/notPunctSpace/g,hh).replace(/punctSpace/g,fh).replace(/punct/g,Kc).getRegex(),wh=I("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ds).replace(/punctSpace/g,Oi).replace(/punct/g,wt).getRegex(),Sh=I(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,wt).getRegex(),xh="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",_h=I(xh,"gu").replace(/notPunctSpace/g,ds).replace(/punctSpace/g,Oi).replace(/punct/g,wt).getRegex(),Ch=I(/\\(punct)/,"gu").replace(/punct/g,wt).getRegex(),Eh=I(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ph=I(us).replace("(?:-->|$)","-->").getRegex(),Th=I("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ph).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),vi=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Rh=I(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",vi).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Xc=I(/^!?\[(label)\]\[(ref)\]/).replace("label",vi).replace("ref",as).getRegex(),Zc=I(/^!?\[(ref)\](?:\[\])?/).replace("ref",as).getRegex(),bh=I("reflink|nolink(?!\\()","g").replace("reflink",Xc).replace("nolink",Zc).getRegex(),Ea=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ps={_backpedal:bn,anyPunctuation:Ch,autolink:Eh,blockSkip:mh,br:qc,code:ch,del:bn,delLDelim:bn,delRDelim:bn,emStrongLDelim:gh,emStrongRDelimAst:vh,emStrongRDelimUnd:wh,escape:uh,link:Rh,nolink:Zc,punctuation:ph,reflink:Xc,reflinkSearch:bh,tag:Th,text:dh,url:bn},Nh={...ps,link:I(/^!?\[(label)\]\((.*?)\)/).replace("label",vi).getRegex(),reflink:I(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",vi).getRegex()},so={...ps,emStrongRDelimAst:kh,emStrongLDelim:yh,delLDelim:Sh,delRDelim:_h,url:I(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Ea).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:I(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Ea).getRegex()},Lh={...so,br:I(qc).replace("{2,}","*").getRegex(),text:I(so.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},jr={normal:cs,gfm:sh,pedantic:ah},Lt={normal:ps,gfm:so,breaks:Lh,pedantic:Nh},Ih={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Pa=e=>Ih[e];function Be(e,n){if(n){if(se.escapeTest.test(e))return e.replace(se.escapeReplace,Pa)}else if(se.escapeTestNoEncode.test(e))return e.replace(se.escapeReplaceNoEncode,Pa);return e}function Ta(e){try{e=encodeURI(e).replace(se.percentDecode,"%")}catch{return null}return e}function Ra(e,n){var l;let t=e.replace(se.findPipe,(o,a,s)=>{let u=!1,p=a;for(;--p>=0&&s[p]==="\\";)u=!u;return u?"|":" |"}),r=t.split(se.splitPipe),i=0;if(r[0].trim()||r.shift(),r.length>0&&!((l=r.at(-1))!=null&&l.trim())&&r.pop(),n)if(r.length>n)r.splice(n);else for(;r.length<n;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(se.slashPipe,"|");return r}function ln(e,n,t){let r=e.length;if(r===0)return"";let i=0;for(;i<r;){let l=e.charAt(r-i-1);if(l===n&&!t)i++;else if(l!==n&&t)i++;else break}return e.slice(0,r-i)}function ba(e){let n=e.split(`
`),t=n.length-1;for(;t>=0&&se.blankLine.test(n[t]);)t--;return n.length-t<=2?e:n.slice(0,t+1).join(`
`)}function Ah(e,n){if(e.indexOf(n[1])===-1)return-1;let t=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===n[0])t++;else if(e[r]===n[1]&&(t--,t<0))return r;return t>0?-2:-1}function jh(e,n=0){let t=n,r="";for(let i of e)if(i==="	"){let l=4-t%4;r+=" ".repeat(l),t+=l}else r+=i,t++;return r}function Na(e,n,t,r,i){let l=n.href,o=n.title||null,a=e[1].replace(i.other.outputLinkReplace,"$1");r.state.inLink=!0;let s={type:e[0].charAt(0)==="!"?"image":"link",raw:t,href:l,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,s}function zh(e,n,t){let r=e.match(t.other.indentCodeCompensation);if(r===null)return n;let i=r[1];return n.split(`
`).map(l=>{let o=l.match(t.other.beginningSpace);if(o===null)return l;let[a]=o;return a.length>=i.length?l.slice(i.length):l}).join(`
`)}var ki=class{constructor(e){M(this,"options");M(this,"rules");M(this,"lexer");this.options=e||Hn}space(e){let n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){let n=this.rules.block.code.exec(e);if(n){let t=this.options.pedantic?n[0]:ba(n[0]),r=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:r}}}fences(e){let n=this.rules.block.fences.exec(e);if(n){let t=n[0],r=zh(t,n[3]||"",this.rules);return{type:"code",raw:t,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:r}}}heading(e){let n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(this.rules.other.endingHash.test(t)){let r=ln(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:ln(n[0],`
`),depth:n[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(e){let n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:ln(n[0],`
`)}}blockquote(e){let n=this.rules.block.blockquote.exec(e);if(n){let t=ln(n[0],`
`).split(`
`),r="",i="",l=[];for(;t.length>0;){let o=!1,a=[],s;for(s=0;s<t.length;s++)if(this.rules.other.blockquoteStart.test(t[s]))a.push(t[s]),o=!0;else if(!o)a.push(t[s]);else break;t=t.slice(s);let u=a.join(`
`),p=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,i=i?`${i}
${p}`:p;let g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,l,!0),this.lexer.state.top=g,t.length===0)break;let c=l.at(-1);if((c==null?void 0:c.type)==="code")break;if((c==null?void 0:c.type)==="blockquote"){let v=c,y=v.raw+`
`+t.join(`
`),S=this.blockquote(y);l[l.length-1]=S,r=r.substring(0,r.length-v.raw.length)+S.raw,i=i.substring(0,i.length-v.text.length)+S.text;break}else if((c==null?void 0:c.type)==="list"){let v=c,y=v.raw+`
`+t.join(`
`),S=this.list(y);l[l.length-1]=S,r=r.substring(0,r.length-c.raw.length)+S.raw,i=i.substring(0,i.length-v.raw.length)+S.raw,t=y.substring(l.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:l,text:i}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t=n[1].trim(),r=t.length>1,i={type:"list",raw:"",ordered:r,start:r?+t.slice(0,-1):"",loose:!1,items:[]};t=r?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=r?t:"[*+-]");let l=this.rules.other.listItemRegex(t),o=!1;for(;e;){let s=!1,u="",p="";if(!(n=l.exec(e))||this.rules.block.hr.test(e))break;u=n[0],e=e.substring(u.length);let g=jh(n[2].split(`
`,1)[0],n[1].length),c=e.split(`
`,1)[0],v=!g.trim(),y=0;if(this.options.pedantic?(y=2,p=g.trimStart()):v?y=n[1].length+1:(y=g.search(this.rules.other.nonSpaceChar),y=y>4?1:y,p=g.slice(y),y+=n[1].length),v&&this.rules.other.blankLine.test(c)&&(u+=c+`
`,e=e.substring(c.length+1),s=!0),!s){let S=this.rules.other.nextBulletRegex(y),j=this.rules.other.hrRegex(y),f=this.rules.other.fencesBeginRegex(y),d=this.rules.other.headingBeginRegex(y),m=this.rules.other.htmlBeginRegex(y),k=this.rules.other.blockquoteBeginRegex(y);for(;e;){let x=e.split(`
`,1)[0],E;if(c=x,this.options.pedantic?(c=c.replace(this.rules.other.listReplaceNesting,"  "),E=c):E=c.replace(this.rules.other.tabCharGlobal,"    "),f.test(c)||d.test(c)||m.test(c)||k.test(c)||S.test(c)||j.test(c))break;if(E.search(this.rules.other.nonSpaceChar)>=y||!c.trim())p+=`
`+E.slice(y);else{if(v||g.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||f.test(g)||d.test(g)||j.test(g))break;p+=`
`+c}v=!c.trim(),u+=x+`
`,e=e.substring(x.length+1),g=E.slice(y)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(o=!0)),i.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),i.raw+=u}let a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let s of i.items){this.lexer.state.top=!1,s.tokens=this.lexer.blockTokens(s.text,[]);let u=s.tokens[0];if(s.task&&((u==null?void 0:u.type)==="text"||(u==null?void 0:u.type)==="paragraph")){s.text=s.text.replace(this.rules.other.listReplaceTask,""),u.raw=u.raw.replace(this.rules.other.listReplaceTask,""),u.text=u.text.replace(this.rules.other.listReplaceTask,"");for(let g=this.lexer.inlineQueue.length-1;g>=0;g--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)){this.lexer.inlineQueue[g].src=this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask,"");break}let p=this.rules.other.listTaskCheckbox.exec(s.raw);if(p){let g={type:"checkbox",raw:p[0]+" ",checked:p[0]!=="[ ]"};s.checked=g.checked,i.loose?s.tokens[0]&&["paragraph","text"].includes(s.tokens[0].type)&&"tokens"in s.tokens[0]&&s.tokens[0].tokens?(s.tokens[0].raw=g.raw+s.tokens[0].raw,s.tokens[0].text=g.raw+s.tokens[0].text,s.tokens[0].tokens.unshift(g)):s.tokens.unshift({type:"paragraph",raw:g.raw,text:g.raw,tokens:[g]}):s.tokens.unshift(g)}}else s.task&&(s.task=!1);if(!i.loose){let p=s.tokens.filter(c=>c.type==="space"),g=p.length>0&&p.some(c=>this.rules.other.anyLine.test(c.raw));i.loose=g}}if(i.loose)for(let s of i.items){s.loose=!0;for(let u of s.tokens)u.type==="text"&&(u.type="paragraph")}return i}}html(e){let n=this.rules.block.html.exec(e);if(n){let t=ba(n[0]);return{type:"html",block:!0,raw:t,pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:t}}}def(e){let n=this.rules.block.def.exec(e);if(n){let t=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:t,raw:ln(n[0],`
`),href:r,title:i}}}table(e){var o;let n=this.rules.block.table.exec(e);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;let t=Ra(n[1]),r=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(o=n[3])!=null&&o.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],l={type:"table",raw:ln(n[0],`
`),header:[],align:[],rows:[]};if(t.length===r.length){for(let a of r)this.rules.other.tableAlignRight.test(a)?l.align.push("right"):this.rules.other.tableAlignCenter.test(a)?l.align.push("center"):this.rules.other.tableAlignLeft.test(a)?l.align.push("left"):l.align.push(null);for(let a=0;a<t.length;a++)l.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:l.align[a]});for(let a of i)l.rows.push(Ra(a,l.header.length).map((s,u)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:l.align[u]})));return l}}lheading(e){let n=this.rules.block.lheading.exec(e);if(n){let t=n[1].trim();return{type:"heading",raw:ln(n[0],`
`),depth:n[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(e){let n=this.rules.block.paragraph.exec(e);if(n){let t=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:t,tokens:this.lexer.inline(t)}}}text(e){let n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){let n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(e){let n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){let n=this.rules.inline.link.exec(e);if(n){let t=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let l=ln(t.slice(0,-1),"\\");if((t.length-l.length)%2===0)return}else{let l=Ah(n[2],"()");if(l===-2)return;if(l>-1){let o=(n[0].indexOf("!")===0?5:4)+n[1].length+l;n[2]=n[2].substring(0,l),n[0]=n[0].substring(0,o).trim(),n[3]=""}}let r=n[2],i="";if(this.options.pedantic){let l=this.rules.other.pedanticHrefTitle.exec(r);l&&(r=l[1],i=l[3])}else i=n[3]?n[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),Na(n,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=n[r.toLowerCase()];if(!i){let l=t[0].charAt(0);return{type:"text",raw:l,text:l}}return Na(t,i,t[0],this.lexer,this.rules)}}emStrong(e,n,t=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!t||this.rules.inline.punctuation.exec(t))){let i=[...r[0]].length-1,l,o,a=i,s=0,u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,n=n.slice(-1*e.length+i);(r=u.exec(n))!==null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(o=[...l].length,r[3]||r[4]){a+=o;continue}else if((r[5]||r[6])&&i%3&&!((i+o)%3)){s+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a+s);let p=[...r[0]][0].length,g=e.slice(0,i+r.index+p+o);if(Math.min(i,o)%2){let v=g.slice(1,-1);return{type:"em",raw:g,text:v,tokens:this.lexer.inlineTokens(v)}}let c=g.slice(2,-2);return{type:"strong",raw:g,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){let n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:n[0],text:t}}}br(e){let n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e,n,t=""){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!t||this.rules.inline.punctuation.exec(t))){let i=[...r[0]].length-1,l,o,a=i,s=this.rules.inline.delRDelim;for(s.lastIndex=0,n=n.slice(-1*e.length+i);(r=s.exec(n))!==null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l||(o=[...l].length,o!==i))continue;if(r[3]||r[4]){a+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a);let u=[...r[0]][0].length,p=e.slice(0,i+r.index+u+o),g=p.slice(i,-i);return{type:"del",raw:p,text:g,tokens:this.lexer.inlineTokens(g)}}}}autolink(e){let n=this.rules.inline.autolink.exec(e);if(n){let t,r;return n[2]==="@"?(t=n[1],r="mailto:"+t):(t=n[1],r=t),{type:"link",raw:n[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(e){var t;let n;if(n=this.rules.inline.url.exec(e)){let r,i;if(n[2]==="@")r=n[0],i="mailto:"+r;else{let l;do l=n[0],n[0]=((t=this.rules.inline._backpedal.exec(n[0]))==null?void 0:t[0])??"";while(l!==n[0]);r=n[0],n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){let n=this.rules.inline.text.exec(e);if(n){let t=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:t}}}},ze=class ao{constructor(n){M(this,"tokens");M(this,"options");M(this,"state");M(this,"inlineQueue");M(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||Hn,this.options.tokenizer=this.options.tokenizer||new ki,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:se,block:jr.normal,inline:Lt.normal};this.options.pedantic?(t.block=jr.pedantic,t.inline=Lt.pedantic):this.options.gfm&&(t.block=jr.gfm,this.options.breaks?t.inline=Lt.breaks:t.inline=Lt.gfm),this.tokenizer.rules=t}static get rules(){return{block:jr,inline:Lt}}static lex(n,t){return new ao(t).lex(n)}static lexInline(n,t){return new ao(t).inlineTokens(n)}lex(n){n=n.replace(se.carriageReturn,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],r=!1){var l,o,a;this.tokenizer.lexer=this,this.options.pedantic&&(n=n.replace(se.tabCharGlobal,"    ").replace(se.spaceLine,""));let i=1/0;for(;n;){if(n.length<i)i=n.length;else{this.infiniteLoopError(n.charCodeAt(0));break}let s;if((o=(l=this.options.extensions)==null?void 0:l.block)!=null&&o.some(p=>(s=p.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))continue;if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length);let p=t.at(-1);s.raw.length===1&&p!==void 0?p.raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length);let p=t.at(-1);(p==null?void 0:p.type)==="paragraph"||(p==null?void 0:p.type)==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+s.raw,p.text+=`
`+s.text,this.inlineQueue.at(-1).src=p.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length);let p=t.at(-1);(p==null?void 0:p.type)==="paragraph"||(p==null?void 0:p.type)==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+s.raw,p.text+=`
`+s.raw,this.inlineQueue.at(-1).src=p.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},t.push(s));continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}let u=n;if((a=this.options.extensions)!=null&&a.startBlock){let p=1/0,g=n.slice(1),c;this.options.extensions.startBlock.forEach(v=>{c=v.call({lexer:this},g),typeof c=="number"&&c>=0&&(p=Math.min(p,c))}),p<1/0&&p>=0&&(u=n.substring(0,p+1))}if(this.state.top&&(s=this.tokenizer.paragraph(u))){let p=t.at(-1);r&&(p==null?void 0:p.type)==="paragraph"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+s.raw,p.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=p.text):t.push(s),r=u.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length);let p=t.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+s.raw,p.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=p.text):t.push(s);continue}if(n){this.infiniteLoopError(n.charCodeAt(0));break}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){var a,s,u,p,g;this.tokenizer.lexer=this;let r=n;if(this.tokens.links){let c=Object.keys(this.tokens.links);c.length>0&&(r=r.replace(this.tokenizer.rules.inline.reflinkSearch,v=>c.includes(v.slice(v.lastIndexOf("[")+1,-1))?"["+"a".repeat(v.length-2)+"]":v))}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,"++"),r=r.replace(this.tokenizer.rules.inline.blockSkip,(c,v,y)=>{let S=y?y.length:0;return c.slice(0,S)+"["+"a".repeat(c.length-S-2)+"]"}),r=((s=(a=this.options.hooks)==null?void 0:a.emStrongMask)==null?void 0:s.call({lexer:this},r))??r;let i=!1,l="",o=1/0;for(;n;){if(n.length<o)o=n.length;else{this.infiniteLoopError(n.charCodeAt(0));break}i||(l=""),i=!1;let c;if((p=(u=this.options.extensions)==null?void 0:u.inline)!=null&&p.some(y=>(c=y.call({lexer:this},n,t))?(n=n.substring(c.raw.length),t.push(c),!0):!1))continue;if(c=this.tokenizer.escape(n)){n=n.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.tag(n)){n=n.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.link(n)){n=n.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(c.raw.length);let y=t.at(-1);c.type==="text"&&(y==null?void 0:y.type)==="text"?(y.raw+=c.raw,y.text+=c.text):t.push(c);continue}if(c=this.tokenizer.emStrong(n,r,l)){n=n.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.codespan(n)){n=n.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.br(n)){n=n.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.del(n,r,l)){n=n.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.autolink(n)){n=n.substring(c.raw.length),t.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(n))){n=n.substring(c.raw.length),t.push(c);continue}let v=n;if((g=this.options.extensions)!=null&&g.startInline){let y=1/0,S=n.slice(1),j;this.options.extensions.startInline.forEach(f=>{j=f.call({lexer:this},S),typeof j=="number"&&j>=0&&(y=Math.min(y,j))}),y<1/0&&y>=0&&(v=n.substring(0,y+1))}if(c=this.tokenizer.inlineText(v)){n=n.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),i=!0;let y=t.at(-1);(y==null?void 0:y.type)==="text"?(y.raw+=c.raw,y.text+=c.text):t.push(c);continue}if(n){this.infiniteLoopError(n.charCodeAt(0));break}}return t}infiniteLoopError(n){let t="Infinite loop on byte: "+n;if(this.options.silent)console.error(t);else throw new Error(t)}},wi=class{constructor(e){M(this,"options");M(this,"parser");this.options=e||Hn}space(e){return""}code({text:e,lang:n,escaped:t}){var l;let r=(l=(n||"").match(se.notSpaceStart))==null?void 0:l[0],i=e.replace(se.endingNewline,"")+`
`;return r?'<pre><code class="language-'+Be(r)+'">'+(t?i:Be(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:Be(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){let n=e.ordered,t=e.start,r="";for(let o=0;o<e.items.length;o++){let a=e.items[o];r+=this.listitem(a)}let i=n?"ol":"ul",l=n&&t!==1?' start="'+t+'"':"";return"<"+i+l+`>
`+r+"</"+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",t="";for(let i=0;i<e.header.length;i++)t+=this.tablecell(e.header[i]);n+=this.tablerow({text:t});let r="";for(let i=0;i<e.rows.length;i++){let l=e.rows[i];t="";for(let o=0;o<l.length;o++)t+=this.tablecell(l[o]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let n=this.parser.parseInline(e.tokens),t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Be(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:t}){let r=this.parser.parseInline(t),i=Ta(e);if(i===null)return r;e=i;let l='<a href="'+e+'"';return n&&(l+=' title="'+Be(n)+'"'),l+=">"+r+"</a>",l}image({href:e,title:n,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));let i=Ta(e);if(i===null)return Be(t);e=i;let l=`<img src="${e}" alt="${Be(t)}"`;return n&&(l+=` title="${Be(n)}"`),l+=">",l}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Be(e.text)}},fs=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},De=class uo{constructor(n){M(this,"options");M(this,"renderer");M(this,"textRenderer");this.options=n||Hn,this.options.renderer=this.options.renderer||new wi,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new fs}static parse(n,t){return new uo(t).parse(n)}static parseInline(n,t){return new uo(t).parseInline(n)}parse(n){var r,i;this.renderer.parser=this;let t="";for(let l=0;l<n.length;l++){let o=n[l];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[o.type]){let s=o,u=this.options.extensions.renderers[s.type].call({parser:this},s);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(s.type)){t+=u||"";continue}}let a=o;switch(a.type){case"space":{t+=this.renderer.space(a);break}case"hr":{t+=this.renderer.hr(a);break}case"heading":{t+=this.renderer.heading(a);break}case"code":{t+=this.renderer.code(a);break}case"table":{t+=this.renderer.table(a);break}case"blockquote":{t+=this.renderer.blockquote(a);break}case"list":{t+=this.renderer.list(a);break}case"checkbox":{t+=this.renderer.checkbox(a);break}case"html":{t+=this.renderer.html(a);break}case"def":{t+=this.renderer.def(a);break}case"paragraph":{t+=this.renderer.paragraph(a);break}case"text":{t+=this.renderer.text(a);break}default:{let s='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return t}parseInline(n,t=this.renderer){var i,l;this.renderer.parser=this;let r="";for(let o=0;o<n.length;o++){let a=n[o];if((l=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&l[a.type]){let u=this.options.extensions.renderers[a.type].call({parser:this},a);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=u||"";continue}}let s=a;switch(s.type){case"escape":{r+=t.text(s);break}case"html":{r+=t.html(s);break}case"link":{r+=t.link(s);break}case"image":{r+=t.image(s);break}case"checkbox":{r+=t.checkbox(s);break}case"strong":{r+=t.strong(s);break}case"em":{r+=t.em(s);break}case"codespan":{r+=t.codespan(s);break}case"br":{r+=t.br(s);break}case"del":{r+=t.del(s);break}case"text":{r+=t.text(s);break}default:{let u='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},zr,Dt=(zr=class{constructor(e){M(this,"options");M(this,"block");this.options=e||Hn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?ze.lex:ze.lexInline}provideParser(e=this.block){return e?De.parse:De.parseInline}},M(zr,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),M(zr,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),zr),Dh=class{constructor(...e){M(this,"defaults",ls());M(this,"options",this.setOptions);M(this,"parse",this.parseMarkdown(!0));M(this,"parseInline",this.parseMarkdown(!1));M(this,"Parser",De);M(this,"Renderer",wi);M(this,"TextRenderer",fs);M(this,"Lexer",ze);M(this,"Tokenizer",ki);M(this,"Hooks",Dt);this.use(...e)}walkTokens(e,n){var r,i;let t=[];for(let l of e)switch(t=t.concat(n.call(this,l)),l.type){case"table":{let o=l;for(let a of o.header)t=t.concat(this.walkTokens(a.tokens,n));for(let a of o.rows)for(let s of a)t=t.concat(this.walkTokens(s.tokens,n));break}case"list":{let o=l;t=t.concat(this.walkTokens(o.items,n));break}default:{let o=l;(i=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&i[o.type]?this.defaults.extensions.childTokens[o.type].forEach(a=>{let s=o[a].flat(1/0);t=t.concat(this.walkTokens(s,n))}):o.tokens&&(t=t.concat(this.walkTokens(o.tokens,n)))}}return t}use(...e){let n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(t=>{let r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let l=n.renderers[i.name];l?n.renderers[i.name]=function(...o){let a=i.renderer.apply(this,o);return a===!1&&(a=l.apply(this,o)),a}:n.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let l=n[i.level];l?l.unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(n.childTokens[i.name]=i.childTokens)}),r.extensions=n),t.renderer){let i=this.defaults.renderer||new wi(this.defaults);for(let l in t.renderer){if(!(l in i))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;let o=l,a=t.renderer[o],s=i[o];i[o]=(...u)=>{let p=a.apply(i,u);return p===!1&&(p=s.apply(i,u)),p||""}}r.renderer=i}if(t.tokenizer){let i=this.defaults.tokenizer||new ki(this.defaults);for(let l in t.tokenizer){if(!(l in i))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;let o=l,a=t.tokenizer[o],s=i[o];i[o]=(...u)=>{let p=a.apply(i,u);return p===!1&&(p=s.apply(i,u)),p}}r.tokenizer=i}if(t.hooks){let i=this.defaults.hooks||new Dt;for(let l in t.hooks){if(!(l in i))throw new Error(`hook '${l}' does not exist`);if(["options","block"].includes(l))continue;let o=l,a=t.hooks[o],s=i[o];Dt.passThroughHooks.has(l)?i[o]=u=>{if(this.defaults.async&&Dt.passThroughHooksRespectAsync.has(l))return(async()=>{let g=await a.call(i,u);return s.call(i,g)})();let p=a.call(i,u);return s.call(i,p)}:i[o]=(...u)=>{if(this.defaults.async)return(async()=>{let g=await a.apply(i,u);return g===!1&&(g=await s.apply(i,u)),g})();let p=a.apply(i,u);return p===!1&&(p=s.apply(i,u)),p}}r.hooks=i}if(t.walkTokens){let i=this.defaults.walkTokens,l=t.walkTokens;r.walkTokens=function(o){let a=[];return a.push(l.call(this,o)),i&&(a=a.concat(i.call(this,o))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return ze.lex(e,n??this.defaults)}parser(e,n){return De.parse(e,n??this.defaults)}parseMarkdown(e){return(n,t)=>{let r={...t},i={...this.defaults,...r},l=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let o=i.hooks?await i.hooks.preprocess(n):n,a=await(i.hooks?await i.hooks.provideLexer(e):e?ze.lex:ze.lexInline)(o,i),s=i.hooks?await i.hooks.processAllTokens(a):a;i.walkTokens&&await Promise.all(this.walkTokens(s,i.walkTokens));let u=await(i.hooks?await i.hooks.provideParser(e):e?De.parse:De.parseInline)(s,i);return i.hooks?await i.hooks.postprocess(u):u})().catch(l);try{i.hooks&&(n=i.hooks.preprocess(n));let o=(i.hooks?i.hooks.provideLexer(e):e?ze.lex:ze.lexInline)(n,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let a=(i.hooks?i.hooks.provideParser(e):e?De.parse:De.parseInline)(o,i);return i.hooks&&(a=i.hooks.postprocess(a)),a}catch(o){return l(o)}}}onError(e,n){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let r="<p>An error occurred:</p><pre>"+Be(t.message+"",!0)+"</pre>";return n?Promise.resolve(r):r}if(n)return Promise.reject(t);throw t}}},$n=new Dh;function z(e,n){return $n.parse(e,n)}z.options=z.setOptions=function(e){return $n.setOptions(e),z.defaults=$n.defaults,Wc(z.defaults),z};z.getDefaults=ls;z.defaults=Hn;z.use=function(...e){return $n.use(...e),z.defaults=$n.defaults,Wc(z.defaults),z};z.walkTokens=function(e,n){return $n.walkTokens(e,n)};z.parseInline=$n.parseInline;z.Parser=De;z.parser=De.parse;z.Renderer=wi;z.TextRenderer=fs;z.Lexer=ze;z.lexer=ze.lex;z.Tokenizer=ki;z.Hooks=Dt;z.parse=z;z.options;z.setOptions;z.use;z.walkTokens;z.parseInline;De.parse;ze.lex;const Mh=({slug:e})=>{const n=Hc.find(r=>r.slug===e),t=qe.useMemo(()=>n?z.parse(n.body):"",[n]);return n?h.jsxs("section",{className:"note-post",children:[h.jsx("a",{className:"note-back-link",href:"#notes",onClick:r=>{r.preventDefault(),window.history.back()},children:"← Back to notes"}),h.jsx("h1",{className:"note-post-title",children:n.title}),h.jsx("p",{className:"note-post-date",children:n.date}),h.jsx("div",{className:"note-post-body",dangerouslySetInnerHTML:{__html:t}})]}):h.jsxs("section",{className:"note-post",children:[h.jsx("a",{className:"note-back-link",href:"#notes",children:"← Back to notes"}),h.jsx("p",{children:"Note not found."})]})},Oh=()=>{const e={email:"alec1.zhou@gmail.com",phone:"240-421-7224",address:"6701 Honesty Dr • Bethesda, MD 20817",linkedin:"https://linkedin.com/in/alec-zhou-a59863286/",github:"https://github.com/azhou555"};return h.jsx("section",{id:"contact",className:"contact",children:h.jsxs("div",{className:"contact-container",children:[h.jsx("h2",{className:"section-title",children:"Contact"}),h.jsx("p",{className:"contact-description",children:"I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to connect!"}),h.jsxs("div",{className:"contact-content",children:[h.jsxs("div",{className:"contact-item",children:[h.jsxs("div",{className:"contact-info",children:[h.jsx("h4",{children:"Email"}),h.jsx("a",{href:`mailto:${e.email}`,className:"contact-link",children:e.email})]}),h.jsx("a",{href:`mailto:${e.email}`,className:"social-link",children:"Email"})]}),h.jsxs("div",{className:"contact-item",children:[h.jsxs("div",{className:"contact-info",children:[h.jsx("h4",{children:"LinkedIn"}),h.jsx("a",{href:e.linkedin,target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:"linkedin.com/in/alec-zhou-a59863286/"})]}),h.jsx("a",{href:e.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-link",children:"LinkedIn"})]}),h.jsxs("div",{className:"contact-item",children:[h.jsxs("div",{className:"contact-info",children:[h.jsx("h4",{children:"GitHub"}),h.jsx("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:"github.com/azhou555"})]}),h.jsx("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"social-link",children:"GitHub"})]}),h.jsxs("div",{className:"contact-item",children:[h.jsxs("div",{className:"contact-info",children:[h.jsx("h4",{children:"Phone"}),h.jsx("a",{href:`tel:${e.phone}`,className:"contact-link",children:e.phone})]}),h.jsx("span",{className:"social-link-placeholder",children:"Call"})]})]})]})})};function Fh(){const[e,n]=qe.useState(window.location.hash);qe.useEffect(()=>{const o=()=>n(window.location.hash);return window.addEventListener("hashchange",o),()=>window.removeEventListener("hashchange",o)},[]);const t=e.match(/^#\/notes\/(.+)$/),r=!!t,i=qe.useRef(0),l=qe.useRef(!1);return qe.useEffect(()=>{r&&!l.current?(i.current=window.scrollY,window.scrollTo(0,0)):!r&&l.current&&window.scrollTo(0,i.current),l.current=r},[r]),h.jsxs("div",{className:"App",children:[h.jsx(Af,{}),h.jsx("main",{children:t?h.jsx(Mh,{slug:t[1]}):h.jsxs(h.Fragment,{children:[h.jsx(jf,{}),h.jsx(zf,{}),h.jsx(Of,{}),h.jsx($f,{}),h.jsx(Gf,{}),h.jsx(Oh,{})]})})]})}hl.createRoot(document.getElementById("root")).render(h.jsx(kd.StrictMode,{children:h.jsx(Fh,{})}));
