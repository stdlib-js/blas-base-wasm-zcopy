"use strict";var y=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var h=y(function(J,f){
var S=require("path").resolve,T=require('@stdlib/fs-read-wasm/dist').sync,B=T(S(__dirname,"..","src","main.wasm"));f.exports=B
});var l=y(function(K,M){
var V=require('@stdlib/assert-is-wasm-memory/dist'),m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-inherit/dist'),w=require('@stdlib/wasm-module-wrapper/dist'),j=require('@stdlib/error-tools-fmtprodmsg/dist'),D=h();function u(e){if(!(this instanceof u))return new u(e);if(!V(e))throw new TypeError(j('277H0',e));return w.call(this,D,e,{env:{memory:e}}),this}g(u,w);m(u.prototype,"main",function(r,s,i,a,t){return this._instance.exports.c_zcopy(r,s,i,a,t),a});m(u.prototype,"ndarray",function(r,s,i,a,t,c,p){return this._instance.exports.c_zcopy_ndarray(r,s,i,a,t,c,p),t});M.exports=u
});var R=y(function(Q,E){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/strided-base-stride2offset/dist'),P=require('@stdlib/strided-base-read-dataview/dist').ndarray,k=require('@stdlib/wasm-memory/dist'),C=require('@stdlib/wasm-base-arrays2ptrs/dist'),z=require('@stdlib/wasm-base-strided2object/dist'),q=l();function o(){return this instanceof o?(q.call(this,new k({initial:0})),this):new o}L(o,q);x(o.prototype,"main",function(r,s,i,a,t){return this.ndarray(r,s,i,_(r,i),a,t,_(r,t))});x(o.prototype,"ndarray",function(r,s,i,a,t,c,p){var d,v,n;return d=C(this,[z(r,s,i,a),z(r,t,c,p)]),v=d[0],n=d[1],q.prototype.ndarray.call(this,r,v.ptr,v.stride,v.offset,n.ptr,n.stride,n.offset),n.copy&&P(r,this.view,n.stride*n.BYTES_PER_ELEMENT,n.ptr,t,c,p,!0),t});E.exports=o
});var A=y(function(U,W){
var F=R(),b=new F;b.initializeSync();W.exports=b
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=A(),H=l();G(O,"Module",H);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
