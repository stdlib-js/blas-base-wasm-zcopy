"use strict";var y=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var m=y(function(J,h){
var O=require("path").resolve,S=require('@stdlib/fs-read-wasm/dist').sync,T=S(O(__dirname,"..","src","main.wasm"));h.exports=T
});var d=y(function(K,_){
var B=require('@stdlib/assert-is-wasm-memory/dist'),w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/wasm-module-wrapper/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),j=m();function u(e){if(!(this instanceof u))return new u(e);if(!B(e))throw new TypeError(g('277H0',e));return M.call(this,j,e,{env:{memory:e}}),this}V(u,M);w(u.prototype,"main",function(r,i,a,n,t){return this._instance.exports.c_zcopy(r,i,a,n,t),n});w(u.prototype,"ndarray",function(r,i,a,n,t,c,p){return this._instance.exports.c_zcopy_ndarray(r,i,a,n,t,c,p),t});_.exports=u
});var R=y(function(Q,E){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),D=require('@stdlib/utils-inherit/dist'),z=require('@stdlib/strided-base-stride2offset/dist'),L=require('@stdlib/strided-base-read-dataview/dist').ndarray,P=require('@stdlib/wasm-memory/dist'),k=require('@stdlib/wasm-base-arrays2ptrs/dist'),x=require('@stdlib/wasm-base-strided2object/dist'),q=d();function o(){return this instanceof o?(q.call(this,new P({initial:0})),this):new o}D(o,q);b(o.prototype,"main",function(r,i,a,n,t){return this.ndarray(r,i,a,z(r,a),n,t,z(r,t))});b(o.prototype,"ndarray",function(r,i,a,n,t,c,p){var l,v,s;return l=k(this,[x(r,i,a,n),x(r,t,c,p)]),v=l[0],s=l[1],q.prototype.ndarray.call(this,r,v.ptr,v.stride,v.offset,s.ptr,s.stride,s.offset),s.copy&&L(r,this.view,s.stride*s.BYTES_PER_ELEMENT,s.ptr,t,c,p,!0),t});E.exports=o
});var A=y(function(U,W){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=R(),G=d(),f=new F;f.initializeSync();C(f,"Module",G.bind(null));W.exports=f
});var H=A();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
