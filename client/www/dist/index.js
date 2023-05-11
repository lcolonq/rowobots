(()=>{var Ut=Object.defineProperty;var Rt=Object.getOwnPropertyDescriptor;var M=(s,t,e,o)=>{for(var i=o>1?void 0:o?Rt(t,e):t,n=s.length-1,r;n>=0;n--)(r=s[n])&&(i=(o?r(t,e,i):r(i))||i);return o&&i&&Ut(t,e,i),i};var P=(s,t,e)=>new Promise((o,i)=>{var n=l=>{try{h(e.next(l))}catch(a){i(a)}},r=l=>{try{h(e.throw(l))}catch(a){i(a)}},h=l=>l.done?o(l.value):Promise.resolve(l.value).then(n,r);h((e=e.apply(s,t)).next())});var L=window,j=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),ht=new WeakMap,U=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(j&&t===void 0){let o=e!==void 0&&e.length===1;o&&(t=ht.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&ht.set(e,t))}return t}toString(){return this.cssText}},ct=s=>new U(typeof s=="string"?s:s+"",void 0,K),I=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((o,i,n)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[n+1],s[0]);return new U(e,s,K)},W=(s,t)=>{j?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let o=document.createElement("style"),i=L.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,s.appendChild(o)})},z=j?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let o of t.cssRules)e+=o.cssText;return ct(e)})(s):s;var J,q=window,ut=q.trustedTypes,kt=ut?ut.emptyScript:"",pt=q.reactiveElementPolyfillSupport,F={toAttribute(s,t){switch(t){case Boolean:s=s?kt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},mt=(s,t)=>t!==s&&(t==t||s==s),Z={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:mt},v=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,o)=>{let i=this._$Ep(o,e);i!==void 0&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){let n=this[t];this[e]=i,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of o)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let i of o)e.unshift(z(i))}else t!==void 0&&e.push(z(t));return e}static _$Ep(t,e){let o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return W(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=Z){var i;let n=this.constructor._$Ep(t,o);if(n!==void 0&&o.reflect===!0){let r=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:F).toAttribute(e,o.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var o;let i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){let r=i.getPropertyOptions(n),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?r.converter:F;this._$El=n,this[n]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||mt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1,o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(o)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},pt?.({ReactiveElement:v}),((J=q.reactiveElementVersions)!==null&&J!==void 0?J:q.reactiveElementVersions=[]).push("1.6.1");var G,D=window,w=D.trustedTypes,vt=w?w.createPolicy("lit-html",{createHTML:s=>s}):void 0,X="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,bt="?"+$,Nt=`<${bt}>`,E=document,k=()=>E.createComment(""),N=s=>s===null||typeof s!="object"&&typeof s!="function",wt=Array.isArray,Ot=s=>wt(s)||typeof s?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,$t=/>/g,y=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yt=/'/g,_t=/"/g,Et=/^(?:script|style|textarea|title)$/i,St=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),V=St(1),Dt=St(2),_=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),gt=new WeakMap,b=E.createTreeWalker(E,129,null,!1),Tt=(s,t)=>{let e=s.length-1,o=[],i,n=t===2?"<svg>":"",r=R;for(let l=0;l<e;l++){let a=s[l],m,d,c=-1,p=0;for(;p<a.length&&(r.lastIndex=p,d=r.exec(a),d!==null);)p=r.lastIndex,r===R?d[1]==="!--"?r=ft:d[1]!==void 0?r=$t:d[2]!==void 0?(Et.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=y):d[3]!==void 0&&(r=y):r===y?d[0]===">"?(r=i??R,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,m=d[1],r=d[3]===void 0?y:d[3]==='"'?_t:yt):r===_t||r===yt?r=y:r===ft||r===$t?r=R:(r=y,i=void 0);let H=r===y&&s[l+1].startsWith("/>")?" ":"";n+=r===R?a+Nt:c>=0?(o.push(m),a.slice(0,c)+X+a.slice(c)+$+H):a+$+(c===-2?(o.push(void 0),l):H)}let h=n+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[vt!==void 0?vt.createHTML(h):h,o]},g=class{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,r=0,h=t.length-1,l=this.parts,[a,m]=Tt(t,e);if(this.el=g.createElement(a,o),b.currentNode=this.el.content,e===2){let d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(i=b.nextNode())!==null&&l.length<h;){if(i.nodeType===1){if(i.hasAttributes()){let d=[];for(let c of i.getAttributeNames())if(c.endsWith(X)||c.startsWith($)){let p=m[r++];if(d.push(c),p!==void 0){let H=i.getAttribute(p.toLowerCase()+X).split($),B=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:B[2],strings:H,ctor:B[1]==="."?tt:B[1]==="?"?et:B[1]==="@"?ot:x})}else l.push({type:6,index:n})}for(let c of d)i.removeAttribute(c)}if(Et.test(i.tagName)){let d=i.textContent.split($),c=d.length-1;if(c>0){i.textContent=w?w.emptyScript:"";for(let p=0;p<c;p++)i.append(d[p],k()),b.nextNode(),l.push({type:2,index:++n});i.append(d[c],k())}}}else if(i.nodeType===8)if(i.data===bt)l.push({type:2,index:n});else{let d=-1;for(;(d=i.data.indexOf($,d+1))!==-1;)l.push({type:7,index:n}),d+=$.length-1}n++}}static createElement(t,e){let o=E.createElement("template");return o.innerHTML=t,o}};function S(s,t,e=s,o){var i,n,r,h;if(t===_)return t;let l=o!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[o]:e._$Cl,a=N(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((n=l?._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,e,o)),o!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[o]=l:e._$Cl=l),l!==void 0&&(t=S(s,l._$AS(s,t.values),l,o)),t}var Y=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:o},parts:i}=this._$AD,n=((e=t?.creationScope)!==null&&e!==void 0?e:E).importNode(o,!0);b.currentNode=n;let r=b.nextNode(),h=0,l=0,a=i[0];for(;a!==void 0;){if(h===a.index){let m;a.type===2?m=new A(r,r.nextSibling,this,t):a.type===1?m=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(m=new it(r,this,t)),this._$AV.push(m),a=i[++l]}h!==a?.index&&(r=b.nextNode(),h++)}return n}v(t){let e=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},A=class{constructor(t,e,o,i){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=(n=i?.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),N(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ot(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;let{values:o,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=g.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(o);else{let r=new Y(n,this),h=r.u(this.options);r.v(o),this.$(h),this._$AH=r}}_$AC(t){let e=gt.get(t.strings);return e===void 0&&gt.set(t.strings,e=new g(t)),e}T(t){wt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,i=0;for(let n of t)i===e.length?e.push(o=new A(this.k(k()),this.k(k()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},x=class{constructor(t,e,o,i,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){let n=this.strings,r=!1;if(n===void 0)t=S(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==_,r&&(this._$AH=t);else{let h=t,l,a;for(t=n[0],l=0;l<n.length-1;l++)a=S(this,h[o+l],e,l),a===_&&(a=this._$AH[l]),r||(r=!N(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a??"")+n[l+1]),this._$AH[l]=a}r&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},tt=class extends x{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},Ht=w?w.emptyScript:"",et=class extends x{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Ht):this.element.removeAttribute(this.name)}},ot=class extends x{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){var o;if((t=(o=S(this,t,e,0))!==null&&o!==void 0?o:u)===_)return;let i=this._$AH,n=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==u&&(i===u||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}};var At=D.litHtmlPolyfillSupport;At?.(g,A),((G=D.litHtmlVersions)!==null&&G!==void 0?G:D.litHtmlVersions=[]).push("2.7.3");var xt=(s,t,e)=>{var o,i;let n=(o=e?.renderBefore)!==null&&o!==void 0?o:t,r=n._$litPart$;if(r===void 0){let h=(i=e?.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=r=new A(t.insertBefore(k(),h),h,void 0,e??{})}return r._$AI(s),r};var st,nt;var f=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return _}};f.finalized=!0,f._$litElement$=!0,(st=globalThis.litElementHydrateSupport)===null||st===void 0||st.call(globalThis,{LitElement:f});var Ct=globalThis.litElementPolyfillSupport;Ct?.({LitElement:f});((nt=globalThis.litElementVersions)!==null&&nt!==void 0?nt:globalThis.litElementVersions=[]).push("3.3.2");var rt=s=>t=>typeof t=="function"?((e,o)=>(customElements.define(e,o),o))(s,t):((e,o)=>{let{kind:i,elements:n}=o;return{kind:i,elements:n,finisher(r){customElements.define(e,r)}}})(s,t);var Bt=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function lt(s){return(t,e)=>e!==void 0?((o,i,n)=>{i.constructor.createProperty(n,o)})(s,t,e):Bt(s,t)}var at,fe=((at=window.HTMLSlotElement)===null||at===void 0?void 0:at.prototype.assignedElements)!=null?(s,t)=>s.assignedElements(t):(s,t)=>s.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var dt=".";function Pt(s){return P(this,null,function*(){window.location.hash=`#${s}`;let e=yield(yield fetch(`${dt}/api/room/${encodeURIComponent(s)}`)).json(),o=document.getElementById("owo-background");if(!o)return;if(e.id&&e.robot){window.room={room:s,id:e.id,name:e.robot.name,vdon:e.robot.vdon_room};let n=document.createElement("iframe");n.allow="autoplay;",n.src=`https://vdo.ninja/?view=${window.room.vdon}&nocontrols&cleanoutput&chroma=bbbbbb`,o.replaceChildren(n)}else window.room=null,o.replaceChildren();let i=document.getElementById("owo-controller");i&&i.requestUpdate()})}var T=class extends f{sendCommand(t,e){return P(this,null,function*(){if(window.room){let o=yield fetch(`${dt}/api/bot/${encodeURIComponent(window.room.id)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room:window.room.room,command:{button:t,action:e}})})}})}handleButton(t){return P(this,null,function*(){let e=null;t.type==="mousedown"?e="Press":t.type==="mouseup"&&(e="Release");let o=t.target.textContent;e&&this.sendCommand(o,e)})}render(){return window.room?V`
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
`:V`
<div id="copium-image">
  <img src="copium.png"></img>
</div>
`}};T.styles=I`
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
`,T=M([rt("owo-controller")],T);var C=class extends f{updateRoom(e){return P(this,null,function*(){if(e.key==="Enter"){let o=e.target.value;Pt(o)}})}render(){return V`
<div id="header">
  <div id="header-title">
    <span>r<span id="owo">OwO</span>bots</span>
  </div>
  <div id="header-room">
    <span id="header-room-label">room:</label>
    <input @keypress=${this.updateRoom} id="header-room-entry" type="text" value=${this.initial}></input>
  </div>
</div>
`}};C.styles=I`
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

#header-room-entry {
  vertical-align: middle;
}
`,M([lt()],C.prototype,"initial",2),C=M([rt("owo-header")],C);if(window.location.hash){let s=window.location.hash.substring(1),t=document.getElementById("owo-header");t&&(t.initial=s),Pt(s)}})();
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
*/
