(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gs="161",ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yl=0,na=1,Ml=2,Uo=1,El=2,yn=3,zn=0,Xe=1,un=2,Fn=0,Ai=1,ia=2,ra=3,sa=4,Sl=5,Kn=100,wl=101,bl=102,aa=103,oa=104,Tl=200,Al=201,Rl=202,Cl=203,Cs=204,Ps=205,Pl=206,Ll=207,Il=208,Nl=209,Dl=210,Ul=211,Fl=212,Bl=213,Ol=214,zl=0,Vl=1,Hl=2,Lr=3,Gl=4,Wl=5,kl=6,Xl=7,Ws=0,ql=1,Yl=2,Bn=0,jl=1,Kl=2,Zl=3,$l=4,Ql=5,Jl=6,ks=300,Pi=301,Li=302,Ls=303,Is=304,kr=306,Ns=1e3,an=1001,Ds=1002,ze=1003,la=1004,Oi=1005,ke=1006,Kr=1007,Qn=1008,On=1009,tc=1010,ec=1011,Xs=1012,Fo=1013,Un=1014,En=1015,ji=1016,Bo=1017,Oo=1018,Jn=1020,nc=1021,on=1023,ic=1024,rc=1025,ti=1026,Ii=1027,sc=1028,zo=1029,ac=1030,Vo=1031,Ho=1033,Zr=33776,$r=33777,Qr=33778,Jr=33779,ca=35840,ha=35841,ua=35842,da=35843,Go=36196,fa=37492,pa=37496,ma=37808,va=37809,ga=37810,_a=37811,xa=37812,ya=37813,Ma=37814,Ea=37815,Sa=37816,wa=37817,ba=37818,Ta=37819,Aa=37820,Ra=37821,ts=36492,Ca=36494,Pa=36495,oc=36283,La=36284,Ia=36285,Na=36286,lc=2200,cc=2201,hc=2202,Ir=2300,Nr=2301,es=2302,Si=2400,wi=2401,Dr=2402,qs=2500,uc=2501,Wo=3e3,ei=3001,dc=3200,fc=3201,ko=0,pc=1,Qe="",Ce="srgb",bn="srgb-linear",Ys="display-p3",Xr="display-p3-linear",Ur="linear",xe="srgb",Fr="rec709",Br="p3",ai=7680,Da=519,mc=512,vc=513,gc=514,Xo=515,_c=516,xc=517,yc=518,Mc=519,Ua=35044,Fa="300 es",Us=1035,wn=2e3,Or=2001;class Hn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const i=r.indexOf(e);i!==-1&&r.splice(i,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let i=0,a=r.length;i<a;i++)r[i].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ba=1234567;const ki=Math.PI/180,Ki=180/Math.PI;function ii(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Ve(s,t,e){return Math.max(t,Math.min(e,s))}function js(s,t){return(s%t+t)%t}function Ec(s,t,e,n,r){return n+(s-t)*(r-n)/(e-t)}function Sc(s,t,e){return s!==t?(e-s)/(t-s):0}function Xi(s,t,e){return(1-e)*s+e*t}function wc(s,t,e,n){return Xi(s,t,1-Math.exp(-e*n))}function bc(s,t=1){return t-Math.abs(js(s,t*2)-t)}function Tc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ac(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Rc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Cc(s,t){return s+Math.random()*(t-s)}function Pc(s){return s*(.5-Math.random())}function Lc(s){s!==void 0&&(Ba=s);let t=Ba+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ic(s){return s*ki}function Nc(s){return s*Ki}function Fs(s){return(s&s-1)===0&&s!==0}function Dc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Uc(s,t,e,n,r){const i=Math.cos,a=Math.sin,o=i(e/2),l=a(e/2),u=i((t+n)/2),h=a((t+n)/2),c=i((t-n)/2),d=a((t-n)/2),f=i((n-t)/2),v=a((n-t)/2);switch(r){case"XYX":s.set(o*h,l*c,l*d,o*u);break;case"YZY":s.set(l*d,o*h,l*c,o*u);break;case"ZXZ":s.set(l*c,l*d,o*h,o*u);break;case"XZX":s.set(o*h,l*v,l*f,o*u);break;case"YXY":s.set(l*f,o*h,l*v,o*u);break;case"ZYZ":s.set(l*v,l*f,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ei(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function He(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Fc={DEG2RAD:ki,RAD2DEG:Ki,generateUUID:ii,clamp:Ve,euclideanModulo:js,mapLinear:Ec,inverseLerp:Sc,lerp:Xi,damp:wc,pingpong:bc,smoothstep:Tc,smootherstep:Ac,randInt:Rc,randFloat:Cc,randFloatSpread:Pc,seededRandom:Lc,degToRad:Ic,radToDeg:Nc,isPowerOfTwo:Fs,ceilPowerOfTwo:Dc,floorPowerOfTwo:zr,setQuaternionFromProperEuler:Uc,normalize:He,denormalize:Ei};class re{constructor(t=0,e=0){re.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),i=this.x-t.x,a=this.y-t.y;return this.x=i*n-a*r+t.x,this.y=i*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,n,r,i,a,o,l,u){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,i,a,o,l,u)}set(t,e,n,r,i,a,o,l,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=i,h[5]=l,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,i=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],h=n[4],c=n[7],d=n[2],f=n[5],v=n[8],g=r[0],p=r[3],m=r[6],_=r[1],y=r[4],x=r[7],b=r[2],R=r[5],C=r[8];return i[0]=a*g+o*_+l*b,i[3]=a*p+o*y+l*R,i[6]=a*m+o*x+l*C,i[1]=u*g+h*_+c*b,i[4]=u*p+h*y+c*R,i[7]=u*m+h*x+c*C,i[2]=d*g+f*_+v*b,i[5]=d*p+f*y+v*R,i[8]=d*m+f*x+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],l=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-n*i*h+n*o*l+r*i*u-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],l=t[6],u=t[7],h=t[8],c=h*a-o*u,d=o*l-h*i,f=u*i-a*l,v=e*c+n*d+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=c*g,t[1]=(r*u-h*n)*g,t[2]=(o*n-r*a)*g,t[3]=d*g,t[4]=(h*e-r*l)*g,t[5]=(r*i-o*e)*g,t[6]=f*g,t[7]=(n*l-u*e)*g,t[8]=(a*e-n*i)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,i,a,o){const l=Math.cos(i),u=Math.sin(i);return this.set(n*l,n*u,-n*(l*a+u*o)+a+t,-r*u,r*l,-r*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ns.makeScale(t,e)),this}rotate(t){return this.premultiply(ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ns=new ce;function qo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bc(){const s=Zi("canvas");return s.style.display="block",s}const Oa={};function Ri(s){s in Oa||(Oa[s]=!0,console.warn(s))}const za=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Va=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rr={[bn]:{transfer:Ur,primaries:Fr,toReference:s=>s,fromReference:s=>s},[Ce]:{transfer:xe,primaries:Fr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Xr]:{transfer:Ur,primaries:Br,toReference:s=>s.applyMatrix3(Va),fromReference:s=>s.applyMatrix3(za)},[Ys]:{transfer:xe,primaries:Br,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Va),fromReference:s=>s.applyMatrix3(za).convertLinearToSRGB()}},Oc=new Set([bn,Xr]),_e={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Oc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=rr[t].toReference,r=rr[e].fromReference;return r(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return rr[s].primaries},getTransfer:function(s){return s===Qe?Ur:rr[s].transfer}};function Ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let oi;class Yo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=Zi("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),i=r.data;for(let a=0;a<i.length;a++)i[a]=Ci(i[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zc=0;class jo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?i.push(rs(r[a].image)):i.push(rs(r[a]))}else i=rs(r);n.url=i}return e||(t.images[this.uuid]=n),n}}function rs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vc=0;class We extends Hn{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=an,r=an,i=ke,a=Qn,o=on,l=On,u=We.DEFAULT_ANISOTROPY,h=Qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=ii(),this.name="",this.source=new jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ei?Ce:Qe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ks)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case Ds:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case Ds:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ce?ei:Wo}set encoding(t){Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ei?Ce:Qe}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=ks;We.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,n=0,r=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,i=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,i;const l=t.elements,u=l[0],h=l[4],c=l[8],d=l[1],f=l[5],v=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(c-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(c+g)<.1&&Math.abs(v+p)<.1&&Math.abs(u+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,x=(f+1)/2,b=(m+1)/2,R=(h+d)/4,C=(c+g)/4,U=(v+p)/4;return y>x&&y>b?y<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(y),r=R/n,i=C/n):x>b?x<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(x),n=R/r,i=U/r):b<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(b),n=C/i,r=U/i),this.set(n,r,i,e),this}let _=Math.sqrt((p-v)*(p-v)+(c-g)*(c-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(c-g)/_,this.z=(d-h)/_,this.w=Math.acos((u+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hc extends Hn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Ri("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ei?Ce:Qe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new We(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new jo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Hc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ko extends We{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ze,this.minFilter=ze,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gc extends We{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ze,this.minFilter=ze,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,i,a,o){let l=n[r+0],u=n[r+1],h=n[r+2],c=n[r+3];const d=i[a+0],f=i[a+1],v=i[a+2],g=i[a+3];if(o===0){t[e+0]=l,t[e+1]=u,t[e+2]=h,t[e+3]=c;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(c!==g||l!==d||u!==f||h!==v){let p=1-o;const m=l*d+u*f+h*v+c*g,_=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const b=Math.sqrt(y),R=Math.atan2(b,m*_);p=Math.sin(p*R)/b,o=Math.sin(o*R)/b}const x=o*_;if(l=l*p+d*x,u=u*p+f*x,h=h*p+v*x,c=c*p+g*x,p===1-o){const b=1/Math.sqrt(l*l+u*u+h*h+c*c);l*=b,u*=b,h*=b,c*=b}}t[e]=l,t[e+1]=u,t[e+2]=h,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,r,i,a){const o=n[r],l=n[r+1],u=n[r+2],h=n[r+3],c=i[a],d=i[a+1],f=i[a+2],v=i[a+3];return t[e]=o*v+h*c+l*f-u*d,t[e+1]=l*v+h*d+u*c-o*f,t[e+2]=u*v+h*f+o*d-l*c,t[e+3]=h*v-o*c-l*d-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,i=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(n/2),h=o(r/2),c=o(i/2),d=l(n/2),f=l(r/2),v=l(i/2);switch(a){case"XYZ":this._x=d*h*c+u*f*v,this._y=u*f*c-d*h*v,this._z=u*h*v+d*f*c,this._w=u*h*c-d*f*v;break;case"YXZ":this._x=d*h*c+u*f*v,this._y=u*f*c-d*h*v,this._z=u*h*v-d*f*c,this._w=u*h*c+d*f*v;break;case"ZXY":this._x=d*h*c-u*f*v,this._y=u*f*c+d*h*v,this._z=u*h*v+d*f*c,this._w=u*h*c-d*f*v;break;case"ZYX":this._x=d*h*c-u*f*v,this._y=u*f*c+d*h*v,this._z=u*h*v-d*f*c,this._w=u*h*c+d*f*v;break;case"YZX":this._x=d*h*c+u*f*v,this._y=u*f*c+d*h*v,this._z=u*h*v-d*f*c,this._w=u*h*c-d*f*v;break;case"XZY":this._x=d*h*c-u*f*v,this._y=u*f*c-d*h*v,this._z=u*h*v+d*f*c,this._w=u*h*c+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],i=e[8],a=e[1],o=e[5],l=e[9],u=e[2],h=e[6],c=e[10],d=n+o+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(i-u)*f,this._z=(a-r)*f}else if(n>o&&n>c){const f=2*Math.sqrt(1+n-o-c);this._w=(h-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(i+u)/f}else if(o>c){const f=2*Math.sqrt(1+o-n-c);this._w=(i-u)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+c-n-o);this._w=(a-r)/f,this._x=(i+u)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,i=t._z,a=t._w,o=e._x,l=e._y,u=e._z,h=e._w;return this._x=n*h+a*o+r*u-i*l,this._y=r*h+a*l+i*o-n*u,this._z=i*h+a*u+n*l-r*o,this._w=a*h-n*o-r*l-i*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,i=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+i*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*r+e*this._y,this._z=f*i+e*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),c=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=a*c+this._w*d,this._x=n*c+this._x*d,this._y=r*c+this._y*d,this._z=i*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(i),n*Math.cos(i),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,e=0,n=0){nt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ha.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ha.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6]*r,this.y=i[1]*e+i[4]*n+i[7]*r,this.z=i[2]*e+i[5]*n+i[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,i=t.elements,a=1/(i[3]*e+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*e+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*e+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*e+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,i=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*r-o*n),h=2*(o*e-i*r),c=2*(i*n-a*e);return this.x=e+l*u+a*c-o*h,this.y=n+l*h+o*u-i*c,this.z=r+l*c+i*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*r,this.y=i[1]*e+i[5]*n+i[9]*r,this.z=i[2]*e+i[6]*n+i[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,i=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-i*o,this.y=i*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ss.copy(this).projectOnVector(t),this.sub(ss)}reflect(t){return this.sub(ss.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ss=new nt,Ha=new tn;class Di{constructor(t=new nt(1/0,1/0,1/0),e=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const i=n.getAttribute("position");if(e===!0&&i!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(i,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}const r=t.children;for(let i=0,a=r.length;i<a;i++)this.expandByObject(r[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zi),ar.subVectors(this.max,zi),li.subVectors(t.a,zi),ci.subVectors(t.b,zi),hi.subVectors(t.c,zi),An.subVectors(ci,li),Rn.subVectors(hi,ci),Gn.subVectors(li,hi);let e=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Gn.z,Gn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Gn.z,0,-Gn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Gn.y,Gn.x,0];return!as(e,li,ci,hi,ar)||(e=[1,0,0,0,1,0,0,0,1],!as(e,li,ci,hi,ar))?!1:(or.crossVectors(An,Rn),e=[or.x,or.y,or.z],as(e,li,ci,hi,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],nn=new nt,sr=new Di,li=new nt,ci=new nt,hi=new nt,An=new nt,Rn=new nt,Gn=new nt,zi=new nt,ar=new nt,or=new nt,Wn=new nt;function as(s,t,e,n,r){for(let i=0,a=s.length-3;i<=a;i+=3){Wn.fromArray(s,i);const o=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),l=t.dot(Wn),u=e.dot(Wn),h=n.dot(Wn);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const Wc=new Di,Vi=new nt,os=new nt;class Ks{constructor(t=new nt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wc.setFromPoints(t).getCenter(n);let r=0;for(let i=0,a=t.length;i<a;i++)r=Math.max(r,n.distanceToSquared(t[i]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vi.subVectors(t,this.center);const e=Vi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Vi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(os.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vi.copy(t.center).add(os)),this.expandByPoint(Vi.copy(t.center).sub(os))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new nt,ls=new nt,lr=new nt,Cn=new nt,cs=new nt,cr=new nt,hs=new nt;class Zs{constructor(t=new nt,e=new nt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ls.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(ls);const i=t.distanceTo(e)*.5,a=-this.direction.dot(lr),o=Cn.dot(this.direction),l=-Cn.dot(lr),u=Cn.lengthSq(),h=Math.abs(1-a*a);let c,d,f,v;if(h>0)if(c=a*l-o,d=a*o-l,v=i*h,c>=0)if(d>=-v)if(d<=v){const g=1/h;c*=g,d*=g,f=c*(c+a*d+2*o)+d*(a*c+d+2*l)+u}else d=i,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+u;else d=-i,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+u;else d<=-v?(c=Math.max(0,-(-a*i+o)),d=c>0?-i:Math.min(Math.max(-i,-l),i),f=-c*c+d*(d+2*l)+u):d<=v?(c=0,d=Math.min(Math.max(-i,-l),i),f=d*(d+2*l)+u):(c=Math.max(0,-(a*i+o)),d=c>0?i:Math.min(Math.max(-i,-l),i),f=-c*c+d*(d+2*l)+u);else d=a>0?-i:i,c=Math.max(0,-(a*d+o)),f=-c*c+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(ls).addScaledVector(lr,d),f}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,i=t.radius*t.radius;if(r>i)return null;const a=Math.sqrt(i-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,i,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,r=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,r=(t.min.x-d.x)*u),h>=0?(i=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(i=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),c>=0?(o=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(o=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,r,i){cs.subVectors(e,t),cr.subVectors(n,t),hs.crossVectors(cs,cr);let a=this.direction.dot(hs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,t);const l=o*this.direction.dot(cr.crossVectors(Cn,cr));if(l<0)return null;const u=o*this.direction.dot(cs.cross(Cn));if(u<0||l+u>a)return null;const h=-o*Cn.dot(hs);return h<0?null:this.at(h/a,i)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,r,i,a,o,l,u,h,c,d,f,v,g,p){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,i,a,o,l,u,h,c,d,f,v,g,p)}set(t,e,n,r,i,a,o,l,u,h,c,d,f,v,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=i,m[5]=a,m[9]=o,m[13]=l,m[2]=u,m[6]=h,m[10]=c,m[14]=d,m[3]=f,m[7]=v,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ui.setFromMatrixColumn(t,0).length(),i=1/ui.setFromMatrixColumn(t,1).length(),a=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*i,e[5]=n[5]*i,e[6]=n[6]*i,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,i=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),u=Math.sin(r),h=Math.cos(i),c=Math.sin(i);if(t.order==="XYZ"){const d=a*h,f=a*c,v=o*h,g=o*c;e[0]=l*h,e[4]=-l*c,e[8]=u,e[1]=f+v*u,e[5]=d-g*u,e[9]=-o*l,e[2]=g-d*u,e[6]=v+f*u,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*c,v=u*h,g=u*c;e[0]=d+g*o,e[4]=v*o-f,e[8]=a*u,e[1]=a*c,e[5]=a*h,e[9]=-o,e[2]=f*o-v,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*c,v=u*h,g=u*c;e[0]=d-g*o,e[4]=-a*c,e[8]=v+f*o,e[1]=f+v*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*c,v=o*h,g=o*c;e[0]=l*h,e[4]=v*u-f,e[8]=d*u+g,e[1]=l*c,e[5]=g*u+d,e[9]=f*u-v,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*u,v=o*l,g=o*u;e[0]=l*h,e[4]=g-d*c,e[8]=v*c+f,e[1]=c,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=f*c+v,e[10]=d-g*c}else if(t.order==="XZY"){const d=a*l,f=a*u,v=o*l,g=o*u;e[0]=l*h,e[4]=-c,e[8]=u*h,e[1]=d*c+g,e[5]=a*h,e[9]=f*c-v,e[2]=v*c-f,e[6]=o*h,e[10]=g*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kc,t,Xc)}lookAt(t,e,n){const r=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Pn.crossVectors(n,je),Pn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Pn.crossVectors(n,je)),Pn.normalize(),hr.crossVectors(je,Pn),r[0]=Pn.x,r[4]=hr.x,r[8]=je.x,r[1]=Pn.y,r[5]=hr.y,r[9]=je.y,r[2]=Pn.z,r[6]=hr.z,r[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,i=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],h=n[1],c=n[5],d=n[9],f=n[13],v=n[2],g=n[6],p=n[10],m=n[14],_=n[3],y=n[7],x=n[11],b=n[15],R=r[0],C=r[4],U=r[8],K=r[12],M=r[1],E=r[5],B=r[9],H=r[13],I=r[2],G=r[6],Z=r[10],z=r[14],N=r[3],$=r[7],j=r[11],L=r[15];return i[0]=a*R+o*M+l*I+u*N,i[4]=a*C+o*E+l*G+u*$,i[8]=a*U+o*B+l*Z+u*j,i[12]=a*K+o*H+l*z+u*L,i[1]=h*R+c*M+d*I+f*N,i[5]=h*C+c*E+d*G+f*$,i[9]=h*U+c*B+d*Z+f*j,i[13]=h*K+c*H+d*z+f*L,i[2]=v*R+g*M+p*I+m*N,i[6]=v*C+g*E+p*G+m*$,i[10]=v*U+g*B+p*Z+m*j,i[14]=v*K+g*H+p*z+m*L,i[3]=_*R+y*M+x*I+b*N,i[7]=_*C+y*E+x*G+b*$,i[11]=_*U+y*B+x*Z+b*j,i[15]=_*K+y*H+x*z+b*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],i=t[12],a=t[1],o=t[5],l=t[9],u=t[13],h=t[2],c=t[6],d=t[10],f=t[14],v=t[3],g=t[7],p=t[11],m=t[15];return v*(+i*l*c-r*u*c-i*o*d+n*u*d+r*o*f-n*l*f)+g*(+e*l*f-e*u*d+i*a*d-r*a*f+r*u*h-i*l*h)+p*(+e*u*c-e*o*f-i*a*c+n*a*f+i*o*h-n*u*h)+m*(-r*o*h-e*l*c+e*o*d+r*a*c-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],f=t[11],v=t[12],g=t[13],p=t[14],m=t[15],_=c*p*u-g*d*u+g*l*f-o*p*f-c*l*m+o*d*m,y=v*d*u-h*p*u-v*l*f+a*p*f+h*l*m-a*d*m,x=h*g*u-v*c*u+v*o*f-a*g*f-h*o*m+a*c*m,b=v*c*l-h*g*l-v*o*d+a*g*d+h*o*p-a*c*p,R=e*_+n*y+r*x+i*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=_*C,t[1]=(g*d*i-c*p*i-g*r*f+n*p*f+c*r*m-n*d*m)*C,t[2]=(o*p*i-g*l*i+g*r*u-n*p*u-o*r*m+n*l*m)*C,t[3]=(c*l*i-o*d*i-c*r*u+n*d*u+o*r*f-n*l*f)*C,t[4]=y*C,t[5]=(h*p*i-v*d*i+v*r*f-e*p*f-h*r*m+e*d*m)*C,t[6]=(v*l*i-a*p*i-v*r*u+e*p*u+a*r*m-e*l*m)*C,t[7]=(a*d*i-h*l*i+h*r*u-e*d*u-a*r*f+e*l*f)*C,t[8]=x*C,t[9]=(v*c*i-h*g*i-v*n*f+e*g*f+h*n*m-e*c*m)*C,t[10]=(a*g*i-v*o*i+v*n*u-e*g*u-a*n*m+e*o*m)*C,t[11]=(h*o*i-a*c*i-h*n*u+e*c*u+a*n*f-e*o*f)*C,t[12]=b*C,t[13]=(h*g*r-v*c*r+v*n*d-e*g*d-h*n*p+e*c*p)*C,t[14]=(v*o*r-a*g*r-v*n*l+e*g*l+a*n*p-e*o*p)*C,t[15]=(a*c*r-h*o*r+h*n*l-e*c*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,i=t.z;return e[0]*=n,e[4]*=r,e[8]*=i,e[1]*=n,e[5]*=r,e[9]*=i,e[2]*=n,e[6]*=r,e[10]*=i,e[3]*=n,e[7]*=r,e[11]*=i,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),i=1-n,a=t.x,o=t.y,l=t.z,u=i*a,h=i*o;return this.set(u*a+n,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+n,h*l-r*a,0,u*l-r*o,h*l+r*a,i*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,i,a){return this.set(1,n,i,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,i=e._x,a=e._y,o=e._z,l=e._w,u=i+i,h=a+a,c=o+o,d=i*u,f=i*h,v=i*c,g=a*h,p=a*c,m=o*c,_=l*u,y=l*h,x=l*c,b=n.x,R=n.y,C=n.z;return r[0]=(1-(g+m))*b,r[1]=(f+x)*b,r[2]=(v-y)*b,r[3]=0,r[4]=(f-x)*R,r[5]=(1-(d+m))*R,r[6]=(p+_)*R,r[7]=0,r[8]=(v+y)*C,r[9]=(p-_)*C,r[10]=(1-(d+g))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let i=ui.set(r[0],r[1],r[2]).length();const a=ui.set(r[4],r[5],r[6]).length(),o=ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),t.x=r[12],t.y=r[13],t.z=r[14],rn.copy(this);const u=1/i,h=1/a,c=1/o;return rn.elements[0]*=u,rn.elements[1]*=u,rn.elements[2]*=u,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=c,rn.elements[9]*=c,rn.elements[10]*=c,e.setFromRotationMatrix(rn),n.x=i,n.y=a,n.z=o,this}makePerspective(t,e,n,r,i,a,o=wn){const l=this.elements,u=2*i/(e-t),h=2*i/(n-r),c=(e+t)/(e-t),d=(n+r)/(n-r);let f,v;if(o===wn)f=-(a+i)/(a-i),v=-2*a*i/(a-i);else if(o===Or)f=-a/(a-i),v=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,i,a,o=wn){const l=this.elements,u=1/(e-t),h=1/(n-r),c=1/(a-i),d=(e+t)*u,f=(n+r)*h;let v,g;if(o===wn)v=(a+i)*c,g=-2*c;else if(o===Or)v=i*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ui=new nt,rn=new Re,kc=new nt(0,0,0),Xc=new nt(1,1,1),Pn=new nt,hr=new nt,je=new nt,Ga=new Re,Wa=new tn;class Qi{constructor(t=0,e=0,n=0,r=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,i=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],c=r[2],d=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,i),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-c,i)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ga.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ga,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wa.setFromEuler(this),this.setFromQuaternion(Wa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class $s{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qc=0;const ka=new nt,di=new tn,vn=new Re,ur=new nt,Hi=new nt,Yc=new nt,jc=new tn,Xa=new nt(1,0,0),qa=new nt(0,1,0),Ya=new nt(0,0,1),Kc={type:"added"},Zc={type:"removed"};class Ue extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new nt,e=new Qi,n=new tn,r=new nt(1,1,1);function i(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(i),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Re},normalMatrix:{value:new ce}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(Xa,t)}rotateY(t){return this.rotateOnAxis(qa,t)}rotateZ(t){return this.rotateOnAxis(Ya,t)}translateOnAxis(t,e){return ka.copy(t).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xa,t)}translateY(t){return this.translateOnAxis(qa,t)}translateZ(t){return this.translateOnAxis(Ya,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Hi,ur,this.up):vn.lookAt(ur,Hi,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),di.setFromRotationMatrix(vn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Kc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,t,Yc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,jc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const i=e[n];(i.matrixWorldAutoUpdate===!0||t===!0)&&i.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let i=0,a=r.length;i<a;i++){const o=r[i];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const c=l[u];i(t.shapes,c)}else i(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(i(t.materials,this.material[l]));r.material=o}else r.material=i(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(i(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),h=a(t.images),c=a(t.shapes),d=a(t.skeletons),f=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ue.DEFAULT_UP=new nt(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new nt,gn=new nt,us=new nt,_n=new nt,fi=new nt,pi=new nt,ja=new nt,ds=new nt,fs=new nt,ps=new nt;class dn{constructor(t=new nt,e=new nt,n=new nt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),sn.subVectors(t,e),r.cross(sn);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(t,e,n,r,i){sn.subVectors(r,e),gn.subVectors(n,e),us.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(gn),l=sn.dot(us),u=gn.dot(gn),h=gn.dot(us),c=a*u-o*o;if(c===0)return i.set(0,0,0),null;const d=1/c,f=(u*l-o*h)*d,v=(a*h-o*l)*d;return i.set(1-f-v,v,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,r,i,a,o,l){return this.getBarycoord(t,e,n,r,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static isFrontFacing(t,e,n,r){return sn.subVectors(n,e),gn.subVectors(t,e),sn.cross(gn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),sn.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,i){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,r,i)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,i=this.c;let a,o;fi.subVectors(r,n),pi.subVectors(i,n),ds.subVectors(t,n);const l=fi.dot(ds),u=pi.dot(ds);if(l<=0&&u<=0)return e.copy(n);fs.subVectors(t,r);const h=fi.dot(fs),c=pi.dot(fs);if(h>=0&&c<=h)return e.copy(r);const d=l*c-h*u;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(fi,a);ps.subVectors(t,i);const f=fi.dot(ps),v=pi.dot(ps);if(v>=0&&f<=v)return e.copy(i);const g=f*u-l*v;if(g<=0&&u>=0&&v<=0)return o=u/(u-v),e.copy(n).addScaledVector(pi,o);const p=h*v-f*c;if(p<=0&&c-h>=0&&f-v>=0)return ja.subVectors(i,r),o=(c-h)/(c-h+(f-v)),e.copy(r).addScaledVector(ja,o);const m=1/(p+g+d);return a=g*m,o=d*m,e.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},dr={h:0,s:0,l:0};function ms(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class me{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=_e.workingColorSpace){if(t=js(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,a=2*n-i;this.r=ms(a,i,t+1/3),this.g=ms(a,i,t),this.b=ms(a,i,t-1/3)}return _e.toWorkingColorSpace(this,r),this}setStyle(t,e=Ce){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let i;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,e);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,e);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=r[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(i,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=Zo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return _e.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ve(Be.r*255,0,255))*65536+Math.round(Ve(Be.g*255,0,255))*256+Math.round(Ve(Be.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,r=Be.g,i=Be.b,a=Math.max(n,r,i),o=Math.min(n,r,i);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const c=a-o;switch(u=h<=.5?c/(a+o):c/(2-a-o),a){case n:l=(r-i)/c+(r<i?6:0);break;case r:l=(i-n)/c+2;break;case i:l=(n-r)/c+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ce){_e.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,r=Be.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(dr);const n=Xi(Ln.h,dr.h,e),r=Xi(Ln.s,dr.s,e),i=Xi(Ln.l,dr.l,e);return this.setHSL(n,r,i),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,i=t.elements;return this.r=i[0]*e+i[3]*n+i[6]*r,this.g=i[1]*e+i[4]*n+i[7]*r,this.b=i[2]*e+i[5]*n+i[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new me;me.NAMES=Zo;let $c=0;class Ji extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Ai,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cs,this.blendDst=Ps,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ps&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(i){const a=[];for(const o in i){const l=i[o];delete l.metadata,a.push(l)}return a}if(e){const i=r(t.textures),a=r(t.images);i.length>0&&(n.textures=i),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $o extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new nt,fr=new re;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ua,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ri("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=i,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ua&&(t.usage=this.usage),t}}class Qo extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jo extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Je extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Qc=0;const Ze=new Re,vs=new Ue,mi=new nt,Ke=new Di,Gi=new Di,Ne=new nt;class Tn extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qo(t)?Jo:Qo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new ce().getNormalMatrix(t);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return vs.lookAt(t),vs.updateMatrix(),this.applyMatrix4(vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const i=t[n];e.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Je(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const i=e[n];Ke.setFromBufferAttribute(i),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new nt,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const o=e[i];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(Ke.min,Gi.min),Ke.expandByPoint(Ne),Ne.addVectors(Ke.max,Gi.max),Ke.expandByPoint(Ne)):(Ke.expandByPoint(Gi.min),Ke.expandByPoint(Gi.max))}Ke.getCenter(n);let r=0;for(let i=0,a=t.count;i<a;i++)Ne.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(Ne));if(e)for(let i=0,a=e.length;i<a;i++){const o=e[i],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ne.fromBufferAttribute(o,u),l&&(mi.fromBufferAttribute(t,u),Ne.add(mi)),r=Math.max(r,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,i=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let M=0;M<o;M++)u[M]=new nt,h[M]=new nt;const c=new nt,d=new nt,f=new nt,v=new re,g=new re,p=new re,m=new nt,_=new nt;function y(M,E,B){c.fromArray(r,M*3),d.fromArray(r,E*3),f.fromArray(r,B*3),v.fromArray(a,M*2),g.fromArray(a,E*2),p.fromArray(a,B*2),d.sub(c),f.sub(c),g.sub(v),p.sub(v);const H=1/(g.x*p.y-p.x*g.y);isFinite(H)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-g.y).multiplyScalar(H),_.copy(f).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(H),u[M].add(m),u[E].add(m),u[B].add(m),h[M].add(_),h[E].add(_),h[B].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let M=0,E=x.length;M<E;++M){const B=x[M],H=B.start,I=B.count;for(let G=H,Z=H+I;G<Z;G+=3)y(n[G+0],n[G+1],n[G+2])}const b=new nt,R=new nt,C=new nt,U=new nt;function K(M){C.fromArray(i,M*3),U.copy(C);const E=u[M];b.copy(E),b.sub(C.multiplyScalar(C.dot(E))).normalize(),R.crossVectors(U,E);const H=R.dot(h[M])<0?-1:1;l[M*4]=b.x,l[M*4+1]=b.y,l[M*4+2]=b.z,l[M*4+3]=H}for(let M=0,E=x.length;M<E;++M){const B=x[M],H=B.start,I=B.count;for(let G=H,Z=H+I;G<Z;G+=3)K(n[G+0]),K(n[G+1]),K(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new nt,i=new nt,a=new nt,o=new nt,l=new nt,u=new nt,h=new nt,c=new nt;if(t)for(let d=0,f=t.count;d<f;d+=3){const v=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,v),i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,i),c.subVectors(r,i),h.cross(c),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,p),o.add(h),l.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,f=e.count;d<f;d+=3)r.fromBufferAttribute(e,d+0),i.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,i),c.subVectors(r,i),h.cross(c),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,l){const u=o.array,h=o.itemSize,c=o.normalized,d=new u.constructor(l.length*h);let f=0,v=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let m=0;m<h;m++)d[v++]=u[f++]}return new cn(d,h,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Tn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=t(l,n);e.setAttribute(o,u)}const i=this.morphAttributes;for(const o in i){const l=[],u=i[o];for(let h=0,c=u.length;h<c;h++){const d=u[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let i=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let c=0,d=u.length;c<d;c++){const f=u[c];h.push(f.toJSON(t.data))}h.length>0&&(r[l]=h,i=!0)}i&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(e))}const i=t.morphAttributes;for(const u in i){const h=[],c=i[u];for(let d=0,f=c.length;d<f;d++)h.push(c[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const c=a[u];this.addGroup(c.start,c.count,c.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ka=new Re,kn=new Zs,pr=new Ks,Za=new nt,vi=new nt,gi=new nt,_i=new nt,gs=new nt,mr=new nt,vr=new re,gr=new re,_r=new re,$a=new nt,Qa=new nt,Ja=new nt,xr=new nt,yr=new nt;class ln extends Ue{constructor(t=new Tn,e=new $o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(i&&o){mr.set(0,0,0);for(let l=0,u=i.length;l<u;l++){const h=o[l],c=i[l];h!==0&&(gs.fromBufferAttribute(c,t),a?mr.addScaledVector(gs,h):mr.addScaledVector(gs.sub(e),h))}e.add(mr)}return e}raycast(t,e){const n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),kn.copy(t.ray).recast(t.near),!(pr.containsPoint(kn.origin)===!1&&(kn.intersectSphere(pr,Za)===null||kn.origin.distanceToSquared(Za)>(t.far-t.near)**2))&&(Ka.copy(i).invert(),kn.copy(t.ray).applyMatrix4(Ka),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,n){let r;const i=this.geometry,a=this.material,o=i.index,l=i.attributes.position,u=i.attributes.uv,h=i.attributes.uv1,c=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const p=d[v],m=a[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,b=y;x<b;x+=3){const R=o.getX(x),C=o.getX(x+1),U=o.getX(x+2);r=Mr(this,m,t,n,u,h,c,R,C,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=v,m=g;p<m;p+=3){const _=o.getX(p),y=o.getX(p+1),x=o.getX(p+2);r=Mr(this,a,t,n,u,h,c,_,y,x),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const p=d[v],m=a[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,b=y;x<b;x+=3){const R=x,C=x+1,U=x+2;r=Mr(this,m,t,n,u,h,c,R,C,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=v,m=g;p<m;p+=3){const _=p,y=p+1,x=p+2;r=Mr(this,a,t,n,u,h,c,_,y,x),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Jc(s,t,e,n,r,i,a,o){let l;if(t.side===Xe?l=n.intersectTriangle(a,i,r,!0,o):l=n.intersectTriangle(r,i,a,t.side===zn,o),l===null)return null;yr.copy(o),yr.applyMatrix4(s.matrixWorld);const u=e.ray.origin.distanceTo(yr);return u<e.near||u>e.far?null:{distance:u,point:yr.clone(),object:s}}function Mr(s,t,e,n,r,i,a,o,l,u){s.getVertexPosition(o,vi),s.getVertexPosition(l,gi),s.getVertexPosition(u,_i);const h=Jc(s,t,e,n,vi,gi,_i,xr);if(h){r&&(vr.fromBufferAttribute(r,o),gr.fromBufferAttribute(r,l),_r.fromBufferAttribute(r,u),h.uv=dn.getInterpolation(xr,vi,gi,_i,vr,gr,_r,new re)),i&&(vr.fromBufferAttribute(i,o),gr.fromBufferAttribute(i,l),_r.fromBufferAttribute(i,u),h.uv1=dn.getInterpolation(xr,vi,gi,_i,vr,gr,_r,new re),h.uv2=h.uv1),a&&($a.fromBufferAttribute(a,o),Qa.fromBufferAttribute(a,l),Ja.fromBufferAttribute(a,u),h.normal=dn.getInterpolation(xr,vi,gi,_i,$a,Qa,Ja,new nt),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const c={a:o,b:l,c:u,normal:new nt,materialIndex:0};dn.getNormal(vi,gi,_i,c.normal),h.face=c}return h}class tr extends Tn{constructor(t=1,e=1,n=1,r=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};const o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);const l=[],u=[],h=[],c=[];let d=0,f=0;v("z","y","x",-1,-1,n,e,t,a,i,0),v("z","y","x",1,-1,n,e,-t,a,i,1),v("x","z","y",1,1,t,n,e,r,a,2),v("x","z","y",1,-1,t,n,-e,r,a,3),v("x","y","z",1,-1,t,e,n,r,i,4),v("x","y","z",-1,-1,t,e,-n,r,i,5),this.setIndex(l),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(c,2));function v(g,p,m,_,y,x,b,R,C,U,K){const M=x/C,E=b/U,B=x/2,H=b/2,I=R/2,G=C+1,Z=U+1;let z=0,N=0;const $=new nt;for(let j=0;j<Z;j++){const L=j*E-H;for(let Y=0;Y<G;Y++){const F=Y*M-B;$[g]=F*_,$[p]=L*y,$[m]=I,u.push($.x,$.y,$.z),$[g]=0,$[p]=0,$[m]=R>0?1:-1,h.push($.x,$.y,$.z),c.push(Y/C),c.push(1-j/U),z+=1}}for(let j=0;j<U;j++)for(let L=0;L<C;L++){const Y=d+L+G*j,F=d+L+G*(j+1),T=d+(L+1)+G*(j+1),A=d+(L+1)+G*j;l.push(Y,F,A),l.push(F,T,A),N+=6}o.addGroup(f,N,K),f+=N,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ni(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const r=s[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=Ni(s[e]);for(const r in n)t[r]=n[r]}return t}function th(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function tl(s){return s.getRenderTarget()===null?s.outputColorSpace:_e.workingColorSpace}const eh={clone:Ni,merge:Ge};var nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nh,this.fragmentShader=ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=th(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class el extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new nt,to=new re,eo=new re;class $e extends el{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,to,eo),e.subVectors(eo,to)}setViewOffset(t,e,n,r,i,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ki*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,i=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;i+=a.offsetX*r/l,e-=a.offsetY*n/u,r*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(i+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xi=-90,yi=1;class rh extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $e(xi,yi,t,e);r.layers=this.layers,this.add(r);const i=new $e(xi,yi,t,e);i.layers=this.layers,this.add(i);const a=new $e(xi,yi,t,e);a.layers=this.layers,this.add(a);const o=new $e(xi,yi,t,e);o.layers=this.layers,this.add(o);const l=new $e(xi,yi,t,e);l.layers=this.layers,this.add(l);const u=new $e(xi,yi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,i,a,o,l]=e;for(const u of e)this.remove(u);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,l,u,h]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,i),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(c,d,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class nl extends We{constructor(t,e,n,r,i,a,o,l,u,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,r,i,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sh extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Ri("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ei?Ce:Qe),this.texture=new nl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new tr(5,5,5),i=new Vn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Fn});i.uniforms.tEquirect.value=e;const a=new ln(r,i),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=ke),new rh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const i=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(i)}}const _s=new nt,ah=new nt,oh=new ce;class Dn{constructor(t=new nt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=_s.subVectors(n,e).cross(ah.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_s),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const i=-(t.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:e.copy(t.start).addScaledVector(n,i)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||oh.getNormalMatrix(t),r=this.coplanarPoint(_s).applyMatrix4(t),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new Ks,Er=new nt;class Qs{constructor(t=new Dn,e=new Dn,n=new Dn,r=new Dn,i=new Dn,a=new Dn){this.planes=[t,e,n,r,i,a]}set(t,e,n,r,i,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,r=t.elements,i=r[0],a=r[1],o=r[2],l=r[3],u=r[4],h=r[5],c=r[6],d=r[7],f=r[8],v=r[9],g=r[10],p=r[11],m=r[12],_=r[13],y=r[14],x=r[15];if(n[0].setComponents(l-i,d-u,p-f,x-m).normalize(),n[1].setComponents(l+i,d+u,p+f,x+m).normalize(),n[2].setComponents(l+a,d+h,p+v,x+_).normalize(),n[3].setComponents(l-a,d-h,p-v,x-_).normalize(),n[4].setComponents(l-o,d-c,p-g,x-y).normalize(),e===wn)n[5].setComponents(l+o,d+c,p+g,x+y).normalize();else if(e===Or)n[5].setComponents(o,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let i=0;i<6;i++)if(e[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Er.x=r.normal.x>0?t.max.x:t.min.x,Er.y=r.normal.y>0?t.max.y:t.min.y,Er.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function il(){let s=null,t=!1,e=null,n=null;function r(i,a){e(i,a),n=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(i){e=i},setContext:function(i){s=i}}}function lh(s,t){const e=t.isWebGL2,n=new WeakMap;function r(u,h){const c=u.array,d=u.usage,f=c.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,c,d),u.onUploadCallback();let g;if(c instanceof Float32Array)g=s.FLOAT;else if(c instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=s.SHORT;else if(c instanceof Uint32Array)g=s.UNSIGNED_INT;else if(c instanceof Int32Array)g=s.INT;else if(c instanceof Int8Array)g=s.BYTE;else if(c instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:v,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:u.version,size:f}}function i(u,h,c){const d=h.array,f=h._updateRange,v=h.updateRanges;if(s.bindBuffer(c,u),f.count===-1&&v.length===0&&s.bufferSubData(c,0,d),v.length!==0){for(let g=0,p=v.length;g<p;g++){const m=v[g];e?s.bufferSubData(c,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):s.bufferSubData(c,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(s.deleteBuffer(h.buffer),n.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);if(c===void 0)n.set(u,r(u,h));else if(c.version<u.version){if(c.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,u,h),c.version=u.version}}return{get:a,remove:o,update:l}}class Sn extends Tn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const i=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),u=o+1,h=l+1,c=t/o,d=e/l,f=[],v=[],g=[],p=[];for(let m=0;m<h;m++){const _=m*d-a;for(let y=0;y<u;y++){const x=y*c-i;v.push(x,-_,0),g.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){const y=_+u*m,x=_+u*(m+1),b=_+1+u*(m+1),R=_+1+u*m;f.push(y,x,R),f.push(x,b,R)}this.setIndex(f),this.setAttribute("position",new Je(v,3)),this.setAttribute("normal",new Je(g,3)),this.setAttribute("uv",new Je(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.width,t.height,t.widthSegments,t.heightSegments)}}var ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_h=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ih=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$h=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ru=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,su=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ou=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,du=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Su=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Au=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Du=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ou=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ju=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ku=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$u=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ju=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ed=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,id=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,od=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ld=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ud=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,md=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Md=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ed=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ad=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ld=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ud=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Od=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:ch,alphahash_pars_fragment:hh,alphamap_fragment:uh,alphamap_pars_fragment:dh,alphatest_fragment:fh,alphatest_pars_fragment:ph,aomap_fragment:mh,aomap_pars_fragment:vh,batching_pars_vertex:gh,batching_vertex:_h,begin_vertex:xh,beginnormal_vertex:yh,bsdfs:Mh,iridescence_fragment:Eh,bumpmap_pars_fragment:Sh,clipping_planes_fragment:wh,clipping_planes_pars_fragment:bh,clipping_planes_pars_vertex:Th,clipping_planes_vertex:Ah,color_fragment:Rh,color_pars_fragment:Ch,color_pars_vertex:Ph,color_vertex:Lh,common:Ih,cube_uv_reflection_fragment:Nh,defaultnormal_vertex:Dh,displacementmap_pars_vertex:Uh,displacementmap_vertex:Fh,emissivemap_fragment:Bh,emissivemap_pars_fragment:Oh,colorspace_fragment:zh,colorspace_pars_fragment:Vh,envmap_fragment:Hh,envmap_common_pars_fragment:Gh,envmap_pars_fragment:Wh,envmap_pars_vertex:kh,envmap_physical_pars_fragment:nu,envmap_vertex:Xh,fog_vertex:qh,fog_pars_vertex:Yh,fog_fragment:jh,fog_pars_fragment:Kh,gradientmap_pars_fragment:Zh,lightmap_fragment:$h,lightmap_pars_fragment:Qh,lights_lambert_fragment:Jh,lights_lambert_pars_fragment:tu,lights_pars_begin:eu,lights_toon_fragment:iu,lights_toon_pars_fragment:ru,lights_phong_fragment:su,lights_phong_pars_fragment:au,lights_physical_fragment:ou,lights_physical_pars_fragment:lu,lights_fragment_begin:cu,lights_fragment_maps:hu,lights_fragment_end:uu,logdepthbuf_fragment:du,logdepthbuf_pars_fragment:fu,logdepthbuf_pars_vertex:pu,logdepthbuf_vertex:mu,map_fragment:vu,map_pars_fragment:gu,map_particle_fragment:_u,map_particle_pars_fragment:xu,metalnessmap_fragment:yu,metalnessmap_pars_fragment:Mu,morphcolor_vertex:Eu,morphnormal_vertex:Su,morphtarget_pars_vertex:wu,morphtarget_vertex:bu,normal_fragment_begin:Tu,normal_fragment_maps:Au,normal_pars_fragment:Ru,normal_pars_vertex:Cu,normal_vertex:Pu,normalmap_pars_fragment:Lu,clearcoat_normal_fragment_begin:Iu,clearcoat_normal_fragment_maps:Nu,clearcoat_pars_fragment:Du,iridescence_pars_fragment:Uu,opaque_fragment:Fu,packing:Bu,premultiplied_alpha_fragment:Ou,project_vertex:zu,dithering_fragment:Vu,dithering_pars_fragment:Hu,roughnessmap_fragment:Gu,roughnessmap_pars_fragment:Wu,shadowmap_pars_fragment:ku,shadowmap_pars_vertex:Xu,shadowmap_vertex:qu,shadowmask_pars_fragment:Yu,skinbase_vertex:ju,skinning_pars_vertex:Ku,skinning_vertex:Zu,skinnormal_vertex:$u,specularmap_fragment:Qu,specularmap_pars_fragment:Ju,tonemapping_fragment:td,tonemapping_pars_fragment:ed,transmission_fragment:nd,transmission_pars_fragment:id,uv_pars_fragment:rd,uv_pars_vertex:sd,uv_vertex:ad,worldpos_vertex:od,background_vert:ld,background_frag:cd,backgroundCube_vert:hd,backgroundCube_frag:ud,cube_vert:dd,cube_frag:fd,depth_vert:pd,depth_frag:md,distanceRGBA_vert:vd,distanceRGBA_frag:gd,equirect_vert:_d,equirect_frag:xd,linedashed_vert:yd,linedashed_frag:Md,meshbasic_vert:Ed,meshbasic_frag:Sd,meshlambert_vert:wd,meshlambert_frag:bd,meshmatcap_vert:Td,meshmatcap_frag:Ad,meshnormal_vert:Rd,meshnormal_frag:Cd,meshphong_vert:Pd,meshphong_frag:Ld,meshphysical_vert:Id,meshphysical_frag:Nd,meshtoon_vert:Dd,meshtoon_frag:Ud,points_vert:Fd,points_frag:Bd,shadow_vert:Od,shadow_frag:zd,sprite_vert:Vd,sprite_frag:Hd},Bt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},hn={basic:{uniforms:Ge([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Ge([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new me(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Ge([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Ge([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Ge([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new me(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Ge([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Ge([Bt.points,Bt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Ge([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Ge([Bt.common,Bt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Ge([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Ge([Bt.sprite,Bt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Ge([Bt.common,Bt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Ge([Bt.lights,Bt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};hn.physical={uniforms:Ge([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Sr={r:0,b:0,g:0};function Gd(s,t,e,n,r,i,a){const o=new me(0);let l=i===!0?0:1,u,h,c=null,d=0,f=null;function v(p,m){let _=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?e:t).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),_=!0);const x=s.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===kr)?(h===void 0&&(h=new ln(new tr(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Ni(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=_e.getTransfer(y.colorSpace)!==xe,(c!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,c=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new ln(new Sn(2,2),new Vn({name:"BackgroundMaterial",uniforms:Ni(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_e.getTransfer(y.colorSpace)!==xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,c=y,d=y.version,f=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function g(p,m){p.getRGB(Sr,tl(s)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:v}}function Wd(s,t,e,n){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),i=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||i!==null,o={},l=p(null);let u=l,h=!1;function c(I,G,Z,z,N){let $=!1;if(a){const j=g(z,Z,G);u!==j&&(u=j,f(u.object)),$=m(I,z,Z,N),$&&_(I,z,Z,N)}else{const j=G.wireframe===!0;(u.geometry!==z.id||u.program!==Z.id||u.wireframe!==j)&&(u.geometry=z.id,u.program=Z.id,u.wireframe=j,$=!0)}N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,U(I,G,Z,z),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function d(){return n.isWebGL2?s.createVertexArray():i.createVertexArrayOES()}function f(I){return n.isWebGL2?s.bindVertexArray(I):i.bindVertexArrayOES(I)}function v(I){return n.isWebGL2?s.deleteVertexArray(I):i.deleteVertexArrayOES(I)}function g(I,G,Z){const z=Z.wireframe===!0;let N=o[I.id];N===void 0&&(N={},o[I.id]=N);let $=N[G.id];$===void 0&&($={},N[G.id]=$);let j=$[z];return j===void 0&&(j=p(d()),$[z]=j),j}function p(I){const G=[],Z=[],z=[];for(let N=0;N<r;N++)G[N]=0,Z[N]=0,z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:z,object:I,attributes:{},index:null}}function m(I,G,Z,z){const N=u.attributes,$=G.attributes;let j=0;const L=Z.getAttributes();for(const Y in L)if(L[Y].location>=0){const T=N[Y];let A=$[Y];if(A===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(A=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(A=I.instanceColor)),T===void 0||T.attribute!==A||A&&T.data!==A.data)return!0;j++}return u.attributesNum!==j||u.index!==z}function _(I,G,Z,z){const N={},$=G.attributes;let j=0;const L=Z.getAttributes();for(const Y in L)if(L[Y].location>=0){let T=$[Y];T===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(T=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(T=I.instanceColor));const A={};A.attribute=T,T&&T.data&&(A.data=T.data),N[Y]=A,j++}u.attributes=N,u.attributesNum=j,u.index=z}function y(){const I=u.newAttributes;for(let G=0,Z=I.length;G<Z;G++)I[G]=0}function x(I){b(I,0)}function b(I,G){const Z=u.newAttributes,z=u.enabledAttributes,N=u.attributeDivisors;Z[I]=1,z[I]===0&&(s.enableVertexAttribArray(I),z[I]=1),N[I]!==G&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),N[I]=G)}function R(){const I=u.newAttributes,G=u.enabledAttributes;for(let Z=0,z=G.length;Z<z;Z++)G[Z]!==I[Z]&&(s.disableVertexAttribArray(Z),G[Z]=0)}function C(I,G,Z,z,N,$,j){j===!0?s.vertexAttribIPointer(I,G,Z,N,$):s.vertexAttribPointer(I,G,Z,z,N,$)}function U(I,G,Z,z){if(n.isWebGL2===!1&&(I.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const N=z.attributes,$=Z.getAttributes(),j=G.defaultAttributeValues;for(const L in $){const Y=$[L];if(Y.location>=0){let F=N[L];if(F===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&(F=I.instanceColor)),F!==void 0){const T=F.normalized,A=F.itemSize,X=e.get(F);if(X===void 0)continue;const it=X.buffer,et=X.type,q=X.bytesPerElement,at=n.isWebGL2===!0&&(et===s.INT||et===s.UNSIGNED_INT||F.gpuType===Fo);if(F.isInterleavedBufferAttribute){const ht=F.data,W=ht.stride,Ct=F.offset;if(ht.isInstancedInterleavedBuffer){for(let dt=0;dt<Y.locationSize;dt++)b(Y.location+dt,ht.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let dt=0;dt<Y.locationSize;dt++)x(Y.location+dt);s.bindBuffer(s.ARRAY_BUFFER,it);for(let dt=0;dt<Y.locationSize;dt++)C(Y.location+dt,A/Y.locationSize,et,T,W*q,(Ct+A/Y.locationSize*dt)*q,at)}else{if(F.isInstancedBufferAttribute){for(let ht=0;ht<Y.locationSize;ht++)b(Y.location+ht,F.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ht=0;ht<Y.locationSize;ht++)x(Y.location+ht);s.bindBuffer(s.ARRAY_BUFFER,it);for(let ht=0;ht<Y.locationSize;ht++)C(Y.location+ht,A/Y.locationSize,et,T,A*q,A/Y.locationSize*ht*q,at)}}else if(j!==void 0){const T=j[L];if(T!==void 0)switch(T.length){case 2:s.vertexAttrib2fv(Y.location,T);break;case 3:s.vertexAttrib3fv(Y.location,T);break;case 4:s.vertexAttrib4fv(Y.location,T);break;default:s.vertexAttrib1fv(Y.location,T)}}}}R()}function K(){B();for(const I in o){const G=o[I];for(const Z in G){const z=G[Z];for(const N in z)v(z[N].object),delete z[N];delete G[Z]}delete o[I]}}function M(I){if(o[I.id]===void 0)return;const G=o[I.id];for(const Z in G){const z=G[Z];for(const N in z)v(z[N].object),delete z[N];delete G[Z]}delete o[I.id]}function E(I){for(const G in o){const Z=o[G];if(Z[I.id]===void 0)continue;const z=Z[I.id];for(const N in z)v(z[N].object),delete z[N];delete Z[I.id]}}function B(){H(),h=!0,u!==l&&(u=l,f(u.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:B,resetDefaultState:H,dispose:K,releaseStatesOfGeometry:M,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:x,disableUnusedAttributes:R}}function kd(s,t,e,n){const r=n.isWebGL2;let i;function a(h){i=h}function o(h,c){s.drawArrays(i,h,c),e.update(c,i,1)}function l(h,c,d){if(d===0)return;let f,v;if(r)f=s,v="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](i,h,c,d),e.update(c,i,d)}function u(h,c,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<d;v++)this.render(h[v],c[v]);else{f.multiDrawArraysWEBGL(i,h,0,c,0,d);let v=0;for(let g=0;g<d;g++)v+=c[g];e.update(v,i,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function Xd(s,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=i(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,c=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,x=a||t.has("OES_texture_float"),b=y&&x,R=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:R}}function qd(s){const t=this;let e=null,n=0,r=!1,i=!1;const a=new Dn,o=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||r;return r=d,n=c.length,f},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(c,d){e=h(c,d,0)},this.setState=function(c,d,f){const v=c.clippingPlanes,g=c.clipIntersection,p=c.clipShadows,m=s.get(c);if(!r||v===null||v.length===0||i&&!p)i?h(null):u();else{const _=i?0:n,y=_*4;let x=m.clippingState||null;l.value=x,x=h(v,d,y,f);for(let b=0;b!==y;++b)x[b]=e[b];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(c,d,f,v){const g=c!==null?c.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const m=f+g*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,x=f;y!==g;++y,x+=4)a.copy(c[y]).applyMatrix4(_,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Yd(s){let t=new WeakMap;function e(a,o){return o===Ls?a.mapping=Pi:o===Is&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ls||o===Is)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new sh(l.height);return u.fromEquirectangularTexture(s,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function i(){t=new WeakMap}return{get:n,dispose:i}}class rl extends el{constructor(t=-1,e=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=u*this.view.offsetX,a=i+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bi=4,no=[.125,.215,.35,.446,.526,.582],Zn=20,xs=new rl,io=new me;let ys=null,Ms=0,Es=0;const Yn=(1+Math.sqrt(5))/2,Mi=1/Yn,ro=[new nt(1,1,1),new nt(-1,1,1),new nt(1,1,-1),new nt(-1,1,-1),new nt(0,Yn,Mi),new nt(0,Yn,-Mi),new nt(Mi,0,Yn),new nt(-Mi,0,Yn),new nt(Yn,Mi,0),new nt(-Yn,Mi,0)];class so{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ys=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),Es=this._renderer.getActiveMipmapLevel(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(t,n,r,i),e>0&&this._blur(i,0,0,e),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ys,Ms,Es),t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ys=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),Es=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:ji,format:on,colorSpace:bn,depthBuffer:!1},r=ao(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ao(t,e,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jd(i)),this._blurMaterial=Kd(i,t,e)}return r}_compileMaterial(t){const e=new ln(this._lodPlanes[0],t);this._renderer.compile(e,xs)}_sceneToCubeUV(t,e,n,r){const o=new $e(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,c=h.autoClear,d=h.toneMapping;h.getClearColor(io),h.toneMapping=Bn,h.autoClear=!1;const f=new $o({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),v=new ln(new tr,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(io),g=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(o.up.set(0,l[m],0),o.lookAt(u[m],0,0)):_===1?(o.up.set(0,0,l[m]),o.lookAt(0,u[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,u[m]));const y=this._cubeSize;wr(r,_*y,m>2?y:0,y,y),h.setRenderTarget(r),g&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=c,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Pi||t.mapping===Li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oo());const i=r?this._cubemapMaterial:this._equirectMaterial,a=new ln(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=t;const l=this._cubeSize;wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const i=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ro[(r-1)%ro.length];this._blur(t,r-1,r,i,a)}e.autoClear=n}_blur(t,e,n,r,i){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",i),this._halfBlur(a,t,n,n,r,"longitudinal",i)}_halfBlur(t,e,n,r,i,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,c=new ln(this._lodPlanes[r],u),d=u.uniforms,f=this._sizeLods[n]-1,v=isFinite(i)?Math.PI/(2*f):2*Math.PI/(2*Zn-1),g=i/v,p=isFinite(i)?1+Math.floor(h*g):Zn;p>Zn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zn}`);const m=[];let _=0;for(let C=0;C<Zn;++C){const U=C/g,K=Math.exp(-U*U/2);m.push(K),C===0?_+=K:C<p&&(_+=2*K)}for(let C=0;C<m.length;C++)m[C]=m[C]/_;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const x=this._sizeLods[r],b=3*x*(r>y-bi?r-y+bi:0),R=4*(this._cubeSize-x);wr(e,b,R,3*x,2*x),l.setRenderTarget(e),l.render(c,xs)}}function jd(s){const t=[],e=[],n=[];let r=s;const i=s-bi+1+no.length;for(let a=0;a<i;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>s-bi?l=no[a-s+bi-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,c=1+u,d=[h,h,c,h,c,c,h,h,c,c,h,c],f=6,v=6,g=3,p=2,m=1,_=new Float32Array(g*v*f),y=new Float32Array(p*v*f),x=new Float32Array(m*v*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,U=R>2?0:-1,K=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];_.set(K,g*v*R),y.set(d,p*v*R);const M=[R,R,R,R,R,R];x.set(M,m*v*R)}const b=new Tn;b.setAttribute("position",new cn(_,g)),b.setAttribute("uv",new cn(y,p)),b.setAttribute("faceIndex",new cn(x,m)),t.push(b),r>bi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ao(s,t,e){const n=new ni(s,t,e);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(s,t,e,n,r){s.viewport.set(t,e,n,r),s.scissor.set(t,e,n,r)}function Kd(s,t,e){const n=new Float32Array(Zn),r=new nt(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function oo(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function lo(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Js(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zd(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===Ls||l===Is,h=l===Pi||l===Li;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let c=t.get(o);return e===null&&(e=new so(s)),c=u?e.fromEquirectangular(o,c):e.fromCubemap(o,c),t.set(o,c),c.texture}else{if(t.has(o))return t.get(o).texture;{const c=o.image;if(u&&c&&c.height>0||h&&c&&r(c)){e===null&&(e=new so(s));const d=u?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",i),d.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function i(o){const l=o.target;l.removeEventListener("dispose",i);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $d(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Qd(s,t,e,n){const r={},i=new WeakMap;function a(c){const d=c.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete r[d.id];const f=i.get(d);f&&(t.remove(f),i.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(c,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(c){const d=c.attributes;for(const v in d)t.update(d[v],s.ARRAY_BUFFER);const f=c.morphAttributes;for(const v in f){const g=f[v];for(let p=0,m=g.length;p<m;p++)t.update(g[p],s.ARRAY_BUFFER)}}function u(c){const d=[],f=c.index,v=c.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let y=0,x=_.length;y<x;y+=3){const b=_[y+0],R=_[y+1],C=_[y+2];d.push(b,R,R,C,C,b)}}else if(v!==void 0){const _=v.array;g=v.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const b=y+0,R=y+1,C=y+2;d.push(b,R,R,C,C,b)}}else return;const p=new(qo(d)?Jo:Qo)(d,1);p.version=g;const m=i.get(c);m&&t.remove(m),i.set(c,p)}function h(c){const d=i.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&u(c)}else u(c);return i.get(c)}return{get:o,update:l,getWireframeAttribute:h}}function Jd(s,t,e,n){const r=n.isWebGL2;let i;function a(f){i=f}let o,l;function u(f){o=f.type,l=f.bytesPerElement}function h(f,v){s.drawElements(i,v,o,f*l),e.update(v,i,1)}function c(f,v,g){if(g===0)return;let p,m;if(r)p=s,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](i,v,o,f*l,g),e.update(v,i,g)}function d(f,v,g){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(f[m]/l,v[m]);else{p.multiDrawElementsWEBGL(i,v,0,o,f,0,g);let m=0;for(let _=0;_<g;_++)m+=v[_];e.update(m,i,1)}}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=c,this.renderMultiDraw=d}function tf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(i/3);break;case s.LINES:e.lines+=o*(i/2);break;case s.LINE_STRIP:e.lines+=o*(i-1);break;case s.LINE_LOOP:e.lines+=o*i;break;case s.POINTS:e.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ef(s,t){return s[0]-t[0]}function nf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function rf(s,t,e){const n={},r=new Float32Array(8),i=new WeakMap,a=new De,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,h,c){const d=u.morphTargetInfluences;if(t.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let p=i.get(h);if(p===void 0||p.count!==g){let G=function(){H.dispose(),i.delete(h),h.removeEventListener("dispose",G)};var f=G;p!==void 0&&p.texture.dispose();const y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let K=0;y===!0&&(K=1),x===!0&&(K=2),b===!0&&(K=3);let M=h.attributes.position.count*K,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const B=new Float32Array(M*E*4*g),H=new Ko(B,M,E,g);H.type=En,H.needsUpdate=!0;const I=K*4;for(let Z=0;Z<g;Z++){const z=R[Z],N=C[Z],$=U[Z],j=M*E*4*Z;for(let L=0;L<z.count;L++){const Y=L*I;y===!0&&(a.fromBufferAttribute(z,L),B[j+Y+0]=a.x,B[j+Y+1]=a.y,B[j+Y+2]=a.z,B[j+Y+3]=0),x===!0&&(a.fromBufferAttribute(N,L),B[j+Y+4]=a.x,B[j+Y+5]=a.y,B[j+Y+6]=a.z,B[j+Y+7]=0),b===!0&&(a.fromBufferAttribute($,L),B[j+Y+8]=a.x,B[j+Y+9]=a.y,B[j+Y+10]=a.z,B[j+Y+11]=$.itemSize===4?a.w:1)}}p={count:g,texture:H,size:new re(M,E)},i.set(h,p),h.addEventListener("dispose",G)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];const _=h.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",d),c.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==v){g=[];for(let x=0;x<v;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<v;x++){const b=g[x];b[0]=x,b[1]=d[x]}g.sort(nf);for(let x=0;x<8;x++)x<v&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(ef);const p=h.morphAttributes.position,m=h.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const b=o[x],R=b[0],C=b[1];R!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+x)!==p[R]&&h.setAttribute("morphTarget"+x,p[R]),m&&h.getAttribute("morphNormal"+x)!==m[R]&&h.setAttribute("morphNormal"+x,m[R]),r[x]=C,_+=C):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const y=h.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",y),c.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:l}}function sf(s,t,e,n){let r=new WeakMap;function i(l){const u=n.render.frame,h=l.geometry,c=t.get(l,h);if(r.get(c)!==u&&(t.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return c}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:i,dispose:a}}class sl extends We{constructor(t,e,n,r,i,a,o,l,u,h){if(h=h!==void 0?h:ti,h!==ti&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ti&&(n=Un),n===void 0&&h===Ii&&(n=Jn),super(null,r,i,a,o,l,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const al=new We,ol=new sl(1,1);ol.compareFunction=Xo;const ll=new Ko,cl=new Gc,hl=new nl,co=[],ho=[],uo=new Float32Array(16),fo=new Float32Array(9),po=new Float32Array(4);function Ui(s,t,e){const n=s[0];if(n<=0||n>0)return s;const r=t*e;let i=co[r];if(i===void 0&&(i=new Float32Array(r),co[r]=i),t!==0){n.toArray(i,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(i,o)}return i}function Pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Le(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function qr(s,t){let e=ho[t];e===void 0&&(e=new Int32Array(t),ho[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function af(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2fv(this.addr,t),Le(e,t)}}function lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;s.uniform3fv(this.addr,t),Le(e,t)}}function cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4fv(this.addr,t),Le(e,t)}}function hf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;po.set(n),s.uniformMatrix2fv(this.addr,!1,po),Le(e,n)}}function uf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;fo.set(n),s.uniformMatrix3fv(this.addr,!1,fo),Le(e,n)}}function df(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;uo.set(n),s.uniformMatrix4fv(this.addr,!1,uo),Le(e,n)}}function ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2iv(this.addr,t),Le(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3iv(this.addr,t),Le(e,t)}}function vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4iv(this.addr,t),Le(e,t)}}function gf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2uiv(this.addr,t),Le(e,t)}}function xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3uiv(this.addr,t),Le(e,t)}}function yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4uiv(this.addr,t),Le(e,t)}}function Mf(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);const i=this.type===s.SAMPLER_2D_SHADOW?ol:al;e.setTexture2D(t||i,r)}function Ef(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||cl,r)}function Sf(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||hl,r)}function wf(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ll,r)}function bf(s){switch(s){case 5126:return af;case 35664:return of;case 35665:return lf;case 35666:return cf;case 35674:return hf;case 35675:return uf;case 35676:return df;case 5124:case 35670:return ff;case 35667:case 35671:return pf;case 35668:case 35672:return mf;case 35669:case 35673:return vf;case 5125:return gf;case 36294:return _f;case 36295:return xf;case 36296:return yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Ef;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return wf}}function Tf(s,t){s.uniform1fv(this.addr,t)}function Af(s,t){const e=Ui(t,this.size,2);s.uniform2fv(this.addr,e)}function Rf(s,t){const e=Ui(t,this.size,3);s.uniform3fv(this.addr,e)}function Cf(s,t){const e=Ui(t,this.size,4);s.uniform4fv(this.addr,e)}function Pf(s,t){const e=Ui(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Lf(s,t){const e=Ui(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function If(s,t){const e=Ui(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Nf(s,t){s.uniform1iv(this.addr,t)}function Df(s,t){s.uniform2iv(this.addr,t)}function Uf(s,t){s.uniform3iv(this.addr,t)}function Ff(s,t){s.uniform4iv(this.addr,t)}function Bf(s,t){s.uniform1uiv(this.addr,t)}function Of(s,t){s.uniform2uiv(this.addr,t)}function zf(s,t){s.uniform3uiv(this.addr,t)}function Vf(s,t){s.uniform4uiv(this.addr,t)}function Hf(s,t,e){const n=this.cache,r=t.length,i=qr(e,r);Pe(n,i)||(s.uniform1iv(this.addr,i),Le(n,i));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||al,i[a])}function Gf(s,t,e){const n=this.cache,r=t.length,i=qr(e,r);Pe(n,i)||(s.uniform1iv(this.addr,i),Le(n,i));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||cl,i[a])}function Wf(s,t,e){const n=this.cache,r=t.length,i=qr(e,r);Pe(n,i)||(s.uniform1iv(this.addr,i),Le(n,i));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||hl,i[a])}function kf(s,t,e){const n=this.cache,r=t.length,i=qr(e,r);Pe(n,i)||(s.uniform1iv(this.addr,i),Le(n,i));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ll,i[a])}function Xf(s){switch(s){case 5126:return Tf;case 35664:return Af;case 35665:return Rf;case 35666:return Cf;case 35674:return Pf;case 35675:return Lf;case 35676:return If;case 5124:case 35670:return Nf;case 35667:case 35671:return Df;case 35668:case 35672:return Uf;case 35669:case 35673:return Ff;case 5125:return Bf;case 36294:return Of;case 36295:return zf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return kf}}class qf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bf(e.type)}}class Yf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xf(e.type)}}class jf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let i=0,a=r.length;i!==a;++i){const o=r[i];o.setValue(t,e[o.id],n)}}}const Ss=/(\w+)(\])?(\[|\.)?/g;function mo(s,t){s.seq.push(t),s.map[t.id]=t}function Kf(s,t,e){const n=s.name,r=n.length;for(Ss.lastIndex=0;;){const i=Ss.exec(n),a=Ss.lastIndex;let o=i[1];const l=i[2]==="]",u=i[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){mo(e,u===void 0?new qf(o,s,t):new Yf(o,s,t));break}else{let c=e.map[o];c===void 0&&(c=new jf(o),mo(e,c)),e=c}}}class Cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const i=t.getActiveUniform(e,r),a=t.getUniformLocation(e,i.name);Kf(i,a,this)}}setValue(t,e,n,r){const i=this.map[e];i!==void 0&&i.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let i=0,a=e.length;i!==a;++i){const o=e[i],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,i=t.length;r!==i;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function vo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Zf=37297;let $f=0;function Qf(s,t){const e=s.split(`
`),n=[],r=Math.max(t-6,0),i=Math.min(t+6,e.length);for(let a=r;a<i;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Jf(s){const t=_e.getPrimaries(_e.workingColorSpace),e=_e.getPrimaries(s);let n;switch(t===e?n="":t===Br&&e===Fr?n="LinearDisplayP3ToLinearSRGB":t===Fr&&e===Br&&(n="LinearSRGBToLinearDisplayP3"),s){case bn:case Xr:return[n,"LinearTransferOETF"];case Ce:case Ys:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function go(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=s.getShaderInfoLog(t).trim();if(n&&r==="")return"";const i=/ERROR: 0:(\d+)/.exec(r);if(i){const a=parseInt(i[1]);return e.toUpperCase()+`

`+r+`

`+Qf(s.getShaderSource(t),a)}else return r}function tp(s,t){const e=Jf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ep(s,t){let e;switch(t){case jl:e="Linear";break;case Kl:e="Reinhard";break;case Zl:e="OptimizedCineon";break;case $l:e="ACESFilmic";break;case Jl:e="AgX";break;case Ql:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function np(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ti).join(`
`)}function ip(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ti).join(`
`)}function rp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const i=s.getActiveAttrib(t,r),a=i.name;let o=1;i.type===s.FLOAT_MAT2&&(o=2),i.type===s.FLOAT_MAT3&&(o=3),i.type===s.FLOAT_MAT4&&(o=4),e[a]={type:i.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ti(s){return s!==""}function _o(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bs(s){return s.replace(ap,lp)}const op=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lp(s,t){let e=oe[t];if(e===void 0){const n=op.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bs(e)}const cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yo(s){return s.replace(cp,hp)}function hp(s,t,e,n){let r="";for(let i=parseInt(t);i<parseInt(e);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function Mo(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(t+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function up(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Uo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===El?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function dp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function pp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ws:t="ENVMAP_BLENDING_MULTIPLY";break;case ql:t="ENVMAP_BLENDING_MIX";break;case Yl:t="ENVMAP_BLENDING_ADD";break}return t}function mp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vp(s,t,e,n){const r=s.getContext(),i=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=up(e),u=dp(e),h=fp(e),c=pp(e),d=mp(e),f=e.isWebGL2?"":np(e),v=ip(e),g=rp(i),p=r.createProgram();let m,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ti).join(`
`),m.length>0&&(m+=`
`),_=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ti).join(`
`),_.length>0&&(_+=`
`)):(m=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),_=[f,Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Bn?ep("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,tp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ti).join(`
`)),a=Bs(a),a=_o(a,e),a=xo(a,e),o=Bs(o),o=_o(o,e),o=xo(o,e),a=yo(a),o=yo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+m+a,b=y+_+o,R=vo(r,r.VERTEX_SHADER,x),C=vo(r,r.FRAGMENT_SHADER,b);r.attachShader(p,R),r.attachShader(p,C),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function U(B){if(s.debug.checkShaderErrors){const H=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(R).trim(),G=r.getShaderInfoLog(C).trim();let Z=!0,z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,p,R,C);else{const N=go(r,R,"vertex"),$=go(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+H+`
`+N+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(I===""||G==="")&&(z=!1);z&&(B.diagnostics={runnable:Z,programLog:H,vertexShader:{log:I,prefix:m},fragmentShader:{log:G,prefix:_}})}r.deleteShader(R),r.deleteShader(C),K=new Cr(r,p),M=sp(r,p)}let K;this.getUniforms=function(){return K===void 0&&U(this),K};let M;this.getAttributes=function(){return M===void 0&&U(this),M};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(p,Zf)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$f++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=C,this}let gp=0;class _p{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xp(t),e.set(t,n)),n}}class xp{constructor(t){this.id=gp++,this.code=t,this.usedTimes=0}}function yp(s,t,e,n,r,i,a){const o=new $s,l=new _p,u=new Set,h=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,E,B,H,I){const G=H.fog,Z=I.geometry,z=M.isMeshStandardMaterial?H.environment:null,N=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),$=N&&N.mapping===kr?N.image.height:null,j=g[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const L=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Y=L!==void 0?L.length:0;let F=0;Z.morphAttributes.position!==void 0&&(F=1),Z.morphAttributes.normal!==void 0&&(F=2),Z.morphAttributes.color!==void 0&&(F=3);let T,A,X,it;if(j){const se=hn[j];T=se.vertexShader,A=se.fragmentShader}else T=M.vertexShader,A=M.fragmentShader,l.update(M),X=l.getVertexShaderID(M),it=l.getFragmentShaderID(M);const et=s.getRenderTarget(),q=I.isInstancedMesh===!0,at=I.isBatchedMesh===!0,ht=!!M.map,W=!!M.matcap,Ct=!!N,dt=!!M.aoMap,rt=!!M.lightMap,ot=!!M.bumpMap,jt=!!M.normalMap,bt=!!M.displacementMap,P=!!M.emissiveMap,S=!!M.metalnessMap,tt=!!M.roughnessMap,pt=M.anisotropy>0,ut=M.clearcoat>0,mt=M.iridescence>0,wt=M.sheen>0,Et=M.transmission>0,St=pt&&!!M.anisotropyMap,Ht=ut&&!!M.clearcoatMap,$t=ut&&!!M.clearcoatNormalMap,xt=ut&&!!M.clearcoatRoughnessMap,ae=mt&&!!M.iridescenceMap,ne=mt&&!!M.iridescenceThicknessMap,Zt=wt&&!!M.sheenColorMap,Wt=wt&&!!M.sheenRoughnessMap,Vt=!!M.specularMap,ee=!!M.specularColorMap,O=!!M.specularIntensityMap,Mt=Et&&!!M.transmissionMap,Lt=Et&&!!M.thicknessMap,Xt=!!M.gradientMap,D=!!M.alphaMap,gt=M.alphaTest>0,yt=!!M.alphaHash,kt=!!M.extensions;let Kt=Bn;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Kt=s.toneMapping);const le={isWebGL2:c,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:T,fragmentShader:A,defines:M.defines,customVertexShaderID:X,customFragmentShaderID:it,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:at,instancing:q,instancingColor:q&&I.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:bn,alphaToCoverage:!!M.alphaToCoverage,map:ht,matcap:W,envMap:Ct,envMapMode:Ct&&N.mapping,envMapCubeUVHeight:$,aoMap:dt,lightMap:rt,bumpMap:ot,normalMap:jt,displacementMap:f&&bt,emissiveMap:P,normalMapObjectSpace:jt&&M.normalMapType===pc,normalMapTangentSpace:jt&&M.normalMapType===ko,metalnessMap:S,roughnessMap:tt,anisotropy:pt,anisotropyMap:St,clearcoat:ut,clearcoatMap:Ht,clearcoatNormalMap:$t,clearcoatRoughnessMap:xt,iridescence:mt,iridescenceMap:ae,iridescenceThicknessMap:ne,sheen:wt,sheenColorMap:Zt,sheenRoughnessMap:Wt,specularMap:Vt,specularColorMap:ee,specularIntensityMap:O,transmission:Et,transmissionMap:Mt,thicknessMap:Lt,gradientMap:Xt,opaque:M.transparent===!1&&M.blending===Ai&&M.alphaToCoverage===!1,alphaMap:D,alphaTest:gt,alphaHash:yt,combine:M.combine,mapUv:ht&&p(M.map.channel),aoMapUv:dt&&p(M.aoMap.channel),lightMapUv:rt&&p(M.lightMap.channel),bumpMapUv:ot&&p(M.bumpMap.channel),normalMapUv:jt&&p(M.normalMap.channel),displacementMapUv:bt&&p(M.displacementMap.channel),emissiveMapUv:P&&p(M.emissiveMap.channel),metalnessMapUv:S&&p(M.metalnessMap.channel),roughnessMapUv:tt&&p(M.roughnessMap.channel),anisotropyMapUv:St&&p(M.anisotropyMap.channel),clearcoatMapUv:Ht&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:$t&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&p(M.sheenRoughnessMap.channel),specularMapUv:Vt&&p(M.specularMap.channel),specularColorMapUv:ee&&p(M.specularColorMap.channel),specularIntensityMapUv:O&&p(M.specularIntensityMap.channel),transmissionMapUv:Mt&&p(M.transmissionMap.channel),thicknessMapUv:Lt&&p(M.thicknessMap.channel),alphaMapUv:D&&p(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(jt||pt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!Z.attributes.uv&&(ht||D),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:F,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Kt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ht&&M.map.isVideoTexture===!0&&_e.getTransfer(M.map.colorSpace)===xe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===un,flipSided:M.side===Xe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:kt&&M.extensions.derivatives===!0,extensionFragDepth:kt&&M.extensions.fragDepth===!0,extensionDrawBuffers:kt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:kt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:kt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:kt&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return le.vertexUv1s=u.has(1),le.vertexUv2s=u.has(2),le.vertexUv3s=u.has(3),u.clear(),le}function _(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)E.push(B),E.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(y(E,M),x(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),M.push(o.mask)}function b(M){const E=g[M.type];let B;if(E){const H=hn[E];B=eh.clone(H.uniforms)}else B=M.uniforms;return B}function R(M,E){let B;for(let H=0,I=h.length;H<I;H++){const G=h[H];if(G.cacheKey===E){B=G,++B.usedTimes;break}}return B===void 0&&(B=new vp(s,E,M,i),h.push(B)),B}function C(M){if(--M.usedTimes===0){const E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function U(M){l.remove(M)}function K(){l.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:b,acquireProgram:R,releaseProgram:C,releaseShaderCache:U,programs:h,dispose:K}}function Mp(){let s=new WeakMap;function t(i){let a=s.get(i);return a===void 0&&(a={},s.set(i,a)),a}function e(i){s.delete(i)}function n(i,a,o){s.get(i)[a]=o}function r(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Ep(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Eo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function So(){const s=[];let t=0;const e=[],n=[],r=[];function i(){t=0,e.length=0,n.length=0,r.length=0}function a(c,d,f,v,g,p){let m=s[t];return m===void 0?(m={id:c.id,object:c,geometry:d,material:f,groupOrder:v,renderOrder:c.renderOrder,z:g,group:p},s[t]=m):(m.id=c.id,m.object=c,m.geometry=d,m.material=f,m.groupOrder=v,m.renderOrder=c.renderOrder,m.z=g,m.group=p),t++,m}function o(c,d,f,v,g,p){const m=a(c,d,f,v,g,p);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):e.push(m)}function l(c,d,f,v,g,p){const m=a(c,d,f,v,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):e.unshift(m)}function u(c,d){e.length>1&&e.sort(c||Ep),n.length>1&&n.sort(d||Eo),r.length>1&&r.sort(d||Eo)}function h(){for(let c=t,d=s.length;c<d;c++){const f=s[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:r,init:i,push:o,unshift:l,finish:h,sort:u}}function Sp(){let s=new WeakMap;function t(n,r){const i=s.get(n);let a;return i===void 0?(a=new So,s.set(n,[a])):r>=i.length?(a=new So,i.push(a)):a=i[r],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function wp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new nt,color:new me};break;case"SpotLight":e={position:new nt,direction:new nt,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new nt,color:new me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new nt,skyColor:new me,groundColor:new me};break;case"RectAreaLight":e={color:new me,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return s[t.id]=e,e}}}function bp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Tp=0;function Ap(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Rp(s,t){const e=new wp,n=bp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new nt);const i=new nt,a=new Re,o=new Re;function l(h,c){let d=0,f=0,v=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let g=0,p=0,m=0,_=0,y=0,x=0,b=0,R=0,C=0,U=0,K=0;h.sort(Ap);const M=c===!0?Math.PI:1;for(let B=0,H=h.length;B<H;B++){const I=h[B],G=I.color,Z=I.intensity,z=I.distance,N=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=G.r*Z*M,f+=G.g*Z*M,v+=G.b*Z*M;else if(I.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(I.sh.coefficients[$],Z);K++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const j=I.shadow,L=n.get(I);L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,r.directionalShadow[g]=L,r.directionalShadowMap[g]=N,r.directionalShadowMatrix[g]=I.shadow.matrix,x++}r.directional[g]=$,g++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(G).multiplyScalar(Z*M),$.distance=z,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,r.spot[m]=$;const j=I.shadow;if(I.map&&(r.spotLightMap[C]=I.map,C++,j.updateMatrices(I),I.castShadow&&U++),r.spotLightMatrix[m]=j.matrix,I.castShadow){const L=n.get(I);L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,r.spotShadow[m]=L,r.spotShadowMap[m]=N,R++}m++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(G).multiplyScalar(Z),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),r.rectArea[_]=$,_++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*M),$.distance=I.distance,$.decay=I.decay,I.castShadow){const j=I.shadow,L=n.get(I);L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,L.shadowCameraNear=j.camera.near,L.shadowCameraFar=j.camera.far,r.pointShadow[p]=L,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=I.shadow.matrix,b++}r.point[p]=$,p++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(Z*M),$.groundColor.copy(I.groundColor).multiplyScalar(Z*M),r.hemi[y]=$,y++}}_>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Bt.LTC_FLOAT_1,r.rectAreaLTC2=Bt.LTC_FLOAT_2):(r.rectAreaLTC1=Bt.LTC_HALF_1,r.rectAreaLTC2=Bt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Bt.LTC_FLOAT_1,r.rectAreaLTC2=Bt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Bt.LTC_HALF_1,r.rectAreaLTC2=Bt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=v;const E=r.hash;(E.directionalLength!==g||E.pointLength!==p||E.spotLength!==m||E.rectAreaLength!==_||E.hemiLength!==y||E.numDirectionalShadows!==x||E.numPointShadows!==b||E.numSpotShadows!==R||E.numSpotMaps!==C||E.numLightProbes!==K)&&(r.directional.length=g,r.spot.length=m,r.rectArea.length=_,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+C-U,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=K,E.directionalLength=g,E.pointLength=p,E.spotLength=m,E.rectAreaLength=_,E.hemiLength=y,E.numDirectionalShadows=x,E.numPointShadows=b,E.numSpotShadows=R,E.numSpotMaps=C,E.numLightProbes=K,r.version=Tp++)}function u(h,c){let d=0,f=0,v=0,g=0,p=0;const m=c.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){const x=h[_];if(x.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),d++}else if(x.isSpotLight){const b=r.spot[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),v++}else if(x.isRectAreaLight){const b=r.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),o.identity(),a.copy(x.matrixWorld),a.premultiply(m),o.extractRotation(a),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const b=r.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:l,setupView:u,state:r}}function wo(s,t){const e=new Rp(s,t),n=[],r=[];function i(){n.length=0,r.length=0}function a(c){n.push(c)}function o(c){r.push(c)}function l(c){e.setup(n,c)}function u(c){e.setupView(n,c)}return{init:i,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function Cp(s,t){let e=new WeakMap;function n(i,a=0){const o=e.get(i);let l;return o===void 0?(l=new wo(s,t),e.set(i,[l])):a>=o.length?(l=new wo(s,t),o.push(l)):l=o[a],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class Pp extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lp extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ip=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Np=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dp(s,t,e){let n=new Qs;const r=new re,i=new re,a=new De,o=new Pp({depthPacking:fc}),l=new Lp,u={},h=e.maxTextureSize,c={[zn]:Xe,[Xe]:zn,[un]:un},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Ip,fragmentShader:Np}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Tn;v.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ln(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let m=this.type;this.render=function(R,C,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const K=s.getRenderTarget(),M=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Fn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=m!==yn&&this.type===yn,I=m===yn&&this.type!==yn;for(let G=0,Z=R.length;G<Z;G++){const z=R[G],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const $=N.getFrameExtents();if(r.multiply($),i.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(i.x=Math.floor(h/$.x),r.x=i.x*$.x,N.mapSize.x=i.x),r.y>h&&(i.y=Math.floor(h/$.y),r.y=i.y*$.y,N.mapSize.y=i.y)),N.map===null||H===!0||I===!0){const L=this.type!==yn?{minFilter:ze,magFilter:ze}:{};N.map!==null&&N.map.dispose(),N.map=new ni(r.x,r.y,L),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const j=N.getViewportCount();for(let L=0;L<j;L++){const Y=N.getViewport(L);a.set(i.x*Y.x,i.y*Y.y,i.x*Y.z,i.y*Y.w),B.viewport(a),N.updateMatrices(z,L),n=N.getFrustum(),x(C,U,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===yn&&_(N,U),N.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(K,M,E)};function _(R,C){const U=t.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ni(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(C,null,U,d,g,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(C,null,U,f,g,null)}function y(R,C,U,K){let M=null;const E=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)M=E;else if(M=U.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=M.uuid,H=C.uuid;let I=u[B];I===void 0&&(I={},u[B]=I);let G=I[H];G===void 0&&(G=M.clone(),I[H]=G,C.addEventListener("dispose",b)),M=G}if(M.visible=C.visible,M.wireframe=C.wireframe,K===yn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:c[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=s.properties.get(M);B.light=U}return M}function x(R,C,U,K,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===yn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const H=t.update(R),I=R.material;if(Array.isArray(I)){const G=H.groups;for(let Z=0,z=G.length;Z<z;Z++){const N=G[Z],$=I[N.materialIndex];if($&&$.visible){const j=y(R,$,K,M);R.onBeforeShadow(s,R,C,U,H,j,N),s.renderBufferDirect(U,null,H,j,R,N),R.onAfterShadow(s,R,C,U,H,j,N)}}}else if(I.visible){const G=y(R,I,K,M);R.onBeforeShadow(s,R,C,U,H,G,null),s.renderBufferDirect(U,null,H,G,R,null),R.onAfterShadow(s,R,C,U,H,G,null)}}const B=R.children;for(let H=0,I=B.length;H<I;H++)x(B[H],C,U,K,M)}function b(R){R.target.removeEventListener("dispose",b);for(const U in u){const K=u[U],M=R.target.uuid;M in K&&(K[M].dispose(),delete K[M])}}}function Up(s,t,e){const n=e.isWebGL2;function r(){let D=!1;const gt=new De;let yt=null;const kt=new De(0,0,0,0);return{setMask:function(Kt){yt!==Kt&&!D&&(s.colorMask(Kt,Kt,Kt,Kt),yt=Kt)},setLocked:function(Kt){D=Kt},setClear:function(Kt,le,se,ie,ct){ct===!0&&(Kt*=ie,le*=ie,se*=ie),gt.set(Kt,le,se,ie),kt.equals(gt)===!1&&(s.clearColor(Kt,le,se,ie),kt.copy(gt))},reset:function(){D=!1,yt=null,kt.set(-1,0,0,0)}}}function i(){let D=!1,gt=null,yt=null,kt=null;return{setTest:function(Kt){Kt?q(s.DEPTH_TEST):at(s.DEPTH_TEST)},setMask:function(Kt){gt!==Kt&&!D&&(s.depthMask(Kt),gt=Kt)},setFunc:function(Kt){if(yt!==Kt){switch(Kt){case zl:s.depthFunc(s.NEVER);break;case Vl:s.depthFunc(s.ALWAYS);break;case Hl:s.depthFunc(s.LESS);break;case Lr:s.depthFunc(s.LEQUAL);break;case Gl:s.depthFunc(s.EQUAL);break;case Wl:s.depthFunc(s.GEQUAL);break;case kl:s.depthFunc(s.GREATER);break;case Xl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=Kt}},setLocked:function(Kt){D=Kt},setClear:function(Kt){kt!==Kt&&(s.clearDepth(Kt),kt=Kt)},reset:function(){D=!1,gt=null,yt=null,kt=null}}}function a(){let D=!1,gt=null,yt=null,kt=null,Kt=null,le=null,se=null,ie=null,ct=null;return{setTest:function(lt){D||(lt?q(s.STENCIL_TEST):at(s.STENCIL_TEST))},setMask:function(lt){gt!==lt&&!D&&(s.stencilMask(lt),gt=lt)},setFunc:function(lt,ft,vt){(yt!==lt||kt!==ft||Kt!==vt)&&(s.stencilFunc(lt,ft,vt),yt=lt,kt=ft,Kt=vt)},setOp:function(lt,ft,vt){(le!==lt||se!==ft||ie!==vt)&&(s.stencilOp(lt,ft,vt),le=lt,se=ft,ie=vt)},setLocked:function(lt){D=lt},setClear:function(lt){ct!==lt&&(s.clearStencil(lt),ct=lt)},reset:function(){D=!1,gt=null,yt=null,kt=null,Kt=null,le=null,se=null,ie=null,ct=null}}}const o=new r,l=new i,u=new a,h=new WeakMap,c=new WeakMap;let d={},f={},v=new WeakMap,g=[],p=null,m=!1,_=null,y=null,x=null,b=null,R=null,C=null,U=null,K=new me(0,0,0),M=0,E=!1,B=null,H=null,I=null,G=null,Z=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,$=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),N=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),N=$>=2);let L=null,Y={};const F=s.getParameter(s.SCISSOR_BOX),T=s.getParameter(s.VIEWPORT),A=new De().fromArray(F),X=new De().fromArray(T);function it(D,gt,yt,kt){const Kt=new Uint8Array(4),le=s.createTexture();s.bindTexture(D,le),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let se=0;se<yt;se++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(gt,0,s.RGBA,1,1,kt,0,s.RGBA,s.UNSIGNED_BYTE,Kt):s.texImage2D(gt+se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Kt);return le}const et={};et[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(et[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),q(s.DEPTH_TEST),l.setFunc(Lr),bt(!1),P(na),q(s.CULL_FACE),ot(Fn);function q(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function at(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function ht(D,gt){return f[D]!==gt?(s.bindFramebuffer(D,gt),f[D]=gt,n&&(D===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=gt),D===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=gt)),!0):!1}function W(D,gt){let yt=g,kt=!1;if(D)if(yt=v.get(gt),yt===void 0&&(yt=[],v.set(gt,yt)),D.isWebGLMultipleRenderTargets){const Kt=D.texture;if(yt.length!==Kt.length||yt[0]!==s.COLOR_ATTACHMENT0){for(let le=0,se=Kt.length;le<se;le++)yt[le]=s.COLOR_ATTACHMENT0+le;yt.length=Kt.length,kt=!0}}else yt[0]!==s.COLOR_ATTACHMENT0&&(yt[0]=s.COLOR_ATTACHMENT0,kt=!0);else yt[0]!==s.BACK&&(yt[0]=s.BACK,kt=!0);kt&&(e.isWebGL2?s.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function Ct(D){return p!==D?(s.useProgram(D),p=D,!0):!1}const dt={[Kn]:s.FUNC_ADD,[wl]:s.FUNC_SUBTRACT,[bl]:s.FUNC_REVERSE_SUBTRACT};if(n)dt[aa]=s.MIN,dt[oa]=s.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(dt[aa]=D.MIN_EXT,dt[oa]=D.MAX_EXT)}const rt={[Tl]:s.ZERO,[Al]:s.ONE,[Rl]:s.SRC_COLOR,[Cs]:s.SRC_ALPHA,[Dl]:s.SRC_ALPHA_SATURATE,[Il]:s.DST_COLOR,[Pl]:s.DST_ALPHA,[Cl]:s.ONE_MINUS_SRC_COLOR,[Ps]:s.ONE_MINUS_SRC_ALPHA,[Nl]:s.ONE_MINUS_DST_COLOR,[Ll]:s.ONE_MINUS_DST_ALPHA,[Ul]:s.CONSTANT_COLOR,[Fl]:s.ONE_MINUS_CONSTANT_COLOR,[Bl]:s.CONSTANT_ALPHA,[Ol]:s.ONE_MINUS_CONSTANT_ALPHA};function ot(D,gt,yt,kt,Kt,le,se,ie,ct,lt){if(D===Fn){m===!0&&(at(s.BLEND),m=!1);return}if(m===!1&&(q(s.BLEND),m=!0),D!==Sl){if(D!==_||lt!==E){if((y!==Kn||R!==Kn)&&(s.blendEquation(s.FUNC_ADD),y=Kn,R=Kn),lt)switch(D){case Ai:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ia:s.blendFunc(s.ONE,s.ONE);break;case ra:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ia:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ra:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,b=null,C=null,U=null,K.set(0,0,0),M=0,_=D,E=lt}return}Kt=Kt||gt,le=le||yt,se=se||kt,(gt!==y||Kt!==R)&&(s.blendEquationSeparate(dt[gt],dt[Kt]),y=gt,R=Kt),(yt!==x||kt!==b||le!==C||se!==U)&&(s.blendFuncSeparate(rt[yt],rt[kt],rt[le],rt[se]),x=yt,b=kt,C=le,U=se),(ie.equals(K)===!1||ct!==M)&&(s.blendColor(ie.r,ie.g,ie.b,ct),K.copy(ie),M=ct),_=D,E=!1}function jt(D,gt){D.side===un?at(s.CULL_FACE):q(s.CULL_FACE);let yt=D.side===Xe;gt&&(yt=!yt),bt(yt),D.blending===Ai&&D.transparent===!1?ot(Fn):ot(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const kt=D.stencilWrite;u.setTest(kt),kt&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),tt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?q(s.SAMPLE_ALPHA_TO_COVERAGE):at(s.SAMPLE_ALPHA_TO_COVERAGE)}function bt(D){B!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),B=D)}function P(D){D!==yl?(q(s.CULL_FACE),D!==H&&(D===na?s.cullFace(s.BACK):D===Ml?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):at(s.CULL_FACE),H=D}function S(D){D!==I&&(N&&s.lineWidth(D),I=D)}function tt(D,gt,yt){D?(q(s.POLYGON_OFFSET_FILL),(G!==gt||Z!==yt)&&(s.polygonOffset(gt,yt),G=gt,Z=yt)):at(s.POLYGON_OFFSET_FILL)}function pt(D){D?q(s.SCISSOR_TEST):at(s.SCISSOR_TEST)}function ut(D){D===void 0&&(D=s.TEXTURE0+z-1),L!==D&&(s.activeTexture(D),L=D)}function mt(D,gt,yt){yt===void 0&&(L===null?yt=s.TEXTURE0+z-1:yt=L);let kt=Y[yt];kt===void 0&&(kt={type:void 0,texture:void 0},Y[yt]=kt),(kt.type!==D||kt.texture!==gt)&&(L!==yt&&(s.activeTexture(yt),L=yt),s.bindTexture(D,gt||et[D]),kt.type=D,kt.texture=gt)}function wt(){const D=Y[L];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Et(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Zt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(D){A.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),A.copy(D))}function O(D){X.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Mt(D,gt){let yt=c.get(gt);yt===void 0&&(yt=new WeakMap,c.set(gt,yt));let kt=yt.get(D);kt===void 0&&(kt=s.getUniformBlockIndex(gt,D.name),yt.set(D,kt))}function Lt(D,gt){const kt=c.get(gt).get(D);h.get(gt)!==kt&&(s.uniformBlockBinding(gt,kt,D.__bindingPointIndex),h.set(gt,kt))}function Xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},L=null,Y={},f={},v=new WeakMap,g=[],p=null,m=!1,_=null,y=null,x=null,b=null,R=null,C=null,U=null,K=new me(0,0,0),M=0,E=!1,B=null,H=null,I=null,G=null,Z=null,A.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:q,disable:at,bindFramebuffer:ht,drawBuffers:W,useProgram:Ct,setBlending:ot,setMaterial:jt,setFlipSided:bt,setCullFace:P,setLineWidth:S,setPolygonOffset:tt,setScissorTest:pt,activeTexture:ut,bindTexture:mt,unbindTexture:wt,compressedTexImage2D:Et,compressedTexImage3D:St,texImage2D:Wt,texImage3D:Vt,updateUBOMapping:Mt,uniformBlockBinding:Lt,texStorage2D:ne,texStorage3D:Zt,texSubImage2D:Ht,texSubImage3D:$t,compressedTexSubImage2D:xt,compressedTexSubImage3D:ae,scissor:ee,viewport:O,reset:Xt}}function Fp(s,t,e,n,r,i,a){const o=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let c;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,S){return f?new OffscreenCanvas(P,S):Zi("canvas")}function g(P,S,tt,pt){let ut=1;if((P.width>pt||P.height>pt)&&(ut=pt/Math.max(P.width,P.height)),ut<1||S===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const mt=S?zr:Math.floor,wt=mt(ut*P.width),Et=mt(ut*P.height);c===void 0&&(c=v(wt,Et));const St=tt?v(wt,Et):c;return St.width=wt,St.height=Et,St.getContext("2d").drawImage(P,0,0,wt,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+wt+"x"+Et+")."),St}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function p(P){return Fs(P.width)&&Fs(P.height)}function m(P){return o?!1:P.wrapS!==an||P.wrapT!==an||P.minFilter!==ze&&P.minFilter!==ke}function _(P,S){return P.generateMipmaps&&S&&P.minFilter!==ze&&P.minFilter!==ke}function y(P){s.generateMipmap(P)}function x(P,S,tt,pt,ut=!1){if(o===!1)return S;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let mt=S;if(S===s.RED&&(tt===s.FLOAT&&(mt=s.R32F),tt===s.HALF_FLOAT&&(mt=s.R16F),tt===s.UNSIGNED_BYTE&&(mt=s.R8)),S===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(mt=s.R8UI),tt===s.UNSIGNED_SHORT&&(mt=s.R16UI),tt===s.UNSIGNED_INT&&(mt=s.R32UI),tt===s.BYTE&&(mt=s.R8I),tt===s.SHORT&&(mt=s.R16I),tt===s.INT&&(mt=s.R32I)),S===s.RG&&(tt===s.FLOAT&&(mt=s.RG32F),tt===s.HALF_FLOAT&&(mt=s.RG16F),tt===s.UNSIGNED_BYTE&&(mt=s.RG8)),S===s.RGBA){const wt=ut?Ur:_e.getTransfer(pt);tt===s.FLOAT&&(mt=s.RGBA32F),tt===s.HALF_FLOAT&&(mt=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(mt=wt===xe?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(mt=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(mt=s.RGB5_A1)}return(mt===s.R16F||mt===s.R32F||mt===s.RG16F||mt===s.RG32F||mt===s.RGBA16F||mt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function b(P,S,tt){return _(P,tt)===!0||P.isFramebufferTexture&&P.minFilter!==ze&&P.minFilter!==ke?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function R(P){return P===ze||P===la||P===Oi?s.NEAREST:s.LINEAR}function C(P){const S=P.target;S.removeEventListener("dispose",C),K(S),S.isVideoTexture&&h.delete(S)}function U(P){const S=P.target;S.removeEventListener("dispose",U),E(S)}function K(P){const S=n.get(P);if(S.__webglInit===void 0)return;const tt=P.source,pt=d.get(tt);if(pt){const ut=pt[S.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&M(P),Object.keys(pt).length===0&&d.delete(tt)}n.remove(P)}function M(P){const S=n.get(P);s.deleteTexture(S.__webglTexture);const tt=P.source,pt=d.get(tt);delete pt[S.__cacheKey],a.memory.textures--}function E(P){const S=P.texture,tt=n.get(P),pt=n.get(S);if(pt.__webglTexture!==void 0&&(s.deleteTexture(pt.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(tt.__webglFramebuffer[ut]))for(let mt=0;mt<tt.__webglFramebuffer[ut].length;mt++)s.deleteFramebuffer(tt.__webglFramebuffer[ut][mt]);else s.deleteFramebuffer(tt.__webglFramebuffer[ut]);tt.__webglDepthbuffer&&s.deleteRenderbuffer(tt.__webglDepthbuffer[ut])}else{if(Array.isArray(tt.__webglFramebuffer))for(let ut=0;ut<tt.__webglFramebuffer.length;ut++)s.deleteFramebuffer(tt.__webglFramebuffer[ut]);else s.deleteFramebuffer(tt.__webglFramebuffer);if(tt.__webglDepthbuffer&&s.deleteRenderbuffer(tt.__webglDepthbuffer),tt.__webglMultisampledFramebuffer&&s.deleteFramebuffer(tt.__webglMultisampledFramebuffer),tt.__webglColorRenderbuffer)for(let ut=0;ut<tt.__webglColorRenderbuffer.length;ut++)tt.__webglColorRenderbuffer[ut]&&s.deleteRenderbuffer(tt.__webglColorRenderbuffer[ut]);tt.__webglDepthRenderbuffer&&s.deleteRenderbuffer(tt.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ut=0,mt=S.length;ut<mt;ut++){const wt=n.get(S[ut]);wt.__webglTexture&&(s.deleteTexture(wt.__webglTexture),a.memory.textures--),n.remove(S[ut])}n.remove(S),n.remove(P)}let B=0;function H(){B=0}function I(){const P=B;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),B+=1,P}function G(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function Z(P,S){const tt=n.get(P);if(P.isVideoTexture&&jt(P),P.isRenderTargetTexture===!1&&P.version>0&&tt.__version!==P.version){const pt=P.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{A(tt,P,S);return}}e.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+S)}function z(P,S){const tt=n.get(P);if(P.version>0&&tt.__version!==P.version){A(tt,P,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+S)}function N(P,S){const tt=n.get(P);if(P.version>0&&tt.__version!==P.version){A(tt,P,S);return}e.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+S)}function $(P,S){const tt=n.get(P);if(P.version>0&&tt.__version!==P.version){X(tt,P,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+S)}const j={[Ns]:s.REPEAT,[an]:s.CLAMP_TO_EDGE,[Ds]:s.MIRRORED_REPEAT},L={[ze]:s.NEAREST,[la]:s.NEAREST_MIPMAP_NEAREST,[Oi]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[Kr]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},Y={[mc]:s.NEVER,[Mc]:s.ALWAYS,[vc]:s.LESS,[Xo]:s.LEQUAL,[gc]:s.EQUAL,[yc]:s.GEQUAL,[_c]:s.GREATER,[xc]:s.NOTEQUAL};function F(P,S,tt){if(S.type===En&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ke||S.magFilter===Kr||S.magFilter===Oi||S.magFilter===Qn||S.minFilter===ke||S.minFilter===Kr||S.minFilter===Oi||S.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),tt?(s.texParameteri(P,s.TEXTURE_WRAP_S,j[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,j[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,j[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,L[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,L[S.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==an||S.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,R(S.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==ze&&S.minFilter!==ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Y[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const pt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===ze||S.minFilter!==Oi&&S.minFilter!==Qn||S.type===En&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===ji&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(P,pt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function T(P,S){let tt=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",C));const pt=S.source;let ut=d.get(pt);ut===void 0&&(ut={},d.set(pt,ut));const mt=G(S);if(mt!==P.__cacheKey){ut[mt]===void 0&&(ut[mt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),ut[mt].usedTimes++;const wt=ut[P.__cacheKey];wt!==void 0&&(ut[P.__cacheKey].usedTimes--,wt.usedTimes===0&&M(S)),P.__cacheKey=mt,P.__webglTexture=ut[mt].texture}return tt}function A(P,S,tt){let pt=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(pt=s.TEXTURE_3D);const ut=T(P,S),mt=S.source;e.bindTexture(pt,P.__webglTexture,s.TEXTURE0+tt);const wt=n.get(mt);if(mt.version!==wt.__version||ut===!0){e.activeTexture(s.TEXTURE0+tt);const Et=_e.getPrimaries(_e.workingColorSpace),St=S.colorSpace===Qe?null:_e.getPrimaries(S.colorSpace),Ht=S.colorSpace===Qe||Et===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const $t=m(S)&&p(S.image)===!1;let xt=g(S.image,$t,!1,r.maxTextureSize);xt=bt(S,xt);const ae=p(xt)||o,ne=i.convert(S.format,S.colorSpace);let Zt=i.convert(S.type),Wt=x(S.internalFormat,ne,Zt,S.colorSpace,S.isVideoTexture);F(pt,S,ae);let Vt;const ee=S.mipmaps,O=o&&S.isVideoTexture!==!0&&Wt!==Go,Mt=wt.__version===void 0||ut===!0,Lt=mt.dataReady,Xt=b(S,xt,ae);if(S.isDepthTexture)Wt=s.DEPTH_COMPONENT,o?S.type===En?Wt=s.DEPTH_COMPONENT32F:S.type===Un?Wt=s.DEPTH_COMPONENT24:S.type===Jn?Wt=s.DEPTH24_STENCIL8:Wt=s.DEPTH_COMPONENT16:S.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ti&&Wt===s.DEPTH_COMPONENT&&S.type!==Xs&&S.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Un,Zt=i.convert(S.type)),S.format===Ii&&Wt===s.DEPTH_COMPONENT&&(Wt=s.DEPTH_STENCIL,S.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Jn,Zt=i.convert(S.type))),Mt&&(O?e.texStorage2D(s.TEXTURE_2D,1,Wt,xt.width,xt.height):e.texImage2D(s.TEXTURE_2D,0,Wt,xt.width,xt.height,0,ne,Zt,null));else if(S.isDataTexture)if(ee.length>0&&ae){O&&Mt&&e.texStorage2D(s.TEXTURE_2D,Xt,Wt,ee[0].width,ee[0].height);for(let D=0,gt=ee.length;D<gt;D++)Vt=ee[D],O?Lt&&e.texSubImage2D(s.TEXTURE_2D,D,0,0,Vt.width,Vt.height,ne,Zt,Vt.data):e.texImage2D(s.TEXTURE_2D,D,Wt,Vt.width,Vt.height,0,ne,Zt,Vt.data);S.generateMipmaps=!1}else O?(Mt&&e.texStorage2D(s.TEXTURE_2D,Xt,Wt,xt.width,xt.height),Lt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt.width,xt.height,ne,Zt,xt.data)):e.texImage2D(s.TEXTURE_2D,0,Wt,xt.width,xt.height,0,ne,Zt,xt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&Mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Xt,Wt,ee[0].width,ee[0].height,xt.depth);for(let D=0,gt=ee.length;D<gt;D++)Vt=ee[D],S.format!==on?ne!==null?O?Lt&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,Vt.width,Vt.height,xt.depth,ne,Vt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,D,Wt,Vt.width,Vt.height,xt.depth,0,Vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Lt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,Vt.width,Vt.height,xt.depth,ne,Zt,Vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,D,Wt,Vt.width,Vt.height,xt.depth,0,ne,Zt,Vt.data)}else{O&&Mt&&e.texStorage2D(s.TEXTURE_2D,Xt,Wt,ee[0].width,ee[0].height);for(let D=0,gt=ee.length;D<gt;D++)Vt=ee[D],S.format!==on?ne!==null?O?Lt&&e.compressedTexSubImage2D(s.TEXTURE_2D,D,0,0,Vt.width,Vt.height,ne,Vt.data):e.compressedTexImage2D(s.TEXTURE_2D,D,Wt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Lt&&e.texSubImage2D(s.TEXTURE_2D,D,0,0,Vt.width,Vt.height,ne,Zt,Vt.data):e.texImage2D(s.TEXTURE_2D,D,Wt,Vt.width,Vt.height,0,ne,Zt,Vt.data)}else if(S.isDataArrayTexture)O?(Mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Xt,Wt,xt.width,xt.height,xt.depth),Lt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,ne,Zt,xt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Wt,xt.width,xt.height,xt.depth,0,ne,Zt,xt.data);else if(S.isData3DTexture)O?(Mt&&e.texStorage3D(s.TEXTURE_3D,Xt,Wt,xt.width,xt.height,xt.depth),Lt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,ne,Zt,xt.data)):e.texImage3D(s.TEXTURE_3D,0,Wt,xt.width,xt.height,xt.depth,0,ne,Zt,xt.data);else if(S.isFramebufferTexture){if(Mt)if(O)e.texStorage2D(s.TEXTURE_2D,Xt,Wt,xt.width,xt.height);else{let D=xt.width,gt=xt.height;for(let yt=0;yt<Xt;yt++)e.texImage2D(s.TEXTURE_2D,yt,Wt,D,gt,0,ne,Zt,null),D>>=1,gt>>=1}}else if(ee.length>0&&ae){O&&Mt&&e.texStorage2D(s.TEXTURE_2D,Xt,Wt,ee[0].width,ee[0].height);for(let D=0,gt=ee.length;D<gt;D++)Vt=ee[D],O?Lt&&e.texSubImage2D(s.TEXTURE_2D,D,0,0,ne,Zt,Vt):e.texImage2D(s.TEXTURE_2D,D,Wt,ne,Zt,Vt);S.generateMipmaps=!1}else O?(Mt&&e.texStorage2D(s.TEXTURE_2D,Xt,Wt,xt.width,xt.height),Lt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ne,Zt,xt)):e.texImage2D(s.TEXTURE_2D,0,Wt,ne,Zt,xt);_(S,ae)&&y(pt),wt.__version=mt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function X(P,S,tt){if(S.image.length!==6)return;const pt=T(P,S),ut=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+tt);const mt=n.get(ut);if(ut.version!==mt.__version||pt===!0){e.activeTexture(s.TEXTURE0+tt);const wt=_e.getPrimaries(_e.workingColorSpace),Et=S.colorSpace===Qe?null:_e.getPrimaries(S.colorSpace),St=S.colorSpace===Qe||wt===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Ht=S.isCompressedTexture||S.image[0].isCompressedTexture,$t=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let D=0;D<6;D++)!Ht&&!$t?xt[D]=g(S.image[D],!1,!0,r.maxCubemapSize):xt[D]=$t?S.image[D].image:S.image[D],xt[D]=bt(S,xt[D]);const ae=xt[0],ne=p(ae)||o,Zt=i.convert(S.format,S.colorSpace),Wt=i.convert(S.type),Vt=x(S.internalFormat,Zt,Wt,S.colorSpace),ee=o&&S.isVideoTexture!==!0,O=mt.__version===void 0||pt===!0,Mt=ut.dataReady;let Lt=b(S,ae,ne);F(s.TEXTURE_CUBE_MAP,S,ne);let Xt;if(Ht){ee&&O&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,Vt,ae.width,ae.height);for(let D=0;D<6;D++){Xt=xt[D].mipmaps;for(let gt=0;gt<Xt.length;gt++){const yt=Xt[gt];S.format!==on?Zt!==null?ee?Mt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt,0,0,yt.width,yt.height,Zt,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt,Vt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?Mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt,0,0,yt.width,yt.height,Zt,Wt,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt,Vt,yt.width,yt.height,0,Zt,Wt,yt.data)}}}else{Xt=S.mipmaps,ee&&O&&(Xt.length>0&&Lt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,Vt,xt[0].width,xt[0].height));for(let D=0;D<6;D++)if($t){ee?Mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,xt[D].width,xt[D].height,Zt,Wt,xt[D].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Vt,xt[D].width,xt[D].height,0,Zt,Wt,xt[D].data);for(let gt=0;gt<Xt.length;gt++){const kt=Xt[gt].image[D].image;ee?Mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt+1,0,0,kt.width,kt.height,Zt,Wt,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt+1,Vt,kt.width,kt.height,0,Zt,Wt,kt.data)}}else{ee?Mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Zt,Wt,xt[D]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Vt,Zt,Wt,xt[D]);for(let gt=0;gt<Xt.length;gt++){const yt=Xt[gt];ee?Mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt+1,0,0,Zt,Wt,yt.image[D]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt+1,Vt,Zt,Wt,yt.image[D])}}}_(S,ne)&&y(s.TEXTURE_CUBE_MAP),mt.__version=ut.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function it(P,S,tt,pt,ut,mt){const wt=i.convert(tt.format,tt.colorSpace),Et=i.convert(tt.type),St=x(tt.internalFormat,wt,Et,tt.colorSpace);if(!n.get(S).__hasExternalTextures){const $t=Math.max(1,S.width>>mt),xt=Math.max(1,S.height>>mt);ut===s.TEXTURE_3D||ut===s.TEXTURE_2D_ARRAY?e.texImage3D(ut,mt,St,$t,xt,S.depth,0,wt,Et,null):e.texImage2D(ut,mt,St,$t,xt,0,wt,Et,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ot(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,ut,n.get(tt).__webglTexture,0,rt(S)):(ut===s.TEXTURE_2D||ut>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,ut,n.get(tt).__webglTexture,mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(P,S,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer&&!S.stencilBuffer){let pt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(tt||ot(S)){const ut=S.depthTexture;ut&&ut.isDepthTexture&&(ut.type===En?pt=s.DEPTH_COMPONENT32F:ut.type===Un&&(pt=s.DEPTH_COMPONENT24));const mt=rt(S);ot(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,pt,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,pt,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,pt,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(S.depthBuffer&&S.stencilBuffer){const pt=rt(S);tt&&ot(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,s.DEPTH24_STENCIL8,S.width,S.height):ot(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const pt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ut=0;ut<pt.length;ut++){const mt=pt[ut],wt=i.convert(mt.format,mt.colorSpace),Et=i.convert(mt.type),St=x(mt.internalFormat,wt,Et,mt.colorSpace),Ht=rt(S);tt&&ot(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,St,S.width,S.height):ot(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht,St,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,St,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function q(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const pt=n.get(S.depthTexture).__webglTexture,ut=rt(S);if(S.depthTexture.format===ti)ot(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0);else if(S.depthTexture.format===Ii)ot(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function at(P){const S=n.get(P),tt=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");q(S.__webglFramebuffer,P)}else if(tt){S.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[pt]),S.__webglDepthbuffer[pt]=s.createRenderbuffer(),et(S.__webglDepthbuffer[pt],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),et(S.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(P,S,tt){const pt=n.get(P);S!==void 0&&it(pt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&at(P)}function W(P){const S=P.texture,tt=n.get(P),pt=n.get(S);P.addEventListener("dispose",U),P.isWebGLMultipleRenderTargets!==!0&&(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=S.version,a.memory.textures++);const ut=P.isWebGLCubeRenderTarget===!0,mt=P.isWebGLMultipleRenderTargets===!0,wt=p(P)||o;if(ut){tt.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(o&&S.mipmaps&&S.mipmaps.length>0){tt.__webglFramebuffer[Et]=[];for(let St=0;St<S.mipmaps.length;St++)tt.__webglFramebuffer[Et][St]=s.createFramebuffer()}else tt.__webglFramebuffer[Et]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Et=0;Et<S.mipmaps.length;Et++)tt.__webglFramebuffer[Et]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(mt)if(r.drawBuffers){const Et=P.texture;for(let St=0,Ht=Et.length;St<Ht;St++){const $t=n.get(Et[St]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&ot(P)===!1){const Et=mt?S:[S];tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let St=0;St<Et.length;St++){const Ht=Et[St];tt.__webglColorRenderbuffer[St]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[St]);const $t=i.convert(Ht.format,Ht.colorSpace),xt=i.convert(Ht.type),ae=x(Ht.internalFormat,$t,xt,Ht.colorSpace,P.isXRRenderTarget===!0),ne=rt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,ae,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,tt.__webglColorRenderbuffer[St])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),et(tt.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),F(s.TEXTURE_CUBE_MAP,S,wt);for(let Et=0;Et<6;Et++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)it(tt.__webglFramebuffer[Et][St],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,St);else it(tt.__webglFramebuffer[Et],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);_(S,wt)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){const Et=P.texture;for(let St=0,Ht=Et.length;St<Ht;St++){const $t=Et[St],xt=n.get($t);e.bindTexture(s.TEXTURE_2D,xt.__webglTexture),F(s.TEXTURE_2D,$t,wt),it(tt.__webglFramebuffer,P,$t,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,0),_($t,wt)&&y(s.TEXTURE_2D)}e.unbindTexture()}else{let Et=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?Et=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Et,pt.__webglTexture),F(Et,S,wt),o&&S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)it(tt.__webglFramebuffer[St],P,S,s.COLOR_ATTACHMENT0,Et,St);else it(tt.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,Et,0);_(S,wt)&&y(Et),e.unbindTexture()}P.depthBuffer&&at(P)}function Ct(P){const S=p(P)||o,tt=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let pt=0,ut=tt.length;pt<ut;pt++){const mt=tt[pt];if(_(mt,S)){const wt=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Et=n.get(mt).__webglTexture;e.bindTexture(wt,Et),y(wt),e.unbindTexture()}}}function dt(P){if(o&&P.samples>0&&ot(P)===!1){const S=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],tt=P.width,pt=P.height;let ut=s.COLOR_BUFFER_BIT;const mt=[],wt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(P),St=P.isWebGLMultipleRenderTargets===!0;if(St)for(let Ht=0;Ht<S.length;Ht++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ht,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ht,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Ht=0;Ht<S.length;Ht++){mt.push(s.COLOR_ATTACHMENT0+Ht),P.depthBuffer&&mt.push(wt);const $t=Et.__ignoreDepthValues!==void 0?Et.__ignoreDepthValues:!1;if($t===!1&&(P.depthBuffer&&(ut|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ut|=s.STENCIL_BUFFER_BIT)),St&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Ht]),$t===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[wt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[wt])),St){const xt=n.get(S[Ht]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xt,0)}s.blitFramebuffer(0,0,tt,pt,0,0,tt,pt,ut,s.NEAREST),u&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,mt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),St)for(let Ht=0;Ht<S.length;Ht++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ht,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Ht]);const $t=n.get(S[Ht]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ht,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}}function rt(P){return Math.min(r.maxSamples,P.samples)}function ot(P){const S=n.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function jt(P){const S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function bt(P,S){const tt=P.colorSpace,pt=P.format,ut=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Us||tt!==bn&&tt!==Qe&&(_e.getTransfer(tt)===xe?o===!1?t.has("EXT_sRGB")===!0&&pt===on?(P.format=Us,P.minFilter=ke,P.generateMipmaps=!1):S=Yo.sRGBToLinear(S):(pt!==on||ut!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),S}this.allocateTextureUnit=I,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=z,this.setTexture3D=N,this.setTextureCube=$,this.rebindTextures=ht,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=it,this.useMultisampledRTT=ot}function Bp(s,t,e){const n=e.isWebGL2;function r(i,a=Qe){let o;const l=_e.getTransfer(a);if(i===On)return s.UNSIGNED_BYTE;if(i===Bo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Oo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===tc)return s.BYTE;if(i===ec)return s.SHORT;if(i===Xs)return s.UNSIGNED_SHORT;if(i===Fo)return s.INT;if(i===Un)return s.UNSIGNED_INT;if(i===En)return s.FLOAT;if(i===ji)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(i===nc)return s.ALPHA;if(i===on)return s.RGBA;if(i===ic)return s.LUMINANCE;if(i===rc)return s.LUMINANCE_ALPHA;if(i===ti)return s.DEPTH_COMPONENT;if(i===Ii)return s.DEPTH_STENCIL;if(i===Us)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(i===sc)return s.RED;if(i===zo)return s.RED_INTEGER;if(i===ac)return s.RG;if(i===Vo)return s.RG_INTEGER;if(i===Ho)return s.RGBA_INTEGER;if(i===Zr||i===$r||i===Qr||i===Jr)if(l===xe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Zr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Zr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$r)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ca||i===ha||i===ua||i===da)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ca)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ha)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ua)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===da)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Go)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===fa||i===pa)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===fa)return l===xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===pa)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ma||i===va||i===ga||i===_a||i===xa||i===ya||i===Ma||i===Ea||i===Sa||i===wa||i===ba||i===Ta||i===Aa||i===Ra)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ma)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===va)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ga)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_a)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xa)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ya)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ma)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ea)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sa)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wa)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ba)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ta)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Aa)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ra)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ts||i===Ca||i===Pa)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===ts)return l===xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ca)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oc||i===La||i===Ia||i===Na)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===ts)return o.COMPRESSED_RED_RGTC1_EXT;if(i===La)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ia)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Na)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jn?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[i]!==void 0?s[i]:null}return{convert:r}}class Op extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class br extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zp={type:"move"};class ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,i=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(u,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],d=h.position.distanceTo(c.position),f=.02,v=.005;u.inputState.pinching&&d>f+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=f-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(i=e.getPose(t.gripSpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=i!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new br;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Vp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new We,i=t.properties.get(r);i.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new Vn({extensions:{fragDepth:!0},vertexShader:Vp,fragmentShader:Hp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ln(new Sn(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Wp extends Hn{constructor(t,e){super();const n=this;let r=null,i=1,a=null,o="local-floor",l=1,u=null,h=null,c=null,d=null,f=null,v=null;const g=new Gp,p=e.getContextAttributes();let m=null,_=null;const y=[],x=[],b=new re;let R=null;const C=new $e;C.layers.enable(1),C.viewport=new De;const U=new $e;U.layers.enable(2),U.viewport=new De;const K=[C,U],M=new Op;M.layers.enable(1),M.layers.enable(2);let E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let A=y[T];return A===void 0&&(A=new ws,y[T]=A),A.getTargetRaySpace()},this.getControllerGrip=function(T){let A=y[T];return A===void 0&&(A=new ws,y[T]=A),A.getGripSpace()},this.getHand=function(T){let A=y[T];return A===void 0&&(A=new ws,y[T]=A),A.getHandSpace()};function H(T){const A=x.indexOf(T.inputSource);if(A===-1)return;const X=y[A];X!==void 0&&(X.update(T.inputSource,T.frame,u||a),X.dispatchEvent({type:T.type,data:T.inputSource}))}function I(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",G);for(let T=0;T<y.length;T++){const A=x[T];A!==null&&(x[T]=null,y[T].disconnect(A))}E=null,B=null,g.reset(),t.setRenderTarget(m),f=null,d=null,c=null,r=null,_=null,F.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){i=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){o=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(T){u=T},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(T){if(r=T,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",I),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(b),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const A={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,e,A),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ni(f.framebufferWidth,f.framebufferHeight,{format:on,type:On,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let A=null,X=null,it=null;p.depth&&(it=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,A=p.stencil?Ii:ti,X=p.stencil?Jn:Un);const et={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:i};c=new XRWebGLBinding(r,e),d=c.createProjectionLayer(et),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new ni(d.textureWidth,d.textureHeight,{format:on,type:On,depthTexture:new sl(d.textureWidth,d.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,A),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const q=t.properties.get(_);q.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(T){for(let A=0;A<T.removed.length;A++){const X=T.removed[A],it=x.indexOf(X);it>=0&&(x[it]=null,y[it].disconnect(X))}for(let A=0;A<T.added.length;A++){const X=T.added[A];let it=x.indexOf(X);if(it===-1){for(let q=0;q<y.length;q++)if(q>=x.length){x.push(X),it=q;break}else if(x[q]===null){x[q]=X,it=q;break}if(it===-1)break}const et=y[it];et&&et.connect(X)}}const Z=new nt,z=new nt;function N(T,A,X){Z.setFromMatrixPosition(A.matrixWorld),z.setFromMatrixPosition(X.matrixWorld);const it=Z.distanceTo(z),et=A.projectionMatrix.elements,q=X.projectionMatrix.elements,at=et[14]/(et[10]-1),ht=et[14]/(et[10]+1),W=(et[9]+1)/et[5],Ct=(et[9]-1)/et[5],dt=(et[8]-1)/et[0],rt=(q[8]+1)/q[0],ot=at*dt,jt=at*rt,bt=it/(-dt+rt),P=bt*-dt;A.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(P),T.translateZ(bt),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const S=at+bt,tt=ht+bt,pt=ot-P,ut=jt+(it-P),mt=W*ht/tt*S,wt=Ct*ht/tt*S;T.projectionMatrix.makePerspective(pt,ut,mt,wt,S,tt),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}function $(T,A){A===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(A.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(r===null)return;g.texture!==null&&(T.near=g.depthNear,T.far=g.depthFar),M.near=U.near=C.near=T.near,M.far=U.far=C.far=T.far,(E!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,B=M.far,C.near=E,C.far=B,U.near=E,U.far=B,C.updateProjectionMatrix(),U.updateProjectionMatrix(),T.updateProjectionMatrix());const A=T.parent,X=M.cameras;$(M,A);for(let it=0;it<X.length;it++)$(X[it],A);X.length===2?N(M,C,U):M.projectionMatrix.copy(C.projectionMatrix),j(T,M,A)};function j(T,A,X){X===null?T.matrix.copy(A.matrixWorld):(T.matrix.copy(X.matrixWorld),T.matrix.invert(),T.matrix.multiply(A.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(A.projectionMatrix),T.projectionMatrixInverse.copy(A.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=Ki*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(T){l=T,d!==null&&(d.fixedFoveation=T),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=T)},this.hasDepthSensing=function(){return g.texture!==null};let L=null;function Y(T,A){if(h=A.getViewerPose(u||a),v=A,h!==null){const X=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let it=!1;X.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let q=0;q<X.length;q++){const at=X[q];let ht=null;if(f!==null)ht=f.getViewport(at);else{const Ct=c.getViewSubImage(d,at);ht=Ct.viewport,q===0&&(t.setRenderTargetTextures(_,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(_))}let W=K[q];W===void 0&&(W=new $e,W.layers.enable(q),W.viewport=new De,K[q]=W),W.matrix.fromArray(at.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(at.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(ht.x,ht.y,ht.width,ht.height),q===0&&(M.matrix.copy(W.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(W)}const et=r.enabledFeatures;if(et&&et.includes("depth-sensing")){const q=c.getDepthInformation(X[0]);q&&q.isValid&&q.texture&&g.init(t,q,r.renderState)}}for(let X=0;X<y.length;X++){const it=x[X],et=y[X];it!==null&&et!==void 0&&et.update(it,A,u||a)}g.render(t,M),L&&L(T,A),A.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:A}),v=null}const F=new il;F.setAnimationLoop(Y),this.setAnimationLoop=function(T){L=T},this.dispose=function(){}}}function kp(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,tl(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,_,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),c(p,m)):m.isMeshPhongMaterial?(i(p,m),h(p,m)):m.isMeshStandardMaterial?(i(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(i(p,m),v(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,y):m.isSpriteMaterial?u(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Xe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Xe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=t.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const y=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function c(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xe&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Xp(s,t,e,n){let r={},i={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function u(_,y){let x=r[_.id];x===void 0&&(v(_),x=h(_),r[_.id]=x,_.addEventListener("dispose",p));const b=y.program;n.updateUBOMapping(_,b);const R=t.render.frame;i[_.id]!==R&&(d(_),i[_.id]=R)}function h(_){const y=c();_.__bindingPointIndex=y;const x=s.createBuffer(),b=_.__size,R=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,b,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function c(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=r[_.id],x=_.uniforms,b=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let R=0,C=x.length;R<C;R++){const U=Array.isArray(x[R])?x[R]:[x[R]];for(let K=0,M=U.length;K<M;K++){const E=U[K];if(f(E,R,K,b)===!0){const B=E.__offset,H=Array.isArray(E.value)?E.value:[E.value];let I=0;for(let G=0;G<H.length;G++){const Z=H[G],z=g(Z);typeof Z=="number"||typeof Z=="boolean"?(E.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,B+I,E.__data)):Z.isMatrix3?(E.__data[0]=Z.elements[0],E.__data[1]=Z.elements[1],E.__data[2]=Z.elements[2],E.__data[3]=0,E.__data[4]=Z.elements[3],E.__data[5]=Z.elements[4],E.__data[6]=Z.elements[5],E.__data[7]=0,E.__data[8]=Z.elements[6],E.__data[9]=Z.elements[7],E.__data[10]=Z.elements[8],E.__data[11]=0):(Z.toArray(E.__data,I),I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,y,x,b){const R=_.value,C=y+"_"+x;if(b[C]===void 0)return typeof R=="number"||typeof R=="boolean"?b[C]=R:b[C]=R.clone(),!0;{const U=b[C];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return b[C]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function v(_){const y=_.uniforms;let x=0;const b=16;for(let C=0,U=y.length;C<U;C++){const K=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,E=K.length;M<E;M++){const B=K[M],H=Array.isArray(B.value)?B.value:[B.value];for(let I=0,G=H.length;I<G;I++){const Z=H[I],z=g(Z),N=x%b;N!==0&&b-N<z.boundary&&(x+=b-N),B.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=z.storage}}}const R=x%b;return R>0&&(x+=b-R),_.__size=x,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(_){const y=_.target;y.removeEventListener("dispose",p);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(r[y.id]),delete r[y.id],delete i[y.id]}function m(){for(const _ in r)s.deleteBuffer(r[_]);a=[],r={},i={}}return{bind:l,update:u,dispose:m}}class ul{constructor(t={}){const{canvas:e=Bc(),context:n=null,depth:r=!0,stencil:i=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;const y=this;let x=!1,b=0,R=0,C=null,U=-1,K=null;const M=new De,E=new De;let B=null;const H=new me(0);let I=0,G=e.width,Z=e.height,z=1,N=null,$=null;const j=new De(0,0,G,Z),L=new De(0,0,G,Z);let Y=!1;const F=new Qs;let T=!1,A=!1,X=null;const it=new Re,et=new re,q=new nt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return C===null?z:1}let W=n;function Ct(w,k){for(let Q=0;Q<w.length;Q++){const V=w[Q],J=e.getContext(V,k);if(J!==null)return J}return null}try{const w={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gs}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",gt,!1),W===null){const k=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&k.shift(),W=Ct(k,w),W===null)throw Ct(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let dt,rt,ot,jt,bt,P,S,tt,pt,ut,mt,wt,Et,St,Ht,$t,xt,ae,ne,Zt,Wt,Vt,ee,O;function Mt(){dt=new $d(W),rt=new Xd(W,dt,t),dt.init(rt),Vt=new Bp(W,dt,rt),ot=new Up(W,dt,rt),jt=new tf(W),bt=new Mp,P=new Fp(W,dt,ot,bt,rt,Vt,jt),S=new Yd(y),tt=new Zd(y),pt=new lh(W,rt),ee=new Wd(W,dt,pt,rt),ut=new Qd(W,pt,jt,ee),mt=new sf(W,ut,pt,jt),ne=new rf(W,rt,P),$t=new qd(bt),wt=new yp(y,S,tt,dt,rt,ee,$t),Et=new kp(y,bt),St=new Sp,Ht=new Cp(dt,rt),ae=new Gd(y,S,tt,ot,mt,d,l),xt=new Dp(y,mt,rt),O=new Xp(W,jt,rt,ot),Zt=new kd(W,dt,jt,rt),Wt=new Jd(W,dt,jt,rt),jt.programs=wt.programs,y.capabilities=rt,y.extensions=dt,y.properties=bt,y.renderLists=St,y.shadowMap=xt,y.state=ot,y.info=jt}Mt();const Lt=new Wp(y,W);this.xr=Lt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const w=dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(G,Z,!1))},this.getSize=function(w){return w.set(G,Z)},this.setSize=function(w,k,Q=!0){if(Lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,Z=k,e.width=Math.floor(w*z),e.height=Math.floor(k*z),Q===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(G*z,Z*z).floor()},this.setDrawingBufferSize=function(w,k,Q){G=w,Z=k,z=Q,e.width=Math.floor(w*Q),e.height=Math.floor(k*Q),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,k,Q,V){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,k,Q,V),ot.viewport(M.copy(j).multiplyScalar(z).floor())},this.getScissor=function(w){return w.copy(L)},this.setScissor=function(w,k,Q,V){w.isVector4?L.set(w.x,w.y,w.z,w.w):L.set(w,k,Q,V),ot.scissor(E.copy(L).multiplyScalar(z).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(w){ot.setScissorTest(Y=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(w=!0,k=!0,Q=!0){let V=0;if(w){let J=!1;if(C!==null){const _t=C.texture.format;J=_t===Ho||_t===Vo||_t===zo}if(J){const _t=C.texture.type,Ot=_t===On||_t===Un||_t===Xs||_t===Jn||_t===Bo||_t===Oo,It=ae.getClearColor(),Ft=ae.getClearAlpha(),Rt=It.r,Qt=It.g,Jt=It.b;Ot?(f[0]=Rt,f[1]=Qt,f[2]=Jt,f[3]=Ft,W.clearBufferuiv(W.COLOR,0,f)):(v[0]=Rt,v[1]=Qt,v[2]=Jt,v[3]=Ft,W.clearBufferiv(W.COLOR,0,v))}else V|=W.COLOR_BUFFER_BIT}k&&(V|=W.DEPTH_BUFFER_BIT),Q&&(V|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),St.dispose(),Ht.dispose(),bt.dispose(),S.dispose(),tt.dispose(),mt.dispose(),ee.dispose(),O.dispose(),wt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",ct),Lt.removeEventListener("sessionend",lt),X&&(X.dispose(),X=null),ft.stop()};function Xt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=jt.autoReset,k=xt.enabled,Q=xt.autoUpdate,V=xt.needsUpdate,J=xt.type;Mt(),jt.autoReset=w,xt.enabled=k,xt.autoUpdate=Q,xt.needsUpdate=V,xt.type=J}function gt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function yt(w){const k=w.target;k.removeEventListener("dispose",yt),kt(k)}function kt(w){Kt(w),bt.remove(w)}function Kt(w){const k=bt.get(w).programs;k!==void 0&&(k.forEach(function(Q){wt.releaseProgram(Q)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,Q,V,J,_t){k===null&&(k=at);const Ot=J.isMesh&&J.matrixWorld.determinant()<0,It=Gt(w,k,Q,V,J);ot.setMaterial(V,Ot);let Ft=Q.index,Rt=1;if(V.wireframe===!0){if(Ft=ut.getWireframeAttribute(Q),Ft===void 0)return;Rt=2}const Qt=Q.drawRange,Jt=Q.attributes.position;let de=Qt.start*Rt,Ee=(Qt.start+Qt.count)*Rt;_t!==null&&(de=Math.max(de,_t.start*Rt),Ee=Math.min(Ee,(_t.start+_t.count)*Rt)),Ft!==null?(de=Math.max(de,0),Ee=Math.min(Ee,Ft.count)):Jt!=null&&(de=Math.max(de,0),Ee=Math.min(Ee,Jt.count));const fe=Ee-de;if(fe<0||fe===1/0)return;ee.setup(J,V,It,Q,Ft);let he,pe=Zt;if(Ft!==null&&(he=pt.get(Ft),pe=Wt,pe.setIndex(he)),J.isMesh)V.wireframe===!0?(ot.setLineWidth(V.wireframeLinewidth*ht()),pe.setMode(W.LINES)):pe.setMode(W.TRIANGLES);else if(J.isLine){let qt=V.linewidth;qt===void 0&&(qt=1),ot.setLineWidth(qt*ht()),J.isLineSegments?pe.setMode(W.LINES):J.isLineLoop?pe.setMode(W.LINE_LOOP):pe.setMode(W.LINE_STRIP)}else J.isPoints?pe.setMode(W.POINTS):J.isSprite&&pe.setMode(W.TRIANGLES);if(J.isBatchedMesh)pe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)pe.renderInstances(de,fe,J.count);else if(Q.isInstancedBufferGeometry){const qt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,qe=Math.min(Q.instanceCount,qt);pe.renderInstances(de,fe,qe)}else pe.render(de,fe)};function le(w,k,Q){w.transparent===!0&&w.side===un&&w.forceSinglePass===!1?(w.side=Xe,w.needsUpdate=!0,st(w,k,Q),w.side=zn,w.needsUpdate=!0,st(w,k,Q),w.side=un):st(w,k,Q)}this.compile=function(w,k,Q=null){Q===null&&(Q=w),p=Ht.get(Q),p.init(),_.push(p),Q.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),w!==Q&&w.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),p.setupLights(y._useLegacyLights);const V=new Set;return w.traverse(function(J){const _t=J.material;if(_t)if(Array.isArray(_t))for(let Ot=0;Ot<_t.length;Ot++){const It=_t[Ot];le(It,Q,J),V.add(It)}else le(_t,Q,J),V.add(_t)}),_.pop(),p=null,V},this.compileAsync=function(w,k,Q=null){const V=this.compile(w,k,Q);return new Promise(J=>{function _t(){if(V.forEach(function(Ot){bt.get(Ot).currentProgram.isReady()&&V.delete(Ot)}),V.size===0){J(w);return}setTimeout(_t,10)}dt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let se=null;function ie(w){se&&se(w)}function ct(){ft.stop()}function lt(){ft.start()}const ft=new il;ft.setAnimationLoop(ie),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(w){se=w,Lt.setAnimationLoop(w),w===null?ft.stop():ft.start()},Lt.addEventListener("sessionstart",ct),Lt.addEventListener("sessionend",lt),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(k),k=Lt.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,k,C),p=Ht.get(w,_.length),p.init(),_.push(p),it.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),F.setFromProjectionMatrix(it),A=this.localClippingEnabled,T=$t.init(this.clippingPlanes,A),g=St.get(w,m.length),g.init(),m.push(g),vt(w,k,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(N,$),this.info.render.frame++,T===!0&&$t.beginShadows();const Q=p.state.shadowsArray;if(xt.render(Q,w,k),T===!0&&$t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1)&&ae.render(g,w),p.setupLights(y._useLegacyLights),k.isArrayCamera){const V=k.cameras;for(let J=0,_t=V.length;J<_t;J++){const Ot=V[J];te(g,w,Ot,Ot.viewport)}}else te(g,w,k);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(y,w,k),ee.resetDefaultState(),U=-1,K=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function vt(w,k,Q,V){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||F.intersectsSprite(w)){V&&q.setFromMatrixPosition(w.matrixWorld).applyMatrix4(it);const Ot=mt.update(w),It=w.material;It.visible&&g.push(w,Ot,It,Q,q.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||F.intersectsObject(w))){const Ot=mt.update(w),It=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),q.copy(w.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),q.copy(Ot.boundingSphere.center)),q.applyMatrix4(w.matrixWorld).applyMatrix4(it)),Array.isArray(It)){const Ft=Ot.groups;for(let Rt=0,Qt=Ft.length;Rt<Qt;Rt++){const Jt=Ft[Rt],de=It[Jt.materialIndex];de&&de.visible&&g.push(w,Ot,de,Q,q.z,Jt)}}else It.visible&&g.push(w,Ot,It,Q,q.z,null)}}const _t=w.children;for(let Ot=0,It=_t.length;Ot<It;Ot++)vt(_t[Ot],k,Q,V)}function te(w,k,Q,V){const J=w.opaque,_t=w.transmissive,Ot=w.transparent;p.setupLightsView(Q),T===!0&&$t.setGlobalState(y.clippingPlanes,Q),_t.length>0&&zt(J,_t,k,Q),V&&ot.viewport(M.copy(V)),J.length>0&&Tt(J,k,Q),_t.length>0&&Tt(_t,k,Q),Ot.length>0&&Tt(Ot,k,Q),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function zt(w,k,Q,V){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const _t=rt.isWebGL2;X===null&&(X=new ni(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")?ji:On,minFilter:Qn,samples:_t?4:0})),y.getDrawingBufferSize(et),_t?X.setSize(et.x,et.y):X.setSize(zr(et.x),zr(et.y));const Ot=y.getRenderTarget();y.setRenderTarget(X),y.getClearColor(H),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();const It=y.toneMapping;y.toneMapping=Bn,Tt(w,Q,V),P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X);let Ft=!1;for(let Rt=0,Qt=k.length;Rt<Qt;Rt++){const Jt=k[Rt],de=Jt.object,Ee=Jt.geometry,fe=Jt.material,he=Jt.group;if(fe.side===un&&de.layers.test(V.layers)){const pe=fe.side;fe.side=Xe,fe.needsUpdate=!0,Dt(de,Q,V,Ee,fe,he),fe.side=pe,fe.needsUpdate=!0,Ft=!0}}Ft===!0&&(P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X)),y.setRenderTarget(Ot),y.setClearColor(H,I),y.toneMapping=It}function Tt(w,k,Q){const V=k.isScene===!0?k.overrideMaterial:null;for(let J=0,_t=w.length;J<_t;J++){const Ot=w[J],It=Ot.object,Ft=Ot.geometry,Rt=V===null?Ot.material:V,Qt=Ot.group;It.layers.test(Q.layers)&&Dt(It,k,Q,Ft,Rt,Qt)}}function Dt(w,k,Q,V,J,_t){w.onBeforeRender(y,k,Q,V,J,_t),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(y,k,Q,V,w,_t),J.transparent===!0&&J.side===un&&J.forceSinglePass===!1?(J.side=Xe,J.needsUpdate=!0,y.renderBufferDirect(Q,k,V,J,w,_t),J.side=zn,J.needsUpdate=!0,y.renderBufferDirect(Q,k,V,J,w,_t),J.side=un):y.renderBufferDirect(Q,k,V,J,w,_t),w.onAfterRender(y,k,Q,V,J,_t)}function st(w,k,Q){k.isScene!==!0&&(k=at);const V=bt.get(w),J=p.state.lights,_t=p.state.shadowsArray,Ot=J.state.version,It=wt.getParameters(w,J.state,_t,k,Q),Ft=wt.getProgramCacheKey(It);let Rt=V.programs;V.environment=w.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(w.isMeshStandardMaterial?tt:S).get(w.envMap||V.environment),Rt===void 0&&(w.addEventListener("dispose",yt),Rt=new Map,V.programs=Rt);let Qt=Rt.get(Ft);if(Qt!==void 0){if(V.currentProgram===Qt&&V.lightsStateVersion===Ot)return Ut(w,It),Qt}else It.uniforms=wt.getUniforms(w),w.onBuild(Q,It,y),w.onBeforeCompile(It,y),Qt=wt.acquireProgram(It,Ft),Rt.set(Ft,Qt),V.uniforms=It.uniforms;const Jt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Jt.clippingPlanes=$t.uniform),Ut(w,It),V.needsLights=At(w),V.lightsStateVersion=Ot,V.needsLights&&(Jt.ambientLightColor.value=J.state.ambient,Jt.lightProbe.value=J.state.probe,Jt.directionalLights.value=J.state.directional,Jt.directionalLightShadows.value=J.state.directionalShadow,Jt.spotLights.value=J.state.spot,Jt.spotLightShadows.value=J.state.spotShadow,Jt.rectAreaLights.value=J.state.rectArea,Jt.ltc_1.value=J.state.rectAreaLTC1,Jt.ltc_2.value=J.state.rectAreaLTC2,Jt.pointLights.value=J.state.point,Jt.pointLightShadows.value=J.state.pointShadow,Jt.hemisphereLights.value=J.state.hemi,Jt.directionalShadowMap.value=J.state.directionalShadowMap,Jt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Jt.spotShadowMap.value=J.state.spotShadowMap,Jt.spotLightMatrix.value=J.state.spotLightMatrix,Jt.spotLightMap.value=J.state.spotLightMap,Jt.pointShadowMap.value=J.state.pointShadowMap,Jt.pointShadowMatrix.value=J.state.pointShadowMatrix),V.currentProgram=Qt,V.uniformsList=null,Qt}function Pt(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Cr.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Ut(w,k){const Q=bt.get(w);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function Gt(w,k,Q,V,J){k.isScene!==!0&&(k=at),P.resetTextureUnits();const _t=k.fog,Ot=V.isMeshStandardMaterial?k.environment:null,It=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:bn,Ft=(V.isMeshStandardMaterial?tt:S).get(V.envMap||Ot),Rt=V.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qt=!!Q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Jt=!!Q.morphAttributes.position,de=!!Q.morphAttributes.normal,Ee=!!Q.morphAttributes.color;let fe=Bn;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(fe=y.toneMapping);const he=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,pe=he!==void 0?he.length:0,qt=bt.get(V),qe=p.state.lights;if(T===!0&&(A===!0||w!==K)){const Te=w===K&&V.id===U;$t.setState(V,w,Te)}let ue=!1;V.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==qe.state.version||qt.outputColorSpace!==It||J.isBatchedMesh&&qt.batching===!1||!J.isBatchedMesh&&qt.batching===!0||J.isInstancedMesh&&qt.instancing===!1||!J.isInstancedMesh&&qt.instancing===!0||J.isSkinnedMesh&&qt.skinning===!1||!J.isSkinnedMesh&&qt.skinning===!0||J.isInstancedMesh&&qt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&qt.instancingColor===!1&&J.instanceColor!==null||qt.envMap!==Ft||V.fog===!0&&qt.fog!==_t||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==$t.numPlanes||qt.numIntersection!==$t.numIntersection)||qt.vertexAlphas!==Rt||qt.vertexTangents!==Qt||qt.morphTargets!==Jt||qt.morphNormals!==de||qt.morphColors!==Ee||qt.toneMapping!==fe||rt.isWebGL2===!0&&qt.morphTargetsCount!==pe)&&(ue=!0):(ue=!0,qt.__version=V.version);let ye=qt.currentProgram;ue===!0&&(ye=st(V,k,J));let be=!1,Ie=!1,Ye=!1;const Yt=ye.getUniforms(),we=qt.uniforms;if(ot.useProgram(ye.program)&&(be=!0,Ie=!0,Ye=!0),V.id!==U&&(U=V.id,Ie=!0),be||K!==w){Yt.setValue(W,"projectionMatrix",w.projectionMatrix),Yt.setValue(W,"viewMatrix",w.matrixWorldInverse);const Te=Yt.map.cameraPosition;Te!==void 0&&Te.setValue(W,q.setFromMatrixPosition(w.matrixWorld)),rt.logarithmicDepthBuffer&&Yt.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Yt.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),K!==w&&(K=w,Ie=!0,Ye=!0)}if(J.isSkinnedMesh){Yt.setOptional(W,J,"bindMatrix"),Yt.setOptional(W,J,"bindMatrixInverse");const Te=J.skeleton;Te&&(rt.floatVertexTextures?(Te.boneTexture===null&&Te.computeBoneTexture(),Yt.setValue(W,"boneTexture",Te.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Yt.setOptional(W,J,"batchingTexture"),Yt.setValue(W,"batchingTexture",J._matricesTexture,P));const Se=Q.morphAttributes;if((Se.position!==void 0||Se.normal!==void 0||Se.color!==void 0&&rt.isWebGL2===!0)&&ne.update(J,Q,ye),(Ie||qt.receiveShadow!==J.receiveShadow)&&(qt.receiveShadow=J.receiveShadow,Yt.setValue(W,"receiveShadow",J.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(we.envMap.value=Ft,we.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),Ie&&(Yt.setValue(W,"toneMappingExposure",y.toneMappingExposure),qt.needsLights&&Nt(we,Ye),_t&&V.fog===!0&&Et.refreshFogUniforms(we,_t),Et.refreshMaterialUniforms(we,V,z,Z,X),Cr.upload(W,Pt(qt),we,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Cr.upload(W,Pt(qt),we,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Yt.setValue(W,"center",J.center),Yt.setValue(W,"modelViewMatrix",J.modelViewMatrix),Yt.setValue(W,"normalMatrix",J.normalMatrix),Yt.setValue(W,"modelMatrix",J.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Te=V.uniformsGroups;for(let en=0,jr=Te.length;en<jr;en++)if(rt.isWebGL2){const ir=Te[en];O.update(ir,ye),O.bind(ir,ye)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ye}function Nt(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function At(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,k,Q){bt.get(w.texture).__webglTexture=k,bt.get(w.depthTexture).__webglTexture=Q;const V=bt.get(w);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=Q===void 0,V.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const Q=bt.get(w);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,Q=0){C=w,b=k,R=Q;let V=!0,J=null,_t=!1,Ot=!1;if(w){const Ft=bt.get(w);Ft.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(W.FRAMEBUFFER,null),V=!1):Ft.__webglFramebuffer===void 0?P.setupRenderTarget(w):Ft.__hasExternalTextures&&P.rebindTextures(w,bt.get(w.texture).__webglTexture,bt.get(w.depthTexture).__webglTexture);const Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Ot=!0);const Qt=bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qt[k])?J=Qt[k][Q]:J=Qt[k],_t=!0):rt.isWebGL2&&w.samples>0&&P.useMultisampledRTT(w)===!1?J=bt.get(w).__webglMultisampledFramebuffer:Array.isArray(Qt)?J=Qt[Q]:J=Qt,M.copy(w.viewport),E.copy(w.scissor),B=w.scissorTest}else M.copy(j).multiplyScalar(z).floor(),E.copy(L).multiplyScalar(z).floor(),B=Y;if(ot.bindFramebuffer(W.FRAMEBUFFER,J)&&rt.drawBuffers&&V&&ot.drawBuffers(w,J),ot.viewport(M),ot.scissor(E),ot.setScissorTest(B),_t){const Ft=bt.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ft.__webglTexture,Q)}else if(Ot){const Ft=bt.get(w.texture),Rt=k||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ft.__webglTexture,Q||0,Rt)}U=-1},this.readRenderTargetPixels=function(w,k,Q,V,J,_t,Ot){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ot!==void 0&&(It=It[Ot]),It){ot.bindFramebuffer(W.FRAMEBUFFER,It);try{const Ft=w.texture,Rt=Ft.format,Qt=Ft.type;if(Rt!==on&&Vt.convert(Rt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Jt=Qt===ji&&(dt.has("EXT_color_buffer_half_float")||rt.isWebGL2&&dt.has("EXT_color_buffer_float"));if(Qt!==On&&Vt.convert(Qt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qt===En&&(rt.isWebGL2||dt.has("OES_texture_float")||dt.has("WEBGL_color_buffer_float")))&&!Jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-V&&Q>=0&&Q<=w.height-J&&W.readPixels(k,Q,V,J,Vt.convert(Rt),Vt.convert(Qt),_t)}finally{const Ft=C!==null?bt.get(C).__webglFramebuffer:null;ot.bindFramebuffer(W.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(w,k,Q=0){const V=Math.pow(2,-Q),J=Math.floor(k.image.width*V),_t=Math.floor(k.image.height*V);P.setTexture2D(k,0),W.copyTexSubImage2D(W.TEXTURE_2D,Q,0,0,w.x,w.y,J,_t),ot.unbindTexture()},this.copyTextureToTexture=function(w,k,Q,V=0){const J=k.image.width,_t=k.image.height,Ot=Vt.convert(Q.format),It=Vt.convert(Q.type);P.setTexture2D(Q,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Q.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Q.unpackAlignment),k.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,V,w.x,w.y,J,_t,Ot,It,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,V,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,Ot,k.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,V,w.x,w.y,Ot,It,k.image),V===0&&Q.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),ot.unbindTexture()},this.copyTextureToTexture3D=function(w,k,Q,V,J=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=w.max.x-w.min.x+1,Ot=w.max.y-w.min.y+1,It=w.max.z-w.min.z+1,Ft=Vt.convert(V.format),Rt=Vt.convert(V.type);let Qt;if(V.isData3DTexture)P.setTexture3D(V,0),Qt=W.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)P.setTexture2DArray(V,0),Qt=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,V.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,V.unpackAlignment);const Jt=W.getParameter(W.UNPACK_ROW_LENGTH),de=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Ee=W.getParameter(W.UNPACK_SKIP_PIXELS),fe=W.getParameter(W.UNPACK_SKIP_ROWS),he=W.getParameter(W.UNPACK_SKIP_IMAGES),pe=Q.isCompressedTexture?Q.mipmaps[J]:Q.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,pe.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,pe.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,w.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,w.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,w.min.z),Q.isDataTexture||Q.isData3DTexture?W.texSubImage3D(Qt,J,k.x,k.y,k.z,_t,Ot,It,Ft,Rt,pe.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Qt,J,k.x,k.y,k.z,_t,Ot,It,Ft,pe.data)):W.texSubImage3D(Qt,J,k.x,k.y,k.z,_t,Ot,It,Ft,Rt,pe),W.pixelStorei(W.UNPACK_ROW_LENGTH,Jt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,de),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ee),W.pixelStorei(W.UNPACK_SKIP_ROWS,fe),W.pixelStorei(W.UNPACK_SKIP_IMAGES,he),J===0&&V.generateMipmaps&&W.generateMipmap(Qt),ot.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),ot.unbindTexture()},this.resetState=function(){b=0,R=0,C=null,ot.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ys?"display-p3":"srgb",e.unpackColorSpace=_e.workingColorSpace===Xr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ce?ei:Wo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ei?Ce:bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class qp extends ul{}qp.prototype.isWebGL1Renderer=!0;class Yp extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Os extends Ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ko,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Tr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function jp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Kp(s){function t(r,i){return s[r]-s[i]}const e=s.length,n=new Array(e);for(let r=0;r!==e;++r)n[r]=r;return n.sort(t),n}function bo(s,t,e){const n=s.length,r=new s.constructor(n);for(let i=0,a=0;a!==n;++i){const o=e[i]*t;for(let l=0;l!==t;++l)r[a++]=s[o+l]}return r}function dl(s,t,e,n){let r=1,i=s[0];for(;i!==void 0&&i[n]===void 0;)i=s[r++];if(i===void 0)return;let a=i[n];if(a!==void 0)if(Array.isArray(a))do a=i[n],a!==void 0&&(t.push(i.time),e.push.apply(e,a)),i=s[r++];while(i!==void 0);else if(a.toArray!==void 0)do a=i[n],a!==void 0&&(t.push(i.time),a.toArray(e,e.length)),i=s[r++];while(i!==void 0);else do a=i[n],a!==void 0&&(t.push(i.time),e.push(a)),i=s[r++];while(i!==void 0)}class Yr{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,r=e[n],i=e[n-1];t:{e:{let a;n:{i:if(!(t<r)){for(let o=n+2;;){if(r===void 0){if(t<i)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(i=r,r=e[++n],t<r)break e}a=e.length;break n}if(!(t>=i)){const o=e[1];t<o&&(n=2,i=o);for(let l=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=i,i=e[--n-1],t>=i)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(r=e[n],i=e[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=t*r;for(let a=0;a!==r;++a)e[a]=n[i+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zp extends Yr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Si,endingEnd:Si}}intervalChanged_(t,e,n){const r=this.parameterPositions;let i=t-2,a=t+1,o=r[i],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case wi:i=t,o=2*e-n;break;case Dr:i=r.length-2,o=e+r[i]-r[i+1];break;default:i=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wi:a=t,l=2*n-e;break;case Dr:a=1,l=n+r[1]-r[0];break;default:a=t-1,l=e}const u=(n-e)*.5,h=this.valueSize;this._weightPrev=u/(e-o),this._weightNext=u/(l-n),this._offsetPrev=i*h,this._offsetNext=a*h}interpolate_(t,e,n,r){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,u=l-o,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-e)/(r-e),g=v*v,p=g*v,m=-d*p+2*d*g-d*v,_=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*v+1,y=(-1-f)*p+(1.5+f)*g+.5*v,x=f*p-f*g;for(let b=0;b!==o;++b)i[b]=m*a[h+b]+_*a[u+b]+y*a[l+b]+x*a[c+b];return i}}class fl extends Yr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,u=l-o,h=(n-e)/(r-e),c=1-h;for(let d=0;d!==o;++d)i[d]=a[u+d]*c+a[l+d]*h;return i}}class $p extends Yr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class fn{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Tr(e,this.TimeBufferType),this.values=Tr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Tr(t.times,Array),values:Tr(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $p(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zp(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ir:e=this.InterpolantFactoryMethodDiscrete;break;case Nr:e=this.InterpolantFactoryMethodLinear;break;case es:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return es}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){const n=this.times,r=n.length;let i=0,a=r-1;for(;i!==r&&n[i]<t;)++i;for(;a!==-1&&n[a]>e;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);const o=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,r=this.values,i=n.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==i;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(r!==void 0&&jp(r))for(let o=0,l=r.length;o!==l;++o){const u=r[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===es,i=t.length-1;let a=1;for(let o=1;o<i;++o){let l=!1;const u=t[o],h=t[o+1];if(u!==h&&(o!==1||u!==t[0]))if(r)l=!0;else{const c=o*n,d=c-n,f=c+n;for(let v=0;v!==n;++v){const g=e[c+v];if(g!==e[d+v]||g!==e[f+v]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const c=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[c+f]}++a}}if(i>0){t[a]=t[i];for(let o=i*n,l=a*n,u=0;u!==n;++u)e[l+u]=e[o+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Nr;class Fi extends fn{}Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Ir;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;class pl extends fn{}pl.prototype.ValueTypeName="color";class Vr extends fn{}Vr.prototype.ValueTypeName="number";class Qp extends Yr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(r-e);let u=t*o;for(let h=u+o;u!==h;u+=4)tn.slerpFlat(i,0,a,u-o,a,u,l);return i}}class er extends fn{InterpolantFactoryMethodLinear(t){return new Qp(this.times,this.values,this.getValueSize(),t)}}er.prototype.ValueTypeName="quaternion";er.prototype.DefaultInterpolation=Nr;er.prototype.InterpolantFactoryMethodSmooth=void 0;class Bi extends fn{}Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Ir;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends fn{}Hr.prototype.ValueTypeName="vector";class zs{constructor(t,e=-1,n,r=qs){this.name=t,this.tracks=n,this.duration=e,this.blendMode=r,this.uuid=ii(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,r=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(tm(n[a]).scale(r));const i=new this(t.name,t.duration,e,t.blendMode);return i.uuid=t.uuid,i}static toJSON(t){const e=[],n=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let i=0,a=n.length;i!==a;++i)e.push(fn.toJSON(n[i]));return r}static CreateFromMorphTargetSequence(t,e,n,r){const i=e.length,a=[];for(let o=0;o<i;o++){let l=[],u=[];l.push((o+i-1)%i,o,(o+1)%i),u.push(0,1,0);const h=Kp(l);l=bo(l,1,h),u=bo(u,1,h),!r&&l[0]===0&&(l.push(i),u.push(u[0])),a.push(new Vr(".morphTargetInfluences["+e[o].name+"]",l,u).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const r=t;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const r={},i=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const u=t[o],h=u.name.match(i);if(h&&h.length>1){const c=h[1];let d=r[c];d||(r[c]=d=[]),d.push(u)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,d,f,v,g){if(f.length!==0){const p=[],m=[];dl(f,p,m,v),p.length!==0&&g.push(new c(d,p,m))}},r=[],i=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const u=t.hierarchy||[];for(let c=0;c<u.length;c++){const d=u[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let g=0;g<d[v].morphTargets.length;g++)f[d[v].morphTargets[g]]=-1;for(const g in f){const p=[],m=[];for(let _=0;_!==d[v].morphTargets.length;++_){const y=d[v];p.push(y.time),m.push(y.morphTarget===g?1:0)}r.push(new Vr(".morphTargetInfluence["+g+"]",p,m))}l=f.length*a}else{const f=".bones["+e[c].name+"]";n(Hr,f+".position",d,"pos",r),n(er,f+".quaternion",d,"rot",r),n(Hr,f+".scale",d,"scl",r)}}return r.length===0?null:new this(i,l,r,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,r=t.length;n!==r;++n){const i=this.tracks[n];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vr;case"vector":case"vector2":case"vector3":case"vector4":return Hr;case"color":return pl;case"quaternion":return er;case"bool":case"boolean":return Fi;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function tm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Jp(s.type);if(s.times===void 0){const e=[],n=[];dl(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Gr={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class em{constructor(t,e,n){const r=this;let i=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,i===!1&&r.onStart!==void 0&&r.onStart(h,a,o),i=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,c){return u.push(h,c),this},this.removeHandler=function(h){const c=u.indexOf(h);return c!==-1&&u.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=u.length;c<d;c+=2){const f=u[c],v=u[c+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null}}}const nm=new em;class nr{constructor(t){this.manager=t!==void 0?t:nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,i){n.load(t,r,e,i)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}nr.DEFAULT_MATERIAL_NAME="__DEFAULT";const xn={};class im extends Error{constructor(t,e){super(t),this.response=e}}class rm extends nr{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const i=Gr.get(t);if(i!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(i),this.manager.itemEnd(t)},0),i;if(xn[t]!==void 0){xn[t].push({onLoad:e,onProgress:n,onError:r});return}xn[t]=[],xn[t].push({onLoad:e,onProgress:n,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=xn[t],c=u.body.getReader(),d=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),f=d?parseInt(d):0,v=f!==0;let g=0;const p=new ReadableStream({start(m){_();function _(){c.read().then(({done:y,value:x})=>{if(y)m.close();else{g+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let R=0,C=h.length;R<C;R++){const U=h[R];U.onProgress&&U.onProgress(b)}m.enqueue(x),_()}})}}});return new Response(p)}else throw new im(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return u.json();default:if(o===void 0)return u.text();{const c=/charset="?([^;"\s]*)"?/i.exec(o),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return u.arrayBuffer().then(v=>f.decode(v))}}}).then(u=>{Gr.add(t,u);const h=xn[t];delete xn[t];for(let c=0,d=h.length;c<d;c++){const f=h[c];f.onLoad&&f.onLoad(u)}}).catch(u=>{const h=xn[t];if(h===void 0)throw this.manager.itemError(t),u;delete xn[t];for(let c=0,d=h.length;c<d;c++){const f=h[c];f.onError&&f.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class sm extends nr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const i=this,a=Gr.get(t);if(a!==void 0)return i.manager.itemStart(t),setTimeout(function(){e&&e(a),i.manager.itemEnd(t)},0),a;const o=Zi("img");function l(){h(),Gr.add(t,this),e&&e(this),i.manager.itemEnd(t)}function u(c){h(),r&&r(c),i.manager.itemError(t),i.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(t),o.src=t,o}}class ml extends nr{constructor(t){super(t)}load(t,e,n,r){const i=new We,a=new sm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){i.image=o,i.needsUpdate=!0,e!==void 0&&e(i)},n,r),i}}class vl extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const bs=new Re,To=new nt,Ao=new nt;class am{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;To.setFromMatrixPosition(t.matrixWorld),e.position.copy(To),Ao.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ao),e.updateMatrixWorld(),bs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class om extends am{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lm extends vl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new om}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cm extends vl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class hm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ro(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ro();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ro(){return(typeof performance>"u"?Date:performance).now()}class um{constructor(t,e,n){this.binding=t,this.valueSize=n;let r,i,a;switch(e){case"quaternion":r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,r=this.valueSize,i=t*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[i+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,i,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,r,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,r=t*e+e,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){const l=e*this._origIndex;this._mixBufferRegion(n,r,l,1-i,e)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*e,1,e);for(let l=e,u=e+e;l!==u;++l)if(n[l]!==n[l+e]){o.setValue(n,r);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,r=n*this._origIndex;t.getValue(e,r);for(let i=n,a=r;i!==a;++i)e[i]=e[r+i%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,r,i){if(r>=.5)for(let a=0;a!==i;++a)t[e+a]=t[n+a]}_slerp(t,e,n,r){tn.slerpFlat(t,e,t,e,t,n,r)}_slerpAdditive(t,e,n,r,i){const a=this._workIndex*i;tn.multiplyQuaternionsFlat(t,a,t,e,t,n),tn.slerpFlat(t,e,t,e,t,a,r)}_lerp(t,e,n,r,i){const a=1-r;for(let o=0;o!==i;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*r}}_lerpAdditive(t,e,n,r,i){for(let a=0;a!==i;++a){const o=e+a;t[o]=t[o]+t[n+a]*r}}}const ta="\\[\\]\\.:\\/",dm=new RegExp("["+ta+"]","g"),ea="[^"+ta+"]",fm="[^"+ta.replace("\\.","")+"]",pm=/((?:WC+[\/:])*)/.source.replace("WC",ea),mm=/(WCOD+)?/.source.replace("WCOD",fm),vm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ea),gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ea),_m=new RegExp("^"+pm+mm+vm+gm+"$"),xm=["material","materials","bones","map"];class ym{constructor(t,e,n){const r=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ge{constructor(t,e,n){this.path=e,this.parsedPath=n||ge.parseTrackName(e),this.node=ge.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ge.Composite(t,e,n):new ge(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dm,"")}static parseTrackName(t){const e=_m.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const i=n.nodeName.substring(r+1);xm.indexOf(i)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=i)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(i){for(let a=0;a<i.length;a++){const o=i[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,r=e.propertyName;let i=e.propertyIndex;if(t||(t=ge.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const a=t[r];if(a===void 0){const u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(i!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[i]!==void 0&&(i=t.morphTargetDictionary[i])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=i}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ge.Composite=ym;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Mm{constructor(t,e,n=null,r=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=r;const i=e.tracks,a=i.length,o=new Array(a),l={endingStart:Si,endingEnd:Si};for(let u=0;u!==a;++u){const h=i[u].createInterpolant(null);o[u]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=cc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const r=this._clip.duration,i=t._clip.duration,a=i/r,o=r/i;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const r=this._mixer,i=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,u=o.sampleValues;return l[0]=i,l[1]=i+n,u[0]=t/a,u[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,r){if(!this.enabled){this._updateWeight(t);return}const i=this._startTime;if(i!==null){const l=(t-i)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case uc:for(let h=0,c=l.length;h!==c;++h)l[h].evaluate(a),u[h].accumulateAdditive(o);break;case qs:default:for(let h=0,c=l.length;h!==c;++h)l[h].evaluate(a),u[h].accumulate(r,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(t)[0];e*=r,t>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(t)[0];e*=r,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let r=this.time+t,i=this._loopCount;const a=n===hc;if(t===0)return i===-1?r:a&&(i&1)===1?e-r:r;if(n===lc){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(r>=e)r=e;else if(r<0)r=0;else{this.time=r;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(i===-1&&(t>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=e||r<0){const o=Math.floor(r/e);r-=e*o,i+=Math.abs(o);const l=this.repetitions-i;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=t>0?e:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const u=t<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(i&1)===1)return e-r}return r}_setEndings(t,e,n){const r=this._interpolantSettings;n?(r.endingStart=wi,r.endingEnd=wi):(t?r.endingStart=this.zeroSlopeAtStart?wi:Si:r.endingStart=Dr,e?r.endingEnd=this.zeroSlopeAtEnd?wi:Si:r.endingEnd=Dr)}_scheduleFading(t,e,n){const r=this._mixer,i=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=i,l[0]=e,o[1]=i+t,l[1]=n,this}}const Em=new Float32Array(1);class Sm extends Hn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,r=t._clip.tracks,i=r.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,u=this._bindingsByRootAndName;let h=u[l];h===void 0&&(h={},u[l]=h);for(let c=0;c!==i;++c){const d=r[c],f=d.name;let v=h[f];if(v!==void 0)++v.referenceCount,a[c]=v;else{if(v=a[c],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,l,f));continue}const g=e&&e._propertyBindings[c].binding.parsedPath;v=new um(ge.create(n,f,g),d.ValueTypeName,d.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,l,f),a[c]=v}o[c].resultBuffer=v.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,r=t._clip.uuid,i=this._actionsByClip[r];this._bindAction(t,i&&i.knownActions[0]),this._addInactiveAction(t,r,n)}const e=t._propertyBindings;for(let n=0,r=e.length;n!==r;++n){const i=e[n];i.useCount++===0&&(this._lendBinding(i),i.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,r=e.length;n!==r;++n){const i=e[n];--i.useCount===0&&(i.restoreOriginalState(),this._takeBackBinding(i))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const r=this._actions,i=this._actionsByClip;let a=i[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,i[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=r.length,r.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],r=t._cacheIndex;n._cacheIndex=r,e[r]=n,e.pop(),t._cacheIndex=null;const i=t._clip.uuid,a=this._actionsByClip,o=a[i],l=o.knownActions,u=l[l.length-1],h=t._byClipCacheIndex;u._byClipCacheIndex=h,l[h]=u,l.pop(),t._byClipCacheIndex=null;const c=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete c[d],l.length===0&&delete a[i],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,r=e.length;n!==r;++n){const i=e[n];--i.referenceCount===0&&this._removeInactiveBinding(i)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,r=this._nActiveActions++,i=e[r];t._cacheIndex=r,e[r]=t,i._cacheIndex=n,e[n]=i}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,r=--this._nActiveActions,i=e[r];t._cacheIndex=r,e[r]=t,i._cacheIndex=n,e[n]=i}_addInactiveBinding(t,e,n){const r=this._bindingsByRootAndName,i=this._bindings;let a=r[e];a===void 0&&(a={},r[e]=a),a[n]=t,t._cacheIndex=i.length,i.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],l=e[e.length-1],u=t._cacheIndex;l._cacheIndex=u,e[u]=l,e.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,r=this._nActiveBindings++,i=e[r];t._cacheIndex=r,e[r]=t,i._cacheIndex=n,e[n]=i}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,r=--this._nActiveBindings,i=e[r];t._cacheIndex=r,e[r]=t,i._cacheIndex=n,e[n]=i}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new fl(new Float32Array(2),new Float32Array(2),1,Em),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,r=--this._nActiveControlInterpolants,i=e[r];t.__cacheIndex=r,e[r]=t,i.__cacheIndex=n,e[n]=i}clipAction(t,e,n){const r=e||this._root,i=r.uuid;let a=typeof t=="string"?zs.findByName(r,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=qs),l!==void 0){const c=l.actionByRoot[i];if(c!==void 0&&c.blendMode===n)return c;u=l.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;const h=new Mm(this,a,e,n);return this._bindAction(h,u),this._addInactiveAction(h,o,i),h}existingAction(t,e){const n=e||this._root,r=n.uuid,i=typeof t=="string"?zs.findByName(n,t):t,a=i?i.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,r=this.time+=t,i=Math.sign(t),a=this._accuIndex^=1;for(let u=0;u!==n;++u)e[u]._update(r,t,i,a);const o=this._bindings,l=this._nActiveBindings;for(let u=0;u!==l;++u)o[u].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){const a=i.knownActions;for(let o=0,l=a.length;o!==l;++o){const u=a[o];this._deactivateAction(u);const h=u._cacheIndex,c=e[e.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,c._cacheIndex=h,e[h]=c,e.pop(),this._removeInactiveBindingsForAction(u)}delete r[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,i=r[e];if(i!==void 0)for(const a in i){const o=i[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class wm{constructor(t,e,n=0,r=1/0){this.ray=new Zs(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Vs(t,this,n,e),n.sort(Co),n}intersectObjects(t,e=!0,n=[]){for(let r=0,i=t.length;r<i;r++)Vs(t[r],this,n,e);return n.sort(Co),n}}function Co(s,t){return s.distance-t.distance}function Vs(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const r=s.children;for(let i=0,a=r.length;i<a;i++)Vs(r[i],t,e,!0)}}class Po{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gs);var qi=function(){var s=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(h){h.preventDefault(),n(++s%t.children.length)},!1);function e(h){return t.appendChild(h.dom),h}function n(h){for(var c=0;c<t.children.length;c++)t.children[c].style.display=c===h?"block":"none";s=h}var r=(performance||Date).now(),i=r,a=0,o=e(new qi.Panel("FPS","#0ff","#002")),l=e(new qi.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=e(new qi.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){a++;var h=(performance||Date).now();if(l.update(h-r,200),h>=i+1e3&&(o.update(a*1e3/(h-i),100),i=h,a=0,u)){var c=performance.memory;u.update(c.usedJSHeapSize/1048576,c.jsHeapSizeLimit/1048576)}return h},update:function(){r=this.end()},domElement:t,setMode:n}};qi.Panel=function(s,t,e){var n=1/0,r=0,i=Math.round,a=i(window.devicePixelRatio||1),o=80*a,l=48*a,u=3*a,h=2*a,c=3*a,d=15*a,f=74*a,v=30*a,g=document.createElement("canvas");g.width=o,g.height=l,g.style.cssText="width:80px;height:48px";var p=g.getContext("2d");return p.font="bold "+9*a+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=e,p.fillRect(0,0,o,l),p.fillStyle=t,p.fillText(s,u,h),p.fillRect(c,d,f,v),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(c,d,f,v),{dom:g,update:function(m,_){n=Math.min(n,m),r=Math.max(r,m),p.fillStyle=e,p.globalAlpha=1,p.fillRect(0,0,o,d),p.fillStyle=t,p.fillText(i(m)+" "+s+" ("+i(n)+"-"+i(r)+")",u,h),p.drawImage(g,c+a,d,f-a,v,c,d,f-a,v),p.fillRect(c+f-a,d,a,v),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(c+f-a,d,a,i((1-m/_)*v))}}};const bm=[[-.525731,0,.850651],[-.442863,.238856,.864188],[-.295242,0,.955423],[-.309017,.5,.809017],[-.16246,.262866,.951056],[0,0,1],[0,.850651,.525731],[-.147621,.716567,.681718],[.147621,.716567,.681718],[0,.525731,.850651],[.309017,.5,.809017],[.525731,0,.850651],[.295242,0,.955423],[.442863,.238856,.864188],[.16246,.262866,.951056],[-.681718,.147621,.716567],[-.809017,.309017,.5],[-.587785,.425325,.688191],[-.850651,.525731,0],[-.864188,.442863,.238856],[-.716567,.681718,.147621],[-.688191,.587785,.425325],[-.5,.809017,.309017],[-.238856,.864188,.442863],[-.425325,.688191,.587785],[-.716567,.681718,-.147621],[-.5,.809017,-.309017],[-.525731,.850651,0],[0,.850651,-.525731],[-.238856,.864188,-.442863],[0,.955423,-.295242],[-.262866,.951056,-.16246],[0,1,0],[0,.955423,.295242],[-.262866,.951056,.16246],[.238856,.864188,.442863],[.262866,.951056,.16246],[.5,.809017,.309017],[.238856,.864188,-.442863],[.262866,.951056,-.16246],[.5,.809017,-.309017],[.850651,.525731,0],[.716567,.681718,.147621],[.716567,.681718,-.147621],[.525731,.850651,0],[.425325,.688191,.587785],[.864188,.442863,.238856],[.688191,.587785,.425325],[.809017,.309017,.5],[.681718,.147621,.716567],[.587785,.425325,.688191],[.955423,.295242,0],[1,0,0],[.951056,.16246,.262866],[.850651,-.525731,0],[.955423,-.295242,0],[.864188,-.442863,.238856],[.951056,-.16246,.262866],[.809017,-.309017,.5],[.681718,-.147621,.716567],[.850651,0,.525731],[.864188,.442863,-.238856],[.809017,.309017,-.5],[.951056,.16246,-.262866],[.525731,0,-.850651],[.681718,.147621,-.716567],[.681718,-.147621,-.716567],[.850651,0,-.525731],[.809017,-.309017,-.5],[.864188,-.442863,-.238856],[.951056,-.16246,-.262866],[.147621,.716567,-.681718],[.309017,.5,-.809017],[.425325,.688191,-.587785],[.442863,.238856,-.864188],[.587785,.425325,-.688191],[.688191,.587785,-.425325],[-.147621,.716567,-.681718],[-.309017,.5,-.809017],[0,.525731,-.850651],[-.525731,0,-.850651],[-.442863,.238856,-.864188],[-.295242,0,-.955423],[-.16246,.262866,-.951056],[0,0,-1],[.295242,0,-.955423],[.16246,.262866,-.951056],[-.442863,-.238856,-.864188],[-.309017,-.5,-.809017],[-.16246,-.262866,-.951056],[0,-.850651,-.525731],[-.147621,-.716567,-.681718],[.147621,-.716567,-.681718],[0,-.525731,-.850651],[.309017,-.5,-.809017],[.442863,-.238856,-.864188],[.16246,-.262866,-.951056],[.238856,-.864188,-.442863],[.5,-.809017,-.309017],[.425325,-.688191,-.587785],[.716567,-.681718,-.147621],[.688191,-.587785,-.425325],[.587785,-.425325,-.688191],[0,-.955423,-.295242],[0,-1,0],[.262866,-.951056,-.16246],[0,-.850651,.525731],[0,-.955423,.295242],[.238856,-.864188,.442863],[.262866,-.951056,.16246],[.5,-.809017,.309017],[.716567,-.681718,.147621],[.525731,-.850651,0],[-.238856,-.864188,-.442863],[-.5,-.809017,-.309017],[-.262866,-.951056,-.16246],[-.850651,-.525731,0],[-.716567,-.681718,-.147621],[-.716567,-.681718,.147621],[-.525731,-.850651,0],[-.5,-.809017,.309017],[-.238856,-.864188,.442863],[-.262866,-.951056,.16246],[-.864188,-.442863,.238856],[-.809017,-.309017,.5],[-.688191,-.587785,.425325],[-.681718,-.147621,.716567],[-.442863,-.238856,.864188],[-.587785,-.425325,.688191],[-.309017,-.5,.809017],[-.147621,-.716567,.681718],[-.425325,-.688191,.587785],[-.16246,-.262866,.951056],[.442863,-.238856,.864188],[.16246,-.262866,.951056],[.309017,-.5,.809017],[.147621,-.716567,.681718],[0,-.525731,.850651],[.425325,-.688191,.587785],[.587785,-.425325,.688191],[.688191,-.587785,.425325],[-.955423,.295242,0],[-.951056,.16246,.262866],[-1,0,0],[-.850651,0,.525731],[-.955423,-.295242,0],[-.951056,-.16246,.262866],[-.864188,.442863,-.238856],[-.951056,.16246,-.262866],[-.809017,.309017,-.5],[-.864188,-.442863,-.238856],[-.951056,-.16246,-.262866],[-.809017,-.309017,-.5],[-.681718,.147621,-.716567],[-.681718,-.147621,-.716567],[-.850651,0,-.525731],[-.688191,.587785,-.425325],[-.587785,.425325,-.688191],[-.425325,.688191,-.587785],[-.425325,-.688191,-.587785],[-.587785,-.425325,-.688191],[-.688191,-.587785,-.425325]];class Tm extends nr{constructor(t){super(t)}load(t,e,n,r){const i=this,a=new rm(i.manager);a.setPath(i.path),a.setResponseType("arraybuffer"),a.setRequestHeader(i.requestHeader),a.setWithCredentials(i.withCredentials),a.load(t,function(o){try{e(i.parse(o))}catch(l){r?r(l):console.error(l),i.manager.itemError(t)}},n,r)}parse(t){const e=new DataView(t),n={},r=["ident","version","skinwidth","skinheight","framesize","num_skins","num_vertices","num_st","num_tris","num_glcmds","num_frames","offset_skins","offset_st","offset_tris","offset_frames","offset_glcmds","offset_end"];for(let x=0;x<r.length;x++)n[r[x]]=e.getInt32(x*4,!0);if(n.ident!==844121161||n.version!==8){console.error("Not a valid MD2 file");return}if(n.offset_end!==e.byteLength){console.error("Corrupted MD2 file");return}const i=new Tn,a=[];let o=n.offset_st;for(let x=0,b=n.num_st;x<b;x++){const R=e.getInt16(o+0,!0),C=e.getInt16(o+2,!0);a.push(R/n.skinwidth,1-C/n.skinheight),o+=4}o=n.offset_tris;const l=[],u=[];for(let x=0,b=n.num_tris;x<b;x++)l.push(e.getUint16(o+0,!0),e.getUint16(o+2,!0),e.getUint16(o+4,!0)),u.push(e.getUint16(o+6,!0),e.getUint16(o+8,!0),e.getUint16(o+10,!0)),o+=12;const h=new nt,c=new nt,d=[];o=n.offset_frames;for(let x=0,b=n.num_frames;x<b;x++){c.set(e.getFloat32(o+0,!0),e.getFloat32(o+4,!0),e.getFloat32(o+8,!0)),h.set(e.getFloat32(o+12,!0),e.getFloat32(o+16,!0),e.getFloat32(o+20,!0)),o+=24;const R=[];for(let U=0;U<16;U++){const K=e.getUint8(o+U);if(K===0)break;R[U]=K}const C={name:String.fromCharCode.apply(null,R),vertices:[],normals:[]};o+=16;for(let U=0;U<n.num_vertices;U++){let K=e.getUint8(o++),M=e.getUint8(o++),E=e.getUint8(o++);const B=bm[e.getUint8(o++)];K=K*c.x+h.x,M=M*c.y+h.y,E=E*c.z+h.z,C.vertices.push(K,E,M),C.normals.push(B[0],B[2],B[1])}d.push(C)}const f=[],v=[],g=[],p=d[0].vertices,m=d[0].normals;for(let x=0,b=l.length;x<b;x++){let C=l[x]*3;const U=p[C],K=p[C+1],M=p[C+2];f.push(U,K,M);const E=m[C],B=m[C+1],H=m[C+2];v.push(E,B,H),C=u[x]*2;const G=a[C],Z=a[C+1];g.push(G,Z)}i.setAttribute("position",new Je(f,3)),i.setAttribute("normal",new Je(v,3)),i.setAttribute("uv",new Je(g,2));const _=[],y=[];for(let x=0,b=d.length;x<b;x++){const R=d[x],C=R.name;if(R.vertices.length>0){const U=[];for(let M=0,E=l.length;M<E;M++){const H=l[M]*3,I=R.vertices[H],G=R.vertices[H+1],Z=R.vertices[H+2];U.push(I,G,Z)}const K=new Je(U,3);K.name=C,_.push(K)}if(R.normals.length>0){const U=[];for(let M=0,E=l.length;M<E;M++){const H=l[M]*3,I=R.normals[H],G=R.normals[H+1],Z=R.normals[H+2];U.push(I,G,Z)}const K=new Je(U,3);K.name=C,y.push(K)}}return i.morphAttributes.position=_,i.morphAttributes.normal=y,i.morphTargetsRelative=!1,i.animations=zs.CreateClipsFromMorphTargetSequences(d,10),i}}class Am{constructor(){this.scale=1,this.animationFPS=6,this.root=new Ue,this.meshBody=null,this.meshWeapon=null,this.skinsBody=[],this.skinsWeapon=[],this.weapons=[],this.activeAnimation=null,this.mixer=null,this.onLoadComplete=function(){},this.loadCounter=0}loadParts(t){const e=this;function n(u,h){const c=new Os({color:16755200,wireframe:!0}),d=new Os({color:16777215,wireframe:!1,map:h}),f=new ln(u,d);return f.rotation.y=-Math.PI/2,f.castShadow=!0,f.receiveShadow=!0,f.materialTexture=d,f.materialWireframe=c,f}function r(u,h){const c=new ml,d=[];for(let f=0;f<h.length;f++)d[f]=c.load(u+h[f],i),d[f].mapping=ks,d[f].name=h[f],d[f].colorSpace=Ce;return d}function i(){e.loadCounter-=1,e.loadCounter===0&&e.onLoadComplete()}this.loadCounter=t.weapons.length*2+t.skins.length+1;const a=[];for(let u=0;u<t.weapons.length;u++)a[u]=t.weapons[u][1];this.skinsBody=r(t.baseUrl+"skins/",t.skins),this.skinsWeapon=r(t.baseUrl+"skins/",a);const o=new Tm;o.load(t.baseUrl+t.body,function(u){const h=new Di;h.setFromBufferAttribute(u.attributes.position),e.root.position.y=-e.scale*h.min.y;const c=n(u,e.skinsBody[0]);c.scale.set(e.scale,e.scale,e.scale),e.root.add(c),e.meshBody=c,e.meshBody.clipOffset=0,e.activeAnimationClipName=c.geometry.animations[0].name,e.mixer=new Sm(c),i()});const l=function(u,h){return function(c){const d=n(c,e.skinsWeapon[u]);d.scale.set(e.scale,e.scale,e.scale),d.visible=!1,d.name=h,e.root.add(d),e.weapons[u]=d,e.meshWeapon=d,i()}};for(let u=0;u<t.weapons.length;u++)o.load(t.baseUrl+t.weapons[u][0],l(u,t.weapons[u][0]))}setPlaybackRate(t){t!==0?this.mixer.timeScale=1/t:this.mixer.timeScale=0}setWireframe(t){t?(this.meshBody&&(this.meshBody.material=this.meshBody.materialWireframe),this.meshWeapon&&(this.meshWeapon.material=this.meshWeapon.materialWireframe)):(this.meshBody&&(this.meshBody.material=this.meshBody.materialTexture),this.meshWeapon&&(this.meshWeapon.material=this.meshWeapon.materialTexture))}setSkin(t){this.meshBody&&this.meshBody.material.wireframe===!1&&(this.meshBody.material.map=this.skinsBody[t])}setWeapon(t){for(let n=0;n<this.weapons.length;n++)this.weapons[n].visible=!1;const e=this.weapons[t];e&&(e.visible=!0,this.meshWeapon=e,this.syncWeaponAnimation())}setAnimation(t){if(this.meshBody){this.meshBody.activeAction&&(this.meshBody.activeAction.stop(),this.meshBody.activeAction=null);const e=this.mixer.clipAction(t,this.meshBody);e&&(this.meshBody.activeAction=e.play())}this.activeClipName=t,this.syncWeaponAnimation()}syncWeaponAnimation(){const t=this.activeClipName;if(this.meshWeapon){this.meshWeapon.activeAction&&(this.meshWeapon.activeAction.stop(),this.meshWeapon.activeAction=null);const e=this.mixer.clipAction(t,this.meshWeapon);e&&(this.meshWeapon.activeAction=e.syncWith(this.meshBody.activeAction).play())}}update(t){this.mixer&&this.mixer.update(t)}}const Lo={type:"change"},Ts={type:"start"},Io={type:"end"},Ar=new Zs,No=new Dn,Rm=Math.cos(70*Fc.DEG2RAD);class Cm extends Hn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ri.ROTATE,MIDDLE:ri.DOLLY,RIGHT:ri.PAN},this.touches={ONE:si.ROTATE,TWO:si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Ht),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ht),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Lo),n.update(),i=r.NONE},this.update=function(){const O=new nt,Mt=new tn().setFromUnitVectors(t.up,new nt(0,1,0)),Lt=Mt.clone().invert(),Xt=new nt,D=new tn,gt=new nt,yt=2*Math.PI;return function(Kt=null){const le=n.object.position;O.copy(le).sub(n.target),O.applyQuaternion(Mt),o.setFromVector3(O),n.autoRotate&&i===r.NONE&&B(M(Kt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let se=n.minAzimuthAngle,ie=n.maxAzimuthAngle;isFinite(se)&&isFinite(ie)&&(se<-Math.PI?se+=yt:se>Math.PI&&(se-=yt),ie<-Math.PI?ie+=yt:ie>Math.PI&&(ie-=yt),se<=ie?o.theta=Math.max(se,Math.min(ie,o.theta)):o.theta=o.theta>(se+ie)/2?Math.max(se,o.theta):Math.min(ie,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?o.radius=j(o.radius):o.radius=j(o.radius*u),O.setFromSpherical(o),O.applyQuaternion(Lt),le.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ct=!1;if(n.zoomToCursor&&R){let lt=null;if(n.object.isPerspectiveCamera){const ft=O.length();lt=j(ft*u);const vt=ft-lt;n.object.position.addScaledVector(x,vt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ft=new nt(b.x,b.y,0);ft.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),ct=!0;const vt=new nt(b.x,b.y,0);vt.unproject(n.object),n.object.position.sub(vt).add(ft),n.object.updateMatrixWorld(),lt=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(lt).add(n.object.position):(Ar.origin.copy(n.object.position),Ar.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ar.direction))<Rm?t.lookAt(n.target):(No.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ar.intersectPlane(No,n.target))))}else n.object.isOrthographicCamera&&(ct=u!==1,ct&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix()));return u=1,R=!1,ct||Xt.distanceToSquared(n.object.position)>a||8*(1-D.dot(n.object.quaternion))>a||gt.distanceToSquared(n.target)>0?(n.dispatchEvent(Lo),Xt.copy(n.object.position),D.copy(n.object.quaternion),gt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ae),n.domElement.removeEventListener("pointerdown",P),n.domElement.removeEventListener("pointercancel",tt),n.domElement.removeEventListener("wheel",mt),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",tt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ht),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=r.NONE;const a=1e-6,o=new Po,l=new Po;let u=1;const h=new nt,c=new re,d=new re,f=new re,v=new re,g=new re,p=new re,m=new re,_=new re,y=new re,x=new nt,b=new re;let R=!1;const C=[],U={};let K=!1;function M(O){return O!==null?2*Math.PI/60*n.autoRotateSpeed*O:2*Math.PI/60/60*n.autoRotateSpeed}function E(O){const Mt=Math.abs(O*.01);return Math.pow(.95,n.zoomSpeed*Mt)}function B(O){l.theta-=O}function H(O){l.phi-=O}const I=function(){const O=new nt;return function(Lt,Xt){O.setFromMatrixColumn(Xt,0),O.multiplyScalar(-Lt),h.add(O)}}(),G=function(){const O=new nt;return function(Lt,Xt){n.screenSpacePanning===!0?O.setFromMatrixColumn(Xt,1):(O.setFromMatrixColumn(Xt,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(Lt),h.add(O)}}(),Z=function(){const O=new nt;return function(Lt,Xt){const D=n.domElement;if(n.object.isPerspectiveCamera){const gt=n.object.position;O.copy(gt).sub(n.target);let yt=O.length();yt*=Math.tan(n.object.fov/2*Math.PI/180),I(2*Lt*yt/D.clientHeight,n.object.matrix),G(2*Xt*yt/D.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(Lt*(n.object.right-n.object.left)/n.object.zoom/D.clientWidth,n.object.matrix),G(Xt*(n.object.top-n.object.bottom)/n.object.zoom/D.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(O,Mt){if(!n.zoomToCursor)return;R=!0;const Lt=n.domElement.getBoundingClientRect(),Xt=O-Lt.left,D=Mt-Lt.top,gt=Lt.width,yt=Lt.height;b.x=Xt/gt*2-1,b.y=-(D/yt)*2+1,x.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(O){return Math.max(n.minDistance,Math.min(n.maxDistance,O))}function L(O){c.set(O.clientX,O.clientY)}function Y(O){$(O.clientX,O.clientX),m.set(O.clientX,O.clientY)}function F(O){v.set(O.clientX,O.clientY)}function T(O){d.set(O.clientX,O.clientY),f.subVectors(d,c).multiplyScalar(n.rotateSpeed);const Mt=n.domElement;B(2*Math.PI*f.x/Mt.clientHeight),H(2*Math.PI*f.y/Mt.clientHeight),c.copy(d),n.update()}function A(O){_.set(O.clientX,O.clientY),y.subVectors(_,m),y.y>0?z(E(y.y)):y.y<0&&N(E(y.y)),m.copy(_),n.update()}function X(O){g.set(O.clientX,O.clientY),p.subVectors(g,v).multiplyScalar(n.panSpeed),Z(p.x,p.y),v.copy(g),n.update()}function it(O){$(O.clientX,O.clientY),O.deltaY<0?N(E(O.deltaY)):O.deltaY>0&&z(E(O.deltaY)),n.update()}function et(O){let Mt=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,n.keyPanSpeed),Mt=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,-n.keyPanSpeed),Mt=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(n.keyPanSpeed,0),Mt=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(-n.keyPanSpeed,0),Mt=!0;break}Mt&&(O.preventDefault(),n.update())}function q(O){if(C.length===1)c.set(O.pageX,O.pageY);else{const Mt=Vt(O),Lt=.5*(O.pageX+Mt.x),Xt=.5*(O.pageY+Mt.y);c.set(Lt,Xt)}}function at(O){if(C.length===1)v.set(O.pageX,O.pageY);else{const Mt=Vt(O),Lt=.5*(O.pageX+Mt.x),Xt=.5*(O.pageY+Mt.y);v.set(Lt,Xt)}}function ht(O){const Mt=Vt(O),Lt=O.pageX-Mt.x,Xt=O.pageY-Mt.y,D=Math.sqrt(Lt*Lt+Xt*Xt);m.set(0,D)}function W(O){n.enableZoom&&ht(O),n.enablePan&&at(O)}function Ct(O){n.enableZoom&&ht(O),n.enableRotate&&q(O)}function dt(O){if(C.length==1)d.set(O.pageX,O.pageY);else{const Lt=Vt(O),Xt=.5*(O.pageX+Lt.x),D=.5*(O.pageY+Lt.y);d.set(Xt,D)}f.subVectors(d,c).multiplyScalar(n.rotateSpeed);const Mt=n.domElement;B(2*Math.PI*f.x/Mt.clientHeight),H(2*Math.PI*f.y/Mt.clientHeight),c.copy(d)}function rt(O){if(C.length===1)g.set(O.pageX,O.pageY);else{const Mt=Vt(O),Lt=.5*(O.pageX+Mt.x),Xt=.5*(O.pageY+Mt.y);g.set(Lt,Xt)}p.subVectors(g,v).multiplyScalar(n.panSpeed),Z(p.x,p.y),v.copy(g)}function ot(O){const Mt=Vt(O),Lt=O.pageX-Mt.x,Xt=O.pageY-Mt.y,D=Math.sqrt(Lt*Lt+Xt*Xt);_.set(0,D),y.set(0,Math.pow(_.y/m.y,n.zoomSpeed)),z(y.y),m.copy(_);const gt=(O.pageX+Mt.x)*.5,yt=(O.pageY+Mt.y)*.5;$(gt,yt)}function jt(O){n.enableZoom&&ot(O),n.enablePan&&rt(O)}function bt(O){n.enableZoom&&ot(O),n.enableRotate&&dt(O)}function P(O){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",tt)),ne(O),O.pointerType==="touch"?$t(O):pt(O))}function S(O){n.enabled!==!1&&(O.pointerType==="touch"?xt(O):ut(O))}function tt(O){switch(Zt(O),C.length){case 0:n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",tt),n.dispatchEvent(Io),i=r.NONE;break;case 1:const Mt=C[0],Lt=U[Mt];$t({pointerId:Mt,pageX:Lt.x,pageY:Lt.y});break}}function pt(O){let Mt;switch(O.button){case 0:Mt=n.mouseButtons.LEFT;break;case 1:Mt=n.mouseButtons.MIDDLE;break;case 2:Mt=n.mouseButtons.RIGHT;break;default:Mt=-1}switch(Mt){case ri.DOLLY:if(n.enableZoom===!1)return;Y(O),i=r.DOLLY;break;case ri.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;F(O),i=r.PAN}else{if(n.enableRotate===!1)return;L(O),i=r.ROTATE}break;case ri.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;L(O),i=r.ROTATE}else{if(n.enablePan===!1)return;F(O),i=r.PAN}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(Ts)}function ut(O){switch(i){case r.ROTATE:if(n.enableRotate===!1)return;T(O);break;case r.DOLLY:if(n.enableZoom===!1)return;A(O);break;case r.PAN:if(n.enablePan===!1)return;X(O);break}}function mt(O){n.enabled===!1||n.enableZoom===!1||i!==r.NONE||(O.preventDefault(),n.dispatchEvent(Ts),it(wt(O)),n.dispatchEvent(Io))}function wt(O){const Mt=O.deltaMode,Lt={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(Mt){case 1:Lt.deltaY*=16;break;case 2:Lt.deltaY*=100;break}return O.ctrlKey&&!K&&(Lt.deltaY*=10),Lt}function Et(O){O.key==="Control"&&(K=!0,n.domElement.getRootNode().addEventListener("keyup",St,{passive:!0,capture:!0}))}function St(O){O.key==="Control"&&(K=!1,n.domElement.getRootNode().removeEventListener("keyup",St,{passive:!0,capture:!0}))}function Ht(O){n.enabled===!1||n.enablePan===!1||et(O)}function $t(O){switch(Wt(O),C.length){case 1:switch(n.touches.ONE){case si.ROTATE:if(n.enableRotate===!1)return;q(O),i=r.TOUCH_ROTATE;break;case si.PAN:if(n.enablePan===!1)return;at(O),i=r.TOUCH_PAN;break;default:i=r.NONE}break;case 2:switch(n.touches.TWO){case si.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;W(O),i=r.TOUCH_DOLLY_PAN;break;case si.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ct(O),i=r.TOUCH_DOLLY_ROTATE;break;default:i=r.NONE}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(Ts)}function xt(O){switch(Wt(O),i){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;dt(O),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;rt(O),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;jt(O),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;bt(O),n.update();break;default:i=r.NONE}}function ae(O){n.enabled!==!1&&O.preventDefault()}function ne(O){C.push(O.pointerId)}function Zt(O){delete U[O.pointerId];for(let Mt=0;Mt<C.length;Mt++)if(C[Mt]==O.pointerId){C.splice(Mt,1);return}}function Wt(O){let Mt=U[O.pointerId];Mt===void 0&&(Mt=new re,U[O.pointerId]=Mt),Mt.set(O.pageX,O.pageY)}function Vt(O){const Mt=O.pointerId===C[0]?C[1]:C[0];return U[Mt]}n.domElement.addEventListener("contextmenu",ae),n.domElement.addEventListener("pointerdown",P),n.domElement.addEventListener("pointercancel",tt),n.domElement.addEventListener("wheel",mt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Et,{passive:!0,capture:!0}),this.update()}}function Pm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function Rr(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var gl={exports:{}};(function(s,t){(function(e){s.exports=e()})(function(){return function e(n,r,i){function a(u,h){if(!r[u]){if(!n[u]){var c=typeof Rr=="function"&&Rr;if(!h&&c)return c(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var d=r[u]={exports:{}};n[u][0].call(d.exports,function(f){var v=n[u][1][f];return a(v||f)},d,d.exports,e,n,r,i)}return r[u].exports}for(var o=typeof Rr=="function"&&Rr,l=0;l<i.length;l++)a(i[l]);return a}({1:[function(e,n,r){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,r){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,r){var i=e("../math/Vec3");e("../utils/Utils"),n.exports=a;function a(u){u=u||{},this.lowerBound=new i,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new i,u.upperBound&&this.upperBound.copy(u.upperBound)}var o=new i;a.prototype.setFromPoints=function(u,h,c,d){var f=this.lowerBound,v=this.upperBound,g=c;f.copy(u[0]),g&&g.vmult(f,f),v.copy(f);for(var p=1;p<u.length;p++){var m=u[p];g&&(g.vmult(m,o),m=o),m.x>v.x&&(v.x=m.x),m.x<f.x&&(f.x=m.x),m.y>v.y&&(v.y=m.y),m.y<f.y&&(f.y=m.y),m.z>v.z&&(v.z=m.z),m.z<f.z&&(f.z=m.z)}return h&&(h.vadd(f,f),h.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},a.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(u){var h=u.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var c=u.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var h=u.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var c=u.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var h=u.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var c=u.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},a.prototype.overlaps=function(u){var h=this.lowerBound,c=this.upperBound,d=u.lowerBound,f=u.upperBound;return(d.x<=c.x&&c.x<=f.x||h.x<=f.x&&f.x<=c.x)&&(d.y<=c.y&&c.y<=f.y||h.y<=f.y&&f.y<=c.y)&&(d.z<=c.z&&c.z<=f.z||h.z<=f.z&&f.z<=c.z)},a.prototype.contains=function(u){var h=this.lowerBound,c=this.upperBound,d=u.lowerBound,f=u.upperBound;return h.x<=d.x&&c.x>=f.x&&h.y<=d.y&&c.y>=f.y&&h.z<=d.z&&c.z>=f.z},a.prototype.getCorners=function(u,h,c,d,f,v,g,p){var m=this.lowerBound,_=this.upperBound;u.copy(m),h.set(_.x,m.y,m.z),c.set(_.x,_.y,m.z),d.set(m.x,_.y,_.z),f.set(_.x,m.y,m.z),v.set(m.x,_.y,m.z),g.set(m.x,m.y,_.z),p.copy(_)};var l=[new i,new i,new i,new i,new i,new i,new i,new i];a.prototype.toLocalFrame=function(u,h){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],p=c[4],m=c[5],_=c[6],y=c[7];this.getCorners(d,f,v,g,p,m,_,y);for(var x=0;x!==8;x++){var b=c[x];u.pointToLocal(b,b)}return h.setFromPoints(c)},a.prototype.toWorldFrame=function(u,h){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],p=c[4],m=c[5],_=c[6],y=c[7];this.getCorners(d,f,v,g,p,m,_,y);for(var x=0;x!==8;x++){var b=c[x];u.pointToWorld(b,b)}return h.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,r){n.exports=i;function i(){this.matrix=[]}i.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var l=o;o=a,a=l}return this.matrix[(a*(a+1)>>1)+o-1]},i.prototype.set=function(a,o,l){if(a=a.index,o=o.index,o>a){var u=o;o=a,a=u}this.matrix[(a*(a+1)>>1)+o-1]=l?1:0},i.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},i.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(e,n,r){var i=e("../objects/Body"),a=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,p,m){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=i.STATIC|i.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,p){return!(!(g.collisionFilterGroup&p.collisionFilterMask)||!(p.collisionFilterGroup&g.collisionFilterMask)||(g.type&u||g.sleepState===i.SLEEPING)&&(p.type&u||p.sleepState===i.SLEEPING))},l.prototype.intersectionTest=function(g,p,m,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,p,m,_):this.doBoundingSphereBroadphase(g,p,m,_)};var h=new a;new a,new o,new a,l.prototype.doBoundingSphereBroadphase=function(g,p,m,_){var y=h;p.position.vsub(g.position,y);var x=Math.pow(g.boundingRadius+p.boundingRadius,2),b=y.norm2();b<x&&(m.push(g),_.push(p))},l.prototype.doBoundingBoxBroadphase=function(g,p,m,_){g.aabbNeedsUpdate&&g.computeAABB(),p.aabbNeedsUpdate&&p.computeAABB(),g.aabb.overlaps(p.aabb)&&(m.push(g),_.push(p))};var c={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,p){for(var m=c,_=d,y=f,x=g.length,b=0;b!==x;b++)_[b]=g[b],y[b]=p[b];g.length=0,p.length=0;for(var b=0;b!==x;b++){var R=_[b].id,C=y[b].id,U=R<C?R+","+C:C+","+R;m[U]=b,m.keys.push(U)}for(var b=0;b!==m.keys.length;b++){var U=m.keys.pop(),K=m[U];g.push(_[K]),p.push(y[K]),delete m[U]}},l.prototype.setWorld=function(g){};var v=new a;l.boundingSphereCheck=function(g,p){var m=v;return g.position.vsub(p.position,m),Math.pow(g.shape.boundingSphereRadius+p.shape.boundingSphereRadius,2)>m.norm2()},l.prototype.aabbQuery=function(g,p,m){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,r){n.exports=l;var i=e("./Broadphase"),a=e("../math/Vec3"),o=e("../shapes/Shape");function l(h,c,d,f,v){i.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=h||new a(100,100,100),this.aabbMax=c||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var p=0;p<g;p++)this.bins[p]=[],this.binLengths[p]=0}l.prototype=new i,l.prototype.constructor=l;var u=new a;new a,l.prototype.collisionPairs=function(h,c,d){var f=h.numObjects(),v=h.bodies,it=this.aabbMax,X=this.aabbMin,g=this.nx,p=this.ny,m=this.nz,_=p*m,y=m,x=1,b=it.x,R=it.y,C=it.z,U=X.x,K=X.y,M=X.z,E=g/(b-U),B=p/(R-K),H=m/(C-M),I=(b-U)/g,G=(R-K)/p,Z=(C-M)/m,z=Math.sqrt(I*I+G*G+Z*Z)*.5,N=o.types,$=N.SPHERE,j=N.PLANE;N.BOX,N.COMPOUND,N.CONVEXPOLYHEDRON;for(var L=this.bins,Y=this.binLengths,F=this.bins.length,T=0;T!==F;T++)Y[T]=0;var A=Math.ceil,X=Math.min,it=Math.max;function et(xt,ae,ne,Zt,Wt,Vt,ee){var O=(xt-U)*E|0,Mt=(ae-K)*B|0,Lt=(ne-M)*H|0,Xt=A((Zt-U)*E),D=A((Wt-K)*B),gt=A((Vt-M)*H);O<0?O=0:O>=g&&(O=g-1),Mt<0?Mt=0:Mt>=p&&(Mt=p-1),Lt<0?Lt=0:Lt>=m&&(Lt=m-1),Xt<0?Xt=0:Xt>=g&&(Xt=g-1),D<0?D=0:D>=p&&(D=p-1),gt<0?gt=0:gt>=m&&(gt=m-1),O*=_,Mt*=y,Lt*=x,Xt*=_,D*=y,gt*=x;for(var yt=O;yt<=Xt;yt+=_)for(var kt=Mt;kt<=D;kt+=y)for(var Kt=Lt;Kt<=gt;Kt+=x){var le=yt+kt+Kt;L[le][Y[le]++]=ee}}for(var T=0;T!==f;T++){var q=v[T],at=q.shape;switch(at.type){case $:var ht=q.position.x,W=q.position.y,Ct=q.position.z,dt=at.radius;et(ht-dt,W-dt,Ct-dt,ht+dt,W+dt,Ct+dt,q);break;case j:at.worldNormalNeedsUpdate&&at.computeWorldNormal(q.quaternion);var rt=at.worldNormal,ot=U+I*.5-q.position.x,jt=K+G*.5-q.position.y,bt=M+Z*.5-q.position.z,P=u;P.set(ot,jt,bt);for(var S=0,tt=0;S!==g;S++,tt+=_,P.y=jt,P.x+=I)for(var pt=0,ut=0;pt!==p;pt++,ut+=y,P.z=bt,P.y+=G)for(var mt=0,wt=0;mt!==m;mt++,wt+=x,P.z+=Z)if(P.dot(rt)<z){var Et=tt+ut+wt;L[Et][Y[Et]++]=q}break;default:q.aabbNeedsUpdate&&q.computeAABB(),et(q.aabb.lowerBound.x,q.aabb.lowerBound.y,q.aabb.lowerBound.z,q.aabb.upperBound.x,q.aabb.upperBound.y,q.aabb.upperBound.z,q);break}}for(var T=0;T!==F;T++){var St=Y[T];if(St>1)for(var Ht=L[T],S=0;S!==St;S++)for(var q=Ht[S],pt=0;pt!==S;pt++){var $t=Ht[pt];this.needBroadphaseCollision(q,$t)&&this.intersectionTest(q,$t,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,r){n.exports=o;var i=e("./Broadphase"),a=e("./AABB");function o(){i.apply(this)}o.prototype=new i,o.prototype.constructor=o,o.prototype.collisionPairs=function(l,u,h){var c=l.bodies,d=c.length,f,v,g,p;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=c[f],p=c[v],this.needBroadphaseCollision(g,p)&&this.intersectionTest(g,p,u,h)},new a,o.prototype.aabbQuery=function(l,u,h){h=h||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(u)&&h.push(d)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,r){n.exports=i;function i(){this.matrix={}}i.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var l=o;o=a,a=l}return a+"-"+o in this.matrix},i.prototype.set=function(a,o,l){if(a=a.id,o=o.id,o>a){var u=o;o=a,a=u}l?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},i.prototype.reset=function(){this.matrix={}},i.prototype.setNumObjects=function(a){}},{}],9:[function(e,n,r){n.exports=c;var i=e("../math/Vec3"),a=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var l=e("../collision/RaycastResult"),u=e("../shapes/Shape"),h=e("../collision/AABB");function c(F,T){this.from=F?F.clone():new i,this.to=T?T.clone():new i,this._direction=new i,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(A){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new h,f=[];c.prototype.intersectWorld=function(F,T){return this.mode=T.mode||c.ANY,this.result=T.result||new l,this.skipBackfaces=!!T.skipBackfaces,this.collisionFilterMask=typeof T.collisionFilterMask<"u"?T.collisionFilterMask:-1,this.collisionFilterGroup=typeof T.collisionFilterGroup<"u"?T.collisionFilterGroup:-1,T.from&&this.from.copy(T.from),T.to&&this.to.copy(T.to),this.callback=T.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,F.broadphase.aabbQuery(F,d,f),this.intersectBodies(f),this.hasHit};var v=new i,g=new i;c.pointInTriangle=p;function p(F,T,A,X){X.vsub(T,j),A.vsub(T,v),F.vsub(T,g);var it=j.dot(j),et=j.dot(v),q=j.dot(g),at=v.dot(v),ht=v.dot(g),W,Ct;return(W=at*q-et*ht)>=0&&(Ct=it*ht-et*q)>=0&&W+Ct<it*at-et*et}var m=new i,_=new a;c.prototype.intersectBody=function(F,T){T&&(this.result=T,this._updateDirection());var A=this.checkCollisionResponse;if(!(A&&!F.collisionResponse)&&!(!(this.collisionFilterGroup&F.collisionFilterMask)||!(F.collisionFilterGroup&this.collisionFilterMask)))for(var X=m,it=_,et=0,q=F.shapes.length;et<q;et++){var at=F.shapes[et];if(!(A&&!at.collisionResponse)&&(F.quaternion.mult(F.shapeOrientations[et],it),F.quaternion.vmult(F.shapeOffsets[et],X),X.vadd(F.position,X),this.intersectShape(at,it,X,F),this.result._shouldStop))break}},c.prototype.intersectBodies=function(F,T){T&&(this.result=T,this._updateDirection());for(var A=0,X=F.length;!this.result._shouldStop&&A<X;A++)this.intersectBody(F[A])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(F,T,A,X){var it=this.from,et=Y(it,this._direction,A);if(!(et>F.boundingSphereRadius)){var q=this[F.type];q&&q.call(this,F,T,A,X)}},new i,new i;var y=new i,x=new i,b=new i,R=new i;new i,new l,c.prototype.intersectBox=function(F,T,A,X){return this.intersectConvex(F.convexPolyhedronRepresentation,T,A,X)},c.prototype[u.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(F,T,A,X){var it=this.from,et=this.to,q=this._direction,at=new i(0,0,1);T.vmult(at,at);var ht=new i;it.vsub(A,ht);var W=ht.dot(at);et.vsub(A,ht);var Ct=ht.dot(at);if(!(W*Ct>0)&&!(it.distanceTo(et)<W)){var dt=at.dot(q);if(!(Math.abs(dt)<this.precision)){var rt=new i,ot=new i,jt=new i;it.vsub(A,rt);var bt=-at.dot(rt)/dt;q.scale(bt,ot),it.vadd(ot,jt),this.reportIntersection(at,jt,F,X,-1)}}},c.prototype[u.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(F){var T=this.to,A=this.from;F.lowerBound.x=Math.min(T.x,A.x),F.lowerBound.y=Math.min(T.y,A.y),F.lowerBound.z=Math.min(T.z,A.z),F.upperBound.x=Math.max(T.x,A.x),F.upperBound.y=Math.max(T.y,A.y),F.upperBound.z=Math.max(T.z,A.z)};var C={faceList:[0]};c.prototype.intersectHeightfield=function(F,T,A,X){F.data,F.elementSize;var it=new i,et=new c(this.from,this.to);o.pointToLocalFrame(A,T,et.from,et.from),o.pointToLocalFrame(A,T,et.to,et.to);var q=[],at=null,ht=null,W=null,Ct=null,dt=F.getIndexOfPosition(et.from.x,et.from.y,q,!1);if(dt&&(at=q[0],ht=q[1],W=q[0],Ct=q[1]),dt=F.getIndexOfPosition(et.to.x,et.to.y,q,!1),dt&&((at===null||q[0]<at)&&(at=q[0]),(W===null||q[0]>W)&&(W=q[0]),(ht===null||q[1]<ht)&&(ht=q[1]),(Ct===null||q[1]>Ct)&&(Ct=q[1])),at!==null){var rt=[];F.getRectMinMax(at,ht,W,Ct,rt),rt[0],rt[1];for(var ot=at;ot<=W;ot++)for(var jt=ht;jt<=Ct;jt++){if(this.result._shouldStop||(F.getConvexTrianglePillar(ot,jt,!1),o.pointToWorldFrame(A,T,F.pillarOffset,it),this.intersectConvex(F.pillarConvex,T,it,X,C),this.result._shouldStop))return;F.getConvexTrianglePillar(ot,jt,!0),o.pointToWorldFrame(A,T,F.pillarOffset,it),this.intersectConvex(F.pillarConvex,T,it,X,C)}}},c.prototype[u.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var U=new i,K=new i;c.prototype.intersectSphere=function(F,T,A,X){var it=this.from,et=this.to,q=F.radius,at=Math.pow(et.x-it.x,2)+Math.pow(et.y-it.y,2)+Math.pow(et.z-it.z,2),ht=2*((et.x-it.x)*(it.x-A.x)+(et.y-it.y)*(it.y-A.y)+(et.z-it.z)*(it.z-A.z)),W=Math.pow(it.x-A.x,2)+Math.pow(it.y-A.y,2)+Math.pow(it.z-A.z,2)-Math.pow(q,2),Ct=Math.pow(ht,2)-4*at*W,dt=U,rt=K;if(!(Ct<0))if(Ct===0)it.lerp(et,Ct,dt),dt.vsub(A,rt),rt.normalize(),this.reportIntersection(rt,dt,F,X,-1);else{var ot=(-ht-Math.sqrt(Ct))/(2*at),jt=(-ht+Math.sqrt(Ct))/(2*at);if(ot>=0&&ot<=1&&(it.lerp(et,ot,dt),dt.vsub(A,rt),rt.normalize(),this.reportIntersection(rt,dt,F,X,-1)),this.result._shouldStop)return;jt>=0&&jt<=1&&(it.lerp(et,jt,dt),dt.vsub(A,rt),rt.normalize(),this.reportIntersection(rt,dt,F,X,-1))}},c.prototype[u.types.SPHERE]=c.prototype.intersectSphere;var M=new i;new i,new i;var E=new i;c.prototype.intersectConvex=function(T,A,X,it,et){for(var q=M,at=E,ht=et&&et.faceList||null,W=T.faces,Ct=T.vertices,dt=T.faceNormals,rt=this._direction,ot=this.from,jt=this.to,bt=ot.distanceTo(jt),P=ht?ht.length:W.length,S=this.result,tt=0;!S._shouldStop&&tt<P;tt++){var pt=ht?ht[tt]:tt,ut=W[pt],mt=dt[pt],wt=A,Et=X;at.copy(Ct[ut[0]]),wt.vmult(at,at),at.vadd(Et,at),at.vsub(ot,at),wt.vmult(mt,q);var St=rt.dot(q);if(!(Math.abs(St)<this.precision)){var Ht=q.dot(at)/St;if(!(Ht<0)){rt.mult(Ht,y),y.vadd(ot,y),x.copy(Ct[ut[0]]),wt.vmult(x,x),Et.vadd(x,x);for(var $t=1;!S._shouldStop&&$t<ut.length-1;$t++){b.copy(Ct[ut[$t]]),R.copy(Ct[ut[$t+1]]),wt.vmult(b,b),wt.vmult(R,R),Et.vadd(b,b),Et.vadd(R,R);var xt=y.distanceTo(ot);!(p(y,x,b,R)||p(y,b,x,R))||xt>bt||this.reportIntersection(q,y,T,it,pt)}}}}},c.prototype[u.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var B=new i,H=new i,I=new i,G=new i,Z=new i,z=new i;new h;var N=[],$=new o;c.prototype.intersectTrimesh=function(T,A,X,it,et){var q=B,at=N,ht=$,W=E,Ct=H,dt=I,rt=G,ot=z,jt=Z;et&&et.faceList;var bt=T.indices;T.vertices,T.faceNormals;var P=this.from,S=this.to,tt=this._direction;ht.position.copy(X),ht.quaternion.copy(A),o.vectorToLocalFrame(X,A,tt,Ct),o.pointToLocalFrame(X,A,P,dt),o.pointToLocalFrame(X,A,S,rt);var pt=dt.distanceSquared(rt);T.tree.rayQuery(this,ht,at);for(var ut=0,mt=at.length;!this.result._shouldStop&&ut!==mt;ut++){var wt=at[ut];T.getNormal(wt,q),T.getVertex(bt[wt*3],x),x.vsub(dt,W);var Et=Ct.dot(q),St=q.dot(W)/Et;if(!(St<0)){Ct.scale(St,y),y.vadd(dt,y),T.getVertex(bt[wt*3+1],b),T.getVertex(bt[wt*3+2],R);var Ht=y.distanceSquared(dt);!(p(y,b,x,R)||p(y,x,b,R))||Ht>pt||(o.vectorToWorldFrame(A,q,jt),o.pointToWorldFrame(X,A,y,ot),this.reportIntersection(jt,ot,T,it,wt))}}at.length=0},c.prototype[u.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(F,T,A,X,it){var et=this.from,q=this.to,at=et.distanceTo(T),ht=this.result;if(!(this.skipBackfaces&&F.dot(this._direction)>0))switch(ht.hitFaceIndex=typeof it<"u"?it:-1,this.mode){case c.ALL:this.hasHit=!0,ht.set(et,q,F,T,A,X,at),ht.hasHit=!0,this.callback(ht);break;case c.CLOSEST:(at<ht.distance||!ht.hasHit)&&(this.hasHit=!0,ht.hasHit=!0,ht.set(et,q,F,T,A,X,at));break;case c.ANY:this.hasHit=!0,ht.hasHit=!0,ht.set(et,q,F,T,A,X,at),ht._shouldStop=!0;break}};var j=new i,L=new i;function Y(F,T,A){A.vsub(F,j);var X=j.dot(T);T.mult(X,L),L.vadd(F,L);var it=A.distanceTo(L);return it}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,r){var i=e("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new i,this.rayToWorld=new i,this.hitNormalWorld=new i,this.hitPointWorld=new i,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,l,u,h,c,d,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(l),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(h),this.shape=c,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,r){e("../shapes/Shape");var i=e("../collision/Broadphase");n.exports=a;function a(o){i.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(u){l.push(u.body)},this._removeBodyHandler=function(u){var h=l.indexOf(u.body);h!==-1&&l.splice(h,1)},o&&this.setWorld(o)}a.prototype=new i,a.prototype.setWorld=function(o){this.axisList.length=0;for(var l=0;l<o.bodies.length;l++)this.axisList.push(o.bodies[l]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var l=1,u=o.length;l<u;l++){for(var h=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.x<=h.aabb.lowerBound.x);c--)o[c+1]=o[c];o[c+1]=h}return o},a.insertionSortY=function(o){for(var l=1,u=o.length;l<u;l++){for(var h=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.y<=h.aabb.lowerBound.y);c--)o[c+1]=o[c];o[c+1]=h}return o},a.insertionSortZ=function(o){for(var l=1,u=o.length;l<u;l++){for(var h=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.z<=h.aabb.lowerBound.z);c--)o[c+1]=o[c];o[c+1]=h}return o},a.prototype.collisionPairs=function(o,l,u){var h=this.axisList,c=h.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==c;f++){var g=h[f];for(v=f+1;v<c;v++){var p=h[v];if(this.needBroadphaseCollision(g,p)){if(!a.checkBounds(g,p,d))break;this.intersectionTest(g,p,l,u)}}}},a.prototype.sortList=function(){for(var o=this.axisList,l=this.axisIndex,u=o.length,h=0;h!==u;h++){var c=o[h];c.aabbNeedsUpdate&&c.computeAABB()}l===0?a.insertionSortX(o):l===1?a.insertionSortY(o):l===2&&a.insertionSortZ(o)},a.checkBounds=function(o,l,u){var h,c;u===0?(h=o.position.x,c=l.position.x):u===1?(h=o.position.y,c=l.position.y):u===2&&(h=o.position.z,c=l.position.z);var d=o.boundingRadius,f=l.boundingRadius,v=h+d,g=c-f;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,l=0,u=0,h=0,c=0,d=0,f=this.axisList,v=f.length,g=1/v,p=0;p!==v;p++){var m=f[p],_=m.position.x;o+=_,l+=_*_;var y=m.position.y;u+=y,h+=y*y;var x=m.position.z;c+=x,d+=x*x}var b=l-o*o*g,R=h-u*u*g,C=d-c*c*g;b>R?b>C?this.axisIndex=0:this.axisIndex=2:R>C?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,l,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,c="x";h===1&&(c="y"),h===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&u.push(v)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,r){n.exports=u,e("./Constraint");var i=e("./PointToPointConstraint"),a=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function u(h,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,i.call(this,h,v,c,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var p=this.coneEquation=new a(h,c,d),m=this.twistEquation=new o(h,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,p.maxForce=0,p.minForce=-f,m.maxForce=0,m.minForce=-f,this.equations.push(p,m)}u.prototype=new i,u.constructor=u,new l,new l,u.prototype.update=function(){var h=this.bodyA,c=this.bodyB,d=this.coneEquation,f=this.twistEquation;i.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),h.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),c.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,r){n.exports=a;var i=e("../utils/Utils");function a(o,l,u){u=i.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=l,this.id=a.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(o&&o.wakeUp(),l&&l.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,r){n.exports=o;var i=e("./Constraint"),a=e("../equations/ContactEquation");function o(l,u,h,c){i.call(this,l,u),typeof h>"u"&&(h=l.position.distanceTo(u.position)),typeof c>"u"&&(c=1e6),this.distance=h;var d=this.distanceEquation=new a(l,u);this.equations.push(d),d.minForce=-c,d.maxForce=c}o.prototype=new i,o.prototype.update=function(){var l=this.bodyA,u=this.bodyB,h=this.distanceEquation,c=this.distance*.5,d=h.ni;u.position.vsub(l.position,d),d.normalize(),d.mult(c,h.ri),d.mult(-c,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,r){n.exports=u,e("./Constraint");var i=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function u(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,p=v.pivotA?v.pivotA.clone():new l,m=v.pivotB?v.pivotB.clone():new l;i.call(this,d,p,f,m,g);var _=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);_.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);y.normalize();var x=this.rotationalEquation1=new a(d,f,v),b=this.rotationalEquation2=new a(d,f,v),R=this.motorEquation=new o(d,f,g);R.enabled=!1,this.equations.push(x,b,R)}u.prototype=new i,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},u.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var h=new l,c=new l;u.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,p=this.rotationalEquation2,m=h,_=c,y=this.axisA,x=this.axisB;i.prototype.update.call(this),d.quaternion.vmult(y,m),f.quaternion.vmult(x,_),m.tangents(g.axisA,p.axisA),g.axisB.copy(_),p.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,r){n.exports=l,e("./Constraint");var i=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function l(u,h,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,f=new o,v=new o,g=new o;u.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),u.pointToLocalFrame(g,f),i.call(this,u,f,h,v,d);var p=this.rotationalEquation1=new a(u,h,c),m=this.rotationalEquation2=new a(u,h,c),_=this.rotationalEquation3=new a(u,h,c);this.equations.push(p,m,_)}l.prototype=new i,l.constructor=l,new o,new o,l.prototype.update=function(){var u=this.bodyA,h=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;i.prototype.update.call(this),u.vectorToWorldFrame(o.UNIT_X,c.axisA),h.vectorToWorldFrame(o.UNIT_Y,c.axisB),u.vectorToWorldFrame(o.UNIT_Y,d.axisA),h.vectorToWorldFrame(o.UNIT_Z,d.axisB),u.vectorToWorldFrame(o.UNIT_Z,f.axisA),h.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,r){n.exports=l;var i=e("./Constraint"),a=e("../equations/ContactEquation"),o=e("../math/Vec3");function l(u,h,c,d,f){i.call(this,u,c),f=typeof f<"u"?f:1e6,this.pivotA=h?h.clone():new o,this.pivotB=d?d.clone():new o;var v=this.equationX=new a(u,c),g=this.equationY=new a(u,c),p=this.equationZ=new a(u,c);this.equations.push(v,g,p),v.minForce=g.minForce=p.minForce=-f,v.maxForce=g.maxForce=p.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),p.ni.set(0,0,1)}l.prototype=new i,l.prototype.update=function(){var u=this.bodyA,h=this.bodyB,c=this.equationX,d=this.equationY,f=this.equationZ;u.quaternion.vmult(this.pivotA,c.ri),h.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,r){n.exports=o;var i=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,h,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new i(1,0,0),this.axisB=d.axisB?d.axisB.clone():new i(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new a,o.prototype.constructor=o;var l=new i,u=new i;o.prototype.computeB=function(h){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,p=u,m=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,p),m.rotational.copy(p),_.rotational.copy(g);var y=Math.cos(this.angle)-f.dot(v),x=this.computeGW(),b=this.computeGiMf(),R=-y*c-x*d-h*b;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,r){n.exports=o;var i=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(p,m,_){_=typeof _<"u"?_:1e6,i.call(this,p,m,0,_),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new i,o.prototype.constructor=o;var l=new a,u=new a,h=new a;o.prototype.computeB=function(p){var m=this.a,_=this.b,y=this.bi,x=this.bj,b=this.ri,R=this.rj,C=l,U=u,K=y.velocity,M=y.angularVelocity;y.force,y.torque;var E=x.velocity,B=x.angularVelocity;x.force,x.torque;var H=h,I=this.jacobianElementA,G=this.jacobianElementB,Z=this.ni;b.cross(Z,C),R.cross(Z,U),Z.negate(I.spatial),C.negate(I.rotational),G.spatial.copy(Z),G.rotational.copy(U),H.copy(x.position),H.vadd(R,H),H.vsub(y.position,H),H.vsub(b,H);var z=Z.dot(H),N=this.restitution+1,$=N*E.dot(Z)-N*K.dot(Z)+B.dot(U)-M.dot(C),j=this.computeGiMf(),L=-z*m-$*_-p*j;return L};var c=new a,d=new a,f=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var p=c,m=d,_=f,y=v,x=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(_,p),this.bj.getVelocityAtWorldPoint(y,m),p.vsub(m,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,r){n.exports=o;var i=e("../math/JacobianElement"),a=e("../math/Vec3");function o(g,p,m,_){this.id=o.id++,this.minForce=typeof m>"u"?-1e6:m,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=p,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new i,this.jacobianElementB=new i,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,p,m){var _=p,y=g,x=m;this.a=4/(x*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(x*x*y*(1+4*_))},o.prototype.computeB=function(g,p,m){var _=this.computeGW(),y=this.computeGq(),x=this.computeGiMf();return-y*g-_*p-x*m},o.prototype.computeGq=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,y=m.position,x=_.position;return g.spatial.dot(y)+p.spatial.dot(x)};var l=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,y=m.velocity,x=_.velocity,b=m.angularVelocity||l,R=_.angularVelocity||l;return g.multiplyVectors(y,b)+p.multiplyVectors(x,R)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,y=m.vlambda,x=_.vlambda,b=m.wlambda||l,R=_.wlambda||l;return g.multiplyVectors(y,b)+p.multiplyVectors(x,R)};var u=new a,h=new a,c=new a,d=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,y=m.force,x=m.torque,b=_.force,R=_.torque,C=m.invMassSolve,U=_.invMassSolve;return m.invInertiaWorldSolve?m.invInertiaWorldSolve.vmult(x,c):c.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(R,d):d.set(0,0,0),y.mult(C,u),b.mult(U,h),g.multiplyVectors(u,c)+p.multiplyVectors(h,d)};var f=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,y=m.invMassSolve,x=_.invMassSolve,b=m.invInertiaWorldSolve,R=_.invInertiaWorldSolve,C=y+x;return b&&(b.vmult(g.rotational,f),C+=f.dot(g.rotational)),R&&(R.vmult(p.rotational,f),C+=f.dot(p.rotational)),C};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var p=this.jacobianElementA,m=this.jacobianElementB,_=this.bi,y=this.bj,x=v;p.spatial.mult(_.invMassSolve*g,x),_.vlambda.vadd(x,_.vlambda),m.spatial.mult(y.invMassSolve*g,x),y.vlambda.vadd(x,y.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(p.rotational,x),x.mult(g,x),_.wlambda.vadd(x,_.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(g,x),y.wlambda.vadd(x,y.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,r){n.exports=o;var i=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(h,c,d){i.call(this,h,c,-d,d),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new i,o.prototype.constructor=o;var l=new a,u=new a;o.prototype.computeB=function(h){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=l,g=u,p=this.t;d.cross(p,v),f.cross(p,g);var m=this.jacobianElementA,_=this.jacobianElementB;p.negate(m.spatial),v.negate(m.rotational),_.spatial.copy(p),_.rotational.copy(g);var y=this.computeGW(),x=this.computeGiMf(),b=-y*c-h*x;return b}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,r){n.exports=o;var i=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,h,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new i(1,0,0),this.axisB=d.axisB?d.axisB.clone():new i(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var l=new i,u=new i;o.prototype.computeB=function(h){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,p=u,m=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,p),m.rotational.copy(p),_.rotational.copy(g);var y=Math.cos(this.maxAngle)-f.dot(v),x=this.computeGW(),b=this.computeGiMf(),R=-y*c-x*d-h*b;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,r){n.exports=o;var i=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(l,u,h){h=typeof h<"u"?h:1e6,a.call(this,l,u,-h,h),this.axisA=new i,this.axisB=new i,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(l){this.a;var u=this.b;this.bi,this.bj;var h=this.axisA,c=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(h),c.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),p=-v*u-l*g;return p}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,r){var i=e("../utils/Utils");n.exports=a;function a(o,l,u){u=i.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,l],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,r){n.exports=i;function i(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=i.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}i.idCounter=0},{}],26:[function(e,n,r){n.exports=a;var i=e("./Vec3");function a(){this.spatial=new i,this.rotational=new i}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,l){return o.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,r){n.exports=a;var i=e("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var l=this.elements;l[0]=o.x,l[4]=o.y,l[8]=o.z},a.prototype.getTrace=function(l){var l=l||new i,u=this.elements;l.x=u[0],l.y=u[4],l.z=u[8]},a.prototype.vmult=function(o,l){l=l||new i;var u=this.elements,h=o.x,c=o.y,d=o.z;return l.x=u[0]*h+u[1]*c+u[2]*d,l.y=u[3]*h+u[4]*c+u[5]*d,l.z=u[6]*h+u[7]*c+u[8]*d,l},a.prototype.smult=function(o){for(var l=0;l<this.elements.length;l++)this.elements[l]*=o},a.prototype.mmult=function(o,l){for(var u=l||new a,h=0;h<3;h++)for(var c=0;c<3;c++){for(var d=0,f=0;f<3;f++)d+=o.elements[h+f*3]*this.elements[f+c*3];u.elements[h+c*3]=d}return u},a.prototype.scale=function(o,l){l=l||new a;for(var u=this.elements,h=l.elements,c=0;c!==3;c++)h[3*c+0]=o.x*u[3*c+0],h[3*c+1]=o.y*u[3*c+1],h[3*c+2]=o.z*u[3*c+2];return l},a.prototype.solve=function(o,l){l=l||new i;for(var u=3,h=4,c=[],d=0;d<u*h;d++)c.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)c[d+h*f]=this.elements[d+3*f];c[3+4*0]=o.x,c[3+4*1]=o.y,c[3+4*2]=o.z;var v=3,g=v,p,m=4,_;do{if(d=g-v,c[d+h*d]===0){for(f=d+1;f<g;f++)if(c[d+h*f]!==0){p=m;do _=m-p,c[_+h*d]+=c[_+h*f];while(--p);break}}if(c[d+h*d]!==0)for(f=d+1;f<g;f++){var y=c[d+h*f]/c[d+h*d];p=m;do _=m-p,c[_+h*f]=_<=d?0:c[_+h*f]-c[_+h*d]*y;while(--p)}}while(--v);if(l.z=c[2*h+3]/c[2*h+2],l.y=(c[1*h+3]-c[1*h+2]*l.z)/c[1*h+1],l.x=(c[0*h+3]-c[0*h+2]*l.z-c[0*h+1]*l.y)/c[0*h+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return l},a.prototype.e=function(o,l,u){if(u===void 0)return this.elements[l+3*o];this.elements[l+3*o]=u},a.prototype.copy=function(o){for(var l=0;l<o.elements.length;l++)this.elements[l]=o.elements[l];return this},a.prototype.toString=function(){for(var o="",l=",",u=0;u<9;u++)o+=this.elements[u]+l;return o},a.prototype.reverse=function(o){o=o||new a;for(var l=3,u=6,h=[],c=0;c<l*u;c++)h.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)h[c+u*d]=this.elements[c+3*d];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var f=3,v=f,g,p=u,m;do{if(c=v-f,h[c+u*c]===0){for(d=c+1;d<v;d++)if(h[c+u*d]!==0){g=p;do m=p-g,h[m+u*c]+=h[m+u*d];while(--g);break}}if(h[c+u*c]!==0)for(d=c+1;d<v;d++){var _=h[c+u*d]/h[c+u*c];g=p;do m=p-g,h[m+u*d]=m<=c?0:h[m+u*d]-h[m+u*c]*_;while(--g)}}while(--f);c=2;do{d=c-1;do{var _=h[c+u*d]/h[c+u*c];g=u;do m=u-g,h[m+u*d]=h[m+u*d]-h[m+u*c]*_;while(--g)}while(d--)}while(--c);c=2;do{var _=1/h[c+u*c];g=u;do m=u-g,h[m+u*c]=h[m+u*c]*_;while(--g)}while(c--);c=2;do{d=2;do{if(m=h[l+d+u*c],isNaN(m)||m===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(c,d,m)}while(d--)}while(c--);return o},a.prototype.setRotationFromQuaternion=function(o){var l=o.x,u=o.y,h=o.z,c=o.w,d=l+l,f=u+u,v=h+h,g=l*d,p=l*f,m=l*v,_=u*f,y=u*v,x=h*v,b=c*d,R=c*f,C=c*v,U=this.elements;return U[3*0+0]=1-(_+x),U[3*0+1]=p-C,U[3*0+2]=m+R,U[3*1+0]=p+C,U[3*1+1]=1-(g+x),U[3*1+2]=y-b,U[3*2+0]=m-R,U[3*2+1]=y+b,U[3*2+2]=1-(g+_),this},a.prototype.transpose=function(o){o=o||new a;for(var l=o.elements,u=this.elements,h=0;h!==3;h++)for(var c=0;c!==3;c++)l[3*h+c]=u[3*c+h];return o}},{"./Vec3":30}],28:[function(e,n,r){n.exports=a;var i=e("./Vec3");function a(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},a.prototype.toAxisAngle=function(d){d=d||new i,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var o=new i,l=new i;a.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=o,g=l;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var p=d.cross(f);this.x=p.x,this.y=p.y,this.z=p.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var u=new i,h=new i,c=new i;a.prototype.mult=function(d,f){f=f||new a;var v=this.w,g=u,p=h,m=c;return g.set(this.x,this.y,this.z),p.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(p),g.cross(p,m),f.x=v*p.x+d.w*g.x+m.x,f.y=v*p.y+d.w*g.y+m.y,f.z=v*p.z+d.w*g.z+m.z,f},a.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,p=this.w;d=d||new a,this.conjugate(d);var m=1/(f*f+v*v+g*g+p*p);return d.x*=m,d.y*=m,d.z*=m,d.w*=m,d},a.prototype.conjugate=function(d){return d=d||new a,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},a.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.vmult=function(d,f){f=f||new i;var v=d.x,g=d.y,p=d.z,m=this.x,_=this.y,y=this.z,x=this.w,b=x*v+_*p-y*g,R=x*g+y*v-m*p,C=x*p+m*g-_*v,U=-m*v-_*g-y*p;return f.x=b*x+U*-m+R*-y-C*-_,f.y=R*x+U*-_+C*-m-b*-y,f.z=C*x+U*-y+b*-_-R*-m,f},a.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},a.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,p,m=this.x,_=this.y,y=this.z,x=this.w;switch(f){case"YZX":var b=m*_+y*x;if(b>.499&&(v=2*Math.atan2(m,x),g=Math.PI/2,p=0),b<-.499&&(v=-2*Math.atan2(m,x),g=-Math.PI/2,p=0),isNaN(v)){var R=m*m,C=_*_,U=y*y;v=Math.atan2(2*_*x-2*m*y,1-2*C-2*U),g=Math.asin(2*b),p=Math.atan2(2*m*x-2*_*y,1-2*R-2*U)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=p},a.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var p=Math.cos(d/2),m=Math.cos(f/2),_=Math.cos(v/2),y=Math.sin(d/2),x=Math.sin(f/2),b=Math.sin(v/2);return g==="XYZ"?(this.x=y*m*_+p*x*b,this.y=p*x*_-y*m*b,this.z=p*m*b+y*x*_,this.w=p*m*_-y*x*b):g==="YXZ"?(this.x=y*m*_+p*x*b,this.y=p*x*_-y*m*b,this.z=p*m*b-y*x*_,this.w=p*m*_+y*x*b):g==="ZXY"?(this.x=y*m*_-p*x*b,this.y=p*x*_+y*m*b,this.z=p*m*b+y*x*_,this.w=p*m*_-y*x*b):g==="ZYX"?(this.x=y*m*_-p*x*b,this.y=p*x*_+y*m*b,this.z=p*m*b-y*x*_,this.w=p*m*_+y*x*b):g==="YZX"?(this.x=y*m*_+p*x*b,this.y=p*x*_+y*m*b,this.z=p*m*b-y*x*_,this.w=p*m*_-y*x*b):g==="XZY"&&(this.x=y*m*_-p*x*b,this.y=p*x*_-y*m*b,this.z=p*m*b+y*x*_,this.w=p*m*_+y*x*b),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,r){var i=e("./Vec3"),a=e("./Quaternion");n.exports=o;function o(u){u=u||{},this.position=new i,u.position&&this.position.copy(u.position),this.quaternion=new a,u.quaternion&&this.quaternion.copy(u.quaternion)}var l=new a;o.pointToLocalFrame=function(u,h,c,f){var f=f||new i;return c.vsub(u,f),h.conjugate(l),l.vmult(f,f),f},o.prototype.pointToLocal=function(u,h){return o.pointToLocalFrame(this.position,this.quaternion,u,h)},o.pointToWorldFrame=function(u,h,c,f){var f=f||new i;return h.vmult(c,f),f.vadd(u,f),f},o.prototype.pointToWorld=function(u,h){return o.pointToWorldFrame(this.position,this.quaternion,u,h)},o.prototype.vectorToWorldFrame=function(u,c){var c=c||new i;return this.quaternion.vmult(u,c),c},o.vectorToWorldFrame=function(u,h,c){return u.vmult(h,c),c},o.vectorToLocalFrame=function(u,h,c,f){var f=f||new i;return h.w*=-1,h.vmult(c,f),h.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,r){n.exports=a;var i=e("./Mat3");function a(h,c,d){this.x=h||0,this.y=c||0,this.z=d||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(h,c){var d=h.x,f=h.y,v=h.z,g=this.x,p=this.y,m=this.z;return c=c||new a,c.x=p*v-m*f,c.y=m*d-g*v,c.z=g*f-p*d,c},a.prototype.set=function(h,c,d){return this.x=h,this.y=c,this.z=d,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(h,c){if(c)c.x=h.x+this.x,c.y=h.y+this.y,c.z=h.z+this.z;else return new a(this.x+h.x,this.y+h.y,this.z+h.z)},a.prototype.vsub=function(h,c){if(c)c.x=this.x-h.x,c.y=this.y-h.y,c.z=this.z-h.z;else return new a(this.x-h.x,this.y-h.y,this.z-h.z)},a.prototype.crossmat=function(){return new i([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var h=this.x,c=this.y,d=this.z,f=Math.sqrt(h*h+c*c+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},a.prototype.unit=function(h){h=h||new a;var c=this.x,d=this.y,f=this.z,v=Math.sqrt(c*c+d*d+f*f);return v>0?(v=1/v,h.x=c*v,h.y=d*v,h.z=f*v):(h.x=1,h.y=0,h.z=0),h},a.prototype.norm=function(){var h=this.x,c=this.y,d=this.z;return Math.sqrt(h*h+c*c+d*d)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(h){var c=this.x,d=this.y,f=this.z,v=h.x,g=h.y,p=h.z;return Math.sqrt((v-c)*(v-c)+(g-d)*(g-d)+(p-f)*(p-f))},a.prototype.distanceSquared=function(h){var c=this.x,d=this.y,f=this.z,v=h.x,g=h.y,p=h.z;return(v-c)*(v-c)+(g-d)*(g-d)+(p-f)*(p-f)},a.prototype.mult=function(h,c){c=c||new a;var d=this.x,f=this.y,v=this.z;return c.x=h*d,c.y=h*f,c.z=h*v,c},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(h){return h=h||new a,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new a,l=new a;a.prototype.tangents=function(h,c){var d=this.norm();if(d>0){var f=o,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,h)):(g.set(0,1,0),f.cross(g,h)),f.cross(h,c)}else h.set(1,0,0),c.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},a.prototype.lerp=function(h,c,d){var f=this.x,v=this.y,g=this.z;d.x=f+(h.x-f)*c,d.y=v+(h.y-v)*c,d.z=g+(h.z-g)*c},a.prototype.almostEquals=function(h,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-h.x)>c||Math.abs(this.y-h.y)>c||Math.abs(this.z-h.z)>c)},a.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var u=new a;a.prototype.isAntiparallelTo=function(h,c){return this.negate(u),u.almostEquals(h,c)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,r){n.exports=c;var i=e("../utils/EventTarget");e("../shapes/Shape");var a=e("../math/Vec3"),o=e("../math/Mat3"),l=e("../math/Quaternion");e("../material/Material");var u=e("../collision/AABB"),h=e("../shapes/Box");function c(E){E=E||{},i.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof E.collisionFilterGroup=="number"?E.collisionFilterGroup:1,this.collisionFilterMask=typeof E.collisionFilterMask=="number"?E.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,E.position&&this.position.copy(E.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,E.velocity&&this.velocity.copy(E.velocity),this.initVelocity=new a,this.force=new a;var B=typeof E.mass=="number"?E.mass:0;this.mass=B,this.invMass=B>0?1/B:0,this.material=E.material||null,this.linearDamping=typeof E.linearDamping=="number"?E.linearDamping:.01,this.type=B<=0?c.STATIC:c.DYNAMIC,typeof E.type==typeof c.STATIC&&(this.type=E.type),this.allowSleep=typeof E.allowSleep<"u"?E.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof E.sleepSpeedLimit<"u"?E.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof E.sleepTimeLimit<"u"?E.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new l,E.quaternion&&this.quaternion.copy(E.quaternion),this.initQuaternion=new l,this.angularVelocity=new a,E.angularVelocity&&this.angularVelocity.copy(E.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof E.fixedRotation<"u"?E.fixedRotation:!1,this.angularDamping=typeof E.angularDamping<"u"?E.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new a,E.shape&&this.addShape(E.shape),this.updateMassProperties()}c.prototype=new i,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var E=this.sleepState;this.sleepState=0,E===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(E){if(this.allowSleep){var B=this.sleepState,H=this.velocity.norm2()+this.angularVelocity.norm2(),I=Math.pow(this.sleepSpeedLimit,2);B===c.AWAKE&&H<I?(this.sleepState=c.SLEEPY,this.timeLastSleepy=E,this.dispatchEvent(c.sleepyEvent)):B===c.SLEEPY&&H>I?this.wakeUp():B===c.SLEEPY&&E-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(E,H){var H=H||new a;return E.vsub(this.position,H),this.quaternion.conjugate().vmult(H,H),H},c.prototype.vectorToLocalFrame=function(E,H){var H=H||new a;return this.quaternion.conjugate().vmult(E,H),H},c.prototype.pointToWorldFrame=function(E,H){var H=H||new a;return this.quaternion.vmult(E,H),H.vadd(this.position,H),H},c.prototype.vectorToWorldFrame=function(E,H){var H=H||new a;return this.quaternion.vmult(E,H),H};var d=new a,f=new l;c.prototype.addShape=function(E,B,H){var I=new a,G=new l;return B&&I.copy(B),H&&G.copy(H),this.shapes.push(E),this.shapeOffsets.push(I),this.shapeOrientations.push(G),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var E=this.shapes,B=this.shapeOffsets,H=E.length,I=0,G=0;G!==H;G++){var Z=E[G];Z.updateBoundingSphereRadius();var z=B[G].norm(),N=Z.boundingSphereRadius;z+N>I&&(I=z+N)}this.boundingRadius=I};var v=new u;c.prototype.computeAABB=function(){for(var E=this.shapes,B=this.shapeOffsets,H=this.shapeOrientations,I=E.length,G=d,Z=f,z=this.quaternion,N=this.aabb,$=v,j=0;j!==I;j++){var L=E[j];H[j].mult(z,Z),Z.vmult(B[j],G),G.vadd(this.position,G),L.calculateWorldAABB(G,Z,$.lowerBound,$.upperBound),j===0?N.copy($):N.extend($)}this.aabbNeedsUpdate=!1};var g=new o,p=new o;new o,c.prototype.updateInertiaWorld=function(E){var B=this.invInertia;if(!(B.x===B.y&&B.y===B.z&&!E)){var H=g,I=p;H.setRotationFromQuaternion(this.quaternion),H.transpose(I),H.scale(B,H),H.mmult(I,this.invInertiaWorld)}};var m=new a,_=new a;c.prototype.applyForce=function(E,B){if(this.type===c.DYNAMIC){var H=m;B.vsub(this.position,H);var I=_;H.cross(E,I),this.force.vadd(E,this.force),this.torque.vadd(I,this.torque)}};var y=new a,x=new a;c.prototype.applyLocalForce=function(E,B){if(this.type===c.DYNAMIC){var H=y,I=x;this.vectorToWorldFrame(E,H),this.pointToWorldFrame(B,I),this.applyForce(H,I)}};var b=new a,R=new a,C=new a;c.prototype.applyImpulse=function(E,B){if(this.type===c.DYNAMIC){var H=b;B.vsub(this.position,H);var I=R;I.copy(E),I.mult(this.invMass,I),this.velocity.vadd(I,this.velocity);var G=C;H.cross(E,G),this.invInertiaWorld.vmult(G,G),this.angularVelocity.vadd(G,this.angularVelocity)}};var U=new a,K=new a;c.prototype.applyLocalImpulse=function(E,B){if(this.type===c.DYNAMIC){var H=U,I=K;this.vectorToWorldFrame(E,H),this.pointToWorldFrame(B,I),this.applyImpulse(H,I)}};var M=new a;c.prototype.updateMassProperties=function(){var E=M;this.invMass=this.mass>0?1/this.mass:0;var B=this.inertia,H=this.fixedRotation;this.computeAABB(),E.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(E,this.mass,B),this.invInertia.set(B.x>0&&!H?1/B.x:0,B.y>0&&!H?1/B.y:0,B.z>0&&!H?1/B.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(E,B){var H=new a;return E.vsub(this.position,H),this.angularVelocity.cross(H,B),this.velocity.vadd(B,B),B}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,r){e("./Body");var i=e("../math/Vec3"),a=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),l=e("../objects/WheelInfo");n.exports=u;function u(z){this.chassisBody=z.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof z.indexRightAxis<"u"?z.indexRightAxis:1,this.indexForwardAxis=typeof z.indexForwardAxis<"u"?z.indexForwardAxis:0,this.indexUpAxis=typeof z.indexUpAxis<"u"?z.indexUpAxis:2}new i,new i,new i;var h=new i,c=new i,d=new i;new o,u.prototype.addWheel=function(z){z=z||{};var N=new l(z),$=this.wheelInfos.length;return this.wheelInfos.push(N),$},u.prototype.setSteeringValue=function(z,N){var $=this.wheelInfos[N];$.steering=z},new i,u.prototype.applyEngineForce=function(z,N){this.wheelInfos[N].engineForce=z},u.prototype.setBrake=function(z,N){this.wheelInfos[N].brake=z},u.prototype.addToWorld=function(z){this.constraints,z.add(this.chassisBody);var N=this;this.preStepCallback=function(){N.updateVehicle(z.dt)},z.addEventListener("preStep",this.preStepCallback),this.world=z},u.prototype.getVehicleAxisWorld=function(z,N){N.set(z===0?1:0,z===1?1:0,z===2?1:0),this.chassisBody.vectorToWorldFrame(N,N)},u.prototype.updateVehicle=function(z){for(var N=this.wheelInfos,$=N.length,j=this.chassisBody,L=0;L<$;L++)this.updateWheelTransform(L);this.currentVehicleSpeedKmHour=3.6*j.velocity.norm();var Y=new i;this.getVehicleAxisWorld(this.indexForwardAxis,Y),Y.dot(j.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var L=0;L<$;L++)this.castRay(N[L]);this.updateSuspension(z);for(var F=new i,T=new i,L=0;L<$;L++){var A=N[L],X=A.suspensionForce;X>A.maxSuspensionForce&&(X=A.maxSuspensionForce),A.raycastResult.hitNormalWorld.scale(X*z,F),A.raycastResult.hitPointWorld.vsub(j.position,T),j.applyImpulse(F,A.raycastResult.hitPointWorld)}this.updateFriction(z);var it=new i,et=new i,q=new i;for(L=0;L<$;L++){var A=N[L];j.getVelocityAtWorldPoint(A.chassisConnectionPointWorld,q);var at=1;switch(this.indexUpAxis){case 1:at=-1;break}if(A.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,et);var ht=et.dot(A.raycastResult.hitNormalWorld);A.raycastResult.hitNormalWorld.scale(ht,it),et.vsub(it,et);var W=et.dot(q);A.deltaRotation=at*W*z/A.radius}(A.sliding||!A.isInContact)&&A.engineForce!==0&&A.useCustomSlidingRotationalSpeed&&(A.deltaRotation=(A.engineForce>0?1:-1)*A.customSlidingRotationalSpeed*z),Math.abs(A.brake)>Math.abs(A.engineForce)&&(A.deltaRotation=0),A.rotation+=A.deltaRotation,A.deltaRotation*=.99}},u.prototype.updateSuspension=function(z){for(var N=this.chassisBody,$=N.mass,j=this.wheelInfos,L=j.length,Y=0;Y<L;Y++){var F=j[Y];if(F.isInContact){var T,A=F.suspensionRestLength,X=F.suspensionLength,it=A-X;T=F.suspensionStiffness*it*F.clippedInvContactDotSuspension;var et=F.suspensionRelativeVelocity,q;et<0?q=F.dampingCompression:q=F.dampingRelaxation,T-=q*et,F.suspensionForce=T*$,F.suspensionForce<0&&(F.suspensionForce=0)}else F.suspensionForce=0}},u.prototype.removeFromWorld=function(z){this.constraints,z.remove(this.chassisBody),z.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new i,v=new i;u.prototype.castRay=function(z){var N=f,$=v;this.updateWheelTransformWorld(z);var j=this.chassisBody,L=-1,Y=z.suspensionRestLength+z.radius;z.directionWorld.scale(Y,N);var F=z.chassisConnectionPointWorld;F.vadd(N,$);var T=z.raycastResult;T.reset();var A=j.collisionResponse;j.collisionResponse=!1,this.world.rayTest(F,$,T),j.collisionResponse=A;var X=T.body;if(z.raycastResult.groundObject=0,X){L=T.distance,z.raycastResult.hitNormalWorld=T.hitNormalWorld,z.isInContact=!0;var it=T.distance;z.suspensionLength=it-z.radius;var et=z.suspensionRestLength-z.maxSuspensionTravel,q=z.suspensionRestLength+z.maxSuspensionTravel;z.suspensionLength<et&&(z.suspensionLength=et),z.suspensionLength>q&&(z.suspensionLength=q,z.raycastResult.reset());var at=z.raycastResult.hitNormalWorld.dot(z.directionWorld),ht=new i;j.getVelocityAtWorldPoint(z.raycastResult.hitPointWorld,ht);var W=z.raycastResult.hitNormalWorld.dot(ht);if(at>=-.1)z.suspensionRelativeVelocity=0,z.clippedInvContactDotSuspension=1/.1;else{var Ct=-1/at;z.suspensionRelativeVelocity=W*Ct,z.clippedInvContactDotSuspension=Ct}}else z.suspensionLength=z.suspensionRestLength+0*z.maxSuspensionTravel,z.suspensionRelativeVelocity=0,z.directionWorld.scale(-1,z.raycastResult.hitNormalWorld),z.clippedInvContactDotSuspension=1;return L},u.prototype.updateWheelTransformWorld=function(z){z.isInContact=!1;var N=this.chassisBody;N.pointToWorldFrame(z.chassisConnectionPointLocal,z.chassisConnectionPointWorld),N.vectorToWorldFrame(z.directionLocal,z.directionWorld),N.vectorToWorldFrame(z.axleLocal,z.axleWorld)},u.prototype.updateWheelTransform=function(z){var N=h,$=c,j=d,L=this.wheelInfos[z];this.updateWheelTransformWorld(L),L.directionLocal.scale(-1,N),$.copy(L.axleLocal),N.cross($,j),j.normalize(),$.normalize();var Y=L.steering,F=new a;F.setFromAxisAngle(N,Y);var T=new a;T.setFromAxisAngle($,L.rotation);var A=L.worldTransform.quaternion;this.chassisBody.quaternion.mult(F,A),A.mult(T,A),A.normalize();var X=L.worldTransform.position;X.copy(L.directionWorld),X.scale(L.suspensionLength,X),X.vadd(L.chassisConnectionPointWorld,X)};var g=[new i(1,0,0),new i(0,1,0),new i(0,0,1)];u.prototype.getWheelTransformWorld=function(z){return this.wheelInfos[z].worldTransform};var p=new i,m=[],_=[],y=1;u.prototype.updateFriction=function(z){for(var N=p,$=this.wheelInfos,j=$.length,L=this.chassisBody,Y=_,F=m,T=0;T<j;T++){var A=$[T],X=A.raycastResult.body;A.sideImpulse=0,A.forwardImpulse=0,Y[T]||(Y[T]=new i),F[T]||(F[T]=new i)}for(var T=0;T<j;T++){var A=$[T],X=A.raycastResult.body;if(X){var it=F[T],et=this.getWheelTransformWorld(T);et.vectorToWorldFrame(g[this.indexRightAxis],it);var q=A.raycastResult.hitNormalWorld,at=it.dot(q);q.scale(at,N),it.vsub(N,it),it.normalize(),q.cross(it,Y[T]),Y[T].normalize(),A.sideImpulse=Z(L,A.raycastResult.hitPointWorld,X,A.raycastResult.hitPointWorld,it),A.sideImpulse*=y}}var ht=1,W=.5;this.sliding=!1;for(var T=0;T<j;T++){var A=$[T],X=A.raycastResult.body,Ct=0;if(A.slipInfo=1,X){var dt=0,rt=A.brake?A.brake:dt;Ct=C(L,X,A.raycastResult.hitPointWorld,Y[T],rt),Ct+=A.engineForce*z;var ot=rt/Ct;A.slipInfo*=ot}if(A.forwardImpulse=0,A.skidInfo=1,X){A.skidInfo=1;var jt=A.suspensionForce*z*A.frictionSlip,bt=jt,P=jt*bt;A.forwardImpulse=Ct;var S=A.forwardImpulse*W,tt=A.sideImpulse*ht,pt=S*S+tt*tt;if(A.sliding=!1,pt>P){this.sliding=!0,A.sliding=!0;var ot=jt/Math.sqrt(pt);A.skidInfo*=ot}}}if(this.sliding)for(var T=0;T<j;T++){var A=$[T];A.sideImpulse!==0&&A.skidInfo<1&&(A.forwardImpulse*=A.skidInfo,A.sideImpulse*=A.skidInfo)}for(var T=0;T<j;T++){var A=$[T],ut=new i;if(ut.copy(A.raycastResult.hitPointWorld),A.forwardImpulse!==0){var mt=new i;Y[T].scale(A.forwardImpulse,mt),L.applyImpulse(mt,ut)}if(A.sideImpulse!==0){var X=A.raycastResult.body,wt=new i;wt.copy(A.raycastResult.hitPointWorld);var Et=new i;F[T].scale(A.sideImpulse,Et),L.pointToLocalFrame(ut,ut),ut["xyz"[this.indexUpAxis]]*=A.rollInfluence,L.pointToWorldFrame(ut,ut),L.applyImpulse(Et,ut),Et.scale(-1,Et),X.applyImpulse(Et,wt)}}};var x=new i,b=new i,R=new i;function C(z,N,$,j,L){var Y=0,F=$,T=x,A=b,X=R;z.getVelocityAtWorldPoint(F,T),N.getVelocityAtWorldPoint(F,A),T.vsub(A,X);var it=j.dot(X),et=B(z,$,j),q=B(N,$,j),at=1,ht=at/(et+q);return Y=-it*ht,L<Y&&(Y=L),Y<-L&&(Y=-L),Y}var U=new i,K=new i,M=new i,E=new i;function B(z,N,$){var j=U,L=K,Y=M,F=E;return N.vsub(z.position,j),j.cross($,L),z.invInertiaWorld.vmult(L,F),F.cross(j,Y),z.invMass+$.dot(Y)}var H=new i,I=new i,G=new i;function Z(z,N,$,j,L,at){var F=L.norm2();if(F>1.1)return 0;var T=H,A=I,X=G;z.getVelocityAtWorldPoint(N,T),$.getVelocityAtWorldPoint(j,A),T.vsub(A,X);var it=L.dot(X),et=.2,q=1/(z.invMass+$.invMass),at=-et*it*q;return at}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,r){var i=e("./Body"),a=e("../shapes/Sphere"),o=e("../shapes/Box"),l=e("../math/Vec3"),u=e("../constraints/HingeConstraint");n.exports=h;function h(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new o(new l(5,2,.5));this.chassisBody=new i(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new i(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,p=new l;this.chassisBody.pointToWorldFrame(g,p),v.position.set(p.x,p.y,p.z);var m=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(m);var _=new u(this.chassisBody,v,{pivotA:g,axisA:m,pivotB:l.ZERO,axisB:m,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],p=Math.cos(f),m=Math.sin(f),_=g.x,y=g.y;this.constraints[v].axisA.set(p*_-m*y,m*_+p*y,0)},h.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},h.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var c=new l;h.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},h.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],p=this.wheelBodies[v],m=p.torque;g.scale(f,c),p.vectorToWorldFrame(c,c),m.vadd(c,m)},h.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),p=0;p<g.length;p++)f.add(g[p]);for(var p=0;p<v.length;p++)f.addConstraint(v[p]);f.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},h.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),p=0;p<g.length;p++)f.remove(g[p]);for(var p=0;p<v.length;p++)f.removeConstraint(v[p])};var d=new l;h.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],p=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),p.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,r){n.exports=a,e("../shapes/Shape");var i=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new i;a.prototype.getNeighbors=function(v,g){for(var p=this.particles.length,m=v.id,_=this.smoothingRadius*this.smoothingRadius,y=o,x=0;x!==p;x++){var b=this.particles[x];b.position.vsub(v.position,y),m!==b.id&&y.norm2()<_&&g.push(b)}};var l=new i,u=new i,h=new i,c=new i,d=new i,f=new i;a.prototype.update=function(){for(var v=this.particles.length,g=l,p=this.speedOfSound,m=this.eps,_=0;_!==v;_++){var y=this.particles[_],x=this.neighbors[_];x.length=0,this.getNeighbors(y,x),x.push(this.particles[_]);for(var b=x.length,R=0,C=0;C!==b;C++){y.position.vsub(x[C].position,g);var U=g.norm(),K=this.w(U);R+=x[C].mass*K}this.densities[_]=R,this.pressures[_]=p*p*(this.densities[_]-this.density)}for(var M=u,E=h,B=c,H=d,I=f,_=0;_!==v;_++){var G=this.particles[_];M.set(0,0,0),E.set(0,0,0);for(var Z,z,x=this.neighbors[_],b=x.length,C=0;C!==b;C++){var N=x[C];G.position.vsub(N.position,H);var $=H.norm();Z=-N.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+m)+this.pressures[C]/(this.densities[C]*this.densities[C]+m)),this.gradw(H,B),B.mult(Z,B),M.vadd(B,M),N.velocity.vsub(G.velocity,I),I.mult(1/(1e-4+this.densities[_]*this.densities[C])*this.viscosity*N.mass,I),z=this.nablaw($),I.mult(z,I),E.vadd(I,E)}E.mult(G.mass,E),M.mult(G.mass,M),G.force.vadd(E,G.force),G.force.vadd(M,G.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var p=v.norm(),m=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(m,9))*Math.pow(m*m-p*p,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,p=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return p}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,r){var i=e("../math/Vec3");n.exports=a;function a(_,y,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=_,this.bodyB=y,this.localAnchorA=new i,this.localAnchorB=new i,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}a.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},a.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},a.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},a.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new i,l=new i,u=new i,h=new i,c=new i,d=new i,f=new i,v=new i,g=new i,p=new i,m=new i;a.prototype.applyForce=function(){var _=this.stiffness,y=this.damping,x=this.restLength,b=this.bodyA,R=this.bodyB,C=o,U=l,K=u,M=h,E=m,B=c,H=d,I=f,G=v,Z=g,z=p;this.getWorldAnchorA(B),this.getWorldAnchorB(H),B.vsub(b.position,I),H.vsub(R.position,G),H.vsub(B,C);var N=C.norm();U.copy(C),U.normalize(),R.velocity.vsub(b.velocity,K),R.angularVelocity.cross(G,E),K.vadd(E,K),b.angularVelocity.cross(I,E),K.vsub(E,K),U.mult(-_*(N-x)-y*K.dot(U),M),b.force.vsub(M,b.force),R.force.vadd(M,R.force),I.cross(M,Z),G.cross(M,z),b.torque.vsub(Z,b.torque),R.torque.vadd(z,R.torque)}},{"../math/Vec3":30}],36:[function(e,n,r){var i=e("../math/Vec3"),a=e("../math/Transform"),o=e("../collision/RaycastResult"),l=e("../utils/Utils");n.exports=u;function u(d){d=l.defaults(d,{chassisConnectionPointLocal:new i,chassisConnectionPointWorld:new i,directionLocal:new i,directionWorld:new i,axleLocal:new i,axleWorld:new i,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var c=new i,h=new i,c=new i;u.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,h),d.getVelocityAtWorldPoint(h,c);var g=f.hitNormalWorld.dot(c);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var p=-1/v;this.suspensionRelativeVelocity=g*p,this.clippedInvContactDotSuspension=p}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,r){n.exports=l;var i=e("./Shape"),a=e("../math/Vec3"),o=e("./ConvexPolyhedron");function l(c){i.call(this),this.type=i.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new i,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=a,g=[new v(-c,-d,-f),new v(c,-d,-f),new v(c,d,-f),new v(-c,d,-f),new v(-c,-d,f),new v(c,-d,f),new v(c,d,f),new v(-c,d,f)],p=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var m=new o(g,p);this.convexPolyhedronRepresentation=m,m.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new a,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,f){var v=c;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(c,d){var f=c,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new a;new a,l.prototype.forEachWorldCorner=function(c,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],p=0;p<g.length;p++)u.set(g[p][0],g[p][1],g[p][2]),d.vmult(u,u),c.vadd(u,u),f(u.x,u.y,u.z)};var h=[new a,new a,new a,new a,new a,new a,new a,new a];l.prototype.calculateWorldAABB=function(c,d,f,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var p=h[0];d.vmult(p,p),c.vadd(p,p),v.copy(p),f.copy(p);for(var m=1;m<8;m++){var p=h[m];d.vmult(p,p),c.vadd(p,p);var _=p.x,y=p.y,x=p.z;_>v.x&&(v.x=_),y>v.y&&(v.y=y),x>v.z&&(v.z=x),_<f.x&&(f.x=_),y<f.y&&(f.y=y),x<f.z&&(f.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,r){n.exports=l;var i=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function l(L,Y,F){i.call(this),this.type=i.types.CONVEXPOLYHEDRON,this.vertices=L||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=Y||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=F?F.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new i,l.prototype.constructor=l;var u=new a;l.prototype.computeEdges=function(){var L=this.faces,Y=this.vertices;Y.length;var F=this.uniqueEdges;F.length=0;for(var T=u,A=0;A!==L.length;A++)for(var X=L[A],it=X.length,et=0;et!==it;et++){var q=(et+1)%it;Y[X[et]].vsub(Y[X[q]],T),T.normalize();for(var at=!1,ht=0;ht!==F.length;ht++)if(F[ht].almostEquals(T)||F[ht].almostEquals(T)){at=!0;break}at||F.push(T.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var L=0;L<this.faces.length;L++){for(var Y=0;Y<this.faces[L].length;Y++)if(!this.vertices[this.faces[L][Y]])throw new Error("Vertex "+this.faces[L][Y]+" not found!");var F=this.faceNormals[L]||new a;this.getFaceNormal(L,F),F.negate(F),this.faceNormals[L]=F;var T=this.vertices[this.faces[L][0]];if(F.dot(T)<0){console.error(".faceNormals["+L+"] = Vec3("+F.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var Y=0;Y<this.faces[L].length;Y++)console.warn(".vertices["+this.faces[L][Y]+"] = Vec3("+this.vertices[this.faces[L][Y]].toString()+")")}}};var h=new a,c=new a;l.computeNormal=function(L,Y,F,T){Y.vsub(L,c),F.vsub(Y,h),h.cross(c,T),T.isZero()||T.normalize()},l.prototype.getFaceNormal=function(L,Y){var F=this.faces[L],T=this.vertices[F[0]],A=this.vertices[F[1]],X=this.vertices[F[2]];return l.computeNormal(T,A,X,Y)};var d=new a;l.prototype.clipAgainstHull=function(L,Y,F,T,A,X,it,et,q){for(var at=d,ht=-1,W=-Number.MAX_VALUE,Ct=0;Ct<F.faces.length;Ct++){at.copy(F.faceNormals[Ct]),A.vmult(at,at);var dt=at.dot(X);dt>W&&(W=dt,ht=Ct)}for(var rt=[],ot=F.faces[ht],jt=ot.length,bt=0;bt<jt;bt++){var P=F.vertices[ot[bt]],S=new a;S.copy(P),A.vmult(S,S),T.vadd(S,S),rt.push(S)}ht>=0&&this.clipFaceAgainstHull(X,L,Y,rt,it,et,q)};var f=new a,v=new a,g=new a,p=new a,m=new a,_=new a;l.prototype.findSeparatingAxis=function(L,Y,F,T,A,X,it,et){var q=f,at=v,ht=g,W=p,Ct=m,dt=_,rt=Number.MAX_VALUE,ot=this;if(ot.uniqueAxes)for(var bt=0;bt!==ot.uniqueAxes.length;bt++){F.vmult(ot.uniqueAxes[bt],q);var S=ot.testSepAxis(q,L,Y,F,T,A);if(S===!1)return!1;S<rt&&(rt=S,X.copy(q))}else for(var jt=it?it.length:ot.faces.length,bt=0;bt<jt;bt++){var P=it?it[bt]:bt;q.copy(ot.faceNormals[P]),F.vmult(q,q);var S=ot.testSepAxis(q,L,Y,F,T,A);if(S===!1)return!1;S<rt&&(rt=S,X.copy(q))}if(L.uniqueAxes)for(var bt=0;bt!==L.uniqueAxes.length;bt++){A.vmult(L.uniqueAxes[bt],at);var S=ot.testSepAxis(at,L,Y,F,T,A);if(S===!1)return!1;S<rt&&(rt=S,X.copy(at))}else for(var tt=et?et.length:L.faces.length,bt=0;bt<tt;bt++){var P=et?et[bt]:bt;at.copy(L.faceNormals[P]),A.vmult(at,at);var S=ot.testSepAxis(at,L,Y,F,T,A);if(S===!1)return!1;S<rt&&(rt=S,X.copy(at))}for(var pt=0;pt!==ot.uniqueEdges.length;pt++){F.vmult(ot.uniqueEdges[pt],W);for(var ut=0;ut!==L.uniqueEdges.length;ut++)if(A.vmult(L.uniqueEdges[ut],Ct),W.cross(Ct,dt),!dt.almostZero()){dt.normalize();var mt=ot.testSepAxis(dt,L,Y,F,T,A);if(mt===!1)return!1;mt<rt&&(rt=mt,X.copy(dt))}}return T.vsub(Y,ht),ht.dot(X)>0&&X.negate(X),!0};var y=[],x=[];l.prototype.testSepAxis=function(L,Y,F,T,A,X){var it=this;l.project(it,L,F,T,y),l.project(Y,L,A,X,x);var et=y[0],q=y[1],at=x[0],ht=x[1],W=et-ht,Ct=at-q,dt=W<Ct?W:Ct;return dt};var b=new a,R=new a;l.prototype.calculateLocalInertia=function(L,Y){this.computeLocalAABB(b,R);var F=R.x-b.x,T=R.y-b.y,A=R.z-b.z;Y.x=1/12*L*(2*T*2*T+2*A*2*A),Y.y=1/12*L*(2*F*2*F+2*A*2*A),Y.z=1/12*L*(2*T*2*T+2*F*2*F)},l.prototype.getPlaneConstantOfFace=function(L){var Y=this.faces[L],F=this.faceNormals[L],T=this.vertices[Y[0]],A=-F.dot(T);return A};var C=new a,U=new a,K=new a,M=new a,E=new a,B=new a,H=new a,I=new a;l.prototype.clipFaceAgainstHull=function(L,Y,F,T,A,X,it){for(var et=C,q=U,at=K,ht=M,W=E,Ct=B,dt=H,rt=I,ot=this,jt=[],bt=T,P=jt,S=-1,tt=Number.MAX_VALUE,pt=0;pt<ot.faces.length;pt++){et.copy(ot.faceNormals[pt]),F.vmult(et,et);var ut=et.dot(L);ut<tt&&(tt=ut,S=pt)}if(!(S<0)){var mt=ot.faces[S];mt.connectedFaces=[];for(var wt=0;wt<ot.faces.length;wt++)for(var Et=0;Et<ot.faces[wt].length;Et++)mt.indexOf(ot.faces[wt][Et])!==-1&&wt!==S&&mt.connectedFaces.indexOf(wt)===-1&&mt.connectedFaces.push(wt);bt.length;for(var St=mt.length,Ht=0;Ht<St;Ht++){var $t=ot.vertices[mt[Ht]],xt=ot.vertices[mt[(Ht+1)%St]];$t.vsub(xt,q),at.copy(q),F.vmult(at,at),Y.vadd(at,at),ht.copy(this.faceNormals[S]),F.vmult(ht,ht),Y.vadd(ht,ht),at.cross(ht,W),W.negate(W),Ct.copy($t),F.vmult(Ct,Ct),Y.vadd(Ct,Ct),-Ct.dot(W);var Zt;{var ae=mt.connectedFaces[Ht];dt.copy(this.faceNormals[ae]);var ne=this.getPlaneConstantOfFace(ae);rt.copy(dt),F.vmult(rt,rt);var Zt=ne-rt.dot(Y)}for(this.clipFaceAgainstPlane(bt,P,rt,Zt);bt.length;)bt.shift();for(;P.length;)bt.push(P.shift())}dt.copy(this.faceNormals[S]);var ne=this.getPlaneConstantOfFace(S);rt.copy(dt),F.vmult(rt,rt);for(var Zt=ne-rt.dot(Y),wt=0;wt<bt.length;wt++){var Wt=rt.dot(bt[wt])+Zt;if(Wt<=A&&(console.log("clamped: depth="+Wt+" to minDist="+(A+"")),Wt=A),Wt<=X){var Vt=bt[wt];if(Wt<=0){var ee={point:Vt,normal:rt,depth:Wt};it.push(ee)}}}}},l.prototype.clipFaceAgainstPlane=function(L,Y,F,T){var A,X,it=L.length;if(it<2)return Y;var et=L[L.length-1],q=L[0];A=F.dot(et)+T;for(var at=0;at<it;at++){if(q=L[at],X=F.dot(q)+T,A<0)if(X<0){var ht=new a;ht.copy(q),Y.push(ht)}else{var ht=new a;et.lerp(q,A/(A-X),ht),Y.push(ht)}else if(X<0){var ht=new a;et.lerp(q,A/(A-X),ht),Y.push(ht),Y.push(q)}et=q,A=X}return Y},l.prototype.computeWorldVertices=function(L,Y){for(var F=this.vertices.length;this.worldVertices.length<F;)this.worldVertices.push(new a);for(var T=this.vertices,A=this.worldVertices,X=0;X!==F;X++)Y.vmult(T[X],A[X]),L.vadd(A[X],A[X]);this.worldVerticesNeedsUpdate=!1},new a,l.prototype.computeLocalAABB=function(L,Y){var F=this.vertices.length,T=this.vertices;L.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),Y.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var A=0;A<F;A++){var X=T[A];X.x<L.x?L.x=X.x:X.x>Y.x&&(Y.x=X.x),X.y<L.y?L.y=X.y:X.y>Y.y&&(Y.y=X.y),X.z<L.z?L.z=X.z:X.z>Y.z&&(Y.z=X.z)}},l.prototype.computeWorldFaceNormals=function(L){for(var Y=this.faceNormals.length;this.worldFaceNormals.length<Y;)this.worldFaceNormals.push(new a);for(var F=this.faceNormals,T=this.worldFaceNormals,A=0;A!==Y;A++)L.vmult(F[A],T[A]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var L=0,Y=this.vertices,F=0,T=Y.length;F!==T;F++){var A=Y[F].norm2();A>L&&(L=A)}this.boundingSphereRadius=Math.sqrt(L)};var G=new a;l.prototype.calculateWorldAABB=function(L,Y,F,T){for(var A=this.vertices.length,X=this.vertices,it,et,q,at,ht,W,Ct=0;Ct<A;Ct++){G.copy(X[Ct]),Y.vmult(G,G),L.vadd(G,G);var dt=G;dt.x<it||it===void 0?it=dt.x:(dt.x>at||at===void 0)&&(at=dt.x),dt.y<et||et===void 0?et=dt.y:(dt.y>ht||ht===void 0)&&(ht=dt.y),dt.z<q||q===void 0?q=dt.z:(dt.z>W||W===void 0)&&(W=dt.z)}F.set(it,et,q),T.set(at,ht,W)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(L){L=L||new a;for(var Y=this.vertices.length,F=this.vertices,T=0;T<Y;T++)L.vadd(F[T],L);return L.mult(1/Y,L),L},l.prototype.transformAllPoints=function(L,Y){var F=this.vertices.length,T=this.vertices;if(Y){for(var A=0;A<F;A++){var X=T[A];Y.vmult(X,X)}for(var A=0;A<this.faceNormals.length;A++){var X=this.faceNormals[A];Y.vmult(X,X)}}if(L)for(var A=0;A<F;A++){var X=T[A];X.vadd(L,X)}};var Z=new a,z=new a,N=new a;l.prototype.pointIsInside=function(L){var Y=this.vertices.length,F=this.vertices,T=this.faces,A=this.faceNormals,X=null,it=this.faces.length,et=Z;this.getAveragePointLocal(et);for(var q=0;q<it;q++){this.faces[q].length;var Y=A[q],at=F[T[q][0]],ht=z;L.vsub(at,ht);var W=Y.dot(ht),Ct=N;et.vsub(at,Ct);var dt=Y.dot(Ct);if(W<0&&dt>0||W>0&&dt<0)return!1}return X?1:-1},new a;var $=new a,j=new a;l.project=function(L,Y,F,T,A){var X=L.vertices.length,it=$,et=0,q=0,at=j,ht=L.vertices;at.setZero(),o.vectorToLocalFrame(F,T,Y,it),o.pointToLocalFrame(F,T,at,at);var W=at.dot(it);q=et=ht[0].dot(it);for(var Ct=1;Ct<X;Ct++){var dt=ht[Ct].dot(it);dt>et&&(et=dt),dt<q&&(q=dt)}if(q-=W,et-=W,q>et){var rt=q;q=et,et=rt}A[0]=et,A[1]=q}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,r){n.exports=l;var i=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function l(u,h,c,d){var f=d,v=[],g=[],p=[],m=[],_=[],y=Math.cos,x=Math.sin;v.push(new a(h*y(0),h*x(0),-c*.5)),m.push(0),v.push(new a(u*y(0),u*x(0),c*.5)),_.push(1);for(var b=0;b<f;b++){var R=2*Math.PI/f*(b+1),C=2*Math.PI/f*(b+.5);b<f-1?(v.push(new a(h*y(R),h*x(R),-c*.5)),m.push(2*b+2),v.push(new a(u*y(R),u*x(R),c*.5)),_.push(2*b+3),p.push([2*b+2,2*b+3,2*b+1,2*b])):p.push([0,1,2*b+1,2*b]),(f%2===1||b<f/2)&&g.push(new a(y(C),x(C),0))}p.push(_),g.push(new a(0,0,1));for(var U=[],b=0;b<m.length;b++)U.push(m[m.length-b-1]);p.push(U),this.type=i.types.CONVEXPOLYHEDRON,o.call(this,v,p,g)}l.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,r){var i=e("./Shape"),a=e("./ConvexPolyhedron"),o=e("../math/Vec3"),l=e("../utils/Utils");n.exports=u;function u(h,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,i.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=i.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new i,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var h=this.data,c=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var v=h[d][f];v<c&&(c=v)}this.minValue=c},u.prototype.updateMaxValue=function(){for(var h=this.data,c=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var v=h[d][f];v>c&&(c=v)}this.maxValue=c},u.prototype.setHeightValueAtIndex=function(h,c,d){var f=this.data;f[h][c]=d,this.clearCachedConvexTrianglePillar(h,c,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,c,!0),this.clearCachedConvexTrianglePillar(h-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(h,c-1,!0),this.clearCachedConvexTrianglePillar(h,c-1,!1)),c>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,c-1,!0)},u.prototype.getRectMinMax=function(h,c,d,f,v){v=v||[];for(var g=this.data,p=this.minValue,m=h;m<=d;m++)for(var _=c;_<=f;_++){var y=g[m][_];y>p&&(p=y)}v[0]=this.minValue,v[1]=p},u.prototype.getIndexOfPosition=function(h,c,d,f){var v=this.elementSize,g=this.data,p=Math.floor(h/v),m=Math.floor(c/v);return d[0]=p,d[1]=m,f&&(p<0&&(p=0),m<0&&(m=0),p>=g.length-1&&(p=g.length-1),m>=g[0].length-1&&(m=g[0].length-1)),!(p<0||m<0||p>=g.length-1||m>=g[0].length-1)},u.prototype.getHeightAt=function(h,c,d){var f=[];this.getIndexOfPosition(h,c,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(h,c,d){return h+"_"+c+"_"+(d?1:0)},u.prototype.getCachedConvexTrianglePillar=function(h,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]},u.prototype.setCachedConvexTrianglePillar=function(h,c,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]={convex:f,offset:v}},u.prototype.clearCachedConvexTrianglePillar=function(h,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]},u.prototype.getConvexTrianglePillar=function(h,c,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,c,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new a,v=new o,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,p=this.elementSize,m=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new o);m.length=5;for(var _=0;_<5;_++)m[_]||(m[_]=[]);var y=f.vertices,x=(Math.min(g[h][c],g[h+1][c],g[h][c+1],g[h+1][c+1])-this.minValue)/2+this.minValue;d?(v.set((h+.75)*p,(c+.75)*p,x),y[0].set(.25*p,.25*p,g[h+1][c+1]-x),y[1].set(-.75*p,.25*p,g[h][c+1]-x),y[2].set(.25*p,-.75*p,g[h+1][c]-x),y[3].set(.25*p,.25*p,-x-1),y[4].set(-.75*p,.25*p,-x-1),y[5].set(.25*p,-.75*p,-x-1),m[0][0]=0,m[0][1]=1,m[0][2]=2,m[1][0]=5,m[1][1]=4,m[1][2]=3,m[2][0]=2,m[2][1]=5,m[2][2]=3,m[2][3]=0,m[3][0]=3,m[3][1]=4,m[3][2]=1,m[3][3]=0,m[4][0]=1,m[4][1]=4,m[4][2]=5,m[4][3]=2):(v.set((h+.25)*p,(c+.25)*p,x),y[0].set(-.25*p,-.25*p,g[h][c]-x),y[1].set(.75*p,-.25*p,g[h+1][c]-x),y[2].set(-.25*p,.75*p,g[h][c+1]-x),y[3].set(-.25*p,-.25*p,-x-1),y[4].set(.75*p,-.25*p,-x-1),y[5].set(-.25*p,.75*p,-x-1),m[0][0]=0,m[0][1]=1,m[0][2]=2,m[1][0]=5,m[1][1]=4,m[1][2]=3,m[2][0]=0,m[2][1]=2,m[2][2]=5,m[2][3]=3,m[3][0]=1,m[3][1]=0,m[3][2]=3,m[3][3]=4,m[4][0]=4,m[4][1]=5,m[4][2]=2,m[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,c,d,f,v)},u.prototype.calculateLocalInertia=function(h,c){return c=c||new o,c.set(0,0,0),c},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(h,c,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var h=this.data,c=this.elementSize;this.boundingSphereRadius=new o(h.length*c,h[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,r){n.exports=o;var i=e("./Shape"),a=e("../math/Vec3");function o(){i.call(this),this.type=i.types.PARTICLE}o.prototype=new i,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,u){return u=u||new a,u.set(0,0,0),u},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(l,u,h,c){h.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,r){n.exports=o;var i=e("./Shape"),a=e("../math/Vec3");function o(){i.call(this),this.type=i.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new i,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(u){var h=this.worldNormal;h.set(0,0,1),u.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(u,h){return h=h||new a,h},o.prototype.volume=function(){return Number.MAX_VALUE};var l=new a;o.prototype.calculateWorldAABB=function(u,h,c,d){l.set(0,0,1),h.vmult(l,l);var f=Number.MAX_VALUE;c.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=u.x),l.y===1&&(d.y=u.y),l.z===1&&(d.z=u.z),l.x===-1&&(c.x=u.x),l.y===-1&&(c.y=u.y),l.z===-1&&(c.z=u.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,r){n.exports=i;var i=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function i(){this.id=i.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}i.prototype.constructor=i,i.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},i.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},i.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},i.idCounter=0,i.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,r){n.exports=o;var i=e("./Shape"),a=e("../math/Vec3");function o(l){if(i.call(this),this.radius=l!==void 0?Number(l):1,this.type=i.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new i,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,u){u=u||new a;var h=2*l*this.radius*this.radius/5;return u.x=h,u.y=h,u.z=h,u},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(l,u,h,c){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];h[g]=l[g]-d,c[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,r){n.exports=h;var i=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),l=e("../collision/AABB"),u=e("../utils/Octree");function h(U,K){i.call(this),this.type=i.types.TRIMESH,this.vertices=new Float32Array(U),this.indices=new Int16Array(K),this.normals=new Float32Array(K.length),this.aabb=new l,this.edges=null,this.scale=new a(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new i,h.prototype.constructor=h;var c=new a;h.prototype.updateTree=function(){var U=this.tree;U.reset(),U.aabb.copy(this.aabb);var K=this.scale;U.aabb.lowerBound.x*=1/K.x,U.aabb.lowerBound.y*=1/K.y,U.aabb.lowerBound.z*=1/K.z,U.aabb.upperBound.x*=1/K.x,U.aabb.upperBound.y*=1/K.y,U.aabb.upperBound.z*=1/K.z;for(var M=new l,E=new a,B=new a,H=new a,I=[E,B,H],G=0;G<this.indices.length/3;G++){var Z=G*3;this._getUnscaledVertex(this.indices[Z],E),this._getUnscaledVertex(this.indices[Z+1],B),this._getUnscaledVertex(this.indices[Z+2],H),M.setFromPoints(I),U.insert(M,G)}U.removeEmptyNodes()};var d=new l;h.prototype.getTrianglesInAABB=function(U,K){d.copy(U);var M=this.scale,E=M.x,B=M.y,H=M.z,I=d.lowerBound,G=d.upperBound;return I.x/=E,I.y/=B,I.z/=H,G.x/=E,G.y/=B,G.z/=H,this.tree.aabbQuery(d,K)},h.prototype.setScale=function(U){var K=this.scale.x===this.scale.y===this.scale.z,M=U.x===U.y===U.z;K&&M||this.updateNormals(),this.scale.copy(U),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var U=c,K=this.normals,M=0;M<this.indices.length/3;M++){var E=M*3,B=this.indices[E],H=this.indices[E+1],I=this.indices[E+2];this.getVertex(B,m),this.getVertex(H,_),this.getVertex(I,y),h.computeNormal(_,m,y,U),K[E]=U.x,K[E+1]=U.y,K[E+2]=U.z}},h.prototype.updateEdges=function(){for(var U={},K=function(Z,z){var N=B<H?B+"_"+H:H+"_"+B;U[N]=!0},M=0;M<this.indices.length/3;M++){var E=M*3,B=this.indices[E],H=this.indices[E+1];this.indices[E+2],K(),K(),K()}var I=Object.keys(U);this.edges=new Int16Array(I.length*2);for(var M=0;M<I.length;M++){var G=I[M].split("_");this.edges[2*M]=parseInt(G[0],10),this.edges[2*M+1]=parseInt(G[1],10)}},h.prototype.getEdgeVertex=function(U,K,M){var E=this.edges[U*2+(K?1:0)];this.getVertex(E,M)};var f=new a,v=new a;h.prototype.getEdgeVector=function(U,K){var M=f,E=v;this.getEdgeVertex(U,0,M),this.getEdgeVertex(U,1,E),E.vsub(M,K)};var g=new a,p=new a;h.computeNormal=function(U,K,M,E){K.vsub(U,p),M.vsub(K,g),g.cross(p,E),E.isZero()||E.normalize()};var m=new a,_=new a,y=new a;h.prototype.getVertex=function(U,K){var M=this.scale;return this._getUnscaledVertex(U,K),K.x*=M.x,K.y*=M.y,K.z*=M.z,K},h.prototype._getUnscaledVertex=function(U,K){var M=U*3,E=this.vertices;return K.set(E[M],E[M+1],E[M+2])},h.prototype.getWorldVertex=function(U,K,M,E){return this.getVertex(U,E),o.pointToWorldFrame(K,M,E,E),E},h.prototype.getTriangleVertices=function(U,K,M,E){var B=U*3;this.getVertex(this.indices[B],K),this.getVertex(this.indices[B+1],M),this.getVertex(this.indices[B+2],E)},h.prototype.getNormal=function(U,K){var M=U*3;return K.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var x=new l;h.prototype.calculateLocalInertia=function(U,K){this.computeLocalAABB(x);var M=x.upperBound.x-x.lowerBound.x,E=x.upperBound.y-x.lowerBound.y,B=x.upperBound.z-x.lowerBound.z;return K.set(1/12*U*(2*E*2*E+2*B*2*B),1/12*U*(2*M*2*M+2*B*2*B),1/12*U*(2*E*2*E+2*M*2*M))};var b=new a;h.prototype.computeLocalAABB=function(U){var K=U.lowerBound,M=U.upperBound,E=this.vertices.length;this.vertices;var B=b;this.getVertex(0,B),K.copy(B),M.copy(B);for(var H=0;H!==E;H++)this.getVertex(H,B),B.x<K.x?K.x=B.x:B.x>M.x&&(M.x=B.x),B.y<K.y?K.y=B.y:B.y>M.y&&(M.y=B.y),B.z<K.z?K.z=B.z:B.z>M.z&&(M.z=B.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var U=0,K=this.vertices,M=new a,E=0,B=K.length/3;E!==B;E++){this.getVertex(E,M);var H=M.norm2();H>U&&(U=H)}this.boundingSphereRadius=Math.sqrt(U)},new a;var R=new o,C=new l;h.prototype.calculateWorldAABB=function(U,K,M,E){var B=R,H=C;B.position=U,B.quaternion=K,this.aabb.toWorldFrame(B,H),M.copy(H.lowerBound),E.copy(H.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(U,K,M,E,B){U=U||1,K=K||.5,M=M||8,E=E||6,B=B||Math.PI*2;for(var H=[],I=[],G=0;G<=M;G++)for(var Z=0;Z<=E;Z++){var z=Z/E*B,N=G/M*Math.PI*2,$=(U+K*Math.cos(N))*Math.cos(z),j=(U+K*Math.cos(N))*Math.sin(z),L=K*Math.sin(N);H.push($,j,L)}for(var G=1;G<=M;G++)for(var Z=1;Z<=E;Z++){var Y=(E+1)*G+Z-1,F=(E+1)*(G-1)+Z-1,T=(E+1)*(G-1)+Z,A=(E+1)*G+Z;I.push(Y,F,A),I.push(F,T,A)}return new h(H,I)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,r){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var i=e("./Solver");function a(){i.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new i;var o=[],l=[],u=[];a.prototype.solve=function(h,c){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,p=g.length,m=c.bodies,_=m.length,y=h,x,b,R,C,U,K;if(p!==0)for(var M=0;M!==_;M++)m[M].updateSolveMassProperties();var E=l,B=u,H=o;E.length=p,B.length=p,H.length=p;for(var M=0;M!==p;M++){var I=g[M];H[M]=0,B[M]=I.computeB(y),E[M]=1/I.computeC()}if(p!==0){for(var M=0;M!==_;M++){var G=m[M],Z=G.vlambda,z=G.wlambda;Z.set(0,0,0),z&&z.set(0,0,0)}for(d=0;d!==f;d++){C=0;for(var N=0;N!==p;N++){var I=g[N];x=B[N],b=E[N],K=H[N],U=I.computeGWlambda(),R=b*(x-U-I.eps*K),K+R<I.minForce?R=I.minForce-K:K+R>I.maxForce&&(R=I.maxForce-K),H[N]+=R,C+=R>0?R:-R,I.addToWlambda(R)}if(C*C<v)break}for(var M=0;M!==_;M++){var G=m[M],$=G.velocity,j=G.angularVelocity;$.vadd(G.vlambda,$),j&&j.vadd(G.wlambda,j)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,r){n.exports=i;function i(){this.equations=[]}i.prototype.solve=function(a,o){return 0},i.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},i.prototype.removeEquation=function(a){var o=this.equations,l=o.indexOf(a);l!==-1&&o.splice(l,1)},i.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,r){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var i=e("./Solver"),a=e("../objects/Body");function o(m){for(i.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=m,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new i;var l=[],u=[],h={bodies:[]},c=a.STATIC;function d(m){for(var _=m.length,y=0;y!==_;y++){var x=m[y];if(!x.visited&&!(x.body.type&c))return x}return!1}var f=[];function v(m,_,y,x){for(f.push(m),m.visited=!0,_(m,y,x);f.length;)for(var b=f.pop(),R;R=d(b.children);)R.visited=!0,_(R,y,x),f.push(R)}function g(m,_,y){_.push(m.body);for(var x=m.eqs.length,b=0;b!==x;b++){var R=m.eqs[b];y.indexOf(R)===-1&&y.push(R)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(m,_){for(var y=l,x=this.nodePool,b=_.bodies,R=this.equations,C=R.length,U=b.length,K=this.subsolver;x.length<U;)x.push(this.createNode());y.length=U;for(var M=0;M<U;M++)y[M]=x[M];for(var M=0;M!==U;M++){var E=y[M];E.body=b[M],E.children.length=0,E.eqs.length=0,E.visited=!1}for(var B=0;B!==C;B++){var H=R[B],M=b.indexOf(H.bi),I=b.indexOf(H.bj),G=y[M],Z=y[I];G.children.push(Z),G.eqs.push(H),Z.children.push(G),Z.eqs.push(H)}var z,N=0,$=u;K.tolerance=this.tolerance,K.iterations=this.iterations;for(var j=h;z=d(y);){$.length=0,j.bodies.length=0,v(z,g,j.bodies,$);var L=$.length;$=$.sort(p);for(var M=0;M!==L;M++)K.addEquation($[M]);K.solve(m,j),K.removeAllEquations(),N++}return N};function p(m,_){return _.id-m.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,r){var i=function(){};n.exports=i,i.prototype={constructor:i,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[a]===void 0&&(l[a]=[]),l[a].indexOf(o)===-1&&l[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var l=this._listeners;return l[a]!==void 0&&l[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var l=this._listeners;if(l[a]===void 0)return this;var u=l[a].indexOf(o);return u!==-1&&l[a].splice(u,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,l=o[a.type];if(l!==void 0){a.target=this;for(var u=0,h=l.length;u<h;u++)l[u].call(this,a)}return this}}},{}],50:[function(e,n,r){var i=e("../collision/AABB"),a=e("../math/Vec3");n.exports=l;function o(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new i,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new o,o.prototype.reset=function(c,d){this.children.length=this.data.length=0},o.prototype.insert=function(c,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(c))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var p=!1;g.length||(this.subdivide(),p=!0);for(var m=0;m!==8;m++)if(g[m].insert(c,d,f+1))return!0;p&&(g.length=0)}return v.push(d),!0};var u=new a;o.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,f=c.upperBound,v=this.children;v.push(new o({aabb:new i({lowerBound:new a(0,0,0)})}),new o({aabb:new i({lowerBound:new a(1,0,0)})}),new o({aabb:new i({lowerBound:new a(1,1,0)})}),new o({aabb:new i({lowerBound:new a(1,1,1)})}),new o({aabb:new i({lowerBound:new a(0,1,1)})}),new o({aabb:new i({lowerBound:new a(0,0,1)})}),new o({aabb:new i({lowerBound:new a(1,0,1)})}),new o({aabb:new i({lowerBound:new a(0,1,0)})})),f.vsub(d,u),u.scale(.5,u);for(var g=this.root||this,p=0;p!==8;p++){var m=v[p];m.root=g;var _=m.aabb.lowerBound;_.x*=u.x,_.y*=u.y,_.z*=u.z,_.vadd(d,_),_.vadd(u,m.aabb.upperBound)}},o.prototype.aabbQuery=function(c,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(c)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var h=new i;o.prototype.rayQuery=function(c,d,f){return c.getAABB(h),h.toLocalFrame(d,h),this.aabbQuery(h,f),f},o.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,r){n.exports=i;function i(){this.objects=[],this.type=Object}i.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},i.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},i.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,r){n.exports=i;function i(){this.data={keys:[]}}i.prototype.get=function(a,o){if(a>o){var l=o;o=a,a=l}return this.data[a+"-"+o]},i.prototype.set=function(a,o,l){if(a>o){var u=o;o=a,a=u}var h=a+"-"+o;this.get(a,o)||this.data.keys.push(h),this.data[h]=l},i.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var l=o.pop();delete a[l]}}},{}],53:[function(e,n,r){function i(){}n.exports=i,i.defaults=function(a,o){a=a||{};for(var l in o)l in a||(a[l]=o[l]);return a}},{}],54:[function(e,n,r){n.exports=o;var i=e("../math/Vec3"),a=e("./Pool");function o(){a.call(this),this.type=i}o.prototype=new a,o.prototype.constructObject=function(){return new i}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,r){n.exports=v;var i=e("../collision/AABB"),a=e("../shapes/Shape"),o=e("../collision/Ray"),l=e("../math/Vec3"),u=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var c=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function v(ct){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=ct,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(ct,lt,ft,vt,te,zt){var Tt;this.contactPointPool.length?(Tt=this.contactPointPool.pop(),Tt.bi=ct,Tt.bj=lt):Tt=new d(ct,lt),Tt.enabled=ct.collisionResponse&&lt.collisionResponse&&ft.collisionResponse&&vt.collisionResponse;var Dt=this.currentContactMaterial;Tt.restitution=Dt.restitution,Tt.setSpookParams(Dt.contactEquationStiffness,Dt.contactEquationRelaxation,this.world.dt);var st=ft.material||ct.material,Pt=vt.material||lt.material;return st&&Pt&&st.restitution>=0&&Pt.restitution>=0&&(Tt.restitution=st.restitution*Pt.restitution),Tt.si=te||ft,Tt.sj=zt||vt,Tt},v.prototype.createFrictionEquationsFromContact=function(ct,lt){var ft=ct.bi,vt=ct.bj,te=ct.si,zt=ct.sj,Tt=this.world,Dt=this.currentContactMaterial,st=Dt.friction,Pt=te.material||ft.material,Ut=zt.material||vt.material;if(Pt&&Ut&&Pt.friction>=0&&Ut.friction>=0&&(st=Pt.friction*Ut.friction),st>0){var Gt=st*Tt.gravity.length(),Nt=ft.invMass+vt.invMass;Nt>0&&(Nt=1/Nt);var At=this.frictionEquationPool,w=At.length?At.pop():new f(ft,vt,Gt*Nt),k=At.length?At.pop():new f(ft,vt,Gt*Nt);return w.bi=k.bi=ft,w.bj=k.bj=vt,w.minForce=k.minForce=-Gt*Nt,w.maxForce=k.maxForce=Gt*Nt,w.ri.copy(ct.ri),w.rj.copy(ct.rj),k.ri.copy(ct.ri),k.rj.copy(ct.rj),ct.ni.tangents(w.t,k.t),w.setSpookParams(Dt.frictionEquationStiffness,Dt.frictionEquationRelaxation,Tt.dt),k.setSpookParams(Dt.frictionEquationStiffness,Dt.frictionEquationRelaxation,Tt.dt),w.enabled=k.enabled=ct.enabled,lt.push(w,k),!0}return!1};var g=new l,p=new l,m=new l;v.prototype.createFrictionFromAverage=function(ct){var lt=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(lt,this.frictionResult)||ct===1)){var ft=this.frictionResult[this.frictionResult.length-2],vt=this.frictionResult[this.frictionResult.length-1];g.setZero(),p.setZero(),m.setZero();var te=lt.bi;lt.bj;for(var zt=0;zt!==ct;zt++)lt=this.result[this.result.length-1-zt],lt.bodyA!==te?(g.vadd(lt.ni,g),p.vadd(lt.ri,p),m.vadd(lt.rj,m)):(g.vsub(lt.ni,g),p.vadd(lt.rj,p),m.vadd(lt.ri,m));var Tt=1/ct;p.scale(Tt,ft.ri),m.scale(Tt,ft.rj),vt.ri.copy(ft.ri),vt.rj.copy(ft.rj),g.normalize(),g.tangents(ft.t,vt.t)}};var _=new l,y=new l,x=new h,b=new h;v.prototype.getContacts=function(ct,lt,ft,vt,te,zt,Tt){this.contactPointPool=te,this.frictionEquationPool=Tt,this.result=vt,this.frictionResult=zt;for(var Dt=x,st=b,Pt=_,Ut=y,Gt=0,Nt=ct.length;Gt!==Nt;Gt++){var At=ct[Gt],w=lt[Gt],k=null;At.material&&w.material&&(k=ft.getContactMaterial(At.material,w.material)||null);for(var Q=0;Q<At.shapes.length;Q++){At.quaternion.mult(At.shapeOrientations[Q],Dt),At.quaternion.vmult(At.shapeOffsets[Q],Pt),Pt.vadd(At.position,Pt);for(var V=At.shapes[Q],J=0;J<w.shapes.length;J++){w.quaternion.mult(w.shapeOrientations[J],st),w.quaternion.vmult(w.shapeOffsets[J],Ut),Ut.vadd(w.position,Ut);var _t=w.shapes[J];if(!(Pt.distanceTo(Ut)>V.boundingSphereRadius+_t.boundingSphereRadius)){var Ot=null;V.material&&_t.material&&(Ot=ft.getContactMaterial(V.material,_t.material)||null),this.currentContactMaterial=Ot||k||ft.defaultContactMaterial;var It=this[V.type|_t.type];It&&(V.type<_t.type?It.call(this,V,_t,Pt,Ut,Dt,st,At,w,V,_t):It.call(this,_t,V,Ut,Pt,st,Dt,w,At,V,_t))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(ct,lt,ft,vt,te,zt,Tt,Dt){ct.convexPolyhedronRepresentation.material=ct.material,lt.convexPolyhedronRepresentation.material=lt.material,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexConvex(ct.convexPolyhedronRepresentation,lt.convexPolyhedronRepresentation,ft,vt,te,zt,Tt,Dt,ct,lt)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(ct,lt,ft,vt,te,zt,Tt,Dt){ct.convexPolyhedronRepresentation.material=ct.material,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,this.convexConvex(ct.convexPolyhedronRepresentation,lt,ft,vt,te,zt,Tt,Dt,ct,lt)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(ct,lt,ft,vt,te,zt,Tt,Dt){ct.convexPolyhedronRepresentation.material=ct.material,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,this.convexParticle(ct.convexPolyhedronRepresentation,lt,ft,vt,te,zt,Tt,Dt,ct,lt)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(ct,lt,ft,vt,te,zt,Tt,Dt){var st=this.createContactEquation(Tt,Dt,ct,lt);vt.vsub(ft,st.ni),st.ni.normalize(),st.ri.copy(st.ni),st.rj.copy(st.ni),st.ri.mult(ct.radius,st.ri),st.rj.mult(-lt.radius,st.rj),st.ri.vadd(ft,st.ri),st.ri.vsub(Tt.position,st.ri),st.rj.vadd(vt,st.rj),st.rj.vsub(Dt.position,st.rj),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)};var R=new l,C=new l,U=new l;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(ct,lt,ft,vt,te,zt,Tt,Dt){var st=new l,Pt=R;Pt.set(0,0,1),te.vmult(Pt,Pt);for(var Ut=0;Ut<lt.vertices.length/3;Ut++){lt.getVertex(Ut,st);var Gt=new l;Gt.copy(st),u.pointToWorldFrame(vt,zt,Gt,st);var Nt=C;st.vsub(ft,Nt);var At=Pt.dot(Nt);if(At<=0){var w=this.createContactEquation(Tt,Dt,ct,lt);w.ni.copy(Pt);var k=U;Pt.scale(Nt.dot(Pt),k),st.vsub(k,k),w.ri.copy(k),w.ri.vsub(Tt.position,w.ri),w.rj.copy(st),w.rj.vsub(Dt.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult)}}};var K=new l,M=new l;new l;var E=new l,B=new l,H=new l,I=new l,G=new l,Z=new l,z=new l,N=new l,$=new l,j=new l,L=new l,Y=new i,F=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(ct,lt,ft,vt,te,zt,Tt,Dt){var st=H,Pt=I,Ut=G,Gt=Z,Nt=z,At=N,w=Y,k=B,Q=M,V=F;u.pointToLocalFrame(vt,zt,ft,Nt);var J=ct.radius;w.lowerBound.set(Nt.x-J,Nt.y-J,Nt.z-J),w.upperBound.set(Nt.x+J,Nt.y+J,Nt.z+J),lt.getTrianglesInAABB(w,V);for(var _t=E,Ot=ct.radius*ct.radius,It=0;It<V.length;It++)for(var Ft=0;Ft<3;Ft++)if(lt.getVertex(lt.indices[V[It]*3+Ft],_t),_t.vsub(Nt,Q),Q.norm2()<=Ot){k.copy(_t),u.pointToWorldFrame(vt,zt,k,_t),_t.vsub(ft,Q);var Rt=this.createContactEquation(Tt,Dt,ct,lt);Rt.ni.copy(Q),Rt.ni.normalize(),Rt.ri.copy(Rt.ni),Rt.ri.scale(ct.radius,Rt.ri),Rt.ri.vadd(ft,Rt.ri),Rt.ri.vsub(Tt.position,Rt.ri),Rt.rj.copy(_t),Rt.rj.vsub(Dt.position,Rt.rj),this.result.push(Rt),this.createFrictionEquationsFromContact(Rt,this.frictionResult)}for(var It=0;It<V.length;It++)for(var Ft=0;Ft<3;Ft++){lt.getVertex(lt.indices[V[It]*3+Ft],st),lt.getVertex(lt.indices[V[It]*3+(Ft+1)%3],Pt),Pt.vsub(st,Ut),Nt.vsub(Pt,At);var Qt=At.dot(Ut);Nt.vsub(st,At);var Jt=At.dot(Ut);if(Jt>0&&Qt<0){Nt.vsub(st,At),Gt.copy(Ut),Gt.normalize(),Jt=At.dot(Gt),Gt.scale(Jt,At),At.vadd(st,At);var de=At.distanceTo(Nt);if(de<ct.radius){var Rt=this.createContactEquation(Tt,Dt,ct,lt);At.vsub(Nt,Rt.ni),Rt.ni.normalize(),Rt.ni.scale(ct.radius,Rt.ri),u.pointToWorldFrame(vt,zt,At,At),At.vsub(Dt.position,Rt.rj),u.vectorToWorldFrame(zt,Rt.ni,Rt.ni),u.vectorToWorldFrame(zt,Rt.ri,Rt.ri),this.result.push(Rt),this.createFrictionEquationsFromContact(Rt,this.frictionResult)}}}for(var Ee=$,fe=j,he=L,pe=K,It=0,qt=V.length;It!==qt;It++){lt.getTriangleVertices(V[It],Ee,fe,he),lt.getNormal(V[It],pe),Nt.vsub(Ee,At);var de=At.dot(pe);if(pe.scale(de,At),Nt.vsub(At,At),de=At.distanceTo(Nt),o.pointInTriangle(At,Ee,fe,he)&&de<ct.radius){var Rt=this.createContactEquation(Tt,Dt,ct,lt);At.vsub(Nt,Rt.ni),Rt.ni.normalize(),Rt.ni.scale(ct.radius,Rt.ri),u.pointToWorldFrame(vt,zt,At,At),At.vsub(Dt.position,Rt.rj),u.vectorToWorldFrame(zt,Rt.ni,Rt.ni),u.vectorToWorldFrame(zt,Rt.ri,Rt.ri),this.result.push(Rt),this.createFrictionEquationsFromContact(Rt,this.frictionResult)}}V.length=0};var T=new l,A=new l;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(ct,lt,ft,vt,te,zt,Tt,Dt){var st=this.createContactEquation(Tt,Dt,ct,lt);if(st.ni.set(0,0,1),zt.vmult(st.ni,st.ni),st.ni.negate(st.ni),st.ni.normalize(),st.ni.mult(ct.radius,st.ri),ft.vsub(vt,T),st.ni.mult(st.ni.dot(T),A),T.vsub(A,st.rj),-T.dot(st.ni)<=ct.radius){var Pt=st.ri,Ut=st.rj;Pt.vadd(ft,Pt),Pt.vsub(Tt.position,Pt),Ut.vadd(vt,Ut),Ut.vsub(Dt.position,Ut),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}};var X=new l,it=new l,et=new l;function q(ct,lt,ft){for(var vt=null,te=ct.length,zt=0;zt!==te;zt++){var Tt=ct[zt],Dt=X;ct[(zt+1)%te].vsub(Tt,Dt);var st=it;Dt.cross(lt,st);var Pt=et;ft.vsub(Tt,Pt);var Ut=st.dot(Pt);if(vt===null||Ut>0&&vt===!0||Ut<=0&&vt===!1){vt===null&&(vt=Ut>0);continue}else return!1}return!0}var at=new l,ht=new l,W=new l,Ct=new l,dt=[new l,new l,new l,new l,new l,new l],rt=new l,ot=new l,jt=new l,bt=new l;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(ct,lt,ft,vt,te,zt,Tt,Dt){var st=this.v3pool,Pt=dt;ft.vsub(vt,at),lt.getSideNormals(Pt,zt);for(var Ut=ct.radius,Gt=!1,Nt=ot,At=jt,w=bt,k=null,Q=0,V=0,J=0,_t=null,Ot=0,It=Pt.length;Ot!==It&&Gt===!1;Ot++){var Ft=ht;Ft.copy(Pt[Ot]);var Rt=Ft.norm();Ft.normalize();var Qt=at.dot(Ft);if(Qt<Rt+Ut&&Qt>0){var Jt=W,de=Ct;Jt.copy(Pt[(Ot+1)%3]),de.copy(Pt[(Ot+2)%3]);var Ee=Jt.norm(),fe=de.norm();Jt.normalize(),de.normalize();var he=at.dot(Jt),pe=at.dot(de);if(he<Ee&&he>-Ee&&pe<fe&&pe>-fe){var Se=Math.abs(Qt-Rt-Ut);(_t===null||Se<_t)&&(_t=Se,V=he,J=pe,k=Rt,Nt.copy(Ft),At.copy(Jt),w.copy(de),Q++)}}}if(Q){Gt=!0;var Yt=this.createContactEquation(Tt,Dt,ct,lt);Nt.mult(-Ut,Yt.ri),Yt.ni.copy(Nt),Yt.ni.negate(Yt.ni),Nt.mult(k,Nt),At.mult(V,At),Nt.vadd(At,Nt),w.mult(J,w),Nt.vadd(w,Yt.rj),Yt.ri.vadd(ft,Yt.ri),Yt.ri.vsub(Tt.position,Yt.ri),Yt.rj.vadd(vt,Yt.rj),Yt.rj.vsub(Dt.position,Yt.rj),this.result.push(Yt),this.createFrictionEquationsFromContact(Yt,this.frictionResult)}for(var qt=st.get(),qe=rt,ue=0;ue!==2&&!Gt;ue++)for(var ye=0;ye!==2&&!Gt;ye++)for(var be=0;be!==2&&!Gt;be++)if(qt.set(0,0,0),ue?qt.vadd(Pt[0],qt):qt.vsub(Pt[0],qt),ye?qt.vadd(Pt[1],qt):qt.vsub(Pt[1],qt),be?qt.vadd(Pt[2],qt):qt.vsub(Pt[2],qt),vt.vadd(qt,qe),qe.vsub(ft,qe),qe.norm2()<Ut*Ut){Gt=!0;var Yt=this.createContactEquation(Tt,Dt,ct,lt);Yt.ri.copy(qe),Yt.ri.normalize(),Yt.ni.copy(Yt.ri),Yt.ri.mult(Ut,Yt.ri),Yt.rj.copy(qt),Yt.ri.vadd(ft,Yt.ri),Yt.ri.vsub(Tt.position,Yt.ri),Yt.rj.vadd(vt,Yt.rj),Yt.rj.vsub(Dt.position,Yt.rj),this.result.push(Yt),this.createFrictionEquationsFromContact(Yt,this.frictionResult)}st.release(qt),qt=null;for(var Ie=st.get(),Ye=st.get(),Yt=st.get(),we=st.get(),Se=st.get(),Te=Pt.length,ue=0;ue!==Te&&!Gt;ue++)for(var ye=0;ye!==Te&&!Gt;ye++)if(ue%3!==ye%3){Pt[ye].cross(Pt[ue],Ie),Ie.normalize(),Pt[ue].vadd(Pt[ye],Ye),Yt.copy(ft),Yt.vsub(Ye,Yt),Yt.vsub(vt,Yt);var en=Yt.dot(Ie);Ie.mult(en,we);for(var be=0;be===ue%3||be===ye%3;)be++;Se.copy(ft),Se.vsub(we,Se),Se.vsub(Ye,Se),Se.vsub(vt,Se);var jr=Math.abs(en),ir=Se.norm();if(jr<Pt[be].norm()&&ir<Ut){Gt=!0;var Me=this.createContactEquation(Tt,Dt,ct,lt);Ye.vadd(we,Me.rj),Me.rj.copy(Me.rj),Se.negate(Me.ni),Me.ni.normalize(),Me.ri.copy(Me.rj),Me.ri.vadd(vt,Me.ri),Me.ri.vsub(ft,Me.ri),Me.ri.normalize(),Me.ri.mult(Ut,Me.ri),Me.ri.vadd(ft,Me.ri),Me.ri.vsub(Tt.position,Me.ri),Me.rj.vadd(vt,Me.rj),Me.rj.vsub(Dt.position,Me.rj),this.result.push(Me),this.createFrictionEquationsFromContact(Me,this.frictionResult)}}st.release(Ie,Ye,Yt,we,Se)};var P=new l,S=new l,tt=new l,pt=new l,ut=new l,mt=new l,wt=new l,Et=new l,St=new l,Ht=new l;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(ct,lt,ft,vt,te,zt,Tt,Dt){var st=this.v3pool;ft.vsub(vt,P);for(var Pt=lt.faceNormals,Ut=lt.faces,Gt=lt.vertices,Nt=ct.radius,At=0;At!==Gt.length;At++){var w=Gt[At],k=ut;zt.vmult(w,k),vt.vadd(k,k);var Q=pt;if(k.vsub(ft,Q),Q.norm2()<Nt*Nt){J=!0;var V=this.createContactEquation(Tt,Dt,ct,lt);V.ri.copy(Q),V.ri.normalize(),V.ni.copy(V.ri),V.ri.mult(Nt,V.ri),k.vsub(vt,V.rj),V.ri.vadd(ft,V.ri),V.ri.vsub(Tt.position,V.ri),V.rj.vadd(vt,V.rj),V.rj.vsub(Dt.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);return}}for(var J=!1,At=0,_t=Ut.length;At!==_t&&J===!1;At++){var Ot=Pt[At],It=Ut[At],Ft=mt;zt.vmult(Ot,Ft);var Rt=wt;zt.vmult(Gt[It[0]],Rt),Rt.vadd(vt,Rt);var Qt=Et;Ft.mult(-Nt,Qt),ft.vadd(Qt,Qt);var Jt=St;Qt.vsub(Rt,Jt);var de=Jt.dot(Ft),Ee=Ht;if(ft.vsub(Rt,Ee),de<0&&Ee.dot(Ft)>0){for(var fe=[],he=0,pe=It.length;he!==pe;he++){var qt=st.get();zt.vmult(Gt[It[he]],qt),vt.vadd(qt,qt),fe.push(qt)}if(q(fe,Ft,ft)){J=!0;var V=this.createContactEquation(Tt,Dt,ct,lt);Ft.mult(-Nt,V.ri),Ft.negate(V.ni);var qe=st.get();Ft.mult(-de,qe);var ue=st.get();Ft.mult(-Nt,ue),ft.vsub(vt,V.rj),V.rj.vadd(ue,V.rj),V.rj.vadd(qe,V.rj),V.rj.vadd(vt,V.rj),V.rj.vsub(Dt.position,V.rj),V.ri.vadd(ft,V.ri),V.ri.vsub(Tt.position,V.ri),st.release(qe),st.release(ue),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(var he=0,ye=fe.length;he!==ye;he++)st.release(fe[he]);return}else for(var he=0;he!==It.length;he++){var be=st.get(),Ie=st.get();zt.vmult(Gt[It[(he+1)%It.length]],be),zt.vmult(Gt[It[(he+2)%It.length]],Ie),vt.vadd(be,be),vt.vadd(Ie,Ie);var Ye=S;Ie.vsub(be,Ye);var Yt=tt;Ye.unit(Yt);var we=st.get(),Se=st.get();ft.vsub(be,Se);var Te=Se.dot(Yt);Yt.mult(Te,we),we.vadd(be,we);var en=st.get();if(we.vsub(ft,en),Te>0&&Te*Te<Ye.norm2()&&en.norm2()<Nt*Nt){var V=this.createContactEquation(Tt,Dt,ct,lt);we.vsub(vt,V.rj),we.vsub(ft,V.ni),V.ni.normalize(),V.ni.mult(Nt,V.ri),V.rj.vadd(vt,V.rj),V.rj.vsub(Dt.position,V.rj),V.ri.vadd(ft,V.ri),V.ri.vsub(Tt.position,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(var he=0,ye=fe.length;he!==ye;he++)st.release(fe[he]);st.release(be),st.release(Ie),st.release(we),st.release(en),st.release(Se);return}st.release(be),st.release(Ie),st.release(we),st.release(en),st.release(Se)}for(var he=0,ye=fe.length;he!==ye;he++)st.release(fe[he])}}},new l,new l,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(ct,lt,ft,vt,te,zt,Tt,Dt){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.planeConvex(ct,lt.convexPolyhedronRepresentation,ft,vt,te,zt,Tt,Dt)};var $t=new l,xt=new l,ae=new l,ne=new l;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(ct,lt,ft,vt,te,zt,Tt,Dt){var st=$t,Pt=xt;Pt.set(0,0,1),te.vmult(Pt,Pt);for(var Ut=0,Gt=ae,Nt=0;Nt!==lt.vertices.length;Nt++){st.copy(lt.vertices[Nt]),zt.vmult(st,st),vt.vadd(st,st),st.vsub(ft,Gt);var At=Pt.dot(Gt);if(At<=0){var w=this.createContactEquation(Tt,Dt,ct,lt),k=ne;Pt.mult(Pt.dot(Gt),k),st.vsub(k,k),k.vsub(ft,w.ri),w.ni.copy(Pt),st.vsub(vt,w.rj),w.ri.vadd(ft,w.ri),w.ri.vsub(Tt.position,w.ri),w.rj.vadd(vt,w.rj),w.rj.vsub(Dt.position,w.rj),this.result.push(w),Ut++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}}this.enableFrictionReduction&&Ut&&this.createFrictionFromAverage(Ut)};var Zt=new l,Wt=new l;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(ct,lt,ft,vt,te,zt,Tt,Dt,st,Pt,Ut,Gt){var Nt=Zt;if(!(ft.distanceTo(vt)>ct.boundingSphereRadius+lt.boundingSphereRadius)&&ct.findSeparatingAxis(lt,ft,te,vt,zt,Nt,Ut,Gt)){var At=[],w=Wt;ct.clipAgainstHull(ft,te,lt,vt,zt,Nt,-100,100,At);for(var k=0,Q=0;Q!==At.length;Q++){var V=this.createContactEquation(Tt,Dt,ct,lt,st,Pt),J=V.ri,_t=V.rj;Nt.negate(V.ni),At[Q].normal.negate(w),w.mult(At[Q].depth,w),At[Q].point.vadd(w,J),_t.copy(At[Q].point),J.vsub(ft,J),_t.vsub(vt,_t),J.vadd(ft,J),J.vsub(Tt.position,J),_t.vadd(vt,_t),_t.vsub(Dt.position,_t),this.result.push(V),k++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(V,this.frictionResult)}this.enableFrictionReduction&&k&&this.createFrictionFromAverage(k)}};var Vt=new l,ee=new l,O=new l;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(ct,lt,ft,vt,te,zt,Tt,Dt){var st=Vt;st.set(0,0,1),Tt.quaternion.vmult(st,st);var Pt=ee;vt.vsub(Tt.position,Pt);var Ut=st.dot(Pt);if(Ut<=0){var Gt=this.createContactEquation(Dt,Tt,lt,ct);Gt.ni.copy(st),Gt.ni.negate(Gt.ni),Gt.ri.set(0,0,0);var Nt=O;st.mult(st.dot(vt),Nt),vt.vsub(Nt,Nt),Gt.rj.copy(Nt),this.result.push(Gt),this.createFrictionEquationsFromContact(Gt,this.frictionResult)}};var Mt=new l;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(ct,lt,ft,vt,te,zt,Tt,Dt){var st=Mt;st.set(0,0,1),vt.vsub(ft,st);var Pt=st.norm2();if(Pt<=ct.radius*ct.radius){var Ut=this.createContactEquation(Dt,Tt,lt,ct);st.normalize(),Ut.rj.copy(st),Ut.rj.mult(ct.radius,Ut.rj),Ut.ni.copy(st),Ut.ni.negate(Ut.ni),Ut.ri.set(0,0,0),this.result.push(Ut),this.createFrictionEquationsFromContact(Ut,this.frictionResult)}};var Lt=new h,Xt=new l;new l;var D=new l,gt=new l,yt=new l;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(ct,lt,ft,vt,te,zt,Tt,Dt){var st=-1,Pt=D,Ut=yt,Gt=null,Nt=Xt;if(Nt.copy(vt),Nt.vsub(ft,Nt),te.conjugate(Lt),Lt.vmult(Nt,Nt),ct.pointIsInside(Nt)){ct.worldVerticesNeedsUpdate&&ct.computeWorldVertices(ft,te),ct.worldFaceNormalsNeedsUpdate&&ct.computeWorldFaceNormals(te);for(var At=0,w=ct.faces.length;At!==w;At++){var k=[ct.worldVertices[ct.faces[At][0]]],Q=ct.worldFaceNormals[At];vt.vsub(k[0],gt);var V=-Q.dot(gt);(Gt===null||Math.abs(V)<Math.abs(Gt))&&(Gt=V,st=At,Pt.copy(Q))}if(st!==-1){var J=this.createContactEquation(Dt,Tt,lt,ct);Pt.mult(Gt,Ut),Ut.vadd(vt,Ut),Ut.vsub(ft,Ut),J.rj.copy(Ut),Pt.negate(J.ni),J.ri.set(0,0,0);var _t=J.ri,Ot=J.rj;_t.vadd(vt,_t),_t.vsub(Dt.position,_t),Ot.vadd(ft,Ot),Ot.vsub(Tt.position,Ot),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(ct,lt,ft,vt,te,zt,Tt,Dt){ct.convexPolyhedronRepresentation.material=ct.material,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,this.convexHeightfield(ct.convexPolyhedronRepresentation,lt,ft,vt,te,zt,Tt,Dt)};var kt=new l,Kt=new l,le=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(ct,lt,ft,vt,te,zt,Tt,Dt){var st=lt.data,Pt=lt.elementSize,Ut=ct.boundingSphereRadius,Gt=Kt,Nt=le,At=kt;u.pointToLocalFrame(vt,zt,ft,At);var w=Math.floor((At.x-Ut)/Pt)-1,k=Math.ceil((At.x+Ut)/Pt)+1,Q=Math.floor((At.y-Ut)/Pt)-1,V=Math.ceil((At.y+Ut)/Pt)+1;if(!(k<0||V<0||w>st.length||Q>st[0].length)){w<0&&(w=0),k<0&&(k=0),Q<0&&(Q=0),V<0&&(V=0),w>=st.length&&(w=st.length-1),k>=st.length&&(k=st.length-1),V>=st[0].length&&(V=st[0].length-1),Q>=st[0].length&&(Q=st[0].length-1);var J=[];lt.getRectMinMax(w,Q,k,V,J);var _t=J[0],Ot=J[1];if(!(At.z-Ut>Ot||At.z+Ut<_t))for(var It=w;It<k;It++)for(var Ft=Q;Ft<V;Ft++)lt.getConvexTrianglePillar(It,Ft,!1),u.pointToWorldFrame(vt,zt,lt.pillarOffset,Gt),ft.distanceTo(Gt)<lt.pillarConvex.boundingSphereRadius+ct.boundingSphereRadius&&this.convexConvex(ct,lt.pillarConvex,ft,Gt,te,zt,Tt,Dt,null,null,Nt,null),lt.getConvexTrianglePillar(It,Ft,!0),u.pointToWorldFrame(vt,zt,lt.pillarOffset,Gt),ft.distanceTo(Gt)<lt.pillarConvex.boundingSphereRadius+ct.boundingSphereRadius&&this.convexConvex(ct,lt.pillarConvex,ft,Gt,te,zt,Tt,Dt,null,null,Nt,null)}};var se=new l,ie=new l;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(ct,lt,ft,vt,te,zt,Tt,Dt){var st=lt.data,Pt=ct.radius,Ut=lt.elementSize,Gt=ie,Nt=se;u.pointToLocalFrame(vt,zt,ft,Nt);var At=Math.floor((Nt.x-Pt)/Ut)-1,w=Math.ceil((Nt.x+Pt)/Ut)+1,k=Math.floor((Nt.y-Pt)/Ut)-1,Q=Math.ceil((Nt.y+Pt)/Ut)+1;if(!(w<0||Q<0||At>st.length||Q>st[0].length)){At<0&&(At=0),w<0&&(w=0),k<0&&(k=0),Q<0&&(Q=0),At>=st.length&&(At=st.length-1),w>=st.length&&(w=st.length-1),Q>=st[0].length&&(Q=st[0].length-1),k>=st[0].length&&(k=st[0].length-1);var V=[];lt.getRectMinMax(At,k,w,Q,V);var J=V[0],_t=V[1];if(!(Nt.z-Pt>_t||Nt.z+Pt<J))for(var Ot=this.result,It=At;It<w;It++)for(var Ft=k;Ft<Q;Ft++){var Rt=Ot.length;lt.getConvexTrianglePillar(It,Ft,!1),u.pointToWorldFrame(vt,zt,lt.pillarOffset,Gt),ft.distanceTo(Gt)<lt.pillarConvex.boundingSphereRadius+ct.boundingSphereRadius&&this.sphereConvex(ct,lt.pillarConvex,ft,Gt,te,zt,Tt,Dt),lt.getConvexTrianglePillar(It,Ft,!0),u.pointToWorldFrame(vt,zt,lt.pillarOffset,Gt),ft.distanceTo(Gt)<lt.pillarConvex.boundingSphereRadius+ct.boundingSphereRadius&&this.sphereConvex(ct,lt.pillarConvex,ft,Gt,te,zt,Tt,Dt);var Qt=Ot.length-Rt;if(Qt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,r){n.exports=x;var i=e("../shapes/Shape"),a=e("../math/Vec3"),o=e("../math/Quaternion"),l=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var u=e("./Narrowphase"),h=e("../utils/EventTarget"),c=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),f=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),p=e("../collision/RaycastResult"),m=e("../collision/AABB"),_=e("../collision/Ray"),y=e("../collision/NaiveBroadphase");function x(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new y,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new h,new m;var b=new _;if(x.prototype.getContactMaterial=function(N,$){return this.contactMaterialTable.get(N.id,$.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var N=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=N,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(N){this.bodies.indexOf(N)===-1&&(N.index=this.bodies.length,this.bodies.push(N),N.world=this,N.initPosition.copy(N.position),N.initVelocity.copy(N.velocity),N.timeLastSleepy=this.time,N instanceof v&&(N.initAngularVelocity.copy(N.angularVelocity),N.initQuaternion.copy(N.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=N,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(N){this.constraints.push(N)},x.prototype.removeConstraint=function(N){var $=this.constraints.indexOf(N);$!==-1&&this.constraints.splice($,1)},x.prototype.rayTest=function(N,$,j){j instanceof p?this.raycastClosest(N,$,{skipBackfaces:!0},j):this.raycastAll(N,$,{skipBackfaces:!0},j)},x.prototype.raycastAll=function(N,$,j,L){return j.mode=_.ALL,j.from=N,j.to=$,j.callback=L,b.intersectWorld(this,j)},x.prototype.raycastAny=function(N,$,j,L){return j.mode=_.ANY,j.from=N,j.to=$,j.result=L,b.intersectWorld(this,j)},x.prototype.raycastClosest=function(N,$,j,L){return j.mode=_.CLOSEST,j.from=N,j.to=$,j.result=L,b.intersectWorld(this,j)},x.prototype.remove=function(N){N.world=null;var $=this.bodies.length-1,j=this.bodies,L=j.indexOf(N);if(L!==-1){j.splice(L,1);for(var Y=0;Y!==j.length;Y++)j[Y].index=Y;this.collisionMatrix.setNumObjects($),this.removeBodyEvent.body=N,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(N){this.materials.push(N)},x.prototype.addContactMaterial=function(N){this.contactmaterials.push(N),this.contactMaterialTable.set(N.materials[0].id,N.materials[1].id,N)},typeof performance>"u"&&(performance={}),!performance.now){var R=Date.now();performance.timing&&performance.timing.navigationStart&&(R=performance.timing.navigationStart),performance.now=function(){return Date.now()-R}}var C=new a;x.prototype.step=function(N,$,j){if(j=j||10,$=$||0,$===0)this.internalStep(N),this.time+=N;else{var L=Math.floor((this.time+$)/N)-Math.floor(this.time/N);L=Math.min(L,j);for(var Y=performance.now(),F=0;F!==L&&(this.internalStep(N),!(performance.now()-Y>N*1e3));F++);this.time+=$;for(var T=this.time%N,A=T/N,X=C,it=this.bodies,et=0;et!==it.length;et++){var q=it[et];q.type!==v.STATIC&&q.sleepState!==v.SLEEPING?(q.position.vsub(q.previousPosition,X),X.scale(A,X),q.position.vadd(X,q.interpolatedPosition)):(q.interpolatedPosition.copy(q.position),q.interpolatedQuaternion.copy(q.quaternion))}}};var U={type:"postStep"},K={type:"preStep"},M={type:"collide",body:null,contact:null},E=[],B=[],H=[],I=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var G=new o,Z=new o,z=new a;x.prototype.internalStep=function(N){this.dt=N;var $=this.contacts,j=H,L=I,Y=this.numObjects(),F=this.bodies,T=this.solver,A=this.gravity,X=this.doProfiling,it=this.profile,et=v.DYNAMIC,q,at=this.constraints,ht=B;A.norm();var W=A.x,Ct=A.y,dt=A.z,rt=0;for(X&&(q=performance.now()),rt=0;rt!==Y;rt++){var ot=F[rt];if(ot.type&et){var jt=ot.force,bt=ot.mass;jt.x+=bt*W,jt.y+=bt*Ct,jt.z+=bt*dt}}for(var rt=0,P=this.subsystems.length;rt!==P;rt++)this.subsystems[rt].update();X&&(q=performance.now()),j.length=0,L.length=0,this.broadphase.collisionPairs(this,j,L),X&&(it.broadphase=performance.now()-q);var Zt=at.length;for(rt=0;rt!==Zt;rt++){var S=at[rt];if(!S.collideConnected)for(var tt=j.length-1;tt>=0;tt-=1)(S.bodyA===j[tt]&&S.bodyB===L[tt]||S.bodyB===j[tt]&&S.bodyA===L[tt])&&(j.splice(tt,1),L.splice(tt,1))}this.collisionMatrixTick(),X&&(q=performance.now());var pt=E,ut=$.length;for(rt=0;rt!==ut;rt++)pt.push($[rt]);$.length=0;var mt=this.frictionEquations.length;for(rt=0;rt!==mt;rt++)ht.push(this.frictionEquations[rt]);this.frictionEquations.length=0,this.narrowphase.getContacts(j,L,this,$,pt,this.frictionEquations,ht),X&&(it.narrowphase=performance.now()-q),X&&(q=performance.now());for(var rt=0;rt<this.frictionEquations.length;rt++)T.addEquation(this.frictionEquations[rt]);for(var wt=$.length,Et=0;Et!==wt;Et++){var S=$[Et],ot=S.bi,St=S.bj;S.si,S.sj;var Ht;if(ot.material&&St.material?Ht=this.getContactMaterial(ot.material,St.material)||this.defaultContactMaterial:Ht=this.defaultContactMaterial,Ht.friction,ot.material&&St.material&&(ot.material.friction>=0&&St.material.friction>=0&&ot.material.friction*St.material.friction,ot.material.restitution>=0&&St.material.restitution>=0&&(S.restitution=ot.material.restitution*St.material.restitution)),T.addEquation(S),ot.allowSleep&&ot.type===v.DYNAMIC&&ot.sleepState===v.SLEEPING&&St.sleepState===v.AWAKE&&St.type!==v.STATIC){var $t=St.velocity.norm2()+St.angularVelocity.norm2(),xt=Math.pow(St.sleepSpeedLimit,2);$t>=xt*2&&(ot._wakeUpAfterNarrowphase=!0)}if(St.allowSleep&&St.type===v.DYNAMIC&&St.sleepState===v.SLEEPING&&ot.sleepState===v.AWAKE&&ot.type!==v.STATIC){var ae=ot.velocity.norm2()+ot.angularVelocity.norm2(),ne=Math.pow(ot.sleepSpeedLimit,2);ae>=ne*2&&(St._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ot,St,!0),this.collisionMatrixPrevious.get(ot,St)||(M.body=St,M.contact=S,ot.dispatchEvent(M),M.body=ot,St.dispatchEvent(M))}for(X&&(it.makeContactConstraints=performance.now()-q,q=performance.now()),rt=0;rt!==Y;rt++){var ot=F[rt];ot._wakeUpAfterNarrowphase&&(ot.wakeUp(),ot._wakeUpAfterNarrowphase=!1)}var Zt=at.length;for(rt=0;rt!==Zt;rt++){var S=at[rt];S.update();for(var tt=0,Wt=S.equations.length;tt!==Wt;tt++){var Vt=S.equations[tt];T.addEquation(Vt)}}T.solve(N,this),X&&(it.solve=performance.now()-q),T.removeAllEquations();var ee=Math.pow;for(rt=0;rt!==Y;rt++){var ot=F[rt];if(ot.type&et){var O=ee(1-ot.linearDamping,N),Mt=ot.velocity;Mt.mult(O,Mt);var Lt=ot.angularVelocity;if(Lt){var Xt=ee(1-ot.angularDamping,N);Lt.mult(Xt,Lt)}}}for(this.dispatchEvent(K),rt=0;rt!==Y;rt++){var ot=F[rt];ot.preStep&&ot.preStep.call(ot)}X&&(q=performance.now());var D=G,gt=Z,yt=this.stepnumber,kt=v.DYNAMIC|v.KINEMATIC,Kt=yt%(this.quatNormalizeSkip+1)===0,le=this.quatNormalizeFast,se=N*.5;for(i.types.PLANE,i.types.CONVEXPOLYHEDRON,rt=0;rt!==Y;rt++){var ie=F[rt],ct=ie.force,lt=ie.torque;if(ie.type&kt&&ie.sleepState!==v.SLEEPING){var ft=ie.velocity,vt=ie.angularVelocity,te=ie.position,zt=ie.quaternion,Tt=ie.invMass,Dt=ie.invInertiaWorld;ft.x+=ct.x*Tt*N,ft.y+=ct.y*Tt*N,ft.z+=ct.z*Tt*N,ie.angularVelocity&&(Dt.vmult(lt,z),z.mult(N,z),z.vadd(vt,vt)),te.x+=ft.x*N,te.y+=ft.y*N,te.z+=ft.z*N,ie.angularVelocity&&(D.set(vt.x,vt.y,vt.z,0),D.mult(zt,gt),zt.x+=se*gt.x,zt.y+=se*gt.y,zt.z+=se*gt.z,zt.w+=se*gt.w,Kt&&(le?zt.normalizeFast():zt.normalize())),ie.aabb&&(ie.aabbNeedsUpdate=!0),ie.updateInertiaWorld&&ie.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,X&&(it.integrate=performance.now()-q),this.time+=N,this.stepnumber+=1,this.dispatchEvent(U),rt=0;rt!==Y;rt++){var ot=F[rt],st=ot.postStep;st&&st.call(ot)}if(this.allowSleep)for(rt=0;rt!==Y;rt++)F[rt].sleepTick(this.time)},x.prototype.clearForces=function(){for(var N=this.bodies,$=N.length,j=0;j!==$;j++){var L=N[j];L.force,L.torque,L.force.set(0,0,0),L.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(gl);var Lm=gl.exports;const Pr=Pm(Lm),Oe=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let s=0;s<256;s++)Oe[256+s]=Oe[s];function As(s){return s*s*s*(s*(s*6-15)+10)}function qn(s,t,e){return t+s*(e-t)}function Nn(s,t,e,n){const r=s&15,i=r<8?t:e,a=r<4?e:r==12||r==14?t:n;return(r&1?-i:i)+(r&2?-a:a)}class Im{noise(t,e,n){const r=Math.floor(t),i=Math.floor(e),a=Math.floor(n),o=r&255,l=i&255,u=a&255;t-=r,e-=i,n-=a;const h=t-1,c=e-1,d=n-1,f=As(t),v=As(e),g=As(n),p=Oe[o]+l,m=Oe[p]+u,_=Oe[p+1]+u,y=Oe[o+1]+l,x=Oe[y]+u,b=Oe[y+1]+u;return qn(g,qn(v,qn(f,Nn(Oe[m],t,e,n),Nn(Oe[x],h,e,n)),qn(f,Nn(Oe[_],t,c,n),Nn(Oe[b],h,c,n))),qn(v,qn(f,Nn(Oe[m+1],t,e,d),Nn(Oe[x+1],h,e,d)),qn(f,Nn(Oe[_+1],t,c,d),Nn(Oe[b+1],h,c,d))))}}function Nm(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),r=new Set(Object.keys(s[0].morphAttributes)),i={},a={},o=s[0].morphTargetsRelative,l=new Tn;let u=0;for(let h=0;h<s.length;++h){const c=s[h];let d=0;if(e!==(c.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in c.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;i[f]===void 0&&(i[f]=[]),i[f].push(c.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==c.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in c.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(c.morphAttributes[f])}if(t){let f;if(e)f=c.index.count;else if(c.attributes.position!==void 0)f=c.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,f,h),u+=f}}if(e){let h=0;const c=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let v=0;v<f.count;++v)c.push(f.getX(v)+h);h+=s[d].attributes.position.count}l.setIndex(c)}for(const h in i){const c=Do(i[h]);if(!c)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,c)}for(const h in a){const c=a[h][0].length;if(c===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<c;++d){const f=[];for(let g=0;g<a[h].length;++g)f.push(a[h][g][d]);const v=Do(f);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function Do(s){let t,e,n,r=-1,i=0;for(let u=0;u<s.length;++u){const h=s[u];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;i+=h.count*e}const a=new t(i),o=new cn(a,e,n);let l=0;for(let u=0;u<s.length;++u){const h=s[u];if(h.isInterleavedBufferAttribute){const c=l/e;for(let d=0,f=h.count;d<f;d++)for(let v=0;v<e;v++){const g=h.getComponent(d,v);o.setComponent(d+c,v,g)}}else a.set(h.array,l);l+=h.count*e}return r!==void 0&&(o.gpuType=r),o}let Rs,Hs;const Dm=new hm;let ve,Mn,Yi,jn,$n,_l=new Pr.World;_l.gravity.set(0,-9.81,0);const $i=120,Wr=120,Um=$i/2,Fm=Wr/2,Bm=Vm($i,Wr);Om();xl();function Om(){Rs=document.getElementById("container"),Mn=new $e(60,window.innerWidth/window.innerHeight,1,2e4),Mn.position.set(2e3,385,1200),jn=new Yp,jn.background=new me(12571109);const s=Hm(),t=new ml().load("atlas.png");t.colorSpace=Ce,t.magFilter=ze;const e=new ln(s,new Os({map:t,side:un}));e.position.set(0,-52,0),jn.add(e);const n=new cm(15658734,3);jn.add(n);const r=new lm(16777215,12);r.position.set(1,1,.5).normalize(),jn.add(r),$n=new ul({antialias:!0}),$n.setPixelRatio(window.devicePixelRatio),$n.setSize(window.innerWidth,window.innerHeight),Rs.appendChild($n.domElement);const i=new wm,a=new nt(0,0,-1);i.set(new nt(2e3,385,1200),a);const o={baseUrl:"ratamahatta/",body:"ratamahatta.md2",skins:["ratamahatta.png","ctf_b.png","ctf_r.png","dead.png","gearwhore.png"],weapons:[["weapon.md2","weapon.png"],["w_bfg.md2","w_bfg.png"],["w_blaster.md2","w_blaster.png"],["w_chaingun.md2","w_chaingun.png"],["w_glauncher.md2","w_glauncher.png"],["w_hyperblaster.md2","w_hyperblaster.png"],["w_machinegun.md2","w_machinegun.png"],["w_railgun.md2","w_railgun.png"],["w_rlauncher.md2","w_rlauncher.png"],["w_shotgun.md2","w_shotgun.png"],["w_sshotgun.md2","w_sshotgun.png"]]};ve=new Am,ve.scale=7.5,ve.onLoadComplete=function(){ve.setAnimation(ve.meshBody.geometry.animations[0].name)},ve.loadParts(o);const l=ve.root;l.position.set(2e3,0,300),l.rotation.y=3.15,jn.add(l),window.addEventListener("resize",zm);let u=!1;function h(_){switch(_.code){case"ArrowUp":d(0,0,-10);break;case"ArrowDown":g(Math.PI);break;case"ArrowLeft":p(-Math.PI/2);break;case"ArrowRight":p(Math.PI/2);break}}function c(_){ve.setAnimation(ve.meshBody.geometry.animations[0].name),ve.root.rotation.y=3.15}function d(_,y,x){const b=ve.root.position.clone();ve.root.position.x+=_,ve.root.position.y+=y,ve.root.position.z+=x,f(ve.root),Mn.position.copy(ve.root.position),Mn.position.z+=1085,Mn.position.y+=385,m(),!b.equals(ve.root.position)&&!u&&v()}function f(_){const x=new Pr.Box(new Pr.Vec3(10,10,10)),b=new Pr.Body({mass:1,shape:x});b.position.copy(_.position),b.velocity.set(0,-10,0),_l.addBody(b)}function v(){u=!0,ve.setAnimation(ve.meshBody.geometry.animations[1].name),setTimeout(()=>{u=!1},1e3)}function g(_){const x=ve.root.rotation.y+_,b=new tn().setFromEuler(new Qi(0,x,0));ve.root.quaternion.slerp(b,.1);const R=new nt(0,0,1);R.applyQuaternion(ve.root.quaternion),R.normalize(),d(R.x*10,R.y*10,R.z*10)}function p(_){ve.root.rotation.y=_;const y=new nt(0,0,1);y.applyQuaternion(ve.root.quaternion),d(y.x*10,y.y*10,y.z*10)}document.addEventListener("keydown",h,!1),document.addEventListener("keyup",c,!1);function m(){i.ray.origin.copy(ve.root.position),a.applyQuaternion(ve.root.quaternion),i.ray.direction.copy(a);const _=1e3,y=i.intersectObject(e);y.length>0&&y[0].distance<_&&(console.log("Obstacle detected!"),ve.root.position.y+=100)}Hs=new qi,Rs.appendChild(Hs.dom),Yi=new Cm(Mn,$n.domElement),Yi.target.set(2e3,0,300),Yi.update()}function zm(){Mn.aspect=window.innerWidth/window.innerHeight,Mn.updateProjectionMatrix(),$n.setSize(window.innerWidth,window.innerHeight),Yi.update()}function Vm(s,t){const e=[],n=new Im,r=s*t;let i=2;for(let a=0;a<4;a++){if(a===0)for(let o=0;o<r;o++)e[o]=0;for(let o=0;o<r;o++){const l=o%s,u=o/s|0;e[o]+=n.noise(l/i,u/i,50)*i}i*=4}return e}function Wi(s,t){return Bm[s+t*$i]*.15|0}function Hm(){const s=new Re,t=new Sn(100,100);t.attributes.uv.array[1]=.5,t.attributes.uv.array[3]=.5,t.rotateY(Math.PI/2),t.translate(50,0,0);const e=new Sn(100,100);e.attributes.uv.array[1]=.5,e.attributes.uv.array[3]=.5,e.rotateY(-Math.PI/2),e.translate(-50,0,0);const n=new Sn(100,100);n.attributes.uv.array[5]=.5,n.attributes.uv.array[7]=.5,n.rotateX(-Math.PI/2),n.translate(0,50,0);const r=new Sn(100,100);r.attributes.uv.array[1]=.5,r.attributes.uv.array[3]=.5,r.translate(0,0,50);const i=new Sn(100,100);i.attributes.uv.array[1]=.5,i.attributes.uv.array[3]=.5,i.rotateY(Math.PI),i.translate(0,0,-50);const a=[];for(let o=0;o<Wr;o++)for(let l=0;l<$i;l++){const u=Wi(l,o);s.makeTranslation(l*100-Um*100,u*100,o*100-Fm*100);const h=Wi(l+1,o),c=Wi(l-1,o),d=Wi(l,o+1),f=Wi(l,o-1);a.push(n.clone().applyMatrix4(s)),(h!==u&&h!==u+1||l===0)&&a.push(t.clone().applyMatrix4(s)),(c!==u&&c!==u+1||l===$i-1)&&a.push(e.clone().applyMatrix4(s)),(d!==u&&d!==u+1||o===Wr-1)&&a.push(r.clone().applyMatrix4(s)),(f!==u&&f!==u+1||o===0)&&a.push(i.clone().applyMatrix4(s))}return Nm(a)}function xl(){requestAnimationFrame(xl),Gm(),Hs.update()}function Gm(){const t=Dm.getDelta()*1.1;ve.update(t),$n.render(jn,Mn),Yi.target.copy(ve.root.position)}
