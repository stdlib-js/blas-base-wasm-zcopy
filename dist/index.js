"use strict";var y=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=y(function(J,h){
var O=require("path").resolve,S=require('@stdlib/fs-read-wasm/dist').sync,T=S(O(__dirname,"..","src","main.wasm"));h.exports=T
});var d=y(function(K,_){
var B=require('@stdlib/assert-is-wasm-memory/dist'),w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/wasm-module-wrapper/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),j=m();function u(e){if(!(this instanceof u))return new u(e);if(!B(e))throw new TypeError(g('277H0',e));return M.call(this,j,e,{env:{memory:e}}),this}V(u,M);w(u.prototype,"main",function(r,s,i,a,t){return this._instance.exports.c_zcopy(r,s,i,a,t),a});w(u.prototype,"ndarray",function(r,s,i,a,t,c,p){return this._instance.exports.c_zcopy_ndarray(r,s,i,a,t,c,p),t});_.exports=u
});var R=y(function(Q,E){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),D=require('@stdlib/utils-inherit/dist'),z=require('@stdlib/strided-base-stride2offset/dist'),L=require('@stdlib/strided-base-read-dataview/dist').ndarray,P=require('@stdlib/wasm-memory/dist'),k=require('@stdlib/wasm-base-arrays2ptrs/dist'),x=require('@stdlib/wasm-base-strided2object/dist'),q=d();function o(){return this instanceof o?(q.call(this,new P({initial:0})),this):new o}D(o,q);b(o.prototype,"main",function(r,s,i,a,t){return this.ndarray(r,s,i,z(r,i),a,t,z(r,t))});b(o.prototype,"ndarray",function(r,s,i,a,t,c,p){var l,v,n;return l=k(this,[x(r,s,i,a),x(r,t,c,p)]),v=l[0],n=l[1],q.prototype.ndarray.call(this,r,v.ptr,v.stride,v.offset,n.ptr,n.stride,n.offset),n.copy&&L(r,this.view,n.stride*n.BYTES_PER_ELEMENT,n.ptr,t,c,p,!0),t});E.exports=o
});var A=y(function(U,W){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=R(),G=d(),f=new F;f.initializeSync();C(f,"Module",G.bind(null));W.exports=f
});var H=A();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
