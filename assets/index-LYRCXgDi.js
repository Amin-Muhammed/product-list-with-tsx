(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function l(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=l(c);fetch(c.href,d)}})();function Wb(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Gu={exports:{}},vr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function $b(){if(u0)return vr;u0=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(s,c,d){var f=null;if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:a,type:s,key:f,ref:c!==void 0?c:null,props:d}}return vr.Fragment=i,vr.jsx=l,vr.jsxs=l,vr}var c0;function Ib(){return c0||(c0=1,Gu.exports=$b()),Gu.exports}var j=Ib(),Zu={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function t1(){if(f0)return ot;f0=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function S(T){return T===null||typeof T!="object"?null:(T=b&&T[b]||T["@@iterator"],typeof T=="function"?T:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,C={};function U(T,B,G){this.props=T,this.context=B,this.refs=C,this.updater=G||R}U.prototype.isReactComponent={},U.prototype.setState=function(T,B){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,B,"setState")},U.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function q(){}q.prototype=U.prototype;function Y(T,B,G){this.props=T,this.context=B,this.refs=C,this.updater=G||R}var H=Y.prototype=new q;H.constructor=Y,M(H,U.prototype),H.isPureReactComponent=!0;var W=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},nt=Object.prototype.hasOwnProperty;function lt(T,B,G,X,I,gt){return G=gt.ref,{$$typeof:a,type:T,key:B,ref:G!==void 0?G:null,props:gt}}function $(T,B){return lt(T.type,B,void 0,void 0,void 0,T.props)}function ct(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function Pt(T){var B={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(G){return B[G]})}var ne=/\/+/g;function Yt(T,B){return typeof T=="object"&&T!==null&&T.key!=null?Pt(""+T.key):B.toString(36)}function tn(){}function Ge(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(tn,tn):(T.status="pending",T.then(function(B){T.status==="pending"&&(T.status="fulfilled",T.value=B)},function(B){T.status==="pending"&&(T.status="rejected",T.reason=B)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function Xt(T,B,G,X,I){var gt=typeof T;(gt==="undefined"||gt==="boolean")&&(T=null);var rt=!1;if(T===null)rt=!0;else switch(gt){case"bigint":case"string":case"number":rt=!0;break;case"object":switch(T.$$typeof){case a:case i:rt=!0;break;case y:return rt=T._init,Xt(rt(T._payload),B,G,X,I)}}if(rt)return I=I(T),rt=X===""?"."+Yt(T,0):X,W(I)?(G="",rt!=null&&(G=rt.replace(ne,"$&/")+"/"),Xt(I,B,G,"",function(Sn){return Sn})):I!=null&&(ct(I)&&(I=$(I,G+(I.key==null||T&&T.key===I.key?"":(""+I.key).replace(ne,"$&/")+"/")+rt)),B.push(I)),1;rt=0;var pe=X===""?".":X+":";if(W(T))for(var Et=0;Et<T.length;Et++)X=T[Et],gt=pe+Yt(X,Et),rt+=Xt(X,B,G,gt,I);else if(Et=S(T),typeof Et=="function")for(T=Et.call(T),Et=0;!(X=T.next()).done;)X=X.value,gt=pe+Yt(X,Et++),rt+=Xt(X,B,G,gt,I);else if(gt==="object"){if(typeof T.then=="function")return Xt(Ge(T),B,G,X,I);throw B=String(T),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return rt}function k(T,B,G){if(T==null)return T;var X=[],I=0;return Xt(T,X,"","",function(gt){return B.call(G,gt,I++)}),X}function P(T){if(T._status===-1){var B=T._result;B=B(),B.then(function(G){(T._status===0||T._status===-1)&&(T._status=1,T._result=G)},function(G){(T._status===0||T._status===-1)&&(T._status=2,T._result=G)}),T._status===-1&&(T._status=0,T._result=B)}if(T._status===1)return T._result.default;throw T._result}var K=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function mt(){}return ot.Children={map:k,forEach:function(T,B,G){k(T,function(){B.apply(this,arguments)},G)},count:function(T){var B=0;return k(T,function(){B++}),B},toArray:function(T){return k(T,function(B){return B})||[]},only:function(T){if(!ct(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},ot.Component=U,ot.Fragment=l,ot.Profiler=c,ot.PureComponent=Y,ot.StrictMode=s,ot.Suspense=p,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ot.__COMPILER_RUNTIME={__proto__:null,c:function(T){return L.H.useMemoCache(T)}},ot.cache=function(T){return function(){return T.apply(null,arguments)}},ot.cloneElement=function(T,B,G){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var X=M({},T.props),I=T.key,gt=void 0;if(B!=null)for(rt in B.ref!==void 0&&(gt=void 0),B.key!==void 0&&(I=""+B.key),B)!nt.call(B,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&B.ref===void 0||(X[rt]=B[rt]);var rt=arguments.length-2;if(rt===1)X.children=G;else if(1<rt){for(var pe=Array(rt),Et=0;Et<rt;Et++)pe[Et]=arguments[Et+2];X.children=pe}return lt(T.type,I,void 0,void 0,gt,X)},ot.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},ot.createElement=function(T,B,G){var X,I={},gt=null;if(B!=null)for(X in B.key!==void 0&&(gt=""+B.key),B)nt.call(B,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(I[X]=B[X]);var rt=arguments.length-2;if(rt===1)I.children=G;else if(1<rt){for(var pe=Array(rt),Et=0;Et<rt;Et++)pe[Et]=arguments[Et+2];I.children=pe}if(T&&T.defaultProps)for(X in rt=T.defaultProps,rt)I[X]===void 0&&(I[X]=rt[X]);return lt(T,gt,void 0,void 0,null,I)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(T){return{$$typeof:g,render:T}},ot.isValidElement=ct,ot.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:P}},ot.memo=function(T,B){return{$$typeof:m,type:T,compare:B===void 0?null:B}},ot.startTransition=function(T){var B=L.T,G={};L.T=G;try{var X=T(),I=L.S;I!==null&&I(G,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(mt,K)}catch(gt){K(gt)}finally{L.T=B}},ot.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ot.use=function(T){return L.H.use(T)},ot.useActionState=function(T,B,G){return L.H.useActionState(T,B,G)},ot.useCallback=function(T,B){return L.H.useCallback(T,B)},ot.useContext=function(T){return L.H.useContext(T)},ot.useDebugValue=function(){},ot.useDeferredValue=function(T,B){return L.H.useDeferredValue(T,B)},ot.useEffect=function(T,B,G){var X=L.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(T,B)},ot.useId=function(){return L.H.useId()},ot.useImperativeHandle=function(T,B,G){return L.H.useImperativeHandle(T,B,G)},ot.useInsertionEffect=function(T,B){return L.H.useInsertionEffect(T,B)},ot.useLayoutEffect=function(T,B){return L.H.useLayoutEffect(T,B)},ot.useMemo=function(T,B){return L.H.useMemo(T,B)},ot.useOptimistic=function(T,B){return L.H.useOptimistic(T,B)},ot.useReducer=function(T,B,G){return L.H.useReducer(T,B,G)},ot.useRef=function(T){return L.H.useRef(T)},ot.useState=function(T){return L.H.useState(T)},ot.useSyncExternalStore=function(T,B,G){return L.H.useSyncExternalStore(T,B,G)},ot.useTransition=function(){return L.H.useTransition()},ot.version="19.1.1",ot}var d0;function Uc(){return d0||(d0=1,Zu.exports=t1()),Zu.exports}var Z=Uc();const Ot=Wb(Z);var Qu={exports:{}},br={},Ku={exports:{}},Ju={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function e1(){return h0||(h0=1,(function(a){function i(k,P){var K=k.length;k.push(P);t:for(;0<K;){var mt=K-1>>>1,T=k[mt];if(0<c(T,P))k[mt]=P,k[K]=T,K=mt;else break t}}function l(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var P=k[0],K=k.pop();if(K!==P){k[0]=K;t:for(var mt=0,T=k.length,B=T>>>1;mt<B;){var G=2*(mt+1)-1,X=k[G],I=G+1,gt=k[I];if(0>c(X,K))I<T&&0>c(gt,X)?(k[mt]=gt,k[I]=K,mt=I):(k[mt]=X,k[G]=K,mt=G);else if(I<T&&0>c(gt,K))k[mt]=gt,k[I]=K,mt=I;else break t}}return P}function c(k,P){var K=k.sortIndex-P.sortIndex;return K!==0?K:k.id-P.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var f=Date,g=f.now();a.unstable_now=function(){return f.now()-g}}var p=[],m=[],y=1,b=null,S=3,R=!1,M=!1,C=!1,U=!1,q=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function W(k){for(var P=l(m);P!==null;){if(P.callback===null)s(m);else if(P.startTime<=k)s(m),P.sortIndex=P.expirationTime,i(p,P);else break;P=l(m)}}function L(k){if(C=!1,W(k),!M)if(l(p)!==null)M=!0,nt||(nt=!0,Yt());else{var P=l(m);P!==null&&Xt(L,P.startTime-k)}}var nt=!1,lt=-1,$=5,ct=-1;function Pt(){return U?!0:!(a.unstable_now()-ct<$)}function ne(){if(U=!1,nt){var k=a.unstable_now();ct=k;var P=!0;try{t:{M=!1,C&&(C=!1,Y(lt),lt=-1),R=!0;var K=S;try{e:{for(W(k),b=l(p);b!==null&&!(b.expirationTime>k&&Pt());){var mt=b.callback;if(typeof mt=="function"){b.callback=null,S=b.priorityLevel;var T=mt(b.expirationTime<=k);if(k=a.unstable_now(),typeof T=="function"){b.callback=T,W(k),P=!0;break e}b===l(p)&&s(p),W(k)}else s(p);b=l(p)}if(b!==null)P=!0;else{var B=l(m);B!==null&&Xt(L,B.startTime-k),P=!1}}break t}finally{b=null,S=K,R=!1}P=void 0}}finally{P?Yt():nt=!1}}}var Yt;if(typeof H=="function")Yt=function(){H(ne)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,Ge=tn.port2;tn.port1.onmessage=ne,Yt=function(){Ge.postMessage(null)}}else Yt=function(){q(ne,0)};function Xt(k,P){lt=q(function(){k(a.unstable_now())},P)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(k){k.callback=null},a.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<k?Math.floor(1e3/k):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(k){switch(S){case 1:case 2:case 3:var P=3;break;default:P=S}var K=S;S=P;try{return k()}finally{S=K}},a.unstable_requestPaint=function(){U=!0},a.unstable_runWithPriority=function(k,P){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var K=S;S=k;try{return P()}finally{S=K}},a.unstable_scheduleCallback=function(k,P,K){var mt=a.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?mt+K:mt):K=mt,k){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=K+T,k={id:y++,callback:P,priorityLevel:k,startTime:K,expirationTime:T,sortIndex:-1},K>mt?(k.sortIndex=K,i(m,k),l(p)===null&&k===l(m)&&(C?(Y(lt),lt=-1):C=!0,Xt(L,K-mt))):(k.sortIndex=T,i(p,k),M||R||(M=!0,nt||(nt=!0,Yt()))),k},a.unstable_shouldYield=Pt,a.unstable_wrapCallback=function(k){var P=S;return function(){var K=S;S=P;try{return k.apply(this,arguments)}finally{S=K}}}})(Ju)),Ju}var m0;function n1(){return m0||(m0=1,Ku.exports=e1()),Ku.exports}var Fu={exports:{}},re={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function a1(){if(p0)return re;p0=1;var a=Uc();function i(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(p,m,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:p,containerInfo:m,implementation:y}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,re.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return d(p,m,null,y)},re.flushSync=function(p){var m=f.T,y=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=y,s.d.f()}},re.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},re.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},re.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,b=g(y,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,R=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:R}):y==="script"&&s.d.X(p,{crossOrigin:b,integrity:S,fetchPriority:R,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},re.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=g(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},re.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,b=g(y,m.crossOrigin);s.d.L(p,y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},re.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=g(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},re.requestFormReset=function(p){s.d.r(p)},re.unstable_batchedUpdates=function(p,m){return p(m)},re.useFormState=function(p,m,y){return f.H.useFormState(p,m,y)},re.useFormStatus=function(){return f.H.useHostTransitionStatus()},re.version="19.1.1",re}var g0;function i1(){if(g0)return Fu.exports;g0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Fu.exports=a1(),Fu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function r1(){if(y0)return br;y0=1;var a=n1(),i=Uc(),l=i1();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(d(t)!==t)throw Error(s(188))}function p(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,r=e;;){var o=n.return;if(o===null)break;var u=o.alternate;if(u===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===n)return g(o),t;if(u===r)return g(o),e;u=u.sibling}throw Error(s(188))}if(n.return!==r.return)n=o,r=u;else{for(var h=!1,v=o.child;v;){if(v===n){h=!0,n=o,r=u;break}if(v===r){h=!0,r=o,n=u;break}v=v.sibling}if(!h){for(v=u.child;v;){if(v===n){h=!0,n=u,r=o;break}if(v===r){h=!0,r=u,n=o;break}v=v.sibling}if(!h)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function m(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m(t),e!==null)return e;t=t.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),ct=Symbol.for("react.activity"),Pt=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function Yt(t){return t===null||typeof t!="object"?null:(t=ne&&t[ne]||t["@@iterator"],typeof t=="function"?t:null)}var tn=Symbol.for("react.client.reference");function Ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===tn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case U:return"Profiler";case C:return"StrictMode";case L:return"Suspense";case nt:return"SuspenseList";case ct:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case H:return(t.displayName||"Context")+".Provider";case Y:return(t._context.displayName||"Context")+".Consumer";case W:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lt:return e=t.displayName||null,e!==null?e:Ge(t.type)||"Memo";case $:e=t._payload,t=t._init;try{return Ge(t(e))}catch{}}return null}var Xt=Array.isArray,k=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},mt=[],T=-1;function B(t){return{current:t}}function G(t){0>T||(t.current=mt[T],mt[T]=null,T--)}function X(t,e){T++,mt[T]=t.current,t.current=e}var I=B(null),gt=B(null),rt=B(null),pe=B(null);function Et(t,e){switch(X(rt,e),X(gt,t),X(I,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Um(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Um(e),t=Bm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}G(I),X(I,t)}function Sn(){G(I),G(gt),G(rt)}function wo(t){t.memoizedState!==null&&X(pe,t);var e=I.current,n=Bm(e,t.type);e!==n&&(X(gt,t),X(I,n))}function Yr(t){gt.current===t&&(G(I),G(gt)),pe.current===t&&(G(pe),hr._currentValue=K)}var zo=Object.prototype.hasOwnProperty,_o=a.unstable_scheduleCallback,ko=a.unstable_cancelCallback,Cy=a.unstable_shouldYield,wy=a.unstable_requestPaint,Ze=a.unstable_now,zy=a.unstable_getCurrentPriorityLevel,yf=a.unstable_ImmediatePriority,vf=a.unstable_UserBlockingPriority,Xr=a.unstable_NormalPriority,_y=a.unstable_LowPriority,bf=a.unstable_IdlePriority,ky=a.log,Ny=a.unstable_setDisableYieldValue,Si=null,ge=null;function Tn(t){if(typeof ky=="function"&&Ny(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(Si,t)}catch{}}var ye=Math.clz32?Math.clz32:Uy,Vy=Math.log,jy=Math.LN2;function Uy(t){return t>>>=0,t===0?32:31-(Vy(t)/jy|0)|0}var Gr=256,Zr=4194304;function $n(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Qr(t,e,n){var r=t.pendingLanes;if(r===0)return 0;var o=0,u=t.suspendedLanes,h=t.pingedLanes;t=t.warmLanes;var v=r&134217727;return v!==0?(r=v&~u,r!==0?o=$n(r):(h&=v,h!==0?o=$n(h):n||(n=v&~t,n!==0&&(o=$n(n))))):(v=r&~u,v!==0?o=$n(v):h!==0?o=$n(h):n||(n=r&~t,n!==0&&(o=$n(n)))),o===0?0:e!==0&&e!==o&&(e&u)===0&&(u=o&-o,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:o}function Ti(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function By(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xf(){var t=Gr;return Gr<<=1,(Gr&4194048)===0&&(Gr=256),t}function Sf(){var t=Zr;return Zr<<=1,(Zr&62914560)===0&&(Zr=4194304),t}function No(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ai(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Hy(t,e,n,r,o,u){var h=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var v=t.entanglements,x=t.expirationTimes,E=t.hiddenUpdates;for(n=h&~n;0<n;){var _=31-ye(n),V=1<<_;v[_]=0,x[_]=-1;var w=E[_];if(w!==null)for(E[_]=null,_=0;_<w.length;_++){var z=w[_];z!==null&&(z.lane&=-536870913)}n&=~V}r!==0&&Tf(t,r,0),u!==0&&o===0&&t.tag!==0&&(t.suspendedLanes|=u&~(h&~e))}function Tf(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-ye(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|n&4194090}function Af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ye(n),o=1<<r;o&e|t[r]&e&&(t[r]|=e),n&=~o}}function Vo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function jo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Of(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:a0(t.type))}function qy(t,e){var n=P.p;try{return P.p=t,e()}finally{P.p=n}}var An=Math.random().toString(36).slice(2),ae="__reactFiber$"+An,ue="__reactProps$"+An,Aa="__reactContainer$"+An,Uo="__reactEvents$"+An,Ly="__reactListeners$"+An,Py="__reactHandles$"+An,Mf="__reactResources$"+An,Oi="__reactMarker$"+An;function Bo(t){delete t[ae],delete t[ue],delete t[Uo],delete t[Ly],delete t[Py]}function Oa(t){var e=t[ae];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Aa]||n[ae]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pm(t);t!==null;){if(n=t[ae])return n;t=Pm(t)}return e}t=n,n=t.parentNode}return null}function Ma(t){if(t=t[ae]||t[Aa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Mi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Da(t){var e=t[Mf];return e||(e=t[Mf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Kt(t){t[Oi]=!0}var Df=new Set,Ef={};function In(t,e){Ea(t,e),Ea(t+"Capture",e)}function Ea(t,e){for(Ef[t]=e,t=0;t<e.length;t++)Df.add(e[t])}var Yy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rf={},Cf={};function Xy(t){return zo.call(Cf,t)?!0:zo.call(Rf,t)?!1:Yy.test(t)?Cf[t]=!0:(Rf[t]=!0,!1)}function Kr(t,e,n){if(Xy(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Jr(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function en(t,e,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+r)}}var Ho,wf;function Ra(t){if(Ho===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ho=e&&e[1]||"",wf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ho+t+wf}var qo=!1;function Lo(t,e){if(!t||qo)return"";qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(z){var w=z}Reflect.construct(t,[],V)}else{try{V.call()}catch(z){w=z}t.call(V.prototype)}}else{try{throw Error()}catch(z){w=z}(V=t())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(z){if(z&&w&&typeof z.stack=="string")return[z.stack,w.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),h=u[0],v=u[1];if(h&&v){var x=h.split(`
`),E=v.split(`
`);for(o=r=0;r<x.length&&!x[r].includes("DetermineComponentFrameRoot");)r++;for(;o<E.length&&!E[o].includes("DetermineComponentFrameRoot");)o++;if(r===x.length||o===E.length)for(r=x.length-1,o=E.length-1;1<=r&&0<=o&&x[r]!==E[o];)o--;for(;1<=r&&0<=o;r--,o--)if(x[r]!==E[o]){if(r!==1||o!==1)do if(r--,o--,0>o||x[r]!==E[o]){var _=`
`+x[r].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=r&&0<=o);break}}}finally{qo=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ra(n):""}function Gy(t){switch(t.tag){case 26:case 27:case 5:return Ra(t.type);case 16:return Ra("Lazy");case 13:return Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 15:return Lo(t.type,!1);case 11:return Lo(t.type.render,!1);case 1:return Lo(t.type,!0);case 31:return Ra("Activity");default:return""}}function zf(t){try{var e="";do e+=Gy(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function De(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _f(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zy(t){var e=_f(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(h){r=""+h,u.call(this,h)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(h){r=""+h},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fr(t){t._valueTracker||(t._valueTracker=Zy(t))}function kf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_f(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Qy=/[\n"\\]/g;function Ee(t){return t.replace(Qy,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Po(t,e,n,r,o,u,h,v){t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+De(e)):t.value!==""+De(e)&&(t.value=""+De(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),e!=null?Yo(t,h,De(e)):n!=null?Yo(t,h,De(n)):r!=null&&t.removeAttribute("value"),o==null&&u!=null&&(t.defaultChecked=!!u),o!=null&&(t.checked=o&&typeof o!="function"&&typeof o!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+De(v):t.removeAttribute("name")}function Nf(t,e,n,r,o,u,h,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;n=n!=null?""+De(n):"",e=e!=null?""+De(e):n,v||e===t.value||(t.value=e),t.defaultValue=e}r=r??o,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=v?t.checked:!!r,t.defaultChecked=!!r,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h)}function Yo(t,e,n){e==="number"&&Wr(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Ca(t,e,n,r){if(t=t.options,e){e={};for(var o=0;o<n.length;o++)e["$"+n[o]]=!0;for(n=0;n<t.length;n++)o=e.hasOwnProperty("$"+t[n].value),t[n].selected!==o&&(t[n].selected=o),o&&r&&(t[n].defaultSelected=!0)}else{for(n=""+De(n),e=null,o=0;o<t.length;o++){if(t[o].value===n){t[o].selected=!0,r&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function Vf(t,e,n){if(e!=null&&(e=""+De(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+De(n):""}function jf(t,e,n,r){if(e==null){if(r!=null){if(n!=null)throw Error(s(92));if(Xt(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),e=n}n=De(e),t.defaultValue=n,r=t.textContent,r===n&&r!==""&&r!==null&&(t.value=r)}function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ky=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uf(t,e,n){var r=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,n):typeof n!="number"||n===0||Ky.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Bf(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var o in e)r=e[o],e.hasOwnProperty(o)&&n[o]!==r&&Uf(t,o,r)}else for(var u in e)e.hasOwnProperty(u)&&Uf(t,u,e[u])}function Xo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $r(t){return Fy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Go=null;function Zo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var za=null,_a=null;function Hf(t){var e=Ma(t);if(e&&(t=e.stateNode)){var n=t[ue]||null;t:switch(t=e.stateNode,e.type){case"input":if(Po(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ee(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var o=r[ue]||null;if(!o)throw Error(s(90));Po(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(e=0;e<n.length;e++)r=n[e],r.form===t.form&&kf(r)}break t;case"textarea":Vf(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Ca(t,!!n.multiple,e,!1)}}}var Qo=!1;function qf(t,e,n){if(Qo)return t(e,n);Qo=!0;try{var r=t(e);return r}finally{if(Qo=!1,(za!==null||_a!==null)&&(Ul(),za&&(e=za,t=_a,_a=za=null,Hf(e),t)))for(e=0;e<t.length;e++)Hf(t[e])}}function Di(t,e){var n=t.stateNode;if(n===null)return null;var r=n[ue]||null;if(r===null)return null;n=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ko=!1;if(nn)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){Ko=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{Ko=!1}var On=null,Jo=null,Ir=null;function Lf(){if(Ir)return Ir;var t,e=Jo,n=e.length,r,o="value"in On?On.value:On.textContent,u=o.length;for(t=0;t<n&&e[t]===o[t];t++);var h=n-t;for(r=1;r<=h&&e[n-r]===o[u-r];r++);return Ir=o.slice(t,1<r?1-r:void 0)}function tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function Pf(){return!1}function ce(t){function e(n,r,o,u,h){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(n=t[v],this[v]=n?n(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?el:Pf,this.isPropagationStopped=Pf,this}return y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=ce(ta),Ri=y({},ta,{view:0,detail:0}),Wy=ce(Ri),Fo,Wo,Ci,al=y({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Io,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ci&&(Ci&&t.type==="mousemove"?(Fo=t.screenX-Ci.screenX,Wo=t.screenY-Ci.screenY):Wo=Fo=0,Ci=t),Fo)},movementY:function(t){return"movementY"in t?t.movementY:Wo}}),Yf=ce(al),$y=y({},al,{dataTransfer:0}),Iy=ce($y),tv=y({},Ri,{relatedTarget:0}),$o=ce(tv),ev=y({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=ce(ev),av=y({},ta,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iv=ce(av),rv=y({},ta,{data:0}),Xf=ce(rv),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sv[t])?!!e[t]:!1}function Io(){return uv}var cv=y({},Ri,{key:function(t){if(t.key){var e=lv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ov[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Io,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fv=ce(cv),dv=y({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=ce(dv),hv=y({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Io}),mv=ce(hv),pv=y({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),gv=ce(pv),yv=y({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vv=ce(yv),bv=y({},ta,{newState:0,oldState:0}),xv=ce(bv),Sv=[9,13,27,32],ts=nn&&"CompositionEvent"in window,wi=null;nn&&"documentMode"in document&&(wi=document.documentMode);var Tv=nn&&"TextEvent"in window&&!wi,Zf=nn&&(!ts||wi&&8<wi&&11>=wi),Qf=" ",Kf=!1;function Jf(t,e){switch(t){case"keyup":return Sv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ka=!1;function Av(t,e){switch(t){case"compositionend":return Ff(e);case"keypress":return e.which!==32?null:(Kf=!0,Qf);case"textInput":return t=e.data,t===Qf&&Kf?null:t;default:return null}}function Ov(t,e){if(ka)return t==="compositionend"||!ts&&Jf(t,e)?(t=Lf(),Ir=Jo=On=null,ka=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zf&&e.locale!=="ko"?null:e.data;default:return null}}var Mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Mv[t.type]:e==="textarea"}function $f(t,e,n,r){za?_a?_a.push(r):_a=[r]:za=r,e=Yl(e,"onChange"),0<e.length&&(n=new nl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zi=null,_i=null;function Dv(t){_m(t,0)}function il(t){var e=Mi(t);if(kf(e))return t}function If(t,e){if(t==="change")return e}var td=!1;if(nn){var es;if(nn){var ns="oninput"in document;if(!ns){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),ns=typeof ed.oninput=="function"}es=ns}else es=!1;td=es&&(!document.documentMode||9<document.documentMode)}function nd(){zi&&(zi.detachEvent("onpropertychange",ad),_i=zi=null)}function ad(t){if(t.propertyName==="value"&&il(_i)){var e=[];$f(e,_i,t,Zo(t)),qf(Dv,e)}}function Ev(t,e,n){t==="focusin"?(nd(),zi=e,_i=n,zi.attachEvent("onpropertychange",ad)):t==="focusout"&&nd()}function Rv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(_i)}function Cv(t,e){if(t==="click")return il(e)}function wv(t,e){if(t==="input"||t==="change")return il(e)}function zv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ve=typeof Object.is=="function"?Object.is:zv;function ki(t,e){if(ve(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!zo.call(e,o)||!ve(t[o],e[o]))return!1}return!0}function id(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rd(t,e){var n=id(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=id(n)}}function ld(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ld(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function od(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Wr(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wr(t.document)}return e}function as(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var _v=nn&&"documentMode"in document&&11>=document.documentMode,Na=null,is=null,Ni=null,rs=!1;function sd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rs||Na==null||Na!==Wr(r)||(r=Na,"selectionStart"in r&&as(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ni&&ki(Ni,r)||(Ni=r,r=Yl(is,"onSelect"),0<r.length&&(e=new nl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Na)))}function ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Va={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionrun:ea("Transition","TransitionRun"),transitionstart:ea("Transition","TransitionStart"),transitioncancel:ea("Transition","TransitionCancel"),transitionend:ea("Transition","TransitionEnd")},ls={},ud={};nn&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function na(t){if(ls[t])return ls[t];if(!Va[t])return t;var e=Va[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ud)return ls[t]=e[n];return t}var cd=na("animationend"),fd=na("animationiteration"),dd=na("animationstart"),kv=na("transitionrun"),Nv=na("transitionstart"),Vv=na("transitioncancel"),hd=na("transitionend"),md=new Map,os="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");os.push("scrollEnd");function He(t,e){md.set(t,e),In(e,[t])}var pd=new WeakMap;function Re(t,e){if(typeof t=="object"&&t!==null){var n=pd.get(t);return n!==void 0?n:(e={value:t,source:e,stack:zf(e)},pd.set(t,e),e)}return{value:t,source:e,stack:zf(e)}}var Ce=[],ja=0,ss=0;function rl(){for(var t=ja,e=ss=ja=0;e<t;){var n=Ce[e];Ce[e++]=null;var r=Ce[e];Ce[e++]=null;var o=Ce[e];Ce[e++]=null;var u=Ce[e];if(Ce[e++]=null,r!==null&&o!==null){var h=r.pending;h===null?o.next=o:(o.next=h.next,h.next=o),r.pending=o}u!==0&&gd(n,o,u)}}function ll(t,e,n,r){Ce[ja++]=t,Ce[ja++]=e,Ce[ja++]=n,Ce[ja++]=r,ss|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function us(t,e,n,r){return ll(t,e,n,r),ol(t)}function Ua(t,e){return ll(t,null,null,e),ol(t)}function gd(t,e,n){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n);for(var o=!1,u=t.return;u!==null;)u.childLanes|=n,r=u.alternate,r!==null&&(r.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(o=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,o&&e!==null&&(o=31-ye(n),t=u.hiddenUpdates,r=t[o],r===null?t[o]=[e]:r.push(e),e.lane=n|536870912),u):null}function ol(t){if(50<rr)throw rr=0,pu=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ba={};function jv(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(t,e,n,r){return new jv(t,e,n,r)}function cs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function an(t,e){var n=t.alternate;return n===null?(n=be(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function yd(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function sl(t,e,n,r,o,u){var h=0;if(r=t,typeof t=="function")cs(t)&&(h=1);else if(typeof t=="string")h=Bb(t,n,I.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ct:return t=be(31,n,e,o),t.elementType=ct,t.lanes=u,t;case M:return aa(n.children,o,u,e);case C:h=8,o|=24;break;case U:return t=be(12,n,e,o|2),t.elementType=U,t.lanes=u,t;case L:return t=be(13,n,e,o),t.elementType=L,t.lanes=u,t;case nt:return t=be(19,n,e,o),t.elementType=nt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q:case H:h=10;break t;case Y:h=9;break t;case W:h=11;break t;case lt:h=14;break t;case $:h=16,r=null;break t}h=29,n=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=be(h,n,e,o),e.elementType=t,e.type=r,e.lanes=u,e}function aa(t,e,n,r){return t=be(7,t,r,e),t.lanes=n,t}function fs(t,e,n){return t=be(6,t,null,e),t.lanes=n,t}function ds(t,e,n){return e=be(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ha=[],qa=0,ul=null,cl=0,we=[],ze=0,ia=null,rn=1,ln="";function ra(t,e){Ha[qa++]=cl,Ha[qa++]=ul,ul=t,cl=e}function vd(t,e,n){we[ze++]=rn,we[ze++]=ln,we[ze++]=ia,ia=t;var r=rn;t=ln;var o=32-ye(r)-1;r&=~(1<<o),n+=1;var u=32-ye(e)+o;if(30<u){var h=o-o%5;u=(r&(1<<h)-1).toString(32),r>>=h,o-=h,rn=1<<32-ye(e)+o|n<<o|r,ln=u+t}else rn=1<<u|n<<o|r,ln=t}function hs(t){t.return!==null&&(ra(t,1),vd(t,1,0))}function ms(t){for(;t===ul;)ul=Ha[--qa],Ha[qa]=null,cl=Ha[--qa],Ha[qa]=null;for(;t===ia;)ia=we[--ze],we[ze]=null,ln=we[--ze],we[ze]=null,rn=we[--ze],we[ze]=null}var oe=null,kt=null,vt=!1,la=null,Qe=!1,ps=Error(s(519));function oa(t){var e=Error(s(418,""));throw Ui(Re(e,t)),ps}function bd(t){var e=t.stateNode,n=t.type,r=t.memoizedProps;switch(e[ae]=t,e[ue]=r,n){case"dialog":dt("cancel",e),dt("close",e);break;case"iframe":case"object":case"embed":dt("load",e);break;case"video":case"audio":for(n=0;n<or.length;n++)dt(or[n],e);break;case"source":dt("error",e);break;case"img":case"image":case"link":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"input":dt("invalid",e),Nf(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Fr(e);break;case"select":dt("invalid",e);break;case"textarea":dt("invalid",e),jf(e,r.value,r.defaultValue,r.children),Fr(e)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||r.suppressHydrationWarning===!0||jm(e.textContent,n)?(r.popover!=null&&(dt("beforetoggle",e),dt("toggle",e)),r.onScroll!=null&&dt("scroll",e),r.onScrollEnd!=null&&dt("scrollend",e),r.onClick!=null&&(e.onclick=Xl),e=!0):e=!1,e||oa(t)}function xd(t){for(oe=t.return;oe;)switch(oe.tag){case 5:case 13:Qe=!1;return;case 27:case 3:Qe=!0;return;default:oe=oe.return}}function Vi(t){if(t!==oe)return!1;if(!vt)return xd(t),vt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||zu(t.type,t.memoizedProps)),n=!n),n&&kt&&oa(t),xd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){kt=Le(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}kt=null}}else e===27?(e=kt,qn(t.type)?(t=Vu,Vu=null,kt=t):kt=e):kt=oe?Le(t.stateNode.nextSibling):null;return!0}function ji(){kt=oe=null,vt=!1}function Sd(){var t=la;return t!==null&&(he===null?he=t:he.push.apply(he,t),la=null),t}function Ui(t){la===null?la=[t]:la.push(t)}var gs=B(null),sa=null,on=null;function Mn(t,e,n){X(gs,e._currentValue),e._currentValue=n}function sn(t){t._currentValue=gs.current,G(gs)}function ys(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vs(t,e,n,r){var o=t.child;for(o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){var h=o.child;u=u.firstContext;t:for(;u!==null;){var v=u;u=o;for(var x=0;x<e.length;x++)if(v.context===e[x]){u.lanes|=n,v=u.alternate,v!==null&&(v.lanes|=n),ys(u.return,n,t),r||(h=null);break t}u=v.next}}else if(o.tag===18){if(h=o.return,h===null)throw Error(s(341));h.lanes|=n,u=h.alternate,u!==null&&(u.lanes|=n),ys(h,n,t),h=null}else h=o.child;if(h!==null)h.return=o;else for(h=o;h!==null;){if(h===t){h=null;break}if(o=h.sibling,o!==null){o.return=h.return,h=o;break}h=h.return}o=h}}function Bi(t,e,n,r){t=null;for(var o=e,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var h=o.alternate;if(h===null)throw Error(s(387));if(h=h.memoizedProps,h!==null){var v=o.type;ve(o.pendingProps.value,h.value)||(t!==null?t.push(v):t=[v])}}else if(o===pe.current){if(h=o.alternate,h===null)throw Error(s(387));h.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(t!==null?t.push(hr):t=[hr])}o=o.return}t!==null&&vs(e,t,n,r),e.flags|=262144}function fl(t){for(t=t.firstContext;t!==null;){if(!ve(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ua(t){sa=t,on=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ie(t){return Td(sa,t)}function dl(t,e){return sa===null&&ua(t),Td(t,e)}function Td(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},on===null){if(t===null)throw Error(s(308));on=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else on=on.next=e;return n}var Uv=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Bv=a.unstable_scheduleCallback,Hv=a.unstable_NormalPriority,Gt={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bs(){return{controller:new Uv,data:new Map,refCount:0}}function Hi(t){t.refCount--,t.refCount===0&&Bv(Hv,function(){t.controller.abort()})}var qi=null,xs=0,La=0,Pa=null;function qv(t,e){if(qi===null){var n=qi=[];xs=0,La=Tu(),Pa={status:"pending",value:void 0,then:function(r){n.push(r)}}}return xs++,e.then(Ad,Ad),e}function Ad(){if(--xs===0&&qi!==null){Pa!==null&&(Pa.status="fulfilled");var t=qi;qi=null,La=0,Pa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Lv(t,e){var n=[],r={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var o=0;o<n.length;o++)(0,n[o])(e)},function(o){for(r.status="rejected",r.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),r}var Od=k.S;k.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&qv(t,e),Od!==null&&Od(t,e)};var ca=B(null);function Ss(){var t=ca.current;return t!==null?t:Dt.pooledCache}function hl(t,e){e===null?X(ca,ca.current):X(ca,e.pool)}function Md(){var t=Ss();return t===null?null:{parent:Gt._currentValue,pool:t}}var Li=Error(s(460)),Dd=Error(s(474)),ml=Error(s(542)),Ts={then:function(){}};function Ed(t){return t=t.status,t==="fulfilled"||t==="rejected"}function pl(){}function Rd(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(pl,pl),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,wd(t),t;default:if(typeof e.status=="string")e.then(pl,pl);else{if(t=Dt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var o=e;o.status="fulfilled",o.value=r}},function(r){if(e.status==="pending"){var o=e;o.status="rejected",o.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,wd(t),t}throw Pi=e,Li}}var Pi=null;function Cd(){if(Pi===null)throw Error(s(459));var t=Pi;return Pi=null,t}function wd(t){if(t===Li||t===ml)throw Error(s(483))}var Dn=!1;function As(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Os(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function En(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(bt&2)!==0){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,e=ol(t),gd(t,null,n),e}return ll(t,r,e,n),ol(t)}function Yi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Af(t,n)}}function Ms(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?o=u=h:u=u.next=h,n=n.next}while(n!==null);u===null?o=u=e:u=u.next=e}else o=u=e;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Ds=!1;function Xi(){if(Ds){var t=Pa;if(t!==null)throw t}}function Gi(t,e,n,r){Ds=!1;var o=t.updateQueue;Dn=!1;var u=o.firstBaseUpdate,h=o.lastBaseUpdate,v=o.shared.pending;if(v!==null){o.shared.pending=null;var x=v,E=x.next;x.next=null,h===null?u=E:h.next=E,h=x;var _=t.alternate;_!==null&&(_=_.updateQueue,v=_.lastBaseUpdate,v!==h&&(v===null?_.firstBaseUpdate=E:v.next=E,_.lastBaseUpdate=x))}if(u!==null){var V=o.baseState;h=0,_=E=x=null,v=u;do{var w=v.lane&-536870913,z=w!==v.lane;if(z?(pt&w)===w:(r&w)===w){w!==0&&w===La&&(Ds=!0),_!==null&&(_=_.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var at=t,tt=v;w=e;var At=n;switch(tt.tag){case 1:if(at=tt.payload,typeof at=="function"){V=at.call(At,V,w);break t}V=at;break t;case 3:at.flags=at.flags&-65537|128;case 0:if(at=tt.payload,w=typeof at=="function"?at.call(At,V,w):at,w==null)break t;V=y({},V,w);break t;case 2:Dn=!0}}w=v.callback,w!==null&&(t.flags|=64,z&&(t.flags|=8192),z=o.callbacks,z===null?o.callbacks=[w]:z.push(w))}else z={lane:w,tag:v.tag,payload:v.payload,callback:v.callback,next:null},_===null?(E=_=z,x=V):_=_.next=z,h|=w;if(v=v.next,v===null){if(v=o.shared.pending,v===null)break;z=v,v=z.next,z.next=null,o.lastBaseUpdate=z,o.shared.pending=null}}while(!0);_===null&&(x=V),o.baseState=x,o.firstBaseUpdate=E,o.lastBaseUpdate=_,u===null&&(o.shared.lanes=0),jn|=h,t.lanes=h,t.memoizedState=V}}function zd(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function _d(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)zd(n[t],e)}var Ya=B(null),gl=B(0);function kd(t,e){t=pn,X(gl,t),X(Ya,e),pn=t|e.baseLanes}function Es(){X(gl,pn),X(Ya,Ya.current)}function Rs(){pn=gl.current,G(Ya),G(gl)}var Cn=0,st=null,St=null,Ht=null,yl=!1,Xa=!1,fa=!1,vl=0,Zi=0,Ga=null,Pv=0;function jt(){throw Error(s(321))}function Cs(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ve(t[n],e[n]))return!1;return!0}function ws(t,e,n,r,o,u){return Cn=u,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,k.H=t===null||t.memoizedState===null?gh:yh,fa=!1,u=n(r,o),fa=!1,Xa&&(u=Vd(e,n,r,o)),Nd(t),u}function Nd(t){k.H=Ol;var e=St!==null&&St.next!==null;if(Cn=0,Ht=St=st=null,yl=!1,Zi=0,Ga=null,e)throw Error(s(300));t===null||Jt||(t=t.dependencies,t!==null&&fl(t)&&(Jt=!0))}function Vd(t,e,n,r){st=t;var o=0;do{if(Xa&&(Ga=null),Zi=0,Xa=!1,25<=o)throw Error(s(301));if(o+=1,Ht=St=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}k.H=Jv,u=e(n,r)}while(Xa);return u}function Yv(){var t=k.H,e=t.useState()[0];return e=typeof e.then=="function"?Qi(e):e,t=t.useState()[0],(St!==null?St.memoizedState:null)!==t&&(st.flags|=1024),e}function zs(){var t=vl!==0;return vl=0,t}function _s(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function ks(t){if(yl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}yl=!1}Cn=0,Ht=St=st=null,Xa=!1,Zi=vl=0,Ga=null}function fe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?st.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function qt(){if(St===null){var t=st.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ht===null?st.memoizedState:Ht.next;if(e!==null)Ht=e,St=t;else{if(t===null)throw st.alternate===null?Error(s(467)):Error(s(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ht===null?st.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Ns(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qi(t){var e=Zi;return Zi+=1,Ga===null&&(Ga=[]),t=Rd(Ga,t,e),e=st,(Ht===null?e.memoizedState:Ht.next)===null&&(e=e.alternate,k.H=e===null||e.memoizedState===null?gh:yh),t}function bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qi(t);if(t.$$typeof===H)return ie(t)}throw Error(s(438,String(t)))}function Vs(t){var e=null,n=st.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var r=st.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(o){return o.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Ns(),st.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),r=0;r<t;r++)n[r]=Pt;return e.index++,n}function un(t,e){return typeof e=="function"?e(t):e}function xl(t){var e=qt();return js(e,St,t)}function js(t,e,n){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var o=t.baseQueue,u=r.pending;if(u!==null){if(o!==null){var h=o.next;o.next=u.next,u.next=h}e.baseQueue=o=u,r.pending=null}if(u=t.baseState,o===null)t.memoizedState=u;else{e=o.next;var v=h=null,x=null,E=e,_=!1;do{var V=E.lane&-536870913;if(V!==E.lane?(pt&V)===V:(Cn&V)===V){var w=E.revertLane;if(w===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),V===La&&(_=!0);else if((Cn&w)===w){E=E.next,w===La&&(_=!0);continue}else V={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(v=x=V,h=u):x=x.next=V,st.lanes|=w,jn|=w;V=E.action,fa&&n(u,V),u=E.hasEagerState?E.eagerState:n(u,V)}else w={lane:V,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(v=x=w,h=u):x=x.next=w,st.lanes|=V,jn|=V;E=E.next}while(E!==null&&E!==e);if(x===null?h=u:x.next=v,!ve(u,t.memoizedState)&&(Jt=!0,_&&(n=Pa,n!==null)))throw n;t.memoizedState=u,t.baseState=h,t.baseQueue=x,r.lastRenderedState=u}return o===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Us(t){var e=qt(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var r=n.dispatch,o=n.pending,u=e.memoizedState;if(o!==null){n.pending=null;var h=o=o.next;do u=t(u,h.action),h=h.next;while(h!==o);ve(u,e.memoizedState)||(Jt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,r]}function jd(t,e,n){var r=st,o=qt(),u=vt;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var h=!ve((St||o).memoizedState,n);h&&(o.memoizedState=n,Jt=!0),o=o.queue;var v=Hd.bind(null,r,o,t);if(Ki(2048,8,v,[t]),o.getSnapshot!==e||h||Ht!==null&&Ht.memoizedState.tag&1){if(r.flags|=2048,Za(9,Sl(),Bd.bind(null,r,o,n,e),null),Dt===null)throw Error(s(349));u||(Cn&124)!==0||Ud(r,e,n)}return n}function Ud(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=st.updateQueue,e===null?(e=Ns(),st.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bd(t,e,n,r){e.value=n,e.getSnapshot=r,qd(e)&&Ld(t)}function Hd(t,e,n){return n(function(){qd(e)&&Ld(t)})}function qd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ve(t,n)}catch{return!0}}function Ld(t){var e=Ua(t,2);e!==null&&Oe(e,t,2)}function Bs(t){var e=fe();if(typeof t=="function"){var n=t;if(t=n(),fa){Tn(!0);try{n()}finally{Tn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:t},e}function Pd(t,e,n,r){return t.baseState=n,js(t,St,typeof r=="function"?r:un)}function Xv(t,e,n,r,o){if(Al(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:o,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){u.listeners.push(h)}};k.T!==null?n(!0):u.isTransition=!1,r(u),n=e.pending,n===null?(u.next=e.pending=u,Yd(e,u)):(u.next=n.next,e.pending=n.next=u)}}function Yd(t,e){var n=e.action,r=e.payload,o=t.state;if(e.isTransition){var u=k.T,h={};k.T=h;try{var v=n(o,r),x=k.S;x!==null&&x(h,v),Xd(t,e,v)}catch(E){Hs(t,e,E)}finally{k.T=u}}else try{u=n(o,r),Xd(t,e,u)}catch(E){Hs(t,e,E)}}function Xd(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Gd(t,e,r)},function(r){return Hs(t,e,r)}):Gd(t,e,n)}function Gd(t,e,n){e.status="fulfilled",e.value=n,Zd(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Yd(t,n)))}function Hs(t,e,n){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=n,Zd(e),e=e.next;while(e!==r)}t.action=null}function Zd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Qd(t,e){return e}function Kd(t,e){if(vt){var n=Dt.formState;if(n!==null){t:{var r=st;if(vt){if(kt){e:{for(var o=kt,u=Qe;o.nodeType!==8;){if(!u){o=null;break e}if(o=Le(o.nextSibling),o===null){o=null;break e}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){kt=Le(o.nextSibling),r=o.data==="F!";break t}}oa(r)}r=!1}r&&(e=n[0])}}return n=fe(),n.memoizedState=n.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qd,lastRenderedState:e},n.queue=r,n=hh.bind(null,st,r),r.dispatch=n,r=Bs(!1),u=Xs.bind(null,st,!1,r.queue),r=fe(),o={state:e,dispatch:null,action:t,pending:null},r.queue=o,n=Xv.bind(null,st,o,u,n),o.dispatch=n,r.memoizedState=t,[e,n,!1]}function Jd(t){var e=qt();return Fd(e,St,t)}function Fd(t,e,n){if(e=js(t,e,Qd)[0],t=xl(un)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Qi(e)}catch(h){throw h===Li?ml:h}else r=e;e=qt();var o=e.queue,u=o.dispatch;return n!==e.memoizedState&&(st.flags|=2048,Za(9,Sl(),Gv.bind(null,o,n),null)),[r,u,t]}function Gv(t,e){t.action=e}function Wd(t){var e=qt(),n=St;if(n!==null)return Fd(e,n,t);qt(),e=e.memoizedState,n=qt();var r=n.queue.dispatch;return n.memoizedState=t,[e,r,!1]}function Za(t,e,n,r){return t={tag:t,create:n,deps:r,inst:e,next:null},e=st.updateQueue,e===null&&(e=Ns(),st.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t),t}function Sl(){return{destroy:void 0,resource:void 0}}function $d(){return qt().memoizedState}function Tl(t,e,n,r){var o=fe();r=r===void 0?null:r,st.flags|=t,o.memoizedState=Za(1|e,Sl(),n,r)}function Ki(t,e,n,r){var o=qt();r=r===void 0?null:r;var u=o.memoizedState.inst;St!==null&&r!==null&&Cs(r,St.memoizedState.deps)?o.memoizedState=Za(e,u,n,r):(st.flags|=t,o.memoizedState=Za(1|e,u,n,r))}function Id(t,e){Tl(8390656,8,t,e)}function th(t,e){Ki(2048,8,t,e)}function eh(t,e){return Ki(4,2,t,e)}function nh(t,e){return Ki(4,4,t,e)}function ah(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ih(t,e,n){n=n!=null?n.concat([t]):null,Ki(4,4,ah.bind(null,e,t),n)}function qs(){}function rh(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return e!==null&&Cs(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lh(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;if(e!==null&&Cs(e,r[1]))return r[0];if(r=t(),fa){Tn(!0);try{t()}finally{Tn(!1)}}return n.memoizedState=[r,e],r}function Ls(t,e,n){return n===void 0||(Cn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=um(),st.lanes|=t,jn|=t,n)}function oh(t,e,n,r){return ve(n,e)?n:Ya.current!==null?(t=Ls(t,n,r),ve(t,e)||(Jt=!0),t):(Cn&42)===0?(Jt=!0,t.memoizedState=n):(t=um(),st.lanes|=t,jn|=t,e)}function sh(t,e,n,r,o){var u=P.p;P.p=u!==0&&8>u?u:8;var h=k.T,v={};k.T=v,Xs(t,!1,e,n);try{var x=o(),E=k.S;if(E!==null&&E(v,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var _=Lv(x,r);Ji(t,e,_,Ae(t))}else Ji(t,e,r,Ae(t))}catch(V){Ji(t,e,{then:function(){},status:"rejected",reason:V},Ae())}finally{P.p=u,k.T=h}}function Zv(){}function Ps(t,e,n,r){if(t.tag!==5)throw Error(s(476));var o=uh(t).queue;sh(t,o,e,K,n===null?Zv:function(){return ch(t),n(r)})}function uh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:K},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ch(t){var e=uh(t).next.queue;Ji(t,e,{},Ae())}function Ys(){return ie(hr)}function fh(){return qt().memoizedState}function dh(){return qt().memoizedState}function Qv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Ae();t=En(n);var r=Rn(e,t,n);r!==null&&(Oe(r,e,n),Yi(r,e,n)),e={cache:bs()},t.payload=e;return}e=e.return}}function Kv(t,e,n){var r=Ae();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Al(t)?mh(e,n):(n=us(t,e,n,r),n!==null&&(Oe(n,t,r),ph(n,e,r)))}function hh(t,e,n){var r=Ae();Ji(t,e,n,r)}function Ji(t,e,n,r){var o={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Al(t))mh(e,o);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var h=e.lastRenderedState,v=u(h,n);if(o.hasEagerState=!0,o.eagerState=v,ve(v,h))return ll(t,e,o,0),Dt===null&&rl(),!1}catch{}finally{}if(n=us(t,e,o,r),n!==null)return Oe(n,t,r),ph(n,e,r),!0}return!1}function Xs(t,e,n,r){if(r={lane:2,revertLane:Tu(),action:r,hasEagerState:!1,eagerState:null,next:null},Al(t)){if(e)throw Error(s(479))}else e=us(t,n,r,2),e!==null&&Oe(e,t,2)}function Al(t){var e=t.alternate;return t===st||e!==null&&e===st}function mh(t,e){Xa=yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ph(t,e,n){if((n&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Af(t,n)}}var Ol={readContext:ie,use:bl,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useLayoutEffect:jt,useInsertionEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useSyncExternalStore:jt,useId:jt,useHostTransitionStatus:jt,useFormState:jt,useActionState:jt,useOptimistic:jt,useMemoCache:jt,useCacheRefresh:jt},gh={readContext:ie,use:bl,useCallback:function(t,e){return fe().memoizedState=[t,e===void 0?null:e],t},useContext:ie,useEffect:Id,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Tl(4194308,4,ah.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tl(4194308,4,t,e)},useInsertionEffect:function(t,e){Tl(4,2,t,e)},useMemo:function(t,e){var n=fe();e=e===void 0?null:e;var r=t();if(fa){Tn(!0);try{t()}finally{Tn(!1)}}return n.memoizedState=[r,e],r},useReducer:function(t,e,n){var r=fe();if(n!==void 0){var o=n(e);if(fa){Tn(!0);try{n(e)}finally{Tn(!1)}}}else o=e;return r.memoizedState=r.baseState=o,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},r.queue=t,t=t.dispatch=Kv.bind(null,st,t),[r.memoizedState,t]},useRef:function(t){var e=fe();return t={current:t},e.memoizedState=t},useState:function(t){t=Bs(t);var e=t.queue,n=hh.bind(null,st,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:qs,useDeferredValue:function(t,e){var n=fe();return Ls(n,t,e)},useTransition:function(){var t=Bs(!1);return t=sh.bind(null,st,t.queue,!0,!1),fe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var r=st,o=fe();if(vt){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),Dt===null)throw Error(s(349));(pt&124)!==0||Ud(r,e,n)}o.memoizedState=n;var u={value:n,getSnapshot:e};return o.queue=u,Id(Hd.bind(null,r,u,t),[t]),r.flags|=2048,Za(9,Sl(),Bd.bind(null,r,u,n,e),null),n},useId:function(){var t=fe(),e=Dt.identifierPrefix;if(vt){var n=ln,r=rn;n=(r&~(1<<32-ye(r)-1)).toString(32)+n,e="«"+e+"R"+n,n=vl++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=Pv++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Ys,useFormState:Kd,useActionState:Kd,useOptimistic:function(t){var e=fe();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Xs.bind(null,st,!0,n),n.dispatch=e,[t,e]},useMemoCache:Vs,useCacheRefresh:function(){return fe().memoizedState=Qv.bind(null,st)}},yh={readContext:ie,use:bl,useCallback:rh,useContext:ie,useEffect:th,useImperativeHandle:ih,useInsertionEffect:eh,useLayoutEffect:nh,useMemo:lh,useReducer:xl,useRef:$d,useState:function(){return xl(un)},useDebugValue:qs,useDeferredValue:function(t,e){var n=qt();return oh(n,St.memoizedState,t,e)},useTransition:function(){var t=xl(un)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Qi(t),e]},useSyncExternalStore:jd,useId:fh,useHostTransitionStatus:Ys,useFormState:Jd,useActionState:Jd,useOptimistic:function(t,e){var n=qt();return Pd(n,St,t,e)},useMemoCache:Vs,useCacheRefresh:dh},Jv={readContext:ie,use:bl,useCallback:rh,useContext:ie,useEffect:th,useImperativeHandle:ih,useInsertionEffect:eh,useLayoutEffect:nh,useMemo:lh,useReducer:Us,useRef:$d,useState:function(){return Us(un)},useDebugValue:qs,useDeferredValue:function(t,e){var n=qt();return St===null?Ls(n,t,e):oh(n,St.memoizedState,t,e)},useTransition:function(){var t=Us(un)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Qi(t),e]},useSyncExternalStore:jd,useId:fh,useHostTransitionStatus:Ys,useFormState:Wd,useActionState:Wd,useOptimistic:function(t,e){var n=qt();return St!==null?Pd(n,St,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Vs,useCacheRefresh:dh},Qa=null,Fi=0;function Ml(t){var e=Fi;return Fi+=1,Qa===null&&(Qa=[]),Rd(Qa,t,e)}function Wi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Dl(t,e){throw e.$$typeof===b?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function vh(t){var e=t._init;return e(t._payload)}function bh(t){function e(O,A){if(t){var D=O.deletions;D===null?(O.deletions=[A],O.flags|=16):D.push(A)}}function n(O,A){if(!t)return null;for(;A!==null;)e(O,A),A=A.sibling;return null}function r(O){for(var A=new Map;O!==null;)O.key!==null?A.set(O.key,O):A.set(O.index,O),O=O.sibling;return A}function o(O,A){return O=an(O,A),O.index=0,O.sibling=null,O}function u(O,A,D){return O.index=D,t?(D=O.alternate,D!==null?(D=D.index,D<A?(O.flags|=67108866,A):D):(O.flags|=67108866,A)):(O.flags|=1048576,A)}function h(O){return t&&O.alternate===null&&(O.flags|=67108866),O}function v(O,A,D,N){return A===null||A.tag!==6?(A=fs(D,O.mode,N),A.return=O,A):(A=o(A,D),A.return=O,A)}function x(O,A,D,N){var Q=D.type;return Q===M?_(O,A,D.props.children,N,D.key):A!==null&&(A.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===$&&vh(Q)===A.type)?(A=o(A,D.props),Wi(A,D),A.return=O,A):(A=sl(D.type,D.key,D.props,null,O.mode,N),Wi(A,D),A.return=O,A)}function E(O,A,D,N){return A===null||A.tag!==4||A.stateNode.containerInfo!==D.containerInfo||A.stateNode.implementation!==D.implementation?(A=ds(D,O.mode,N),A.return=O,A):(A=o(A,D.children||[]),A.return=O,A)}function _(O,A,D,N,Q){return A===null||A.tag!==7?(A=aa(D,O.mode,N,Q),A.return=O,A):(A=o(A,D),A.return=O,A)}function V(O,A,D){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=fs(""+A,O.mode,D),A.return=O,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case S:return D=sl(A.type,A.key,A.props,null,O.mode,D),Wi(D,A),D.return=O,D;case R:return A=ds(A,O.mode,D),A.return=O,A;case $:var N=A._init;return A=N(A._payload),V(O,A,D)}if(Xt(A)||Yt(A))return A=aa(A,O.mode,D,null),A.return=O,A;if(typeof A.then=="function")return V(O,Ml(A),D);if(A.$$typeof===H)return V(O,dl(O,A),D);Dl(O,A)}return null}function w(O,A,D,N){var Q=A!==null?A.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return Q!==null?null:v(O,A,""+D,N);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case S:return D.key===Q?x(O,A,D,N):null;case R:return D.key===Q?E(O,A,D,N):null;case $:return Q=D._init,D=Q(D._payload),w(O,A,D,N)}if(Xt(D)||Yt(D))return Q!==null?null:_(O,A,D,N,null);if(typeof D.then=="function")return w(O,A,Ml(D),N);if(D.$$typeof===H)return w(O,A,dl(O,D),N);Dl(O,D)}return null}function z(O,A,D,N,Q){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return O=O.get(D)||null,v(A,O,""+N,Q);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case S:return O=O.get(N.key===null?D:N.key)||null,x(A,O,N,Q);case R:return O=O.get(N.key===null?D:N.key)||null,E(A,O,N,Q);case $:var ut=N._init;return N=ut(N._payload),z(O,A,D,N,Q)}if(Xt(N)||Yt(N))return O=O.get(D)||null,_(A,O,N,Q,null);if(typeof N.then=="function")return z(O,A,D,Ml(N),Q);if(N.$$typeof===H)return z(O,A,D,dl(A,N),Q);Dl(A,N)}return null}function at(O,A,D,N){for(var Q=null,ut=null,F=A,et=A=0,Wt=null;F!==null&&et<D.length;et++){F.index>et?(Wt=F,F=null):Wt=F.sibling;var yt=w(O,F,D[et],N);if(yt===null){F===null&&(F=Wt);break}t&&F&&yt.alternate===null&&e(O,F),A=u(yt,A,et),ut===null?Q=yt:ut.sibling=yt,ut=yt,F=Wt}if(et===D.length)return n(O,F),vt&&ra(O,et),Q;if(F===null){for(;et<D.length;et++)F=V(O,D[et],N),F!==null&&(A=u(F,A,et),ut===null?Q=F:ut.sibling=F,ut=F);return vt&&ra(O,et),Q}for(F=r(F);et<D.length;et++)Wt=z(F,O,et,D[et],N),Wt!==null&&(t&&Wt.alternate!==null&&F.delete(Wt.key===null?et:Wt.key),A=u(Wt,A,et),ut===null?Q=Wt:ut.sibling=Wt,ut=Wt);return t&&F.forEach(function(Gn){return e(O,Gn)}),vt&&ra(O,et),Q}function tt(O,A,D,N){if(D==null)throw Error(s(151));for(var Q=null,ut=null,F=A,et=A=0,Wt=null,yt=D.next();F!==null&&!yt.done;et++,yt=D.next()){F.index>et?(Wt=F,F=null):Wt=F.sibling;var Gn=w(O,F,yt.value,N);if(Gn===null){F===null&&(F=Wt);break}t&&F&&Gn.alternate===null&&e(O,F),A=u(Gn,A,et),ut===null?Q=Gn:ut.sibling=Gn,ut=Gn,F=Wt}if(yt.done)return n(O,F),vt&&ra(O,et),Q;if(F===null){for(;!yt.done;et++,yt=D.next())yt=V(O,yt.value,N),yt!==null&&(A=u(yt,A,et),ut===null?Q=yt:ut.sibling=yt,ut=yt);return vt&&ra(O,et),Q}for(F=r(F);!yt.done;et++,yt=D.next())yt=z(F,O,et,yt.value,N),yt!==null&&(t&&yt.alternate!==null&&F.delete(yt.key===null?et:yt.key),A=u(yt,A,et),ut===null?Q=yt:ut.sibling=yt,ut=yt);return t&&F.forEach(function(Fb){return e(O,Fb)}),vt&&ra(O,et),Q}function At(O,A,D,N){if(typeof D=="object"&&D!==null&&D.type===M&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case S:t:{for(var Q=D.key;A!==null;){if(A.key===Q){if(Q=D.type,Q===M){if(A.tag===7){n(O,A.sibling),N=o(A,D.props.children),N.return=O,O=N;break t}}else if(A.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===$&&vh(Q)===A.type){n(O,A.sibling),N=o(A,D.props),Wi(N,D),N.return=O,O=N;break t}n(O,A);break}else e(O,A);A=A.sibling}D.type===M?(N=aa(D.props.children,O.mode,N,D.key),N.return=O,O=N):(N=sl(D.type,D.key,D.props,null,O.mode,N),Wi(N,D),N.return=O,O=N)}return h(O);case R:t:{for(Q=D.key;A!==null;){if(A.key===Q)if(A.tag===4&&A.stateNode.containerInfo===D.containerInfo&&A.stateNode.implementation===D.implementation){n(O,A.sibling),N=o(A,D.children||[]),N.return=O,O=N;break t}else{n(O,A);break}else e(O,A);A=A.sibling}N=ds(D,O.mode,N),N.return=O,O=N}return h(O);case $:return Q=D._init,D=Q(D._payload),At(O,A,D,N)}if(Xt(D))return at(O,A,D,N);if(Yt(D)){if(Q=Yt(D),typeof Q!="function")throw Error(s(150));return D=Q.call(D),tt(O,A,D,N)}if(typeof D.then=="function")return At(O,A,Ml(D),N);if(D.$$typeof===H)return At(O,A,dl(O,D),N);Dl(O,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,A!==null&&A.tag===6?(n(O,A.sibling),N=o(A,D),N.return=O,O=N):(n(O,A),N=fs(D,O.mode,N),N.return=O,O=N),h(O)):n(O,A)}return function(O,A,D,N){try{Fi=0;var Q=At(O,A,D,N);return Qa=null,Q}catch(F){if(F===Li||F===ml)throw F;var ut=be(29,F,null,O.mode);return ut.lanes=N,ut.return=O,ut}finally{}}}var Ka=bh(!0),xh=bh(!1),_e=B(null),Ke=null;function wn(t){var e=t.alternate;X(Zt,Zt.current&1),X(_e,t),Ke===null&&(e===null||Ya.current!==null||e.memoizedState!==null)&&(Ke=t)}function Sh(t){if(t.tag===22){if(X(Zt,Zt.current),X(_e,t),Ke===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ke=t)}}else zn()}function zn(){X(Zt,Zt.current),X(_e,_e.current)}function cn(t){G(_e),Ke===t&&(Ke=null),G(Zt)}var Zt=B(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Nu(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Gs(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:y({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zs={enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ae(),o=En(r);o.payload=e,n!=null&&(o.callback=n),e=Rn(t,o,r),e!==null&&(Oe(e,t,r),Yi(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ae(),o=En(r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Rn(t,o,r),e!==null&&(Oe(e,t,r),Yi(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ae(),r=En(n);r.tag=2,e!=null&&(r.callback=e),e=Rn(t,r,n),e!==null&&(Oe(e,t,n),Yi(e,t,n))}};function Th(t,e,n,r,o,u,h){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,h):e.prototype&&e.prototype.isPureReactComponent?!ki(n,r)||!ki(o,u):!0}function Ah(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zs.enqueueReplaceState(e,e.state,null)}function da(t,e){var n=e;if("ref"in e){n={};for(var r in e)r!=="ref"&&(n[r]=e[r])}if(t=t.defaultProps){n===e&&(n=y({},n));for(var o in t)n[o]===void 0&&(n[o]=t[o])}return n}var Rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Oh(t){Rl(t)}function Mh(t){console.error(t)}function Dh(t){Rl(t)}function Cl(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Eh(t,e,n){try{var r=t.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Qs(t,e,n){return n=En(n),n.tag=3,n.payload={element:null},n.callback=function(){Cl(t,e)},n}function Rh(t){return t=En(t),t.tag=3,t}function Ch(t,e,n,r){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var u=r.value;t.payload=function(){return o(u)},t.callback=function(){Eh(e,n,r)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){Eh(e,n,r),typeof o!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})})}function Fv(t,e,n,r,o){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=n.alternate,e!==null&&Bi(e,n,o,!0),n=_e.current,n!==null){switch(n.tag){case 13:return Ke===null?yu():n.alternate===null&&Nt===0&&(Nt=3),n.flags&=-257,n.flags|=65536,n.lanes=o,r===Ts?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([r]):e.add(r),bu(t,r,o)),!1;case 22:return n.flags|=65536,r===Ts?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([r]):n.add(r)),bu(t,r,o)),!1}throw Error(s(435,n.tag))}return bu(t,r,o),yu(),!1}if(vt)return e=_e.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=o,r!==ps&&(t=Error(s(422),{cause:r}),Ui(Re(t,n)))):(r!==ps&&(e=Error(s(423),{cause:r}),Ui(Re(e,n))),t=t.current.alternate,t.flags|=65536,o&=-o,t.lanes|=o,r=Re(r,n),o=Qs(t.stateNode,r,o),Ms(t,o),Nt!==4&&(Nt=2)),!1;var u=Error(s(520),{cause:r});if(u=Re(u,n),ir===null?ir=[u]:ir.push(u),Nt!==4&&(Nt=2),e===null)return!0;r=Re(r,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=o&-o,n.lanes|=t,t=Qs(n.stateNode,r,t),Ms(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Un===null||!Un.has(u))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Rh(o),Ch(o,t,n,r),Ms(n,o),!1}n=n.return}while(n!==null);return!1}var wh=Error(s(461)),Jt=!1;function $t(t,e,n,r){e.child=t===null?xh(e,null,n,r):Ka(e,t.child,n,r)}function zh(t,e,n,r,o){n=n.render;var u=e.ref;if("ref"in r){var h={};for(var v in r)v!=="ref"&&(h[v]=r[v])}else h=r;return ua(e),r=ws(t,e,n,h,u,o),v=zs(),t!==null&&!Jt?(_s(t,e,o),fn(t,e,o)):(vt&&v&&hs(e),e.flags|=1,$t(t,e,r,o),e.child)}function _h(t,e,n,r,o){if(t===null){var u=n.type;return typeof u=="function"&&!cs(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,kh(t,e,u,r,o)):(t=sl(n.type,null,r,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!eu(t,o)){var h=u.memoizedProps;if(n=n.compare,n=n!==null?n:ki,n(h,r)&&t.ref===e.ref)return fn(t,e,o)}return e.flags|=1,t=an(u,r),t.ref=e.ref,t.return=e,e.child=t}function kh(t,e,n,r,o){if(t!==null){var u=t.memoizedProps;if(ki(u,r)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=r=u,eu(t,o))(t.flags&131072)!==0&&(Jt=!0);else return e.lanes=t.lanes,fn(t,e,o)}return Ks(t,e,n,r,o)}function Nh(t,e,n){var r=e.pendingProps,o=r.children,u=t!==null?t.memoizedState:null;if(r.mode==="hidden"){if((e.flags&128)!==0){if(r=u!==null?u.baseLanes|n:n,t!==null){for(o=e.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;e.childLanes=u&~r}else e.childLanes=0,e.child=null;return Vh(t,e,r,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&hl(e,u!==null?u.cachePool:null),u!==null?kd(e,u):Es(),Sh(e);else return e.lanes=e.childLanes=536870912,Vh(t,e,u!==null?u.baseLanes|n:n,n)}else u!==null?(hl(e,u.cachePool),kd(e,u),zn(),e.memoizedState=null):(t!==null&&hl(e,null),Es(),zn());return $t(t,e,o,n),e.child}function Vh(t,e,n,r){var o=Ss();return o=o===null?null:{parent:Gt._currentValue,pool:o},e.memoizedState={baseLanes:n,cachePool:o},t!==null&&hl(e,null),Es(),Sh(e),t!==null&&Bi(t,e,r,!0),null}function wl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Ks(t,e,n,r,o){return ua(e),n=ws(t,e,n,r,void 0,o),r=zs(),t!==null&&!Jt?(_s(t,e,o),fn(t,e,o)):(vt&&r&&hs(e),e.flags|=1,$t(t,e,n,o),e.child)}function jh(t,e,n,r,o,u){return ua(e),e.updateQueue=null,n=Vd(e,r,n,o),Nd(t),r=zs(),t!==null&&!Jt?(_s(t,e,u),fn(t,e,u)):(vt&&r&&hs(e),e.flags|=1,$t(t,e,n,u),e.child)}function Uh(t,e,n,r,o){if(ua(e),e.stateNode===null){var u=Ba,h=n.contextType;typeof h=="object"&&h!==null&&(u=ie(h)),u=new n(r,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Zs,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=r,u.state=e.memoizedState,u.refs={},As(e),h=n.contextType,u.context=typeof h=="object"&&h!==null?ie(h):Ba,u.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Gs(e,n,h,r),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),h!==u.state&&Zs.enqueueReplaceState(u,u.state,null),Gi(e,r,u,o),Xi(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){u=e.stateNode;var v=e.memoizedProps,x=da(n,v);u.props=x;var E=u.context,_=n.contextType;h=Ba,typeof _=="object"&&_!==null&&(h=ie(_));var V=n.getDerivedStateFromProps;_=typeof V=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,_||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||E!==h)&&Ah(e,u,r,h),Dn=!1;var w=e.memoizedState;u.state=w,Gi(e,r,u,o),Xi(),E=e.memoizedState,v||w!==E||Dn?(typeof V=="function"&&(Gs(e,n,V,r),E=e.memoizedState),(x=Dn||Th(e,n,x,r,w,E,h))?(_||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=E),u.props=r,u.state=E,u.context=h,r=x):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,Os(t,e),h=e.memoizedProps,_=da(n,h),u.props=_,V=e.pendingProps,w=u.context,E=n.contextType,x=Ba,typeof E=="object"&&E!==null&&(x=ie(E)),v=n.getDerivedStateFromProps,(E=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==V||w!==x)&&Ah(e,u,r,x),Dn=!1,w=e.memoizedState,u.state=w,Gi(e,r,u,o),Xi();var z=e.memoizedState;h!==V||w!==z||Dn||t!==null&&t.dependencies!==null&&fl(t.dependencies)?(typeof v=="function"&&(Gs(e,n,v,r),z=e.memoizedState),(_=Dn||Th(e,n,_,r,w,z,x)||t!==null&&t.dependencies!==null&&fl(t.dependencies))?(E||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,z,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,z,x)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=z),u.props=r,u.state=z,u.context=x,r=_):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),r=!1)}return u=r,wl(t,e),r=(e.flags&128)!==0,u||r?(u=e.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&r?(e.child=Ka(e,t.child,null,o),e.child=Ka(e,null,n,o)):$t(t,e,n,o),e.memoizedState=u.state,t=e.child):t=fn(t,e,o),t}function Bh(t,e,n,r){return ji(),e.flags|=256,$t(t,e,n,r),e.child}var Js={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fs(t){return{baseLanes:t,cachePool:Md()}}function Ws(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=ke),t}function Hh(t,e,n){var r=e.pendingProps,o=!1,u=(e.flags&128)!==0,h;if((h=u)||(h=t!==null&&t.memoizedState===null?!1:(Zt.current&2)!==0),h&&(o=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,t===null){if(vt){if(o?wn(e):zn(),vt){var v=kt,x;if(x=v){t:{for(x=v,v=Qe;x.nodeType!==8;){if(!v){v=null;break t}if(x=Le(x.nextSibling),x===null){v=null;break t}}v=x}v!==null?(e.memoizedState={dehydrated:v,treeContext:ia!==null?{id:rn,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},x=be(18,null,null,0),x.stateNode=v,x.return=e,e.child=x,oe=e,kt=null,x=!0):x=!1}x||oa(e)}if(v=e.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return Nu(v)?e.lanes=32:e.lanes=536870912,null;cn(e)}return v=r.children,r=r.fallback,o?(zn(),o=e.mode,v=zl({mode:"hidden",children:v},o),r=aa(r,o,n,null),v.return=e,r.return=e,v.sibling=r,e.child=v,o=e.child,o.memoizedState=Fs(n),o.childLanes=Ws(t,h,n),e.memoizedState=Js,r):(wn(e),$s(e,v))}if(x=t.memoizedState,x!==null&&(v=x.dehydrated,v!==null)){if(u)e.flags&256?(wn(e),e.flags&=-257,e=Is(t,e,n)):e.memoizedState!==null?(zn(),e.child=t.child,e.flags|=128,e=null):(zn(),o=r.fallback,v=e.mode,r=zl({mode:"visible",children:r.children},v),o=aa(o,v,n,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,Ka(e,t.child,null,n),r=e.child,r.memoizedState=Fs(n),r.childLanes=Ws(t,h,n),e.memoizedState=Js,e=o);else if(wn(e),Nu(v)){if(h=v.nextSibling&&v.nextSibling.dataset,h)var E=h.dgst;h=E,r=Error(s(419)),r.stack="",r.digest=h,Ui({value:r,source:null,stack:null}),e=Is(t,e,n)}else if(Jt||Bi(t,e,n,!1),h=(n&t.childLanes)!==0,Jt||h){if(h=Dt,h!==null&&(r=n&-n,r=(r&42)!==0?1:Vo(r),r=(r&(h.suspendedLanes|n))!==0?0:r,r!==0&&r!==x.retryLane))throw x.retryLane=r,Ua(t,r),Oe(h,t,r),wh;v.data==="$?"||yu(),e=Is(t,e,n)}else v.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=x.treeContext,kt=Le(v.nextSibling),oe=e,vt=!0,la=null,Qe=!1,t!==null&&(we[ze++]=rn,we[ze++]=ln,we[ze++]=ia,rn=t.id,ln=t.overflow,ia=e),e=$s(e,r.children),e.flags|=4096);return e}return o?(zn(),o=r.fallback,v=e.mode,x=t.child,E=x.sibling,r=an(x,{mode:"hidden",children:r.children}),r.subtreeFlags=x.subtreeFlags&65011712,E!==null?o=an(E,o):(o=aa(o,v,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,v=t.child.memoizedState,v===null?v=Fs(n):(x=v.cachePool,x!==null?(E=Gt._currentValue,x=x.parent!==E?{parent:E,pool:E}:x):x=Md(),v={baseLanes:v.baseLanes|n,cachePool:x}),o.memoizedState=v,o.childLanes=Ws(t,h,n),e.memoizedState=Js,r):(wn(e),n=t.child,t=n.sibling,n=an(n,{mode:"visible",children:r.children}),n.return=e,n.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=n,e.memoizedState=null,n)}function $s(t,e){return e=zl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function zl(t,e){return t=be(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Is(t,e,n){return Ka(e,t.child,null,n),t=$s(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ys(t.return,e,n)}function tu(t,e,n,r,o){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=n,u.tailMode=o)}function Lh(t,e,n){var r=e.pendingProps,o=r.revealOrder,u=r.tail;if($t(t,e,r.children,n),r=Zt.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qh(t,n,e);else if(t.tag===19)qh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(X(Zt,r),o){case"forwards":for(n=e.child,o=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(o=n),n=n.sibling;n=o,n===null?(o=e.child,e.child=null):(o=n.sibling,n.sibling=null),tu(e,!1,o,n,u);break;case"backwards":for(n=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&El(t)===null){e.child=o;break}t=o.sibling,o.sibling=n,n=o,o=t}tu(e,!0,n,null,u);break;case"together":tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Bi(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=an(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=an(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&fl(t)))}function Wv(t,e,n){switch(e.tag){case 3:Et(e,e.stateNode.containerInfo),Mn(e,Gt,t.memoizedState.cache),ji();break;case 27:case 5:wo(e);break;case 4:Et(e,e.stateNode.containerInfo);break;case 10:Mn(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(wn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Hh(t,e,n):(wn(e),t=fn(t,e,n),t!==null?t.sibling:null);wn(e);break;case 19:var o=(t.flags&128)!==0;if(r=(n&e.childLanes)!==0,r||(Bi(t,e,n,!1),r=(n&e.childLanes)!==0),o){if(r)return Lh(t,e,n);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(Zt,Zt.current),r)break;return null;case 22:case 23:return e.lanes=0,Nh(t,e,n);case 24:Mn(e,Gt,t.memoizedState.cache)}return fn(t,e,n)}function Ph(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Jt=!0;else{if(!eu(t,n)&&(e.flags&128)===0)return Jt=!1,Wv(t,e,n);Jt=(t.flags&131072)!==0}else Jt=!1,vt&&(e.flags&1048576)!==0&&vd(e,cl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,o=r._init;if(r=o(r._payload),e.type=r,typeof r=="function")cs(r)?(t=da(r,t),e.tag=1,e=Uh(null,e,r,t,n)):(e.tag=0,e=Ks(null,e,r,t,n));else{if(r!=null){if(o=r.$$typeof,o===W){e.tag=11,e=zh(null,e,r,t,n);break t}else if(o===lt){e.tag=14,e=_h(null,e,r,t,n);break t}}throw e=Ge(r)||r,Error(s(306,e,""))}}return e;case 0:return Ks(t,e,e.type,e.pendingProps,n);case 1:return r=e.type,o=da(r,e.pendingProps),Uh(t,e,r,o,n);case 3:t:{if(Et(e,e.stateNode.containerInfo),t===null)throw Error(s(387));r=e.pendingProps;var u=e.memoizedState;o=u.element,Os(t,e),Gi(e,r,null,n);var h=e.memoizedState;if(r=h.cache,Mn(e,Gt,r),r!==u.cache&&vs(e,[Gt],n,!0),Xi(),r=h.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:h.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Bh(t,e,r,n);break t}else if(r!==o){o=Re(Error(s(424)),e),Ui(o),e=Bh(t,e,r,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(kt=Le(t.firstChild),oe=e,vt=!0,la=null,Qe=!0,n=xh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ji(),r===o){e=fn(t,e,n);break t}$t(t,e,r,n)}e=e.child}return e;case 26:return wl(t,e),t===null?(n=Zm(e.type,null,e.pendingProps,null))?e.memoizedState=n:vt||(n=e.type,t=e.pendingProps,r=Gl(rt.current).createElement(n),r[ae]=e,r[ue]=t,te(r,n,t),Kt(r),e.stateNode=r):e.memoizedState=Zm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return wo(e),t===null&&vt&&(r=e.stateNode=Ym(e.type,e.pendingProps,rt.current),oe=e,Qe=!0,o=kt,qn(e.type)?(Vu=o,kt=Le(r.firstChild)):kt=o),$t(t,e,e.pendingProps.children,n),wl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&vt&&((o=r=kt)&&(r=Mb(r,e.type,e.pendingProps,Qe),r!==null?(e.stateNode=r,oe=e,kt=Le(r.firstChild),Qe=!1,o=!0):o=!1),o||oa(e)),wo(e),o=e.type,u=e.pendingProps,h=t!==null?t.memoizedProps:null,r=u.children,zu(o,u)?r=null:h!==null&&zu(o,h)&&(e.flags|=32),e.memoizedState!==null&&(o=ws(t,e,Yv,null,null,n),hr._currentValue=o),wl(t,e),$t(t,e,r,n),e.child;case 6:return t===null&&vt&&((t=n=kt)&&(n=Db(n,e.pendingProps,Qe),n!==null?(e.stateNode=n,oe=e,kt=null,t=!0):t=!1),t||oa(e)),null;case 13:return Hh(t,e,n);case 4:return Et(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ka(e,null,r,n):$t(t,e,r,n),e.child;case 11:return zh(t,e,e.type,e.pendingProps,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:return r=e.pendingProps,Mn(e,e.type,r.value),$t(t,e,r.children,n),e.child;case 9:return o=e.type._context,r=e.pendingProps.children,ua(e),o=ie(o),r=r(o),e.flags|=1,$t(t,e,r,n),e.child;case 14:return _h(t,e,e.type,e.pendingProps,n);case 15:return kh(t,e,e.type,e.pendingProps,n);case 19:return Lh(t,e,n);case 31:return r=e.pendingProps,n=e.mode,r={mode:r.mode,children:r.children},t===null?(n=zl(r,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=an(t.child,r),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return Nh(t,e,n);case 24:return ua(e),r=ie(Gt),t===null?(o=Ss(),o===null&&(o=Dt,u=bs(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=n),o=u),e.memoizedState={parent:r,cache:o},As(e),Mn(e,Gt,o)):((t.lanes&n)!==0&&(Os(t,e),Gi(e,null,null,n),Xi()),o=t.memoizedState,u=e.memoizedState,o.parent!==r?(o={parent:r,cache:r},e.memoizedState=o,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=o),Mn(e,Gt,r)):(r=u.cache,Mn(e,Gt,r),r!==o.cache&&vs(e,[Gt],n,!0))),$t(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function dn(t){t.flags|=4}function Yh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Wm(e)){if(e=_e.current,e!==null&&((pt&4194048)===pt?Ke!==null:(pt&62914560)!==pt&&(pt&536870912)===0||e!==Ke))throw Pi=Ts,Dd;t.flags|=8192}}function _l(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Sf():536870912,t.lanes|=e,$a|=e)}function $i(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&65011712,r|=o.flags&65011712,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $v(t,e,n){var r=e.pendingProps;switch(ms(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return zt(e),null;case 3:return n=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),sn(Gt),Sn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Vi(e)?dn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Sd())),zt(e),null;case 26:return n=e.memoizedState,t===null?(dn(e),n!==null?(zt(e),Yh(e,n)):(zt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(dn(e),zt(e),Yh(e,n)):(zt(e),e.flags&=-16777217):(t.memoizedProps!==r&&dn(e),zt(e),e.flags&=-16777217),null;case 27:Yr(e),n=rt.current;var o=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&dn(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return zt(e),null}t=I.current,Vi(e)?bd(e):(t=Ym(o,r,n),e.stateNode=t,dn(e))}return zt(e),null;case 5:if(Yr(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&dn(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return zt(e),null}if(t=I.current,Vi(e))bd(e);else{switch(o=Gl(rt.current),t){case 1:t=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?o.createElement(n,{is:r.is}):o.createElement(n)}}t[ae]=e,t[ue]=r;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=t;t:switch(te(t,n,r),n){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&dn(e)}}return zt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&dn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=rt.current,Vi(e)){if(t=e.stateNode,n=e.memoizedProps,r=null,o=oe,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}t[ae]=e,t=!!(t.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||jm(t.nodeValue,n)),t||oa(e)}else t=Gl(t).createTextNode(r),t[ae]=e,e.stateNode=t}return zt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(o=Vi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(s(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[ae]=e}else ji(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;zt(e),o=!1}else o=Sd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),o=!0;if(!o)return e.flags&256?(cn(e),e):(cn(e),null)}if(cn(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=r!==null,t=t!==null&&t.memoizedState!==null,n){r=e.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool);var u=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),_l(e,e.updateQueue),zt(e),null;case 4:return Sn(),t===null&&Du(e.stateNode.containerInfo),zt(e),null;case 10:return sn(e.type),zt(e),null;case 19:if(G(Zt),o=e.memoizedState,o===null)return zt(e),null;if(r=(e.flags&128)!==0,u=o.rendering,u===null)if(r)$i(o,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=El(t),u!==null){for(e.flags|=128,$i(o,!1),t=u.updateQueue,e.updateQueue=t,_l(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)yd(n,t),n=n.sibling;return X(Zt,Zt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ze()>Vl&&(e.flags|=128,r=!0,$i(o,!1),e.lanes=4194304)}else{if(!r)if(t=El(u),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,_l(e,t),$i(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!vt)return zt(e),null}else 2*Ze()-o.renderingStartTime>Vl&&n!==536870912&&(e.flags|=128,r=!0,$i(o,!1),e.lanes=4194304);o.isBackwards?(u.sibling=e.child,e.child=u):(t=o.last,t!==null?t.sibling=u:e.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ze(),e.sibling=null,t=Zt.current,X(Zt,r?t&1|2:t&1),e):(zt(e),null);case 22:case 23:return cn(e),Rs(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(n&536870912)!==0&&(e.flags&128)===0&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),n=e.updateQueue,n!==null&&_l(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==n&&(e.flags|=2048),t!==null&&G(ca),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),sn(Gt),zt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Iv(t,e){switch(ms(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sn(Gt),Sn(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Yr(e),null;case 13:if(cn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));ji()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return G(Zt),null;case 4:return Sn(),null;case 10:return sn(e.type),null;case 22:case 23:return cn(e),Rs(),t!==null&&G(ca),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return sn(Gt),null;case 25:return null;default:return null}}function Xh(t,e){switch(ms(e),e.tag){case 3:sn(Gt),Sn();break;case 26:case 27:case 5:Yr(e);break;case 4:Sn();break;case 13:cn(e);break;case 19:G(Zt);break;case 10:sn(e.type);break;case 22:case 23:cn(e),Rs(),t!==null&&G(ca);break;case 24:sn(Gt)}}function Ii(t,e){try{var n=e.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var o=r.next;n=o;do{if((n.tag&t)===t){r=void 0;var u=n.create,h=n.inst;r=u(),h.destroy=r}n=n.next}while(n!==o)}}catch(v){Mt(e,e.return,v)}}function _n(t,e,n){try{var r=e.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){var h=r.inst,v=h.destroy;if(v!==void 0){h.destroy=void 0,o=e;var x=n,E=v;try{E()}catch(_){Mt(o,x,_)}}}r=r.next}while(r!==u)}}catch(_){Mt(e,e.return,_)}}function Gh(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{_d(e,n)}catch(r){Mt(t,t.return,r)}}}function Zh(t,e,n){n.props=da(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(r){Mt(t,e,r)}}function tr(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof n=="function"?t.refCleanup=n(r):n.current=r}}catch(o){Mt(t,e,o)}}function Je(t,e){var n=t.ref,r=t.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(o){Mt(t,e,o)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Mt(t,e,o)}else n.current=null}function Qh(t){var e=t.type,n=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break t;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(o){Mt(t,t.return,o)}}function nu(t,e,n){try{var r=t.stateNode;xb(r,t.type,n,e),r[ue]=e}catch(o){Mt(t,t.return,o)}}function Kh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qn(t.type)||t.tag===4}function au(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Kh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function iu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xl));else if(r!==4&&(r===27&&qn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(iu(t,e,n),t=t.sibling;t!==null;)iu(t,e,n),t=t.sibling}function kl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(r===27&&qn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(kl(t,e,n),t=t.sibling;t!==null;)kl(t,e,n),t=t.sibling}function Jh(t){var e=t.stateNode,n=t.memoizedProps;try{for(var r=t.type,o=e.attributes;o.length;)e.removeAttributeNode(o[0]);te(e,r,n),e[ae]=t,e[ue]=n}catch(u){Mt(t,t.return,u)}}var hn=!1,Ut=!1,ru=!1,Fh=typeof WeakSet=="function"?WeakSet:Set,Ft=null;function tb(t,e){if(t=t.containerInfo,Cu=Wl,t=od(t),as(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var h=0,v=-1,x=-1,E=0,_=0,V=t,w=null;e:for(;;){for(var z;V!==n||o!==0&&V.nodeType!==3||(v=h+o),V!==u||r!==0&&V.nodeType!==3||(x=h+r),V.nodeType===3&&(h+=V.nodeValue.length),(z=V.firstChild)!==null;)w=V,V=z;for(;;){if(V===t)break e;if(w===n&&++E===o&&(v=h),w===u&&++_===r&&(x=h),(z=V.nextSibling)!==null)break;V=w,w=V.parentNode}V=z}n=v===-1||x===-1?null:{start:v,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(wu={focusedElem:t,selectionRange:n},Wl=!1,Ft=e;Ft!==null;)if(e=Ft,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Ft=t;else for(;Ft!==null;){switch(e=Ft,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,o=u.memoizedProps,u=u.memoizedState,r=n.stateNode;try{var at=da(n.type,o,n.elementType===n.type);t=r.getSnapshotBeforeUpdate(at,u),r.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Mt(n,n.return,tt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)ku(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ku(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Ft=t;break}Ft=e.return}}function Wh(t,e,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:kn(t,n),r&4&&Ii(5,n);break;case 1:if(kn(t,n),r&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(h){Mt(n,n.return,h)}else{var o=da(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(o,e,t.__reactInternalSnapshotBeforeUpdate)}catch(h){Mt(n,n.return,h)}}r&64&&Gh(n),r&512&&tr(n,n.return);break;case 3:if(kn(t,n),r&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{_d(t,e)}catch(h){Mt(n,n.return,h)}}break;case 27:e===null&&r&4&&Jh(n);case 26:case 5:kn(t,n),e===null&&r&4&&Qh(n),r&512&&tr(n,n.return);break;case 12:kn(t,n);break;case 13:kn(t,n),r&4&&tm(t,n),r&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=ub.bind(null,n),Eb(t,n))));break;case 22:if(r=n.memoizedState!==null||hn,!r){e=e!==null&&e.memoizedState!==null||Ut,o=hn;var u=Ut;hn=r,(Ut=e)&&!u?Nn(t,n,(n.subtreeFlags&8772)!==0):kn(t,n),hn=o,Ut=u}break;case 30:break;default:kn(t,n)}}function $h(t){var e=t.alternate;e!==null&&(t.alternate=null,$h(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Bo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Rt=null,de=!1;function mn(t,e,n){for(n=n.child;n!==null;)Ih(t,e,n),n=n.sibling}function Ih(t,e,n){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(Si,n)}catch{}switch(n.tag){case 26:Ut||Je(n,e),mn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ut||Je(n,e);var r=Rt,o=de;qn(n.type)&&(Rt=n.stateNode,de=!1),mn(t,e,n),ur(n.stateNode),Rt=r,de=o;break;case 5:Ut||Je(n,e);case 6:if(r=Rt,o=de,Rt=null,mn(t,e,n),Rt=r,de=o,Rt!==null)if(de)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(n.stateNode)}catch(u){Mt(n,e,u)}else try{Rt.removeChild(n.stateNode)}catch(u){Mt(n,e,u)}break;case 18:Rt!==null&&(de?(t=Rt,Lm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),yr(t)):Lm(Rt,n.stateNode));break;case 4:r=Rt,o=de,Rt=n.stateNode.containerInfo,de=!0,mn(t,e,n),Rt=r,de=o;break;case 0:case 11:case 14:case 15:Ut||_n(2,n,e),Ut||_n(4,n,e),mn(t,e,n);break;case 1:Ut||(Je(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"&&Zh(n,e,r)),mn(t,e,n);break;case 21:mn(t,e,n);break;case 22:Ut=(r=Ut)||n.memoizedState!==null,mn(t,e,n),Ut=r;break;default:mn(t,e,n)}}function tm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{yr(t)}catch(n){Mt(e,e.return,n)}}function eb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Fh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Fh),e;default:throw Error(s(435,t.tag))}}function lu(t,e){var n=eb(t);e.forEach(function(r){var o=cb.bind(null,t,r);n.has(r)||(n.add(r),r.then(o,o))})}function xe(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r],u=t,h=e,v=h;t:for(;v!==null;){switch(v.tag){case 27:if(qn(v.type)){Rt=v.stateNode,de=!1;break t}break;case 5:Rt=v.stateNode,de=!1;break t;case 3:case 4:Rt=v.stateNode.containerInfo,de=!0;break t}v=v.return}if(Rt===null)throw Error(s(160));Ih(u,h,o),Rt=null,de=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)em(e,t),e=e.sibling}var qe=null;function em(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xe(e,t),Se(t),r&4&&(_n(3,t,t.return),Ii(3,t),_n(5,t,t.return));break;case 1:xe(e,t),Se(t),r&512&&(Ut||n===null||Je(n,n.return)),r&64&&hn&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var o=qe;if(xe(e,t),Se(t),r&512&&(Ut||n===null||Je(n,n.return)),r&4){var u=n!==null?n.memoizedState:null;if(r=t.memoizedState,n===null)if(r===null)if(t.stateNode===null){t:{r=t.type,n=t.memoizedProps,o=o.ownerDocument||o;e:switch(r){case"title":u=o.getElementsByTagName("title")[0],(!u||u[Oi]||u[ae]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(r),o.head.insertBefore(u,o.querySelector("head > title"))),te(u,r,n),u[ae]=t,Kt(u),r=u;break t;case"link":var h=Jm("link","href",o).get(r+(n.href||""));if(h){for(var v=0;v<h.length;v++)if(u=h[v],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(v,1);break e}}u=o.createElement(r),te(u,r,n),o.head.appendChild(u);break;case"meta":if(h=Jm("meta","content",o).get(r+(n.content||""))){for(v=0;v<h.length;v++)if(u=h[v],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(v,1);break e}}u=o.createElement(r),te(u,r,n),o.head.appendChild(u);break;default:throw Error(s(468,r))}u[ae]=t,Kt(u),r=u}t.stateNode=r}else Fm(o,t.type,t.stateNode);else t.stateNode=Km(o,r,t.memoizedProps);else u!==r?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,r===null?Fm(o,t.type,t.stateNode):Km(o,r,t.memoizedProps)):r===null&&t.stateNode!==null&&nu(t,t.memoizedProps,n.memoizedProps)}break;case 27:xe(e,t),Se(t),r&512&&(Ut||n===null||Je(n,n.return)),n!==null&&r&4&&nu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(xe(e,t),Se(t),r&512&&(Ut||n===null||Je(n,n.return)),t.flags&32){o=t.stateNode;try{wa(o,"")}catch(z){Mt(t,t.return,z)}}r&4&&t.stateNode!=null&&(o=t.memoizedProps,nu(t,o,n!==null?n.memoizedProps:o)),r&1024&&(ru=!0);break;case 6:if(xe(e,t),Se(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,n=t.stateNode;try{n.nodeValue=r}catch(z){Mt(t,t.return,z)}}break;case 3:if(Kl=null,o=qe,qe=Zl(e.containerInfo),xe(e,t),qe=o,Se(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yr(e.containerInfo)}catch(z){Mt(t,t.return,z)}ru&&(ru=!1,nm(t));break;case 4:r=qe,qe=Zl(t.stateNode.containerInfo),xe(e,t),Se(t),qe=r;break;case 12:xe(e,t),Se(t);break;case 13:xe(e,t),Se(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(du=Ze()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,lu(t,r)));break;case 22:o=t.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,E=hn,_=Ut;if(hn=E||o,Ut=_||x,xe(e,t),Ut=_,hn=E,Se(t),r&8192)t:for(e=t.stateNode,e._visibility=o?e._visibility&-2:e._visibility|1,o&&(n===null||x||hn||Ut||ha(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){x=n=e;try{if(u=x.stateNode,o)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{v=x.stateNode;var V=x.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null;v.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(z){Mt(x,x.return,z)}}}else if(e.tag===6){if(n===null){x=e;try{x.stateNode.nodeValue=o?"":x.memoizedProps}catch(z){Mt(x,x.return,z)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,lu(t,n))));break;case 19:xe(e,t),Se(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,lu(t,r)));break;case 30:break;case 21:break;default:xe(e,t),Se(t)}}function Se(t){var e=t.flags;if(e&2){try{for(var n,r=t.return;r!==null;){if(Kh(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var o=n.stateNode,u=au(t);kl(t,u,o);break;case 5:var h=n.stateNode;n.flags&32&&(wa(h,""),n.flags&=-33);var v=au(t);kl(t,v,h);break;case 3:case 4:var x=n.stateNode.containerInfo,E=au(t);iu(t,E,x);break;default:throw Error(s(161))}}catch(_){Mt(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;nm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function kn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Wh(t,e.alternate,e),e=e.sibling}function ha(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:_n(4,e,e.return),ha(e);break;case 1:Je(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Zh(e,e.return,n),ha(e);break;case 27:ur(e.stateNode);case 26:case 5:Je(e,e.return),ha(e);break;case 22:e.memoizedState===null&&ha(e);break;case 30:ha(e);break;default:ha(e)}t=t.sibling}}function Nn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,o=t,u=e,h=u.flags;switch(u.tag){case 0:case 11:case 15:Nn(o,u,n),Ii(4,u);break;case 1:if(Nn(o,u,n),r=u,o=r.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(E){Mt(r,r.return,E)}if(r=u,o=r.updateQueue,o!==null){var v=r.stateNode;try{var x=o.shared.hiddenCallbacks;if(x!==null)for(o.shared.hiddenCallbacks=null,o=0;o<x.length;o++)zd(x[o],v)}catch(E){Mt(r,r.return,E)}}n&&h&64&&Gh(u),tr(u,u.return);break;case 27:Jh(u);case 26:case 5:Nn(o,u,n),n&&r===null&&h&4&&Qh(u),tr(u,u.return);break;case 12:Nn(o,u,n);break;case 13:Nn(o,u,n),n&&h&4&&tm(o,u);break;case 22:u.memoizedState===null&&Nn(o,u,n),tr(u,u.return);break;case 30:break;default:Nn(o,u,n)}e=e.sibling}}function ou(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Hi(n))}function su(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Hi(t))}function Fe(t,e,n,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)am(t,e,n,r),e=e.sibling}function am(t,e,n,r){var o=e.flags;switch(e.tag){case 0:case 11:case 15:Fe(t,e,n,r),o&2048&&Ii(9,e);break;case 1:Fe(t,e,n,r);break;case 3:Fe(t,e,n,r),o&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Hi(t)));break;case 12:if(o&2048){Fe(t,e,n,r),t=e.stateNode;try{var u=e.memoizedProps,h=u.id,v=u.onPostCommit;typeof v=="function"&&v(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(x){Mt(e,e.return,x)}}else Fe(t,e,n,r);break;case 13:Fe(t,e,n,r);break;case 23:break;case 22:u=e.stateNode,h=e.alternate,e.memoizedState!==null?u._visibility&2?Fe(t,e,n,r):er(t,e):u._visibility&2?Fe(t,e,n,r):(u._visibility|=2,Ja(t,e,n,r,(e.subtreeFlags&10256)!==0)),o&2048&&ou(h,e);break;case 24:Fe(t,e,n,r),o&2048&&su(e.alternate,e);break;default:Fe(t,e,n,r)}}function Ja(t,e,n,r,o){for(o=o&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,h=e,v=n,x=r,E=h.flags;switch(h.tag){case 0:case 11:case 15:Ja(u,h,v,x,o),Ii(8,h);break;case 23:break;case 22:var _=h.stateNode;h.memoizedState!==null?_._visibility&2?Ja(u,h,v,x,o):er(u,h):(_._visibility|=2,Ja(u,h,v,x,o)),o&&E&2048&&ou(h.alternate,h);break;case 24:Ja(u,h,v,x,o),o&&E&2048&&su(h.alternate,h);break;default:Ja(u,h,v,x,o)}e=e.sibling}}function er(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,r=e,o=r.flags;switch(r.tag){case 22:er(n,r),o&2048&&ou(r.alternate,r);break;case 24:er(n,r),o&2048&&su(r.alternate,r);break;default:er(n,r)}e=e.sibling}}var nr=8192;function Fa(t){if(t.subtreeFlags&nr)for(t=t.child;t!==null;)im(t),t=t.sibling}function im(t){switch(t.tag){case 26:Fa(t),t.flags&nr&&t.memoizedState!==null&&qb(qe,t.memoizedState,t.memoizedProps);break;case 5:Fa(t);break;case 3:case 4:var e=qe;qe=Zl(t.stateNode.containerInfo),Fa(t),qe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=nr,nr=16777216,Fa(t),nr=e):Fa(t));break;default:Fa(t)}}function rm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ar(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];Ft=r,om(r,t)}rm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)lm(t),t=t.sibling}function lm(t){switch(t.tag){case 0:case 11:case 15:ar(t),t.flags&2048&&_n(9,t,t.return);break;case 3:ar(t);break;case 12:ar(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Nl(t)):ar(t);break;default:ar(t)}}function Nl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];Ft=r,om(r,t)}rm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:_n(8,e,e.return),Nl(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Nl(e));break;default:Nl(e)}t=t.sibling}}function om(t,e){for(;Ft!==null;){var n=Ft;switch(n.tag){case 0:case 11:case 15:_n(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Hi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Ft=r;else t:for(n=t;Ft!==null;){r=Ft;var o=r.sibling,u=r.return;if($h(r),r===n){Ft=null;break t}if(o!==null){o.return=u,Ft=o;break t}Ft=u}}}var nb={getCacheForType:function(t){var e=ie(Gt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},ab=typeof WeakMap=="function"?WeakMap:Map,bt=0,Dt=null,ft=null,pt=0,xt=0,Te=null,Vn=!1,Wa=!1,uu=!1,pn=0,Nt=0,jn=0,ma=0,cu=0,ke=0,$a=0,ir=null,he=null,fu=!1,du=0,Vl=1/0,jl=null,Un=null,It=0,Bn=null,Ia=null,ti=0,hu=0,mu=null,sm=null,rr=0,pu=null;function Ae(){if((bt&2)!==0&&pt!==0)return pt&-pt;if(k.T!==null){var t=La;return t!==0?t:Tu()}return Of()}function um(){ke===0&&(ke=(pt&536870912)===0||vt?xf():536870912);var t=_e.current;return t!==null&&(t.flags|=32),ke}function Oe(t,e,n){(t===Dt&&(xt===2||xt===9)||t.cancelPendingCommit!==null)&&(ei(t,0),Hn(t,pt,ke,!1)),Ai(t,n),((bt&2)===0||t!==Dt)&&(t===Dt&&((bt&2)===0&&(ma|=n),Nt===4&&Hn(t,pt,ke,!1)),We(t))}function cm(t,e,n){if((bt&6)!==0)throw Error(s(327));var r=!n&&(e&124)===0&&(e&t.expiredLanes)===0||Ti(t,e),o=r?lb(t,e):vu(t,e,!0),u=r;do{if(o===0){Wa&&!r&&Hn(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!ib(n)){o=vu(t,e,!1),u=!1;continue}if(o===2){if(u=e,t.errorRecoveryDisabledLanes&u)var h=0;else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){e=h;t:{var v=t;o=ir;var x=v.current.memoizedState.isDehydrated;if(x&&(ei(v,h).flags|=256),h=vu(v,h,!1),h!==2){if(uu&&!x){v.errorRecoveryDisabledLanes|=u,ma|=u,o=4;break t}u=he,he=o,u!==null&&(he===null?he=u:he.push.apply(he,u))}o=h}if(u=!1,o!==2)continue}}if(o===1){ei(t,0),Hn(t,e,0,!0);break}t:{switch(r=t,u=o,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Hn(r,e,ke,!Vn);break t;case 2:he=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(o=du+300-Ze(),10<o)){if(Hn(r,e,ke,!Vn),Qr(r,0,!0)!==0)break t;r.timeoutHandle=Hm(fm.bind(null,r,n,he,jl,fu,e,ke,ma,$a,Vn,u,2,-0,0),o);break t}fm(r,n,he,jl,fu,e,ke,ma,$a,Vn,u,0,-0,0)}}break}while(!0);We(t)}function fm(t,e,n,r,o,u,h,v,x,E,_,V,w,z){if(t.timeoutHandle=-1,V=e.subtreeFlags,(V&8192||(V&16785408)===16785408)&&(dr={stylesheets:null,count:0,unsuspend:Hb},im(e),V=Lb(),V!==null)){t.cancelPendingCommit=V(vm.bind(null,t,e,u,n,r,o,h,v,x,_,1,w,z)),Hn(t,u,h,!E);return}vm(t,e,u,n,r,o,h,v,x)}function ib(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var o=n[r],u=o.getSnapshot;o=o.value;try{if(!ve(u(),o))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e,n,r){e&=~cu,e&=~ma,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var o=e;0<o;){var u=31-ye(o),h=1<<u;r[u]=-1,o&=~h}n!==0&&Tf(t,n,e)}function Ul(){return(bt&6)===0?(lr(0),!1):!0}function gu(){if(ft!==null){if(xt===0)var t=ft.return;else t=ft,on=sa=null,ks(t),Qa=null,Fi=0,t=ft;for(;t!==null;)Xh(t.alternate,t),t=t.return;ft=null}}function ei(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Tb(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),gu(),Dt=t,ft=n=an(t.current,null),pt=e,xt=0,Te=null,Vn=!1,Wa=Ti(t,e),uu=!1,$a=ke=cu=ma=jn=Nt=0,he=ir=null,fu=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var o=31-ye(r),u=1<<o;e|=t[o],r&=~u}return pn=e,rl(),n}function dm(t,e){st=null,k.H=Ol,e===Li||e===ml?(e=Cd(),xt=3):e===Dd?(e=Cd(),xt=4):xt=e===wh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Te=e,ft===null&&(Nt=1,Cl(t,Re(e,t.current)))}function hm(){var t=k.H;return k.H=Ol,t===null?Ol:t}function mm(){var t=k.A;return k.A=nb,t}function yu(){Nt=4,Vn||(pt&4194048)!==pt&&_e.current!==null||(Wa=!0),(jn&134217727)===0&&(ma&134217727)===0||Dt===null||Hn(Dt,pt,ke,!1)}function vu(t,e,n){var r=bt;bt|=2;var o=hm(),u=mm();(Dt!==t||pt!==e)&&(jl=null,ei(t,e)),e=!1;var h=Nt;t:do try{if(xt!==0&&ft!==null){var v=ft,x=Te;switch(xt){case 8:gu(),h=6;break t;case 3:case 2:case 9:case 6:_e.current===null&&(e=!0);var E=xt;if(xt=0,Te=null,ni(t,v,x,E),n&&Wa){h=0;break t}break;default:E=xt,xt=0,Te=null,ni(t,v,x,E)}}rb(),h=Nt;break}catch(_){dm(t,_)}while(!0);return e&&t.shellSuspendCounter++,on=sa=null,bt=r,k.H=o,k.A=u,ft===null&&(Dt=null,pt=0,rl()),h}function rb(){for(;ft!==null;)pm(ft)}function lb(t,e){var n=bt;bt|=2;var r=hm(),o=mm();Dt!==t||pt!==e?(jl=null,Vl=Ze()+500,ei(t,e)):Wa=Ti(t,e);t:do try{if(xt!==0&&ft!==null){e=ft;var u=Te;e:switch(xt){case 1:xt=0,Te=null,ni(t,e,u,1);break;case 2:case 9:if(Ed(u)){xt=0,Te=null,gm(e);break}e=function(){xt!==2&&xt!==9||Dt!==t||(xt=7),We(t)},u.then(e,e);break t;case 3:xt=7;break t;case 4:xt=5;break t;case 7:Ed(u)?(xt=0,Te=null,gm(e)):(xt=0,Te=null,ni(t,e,u,7));break;case 5:var h=null;switch(ft.tag){case 26:h=ft.memoizedState;case 5:case 27:var v=ft;if(!h||Wm(h)){xt=0,Te=null;var x=v.sibling;if(x!==null)ft=x;else{var E=v.return;E!==null?(ft=E,Bl(E)):ft=null}break e}}xt=0,Te=null,ni(t,e,u,5);break;case 6:xt=0,Te=null,ni(t,e,u,6);break;case 8:gu(),Nt=6;break t;default:throw Error(s(462))}}ob();break}catch(_){dm(t,_)}while(!0);return on=sa=null,k.H=r,k.A=o,bt=n,ft!==null?0:(Dt=null,pt=0,rl(),Nt)}function ob(){for(;ft!==null&&!Cy();)pm(ft)}function pm(t){var e=Ph(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?Bl(t):ft=e}function gm(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=jh(n,e,e.pendingProps,e.type,void 0,pt);break;case 11:e=jh(n,e,e.pendingProps,e.type.render,e.ref,pt);break;case 5:ks(e);default:Xh(n,e),e=ft=yd(e,pn),e=Ph(n,e,pn)}t.memoizedProps=t.pendingProps,e===null?Bl(t):ft=e}function ni(t,e,n,r){on=sa=null,ks(e),Qa=null,Fi=0;var o=e.return;try{if(Fv(t,o,e,n,pt)){Nt=1,Cl(t,Re(n,t.current)),ft=null;return}}catch(u){if(o!==null)throw ft=o,u;Nt=1,Cl(t,Re(n,t.current)),ft=null;return}e.flags&32768?(vt||r===1?t=!0:Wa||(pt&536870912)!==0?t=!1:(Vn=t=!0,(r===2||r===9||r===3||r===6)&&(r=_e.current,r!==null&&r.tag===13&&(r.flags|=16384))),ym(e,t)):Bl(e)}function Bl(t){var e=t;do{if((e.flags&32768)!==0){ym(e,Vn);return}t=e.return;var n=$v(e.alternate,e,pn);if(n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);Nt===0&&(Nt=5)}function ym(t,e){do{var n=Iv(t.alternate,t);if(n!==null){n.flags&=32767,ft=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=n}while(t!==null);Nt=6,ft=null}function vm(t,e,n,r,o,u,h,v,x){t.cancelPendingCommit=null;do Hl();while(It!==0);if((bt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=ss,Hy(t,n,u,h,v,x),t===Dt&&(ft=Dt=null,pt=0),Ia=e,Bn=t,ti=n,hu=u,mu=o,sm=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fb(Xr,function(){return Am(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=k.T,k.T=null,o=P.p,P.p=2,h=bt,bt|=4;try{tb(t,e,n)}finally{bt=h,P.p=o,k.T=r}}It=1,bm(),xm(),Sm()}}function bm(){if(It===1){It=0;var t=Bn,e=Ia,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var r=P.p;P.p=2;var o=bt;bt|=4;try{em(e,t);var u=wu,h=od(t.containerInfo),v=u.focusedElem,x=u.selectionRange;if(h!==v&&v&&v.ownerDocument&&ld(v.ownerDocument.documentElement,v)){if(x!==null&&as(v)){var E=x.start,_=x.end;if(_===void 0&&(_=E),"selectionStart"in v)v.selectionStart=E,v.selectionEnd=Math.min(_,v.value.length);else{var V=v.ownerDocument||document,w=V&&V.defaultView||window;if(w.getSelection){var z=w.getSelection(),at=v.textContent.length,tt=Math.min(x.start,at),At=x.end===void 0?tt:Math.min(x.end,at);!z.extend&&tt>At&&(h=At,At=tt,tt=h);var O=rd(v,tt),A=rd(v,At);if(O&&A&&(z.rangeCount!==1||z.anchorNode!==O.node||z.anchorOffset!==O.offset||z.focusNode!==A.node||z.focusOffset!==A.offset)){var D=V.createRange();D.setStart(O.node,O.offset),z.removeAllRanges(),tt>At?(z.addRange(D),z.extend(A.node,A.offset)):(D.setEnd(A.node,A.offset),z.addRange(D))}}}}for(V=[],z=v;z=z.parentNode;)z.nodeType===1&&V.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<V.length;v++){var N=V[v];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Wl=!!Cu,wu=Cu=null}finally{bt=o,P.p=r,k.T=n}}t.current=e,It=2}}function xm(){if(It===2){It=0;var t=Bn,e=Ia,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var r=P.p;P.p=2;var o=bt;bt|=4;try{Wh(t,e.alternate,e)}finally{bt=o,P.p=r,k.T=n}}It=3}}function Sm(){if(It===4||It===3){It=0,wy();var t=Bn,e=Ia,n=ti,r=sm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?It=5:(It=0,Ia=Bn=null,Tm(t,t.pendingLanes));var o=t.pendingLanes;if(o===0&&(Un=null),jo(n),e=e.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(Si,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=k.T,o=P.p,P.p=2,k.T=null;try{for(var u=t.onRecoverableError,h=0;h<r.length;h++){var v=r[h];u(v.value,{componentStack:v.stack})}}finally{k.T=e,P.p=o}}(ti&3)!==0&&Hl(),We(t),o=t.pendingLanes,(n&4194090)!==0&&(o&42)!==0?t===pu?rr++:(rr=0,pu=t):rr=0,lr(0)}}function Tm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Hi(e)))}function Hl(t){return bm(),xm(),Sm(),Am()}function Am(){if(It!==5)return!1;var t=Bn,e=hu;hu=0;var n=jo(ti),r=k.T,o=P.p;try{P.p=32>n?32:n,k.T=null,n=mu,mu=null;var u=Bn,h=ti;if(It=0,Ia=Bn=null,ti=0,(bt&6)!==0)throw Error(s(331));var v=bt;if(bt|=4,lm(u.current),am(u,u.current,h,n),bt=v,lr(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(Si,u)}catch{}return!0}finally{P.p=o,k.T=r,Tm(t,e)}}function Om(t,e,n){e=Re(n,e),e=Qs(t.stateNode,e,2),t=Rn(t,e,2),t!==null&&(Ai(t,2),We(t))}function Mt(t,e,n){if(t.tag===3)Om(t,t,n);else for(;e!==null;){if(e.tag===3){Om(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){t=Re(n,t),n=Rh(2),r=Rn(e,n,2),r!==null&&(Ch(n,r,e,t),Ai(r,2),We(r));break}}e=e.return}}function bu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ab;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(n)||(uu=!0,o.add(n),t=sb.bind(null,t,e,n),e.then(t,t))}function sb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Dt===t&&(pt&n)===n&&(Nt===4||Nt===3&&(pt&62914560)===pt&&300>Ze()-du?(bt&2)===0&&ei(t,0):cu|=n,$a===pt&&($a=0)),We(t)}function Mm(t,e){e===0&&(e=Sf()),t=Ua(t,e),t!==null&&(Ai(t,e),We(t))}function ub(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mm(t,n)}function cb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,o=t.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),Mm(t,n)}function fb(t,e){return _o(t,e)}var ql=null,ai=null,xu=!1,Ll=!1,Su=!1,pa=0;function We(t){t!==ai&&t.next===null&&(ai===null?ql=ai=t:ai=ai.next=t),Ll=!0,xu||(xu=!0,hb())}function lr(t,e){if(!Su&&Ll){Su=!0;do for(var n=!1,r=ql;r!==null;){if(t!==0){var o=r.pendingLanes;if(o===0)var u=0;else{var h=r.suspendedLanes,v=r.pingedLanes;u=(1<<31-ye(42|t)+1)-1,u&=o&~(h&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Cm(r,u))}else u=pt,u=Qr(r,r===Dt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ti(r,u)||(n=!0,Cm(r,u));r=r.next}while(n);Su=!1}}function db(){Dm()}function Dm(){Ll=xu=!1;var t=0;pa!==0&&(Sb()&&(t=pa),pa=0);for(var e=Ze(),n=null,r=ql;r!==null;){var o=r.next,u=Em(r,e);u===0?(r.next=null,n===null?ql=o:n.next=o,o===null&&(ai=n)):(n=r,(t!==0||(u&3)!==0)&&(Ll=!0)),r=o}lr(t)}function Em(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,o=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var h=31-ye(u),v=1<<h,x=o[h];x===-1?((v&n)===0||(v&r)!==0)&&(o[h]=By(v,e)):x<=e&&(t.expiredLanes|=v),u&=~v}if(e=Dt,n=pt,n=Qr(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,n===0||t===e&&(xt===2||xt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&ko(r),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Ti(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(r!==null&&ko(r),jo(n)){case 2:case 8:n=vf;break;case 32:n=Xr;break;case 268435456:n=bf;break;default:n=Xr}return r=Rm.bind(null,t),n=_o(n,r),t.callbackPriority=e,t.callbackNode=n,e}return r!==null&&r!==null&&ko(r),t.callbackPriority=2,t.callbackNode=null,2}function Rm(t,e){if(It!==0&&It!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Hl()&&t.callbackNode!==n)return null;var r=pt;return r=Qr(t,t===Dt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(cm(t,r,e),Em(t,Ze()),t.callbackNode!=null&&t.callbackNode===n?Rm.bind(null,t):null)}function Cm(t,e){if(Hl())return null;cm(t,e,!0)}function hb(){Ab(function(){(bt&6)!==0?_o(yf,db):Dm()})}function Tu(){return pa===0&&(pa=xf()),pa}function wm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$r(""+t)}function zm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function mb(t,e,n,r,o){if(e==="submit"&&n&&n.stateNode===o){var u=wm((o[ue]||null).action),h=r.submitter;h&&(e=(e=h[ue]||null)?wm(e.formAction):h.getAttribute("formAction"),e!==null&&(u=e,h=null));var v=new nl("action","action",null,r,o);t.push({event:v,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(pa!==0){var x=h?zm(o,h):new FormData(o);Ps(n,{pending:!0,data:x,method:o.method,action:u},null,x)}}else typeof u=="function"&&(v.preventDefault(),x=h?zm(o,h):new FormData(o),Ps(n,{pending:!0,data:x,method:o.method,action:u},u,x))},currentTarget:o}]})}}for(var Au=0;Au<os.length;Au++){var Ou=os[Au],pb=Ou.toLowerCase(),gb=Ou[0].toUpperCase()+Ou.slice(1);He(pb,"on"+gb)}He(cd,"onAnimationEnd"),He(fd,"onAnimationIteration"),He(dd,"onAnimationStart"),He("dblclick","onDoubleClick"),He("focusin","onFocus"),He("focusout","onBlur"),He(kv,"onTransitionRun"),He(Nv,"onTransitionStart"),He(Vv,"onTransitionCancel"),He(hd,"onTransitionEnd"),Ea("onMouseEnter",["mouseout","mouseover"]),Ea("onMouseLeave",["mouseout","mouseover"]),Ea("onPointerEnter",["pointerout","pointerover"]),Ea("onPointerLeave",["pointerout","pointerover"]),In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),In("onBeforeInput",["compositionend","keypress","textInput","paste"]),In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(or));function _m(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],o=r.event;r=r.listeners;t:{var u=void 0;if(e)for(var h=r.length-1;0<=h;h--){var v=r[h],x=v.instance,E=v.currentTarget;if(v=v.listener,x!==u&&o.isPropagationStopped())break t;u=v,o.currentTarget=E;try{u(o)}catch(_){Rl(_)}o.currentTarget=null,u=x}else for(h=0;h<r.length;h++){if(v=r[h],x=v.instance,E=v.currentTarget,v=v.listener,x!==u&&o.isPropagationStopped())break t;u=v,o.currentTarget=E;try{u(o)}catch(_){Rl(_)}o.currentTarget=null,u=x}}}}function dt(t,e){var n=e[Uo];n===void 0&&(n=e[Uo]=new Set);var r=t+"__bubble";n.has(r)||(km(e,t,2,!1),n.add(r))}function Mu(t,e,n){var r=0;e&&(r|=4),km(n,t,r,e)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Du(t){if(!t[Pl]){t[Pl]=!0,Df.forEach(function(n){n!=="selectionchange"&&(yb.has(n)||Mu(n,!1,t),Mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pl]||(e[Pl]=!0,Mu("selectionchange",!1,e))}}function km(t,e,n,r){switch(a0(e)){case 2:var o=Xb;break;case 8:o=Gb;break;default:o=qu}n=o.bind(null,e,n,t),o=void 0,!Ko||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?t.addEventListener(e,n,{capture:!0,passive:o}):t.addEventListener(e,n,!0):o!==void 0?t.addEventListener(e,n,{passive:o}):t.addEventListener(e,n,!1)}function Eu(t,e,n,r,o){var u=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var h=r.tag;if(h===3||h===4){var v=r.stateNode.containerInfo;if(v===o)break;if(h===4)for(h=r.return;h!==null;){var x=h.tag;if((x===3||x===4)&&h.stateNode.containerInfo===o)return;h=h.return}for(;v!==null;){if(h=Oa(v),h===null)return;if(x=h.tag,x===5||x===6||x===26||x===27){r=u=h;continue t}v=v.parentNode}}r=r.return}qf(function(){var E=u,_=Zo(n),V=[];t:{var w=md.get(t);if(w!==void 0){var z=nl,at=t;switch(t){case"keypress":if(tl(n)===0)break t;case"keydown":case"keyup":z=fv;break;case"focusin":at="focus",z=$o;break;case"focusout":at="blur",z=$o;break;case"beforeblur":case"afterblur":z=$o;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=mv;break;case cd:case fd:case dd:z=nv;break;case hd:z=gv;break;case"scroll":case"scrollend":z=Wy;break;case"wheel":z=vv;break;case"copy":case"cut":case"paste":z=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Gf;break;case"toggle":case"beforetoggle":z=xv}var tt=(e&4)!==0,At=!tt&&(t==="scroll"||t==="scrollend"),O=tt?w!==null?w+"Capture":null:w;tt=[];for(var A=E,D;A!==null;){var N=A;if(D=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||D===null||O===null||(N=Di(A,O),N!=null&&tt.push(sr(A,N,D))),At)break;A=A.return}0<tt.length&&(w=new z(w,at,null,n,_),V.push({event:w,listeners:tt}))}}if((e&7)===0){t:{if(w=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",w&&n!==Go&&(at=n.relatedTarget||n.fromElement)&&(Oa(at)||at[Aa]))break t;if((z||w)&&(w=_.window===_?_:(w=_.ownerDocument)?w.defaultView||w.parentWindow:window,z?(at=n.relatedTarget||n.toElement,z=E,at=at?Oa(at):null,at!==null&&(At=d(at),tt=at.tag,at!==At||tt!==5&&tt!==27&&tt!==6)&&(at=null)):(z=null,at=E),z!==at)){if(tt=Yf,N="onMouseLeave",O="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Gf,N="onPointerLeave",O="onPointerEnter",A="pointer"),At=z==null?w:Mi(z),D=at==null?w:Mi(at),w=new tt(N,A+"leave",z,n,_),w.target=At,w.relatedTarget=D,N=null,Oa(_)===E&&(tt=new tt(O,A+"enter",at,n,_),tt.target=D,tt.relatedTarget=At,N=tt),At=N,z&&at)e:{for(tt=z,O=at,A=0,D=tt;D;D=ii(D))A++;for(D=0,N=O;N;N=ii(N))D++;for(;0<A-D;)tt=ii(tt),A--;for(;0<D-A;)O=ii(O),D--;for(;A--;){if(tt===O||O!==null&&tt===O.alternate)break e;tt=ii(tt),O=ii(O)}tt=null}else tt=null;z!==null&&Nm(V,w,z,tt,!1),at!==null&&At!==null&&Nm(V,At,at,tt,!0)}}t:{if(w=E?Mi(E):window,z=w.nodeName&&w.nodeName.toLowerCase(),z==="select"||z==="input"&&w.type==="file")var Q=If;else if(Wf(w))if(td)Q=wv;else{Q=Rv;var ut=Ev}else z=w.nodeName,!z||z.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?E&&Xo(E.elementType)&&(Q=If):Q=Cv;if(Q&&(Q=Q(t,E))){$f(V,Q,n,_);break t}ut&&ut(t,w,E),t==="focusout"&&E&&w.type==="number"&&E.memoizedProps.value!=null&&Yo(w,"number",w.value)}switch(ut=E?Mi(E):window,t){case"focusin":(Wf(ut)||ut.contentEditable==="true")&&(Na=ut,is=E,Ni=null);break;case"focusout":Ni=is=Na=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,sd(V,n,_);break;case"selectionchange":if(_v)break;case"keydown":case"keyup":sd(V,n,_)}var F;if(ts)t:{switch(t){case"compositionstart":var et="onCompositionStart";break t;case"compositionend":et="onCompositionEnd";break t;case"compositionupdate":et="onCompositionUpdate";break t}et=void 0}else ka?Jf(t,n)&&(et="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(et="onCompositionStart");et&&(Zf&&n.locale!=="ko"&&(ka||et!=="onCompositionStart"?et==="onCompositionEnd"&&ka&&(F=Lf()):(On=_,Jo="value"in On?On.value:On.textContent,ka=!0)),ut=Yl(E,et),0<ut.length&&(et=new Xf(et,t,null,n,_),V.push({event:et,listeners:ut}),F?et.data=F:(F=Ff(n),F!==null&&(et.data=F)))),(F=Tv?Av(t,n):Ov(t,n))&&(et=Yl(E,"onBeforeInput"),0<et.length&&(ut=new Xf("onBeforeInput","beforeinput",null,n,_),V.push({event:ut,listeners:et}),ut.data=F)),mb(V,t,E,n,_)}_m(V,e)})}function sr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var o=t,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=Di(t,n),o!=null&&r.unshift(sr(t,o,u)),o=Di(t,e),o!=null&&r.push(sr(t,o,u))),t.tag===3)return r;t=t.return}return[]}function ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Nm(t,e,n,r,o){for(var u=e._reactName,h=[];n!==null&&n!==r;){var v=n,x=v.alternate,E=v.stateNode;if(v=v.tag,x!==null&&x===r)break;v!==5&&v!==26&&v!==27||E===null||(x=E,o?(E=Di(n,u),E!=null&&h.unshift(sr(n,E,x))):o||(E=Di(n,u),E!=null&&h.push(sr(n,E,x)))),n=n.return}h.length!==0&&t.push({event:e,listeners:h})}var vb=/\r\n?/g,bb=/\u0000|\uFFFD/g;function Vm(t){return(typeof t=="string"?t:""+t).replace(vb,`
`).replace(bb,"")}function jm(t,e){return e=Vm(e),Vm(t)===e}function Xl(){}function Tt(t,e,n,r,o,u){switch(n){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||wa(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&wa(t,""+r);break;case"className":Jr(t,"class",r);break;case"tabIndex":Jr(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jr(t,n,r);break;case"style":Bf(t,r,u);break;case"data":if(e!=="object"){Jr(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=$r(""+r),t.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Tt(t,e,"name",o.name,o,null),Tt(t,e,"formEncType",o.formEncType,o,null),Tt(t,e,"formMethod",o.formMethod,o,null),Tt(t,e,"formTarget",o.formTarget,o,null)):(Tt(t,e,"encType",o.encType,o,null),Tt(t,e,"method",o.method,o,null),Tt(t,e,"target",o.target,o,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=$r(""+r),t.setAttribute(n,r);break;case"onClick":r!=null&&(t.onclick=Xl);break;case"onScroll":r!=null&&dt("scroll",t);break;case"onScrollEnd":r!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(o.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}n=$r(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""+r):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":r===!0?t.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,r):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(n,r):t.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(n):t.setAttribute(n,r);break;case"popover":dt("beforetoggle",t),dt("toggle",t),Kr(t,"popover",r);break;case"xlinkActuate":en(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":en(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":en(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":en(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":en(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":en(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":en(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":en(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":en(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Kr(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Jy.get(n)||n,Kr(t,n,r))}}function Ru(t,e,n,r,o,u){switch(n){case"style":Bf(t,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(o.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof r=="string"?wa(t,r):(typeof r=="number"||typeof r=="bigint")&&wa(t,""+r);break;case"onScroll":r!=null&&dt("scroll",t);break;case"onScrollEnd":r!=null&&dt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ef.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),e=n.slice(2,o?n.length-7:void 0),u=t[ue]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,o),typeof r=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,r,o);break t}n in t?t[n]=r:r===!0?t.setAttribute(n,""):Kr(t,n,r)}}}function te(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var r=!1,o=!1,u;for(u in n)if(n.hasOwnProperty(u)){var h=n[u];if(h!=null)switch(u){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Tt(t,e,u,h,n,null)}}o&&Tt(t,e,"srcSet",n.srcSet,n,null),r&&Tt(t,e,"src",n.src,n,null);return;case"input":dt("invalid",t);var v=u=h=o=null,x=null,E=null;for(r in n)if(n.hasOwnProperty(r)){var _=n[r];if(_!=null)switch(r){case"name":o=_;break;case"type":h=_;break;case"checked":x=_;break;case"defaultChecked":E=_;break;case"value":u=_;break;case"defaultValue":v=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,e));break;default:Tt(t,e,r,_,n,null)}}Nf(t,u,v,x,E,h,o,!1),Fr(t);return;case"select":dt("invalid",t),r=h=u=null;for(o in n)if(n.hasOwnProperty(o)&&(v=n[o],v!=null))switch(o){case"value":u=v;break;case"defaultValue":h=v;break;case"multiple":r=v;default:Tt(t,e,o,v,n,null)}e=u,n=h,t.multiple=!!r,e!=null?Ca(t,!!r,e,!1):n!=null&&Ca(t,!!r,n,!0);return;case"textarea":dt("invalid",t),u=o=r=null;for(h in n)if(n.hasOwnProperty(h)&&(v=n[h],v!=null))switch(h){case"value":r=v;break;case"defaultValue":o=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(91));break;default:Tt(t,e,h,v,n,null)}jf(t,r,o,u),Fr(t);return;case"option":for(x in n)if(n.hasOwnProperty(x)&&(r=n[x],r!=null))switch(x){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Tt(t,e,x,r,n,null)}return;case"dialog":dt("beforetoggle",t),dt("toggle",t),dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(r=0;r<or.length;r++)dt(or[r],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(r=n[E],r!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Tt(t,e,E,r,n,null)}return;default:if(Xo(e)){for(_ in n)n.hasOwnProperty(_)&&(r=n[_],r!==void 0&&Ru(t,e,_,r,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(r=n[v],r!=null&&Tt(t,e,v,r,n,null))}function xb(t,e,n,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,h=null,v=null,x=null,E=null,_=null;for(z in n){var V=n[z];if(n.hasOwnProperty(z)&&V!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":x=V;default:r.hasOwnProperty(z)||Tt(t,e,z,null,r,V)}}for(var w in r){var z=r[w];if(V=n[w],r.hasOwnProperty(w)&&(z!=null||V!=null))switch(w){case"type":u=z;break;case"name":o=z;break;case"checked":E=z;break;case"defaultChecked":_=z;break;case"value":h=z;break;case"defaultValue":v=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,e));break;default:z!==V&&Tt(t,e,w,z,r,V)}}Po(t,h,v,x,E,_,u,o);return;case"select":z=h=v=w=null;for(u in n)if(x=n[u],n.hasOwnProperty(u)&&x!=null)switch(u){case"value":break;case"multiple":z=x;default:r.hasOwnProperty(u)||Tt(t,e,u,null,r,x)}for(o in r)if(u=r[o],x=n[o],r.hasOwnProperty(o)&&(u!=null||x!=null))switch(o){case"value":w=u;break;case"defaultValue":v=u;break;case"multiple":h=u;default:u!==x&&Tt(t,e,o,u,r,x)}e=v,n=h,r=z,w!=null?Ca(t,!!n,w,!1):!!r!=!!n&&(e!=null?Ca(t,!!n,e,!0):Ca(t,!!n,n?[]:"",!1));return;case"textarea":z=w=null;for(v in n)if(o=n[v],n.hasOwnProperty(v)&&o!=null&&!r.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Tt(t,e,v,null,r,o)}for(h in r)if(o=r[h],u=n[h],r.hasOwnProperty(h)&&(o!=null||u!=null))switch(h){case"value":w=o;break;case"defaultValue":z=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==u&&Tt(t,e,h,o,r,u)}Vf(t,w,z);return;case"option":for(var at in n)if(w=n[at],n.hasOwnProperty(at)&&w!=null&&!r.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:Tt(t,e,at,null,r,w)}for(x in r)if(w=r[x],z=n[x],r.hasOwnProperty(x)&&w!==z&&(w!=null||z!=null))switch(x){case"selected":t.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Tt(t,e,x,w,r,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in n)w=n[tt],n.hasOwnProperty(tt)&&w!=null&&!r.hasOwnProperty(tt)&&Tt(t,e,tt,null,r,w);for(E in r)if(w=r[E],z=n[E],r.hasOwnProperty(E)&&w!==z&&(w!=null||z!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,e));break;default:Tt(t,e,E,w,r,z)}return;default:if(Xo(e)){for(var At in n)w=n[At],n.hasOwnProperty(At)&&w!==void 0&&!r.hasOwnProperty(At)&&Ru(t,e,At,void 0,r,w);for(_ in r)w=r[_],z=n[_],!r.hasOwnProperty(_)||w===z||w===void 0&&z===void 0||Ru(t,e,_,w,r,z);return}}for(var O in n)w=n[O],n.hasOwnProperty(O)&&w!=null&&!r.hasOwnProperty(O)&&Tt(t,e,O,null,r,w);for(V in r)w=r[V],z=n[V],!r.hasOwnProperty(V)||w===z||w==null&&z==null||Tt(t,e,V,w,r,z)}var Cu=null,wu=null;function Gl(t){return t.nodeType===9?t:t.ownerDocument}function Um(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _u=null;function Sb(){var t=window.event;return t&&t.type==="popstate"?t===_u?!1:(_u=t,!0):(_u=null,!1)}var Hm=typeof setTimeout=="function"?setTimeout:void 0,Tb=typeof clearTimeout=="function"?clearTimeout:void 0,qm=typeof Promise=="function"?Promise:void 0,Ab=typeof queueMicrotask=="function"?queueMicrotask:typeof qm<"u"?function(t){return qm.resolve(null).then(t).catch(Ob)}:Hm;function Ob(t){setTimeout(function(){throw t})}function qn(t){return t==="head"}function Lm(t,e){var n=e,r=0,o=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<r&&8>r){n=r;var h=t.ownerDocument;if(n&1&&ur(h.documentElement),n&2&&ur(h.body),n&4)for(n=h.head,ur(n),h=n.firstChild;h;){var v=h.nextSibling,x=h.nodeName;h[Oi]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&h.rel.toLowerCase()==="stylesheet"||n.removeChild(h),h=v}}if(o===0){t.removeChild(u),yr(e);return}o--}else n==="$"||n==="$?"||n==="$!"?o++:r=n.charCodeAt(0)-48;else r=0;n=u}while(n);yr(e)}function ku(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ku(n),Bo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Mb(t,e,n,r){for(;t.nodeType===1;){var o=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Oi])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==o.rel||t.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||t.getAttribute("title")!==(o.title==null?null:o.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(o.src==null?null:o.src)||t.getAttribute("type")!==(o.type==null?null:o.type)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Le(t.nextSibling),t===null)break}return null}function Db(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Le(t.nextSibling),t===null))return null;return t}function Nu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Eb(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var r=function(){e(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Le(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Vu=null;function Pm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function Ym(t,e,n){switch(e=Gl(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function ur(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Bo(t)}var Ne=new Map,Xm=new Set;function Zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var gn=P.d;P.d={f:Rb,r:Cb,D:wb,C:zb,L:_b,m:kb,X:Vb,S:Nb,M:jb};function Rb(){var t=gn.f(),e=Ul();return t||e}function Cb(t){var e=Ma(t);e!==null&&e.tag===5&&e.type==="form"?ch(e):gn.r(t)}var ri=typeof document>"u"?null:document;function Gm(t,e,n){var r=ri;if(r&&typeof e=="string"&&e){var o=Ee(e);o='link[rel="'+t+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),Xm.has(o)||(Xm.add(o),t={rel:t,crossOrigin:n,href:e},r.querySelector(o)===null&&(e=r.createElement("link"),te(e,"link",t),Kt(e),r.head.appendChild(e)))}}function wb(t){gn.D(t),Gm("dns-prefetch",t,null)}function zb(t,e){gn.C(t,e),Gm("preconnect",t,e)}function _b(t,e,n){gn.L(t,e,n);var r=ri;if(r&&t&&e){var o='link[rel="preload"][as="'+Ee(e)+'"]';e==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Ee(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Ee(n.imageSizes)+'"]')):o+='[href="'+Ee(t)+'"]';var u=o;switch(e){case"style":u=li(t);break;case"script":u=oi(t)}Ne.has(u)||(t=y({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ne.set(u,t),r.querySelector(o)!==null||e==="style"&&r.querySelector(cr(u))||e==="script"&&r.querySelector(fr(u))||(e=r.createElement("link"),te(e,"link",t),Kt(e),r.head.appendChild(e)))}}function kb(t,e){gn.m(t,e);var n=ri;if(n&&t){var r=e&&typeof e.as=="string"?e.as:"script",o='link[rel="modulepreload"][as="'+Ee(r)+'"][href="'+Ee(t)+'"]',u=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=oi(t)}if(!Ne.has(u)&&(t=y({rel:"modulepreload",href:t},e),Ne.set(u,t),n.querySelector(o)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(fr(u)))return}r=n.createElement("link"),te(r,"link",t),Kt(r),n.head.appendChild(r)}}}function Nb(t,e,n){gn.S(t,e,n);var r=ri;if(r&&t){var o=Da(r).hoistableStyles,u=li(t);e=e||"default";var h=o.get(u);if(!h){var v={loading:0,preload:null};if(h=r.querySelector(cr(u)))v.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ne.get(u))&&ju(t,n);var x=h=r.createElement("link");Kt(x),te(x,"link",t),x._p=new Promise(function(E,_){x.onload=E,x.onerror=_}),x.addEventListener("load",function(){v.loading|=1}),x.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Ql(h,e,r)}h={type:"stylesheet",instance:h,count:1,state:v},o.set(u,h)}}}function Vb(t,e){gn.X(t,e);var n=ri;if(n&&t){var r=Da(n).hoistableScripts,o=oi(t),u=r.get(o);u||(u=n.querySelector(fr(o)),u||(t=y({src:t,async:!0},e),(e=Ne.get(o))&&Uu(t,e),u=n.createElement("script"),Kt(u),te(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(o,u))}}function jb(t,e){gn.M(t,e);var n=ri;if(n&&t){var r=Da(n).hoistableScripts,o=oi(t),u=r.get(o);u||(u=n.querySelector(fr(o)),u||(t=y({src:t,async:!0,type:"module"},e),(e=Ne.get(o))&&Uu(t,e),u=n.createElement("script"),Kt(u),te(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(o,u))}}function Zm(t,e,n,r){var o=(o=rt.current)?Zl(o):null;if(!o)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=li(n.href),n=Da(o).hoistableStyles,r=n.get(e),r||(r={type:"style",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=li(n.href);var u=Da(o).hoistableStyles,h=u.get(t);if(h||(o=o.ownerDocument||o,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,h),(u=o.querySelector(cr(t)))&&!u._p&&(h.instance=u,h.state.loading=5),Ne.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ne.set(t,n),u||Ub(o,t,n,h.state))),e&&r===null)throw Error(s(528,""));return h}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=oi(n),n=Da(o).hoistableScripts,r=n.get(e),r||(r={type:"script",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function li(t){return'href="'+Ee(t)+'"'}function cr(t){return'link[rel="stylesheet"]['+t+"]"}function Qm(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function Ub(t,e,n,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),te(e,"link",n),Kt(e),t.head.appendChild(e))}function oi(t){return'[src="'+Ee(t)+'"]'}function fr(t){return"script[async]"+t}function Km(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Ee(n.href)+'"]');if(r)return e.instance=r,Kt(r),r;var o=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Kt(r),te(r,"style",o),Ql(r,n.precedence,t),e.instance=r;case"stylesheet":o=li(n.href);var u=t.querySelector(cr(o));if(u)return e.state.loading|=4,e.instance=u,Kt(u),u;r=Qm(n),(o=Ne.get(o))&&ju(r,o),u=(t.ownerDocument||t).createElement("link"),Kt(u);var h=u;return h._p=new Promise(function(v,x){h.onload=v,h.onerror=x}),te(u,"link",r),e.state.loading|=4,Ql(u,n.precedence,t),e.instance=u;case"script":return u=oi(n.src),(o=t.querySelector(fr(u)))?(e.instance=o,Kt(o),o):(r=n,(o=Ne.get(u))&&(r=y({},n),Uu(r,o)),t=t.ownerDocument||t,o=t.createElement("script"),Kt(o),te(o,"link",r),t.head.appendChild(o),e.instance=o);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Ql(r,n.precedence,t));return e.instance}function Ql(t,e,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,u=o,h=0;h<r.length;h++){var v=r[h];if(v.dataset.precedence===e)u=v;else if(u!==o)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function ju(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Uu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Kl=null;function Jm(t,e,n){if(Kl===null){var r=new Map,o=Kl=new Map;o.set(n,r)}else o=Kl,r=o.get(n),r||(r=new Map,o.set(n,r));if(r.has(t))return r;for(r.set(t,null),n=n.getElementsByTagName(t),o=0;o<n.length;o++){var u=n[o];if(!(u[Oi]||u[ae]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var h=u.getAttribute(e)||"";h=t+h;var v=r.get(h);v?v.push(u):r.set(h,[u])}}return r}function Fm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Bb(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Wm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var dr=null;function Hb(){}function qb(t,e,n){if(dr===null)throw Error(s(475));var r=dr;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var o=li(n.href),u=t.querySelector(cr(o));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=Jl.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=u,Kt(u);return}u=t.ownerDocument||t,n=Qm(n),(o=Ne.get(o))&&ju(n,o),u=u.createElement("link"),Kt(u);var h=u;h._p=new Promise(function(v,x){h.onload=v,h.onerror=x}),te(u,"link",n),e.instance=u}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=Jl.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function Lb(){if(dr===null)throw Error(s(475));var t=dr;return t.stylesheets&&t.count===0&&Bu(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&Bu(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function Jl(){if(this.count--,this.count===0){if(this.stylesheets)Bu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fl=null;function Bu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fl=new Map,e.forEach(Pb,t),Fl=null,Jl.call(t))}function Pb(t,e){if(!(e.state.loading&4)){var n=Fl.get(t);if(n)var r=n.get(null);else{n=new Map,Fl.set(t,n);for(var o=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var h=o[u];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),r=h)}r&&n.set(null,r)}o=e.instance,h=o.getAttribute("data-precedence"),u=n.get(h)||r,u===r&&n.set(null,o),n.set(h,o),this.count++,r=Jl.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),u?u.parentNode.insertBefore(o,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(o,t.firstChild)),e.state.loading|=4}}var hr={$$typeof:H,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Yb(t,e,n,r,o,u,h,v){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=No(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=No(0),this.hiddenUpdates=No(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function $m(t,e,n,r,o,u,h,v,x,E,_,V){return t=new Yb(t,e,n,h,v,x,E,V),e=1,u===!0&&(e|=24),u=be(3,null,null,e),t.current=u,u.stateNode=t,e=bs(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:r,isDehydrated:n,cache:e},As(u),t}function Im(t){return t?(t=Ba,t):Ba}function t0(t,e,n,r,o,u){o=Im(o),r.context===null?r.context=o:r.pendingContext=o,r=En(e),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Rn(t,r,e),n!==null&&(Oe(n,t,e),Yi(n,t,e))}function e0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hu(t,e){e0(t,e),(t=t.alternate)&&e0(t,e)}function n0(t){if(t.tag===13){var e=Ua(t,67108864);e!==null&&Oe(e,t,67108864),Hu(t,67108864)}}var Wl=!0;function Xb(t,e,n,r){var o=k.T;k.T=null;var u=P.p;try{P.p=2,qu(t,e,n,r)}finally{P.p=u,k.T=o}}function Gb(t,e,n,r){var o=k.T;k.T=null;var u=P.p;try{P.p=8,qu(t,e,n,r)}finally{P.p=u,k.T=o}}function qu(t,e,n,r){if(Wl){var o=Lu(r);if(o===null)Eu(t,e,r,$l,n),i0(t,r);else if(Qb(o,t,e,n,r))r.stopPropagation();else if(i0(t,r),e&4&&-1<Zb.indexOf(t)){for(;o!==null;){var u=Ma(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var h=$n(u.pendingLanes);if(h!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;h;){var x=1<<31-ye(h);v.entanglements[1]|=x,h&=~x}We(u),(bt&6)===0&&(Vl=Ze()+500,lr(0))}}break;case 13:v=Ua(u,2),v!==null&&Oe(v,u,2),Ul(),Hu(u,2)}if(u=Lu(r),u===null&&Eu(t,e,r,$l,n),u===o)break;o=u}o!==null&&r.stopPropagation()}else Eu(t,e,r,null,n)}}function Lu(t){return t=Zo(t),Pu(t)}var $l=null;function Pu(t){if($l=null,t=Oa(t),t!==null){var e=d(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=f(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return $l=t,null}function a0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zy()){case yf:return 2;case vf:return 8;case Xr:case _y:return 32;case bf:return 268435456;default:return 32}default:return 32}}var Yu=!1,Ln=null,Pn=null,Yn=null,mr=new Map,pr=new Map,Xn=[],Zb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i0(t,e){switch(t){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":mr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(e.pointerId)}}function gr(t,e,n,r,o,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:u,targetContainers:[o]},e!==null&&(e=Ma(e),e!==null&&n0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function Qb(t,e,n,r,o){switch(e){case"focusin":return Ln=gr(Ln,t,e,n,r,o),!0;case"dragenter":return Pn=gr(Pn,t,e,n,r,o),!0;case"mouseover":return Yn=gr(Yn,t,e,n,r,o),!0;case"pointerover":var u=o.pointerId;return mr.set(u,gr(mr.get(u)||null,t,e,n,r,o)),!0;case"gotpointercapture":return u=o.pointerId,pr.set(u,gr(pr.get(u)||null,t,e,n,r,o)),!0}return!1}function r0(t){var e=Oa(t.target);if(e!==null){var n=d(e);if(n!==null){if(e=n.tag,e===13){if(e=f(n),e!==null){t.blockedOn=e,qy(t.priority,function(){if(n.tag===13){var r=Ae();r=Vo(r);var o=Ua(n,r);o!==null&&Oe(o,n,r),Hu(n,r)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lu(t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Go=r,n.target.dispatchEvent(r),Go=null}else return e=Ma(n),e!==null&&n0(e),t.blockedOn=n,!1;e.shift()}return!0}function l0(t,e,n){Il(t)&&n.delete(e)}function Kb(){Yu=!1,Ln!==null&&Il(Ln)&&(Ln=null),Pn!==null&&Il(Pn)&&(Pn=null),Yn!==null&&Il(Yn)&&(Yn=null),mr.forEach(l0),pr.forEach(l0)}function to(t,e){t.blockedOn===e&&(t.blockedOn=null,Yu||(Yu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Kb)))}var eo=null;function o0(t){eo!==t&&(eo=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){eo===t&&(eo=null);for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],o=t[e+2];if(typeof r!="function"){if(Pu(r||n)===null)continue;break}var u=Ma(n);u!==null&&(t.splice(e,3),e-=3,Ps(u,{pending:!0,data:o,method:n.method,action:r},r,o))}}))}function yr(t){function e(x){return to(x,t)}Ln!==null&&to(Ln,t),Pn!==null&&to(Pn,t),Yn!==null&&to(Yn,t),mr.forEach(e),pr.forEach(e);for(var n=0;n<Xn.length;n++){var r=Xn[n];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)r0(n),n.blockedOn===null&&Xn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],h=o[ue]||null;if(typeof u=="function")h||o0(n);else if(h){var v=null;if(u&&u.hasAttribute("formAction")){if(o=u,h=u[ue]||null)v=h.formAction;else if(Pu(o)!==null)continue}else v=h.action;typeof v=="function"?n[r+1]=v:(n.splice(r,3),r-=3),o0(n)}}}function Xu(t){this._internalRoot=t}no.prototype.render=Xu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,r=Ae();t0(n,r,t,e,null,null)},no.prototype.unmount=Xu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t0(t.current,2,null,t,null,null),Ul(),e[Aa]=null}};function no(t){this._internalRoot=t}no.prototype.unstable_scheduleHydration=function(t){if(t){var e=Of();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&r0(t)}};var s0=i.version;if(s0!=="19.1.1")throw Error(s(527,s0,"19.1.1"));P.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(e),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Jb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{Si=ao.inject(Jb),ge=ao}catch{}}return br.createRoot=function(t,e){if(!c(t))throw Error(s(299));var n=!1,r="",o=Oh,u=Mh,h=Dh,v=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(v=e.unstable_transitionCallbacks)),e=$m(t,1,!1,null,null,n,r,o,u,h,v,null),t[Aa]=e.current,Du(t),new Xu(e)},br.hydrateRoot=function(t,e,n){if(!c(t))throw Error(s(299));var r=!1,o="",u=Oh,h=Mh,v=Dh,x=null,E=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(x=n.unstable_transitionCallbacks),n.formState!==void 0&&(E=n.formState)),e=$m(t,1,!0,e,n??null,r,o,u,h,v,x,E),e.context=Im(null),n=e.current,r=Ae(),r=Vo(r),o=En(r),o.callback=null,Rn(n,o,r),n=r,e.current.lanes=n,Ai(e,n),We(e),t[Aa]=e.current,Du(t),new no(e)},br.version="19.1.1",br}var v0;function l1(){if(v0)return Qu.exports;v0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Qu.exports=r1(),Qu.exports}var o1=l1();const s1=[{id:1,image:{thumbnail:"/MenuImages/image-waffle-thumbnail.jpg",mobile:"/MenuImages/image-waffle-mobile.jpg",tablet:"/MenuImages/image-waffle-tablet.jpg",desktop:"/MenuImages/image-waffle-desktop.jpg"},name:"Waffle with Berries",category:"Waffle",price:6.5},{id:2,image:{thumbnail:"/MenuImages/image-creme-brulee-thumbnail.jpg",mobile:"/MenuImages/image-creme-brulee-mobile.jpg",tablet:"/MenuImages/image-creme-brulee-tablet.jpg",desktop:"/MenuImages/image-creme-brulee-desktop.jpg"},name:"Vanilla Bean Crème Brûlée",category:"Crème Brûlée",price:7},{id:3,image:{thumbnail:"/MenuImages/image-macaron-thumbnail.jpg",mobile:"/MenuImages/image-macaron-mobile.jpg",tablet:"/MenuImages/image-macaron-tablet.jpg",desktop:"/MenuImages/image-macaron-desktop.jpg"},name:"Macaron Mix of Five",category:"Macaron",price:8},{id:4,image:{thumbnail:"/MenuImages/image-tiramisu-thumbnail.jpg",mobile:"/MenuImages/image-tiramisu-mobile.jpg",tablet:"/MenuImages/image-tiramisu-tablet.jpg",desktop:"/MenuImages/image-tiramisu-desktop.jpg"},name:"Classic Tiramisu",category:"Tiramisu",price:5.5},{id:5,image:{thumbnail:"/MenuImages/image-baklava-thumbnail.jpg",mobile:"/MenuImages/image-baklava-mobile.jpg",tablet:"/MenuImages/image-baklava-tablet.jpg",desktop:"/MenuImages/image-baklava-desktop.jpg"},name:"Pistachio Baklava",category:"Baklava",price:4},{id:6,image:{thumbnail:"/MenuImages/image-meringue-thumbnail.jpg",mobile:"/MenuImages/image-meringue-mobile.jpg",tablet:"/MenuImages/image-meringue-tablet.jpg",desktop:"/MenuImages/image-meringue-desktop.jpg"},name:"Lemon Meringue Pie",category:"Pie",price:5},{id:7,image:{thumbnail:"/MenuImages/image-cake-thumbnail.jpg",mobile:"/MenuImages/image-cake-mobile.jpg",tablet:"/MenuImages/image-cake-tablet.jpg",desktop:"/MenuImages/image-cake-desktop.jpg"},name:"Red Velvet Cake",category:"Cake",price:4.5},{id:8,image:{thumbnail:"/MenuImages/image-brownie-thumbnail.jpg",mobile:"/MenuImages/image-brownie-mobile.jpg",tablet:"/MenuImages/image-brownie-tablet.jpg",desktop:"/MenuImages/image-brownie-desktop.jpg"},name:"Salted Caramel Brownie",category:"Brownie",price:4.5},{id:9,image:{thumbnail:"/MenuImages/image-panna-cotta-thumbnail.jpg",mobile:"/MenuImages/image-panna-cotta-mobile.jpg",tablet:"/MenuImages/image-panna-cotta-tablet.jpg",desktop:"/MenuImages/image-panna-cotta-desktop.jpg"},name:"Vanilla Panna Cotta",category:"Panna Cotta",price:6.5}],u1=async()=>(await new Promise(l=>setTimeout(l,1e3)),s1.map(l=>({...l,quantity:0})));function c1({key:a,fetcher:i,expireMs:l}){const[s,c]=Z.useState(null),[d,f]=Z.useState(!0),[g,p]=Z.useState(null),m=b=>Date.now()-b>l,y=async()=>{f(!0),p(null);try{const b=sessionStorage.getItem(a);if(b){const{value:R,timestamp:M}=JSON.parse(b);if(!m(M)){c(R),f(!1);return}}const S=await i();c(S),sessionStorage.setItem(a,JSON.stringify({value:S,timestamp:Date.now()}))}catch(b){p(b)}finally{f(!1)}};return Z.useEffect(()=>{y()},[a]),{data:s,loading:d,error:g,refresh:y}}const Yp=Z.createContext(void 0),Xp={menu:[],total:0,cart:[]},f1=(a,i)=>{switch(i.type){case"setMenuData":return{...a,menu:i.payload};case"addToCart":{const l=i.payload;if(!i.payload)throw new Error("Payload is required for addToCart action");const s=a.cart.some(d=>d.id===l?.id);console.log(s);const c=s?a.cart.map(d=>d.id===l.id?{...d,quantity:d.quantity+1,total:(d.quantity+1)*d.price}:d):[...a.cart,{...l,total:l.price}];return{...a,cart:c}}case"decQuantity":{const l=i.payload,s=a.cart.map(c=>c.id===l?{...c,quantity:Math.max(0,c.quantity-1)}:c).filter(c=>c.quantity>0);return{...a,cart:s}}case"removeItemFromCart":{const l=i.payload;return{...a,cart:a.cart.filter(s=>s.id!==l)}}case"startNewOrder":return{...Xp,menu:a.menu};default:throw new Error("Unknown action type!")}},Ta=()=>{const a=Z.useContext(Yp);if(!a)throw new Error("useMenu must be used inside CartProvider");return a},d1=({children:a})=>{const[i,l]=Z.useReducer(f1,Xp),{data:s,loading:c,error:d}=c1({key:"menuData",fetcher:u1,expireMs:.01*60*1e3}),f=b=>{l({type:"addToCart",payload:b})},g=b=>{l({type:"decQuantity",payload:b})},p=b=>{l({type:"removeItemFromCart",payload:b})},m=()=>{l({type:"startNewOrder"})};Z.useEffect(()=>{console.log(s),s&&l({type:"setMenuData",payload:s})},[s]);const y=Z.useMemo(()=>({...i,addToCart:f,decQuantity:g,removeItemFromCart:p,startNewOrderFn:m,isLoading:c,errorMessage:d}),[i]);return j.jsx(Yp.Provider,{value:y,children:a})},h1="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='128'%20height='128'%20fill='none'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23260F08'%20d='M8.436%20110.406c0%201.061%204.636%202.079%2012.887%202.829%208.252.75%2019.444%201.171%2031.113%201.171%2011.67%200%2022.861-.421%2031.113-1.171%208.251-.75%2012.887-1.768%2012.887-2.829%200-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67%200-22.861.422-31.113%201.172-8.251.75-12.887%201.767-12.887%202.828Z'%20opacity='.15'/%3e%3cpath%20fill='%2387635A'%20d='m119.983%2024.22-47.147%205.76%204.32%2035.36%2044.773-5.467a2.377%202.377%200%200%200%202.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986Z'/%3e%3cpath%20fill='%23AD8A85'%20d='m74.561%2044.142%2047.147-5.754%201.435%2011.778-47.142%205.758-1.44-11.782Z'/%3e%3cpath%20fill='%23CAAFA7'%20d='M85.636%2036.78a2.4%202.4%200%200%200-2.667-2.054%202.375%202.375%200%200%200-2.053%202.667l.293%202.347a3.574%203.574%200%200%201-7.066.88l-1.307-10.667%2014.48-16.88c19.253-.693%2034.133%203.6%2035.013%2010.8l1.28%2010.533a1.172%201.172%200%200%201-1.333%201.307%204.696%204.696%200%200%201-3.787-4.08%202.378%202.378%200%201%200-4.72.587l.294%202.346a2.389%202.389%200%200%201-.484%201.755%202.387%202.387%200%200%201-1.583.899%202.383%202.383%200%200%201-1.755-.484%202.378%202.378%200%200%201-.898-1.583%202.371%202.371%200%200%200-1.716-2.008%202.374%202.374%200%200%200-2.511.817%202.374%202.374%200%200%200-.493%201.751l.293%202.373a4.753%204.753%200%200%201-7.652%204.317%204.755%204.755%200%200%201-1.788-3.17l-.427-3.547a2.346%202.346%200%200%200-2.666-2.053%202.4%202.4%200%200%200-2.08%202.667l.16%201.173a2.378%202.378%200%201%201-4.72.587l-.107-1.28Z'/%3e%3cpath%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.974'%20d='m81.076%2028.966%2034.187-4.16'/%3e%3cpath%20fill='%2387635A'%20d='M7.45%2051.793c-.96%208.48%2016.746%2017.44%2039.466%2019.947%2022.72%202.506%2042.08-2.16%2043.04-10.667l-3.947%2035.493c-.96%208.48-20.24%2013.334-43.04%2010.667S2.463%2095.74%203.423%2087.18l4.026-35.387Z'/%3e%3cpath%20fill='%23AD8A85'%20d='M5.823%2065.953c-.96%208.453%2016.746%2017.44%2039.573%2020.027%2022.827%202.586%2042.053-2.187%2043.013-10.667L87.076%2087.1c-.96%208.48-20.24%2013.333-43.04%2010.666C21.236%2095.1%203.53%2086.22%204.49%2077.74l1.334-11.787Z'/%3e%3cpath%20fill='%23CAAFA7'%20d='M60.836%2042.78a119.963%20119.963%200%200%200-10.347-1.627c-24-2.667-44.453%201.893-45.333%2010.373l-2.133%2018.88a3.556%203.556%200%201%200%207.066.8%203.574%203.574%200%201%201%207.094.8l-.8%207.094a5.93%205.93%200%201%200%2011.786%201.333%203.556%203.556%200%200%201%207.067.8l-.267%202.347a3.573%203.573%200%200%200%207.094.826l.133-1.2a5.932%205.932%200%201%201%2011.787%201.36l-.4%203.52a3.573%203.573%200%200%200%207.093.827l.933-8.267a1.174%201.174%200%200%201%201.307-.906%201.146%201.146%200%200%201%201.04%201.306%205.947%205.947%200%200%200%2011.813%201.334l.534-4.72a3.556%203.556%200%200%201%207.066.8%203.573%203.573%200%200%200%207.094.826l1.786-15.546a2.373%202.373%200%200%200-2.08-2.667L44.143%2055.74l16.693-12.96Z'/%3e%3cpath%20fill='%2387635A'%20d='m59.156%2057.66%201.68-14.88-16.827%2013.173%2015.147%201.707Z'/%3e%3cpath%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.974'%20d='M9.796%2052.06c-.667%205.866%2016.24%2012.586%2037.733%2015.04%2014.774%201.68%2027.867.906%2034.854-1.654'/%3e%3c/svg%3e",Kn=({children:a,className:i,applyStyle:l=!1,onClick:s,type:c="button"})=>{const d={addToCart:" bg-rose-50  py-1 capitalize text-xs  border-red ",adjustQuantity:" bg-transparent py-1 px-2  capitalize text-xs   flex items-center justify-center",removeItem:"  capitalize text-xs  border-gray ",confirm:" bg-red text-rose-100 text-xs xs:text-sm sm:text-base p-2.5 capitalize border-green rounded-full  ",startNewOrder:" bg-red text-rose-100 text-xs xs:text-sm sm:text-base p-2.5 capitalize border-green rounded-full  ",button:""};return j.jsx("button",{className:`${i||""} ${d[c]}   `,onClick:s,children:a})};function ui({price:a=1,toFixedNum:i=2,currency:l="$"}){return`${l}${a.toFixed(i)}`}const Gp=()=>{const[a,i]=Z.useState(null),l=Z.useRef(null);return{message:a,showMessage:({message:c="example message",duration:d=2e3})=>{l.current&&clearTimeout(l.current),i(f=>f?(requestAnimationFrame(()=>i(c)),null):c),l.current=window.setTimeout(()=>i(null),d)}}},hc=()=>{const{cart:a}=Ta(),i=a.map(l=>l.total).reduce((l,s)=>l+s,0);return j.jsxs("div",{className:"flex justify-between align-middle",children:[j.jsxs("span",{className:"capitalize text-xs xs:text-sm text-rose-900 self-center  ",children:[" ","order total"]}),j.jsx("span",{className:"text-lg xs:text-xl font-bold",children:ui({price:i})})]})},m1=700,b0=({cart:a,showMessage:i,type:l})=>{const{menu:s,removeItemFromCart:c}=Ta(),[d,f]=Z.useState(!1),g=s.find(m=>m.id===a.id)?.image.thumbnail;function p(){f(!0),setTimeout(()=>{c(a.id),i&&i({message:"item removed"})},m1)}return l=="confirmList"?j.jsxs("li",{className:`flex border-b-1 border-stone-200  motion-preset-slide-downbg-rose-100 rounded-lg gap-4
        }`,children:[j.jsx("img",{src:g,alt:"item ordered thumbnail",className:"h-15 rounded-lg"}),j.jsxs("div",{className:"flex flex-col gap-2",children:[j.jsx("h4",{className:"flex-auto text-rose-900 font-semibold text-sm",children:a.name}),j.jsxs("div",{className:"flex",children:[j.jsxs("div",{className:"mr-2.5 text-red",children:[a.quantity,"x"]}),j.jsxs("div",{className:"text-rose-400 mr-1.5",children:["@",ui({price:a.price})]})]})]}),j.jsxs("div",{className:"text-rose-900 self-center flex-auto  text-end",children:[" ",ui({price:a.total})]})]}):j.jsxs("li",{className:`flex border-b-1 border-stone-200  justify-between motion-preset-slide-down ${d?"animate-slide-up":""}`,children:[j.jsxs("div",{className:"flex flex-col gap-2",children:[j.jsx("h4",{className:"flex-auto text-rose-900 font-semibold text-sm",children:a.name}),j.jsxs("div",{className:"flex",children:[j.jsxs("div",{className:"mr-2.5 text-red",children:[a.quantity,"x"]}),j.jsxs("div",{className:"text-rose-400 mr-1.5",children:["@",ui({price:a.price})]}),j.jsxs("div",{className:"text-rose-500 ",children:[" ",ui({price:a.total})]})]})]})," ",j.jsx(Kn,{type:"removeItem",onClick:p,className:"shrink-0 ",children:j.jsx("img",{className:"h-4 w-4",src:"/Svgs/removeItem.svg",alt:""})})]})},Zp=({children:a,isOpen:i,className:l,animationClassName:s})=>(console.log(i),i?j.jsx("dialog",{className:`${l} text-center ${i&&s}`,open:i,children:a}):null),Qp=" fixed top-[5vh] left-1/2 -translate-x-1/2 w-fit bg-rose-50 text-black text-xs px-2 py-1 rounded-lg outline-1 outline-red font-semibold ",Kp="animate-slide-down",x0=({cartList:a,message:i})=>{const{cart:l}=Ta(),s=Z.useRef(null),c=l.length===0;function d(f){f.target===f.currentTarget&&s.current?.focus()}return Z.useEffect(()=>{const f=s.current;l.length>0&&f?.scrollTo({top:f.scrollHeight,behavior:"smooth"})},[l.length]),j.jsxs(j.Fragment,{children:[j.jsxs("h1",{className:"capitalize text-lg md:text-xl font-bold text-red border-b-0",children:["Your Cart (",l.length,")"]}),j.jsxs("div",{className:" bg-rose-50 flex  focus:overflow-auto overflow-auto sm:overflow-hidden flex-col gap-4 back ",ref:s,tabIndex:-1,onClick:f=>d(f),children:[c?j.jsxs(j.Fragment,{children:[j.jsx("img",{src:h1,className:"  mx-auto",alt:"empty cart ilustration"}),j.jsx("p",{className:"self-center",children:"Your added items will apppear here"})]}):a,j.jsx(Zp,{isOpen:!!i,className:Qp,animationClassName:Kp,children:j.jsx("p",{children:i})})]})]})},S0=()=>j.jsxs("div",{className:"flex py-2  items-center justify-center gap-2  bg-rose-100  rounded-sm mx-1",children:[j.jsx("img",{className:"",src:"/Svgs/carbon-delivery.svg",alt:""}),j.jsxs("div",{className:"text-xs xs:text-sm",children:["This is a ",j.jsx("span",{className:"font-bold",children:"carbon-neutral "}),"delivery"]})]}),p1=({children:a,closeModalFn:i})=>{function l(s){s.target===s.currentTarget&&i()}return j.jsx("div",{className:"bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/40 ",onClick:l,children:a})},T0=({cart:a,setIsModalOpen:i,hasOrderConfirm:l,changeToConfirmState:s})=>{console.log(s);const{startNewOrderFn:c}=Ta();return!l&&s?j.jsxs("div",{className:"bg-rose-50 w-150 p-6 max-h-200 h-150 flex flex-col justify-between rounded-xl",children:[j.jsx("img",{src:"/Svgs/confirm-order.svg",alt:"",className:"w-10 "}),j.jsx("h1",{className:"text-3xl text-rose-900 font-bold",children:"Order Confirmed"}),j.jsx("p",{className:"text-xs",children:"We hope you enjoy your food!"}),j.jsxs("div",{className:"flex-auto max-h-100 h-fit bg-rose-100 flex p-4  flex-col justify-between rounded-xl ",children:[j.jsx("ul",{className:"overflow-auto flex flex-col gap-4",children:a}),j.jsx(hc,{})]}),j.jsx(Kn,{type:"confirm",onClick:()=>s(!0),children:"Confirm Order"})]}):j.jsxs("div",{className:"bg-rose-50 w-150 p-6 max-h-200 h-150 flex flex-col justify-between rounded-xl",children:[j.jsx("img",{src:"/Svgs/confirm-order.svg",alt:"",className:"min-h-100 "}),j.jsx(Kn,{type:"startNewOrder",onClick:()=>{c(),i(),s(!1)},children:"Start New Order"})]})},Jp=Z.createContext({});function g1(a){const i=Z.useRef(null);return i.current===null&&(i.current=a()),i.current}const Bc=typeof window<"u",y1=Bc?Z.useLayoutEffect:Z.useEffect,Hc=Z.createContext(null);function qc(a,i){a.indexOf(i)===-1&&a.push(i)}function Lc(a,i){const l=a.indexOf(i);l>-1&&a.splice(l,1)}const bn=(a,i,l)=>l>i?i:l<a?a:l;let Pc=()=>{};const xn={},Fp=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function Wp(a){return typeof a=="object"&&a!==null}const $p=a=>/^0[^.\s]+$/u.test(a);function Yc(a){let i;return()=>(i===void 0&&(i=a()),i)}const Be=a=>a,v1=(a,i)=>l=>i(a(l)),Vr=(...a)=>a.reduce(v1),Cr=(a,i,l)=>{const s=i-a;return s===0?1:(l-a)/s};class Xc{constructor(){this.subscriptions=[]}add(i){return qc(this.subscriptions,i),()=>Lc(this.subscriptions,i)}notify(i,l,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,l,s);else for(let d=0;d<c;d++){const f=this.subscriptions[d];f&&f(i,l,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const $e=a=>a*1e3,Ue=a=>a/1e3;function Ip(a,i){return i?a*(1e3/i):0}const tg=(a,i,l)=>(((1-3*l+3*i)*a+(3*l-6*i))*a+3*i)*a,b1=1e-7,x1=12;function S1(a,i,l,s,c){let d,f,g=0;do f=i+(l-i)/2,d=tg(f,s,c)-a,d>0?l=f:i=f;while(Math.abs(d)>b1&&++g<x1);return f}function jr(a,i,l,s){if(a===i&&l===s)return Be;const c=d=>S1(d,0,1,a,l);return d=>d===0||d===1?d:tg(c(d),i,s)}const eg=a=>i=>i<=.5?a(2*i)/2:(2-a(2*(1-i)))/2,ng=a=>i=>1-a(1-i),ag=jr(.33,1.53,.69,.99),Gc=ng(ag),ig=eg(Gc),rg=a=>(a*=2)<1?.5*Gc(a):.5*(2-Math.pow(2,-10*(a-1))),Zc=a=>1-Math.sin(Math.acos(a)),lg=ng(Zc),og=eg(Zc),T1=jr(.42,0,1,1),A1=jr(0,0,.58,1),sg=jr(.42,0,.58,1),O1=a=>Array.isArray(a)&&typeof a[0]!="number",ug=a=>Array.isArray(a)&&typeof a[0]=="number",M1={linear:Be,easeIn:T1,easeInOut:sg,easeOut:A1,circIn:Zc,circInOut:og,circOut:lg,backIn:Gc,backInOut:ig,backOut:ag,anticipate:rg},D1=a=>typeof a=="string",A0=a=>{if(ug(a)){Pc(a.length===4);const[i,l,s,c]=a;return jr(i,l,s,c)}else if(D1(a))return M1[a];return a},io=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function E1(a,i){let l=new Set,s=new Set,c=!1,d=!1;const f=new WeakSet;let g={delta:0,timestamp:0,isProcessing:!1};function p(y){f.has(y)&&(m.schedule(y),a()),y(g)}const m={schedule:(y,b=!1,S=!1)=>{const M=S&&c?l:s;return b&&f.add(y),M.has(y)||M.add(y),y},cancel:y=>{s.delete(y),f.delete(y)},process:y=>{if(g=y,c){d=!0;return}c=!0,[l,s]=[s,l],l.forEach(p),l.clear(),c=!1,d&&(d=!1,m.process(y))}};return m}const R1=40;function cg(a,i){let l=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},d=()=>l=!0,f=io.reduce((H,W)=>(H[W]=E1(d),H),{}),{setup:g,read:p,resolveKeyframes:m,preUpdate:y,update:b,preRender:S,render:R,postRender:M}=f,C=()=>{const H=xn.useManualTiming?c.timestamp:performance.now();l=!1,xn.useManualTiming||(c.delta=s?1e3/60:Math.max(Math.min(H-c.timestamp,R1),1)),c.timestamp=H,c.isProcessing=!0,g.process(c),p.process(c),m.process(c),y.process(c),b.process(c),S.process(c),R.process(c),M.process(c),c.isProcessing=!1,l&&i&&(s=!1,a(C))},U=()=>{l=!0,s=!0,c.isProcessing||a(C)};return{schedule:io.reduce((H,W)=>{const L=f[W];return H[W]=(nt,lt=!1,$=!1)=>(l||U(),L.schedule(nt,lt,$)),H},{}),cancel:H=>{for(let W=0;W<io.length;W++)f[io[W]].cancel(H)},state:c,steps:f}}const{schedule:wt,cancel:Jn,state:ee,steps:Wu}=cg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Be,!0);let go;function C1(){go=void 0}const me={now:()=>(go===void 0&&me.set(ee.isProcessing||xn.useManualTiming?ee.timestamp:performance.now()),go),set:a=>{go=a,queueMicrotask(C1)}},fg=a=>i=>typeof i=="string"&&i.startsWith(a),Qc=fg("--"),w1=fg("var(--"),Kc=a=>w1(a)?z1.test(a.split("/*")[0].trim()):!1,z1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,vi={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},wr={...vi,transform:a=>bn(0,1,a)},ro={...vi,default:1},Or=a=>Math.round(a*1e5)/1e5,Jc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function _1(a){return a==null}const k1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Fc=(a,i)=>l=>!!(typeof l=="string"&&k1.test(l)&&l.startsWith(a)||i&&!_1(l)&&Object.prototype.hasOwnProperty.call(l,i)),dg=(a,i,l)=>s=>{if(typeof s!="string")return s;const[c,d,f,g]=s.match(Jc);return{[a]:parseFloat(c),[i]:parseFloat(d),[l]:parseFloat(f),alpha:g!==void 0?parseFloat(g):1}},N1=a=>bn(0,255,a),$u={...vi,transform:a=>Math.round(N1(a))},va={test:Fc("rgb","red"),parse:dg("red","green","blue"),transform:({red:a,green:i,blue:l,alpha:s=1})=>"rgba("+$u.transform(a)+", "+$u.transform(i)+", "+$u.transform(l)+", "+Or(wr.transform(s))+")"};function V1(a){let i="",l="",s="",c="";return a.length>5?(i=a.substring(1,3),l=a.substring(3,5),s=a.substring(5,7),c=a.substring(7,9)):(i=a.substring(1,2),l=a.substring(2,3),s=a.substring(3,4),c=a.substring(4,5),i+=i,l+=l,s+=s,c+=c),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const mc={test:Fc("#"),parse:V1,transform:va.transform},Ur=a=>({test:i=>typeof i=="string"&&i.endsWith(a)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${a}`}),Qn=Ur("deg"),Ie=Ur("%"),it=Ur("px"),j1=Ur("vh"),U1=Ur("vw"),O0={...Ie,parse:a=>Ie.parse(a)/100,transform:a=>Ie.transform(a*100)},ci={test:Fc("hsl","hue"),parse:dg("hue","saturation","lightness"),transform:({hue:a,saturation:i,lightness:l,alpha:s=1})=>"hsla("+Math.round(a)+", "+Ie.transform(Or(i))+", "+Ie.transform(Or(l))+", "+Or(wr.transform(s))+")"},Lt={test:a=>va.test(a)||mc.test(a)||ci.test(a),parse:a=>va.test(a)?va.parse(a):ci.test(a)?ci.parse(a):mc.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?va.transform(a):ci.transform(a),getAnimatableNone:a=>{const i=Lt.parse(a);return i.alpha=0,Lt.transform(i)}},B1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function H1(a){return isNaN(a)&&typeof a=="string"&&(a.match(Jc)?.length||0)+(a.match(B1)?.length||0)>0}const hg="number",mg="color",q1="var",L1="var(",M0="${}",P1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function zr(a){const i=a.toString(),l=[],s={color:[],number:[],var:[]},c=[];let d=0;const g=i.replace(P1,p=>(Lt.test(p)?(s.color.push(d),c.push(mg),l.push(Lt.parse(p))):p.startsWith(L1)?(s.var.push(d),c.push(q1),l.push(p)):(s.number.push(d),c.push(hg),l.push(parseFloat(p))),++d,M0)).split(M0);return{values:l,split:g,indexes:s,types:c}}function pg(a){return zr(a).values}function gg(a){const{split:i,types:l}=zr(a),s=i.length;return c=>{let d="";for(let f=0;f<s;f++)if(d+=i[f],c[f]!==void 0){const g=l[f];g===hg?d+=Or(c[f]):g===mg?d+=Lt.transform(c[f]):d+=c[f]}return d}}const Y1=a=>typeof a=="number"?0:Lt.test(a)?Lt.getAnimatableNone(a):a;function X1(a){const i=pg(a);return gg(a)(i.map(Y1))}const Fn={test:H1,parse:pg,createTransformer:gg,getAnimatableNone:X1};function Iu(a,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(i-a)*6*l:l<1/2?i:l<2/3?a+(i-a)*(2/3-l)*6:a}function G1({hue:a,saturation:i,lightness:l,alpha:s}){a/=360,i/=100,l/=100;let c=0,d=0,f=0;if(!i)c=d=f=l;else{const g=l<.5?l*(1+i):l+i-l*i,p=2*l-g;c=Iu(p,g,a+1/3),d=Iu(p,g,a),f=Iu(p,g,a-1/3)}return{red:Math.round(c*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:s}}function xo(a,i){return l=>l>0?i:a}const _t=(a,i,l)=>a+(i-a)*l,tc=(a,i,l)=>{const s=a*a,c=l*(i*i-s)+s;return c<0?0:Math.sqrt(c)},Z1=[mc,va,ci],Q1=a=>Z1.find(i=>i.test(a));function D0(a){const i=Q1(a);if(!i)return!1;let l=i.parse(a);return i===ci&&(l=G1(l)),l}const E0=(a,i)=>{const l=D0(a),s=D0(i);if(!l||!s)return xo(a,i);const c={...l};return d=>(c.red=tc(l.red,s.red,d),c.green=tc(l.green,s.green,d),c.blue=tc(l.blue,s.blue,d),c.alpha=_t(l.alpha,s.alpha,d),va.transform(c))},pc=new Set(["none","hidden"]);function K1(a,i){return pc.has(a)?l=>l<=0?a:i:l=>l>=1?i:a}function J1(a,i){return l=>_t(a,i,l)}function Wc(a){return typeof a=="number"?J1:typeof a=="string"?Kc(a)?xo:Lt.test(a)?E0:$1:Array.isArray(a)?yg:typeof a=="object"?Lt.test(a)?E0:F1:xo}function yg(a,i){const l=[...a],s=l.length,c=a.map((d,f)=>Wc(d)(d,i[f]));return d=>{for(let f=0;f<s;f++)l[f]=c[f](d);return l}}function F1(a,i){const l={...a,...i},s={};for(const c in l)a[c]!==void 0&&i[c]!==void 0&&(s[c]=Wc(a[c])(a[c],i[c]));return c=>{for(const d in s)l[d]=s[d](c);return l}}function W1(a,i){const l=[],s={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const d=i.types[c],f=a.indexes[d][s[d]],g=a.values[f]??0;l[c]=g,s[d]++}return l}const $1=(a,i)=>{const l=Fn.createTransformer(i),s=zr(a),c=zr(i);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?pc.has(a)&&!c.values.length||pc.has(i)&&!s.values.length?K1(a,i):Vr(yg(W1(s,c),c.values),l):xo(a,i)};function vg(a,i,l){return typeof a=="number"&&typeof i=="number"&&typeof l=="number"?_t(a,i,l):Wc(a)(a,i)}const I1=a=>{const i=({timestamp:l})=>a(l);return{start:(l=!0)=>wt.update(i,l),stop:()=>Jn(i),now:()=>ee.isProcessing?ee.timestamp:me.now()}},bg=(a,i,l=10)=>{let s="";const c=Math.max(Math.round(i/l),2);for(let d=0;d<c;d++)s+=Math.round(a(d/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},So=2e4;function $c(a){let i=0;const l=50;let s=a.next(i);for(;!s.done&&i<So;)i+=l,s=a.next(i);return i>=So?1/0:i}function t2(a,i=100,l){const s=l({...a,keyframes:[0,i]}),c=Math.min($c(s),So);return{type:"keyframes",ease:d=>s.next(c*d).value/i,duration:Ue(c)}}const e2=5;function xg(a,i,l){const s=Math.max(i-e2,0);return Ip(l-a(s),i-s)}const Vt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ec=.001;function n2({duration:a=Vt.duration,bounce:i=Vt.bounce,velocity:l=Vt.velocity,mass:s=Vt.mass}){let c,d,f=1-i;f=bn(Vt.minDamping,Vt.maxDamping,f),a=bn(Vt.minDuration,Vt.maxDuration,Ue(a)),f<1?(c=m=>{const y=m*f,b=y*a,S=y-l,R=gc(m,f),M=Math.exp(-b);return ec-S/R*M},d=m=>{const b=m*f*a,S=b*l+l,R=Math.pow(f,2)*Math.pow(m,2)*a,M=Math.exp(-b),C=gc(Math.pow(m,2),f);return(-c(m)+ec>0?-1:1)*((S-R)*M)/C}):(c=m=>{const y=Math.exp(-m*a),b=(m-l)*a+1;return-ec+y*b},d=m=>{const y=Math.exp(-m*a),b=(l-m)*(a*a);return y*b});const g=5/a,p=i2(c,d,g);if(a=$e(a),isNaN(p))return{stiffness:Vt.stiffness,damping:Vt.damping,duration:a};{const m=Math.pow(p,2)*s;return{stiffness:m,damping:f*2*Math.sqrt(s*m),duration:a}}}const a2=12;function i2(a,i,l){let s=l;for(let c=1;c<a2;c++)s=s-a(s)/i(s);return s}function gc(a,i){return a*Math.sqrt(1-i*i)}const r2=["duration","bounce"],l2=["stiffness","damping","mass"];function R0(a,i){return i.some(l=>a[l]!==void 0)}function o2(a){let i={velocity:Vt.velocity,stiffness:Vt.stiffness,damping:Vt.damping,mass:Vt.mass,isResolvedFromDuration:!1,...a};if(!R0(a,l2)&&R0(a,r2))if(a.visualDuration){const l=a.visualDuration,s=2*Math.PI/(l*1.2),c=s*s,d=2*bn(.05,1,1-(a.bounce||0))*Math.sqrt(c);i={...i,mass:Vt.mass,stiffness:c,damping:d}}else{const l=n2(a);i={...i,...l,mass:Vt.mass},i.isResolvedFromDuration=!0}return i}function To(a=Vt.visualDuration,i=Vt.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:i}:a;let{restSpeed:s,restDelta:c}=l;const d=l.keyframes[0],f=l.keyframes[l.keyframes.length-1],g={done:!1,value:d},{stiffness:p,damping:m,mass:y,duration:b,velocity:S,isResolvedFromDuration:R}=o2({...l,velocity:-Ue(l.velocity||0)}),M=S||0,C=m/(2*Math.sqrt(p*y)),U=f-d,q=Ue(Math.sqrt(p/y)),Y=Math.abs(U)<5;s||(s=Y?Vt.restSpeed.granular:Vt.restSpeed.default),c||(c=Y?Vt.restDelta.granular:Vt.restDelta.default);let H;if(C<1){const L=gc(q,C);H=nt=>{const lt=Math.exp(-C*q*nt);return f-lt*((M+C*q*U)/L*Math.sin(L*nt)+U*Math.cos(L*nt))}}else if(C===1)H=L=>f-Math.exp(-q*L)*(U+(M+q*U)*L);else{const L=q*Math.sqrt(C*C-1);H=nt=>{const lt=Math.exp(-C*q*nt),$=Math.min(L*nt,300);return f-lt*((M+C*q*U)*Math.sinh($)+L*U*Math.cosh($))/L}}const W={calculatedDuration:R&&b||null,next:L=>{const nt=H(L);if(R)g.done=L>=b;else{let lt=L===0?M:0;C<1&&(lt=L===0?$e(M):xg(H,L,nt));const $=Math.abs(lt)<=s,ct=Math.abs(f-nt)<=c;g.done=$&&ct}return g.value=g.done?f:nt,g},toString:()=>{const L=Math.min($c(W),So),nt=bg(lt=>W.next(L*lt).value,L,30);return L+"ms "+nt},toTransition:()=>{}};return W}To.applyToOptions=a=>{const i=t2(a,100,To);return a.ease=i.ease,a.duration=$e(i.duration),a.type="keyframes",a};function yc({keyframes:a,velocity:i=0,power:l=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:d=500,modifyTarget:f,min:g,max:p,restDelta:m=.5,restSpeed:y}){const b=a[0],S={done:!1,value:b},R=$=>g!==void 0&&$<g||p!==void 0&&$>p,M=$=>g===void 0?p:p===void 0||Math.abs(g-$)<Math.abs(p-$)?g:p;let C=l*i;const U=b+C,q=f===void 0?U:f(U);q!==U&&(C=q-b);const Y=$=>-C*Math.exp(-$/s),H=$=>q+Y($),W=$=>{const ct=Y($),Pt=H($);S.done=Math.abs(ct)<=m,S.value=S.done?q:Pt};let L,nt;const lt=$=>{R(S.value)&&(L=$,nt=To({keyframes:[S.value,M(S.value)],velocity:xg(H,$,S.value),damping:c,stiffness:d,restDelta:m,restSpeed:y}))};return lt(0),{calculatedDuration:null,next:$=>{let ct=!1;return!nt&&L===void 0&&(ct=!0,W($),lt($)),L!==void 0&&$>=L?nt.next($-L):(!ct&&W($),S)}}}function s2(a,i,l){const s=[],c=l||xn.mix||vg,d=a.length-1;for(let f=0;f<d;f++){let g=c(a[f],a[f+1]);if(i){const p=Array.isArray(i)?i[f]||Be:i;g=Vr(p,g)}s.push(g)}return s}function u2(a,i,{clamp:l=!0,ease:s,mixer:c}={}){const d=a.length;if(Pc(d===i.length),d===1)return()=>i[0];if(d===2&&i[0]===i[1])return()=>i[1];const f=a[0]===a[1];a[0]>a[d-1]&&(a=[...a].reverse(),i=[...i].reverse());const g=s2(i,s,c),p=g.length,m=y=>{if(f&&y<a[0])return i[0];let b=0;if(p>1)for(;b<a.length-2&&!(y<a[b+1]);b++);const S=Cr(a[b],a[b+1],y);return g[b](S)};return l?y=>m(bn(a[0],a[d-1],y)):m}function c2(a,i){const l=a[a.length-1];for(let s=1;s<=i;s++){const c=Cr(0,i,s);a.push(_t(l,1,c))}}function f2(a){const i=[0];return c2(i,a.length-1),i}function d2(a,i){return a.map(l=>l*i)}function h2(a,i){return a.map(()=>i||sg).splice(0,a.length-1)}function Mr({duration:a=300,keyframes:i,times:l,ease:s="easeInOut"}){const c=O1(s)?s.map(A0):A0(s),d={done:!1,value:i[0]},f=d2(l&&l.length===i.length?l:f2(i),a),g=u2(f,i,{ease:Array.isArray(c)?c:h2(i,c)});return{calculatedDuration:a,next:p=>(d.value=g(p),d.done=p>=a,d)}}const m2=a=>a!==null;function Ic(a,{repeat:i,repeatType:l="loop"},s,c=1){const d=a.filter(m2),g=c<0||i&&l!=="loop"&&i%2===1?0:d.length-1;return!g||s===void 0?d[g]:s}const p2={decay:yc,inertia:yc,tween:Mr,keyframes:Mr,spring:To};function Sg(a){typeof a.type=="string"&&(a.type=p2[a.type])}class tf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,l){return this.finished.then(i,l)}}const g2=a=>a/100;class ef extends tf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==me.now()&&this.tick(me.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Sg(i);const{type:l=Mr,repeat:s=0,repeatDelay:c=0,repeatType:d,velocity:f=0}=i;let{keyframes:g}=i;const p=l||Mr;p!==Mr&&typeof g[0]!="number"&&(this.mixKeyframes=Vr(g2,vg(g[0],g[1])),g=[0,100]);const m=p({...i,keyframes:g});d==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...g].reverse(),velocity:-f})),m.calculatedDuration===null&&(m.calculatedDuration=$c(m));const{calculatedDuration:y}=m;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=m}updateTime(i){const l=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(i,l=!1){const{generator:s,totalDuration:c,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:g,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:m=0,keyframes:y,repeat:b,repeatType:S,repeatDelay:R,type:M,onUpdate:C,finalKeyframe:U}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);const q=this.currentTime-m*(this.playbackSpeed>=0?1:-1),Y=this.playbackSpeed>=0?q<0:q>c;this.currentTime=Math.max(q,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let H=this.currentTime,W=s;if(b){const $=Math.min(this.currentTime,c)/g;let ct=Math.floor($),Pt=$%1;!Pt&&$>=1&&(Pt=1),Pt===1&&ct--,ct=Math.min(ct,b+1),!!(ct%2)&&(S==="reverse"?(Pt=1-Pt,R&&(Pt-=R/g)):S==="mirror"&&(W=f)),H=bn(0,1,Pt)*g}const L=Y?{done:!1,value:y[0]}:W.next(H);d&&(L.value=d(L.value));let{done:nt}=L;!Y&&p!==null&&(nt=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const lt=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&nt);return lt&&M!==yc&&(L.value=Ic(y,this.options,U,this.speed)),C&&C(L.value),lt&&this.finish(),L}then(i,l){return this.finished.then(i,l)}get duration(){return Ue(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Ue(i)}get time(){return Ue(this.currentTime)}set time(i){i=$e(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(me.now());const l=this.playbackSpeed!==i;this.playbackSpeed=i,l&&(this.time=Ue(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=I1,startTime:l}=this.options;this.driver||(this.driver=i(c=>this.tick(c))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=l??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(me.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function y2(a){for(let i=1;i<a.length;i++)a[i]??(a[i]=a[i-1])}const ba=a=>a*180/Math.PI,vc=a=>{const i=ba(Math.atan2(a[1],a[0]));return bc(i)},v2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:vc,rotateZ:vc,skewX:a=>ba(Math.atan(a[1])),skewY:a=>ba(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},bc=a=>(a=a%360,a<0&&(a+=360),a),C0=vc,w0=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),z0=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),b2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:w0,scaleY:z0,scale:a=>(w0(a)+z0(a))/2,rotateX:a=>bc(ba(Math.atan2(a[6],a[5]))),rotateY:a=>bc(ba(Math.atan2(-a[2],a[0]))),rotateZ:C0,rotate:C0,skewX:a=>ba(Math.atan(a[4])),skewY:a=>ba(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function xc(a){return a.includes("scale")?1:0}function Sc(a,i){if(!a||a==="none")return xc(i);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(l)s=b2,c=l;else{const g=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=v2,c=g}if(!c)return xc(i);const d=s[i],f=c[1].split(",").map(S2);return typeof d=="function"?d(f):f[d]}const x2=(a,i)=>{const{transform:l="none"}=getComputedStyle(a);return Sc(l,i)};function S2(a){return parseFloat(a.trim())}const bi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],xi=new Set(bi),_0=a=>a===vi||a===it,T2=new Set(["x","y","z"]),A2=bi.filter(a=>!T2.has(a));function O2(a){const i=[];return A2.forEach(l=>{const s=a.getValue(l);s!==void 0&&(i.push([l,s.get()]),s.set(l.startsWith("scale")?1:0))}),i}const xa={width:({x:a},{paddingLeft:i="0",paddingRight:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),height:({y:a},{paddingTop:i="0",paddingBottom:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),top:(a,{top:i})=>parseFloat(i),left:(a,{left:i})=>parseFloat(i),bottom:({y:a},{top:i})=>parseFloat(i)+(a.max-a.min),right:({x:a},{left:i})=>parseFloat(i)+(a.max-a.min),x:(a,{transform:i})=>Sc(i,"x"),y:(a,{transform:i})=>Sc(i,"y")};xa.translateX=xa.x;xa.translateY=xa.y;const Sa=new Set;let Tc=!1,Ac=!1,Oc=!1;function Tg(){if(Ac){const a=Array.from(Sa).filter(s=>s.needsMeasurement),i=new Set(a.map(s=>s.element)),l=new Map;i.forEach(s=>{const c=O2(s);c.length&&(l.set(s,c),s.render())}),a.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const c=l.get(s);c&&c.forEach(([d,f])=>{s.getValue(d)?.set(f)})}),a.forEach(s=>s.measureEndState()),a.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Ac=!1,Tc=!1,Sa.forEach(a=>a.complete(Oc)),Sa.clear()}function Ag(){Sa.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(Ac=!0)})}function M2(){Oc=!0,Ag(),Tg(),Oc=!1}class nf{constructor(i,l,s,c,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=s,this.motionValue=c,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Sa.add(this),Tc||(Tc=!0,wt.read(Ag),wt.resolveKeyframes(Tg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:s,motionValue:c}=this;if(i[0]===null){const d=c?.get(),f=i[i.length-1];if(d!==void 0)i[0]=d;else if(s&&l){const g=s.readValue(l,f);g!=null&&(i[0]=g)}i[0]===void 0&&(i[0]=f),c&&d===void 0&&c.set(i[0])}y2(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Sa.delete(this)}cancel(){this.state==="scheduled"&&(Sa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const D2=a=>a.startsWith("--");function E2(a,i,l){D2(i)?a.style.setProperty(i,l):a.style[i]=l}const R2=Yc(()=>window.ScrollTimeline!==void 0),C2={};function w2(a,i){const l=Yc(a);return()=>C2[i]??l()}const Og=w2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Tr=([a,i,l,s])=>`cubic-bezier(${a}, ${i}, ${l}, ${s})`,k0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Tr([0,.65,.55,1]),circOut:Tr([.55,0,1,.45]),backIn:Tr([.31,.01,.66,-.59]),backOut:Tr([.33,1.53,.69,.99])};function Mg(a,i){if(a)return typeof a=="function"?Og()?bg(a,i):"ease-out":ug(a)?Tr(a):Array.isArray(a)?a.map(l=>Mg(l,i)||k0.easeOut):k0[a]}function z2(a,i,l,{delay:s=0,duration:c=300,repeat:d=0,repeatType:f="loop",ease:g="easeOut",times:p}={},m=void 0){const y={[i]:l};p&&(y.offset=p);const b=Mg(g,c);Array.isArray(b)&&(y.easing=b);const S={delay:s,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return m&&(S.pseudoElement=m),a.animate(y,S)}function Dg(a){return typeof a=="function"&&"applyToOptions"in a}function _2({type:a,...i}){return Dg(a)&&Og()?a.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class k2 extends tf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:l,name:s,keyframes:c,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:g,onComplete:p}=i;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=i,Pc(typeof i.type!="string");const m=_2(i);this.animation=z2(l,s,c,m,d),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=Ic(c,this.options,g,this.speed);this.updateMotionValue?this.updateMotionValue(y):E2(l,s,y),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return Ue(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Ue(i)}get time(){return Ue(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=$e(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:l}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&R2()?(this.animation.timeline=i,Be):l(this)}}const Eg={anticipate:rg,backInOut:ig,circInOut:og};function N2(a){return a in Eg}function V2(a){typeof a.ease=="string"&&N2(a.ease)&&(a.ease=Eg[a.ease])}const N0=10;class j2 extends k2{constructor(i){V2(i),Sg(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:l,onUpdate:s,onComplete:c,element:d,...f}=this.options;if(!l)return;if(i!==void 0){l.set(i);return}const g=new ef({...f,autoplay:!1}),p=$e(this.finishedTime??this.time);l.setWithVelocity(g.sample(p-N0).value,g.sample(p).value,N0),g.stop()}}const V0=(a,i)=>i==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Fn.test(a)||a==="0")&&!a.startsWith("url("));function U2(a){const i=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==i)return!0}function B2(a,i,l,s){const c=a[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const d=a[a.length-1],f=V0(c,i),g=V0(d,i);return!f||!g?!1:U2(a)||(l==="spring"||Dg(l))&&s}function Mc(a){a.duration=0,a.type="keyframes"}const H2=new Set(["opacity","clipPath","filter","transform"]),q2=Yc(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function L2(a){const{motionValue:i,name:l,repeatDelay:s,repeatType:c,damping:d,type:f}=a;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=i.owner.getProps();return q2()&&l&&H2.has(l)&&(l!=="transform"||!m)&&!p&&!s&&c!=="mirror"&&d!==0&&f!=="inertia"}const P2=40;class Y2 extends tf{constructor({autoplay:i=!0,delay:l=0,type:s="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:f="loop",keyframes:g,name:p,motionValue:m,element:y,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=me.now();const S={autoplay:i,delay:l,type:s,repeat:c,repeatDelay:d,repeatType:f,name:p,motionValue:m,element:y,...b},R=y?.KeyframeResolver||nf;this.keyframeResolver=new R(g,(M,C,U)=>this.onKeyframesResolved(M,C,S,!U),p,m,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,l,s,c){this.keyframeResolver=void 0;const{name:d,type:f,velocity:g,delay:p,isHandoff:m,onUpdate:y}=s;this.resolvedAt=me.now(),B2(i,d,f,g)||((xn.instantAnimations||!p)&&y?.(Ic(i,s,l)),i[0]=i[i.length-1],Mc(s),s.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>P2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...s,keyframes:i},R=!m&&L2(S)?new j2({...S,element:S.motionValue.owner.current}):new ef(S);R.finished.then(()=>this.notifyFinished()).catch(Be),this.pendingTimeline&&(this.stopTimeline=R.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=R}get finished(){return this._animation?this.animation.finished:this._finished}then(i,l){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),M2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const X2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function G2(a){const i=X2.exec(a);if(!i)return[,];const[,l,s,c]=i;return[`--${l??s}`,c]}function Rg(a,i,l=1){const[s,c]=G2(a);if(!s)return;const d=window.getComputedStyle(i).getPropertyValue(s);if(d){const f=d.trim();return Fp(f)?parseFloat(f):f}return Kc(c)?Rg(c,i,l+1):c}function af(a,i){return a?.[i]??a?.default??a}const Cg=new Set(["width","height","top","left","right","bottom",...bi]),Z2={test:a=>a==="auto",parse:a=>a},wg=a=>i=>i.test(a),zg=[vi,it,Ie,Qn,U1,j1,Z2],j0=a=>zg.find(wg(a));function Q2(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||$p(a):!0}const K2=new Set(["brightness","contrast","saturate","opacity"]);function J2(a){const[i,l]=a.slice(0,-1).split("(");if(i==="drop-shadow")return a;const[s]=l.match(Jc)||[];if(!s)return a;const c=l.replace(s,"");let d=K2.has(i)?1:0;return s!==l&&(d*=100),i+"("+d+c+")"}const F2=/\b([a-z-]*)\(.*?\)/gu,Dc={...Fn,getAnimatableNone:a=>{const i=a.match(F2);return i?i.map(J2).join(" "):a}},U0={...vi,transform:Math.round},W2={rotate:Qn,rotateX:Qn,rotateY:Qn,rotateZ:Qn,scale:ro,scaleX:ro,scaleY:ro,scaleZ:ro,skew:Qn,skewX:Qn,skewY:Qn,distance:it,translateX:it,translateY:it,translateZ:it,x:it,y:it,z:it,perspective:it,transformPerspective:it,opacity:wr,originX:O0,originY:O0,originZ:it},rf={borderWidth:it,borderTopWidth:it,borderRightWidth:it,borderBottomWidth:it,borderLeftWidth:it,borderRadius:it,radius:it,borderTopLeftRadius:it,borderTopRightRadius:it,borderBottomRightRadius:it,borderBottomLeftRadius:it,width:it,maxWidth:it,height:it,maxHeight:it,top:it,right:it,bottom:it,left:it,padding:it,paddingTop:it,paddingRight:it,paddingBottom:it,paddingLeft:it,margin:it,marginTop:it,marginRight:it,marginBottom:it,marginLeft:it,backgroundPositionX:it,backgroundPositionY:it,...W2,zIndex:U0,fillOpacity:wr,strokeOpacity:wr,numOctaves:U0},$2={...rf,color:Lt,backgroundColor:Lt,outlineColor:Lt,fill:Lt,stroke:Lt,borderColor:Lt,borderTopColor:Lt,borderRightColor:Lt,borderBottomColor:Lt,borderLeftColor:Lt,filter:Dc,WebkitFilter:Dc},_g=a=>$2[a];function kg(a,i){let l=_g(a);return l!==Dc&&(l=Fn),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const I2=new Set(["auto","none","0"]);function tx(a,i,l){let s=0,c;for(;s<a.length&&!c;){const d=a[s];typeof d=="string"&&!I2.has(d)&&zr(d).values.length&&(c=a[s]),s++}if(c&&l)for(const d of i)a[d]=kg(l,c)}class ex extends nf{constructor(i,l,s,c,d){super(i,l,s,c,d,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:s}=this;if(!l||!l.current)return;super.readKeyframes();for(let p=0;p<i.length;p++){let m=i[p];if(typeof m=="string"&&(m=m.trim(),Kc(m))){const y=Rg(m,l.current);y!==void 0&&(i[p]=y),p===i.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!Cg.has(s)||i.length!==2)return;const[c,d]=i,f=j0(c),g=j0(d);if(f!==g)if(_0(f)&&_0(g))for(let p=0;p<i.length;p++){const m=i[p];typeof m=="string"&&(i[p]=parseFloat(m))}else xa[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,s=[];for(let c=0;c<i.length;c++)(i[c]===null||Q2(i[c]))&&s.push(c);s.length&&tx(i,s,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=xa[s](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const c=l[l.length-1];c!==void 0&&i.getValue(s,c).jump(c,!1)}measureEndState(){const{element:i,name:l,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const c=i.getValue(l);c&&c.jump(this.measuredOrigin,!1);const d=s.length-1,f=s[d];s[d]=xa[l](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([g,p])=>{i.getValue(g).set(p)}),this.resolveNoneKeyframes()}}function nx(a,i,l){if(a instanceof EventTarget)return[a];if(typeof a=="string"){let s=document;const c=l?.[a]??s.querySelectorAll(a);return c?Array.from(c):[]}return Array.from(a)}const Ng=(a,i)=>i&&typeof a=="number"?i.transform(a):a;function ax(a){return Wp(a)&&"offsetHeight"in a}const B0=30,ix=a=>!isNaN(parseFloat(a));class rx{constructor(i,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const c=me.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=me.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=ix(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new Xc);const s=this.events[i].add(l);return i==="change"?()=>{s(),wt.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,l,s){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=me.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>B0)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,B0);return Ip(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function gi(a,i){return new rx(a,i)}const{schedule:lf}=cg(queueMicrotask,!1),Ye={x:!1,y:!1};function Vg(){return Ye.x||Ye.y}function lx(a){return a==="x"||a==="y"?Ye[a]?null:(Ye[a]=!0,()=>{Ye[a]=!1}):Ye.x||Ye.y?null:(Ye.x=Ye.y=!0,()=>{Ye.x=Ye.y=!1})}function jg(a,i){const l=nx(a),s=new AbortController,c={passive:!0,...i,signal:s.signal};return[l,c,()=>s.abort()]}function H0(a){return!(a.pointerType==="touch"||Vg())}function ox(a,i,l={}){const[s,c,d]=jg(a,l),f=g=>{if(!H0(g))return;const{target:p}=g,m=i(p,g);if(typeof m!="function"||!p)return;const y=b=>{H0(b)&&(m(b),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,c)};return s.forEach(g=>{g.addEventListener("pointerenter",f,c)}),d}const Ug=(a,i)=>i?a===i?!0:Ug(a,i.parentElement):!1,of=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,sx=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ux(a){return sx.has(a.tagName)||a.tabIndex!==-1}const yo=new WeakSet;function q0(a){return i=>{i.key==="Enter"&&a(i)}}function nc(a,i){a.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const cx=(a,i)=>{const l=a.currentTarget;if(!l)return;const s=q0(()=>{if(yo.has(l))return;nc(l,"down");const c=q0(()=>{nc(l,"up")}),d=()=>nc(l,"cancel");l.addEventListener("keyup",c,i),l.addEventListener("blur",d,i)});l.addEventListener("keydown",s,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",s),i)};function L0(a){return of(a)&&!Vg()}function fx(a,i,l={}){const[s,c,d]=jg(a,l),f=g=>{const p=g.currentTarget;if(!L0(g))return;yo.add(p);const m=i(p,g),y=(R,M)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),yo.has(p)&&yo.delete(p),L0(R)&&typeof m=="function"&&m(R,{success:M})},b=R=>{y(R,p===window||p===document||l.useGlobalTarget||Ug(p,R.target))},S=R=>{y(R,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",S,c)};return s.forEach(g=>{(l.useGlobalTarget?window:g).addEventListener("pointerdown",f,c),ax(g)&&(g.addEventListener("focus",m=>cx(m,c)),!ux(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),d}function Bg(a){return Wp(a)&&"ownerSVGElement"in a}function dx(a){return Bg(a)&&a.tagName==="svg"}const le=a=>!!(a&&a.getVelocity),hx=[...zg,Lt,Fn],mx=a=>hx.find(wg(a)),Hg=Z.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function px(a=!0){const i=Z.useContext(Hc);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:s,register:c}=i,d=Z.useId();Z.useEffect(()=>{if(a)return c(d)},[a]);const f=Z.useCallback(()=>a&&s&&s(d),[d,s,a]);return!l&&s?[!1,f]:[!0]}const qg=Z.createContext({strict:!1}),P0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},yi={};for(const a in P0)yi[a]={isEnabled:i=>P0[a].some(l=>!!i[l])};function gx(a){for(const i in a)yi[i]={...yi[i],...a[i]}}const yx=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ao(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||yx.has(a)}let Lg=a=>!Ao(a);function vx(a){typeof a=="function"&&(Lg=i=>i.startsWith("on")?!Ao(i):a(i))}try{vx(require("@emotion/is-prop-valid").default)}catch{}function bx(a,i,l){const s={};for(const c in a)c==="values"&&typeof a.values=="object"||(Lg(c)||l===!0&&Ao(c)||!i&&!Ao(c)||a.draggable&&c.startsWith("onDrag"))&&(s[c]=a[c]);return s}const Do=Z.createContext({});function Eo(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function _r(a){return typeof a=="string"||Array.isArray(a)}const sf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],uf=["initial",...sf];function Ro(a){return Eo(a.animate)||uf.some(i=>_r(a[i]))}function Pg(a){return!!(Ro(a)||a.variants)}function xx(a,i){if(Ro(a)){const{initial:l,animate:s}=a;return{initial:l===!1||_r(l)?l:void 0,animate:_r(s)?s:void 0}}return a.inherit!==!1?i:{}}function Sx(a){const{initial:i,animate:l}=xx(a,Z.useContext(Do));return Z.useMemo(()=>({initial:i,animate:l}),[Y0(i),Y0(l)])}function Y0(a){return Array.isArray(a)?a.join(" "):a}const kr={};function Tx(a){for(const i in a)kr[i]=a[i],Qc(i)&&(kr[i].isCSSVariable=!0)}function Yg(a,{layout:i,layoutId:l}){return xi.has(a)||a.startsWith("origin")||(i||l!==void 0)&&(!!kr[a]||a==="opacity")}const Ax={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ox=bi.length;function Mx(a,i,l){let s="",c=!0;for(let d=0;d<Ox;d++){const f=bi[d],g=a[f];if(g===void 0)continue;let p=!0;if(typeof g=="number"?p=g===(f.startsWith("scale")?1:0):p=parseFloat(g)===0,!p||l){const m=Ng(g,rf[f]);if(!p){c=!1;const y=Ax[f]||f;s+=`${y}(${m}) `}l&&(i[f]=m)}}return s=s.trim(),l?s=l(i,c?"":s):c&&(s="none"),s}function cf(a,i,l){const{style:s,vars:c,transformOrigin:d}=a;let f=!1,g=!1;for(const p in i){const m=i[p];if(xi.has(p)){f=!0;continue}else if(Qc(p)){c[p]=m;continue}else{const y=Ng(m,rf[p]);p.startsWith("origin")?(g=!0,d[p]=y):s[p]=y}}if(i.transform||(f||l?s.transform=Mx(i,a.transform,l):s.transform&&(s.transform="none")),g){const{originX:p="50%",originY:m="50%",originZ:y=0}=d;s.transformOrigin=`${p} ${m} ${y}`}}const ff=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Xg(a,i,l){for(const s in i)!le(i[s])&&!Yg(s,l)&&(a[s]=i[s])}function Dx({transformTemplate:a},i){return Z.useMemo(()=>{const l=ff();return cf(l,i,a),Object.assign({},l.vars,l.style)},[i])}function Ex(a,i){const l=a.style||{},s={};return Xg(s,l,a),Object.assign(s,Dx(a,i)),s}function Rx(a,i){const l={},s=Ex(a,i);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=s,l}const Cx={offset:"stroke-dashoffset",array:"stroke-dasharray"},wx={offset:"strokeDashoffset",array:"strokeDasharray"};function zx(a,i,l=1,s=0,c=!0){a.pathLength=1;const d=c?Cx:wx;a[d.offset]=it.transform(-s);const f=it.transform(i),g=it.transform(l);a[d.array]=`${f} ${g}`}function Gg(a,{attrX:i,attrY:l,attrScale:s,pathLength:c,pathSpacing:d=1,pathOffset:f=0,...g},p,m,y){if(cf(a,g,m),p){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:b,style:S}=a;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=y?.transformBox??"fill-box",delete b.transformBox),i!==void 0&&(b.x=i),l!==void 0&&(b.y=l),s!==void 0&&(b.scale=s),c!==void 0&&zx(b,c,d,f,!1)}const Zg=()=>({...ff(),attrs:{}}),Qg=a=>typeof a=="string"&&a.toLowerCase()==="svg";function _x(a,i,l,s){const c=Z.useMemo(()=>{const d=Zg();return Gg(d,i,Qg(s),a.transformTemplate,a.style),{...d.attrs,style:{...d.style}}},[i]);if(a.style){const d={};Xg(d,a.style,a),c.style={...d,...c.style}}return c}const kx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function df(a){return typeof a!="string"||a.includes("-")?!1:!!(kx.indexOf(a)>-1||/[A-Z]/u.test(a))}function Nx(a,i,l,{latestValues:s},c,d=!1){const g=(df(a)?_x:Rx)(i,s,c,a),p=bx(i,typeof a=="string",d),m=a!==Z.Fragment?{...p,...g,ref:l}:{},{children:y}=i,b=Z.useMemo(()=>le(y)?y.get():y,[y]);return Z.createElement(a,{...m,children:b})}function X0(a){const i=[{},{}];return a?.values.forEach((l,s)=>{i[0][s]=l.get(),i[1][s]=l.getVelocity()}),i}function hf(a,i,l,s){if(typeof i=="function"){const[c,d]=X0(s);i=i(l!==void 0?l:a.custom,c,d)}if(typeof i=="string"&&(i=a.variants&&a.variants[i]),typeof i=="function"){const[c,d]=X0(s);i=i(l!==void 0?l:a.custom,c,d)}return i}function vo(a){return le(a)?a.get():a}function Vx({scrapeMotionValuesFromProps:a,createRenderState:i},l,s,c){return{latestValues:jx(l,s,c,a),renderState:i()}}function jx(a,i,l,s){const c={},d=s(a,{});for(const S in d)c[S]=vo(d[S]);let{initial:f,animate:g}=a;const p=Ro(a),m=Pg(a);i&&m&&!p&&a.inherit!==!1&&(f===void 0&&(f=i.initial),g===void 0&&(g=i.animate));let y=l?l.initial===!1:!1;y=y||f===!1;const b=y?g:f;if(b&&typeof b!="boolean"&&!Eo(b)){const S=Array.isArray(b)?b:[b];for(let R=0;R<S.length;R++){const M=hf(a,S[R]);if(M){const{transitionEnd:C,transition:U,...q}=M;for(const Y in q){let H=q[Y];if(Array.isArray(H)){const W=y?H.length-1:0;H=H[W]}H!==null&&(c[Y]=H)}for(const Y in C)c[Y]=C[Y]}}}return c}const Kg=a=>(i,l)=>{const s=Z.useContext(Do),c=Z.useContext(Hc),d=()=>Vx(a,i,s,c);return l?d():g1(d)};function mf(a,i,l){const{style:s}=a,c={};for(const d in s)(le(s[d])||i.style&&le(i.style[d])||Yg(d,a)||l?.getValue(d)?.liveStyle!==void 0)&&(c[d]=s[d]);return c}const Ux=Kg({scrapeMotionValuesFromProps:mf,createRenderState:ff});function Jg(a,i,l){const s=mf(a,i,l);for(const c in a)if(le(a[c])||le(i[c])){const d=bi.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[d]=a[c]}return s}const Bx=Kg({scrapeMotionValuesFromProps:Jg,createRenderState:Zg}),Hx=Symbol.for("motionComponentSymbol");function fi(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function qx(a,i,l){return Z.useCallback(s=>{s&&a.onMount&&a.onMount(s),i&&(s?i.mount(s):i.unmount()),l&&(typeof l=="function"?l(s):fi(l)&&(l.current=s))},[i])}const pf=a=>a.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Lx="framerAppearId",Fg="data-"+pf(Lx),Wg=Z.createContext({});function Px(a,i,l,s,c){const{visualElement:d}=Z.useContext(Do),f=Z.useContext(qg),g=Z.useContext(Hc),p=Z.useContext(Hg).reducedMotion,m=Z.useRef(null);s=s||f.renderer,!m.current&&s&&(m.current=s(a,{visualState:i,parent:d,props:l,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:p}));const y=m.current,b=Z.useContext(Wg);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&Yx(m.current,l,c,b);const S=Z.useRef(!1);Z.useInsertionEffect(()=>{y&&S.current&&y.update(l,g)});const R=l[Fg],M=Z.useRef(!!R&&!window.MotionHandoffIsComplete?.(R)&&window.MotionHasOptimisedAnimation?.(R));return y1(()=>{y&&(S.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),M.current&&y.animationState&&y.animationState.animateChanges())}),Z.useEffect(()=>{y&&(!M.current&&y.animationState&&y.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(R)}),M.current=!1),y.enteringChildren=void 0)}),y}function Yx(a,i,l,s){const{layoutId:c,layout:d,drag:f,dragConstraints:g,layoutScroll:p,layoutRoot:m,layoutCrossfade:y}=i;a.projection=new l(a.latestValues,i["data-framer-portal-id"]?void 0:$g(a.parent)),a.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!f||g&&fi(g),visualElement:a,animationType:typeof d=="string"?d:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:p,layoutRoot:m})}function $g(a){if(a)return a.options.allowProjection!==!1?a.projection:$g(a.parent)}function ac(a,{forwardMotionProps:i=!1}={},l,s){l&&gx(l);const c=df(a)?Bx:Ux;function d(g,p){let m;const y={...Z.useContext(Hg),...g,layoutId:Xx(g)},{isStatic:b}=y,S=Sx(g),R=c(g,b);if(!b&&Bc){Gx();const M=Zx(y);m=M.MeasureLayout,S.visualElement=Px(a,R,y,s,M.ProjectionNode)}return j.jsxs(Do.Provider,{value:S,children:[m&&S.visualElement?j.jsx(m,{visualElement:S.visualElement,...y}):null,Nx(a,g,qx(R,S.visualElement,p),R,b,i)]})}d.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const f=Z.forwardRef(d);return f[Hx]=a,f}function Xx({layoutId:a}){const i=Z.useContext(Jp).id;return i&&a!==void 0?i+"-"+a:a}function Gx(a,i){Z.useContext(qg).strict}function Zx(a){const{drag:i,layout:l}=yi;if(!i&&!l)return{};const s={...i,...l};return{MeasureLayout:i?.isEnabled(a)||l?.isEnabled(a)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function Qx(a,i){if(typeof Proxy>"u")return ac;const l=new Map,s=(d,f)=>ac(d,f,a,i),c=(d,f)=>s(d,f);return new Proxy(c,{get:(d,f)=>f==="create"?s:(l.has(f)||l.set(f,ac(f,void 0,a,i)),l.get(f))})}function Ig({top:a,left:i,right:l,bottom:s}){return{x:{min:i,max:l},y:{min:a,max:s}}}function Kx({x:a,y:i}){return{top:i.min,right:a.max,bottom:i.max,left:a.min}}function Jx(a,i){if(!i)return a;const l=i({x:a.left,y:a.top}),s=i({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:s.y,right:s.x}}function ic(a){return a===void 0||a===1}function Ec({scale:a,scaleX:i,scaleY:l}){return!ic(a)||!ic(i)||!ic(l)}function ya(a){return Ec(a)||ty(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function ty(a){return G0(a.x)||G0(a.y)}function G0(a){return a&&a!=="0%"}function Oo(a,i,l){const s=a-l,c=i*s;return l+c}function Z0(a,i,l,s,c){return c!==void 0&&(a=Oo(a,c,s)),Oo(a,l,s)+i}function Rc(a,i=0,l=1,s,c){a.min=Z0(a.min,i,l,s,c),a.max=Z0(a.max,i,l,s,c)}function ey(a,{x:i,y:l}){Rc(a.x,i.translate,i.scale,i.originPoint),Rc(a.y,l.translate,l.scale,l.originPoint)}const Q0=.999999999999,K0=1.0000000000001;function Fx(a,i,l,s=!1){const c=l.length;if(!c)return;i.x=i.y=1;let d,f;for(let g=0;g<c;g++){d=l[g],f=d.projectionDelta;const{visualElement:p}=d.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&hi(a,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,ey(a,f)),s&&ya(d.latestValues)&&hi(a,d.latestValues))}i.x<K0&&i.x>Q0&&(i.x=1),i.y<K0&&i.y>Q0&&(i.y=1)}function di(a,i){a.min=a.min+i,a.max=a.max+i}function J0(a,i,l,s,c=.5){const d=_t(a.min,a.max,c);Rc(a,i,l,d,s)}function hi(a,i){J0(a.x,i.x,i.scaleX,i.scale,i.originX),J0(a.y,i.y,i.scaleY,i.scale,i.originY)}function ny(a,i){return Ig(Jx(a.getBoundingClientRect(),i))}function Wx(a,i,l){const s=ny(a,l),{scroll:c}=i;return c&&(di(s.x,c.offset.x),di(s.y,c.offset.y)),s}const F0=()=>({translate:0,scale:1,origin:0,originPoint:0}),mi=()=>({x:F0(),y:F0()}),W0=()=>({min:0,max:0}),Bt=()=>({x:W0(),y:W0()}),Cc={current:null},ay={current:!1};function $x(){if(ay.current=!0,!!Bc)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),i=()=>Cc.current=a.matches;a.addEventListener("change",i),i()}else Cc.current=!1}const Ix=new WeakMap;function t5(a,i,l){for(const s in i){const c=i[s],d=l[s];if(le(c))a.addValue(s,c);else if(le(d))a.addValue(s,gi(c,{owner:a}));else if(d!==c)if(a.hasValue(s)){const f=a.getValue(s);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=a.getStaticValue(s);a.addValue(s,gi(f!==void 0?f:c,{owner:a}))}}for(const s in l)i[s]===void 0&&a.removeValue(s);return i}const $0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class e5{scrapeMotionValuesFromProps(i,l,s){return{}}constructor({parent:i,props:l,presenceContext:s,reducedMotionConfig:c,blockInitialAnimation:d,visualState:f},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=nf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=me.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,wt.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=f;this.latestValues=p,this.baseTarget={...p},this.initialValues=l.initial?{...p}:{},this.renderState=m,this.parent=i,this.props=l,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=g,this.blockInitialAnimation=!!d,this.isControllingVariants=Ro(l),this.isVariantNode=Pg(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(l,{},this);for(const S in b){const R=b[S];p[S]!==void 0&&le(R)&&R.set(p[S])}}mount(i){this.current=i,Ix.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,s)=>this.bindToMotionValue(s,l)),ay.current||$x(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Cc.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Jn(this.notifyUpdate),Jn(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,l){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=xi.has(i);s&&this.onBindTransform&&this.onBindTransform();const c=l.on("change",f=>{this.latestValues[i]=f,this.props.onUpdate&&wt.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{c(),d&&d(),l.owner&&l.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in yi){const l=yi[i];if(!l)continue;const{isEnabled:s,Feature:c}=l;if(!this.features[i]&&c&&s(this.props)&&(this.features[i]=new c(this)),this.features[i]){const d=this.features[i];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Bt()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let s=0;s<$0.length;s++){const c=$0[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const d="on"+c,f=i[d];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=t5(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const s=this.values.get(i);l!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&l!==void 0&&(s=gi(l===null?void 0:l,{owner:this}),this.addValue(i,s)),s}readValue(i,l){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(Fp(s)||$p(s))?s=parseFloat(s):!mx(s)&&Fn.test(l)&&(s=kg(i,l)),this.setBaseTarget(i,le(s)?s.get():s)),le(s)?s.get():s}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){const{initial:l}=this.props;let s;if(typeof l=="string"||typeof l=="object"){const d=hf(this.props,l,this.presenceContext?.custom);d&&(s=d[i])}if(l&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!le(c)?c:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new Xc),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}scheduleRenderMicrotask(){lf.render(this.render)}}class iy extends e5{constructor(){super(...arguments),this.KeyframeResolver=ex}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){return i.style?i.style[l]:void 0}removeValueFromRenderState(i,{vars:l,style:s}){delete l[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;le(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function ry(a,{style:i,vars:l},s,c){const d=a.style;let f;for(f in i)d[f]=i[f];c?.applyProjectionStyles(d,s);for(f in l)d.setProperty(f,l[f])}function n5(a){return window.getComputedStyle(a)}class a5 extends iy{constructor(){super(...arguments),this.type="html",this.renderInstance=ry}readValueFromInstance(i,l){if(xi.has(l))return this.projection?.isProjecting?xc(l):x2(i,l);{const s=n5(i),c=(Qc(l)?s.getPropertyValue(l):s[l])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:l}){return ny(i,l)}build(i,l,s){cf(i,l,s.transformTemplate)}scrapeMotionValuesFromProps(i,l,s){return mf(i,l,s)}}const ly=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function i5(a,i,l,s){ry(a,i,void 0,s);for(const c in i.attrs)a.setAttribute(ly.has(c)?c:pf(c),i.attrs[c])}class r5 extends iy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Bt}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(xi.has(l)){const s=_g(l);return s&&s.default||0}return l=ly.has(l)?l:pf(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,s){return Jg(i,l,s)}build(i,l,s){Gg(i,l,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,l,s,c){i5(i,l,s,c)}mount(i){this.isSVGTag=Qg(i.tagName),super.mount(i)}}const l5=(a,i)=>df(a)?new r5(i):new a5(i,{allowProjection:a!==Z.Fragment});function pi(a,i,l){const s=a.getProps();return hf(s,i,l!==void 0?l:s.custom,a)}const wc=a=>Array.isArray(a);function o5(a,i,l){a.hasValue(i)?a.getValue(i).set(l):a.addValue(i,gi(l))}function s5(a){return wc(a)?a[a.length-1]||0:a}function u5(a,i){const l=pi(a,i);let{transitionEnd:s={},transition:c={},...d}=l||{};d={...d,...s};for(const f in d){const g=s5(d[f]);o5(a,f,g)}}function c5(a){return!!(le(a)&&a.add)}function zc(a,i){const l=a.getValue("willChange");if(c5(l))return l.add(i);if(!l&&xn.WillChange){const s=new xn.WillChange("auto");a.addValue("willChange",s),s.add(i)}}function oy(a){return a.props[Fg]}const f5=a=>a!==null;function d5(a,{repeat:i,repeatType:l="loop"},s){const c=a.filter(f5),d=i&&l!=="loop"&&i%2===1?0:c.length-1;return c[d]}const h5={type:"spring",stiffness:500,damping:25,restSpeed:10},m5=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),p5={type:"keyframes",duration:.8},g5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},y5=(a,{keyframes:i})=>i.length>2?p5:xi.has(a)?a.startsWith("scale")?m5(i[1]):h5:g5;function v5({when:a,delay:i,delayChildren:l,staggerChildren:s,staggerDirection:c,repeat:d,repeatType:f,repeatDelay:g,from:p,elapsed:m,...y}){return!!Object.keys(y).length}const gf=(a,i,l,s={},c,d)=>f=>{const g=af(s,a)||{},p=g.delay||s.delay||0;let{elapsed:m=0}=s;m=m-$e(p);const y={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...g,delay:-m,onUpdate:S=>{i.set(S),g.onUpdate&&g.onUpdate(S)},onComplete:()=>{f(),g.onComplete&&g.onComplete()},name:a,motionValue:i,element:d?void 0:c};v5(g)||Object.assign(y,y5(a,y)),y.duration&&(y.duration=$e(y.duration)),y.repeatDelay&&(y.repeatDelay=$e(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Mc(y),y.delay===0&&(b=!0)),(xn.instantAnimations||xn.skipAnimations)&&(b=!0,Mc(y),y.delay=0),y.allowFlatten=!g.type&&!g.ease,b&&!d&&i.get()!==void 0){const S=d5(y.keyframes,g);if(S!==void 0){wt.update(()=>{y.onUpdate(S),y.onComplete()});return}}return g.isSync?new ef(y):new Y2(y)};function b5({protectedKeys:a,needsAnimating:i},l){const s=a.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,s}function sy(a,i,{delay:l=0,transitionOverride:s,type:c}={}){let{transition:d=a.getDefaultTransition(),transitionEnd:f,...g}=i;s&&(d=s);const p=[],m=c&&a.animationState&&a.animationState.getState()[c];for(const y in g){const b=a.getValue(y,a.latestValues[y]??null),S=g[y];if(S===void 0||m&&b5(m,y))continue;const R={delay:l,...af(d||{},y)},M=b.get();if(M!==void 0&&!b.isAnimating&&!Array.isArray(S)&&S===M&&!R.velocity)continue;let C=!1;if(window.MotionHandoffAnimation){const q=oy(a);if(q){const Y=window.MotionHandoffAnimation(q,y,wt);Y!==null&&(R.startTime=Y,C=!0)}}zc(a,y),b.start(gf(y,b,S,a.shouldReduceMotion&&Cg.has(y)?{type:!1}:R,a,C));const U=b.animation;U&&p.push(U)}return f&&Promise.all(p).then(()=>{wt.update(()=>{f&&u5(a,f)})}),p}function uy(a,i,l,s=0,c=1){const d=Array.from(a).sort((m,y)=>m.sortNodePosition(y)).indexOf(i),f=a.size,g=(f-1)*s;return typeof l=="function"?l(d,f):c===1?d*s:g-d*s}function _c(a,i,l={}){const s=pi(a,i,l.type==="exit"?a.presenceContext?.custom:void 0);let{transition:c=a.getDefaultTransition()||{}}=s||{};l.transitionOverride&&(c=l.transitionOverride);const d=s?()=>Promise.all(sy(a,s,l)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(p=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:b}=c;return x5(a,i,p,m,y,b,l)}:()=>Promise.resolve(),{when:g}=c;if(g){const[p,m]=g==="beforeChildren"?[d,f]:[f,d];return p().then(()=>m())}else return Promise.all([d(),f(l.delay)])}function x5(a,i,l=0,s=0,c=0,d=1,f){const g=[];for(const p of a.variantChildren)p.notify("AnimationStart",i),g.push(_c(p,i,{...f,delay:l+(typeof s=="function"?0:s)+uy(a.variantChildren,p,s,c,d)}).then(()=>p.notify("AnimationComplete",i)));return Promise.all(g)}function S5(a,i,l={}){a.notify("AnimationStart",i);let s;if(Array.isArray(i)){const c=i.map(d=>_c(a,d,l));s=Promise.all(c)}else if(typeof i=="string")s=_c(a,i,l);else{const c=typeof i=="function"?pi(a,i,l.custom):i;s=Promise.all(sy(a,c,l))}return s.then(()=>{a.notify("AnimationComplete",i)})}function cy(a,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==a.length)return!1;for(let s=0;s<l;s++)if(i[s]!==a[s])return!1;return!0}const T5=uf.length;function fy(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?fy(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const i={};for(let l=0;l<T5;l++){const s=uf[l],c=a.props[s];(_r(c)||c===!1)&&(i[s]=c)}return i}const A5=[...sf].reverse(),O5=sf.length;function M5(a){return i=>Promise.all(i.map(({animation:l,options:s})=>S5(a,l,s)))}function D5(a){let i=M5(a),l=I0(),s=!0;const c=p=>(m,y)=>{const b=pi(a,y,p==="exit"?a.presenceContext?.custom:void 0);if(b){const{transition:S,transitionEnd:R,...M}=b;m={...m,...M,...R}}return m};function d(p){i=p(a)}function f(p){const{props:m}=a,y=fy(a.parent)||{},b=[],S=new Set;let R={},M=1/0;for(let U=0;U<O5;U++){const q=A5[U],Y=l[q],H=m[q]!==void 0?m[q]:y[q],W=_r(H),L=q===p?Y.isActive:null;L===!1&&(M=U);let nt=H===y[q]&&H!==m[q]&&W;if(nt&&s&&a.manuallyAnimateOnMount&&(nt=!1),Y.protectedKeys={...R},!Y.isActive&&L===null||!H&&!Y.prevProp||Eo(H)||typeof H=="boolean")continue;const lt=E5(Y.prevProp,H);let $=lt||q===p&&Y.isActive&&!nt&&W||U>M&&W,ct=!1;const Pt=Array.isArray(H)?H:[H];let ne=Pt.reduce(c(q),{});L===!1&&(ne={});const{prevResolvedValues:Yt={}}=Y,tn={...Yt,...ne},Ge=P=>{$=!0,S.has(P)&&(ct=!0,S.delete(P)),Y.needsAnimating[P]=!0;const K=a.getValue(P);K&&(K.liveStyle=!1)};for(const P in tn){const K=ne[P],mt=Yt[P];if(R.hasOwnProperty(P))continue;let T=!1;wc(K)&&wc(mt)?T=!cy(K,mt):T=K!==mt,T?K!=null?Ge(P):S.add(P):K!==void 0&&S.has(P)?Ge(P):Y.protectedKeys[P]=!0}Y.prevProp=H,Y.prevResolvedValues=ne,Y.isActive&&(R={...R,...ne}),s&&a.blockInitialAnimation&&($=!1);const Xt=nt&&lt;$&&(!Xt||ct)&&b.push(...Pt.map(P=>{const K={type:q};if(typeof P=="string"&&s&&!Xt&&a.manuallyAnimateOnMount&&a.parent){const{parent:mt}=a,T=pi(mt,P);if(mt.enteringChildren&&T){const{delayChildren:B}=T.transition||{};K.delay=uy(mt.enteringChildren,a,B)}}return{animation:P,options:K}}))}if(S.size){const U={};if(typeof m.initial!="boolean"){const q=pi(a,Array.isArray(m.initial)?m.initial[0]:m.initial);q&&q.transition&&(U.transition=q.transition)}S.forEach(q=>{const Y=a.getBaseTarget(q),H=a.getValue(q);H&&(H.liveStyle=!0),U[q]=Y??null}),b.push({animation:U})}let C=!!b.length;return s&&(m.initial===!1||m.initial===m.animate)&&!a.manuallyAnimateOnMount&&(C=!1),s=!1,C?i(b):Promise.resolve()}function g(p,m){if(l[p].isActive===m)return Promise.resolve();a.variantChildren?.forEach(b=>b.animationState?.setActive(p,m)),l[p].isActive=m;const y=f(p);for(const b in l)l[b].protectedKeys={};return y}return{animateChanges:f,setActive:g,setAnimateFunction:d,getState:()=>l,reset:()=>{l=I0(),s=!0}}}function E5(a,i){return typeof i=="string"?i!==a:Array.isArray(i)?!cy(i,a):!1}function ga(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function I0(){return{animate:ga(!0),whileInView:ga(),whileHover:ga(),whileTap:ga(),whileDrag:ga(),whileFocus:ga(),exit:ga()}}class Wn{constructor(i){this.isMounted=!1,this.node=i}update(){}}class R5 extends Wn{constructor(i){super(i),i.animationState||(i.animationState=D5(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Eo(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let C5=0;class w5 extends Wn{constructor(){super(...arguments),this.id=C5++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const c=this.node.animationState.setActive("exit",!i);l&&!i&&c.then(()=>{l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const z5={animation:{Feature:R5},exit:{Feature:w5}};function Nr(a,i,l,s={passive:!0}){return a.addEventListener(i,l,s),()=>a.removeEventListener(i,l)}function Br(a){return{point:{x:a.pageX,y:a.pageY}}}const _5=a=>i=>of(i)&&a(i,Br(i));function Dr(a,i,l,s){return Nr(a,i,_5(l),s)}const dy=1e-4,k5=1-dy,N5=1+dy,hy=.01,V5=0-hy,j5=0+hy;function se(a){return a.max-a.min}function U5(a,i,l){return Math.abs(a-i)<=l}function tp(a,i,l,s=.5){a.origin=s,a.originPoint=_t(i.min,i.max,a.origin),a.scale=se(l)/se(i),a.translate=_t(l.min,l.max,a.origin)-a.originPoint,(a.scale>=k5&&a.scale<=N5||isNaN(a.scale))&&(a.scale=1),(a.translate>=V5&&a.translate<=j5||isNaN(a.translate))&&(a.translate=0)}function Er(a,i,l,s){tp(a.x,i.x,l.x,s?s.originX:void 0),tp(a.y,i.y,l.y,s?s.originY:void 0)}function ep(a,i,l){a.min=l.min+i.min,a.max=a.min+se(i)}function B5(a,i,l){ep(a.x,i.x,l.x),ep(a.y,i.y,l.y)}function np(a,i,l){a.min=i.min-l.min,a.max=a.min+se(i)}function Rr(a,i,l){np(a.x,i.x,l.x),np(a.y,i.y,l.y)}function je(a){return[a("x"),a("y")]}const my=({current:a})=>a?a.ownerDocument.defaultView:null,ap=(a,i)=>Math.abs(a-i);function H5(a,i){const l=ap(a.x,i.x),s=ap(a.y,i.y);return Math.sqrt(l**2+s**2)}class py{constructor(i,l,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=lc(this.lastMoveEventInfo,this.history),R=this.startEvent!==null,M=H5(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!R&&!M)return;const{point:C}=S,{timestamp:U}=ee;this.history.push({...C,timestamp:U});const{onStart:q,onMove:Y}=this.handlers;R||(q&&q(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),Y&&Y(this.lastMoveEvent,S)},this.handlePointerMove=(S,R)=>{this.lastMoveEvent=S,this.lastMoveEventInfo=rc(R,this.transformPagePoint),wt.update(this.updatePoint,!0)},this.handlePointerUp=(S,R)=>{this.end();const{onEnd:M,onSessionEnd:C,resumeAnimation:U}=this.handlers;if(this.dragSnapToOrigin&&U&&U(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const q=lc(S.type==="pointercancel"?this.lastMoveEventInfo:rc(R,this.transformPagePoint),this.history);this.startEvent&&M&&M(S,q),C&&C(S,q)},!of(i))return;this.dragSnapToOrigin=d,this.handlers=l,this.transformPagePoint=s,this.distanceThreshold=f,this.contextWindow=c||window;const g=Br(i),p=rc(g,this.transformPagePoint),{point:m}=p,{timestamp:y}=ee;this.history=[{...m,timestamp:y}];const{onSessionStart:b}=l;b&&b(i,lc(p,this.history)),this.removeListeners=Vr(Dr(this.contextWindow,"pointermove",this.handlePointerMove),Dr(this.contextWindow,"pointerup",this.handlePointerUp),Dr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),Jn(this.updatePoint)}}function rc(a,i){return i?{point:i(a.point)}:a}function ip(a,i){return{x:a.x-i.x,y:a.y-i.y}}function lc({point:a},i){return{point:a,delta:ip(a,gy(i)),offset:ip(a,q5(i)),velocity:L5(i,.1)}}function q5(a){return a[0]}function gy(a){return a[a.length-1]}function L5(a,i){if(a.length<2)return{x:0,y:0};let l=a.length-1,s=null;const c=gy(a);for(;l>=0&&(s=a[l],!(c.timestamp-s.timestamp>$e(i)));)l--;if(!s)return{x:0,y:0};const d=Ue(c.timestamp-s.timestamp);if(d===0)return{x:0,y:0};const f={x:(c.x-s.x)/d,y:(c.y-s.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function P5(a,{min:i,max:l},s){return i!==void 0&&a<i?a=s?_t(i,a,s.min):Math.max(a,i):l!==void 0&&a>l&&(a=s?_t(l,a,s.max):Math.min(a,l)),a}function rp(a,i,l){return{min:i!==void 0?a.min+i:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function Y5(a,{top:i,left:l,bottom:s,right:c}){return{x:rp(a.x,l,c),y:rp(a.y,i,s)}}function lp(a,i){let l=i.min-a.min,s=i.max-a.max;return i.max-i.min<a.max-a.min&&([l,s]=[s,l]),{min:l,max:s}}function X5(a,i){return{x:lp(a.x,i.x),y:lp(a.y,i.y)}}function G5(a,i){let l=.5;const s=se(a),c=se(i);return c>s?l=Cr(i.min,i.max-s,a.min):s>c&&(l=Cr(a.min,a.max-c,i.min)),bn(0,1,l)}function Z5(a,i){const l={};return i.min!==void 0&&(l.min=i.min-a.min),i.max!==void 0&&(l.max=i.max-a.min),l}const kc=.35;function Q5(a=kc){return a===!1?a=0:a===!0&&(a=kc),{x:op(a,"left","right"),y:op(a,"top","bottom")}}function op(a,i,l){return{min:sp(a,i),max:sp(a,l)}}function sp(a,i){return typeof a=="number"?a:a[i]||0}const K5=new WeakMap;class J5{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Bt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:l=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const d=b=>{const{dragSnapToOrigin:S}=this.getProps();S?this.pauseAnimation():this.stopAnimation(),l&&this.snapToCursor(Br(b).point)},f=(b,S)=>{const{drag:R,dragPropagation:M,onDragStart:C}=this.getProps();if(R&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=lx(R),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),je(q=>{let Y=this.getAxisMotionValue(q).get()||0;if(Ie.test(Y)){const{projection:H}=this.visualElement;if(H&&H.layout){const W=H.layout.layoutBox[q];W&&(Y=se(W)*(parseFloat(Y)/100))}}this.originPoint[q]=Y}),C&&wt.postRender(()=>C(b,S)),zc(this.visualElement,"transform");const{animationState:U}=this.visualElement;U&&U.setActive("whileDrag",!0)},g=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:R,dragDirectionLock:M,onDirectionLock:C,onDrag:U}=this.getProps();if(!R&&!this.openDragLock)return;const{offset:q}=S;if(M&&this.currentDirection===null){this.currentDirection=F5(q),this.currentDirection!==null&&C&&C(this.currentDirection);return}this.updateAxis("x",S.point,q),this.updateAxis("y",S.point,q),this.visualElement.render(),U&&U(b,S)},p=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>je(b=>this.getAnimationState(b)==="paused"&&this.getAxisMotionValue(b).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new py(i,{onSessionStart:d,onStart:f,onMove:g,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:my(this.visualElement)})}stop(i,l){const s=i||this.latestPointerEvent,c=l||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!c||!s)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:g}=this.getProps();g&&wt.postRender(()=>g(s,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(i,l,s){const{drag:c}=this.getProps();if(!s||!lo(i,c,this.currentDirection))return;const d=this.getAxisMotionValue(i);let f=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(f=P5(f,this.constraints[i],this.elastic[i])),d.set(f)}resolveConstraints(){const{dragConstraints:i,dragElastic:l}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;i&&fi(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=Y5(s.layoutBox,i):this.constraints=!1,this.elastic=Q5(l),c!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&je(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Z5(s.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!fi(i))return!1;const s=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const d=Wx(s,c.root,this.visualElement.getTransformPagePoint());let f=X5(c.layout.layoutBox,d);if(l){const g=l(Kx(f));this.hasMutatedConstraints=!!g,g&&(f=Ig(g))}return f}startAnimation(i){const{drag:l,dragMomentum:s,dragElastic:c,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:g}=this.getProps(),p=this.constraints||{},m=je(y=>{if(!lo(y,l,this.currentDirection))return;let b=p&&p[y]||{};f&&(b={min:0,max:0});const S=c?200:1e6,R=c?40:1e7,M={type:"inertia",velocity:s?i[y]:0,bounceStiffness:S,bounceDamping:R,timeConstant:750,restDelta:1,restSpeed:10,...d,...b};return this.startAxisValueAnimation(y,M)});return Promise.all(m).then(g)}startAxisValueAnimation(i,l){const s=this.getAxisMotionValue(i);return zc(this.visualElement,i),s.start(gf(i,s,0,l,this.visualElement,!1))}stopAnimation(){je(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){je(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),c=s[l];return c||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){je(l=>{const{drag:s}=this.getProps();if(!lo(l,s,this.currentDirection))return;const{projection:c}=this.visualElement,d=this.getAxisMotionValue(l);if(c&&c.layout){const{min:f,max:g}=c.layout.layoutBox[l];d.set(i[l]-_t(f,g,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:s}=this.visualElement;if(!fi(l)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};je(f=>{const g=this.getAxisMotionValue(f);if(g&&this.constraints!==!1){const p=g.get();c[f]=G5({min:p,max:p},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),je(f=>{if(!lo(f,i,null))return;const g=this.getAxisMotionValue(f),{min:p,max:m}=this.constraints[f];g.set(_t(p,m,c[f]))})}addListeners(){if(!this.visualElement.current)return;K5.set(this.visualElement,this);const i=this.visualElement.current,l=Dr(i,"pointerdown",p=>{const{drag:m,dragListener:y=!0}=this.getProps();m&&y&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();fi(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,d=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),wt.read(s);const f=Nr(window,"resize",()=>this.scalePositionWithinConstraints()),g=c.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(je(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=p[y].translate,b.set(b.get()+p[y].translate))}),this.visualElement.render())}));return()=>{f(),l(),d(),g&&g()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:d=!1,dragElastic:f=kc,dragMomentum:g=!0}=i;return{...i,drag:l,dragDirectionLock:s,dragPropagation:c,dragConstraints:d,dragElastic:f,dragMomentum:g}}}function lo(a,i,l){return(i===!0||i===a)&&(l===null||l===a)}function F5(a,i=10){let l=null;return Math.abs(a.y)>i?l="y":Math.abs(a.x)>i&&(l="x"),l}class W5 extends Wn{constructor(i){super(i),this.removeGroupControls=Be,this.removeListeners=Be,this.controls=new J5(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Be}unmount(){this.removeGroupControls(),this.removeListeners()}}const up=a=>(i,l)=>{a&&wt.postRender(()=>a(i,l))};class $5 extends Wn{constructor(){super(...arguments),this.removePointerDownListener=Be}onPointerDown(i){this.session=new py(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:my(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:up(i),onStart:up(l),onMove:s,onEnd:(d,f)=>{delete this.session,c&&wt.postRender(()=>c(d,f))}}}mount(){this.removePointerDownListener=Dr(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const bo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function cp(a,i){return i.max===i.min?0:a/(i.max-i.min)*100}const xr={correct:(a,i)=>{if(!i.target)return a;if(typeof a=="string")if(it.test(a))a=parseFloat(a);else return a;const l=cp(a,i.target.x),s=cp(a,i.target.y);return`${l}% ${s}%`}},I5={correct:(a,{treeScale:i,projectionDelta:l})=>{const s=a,c=Fn.parse(a);if(c.length>5)return s;const d=Fn.createTransformer(a),f=typeof c[0]!="number"?1:0,g=l.x.scale*i.x,p=l.y.scale*i.y;c[0+f]/=g,c[1+f]/=p;const m=_t(g,p,.5);return typeof c[2+f]=="number"&&(c[2+f]/=m),typeof c[3+f]=="number"&&(c[3+f]/=m),d(c)}};let oc=!1;class tS extends Z.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s,layoutId:c}=this.props,{projection:d}=i;Tx(eS),d&&(l.group&&l.group.add(d),s&&s.register&&c&&s.register(d),oc&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),bo.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:s,drag:c,isPresent:d}=this.props,{projection:f}=s;return f&&(f.isPresent=d,oc=!0,c||i.layoutDependency!==l||l===void 0||i.isPresent!==d?f.willUpdate():this.safeToRemove(),i.isPresent!==d&&(d?f.promote():f.relegate()||wt.postRender(()=>{const g=f.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),lf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s}=this.props,{projection:c}=i;oc=!0,c&&(c.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function yy(a){const[i,l]=px(),s=Z.useContext(Jp);return j.jsx(tS,{...a,layoutGroup:s,switchLayoutGroup:Z.useContext(Wg),isPresent:i,safeToRemove:l})}const eS={borderRadius:{...xr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xr,borderTopRightRadius:xr,borderBottomLeftRadius:xr,borderBottomRightRadius:xr,boxShadow:I5};function nS(a,i,l){const s=le(a)?a:gi(a);return s.start(gf("",s,i,l)),s.animation}const aS=(a,i)=>a.depth-i.depth;class iS{constructor(){this.children=[],this.isDirty=!1}add(i){qc(this.children,i),this.isDirty=!0}remove(i){Lc(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(aS),this.isDirty=!1,this.children.forEach(i)}}function rS(a,i){const l=me.now(),s=({timestamp:c})=>{const d=c-l;d>=i&&(Jn(s),a(d-i))};return wt.setup(s,!0),()=>Jn(s)}const vy=["TopLeft","TopRight","BottomLeft","BottomRight"],lS=vy.length,fp=a=>typeof a=="string"?parseFloat(a):a,dp=a=>typeof a=="number"||it.test(a);function oS(a,i,l,s,c,d){c?(a.opacity=_t(0,l.opacity??1,sS(s)),a.opacityExit=_t(i.opacity??1,0,uS(s))):d&&(a.opacity=_t(i.opacity??1,l.opacity??1,s));for(let f=0;f<lS;f++){const g=`border${vy[f]}Radius`;let p=hp(i,g),m=hp(l,g);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||dp(p)===dp(m)?(a[g]=Math.max(_t(fp(p),fp(m),s),0),(Ie.test(m)||Ie.test(p))&&(a[g]+="%")):a[g]=m}(i.rotate||l.rotate)&&(a.rotate=_t(i.rotate||0,l.rotate||0,s))}function hp(a,i){return a[i]!==void 0?a[i]:a.borderRadius}const sS=by(0,.5,lg),uS=by(.5,.95,Be);function by(a,i,l){return s=>s<a?0:s>i?1:l(Cr(a,i,s))}function mp(a,i){a.min=i.min,a.max=i.max}function Ve(a,i){mp(a.x,i.x),mp(a.y,i.y)}function pp(a,i){a.translate=i.translate,a.scale=i.scale,a.originPoint=i.originPoint,a.origin=i.origin}function gp(a,i,l,s,c){return a-=i,a=Oo(a,1/l,s),c!==void 0&&(a=Oo(a,1/c,s)),a}function cS(a,i=0,l=1,s=.5,c,d=a,f=a){if(Ie.test(i)&&(i=parseFloat(i),i=_t(f.min,f.max,i/100)-f.min),typeof i!="number")return;let g=_t(d.min,d.max,s);a===d&&(g-=i),a.min=gp(a.min,i,l,g,c),a.max=gp(a.max,i,l,g,c)}function yp(a,i,[l,s,c],d,f){cS(a,i[l],i[s],i[c],i.scale,d,f)}const fS=["x","scaleX","originX"],dS=["y","scaleY","originY"];function vp(a,i,l,s){yp(a.x,i,fS,l?l.x:void 0,s?s.x:void 0),yp(a.y,i,dS,l?l.y:void 0,s?s.y:void 0)}function bp(a){return a.translate===0&&a.scale===1}function xy(a){return bp(a.x)&&bp(a.y)}function xp(a,i){return a.min===i.min&&a.max===i.max}function hS(a,i){return xp(a.x,i.x)&&xp(a.y,i.y)}function Sp(a,i){return Math.round(a.min)===Math.round(i.min)&&Math.round(a.max)===Math.round(i.max)}function Sy(a,i){return Sp(a.x,i.x)&&Sp(a.y,i.y)}function Tp(a){return se(a.x)/se(a.y)}function Ap(a,i){return a.translate===i.translate&&a.scale===i.scale&&a.originPoint===i.originPoint}class mS{constructor(){this.members=[]}add(i){qc(this.members,i),i.scheduleRender()}remove(i){if(Lc(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){const l=this.members.findIndex(c=>i===c);if(l===0)return!1;let s;for(let c=l;c>=0;c--){const d=this.members[c];if(d.isPresent!==!1){s=d;break}}return s?(this.promote(s),!0):!1}promote(i,l){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,l&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:l,resumingFrom:s}=i;l.onExitComplete&&l.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function pS(a,i,l){let s="";const c=a.x.translate/i.x,d=a.y.translate/i.y,f=l?.z||0;if((c||d||f)&&(s=`translate3d(${c}px, ${d}px, ${f}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:m,rotate:y,rotateX:b,rotateY:S,skewX:R,skewY:M}=l;m&&(s=`perspective(${m}px) ${s}`),y&&(s+=`rotate(${y}deg) `),b&&(s+=`rotateX(${b}deg) `),S&&(s+=`rotateY(${S}deg) `),R&&(s+=`skewX(${R}deg) `),M&&(s+=`skewY(${M}deg) `)}const g=a.x.scale*i.x,p=a.y.scale*i.y;return(g!==1||p!==1)&&(s+=`scale(${g}, ${p})`),s||"none"}const sc=["","X","Y","Z"],gS=1e3;let yS=0;function uc(a,i,l,s){const{latestValues:c}=i;c[a]&&(l[a]=c[a],i.setStaticValue(a,0),s&&(s[a]=0))}function Ty(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:i}=a.options;if(!i)return;const l=oy(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:c,layoutId:d}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",wt,!(c||d))}const{parent:s}=a;s&&!s.hasCheckedOptimisedAppear&&Ty(s)}function Ay({attachResizeListener:a,defaultParent:i,measureScroll:l,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(f={},g=i?.()){this.id=yS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(xS),this.nodes.forEach(OS),this.nodes.forEach(MS),this.nodes.forEach(SS)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new iS)}addEventListener(f,g){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Xc),this.eventHandlers.get(f).add(g)}notifyListeners(f,...g){const p=this.eventHandlers.get(f);p&&p.notify(...g)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Bg(f)&&!dx(f),this.instance=f;const{layoutId:g,layout:p,visualElement:m}=this.options;if(m&&!m.current&&m.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||g)&&(this.isLayoutDirty=!0),a){let y,b=0;const S=()=>this.root.updateBlockedByResize=!1;wt.read(()=>{b=window.innerWidth}),a(f,()=>{const R=window.innerWidth;R!==b&&(b=R,this.root.updateBlockedByResize=!0,y&&y(),y=rS(S,250),bo.hasAnimatedSinceResize&&(bo.hasAnimatedSinceResize=!1,this.nodes.forEach(Dp)))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&m&&(g||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:R})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||m.getDefaultTransition()||wS,{onLayoutAnimationStart:C,onLayoutAnimationComplete:U}=m.getProps(),q=!this.targetLayout||!Sy(this.targetLayout,R),Y=!b&&S;if(this.options.layoutRoot||this.resumeFrom||Y||b&&(q||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const H={...af(M,"layout"),onPlay:C,onComplete:U};(m.shouldReduceMotion||this.options.layoutRoot)&&(H.delay=0,H.type=!1),this.startAnimation(H),this.setAnimationOrigin(y,Y)}else b||Dp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=R})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Jn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(DS),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ty(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:g,layout:p}=this.options;if(g===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Op);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Mp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(AS),this.nodes.forEach(vS),this.nodes.forEach(bS)):this.nodes.forEach(Mp),this.clearAllSnapshots();const g=me.now();ee.delta=bn(0,1e3/60,g-ee.timestamp),ee.timestamp=g,ee.isProcessing=!0,Wu.update.process(ee),Wu.preRender.process(ee),Wu.render.process(ee),ee.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,lf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(TS),this.sharedNodes.forEach(ES)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,wt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){wt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!se(this.snapshot.measuredBox.x)&&!se(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Bt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(g=!1),g&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!xy(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,y=m!==this.prevTransformTemplateValue;f&&this.instance&&(g||ya(this.latestValues)||y)&&(c(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const g=this.measurePageBox();let p=this.removeElementScroll(g);return f&&(p=this.removeTransform(p)),zS(p),{animationId:this.root.animationId,measuredBox:g,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return Bt();const g=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(_S))){const{scroll:m}=this.root;m&&(di(g.x,m.offset.x),di(g.y,m.offset.y))}return g}removeElementScroll(f){const g=Bt();if(Ve(g,f),this.scroll?.wasRoot)return g;for(let p=0;p<this.path.length;p++){const m=this.path[p],{scroll:y,options:b}=m;m!==this.root&&y&&b.layoutScroll&&(y.wasRoot&&Ve(g,f),di(g.x,y.offset.x),di(g.y,y.offset.y))}return g}applyTransform(f,g=!1){const p=Bt();Ve(p,f);for(let m=0;m<this.path.length;m++){const y=this.path[m];!g&&y.options.layoutScroll&&y.scroll&&y!==y.root&&hi(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),ya(y.latestValues)&&hi(p,y.latestValues)}return ya(this.latestValues)&&hi(p,this.latestValues),p}removeTransform(f){const g=Bt();Ve(g,f);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!ya(m.latestValues))continue;Ec(m.latestValues)&&m.updateSnapshot();const y=Bt(),b=m.measurePageBox();Ve(y,b),vp(g,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,y)}return ya(this.latestValues)&&vp(g,this.latestValues),g}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ee.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==g;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!(!this.layout||!(y||b))){if(this.resolvedRelativeTargetAt=ee.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Bt(),this.relativeTargetOrigin=Bt(),Rr(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Bt(),this.targetWithTransforms=Bt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),B5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ve(this.target,this.layout.layoutBox),ey(this.target,this.targetDelta)):Ve(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Bt(),this.relativeTargetOrigin=Bt(),Rr(this.relativeTargetOrigin,this.target,S.target),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Ec(this.parent.latestValues)||ty(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),g=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===ee.timestamp&&(p=!1),p)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;Ve(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;Fx(this.layoutCorrected,this.treeScale,this.path,g),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Bt());const{target:R}=f;if(!R){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(pp(this.prevProjectionDelta.x,this.projectionDelta.x),pp(this.prevProjectionDelta.y,this.projectionDelta.y)),Er(this.projectionDelta,this.layoutCorrected,R,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!Ap(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ap(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",R))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=mi(),this.projectionDelta=mi(),this.projectionDeltaWithTransform=mi()}setAnimationOrigin(f,g=!1){const p=this.snapshot,m=p?p.latestValues:{},y={...this.latestValues},b=mi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const S=Bt(),R=p?p.source:void 0,M=this.layout?this.layout.source:void 0,C=R!==M,U=this.getStack(),q=!U||U.members.length<=1,Y=!!(C&&!q&&this.options.crossfade===!0&&!this.path.some(CS));this.animationProgress=0;let H;this.mixTargetDelta=W=>{const L=W/1e3;Ep(b.x,f.x,L),Ep(b.y,f.y,L),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Rr(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),RS(this.relativeTarget,this.relativeTargetOrigin,S,L),H&&hS(this.relativeTarget,H)&&(this.isProjectionDirty=!1),H||(H=Bt()),Ve(H,this.relativeTarget)),C&&(this.animationValues=y,oS(y,m,this.latestValues,L,Y,q)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Jn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=wt.update(()=>{bo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=gi(0)),this.currentAnimation=nS(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),f.onUpdate&&f.onUpdate(g)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gS),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:g,target:p,layout:m,latestValues:y}=f;if(!(!g||!p||!m)){if(this!==f&&this.layout&&m&&Oy(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||Bt();const b=se(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+b;const S=se(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+S}Ve(g,p),hi(g,y),Er(this.projectionDeltaWithTransform,this.layoutCorrected,g,y)}}registerSharedNode(f,g){this.sharedNodes.has(f)||this.sharedNodes.set(f,new mS),this.sharedNodes.get(f).add(g);const m=g.options.initialPromotionConfig;g.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(g):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:g,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let g=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(g=!0),!g)return;const m={};p.z&&uc("z",f,m,this.animationValues);for(let y=0;y<sc.length;y++)uc(`rotate${sc[y]}`,f,m,this.animationValues),uc(`skew${sc[y]}`,f,m,this.animationValues);f.render();for(const y in m)f.setStaticValue(y,m[y]),this.animationValues&&(this.animationValues[y]=m[y]);f.scheduleRender()}applyProjectionStyles(f,g){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=vo(g?.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=vo(g?.pointerEvents)||""),this.hasProjected&&!ya(this.latestValues)&&(f.transform=p?p({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=m.animationValues||m.latestValues;this.applyTransformsToTarget();let b=pS(this.projectionDeltaWithTransform,this.treeScale,y);p&&(b=p(y,b)),f.transform=b;const{x:S,y:R}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${R.origin*100}% 0`,m.animationValues?f.opacity=m===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=m===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const M in kr){if(y[M]===void 0)continue;const{correct:C,applyTo:U,isCSSVariable:q}=kr[M],Y=b==="none"?y[M]:C(y[M],m);if(U){const H=U.length;for(let W=0;W<H;W++)f[U[W]]=Y}else q?this.options.visualElement.renderState.vars[M]=Y:f[M]=Y}this.options.layoutId&&(f.pointerEvents=m===this?vo(g?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Op),this.root.sharedNodes.clear()}}}function vS(a){a.updateLayout()}function bS(a){const i=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&i&&a.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:s}=a.layout,{animationType:c}=a.options,d=i.source!==a.layout.source;c==="size"?je(y=>{const b=d?i.measuredBox[y]:i.layoutBox[y],S=se(b);b.min=l[y].min,b.max=b.min+S}):Oy(c,i.layoutBox,l)&&je(y=>{const b=d?i.measuredBox[y]:i.layoutBox[y],S=se(l[y]);b.max=b.min+S,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[y].max=a.relativeTarget[y].min+S)});const f=mi();Er(f,l,i.layoutBox);const g=mi();d?Er(g,a.applyTransform(s,!0),i.measuredBox):Er(g,l,i.layoutBox);const p=!xy(f);let m=!1;if(!a.resumeFrom){const y=a.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:b,layout:S}=y;if(b&&S){const R=Bt();Rr(R,i.layoutBox,b.layoutBox);const M=Bt();Rr(M,l,S.layoutBox),Sy(R,M)||(m=!0),y.options.layoutRoot&&(a.relativeTarget=M,a.relativeTargetOrigin=R,a.relativeParent=y)}}}a.notifyListeners("didUpdate",{layout:l,snapshot:i,delta:g,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:m})}else if(a.isLead()){const{onExitComplete:l}=a.options;l&&l()}a.options.transition=void 0}function xS(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function SS(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function TS(a){a.clearSnapshot()}function Op(a){a.clearMeasurements()}function Mp(a){a.isLayoutDirty=!1}function AS(a){const{visualElement:i}=a.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),a.resetTransform()}function Dp(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function OS(a){a.resolveTargetDelta()}function MS(a){a.calcProjection()}function DS(a){a.resetSkewAndRotation()}function ES(a){a.removeLeadSnapshot()}function Ep(a,i,l){a.translate=_t(i.translate,0,l),a.scale=_t(i.scale,1,l),a.origin=i.origin,a.originPoint=i.originPoint}function Rp(a,i,l,s){a.min=_t(i.min,l.min,s),a.max=_t(i.max,l.max,s)}function RS(a,i,l,s){Rp(a.x,i.x,l.x,s),Rp(a.y,i.y,l.y,s)}function CS(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const wS={duration:.45,ease:[.4,0,.1,1]},Cp=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),wp=Cp("applewebkit/")&&!Cp("chrome/")?Math.round:Be;function zp(a){a.min=wp(a.min),a.max=wp(a.max)}function zS(a){zp(a.x),zp(a.y)}function Oy(a,i,l){return a==="position"||a==="preserve-aspect"&&!U5(Tp(i),Tp(l),.2)}function _S(a){return a!==a.root&&a.scroll?.wasRoot}const kS=Ay({attachResizeListener:(a,i)=>Nr(a,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),cc={current:void 0},My=Ay({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!cc.current){const a=new kS({});a.mount(window),a.setOptions({layoutScroll:!0}),cc.current=a}return cc.current},resetTransform:(a,i)=>{a.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),NS={pan:{Feature:$5},drag:{Feature:W5,ProjectionNode:My,MeasureLayout:yy}};function _p(a,i,l){const{props:s}=a;a.animationState&&s.whileHover&&a.animationState.setActive("whileHover",l==="Start");const c="onHover"+l,d=s[c];d&&wt.postRender(()=>d(i,Br(i)))}class VS extends Wn{mount(){const{current:i}=this.node;i&&(this.unmount=ox(i,(l,s)=>(_p(this.node,s,"Start"),c=>_p(this.node,c,"End"))))}unmount(){}}class jS extends Wn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vr(Nr(this.node.current,"focus",()=>this.onFocus()),Nr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function kp(a,i,l){const{props:s}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&s.whileTap&&a.animationState.setActive("whileTap",l==="Start");const c="onTap"+(l==="End"?"":l),d=s[c];d&&wt.postRender(()=>d(i,Br(i)))}class US extends Wn{mount(){const{current:i}=this.node;i&&(this.unmount=fx(i,(l,s)=>(kp(this.node,s,"Start"),(c,{success:d})=>kp(this.node,c,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Nc=new WeakMap,fc=new WeakMap,BS=a=>{const i=Nc.get(a.target);i&&i(a)},HS=a=>{a.forEach(BS)};function qS({root:a,...i}){const l=a||document;fc.has(l)||fc.set(l,{});const s=fc.get(l),c=JSON.stringify(i);return s[c]||(s[c]=new IntersectionObserver(HS,{root:a,...i})),s[c]}function LS(a,i,l){const s=qS(i);return Nc.set(a,l),s.observe(a),()=>{Nc.delete(a),s.unobserve(a)}}const PS={some:0,all:1};class YS extends Wn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:l,margin:s,amount:c="some",once:d}=i,f={root:l?l.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:PS[c]},g=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,d&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),S=m?y:b;S&&S(p)};return LS(this.node.current,f,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(XS(i,l))&&this.startObserver()}unmount(){}}function XS({viewport:a={}},{viewport:i={}}={}){return l=>a[l]!==i[l]}const GS={inView:{Feature:YS},tap:{Feature:US},focus:{Feature:jS},hover:{Feature:VS}},ZS={layout:{ProjectionNode:My,MeasureLayout:yy}},QS={...z5,...GS,...NS,...ZS},Np=Qx(QS,l5),KS=()=>{const{cart:a}=Ta(),[i,l]=Z.useState(!1),[s,c]=Z.useState(!1),{message:d,showMessage:f}=Gp();function g(){l(()=>!i)}const p=a.length===0,m=p?[]:a.map((b,S)=>j.jsx(b0,{cart:b,showMessage:f},S)),y=p?[]:a.map((b,S)=>j.jsx(b0,{type:"confirmList",cart:b},S+1));return Z.useEffect(()=>{document.body.style.overflow=i?"hidden":"scroll"},[i]),i?j.jsxs(Np.div,{transition:{duration:.3,ease:"easeInOut"},className:"basis-[40%] max-h-150  h-fit scroll-auto flex flex-col gap-4 bg-rose-50 rounded-xl p-3 xs:p-6",children:[j.jsx(x0,{cartList:m,message:d}),a.length!==0&&j.jsxs(j.Fragment,{children:[j.jsx(hc,{}),j.jsx(S0,{}),j.jsx(Kn,{type:"confirm",onClick:g,children:"Confirm Order"})]})," ",i?j.jsx(p1,{closeModalFn:g,children:s?j.jsx(T0,{cart:y,setIsModalOpen:g,hasOrderConfirm:s,changeToConfirmState:c}):j.jsx(T0,{cart:y,setIsModalOpen:g,hasOrderConfirm:s,changeToConfirmState:c})}):null]}):j.jsxs(Np.div,{layout:!0,transition:{duration:.3,ease:"easeInOut"},className:"basis-[40%] max-h-150  h-fit scroll-auto flex flex-col gap-4 bg-rose-50 rounded-xl p-3 xs:p-6",children:[j.jsx(x0,{cartList:m,message:d}),a.length!==0&&j.jsxs(j.Fragment,{children:[j.jsx(hc,{}),j.jsx(S0,{}),j.jsx(Kn,{type:"confirm",onClick:g,children:"Confirm Order"})]})]})},JS="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='20'%20fill='none'%20viewBox='0%200%2021%2020'%3e%3cg%20fill='%23C73B0F'%20clip-path='url(%23a)'%3e%3cpath%20d='M6.583%2018.75a1.25%201.25%200%201%200%200-2.5%201.25%201.25%200%200%200%200%202.5ZM15.334%2018.75a1.25%201.25%200%201%200%200-2.5%201.25%201.25%200%200%200%200%202.5ZM3.446%201.752a.625.625%200%200%200-.613-.502h-2.5V2.5h1.988l2.4%2011.998a.625.625%200%200%200%20.612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625%200%200%200%20.61-.49l1.417-6.385h-1.28L16.083%2010H5.096l-1.65-8.248Z'/%3e%3cpath%20d='M11.584%203.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M.333%200h20v20h-20z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Vp=({onClick:a,baseMenuBtnClass:i,addedClasses:l=""})=>j.jsxs(Kn,{className:`${i} ${l}`,onClick:a,type:"addToCart",children:[j.jsx("span",{className:"basis-[15%] lg:basis-[25%]",children:j.jsx("img",{src:JS,alt:""})}),j.jsx("span",{className:"basis-[85%] lg:basis-[75%]",children:"Add to Cart"})]}),FS=({baseMenuBtnClass:a,addedClasses:i,quantity:l,increaseQuantity:s,decreaseQuantity:c})=>j.jsxs("div",{className:`${a} ${i}`,children:[j.jsx(Kn,{type:"adjustQuantity",onClick:c,children:j.jsx("img",{className:"w-4 h-4",alt:"button to adjust quantity",src:"/Svgs/minus.svg"})}),j.jsx("span",{className:"text-xs",children:l}),j.jsx(Kn,{type:"adjustQuantity",onClick:s,children:j.jsx("img",{className:"w-4 h-4",alt:"button to adjust quantity",src:"/Svgs/plus.svg"})})]});var Vc=new Map,oo=new WeakMap,jp=0,WS=void 0;function $S(a){return a?(oo.has(a)||(jp+=1,oo.set(a,jp.toString())),oo.get(a)):"0"}function IS(a){return Object.keys(a).sort().filter(i=>a[i]!==void 0).map(i=>`${i}_${i==="root"?$S(a.root):a[i]}`).toString()}function tT(a){const i=IS(a);let l=Vc.get(i);if(!l){const s=new Map;let c;const d=new IntersectionObserver(f=>{f.forEach(g=>{var p;const m=g.isIntersecting&&c.some(y=>g.intersectionRatio>=y);a.trackVisibility&&typeof g.isVisible>"u"&&(g.isVisible=m),(p=s.get(g.target))==null||p.forEach(y=>{y(m,g)})})},a);c=d.thresholds||(Array.isArray(a.threshold)?a.threshold:[a.threshold||0]),l={id:i,observer:d,elements:s},Vc.set(i,l)}return l}function eT(a,i,l={},s=WS){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const p=a.getBoundingClientRect();return i(s,{isIntersecting:s,target:a,intersectionRatio:typeof l.threshold=="number"?l.threshold:0,time:0,boundingClientRect:p,intersectionRect:p,rootBounds:p}),()=>{}}const{id:c,observer:d,elements:f}=tT(l),g=f.get(a)||[];return f.has(a)||f.set(a,g),g.push(i),d.observe(a),function(){g.splice(g.indexOf(i),1),g.length===0&&(f.delete(a),d.unobserve(a)),f.size===0&&(d.disconnect(),Vc.delete(c))}}function nT({threshold:a,delay:i,trackVisibility:l,rootMargin:s,root:c,triggerOnce:d,skip:f,initialInView:g,fallbackInView:p,onChange:m}={}){var y;const[b,S]=Z.useState(null),R=Z.useRef(m),[M,C]=Z.useState({inView:!!g,entry:void 0});R.current=m,Z.useEffect(()=>{if(f||!b)return;let H;return H=eT(b,(W,L)=>{C({inView:W,entry:L}),R.current&&R.current(W,L),L.isIntersecting&&d&&H&&(H(),H=void 0)},{root:c,rootMargin:s,threshold:a,trackVisibility:l,delay:i},p),()=>{H&&H()}},[Array.isArray(a)?a.toString():a,b,c,s,d,f,l,p,i]);const U=(y=M.entry)==null?void 0:y.target,q=Z.useRef(void 0);!b&&U&&!d&&!f&&q.current!==U&&(q.current=U,C({inView:!!g,entry:void 0}));const Y=[S,M.inView,M.entry];return Y.ref=Y[0],Y.inView=Y[1],Y.entry=Y[2],Y}const aT=({menu:a,showMessage:i})=>{const{addToCart:l,cart:s,decQuantity:c}=Ta(),{ref:d,inView:f}=nT({threshold:.6,triggerOnce:!0}),g=[{src:a.image.desktop,media:"(min-width: 1024px)"},{src:a.image.tablet,media:"(min-width: 640px)"},{src:a.image.mobile,media:"(max-width: 639px)"}],p="w-[clamp(155px,69%,180px)] max-h-8 absolute flex py-1.5 items-center -bottom-3 left-[50%] -translate-x-[50%] rounded-2xl border-red border-1 ",m=s.find(R=>R.id===a.id),y=m?.quantity?m.quantity<0:!0;function b(){const R={name:a.name,price:a.price,quantity:1,id:a.id};l(R),i({message:`${a.name} added to the cart`})}function S(){m&&c(m.id)}return j.jsxs("div",{className:`basis-44 h-full flex flex-col gap-8 ${f?"motion-preset-blur-down-lg":"opacity-0"}  motion-duration-600`,ref:d,children:[j.jsxs("picture",{className:"relative",children:[m?y?j.jsx(Vp,{baseMenuBtnClass:p,onClick:b,addedClasses:"gap-2 px-5"}):j.jsx(FS,{baseMenuBtnClass:p,quantity:m.quantity,addedClasses:"text-rose-50 bg-red  px-1 justify-between",increaseQuantity:b,decreaseQuantity:S}):j.jsx(Vp,{baseMenuBtnClass:p,onClick:b,addedClasses:"gap-2 px-5"}),g.map((R,M)=>j.jsx("source",{srcSet:R.src,media:R.media},M)),j.jsx("img",{src:a.image.mobile,alt:a.name,className:` w-full rounded-lg ${!y&&"border-1 border-red"}`,loading:"lazy"})]}),j.jsxs("div",{className:"flex flex-col justify-center",children:[j.jsx("h5",{className:"text-sm  lg:text-base text-rose-500",children:a.category}),j.jsx("h3",{className:"lg:text-lg text-base font-semibold ",children:a.name}),j.jsx("h4",{className:"text-red justify-self-end ",children:ui({price:a.price})})]})]})};function Qt(a,i){i===void 0&&(i={});var l=i.insertAt;if(a&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",l==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}}Qt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ht=function(){return ht=Object.assign||function(a){for(var i,l=1,s=arguments.length;l<s;l++)for(var c in i=arguments[l])Object.prototype.hasOwnProperty.call(i,c)&&(a[c]=i[c]);return a},ht.apply(this,arguments)};function Mo(a){return Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Mo(a)}var iT=/^\s+/,rT=/\s+$/;function J(a,i){if(i=i||{},(a=a||"")instanceof J)return a;if(!(this instanceof J))return new J(a,i);var l=(function(s){var c={r:0,g:0,b:0},d=1,f=null,g=null,p=null,m=!1,y=!1;typeof s=="string"&&(s=(function(M){M=M.replace(iT,"").replace(rT,"").toLowerCase();var C,U=!1;if(jc[M])M=jc[M],U=!0;else if(M=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(C=Pe.rgb.exec(M))?{r:C[1],g:C[2],b:C[3]}:(C=Pe.rgba.exec(M))?{r:C[1],g:C[2],b:C[3],a:C[4]}:(C=Pe.hsl.exec(M))?{h:C[1],s:C[2],l:C[3]}:(C=Pe.hsla.exec(M))?{h:C[1],s:C[2],l:C[3],a:C[4]}:(C=Pe.hsv.exec(M))?{h:C[1],s:C[2],v:C[3]}:(C=Pe.hsva.exec(M))?{h:C[1],s:C[2],v:C[3],a:C[4]}:(C=Pe.hex8.exec(M))?{r:Me(C[1]),g:Me(C[2]),b:Me(C[3]),a:Pp(C[4]),format:U?"name":"hex8"}:(C=Pe.hex6.exec(M))?{r:Me(C[1]),g:Me(C[2]),b:Me(C[3]),format:U?"name":"hex"}:(C=Pe.hex4.exec(M))?{r:Me(C[1]+""+C[1]),g:Me(C[2]+""+C[2]),b:Me(C[3]+""+C[3]),a:Pp(C[4]+""+C[4]),format:U?"name":"hex8"}:(C=Pe.hex3.exec(M))?{r:Me(C[1]+""+C[1]),g:Me(C[2]+""+C[2]),b:Me(C[3]+""+C[3]),format:U?"name":"hex"}:!1})(s)),Mo(s)=="object"&&(yn(s.r)&&yn(s.g)&&yn(s.b)?(b=s.r,S=s.g,R=s.b,c={r:255*Ct(b,255),g:255*Ct(S,255),b:255*Ct(R,255)},m=!0,y=String(s.r).substr(-1)==="%"?"prgb":"rgb"):yn(s.h)&&yn(s.s)&&yn(s.v)?(f=Ar(s.s),g=Ar(s.v),c=(function(M,C,U){M=6*Ct(M,360),C=Ct(C,100),U=Ct(U,100);var q=Math.floor(M),Y=M-q,H=U*(1-C),W=U*(1-Y*C),L=U*(1-(1-Y)*C),nt=q%6,lt=[U,W,H,H,L,U][nt],$=[L,U,U,W,H,H][nt],ct=[H,H,L,U,U,W][nt];return{r:255*lt,g:255*$,b:255*ct}})(s.h,f,g),m=!0,y="hsv"):yn(s.h)&&yn(s.s)&&yn(s.l)&&(f=Ar(s.s),p=Ar(s.l),c=(function(M,C,U){var q,Y,H;function W(lt,$,ct){return ct<0&&(ct+=1),ct>1&&(ct-=1),ct<1/6?lt+6*($-lt)*ct:ct<.5?$:ct<2/3?lt+($-lt)*(2/3-ct)*6:lt}if(M=Ct(M,360),C=Ct(C,100),U=Ct(U,100),C===0)q=Y=H=U;else{var L=U<.5?U*(1+C):U+C-U*C,nt=2*U-L;q=W(nt,L,M+1/3),Y=W(nt,L,M),H=W(nt,L,M-1/3)}return{r:255*q,g:255*Y,b:255*H}})(s.h,f,p),m=!0,y="hsl"),s.hasOwnProperty("a")&&(d=s.a));var b,S,R;return d=Dy(d),{ok:m,format:s.format||y,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:d}})(a);this._originalInput=a,this._r=l.r,this._g=l.g,this._b=l.b,this._a=l.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||l.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=l.ok}function Up(a,i,l){a=Ct(a,255),i=Ct(i,255),l=Ct(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=(d+f)/2;if(d==f)s=c=0;else{var p=d-f;switch(c=g>.5?p/(2-d-f):p/(d+f),d){case a:s=(i-l)/p+(i<l?6:0);break;case i:s=(l-a)/p+2;break;case l:s=(a-i)/p+4}s/=6}return{h:s,s:c,l:g}}function Bp(a,i,l){a=Ct(a,255),i=Ct(i,255),l=Ct(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=d,p=d-f;if(c=d===0?0:p/d,d==f)s=0;else{switch(d){case a:s=(i-l)/p+(i<l?6:0);break;case i:s=(l-a)/p+2;break;case l:s=(a-i)/p+4}s/=6}return{h:s,s:c,v:g}}function Hp(a,i,l,s){var c=[Xe(Math.round(a).toString(16)),Xe(Math.round(i).toString(16)),Xe(Math.round(l).toString(16))];return s&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function qp(a,i,l,s){return[Xe(Ey(s)),Xe(Math.round(a).toString(16)),Xe(Math.round(i).toString(16)),Xe(Math.round(l).toString(16))].join("")}function lT(a,i){i=i===0?0:i||10;var l=J(a).toHsl();return l.s-=i/100,l.s=Co(l.s),J(l)}function oT(a,i){i=i===0?0:i||10;var l=J(a).toHsl();return l.s+=i/100,l.s=Co(l.s),J(l)}function sT(a){return J(a).desaturate(100)}function uT(a,i){i=i===0?0:i||10;var l=J(a).toHsl();return l.l+=i/100,l.l=Co(l.l),J(l)}function cT(a,i){i=i===0?0:i||10;var l=J(a).toRgb();return l.r=Math.max(0,Math.min(255,l.r-Math.round(-i/100*255))),l.g=Math.max(0,Math.min(255,l.g-Math.round(-i/100*255))),l.b=Math.max(0,Math.min(255,l.b-Math.round(-i/100*255))),J(l)}function fT(a,i){i=i===0?0:i||10;var l=J(a).toHsl();return l.l-=i/100,l.l=Co(l.l),J(l)}function dT(a,i){var l=J(a).toHsl(),s=(l.h+i)%360;return l.h=s<0?360+s:s,J(l)}function hT(a){var i=J(a).toHsl();return i.h=(i.h+180)%360,J(i)}function Lp(a,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var l=J(a).toHsl(),s=[J(a)],c=360/i,d=1;d<i;d++)s.push(J({h:(l.h+d*c)%360,s:l.s,l:l.l}));return s}function mT(a){var i=J(a).toHsl(),l=i.h;return[J(a),J({h:(l+72)%360,s:i.s,l:i.l}),J({h:(l+216)%360,s:i.s,l:i.l})]}function pT(a,i,l){i=i||6,l=l||30;var s=J(a).toHsl(),c=360/l,d=[J(a)];for(s.h=(s.h-(c*i>>1)+720)%360;--i;)s.h=(s.h+c)%360,d.push(J(s));return d}function gT(a,i){i=i||6;for(var l=J(a).toHsv(),s=l.h,c=l.s,d=l.v,f=[],g=1/i;i--;)f.push(J({h:s,s:c,v:d})),d=(d+g)%1;return f}J.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,i,l,s=this.toRgb();return a=s.r/255,i=s.g/255,l=s.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))},setAlpha:function(a){return this._a=Dy(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=Bp(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=Bp(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.v);return this._a==1?"hsv("+i+", "+l+"%, "+s+"%)":"hsva("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var a=Up(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=Up(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.l);return this._a==1?"hsl("+i+", "+l+"%, "+s+"%)":"hsla("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHex:function(a){return Hp(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return(function(i,l,s,c,d){var f=[Xe(Math.round(i).toString(16)),Xe(Math.round(l).toString(16)),Xe(Math.round(s).toString(16)),Xe(Ey(c))];return d&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")})(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ct(this._r,255))+"%",g:Math.round(100*Ct(this._g,255))+"%",b:Math.round(100*Ct(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ct(this._r,255))+"%, "+Math.round(100*Ct(this._g,255))+"%, "+Math.round(100*Ct(this._b,255))+"%)":"rgba("+Math.round(100*Ct(this._r,255))+"%, "+Math.round(100*Ct(this._g,255))+"%, "+Math.round(100*Ct(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(yT[Hp(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var i="#"+qp(this._r,this._g,this._b,this._a),l=i,s=this._gradientType?"GradientType = 1, ":"";if(a){var c=J(a);l="#"+qp(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+i+",endColorstr="+l+")"},toString:function(a){var i=!!a;a=a||this._format;var l=!1,s=this._a<1&&this._a>=0;return i||!s||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(l=this.toRgbString()),a==="prgb"&&(l=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(l=this.toHexString()),a==="hex3"&&(l=this.toHexString(!0)),a==="hex4"&&(l=this.toHex8String(!0)),a==="hex8"&&(l=this.toHex8String()),a==="name"&&(l=this.toName()),a==="hsl"&&(l=this.toHslString()),a==="hsv"&&(l=this.toHsvString()),l||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return J(this.toString())},_applyModification:function(a,i){var l=a.apply(null,[this].concat([].slice.call(i)));return this._r=l._r,this._g=l._g,this._b=l._b,this.setAlpha(l._a),this},lighten:function(){return this._applyModification(uT,arguments)},brighten:function(){return this._applyModification(cT,arguments)},darken:function(){return this._applyModification(fT,arguments)},desaturate:function(){return this._applyModification(lT,arguments)},saturate:function(){return this._applyModification(oT,arguments)},greyscale:function(){return this._applyModification(sT,arguments)},spin:function(){return this._applyModification(dT,arguments)},_applyCombination:function(a,i){return a.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(pT,arguments)},complement:function(){return this._applyCombination(hT,arguments)},monochromatic:function(){return this._applyCombination(gT,arguments)},splitcomplement:function(){return this._applyCombination(mT,arguments)},triad:function(){return this._applyCombination(Lp,[3])},tetrad:function(){return this._applyCombination(Lp,[4])}},J.fromRatio=function(a,i){if(Mo(a)=="object"){var l={};for(var s in a)a.hasOwnProperty(s)&&(l[s]=s==="a"?a[s]:Ar(a[s]));a=l}return J(a,i)},J.equals=function(a,i){return!(!a||!i)&&J(a).toRgbString()==J(i).toRgbString()},J.random=function(){return J.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},J.mix=function(a,i,l){l=l===0?0:l||50;var s=J(a).toRgb(),c=J(i).toRgb(),d=l/100;return J({r:(c.r-s.r)*d+s.r,g:(c.g-s.g)*d+s.g,b:(c.b-s.b)*d+s.b,a:(c.a-s.a)*d+s.a})},J.readability=function(a,i){var l=J(a),s=J(i);return(Math.max(l.getLuminance(),s.getLuminance())+.05)/(Math.min(l.getLuminance(),s.getLuminance())+.05)},J.isReadable=function(a,i,l){var s,c,d=J.readability(a,i);switch(c=!1,(s=(function(f){var g,p;return g=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(f.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:g,size:p}})(l)).level+s.size){case"AAsmall":case"AAAlarge":c=d>=4.5;break;case"AAlarge":c=d>=3;break;case"AAAsmall":c=d>=7}return c},J.mostReadable=function(a,i,l){var s,c,d,f,g=null,p=0;c=(l=l||{}).includeFallbackColors,d=l.level,f=l.size;for(var m=0;m<i.length;m++)(s=J.readability(a,i[m]))>p&&(p=s,g=J(i[m]));return J.isReadable(a,g,{level:d,size:f})||!c?g:(l.includeFallbackColors=!1,J.mostReadable(a,["#fff","#000"],l))};var jc=J.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},yT=J.hexNames=(function(a){var i={};for(var l in a)a.hasOwnProperty(l)&&(i[a[l]]=l);return i})(jc);function Dy(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function Ct(a,i){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(a)&&(a="100%");var l=(function(s){return typeof s=="string"&&s.indexOf("%")!=-1})(a);return a=Math.min(i,Math.max(0,parseFloat(a))),l&&(a=parseInt(a*i,10)/100),Math.abs(a-i)<1e-6?1:a%i/parseFloat(i)}function Co(a){return Math.min(1,Math.max(0,a))}function Me(a){return parseInt(a,16)}function Xe(a){return a.length==1?"0"+a:""+a}function Ar(a){return a<=1&&(a=100*a+"%"),a}function Ey(a){return Math.round(255*parseFloat(a)).toString(16)}function Pp(a){return Me(a)/255}var Zn,so,uo,Pe=(so="[\\s|\\(]+("+(Zn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Zn+")[,|\\s]+("+Zn+")\\s*\\)?",uo="[\\s|\\(]+("+Zn+")[,|\\s]+("+Zn+")[,|\\s]+("+Zn+")[,|\\s]+("+Zn+")\\s*\\)?",{CSS_UNIT:new RegExp(Zn),rgb:new RegExp("rgb"+so),rgba:new RegExp("rgba"+uo),hsl:new RegExp("hsl"+so),hsla:new RegExp("hsla"+uo),hsv:new RegExp("hsv"+so),hsva:new RegExp("hsva"+uo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function yn(a){return!!Pe.CSS_UNIT.exec(a)}var Hr=function(a,i){var l=(typeof a=="string"?parseInt(a):a)||0;if(l>=-5&&l<=5){var s=l,c=parseFloat(i),d=c+s*(c/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:i}},qr=function(a,i){var l=a||{},s="";switch(i){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var c={};if(l.fontSize){var d=l.fontSize;c=(function(f,g){var p={};for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&g.indexOf(m)<0&&(p[m]=f[m]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(m=Object.getOwnPropertySymbols(f);y<m.length;y++)g.indexOf(m[y])<0&&Object.prototype.propertyIsEnumerable.call(f,m[y])&&(p[m[y]]=f[m[y]])}return p})(l,["fontSize"]),s=d}return{fontSize:s,styles:c}},vT={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Lr=function(a){var i=a.className,l=a.text,s=a.textColor,c=a.staticText,d=a.style;return l?Ot.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:ht(ht(ht({},c&&vT),s&&{color:s,mixBlendMode:"unset"}),d&&d)},typeof l=="string"&&l.length?l:"loading"):null},vn="rgb(50, 205, 50)";function Pr(a,i){if(i===void 0&&(i=0),a.length===0)throw new Error("Input array cannot be empty!");var l=[];return(function s(c,d){return d===void 0&&(d=0),l.push.apply(l,c),l.length<d&&s(l,d),l.slice(0,d)})(a,i)}Qt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);J(vn).toRgb();Array.from({length:4},(function(a,i){return"--atom-phase".concat(i+1,"-rgb")}));Qt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(a,i){return"--commet-phase".concat(i+1,"-color")}));Qt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var co=Array.from({length:4},(function(a,i){return"--OP-annulus-phase".concat(i+1,"-color")})),bT=function(a){var i,l=qr(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Hr(a?.speedPlus,"1.5s").animationPeriod,g=(function(m){var y={},b=co.length;if(m instanceof Array){for(var S=Pr(m,b),R=0;R<S.length&&!(R>=4);R++)y[co[R]]=S[R];return y}try{if(typeof m!="string")throw new Error("Color String expected");for(var M=0;M<b;M++)y[co[M]]=m}catch(C){for(C instanceof Error?console.warn("[".concat(C.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),M=0;M<b;M++)y[co[M]]=vn}return y})((i=a?.color)!==null&&i!==void 0?i:""),p=a?.dense?4.3:2.9;return Ot.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:ht(ht(ht(ht(ht({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},Ot.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},Ot.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:p,strokeMiterlimit:"10"})),Ot.createElement(Lr,{className:"OP-annulus-text",text:a?.text,textColor:a?.textColor})))};function dc(a){return a&&a.Math===Math&&a}Qt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var si=dc(typeof window=="object"&&window)||dc(typeof self=="object"&&self)||dc(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();function Ry(){var a,i;return!((a=si?.crypto)===null||a===void 0)&&a.randomUUID?si.crypto.randomUUID():!((i=si?.btoa)===null||i===void 0)&&i.name?si.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var fo=Array.from({length:4},(function(a,i){return"--OP-dotted-phase".concat(i+1,"-color")})),xT=function(a){var i,l=qr(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Hr(a?.speedPlus,"1.2s").animationPeriod,g=(function(m){var y={},b=fo.length;if(m instanceof Array){for(var S=Pr(m,b),R=0;R<S.length&&!(R>=4);R++)y[fo[R]]=S[R];return y}try{if(typeof m!="string")throw new Error("Color String expected");for(var M=0;M<b;M++)y[fo[M]]=m}catch(C){for(C instanceof Error?console.warn("[".concat(C.message,']: Received "').concat(typeof m,'" with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),M=0;M<b;M++)y[fo[M]]=vn}return y})((i=a?.color)!==null&&i!==void 0?i:""),p=a?.dense?16:12;return Ot.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:ht(ht(ht(ht(ht({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:p}).map((function(m,y){var b=(function(M,C,U){if(C===16){var q=360*M/C,Y=C-M,H=Number.parseFloat(U)/C*Y*-1;return{transform:"rotate(".concat(q,"deg)"),animationDelay:"".concat(H,"s")}}return{transform:"",animationDelay:""}})(y,p,f),S=b.animationDelay,R=b.transform;return Ot.createElement("span",{key:Ry(),className:"rli-d-i-b dot-shape-holder",style:R?{transform:R}:void 0},Ot.createElement("span",{className:"dot",style:S?{animationDelay:S}:void 0}))})),Ot.createElement(Lr,{className:"OP-dotted-text",text:a?.text,textColor:a?.textColor})))};Qt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var ho=Array.from({length:4},(function(a,i){return"--OP-spokes-phase".concat(i+1,"-color")})),ST=function(a){var i,l=qr(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Hr(a?.speedPlus,"1.2s").animationPeriod,g=(function(m){var y={},b=ho.length;if(m instanceof Array){for(var S=Pr(m,b),R=0;R<S.length&&!(R>=4);R++)y[ho[R]]=S[R];return y}try{if(typeof m!="string")throw new Error("Color String expected");for(var M=0;M<b;M++)y[ho[M]]=m}catch(C){for(C instanceof Error?console.warn("[".concat(C.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),M=0;M<b;M++)y[ho[M]]=vn}return y})((i=a?.color)!==null&&i!==void 0?i:""),p=a?.dense?16:12;return Ot.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:ht(ht(ht(ht(ht({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:p},(function(m,y){return Ot.createElement("span",{key:Ry(),className:"rli-d-i-b spoke",style:TT(y,p,f)})}))),Ot.createElement(Lr,{text:a?.text,textColor:a?.textColor}))};function TT(a,i,l){if(i===16){var s=i-a,c=Number.parseFloat(l)/i;return{transform:"rotate(".concat(360*a/i,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((s-1)*c*-1,"s")}}}Qt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var mo=Array.from({length:4},(function(a,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")})),AT=function(a){var i,l=qr(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Hr(a?.speedPlus,"1.2s").animationPeriod,g=(function(m){var y={},b=mo.length;if(m instanceof Array){for(var S=Pr(m,b),R=0;R<S.length&&!(R>=4);R++)y[mo[R]]=S[R];return y}try{if(typeof m!="string")throw new Error("Color String expected");for(var M=0;M<b;M++)y[mo[M]]=m}catch(C){for(C instanceof Error?console.warn("[".concat(C.message,']: Received "').concat(typeof m,'" with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),M=0;M<b;M++)y[mo[M]]=vn}return y})((i=a?.color)!==null&&i!==void 0?i:""),p=a.dense?"0.45em":"";return Ot.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:ht(ht(ht(ht(ht({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},Ot.createElement("span",{className:"rli-d-i-b annulus-sectors",style:ht({},p&&{borderWidth:p})}),Ot.createElement(Lr,{className:"OP-annulus-dual-sectors-text",text:a?.text,textColor:a?.textColor})))};Qt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var Sr=Array.from({length:4},(function(a,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]})),po=function(a){return a===void 0&&(a=1),.25*a},OT=function(a){var i,l=qr(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Hr(a?.speedPlus,"1s").animationPeriod,g=(function(m){var y={},b=Sr.length;if(m instanceof Array){for(var S=Pr(m,b),R=0;R<S.length&&!(R>=4);R++){var M=Sr[R];try{if(!(q=J(S[R])).isValid())throw new Error("Invalid Color: ".concat(q.getOriginalInput()));var C=q.setAlpha(po(q.getAlpha())).toRgbString(),U=S[R];y[M[0]]=C,y[M[1]]=U}catch{U=vn,C=(q=J(vn)).setAlpha(po(q.getAlpha())).toRgbString(),y[M[0]]=C,y[M[1]]=U}}return y}try{var q=J(m);if(typeof m!="string")throw new Error("Color String expected");if(!q.isValid())throw new Error("Invalid Color: ".concat(q.getOriginalInput()));U=m,C=q.setAlpha(po(q.getAlpha())).toRgbString();for(var Y=0;Y<b;Y++)y[(M=Sr[Y])[0]]=C,y[M[1]]=U}catch(H){for(H instanceof Error?console.warn("[".concat(H.message,']: Received "').concat(typeof m,'" with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),U=vn,C=(q=J(vn)).setAlpha(po(q.getAlpha())).toRgbString(),Y=0;Y<Sr.length;Y++)y[(M=Sr[Y])[0]]=C,y[M[1]]=U}return y})((i=a?.color)!==null&&i!==void 0?i:""),p=a.dense?"0.45em":"";return Ot.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:ht(ht(ht(ht(ht({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},Ot.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:ht({},p&&{borderWidth:p})}),Ot.createElement(Lr,{className:"OP-annulus-sector-text",text:a?.text,textColor:a?.textColor})))},MT=function(a){var i=Object(a).variant,l=i===void 0?"disc":i;return l==="dotted"?Ot.createElement(xT,ht({},a)):l==="spokes"?Ot.createElement(ST,ht({},a)):l==="disc"?Ot.createElement(bT,ht({},a)):l==="split-disc"?Ot.createElement(AT,ht({},a)):l==="track-disc"?Ot.createElement(OT,ht({},a)):null};Qt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(a,i){return"--four-square-phase".concat(i+1,"-color")}));Qt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(a,i){return"--mosaic-phase".concat(i+1,"-color")}));Qt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(a,i){return"--riple-phase".concat(i+1,"-color")}));Qt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(a,i){return"--TD-pulsate-phase".concat(i+1,"-color")}));Qt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(a,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}));Qt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(a,i){return"--TD-bob-phase".concat(i+1,"-color")}));Qt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(a,i){return"--TD-bounce-phase".concat(i+1,"-color")}));Qt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},(function(a,i){return"--shape-phase".concat(i+1,"-color")}));Qt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(a,i){return"--trophySpin-phase".concat(i+1,"-color")}));Qt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(a,i){return"--slab-phase".concat(i+1,"-color")}));Qt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(a,i){return"--life-line-phase".concat(i+1,"-color")}));const DT=()=>{const{menu:a}=Ta(),{message:i,showMessage:l}=Gp(),s=Z.useMemo(()=>a.map(c=>j.jsx(aT,{menu:c,showMessage:l},c.name)),[a]);return j.jsxs("div",{className:"basis-[60%] md:px-[1%]",children:[a.length>0?j.jsxs(j.Fragment,{children:[j.jsx("h1",{className:"text-2xl font-extrabold",children:"Desserts"}),j.jsx("div",{className:"grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] justify-center gap-4 ",children:s})]}):j.jsx("div",{className:"w-full h-full flex justify-center items-center",children:j.jsx(MT,{color:"#e11d48",size:"large"})}),j.jsx(Zp,{className:Qp,animationClassName:Kp,isOpen:!!i,children:j.jsx("p",{children:i})})]})},ET=({children:a})=>j.jsx("main",{className:"w-[min(1440px,100%-3rem)] py-10 mx-auto flex flex-col min-h-full gap-5 sm:flex-row",children:a});function RT(){return j.jsx(d1,{children:j.jsx("div",{className:"font-primary bg-rose-100 min-h-screen flex",children:j.jsxs(ET,{children:[j.jsx(DT,{}),j.jsx(KS,{})]})})})}o1.createRoot(document.getElementById("root")).render(j.jsx(Z.StrictMode,{children:j.jsx(RT,{})}));
