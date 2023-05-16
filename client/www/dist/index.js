(()=>{var Lt=Object.defineProperty;var jt=Object.getOwnPropertyDescriptor;var Ht=Object.getPrototypeOf;var Mt=Reflect.get;var $=(n,t,e,o)=>{for(var i=o>1?void 0:o?jt(t,e):t,s=n.length-1,r;s>=0;s--)(r=n[s])&&(i=(o?r(t,e,i):r(i))||i);return o&&i&&Lt(t,e,i),i};var mt=(n,t,e)=>Mt(Ht(n),e,t);var f=(n,t,e)=>new Promise((o,i)=>{var s=l=>{try{h(e.next(l))}catch(a){i(a)}},r=l=>{try{h(e.throw(l))}catch(a){i(a)}},h=l=>l.done?o(l.value):Promise.resolve(l.value).then(s,r);h((e=e.apply(n,t)).next())});var W=window,K=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),vt=new WeakMap,B=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(K&&t===void 0){let o=e!==void 0&&e.length===1;o&&(t=vt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&vt.set(e,t))}return t}toString(){return this.cssText}},ft=n=>new B(typeof n=="string"?n:n+"",void 0,Q),g=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((o,i,s)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[s+1],n[0]);return new B(e,n,Q)},X=(n,t)=>{K?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let o=document.createElement("style"),i=W.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,n.appendChild(o)})},J=K?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let o of t.cssRules)e+=o.cssText;return ft(e)})(n):n;var Y,Z=window,$t=Z.trustedTypes,qt=$t?$t.emptyScript:"",yt=Z.reactiveElementPolyfillSupport,et={toAttribute(n,t){switch(t){case Boolean:n=n?qt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},gt=(n,t)=>t!==n&&(t==t||n==n),tt={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:gt},b=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,o)=>{let i=this._$Ep(o,e);i!==void 0&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){let s=this[t];this[e]=i,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||tt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of o)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let i of o)e.unshift(J(i))}else t!==void 0&&e.push(J(t));return e}static _$Ep(t,e){let o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return X(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=tt){var i;let s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){let r=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:et).toAttribute(e,o.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var o;let i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){let r=i.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?r.converter:et;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||gt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let e=!1,o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(o)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},yt?.({ReactiveElement:b}),((Y=Z.reactiveElementVersions)!==null&&Y!==void 0?Y:Z.reactiveElementVersions=[]).push("1.6.1");var ot,F=window,P=F.trustedTypes,bt=P?P.createPolicy("lit-html",{createHTML:n=>n}):void 0,nt="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,Ct="?"+_,zt=`<${Ct}>`,R=document,j=()=>R.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",kt=Array.isArray,Dt=n=>kt(n)||typeof n?.[Symbol.iterator]=="function",it=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,wt=/>/g,A=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,Et=/"/g,Ut=/^(?:script|style|textarea|title)$/i,Pt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),m=Pt(1),Xt=Pt(2),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),St=new WeakMap,U=R.createTreeWalker(R,129,null,!1),Vt=(n,t)=>{let e=n.length-1,o=[],i,s=t===2?"<svg>":"",r=L;for(let l=0;l<e;l++){let a=n[l],y,d,c=-1,v=0;for(;v<a.length&&(r.lastIndex=v,d=r.exec(a),d!==null);)v=r.lastIndex,r===L?d[1]==="!--"?r=_t:d[1]!==void 0?r=wt:d[2]!==void 0?(Ut.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=A):d[3]!==void 0&&(r=A):r===A?d[0]===">"?(r=i??L,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,y=d[1],r=d[3]===void 0?A:d[3]==='"'?Et:At):r===Et||r===At?r=A:r===_t||r===wt?r=L:(r=A,i=void 0);let D=r===A&&n[l+1].startsWith("/>")?" ":"";s+=r===L?a+zt:c>=0?(o.push(y),a.slice(0,c)+nt+a.slice(c)+_+D):a+_+(c===-2?(o.push(void 0),l):D)}let h=s+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[bt!==void 0?bt.createHTML(h):h,o]},S=class{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,r=0,h=t.length-1,l=this.parts,[a,y]=Vt(t,e);if(this.el=S.createElement(a,o),U.currentNode=this.el.content,e===2){let d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(i=U.nextNode())!==null&&l.length<h;){if(i.nodeType===1){if(i.hasAttributes()){let d=[];for(let c of i.getAttributeNames())if(c.endsWith(nt)||c.startsWith(_)){let v=y[r++];if(d.push(c),v!==void 0){let D=i.getAttribute(v.toLowerCase()+nt).split(_),V=/([.?@])?(.*)/.exec(v);l.push({type:1,index:s,name:V[2],strings:D,ctor:V[1]==="."?st:V[1]==="?"?lt:V[1]==="@"?at:T})}else l.push({type:6,index:s})}for(let c of d)i.removeAttribute(c)}if(Ut.test(i.tagName)){let d=i.textContent.split(_),c=d.length-1;if(c>0){i.textContent=P?P.emptyScript:"";for(let v=0;v<c;v++)i.append(d[v],j()),U.nextNode(),l.push({type:2,index:++s});i.append(d[c],j())}}}else if(i.nodeType===8)if(i.data===Ct)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(_,d+1))!==-1;)l.push({type:7,index:s}),d+=_.length-1}s++}}static createElement(t,e){let o=R.createElement("template");return o.innerHTML=t,o}};function O(n,t,e=n,o){var i,s,r,h;if(t===E)return t;let l=o!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[o]:e._$Cl,a=H(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,o)),o!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[o]=l:e._$Cl=l),l!==void 0&&(t=O(n,l._$AS(n,t.values),l,o)),t}var rt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:o},parts:i}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:R).importNode(o,!0);U.currentNode=s;let r=U.nextNode(),h=0,l=0,a=i[0];for(;a!==void 0;){if(h===a.index){let y;a.type===2?y=new x(r,r.nextSibling,this,t):a.type===1?y=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(y=new dt(r,this,t)),this._$AV.push(y),a=i[++l]}h!==a?.index&&(r=U.nextNode(),h++)}return s}v(t){let e=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},x=class{constructor(t,e,o,i){var s;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),H(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Dt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(R.createTextNode(t)),this._$AH=t}g(t){var e;let{values:o,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=S.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(o);else{let r=new rt(s,this),h=r.u(this.options);r.v(o),this.$(h),this._$AH=r}}_$AC(t){let e=St.get(t.strings);return e===void 0&&St.set(t.strings,e=new S(t)),e}T(t){kt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,i=0;for(let s of t)i===e.length?e.push(o=new x(this.k(j()),this.k(j()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},T=class{constructor(t,e,o,i,s){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){let s=this.strings,r=!1;if(s===void 0)t=O(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==E,r&&(this._$AH=t);else{let h=t,l,a;for(t=s[0],l=0;l<s.length-1;l++)a=O(this,h[o+l],e,l),a===E&&(a=this._$AH[l]),r||(r=!H(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a??"")+s[l+1]),this._$AH[l]=a}r&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},st=class extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},Wt=P?P.emptyScript:"",lt=class extends T{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Wt):this.element.removeAttribute(this.name)}},at=class extends T{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t,e=this){var o;if((t=(o=O(this,t,e,0))!==null&&o!==void 0?o:p)===E)return;let i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},dt=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}};var xt=F.litHtmlPolyfillSupport;xt?.(S,x),((ot=F.litHtmlVersions)!==null&&ot!==void 0?ot:F.litHtmlVersions=[]).push("2.7.3");var Rt=(n,t,e)=>{var o,i;let s=(o=e?.renderBefore)!==null&&o!==void 0?o:t,r=s._$litPart$;if(r===void 0){let h=(i=e?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=r=new x(t.insertBefore(j(),h),h,void 0,e??{})}return r._$AI(n),r};var ht,ct;var u=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}};u.finalized=!0,u._$litElement$=!0,(ht=globalThis.litElementHydrateSupport)===null||ht===void 0||ht.call(globalThis,{LitElement:u});var Ot=globalThis.litElementPolyfillSupport;Ot?.({LitElement:u});((ct=globalThis.litElementVersions)!==null&&ct!==void 0?ct:globalThis.litElementVersions=[]).push("3.3.2");var w=n=>t=>typeof t=="function"?((e,o)=>(customElements.define(e,o),o))(n,t):((e,o)=>{let{kind:i,elements:s}=o;return{kind:i,elements:s,finisher(r){customElements.define(e,r)}}})(n,t);var Kt=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function G(n){return(t,e)=>e!==void 0?((o,i,s)=>{i.constructor.createProperty(s,o)})(n,t,e):Kt(n,t)}var pt,Se=((pt=window.HTMLSlotElement)===null||pt===void 0?void 0:pt.prototype.assignedElements)!=null?(n,t)=>n.assignedElements(t):(n,t)=>n.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var C=".";function Tt(n){return f(this,null,function*(){window.location.hash=`#${n}`;let e=yield(yield fetch(`${C}/api/room/${encodeURIComponent(n)}`)).json(),o=document.getElementById("owo-background");if(!o)return;if(e.id&&e.robot){window.room={room:n,id:e.id,name:e.robot.name,vdon:e.robot.vdon_room},document.title=`rOwObots - ${window.room.name}`;let r=document.createElement("iframe");r.allow="autoplay;",r.src=`https://vdo.ninja/?view=${window.room.vdon}&nocontrols&cleanoutput&chroma=bbbbbb`,o.replaceChildren(r)}else window.room=null,document.title="rOwObots",o.replaceChildren();let i=document.getElementById("owo-controller");i&&i.requestUpdate();let s=document.getElementById("owo-header");s&&s.requestUpdate()})}var k=class extends u{connectedCallback(){return f(this,null,function*(){if(mt(k.prototype,this,"connectedCallback").call(this),window.location.hash){let t=window.location.hash.substring(1);yield Tt(t),this.requestUpdate()}window.onhashchange=()=>f(this,null,function*(){let t=window.location.hash.substring(1);yield Tt(t),this.requestUpdate()})})}render(){var t;return m`
    <div id="header">
    <div id="header-title">
    <span>r<span id="owo">OwO</span>bots</span>
    </div>
    <div id="header-room">
    <span id="header-room-label">${(t=window==null?void 0:window.room)==null?void 0:t.name}</span>
    </div>
    </div>
`}};k.styles=g`
#header {
  position: absolute;
  width: 100%;
  height: 4rem;
  font-family: monospace;
  text-align: center;
  color: white;
  background-color: black;
  top: 0px;
  left: 0px;
  display: grid;
  white-space: nowrap;
}

#header-title {
  grid-column: 1;
  font-size: 32px;
  line-height: 4rem;
}

#owo {
  color: #32cd32;
}

#header-room {
  grid-column: 2;
}

#header-room-label {
  line-height: 4rem;
  font-size: 32px;
}
`,k=$([w("owo-header")],k);var q=class extends u{sendCommand(t,e){return f(this,null,function*(){if(window.room&&(yield fetch(`${C}/api/bot/${encodeURIComponent(window.room.id)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room:window.room.room,command:{button:t,action:e}})})).status!=200){window.room=null,document.title="rOwObots";let i=document.getElementById("owo-background");i&&i.replaceChildren(),this.requestUpdate();let s=document.getElementById("owo-header");s&&s.requestUpdate()}})}handleButton(t){return f(this,null,function*(){let e=null;t.type==="mousedown"?e="Press":t.type==="mouseup"&&(e="Release");let o=t.target.textContent;e&&this.sendCommand(o,e)})}render(){return window.room?m`
      <div id="dpad">
      <div @mousedown=${this.handleButton} @mouseup=${this.handleButton} id="up" class="button">Up</div>
      <div @mousedown=${this.handleButton} @mouseup=${this.handleButton} id="left" class="button">Left</div>
      <div @mousedown=${this.handleButton} @mouseup=${this.handleButton} id="right" class="button">Right</div>
      <div @mousedown=${this.handleButton} @mouseup=${this.handleButton} id="down" class="button">Down</div>
      </div>
      <div id="facebuttons">
      <div @mousedown=${this.handleButton} @mouseup=${this.handleButton} id="b" class="button">B</div>
      <div @mousedown=${this.handleButton} @mouseup=${this.handleButton} id="a" class="button">A</div>
      </div>
`:m`
<div id="copium-image">
  <img src="copium.png"></img>
</div>
`}};q.styles=g`
.button {
  text-align: center;
  line-height: 5rem;
  font-weight: bold;
  color: white;
  background-color: #555555;
  user-select: none;
  position: absolute;
  opacity: 0.6;
  width: 5rem;
  height: 5rem;
}
.button:active {
  opacity: 0.9;
}
#dpad {
  position: absolute;
}
#up {
  left: 5rem;
}
#down {
  left: 5rem;
  top: 10rem;
}
#left {
  top: 5rem;
}
#right {
  left: 10rem;
  top: 5rem;
}
#facebuttons {
  position: absolute;
  right: 0rem;
}
#b {
  top: 5rem;
  right: 10rem;
}
#a {
  top: 5rem;
  right: 2.5rem;
}
#copium-image {
  text-align: center;
}
img {
  display: block;
  width: 112px;
  margin: auto;
}
`,q=$([w("owo-controller")],q);function*Nt(n,t){if(n!==void 0){let e=0;for(let o of n)yield t(o,e++)}}function It(){let n=new Uint8Array(10);return window.crypto.getRandomValues(n),Array.from(n,t=>t.toString(16).padStart(2,"0")).join("")}function Bt(n){return f(this,null,function*(){let e=yield(yield fetch(`${C}/api/admin?token=${encodeURIComponent(n)}`)).json();e.robots&&(window.adminInfo=e);let o=document.getElementById("owo-admin");o&&o.requestUpdate()})}var N=class extends u{updateToken(e){return f(this,null,function*(){let o=e.target.value;window.adminToken=o,window.adminInfo=null,Bt(window.adminToken)})}render(){return m`
    <div id="header">
    <div id="header-title">
    <span>r<span id="owo">OwO</span>bots admin</span>
    </div>
    <div id="header-token">
    <span id="header-token-label">token:</label>
    <input @change=${this.updateToken} id="header-token-entry" type="password" value=${this.initial}></input>
    </div>
    </div>
`}};N.styles=g`
#header {
  position: absolute;
  width: 100%;
  height: 4rem;
  font-family: monospace;
  text-align: center;
  color: white;
  background-color: black;
  top: 0px;
  left: 0px;
  display: grid;
  white-space: nowrap;
}

#header-title {
  grid-column: 1;
  font-size: 32px;
  line-height: 4rem;
}

#owo {
  color: #32cd32;
}

#header-token {
  grid-column: 2;
}

#header-token-label {
  line-height: 4rem;
  font-size: 32px;
}

#header-token-entry {
  vertical-align: middle;
}
`,$([G()],N.prototype,"initial",2),N=$([w("owo-admin-header")],N);var I=class extends u{copyRoom(){let e=window.adminInfo.robots[this.robotid];navigator.clipboard.writeText(e.room)}setRandomRoom(){return f(this,null,function*(){let e=It();(yield fetch(`${C}/api/admin/${encodeURIComponent(this.robotid)}/room?token=${encodeURIComponent(window.adminToken)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({room:It()})})).status===200&&(yield Bt(window.adminToken),this.requestUpdate())})}copyWs(){navigator.clipboard.writeText(`wss://colonq.computer/rowobots/api/channel/${encodeURIComponent(this.robotid)}?token=${encodeURIComponent(window.adminToken)}`)}render(){let e=window.adminInfo.robots[this.robotid];return m`
<div id="robot">
  <div id="robot-name">${e.config.name}</div>
  <div id="robot-room">
    <a target="_blank" rel="noopener noreferrer" href="/rowobots#${e.room}">${e.room}</a>
    <button @click=${this.setRandomRoom}>↻</button>
  </div>
  <div id="robot-vdon"><a target="_blank" rel="noopener noreferrer" href="https://vdo.ninja?push=${e.config.vdon_room}">${e.config.vdon_room}</a></div>
  <div id="robot-ws"><a href="#" @click=${this.copyWs}>copy</a></div>
</div>
`}};I.styles=g`
#robot {
  font-family: monospace;
  display: grid;
  grid-template-columns: 5fr 10fr 5rem 4rem;
}
#robot:hover {
  background-color: #dddddd;
}
#robot-name {
  grid-column: 1;
}
#robot-room {
  grid-column: 2;
}
#robot-vdon {
  grid-column: 3;
}
#robot-ws {
  grid-column: 4;
}
`,$([G()],I.prototype,"robotid",2),I=$([w("owo-admin-robot")],I);var z=class extends u{render(){return window.adminInfo?m`
<div id="robots">
  <div id="robot-heading">
    <div id="robot-name">name</div>
    <div id="robot-room">room</div>
    <div id="robot-vdon">vdon</div>
    <div id="robot-ws">socket</div>
  </div>
${Nt(Object.keys(window.adminInfo.robots).sort(),t=>m`
  <owo-admin-robot .robotid=${t}></owo-admin-robot>
`)}
</div>
`:window.adminToken?m`
<div id="auth-error">
  <h1>invalid token</h1>
</div>
`:m`
<div id="auth-error">
  <h1>please enter admin token</h1>
</div>
`}};z.styles=g`
#robots {
  padding: 0.5rem;
}
#robot-heading {
  font-family: monospace;
  font-weight: bold;
  display: grid;
  grid-template-columns: 5fr 10fr 5rem 4rem;
  margin-bottom: 0.5rem;
}
#robot-name {
  grid-column: 1;
}
#robot-room {
  grid-column: 2;
}
#robot-vdon {
  grid-column: 3;
}
#robot-ws {
  grid-column: 4;
}
#auth-error {
  font-family: monospace;
  text-align: center;
  color: red;
}
`,z=$([w("owo-admin")],z);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
