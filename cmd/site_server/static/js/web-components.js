(()=>{function s(o,t,e,r){var i=arguments.length,n=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var c=o.length-1;c>=0;c--)(a=o[c])&&(n=(i<3?a(n):i>3?a(t,e,n):a(t,e))||n);return i>3&&n&&Object.defineProperty(t,e,n),n}var E=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var nt=globalThis,at=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bt=Symbol(),ce=new WeakMap,K=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(at&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=ce.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ce.set(e,t))}return t}toString(){return this.cssText}},ue=o=>new K(typeof o=="string"?o:o+"",void 0,Bt),b=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((r,i,n)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new K(e,o,Bt)},Ut=(o,t)=>{if(at)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),i=nt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,o.appendChild(r)}},st=at?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return ue(e)})(o):o;var{is:ir,defineProperty:nr,getOwnPropertyDescriptor:ar,getOwnPropertyNames:sr,getOwnPropertySymbols:lr,getPrototypeOf:dr}=Object,lt=globalThis,pe=lt.trustedTypes,cr=pe?pe.emptyScript:"",ur=lt.reactiveElementPolyfillSupport,X=(o,t)=>o,Z={toAttribute(o,t){switch(t){case Boolean:o=o?cr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},dt=(o,t)=>!ir(o,t),he={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:dt};Symbol.metadata??=Symbol("metadata"),lt.litPropertyMetadata??=new WeakMap;var P=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=he){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&nr(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){let{get:i,set:n}=ar(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get(){return i?.call(this)},set(a){let c=i?.call(this);n.call(this,a),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??he}static _$Ei(){if(this.hasOwnProperty(X("elementProperties")))return;let t=dr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(X("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(X("properties"))){let e=this.properties,r=[...sr(e),...lr(e)];for(let i of r)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(st(i))}else t!==void 0&&e.push(st(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ut(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute!==void 0?r.converter:Z).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=r.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Z;this._$Em=i,this[i]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??dt)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[X("elementProperties")]=new Map,P[X("finalized")]=new Map,ur?.({ReactiveElement:P}),(lt.reactiveElementVersions??=[]).push("2.0.4");var pr={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:dt},hr=(o=pr,t,e)=>{let{kind:r,metadata:i}=e,n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(e.name,o),r==="accessor"){let{name:a}=e;return{set(c){let d=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,d,o)},init(c){return c!==void 0&&this.P(a,void 0,o),c}}}if(r==="setter"){let{name:a}=e;return function(c){let d=this[a];t.call(this,c),this.requestUpdate(a,d,o)}}throw Error("Unsupported decorator location: "+r)};function l(o){return(t,e)=>typeof e=="object"?hr(o,t,e):((r,i,n)=>{let a=i.hasOwnProperty(n);return i.constructor.createProperty(n,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(i,n):void 0})(o,t,e)}function S(o){return l({...o,state:!0,attribute:!1})}var L=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);function T(o,t){return(e,r,i)=>{let n=a=>a.renderRoot?.querySelector(o)??null;if(t){let{get:a,set:c}=typeof r=="object"?e:i??(()=>{let d=Symbol();return{get(){return this[d]},set(h){this[d]=h}}})();return L(e,r,{get(){let d=a.call(this);return d===void 0&&(d=n(this),(d!==null||this.hasUpdated)&&c.call(this,d)),d}})}return L(e,r,{get(){return n(this)}})}}function B(o){return(t,e)=>{let{slot:r,selector:i}=o??{},n="slot"+(r?`[name=${r}]`:":not([name])");return L(t,e,{get(){let a=this.renderRoot?.querySelector(n),c=a?.assignedElements(o)??[];return i===void 0?c:c.filter(d=>d.matches(i))}})}}var Ft=globalThis,ct=Ft.trustedTypes,fe=ct?ct.createPolicy("lit-html",{createHTML:o=>o}):void 0,jt="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,Ht="?"+R,fr=`<${Ht}>`,F=document,Q=()=>F.createComment(""),tt=o=>o===null||typeof o!="object"&&typeof o!="function",xe=Array.isArray,_e=o=>xe(o)||typeof o?.[Symbol.iterator]=="function",Vt=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,ve=/>/g,U=RegExp(`>|${Vt}(?:([^\\s"'>=/]+)(${Vt}*=${Vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),be=/'/g,ge=/"/g,we=/^(?:script|style|textarea|title)$/i,Ae=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),m=Ae(1),$e=Ae(2),w=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ye=new WeakMap,V=F.createTreeWalker(F,129);function Ee(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return fe!==void 0?fe.createHTML(t):t}var Se=(o,t)=>{let e=o.length-1,r=[],i,n=t===2?"<svg>":"",a=J;for(let c=0;c<e;c++){let d=o[c],h,g,f=-1,C=0;for(;C<d.length&&(a.lastIndex=C,g=a.exec(d),g!==null);)C=a.lastIndex,a===J?g[1]==="!--"?a=me:g[1]!==void 0?a=ve:g[2]!==void 0?(we.test(g[2])&&(i=RegExp("</"+g[2],"g")),a=U):g[3]!==void 0&&(a=U):a===U?g[0]===">"?(a=i??J,f=-1):g[1]===void 0?f=-2:(f=a.lastIndex-g[2].length,h=g[1],a=g[3]===void 0?U:g[3]==='"'?ge:be):a===ge||a===be?a=U:a===me||a===ve?a=J:(a=U,i=void 0);let O=a===U&&o[c+1].startsWith("/>")?" ":"";n+=a===J?d+fr:f>=0?(r.push(h),d.slice(0,f)+jt+d.slice(f)+R+O):d+R+(f===-2?c:O)}return[Ee(o,n+(o[e]||"<?>")+(t===2?"</svg>":"")),r]},et=class o{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,a=0,c=t.length-1,d=this.parts,[h,g]=Se(t,e);if(this.el=o.createElement(h,r),V.currentNode=this.el.content,e===2){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=V.nextNode())!==null&&d.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let f of i.getAttributeNames())if(f.endsWith(jt)){let C=g[a++],O=i.getAttribute(f).split(R),N=/([.?@])?(.*)/.exec(C);d.push({type:1,index:n,name:N[2],strings:O,ctor:N[1]==="."?pt:N[1]==="?"?ht:N[1]==="@"?ft:H}),i.removeAttribute(f)}else f.startsWith(R)&&(d.push({type:6,index:n}),i.removeAttribute(f));if(we.test(i.tagName)){let f=i.textContent.split(R),C=f.length-1;if(C>0){i.textContent=ct?ct.emptyScript:"";for(let O=0;O<C;O++)i.append(f[O],Q()),V.nextNode(),d.push({type:2,index:++n});i.append(f[C],Q())}}}else if(i.nodeType===8)if(i.data===Ht)d.push({type:2,index:n});else{let f=-1;for(;(f=i.data.indexOf(R,f+1))!==-1;)d.push({type:7,index:n}),f+=R.length-1}n++}}static createElement(t,e){let r=F.createElement("template");return r.innerHTML=t,r}};function j(o,t,e=o,r){if(t===w)return t;let i=r!==void 0?e._$Co?.[r]:e._$Cl,n=tt(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,e,r)),r!==void 0?(e._$Co??=[])[r]=i:e._$Cl=i),i!==void 0&&(t=j(o,i._$AS(o,t.values),i,r)),t}var ut=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??F).importNode(e,!0);V.currentNode=i;let n=V.nextNode(),a=0,c=0,d=r[0];for(;d!==void 0;){if(a===d.index){let h;d.type===2?h=new q(n,n.nextSibling,this,t):d.type===1?h=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(h=new mt(n,this,t)),this._$AV.push(h),d=r[++c]}a!==d?.index&&(n=V.nextNode(),a++)}return V.currentNode=F,i}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},q=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),tt(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_e(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==u&&tt(this._$AH)?this._$AA.nextSibling.data=t:this.T(F.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=et.createElement(Ee(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new ut(i,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=ye.get(t.strings);return e===void 0&&ye.set(t.strings,e=new et(t)),e}k(t){xe(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let n of t)i===e.length?e.push(r=new o(this.S(Q()),this.S(Q()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(t,e=this,r,i){let n=this.strings,a=!1;if(n===void 0)t=j(this,t,e,0),a=!tt(t)||t!==this._$AH&&t!==w,a&&(this._$AH=t);else{let c=t,d,h;for(t=n[0],d=0;d<n.length-1;d++)h=j(this,c[r+d],e,d),h===w&&(h=this._$AH[d]),a||=!tt(h)||h!==this._$AH[d],h===u?t=u:t!==u&&(t+=(h??"")+n[d+1]),this._$AH[d]=h}a&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},pt=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},ht=class extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}},ft=class extends H{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){if((t=j(this,t,e,0)??u)===w)return;let r=this._$AH,i=t===u&&r!==u||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==u&&(r===u||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},mt=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}},Ce={P:jt,A:R,C:Ht,M:1,L:Se,R:ut,D:_e,V:j,I:q,H,N:ht,U:ft,B:pt,F:mt},mr=Ft.litHtmlPolyfillSupport;mr?.(et,q),(Ft.litHtmlVersions??=[]).push("3.1.4");var vt=(o,t,e)=>{let r=e?.renderBefore??t,i=r._$litPart$;if(i===void 0){let n=e?.renderBefore??null;r._$litPart$=i=new q(t.insertBefore(Q(),n),n,void 0,e??{})}return i._$AI(o),i};var y=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};y._$litElement$=!0,y.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:y});var vr=globalThis.litElementPolyfillSupport;vr?.({LitElement:y});(globalThis.litElementVersions??=[]).push("4.0.6");var bt=b`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;var Te=Symbol("attachableController"),Ie;Ie=new MutationObserver(o=>{for(let t of o)t.target[Te]?.hostConnected()});var G=class{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){t===null?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(t){t?this.attach(t):this.detach()}constructor(t,e){this.host=t,this.onControlChange=e,this.currentControl=null,t.addController(this),t[Te]=this,Ie?.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}};var br=["focusin","focusout","pointerdown"],W=class extends y{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new G(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(t){if(!t[Oe]){switch(t.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}t[Oe]=!0}}onControlChange(t,e){if(!!1)for(let r of br)t?.removeEventListener(r,this),e?.addEventListener(r,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}};s([l({type:Boolean,reflect:!0})],W.prototype,"visible",void 0);s([l({type:Boolean,reflect:!0})],W.prototype,"inward",void 0);var Oe=Symbol("handledByFocusRing");var Pe=b`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;var qt=class extends W{};qt.styles=[Pe];qt=s([E("md-focus-ring")],qt);var I={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Y=o=>(...t)=>({_$litDirective$:o,values:t}),M=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var k=Y(class extends M{constructor(o){if(super(o),o.type!==I.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let e=o.element.classList;for(let r of this.st)r in t||(e.remove(r),this.st.delete(r));for(let r in t){let i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(e.add(r),this.st.add(r)):(e.remove(r),this.st.delete(r)))}return w}});var gt={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};var gr=450,Re=225,yr=.2,xr=10,_r=75,wr=.35,Ar="::after",$r="forwards",$;(function(o){o[o.INACTIVE=0]="INACTIVE",o[o.TOUCH_DELAY=1]="TOUCH_DELAY",o[o.HOLDING=2]="HOLDING",o[o.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})($||($={}));var Er=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],Sr=150,Cr=window.matchMedia("(forced-colors: active)"),D=class extends y{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=$.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new G(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){let t={hovered:this.hovered,pressed:this.pressed};return m`<div class="surface ${k(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==$.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state===$.HOLDING){this.state=$.WAITING_FOR_CLICK;return}if(this.state===$.TOUCH_DELAY){this.state=$.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t)){this.state=$.WAITING_FOR_CLICK,this.startPressAnimation(t);return}this.checkBoundsAfterContextMenu&&!this.inBounds(t)||(this.checkBoundsAfterContextMenu=!1,this.state=$.TOUCH_DELAY,await new Promise(e=>{setTimeout(e,Sr)}),this.state===$.TOUCH_DELAY&&(this.state=$.HOLDING,this.startPressAnimation(t)))}}handleClick(){if(!this.disabled){if(this.state===$.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===$.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){let{height:t,width:e}=this.getBoundingClientRect(),r=Math.max(t,e),i=Math.max(wr*r,_r),n=Math.floor(r*yr),c=Math.sqrt(e**2+t**2)+xr;this.initialSize=n,this.rippleScale=`${(c+i)/n}`,this.rippleSize=`${n}px`}getNormalizedPointerEventCoords(t){let{scrollX:e,scrollY:r}=window,{left:i,top:n}=this.getBoundingClientRect(),a=e+i,c=r+n,{pageX:d,pageY:h}=t;return{x:d-a,y:h-c}}getTranslationCoordinates(t){let{height:e,width:r}=this.getBoundingClientRect(),i={x:(r-this.initialSize)/2,y:(e-this.initialSize)/2},n;return t instanceof PointerEvent?n=this.getNormalizedPointerEventCoords(t):n={x:r/2,y:e/2},n={x:n.x-this.initialSize/2,y:n.y-this.initialSize/2},{startPoint:n,endPoint:i}}startPressAnimation(t){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();let{startPoint:e,endPoint:r}=this.getTranslationCoordinates(t),i=`${e.x}px, ${e.y}px`,n=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${n}) scale(${this.rippleScale})`]},{pseudoElement:Ar,duration:gr,easing:gt.STANDARD,fill:$r})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=$.INACTIVE;let t=this.growAnimation,e=1/0;if(typeof t?.currentTime=="number"?e=t.currentTime:t?.currentTime&&(e=t.currentTime.to("ms").value),e>=Re){this.pressed=!1;return}await new Promise(r=>{setTimeout(r,Re-e)}),this.growAnimation===t&&(this.pressed=!1)}shouldReactToEvent(t){if(this.disabled||!t.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if(t.type==="pointerenter"||t.type==="pointerleave")return!this.isTouch(t);let e=t.buttons===1;return this.isTouch(t)||e}inBounds({x:t,y:e}){let{top:r,left:i,bottom:n,right:a}=this.getBoundingClientRect();return t>=i&&t<=a&&e>=r&&e<=n}isTouch({pointerType:t}){return t==="touch"}async handleEvent(t){if(!Cr?.matches)switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t);break;default:break}}onControlChange(t,e){if(!!1)for(let r of Er)t?.removeEventListener(r,this),e?.addEventListener(r,this)}};s([l({type:Boolean,reflect:!0})],D.prototype,"disabled",void 0);s([S()],D.prototype,"hovered",void 0);s([S()],D.prototype,"pressed",void 0);s([T(".surface")],D.prototype,"mdRoot",void 0);var ze=b`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;var Gt=class extends D{};Gt.styles=[ze];Gt=s([E("md-ripple")],Gt);var Wt=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],Tr=Wt.map(Yt);function yt(o){return Tr.includes(o)}function Yt(o){return o.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}var xt=Symbol("privateIgnoreAttributeChangesFor");function _t(o){var t;if(!1)return o;class e extends o{constructor(){super(...arguments),this[t]=new Set}attributeChangedCallback(i,n,a){if(!yt(i)){super.attributeChangedCallback(i,n,a);return}if(this[xt].has(i))return;this[xt].add(i),this.removeAttribute(i),this[xt].delete(i);let c=Xt(i);a===null?delete this.dataset[c]:this.dataset[c]=a,this.requestUpdate(Xt(i),n)}getAttribute(i){return yt(i)?super.getAttribute(Kt(i)):super.getAttribute(i)}removeAttribute(i){super.removeAttribute(i),yt(i)&&(super.removeAttribute(Kt(i)),this.requestUpdate())}}return t=xt,Ir(e),e}function Ir(o){for(let t of Wt){let e=Yt(t),r=Kt(e),i=Xt(e);o.createProperty(t,{attribute:e,noAccessor:!0}),o.createProperty(Symbol(r),{attribute:r,noAccessor:!0}),Object.defineProperty(o.prototype,t,{configurable:!0,enumerable:!0,get(){return this.dataset[i]??null},set(n){let a=this.dataset[i]??null;n!==a&&(n===null?delete this.dataset[i]:this.dataset[i]=n,this.requestUpdate(t,a))}})}}function Kt(o){return`data-${o}`}function Xt(o){return o.replace(/-\w/,t=>t[1].toUpperCase())}var _=Symbol("internals"),Zt=Symbol("privateInternals");function wt(o){class t extends o{get[_](){return this[Zt]||(this[Zt]=this.attachInternals()),this[Zt]}}return t}function Le(o){o.addInitializer(t=>{let e=t;e.addEventListener("click",async r=>{let{type:i,[_]:n}=e,{form:a}=n;if(!(!a||i==="button")&&(await new Promise(c=>{setTimeout(c)}),!r.defaultPrevented)){if(i==="reset"){a.reset();return}a.addEventListener("submit",c=>{Object.defineProperty(c,"submitter",{configurable:!0,enumerable:!0,get:()=>e})},{capture:!0,once:!0}),n.setFormValue(e.value),a.requestSubmit()}})})}function Me(o){let t=new MouseEvent("click",{bubbles:!0});return o.dispatchEvent(t),t}function ke(o){return o.currentTarget!==o.target||o.composedPath()[0]!==o.target||o.target.disabled?!1:!Or(o)}function Or(o){let t=Jt;return t&&(o.preventDefault(),o.stopImmediatePropagation()),Pr(),t}var Jt=!1;async function Pr(){Jt=!0,await null,Jt=!1}var Rr=_t(wt(y)),x=class extends Rr{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[_].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){let t=!this.href&&(this.disabled||this.softDisabled),e=this.href?this.renderLink():this.renderButton(),r=this.href?"link":"button";return m`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${r}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${r}
        ?disabled="${t}"></md-ripple>
      ${e}
    `}renderButton(){let{ariaLabel:t,ariaHasPopup:e,ariaExpanded:r}=this;return m`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||u}
      aria-label="${t||u}"
      aria-haspopup="${e||u}"
      aria-expanded="${r||u}">
      ${this.renderContent()}
    </button>`}renderLink(){let{ariaLabel:t,ariaHasPopup:e,ariaExpanded:r}=this;return m`<a
      id="link"
      class="button"
      aria-label="${t||u}"
      aria-haspopup="${e||u}"
      aria-expanded="${r||u}"
      href=${this.href}
      target=${this.target||u}
      >${this.renderContent()}
    </a>`}renderContent(){let t=m`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return m`
      <span class="touch"></span>
      ${this.trailingIcon?u:t}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?t:u}
    `}handleClick(t){if(!this.href&&this.softDisabled){t.stopImmediatePropagation(),t.preventDefault();return}!ke(t)||!this.buttonElement||(this.focus(),Me(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}};Le(x);x.formAssociated=!0;x.shadowRootOptions={mode:"open",delegatesFocus:!0};s([l({type:Boolean,reflect:!0})],x.prototype,"disabled",void 0);s([l({type:Boolean,attribute:"soft-disabled",reflect:!0})],x.prototype,"softDisabled",void 0);s([l()],x.prototype,"href",void 0);s([l()],x.prototype,"target",void 0);s([l({type:Boolean,attribute:"trailing-icon",reflect:!0})],x.prototype,"trailingIcon",void 0);s([l({type:Boolean,attribute:"has-icon",reflect:!0})],x.prototype,"hasIcon",void 0);s([l()],x.prototype,"type",void 0);s([l({reflect:!0})],x.prototype,"value",void 0);s([T(".button")],x.prototype,"buttonElement",void 0);s([B({slot:"icon",flatten:!0})],x.prototype,"assignedIcons",void 0);var At=class extends x{};var De=b`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;var Qt=class extends At{};Qt.styles=[bt,De];Qt=s([E("md-text-button")],Qt);var $t=class extends y{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return m`<span class="shadow"></span>`}};var Ne=b`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;var te=class extends $t{};te.styles=[Ne];te=s([E("md-elevation")],te);var Et=class extends x{renderElevationOrOutline(){return m`<md-elevation part="elevation"></md-elevation>`}};var Be=b`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;var Ue=b`md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;var ee=class extends Et{};ee.styles=[bt,Ue,Be];ee=s([E("md-filled-button")],ee);var v=class extends y{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){let t=this.count??-1,e=this.max??-1;return t<0||e<=0?"":`${t} / ${e}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(t){t.has("disabled")&&t.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(t.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:t.get("focused"),wasPopulated:t.get("populated")}),super.update(t)}render(){let t=this.renderLabel(!0),e=this.renderLabel(!1),r=this.renderOutline?.(t),i={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return m`
      <div class="field ${k(i)}">
        <div class="container-overflow">
          ${this.renderBackground?.()} ${this.renderIndicator?.()} ${r}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${e} ${r?u:t}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(t){(t.has("supportingText")||t.has("errorText")||t.has("count")||t.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){let{supportingOrErrorText:t,counterText:e}=this;if(!t&&!e)return u;let r=m`<span>${t}</span>`,i=e?m`<span class="counter">${e}</span>`:u,a=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":u;return m`
      <div class="supporting-text" role=${a}>${r}${i}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(let t of this.slottedAriaDescribedBy)vt(m`${this.supportingOrErrorText} ${this.counterText}`,t),t.setAttribute("hidden","")}renderLabel(t){if(!this.label)return u;let e;t?e=this.focused||this.populated||this.isAnimating:e=!this.focused&&!this.populated&&!this.isAnimating;let r={hidden:!e,floating:t,resting:!t},i=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return m`
      <span class="label ${k(r)}" aria-hidden=${!e}
        >${i}</span
      >
    `}animateLabelIfNeeded({wasFocused:t,wasPopulated:e}){if(!this.label)return;t??=this.focused,e??=this.populated;let r=t||e,i=this.focused||this.populated;r!==i&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:gt.STANDARD}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){let{floatingLabelEl:t,restingLabelEl:e}=this;if(!t||!e)return[];let{x:r,y:i,height:n}=t.getBoundingClientRect(),{x:a,y:c,height:d}=e.getBoundingClientRect(),h=t.scrollWidth,g=e.scrollWidth,f=g/h,C=a-r,O=c-i+Math.round((d-n*f)/2),N=`translateX(${C}px) translateY(${O}px) scale(${f})`,le="translateX(0) translateY(0) scale(1)",de=e.clientWidth,it=g>de?`${de/f}px`:"";return this.focused||this.populated?[{transform:N,width:it},{transform:le,width:it}]:[{transform:le,width:it},{transform:N,width:it}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}};s([l({type:Boolean})],v.prototype,"disabled",void 0);s([l({type:Boolean})],v.prototype,"error",void 0);s([l({type:Boolean})],v.prototype,"focused",void 0);s([l()],v.prototype,"label",void 0);s([l({type:Boolean,attribute:"no-asterisk"})],v.prototype,"noAsterisk",void 0);s([l({type:Boolean})],v.prototype,"populated",void 0);s([l({type:Boolean})],v.prototype,"required",void 0);s([l({type:Boolean})],v.prototype,"resizable",void 0);s([l({attribute:"supporting-text"})],v.prototype,"supportingText",void 0);s([l({attribute:"error-text"})],v.prototype,"errorText",void 0);s([l({type:Number})],v.prototype,"count",void 0);s([l({type:Number})],v.prototype,"max",void 0);s([l({type:Boolean,attribute:"has-start"})],v.prototype,"hasStart",void 0);s([l({type:Boolean,attribute:"has-end"})],v.prototype,"hasEnd",void 0);s([B({slot:"aria-describedby"})],v.prototype,"slottedAriaDescribedBy",void 0);s([S()],v.prototype,"isAnimating",void 0);s([S()],v.prototype,"refreshErrorAlert",void 0);s([S()],v.prototype,"disableTransitions",void 0);s([T(".label.floating")],v.prototype,"floatingLabelEl",void 0);s([T(".label.resting")],v.prototype,"restingLabelEl",void 0);s([T(".container")],v.prototype,"containerEl",void 0);var St=class extends v{renderOutline(t){return m`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${t}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `}};var Ve=b`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`;var Fe=b`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;var re=class extends St{};re.styles=[Fe,Ve];re=s([E("md-outlined-field")],re);var He=Symbol.for(""),zr=o=>{if(o?.r===He)return o?._$litStatic$};var Ct=(o,...t)=>({_$litStatic$:t.reduce((e,r,i)=>e+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+o[i+1],o[0]),r:He}),je=new Map,qe=o=>(t,...e)=>{let r=e.length,i,n,a=[],c=[],d,h=0,g=!1;for(;h<r;){for(d=t[h];h<r&&(n=e[h],(i=zr(n))!==void 0);)d+=i+t[++h],g=!0;h!==r&&c.push(n),a.push(d),h++}if(h===r&&a.push(t[r]),g){let f=a.join("$$lit$$");(t=je.get(f))===void 0&&(a.raw=a,je.set(f,t=a)),e=c}return o(t,...e)},Ge=qe(m),Fn=qe($e);var We=b`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space)}
`;var{I:Kn}=Ce;var Ye=o=>o.strings===void 0;var Lr={},Ke=(o,t=Lr)=>o._$AH=t;var oe=Y(class extends M{constructor(o){if(super(o),o.type!==I.PROPERTY&&o.type!==I.ATTRIBUTE&&o.type!==I.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ye(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[t]){if(t===w||t===u)return t;let e=o.element,r=o.name;if(o.type===I.PROPERTY){if(t===e[r])return w}else if(o.type===I.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(r))return w}else if(o.type===I.ATTRIBUTE&&e.getAttribute(r)===t+"")return w;return Ke(o),t}});var Xe="important",Mr=" !"+Xe,ie=Y(class extends M{constructor(o){if(super(o),o.type!==I.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{let r=o[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[t]){let{style:e}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?e.removeProperty(r):e[r]=null);for(let r in t){let i=t[r];if(i!=null){this.ft.add(r);let n=typeof i=="string"&&i.endsWith(Mr);r.includes("-")||n?e.setProperty(r,n?i.slice(0,-11):i,n?Xe:""):e[r]=i}}return w}});var Ze={fromAttribute(o){return o??""},toAttribute(o){return o||null}};function Je(o,t){t.bubbles&&(!o.shadowRoot||t.composed)&&t.stopPropagation();let e=Reflect.construct(t.constructor,[t.type,t]),r=o.dispatchEvent(e);return r||t.preventDefault(),r}var It=Symbol("createValidator"),Ot=Symbol("getValidityAnchor"),ne=Symbol("privateValidator"),z=Symbol("privateSyncValidity"),Tt=Symbol("privateCustomValidationMessage");function Qe(o){var t;class e extends o{constructor(){super(...arguments),this[t]=""}get validity(){return this[z](),this[_].validity}get validationMessage(){return this[z](),this[_].validationMessage}get willValidate(){return this[z](),this[_].willValidate}checkValidity(){return this[z](),this[_].checkValidity()}reportValidity(){return this[z](),this[_].reportValidity()}setCustomValidity(i){this[Tt]=i,this[z]()}requestUpdate(i,n,a){super.requestUpdate(i,n,a),this[z]()}firstUpdated(i){super.firstUpdated(i),this[z]()}[(t=Tt,z)](){if(!1)return;this[ne]||(this[ne]=this[It]());let{validity:i,validationMessage:n}=this[ne].getValidity(),a=!!this[Tt],c=this[Tt]||n;this[_].setValidity({...i,customError:a},c,this[Ot]()??void 0)}[It](){throw new Error("Implement [createValidator]")}[Ot](){throw new Error("Implement [getValidityAnchor]")}}return e}var rt=Symbol("getFormValue"),tr=Symbol("getFormState");function er(o){class t extends o{get form(){return this[_].form}get labels(){return this[_].labels}get name(){return this.getAttribute("name")??""}set name(r){this.setAttribute("name",r)}get disabled(){return this.hasAttribute("disabled")}set disabled(r){this.toggleAttribute("disabled",r)}attributeChangedCallback(r,i,n){if(r==="name"||r==="disabled"){let a=r==="disabled"?i!==null:i;this.requestUpdate(r,a);return}super.attributeChangedCallback(r,i,n)}requestUpdate(r,i,n){super.requestUpdate(r,i,n),this[_].setFormValue(this[rt](),this[tr]())}[rt](){throw new Error("Implement [getFormValue]")}[tr](){return this[rt]()}formDisabledCallback(r){this.disabled=r}}return t.formAssociated=!0,s([l({noAccessor:!0})],t.prototype,"name",null),s([l({type:Boolean,noAccessor:!0})],t.prototype,"disabled",null),t}var Mt=Symbol("onReportValidity"),Pt=Symbol("privateCleanupFormListeners"),Rt=Symbol("privateDoNotReportInvalid"),zt=Symbol("privateIsSelfReportingValidity"),Lt=Symbol("privateCallOnReportValidity");function rr(o){var t,e,r;class i extends o{constructor(...a){super(...a),this[t]=new AbortController,this[e]=!1,this[r]=!1,!!1&&this.addEventListener("invalid",c=>{this[Rt]||!c.isTrusted||this.addEventListener("invalid",()=>{this[Lt](c)},{once:!0})},{capture:!0})}checkValidity(){this[Rt]=!0;let a=super.checkValidity();return this[Rt]=!1,a}reportValidity(){this[zt]=!0;let a=super.reportValidity();return a&&this[Lt](null),this[zt]=!1,a}[(t=Pt,e=Rt,r=zt,Lt)](a){let c=a?.defaultPrevented;c||(this[Mt](a),!(!c&&a?.defaultPrevented))||(this[zt]||Nr(this[_].form,this))&&this.focus()}[Mt](a){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(a){super.formAssociatedCallback&&super.formAssociatedCallback(a),this[Pt].abort(),a&&(this[Pt]=new AbortController,kr(this,a,()=>{this[Lt](null)},this[Pt].signal))}}return i}function kr(o,t,e,r){let i=Dr(t),n=!1,a,c=!1;i.addEventListener("before",()=>{c=!0,a=new AbortController,n=!1,o.addEventListener("invalid",()=>{n=!0},{signal:a.signal})},{signal:r}),i.addEventListener("after",()=>{c=!1,a?.abort(),!n&&e()},{signal:r}),t.addEventListener("submit",()=>{c||e()},{signal:r})}var ae=new WeakMap;function Dr(o){if(!ae.has(o)){let t=new EventTarget;ae.set(o,t);for(let e of["reportValidity","requestSubmit"]){let r=o[e];o[e]=function(){t.dispatchEvent(new Event("before"));let i=Reflect.apply(r,this,arguments);return t.dispatchEvent(new Event("after")),i}}}return ae.get(o)}function Nr(o,t){if(!o)return!0;let e;for(let r of o.elements)if(r.matches(":invalid")){e=r;break}return e===t}var kt=class{constructor(t){this.getCurrentState=t,this.currentValidity={validity:{},validationMessage:""}}getValidity(){let t=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,t)))return this.currentValidity;let{validity:r,validationMessage:i}=this.computeValidity(t);return this.prevState=this.copy(t),this.currentValidity={validationMessage:i,validity:{badInput:r.badInput,customError:r.customError,patternMismatch:r.patternMismatch,rangeOverflow:r.rangeOverflow,rangeUnderflow:r.rangeUnderflow,stepMismatch:r.stepMismatch,tooLong:r.tooLong,tooShort:r.tooShort,typeMismatch:r.typeMismatch,valueMissing:r.valueMissing}},this.currentValidity}};var Dt=class extends kt{computeValidity({state:t,renderedControl:e}){let r=e;ot(t)&&!r?(r=this.inputControl||document.createElement("input"),this.inputControl=r):r||(r=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=r);let i=ot(t)?r:null;if(i&&(i.type=t.type),r.value!==t.value&&(r.value=t.value),r.required=t.required,i){let n=t;n.pattern?i.pattern=n.pattern:i.removeAttribute("pattern"),n.min?i.min=n.min:i.removeAttribute("min"),n.max?i.max=n.max:i.removeAttribute("max"),n.step?i.step=n.step:i.removeAttribute("step")}return(t.minLength??-1)>-1?r.setAttribute("minlength",String(t.minLength)):r.removeAttribute("minlength"),(t.maxLength??-1)>-1?r.setAttribute("maxlength",String(t.maxLength)):r.removeAttribute("maxlength"),{validity:r.validity,validationMessage:r.validationMessage}}equals({state:t},{state:e}){let r=t.type===e.type&&t.value===e.value&&t.required===e.required&&t.minLength===e.minLength&&t.maxLength===e.maxLength;return!ot(t)||!ot(e)?r:r&&t.pattern===e.pattern&&t.min===e.min&&t.max===e.max&&t.step===e.step}copy({state:t}){return{state:ot(t)?this.copyInput(t):this.copyTextArea(t),renderedControl:null}}copyInput(t){let{type:e,pattern:r,min:i,max:n,step:a}=t;return{...this.copySharedState(t),type:e,pattern:r,min:i,max:n,step:a}}copyTextArea(t){return{...this.copySharedState(t),type:t.type}}copySharedState({value:t,required:e,minLength:r,maxLength:i}){return{value:t,required:e,minLength:r,maxLength:i}}};function ot(o){return o.type!=="textarea"}var Br=_t(rr(Qe(er(wt(y))))),p=class extends Br{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get valueAsNumber(){let t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){let e=this.getInput();e&&(e.valueAsNumber=t,this.value=e.value)}get valueAsDate(){let t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){let e=this.getInput();e&&(e.valueAsDate=t,this.value=e.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,e,r){this.getInputOrTextarea().setSelectionRange(t,e,r)}stepDown(t){let e=this.getInput();e&&(e.stepDown(t),this.value=e.value)}stepUp(t){let e=this.getInput();e&&(e.stepUp(t),this.value=e.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,e,r){t==="value"&&this.dirty||super.attributeChangedCallback(t,e,r)}render(){let t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea","no-spinner":this.noSpinner};return m`
      <span class="text-field ${k(t)}">
        ${this.renderField()}
      </span>
    `}updated(t){let e=this.getInputOrTextarea().value;this.value!==e&&(this.value=e)}renderField(){return Ge`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type==="textarea"}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`}renderLeadingIcon(){return m`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return m`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){let t={direction:this.textDirection},e=this.ariaLabel||this.label||u,r=this.autocomplete,i=(this.maxLength??-1)>-1,n=(this.minLength??-1)>-1;if(this.type==="textarea")return m`
        <textarea
          class="input"
          style=${ie(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${r||u}
          name=${this.name||u}
          ?disabled=${this.disabled}
          maxlength=${i?this.maxLength:u}
          minlength=${n?this.minLength:u}
          placeholder=${this.placeholder||u}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${oe(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;let a=this.renderPrefix(),c=this.renderSuffix(),d=this.inputMode;return m`
      <div class="input-wrapper">
        ${a}
        <input
          class="input"
          style=${ie(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${r||u}
          name=${this.name||u}
          ?disabled=${this.disabled}
          inputmode=${d||u}
          max=${this.max||u}
          maxlength=${i?this.maxLength:u}
          min=${this.min||u}
          minlength=${n?this.minLength:u}
          pattern=${this.pattern||u}
          placeholder=${this.placeholder||u}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||u}
          type=${this.type}
          .value=${oe(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${c}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,e){return t?m`<span class="${k({suffix:e,prefix:!e})}">${t}</span>`:u}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){Je(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[rt](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){this.getInputOrTextarea().focus()}[It](){return new Dt(()=>({state:this,renderedControl:this.inputOrTextarea}))}[Ot](){return this.inputOrTextarea}[Mt](t){t?.preventDefault();let e=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,e===this.getErrorText()&&this.field?.reannounceError()}};p.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};s([l({type:Boolean,reflect:!0})],p.prototype,"error",void 0);s([l({attribute:"error-text"})],p.prototype,"errorText",void 0);s([l()],p.prototype,"label",void 0);s([l({type:Boolean,attribute:"no-asterisk"})],p.prototype,"noAsterisk",void 0);s([l({type:Boolean,reflect:!0})],p.prototype,"required",void 0);s([l()],p.prototype,"value",void 0);s([l({attribute:"prefix-text"})],p.prototype,"prefixText",void 0);s([l({attribute:"suffix-text"})],p.prototype,"suffixText",void 0);s([l({type:Boolean,attribute:"has-leading-icon"})],p.prototype,"hasLeadingIcon",void 0);s([l({type:Boolean,attribute:"has-trailing-icon"})],p.prototype,"hasTrailingIcon",void 0);s([l({attribute:"supporting-text"})],p.prototype,"supportingText",void 0);s([l({attribute:"text-direction"})],p.prototype,"textDirection",void 0);s([l({type:Number})],p.prototype,"rows",void 0);s([l({type:Number})],p.prototype,"cols",void 0);s([l({reflect:!0})],p.prototype,"inputMode",void 0);s([l()],p.prototype,"max",void 0);s([l({type:Number})],p.prototype,"maxLength",void 0);s([l()],p.prototype,"min",void 0);s([l({type:Number})],p.prototype,"minLength",void 0);s([l({type:Boolean,attribute:"no-spinner"})],p.prototype,"noSpinner",void 0);s([l()],p.prototype,"pattern",void 0);s([l({reflect:!0,converter:Ze})],p.prototype,"placeholder",void 0);s([l({type:Boolean,reflect:!0})],p.prototype,"readOnly",void 0);s([l({type:Boolean,reflect:!0})],p.prototype,"multiple",void 0);s([l()],p.prototype,"step",void 0);s([l({reflect:!0})],p.prototype,"type",void 0);s([l({reflect:!0})],p.prototype,"autocomplete",void 0);s([S()],p.prototype,"dirty",void 0);s([S()],p.prototype,"focused",void 0);s([S()],p.prototype,"nativeError",void 0);s([S()],p.prototype,"nativeErrorText",void 0);s([T(".input")],p.prototype,"inputOrTextarea",void 0);s([T(".field")],p.prototype,"field",void 0);s([B({slot:"leading-icon"})],p.prototype,"leadingIcons",void 0);s([B({slot:"trailing-icon"})],p.prototype,"trailingIcons",void 0);var Nt=class extends p{constructor(){super(...arguments),this.fieldTag=Ct`md-outlined-field`}};var or=b`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;var se=class extends Nt{constructor(){super(...arguments),this.fieldTag=Ct`md-outlined-field`}};se.styles=[or,We];se=s([E("md-outlined-text-field")],se);})();
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

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

@lit/reactive-element/decorators/event-options.js:
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

@material/web/button/internal/shared-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/attachable-controller.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/internal/focus-ring.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/internal/focus-ring-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/md-focus-ring.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/internal/motion/animation.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/internal/ripple.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/internal/ripple-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/ripple.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/aria/aria.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/aria/delegate.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/element-internals.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/form-submitter.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/events/form-label-activation.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/button.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/text-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/text-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/text-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/elevation/internal/elevation.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/elevation/internal/elevation-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/elevation/elevation.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/filled-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/filled-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/shared-elevation-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/filled-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/outlined-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/outlined-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/shared-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/outlined-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/textfield/internal/outlined-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/internal/controller/string-converter.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/events/redispatch-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/constraint-validation.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/form-associated.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/on-report-validity.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/validators/validator.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/validators/text-field-validator.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/text-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/outlined-text-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/shared-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/outlined-text-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
//# sourceMappingURL=web-components.js.map
