!function(){"use strict";var t,e,i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap,r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}},a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(i,t,o)},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,h=window,c=h.trustedTypes,d=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f},b=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),o=i.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,t.appendChild(s)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:b}),(null!==(t=h.reactiveElementVersions)&&void 0!==t?t:h.reactiveElementVersions=[]).push("1.4.2");var m=window,v=m.trustedTypes,y=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,x="?"+_,w=`<${x}>`,k=document,M=(t="")=>k.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,E=/>/g,P=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),O=/'/g,D=/"/g,T=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),R=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),I=new WeakMap,F=k.createTreeWalker(k,129,null,!1),V=class{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,h]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=$;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===$?"!--"===l[1]?r=C:void 0!==l[1]?r=E:void 0!==l[2]?(T.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=P):void 0!==l[3]&&(r=P):r===P?">"===l[0]?(r=null!=o?o:$,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?P:'"'===l[3]?D:O):r===D||r===O?r=P:r===C||r===E?r=$:(r=P,o=void 0);const d=r===P&&t[e+1].startsWith("/>")?" ":"";n+=r===$?i+w:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+_+d):i+_+(-2===h?(s.push(void 0),e):d)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(a):a,s]})(t,e);if(this.el=V.createElement(l,i),F.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=F.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?j:"?"===e[1]?W:"@"===e[1]?q:H})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(T.test(s.tagName)){const t=s.textContent.split(_),e=t.length-1;if(e>0){s.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),F.nextNode(),a.push({type:2,index:++o});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===x)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(_,t+1));)a.push({type:7,index:o}),t+=_.length-1}o++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}};function B(t,e,i=t,s){var o,n,r,a;if(e===R)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const h=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=B(t,l._$AS(t,e.values),l,s)),e}var N=class{constructor(t,e,i,s){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),A(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==R&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>S(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==z&&A(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.p(i);else{const t=new class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);F.currentNode=o;let n=F.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new N(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Y(n,this,t)),this.u.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=F.nextNode(),r++)}return o}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}(o,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new V(t)),e}k(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new N(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},H=class{constructor(t,e,i,s,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=B(this,t,e,0),n=!A(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=B(this,s[i+r],e,r),a===R&&(a=this._$AH[r]),n||(n=!A(a)||a!==this._$AH[r]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},j=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}},U=v?v.emptyScript:"",W=class extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,U):this.element.removeAttribute(this.name)}},q=class extends H{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:z)===R)return;const s=this._$AH,o=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==z&&(s===z||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}},Y=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}},X=m.litHtmlPolyfillSupport;null==X||X(V,N),(null!==(e=m.litHtmlVersions)&&void 0!==e?e:m.litHtmlVersions=[]).push("2.4.0");var K,G,Z=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new N(e.insertBefore(M(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return R}};Z.finalized=!0,Z._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:Z});var J=globalThis.litElementPolyfillSupport;null==J||J({LitElement:Z}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.2.0");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
/**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var Q,tt=a`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,et=a`
  ${tt}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,it=Object.defineProperty,st=Object.defineProperties,ot=Object.getOwnPropertyDescriptor,nt=Object.getOwnPropertyDescriptors,rt=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,ht=(t,e,i)=>e in t?it(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ct=(t,e)=>{for(var i in e||(e={}))at.call(e,i)&&ht(t,i,e[i]);if(rt)for(var i of rt(e))lt.call(e,i)&&ht(t,i,e[i]);return t},dt=(t,e)=>st(t,nt(e)),ut=(t,e,i,s)=>{for(var o,n=s>1?void 0:s?ot(e,i):e,r=t.length-1;r>=0;r--)(o=t[r])&&(n=(s?o(e,i,n):o(n))||n);return s&&n&&it(e,i,n),n},pt=new WeakMap,ft=new WeakMap,gt=new WeakMap,bt=class{constructor(t,e){(this.host=t).addController(this),this.options=ct({form:t=>t.closest("form"),name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),setValue:(t,e)=>t.value=e},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(pt.has(this.form)?pt.get(this.form).add(this.host):pt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),gt.has(this.form)||(gt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){var t;this.form&&(null==(t=pt.get(this.form))||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),gt.has(this.form)&&(this.form.reportValidity=gt.get(this.form),gt.delete(this.form)),this.form=void 0),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){var t;const e=this.host,i=Boolean(ft.get(e)),s=Boolean(e.invalid),o=Boolean(e.required);(null==(t=this.form)?void 0:t.noValidate)?(e.removeAttribute("data-required"),e.removeAttribute("data-optional"),e.removeAttribute("data-invalid"),e.removeAttribute("data-valid"),e.removeAttribute("data-user-invalid"),e.removeAttribute("data-user-valid")):(e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",s),e.toggleAttribute("data-valid",!s),e.toggleAttribute("data-user-invalid",s&&i),e.toggleAttribute("data-user-valid",!s&&i))}handleFormData(t){const e=this.options.disabled(this.host),i=this.options.name(this.host),s=this.options.value(this.host),o="sl-button"===this.host.tagName.toLowerCase();e||o||"string"!=typeof i||void 0===s||(Array.isArray(s)?s.forEach((e=>{t.formData.append(i,e.toString())})):t.formData.append(i,s.toString()))}handleFormSubmit(t){var e;const i=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=pt.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||i||s(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){ft.set(t,e),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&i.setAttribute(t,e.getAttribute(t))}))),this.form.append(i),i.click(),i.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}},mt=Symbol.for(""),vt=t=>{if((null==t?void 0:t.r)===mt)return null==t?void 0:t._$litStatic$},yt=(t,...e)=>({_$litStatic$:e.reduce(((e,i,s)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]),r:mt}),_t=new Map,xt=(t=>(e,...i)=>{const s=i.length;let o,n;const r=[],a=[];let l,h=0,c=!1;for(;h<s;){for(l=e[h];h<s&&void 0!==(n=i[h],o=vt(n));)l+=o+e[++h],c=!0;a.push(n),r.push(l),h++}if(h===s&&r.push(e[s]),c){const t=r.join("$$lit$$");void 0===(e=_t.get(t))&&(r.raw=r,_t.set(t,e=r)),i=a}return t(e,...i)})(L),wt=new Set,kt=new MutationObserver($t),Mt=new Map,At=document.documentElement.dir||"ltr",St=document.documentElement.lang||navigator.language;function $t(){At=document.documentElement.dir||"ltr",St=document.documentElement.lang||navigator.language,[...wt.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}kt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var Ct=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){wt.add(this.host)}hostDisconnected(){wt.delete(this.host)}dir(){return`${this.host.dir||At}`.toLowerCase()}lang(){return`${this.host.lang||St}`.toLowerCase()}term(t,...e){var i,s;const o=new Intl.Locale(this.lang()),n=null==o?void 0:o.language.toLowerCase(),r=null!==(s=null===(i=null==o?void 0:o.region)||void 0===i?void 0:i.toLowerCase())&&void 0!==s?s:"",a=Mt.get(`${n}-${r}`),l=Mt.get(n);let h;if(a&&a[t])h=a[t];else if(l&&l[t])h=l[t];else{if(!Q||!Q[t])return t;h=Q[t]}return"function"==typeof h?h(...e):h}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}},Et=class extends Ct{};!function(...t){t.map((t=>{const e=t.$code.toLowerCase();Mt.has(e)?Mt.set(e,Object.assign(Object.assign({},Mt.get(e)),t)):Mt.set(e,t),Q||(Q=t)})),$t()}({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var Pt=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}},Ot=t=>null!=t?t:z
/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */,Dt=1,Tt=2,Lt=3,Rt=4,zt=t=>(...e)=>({_$litDirective$:t,values:e}),It=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},Ft=zt(class extends It{constructor(t){var e;if(super(t),t.type!==Dt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const o=t.element.classList;this.nt.forEach((t=>{t in e||(o.remove(t),this.nt.delete(t))}));for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(i?(o.add(t),this.nt.add(t)):(o.remove(t),this.nt.delete(t)))}return R}});
/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
function Vt(t,e){const i=ct({waitUntilFirstUpdate:!1},e);return(e,s)=>{const{update:o}=e;if(t in e){const n=t;e.update=function(t){if(t.has(n)){const e=t.get(n),o=this[n];e!==o&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[s](e,o))}o.call(this,t)}}}}var Bt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),Nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?dt(ct({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Ht(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Nt(t,e)}function jt(t){return Ht(dt(ct({},t),{state:!0}))}var Ut;function Wt(t,e){return(({finisher:t,descriptor:e})=>(i,s)=>{var o;if(void 0===s){const s=null!==(o=i.originalKey)&&void 0!==o?o:i.key,n=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:dt(ct({},i),{key:s});return null!=t&&(n.finisher=function(e){t(e,s)}),n}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(o,s)}})({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}null===(Ut=window.HTMLSlotElement)||void 0===Ut||Ut.prototype.assignedElements;var qt=class extends Z{emit(t,e){const i=new CustomEvent(t,ct({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}};ut([Ht()],qt.prototype,"dir",2),ut([Ht()],qt.prototype,"lang",2);
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var Yt=class extends qt{constructor(){super(...arguments),this.formSubmitController=new bt(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),i=t.getAttribute("form");return e.getElementById(i)}return t.closest("form")}}),this.hasSlotController=new Pt(this,"[default]","prefix","suffix"),this.localize=new Et(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&(this.invalid=!this.button.checkValidity())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.invalid=!this.button.checkValidity())}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){if(this.disabled||this.loading)return t.preventDefault(),void t.stopPropagation();"submit"===this.type&&this.formSubmitController.submit(this),"reset"===this.type&&this.formSubmitController.reset(this)}handleDisabledChange(){this.isButton()&&(this.button.disabled=this.disabled,this.invalid=!this.button.checkValidity())}isButton(){return!this.href}isLink(){return!!this.href}render(){const t=this.isLink(),e=t?yt`a`:yt`button`;return xt`
      <${e}
        part="base"
        class=${Ft({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Ot(t?void 0:this.disabled)}
        type=${Ot(t?void 0:this.type)}
        title=${this.title}
        name=${Ot(t?void 0:this.name)}
        value=${Ot(t?void 0:this.value)}
        href=${Ot(t?this.href:void 0)}
        target=${Ot(t?this.target:void 0)}
        download=${Ot(t?this.download:void 0)}
        rel=${Ot(t&&this.target?"noreferrer noopener":void 0)}
        role=${Ot(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?xt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?xt`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};Yt.styles=et,ut([Wt(".button")],Yt.prototype,"button",2),ut([jt()],Yt.prototype,"hasFocus",2),ut([jt()],Yt.prototype,"invalid",2),ut([Ht()],Yt.prototype,"title",2),ut([Ht({reflect:!0})],Yt.prototype,"variant",2),ut([Ht({reflect:!0})],Yt.prototype,"size",2),ut([Ht({type:Boolean,reflect:!0})],Yt.prototype,"caret",2),ut([Ht({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2),ut([Ht({type:Boolean,reflect:!0})],Yt.prototype,"loading",2),ut([Ht({type:Boolean,reflect:!0})],Yt.prototype,"outline",2),ut([Ht({type:Boolean,reflect:!0})],Yt.prototype,"pill",2),ut([Ht({type:Boolean,reflect:!0})],Yt.prototype,"circle",2),ut([Ht()],Yt.prototype,"type",2),ut([Ht()],Yt.prototype,"name",2),ut([Ht()],Yt.prototype,"value",2),ut([Ht()],Yt.prototype,"href",2),ut([Ht()],Yt.prototype,"target",2),ut([Ht()],Yt.prototype,"download",2),ut([Ht()],Yt.prototype,"form",2),ut([Ht({attribute:"formaction"})],Yt.prototype,"formAction",2),ut([Ht({attribute:"formenctype"})],Yt.prototype,"formEnctype",2),ut([Ht({attribute:"formmethod"})],Yt.prototype,"formMethod",2),ut([Ht({attribute:"formnovalidate",type:Boolean})],Yt.prototype,"formNoValidate",2),ut([Ht({attribute:"formtarget"})],Yt.prototype,"formTarget",2),ut([Vt("disabled",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleDisabledChange",1),Yt=ut([Bt("sl-button")],Yt);var Xt=a`
  ${tt}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      rotate: 450deg;
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      rotate: 1080deg;
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Kt=class extends qt{constructor(){super(...arguments),this.localize=new Et(this)}render(){return L`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Kt.styles=Xt,Kt=ut([Bt("sl-spinner")],Kt);var Gt="";function Zt(t){Gt=t}var Jt={name:"default",resolver:t=>`${function(){if(!Gt){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)Zt(e.getAttribute("data-shoelace"));else{const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)));let i="";e&&(i=e.getAttribute("src")),Zt(i.split("/").slice(0,-1).join("/"))}}return Gt.replace(/\/$/,"")}()}/assets/icons/${t}.svg`},Qt={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},te=[Jt,{name:"system",resolver:t=>t in Qt?`data:image/svg+xml,${encodeURIComponent(Qt[t])}`:""}],ee=[];function ie(t){return te.find((e=>e.name===t))}var se=new Map;var oe=new Map;async function ne(t){if(oe.has(t))return oe.get(t);const e=await function(t,e="cors"){if(se.has(t))return se.get(t);const i=fetch(t,{mode:e}).then((async t=>({ok:t.ok,status:t.status,html:await t.text()})));return se.set(t,i),i}(t),i={ok:e.ok,status:e.status,svg:null};if(e.ok){const t=document.createElement("div");t.innerHTML=e.html;const s=t.firstElementChild;i.svg="svg"===(null==s?void 0:s.tagName.toLowerCase())?s.outerHTML:""}return oe.set(t,i),i}var re=a`
  ${tt}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,ae=class extends It{constructor(t){if(super(t),this.it=z,t.type!==Tt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===z||null==t)return this._t=void 0,this.it=t;if(t===R)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};ae.directiveName="unsafeHTML",ae.resultType=1;var le=zt(ae),he=class extends ae{};he.directiveName="unsafeSVG",he.resultType=2;var ce,de=zt(he),ue=class extends qt{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){var t;super.connectedCallback(),t=this,ee.push(t)}firstUpdated(){this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,ee=ee.filter((e=>e!==t))}getUrl(){const t=ie(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const e=ie(this.library),i=this.getUrl();if(ce||(ce=new DOMParser),i)try{const s=await ne(i);if(i!==this.getUrl())return;if(s.ok){const i=ce.parseFromString(s.svg,"text/html").body.querySelector("svg");null!==i?(null==(t=null==e?void 0:e.mutator)||t.call(e,i),this.svg=i.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch(t){this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){return L` ${de(this.svg)} `}};ue.styles=re,ut([jt()],ue.prototype,"svg",2),ut([Ht({reflect:!0})],ue.prototype,"name",2),ut([Ht()],ue.prototype,"src",2),ut([Ht()],ue.prototype,"label",2),ut([Ht({reflect:!0})],ue.prototype,"library",2),ut([Vt("label")],ue.prototype,"handleLabelChange",1),ut([Vt("name"),Vt("src"),Vt("library")],ue.prototype,"setIcon",1),ue=ut([Bt("sl-icon")],ue);
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var pe,fe=a`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,ge=a`
  ${tt}
  ${fe}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide Firefox's clear button on date and time inputs */
  .input--is-firefox input[type='date'],
  .input--is-firefox input[type='time'] {
    clip-path: inset(0 2em 0 0);
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,be={},me=zt(class extends It{constructor(t){if(super(t),t.type!==Lt&&t.type!==Dt&&t.type!==Rt)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===R||e===z)return e;const i=t.element,s=t.name;if(t.type===Lt){if(e===i[s])return R}else if(t.type===Rt){if(!!e===i.hasAttribute(s))return R}else if(t.type===Dt&&i.getAttribute(s)===e+"")return R;return((t,e=be)=>{t._$AH=e})(t),e}}),ve=null==(pe=navigator.userAgentData)?void 0:pe.brands.some((t=>t.brand.includes("Chromium"))),ye=!ve&&navigator.userAgent.includes("Firefox"),_e=class extends qt{constructor(){super(...arguments),this.formSubmitController=new bt(this),this.hasSlotController=new Pt(this,"help-text","label"),this.localize=new Et(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.type="text",this.size="medium",this.name="",this.value="",this.defaultValue="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0}get valueAsDate(){var t,e;return null!=(e=null==(t=this.input)?void 0:t.valueAsDate)?e:null}set valueAsDate(t){const e=document.createElement("input");e.type="date",e.valueAsDate=t,this.value=e.value}get valueAsNumber(){var t,e;return null!=(e=null==(t=this.input)?void 0:t.valueAsNumber)?e:parseFloat(this.value)}set valueAsNumber(t){const e=document.createElement("input");e.type="number",e.valueAsNumber=t,this.value=e.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s){this.input.setRangeText(t,e,i,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleStepChange(){this.input.step=String(this.step),this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||t.isComposing||this.formSubmitController.submit()}))}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleValueChange(){this.input.value=this.value,this.invalid=!this.input.checkValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,s=!!this.helpText||!!e,o=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return L`
      <div
        part="form-control"
        class=${Ft({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Ft({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":ye})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${Ot(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Ot(this.placeholder)}
              minlength=${Ot(this.minlength)}
              maxlength=${Ot(this.maxlength)}
              min=${Ot(this.min)}
              max=${Ot(this.max)}
              step=${Ot(this.step)}
              .value=${me(this.value)}
              autocapitalize=${Ot("password"===this.type?"off":this.autocapitalize)}
              autocomplete=${Ot("password"===this.type?"off":this.autocomplete)}
              autocorrect=${Ot("password"===this.type?"off":this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${Ot(this.pattern)}
              enterkeyhint=${Ot(this.enterkeyhint)}
              inputmode=${Ot(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?L`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}
            ${this.passwordToggle&&!this.disabled?L`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?L`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:L`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};_e.styles=ge,ut([Wt(".input__control")],_e.prototype,"input",2),ut([jt()],_e.prototype,"hasFocus",2),ut([jt()],_e.prototype,"invalid",2),ut([Ht()],_e.prototype,"title",2),ut([Ht({reflect:!0})],_e.prototype,"type",2),ut([Ht({reflect:!0})],_e.prototype,"size",2),ut([Ht()],_e.prototype,"name",2),ut([Ht()],_e.prototype,"value",2),ut([((t="value")=>(e,i)=>{const s=e.constructor,o=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(e,n,r){var a;const l=s.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||p,s=("function"==typeof e?e:null!=(a=null==e?void 0:e.fromAttribute)?a:p.fromAttribute)(r,l.type);this[t]!==s&&(this[i]=s)}o.call(this,e,n,r)}})()],_e.prototype,"defaultValue",2),ut([Ht({type:Boolean,reflect:!0})],_e.prototype,"filled",2),ut([Ht({type:Boolean,reflect:!0})],_e.prototype,"pill",2),ut([Ht()],_e.prototype,"label",2),ut([Ht({attribute:"help-text"})],_e.prototype,"helpText",2),ut([Ht({type:Boolean})],_e.prototype,"clearable",2),ut([Ht({attribute:"password-toggle",type:Boolean})],_e.prototype,"passwordToggle",2),ut([Ht({attribute:"password-visible",type:Boolean})],_e.prototype,"passwordVisible",2),ut([Ht({attribute:"no-spin-buttons",type:Boolean})],_e.prototype,"noSpinButtons",2),ut([Ht()],_e.prototype,"placeholder",2),ut([Ht({type:Boolean,reflect:!0})],_e.prototype,"disabled",2),ut([Ht({type:Boolean,reflect:!0})],_e.prototype,"readonly",2),ut([Ht({type:Number})],_e.prototype,"minlength",2),ut([Ht({type:Number})],_e.prototype,"maxlength",2),ut([Ht()],_e.prototype,"min",2),ut([Ht()],_e.prototype,"max",2),ut([Ht()],_e.prototype,"step",2),ut([Ht()],_e.prototype,"pattern",2),ut([Ht({type:Boolean,reflect:!0})],_e.prototype,"required",2),ut([Ht()],_e.prototype,"autocapitalize",2),ut([Ht()],_e.prototype,"autocorrect",2),ut([Ht()],_e.prototype,"autocomplete",2),ut([Ht({type:Boolean})],_e.prototype,"autofocus",2),ut([Ht()],_e.prototype,"enterkeyhint",2),ut([Ht({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],_e.prototype,"spellcheck",2),ut([Ht()],_e.prototype,"inputmode",2),ut([Vt("disabled",{waitUntilFirstUpdate:!0})],_e.prototype,"handleDisabledChange",1),ut([Vt("step",{waitUntilFirstUpdate:!0})],_e.prototype,"handleStepChange",1),ut([Vt("value",{waitUntilFirstUpdate:!0})],_e.prototype,"handleValueChange",1),_e=ut([Bt("sl-input")],_e);var xe=a`
  ${tt}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbols--indicator {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--symbol-color-active);
    pointer-events: none;
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbols--indicator {
      color: SelectedItem;
    }
  }
`;var we=zt(class extends It{constructor(t){var e;if(super(t),t.type!==Dt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach((t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.vt.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return R}}),ke=class extends qt{constructor(){super(...arguments),this.localize=new Et(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e="rtl"===this.localize.dir(),{left:i,right:s,width:o}=this.rating.getBoundingClientRect();return function(t,e,i){return t<e?e:t>i?i:t}(e?this.roundToPrecision((s-t)/o*this.max,this.precision):this.roundToPrecision((t-i)/o*this.max,this.precision),0,this.max)}handleClick(t){this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change")}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e="ltr"===this.localize.dir(),i="rtl"===this.localize.dir(),s=this.value;if(!this.disabled&&!this.readonly){if("ArrowDown"===t.key||e&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key){const e=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-e),t.preventDefault()}if("ArrowUp"===t.key||e&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key){const e=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+e),t.preventDefault()}"Home"===t.key&&(this.value=0,t.preventDefault()),"End"===t.key&&(this.value=this.max,t.preventDefault()),this.value!==s&&this.emit("sl-change")}}handleMouseEnter(){this.isHovering=!0}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const i=1/e;return Math.ceil(t*i)/i}render(){const t="rtl"===this.localize.dir(),e=Array.from(Array(this.max).keys());let i=0;return i=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,L`
      <div
        part="base"
        class=${Ft({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols rating__symbols--inactive">
          ${e.map((t=>L`
              <span
                class=${Ft({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===t+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${le(this.getSymbol(t+1))}
              </span>
            `))}
        </span>

        <span class="rating__symbols rating__symbols--indicator">
          ${e.map((e=>L`
              <span
                class=${Ft({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===e+1})}
                style=${we({clipPath:i>e+1?"none":t?`inset(0 0 0 ${100-(i-e)/1*100}%)`:`inset(0 ${100-(i-e)/1*100}% 0 0)`})}
                role="presentation"
              >
                ${le(this.getSymbol(e+1))}
              </span>
            `))}
        </span>
      </div>
    `}};
/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ke.styles=xe,ut([Wt(".rating")],ke.prototype,"rating",2),ut([jt()],ke.prototype,"hoverValue",2),ut([jt()],ke.prototype,"isHovering",2),ut([Ht()],ke.prototype,"label",2),ut([Ht({type:Number})],ke.prototype,"value",2),ut([Ht({type:Number})],ke.prototype,"max",2),ut([Ht({type:Number})],ke.prototype,"precision",2),ut([Ht({type:Boolean,reflect:!0})],ke.prototype,"readonly",2),ut([Ht({type:Boolean,reflect:!0})],ke.prototype,"disabled",2),ut([Ht()],ke.prototype,"getSymbol",2),ke=ut([Bt("sl-rating")],ke);var Me=a`
  ${tt}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ae=class extends qt{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Se(t.target);null==e||e.classList.add("sl-button-group__button--focus")}handleBlur(t){const e=Se(t.target);null==e||e.classList.remove("sl-button-group__button--focus")}handleMouseOver(t){const e=Se(t.target);null==e||e.classList.add("sl-button-group__button--hover")}handleMouseOut(t){const e=Se(t.target);null==e||e.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach((e=>{const i=t.indexOf(e),s=Se(e);null!==s&&(s.classList.add("sl-button-group__button"),s.classList.toggle("sl-button-group__button--first",0===i),s.classList.toggle("sl-button-group__button--inner",i>0&&i<t.length-1),s.classList.toggle("sl-button-group__button--last",i===t.length-1),s.classList.toggle("sl-button-group__button--radio","sl-radio-button"===s.tagName.toLowerCase()))}))}render(){return L`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};function Se(t){var e;const i="sl-button, sl-radio-button";return null!=(e=t.closest(i))?e:t.querySelector(i)}Ae.styles=Me,ut([Wt("slot")],Ae.prototype,"defaultSlot",2),ut([jt()],Ae.prototype,"disableRole",2),ut([Ht()],Ae.prototype,"label",2),Ae=ut([Bt("sl-button-group")],Ae);var $e=a`
  ${tt}
  ${fe}

  :host {
    display: block;
  }

  .form-control {
    border: none;
    padding: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Ce=class extends qt{constructor(){super(...arguments),this.formSubmitController=new bt(this,{defaultValue:t=>t.defaultValue}),this.hasSlotController=new Pt(this,"help-text","label"),this.hasButtonGroup=!1,this.errorMessage="",this.customErrorMessage="",this.defaultValue="",this.invalid=!1,this.label="",this.helpText="",this.name="option",this.value="",this.required=!1}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.invalid=!this.validity.valid}checkValidity(){return this.validity.valid}setCustomValidity(t=""){this.customErrorMessage=t,this.errorMessage=t,t?(this.invalid=!0,this.input.setCustomValidity(t)):this.invalid=!1}get validity(){const t=!(this.value&&this.required||!this.required),e=""!==this.customErrorMessage;return{badInput:!1,customError:e,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!t&&!e,valueMissing:!t}}reportValidity(){const t=this.validity;return this.errorMessage=this.customErrorMessage||t.valid?"":this.input.validationMessage,this.invalid=!t.valid,t.valid||this.showNativeErrorMessage(),!this.invalid}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target,i=this.getAllRadios(),s=this.value;e.disabled||(this.value=e.value,i.forEach((t=>t.checked=t===e)),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const i=this.getAllRadios().filter((t=>!t.disabled)),s=null!=(e=i.find((t=>t.checked)))?e:i[0],o=" "===t.key?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,n=this.value;let r=i.indexOf(s)+o;r<0&&(r=i.length-1),r>i.length-1&&(r=0),this.getAllRadios().forEach((t=>{t.checked=!1,this.hasButtonGroup||(t.tabIndex=-1)})),this.value=i[r].value,i[r].checked=!0,this.hasButtonGroup?i[r].shadowRoot.querySelector("button").focus():(i[r].tabIndex=0,i[r].focus()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),e=t.find((t=>t.checked))||t[0];e&&e.focus()}handleSlotChange(){var t;const e=this.getAllRadios();if(e.forEach((t=>t.checked=t.value===this.value)),this.hasButtonGroup=e.some((t=>"sl-radio-button"===t.tagName.toLowerCase())),!e.some((t=>t.checked)))if(this.hasButtonGroup){e[0].shadowRoot.querySelector("button").tabIndex=0}else e[0].tabIndex=0;if(this.hasButtonGroup){const e=null==(t=this.shadowRoot)?void 0:t.querySelector("sl-button-group");e&&(e.disableRole=!0)}}showNativeErrorMessage(){this.input.hidden=!1,this.input.reportValidity(),setTimeout((()=>this.input.hidden=!0),1e4)}updateCheckedRadio(){this.getAllRadios().forEach((t=>t.checked=t.value===this.value)),this.invalid=!this.validity.valid}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,s=!!this.helpText||!!e,o=L`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.handleSlotChange}
        role="presentation"
      ></slot>
    `;return L`
      <fieldset
        part="form-control"
        class=${Ft({"form-control":!0,"form-control--medium":!0,"form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
              />
            </label>
          </div>

          ${this.hasButtonGroup?L`
                <sl-button-group part="button-group" exportparts="base:button-group__base">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </fieldset>
    `}};Ce.styles=$e,ut([Wt("slot:not([name])")],Ce.prototype,"defaultSlot",2),ut([Wt(".radio-group__validation-input")],Ce.prototype,"input",2),ut([jt()],Ce.prototype,"hasButtonGroup",2),ut([jt()],Ce.prototype,"errorMessage",2),ut([jt()],Ce.prototype,"customErrorMessage",2),ut([jt()],Ce.prototype,"defaultValue",2),ut([jt()],Ce.prototype,"invalid",2),ut([Ht()],Ce.prototype,"label",2),ut([Ht({attribute:"help-text"})],Ce.prototype,"helpText",2),ut([Ht()],Ce.prototype,"name",2),ut([Ht({reflect:!0})],Ce.prototype,"value",2),ut([Ht({type:Boolean,reflect:!0})],Ce.prototype,"required",2),ut([Vt("value")],Ce.prototype,"handleValueChange",1),Ce=ut([Bt("sl-radio-group")],Ce);var Ee=a`
  ${et}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Pe=class extends qt{constructor(){super(...arguments),this.hasSlotController=new Pt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}focus(t){this.input.focus(t)}blur(){this.input.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled)return t.preventDefault(),void t.stopPropagation();this.checked=!0}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}render(){return xt`
      <div part="base" role="presentation">
        <button
          part="${"button"+(this.checked?" button--checked":"")}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Ft({button:!0,"button--default":!0,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${Ot(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Pe.styles=Ee,ut([Wt(".button")],Pe.prototype,"input",2),ut([Wt(".hidden-input")],Pe.prototype,"hiddenInput",2),ut([jt()],Pe.prototype,"hasFocus",2),ut([jt()],Pe.prototype,"checked",2),ut([Ht()],Pe.prototype,"value",2),ut([Ht({type:Boolean,reflect:!0})],Pe.prototype,"disabled",2),ut([Ht({reflect:!0})],Pe.prototype,"size",2),ut([Ht({type:Boolean,reflect:!0})],Pe.prototype,"pill",2),ut([Vt("disabled",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleDisabledChange",1),Pe=ut([Bt("sl-radio-button")],Pe);var Oe=a`
  ${tt}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,De=class extends qt{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return L`
      <slot
        part="base"
        class=${Ft({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      ></slot>
    `}};De.styles=Oe,ut([Ht({reflect:!0})],De.prototype,"variant",2),ut([Ht({type:Boolean,reflect:!0})],De.prototype,"pill",2),ut([Ht({type:Boolean,reflect:!0})],De.prototype,"pulse",2),De=ut([Bt("sl-badge")],De);var Te=a`
  ${tt}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Le=class extends qt{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){return L`
      <div
        part="base"
        class=${Ft({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape})}
        role="img"
        aria-label=${this.label}
      >
        ${this.initials?L` <div part="initials" class="avatar__initials">${this.initials}</div> `:L`
              <slot name="icon" part="icon" class="avatar__icon" aria-hidden="true">
                <sl-icon name="person-fill" library="system"></sl-icon>
              </slot>
            `}
        ${this.image&&!this.hasError?L`
              <img
                part="image"
                class="avatar__image"
                src="${this.image}"
                loading="${this.loading}"
                alt=""
                @error="${()=>this.hasError=!0}"
              />
            `:""}
      </div>
    `}};function Re(t,e){return new Promise((i=>{t.addEventListener(e,(function s(o){o.target===t&&(t.removeEventListener(e,s),i())}))}))}function ze(t,e,i){return new Promise((s=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,dt(ct({},i),{duration:Ie()?0:i.duration}));o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})}))}function Ie(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Fe(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const i=requestAnimationFrame(e);t.addEventListener("cancel",(()=>i),{once:!0}),t.addEventListener("finish",(()=>i),{once:!0}),t.cancel()})))))}Le.styles=Te,ut([jt()],Le.prototype,"hasError",2),ut([Ht()],Le.prototype,"image",2),ut([Ht()],Le.prototype,"label",2),ut([Ht()],Le.prototype,"initials",2),ut([Ht()],Le.prototype,"loading",2),ut([Ht({reflect:!0})],Le.prototype,"shape",2),ut([Vt("image")],Le.prototype,"handleImageChange",1),Le=ut([Bt("sl-avatar")],Le);var Ve=new Map,Be=new WeakMap;function Ne(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function He(t,e){Ve.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function je(t,e,i){const s=Be.get(t);if(null==s?void 0:s[e])return Ne(s[e],i.dir);const o=Ve.get(e);return o?Ne(o,i.dir):{keyframes:[],options:{duration:0}}}var Ue=a`
  ${tt}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,We=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),qe=class extends qt{constructor(){super(...arguments),this.hasSlotController=new Pt(this,"icon","suffix"),this.localize=new Et(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,Re(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Re(this,"sl-after-hide")}async toast(){return new Promise((t=>{null===We.parentElement&&document.body.append(We),We.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{We.removeChild(this),t(),null===We.querySelector("sl-alert")&&We.remove()}),{once:!0})}))}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Fe(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=je(this,"alert.show",{dir:this.localize.dir()});await ze(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Fe(this.base);const{keyframes:t,options:e}=je(this,"alert.hide",{dir:this.localize.dir()});await ze(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return L`
      <div
        part="base"
        class=${Ft({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?L`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};qe.styles=Ue,ut([Wt('[part~="base"]')],qe.prototype,"base",2),ut([Ht({type:Boolean,reflect:!0})],qe.prototype,"open",2),ut([Ht({type:Boolean,reflect:!0})],qe.prototype,"closable",2),ut([Ht({reflect:!0})],qe.prototype,"variant",2),ut([Ht({type:Number})],qe.prototype,"duration",2),ut([Vt("open",{waitUntilFirstUpdate:!0})],qe.prototype,"handleOpenChange",1),ut([Vt("duration")],qe.prototype,"handleDurationChange",1),qe=ut([Bt("sl-alert")],qe),He("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),He("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var Ye=a`
  ${tt}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Xe=class extends qt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){const t=!!this.href,e=t?yt`a`:yt`button`;return xt`
      <${e}
        part="base"
        class=${Ft({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Ot(t?void 0:this.disabled)}
        type=${Ot(t?void 0:"button")}
        href=${Ot(t?this.href:void 0)}
        target=${Ot(t?this.target:void 0)}
        download=${Ot(t?this.download:void 0)}
        rel=${Ot(t&&this.target?"noreferrer noopener":void 0)}
        role=${Ot(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Ot(this.name)}
          library=${Ot(this.library)}
          src=${Ot(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Xe.styles=Ye,ut([jt()],Xe.prototype,"hasFocus",2),ut([Wt(".icon-button")],Xe.prototype,"button",2),ut([Ht()],Xe.prototype,"name",2),ut([Ht()],Xe.prototype,"library",2),ut([Ht()],Xe.prototype,"src",2),ut([Ht()],Xe.prototype,"href",2),ut([Ht()],Xe.prototype,"target",2),ut([Ht()],Xe.prototype,"download",2),ut([Ht()],Xe.prototype,"label",2),ut([Ht({type:Boolean,reflect:!0})],Xe.prototype,"disabled",2),Xe=ut([Bt("sl-icon-button")],Xe);var Ke=a`
  ${tt}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Ge=class extends qt{constructor(){super(...arguments),this.hasSlotController=new Pt(this,"footer","header","image")}render(){return L`
      <div
        part="base"
        class=${Ft({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Ge.styles=Ke,Ge=ut([Bt("sl-card")],Ge);
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const Ze=window,Je=Ze.ShadowRoot&&(void 0===Ze.ShadyCSS||Ze.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),ti=new WeakMap;const ei=t=>new class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Je&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=ti.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ti.set(e,t))}return t}toString(){return this.cssText}}("string"==typeof t?t:t+"",void 0,Qe),ii=Je?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ei(e)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */;var si;const oi=window,ni=oi.trustedTypes,ri=ni?ni.emptyScript:"",ai=oi.reactiveElementPolyfillSupport,li={toAttribute(t,e){switch(e){case Boolean:t=t?ri:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},hi=(t,e)=>e!==t&&(e==e||t==t),ci={attribute:!0,type:String,converter:li,reflect:!1,hasChanged:hi};let di=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=ci){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ci}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(ii(t))}else void 0!==t&&e.push(ii(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{Je?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=Ze.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ci){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:li).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:li;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||hi)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var ui;di.finalized=!0,di.elementProperties=new Map,di.elementStyles=[],di.shadowRootOptions={mode:"open"},null==ai||ai({ReactiveElement:di}),(null!==(si=oi.reactiveElementVersions)&&void 0!==si?si:oi.reactiveElementVersions=[]).push("1.5.0");const pi=window,fi=pi.trustedTypes,gi=fi?fi.createPolicy("lit-html",{createHTML:t=>t}):void 0,bi=`lit$${(Math.random()+"").slice(9)}$`,mi="?"+bi,vi=`<${mi}>`,yi=document,_i=(t="")=>yi.createComment(t),xi=t=>null===t||"object"!=typeof t&&"function"!=typeof t,wi=Array.isArray,ki=t=>wi(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Mi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ai=/-->/g,Si=/>/g,$i=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),Ci=/'/g,Ei=/"/g,Pi=/^(?:script|style|textarea|title)$/i,Oi=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),Di=Symbol.for("lit-noChange"),Ti=Symbol.for("lit-nothing"),Li=new WeakMap,Ri=yi.createTreeWalker(yi,129,null,!1),zi=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=Mi;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===Mi?"!--"===l[1]?r=Ai:void 0!==l[1]?r=Si:void 0!==l[2]?(Pi.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=$i):void 0!==l[3]&&(r=$i):r===$i?">"===l[0]?(r=null!=o?o:Mi,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?$i:'"'===l[3]?Ei:Ci):r===Ei||r===Ci?r=$i:r===Ai||r===Si?r=Mi:(r=$i,o=void 0);const d=r===$i&&t[e+1].startsWith("/>")?" ":"";n+=r===Mi?i+vi:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+bi+d):i+bi+(-2===h?(s.push(void 0),e):d)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==gi?gi.createHTML(a):a,s]};class Ii{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,h]=zi(t,e);if(this.el=Ii.createElement(l,i),Ri.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=Ri.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(bi)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(bi),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Hi:"?"===e[1]?Ui:"@"===e[1]?Wi:Ni})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(Pi.test(s.tagName)){const t=s.textContent.split(bi),e=t.length-1;if(e>0){s.textContent=fi?fi.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],_i()),Ri.nextNode(),a.push({type:2,index:++o});s.append(t[e],_i())}}}else if(8===s.nodeType)if(s.data===mi)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(bi,t+1));)a.push({type:7,index:o}),t+=bi.length-1}o++}}static createElement(t,e){const i=yi.createElement("template");return i.innerHTML=t,i}}function Fi(t,e,i=t,s){var o,n,r,a;if(e===Di)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const h=xi(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=Fi(t,l._$AS(t,e.values),l,s)),e}class Vi{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:yi).importNode(i,!0);Ri.currentNode=o;let n=Ri.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Bi(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new qi(n,this,t)),this.u.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=Ri.nextNode(),r++)}return o}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Bi{constructor(t,e,i,s){var o;this.type=2,this._$AH=Ti,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Fi(this,t,e),xi(t)?t===Ti||null==t||""===t?(this._$AH!==Ti&&this._$AR(),this._$AH=Ti):t!==this._$AH&&t!==Di&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):ki(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==Ti&&xi(this._$AH)?this._$AA.nextSibling.data=t:this.T(yi.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Ii.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.p(i);else{const t=new Vi(o,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=Li.get(t.strings);return void 0===e&&Li.set(t.strings,e=new Ii(t)),e}k(t){wi(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Bi(this.O(_i()),this.O(_i()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Ni{constructor(t,e,i,s,o){this.type=1,this._$AH=Ti,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ti}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Fi(this,t,e,0),n=!xi(t)||t!==this._$AH&&t!==Di,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Fi(this,s[i+r],e,r),a===Di&&(a=this._$AH[r]),n||(n=!xi(a)||a!==this._$AH[r]),a===Ti?t=Ti:t!==Ti&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===Ti?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Hi extends Ni{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ti?void 0:t}}const ji=fi?fi.emptyScript:"";class Ui extends Ni{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Ti?this.element.setAttribute(this.name,ji):this.element.removeAttribute(this.name)}}class Wi extends Ni{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Fi(this,t,e,0))&&void 0!==i?i:Ti)===Di)return;const s=this._$AH,o=t===Ti&&s!==Ti||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==Ti&&(s===Ti||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class qi{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Fi(this,t)}}const Yi={P:"$lit$",A:bi,M:mi,C:1,L:zi,R:Vi,D:ki,V:Fi,I:Bi,H:Ni,N:Ui,U:Wi,B:Hi,F:qi},Xi=pi.litHtmlPolyfillSupport;null==Xi||Xi(Ii,Bi),(null!==(ui=pi.litHtmlVersions)&&void 0!==ui?ui:pi.litHtmlVersions=[]).push("2.5.0");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var Ki,Gi;let Zi=class extends di{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new Bi(e.insertBefore(_i(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return Di}};Zi.finalized=!0,Zi._$litElement$=!0,null===(Ki=globalThis.litElementHydrateSupport)||void 0===Ki||Ki.call(globalThis,{LitElement:Zi});const Ji=globalThis.litElementPolyfillSupport;null==Ji||Ji({LitElement:Zi}),(null!==(Gi=globalThis.litElementVersions)&&void 0!==Gi?Gi:globalThis.litElementVersions=[]).push("3.2.2");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const Qi=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */,ts=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var es;null===(es=window.HTMLSlotElement)||void 0===es||es.prototype.assignedElements;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const is=2;class ss{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const{I:os}=Yi,ns=()=>document.createComment(""),rs=(t,e,i)=>{var s;const o=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=o.insertBefore(ns(),n),s=o.insertBefore(ns(),n);i=new os(e,s,t,t.options)}else{const e=i._$AB.nextSibling,r=i._$AM,a=r!==t;if(a){let e;null===(s=i._$AQ)||void 0===s||s.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==r._$AU&&i._$AP(e)}if(e!==n||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;o.insertBefore(t,n),t=e}}}return i},as=(t,e,i=t)=>(t._$AI(e,i),t),ls={},hs=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const s=t._$AB.nextSibling;for(;i!==s;){const t=i.nextSibling;i.remove(),i=t}},cs=(t,e,i)=>{const s=new Map;for(let o=e;o<=i;o++)s.set(t[o],o);return s},ds=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ss{constructor(t){if(super(t),t.type!==is)throw Error("repeat() can only be used in text expressions")}ht(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const o=[],n=[];let r=0;for(const e of t)o[r]=s?s(e,r):r,n[r]=i(e,r),r++;return{values:n,keys:o}}render(t,e,i){return this.ht(t,e,i).values}update(t,[e,i,s]){var o;const n=(t=>t._$AH)(t),{values:r,keys:a}=this.ht(e,i,s);if(!Array.isArray(n))return this.ut=a,r;const l=null!==(o=this.ut)&&void 0!==o?o:this.ut=[],h=[];let c,d,u=0,p=n.length-1,f=0,g=r.length-1;for(;u<=p&&f<=g;)if(null===n[u])u++;else if(null===n[p])p--;else if(l[u]===a[f])h[f]=as(n[u],r[f]),u++,f++;else if(l[p]===a[g])h[g]=as(n[p],r[g]),p--,g--;else if(l[u]===a[g])h[g]=as(n[u],r[g]),rs(t,h[g+1],n[u]),u++,g--;else if(l[p]===a[f])h[f]=as(n[p],r[f]),rs(t,n[u],n[p]),p--,f++;else if(void 0===c&&(c=cs(a,f,g),d=cs(l,u,p)),c.has(l[u]))if(c.has(l[p])){const e=d.get(a[f]),i=void 0!==e?n[e]:null;if(null===i){const e=rs(t,n[u]);as(e,r[f]),h[f]=e}else h[f]=as(i,r[f]),rs(t,n[u],i),n[e]=null;f++}else hs(n[p]),p--;else hs(n[u]),u++;for(;f<=g;){const e=rs(t,h[g+1]);as(e,r[f]),h[f++]=e}for(;u<=p;){const t=n[u++];null!==t&&hs(t)}return this.ut=a,((t,e=ls)=>{t._$AH=e})(t,h),Di}}),us=Object.freeze({logo:{src:"logo.png"},items:[{name:"dashboard",icon:"house-heart",rows:2,viewable:!0,isNavFooter:!1},{name:"analytics",icon:"bar-chart-line",rows:3,viewable:!0,isNavFooter:!1},{name:"calendar",icon:"calendar-day",rows:4,viewable:!0,isNavFooter:!1},{name:"profile",icon:"",rows:1,viewable:!1,isNavFooter:!0}]}),ps=(t,e,i)=>{let s=t[0];for(let o=1;o<t.length;o++)s+=e[i?i[o-1]:o-1],s+=t[o];return s},fs=t=>{return"string"!=typeof(e=t)&&"strTag"in e?ps(t.strings,t.values):t;var e},gs="lit-localize-status";
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
class bs{constructor(t){this.__litLocalizeEventHandler=t=>{"ready"===t.detail.status&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(gs,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(gs,this.__litLocalizeEventHandler)}}const ms=t=>t.addController(new bs(t)),vs=()=>t=>"function"==typeof t?_s(t):ys(t),ys=({kind:t,elements:e})=>({kind:t,elements:e,finisher(t){t.addInitializer(ms)}}),_s=t=>(t.addInitializer(ms),t);
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
class xs{constructor(){this.settled=!1,this.promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e}))}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}
/**
   * @license
   * Copyright 2014 Travis Webb
   * SPDX-License-Identifier: MIT
   */const ws=[];for(let t=0;t<256;t++)ws[t]=(t>>4&15).toString(16)+(15&t).toString(16);function ks(t,e){return(e?"h":"s")+function(t){let e=0,i=8997,s=0,o=33826,n=0,r=40164,a=0,l=52210;for(let h=0;h<t.length;h++)i^=t.charCodeAt(h),e=435*i,s=435*o,n=435*r,a=435*l,n+=i<<8,a+=o<<8,s+=e>>>16,i=65535&e,n+=s>>>16,o=65535&s,l=a+(n>>>16)&65535,r=65535&n;return ws[l>>8]+ws[255&l]+ws[r>>8]+ws[255&r]+ws[o>>8]+ws[255&o]+ws[i>>8]+ws[255&i]}
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */("string"==typeof t?t:t.join(""))}
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const Ms=new WeakMap,As=new Map;function Ss(t,e,i){var s;if(t){const o=null!==(s=null==i?void 0:i.id)&&void 0!==s?s:function(t){const e="string"==typeof t?t:t.strings;let i=As.get(e);void 0===i&&(i=ks(e,"string"!=typeof t&&!("strTag"in t)),As.set(e,i));return i}
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */(e),n=t[o];if(n){if("string"==typeof n)return n;if("strTag"in n)return ps(n.strings,e.values,n.values);{let t=Ms.get(n);return void 0===t&&(t=n.values,Ms.set(n,t)),{...n,values:t.map((t=>e.values[t]))}}}}return fs(e)}function $s(t){window.dispatchEvent(new CustomEvent(gs,{detail:t}))}let Cs,Es,Ps,Os,Ds,Ts="",Ls=new xs;Ls.resolve();let Rs=0;const zs=()=>Ts,Is=t=>{if(t===(null!=Cs?Cs:Ts))return Ls.promise;if(!Ps||!Os)throw new Error("Internal error");if(!Ps.has(t))throw new Error("Invalid locale code");Rs++;const e=Rs;Cs=t,Ls.settled&&(Ls=new xs),$s({status:"loading",loadingLocale:t});return(t===Es?Promise.resolve({templates:void 0}):Os(t)).then((i=>{Rs===e&&(Ts=t,Cs=void 0,Ds=i.templates,$s({status:"ready",readyLocale:t}),Ls.resolve())}),(i=>{Rs===e&&($s({status:"error",errorLocale:t,errorMessage:i.toString()}),Ls.reject(i))})),Ls.promise};
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
let Fs=fs,Vs=!1;function Bs(t){const[e,...i]=t;return e.toUpperCase()+i.join("")}let Ns=class extends Zi{#t="nav-elem-active";constructor(){super()}createRenderRoot(){return this}#e(t){const e=t.target,i=e.parentNode,s=e.classList.contains("nav-element")?e:i,o=document.querySelector(`.${this.#t}`),n="true"===s.getAttribute("isNavFooter"),r=new CustomEvent("viewSwitch",{detail:{name:s.getAttribute("name")}});return o&&o.classList.remove(this.#t),n||s.classList.add(this.#t),this.setAttribute("closed","true"),this.dispatchEvent(r)}#i(){const t="true"===this.getAttribute("closed");return this.setAttribute("closed",!t+"")}#s(){const t=Object.freeze({analytics:Oi`<span>${Bs(Fs("analytics"))}</span>`,dashboard:Oi`<span>${Bs(Fs("dashboard"))}</span>`,calendar:Oi`<span>${Bs(Fs("calendar"))}</span>`});return ds(us.items,(e=>{if(e.viewable)return Oi`<div @click="${this.#e}" class="nav-element nav-element-click" name="${e.name}">
                <sl-icon name="${e.icon}"></sl-icon>&nbsp;&nbsp;${t[e.name]}
            </div>`}))}#o(){if(!!us.items.find((t=>t.isNavFooter)))return Oi`<footer class="nav-footer">
            <sl-avatar image="./assets/img/fallbacks/avatar.png" label="${Fs("Your profile avatar")}"></sl-avatar>
            <div isNavFooter="true" name="profile">
                <span>${Fs("username").toUpperCase()}</span>
                <small @click="${this.#e}" class="view-profile nav-element-click" name="profile">
                    ${Fs("View Profile")}
                </small>
            </div>
        </footer>`}#n(){return Oi`<header class="nav-header mb-4">
            <img class="nav-logo" src="./assets/img/logos/${us.logo.src}" />
            <i @click="${this.#i}" class="fa fa-solid fa-times fa-fw close-mobil-nav"></i>
        </header>`}render(){const t=this.#n(),e=this.#o(),i=this.#s();return Oi`${t}${i}${e}`}};
/*!
   * @kurkle/color v0.3.1
   * https://github.com/kurkle/color#readme
   * (c) 2022 Jukka Kurkela
   * Released under the MIT License
   */
function Hs(t){return t+.5|0}Ns=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}([vs(),Qi("main-nav")],Ns);const js=(t,e,i)=>Math.max(Math.min(t,i),e);function Us(t){return js(Hs(2.55*t),0,255)}function Ws(t){return js(Hs(255*t),0,255)}function qs(t){return js(Hs(t/2.55)/100,0,1)}function Ys(t){return js(Hs(100*t),0,100)}const Xs={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ks=[..."0123456789ABCDEF"],Gs=t=>Ks[15&t],Zs=t=>Ks[(240&t)>>4]+Ks[15&t],Js=t=>(240&t)>>4==(15&t);function Qs(t){var e=(t=>Js(t.r)&&Js(t.g)&&Js(t.b)&&Js(t.a))(t)?Gs:Zs;return t?"#"+e(t.r)+e(t.g)+e(t.b)+((t,e)=>t<255?e(t):"")(t.a,e):void 0}const to=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function eo(t,e,i){const s=e*Math.min(i,1-i),o=(e,o=(e+t/30)%12)=>i-s*Math.max(Math.min(o-3,9-o,1),-1);return[o(0),o(8),o(4)]}function io(t,e,i){const s=(s,o=(s+t/60)%6)=>i-i*e*Math.max(Math.min(o,4-o,1),0);return[s(5),s(3),s(1)]}function so(t,e,i){const s=eo(t,1,.5);let o;for(e+i>1&&(o=1/(e+i),e*=o,i*=o),o=0;o<3;o++)s[o]*=1-e-i,s[o]+=e;return s}function oo(t){const e=t.r/255,i=t.g/255,s=t.b/255,o=Math.max(e,i,s),n=Math.min(e,i,s),r=(o+n)/2;let a,l,h;return o!==n&&(h=o-n,l=r>.5?h/(2-o-n):h/(o+n),a=function(t,e,i,s,o){return t===o?(e-i)/s+(e<i?6:0):e===o?(i-t)/s+2:(t-e)/s+4}(e,i,s,h,o),a=60*a+.5),[0|a,l||0,r]}function no(t,e,i,s){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,s)).map(Ws)}function ro(t,e,i){return no(eo,t,e,i)}function ao(t){return(t%360+360)%360}function lo(t){const e=to.exec(t);let i,s=255;if(!e)return;e[5]!==i&&(s=e[6]?Us(+e[5]):Ws(+e[5]));const o=ao(+e[2]),n=+e[3]/100,r=+e[4]/100;return i="hwb"===e[1]?function(t,e,i){return no(so,t,e,i)}(o,n,r):"hsv"===e[1]?function(t,e,i){return no(io,t,e,i)}(o,n,r):ro(o,n,r),{r:i[0],g:i[1],b:i[2],a:s}}const ho={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},co={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let uo;function po(t){uo||(uo=function(){const t={},e=Object.keys(co),i=Object.keys(ho);let s,o,n,r,a;for(s=0;s<e.length;s++){for(r=a=e[s],o=0;o<i.length;o++)n=i[o],a=a.replace(n,ho[n]);n=parseInt(co[r],16),t[a]=[n>>16&255,n>>8&255,255&n]}return t}(),uo.transparent=[0,0,0,0]);const e=uo[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const fo=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;const go=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,bo=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function mo(t,e,i){if(t){let s=oo(t);s[e]=Math.max(0,Math.min(s[e]+s[e]*i,0===e?360:1)),s=ro(s),t.r=s[0],t.g=s[1],t.b=s[2]}}function vo(t,e){return t?Object.assign(e||{},t):t}function yo(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Ws(t[3]))):(e=vo(t,{r:0,g:0,b:0,a:1})).a=Ws(e.a),e}function _o(t){return"r"===t.charAt(0)?function(t){const e=fo.exec(t);let i,s,o,n=255;if(e){if(e[7]!==i){const t=+e[7];n=e[8]?Us(t):js(255*t,0,255)}return i=+e[1],s=+e[3],o=+e[5],i=255&(e[2]?Us(i):js(i,0,255)),s=255&(e[4]?Us(s):js(s,0,255)),o=255&(e[6]?Us(o):js(o,0,255)),{r:i,g:s,b:o,a:n}}}(t):lo(t)}class xo{constructor(t){if(t instanceof xo)return t;const e=typeof t;let i;var s,o,n;"object"===e?i=yo(t):"string"===e&&(n=(s=t).length,"#"===s[0]&&(4===n||5===n?o={r:255&17*Xs[s[1]],g:255&17*Xs[s[2]],b:255&17*Xs[s[3]],a:5===n?17*Xs[s[4]]:255}:7!==n&&9!==n||(o={r:Xs[s[1]]<<4|Xs[s[2]],g:Xs[s[3]]<<4|Xs[s[4]],b:Xs[s[5]]<<4|Xs[s[6]],a:9===n?Xs[s[7]]<<4|Xs[s[8]]:255})),i=o||po(t)||_o(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=vo(this._rgb);return t&&(t.a=qs(t.a)),t}set rgb(t){this._rgb=yo(t)}rgbString(){return this._valid?function(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${qs(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}(this._rgb):void 0}hexString(){return this._valid?Qs(this._rgb):void 0}hslString(){return this._valid?function(t){if(!t)return;const e=oo(t),i=e[0],s=Ys(e[1]),o=Ys(e[2]);return t.a<255?`hsla(${i}, ${s}%, ${o}%, ${qs(t.a)})`:`hsl(${i}, ${s}%, ${o}%)`}(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let o;const n=e===o?.5:e,r=2*n-1,a=i.a-s.a,l=((r*a==-1?r:(r+a)/(1+r*a))+1)/2;o=1-l,i.r=255&l*i.r+o*s.r+.5,i.g=255&l*i.g+o*s.g+.5,i.b=255&l*i.b+o*s.b+.5,i.a=n*i.a+(1-n)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,i){const s=bo(qs(t.r)),o=bo(qs(t.g)),n=bo(qs(t.b));return{r:Ws(go(s+i*(bo(qs(e.r))-s))),g:Ws(go(o+i*(bo(qs(e.g))-o))),b:Ws(go(n+i*(bo(qs(e.b))-n))),a:t.a+i*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new xo(this.rgb)}alpha(t){return this._rgb.a=Ws(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=Hs(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return mo(this._rgb,2,t),this}darken(t){return mo(this._rgb,2,-t),this}saturate(t){return mo(this._rgb,1,t),this}desaturate(t){return mo(this._rgb,1,-t),this}rotate(t){return function(t,e){var i=oo(t);i[0]=ao(i[0]+e),i=ro(i),t.r=i[0],t.g=i[1],t.b=i[2]}(this._rgb,t),this}}
/*!
   * Chart.js v4.1.1
   * https://www.chartjs.org
   * (c) 2022 Chart.js Contributors
   * Released under the MIT License
   */function wo(){}const ko=(()=>{let t=0;return()=>t++})();function Mo(t){return null==t}function Ao(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function So(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}function $o(t){return("number"==typeof t||t instanceof Number)&&isFinite(+t)}function Co(t,e){return $o(t)?t:e}function Eo(t,e){return void 0===t?e:t}const Po=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Oo(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function Do(t,e,i,s){let o,n,r;if(Ao(t))if(n=t.length,s)for(o=n-1;o>=0;o--)e.call(i,t[o],o);else for(o=0;o<n;o++)e.call(i,t[o],o);else if(So(t))for(r=Object.keys(t),n=r.length,o=0;o<n;o++)e.call(i,t[r[o]],r[o])}function To(t,e){let i,s,o,n;if(!t||!e||t.length!==e.length)return!1;for(i=0,s=t.length;i<s;++i)if(o=t[i],n=e[i],o.datasetIndex!==n.datasetIndex||o.index!==n.index)return!1;return!0}function Lo(t){if(Ao(t))return t.map(Lo);if(So(t)){const e=Object.create(null),i=Object.keys(t),s=i.length;let o=0;for(;o<s;++o)e[i[o]]=Lo(t[i[o]]);return e}return t}function Ro(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function zo(t,e,i,s){if(!Ro(t))return;const o=e[t],n=i[t];So(o)&&So(n)?Io(o,n,s):e[t]=Lo(n)}function Io(t,e,i){const s=Ao(e)?e:[e],o=s.length;if(!So(t))return t;const n=(i=i||{}).merger||zo;let r;for(let e=0;e<o;++e){if(r=s[e],!So(r))continue;const o=Object.keys(r);for(let e=0,s=o.length;e<s;++e)n(o[e],t,r,i)}return t}function Fo(t,e){return Io(t,e,{merger:Vo})}function Vo(t,e,i){if(!Ro(t))return;const s=e[t],o=i[t];So(s)&&So(o)?Fo(s,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Lo(o))}const Bo={"":t=>t,x:t=>t.x,y:t=>t.y};function No(t,e){const i=Bo[e]||(Bo[e]=function(t){const e=function(t){const e=t.split("."),i=[];let s="";for(const t of e)s+=t,s.endsWith("\\")?s=s.slice(0,-1)+".":(i.push(s),s="");return i}(t);return t=>{for(const i of e){if(""===i)break;t=t&&t[i]}return t}}(e));return i(t)}function Ho(t){return t.charAt(0).toUpperCase()+t.slice(1)}const jo=t=>void 0!==t,Uo=t=>"function"==typeof t,Wo=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0};const qo=Math.PI,Yo=2*qo,Xo=Yo+qo,Ko=Number.POSITIVE_INFINITY,Go=qo/180,Zo=qo/2,Jo=qo/4,Qo=2*qo/3,tn=Math.log10,en=Math.sign;function sn(t,e,i){return Math.abs(t-e)<i}function on(t){const e=Math.round(t);t=sn(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor(tn(t))),s=t/i;return(s<=1?1:s<=2?2:s<=5?5:10)*i}function nn(t){return!isNaN(parseFloat(t))&&isFinite(t)}function rn(t,e,i){let s,o,n;for(s=0,o=t.length;s<o;s++)n=t[s][i],isNaN(n)||(e.min=Math.min(e.min,n),e.max=Math.max(e.max,n))}function an(t){return t*(qo/180)}function ln(t){return t*(180/qo)}function hn(t){if(!$o(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function cn(t,e){const i=e.x-t.x,s=e.y-t.y,o=Math.sqrt(i*i+s*s);let n=Math.atan2(s,i);return n<-.5*qo&&(n+=Yo),{angle:n,distance:o}}function dn(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function un(t,e){return(t-e+Xo)%Yo-qo}function pn(t){return(t%Yo+Yo)%Yo}function fn(t,e,i,s){const o=pn(t),n=pn(e),r=pn(i),a=pn(n-o),l=pn(r-o),h=pn(o-n),c=pn(o-r);return o===n||o===r||s&&n===r||a>l&&h<c}function gn(t,e,i){return Math.max(e,Math.min(i,t))}function bn(t,e,i,s=1e-6){return t>=Math.min(e,i)-s&&t<=Math.max(e,i)+s}function mn(t,e,i){i=i||(i=>t[i]<e);let s,o=t.length-1,n=0;for(;o-n>1;)s=n+o>>1,i(s)?n=s:o=s;return{lo:n,hi:o}}const vn=(t,e,i,s)=>mn(t,i,s?s=>{const o=t[s][e];return o<i||o===i&&t[s+1][e]===i}:s=>t[s][e]<i),yn=(t,e,i)=>mn(t,i,(s=>t[s][e]>=i));const _n=["push","pop","shift","splice","unshift"];function xn(t,e){const i=t._chartjs;if(!i)return;const s=i.listeners,o=s.indexOf(e);-1!==o&&s.splice(o,1),s.length>0||(_n.forEach((e=>{delete t[e]})),delete t._chartjs)}function wn(t){const e=new Set;let i,s;for(i=0,s=t.length;i<s;++i)e.add(t[i]);return e.size===s?t:Array.from(e)}const kn="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function Mn(t,e){let i=[],s=!1;return function(...o){i=o,s||(s=!0,kn.call(window,(()=>{s=!1,t.apply(e,i)})))}}const An=t=>"start"===t?"left":"end"===t?"right":"center",Sn=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2;function $n(t,e,i){const s=e.length;let o=0,n=s;if(t._sorted){const{iScale:r,_parsed:a}=t,l=r.axis,{min:h,max:c,minDefined:d,maxDefined:u}=r.getUserBounds();d&&(o=gn(Math.min(vn(a,r.axis,h).lo,i?s:vn(e,l,r.getPixelForValue(h)).lo),0,s-1)),n=u?gn(Math.max(vn(a,r.axis,c,!0).hi+1,i?0:vn(e,l,r.getPixelForValue(c),!0).hi+1),o,s)-o:s-o}return{start:o,count:n}}function Cn(t){const{xScale:e,yScale:i,_scaleRanges:s}=t,o={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!s)return t._scaleRanges=o,!0;const n=s.xmin!==e.min||s.xmax!==e.max||s.ymin!==i.min||s.ymax!==i.max;return Object.assign(s,o),n}const En=t=>0===t||1===t,Pn=(t,e,i)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*Yo/i),On=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*Yo/i)+1,Dn={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*Zo),easeOutSine:t=>Math.sin(t*Zo),easeInOutSine:t=>-.5*(Math.cos(qo*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>En(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>En(t)?t:Pn(t,.075,.3),easeOutElastic:t=>En(t)?t:On(t,.075,.3),easeInOutElastic(t){const e=.1125;return En(t)?t:t<.5?.5*Pn(2*t,e,.45):.5+.5*On(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-Dn.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375},easeInOutBounce:t=>t<.5?.5*Dn.easeInBounce(2*t):.5*Dn.easeOutBounce(2*t-1)+.5};function Tn(t){if(t&&"object"==typeof t){const e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function Ln(t){return Tn(t)?t:new xo(t)}function Rn(t){return Tn(t)?t:new xo(t).saturate(.5).darken(.1).hexString()}const zn=["x","y","borderWidth","radius","tension"],In=["color","borderColor","backgroundColor"];const Fn=new Map;function Vn(t,e,i){return function(t,e){e=e||{};const i=t+JSON.stringify(e);let s=Fn.get(i);return s||(s=new Intl.NumberFormat(t,e),Fn.set(i,s)),s}(e,i).format(t)}const Bn={values:t=>Ao(t)?t:""+t,numeric(t,e,i){if(0===t)return"0";const s=this.chart.options.locale;let o,n=t;if(i.length>1){const e=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(e<1e-4||e>1e15)&&(o="scientific"),n=function(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t));return i}(t,i)}const r=tn(Math.abs(n)),a=Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:o,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Vn(t,s,l)},logarithmic(t,e,i){if(0===t)return"0";const s=i[e].significand||t/Math.pow(10,Math.floor(tn(t)));return[1,2,3,5,10,15].includes(s)||e>.8*i.length?Bn.numeric.call(this,t,e,i):""}};var Nn={formatters:Bn};const Hn=Object.create(null),jn=Object.create(null);function Un(t,e){if(!e)return t;const i=e.split(".");for(let e=0,s=i.length;e<s;++e){const s=i[e];t=t[s]||(t[s]=Object.create(null))}return t}function Wn(t,e,i){return"string"==typeof e?Io(Un(t,e),i):Io(Un(t,""),e)}class qn{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>Rn(e.backgroundColor),this.hoverBorderColor=(t,e)=>Rn(e.borderColor),this.hoverColor=(t,e)=>Rn(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Wn(this,t,e)}get(t){return Un(this,t)}describe(t,e){return Wn(jn,t,e)}override(t,e){return Wn(Hn,t,e)}route(t,e,i,s){const o=Un(this,t),n=Un(this,i),r="_"+e;Object.defineProperties(o,{[r]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[r],e=n[s];return So(t)?Object.assign({},e,t):Eo(t,e)},set(t){this[r]=t}}})}apply(t){t.forEach((t=>t(this)))}}var Yn=new qn({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[function(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),t.set("animations",{colors:{type:"color",properties:In},numbers:{type:"number",properties:zn}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}})},function(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})},function(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Nn.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t&&"dash"!==t}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t})}]);function Xn(t,e,i,s,o){let n=e[o];return n||(n=e[o]=t.measureText(o).width,i.push(o)),n>s&&(s=n),s}function Kn(t,e,i,s){let o=(s=s||{}).data=s.data||{},n=s.garbageCollect=s.garbageCollect||[];s.font!==e&&(o=s.data={},n=s.garbageCollect=[],s.font=e),t.save(),t.font=e;let r=0;const a=i.length;let l,h,c,d,u;for(l=0;l<a;l++)if(d=i[l],null!=d&&!0!==Ao(d))r=Xn(t,o,n,r,d);else if(Ao(d))for(h=0,c=d.length;h<c;h++)u=d[h],null==u||Ao(u)||(r=Xn(t,o,n,r,u));t.restore();const p=n.length/2;if(p>i.length){for(l=0;l<p;l++)delete o[n[l]];n.splice(0,p)}return r}function Gn(t,e,i){const s=t.currentDevicePixelRatio,o=0!==i?Math.max(i/2,.5):0;return Math.round((e-o)*s)/s+o}function Zn(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Jn(t,e,i,s){Qn(t,e,i,s,null)}function Qn(t,e,i,s,o){let n,r,a,l,h,c,d,u;const p=e.pointStyle,f=e.rotation,g=e.radius;let b=(f||0)*Go;if(p&&"object"==typeof p&&(n=p.toString(),"[object HTMLImageElement]"===n||"[object HTMLCanvasElement]"===n))return t.save(),t.translate(i,s),t.rotate(b),t.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),void t.restore();if(!(isNaN(g)||g<=0)){switch(t.beginPath(),p){default:o?t.ellipse(i,s,o/2,g,0,0,Yo):t.arc(i,s,g,0,Yo),t.closePath();break;case"triangle":c=o?o/2:g,t.moveTo(i+Math.sin(b)*c,s-Math.cos(b)*g),b+=Qo,t.lineTo(i+Math.sin(b)*c,s-Math.cos(b)*g),b+=Qo,t.lineTo(i+Math.sin(b)*c,s-Math.cos(b)*g),t.closePath();break;case"rectRounded":h=.516*g,l=g-h,r=Math.cos(b+Jo)*l,d=Math.cos(b+Jo)*(o?o/2-h:l),a=Math.sin(b+Jo)*l,u=Math.sin(b+Jo)*(o?o/2-h:l),t.arc(i-d,s-a,h,b-qo,b-Zo),t.arc(i+u,s-r,h,b-Zo,b),t.arc(i+d,s+a,h,b,b+Zo),t.arc(i-u,s+r,h,b+Zo,b+qo),t.closePath();break;case"rect":if(!f){l=Math.SQRT1_2*g,c=o?o/2:l,t.rect(i-c,s-l,2*c,2*l);break}b+=Jo;case"rectRot":d=Math.cos(b)*(o?o/2:g),r=Math.cos(b)*g,a=Math.sin(b)*g,u=Math.sin(b)*(o?o/2:g),t.moveTo(i-d,s-a),t.lineTo(i+u,s-r),t.lineTo(i+d,s+a),t.lineTo(i-u,s+r),t.closePath();break;case"crossRot":b+=Jo;case"cross":d=Math.cos(b)*(o?o/2:g),r=Math.cos(b)*g,a=Math.sin(b)*g,u=Math.sin(b)*(o?o/2:g),t.moveTo(i-d,s-a),t.lineTo(i+d,s+a),t.moveTo(i+u,s-r),t.lineTo(i-u,s+r);break;case"star":d=Math.cos(b)*(o?o/2:g),r=Math.cos(b)*g,a=Math.sin(b)*g,u=Math.sin(b)*(o?o/2:g),t.moveTo(i-d,s-a),t.lineTo(i+d,s+a),t.moveTo(i+u,s-r),t.lineTo(i-u,s+r),b+=Jo,d=Math.cos(b)*(o?o/2:g),r=Math.cos(b)*g,a=Math.sin(b)*g,u=Math.sin(b)*(o?o/2:g),t.moveTo(i-d,s-a),t.lineTo(i+d,s+a),t.moveTo(i+u,s-r),t.lineTo(i-u,s+r);break;case"line":r=o?o/2:Math.cos(b)*g,a=Math.sin(b)*g,t.moveTo(i-r,s-a),t.lineTo(i+r,s+a);break;case"dash":t.moveTo(i,s),t.lineTo(i+Math.cos(b)*(o?o/2:g),s+Math.sin(b)*g);break;case!1:t.closePath()}t.fill(),e.borderWidth>0&&t.stroke()}}function tr(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function er(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function ir(t){t.restore()}function sr(t,e,i,s,o){if(!e)return t.lineTo(i.x,i.y);if("middle"===o){const s=(e.x+i.x)/2;t.lineTo(s,e.y),t.lineTo(s,i.y)}else"after"===o!=!!s?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function or(t,e,i,s){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(s?e.cp1x:e.cp2x,s?e.cp1y:e.cp2y,s?i.cp2x:i.cp1x,s?i.cp2y:i.cp1y,i.x,i.y)}function nr(t,e,i,s,o,n={}){const r=Ao(e)?e:[e],a=n.strokeWidth>0&&""!==n.strokeColor;let l,h;for(t.save(),t.font=o.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]);Mo(e.rotation)||t.rotate(e.rotation);e.color&&(t.fillStyle=e.color);e.textAlign&&(t.textAlign=e.textAlign);e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,n),l=0;l<r.length;++l)h=r[l],n.backdrop&&ar(t,n.backdrop),a&&(n.strokeColor&&(t.strokeStyle=n.strokeColor),Mo(n.strokeWidth)||(t.lineWidth=n.strokeWidth),t.strokeText(h,i,s,n.maxWidth)),t.fillText(h,i,s,n.maxWidth),rr(t,i,s,h,n),s+=o.lineHeight;t.restore()}function rr(t,e,i,s,o){if(o.strikethrough||o.underline){const n=t.measureText(s),r=e-n.actualBoundingBoxLeft,a=e+n.actualBoundingBoxRight,l=i-n.actualBoundingBoxAscent,h=i+n.actualBoundingBoxDescent,c=o.strikethrough?(l+h)/2:h;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(r,c),t.lineTo(a,c),t.stroke()}}function ar(t,e){const i=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=i}function lr(t,e){const{x:i,y:s,w:o,h:n,radius:r}=e;t.arc(i+r.topLeft,s+r.topLeft,r.topLeft,-Zo,qo,!0),t.lineTo(i,s+n-r.bottomLeft),t.arc(i+r.bottomLeft,s+n-r.bottomLeft,r.bottomLeft,qo,Zo,!0),t.lineTo(i+o-r.bottomRight,s+n),t.arc(i+o-r.bottomRight,s+n-r.bottomRight,r.bottomRight,Zo,0,!0),t.lineTo(i+o,s+r.topRight),t.arc(i+o-r.topRight,s+r.topRight,r.topRight,0,-Zo,!0),t.lineTo(i+r.topLeft,s)}const hr=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,cr=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function dr(t,e){const i=(""+t).match(hr);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}const ur=t=>+t||0;function pr(t,e){const i={},s=So(e),o=s?Object.keys(e):e,n=So(t)?s?i=>Eo(t[i],t[e[i]]):e=>t[e]:()=>t;for(const t of o)i[t]=ur(n(t));return i}function fr(t){return pr(t,{top:"y",right:"x",bottom:"y",left:"x"})}function gr(t){return pr(t,["topLeft","topRight","bottomLeft","bottomRight"])}function br(t){const e=fr(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function mr(t,e){t=t||{},e=e||Yn.font;let i=Eo(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let s=Eo(t.style,e.style);s&&!(""+s).match(cr)&&(s=void 0);const o={family:Eo(t.family,e.family),lineHeight:dr(Eo(t.lineHeight,e.lineHeight),i),size:i,style:s,weight:Eo(t.weight,e.weight),string:""};return o.string=function(t){return!t||Mo(t.size)||Mo(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(o),o}function vr(t,e,i,s){let o,n,r,a=!0;for(o=0,n=t.length;o<n;++o)if(r=t[o],void 0!==r&&(void 0!==e&&"function"==typeof r&&(r=r(e),a=!1),void 0!==i&&Ao(r)&&(r=r[i%r.length],a=!1),void 0!==r))return s&&!a&&(s.cacheable=!1),r}function yr(t,e){return Object.assign(Object.create(t),e)}function _r(t,e=[""],i=t,s,o=(()=>t[0])){jo(s)||(s=Or("_fallback",t));const n={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:i,_fallback:s,_getTarget:o,override:o=>_r([o,...t],e,i,s)};return new Proxy(n,{deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),get:(i,s)=>Ar(i,s,(()=>function(t,e,i,s){let o;for(const n of e)if(o=Or(kr(n,t),i),jo(o))return Mr(t,o)?Er(i,s,t,o):o}(s,e,t,i))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>Dr(t).includes(e),ownKeys:t=>Dr(t),set(t,e,i){const s=t._storage||(t._storage=o());return t[e]=s[e]=i,delete t._keys,!0}})}function xr(t,e,i,s){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:wr(t,s),setContext:e=>xr(t,e,i,s),override:o=>xr(t.override(o),e,i,s)};return new Proxy(o,{deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),get:(t,e,i)=>Ar(t,e,(()=>function(t,e,i){const{_proxy:s,_context:o,_subProxy:n,_descriptors:r}=t;let a=s[e];Uo(a)&&r.isScriptable(e)&&(a=function(t,e,i,s){const{_proxy:o,_context:n,_subProxy:r,_stack:a}=i;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t),e=e(n,r||s),a.delete(t),Mr(t,e)&&(e=Er(o._scopes,o,t,e));return e}(e,a,t,i));Ao(a)&&a.length&&(a=function(t,e,i,s){const{_proxy:o,_context:n,_subProxy:r,_descriptors:a}=i;if(jo(n.index)&&s(t))e=e[n.index%e.length];else if(So(e[0])){const i=e,s=o._scopes.filter((t=>t!==i));e=[];for(const l of i){const i=Er(s,o,t,l);e.push(xr(i,n,r&&r[t],a))}}return e}(e,a,t,r.isIndexable));Mr(e,a)&&(a=xr(a,o,n&&n[e],r));return a}(t,e,i))),getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,i)=>Reflect.has(t,i),ownKeys:()=>Reflect.ownKeys(t),set:(e,i,s)=>(t[i]=s,delete e[i],!0)})}function wr(t,e={scriptable:!0,indexable:!0}){const{_scriptable:i=e.scriptable,_indexable:s=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:i,indexable:s,isScriptable:Uo(i)?i:()=>i,isIndexable:Uo(s)?s:()=>s}}const kr=(t,e)=>t?t+Ho(e):e,Mr=(t,e)=>So(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function Ar(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const s=i();return t[e]=s,s}function Sr(t,e,i){return Uo(t)?t(e,i):t}const $r=(t,e)=>!0===t?e:"string"==typeof t?No(e,t):void 0;function Cr(t,e,i,s,o){for(const n of e){const e=$r(i,n);if(e){t.add(e);const n=Sr(e._fallback,i,o);if(jo(n)&&n!==i&&n!==s)return n}else if(!1===e&&jo(s)&&i!==s)return null}return!1}function Er(t,e,i,s){const o=e._rootScopes,n=Sr(e._fallback,i,s),r=[...t,...o],a=new Set;a.add(s);let l=Pr(a,r,i,n||i,s);return null!==l&&((!jo(n)||n===i||(l=Pr(a,r,n,l,s),null!==l))&&_r(Array.from(a),[""],o,n,(()=>function(t,e,i){const s=t._getTarget();e in s||(s[e]={});const o=s[e];if(Ao(o)&&So(i))return i;return o||{}}(e,i,s))))}function Pr(t,e,i,s,o){for(;i;)i=Cr(t,e,i,s,o);return i}function Or(t,e){for(const i of e){if(!i)continue;const e=i[t];if(jo(e))return e}}function Dr(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const i of t)for(const t of Object.keys(i).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}function Tr(t,e,i,s){const{iScale:o}=t,{key:n="r"}=this._parsing,r=new Array(s);let a,l,h,c;for(a=0,l=s;a<l;++a)h=a+i,c=e[h],r[a]={r:o.parse(No(c,n),h)};return r}const Lr=Number.EPSILON||1e-14,Rr=(t,e)=>e<t.length&&!t[e].skip&&t[e],zr=t=>"x"===t?"y":"x";function Ir(t,e,i,s){const o=t.skip?e:t,n=e,r=i.skip?e:i,a=dn(n,o),l=dn(r,n);let h=a/(a+l),c=l/(a+l);h=isNaN(h)?0:h,c=isNaN(c)?0:c;const d=s*h,u=s*c;return{previous:{x:n.x-d*(r.x-o.x),y:n.y-d*(r.y-o.y)},next:{x:n.x+u*(r.x-o.x),y:n.y+u*(r.y-o.y)}}}function Fr(t,e="x"){const i=zr(e),s=t.length,o=Array(s).fill(0),n=Array(s);let r,a,l,h=Rr(t,0);for(r=0;r<s;++r)if(a=l,l=h,h=Rr(t,r+1),l){if(h){const t=h[e]-l[e];o[r]=0!==t?(h[i]-l[i])/t:0}n[r]=a?h?en(o[r-1])!==en(o[r])?0:(o[r-1]+o[r])/2:o[r-1]:o[r]}!function(t,e,i){const s=t.length;let o,n,r,a,l,h=Rr(t,0);for(let c=0;c<s-1;++c)l=h,h=Rr(t,c+1),l&&h&&(sn(e[c],0,Lr)?i[c]=i[c+1]=0:(o=i[c]/e[c],n=i[c+1]/e[c],a=Math.pow(o,2)+Math.pow(n,2),a<=9||(r=3/Math.sqrt(a),i[c]=o*r*e[c],i[c+1]=n*r*e[c])))}(t,o,n),function(t,e,i="x"){const s=zr(i),o=t.length;let n,r,a,l=Rr(t,0);for(let h=0;h<o;++h){if(r=a,a=l,l=Rr(t,h+1),!a)continue;const o=a[i],c=a[s];r&&(n=(o-r[i])/3,a[`cp1${i}`]=o-n,a[`cp1${s}`]=c-n*e[h]),l&&(n=(l[i]-o)/3,a[`cp2${i}`]=o+n,a[`cp2${s}`]=c+n*e[h])}}(t,n,e)}function Vr(t,e,i){return Math.max(Math.min(t,i),e)}function Br(t,e,i,s,o){let n,r,a,l;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)Fr(t,o);else{let i=s?t[t.length-1]:t[0];for(n=0,r=t.length;n<r;++n)a=t[n],l=Ir(i,a,t[Math.min(n+1,r-(s?0:1))%r],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,i=a}e.capBezierPoints&&function(t,e){let i,s,o,n,r,a=tr(t[0],e);for(i=0,s=t.length;i<s;++i)r=n,n=a,a=i<s-1&&tr(t[i+1],e),n&&(o=t[i],r&&(o.cp1x=Vr(o.cp1x,e.left,e.right),o.cp1y=Vr(o.cp1y,e.top,e.bottom)),a&&(o.cp2x=Vr(o.cp2x,e.left,e.right),o.cp2y=Vr(o.cp2y,e.top,e.bottom)))}(t,i)}function Nr(){return"undefined"!=typeof window&&"undefined"!=typeof document}function Hr(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function jr(t,e,i){let s;return"string"==typeof t?(s=parseInt(t,10),-1!==t.indexOf("%")&&(s=s/100*e.parentNode[i])):s=t,s}const Ur=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);const Wr=["top","right","bottom","left"];function qr(t,e,i){const s={};i=i?"-"+i:"";for(let o=0;o<4;o++){const n=Wr[o];s[n]=parseFloat(t[e+"-"+n+i])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}function Yr(t,e){if("native"in t)return t;const{canvas:i,currentDevicePixelRatio:s}=e,o=Ur(i),n="border-box"===o.boxSizing,r=qr(o,"padding"),a=qr(o,"border","width"),{x:l,y:h,box:c}=function(t,e){const i=t.touches,s=i&&i.length?i[0]:t,{offsetX:o,offsetY:n}=s;let r,a,l=!1;if(((t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot))(o,n,t.target))r=o,a=n;else{const t=e.getBoundingClientRect();r=s.clientX-t.left,a=s.clientY-t.top,l=!0}return{x:r,y:a,box:l}}(t,i),d=r.left+(c&&a.left),u=r.top+(c&&a.top);let{width:p,height:f}=e;return n&&(p-=r.width+a.width,f-=r.height+a.height),{x:Math.round((l-d)/p*i.width/s),y:Math.round((h-u)/f*i.height/s)}}const Xr=t=>Math.round(10*t)/10;function Kr(t,e,i,s){const o=Ur(t),n=qr(o,"margin"),r=jr(o.maxWidth,t,"clientWidth")||Ko,a=jr(o.maxHeight,t,"clientHeight")||Ko,l=function(t,e,i){let s,o;if(void 0===e||void 0===i){const n=Hr(t);if(n){const t=n.getBoundingClientRect(),r=Ur(n),a=qr(r,"border","width"),l=qr(r,"padding");e=t.width-l.width-a.width,i=t.height-l.height-a.height,s=jr(r.maxWidth,n,"clientWidth"),o=jr(r.maxHeight,n,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:s||Ko,maxHeight:o||Ko}}(t,e,i);let{width:h,height:c}=l;if("content-box"===o.boxSizing){const t=qr(o,"border","width"),e=qr(o,"padding");h-=e.width+t.width,c-=e.height+t.height}h=Math.max(0,h-n.width),c=Math.max(0,s?h/s:c-n.height),h=Xr(Math.min(h,r,l.maxWidth)),c=Xr(Math.min(c,a,l.maxHeight)),h&&!c&&(c=Xr(h/2));return(void 0!==e||void 0!==i)&&s&&l.height&&c>l.height&&(c=l.height,h=Xr(Math.floor(c*s))),{width:h,height:c}}function Gr(t,e,i){const s=e||1,o=Math.floor(t.height*s),n=Math.floor(t.width*s);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const r=t.canvas;return r.style&&(i||!r.style.height&&!r.style.width)&&(r.style.height=`${t.height}px`,r.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==s||r.height!==o||r.width!==n)&&(t.currentDevicePixelRatio=s,r.height=o,r.width=n,t.ctx.setTransform(s,0,0,s,0,0),!0)}const Zr=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}();function Jr(t,e){const i=function(t,e){return Ur(t).getPropertyValue(e)}(t,e),s=i&&i.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Qr(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function ta(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:"middle"===s?i<.5?t.y:e.y:"after"===s?i<1?t.y:e.y:i>0?e.y:t.y}}function ea(t,e,i,s){const o={x:t.cp2x,y:t.cp2y},n={x:e.cp1x,y:e.cp1y},r=Qr(t,o,i),a=Qr(o,n,i),l=Qr(n,e,i),h=Qr(r,a,i),c=Qr(a,l,i);return Qr(h,c,i)}function ia(t,e,i){return t?function(t,e){return{x:i=>t+t+e-i,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,i):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function sa(t,e){let i,s;"ltr"!==e&&"rtl"!==e||(i=t.canvas.style,s=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=s)}function oa(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function na(t){return"angle"===t?{between:fn,compare:un,normalize:pn}:{between:bn,compare:(t,e)=>t-e,normalize:t=>t}}function ra({start:t,end:e,count:i,loop:s,style:o}){return{start:t%i,end:e%i,loop:s&&(e-t+1)%i==0,style:o}}function aa(t,e,i){if(!i)return[t];const{property:s,start:o,end:n}=i,r=e.length,{compare:a,between:l,normalize:h}=na(s),{start:c,end:d,loop:u,style:p}=function(t,e,i){const{property:s,start:o,end:n}=i,{between:r,normalize:a}=na(s),l=e.length;let h,c,{start:d,end:u,loop:p}=t;if(p){for(d+=l,u+=l,h=0,c=l;h<c&&r(a(e[d%l][s]),o,n);++h)d--,u--;d%=l,u%=l}return u<d&&(u+=l),{start:d,end:u,loop:p,style:t.style}}(t,e,i),f=[];let g,b,m,v=!1,y=null;const _=()=>v||l(o,m,g)&&0!==a(o,m),x=()=>!v||0===a(n,g)||l(n,m,g);for(let t=c,i=c;t<=d;++t)b=e[t%r],b.skip||(g=h(b[s]),g!==m&&(v=l(g,o,n),null===y&&_()&&(y=0===a(g,o)?t:i),null!==y&&x()&&(f.push(ra({start:y,end:t,loop:u,count:r,style:p})),y=null),i=t,m=g));return null!==y&&f.push(ra({start:y,end:d,loop:u,count:r,style:p})),f}function la(t,e){const i=[],s=t.segments;for(let o=0;o<s.length;o++){const n=aa(s[o],t.points,e);n.length&&i.push(...n)}return i}function ha(t,e,i,s){return s&&s.setContext&&i?function(t,e,i,s){const o=t._chart.getContext(),n=ca(t.options),{_datasetIndex:r,options:{spanGaps:a}}=t,l=i.length,h=[];let c=n,d=e[0].start,u=d;function p(t,e,s,o){const n=a?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=n;for(;i[e%l].skip;)e+=n;t%l!=e%l&&(h.push({start:t%l,end:e%l,loop:s,style:o}),c=o,d=e%l)}}for(const t of e){d=a?d:t.start;let e,n=i[d%l];for(u=d+1;u<=t.end;u++){const a=i[u%l];e=ca(s.setContext(yr(o,{type:"segment",p0:n,p1:a,p0DataIndex:(u-1)%l,p1DataIndex:u%l,datasetIndex:r}))),da(e,c)&&p(d,u-1,t.loop,c),n=a,c=e}d<u-1&&p(d,u-1,t.loop,c)}return h}(t,e,i,s):e}function ca(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function da(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}
/*!
   * Chart.js v4.1.1
   * https://www.chartjs.org
   * (c) 2022 Chart.js Contributors
   * Released under the MIT License
   */class ua{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const o=e.listeners[s],n=e.duration;o.forEach((s=>s({chart:t,initial:e.initial,numSteps:n,currentStep:Math.min(i-e.start,n)})))}_refresh(){this._request||(this._running=!0,this._request=kn.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(t=Date.now()){let e=0;this._charts.forEach(((i,s)=>{if(!i.running||!i.items.length)return;const o=i.items;let n,r=o.length-1,a=!1;for(;r>=0;--r)n=o[r],n._active?(n._total>i.duration&&(i.duration=n._total),n.tick(t),a=!0):(o[r]=o[o.length-1],o.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),o.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=o.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var pa=new ua;const fa="transparent",ga={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){const s=Ln(t||fa),o=s.valid&&Ln(e||fa);return o&&o.valid?o.mix(s,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class ba{constructor(t,e,i,s){const o=e[i];s=vr([t.to,s,o,t.from]);const n=vr([t.from,o,s]);this._active=!0,this._fn=t.fn||ga[t.type||typeof n],this._easing=Dn[t.easing]||Dn.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=n,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],o=i-this._start,n=this._duration-o;this._start=i,this._duration=Math.floor(Math.max(n,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=vr([t.to,e,s,t.from]),this._from=vr([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,o=this._from,n=this._loop,r=this._to;let a;if(this._active=o!==r&&(n||e<i),!this._active)return this._target[s]=r,void this._notify(!0);e<0?this._target[s]=o:(a=e/i%2,a=n&&a>1?2-a:a,a=this._easing(Math.min(1,Math.max(0,a))),this._target[s]=this._fn(o,r,a))}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,i)=>{t.push({res:e,rej:i})}))}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}class ma{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!So(t))return;const e=Object.keys(Yn.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach((s=>{const o=t[s];if(!So(o))return;const n={};for(const t of e)n[t]=o[t];(Ao(o.properties)&&o.properties||[s]).forEach((t=>{t!==s&&i.has(t)||i.set(t,n)}))}))}_animateOptions(t,e){const i=e.options,s=function(t,e){if(!e)return;let i=t.options;if(!i)return void(t.options=e);i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}}));return i}(t,i);if(!s)return[];const o=this._createAnimations(s,i);return i.$shared&&function(t,e){const i=[],s=Object.keys(e);for(let e=0;e<s.length;e++){const o=t[s[e]];o&&o.active()&&i.push(o.wait())}return Promise.all(i)}(t.options.$animations,i).then((()=>{t.options=i}),(()=>{})),o}_createAnimations(t,e){const i=this._properties,s=[],o=t.$animations||(t.$animations={}),n=Object.keys(e),r=Date.now();let a;for(a=n.length-1;a>=0;--a){const l=n[a];if("$"===l.charAt(0))continue;if("options"===l){s.push(...this._animateOptions(t,e));continue}const h=e[l];let c=o[l];const d=i.get(l);if(c){if(d&&c.active()){c.update(d,h,r);continue}c.cancel()}d&&d.duration?(o[l]=c=new ba(d,t,l,h),s.push(c)):t[l]=h}return s}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const i=this._createAnimations(t,e);return i.length?(pa.add(this._chart,i),!0):void 0}}function va(t,e){const i=t&&t.options||{},s=i.reverse,o=void 0===i.min?e:0,n=void 0===i.max?e:0;return{start:s?n:o,end:s?o:n}}function ya(t,e){const i=[],s=t._getSortedDatasetMetas(e);let o,n;for(o=0,n=s.length;o<n;++o)i.push(s[o].index);return i}function _a(t,e,i,s={}){const o=t.keys,n="single"===s.mode;let r,a,l,h;if(null!==e){for(r=0,a=o.length;r<a;++r){if(l=+o[r],l===i){if(s.all)continue;break}h=t.values[l],$o(h)&&(n||0===e||en(e)===en(h))&&(e+=h)}return e}}function xa(t,e){const i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function wa(t,e,i){const s=t[e]||(t[e]={});return s[i]||(s[i]={})}function ka(t,e,i,s){for(const o of e.getMatchingVisibleMetas(s).reverse()){const e=t[o.index];if(i&&e>0||!i&&e<0)return o.index}return null}function Ma(t,e){const{chart:i,_cachedMeta:s}=t,o=i._stacks||(i._stacks={}),{iScale:n,vScale:r,index:a}=s,l=n.axis,h=r.axis,c=function(t,e,i){return`${t.id}.${e.id}.${i.stack||i.type}`}(n,r,s),d=e.length;let u;for(let t=0;t<d;++t){const i=e[t],{[l]:n,[h]:d}=i;u=(i._stacks||(i._stacks={}))[h]=wa(o,c,n),u[a]=d,u._top=ka(u,r,!0,s.type),u._bottom=ka(u,r,!1,s.type);(u._visualValues||(u._visualValues={}))[a]=d}}function Aa(t,e){const i=t.scales;return Object.keys(i).filter((t=>i[t].axis===e)).shift()}function Sa(t,e){const i=t.controller.index,s=t.vScale&&t.vScale.axis;if(s){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[s]||void 0===e[s][i])return;delete e[s][i],void 0!==e[s]._visualValues&&void 0!==e[s]._visualValues[i]&&delete e[s]._visualValues[i]}}}const $a=t=>"reset"===t||"none"===t,Ca=(t,e)=>e?t:Object.assign({},t);class Ea{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=xa(t.vScale,t),this.addElements(),this.options.fill&&this.chart.isPluginEnabled("filler")}updateIndex(t){this.index!==t&&Sa(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(t,e,i,s)=>"x"===t?e:"r"===t?s:i,o=e.xAxisID=Eo(i.xAxisID,Aa(t,"x")),n=e.yAxisID=Eo(i.yAxisID,Aa(t,"y")),r=e.rAxisID=Eo(i.rAxisID,Aa(t,"r")),a=e.indexAxis,l=e.iAxisID=s(a,o,n,r),h=e.vAxisID=s(a,n,o,r);e.xScale=this.getScaleForId(o),e.yScale=this.getScaleForId(n),e.rScale=this.getScaleForId(r),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&xn(this._data,this),t._stacked&&Sa(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(So(e))this._data=function(t){const e=Object.keys(t),i=new Array(e.length);let s,o,n;for(s=0,o=e.length;s<o;++s)n=e[s],i[s]={x:n,y:t[n]};return i}(e);else if(i!==e){if(i){xn(i,this);const t=this._cachedMeta;Sa(t),t._parsed=[]}e&&Object.isExtensible(e)&&(o=this,(s=e)._chartjs?s._chartjs.listeners.push(o):(Object.defineProperty(s,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[o]}}),_n.forEach((t=>{const e="_onData"+Ho(t),i=s[t];Object.defineProperty(s,t,{configurable:!0,enumerable:!1,value(...t){const o=i.apply(this,t);return s._chartjs.listeners.forEach((i=>{"function"==typeof i[e]&&i[e](...t)})),o}})})))),this._syncList=[],this._data=e}var s,o}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const o=e._stacked;e._stacked=xa(e.vScale,e),e.stack!==i.stack&&(s=!0,Sa(e),e.stack=i.stack),this._resyncElements(t),(s||o!==e._stacked)&&Ma(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:o,_stacked:n}=i,r=o.axis;let a,l,h,c=0===t&&e===s.length||i._sorted,d=t>0&&i._parsed[t-1];if(!1===this._parsing)i._parsed=s,i._sorted=!0,h=s;else{h=Ao(s[t])?this.parseArrayData(i,s,t,e):So(s[t])?this.parseObjectData(i,s,t,e):this.parsePrimitiveData(i,s,t,e);const o=()=>null===l[r]||d&&l[r]<d[r];for(a=0;a<e;++a)i._parsed[a+t]=l=h[a],c&&(o()&&(c=!1),d=l);i._sorted=c}n&&Ma(this,h)}parsePrimitiveData(t,e,i,s){const{iScale:o,vScale:n}=t,r=o.axis,a=n.axis,l=o.getLabels(),h=o===n,c=new Array(s);let d,u,p;for(d=0,u=s;d<u;++d)p=d+i,c[d]={[r]:h||o.parse(l[p],p),[a]:n.parse(e[p],p)};return c}parseArrayData(t,e,i,s){const{xScale:o,yScale:n}=t,r=new Array(s);let a,l,h,c;for(a=0,l=s;a<l;++a)h=a+i,c=e[h],r[a]={x:o.parse(c[0],h),y:n.parse(c[1],h)};return r}parseObjectData(t,e,i,s){const{xScale:o,yScale:n}=t,{xAxisKey:r="x",yAxisKey:a="y"}=this._parsing,l=new Array(s);let h,c,d,u;for(h=0,c=s;h<c;++h)d=h+i,u=e[d],l[h]={x:o.parse(No(u,r),d),y:n.parse(No(u,a),d)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,o=this._cachedMeta,n=e[t.axis];return _a({keys:ya(s,!0),values:e._stacks[t.axis]._visualValues},n,o.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const o=i[e.axis];let n=null===o?NaN:o;const r=s&&i._stacks[e.axis];s&&r&&(s.values=r,n=_a(s,o,this._cachedMeta.index)),t.min=Math.min(t.min,n),t.max=Math.max(t.max,n)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,o=i._sorted&&t===i.iScale,n=s.length,r=this._getOtherScale(t),a=((t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:ya(i,!0),values:null})(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:c}=function(t){const{min:e,max:i,minDefined:s,maxDefined:o}=t.getUserBounds();return{min:s?e:Number.NEGATIVE_INFINITY,max:o?i:Number.POSITIVE_INFINITY}}(r);let d,u;function p(){u=s[d];const e=u[r.axis];return!$o(u[t.axis])||h>e||c<e}for(d=0;d<n&&(p()||(this.updateRangeFromParsed(l,t,u,a),!o));++d);if(o)for(d=n-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(l,t,u,a);break}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,o,n;for(s=0,o=e.length;s<o;++s)n=e[s][t.axis],$o(n)&&i.push(n);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,o=this.getParsed(t);return{label:i?""+i.getLabelForValue(o[i.axis]):"",value:s?""+s.getLabelForValue(o[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=function(t){let e,i,s,o;return So(t)?(e=t.top,i=t.right,s=t.bottom,o=t.left):e=i=s=o=t,{top:e,right:i,bottom:s,left:o,disabled:!1===t}}(Eo(this.options.clip,function(t,e,i){if(!1===i)return!1;const s=va(t,i),o=va(e,i);return{top:o.end,right:s.end,bottom:o.start,left:s.start}}(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],o=e.chartArea,n=[],r=this._drawStart||0,a=this._drawCount||s.length-r,l=this.options.drawActiveElementsOnTop;let h;for(i.dataset&&i.dataset.draw(t,o,r,a),h=r;h<r+a;++h){const e=s[h];e.hidden||(e.active&&l?n.push(e):e.draw(t,o))}for(h=0;h<n.length;++h)n[h].draw(t,o)}getStyle(t,e){const i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];o=e.$context||(e.$context=function(t,e,i){return yr(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:i,index:e,mode:"default",type:"data"})}(this.getContext(),t,e)),o.parsed=this.getParsed(t),o.raw=s.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=function(t,e){return yr(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}(this.chart.getContext(),this.index)),o.dataset=s,o.index=o.datasetIndex=this.index;return o.active=!!e,o.mode=i,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s="active"===e,o=this._cachedDataOpts,n=t+"-"+e,r=o[n],a=this.enableOptionSharing&&jo(i);if(r)return Ca(r,a);const l=this.chart.config,h=l.datasetElementScopeKeys(this._type,t),c=s?[`${t}Hover`,"hover",t,""]:[t,""],d=l.getOptionScopes(this.getDataset(),h),u=Object.keys(Yn.elements[t]),p=l.resolveNamedOptions(d,u,(()=>this.getContext(i,s,e)),c);return p.$shared&&(p.$shared=a,o[n]=Object.freeze(Ca(p,a))),p}_resolveAnimations(t,e,i){const s=this.chart,o=this._cachedDataOpts,n=`animation-${e}`,r=o[n];if(r)return r;let a;if(!1!==s.options.animation){const s=this.chart.config,o=s.datasetAnimationScopeKeys(this._type,e),n=s.getOptionScopes(this.getDataset(),o);a=s.createResolver(n,this.getContext(t,i,e))}const l=new ma(s,a&&a.animations);return a&&a._cacheable&&(o[n]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||$a(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,o=this.getSharedOptions(i),n=this.includeOptions(e,o)||o!==s;return this.updateSharedOptions(o,e,i),{sharedOptions:o,includeOptions:n}}updateElement(t,e,i,s){$a(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!$a(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const o=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(o)||o})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];const s=i.length,o=e.length,n=Math.min(o,s);n&&this.parse(0,n),o>s?this._insertElements(s,o-s,t):o<s&&this._removeElements(o,s-o)}_insertElements(t,e,i=!0){const s=this._cachedMeta,o=s.data,n=t+e;let r;const a=t=>{for(t.length+=e,r=t.length-1;r>=n;r--)t[r]=t[r-e]};for(a(o),r=t;r<n;++r)o[r]=new this.dataElementType;this._parsing&&a(s._parsed),this.parse(t,e),i&&this.updateElements(o,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&Sa(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function Pa(t){const e=t.iScale,i=function(t,e){if(!t._cache.$bar){const i=t.getMatchingVisibleMetas(e);let s=[];for(let e=0,o=i.length;e<o;e++)s=s.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=wn(s.sort(((t,e)=>t-e)))}return t._cache.$bar}(e,t.type);let s,o,n,r,a=e._length;const l=()=>{32767!==n&&-32768!==n&&(jo(r)&&(a=Math.min(a,Math.abs(n-r)||a)),r=n)};for(s=0,o=i.length;s<o;++s)n=e.getPixelForValue(i[s]),l();for(r=void 0,s=0,o=e.ticks.length;s<o;++s)n=e.getPixelForTick(s),l();return a}function Oa(t,e,i,s){return Ao(t)?function(t,e,i,s){const o=i.parse(t[0],s),n=i.parse(t[1],s),r=Math.min(o,n),a=Math.max(o,n);let l=r,h=a;Math.abs(r)>Math.abs(a)&&(l=a,h=r),e[i.axis]=h,e._custom={barStart:l,barEnd:h,start:o,end:n,min:r,max:a}}(t,e,i,s):e[i.axis]=i.parse(t,s),e}function Da(t,e,i,s){const o=t.iScale,n=t.vScale,r=o.getLabels(),a=o===n,l=[];let h,c,d,u;for(h=i,c=i+s;h<c;++h)u=e[h],d={},d[o.axis]=a||o.parse(r[h],h),l.push(Oa(u,d,n,h));return l}function Ta(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function La(t,e,i,s){let o=e.borderSkipped;const n={};if(!o)return void(t.borderSkipped=n);if(!0===o)return void(t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0});const{start:r,end:a,reverse:l,top:h,bottom:c}=function(t){let e,i,s,o,n;return t.horizontal?(e=t.base>t.x,i="left",s="right"):(e=t.base<t.y,i="bottom",s="top"),e?(o="end",n="start"):(o="start",n="end"),{start:i,end:s,reverse:e,top:o,bottom:n}}(t);"middle"===o&&i&&(t.enableBorderRadius=!0,(i._top||0)===s?o=h:(i._bottom||0)===s?o=c:(n[Ra(c,r,a,l)]=!0,o=h)),n[Ra(o,r,a,l)]=!0,t.borderSkipped=n}function Ra(t,e,i,s){var o,n,r;return s?(r=i,t=za(t=(o=t)===(n=e)?r:o===r?n:o,i,e)):t=za(t,e,i),t}function za(t,e,i){return"start"===t?e:"end"===t?i:t}function Ia(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e}class Fa extends Ea{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:s}}=t.legend.options;return e.labels.map(((e,o)=>{const n=t.getDatasetMeta(0).controller.getStyle(o);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,fontColor:s,lineWidth:n.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}};constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(!1===this._parsing)s._parsed=i;else{let o,n,r=t=>+i[t];if(So(i[t])){const{key:t="value"}=this._parsing;r=e=>+No(i[e],t)}for(o=t,n=t+e;o<n;++o)s._parsed[o]=r(o)}}_getRotation(){return an(this.options.rotation-90)}_getCircumference(){return an(this.options.circumference)}_getRotationExtents(){let t=Yo,e=-Yo;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,o=s._getRotation(),n=s._getCircumference();t=Math.min(t,o),e=Math.max(e,o+n)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,o=s.data,n=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,r=Math.max((Math.min(i.width,i.height)-n)/2,0),a=Math.min((l=this.options.cutout,h=r,"string"==typeof l&&l.endsWith("%")?parseFloat(l)/100:+l/h),1);var l,h;const c=this._getRingWeight(this.index),{circumference:d,rotation:u}=this._getRotationExtents(),{ratioX:p,ratioY:f,offsetX:g,offsetY:b}=function(t,e,i){let s=1,o=1,n=0,r=0;if(e<Yo){const a=t,l=a+e,h=Math.cos(a),c=Math.sin(a),d=Math.cos(l),u=Math.sin(l),p=(t,e,s)=>fn(t,a,l,!0)?1:Math.max(e,e*i,s,s*i),f=(t,e,s)=>fn(t,a,l,!0)?-1:Math.min(e,e*i,s,s*i),g=p(0,h,d),b=p(Zo,c,u),m=f(qo,h,d),v=f(qo+Zo,c,u);s=(g-m)/2,o=(b-v)/2,n=-(g+m)/2,r=-(b+v)/2}return{ratioX:s,ratioY:o,offsetX:n,offsetY:r}}(u,d,a),m=(i.width-n)/p,v=(i.height-n)/f,y=Math.max(Math.min(m,v)/2,0),_=Po(this.options.radius,y),x=(_-Math.max(_*a,0))/this._getVisibleDatasetWeightTotal();this.offsetX=g*_,this.offsetY=b*_,s.total=this.calculateTotal(),this.outerRadius=_-x*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-x*c,0),this.updateElements(o,0,o.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,o=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===s._parsed[t]||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*o/Yo)}updateElements(t,e,i,s){const o="reset"===s,n=this.chart,r=n.chartArea,a=n.options.animation,l=(r.left+r.right)/2,h=(r.top+r.bottom)/2,c=o&&a.animateScale,d=c?0:this.innerRadius,u=c?0:this.outerRadius,{sharedOptions:p,includeOptions:f}=this._getSharedOptions(e,s);let g,b=this._getRotation();for(g=0;g<e;++g)b+=this._circumference(g,o);for(g=e;g<e+i;++g){const e=this._circumference(g,o),i=t[g],n={x:l+this.offsetX,y:h+this.offsetY,startAngle:b,endAngle:b+e,circumference:e,outerRadius:u,innerRadius:d};f&&(n.options=p||this.resolveDataElementOptions(g,i.active?"active":s)),b+=e,this.updateElement(i,g,n,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i,s=0;for(i=0;i<e.length;i++){const o=t._parsed[i];null===o||isNaN(o)||!this.chart.getDataVisibility(i)||e[i].hidden||(s+=Math.abs(o))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Yo*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],o=Vn(e._parsed[t],i.options.locale);return{label:s[t]||"",value:o}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,o,n,r,a;if(!t)for(s=0,o=i.data.datasets.length;s<o;++s)if(i.isDatasetVisible(s)){n=i.getDatasetMeta(s),t=n.data,r=n.controller;break}if(!t)return 0;for(s=0,o=t.length;s<o;++s)a=r.resolveDataElementOptions(s),"inner"!==a.borderAlign&&(e=Math.max(e,a.borderWidth||0,a.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(Eo(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class Va extends Ea{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:s}}=t.legend.options;return e.labels.map(((e,o)=>{const n=t.getDatasetMeta(0).controller.getStyle(o);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,fontColor:s,lineWidth:n.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],o=Vn(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:o}}parseObjectData(t,e,i,s){return Tr.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach(((t,i)=>{const s=this.getParsed(i).r;!isNaN(s)&&this.chart.getDataVisibility(i)&&(s<e.min&&(e.min=s),s>e.max&&(e.max=s))})),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),o=Math.max(s/2,0),n=(o-Math.max(i.cutoutPercentage?o/100*i.cutoutPercentage:1,0))/t.getVisibleDatasetCount();this.outerRadius=o-n*this.index,this.innerRadius=this.outerRadius-n}updateElements(t,e,i,s){const o="reset"===s,n=this.chart,r=n.options.animation,a=this._cachedMeta.rScale,l=a.xCenter,h=a.yCenter,c=a.getIndexAngle(0)-.5*qo;let d,u=c;const p=360/this.countVisibleElements();for(d=0;d<e;++d)u+=this._computeAngle(d,s,p);for(d=e;d<e+i;d++){const e=t[d];let i=u,f=u+this._computeAngle(d,s,p),g=n.getDataVisibility(d)?a.getDistanceFromCenterForValue(this.getParsed(d).r):0;u=f,o&&(r.animateScale&&(g=0),r.animateRotate&&(i=f=c));const b={x:l,y:h,innerRadius:0,outerRadius:g,startAngle:i,endAngle:f,options:this.resolveDataElementOptions(d,e.active?"active":s)};this.updateElement(e,d,b,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach(((t,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++})),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?an(this.resolveDataElementOptions(t,e).angle||i):0}}var Ba=Object.freeze({__proto__:null,BarController:class extends Ea{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,e,i,s){return Da(t,e,i,s)}parseArrayData(t,e,i,s){return Da(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:o,vScale:n}=t,{xAxisKey:r="x",yAxisKey:a="y"}=this._parsing,l="x"===o.axis?r:a,h="x"===n.axis?r:a,c=[];let d,u,p,f;for(d=i,u=i+s;d<u;++d)f=e[d],p={},p[o.axis]=o.parse(No(f,l),d),c.push(Oa(No(f,h),p,n,d));return c}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const o=i._custom;o&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,o=this.getParsed(t),n=o._custom,r=Ta(n)?"["+n.start+", "+n.end+"]":""+s.getLabelForValue(o[s.axis]);return{label:""+i.getLabelForValue(o[i.axis]),value:r}}initialize(){this.enableOptionSharing=!0,super.initialize();this._cachedMeta.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,s){const o="reset"===s,{index:n,_cachedMeta:{vScale:r}}=this,a=r.getBasePixel(),l=r.isHorizontal(),h=this._getRuler(),{sharedOptions:c,includeOptions:d}=this._getSharedOptions(e,s);for(let u=e;u<e+i;u++){const e=this.getParsed(u),i=o||Mo(e[r.axis])?{base:a,head:a}:this._calculateBarValuePixels(u),p=this._calculateBarIndexPixels(u,h),f=(e._stacks||{})[r.axis],g={horizontal:l,base:i.base,enableBorderRadius:!f||Ta(e._custom)||n===f._top||n===f._bottom,x:l?i.head:p.center,y:l?p.center:i.head,height:l?p.size:Math.abs(i.size),width:l?Math.abs(i.size):p.size};d&&(g.options=c||this.resolveDataElementOptions(u,t[u].active?"active":s));const b=g.options||t[u].options;La(g,b,f,n),Ia(g,b,h.ratio),this.updateElement(t[u],u,g,s)}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,s=i.getMatchingVisibleMetas(this._type).filter((t=>t.controller.options.grouped)),o=i.options.stacked,n=[],r=t=>{const i=t.controller.getParsed(e),s=i&&i[t.vScale.axis];if(Mo(s)||isNaN(s))return!0};for(const i of s)if((void 0===e||!r(i))&&((!1===o||-1===n.indexOf(i.stack)||void 0===o&&void 0===i.stack)&&n.push(i.stack),i.index===t))break;return n.length||n.push(void 0),n}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){const s=this._getStacks(t,i),o=void 0!==e?s.indexOf(e):-1;return-1===o?s.length-1:o}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let o,n;for(o=0,n=e.data.length;o<n;++o)s.push(i.getPixelForValue(this.getParsed(o)[i.axis],o));const r=t.barThickness;return{min:r||Pa(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:r?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:s},options:{base:o,minBarLength:n}}=this,r=o||0,a=this.getParsed(t),l=a._custom,h=Ta(l);let c,d,u=a[e.axis],p=0,f=i?this.applyStack(e,a,i):u;f!==u&&(p=f-u,f=u),h&&(u=l.barStart,f=l.barEnd-l.barStart,0!==u&&en(u)!==en(l.barEnd)&&(p=0),p+=u);const g=Mo(o)||h?p:o;let b=e.getPixelForValue(g);if(c=this.chart.getDataVisibility(t)?e.getPixelForValue(p+f):b,d=c-b,Math.abs(d)<n){d=function(t,e,i){return 0!==t?en(t):(e.isHorizontal()?1:-1)*(e.min>=i?1:-1)}(d,e,r)*n,u===r&&(b-=d/2);const t=e.getPixelForDecimal(0),o=e.getPixelForDecimal(1),l=Math.min(t,o),p=Math.max(t,o);b=Math.max(Math.min(b,p),l),c=b+d,i&&!h&&(a._stacks[e.axis]._visualValues[s]=e.getValueForPixel(c)-e.getValueForPixel(b))}if(b===e.getPixelForValue(r)){const t=en(d)*e.getLineWidthForValue(r)/2;b+=t,d-=t}return{size:d,base:b,head:c,center:c+d/2}}_calculateBarIndexPixels(t,e){const i=e.scale,s=this.options,o=s.skipNull,n=Eo(s.maxBarThickness,1/0);let r,a;if(e.grouped){const i=o?this._getStackCount(t):e.stackCount,l="flex"===s.barThickness?function(t,e,i,s){const o=e.pixels,n=o[t];let r=t>0?o[t-1]:null,a=t<o.length-1?o[t+1]:null;const l=i.categoryPercentage;null===r&&(r=n-(null===a?e.end-e.start:a-n)),null===a&&(a=n+n-r);const h=n-(n-Math.min(r,a))/2*l;return{chunk:Math.abs(a-r)/2*l/s,ratio:i.barPercentage,start:h}}(t,e,s,i):function(t,e,i,s){const o=i.barThickness;let n,r;return Mo(o)?(n=e.min*i.categoryPercentage,r=i.barPercentage):(n=o*s,r=1),{chunk:n/s,ratio:r,start:e.pixels[t]-n/2}}(t,e,s,i),h=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0);r=l.start+l.chunk*h+l.chunk/2,a=Math.min(n,l.chunk*l.ratio)}else r=i.getPixelForValue(this.getParsed(t)[i.axis],t),a=Math.min(n,e.min*e.ratio);return{base:r-a/2,head:r+a/2,center:r,size:a}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let o=0;for(;o<s;++o)null!==this.getParsed(o)[e.axis]&&i[o].draw(this._ctx)}},BubbleController:class extends Ea{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,s){const o=super.parsePrimitiveData(t,e,i,s);for(let t=0;t<o.length;t++)o[t]._custom=this.resolveDataElementOptions(t+i).radius;return o}parseArrayData(t,e,i,s){const o=super.parseArrayData(t,e,i,s);for(let t=0;t<o.length;t++){const s=e[i+t];o[t]._custom=Eo(s[2],this.resolveDataElementOptions(t+i).radius)}return o}parseObjectData(t,e,i,s){const o=super.parseObjectData(t,e,i,s);for(let t=0;t<o.length;t++){const s=e[i+t];o[t]._custom=Eo(s&&s.r&&+s.r,this.resolveDataElementOptions(t+i).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:o}=e,n=this.getParsed(t),r=s.getLabelForValue(n.x),a=o.getLabelForValue(n.y),l=n._custom;return{label:i[t]||"",value:"("+r+", "+a+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const o="reset"===s,{iScale:n,vScale:r}=this._cachedMeta,{sharedOptions:a,includeOptions:l}=this._getSharedOptions(e,s),h=n.axis,c=r.axis;for(let d=e;d<e+i;d++){const e=t[d],i=!o&&this.getParsed(d),u={},p=u[h]=o?n.getPixelForDecimal(.5):n.getPixelForValue(i[h]),f=u[c]=o?r.getBasePixel():r.getPixelForValue(i[c]);u.skip=isNaN(p)||isNaN(f),l&&(u.options=a||this.resolveDataElementOptions(d,e.active?"active":s),o&&(u.options.radius=0)),this.updateElement(e,d,u,s)}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const o=s.radius;return"active"!==e&&(s.radius=0),s.radius+=Eo(i&&i._custom,o),s}},DoughnutController:Fa,LineController:class extends Ea{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:o}=e,n=this.chart._animationsDisabled;let{start:r,count:a}=$n(e,s,n);this._drawStart=r,this._drawCount=a,Cn(e)&&(r=0,a=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!o._decimated,i.points=s;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!n,options:l},t),this.updateElements(s,r,a,t)}updateElements(t,e,i,s){const o="reset"===s,{iScale:n,vScale:r,_stacked:a,_dataset:l}=this._cachedMeta,{sharedOptions:h,includeOptions:c}=this._getSharedOptions(e,s),d=n.axis,u=r.axis,{spanGaps:p,segment:f}=this.options,g=nn(p)?p:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||o||"none"===s,m=e+i,v=t.length;let y=e>0&&this.getParsed(e-1);for(let i=0;i<v;++i){const p=t[i],v=b?p:{};if(i<e||i>=m){v.skip=!0;continue}const _=this.getParsed(i),x=Mo(_[u]),w=v[d]=n.getPixelForValue(_[d],i),k=v[u]=o||x?r.getBasePixel():r.getPixelForValue(a?this.applyStack(r,_,a):_[u],i);v.skip=isNaN(w)||isNaN(k)||x,v.stop=i>0&&Math.abs(_[d]-y[d])>g,f&&(v.parsed=_,v.raw=l.data[i]),c&&(v.options=h||this.resolveDataElementOptions(i,p.active?"active":s)),b||this.updateElement(p,i,v,s),y=_}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const o=s[0].size(this.resolveDataElementOptions(0)),n=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,o,n)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}},PolarAreaController:Va,PieController:class extends Fa{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}},RadarController:class extends Ea{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,s){return Tr.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],o=e.iScale.getLabels();if(i.points=s,"resize"!==t){const e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);const n={_loop:!0,_fullLoop:o.length===s.length,options:e};this.updateElement(i,void 0,n,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s){const o=this._cachedMeta.rScale,n="reset"===s;for(let r=e;r<e+i;r++){const e=t[r],i=this.resolveDataElementOptions(r,e.active?"active":s),a=o.getPointPositionForValue(r,this.getParsed(r).r),l=n?o.xCenter:a.x,h=n?o.yCenter:a.y,c={x:l,y:h,angle:a.angle,skip:isNaN(l)||isNaN(h),options:i};this.updateElement(e,r,c,s)}}},ScatterController:class extends Ea{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:o}=e,n=this.getParsed(t),r=s.getLabelForValue(n.x),a=o.getLabelForValue(n.y);return{label:i[t]||"",value:"("+r+", "+a+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:o,count:n}=$n(e,i,s);if(this._drawStart=o,this._drawCount=n,Cn(e)&&(o=0,n=i.length),this.options.showLine){const{dataset:o,_dataset:n}=e;o._chart=this.chart,o._datasetIndex=this.index,o._decimated=!!n._decimated,o.points=i;const r=this.resolveDatasetElementOptions(t);r.segment=this.options.segment,this.updateElement(o,void 0,{animated:!s,options:r},t)}this.updateElements(i,o,n,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,s){const o="reset"===s,{iScale:n,vScale:r,_stacked:a,_dataset:l}=this._cachedMeta,h=this.resolveDataElementOptions(e,s),c=this.getSharedOptions(h),d=this.includeOptions(s,c),u=n.axis,p=r.axis,{spanGaps:f,segment:g}=this.options,b=nn(f)?f:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||o||"none"===s;let v=e>0&&this.getParsed(e-1);for(let h=e;h<e+i;++h){const e=t[h],i=this.getParsed(h),f=m?e:{},y=Mo(i[p]),_=f[u]=n.getPixelForValue(i[u],h),x=f[p]=o||y?r.getBasePixel():r.getPixelForValue(a?this.applyStack(r,i,a):i[p],h);f.skip=isNaN(_)||isNaN(x)||y,f.stop=h>0&&Math.abs(i[u]-v[u])>b,g&&(f.parsed=i,f.raw=l.data[h]),d&&(f.options=c||this.resolveDataElementOptions(h,e.active?"active":s)),m||this.updateElement(e,h,f,s),v=i}this.updateSharedOptions(c,s,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let t=0;for(let i=e.length-1;i>=0;--i)t=Math.max(t,e[i].size(this.resolveDataElementOptions(i))/2);return t>0&&t}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const o=e[0].size(this.resolveDataElementOptions(0)),n=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,o,n)/2}}});function Na(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Ha{static override(t){Object.assign(Ha.prototype,t)}constructor(t){this.options=t||{}}init(){}formats(){return Na()}parse(){return Na()}format(){return Na()}add(){return Na()}diff(){return Na()}startOf(){return Na()}endOf(){return Na()}}var ja=Ha;function Ua(t,e,i,s){const{controller:o,data:n,_sorted:r}=t,a=o._cachedMeta.iScale;if(a&&e===a.axis&&"r"!==e&&r&&n.length){const t=a._reversePixels?yn:vn;if(!s)return t(n,e,i);if(o._sharedOptions){const s=n[0],o="function"==typeof s.getRange&&s.getRange(e);if(o){const s=t(n,e,i-o),r=t(n,e,i+o);return{lo:s.lo,hi:r.hi}}}}return{lo:0,hi:n.length-1}}function Wa(t,e,i,s,o){const n=t.getSortedVisibleDatasetMetas(),r=i[e];for(let t=0,i=n.length;t<i;++t){const{index:i,data:a}=n[t],{lo:l,hi:h}=Ua(n[t],e,r,o);for(let t=l;t<=h;++t){const e=a[t];e.skip||s(e,i,t)}}}function qa(t,e,i,s,o){const n=[];if(!o&&!t.isPointInArea(e))return n;return Wa(t,i,e,(function(i,r,a){(o||tr(i,t.chartArea,0))&&i.inRange(e.x,e.y,s)&&n.push({element:i,datasetIndex:r,index:a})}),!0),n}function Ya(t,e,i,s,o,n){let r=[];const a=function(t){const e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,s){const o=e?Math.abs(t.x-s.x):0,n=i?Math.abs(t.y-s.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(n,2))}}(i);let l=Number.POSITIVE_INFINITY;return Wa(t,i,e,(function(i,h,c){const d=i.inRange(e.x,e.y,o);if(s&&!d)return;const u=i.getCenterPoint(o);if(!(!!n||t.isPointInArea(u))&&!d)return;const p=a(e,u);p<l?(r=[{element:i,datasetIndex:h,index:c}],l=p):p===l&&r.push({element:i,datasetIndex:h,index:c})})),r}function Xa(t,e,i,s,o,n){return n||t.isPointInArea(e)?"r"!==i||s?Ya(t,e,i,s,o,n):function(t,e,i,s){let o=[];return Wa(t,i,e,(function(t,i,n){const{startAngle:r,endAngle:a}=t.getProps(["startAngle","endAngle"],s),{angle:l}=cn(t,{x:e.x,y:e.y});fn(l,r,a)&&o.push({element:t,datasetIndex:i,index:n})})),o}(t,e,i,o):[]}function Ka(t,e,i,s,o){const n=[],r="x"===i?"inXRange":"inYRange";let a=!1;return Wa(t,i,e,((t,s,l)=>{t[r](e[i],o)&&(n.push({element:t,datasetIndex:s,index:l}),a=a||t.inRange(e.x,e.y,o))})),s&&!a?[]:n}var Ga={evaluateInteractionItems:Wa,modes:{index(t,e,i,s){const o=Yr(e,t),n=i.axis||"x",r=i.includeInvisible||!1,a=i.intersect?qa(t,o,n,s,r):Xa(t,o,n,!1,s,r),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=a[0].index,i=t.data[e];i&&!i.skip&&l.push({element:i,datasetIndex:t.index,index:e})})),l):[]},dataset(t,e,i,s){const o=Yr(e,t),n=i.axis||"xy",r=i.includeInvisible||!1;let a=i.intersect?qa(t,o,n,s,r):Xa(t,o,n,!1,s,r);if(a.length>0){const e=a[0].datasetIndex,i=t.getDatasetMeta(e).data;a=[];for(let t=0;t<i.length;++t)a.push({element:i[t],datasetIndex:e,index:t})}return a},point:(t,e,i,s)=>qa(t,Yr(e,t),i.axis||"xy",s,i.includeInvisible||!1),nearest(t,e,i,s){const o=Yr(e,t),n=i.axis||"xy",r=i.includeInvisible||!1;return Xa(t,o,n,i.intersect,s,r)},x:(t,e,i,s)=>Ka(t,Yr(e,t),"x",i.intersect,s),y:(t,e,i,s)=>Ka(t,Yr(e,t),"y",i.intersect,s)}};const Za=["left","top","right","bottom"];function Ja(t,e){return t.filter((t=>t.pos===e))}function Qa(t,e){return t.filter((t=>-1===Za.indexOf(t.pos)&&t.box.axis===e))}function tl(t,e){return t.sort(((t,i)=>{const s=e?i:t,o=e?t:i;return s.weight===o.weight?s.index-o.index:s.weight-o.weight}))}function el(t,e){const i=function(t){const e={};for(const i of t){const{stack:t,pos:s,stackWeight:o}=i;if(!t||!Za.includes(s))continue;const n=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});n.count++,n.weight+=o}return e}(t),{vBoxMaxWidth:s,hBoxMaxHeight:o}=e;let n,r,a;for(n=0,r=t.length;n<r;++n){a=t[n];const{fullSize:r}=a.box,l=i[a.stack],h=l&&a.stackWeight/l.weight;a.horizontal?(a.width=h?h*s:r&&e.availableWidth,a.height=o):(a.width=s,a.height=h?h*o:r&&e.availableHeight)}return i}function il(t,e,i,s){return Math.max(t[i],e[i])+Math.max(t[s],e[s])}function sl(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function ol(t,e,i,s){const{pos:o,box:n}=i,r=t.maxPadding;if(!So(o)){i.size&&(t[o]-=i.size);const e=s[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?n.height:n.width),i.size=e.size/e.count,t[o]+=i.size}n.getPadding&&sl(r,n.getPadding());const a=Math.max(0,e.outerWidth-il(r,t,"left","right")),l=Math.max(0,e.outerHeight-il(r,t,"top","bottom")),h=a!==t.w,c=l!==t.h;return t.w=a,t.h=l,i.horizontal?{same:h,other:c}:{same:c,other:h}}function nl(t,e){const i=e.maxPadding;function s(t){const s={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{s[t]=Math.max(e[t],i[t])})),s}return s(t?["left","right"]:["top","bottom"])}function rl(t,e,i,s){const o=[];let n,r,a,l,h,c;for(n=0,r=t.length,h=0;n<r;++n){a=t[n],l=a.box,l.update(a.width||e.w,a.height||e.h,nl(a.horizontal,e));const{same:r,other:d}=ol(e,i,a,s);h|=r&&o.length,c=c||d,l.fullSize||o.push(a)}return h&&rl(o,e,i,s)||c}function al(t,e,i,s,o){t.top=i,t.left=e,t.right=e+s,t.bottom=i+o,t.width=s,t.height=o}function ll(t,e,i,s){const o=i.padding;let{x:n,y:r}=e;for(const a of t){const t=a.box,l=s[a.stack]||{count:1,placed:0,weight:1},h=a.stackWeight/l.weight||1;if(a.horizontal){const s=e.w*h,n=l.size||t.height;jo(l.start)&&(r=l.start),t.fullSize?al(t,o.left,r,i.outerWidth-o.right-o.left,n):al(t,e.left+l.placed,r,s,n),l.start=r,l.placed+=s,r=t.bottom}else{const s=e.h*h,r=l.size||t.width;jo(l.start)&&(n=l.start),t.fullSize?al(t,n,o.top,r,i.outerHeight-o.bottom-o.top):al(t,n,e.top+l.placed,r,s),l.start=n,l.placed+=s,n=t.right}}e.x=n,e.y=r}var hl={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,s){if(!t)return;const o=br(t.options.layout.padding),n=Math.max(e-o.width,0),r=Math.max(i-o.height,0),a=function(t){const e=function(t){const e=[];let i,s,o,n,r,a;for(i=0,s=(t||[]).length;i<s;++i)o=t[i],({position:n,options:{stack:r,stackWeight:a=1}}=o),e.push({index:i,box:o,pos:n,horizontal:o.isHorizontal(),weight:o.weight,stack:r&&n+r,stackWeight:a});return e}(t),i=tl(e.filter((t=>t.box.fullSize)),!0),s=tl(Ja(e,"left"),!0),o=tl(Ja(e,"right")),n=tl(Ja(e,"top"),!0),r=tl(Ja(e,"bottom")),a=Qa(e,"x"),l=Qa(e,"y");return{fullSize:i,leftAndTop:s.concat(n),rightAndBottom:o.concat(l).concat(r).concat(a),chartArea:Ja(e,"chartArea"),vertical:s.concat(o).concat(l),horizontal:n.concat(r).concat(a)}}(t.boxes),l=a.vertical,h=a.horizontal;Do(t.boxes,(t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()}));const c=l.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1),0)||1,d=Object.freeze({outerWidth:e,outerHeight:i,padding:o,availableWidth:n,availableHeight:r,vBoxMaxWidth:n/2/c,hBoxMaxHeight:r/2}),u=Object.assign({},o);sl(u,br(s));const p=Object.assign({maxPadding:u,w:n,h:r,x:o.left,y:o.top},o),f=el(l.concat(h),d);rl(a.fullSize,p,d,f),rl(l,p,d,f),rl(h,p,d,f)&&rl(l,p,d,f),function(t){const e=t.maxPadding;function i(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(p),ll(a.leftAndTop,p,d,f),p.x+=p.w,p.y+=p.h,ll(a.rightAndBottom,p,d,f),t.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},Do(a.chartArea,(e=>{const i=e.box;Object.assign(i,t.chartArea),i.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})}))}};class cl{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class dl extends cl{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ul="$chartjs",pl={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},fl=t=>null===t||""===t;const gl=!!Zr&&{passive:!0};function bl(t,e,i){t.canvas.removeEventListener(e,i,gl)}function ml(t,e){for(const i of t)if(i===e||i.contains(e))return!0}function vl(t,e,i){const s=t.canvas,o=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||ml(i.addedNodes,s),e=e&&!ml(i.removedNodes,s);e&&i()}));return o.observe(document,{childList:!0,subtree:!0}),o}function yl(t,e,i){const s=t.canvas,o=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||ml(i.removedNodes,s),e=e&&!ml(i.addedNodes,s);e&&i()}));return o.observe(document,{childList:!0,subtree:!0}),o}const _l=new Map;let xl=0;function wl(){const t=window.devicePixelRatio;t!==xl&&(xl=t,_l.forEach(((e,i)=>{i.currentDevicePixelRatio!==t&&e()})))}function kl(t,e,i){const s=t.canvas,o=s&&Hr(s);if(!o)return;const n=Mn(((t,e)=>{const s=o.clientWidth;i(t,e),s<o.clientWidth&&i()}),window),r=new ResizeObserver((t=>{const e=t[0],i=e.contentRect.width,s=e.contentRect.height;0===i&&0===s||n(i,s)}));return r.observe(o),function(t,e){_l.size||window.addEventListener("resize",wl),_l.set(t,e)}(t,n),r}function Ml(t,e,i){i&&i.disconnect(),"resize"===e&&function(t){_l.delete(t),_l.size||window.removeEventListener("resize",wl)}(t)}function Al(t,e,i){const s=t.canvas,o=Mn((e=>{null!==t.ctx&&i(function(t,e){const i=pl[t.type]||t.type,{x:s,y:o}=Yr(t,e);return{type:i,chart:e,native:t,x:void 0!==s?s:null,y:void 0!==o?o:null}}(e,t))}),t);return function(t,e,i){t.addEventListener(e,i,gl)}(s,e,o),o}class Sl extends cl{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){const i=t.style,s=t.getAttribute("height"),o=t.getAttribute("width");if(t[ul]={initial:{height:s,width:o,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",fl(o)){const e=Jr(t,"width");void 0!==e&&(t.width=e)}if(fl(s))if(""===t.style.height)t.height=t.width/(e||2);else{const e=Jr(t,"height");void 0!==e&&(t.height=e)}}(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[ul])return!1;const i=e[ul].initial;["height","width"].forEach((t=>{const s=i[t];Mo(s)?e.removeAttribute(t):e.setAttribute(t,s)}));const s=i.style||{};return Object.keys(s).forEach((t=>{e.style[t]=s[t]})),e.width=e.width,delete e[ul],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:vl,detach:yl,resize:kl}[e]||Al;s[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:Ml,detach:Ml,resize:Ml}[e]||bl)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return Kr(t,e,i,s)}isAttached(t){const e=Hr(t);return!(!e||!e.isConnected)}}class $l{static defaults={};static defaultRoutes=void 0;active=!1;tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return nn(this.x)&&nn(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach((t=>{s[t]=i[t]&&i[t].active()?i[t]._to:this[t]})),s}}function Cl(t,e){const i=t.options.ticks,s=function(t){const e=t.options.offset,i=t._tickSize(),s=t._length/i+(e?0:1),o=t._maxLength/i;return Math.floor(Math.min(s,o))}(t),o=Math.min(i.maxTicksLimit||s,s),n=i.major.enabled?function(t){const e=[];let i,s;for(i=0,s=t.length;i<s;i++)t[i].major&&e.push(i);return e}(e):[],r=n.length,a=n[0],l=n[r-1],h=[];if(r>o)return function(t,e,i,s){let o,n=0,r=i[0];for(s=Math.ceil(s),o=0;o<t.length;o++)o===r&&(e.push(t[o]),n++,r=i[n*s])}(e,h,n,r/o),h;const c=function(t,e,i){const s=function(t){const e=t.length;let i,s;if(e<2)return!1;for(s=t[0],i=1;i<e;++i)if(t[i]-t[i-1]!==s)return!1;return s}(t),o=e.length/i;if(!s)return Math.max(o,1);const n=function(t){const e=[],i=Math.sqrt(t);let s;for(s=1;s<i;s++)t%s==0&&(e.push(s),e.push(t/s));return i===(0|i)&&e.push(i),e.sort(((t,e)=>t-e)).pop(),e}(s);for(let t=0,e=n.length-1;t<e;t++){const e=n[t];if(e>o)return e}return Math.max(o,1)}(n,e,o);if(r>0){let t,i;const s=r>1?Math.round((l-a)/(r-1)):null;for(El(e,h,c,Mo(s)?0:a-s,a),t=0,i=r-1;t<i;t++)El(e,h,c,n[t],n[t+1]);return El(e,h,c,l,Mo(s)?e.length:l+s),h}return El(e,h,c),h}function El(t,e,i,s,o){const n=Eo(s,0),r=Math.min(Eo(o,t.length),t.length);let a,l,h,c=0;for(i=Math.ceil(i),o&&(a=o-s,i=a/Math.floor(a/i)),h=n;h<0;)c++,h=Math.round(n+c*i);for(l=Math.max(n,0);l<r;l++)l===h&&(e.push(t[l]),c++,h=Math.round(n+c*i))}const Pl=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i;function Ol(t,e){const i=[],s=t.length/e,o=t.length;let n=0;for(;n<o;n+=s)i.push(t[Math.floor(n)]);return i}function Dl(t,e,i){const s=t.ticks.length,o=Math.min(e,s-1),n=t._startPixel,r=t._endPixel,a=1e-6;let l,h=t.getPixelForTick(o);if(!(i&&(l=1===s?Math.max(h-n,r-h):0===e?(t.getPixelForTick(1)-h)/2:(h-t.getPixelForTick(o-1))/2,h+=o<e?l:-l,h<n-a||h>r+a)))return h}function Tl(t){return t.drawTicks?t.tickLength:0}function Ll(t,e){if(!t.display)return 0;const i=mr(t.font,e),s=br(t.padding);return(Ao(t.text)?t.text.length:1)*i.lineHeight+s.height}function Rl(t,e,i){let s=An(t);return(i&&"right"!==e||!i&&"right"===e)&&(s=(t=>"left"===t?"right":"right"===t?"left":t)(s)),s}class zl extends $l{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=Co(t,Number.POSITIVE_INFINITY),e=Co(e,Number.NEGATIVE_INFINITY),i=Co(i,Number.POSITIVE_INFINITY),s=Co(s,Number.NEGATIVE_INFINITY),{min:Co(t,i),max:Co(e,s),minDefined:$o(t),maxDefined:$o(e)}}getMinMax(t){let e,{min:i,max:s,minDefined:o,maxDefined:n}=this.getUserBounds();if(o&&n)return{min:i,max:s};const r=this.getMatchingVisibleMetas();for(let a=0,l=r.length;a<l;++a)e=r[a].controller.getMinMax(this,t),o||(i=Math.min(i,e.min)),n||(s=Math.max(s,e.max));return i=n&&i>s?s:i,s=o&&i>s?i:s,{min:Co(i,Co(s,i)),max:Co(s,Co(i,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Oo(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:o,ticks:n}=this.options,r=n.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=function(t,e,i){const{min:s,max:o}=t,n=Po(e,(o-s)/2),r=(t,e)=>i&&0===t?0:t+e;return{min:r(s,-Math.abs(n)),max:r(o,n)}}(this,o,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const a=r<this.ticks.length;this._convertTicksToLabels(a?Ol(this.ticks,r):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),n.display&&(n.autoSkip||"auto"===n.source)&&(this.ticks=Cl(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),a&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Oo(this.options.afterUpdate,[this])}beforeSetDimensions(){Oo(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Oo(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Oo(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Oo(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,o;for(i=0,s=t.length;i<s;i++)o=t[i],o.label=Oo(e.callback,[o.value,i,t],this)}afterTickToLabelConversion(){Oo(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Oo(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=this.ticks.length,s=e.minRotation||0,o=e.maxRotation;let n,r,a,l=s;if(!this._isVisible()||!e.display||s>=o||i<=1||!this.isHorizontal())return void(this.labelRotation=s);const h=this._getLabelSizes(),c=h.widest.width,d=h.highest.height,u=gn(this.chart.width-c,0,this.maxWidth);n=t.offset?this.maxWidth/i:u/(i-1),c+6>n&&(n=u/(i-(t.offset?.5:1)),r=this.maxHeight-Tl(t.grid)-e.padding-Ll(t.title,this.chart.options.font),a=Math.sqrt(c*c+d*d),l=ln(Math.min(Math.asin(gn((h.highest.height+6)/n,-1,1)),Math.asin(gn(r/a,-1,1))-Math.asin(gn(d/a,-1,1)))),l=Math.max(s,Math.min(o,l))),this.labelRotation=l}afterCalculateLabelRotation(){Oo(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Oo(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:o}}=this,n=this._isVisible(),r=this.isHorizontal();if(n){const n=Ll(s,e.options.font);if(r?(t.width=this.maxWidth,t.height=Tl(o)+n):(t.height=this.maxHeight,t.width=Tl(o)+n),i.display&&this.ticks.length){const{first:e,last:s,widest:o,highest:n}=this._getLabelSizes(),a=2*i.padding,l=an(this.labelRotation),h=Math.cos(l),c=Math.sin(l);if(r){const e=i.mirror?0:c*o.width+h*n.height;t.height=Math.min(this.maxHeight,t.height+e+a)}else{const e=i.mirror?0:h*o.width+c*n.height;t.width=Math.min(this.maxWidth,t.width+e+a)}this._calculatePadding(e,s,c,h)}}this._handleMargins(),r?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:o,padding:n},position:r}=this.options,a=0!==this.labelRotation,l="top"!==r&&"x"===this.axis;if(this.isHorizontal()){const r=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let c=0,d=0;a?l?(c=s*t.width,d=i*e.height):(c=i*t.height,d=s*e.width):"start"===o?d=e.width:"end"===o?c=t.width:"inner"!==o&&(c=t.width/2,d=e.width/2),this.paddingLeft=Math.max((c-r+n)*this.width/(this.width-r),0),this.paddingRight=Math.max((d-h+n)*this.width/(this.width-h),0)}else{let i=e.height/2,s=t.height/2;"start"===o?(i=0,s=t.height):"end"===o&&(i=e.height,s=0),this.paddingTop=i+n,this.paddingBottom=s+n}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Oo(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)Mo(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=Ol(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length)}return t}_computeLabelSizes(t,e){const{ctx:i,_longestTextCache:s}=this,o=[],n=[];let r,a,l,h,c,d,u,p,f,g,b,m=0,v=0;for(r=0;r<e;++r){if(h=t[r].label,c=this._resolveTickFontOptions(r),i.font=d=c.string,u=s[d]=s[d]||{data:{},gc:[]},p=c.lineHeight,f=g=0,Mo(h)||Ao(h)){if(Ao(h))for(a=0,l=h.length;a<l;++a)b=h[a],Mo(b)||Ao(b)||(f=Xn(i,u.data,u.gc,f,b),g+=p)}else f=Xn(i,u.data,u.gc,f,h),g=p;o.push(f),n.push(g),m=Math.max(f,m),v=Math.max(g,v)}!function(t,e){Do(t,(t=>{const i=t.gc,s=i.length/2;let o;if(s>e){for(o=0;o<s;++o)delete t.data[i[o]];i.splice(0,s)}}))}(s,e);const y=o.indexOf(m),_=n.indexOf(v),x=t=>({width:o[t]||0,height:n[t]||0});return{first:x(0),last:x(e-1),widest:x(y),highest:x(_),widths:o,heights:n}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return gn(this._alignToPixels?Gn(this.chart,e,0):e,-32768,32767)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=function(t,e,i){return yr(t,{tick:i,index:e,type:"tick"})}(this.getContext(),t,i))}return this.$context||(this.$context=yr(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){const t=this.options.ticks,e=an(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),o=this._getLabelSizes(),n=t.autoSkipPadding||0,r=o?o.widest.width+n:0,a=o?o.highest.height+n:0;return this.isHorizontal()?a*i>r*s?r/i:a/s:a*s<r*i?a/i:r/s}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:o,position:n,border:r}=s,a=o.offset,l=this.isHorizontal(),h=this.ticks.length+(a?1:0),c=Tl(o),d=[],u=r.setContext(this.getContext()),p=u.display?u.width:0,f=p/2,g=function(t){return Gn(i,t,p)};let b,m,v,y,_,x,w,k,M,A,S,$;if("top"===n)b=g(this.bottom),x=this.bottom-c,k=b-f,A=g(t.top)+f,$=t.bottom;else if("bottom"===n)b=g(this.top),A=t.top,$=g(t.bottom)-f,x=b+f,k=this.top+c;else if("left"===n)b=g(this.right),_=this.right-c,w=b-f,M=g(t.left)+f,S=t.right;else if("right"===n)b=g(this.left),M=t.left,S=g(t.right)-f,_=b+f,w=this.left+c;else if("x"===e){if("center"===n)b=g((t.top+t.bottom)/2+.5);else if(So(n)){const t=Object.keys(n)[0],e=n[t];b=g(this.chart.scales[t].getPixelForValue(e))}A=t.top,$=t.bottom,x=b+f,k=x+c}else if("y"===e){if("center"===n)b=g((t.left+t.right)/2);else if(So(n)){const t=Object.keys(n)[0],e=n[t];b=g(this.chart.scales[t].getPixelForValue(e))}_=b-f,w=_-c,M=t.left,S=t.right}const C=Eo(s.ticks.maxTicksLimit,h),E=Math.max(1,Math.ceil(h/C));for(m=0;m<h;m+=E){const t=this.getContext(m),e=o.setContext(t),s=r.setContext(t),n=e.lineWidth,h=e.color,c=s.dash||[],u=s.dashOffset,p=e.tickWidth,f=e.tickColor,g=e.tickBorderDash||[],b=e.tickBorderDashOffset;v=Dl(this,m,a),void 0!==v&&(y=Gn(i,v,n),l?_=w=M=S=y:x=k=A=$=y,d.push({tx1:_,ty1:x,tx2:w,ty2:k,x1:M,y1:A,x2:S,y2:$,width:n,color:h,borderDash:c,borderDashOffset:u,tickWidth:p,tickColor:f,tickBorderDash:g,tickBorderDashOffset:b}))}return this._ticksLength=h,this._borderValue=b,d}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:o}=i,n=this.isHorizontal(),r=this.ticks,{align:a,crossAlign:l,padding:h,mirror:c}=o,d=Tl(i.grid),u=d+h,p=c?-h:u,f=-an(this.labelRotation),g=[];let b,m,v,y,_,x,w,k,M,A,S,$,C="middle";if("top"===s)x=this.bottom-p,w=this._getXAxisLabelAlignment();else if("bottom"===s)x=this.top+p,w=this._getXAxisLabelAlignment();else if("left"===s){const t=this._getYAxisLabelAlignment(d);w=t.textAlign,_=t.x}else if("right"===s){const t=this._getYAxisLabelAlignment(d);w=t.textAlign,_=t.x}else if("x"===e){if("center"===s)x=(t.top+t.bottom)/2+u;else if(So(s)){const t=Object.keys(s)[0],e=s[t];x=this.chart.scales[t].getPixelForValue(e)+u}w=this._getXAxisLabelAlignment()}else if("y"===e){if("center"===s)_=(t.left+t.right)/2-u;else if(So(s)){const t=Object.keys(s)[0],e=s[t];_=this.chart.scales[t].getPixelForValue(e)}w=this._getYAxisLabelAlignment(d).textAlign}"y"===e&&("start"===a?C="top":"end"===a&&(C="bottom"));const E=this._getLabelSizes();for(b=0,m=r.length;b<m;++b){v=r[b],y=v.label;const t=o.setContext(this.getContext(b));k=this.getPixelForTick(b)+o.labelOffset,M=this._resolveTickFontOptions(b),A=M.lineHeight,S=Ao(y)?y.length:1;const e=S/2,i=t.color,a=t.textStrokeColor,h=t.textStrokeWidth;let d,u=w;if(n?(_=k,"inner"===w&&(u=b===m-1?this.options.reverse?"left":"right":0===b?this.options.reverse?"right":"left":"center"),$="top"===s?"near"===l||0!==f?-S*A+A/2:"center"===l?-E.highest.height/2-e*A+A:-E.highest.height+A/2:"near"===l||0!==f?A/2:"center"===l?E.highest.height/2-e*A:E.highest.height-S*A,c&&($*=-1),0===f||t.showLabelBackdrop||(_+=A/2*Math.sin(f))):(x=k,$=(1-S)*A/2),t.showLabelBackdrop){const e=br(t.backdropPadding),i=E.heights[b],s=E.widths[b];let o=$-e.top,n=0-e.left;switch(C){case"middle":o-=i/2;break;case"bottom":o-=i}switch(w){case"center":n-=s/2;break;case"right":n-=s}d={left:n,top:o,width:s+e.width,height:i+e.height,color:t.backdropColor}}g.push({label:y,font:M,textOffset:$,options:{rotation:f,color:i,strokeColor:a,strokeWidth:h,textAlign:u,textBaseline:C,translation:[_,x],backdrop:d}})}return g}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-an(this.labelRotation))return"top"===t?"left":"right";let i="center";return"start"===e.align?i="left":"end"===e.align?i="right":"inner"===e.align&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:o}}=this.options,n=t+o,r=this._getLabelSizes().widest.width;let a,l;return"left"===e?s?(l=this.right+o,"near"===i?a="left":"center"===i?(a="center",l+=r/2):(a="right",l+=r)):(l=this.right-n,"near"===i?a="right":"center"===i?(a="center",l-=r/2):(a="left",l=this.left)):"right"===e?s?(l=this.left+o,"near"===i?a="right":"center"===i?(a="center",l-=r/2):(a="left",l-=r)):(l=this.left+n,"near"===i?a="left":"center"===i?(a="center",l+=r/2):(a="right",l=this.right)):a="right",{textAlign:a,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:o,height:n}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,o,n),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex((e=>e.value===t));if(i>=0){return e.setContext(this.getContext(i)).lineWidth}return 0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,n;const r=(t,e,s)=>{s.width&&s.color&&(i.save(),i.lineWidth=s.width,i.strokeStyle=s.color,i.setLineDash(s.borderDash||[]),i.lineDashOffset=s.borderDashOffset,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.restore())};if(e.display)for(o=0,n=s.length;o<n;++o){const t=s[o];e.drawOnChartArea&&r({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&r({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,o=i.setContext(this.getContext()),n=i.display?o.width:0;if(!n)return;const r=s.setContext(this.getContext(0)).lineWidth,a=this._borderValue;let l,h,c,d;this.isHorizontal()?(l=Gn(t,this.left,n)-n/2,h=Gn(t,this.right,r)+r/2,c=d=a):(c=Gn(t,this.top,n)-n/2,d=Gn(t,this.bottom,r)+r/2,l=h=a),e.save(),e.lineWidth=o.width,e.strokeStyle=o.color,e.beginPath(),e.moveTo(l,c),e.lineTo(h,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const e=this.ctx,i=this._computeLabelArea();i&&er(e,i);const s=this.getLabelItems(t);for(const t of s){const i=t.options,s=t.font;nr(e,t.label,0,t.textOffset,s,i)}i&&ir(e)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const o=mr(i.font),n=br(i.padding),r=i.align;let a=o.lineHeight/2;"bottom"===e||"center"===e||So(e)?(a+=n.bottom,Ao(i.text)&&(a+=o.lineHeight*(i.text.length-1))):a+=n.top;const{titleX:l,titleY:h,maxWidth:c,rotation:d}=function(t,e,i,s){const{top:o,left:n,bottom:r,right:a,chart:l}=t,{chartArea:h,scales:c}=l;let d,u,p,f=0;const g=r-o,b=a-n;if(t.isHorizontal()){if(u=Sn(s,n,a),So(i)){const t=Object.keys(i)[0],s=i[t];p=c[t].getPixelForValue(s)+g-e}else p="center"===i?(h.bottom+h.top)/2+g-e:Pl(t,i,e);d=a-n}else{if(So(i)){const t=Object.keys(i)[0],s=i[t];u=c[t].getPixelForValue(s)-b+e}else u="center"===i?(h.left+h.right)/2-b+e:Pl(t,i,e);p=Sn(s,r,o),f="left"===i?-Zo:Zo}return{titleX:u,titleY:p,maxWidth:d,rotation:f}}(this,a,e,r);nr(t,i.text,0,0,o,{color:i.color,maxWidth:c,rotation:d,textAlign:Rl(r,e,s),textBaseline:"middle",translation:[l,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=Eo(t.grid&&t.grid.z,-1),s=Eo(t.border&&t.border.z,0);return this._isVisible()&&this.draw===zl.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let o,n;for(o=0,n=e.length;o<n;++o){const n=e[o];n[i]!==this.id||t&&n.type!==t||s.push(n)}return s}_resolveTickFontOptions(t){return mr(this.options.ticks.setContext(this.getContext(t)).font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Il{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;(function(t){return"id"in t&&"defaults"in t})(e)&&(i=this.register(e));const s=this.items,o=t.id,n=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in s||(s[o]=t,function(t,e,i){const s=Io(Object.create(null),[i?Yn.get(i):{},Yn.get(e),t.defaults]);Yn.set(e,s),t.defaultRoutes&&function(t,e){Object.keys(e).forEach((i=>{const s=i.split("."),o=s.pop(),n=[t].concat(s).join("."),r=e[i].split("."),a=r.pop(),l=r.join(".");Yn.route(n,o,l,a)}))}(e,t.defaultRoutes);t.descriptors&&Yn.describe(e,t.descriptors)}(t,n,i),this.override&&Yn.override(t.id,t.overrides)),n}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in Yn[s]&&(delete Yn[s][i],this.override&&delete Hn[i])}}class Fl{constructor(){this.controllers=new Il(Ea,"datasets",!0),this.elements=new Il($l,"elements"),this.plugins=new Il(Object,"plugins"),this.scales=new Il(zl,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach((e=>{const s=i||this._getRegistryForType(e);i||s.isForType(e)||s===this.plugins&&e.id?this._exec(t,s,e):Do(e,(e=>{const s=i||this._getRegistryForType(e);this._exec(t,s,e)}))}))}_exec(t,e,i){const s=Ho(t);Oo(i["before"+s],[],i),e[t](i),Oo(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(void 0===s)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var Vl=new Fl;class Bl{constructor(){this._init=[]}notify(t,e,i,s){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const o=s?this._descriptors(t).filter(s):this._descriptors(t),n=this._notify(o,t,e,i);return"afterDestroy"===e&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall")),n}_notify(t,e,i,s){s=s||{};for(const o of t){const t=o.plugin;if(!1===Oo(t[i],[e,s,o.options],t)&&s.cancelable)return!1}return!0}invalidate(){Mo(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=Eo(i.options&&i.options.plugins,{}),o=function(t){const e={},i=[],s=Object.keys(Vl.plugins.items);for(let t=0;t<s.length;t++)i.push(Vl.getPlugin(s[t]));const o=t.plugins||[];for(let t=0;t<o.length;t++){const s=o[t];-1===i.indexOf(s)&&(i.push(s),e[s.id]=!0)}return{plugins:i,localIds:e}}(i);return!1!==s||e?function(t,{plugins:e,localIds:i},s,o){const n=[],r=t.getContext();for(const a of e){const e=a.id,l=Nl(s[e],o);null!==l&&n.push({plugin:a,options:Hl(t.config,{plugin:a,local:i[e]},l,r)})}return n}(t,o,s,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function Nl(t,e){return e||!1!==t?!0===t?{}:t:null}function Hl(t,{plugin:e,local:i},s,o){const n=t.pluginScopeKeys(e),r=t.getOptionScopes(s,n);return i&&e.defaults&&r.push(e.defaults),t.createResolver(r,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function jl(t,e){const i=Yn.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||i.indexAxis||"x"}function Ul(t,e){if("x"===t||"y"===t||"r"===t)return t;var i;if(t=e.axis||("top"===(i=e.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.length>1&&Ul(t[0].toLowerCase(),e))return t;throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`)}function Wl(t){const e=t.options||(t.options={});e.plugins=Eo(e.plugins,{}),e.scales=function(t,e){const i=Hn[t.type]||{scales:{}},s=e.scales||{},o=jl(t.type,e),n=Object.create(null);return Object.keys(s).forEach((t=>{const e=s[t];if(!So(e))return;if(e._proxy)return;const r=Ul(t,e),a=function(t,e){return t===e?"_index_":"_value_"}(r,o),l=i.scales||{};n[t]=Fo(Object.create(null),[{axis:r},e,l[r],l[a]])})),t.data.datasets.forEach((i=>{const o=i.type||t.type,r=i.indexAxis||jl(o,e),a=(Hn[o]||{}).scales||{};Object.keys(a).forEach((t=>{const e=function(t,e){let i=t;return"_index_"===t?i=e:"_value_"===t&&(i="x"===e?"y":"x"),i}(t,r),o=i[e+"AxisID"]||e;n[o]=n[o]||Object.create(null),Fo(n[o],[{axis:e},s[o],a[t]])}))})),Object.keys(n).forEach((t=>{const e=n[t];Fo(e,[Yn.scales[e.type],Yn.scale])})),n}(t,e)}function ql(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const Yl=new Map,Xl=new Set;function Kl(t,e){let i=Yl.get(t);return i||(i=e(),Yl.set(t,i),Xl.add(i)),i}const Gl=(t,e,i)=>{const s=No(e,i);void 0!==s&&t.add(s)};class Zl{constructor(t){this._config=function(t){return(t=t||{}).data=ql(t.data),Wl(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=ql(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Wl(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Kl(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return Kl(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return Kl(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id;return Kl(`${this.type}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return s&&!e||(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:o}=this,n=this._cachedScopes(t,i),r=n.get(e);if(r)return r;const a=new Set;e.forEach((e=>{t&&(a.add(t),e.forEach((e=>Gl(a,t,e)))),e.forEach((t=>Gl(a,s,t))),e.forEach((t=>Gl(a,Hn[o]||{},t))),e.forEach((t=>Gl(a,Yn,t))),e.forEach((t=>Gl(a,jn,t)))}));const l=Array.from(a);return 0===l.length&&l.push(Object.create(null)),Xl.has(e)&&n.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Hn[e]||{},Yn.datasets[e]||{},{type:e},Yn,jn]}resolveNamedOptions(t,e,i,s=[""]){const o={$shared:!0},{resolver:n,subPrefixes:r}=Jl(this._resolverCache,t,s);let a=n;if(function(t,e){const{isScriptable:i,isIndexable:s}=wr(t);for(const o of e){const e=i(o),n=s(o),r=(n||e)&&t[o];if(e&&(Uo(r)||Ql(r))||n&&Ao(r))return!0}return!1}(n,e)){o.$shared=!1;a=xr(n,i=Uo(i)?i():i,this.createResolver(t,i,r))}for(const t of e)o[t]=a[t];return o}createResolver(t,e,i=[""],s){const{resolver:o}=Jl(this._resolverCache,t,i);return So(e)?xr(o,e,void 0,s):o}}function Jl(t,e,i){let s=t.get(e);s||(s=new Map,t.set(e,s));const o=i.join();let n=s.get(o);if(!n){n={resolver:_r(e,i),subPrefixes:i.filter((t=>!t.toLowerCase().includes("hover")))},s.set(o,n)}return n}const Ql=t=>So(t)&&Object.getOwnPropertyNames(t).reduce(((e,i)=>e||Uo(t[i])),!1);const th=["top","bottom","left","right","chartArea"];function eh(t,e){return"top"===t||"bottom"===t||-1===th.indexOf(t)&&"x"===e}function ih(t,e){return function(i,s){return i[t]===s[t]?i[e]-s[e]:i[t]-s[t]}}function sh(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),Oo(i&&i.onComplete,[t],e)}function oh(t){const e=t.chart,i=e.options.animation;Oo(i&&i.onProgress,[t],e)}function nh(t){return Nr()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const rh={},ah=t=>{const e=nh(t);return Object.values(rh).filter((t=>t.canvas===e)).pop()};function lh(t,e,i){const s=Object.keys(t);for(const o of s){const s=+o;if(s>=e){const n=t[o];delete t[o],(i>0||s>e)&&(t[s+i]=n)}}}let hh=class{static defaults=Yn;static instances=rh;static overrides=Hn;static registry=Vl;static version="4.1.1";static getChart=ah;static register(...t){Vl.add(...t),ch()}static unregister(...t){Vl.remove(...t),ch()}constructor(t,e){const i=this.config=new Zl(e),s=nh(t),o=ah(s);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const n=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||function(t){return!Nr()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?dl:Sl}(s)),this.platform.updateConfig(i);const r=this.platform.acquireContext(s,n.aspectRatio),a=r&&r.canvas,l=a&&a.height,h=a&&a.width;this.id=ko(),this.ctx=r,this.canvas=a,this.width=h,this.height=l,this._options=n,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Bl,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=function(t,e){let i;return function(...s){return e?(clearTimeout(i),i=setTimeout(t,e,s)):t.apply(this,s),e}}((t=>this.update(t)),n.resizeDelay||0),this._dataChanges=[],rh[this.id]=this,r&&a&&(pa.listen(this,"complete",sh),pa.listen(this,"progress",oh),this._initialize(),this.attached&&this.update())}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:o}=this;return Mo(t)?e&&o?o:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Vl}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Gr(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Zn(this.canvas,this.ctx),this}stop(){return pa.stop(this),this}resize(t,e){pa.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,o=i.maintainAspectRatio&&this.aspectRatio,n=this.platform.getMaximumSize(s,t,e,o),r=i.devicePixelRatio||this.platform.getDevicePixelRatio(),a=this.width?"resize":"attach";this.width=n.width,this.height=n.height,this._aspectRatio=this.aspectRatio,Gr(this,r,!0)&&(this.notifyPlugins("resize",{size:n}),Oo(i.onResize,[this,n],this),this.attached&&this._doResize(a)&&this.render())}ensureScalesHaveIDs(){Do(this.options.scales||{},((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce(((t,e)=>(t[e]=!1,t)),{});let o=[];e&&(o=o.concat(Object.keys(e).map((t=>{const i=e[t],s=Ul(t,i),o="r"===s,n="x"===s;return{options:i,dposition:o?"chartArea":n?"bottom":"left",dtype:o?"radialLinear":n?"category":"linear"}})))),Do(o,(e=>{const o=e.options,n=o.id,r=Ul(n,o),a=Eo(o.type,e.dtype);void 0!==o.position&&eh(o.position,r)===eh(e.dposition)||(o.position=e.dposition),s[n]=!0;let l=null;if(n in i&&i[n].type===a)l=i[n];else{l=new(Vl.getScale(a))({id:n,type:a,ctx:this.ctx,chart:this}),i[l.id]=l}l.init(o,t)})),Do(s,((t,e)=>{t||delete i[e]})),Do(i,(t=>{hl.configure(this,t,t.options),hl.addBox(this,t)}))}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort(((t,e)=>t.index-e.index)),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(ih("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach(((t,i)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(i)}))}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const s=e[i];let o=this.getDatasetMeta(i);const n=s.type||this.config.type;if(o.type&&o.type!==n&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=n,o.indexAxis=s.indexAxis||jl(n,this.options),o.order=s.order||0,o.index=i,o.label=""+s.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const e=Vl.getController(n),{datasetElementType:s,dataElementType:r}=Yn.datasets[n];Object.assign(e,{dataElementType:Vl.getElement(r),datasetElementType:s&&Vl.getElement(s)}),o.controller=new e(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){Do(this.data.datasets,((t,e)=>{this.getDatasetMeta(e).controller.reset()}),this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let n=0;for(let t=0,e=this.data.datasets.length;t<e;t++){const{controller:e}=this.getDatasetMeta(t),i=!s&&-1===o.indexOf(e);e.buildOrUpdateElements(i),n=Math.max(+e.getMaxOverflow(),n)}n=this._minPadding=i.layout.autoPadding?n:0,this._updateLayout(n),s||Do(o,(t=>{t.reset()})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(ih("z","_idx"));const{_active:r,_lastEvent:a}=this;a?this._eventHandler(a,!0):r.length&&this._updateHoverStyles(r,r,!0),this.render()}_updateScales(){Do(this.scales,(t=>{hl.removeBox(this,t)})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);Wo(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:o}of e){lh(t,s,"_removeElements"===i?-o:o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=e=>new Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),s=i(0);for(let t=1;t<e;t++)if(!Wo(s,i(t)))return;return Array.from(s).map((t=>t.split(","))).map((t=>({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;hl.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],Do(this.boxes,(t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))}),this),this._layers.forEach(((t,e)=>{t._idx=e})),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,Uo(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",s)&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(pa.has(this)?this.attached&&!pa.running(this)&&pa.start(this):(this.draw(),sh({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0)return;if(!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,o;for(s=0,o=e.length;s<o;++s){const o=e[s];t&&!o.visible||i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i=t._clip,s=!i.disabled,o=function(t){const{xScale:e,yScale:i}=t;if(e&&i)return{left:e.left,right:e.right,top:i.top,bottom:i.bottom}}(t)||this.chartArea,n={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",n)&&(s&&er(e,{left:!1===i.left?0:o.left-i.left,right:!1===i.right?this.width:o.right+i.right,top:!1===i.top?0:o.top-i.top,bottom:!1===i.bottom?this.height:o.bottom+i.bottom}),t.controller.draw(),s&&ir(e),n.cancelable=!1,this.notifyPlugins("afterDatasetDraw",n))}isPointInArea(t){return tr(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const o=Ga.modes[e];return"function"==typeof o?o(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter((t=>t&&t._dataset===e)).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=yr(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){this.getDatasetMeta(t).hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",o=this.getDatasetMeta(t),n=o.controller._resolveAnimations(void 0,s);jo(e)?(o.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),n.update(o,{visible:i}),this.update((e=>e.datasetIndex===t?s:void 0)))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),pa.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Zn(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete rh[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(i,s)=>{e.addEventListener(this,i,s),t[i]=s},s=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};Do(this.options.events,(t=>i(t,s)))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(i,s)=>{e.addEventListener(this,i,s),t[i]=s},s=(i,s)=>{t[i]&&(e.removeEventListener(this,i,s),delete t[i])},o=(t,e)=>{this.canvas&&this.resize(t,e)};let n;const r=()=>{s("attach",r),this.attached=!0,this.resize(),i("resize",o),i("detach",n)};n=()=>{this.attached=!1,s("resize",o),this._stop(),this._resize(0,0),i("attach",r)},e.isAttached(this.canvas)?r():n()}unbindEvents(){Do(this._listeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._listeners={},Do(this._responsiveListeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let o,n,r,a;for("dataset"===e&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+s+"DatasetHoverStyle"]()),r=0,a=t.length;r<a;++r){n=t[r];const e=n&&this.getDatasetMeta(n.datasetIndex).controller;e&&e[s+"HoverStyle"](n.element,n.datasetIndex,n.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map((({datasetIndex:t,index:e})=>{const i=this.getDatasetMeta(t);if(!i)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}));!To(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return 1===this._plugins._cache.filter((e=>e.plugin.id===t)).length}_updateHoverStyles(t,e,i){const s=this.options.hover,o=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),n=o(e,t),r=i?t:o(t,e);n.length&&this.updateHoverStyle(n,s.mode,!1),r.length&&s.mode&&this.updateHoverStyle(r,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,s))return;const o=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(o||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:o}=this,n=e,r=this._getActiveElements(t,s,i,n),a=function(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}(t),l=function(t,e,i,s){return i&&"mouseout"!==t.type?s?e:t:null}(t,this._lastEvent,i,a);i&&(this._lastEvent=null,Oo(o.onHover,[t,r,this],this),a&&Oo(o.onClick,[t,r,this],this));const h=!To(r,s);return(h||e)&&(this._active=r,this._updateHoverStyles(r,s,e)),this._lastEvent=l,h}_getActiveElements(t,e,i,s){if("mouseout"===t.type)return[];if(!i)return e;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,s)}};function ch(){return Do(hh.instances,(t=>t._plugins.invalidate()))}function dh(t,e,i,s){const o=pr(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]);const n=(i-e)/2,r=Math.min(n,s*e/2),a=t=>{const e=(i-Math.min(n,t))*s/2;return gn(t,0,Math.min(n,e))};return{outerStart:a(o.outerStart),outerEnd:a(o.outerEnd),innerStart:gn(o.innerStart,0,r),innerEnd:gn(o.innerEnd,0,r)}}function uh(t,e,i,s){return{x:i+t*Math.cos(e),y:s+t*Math.sin(e)}}function ph(t,e,i,s,o,n){const{x:r,y:a,startAngle:l,pixelMargin:h,innerRadius:c}=e,d=Math.max(e.outerRadius+s+i-h,0),u=c>0?c+s+i+h:0;let p=0;const f=o-l;if(s){const t=((c>0?c-s:0)+(d>0?d-s:0))/2;p=(f-(0!==t?f*t/(t+s):f))/2}const g=(f-Math.max(.001,f*d-i/qo)/d)/2,b=l+g+p,m=o-g-p,{outerStart:v,outerEnd:y,innerStart:_,innerEnd:x}=dh(e,u,d,m-b),w=d-v,k=d-y,M=b+v/w,A=m-y/k,S=u+_,$=u+x,C=b+_/S,E=m-x/$;if(t.beginPath(),n){const e=(M+A)/2;if(t.arc(r,a,d,M,e),t.arc(r,a,d,e,A),y>0){const e=uh(k,A,r,a);t.arc(e.x,e.y,y,A,m+Zo)}const i=uh($,m,r,a);if(t.lineTo(i.x,i.y),x>0){const e=uh($,E,r,a);t.arc(e.x,e.y,x,m+Zo,E+Math.PI)}const s=(m-x/u+(b+_/u))/2;if(t.arc(r,a,u,m-x/u,s,!0),t.arc(r,a,u,s,b+_/u,!0),_>0){const e=uh(S,C,r,a);t.arc(e.x,e.y,_,C+Math.PI,b-Zo)}const o=uh(w,b,r,a);if(t.lineTo(o.x,o.y),v>0){const e=uh(w,M,r,a);t.arc(e.x,e.y,v,b-Zo,M)}}else{t.moveTo(r,a);const e=Math.cos(M)*d+r,i=Math.sin(M)*d+a;t.lineTo(e,i);const s=Math.cos(A)*d+r,o=Math.sin(A)*d+a;t.lineTo(s,o)}t.closePath()}function fh(t,e,i,s,o){const{fullCircles:n,startAngle:r,circumference:a,options:l}=e,{borderWidth:h,borderJoinStyle:c}=l,d="inner"===l.borderAlign;if(!h)return;d?(t.lineWidth=2*h,t.lineJoin=c||"round"):(t.lineWidth=h,t.lineJoin=c||"bevel");let u=e.endAngle;if(n){ph(t,e,i,s,u,o);for(let e=0;e<n;++e)t.stroke();isNaN(a)||(u=r+(a%Yo||Yo))}d&&function(t,e,i){const{startAngle:s,pixelMargin:o,x:n,y:r,outerRadius:a,innerRadius:l}=e;let h=o/a;t.beginPath(),t.arc(n,r,a,s-h,i+h),l>o?(h=o/l,t.arc(n,r,l,i+h,s-h,!0)):t.arc(n,r,o,i+Zo,s-Zo),t.closePath(),t.clip()}(t,e,u),n||(ph(t,e,i,s,u,o),t.stroke())}function gh(t,e,i=e){t.lineCap=Eo(i.borderCapStyle,e.borderCapStyle),t.setLineDash(Eo(i.borderDash,e.borderDash)),t.lineDashOffset=Eo(i.borderDashOffset,e.borderDashOffset),t.lineJoin=Eo(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=Eo(i.borderWidth,e.borderWidth),t.strokeStyle=Eo(i.borderColor,e.borderColor)}function bh(t,e,i){t.lineTo(i.x,i.y)}function mh(t,e,i={}){const s=t.length,{start:o=0,end:n=s-1}=i,{start:r,end:a}=e,l=Math.max(o,r),h=Math.min(n,a),c=o<r&&n<r||o>a&&n>a;return{count:s,start:l,loop:e.loop,ilen:h<l&&!c?s+h-l:h-l}}function vh(t,e,i,s){const{points:o,options:n}=e,{count:r,start:a,loop:l,ilen:h}=mh(o,i,s),c=function(t){return t.stepped?sr:t.tension||"monotone"===t.cubicInterpolationMode?or:bh}(n);let d,u,p,{move:f=!0,reverse:g}=s||{};for(d=0;d<=h;++d)u=o[(a+(g?h-d:d))%r],u.skip||(f?(t.moveTo(u.x,u.y),f=!1):c(t,p,u,g,n.stepped),p=u);return l&&(u=o[(a+(g?h:0))%r],c(t,p,u,g,n.stepped)),!!l}function yh(t,e,i,s){const o=e.points,{count:n,start:r,ilen:a}=mh(o,i,s),{move:l=!0,reverse:h}=s||{};let c,d,u,p,f,g,b=0,m=0;const v=t=>(r+(h?a-t:t))%n,y=()=>{p!==f&&(t.lineTo(b,f),t.lineTo(b,p),t.lineTo(b,g))};for(l&&(d=o[v(0)],t.moveTo(d.x,d.y)),c=0;c<=a;++c){if(d=o[v(c)],d.skip)continue;const e=d.x,i=d.y,s=0|e;s===u?(i<p?p=i:i>f&&(f=i),b=(m*b+e)/++m):(y(),t.lineTo(e,i),u=s,m=0,p=f=i),g=i}y()}function _h(t){const e=t.options,i=e.borderDash&&e.borderDash.length;return!(t._decimated||t._loop||e.tension||"monotone"===e.cubicInterpolationMode||e.stepped||i)?yh:vh}const xh="function"==typeof Path2D;function wh(t,e,i,s){xh&&!e.options.segment?function(t,e,i,s){let o=e._path;o||(o=e._path=new Path2D,e.path(o,i,s)&&o.closePath()),gh(t,e.options),t.stroke(o)}(t,e,i,s):function(t,e,i,s){const{segments:o,options:n}=e,r=_h(e);for(const a of o)gh(t,n,a.style),t.beginPath(),r(t,e,a,{start:i,end:i+s-1})&&t.closePath(),t.stroke()}(t,e,i,s)}class kh extends $l{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;Br(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=function(t,e){const i=t.points,s=t.options.spanGaps,o=i.length;if(!o)return[];const n=!!t._loop,{start:r,end:a}=function(t,e,i,s){let o=0,n=e-1;if(i&&!s)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,i&&(n+=o);n>o&&t[n%e].skip;)n--;return n%=e,{start:o,end:n}}(i,o,n,s);return ha(t,!0===s?[{start:r,end:a,loop:n}]:function(t,e,i,s){const o=t.length,n=[];let r,a=e,l=t[e];for(r=e+1;r<=i;++r){const i=t[r%o];i.skip||i.stop?l.skip||(s=!1,n.push({start:e%o,end:(r-1)%o,loop:s}),e=a=i.stop?r:null):(a=r,l.skip&&(e=r)),l=i}return null!==a&&n.push({start:e%o,end:a%o,loop:s}),n}(i,r,a<r?a+o:a,!!t._fullLoop&&0===r&&a===o-1),i,e)}(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],o=this.points,n=la(this,{property:e,start:s,end:s});if(!n.length)return;const r=[],a=function(t){return t.stepped?ta:t.tension||"monotone"===t.cubicInterpolationMode?ea:Qr}(i);let l,h;for(l=0,h=n.length;l<h;++l){const{start:h,end:c}=n[l],d=o[h],u=o[c];if(d===u){r.push(d);continue}const p=a(d,u,Math.abs((s-d[e])/(u[e]-d[e])),i.stepped);p[e]=t[e],r.push(p)}return 1===r.length?r[0]:r}pathSegment(t,e,i){return _h(this)(t,this,e,i)}path(t,e,i){const s=this.segments,o=_h(this);let n=this._loop;e=e||0,i=i||this.points.length-e;for(const r of s)n&=o(t,this,r,{start:e,end:e+i-1});return!!n}draw(t,e,i,s){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),wh(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Mh(t,e,i,s){const o=t.options,{[i]:n}=t.getProps([i],s);return Math.abs(e-n)<o.radius+o.hitRadius}function Ah(t,e){const{x:i,y:s,base:o,width:n,height:r}=t.getProps(["x","y","base","width","height"],e);let a,l,h,c,d;return t.horizontal?(d=r/2,a=Math.min(i,o),l=Math.max(i,o),h=s-d,c=s+d):(d=n/2,a=i-d,l=i+d,h=Math.min(s,o),c=Math.max(s,o)),{left:a,top:h,right:l,bottom:c}}function Sh(t,e,i,s){return t?0:gn(e,i,s)}function $h(t){const e=Ah(t),i=e.right-e.left,s=e.bottom-e.top,o=function(t,e,i){const s=t.options.borderWidth,o=t.borderSkipped,n=fr(s);return{t:Sh(o.top,n.top,0,i),r:Sh(o.right,n.right,0,e),b:Sh(o.bottom,n.bottom,0,i),l:Sh(o.left,n.left,0,e)}}(t,i/2,s/2),n=function(t,e,i){const{enableBorderRadius:s}=t.getProps(["enableBorderRadius"]),o=t.options.borderRadius,n=gr(o),r=Math.min(e,i),a=t.borderSkipped,l=s||So(o);return{topLeft:Sh(!l||a.top||a.left,n.topLeft,0,r),topRight:Sh(!l||a.top||a.right,n.topRight,0,r),bottomLeft:Sh(!l||a.bottom||a.left,n.bottomLeft,0,r),bottomRight:Sh(!l||a.bottom||a.right,n.bottomRight,0,r)}}(t,i/2,s/2);return{outer:{x:e.left,y:e.top,w:i,h:s,radius:n},inner:{x:e.left+o.l,y:e.top+o.t,w:i-o.l-o.r,h:s-o.t-o.b,radius:{topLeft:Math.max(0,n.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,n.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,n.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,n.bottomRight-Math.max(o.b,o.r))}}}}function Ch(t,e,i,s){const o=null===e,n=null===i,r=t&&!(o&&n)&&Ah(t,s);return r&&(o||bn(e,r.left,r.right))&&(n||bn(i,r.top,r.bottom))}function Eh(t,e){t.rect(e.x,e.y,e.w,e.h)}function Ph(t,e,i={}){const s=t.x!==i.x?-e:0,o=t.y!==i.y?-e:0,n=(t.x+t.w!==i.x+i.w?e:0)-s,r=(t.y+t.h!==i.y+i.h?e:0)-o;return{x:t.x+s,y:t.y+o,w:t.w+n,h:t.h+r,radius:t.radius}}var Oh=Object.freeze({__proto__:null,ArcElement:class extends $l{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0};static defaultRoutes={backgroundColor:"backgroundColor"};constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){const s=this.getProps(["x","y"],i),{angle:o,distance:n}=cn(s,{x:t,y:e}),{startAngle:r,endAngle:a,innerRadius:l,outerRadius:h,circumference:c}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),d=this.options.spacing/2,u=Eo(c,a-r)>=Yo||fn(o,r,a),p=bn(n,l+d,h+d);return u&&p}getCenterPoint(t){const{x:e,y:i,startAngle:s,endAngle:o,innerRadius:n,outerRadius:r}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:a,spacing:l}=this.options,h=(s+o)/2,c=(n+r+l+a)/2;return{x:e+Math.cos(h)*c,y:i+Math.sin(h)*c}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:i}=this,s=(e.offset||0)/4,o=(e.spacing||0)/2,n=e.circular;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>Yo?Math.floor(i/Yo):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();const r=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(r)*s,Math.sin(r)*s);const a=s*(1-Math.sin(Math.min(qo,i||0)));t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor,function(t,e,i,s,o){const{fullCircles:n,startAngle:r,circumference:a}=e;let l=e.endAngle;if(n){ph(t,e,i,s,l,o);for(let e=0;e<n;++e)t.fill();isNaN(a)||(l=r+(a%Yo||Yo))}ph(t,e,i,s,l,o),t.fill()}(t,this,a,o,n),fh(t,this,a,o,n),t.restore()}},LineElement:kh,PointElement:class extends $l{static id="point";static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){const s=this.options,{x:o,y:n}=this.getProps(["x","y"],i);return Math.pow(t-o,2)+Math.pow(e-n,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(t,e){return Mh(this,t,"x",e)}inYRange(t,e){return Mh(this,t,"y",e)}getCenterPoint(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;e=Math.max(e,e&&t.hoverRadius||0);return 2*(e+(e&&t.borderWidth||0))}draw(t,e){const i=this.options;this.skip||i.radius<.1||!tr(this,e,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,Jn(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}},BarElement:class extends $l{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:o,outer:n}=$h(this),r=(a=n.radius).topLeft||a.topRight||a.bottomLeft||a.bottomRight?lr:Eh;var a;t.save(),n.w===o.w&&n.h===o.h||(t.beginPath(),r(t,Ph(n,e,o)),t.clip(),r(t,Ph(o,-e,n)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),r(t,Ph(o,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return Ch(this,t,e,i)}inXRange(t,e){return Ch(this,t,null,e)}inYRange(t,e){return Ch(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(e+s)/2:e,y:o?i:(i+s)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}});const Dh=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Th=Dh.map((t=>t.replace("rgb(","rgba(").replace(")",", 0.5)")));function Lh(t){return Dh[t%Dh.length]}function Rh(t){return Th[t%Th.length]}function zh(t){let e=0;return(i,s)=>{const o=t.getDatasetMeta(s).controller;o instanceof Fa?e=function(t,e){return t.backgroundColor=t.data.map((()=>Lh(e++))),e}(i,e):o instanceof Va?e=function(t,e){return t.backgroundColor=t.data.map((()=>Rh(e++))),e}(i,e):o&&(e=function(t,e){return t.borderColor=Lh(e),t.backgroundColor=Rh(e),++e}(i,e))}}function Ih(t){let e;for(e in t)if(t[e].borderColor||t[e].backgroundColor)return!0;return!1}var Fh={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(t,e,i){if(!i.enabled)return;const{options:{elements:s},data:{datasets:o}}=t.config;if(!i.forceOverride&&(Ih(o)||s&&Ih(s)))return;const n=zh(t);o.forEach(n)}};function Vh(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{value:e})}}function Bh(t){t.data.datasets.forEach((t=>{Vh(t)}))}var Nh={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled)return void Bh(t);const s=t.width;t.data.datasets.forEach(((e,o)=>{const{_data:n,indexAxis:r}=e,a=t.getDatasetMeta(o),l=n||e.data;if("y"===vr([r,t.options.indexAxis]))return;if(!a.controller.supportsDecimation)return;const h=t.scales[a.xAxisID];if("linear"!==h.type&&"time"!==h.type)return;if(t.options.parsing)return;let{start:c,count:d}=function(t,e){const i=e.length;let s,o=0;const{iScale:n}=t,{min:r,max:a,minDefined:l,maxDefined:h}=n.getUserBounds();return l&&(o=gn(vn(e,n.axis,r).lo,0,i-1)),s=h?gn(vn(e,n.axis,a).hi+1,o,i)-o:i-o,{start:o,count:s}}(a,l);if(d<=(i.threshold||4*s))return void Vh(e);let u;switch(Mo(n)&&(e._data=l,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),i.algorithm){case"lttb":u=function(t,e,i,s,o){const n=o.samples||s;if(n>=i)return t.slice(e,e+i);const r=[],a=(i-2)/(n-2);let l=0;const h=e+i-1;let c,d,u,p,f,g=e;for(r[l++]=t[g],c=0;c<n-2;c++){let s,o=0,n=0;const h=Math.floor((c+1)*a)+1+e,b=Math.min(Math.floor((c+2)*a)+1,i)+e,m=b-h;for(s=h;s<b;s++)o+=t[s].x,n+=t[s].y;o/=m,n/=m;const v=Math.floor(c*a)+1+e,y=Math.min(Math.floor((c+1)*a)+1,i)+e,{x:_,y:x}=t[g];for(u=p=-1,s=v;s<y;s++)p=.5*Math.abs((_-o)*(t[s].y-x)-(_-t[s].x)*(n-x)),p>u&&(u=p,d=t[s],f=s);r[l++]=d,g=f}return r[l++]=t[h],r}(l,c,d,s,i);break;case"min-max":u=function(t,e,i,s){let o,n,r,a,l,h,c,d,u,p,f=0,g=0;const b=[],m=e+i-1,v=t[e].x,y=t[m].x-v;for(o=e;o<e+i;++o){n=t[o],r=(n.x-v)/y*s,a=n.y;const e=0|r;if(e===l)a<u?(u=a,h=o):a>p&&(p=a,c=o),f=(g*f+n.x)/++g;else{const i=o-1;if(!Mo(h)&&!Mo(c)){const e=Math.min(h,c),s=Math.max(h,c);e!==d&&e!==i&&b.push({...t[e],x:f}),s!==d&&s!==i&&b.push({...t[s],x:f})}o>0&&i!==d&&b.push(t[i]),b.push(n),l=e,g=0,u=p=a,h=c=d=o}}return b}(l,c,d,s);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=u}))},destroy(t){Bh(t)}};function Hh(t,e,i,s){if(s)return;let o=e[t],n=i[t];return"angle"===t&&(o=pn(o),n=pn(n)),{property:t,start:o,end:n}}function jh(t,e,i){for(;e>t;e--){const t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function Uh(t,e,i,s){return t&&e?s(t[i],e[i]):t?t[i]:e?e[i]:0}function Wh(t,e){let i=[],s=!1;return Ao(t)?(s=!0,i=t):i=function(t,e){const{x:i=null,y:s=null}=t||{},o=e.points,n=[];return e.segments.forEach((({start:t,end:e})=>{e=jh(t,e,o);const r=o[t],a=o[e];null!==s?(n.push({x:r.x,y:s}),n.push({x:a.x,y:s})):null!==i&&(n.push({x:i,y:r.y}),n.push({x:i,y:a.y}))})),n}(t,e),i.length?new kh({points:i,options:{tension:0},_loop:s,_fullLoop:s}):null}function qh(t){return t&&!1!==t.fill}function Yh(t,e,i){let s=t[e].fill;const o=[e];let n;if(!i)return s;for(;!1!==s&&-1===o.indexOf(s);){if(!$o(s))return s;if(n=t[s],!n)return!1;if(n.visible)return s;o.push(s),s=n.fill}return!1}function Xh(t,e,i){const s=function(t){const e=t.options,i=e.fill;let s=Eo(i&&i.target,i);void 0===s&&(s=!!e.backgroundColor);if(!1===s||null===s)return!1;if(!0===s)return"origin";return s}(t);if(So(s))return!isNaN(s.value)&&s;let o=parseFloat(s);return $o(o)&&Math.floor(o)===o?function(t,e,i,s){"-"!==t&&"+"!==t||(i=e+i);if(i===e||i<0||i>=s)return!1;return i}(s[0],e,o,i):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function Kh(t,e,i){const s=[];for(let o=0;o<i.length;o++){const n=i[o],{first:r,last:a,point:l}=Gh(n,e,"x");if(!(!l||r&&a))if(r)s.unshift(l);else if(t.push(l),!a)break}t.push(...s)}function Gh(t,e,i){const s=t.interpolate(e,i);if(!s)return{};const o=s[i],n=t.segments,r=t.points;let a=!1,l=!1;for(let t=0;t<n.length;t++){const e=n[t],s=r[e.start][i],h=r[e.end][i];if(bn(o,s,h)){a=o===s,l=o===h;break}}return{first:a,last:l,point:s}}class Zh{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:o,radius:n}=this;return e=e||{start:0,end:Yo},t.arc(s,o,n,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,o=t.angle;return{x:e+Math.cos(o)*s,y:i+Math.sin(o)*s,angle:o}}}function Jh(t){const{chart:e,fill:i,line:s}=t;if($o(i))return function(t,e){const i=t.getDatasetMeta(e),s=i&&t.isDatasetVisible(e);return s?i.dataset:null}(e,i);if("stack"===i)return function(t){const{scale:e,index:i,line:s}=t,o=[],n=s.segments,r=s.points,a=function(t,e){const i=[],s=t.getMatchingVisibleMetas("line");for(let t=0;t<s.length;t++){const o=s[t];if(o.index===e)break;o.hidden||i.unshift(o.dataset)}return i}(e,i);a.push(Wh({x:null,y:e.bottom},s));for(let t=0;t<n.length;t++){const e=n[t];for(let t=e.start;t<=e.end;t++)Kh(o,r[t],a)}return new kh({points:o,options:{}})}(t);if("shape"===i)return!0;const o=function(t){const e=t.scale||{};if(e.getPointPositionForValue)return function(t){const{scale:e,fill:i}=t,s=e.options,o=e.getLabels().length,n=s.reverse?e.max:e.min,r=function(t,e,i){let s;return s="start"===t?i:"end"===t?e.options.reverse?e.min:e.max:So(t)?t.value:e.getBaseValue(),s}(i,e,n),a=[];if(s.grid.circular){const t=e.getPointPositionForValue(0,n);return new Zh({x:t.x,y:t.y,radius:e.getDistanceFromCenterForValue(r)})}for(let t=0;t<o;++t)a.push(e.getPointPositionForValue(t,r));return a}(t);return function(t){const{scale:e={},fill:i}=t,s=function(t,e){let i=null;return"start"===t?i=e.bottom:"end"===t?i=e.top:So(t)?i=e.getPixelForValue(t.value):e.getBasePixel&&(i=e.getBasePixel()),i}(i,e);if($o(s)){const t=e.isHorizontal();return{x:t?s:null,y:t?null:s}}return null}(t)}(t);return o instanceof Zh?o:Wh(o,s)}function Qh(t,e,i){const s=Jh(e),{line:o,scale:n,axis:r}=e,a=o.options,l=a.fill,h=a.backgroundColor,{above:c=h,below:d=h}=l||{};s&&o.points.length&&(er(t,i),function(t,e){const{line:i,target:s,above:o,below:n,area:r,scale:a}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&n!==o&&(tc(t,s,r.top),ec(t,{line:i,target:s,color:o,scale:a,property:l}),t.restore(),t.save(),tc(t,s,r.bottom));ec(t,{line:i,target:s,color:n,scale:a,property:l}),t.restore()}(t,{line:o,target:s,above:c,below:d,area:i,scale:n,axis:r}),ir(t))}function tc(t,e,i){const{segments:s,points:o}=e;let n=!0,r=!1;t.beginPath();for(const a of s){const{start:s,end:l}=a,h=o[s],c=o[jh(s,l,o)];n?(t.moveTo(h.x,h.y),n=!1):(t.lineTo(h.x,i),t.lineTo(h.x,h.y)),r=!!e.pathSegment(t,a,{move:r}),r?t.closePath():t.lineTo(c.x,i)}t.lineTo(e.first().x,i),t.closePath(),t.clip()}function ec(t,e){const{line:i,target:s,property:o,color:n,scale:r}=e,a=function(t,e,i){const s=t.segments,o=t.points,n=e.points,r=[];for(const t of s){let{start:s,end:a}=t;a=jh(s,a,o);const l=Hh(i,o[s],o[a],t.loop);if(!e.segments){r.push({source:t,target:l,start:o[s],end:o[a]});continue}const h=la(e,l);for(const e of h){const s=Hh(i,n[e.start],n[e.end],e.loop),a=aa(t,o,s);for(const t of a)r.push({source:t,target:e,start:{[i]:Uh(l,s,"start",Math.max)},end:{[i]:Uh(l,s,"end",Math.min)}})}}return r}(i,s,o);for(const{source:e,target:l,start:h,end:c}of a){const{style:{backgroundColor:a=n}={}}=e,d=!0!==s;t.save(),t.fillStyle=a,ic(t,r,d&&Hh(o,h,c)),t.beginPath();const u=!!i.pathSegment(t,e);let p;if(d){u?t.closePath():sc(t,s,c,o);const e=!!s.pathSegment(t,l,{move:u,reverse:!0});p=u&&e,p||sc(t,s,h,o)}t.closePath(),t.fill(p?"evenodd":"nonzero"),t.restore()}}function ic(t,e,i){const{top:s,bottom:o}=e.chart.chartArea,{property:n,start:r,end:a}=i||{};"x"===n&&(t.beginPath(),t.rect(r,s,a-r,o-s),t.clip())}function sc(t,e,i,s){const o=e.interpolate(i,s);o&&t.lineTo(o.x,o.y)}var oc={id:"filler",afterDatasetsUpdate(t,e,i){const s=(t.data.datasets||[]).length,o=[];let n,r,a,l;for(r=0;r<s;++r)n=t.getDatasetMeta(r),a=n.dataset,l=null,a&&a.options&&a instanceof kh&&(l={visible:t.isDatasetVisible(r),index:r,fill:Xh(a,r,s),chart:t,axis:n.controller.options.indexAxis,scale:n.vScale,line:a}),n.$filler=l,o.push(l);for(r=0;r<s;++r)l=o[r],l&&!1!==l.fill&&(l.fill=Yh(o,r,i.propagate))},beforeDraw(t,e,i){const s="beforeDraw"===i.drawTime,o=t.getSortedVisibleDatasetMetas(),n=t.chartArea;for(let e=o.length-1;e>=0;--e){const i=o[e].$filler;i&&(i.line.updateControlPoints(n,i.axis),s&&i.fill&&Qh(t.ctx,i,n))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;const s=t.getSortedVisibleDatasetMetas();for(let e=s.length-1;e>=0;--e){const i=s[e].$filler;qh(i)&&Qh(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){const s=e.meta.$filler;qh(s)&&"beforeDatasetDraw"===i.drawTime&&Qh(t.ctx,s,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const nc=(t,e)=>{let{boxHeight:i=e,boxWidth:s=e}=t;return t.usePointStyle&&(i=Math.min(i,e),s=t.pointStyleWidth||Math.min(s,e)),{boxWidth:s,boxHeight:i,itemHeight:Math.max(e,i)}};class rc extends $l{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=Oo(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&(e=e.sort(((e,i)=>t.sort(e,i,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display)return void(this.width=this.height=0);const i=t.labels,s=mr(i.font),o=s.size,n=this._computeTitleHeight(),{boxWidth:r,itemHeight:a}=nc(i,o);let l,h;e.font=s.string,this.isHorizontal()?(l=this.maxWidth,h=this._fitRows(n,o,r,a)+10):(h=this.maxHeight,l=this._fitCols(n,s,r,a)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:o,maxWidth:n,options:{labels:{padding:r}}}=this,a=this.legendHitBoxes=[],l=this.lineWidths=[0],h=s+r;let c=t;o.textAlign="left",o.textBaseline="middle";let d=-1,u=-h;return this.legendItems.forEach(((t,p)=>{const f=i+e/2+o.measureText(t.text).width;(0===p||l[l.length-1]+f+2*r>n)&&(c+=h,l[l.length-(p>0?0:1)]=0,u+=h,d++),a[p]={left:0,top:u,row:d,width:f,height:s},l[l.length-1]+=f+r})),c}_fitCols(t,e,i,s){const{ctx:o,maxHeight:n,options:{labels:{padding:r}}}=this,a=this.legendHitBoxes=[],l=this.columnSizes=[],h=n-t;let c=r,d=0,u=0,p=0,f=0;return this.legendItems.forEach(((t,n)=>{const{itemWidth:g,itemHeight:b}=function(t,e,i,s,o){const n=function(t,e,i,s){let o=t.text;o&&"string"!=typeof o&&(o=o.reduce(((t,e)=>t.length>e.length?t:e)));return e+i.size/2+s.measureText(o).width}(s,t,e,i),r=function(t,e,i){let s=t;"string"!=typeof e.text&&(s=ac(e,i));return s}(o,s,e.lineHeight);return{itemWidth:n,itemHeight:r}}(i,e,o,t,s);n>0&&u+b+2*r>h&&(c+=d+r,l.push({width:d,height:u}),p+=d+r,f++,d=u=0),a[n]={left:p,top:u,col:f,width:g,height:b},d=Math.max(d,g),u+=b+r})),c+=d,l.push({width:d,height:u}),c}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:o}}=this,n=ia(o,this.left,this.width);if(this.isHorizontal()){let o=0,r=Sn(i,this.left+s,this.right-this.lineWidths[o]);for(const a of e)o!==a.row&&(o=a.row,r=Sn(i,this.left+s,this.right-this.lineWidths[o])),a.top+=this.top+t+s,a.left=n.leftForLtr(n.x(r),a.width),r+=a.width+s}else{let o=0,r=Sn(i,this.top+t+s,this.bottom-this.columnSizes[o].height);for(const a of e)a.col!==o&&(o=a.col,r=Sn(i,this.top+t+s,this.bottom-this.columnSizes[o].height)),a.top=r,a.left+=this.left+s,a.left=n.leftForLtr(n.x(a.left),a.width),r+=a.height+s}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){const t=this.ctx;er(t,this),this._draw(),ir(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:o,labels:n}=t,r=Yn.color,a=ia(t.rtl,this.left,this.width),l=mr(n.font),{padding:h}=n,c=l.size,d=c/2;let u;this.drawTitle(),s.textAlign=a.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=l.string;const{boxWidth:p,boxHeight:f,itemHeight:g}=nc(n,c),b=this.isHorizontal(),m=this._computeTitleHeight();u=b?{x:Sn(o,this.left+h,this.right-i[0]),y:this.top+h+m,line:0}:{x:this.left+h,y:Sn(o,this.top+m+h,this.bottom-e[0].height),line:0},sa(this.ctx,t.textDirection);const v=g+h;this.legendItems.forEach(((y,_)=>{s.strokeStyle=y.fontColor,s.fillStyle=y.fontColor;const x=s.measureText(y.text).width,w=a.textAlign(y.textAlign||(y.textAlign=n.textAlign)),k=p+d+x;let M=u.x,A=u.y;a.setWidth(this.width),b?_>0&&M+k+h>this.right&&(A=u.y+=v,u.line++,M=u.x=Sn(o,this.left+h,this.right-i[u.line])):_>0&&A+v>this.bottom&&(M=u.x=M+e[u.line].width+h,u.line++,A=u.y=Sn(o,this.top+m+h,this.bottom-e[u.line].height));if(function(t,e,i){if(isNaN(p)||p<=0||isNaN(f)||f<0)return;s.save();const o=Eo(i.lineWidth,1);if(s.fillStyle=Eo(i.fillStyle,r),s.lineCap=Eo(i.lineCap,"butt"),s.lineDashOffset=Eo(i.lineDashOffset,0),s.lineJoin=Eo(i.lineJoin,"miter"),s.lineWidth=o,s.strokeStyle=Eo(i.strokeStyle,r),s.setLineDash(Eo(i.lineDash,[])),n.usePointStyle){const r={radius:f*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:o},l=a.xPlus(t,p/2);Qn(s,r,l,e+d,n.pointStyleWidth&&p)}else{const n=e+Math.max((c-f)/2,0),r=a.leftForLtr(t,p),l=gr(i.borderRadius);s.beginPath(),Object.values(l).some((t=>0!==t))?lr(s,{x:r,y:n,w:p,h:f,radius:l}):s.rect(r,n,p,f),s.fill(),0!==o&&s.stroke()}s.restore()}(a.x(M),A,y),M=((t,e,i,s)=>t===(s?"left":"right")?i:"center"===t?(e+i)/2:e)(w,M+p+d,b?M+k:this.right,t.rtl),function(t,e,i){nr(s,i.text,t,e+g/2,l,{strikethrough:i.hidden,textAlign:a.textAlign(i.textAlign)})}(a.x(M),A,y),b)u.x+=k+h;else if("string"!=typeof y.text){const t=l.lineHeight;u.y+=ac(y,t)}else u.y+=v})),oa(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=mr(e.font),s=br(e.padding);if(!e.display)return;const o=ia(t.rtl,this.left,this.width),n=this.ctx,r=e.position,a=i.size/2,l=s.top+a;let h,c=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+l,c=Sn(t.align,c,this.right-d);else{const e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);h=l+Sn(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight())}const u=Sn(r,c,c+d);n.textAlign=o.textAlign(An(r)),n.textBaseline="middle",n.strokeStyle=e.color,n.fillStyle=e.color,n.font=i.string,nr(n,e.text,u,h,i)}_computeTitleHeight(){const t=this.options.title,e=mr(t.font),i=br(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,o;if(bn(t,this.left,this.right)&&bn(e,this.top,this.bottom))for(o=this.legendHitBoxes,i=0;i<o.length;++i)if(s=o[i],bn(t,s.left,s.left+s.width)&&bn(e,s.top,s.top+s.height))return this.legendItems[i];return null}handleEvent(t){const e=this.options;if(!function(t,e){if(("mousemove"===t||"mouseout"===t)&&(e.onHover||e.onLeave))return!0;if(e.onClick&&("click"===t||"mouseup"===t))return!0;return!1}(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type||"mouseout"===t.type){const s=this._hoveredItem,o=((t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index)(s,i);s&&!o&&Oo(e.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!o&&Oo(e.onHover,[t,i,this],this)}else i&&Oo(e.onClick,[t,i,this],this)}}function ac(t,e){return e*(t.text?t.text.length+.5:0)}var lc={id:"legend",_element:rc,start(t,e,i){const s=t.legend=new rc({ctx:t.ctx,options:i,chart:t});hl.configure(t,s,i),hl.addBox(t,s)},stop(t){hl.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){const s=t.legend;hl.configure(t,s,i),s.options=i},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){const s=e.datasetIndex,o=i.chart;o.isDatasetVisible(s)?(o.hide(s),e.hidden=!0):(o.show(s),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:s,textAlign:o,color:n,useBorderRadius:r,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const l=t.controller.getStyle(i?0:void 0),h=br(l.borderWidth);return{text:e[t.index].label,fillStyle:l.backgroundColor,fontColor:n,hidden:!t.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:l.borderColor,pointStyle:s||l.pointStyle,rotation:l.rotation,textAlign:o||l.textAlign,borderRadius:r&&(a||l.borderRadius),datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class hc extends $l{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const s=Ao(i.text)?i.text.length:1;this._padding=br(i.padding);const o=s*mr(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:i,bottom:s,right:o,options:n}=this,r=n.align;let a,l,h,c=0;return this.isHorizontal()?(l=Sn(r,i,o),h=e+t,a=o-i):("left"===n.position?(l=i+t,h=Sn(r,s,e),c=-.5*qo):(l=o-t,h=Sn(r,e,s),c=.5*qo),a=s-e),{titleX:l,titleY:h,maxWidth:a,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=mr(e.font),s=i.lineHeight/2+this._padding.top,{titleX:o,titleY:n,maxWidth:r,rotation:a}=this._drawArgs(s);nr(t,e.text,0,0,i,{color:e.color,maxWidth:r,rotation:a,textAlign:An(e.align),textBaseline:"middle",translation:[o,n]})}}var cc={id:"title",_element:hc,start(t,e,i){!function(t,e){const i=new hc({ctx:t.ctx,options:e,chart:t});hl.configure(t,i,e),hl.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){const e=t.titleBlock;hl.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){const s=t.titleBlock;hl.configure(t,s,i),s.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const dc=new WeakMap;var uc={id:"subtitle",start(t,e,i){const s=new hc({ctx:t.ctx,options:i,chart:t});hl.configure(t,s,i),hl.addBox(t,s),dc.set(t,s)},stop(t){hl.removeBox(t,dc.get(t)),dc.delete(t)},beforeUpdate(t,e,i){const s=dc.get(t);hl.configure(t,s,i),s.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const pc={average(t){if(!t.length)return!1;let e,i,s=0,o=0,n=0;for(e=0,i=t.length;e<i;++e){const i=t[e].element;if(i&&i.hasValue()){const t=i.tooltipPosition();s+=t.x,o+=t.y,++n}}return{x:s/n,y:o/n}},nearest(t,e){if(!t.length)return!1;let i,s,o,n=e.x,r=e.y,a=Number.POSITIVE_INFINITY;for(i=0,s=t.length;i<s;++i){const s=t[i].element;if(s&&s.hasValue()){const t=dn(e,s.getCenterPoint());t<a&&(a=t,o=s)}}if(o){const t=o.tooltipPosition();n=t.x,r=t.y}return{x:n,y:r}}};function fc(t,e){return e&&(Ao(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function gc(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function bc(t,e){const{element:i,datasetIndex:s,index:o}=e,n=t.getDatasetMeta(s).controller,{label:r,value:a}=n.getLabelAndValue(o);return{chart:t,label:r,parsed:n.getParsed(o),raw:t.data.datasets[s].data[o],formattedValue:a,dataset:n.getDataset(),dataIndex:o,datasetIndex:s,element:i}}function mc(t,e){const i=t.chart.ctx,{body:s,footer:o,title:n}=t,{boxWidth:r,boxHeight:a}=e,l=mr(e.bodyFont),h=mr(e.titleFont),c=mr(e.footerFont),d=n.length,u=o.length,p=s.length,f=br(e.padding);let g=f.height,b=0,m=s.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);if(m+=t.beforeBody.length+t.afterBody.length,d&&(g+=d*h.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),m){g+=p*(e.displayColors?Math.max(a,l.lineHeight):l.lineHeight)+(m-p)*l.lineHeight+(m-1)*e.bodySpacing}u&&(g+=e.footerMarginTop+u*c.lineHeight+(u-1)*e.footerSpacing);let v=0;const y=function(t){b=Math.max(b,i.measureText(t).width+v)};return i.save(),i.font=h.string,Do(t.title,y),i.font=l.string,Do(t.beforeBody.concat(t.afterBody),y),v=e.displayColors?r+2+e.boxPadding:0,Do(s,(t=>{Do(t.before,y),Do(t.lines,y),Do(t.after,y)})),v=0,i.font=c.string,Do(t.footer,y),i.restore(),b+=f.width,{width:b,height:g}}function vc(t,e,i,s){const{x:o,width:n}=i,{width:r,chartArea:{left:a,right:l}}=t;let h="center";return"center"===s?h=o<=(a+l)/2?"left":"right":o<=n/2?h="left":o>=r-n/2&&(h="right"),function(t,e,i,s){const{x:o,width:n}=s,r=i.caretSize+i.caretPadding;return"left"===t&&o+n+r>e.width||"right"===t&&o-n-r<0||void 0}(h,t,e,i)&&(h="center"),h}function yc(t,e,i){const s=i.yAlign||e.yAlign||function(t,e){const{y:i,height:s}=e;return i<s/2?"top":i>t.height-s/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||vc(t,e,i,s),yAlign:s}}function _c(t,e,i,s){const{caretSize:o,caretPadding:n,cornerRadius:r}=t,{xAlign:a,yAlign:l}=i,h=o+n,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:p}=gr(r);let f=function(t,e){let{x:i,width:s}=t;return"right"===e?i-=s:"center"===e&&(i-=s/2),i}(e,a);const g=function(t,e,i){let{y:s,height:o}=t;return"top"===e?s+=i:s-="bottom"===e?o+i:o/2,s}(e,l,h);return"center"===l?"left"===a?f+=h:"right"===a&&(f-=h):"left"===a?f-=Math.max(c,u)+o:"right"===a&&(f+=Math.max(d,p)+o),{x:gn(f,0,s.width-e.width),y:gn(g,0,s.height-e.height)}}function xc(t,e,i){const s=br(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-s.right:t.x+s.left}function wc(t){return fc([],gc(t))}function kc(t,e){const i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}const Mc={beforeTitle:wo,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,s=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(s>0&&e.dataIndex<s)return i[e.dataIndex]}return""},afterTitle:wo,beforeBody:wo,beforeLabel:wo,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const i=t.formattedValue;return Mo(i)||(e+=i),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:wo,afterBody:wo,beforeFooter:wo,footer:wo,afterFooter:wo};function Ac(t,e,i,s){const o=t[e].call(i,s);return void 0===o?Mc[e].call(i,s):o}class Sc extends $l{static positioners=pc;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,o=new ma(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=(t=this.chart.getContext(),e=this,i=this._tooltipItems,yr(t,{tooltip:e,tooltipItems:i,type:"tooltip"})));var t,e,i}getTitle(t,e){const{callbacks:i}=e,s=Ac(i,"beforeTitle",this,t),o=Ac(i,"title",this,t),n=Ac(i,"afterTitle",this,t);let r=[];return r=fc(r,gc(s)),r=fc(r,gc(o)),r=fc(r,gc(n)),r}getBeforeBody(t,e){return wc(Ac(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return Do(t,(t=>{const e={before:[],lines:[],after:[]},o=kc(i,t);fc(e.before,gc(Ac(o,"beforeLabel",this,t))),fc(e.lines,Ac(o,"label",this,t)),fc(e.after,gc(Ac(o,"afterLabel",this,t))),s.push(e)})),s}getAfterBody(t,e){return wc(Ac(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=Ac(i,"beforeFooter",this,t),o=Ac(i,"footer",this,t),n=Ac(i,"afterFooter",this,t);let r=[];return r=fc(r,gc(s)),r=fc(r,gc(o)),r=fc(r,gc(n)),r}_createItems(t){const e=this._active,i=this.chart.data,s=[],o=[],n=[];let r,a,l=[];for(r=0,a=e.length;r<a;++r)l.push(bc(this.chart,e[r]));return t.filter&&(l=l.filter(((e,s,o)=>t.filter(e,s,o,i)))),t.itemSort&&(l=l.sort(((e,s)=>t.itemSort(e,s,i)))),Do(l,(e=>{const i=kc(t.callbacks,e);s.push(Ac(i,"labelColor",this,e)),o.push(Ac(i,"labelPointStyle",this,e)),n.push(Ac(i,"labelTextColor",this,e))})),this.labelColors=s,this.labelPointStyles=o,this.labelTextColors=n,this.dataPoints=l,l}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let o,n=[];if(s.length){const t=pc[i.position].call(this,s,this._eventPosition);n=this._createItems(i),this.title=this.getTitle(n,i),this.beforeBody=this.getBeforeBody(n,i),this.body=this.getBody(n,i),this.afterBody=this.getAfterBody(n,i),this.footer=this.getFooter(n,i);const e=this._size=mc(this,i),r=Object.assign({},t,e),a=yc(this.chart,i,r),l=_c(i,r,a,this.chart);this.xAlign=a.xAlign,this.yAlign=a.yAlign,o={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(o={opacity:0});this._tooltipItems=n,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const o=this.getCaretPosition(t,i,s);e.lineTo(o.x1,o.y1),e.lineTo(o.x2,o.y2),e.lineTo(o.x3,o.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:o}=this,{caretSize:n,cornerRadius:r}=i,{topLeft:a,topRight:l,bottomLeft:h,bottomRight:c}=gr(r),{x:d,y:u}=t,{width:p,height:f}=e;let g,b,m,v,y,_;return"center"===o?(y=u+f/2,"left"===s?(g=d,b=g-n,v=y+n,_=y-n):(g=d+p,b=g+n,v=y-n,_=y+n),m=g):(b="left"===s?d+Math.max(a,h)+n:"right"===s?d+p-Math.max(l,c)-n:this.caretX,"top"===o?(v=u,y=v-n,g=b-n,m=b+n):(v=u+f,y=v+n,g=b+n,m=b-n),_=v),{x1:g,x2:b,x3:m,y1:v,y2:y,y3:_}}drawTitle(t,e,i){const s=this.title,o=s.length;let n,r,a;if(o){const l=ia(i.rtl,this.x,this.width);for(t.x=xc(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",n=mr(i.titleFont),r=i.titleSpacing,e.fillStyle=i.titleColor,e.font=n.string,a=0;a<o;++a)e.fillText(s[a],l.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+r,a+1===o&&(t.y+=i.titleMarginBottom-r)}}_drawColorBox(t,e,i,s,o){const n=this.labelColors[i],r=this.labelPointStyles[i],{boxHeight:a,boxWidth:l,boxPadding:h}=o,c=mr(o.bodyFont),d=xc(this,"left",o),u=s.x(d),p=a<c.lineHeight?(c.lineHeight-a)/2:0,f=e.y+p;if(o.usePointStyle){const e={radius:Math.min(l,a)/2,pointStyle:r.pointStyle,rotation:r.rotation,borderWidth:1},i=s.leftForLtr(u,l)+l/2,h=f+a/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Jn(t,e,i,h),t.strokeStyle=n.borderColor,t.fillStyle=n.backgroundColor,Jn(t,e,i,h)}else{t.lineWidth=So(n.borderWidth)?Math.max(...Object.values(n.borderWidth)):n.borderWidth||1,t.strokeStyle=n.borderColor,t.setLineDash(n.borderDash||[]),t.lineDashOffset=n.borderDashOffset||0;const e=s.leftForLtr(u,l-h),i=s.leftForLtr(s.xPlus(u,1),l-h-2),r=gr(n.borderRadius);Object.values(r).some((t=>0!==t))?(t.beginPath(),t.fillStyle=o.multiKeyBackground,lr(t,{x:e,y:f,w:l,h:a,radius:r}),t.fill(),t.stroke(),t.fillStyle=n.backgroundColor,t.beginPath(),lr(t,{x:i,y:f+1,w:l-2,h:a-2,radius:r}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(e,f,l,a),t.strokeRect(e,f,l,a),t.fillStyle=n.backgroundColor,t.fillRect(i,f+1,l-2,a-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:o,bodyAlign:n,displayColors:r,boxHeight:a,boxWidth:l,boxPadding:h}=i,c=mr(i.bodyFont);let d=c.lineHeight,u=0;const p=ia(i.rtl,this.x,this.width),f=function(i){e.fillText(i,p.x(t.x+u),t.y+d/2),t.y+=d+o},g=p.textAlign(n);let b,m,v,y,_,x,w;for(e.textAlign=n,e.textBaseline="middle",e.font=c.string,t.x=xc(this,g,i),e.fillStyle=i.bodyColor,Do(this.beforeBody,f),u=r&&"right"!==g?"center"===n?l/2+h:l+2+h:0,y=0,x=s.length;y<x;++y){for(b=s[y],m=this.labelTextColors[y],e.fillStyle=m,Do(b.before,f),v=b.lines,r&&v.length&&(this._drawColorBox(e,t,y,p,i),d=Math.max(c.lineHeight,a)),_=0,w=v.length;_<w;++_)f(v[_]),d=c.lineHeight;Do(b.after,f)}u=0,d=c.lineHeight,Do(this.afterBody,f),t.y-=o}drawFooter(t,e,i){const s=this.footer,o=s.length;let n,r;if(o){const a=ia(i.rtl,this.x,this.width);for(t.x=xc(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=a.textAlign(i.footerAlign),e.textBaseline="middle",n=mr(i.footerFont),e.fillStyle=i.footerColor,e.font=n.string,r=0;r<o;++r)e.fillText(s[r],a.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:o,yAlign:n}=this,{x:r,y:a}=t,{width:l,height:h}=i,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:p}=gr(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(r+c,a),"top"===n&&this.drawCaret(t,e,i,s),e.lineTo(r+l-d,a),e.quadraticCurveTo(r+l,a,r+l,a+d),"center"===n&&"right"===o&&this.drawCaret(t,e,i,s),e.lineTo(r+l,a+h-p),e.quadraticCurveTo(r+l,a+h,r+l-p,a+h),"bottom"===n&&this.drawCaret(t,e,i,s),e.lineTo(r+u,a+h),e.quadraticCurveTo(r,a+h,r,a+h-u),"center"===n&&"left"===o&&this.drawCaret(t,e,i,s),e.lineTo(r,a+c),e.quadraticCurveTo(r,a,r+c,a),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,o=i&&i.y;if(s||o){const i=pc[t.position].call(this,this._active,this._eventPosition);if(!i)return;const n=this._size=mc(this,t),r=Object.assign({},i,this._size),a=yc(e,t,r),l=_c(t,r,a,e);s._to===l.x&&o._to===l.y||(this.xAlign=a.xAlign,this.yAlign=a.yAlign,this.width=n.width,this.height=n.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},o={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const n=br(e.padding),r=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&r&&(t.save(),t.globalAlpha=i,this.drawBackground(o,t,s,e),sa(t,e.textDirection),o.y+=n.top,this.drawTitle(o,t,e),this.drawBody(o,t,e),this.drawFooter(o,t,e),oa(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map((({datasetIndex:t,index:e})=>{const i=this.chart.getDatasetMeta(t);if(!i)throw new Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}})),o=!To(i,s),n=this._positionChanged(s,e);(o||n)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,o=this._active||[],n=this._getActiveElements(t,o,e,i),r=this._positionChanged(n,t),a=e||!To(n,o)||r;return a&&(this._active=n,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),a}_getActiveElements(t,e,i,s){const o=this.options;if("mouseout"===t.type)return[];if(!s)return e;const n=this.chart.getElementsAtEventForMode(t,o.mode,o,i);return o.reverse&&n.reverse(),n}_positionChanged(t,e){const{caretX:i,caretY:s,options:o}=this,n=pc[o.position].call(this,t,e);return!1!==n&&(i!==n.x||s!==n.y)}}var $c={id:"tooltip",_element:Sc,positioners:pc,afterInit(t,e,i){i&&(t.tooltip=new Sc({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const i={tooltip:e};if(!1===t.notifyPlugins("beforeTooltipDraw",{...i,cancelable:!0}))return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i)}},afterEvent(t,e){if(t.tooltip){const i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Mc},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Cc=Object.freeze({__proto__:null,Colors:Fh,Decimation:Nh,Filler:oc,Legend:lc,SubTitle:uc,Title:cc,Tooltip:$c});function Ec(t,e,i,s){const o=t.indexOf(e);if(-1===o)return((t,e,i,s)=>("string"==typeof e?(i=t.push(e)-1,s.unshift({index:i,label:e})):isNaN(e)&&(i=null),i))(t,e,i,s);return o!==t.lastIndexOf(e)?i:o}function Pc(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}function Oc(t,e){const i=[],{bounds:s,step:o,min:n,max:r,precision:a,count:l,maxTicks:h,maxDigits:c,includeBounds:d}=t,u=o||1,p=h-1,{min:f,max:g}=e,b=!Mo(n),m=!Mo(r),v=!Mo(l),y=(g-f)/(c+1);let _,x,w,k,M=on((g-f)/p/u)*u;if(M<1e-14&&!b&&!m)return[{value:f},{value:g}];k=Math.ceil(g/M)-Math.floor(f/M),k>p&&(M=on(k*M/p/u)*u),Mo(a)||(_=Math.pow(10,a),M=Math.ceil(M*_)/_),"ticks"===s?(x=Math.floor(f/M)*M,w=Math.ceil(g/M)*M):(x=f,w=g),b&&m&&o&&function(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}((r-n)/o,M/1e3)?(k=Math.round(Math.min((r-n)/M,h)),M=(r-n)/k,x=n,w=r):v?(x=b?n:x,w=m?r:w,k=l-1,M=(w-x)/k):(k=(w-x)/M,k=sn(k,Math.round(k),M/1e3)?Math.round(k):Math.ceil(k));const A=Math.max(hn(M),hn(x));_=Math.pow(10,Mo(a)?A:a),x=Math.round(x*_)/_,w=Math.round(w*_)/_;let S=0;for(b&&(d&&x!==n?(i.push({value:n}),x<n&&S++,sn(Math.round((x+S*M)*_)/_,n,Dc(n,y,t))&&S++):x<n&&S++);S<k;++S)i.push({value:Math.round((x+S*M)*_)/_});return m&&d&&w!==r?i.length&&sn(i[i.length-1].value,r,Dc(r,y,t))?i[i.length-1].value=r:i.push({value:r}):m&&w!==r||i.push({value:w}),i}function Dc(t,e,{horizontal:i,minRotation:s}){const o=an(s),n=(i?Math.sin(o):Math.cos(o))||.001,r=.75*e*(""+t).length;return Math.min(e/n,r)}class Tc extends zl{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return Mo(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:o}=this;const n=t=>s=e?s:t,r=t=>o=i?o:t;if(t){const t=en(s),e=en(o);t<0&&e<0?r(0):t>0&&e>0&&n(0)}if(s===o){let e=0===o?1:Math.abs(.05*o);r(o+e),t||n(s-e)}this.min=s,this.max=o}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:i,stepSize:s}=t;return s?(e=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,e>1e3&&(e=1e3)):(e=this.computeTickLimit(),i=i||11),i&&(e=Math.min(i,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s=Oc({maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},this._range||this);return"ticks"===t.bounds&&rn(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return Vn(t,this.chart.options.locale,this.options.ticks.format)}}class Lc extends Tc{static id="linear";static defaults={ticks:{callback:Nn.formatters.numeric}};determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=$o(t)?t:0,this.max=$o(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=an(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,o.lineHeight/s))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const Rc=t=>Math.floor(tn(t)),zc=(t,e)=>Math.pow(10,Rc(t)+e);function Ic(t){return 1===t/Math.pow(10,Rc(t))}function Fc(t,e,i){const s=Math.pow(10,i),o=Math.floor(t/s);return Math.ceil(e/s)-o}function Vc(t,{min:e,max:i}){e=Co(t.min,e);const s=[],o=Rc(e);let n=function(t,e){let i=Rc(e-t);for(;Fc(t,e,i)>10;)i++;for(;Fc(t,e,i)<10;)i--;return Math.min(i,Rc(t))}(e,i),r=n<0?Math.pow(10,Math.abs(n)):1;const a=Math.pow(10,n),l=o>n?Math.pow(10,o):0,h=Math.round((e-l)*r)/r,c=Math.floor((e-l)/a/10)*a*10;let d=Math.floor((h-c)/Math.pow(10,n)),u=Co(t.min,Math.round((l+c+d*Math.pow(10,n))*r)/r);for(;u<i;)s.push({value:u,major:Ic(u),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(n++,d=2,r=n>=0?1:r),u=Math.round((l+c+d*Math.pow(10,n))*r)/r;const p=Co(t.max,u);return s.push({value:p,major:Ic(p),significand:d}),s}class Bc extends zl{static id="logarithmic";static defaults={ticks:{callback:Nn.formatters.logarithmic,major:{enabled:!0}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=Tc.prototype.parse.apply(this,[t,e]);if(0!==i)return $o(i)&&i>0?i:null;this._zero=!0}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=$o(t)?Math.max(0,t):null,this.max=$o(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!$o(this._userMin)&&(this.min=t===zc(this.min,0)?zc(this.min,-1):zc(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const o=e=>i=t?i:e,n=t=>s=e?s:t;i===s&&(i<=0?(o(1),n(10)):(o(zc(i,-1)),n(zc(s,1)))),i<=0&&o(zc(s,-1)),s<=0&&n(zc(i,1)),this.min=i,this.max=s}buildTicks(){const t=this.options,e=Vc({min:this._userMin,max:this._userMax},this);return"ticks"===t.bounds&&rn(e,this,"value"),t.reverse?(e.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),e}getLabelForValue(t){return void 0===t?"0":Vn(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=tn(t),this._valueRange=tn(this.max)-tn(t)}getPixelForValue(t){return void 0!==t&&0!==t||(t=this.min),null===t||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(tn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function Nc(t){const e=t.ticks;if(e.display&&t.display){const t=br(e.backdropPadding);return Eo(e.font&&e.font.size,Yn.font.size)+t.height}return 0}function Hc(t,e,i,s,o){return t===s||t===o?{start:e-i/2,end:e+i/2}:t<s||t>o?{start:e-i,end:e}:{start:e,end:e+i}}function jc(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),s=[],o=[],n=t._pointLabels.length,r=t.options.pointLabels,a=r.centerPointLabels?qo/n:0;for(let d=0;d<n;d++){const n=r.setContext(t.getPointLabelContext(d));o[d]=n.padding;const u=t.getPointPosition(d,t.drawingArea+o[d],a),p=mr(n.font),f=(l=t.ctx,h=p,c=Ao(c=t._pointLabels[d])?c:[c],{w:Kn(l,h.string,c),h:c.length*h.lineHeight});s[d]=f;const g=pn(t.getIndexAngle(d)+a),b=Math.round(ln(g));Uc(i,e,g,Hc(b,u.x,f.w,0,180),Hc(b,u.y,f.h,90,270))}var l,h,c;t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){const s=[],o=t._pointLabels.length,n=t.options,r=Nc(n)/2,a=t.drawingArea,l=n.pointLabels.centerPointLabels?qo/o:0;for(let n=0;n<o;n++){const o=t.getPointPosition(n,a+r+i[n],l),h=Math.round(ln(pn(o.angle+Zo))),c=e[n],d=Yc(o.y,c.h,h),u=Wc(h),p=qc(o.x,c.w,u);s.push({x:o.x,y:d,textAlign:u,left:p,top:d,right:p+c.w,bottom:d+c.h})}return s}(t,s,o)}function Uc(t,e,i,s,o){const n=Math.abs(Math.sin(i)),r=Math.abs(Math.cos(i));let a=0,l=0;s.start<e.l?(a=(e.l-s.start)/n,t.l=Math.min(t.l,e.l-a)):s.end>e.r&&(a=(s.end-e.r)/n,t.r=Math.max(t.r,e.r+a)),o.start<e.t?(l=(e.t-o.start)/r,t.t=Math.min(t.t,e.t-l)):o.end>e.b&&(l=(o.end-e.b)/r,t.b=Math.max(t.b,e.b+l))}function Wc(t){return 0===t||180===t?"center":t<180?"left":"right"}function qc(t,e,i){return"right"===i?t-=e:"center"===i&&(t-=e/2),t}function Yc(t,e,i){return 90===i||270===i?t-=e/2:(i>270||i<90)&&(t-=e),t}function Xc(t,e,i,s){const{ctx:o}=t;if(i)o.arc(t.xCenter,t.yCenter,e,0,Yo);else{let i=t.getPointPosition(0,e);o.moveTo(i.x,i.y);for(let n=1;n<s;n++)i=t.getPointPosition(n,e),o.lineTo(i.x,i.y)}}class Kc extends Tc{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Nn.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=br(Nc(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=$o(t)&&!isNaN(t)?t:0,this.max=$o(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Nc(this.options))}generateTickLabels(t){Tc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map(((t,e)=>{const i=Oo(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""})).filter(((t,e)=>this.chart.getDataVisibility(e)))}fit(){const t=this.options;t.display&&t.pointLabels.display?jc(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){return pn(t*(Yo/(this._pointLabels.length||1))+an(this.options.startAngle||0))}getDistanceFromCenterForValue(t){if(Mo(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(Mo(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return function(t,e,i){return yr(t,{label:i,index:e,type:"pointLabel"})}(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-Zo+i;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:o}=this._pointLabelItems[t];return{left:e,top:i,right:s,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),Xc(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:s,border:o}=e,n=this._pointLabels.length;let r,a,l;if(e.pointLabels.display&&function(t,e){const{ctx:i,options:{pointLabels:s}}=t;for(let o=e-1;o>=0;o--){const e=s.setContext(t.getPointLabelContext(o)),n=mr(e.font),{x:r,y:a,textAlign:l,left:h,top:c,right:d,bottom:u}=t._pointLabelItems[o],{backdropColor:p}=e;if(!Mo(p)){const t=gr(e.borderRadius),s=br(e.backdropPadding);i.fillStyle=p;const o=h-s.left,n=c-s.top,r=d-h+s.width,a=u-c+s.height;Object.values(t).some((t=>0!==t))?(i.beginPath(),lr(i,{x:o,y:n,w:r,h:a,radius:t}),i.fill()):i.fillRect(o,n,r,a)}nr(i,t._pointLabels[o],r,a+n.lineHeight/2,n,{color:e.color,textAlign:l,textBaseline:"middle"})}}(this,n),s.display&&this.ticks.forEach(((t,e)=>{if(0!==e){a=this.getDistanceFromCenterForValue(t.value);const i=this.getContext(e),r=s.setContext(i),l=o.setContext(i);!function(t,e,i,s,o){const n=t.ctx,r=e.circular,{color:a,lineWidth:l}=e;!r&&!s||!a||!l||i<0||(n.save(),n.strokeStyle=a,n.lineWidth=l,n.setLineDash(o.dash),n.lineDashOffset=o.dashOffset,n.beginPath(),Xc(t,i,r,s),n.closePath(),n.stroke(),n.restore())}(this,r,a,n,l)}})),i.display){for(t.save(),r=n-1;r>=0;r--){const s=i.setContext(this.getPointLabelContext(r)),{color:o,lineWidth:n}=s;n&&o&&(t.lineWidth=n,t.strokeStyle=o,t.setLineDash(s.borderDash),t.lineDashOffset=s.borderDashOffset,a=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),l=this.getPointPosition(r,a),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let o,n;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach(((s,r)=>{if(0===r&&!e.reverse)return;const a=i.setContext(this.getContext(r)),l=mr(a.font);if(o=this.getDistanceFromCenterForValue(this.ticks[r].value),a.showLabelBackdrop){t.font=l.string,n=t.measureText(s.label).width,t.fillStyle=a.backdropColor;const e=br(a.backdropPadding);t.fillRect(-n/2-e.left,-o-l.size/2-e.top,n+e.width,l.size+e.height)}nr(t,s.label,0,-o,l,{color:a.color})})),t.restore()}drawTitle(){}}const Gc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Zc=Object.keys(Gc);function Jc(t,e){return t-e}function Qc(t,e){if(Mo(e))return null;const i=t._adapter,{parser:s,round:o,isoWeekday:n}=t._parseOpts;let r=e;return"function"==typeof s&&(r=s(r)),$o(r)||(r="string"==typeof s?i.parse(r,s):i.parse(r)),null===r?null:(o&&(r="week"!==o||!nn(n)&&!0!==n?i.startOf(r,o):i.startOf(r,"isoWeek",n)),+r)}function td(t,e,i,s){const o=Zc.length;for(let n=Zc.indexOf(t);n<o-1;++n){const t=Gc[Zc[n]],o=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(o*t.size))<=s)return Zc[n]}return Zc[o-1]}function ed(t,e,i){if(i){if(i.length){const{lo:s,hi:o}=mn(i,e);t[i[s]>=e?i[s]:i[o]]=!0}}else t[e]=!0}function id(t,e,i){const s=[],o={},n=e.length;let r,a;for(r=0;r<n;++r)a=e[r],o[a]=r,s.push({value:a,major:!1});return 0!==n&&i?function(t,e,i,s){const o=t._adapter,n=+o.startOf(e[0].value,s),r=e[e.length-1].value;let a,l;for(a=n;a<=r;a=+o.add(a,1,s))l=i[a],l>=0&&(e[l].major=!0);return e}(t,s,o,i):s}class sd extends zl{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new ja(t.adapters.date);s.init(e),Fo(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:Qc(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:o,minDefined:n,maxDefined:r}=this.getUserBounds();function a(t){n||isNaN(t.min)||(s=Math.min(s,t.min)),r||isNaN(t.max)||(o=Math.max(o,t.max))}n&&r||(a(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||a(this.getMinMax(!1))),s=$o(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),o=$o(o)&&!isNaN(o)?o:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,o-1),this.max=Math.max(s+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const o=this.min,n=function(t,e,i){let s=0,o=t.length;for(;s<o&&t[s]<e;)s++;for(;o>s&&t[o-1]>i;)o--;return s>0||o<t.length?t.slice(s,o):t}(s,o,this.max);return this._unit=e.unit||(i.autoSkip?td(e.minUnit,this.min,this.max,this._getLabelCapacity(o)):function(t,e,i,s,o){for(let n=Zc.length-1;n>=Zc.indexOf(i);n--){const i=Zc[n];if(Gc[i].common&&t._adapter.diff(o,s,i)>=e-1)return i}return Zc[i?Zc.indexOf(i):0]}(this,n.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=Zc.indexOf(t)+1,i=Zc.length;e<i;++e)if(Gc[Zc[e]].common)return Zc[e]}(this._unit):void 0,this.initOffsets(s),t.reverse&&n.reverse(),id(this,n,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map((t=>+t.value)))}initOffsets(t=[]){let e,i,s=0,o=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),s=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),o=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);const n=t.length<3?.5:.25;s=gn(s,0,n),o=gn(o,0,n),this._offsets={start:s,end:o,factor:1/(s+1+o)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,o=s.time,n=o.unit||td(o.minUnit,e,i,this._getLabelCapacity(e)),r=Eo(s.ticks.stepSize,1),a="week"===n&&o.isoWeekday,l=nn(a)||!0===a,h={};let c,d,u=e;if(l&&(u=+t.startOf(u,"isoWeek",a)),u=+t.startOf(u,l?"day":n),t.diff(i,e,n)>1e5*r)throw new Error(e+" and "+i+" are too far apart with stepSize of "+r+" "+n);const p="data"===s.ticks.source&&this.getDataTimestamps();for(c=u,d=0;c<i;c=+t.add(c,r,n),d++)ed(h,c,p);return c!==i&&"ticks"!==s.bounds&&1!==d||ed(h,c,p),Object.keys(h).sort(((t,e)=>t-e)).map((t=>+t))}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,e,i,s){const o=this.options,n=o.ticks.callback;if(n)return Oo(n,[t,e,i],this);const r=o.time.displayFormats,a=this._unit,l=this._majorUnit,h=a&&r[a],c=l&&r[l],d=i[e],u=l&&c&&d&&d.major;return this._adapter.format(t,s||(u?c:h))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=an(this.isHorizontal()?e.maxRotation:e.minRotation),o=Math.cos(s),n=Math.sin(s),r=this._resolveTickFontOptions(0).size;return{w:i*o+r*n,h:i*n+r*o}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,o=this._tickFormatFunction(t,0,id(this,[t],this._majorUnit),s),n=this._getLabelSize(o),r=Math.floor(this.isHorizontal()?this.width/n.w:this.height/n.h)-1;return r>0?r:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(t=0,e=s.length;t<e;++t)i=i.concat(s[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(Qc(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return wn(t.sort(Jc))}}function od(t,e,i){let s,o,n,r,a=0,l=t.length-1;i?(e>=t[a].pos&&e<=t[l].pos&&({lo:a,hi:l}=vn(t,"pos",e)),({pos:s,time:n}=t[a]),({pos:o,time:r}=t[l])):(e>=t[a].time&&e<=t[l].time&&({lo:a,hi:l}=vn(t,"time",e)),({time:s,pos:n}=t[a]),({time:o,pos:r}=t[l]));const h=o-s;return h?n+(r-n)*(e-s)/h:n}var nd=Object.freeze({__proto__:null,CategoryScale:class extends zl{static id="category";static defaults={ticks:{callback:Pc}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:i,label:s}of e)t[i]===s&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(Mo(t))return null;const i=this.getLabels();return((t,e)=>null===t?null:gn(Math.round(t),0,e))(e=isFinite(e)&&i[e]===t?e:Ec(i,t,Eo(e,t),this._addedLabels),i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let o=this.getLabels();o=0===t&&e===o.length-1?o:o.slice(t,e+1),this._valueRange=Math.max(o.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)s.push({value:i});return s}getLabelForValue(t){return Pc.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}},LinearScale:Lc,LogarithmicScale:Bc,RadialLinearScale:Kc,TimeScale:sd,TimeSeriesScale:class extends sd{static id="timeseries";static defaults=sd.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=od(e,this.min),this._tableRange=od(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],o=[];let n,r,a,l,h;for(n=0,r=t.length;n<r;++n)l=t[n],l>=e&&l<=i&&s.push(l);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(n=0,r=s.length;n<r;++n)h=s[n+1],a=s[n-1],l=s[n],Math.round((h+a)/2)!==l&&o.push({time:l,pos:n/(r-1)});return o}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(od(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return od(this._table,i*this._tableRange+this._minPos,!0)}}});const rd=[Ba,Oh,Cc,nd];hh.register(...rd);var ad=hh;let ld=class extends Zi{constructor(){super()}createRenderRoot(){return this}fill(){const t=this.querySelector("canvas").getContext("2d");return new ad(t,{type:"line",data:{labels:["januar","february","march","april,","may","juni","juli","august"],datasets:[{label:"My First Dataset",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]},options:{onClick:t=>{},plugins:{legend:{display:!1}}}})}render(){return Oi`<sl-card class="card-overview graph-cards">
            <div>
                <canvas></canvas>
            </div>

            <div slot="footer">data in a chart</div>
        </sl-card>`}};ld=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}([vs(),Qi("graph-card")],ld);var hd=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let cd=class extends Zi{name="";constructor(){super()}createRenderRoot(){return this}#r({rows:t},e){return[...new Array(t)].map((function(t,i){return Oi`<div class="view-row">${e[i]}</div>`}))}setActive(){}render(t=""){const e=us.items.find((t=>t.name===this.name)),i=Object.freeze({analytics:Oi`<h1 class="view-headline">${Bs(Fs("analytics"))}</h1>`,dashboard:Oi`<h1 class="view-headline">${Bs(Fs("dashboard"))}</h1>`,calendar:Oi`<h1 class="view-headline">${Bs(Fs("calendar"))}</h1>`,profile:Oi`<h1 class="view-headline">${Bs(Fs("profile"))}</h1>`});return Oi`<div class="view-container">
            <header>${i[this.name]}</header>
            <div class="view-content grid-cols-${e.rows}">${this.#r(e,t)}</div>
        </div>`}};hd([function(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ts(t,e)}({attribute:!0,reflect:!0})],cd.prototype,"name",void 0),cd=hd([vs(),Qi("view-layout")],cd);var dd=cd;const ud=["de-CH-1901"],{getLocale:pd,setLocale:fd}=(gd={sourceLocale:"en",targetLocales:ud,loadLocale:t=>import(`/js/locales/${t}.js`)},function(t){if(Vs)throw new Error("lit-localize can only be configured once");Fs=t,Vs=!0}(((t,e)=>Ss(Ds,t,e))),Ts=Es=gd.sourceLocale,Ps=new Set(gd.targetLocales),Ps.add(gd.sourceLocale),Os=gd.loadLocale,{getLocale:zs,setLocale:Is});var gd;const bd=[{code:"en",name:"English"},{code:"de-CH-1901",name:"German"}];let md=class extends dd{constructor(){super()}updated(){const t=localStorage.getItem("lang");t&&"en"!==t&&fd(t)}createRenderRoot(){return this}#a({target:{value:t}}){fd(t),localStorage.setItem("lang",t),document.querySelector("html")?.setAttribute("lang",t)}#r(){const t=localStorage.getItem("lang")||bd[0].code;return[Oi`<sl-radio-group
            @click="${this.#a}"
            label="${Bs(Fs("language"))}"
            value="${t}"
        >
            ${ds(bd,(function({name:t,code:e}){return Oi`<sl-radio-button value="${e}">${t}</sl-radio-button>`}))}
        </sl-radio-group>`]}render(){const t=this.#r();return super.render(t)}};md=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}([vs(),Qi("profile-layout")],md);let vd=class extends dd{constructor(){super()}createRenderRoot(){return this}setActive(){this.querySelector("graph-card")?.fill()}#r(){return[Oi`<graph-card></graph-card>

            <sl-button variant="default">Default</sl-button>
            <sl-button variant="primary">Primary</sl-button>
            <sl-button variant="success">Success</sl-button>
            <sl-button variant="neutral">Neutral</sl-button>
            <sl-button variant="warning">Warning</sl-button>
            <sl-button variant="danger">Danger</sl-button>`,Oi`<sl-button-group label="Alignment">
            <sl-button>Left</sl-button>
            <sl-button>Center</sl-button>
            <sl-button>Right</sl-button>
        </sl-button-group>`]}render(){const t=this.#r();return super.render(t)}};vd=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}([vs(),Qi("dashboard-layout")],vd);let yd=class extends Zi{constructor(){super()}createRenderRoot(){return this}bootstrapActiveMenu(){const t=us.items[0].name,e=localStorage.getItem("active-view")||t,i=this.querySelector(`.nav-element-click[name="${e}"]`);i&&i.click()}#l({detail:{name:t}}){const e=this.querySelector('.view[active="true"]'),i=this.querySelector(`.view[name="${t}"]`);e&&e.setAttribute("active","false"),localStorage.setItem("active-view",t),i.setAttribute("active","true"),i.setActive()}#h(){const t=this.querySelector(".nav"),e="true"===t.getAttribute("closed");return t.setAttribute("closed",!e+"")}render(){return Oi`<main-nav class="nav" closed="true" @viewSwitch="${this.#l}"></main-nav>
            <main>
                <div class="view-header">
                    <i
                        closed="true"
                        @click="${this.#h}"
                        class="fa fa-solid fa-fw fa-bars fa-2x hamburger-menu"
                    ></i>
                </div>
                ${ds(us.items,(t=>"dashboard"===t.name?Oi`<dashboard-layout
                            name="${t.name}"
                            class="view"
                            active="false"
                        ></dashboard-layout>`:"profile"===t.name?Oi`<profile-layout name="${t.name}" class="view" active="false"></profile-layout>`:Oi`<view-layout name="${t.name}" class="view" active="false"></view-layout>`))}
            </main>`}};yd=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}([Qi("app-layout")],yd),document.addEventListener("DOMContentLoaded",(function(){document.querySelector("app-layout").bootstrapActiveMenu()})),Zt("/assets/shoelace")}();