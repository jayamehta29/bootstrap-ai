var kt = Object.defineProperty;
var Et = (s, t, e) => t in s ? kt(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var c = (s, t, e) => Et(s, typeof t != "symbol" ? t + "" : t, e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis, tt = W.ShadowRoot && (W.ShadyCSS === void 0 || W.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, et = Symbol(), it = /* @__PURE__ */ new WeakMap();
let ft = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== et) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (tt && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = it.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && it.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const xt = (s) => new ft(typeof s == "string" ? s : s + "", void 0, et), F = (s, ...t) => {
  const e = s.length === 1 ? s[0] : t.reduce(((r, i, o) => r + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + s[o + 1]), s[0]);
  return new ft(e, s, et);
}, Pt = (s, t) => {
  if (tt) s.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
  else for (const e of t) {
    const r = document.createElement("style"), i = W.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = e.cssText, s.appendChild(r);
  }
}, ot = tt ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return xt(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ct, defineProperty: Ot, getOwnPropertyDescriptor: zt, getOwnPropertyNames: Tt, getOwnPropertySymbols: Ut, getPrototypeOf: Mt } = Object, y = globalThis, nt = y.trustedTypes, Nt = nt ? nt.emptyScript : "", Ht = y.reactiveElementPolyfillSupport, H = (s, t) => s, q = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? Nt : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, rt = (s, t) => !Ct(s, t), at = { attribute: !0, type: String, converter: q, reflect: !1, useDefault: !1, hasChanged: rt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), y.litPropertyMetadata ?? (y.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let C = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = at) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), i = this.getPropertyDescriptor(t, r, e);
      i !== void 0 && Ot(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: i, set: o } = zt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: i, set(n) {
      const l = i?.call(this);
      o?.call(this, n), this.requestUpdate(t, l, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? at;
  }
  static _$Ei() {
    if (this.hasOwnProperty(H("elementProperties"))) return;
    const t = Mt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(H("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(H("properties"))) {
      const e = this.properties, r = [...Tt(e), ...Ut(e)];
      for (const i of r) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, i] of e) this.elementProperties.set(r, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const i = this._$Eu(e, r);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const i of r) e.unshift(ot(i));
    } else t !== void 0 && e.push(ot(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((t) => this.enableUpdating = t)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((t) => t(this)));
  }
  addController(t) {
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Pt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), this._$EO?.forEach(((t) => t.hostConnected?.()));
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((t) => t.hostDisconnected?.()));
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ET(t, e) {
    const r = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, r);
    if (i !== void 0 && r.reflect === !0) {
      const o = (r.converter?.toAttribute !== void 0 ? r.converter : q).toAttribute(e, r.type);
      this._$Em = t, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const r = this.constructor, i = r._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const o = r.getPropertyOptions(i), n = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : q;
      this._$Em = i;
      const l = n.fromAttribute(e, o.type);
      this[i] = l ?? this._$Ej?.get(i) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, r) {
    if (t !== void 0) {
      const i = this.constructor, o = this[t];
      if (r ?? (r = i.getPropertyOptions(t)), !((r.hasChanged ?? rt)(o, e) || r.useDefault && r.reflect && o === this._$Ej?.get(t) && !this.hasAttribute(i._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: i, wrapped: o }, n) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), o !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, o] of this._$Ep) this[i] = o;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [i, o] of r) {
        const { wrapped: n } = o, l = this[i];
        n !== !0 || this._$AL.has(i) || l === void 0 || this.C(i, void 0, o, l);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach(((r) => r.hostUpdate?.())), this.update(e)) : this._$EM();
    } catch (r) {
      throw t = !1, this._$EM(), r;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach(((e) => e.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach(((e) => this._$ET(e, this[e])))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
C.elementStyles = [], C.shadowRootOptions = { mode: "open" }, C[H("elementProperties")] = /* @__PURE__ */ new Map(), C[H("finalized")] = /* @__PURE__ */ new Map(), Ht?.({ ReactiveElement: C }), (y.reactiveElementVersions ?? (y.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R = globalThis, J = R.trustedTypes, lt = J ? J.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, gt = "$lit$", _ = `lit$${Math.random().toFixed(9).slice(2)}$`, bt = "?" + _, Rt = `<${bt}>`, x = document, j = () => x.createComment(""), D = (s) => s === null || typeof s != "object" && typeof s != "function", st = Array.isArray, Lt = (s) => st(s) || typeof s?.[Symbol.iterator] == "function", Q = `[ 	
\f\r]`, N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ct = /-->/g, ht = />/g, S = RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), pt = /'/g, dt = /"/g, vt = /^(?:script|style|textarea|title)$/i, jt = (s) => (t, ...e) => ({ _$litType$: s, strings: t, values: e }), E = jt(1), P = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), ut = /* @__PURE__ */ new WeakMap(), k = x.createTreeWalker(x, 129);
function mt(s, t) {
  if (!st(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return lt !== void 0 ? lt.createHTML(t) : t;
}
const Dt = (s, t) => {
  const e = s.length - 1, r = [];
  let i, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = N;
  for (let l = 0; l < e; l++) {
    const a = s[l];
    let d, f, h = -1, b = 0;
    for (; b < a.length && (n.lastIndex = b, f = n.exec(a), f !== null); ) b = n.lastIndex, n === N ? f[1] === "!--" ? n = ct : f[1] !== void 0 ? n = ht : f[2] !== void 0 ? (vt.test(f[2]) && (i = RegExp("</" + f[2], "g")), n = S) : f[3] !== void 0 && (n = S) : n === S ? f[0] === ">" ? (n = i ?? N, h = -1) : f[1] === void 0 ? h = -2 : (h = n.lastIndex - f[2].length, d = f[1], n = f[3] === void 0 ? S : f[3] === '"' ? dt : pt) : n === dt || n === pt ? n = S : n === ct || n === ht ? n = N : (n = S, i = void 0);
    const $ = n === S && s[l + 1].startsWith("/>") ? " " : "";
    o += n === N ? a + Rt : h >= 0 ? (r.push(d), a.slice(0, h) + gt + a.slice(h) + _ + $) : a + _ + (h === -2 ? l : $);
  }
  return [mt(s, o + (s[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class I {
  constructor({ strings: t, _$litType$: e }, r) {
    let i;
    this.parts = [];
    let o = 0, n = 0;
    const l = t.length - 1, a = this.parts, [d, f] = Dt(t, e);
    if (this.el = I.createElement(d, r), k.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (i = k.nextNode()) !== null && a.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const h of i.getAttributeNames()) if (h.endsWith(gt)) {
          const b = f[n++], $ = i.getAttribute(h).split(_), V = /([.?@])?(.*)/.exec(b);
          a.push({ type: 1, index: o, name: V[2], strings: $, ctor: V[1] === "." ? Bt : V[1] === "?" ? Ft : V[1] === "@" ? Yt : K }), i.removeAttribute(h);
        } else h.startsWith(_) && (a.push({ type: 6, index: o }), i.removeAttribute(h));
        if (vt.test(i.tagName)) {
          const h = i.textContent.split(_), b = h.length - 1;
          if (b > 0) {
            i.textContent = J ? J.emptyScript : "";
            for (let $ = 0; $ < b; $++) i.append(h[$], j()), k.nextNode(), a.push({ type: 2, index: ++o });
            i.append(h[b], j());
          }
        }
      } else if (i.nodeType === 8) if (i.data === bt) a.push({ type: 2, index: o });
      else {
        let h = -1;
        for (; (h = i.data.indexOf(_, h + 1)) !== -1; ) a.push({ type: 7, index: o }), h += _.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const r = x.createElement("template");
    return r.innerHTML = t, r;
  }
}
function O(s, t, e = s, r) {
  if (t === P) return t;
  let i = r !== void 0 ? e._$Co?.[r] : e._$Cl;
  const o = D(t) ? void 0 : t._$litDirective$;
  return i?.constructor !== o && (i?._$AO?.(!1), o === void 0 ? i = void 0 : (i = new o(s), i._$AT(s, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = i : e._$Cl = i), i !== void 0 && (t = O(s, i._$AS(s, t.values), i, r)), t;
}
class It {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: r } = this._$AD, i = (t?.creationScope ?? x).importNode(e, !0);
    k.currentNode = i;
    let o = k.nextNode(), n = 0, l = 0, a = r[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let d;
        a.type === 2 ? d = new Y(o, o.nextSibling, this, t) : a.type === 1 ? d = new a.ctor(o, a.name, a.strings, this, t) : a.type === 6 && (d = new Xt(o, this, t)), this._$AV.push(d), a = r[++l];
      }
      n !== a?.index && (o = k.nextNode(), n++);
    }
    return k.currentNode = x, i;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class Y {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, r, i) {
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = i, this._$Cv = i?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = O(this, t, e), D(t) ? t === u || t == null || t === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : t !== this._$AH && t !== P && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Lt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== u && D(this._$AH) ? this._$AA.nextSibling.data = t : this.T(x.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: r } = t, i = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = I.createElement(mt(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === i) this._$AH.p(e);
    else {
      const o = new It(i, this), n = o.u(this.options);
      o.p(e), this.T(n), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = ut.get(t.strings);
    return e === void 0 && ut.set(t.strings, e = new I(t)), e;
  }
  k(t) {
    st(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, i = 0;
    for (const o of t) i === e.length ? e.push(r = new Y(this.O(j()), this.O(j()), this, this.options)) : r = e[i], r._$AI(o), i++;
    i < e.length && (this._$AR(r && r._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class K {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, i, o) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = u;
  }
  _$AI(t, e = this, r, i) {
    const o = this.strings;
    let n = !1;
    if (o === void 0) t = O(this, t, e, 0), n = !D(t) || t !== this._$AH && t !== P, n && (this._$AH = t);
    else {
      const l = t;
      let a, d;
      for (t = o[0], a = 0; a < o.length - 1; a++) d = O(this, l[r + a], e, a), d === P && (d = this._$AH[a]), n || (n = !D(d) || d !== this._$AH[a]), d === u ? t = u : t !== u && (t += (d ?? "") + o[a + 1]), this._$AH[a] = d;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Bt extends K {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
class Ft extends K {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== u);
  }
}
class Yt extends K {
  constructor(t, e, r, i, o) {
    super(t, e, r, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = O(this, t, e, 0) ?? u) === P) return;
    const r = this._$AH, i = t === u && r !== u || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, o = t !== u && (r === u || i);
    i && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Xt {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    O(this, t);
  }
}
const Vt = R.litHtmlPolyfillSupport;
Vt?.(I, Y), (R.litHtmlVersions ?? (R.litHtmlVersions = [])).push("3.3.1");
const Wt = (s, t, e) => {
  const r = e?.renderBefore ?? t;
  let i = r._$litPart$;
  if (i === void 0) {
    const o = e?.renderBefore ?? null;
    r._$litPart$ = i = new Y(t.insertBefore(j(), o), o, void 0, e ?? {});
  }
  return i._$AI(s), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis;
let v = class extends C {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Wt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return P;
  }
};
v._$litElement$ = !0, v.finalized = !0, L.litElementHydrateSupport?.({ LitElement: v });
const qt = L.litElementPolyfillSupport;
qt?.({ LitElement: v });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = (s) => (t, e) => {
  e !== void 0 ? e.addInitializer((() => {
    customElements.define(s, t);
  })) : customElements.define(s, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jt = { attribute: !0, type: String, converter: q, reflect: !1, hasChanged: rt }, Kt = (s = Jt, t, e) => {
  const { kind: r, metadata: i } = e;
  let o = globalThis.litPropertyMetadata.get(i);
  if (o === void 0 && globalThis.litPropertyMetadata.set(i, o = /* @__PURE__ */ new Map()), r === "setter" && ((s = Object.create(s)).wrapped = !0), o.set(e.name, s), r === "accessor") {
    const { name: n } = e;
    return { set(l) {
      const a = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(n, a, s);
    }, init(l) {
      return l !== void 0 && this.C(n, void 0, s, l), l;
    } };
  }
  if (r === "setter") {
    const { name: n } = e;
    return function(l) {
      const a = this[n];
      t.call(this, l), this.requestUpdate(n, a, s);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function p(s) {
  return (t, e) => typeof e == "object" ? Kt(s, t, e) : ((r, i, o) => {
    const n = i.hasOwnProperty(o);
    return i.constructor.createProperty(o, r), n ? Object.getOwnPropertyDescriptor(i, o) : void 0;
  })(s, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function $t(s) {
  return p({ ...s, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Zt = { ATTRIBUTE: 1 }, Gt = (s) => (...t) => ({ _$litDirective$: s, values: t });
class Qt {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, r) {
    this._$Ct = t, this._$AM = e, this._$Ci = r;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B = Gt(class extends Qt {
  constructor(s) {
    if (super(s), s.type !== Zt.ATTRIBUTE || s.name !== "class" || s.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(s) {
    return " " + Object.keys(s).filter(((t) => s[t])).join(" ") + " ";
  }
  update(s, [t]) {
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), s.strings !== void 0 && (this.nt = new Set(s.strings.join(" ").split(/\s/).filter(((r) => r !== ""))));
      for (const r in t) t[r] && !this.nt?.has(r) && this.st.add(r);
      return this.render(t);
    }
    const e = s.element.classList;
    for (const r of this.st) r in t || (e.remove(r), this.st.delete(r));
    for (const r in t) {
      const i = !!t[r];
      i === this.st.has(r) || this.nt?.has(r) || (i ? (e.add(r), this.st.add(r)) : (e.remove(r), this.st.delete(r)));
    }
    return P;
  }
});
var _t = Object.defineProperty, te = Object.getOwnPropertyDescriptor, ee = (s, t, e) => t in s ? _t(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, m = (s, t, e, r) => {
  for (var i = r > 1 ? void 0 : r ? te(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (i = (r ? n(t, e, i) : n(i)) || i);
  return r && i && _t(t, e, i), i;
}, re = (s, t, e) => ee(s, t + "", e);
let g = class extends v {
  constructor() {
    super(...arguments);
    c(this, "variant", "solid");
    c(this, "size", "md");
    c(this, "disabled", !1);
    c(this, "loading", !1);
    c(this, "type", "button");
    c(this, "href");
    c(this, "target");
    c(this, "rel");
  }
  render() {
    const t = {
      button: !0,
      [`button--${this.variant}`]: !0,
      [`button--${this.size}`]: this.size !== "md",
      "button--loading": this.loading
    }, e = E`
      <span part="leading-icon" class="leading-icon">
        <slot name="leading-icon"></slot>
      </span>
      <span part="content" class="content">
        <slot></slot>
      </span>
      <span part="trailing-icon" class="trailing-icon">
        <slot name="trailing-icon"></slot>
      </span>
    `;
    return this.href ? E`
        <a
          part="button"
          class=${B(t)}
          href=${this.href}
          target=${this.target || void 0}
          rel=${this.rel || void 0}
          ?disabled=${this.disabled || this.loading}
          role="button"
          tabindex=${this.disabled || this.loading ? -1 : 0}
        >
          ${e}
        </a>
      ` : E`
      <button
        part="button"
        class=${B(t)}
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        @click=${this._handleClick}
      >
        ${e}
      </button>
    `;
  }
  _handleClick(t) {
    if (this.disabled || this.loading) {
      t.preventDefault(), t.stopPropagation();
      return;
    }
    this.dispatchEvent(
      new CustomEvent("fk-click", {
        detail: { originalEvent: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
};
re(g, "styles", F`
    :host {
      display: inline-block;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-2, 0.5rem);
      padding: var(--fk-button-padding, var(--spacing-3, 0.75rem) var(--spacing-4, 1rem));
      border: 1px solid var(--fk-button-border, transparent);
      border-radius: var(--fk-button-radius, var(--radius-md, 0.375rem));
      background-color: var(--fk-button-bg, var(--color-primary-500, #0ea5e9));
      color: var(--fk-button-color, white);
      font-size: var(--fk-button-font-size, var(--typography-fontSize-base, 1rem));
      font-weight: var(--fk-button-font-weight, var(--typography-fontWeight-medium, 500));
      font-family: inherit;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      transition: all var(--motion-duration-fast, 150ms) var(--motion-easing-ease, cubic-bezier(0.4, 0, 0.2, 1));
      user-select: none;
      white-space: nowrap;
    }

    .button:focus-visible {
      outline: 2px solid var(--color-primary-500, #0ea5e9);
      outline-offset: 2px;
    }

    .button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .button:not(:disabled):hover {
      transform: translateY(-1px);
      box-shadow: var(--elevation-md, 0 4px 6px -1px rgb(0 0 0 / 0.1));
    }

    .button:not(:disabled):active {
      transform: translateY(0);
    }

    /* Variants */
    .button--solid {
      --fk-button-bg: var(--color-primary-500, #0ea5e9);
      --fk-button-color: white;
      --fk-button-border: var(--color-primary-500, #0ea5e9);
    }

    .button--soft {
      --fk-button-bg: var(--color-primary-50, #f0f9ff);
      --fk-button-color: var(--color-primary-700, #0369a1);
      --fk-button-border: var(--color-primary-200, #bae6fd);
    }

    .button--ghost {
      --fk-button-bg: transparent;
      --fk-button-color: var(--color-primary-600, #0284c7);
      --fk-button-border: transparent;
    }

    .button--ghost:hover {
      --fk-button-bg: var(--color-primary-50, #f0f9ff);
    }

    .button--link {
      --fk-button-bg: transparent;
      --fk-button-color: var(--color-primary-600, #0284c7);
      --fk-button-border: transparent;
      --fk-button-padding: 0;
      text-decoration: underline;
    }

    .button--link:hover {
      --fk-button-bg: transparent;
      text-decoration: none;
    }

    /* Sizes */
    .button--sm {
      --fk-button-padding: var(--spacing-2, 0.5rem) var(--spacing-3, 0.75rem);
      --fk-button-font-size: var(--typography-fontSize-sm, 0.875rem);
    }

    .button--lg {
      --fk-button-padding: var(--spacing-4, 1rem) var(--spacing-6, 1.5rem);
      --fk-button-font-size: var(--typography-fontSize-lg, 1.125rem);
    }

    /* Loading state */
    .button--loading {
      position: relative;
      color: transparent;
    }

    .button--loading::after {
      content: '';
      position: absolute;
      width: 1em;
      height: 1em;
      border: 2px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Icon slots */
    .leading-icon,
    .trailing-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .leading-icon ::slotted(*),
    .trailing-icon ::slotted(*) {
      width: 1em;
      height: 1em;
    }
  `);
m([
  p({ type: String, reflect: !0 })
], g.prototype, "variant", 2);
m([
  p({ type: String, reflect: !0 })
], g.prototype, "size", 2);
m([
  p({ type: Boolean, reflect: !0 })
], g.prototype, "disabled", 2);
m([
  p({ type: Boolean, reflect: !0 })
], g.prototype, "loading", 2);
m([
  p({ type: String, reflect: !0 })
], g.prototype, "type", 2);
m([
  p({ type: String, reflect: !0 })
], g.prototype, "href", 2);
m([
  p({ type: String, reflect: !0 })
], g.prototype, "target", 2);
m([
  p({ type: String, reflect: !0 })
], g.prototype, "rel", 2);
g = m([
  X("fk-button")
], g);
var yt = Object.defineProperty, se = Object.getOwnPropertyDescriptor, ie = (s, t, e) => t in s ? yt(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, U = (s, t, e, r) => {
  for (var i = r > 1 ? void 0 : r ? se(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (i = (r ? n(t, e, i) : n(i)) || i);
  return r && i && yt(t, e, i), i;
}, oe = (s, t, e) => ie(s, t + "", e);
let A = class extends v {
  constructor() {
    super(...arguments);
    c(this, "name", "");
    c(this, "size");
    c(this, "color");
    c(this, "stroke", !1);
    c(this, "viewBox", "0 0 24 24");
  }
  render() {
    const t = {
      icon: !0,
      "icon--stroke": this.stroke
    }, e = {
      "--fk-icon-size": this.size,
      "--fk-icon-color": this.color
    };
    return E`
      <svg
        part="icon"
        class=${t}
        style=${Object.entries(e).filter(([, r]) => r).map(([r, i]) => `${r}: ${i}`).join("; ")}
        viewBox=${this.viewBox}
        aria-hidden="true"
      >
        <slot></slot>
      </svg>
    `;
  }
};
oe(A, "styles", F`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .icon {
      width: var(--fk-icon-size, 1em);
      height: var(--fk-icon-size, 1em);
      fill: var(--fk-icon-color, currentColor);
      stroke: none;
    }

    .icon--stroke {
      fill: none;
      stroke: var(--fk-icon-color, currentColor);
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `);
U([
  p({ type: String, reflect: !0 })
], A.prototype, "name", 2);
U([
  p({ type: String, reflect: !0 })
], A.prototype, "size", 2);
U([
  p({ type: String, reflect: !0 })
], A.prototype, "color", 2);
U([
  p({ type: Boolean, reflect: !0 })
], A.prototype, "stroke", 2);
U([
  p({ type: String, reflect: !0 })
], A.prototype, "viewBox", 2);
A = U([
  X("fk-icon")
], A);
var At = Object.defineProperty, ne = Object.getOwnPropertyDescriptor, ae = (s, t, e) => t in s ? At(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, Z = (s, t, e, r) => {
  for (var i = r > 1 ? void 0 : r ? ne(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (i = (r ? n(t, e, i) : n(i)) || i);
  return r && i && At(t, e, i), i;
}, le = (s, t, e) => ae(s, t + "", e);
let z = class extends v {
  constructor() {
    super(...arguments);
    c(this, "variant", "neutral");
    c(this, "size", "md");
    c(this, "dot", !1);
  }
  render() {
    const t = {
      badge: !0,
      [`badge--${this.variant}`]: !0,
      [`badge--${this.size}`]: this.size !== "md",
      "badge--dot": this.dot
    };
    return E`
      <span part="badge" class=${B(t)}>
        <slot></slot>
      </span>
    `;
  }
};
le(z, "styles", F`
    :host {
      display: inline-block;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--fk-badge-padding, var(--spacing-1, 0.25rem) var(--spacing-2, 0.5rem));
      border-radius: var(--fk-badge-radius, var(--radius-full, 9999px));
      background-color: var(--fk-badge-bg, var(--color-neutral-100, #f5f5f5));
      color: var(--fk-badge-color, var(--color-neutral-800, #262626));
      font-size: var(--fk-badge-font-size, var(--typography-fontSize-xs, 0.75rem));
      font-weight: var(--typography-fontWeight-medium, 500);
      line-height: 1;
      white-space: nowrap;
    }

    /* Variants */
    .badge--primary {
      --fk-badge-bg: var(--color-primary-100, #e0f2fe);
      --fk-badge-color: var(--color-primary-800, #075985);
    }

    .badge--success {
      --fk-badge-bg: var(--color-success-100, #dcfce7);
      --fk-badge-color: var(--color-success-800, #166534);
    }

    .badge--warning {
      --fk-badge-bg: var(--color-warning-100, #fef3c7);
      --fk-badge-color: var(--color-warning-800, #92400e);
    }

    .badge--error {
      --fk-badge-bg: var(--color-error-100, #fee2e2);
      --fk-badge-color: var(--color-error-800, #991b1b);
    }

    .badge--neutral {
      --fk-badge-bg: var(--color-neutral-100, #f5f5f5);
      --fk-badge-color: var(--color-neutral-800, #262626);
    }

    /* Sizes */
    .badge--sm {
      --fk-badge-padding: var(--spacing-1, 0.25rem) var(--spacing-2, 0.5rem);
      --fk-badge-font-size: var(--typography-fontSize-xs, 0.75rem);
    }

    .badge--lg {
      --fk-badge-padding: var(--spacing-2, 0.5rem) var(--spacing-3, 0.75rem);
      --fk-badge-font-size: var(--typography-fontSize-sm, 0.875rem);
    }

    /* Dot variant */
    .badge--dot {
      --fk-badge-padding: 0;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
    }

    .badge--dot::slotted(*) {
      display: none;
    }
  `);
Z([
  p({ type: String, reflect: !0 })
], z.prototype, "variant", 2);
Z([
  p({ type: String, reflect: !0 })
], z.prototype, "size", 2);
Z([
  p({ type: Boolean, reflect: !0 })
], z.prototype, "dot", 2);
z = Z([
  X("fk-badge")
], z);
var wt = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, he = (s, t, e) => t in s ? wt(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, G = (s, t, e, r) => {
  for (var i = r > 1 ? void 0 : r ? ce(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (i = (r ? n(t, e, i) : n(i)) || i);
  return r && i && wt(t, e, i), i;
}, pe = (s, t, e) => he(s, t + "", e);
let T = class extends v {
  constructor() {
    super(...arguments);
    c(this, "variant", "spinner");
    c(this, "size", "md");
    c(this, "color");
  }
  render() {
    const t = {
      spinner: !0,
      [`spinner--${this.variant}`]: !0,
      [`spinner--${this.size}`]: this.size !== "md"
    }, e = {
      "--fk-spinner-color": this.color
    };
    return E`
      <div
        part="spinner"
        class=${B(t)}
        style=${Object.entries(e).filter(([, r]) => r).map(([r, i]) => `${r}: ${i}`).join("; ")}
        role="status"
        aria-label="Loading"
      >
        <span class="fk-sr-only">Loading...</span>
      </div>
    `;
  }
};
pe(T, "styles", F`
    :host {
      display: inline-block;
    }

    .spinner {
      width: var(--fk-spinner-size, 1em);
      height: var(--fk-spinner-size, 1em);
      border: var(--fk-spinner-stroke-width, 2px) solid transparent;
      border-top-color: var(--fk-spinner-color, currentColor);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .spinner--dots {
      border: none;
      background: none;
      animation: dots 1.5s ease-in-out infinite;
    }

    .spinner--dots::before,
    .spinner--dots::after {
      content: '';
      position: absolute;
      width: 0.25em;
      height: 0.25em;
      background-color: var(--fk-spinner-color, currentColor);
      border-radius: 50%;
      animation: dots 1.5s ease-in-out infinite;
    }

    .spinner--dots::before {
      animation-delay: -0.3s;
      transform: translateX(-0.5em);
    }

    .spinner--dots::after {
      animation-delay: 0.3s;
      transform: translateX(0.5em);
    }

    .spinner--pulse {
      border: none;
      background-color: var(--fk-spinner-color, currentColor);
      animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes dots {
      0%, 80%, 100% {
        opacity: 0.3;
        transform: scale(0.8);
      }
      40% {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 0.3;
        transform: scale(0.8);
      }
      50% {
        opacity: 1;
        transform: scale(1);
      }
    }

    /* Sizes */
    .spinner--sm {
      --fk-spinner-size: 0.75em;
    }

    .spinner--lg {
      --fk-spinner-size: 1.5em;
    }

    .spinner--xl {
      --fk-spinner-size: 2em;
    }
  `);
G([
  p({ type: String, reflect: !0 })
], T.prototype, "variant", 2);
G([
  p({ type: String, reflect: !0 })
], T.prototype, "size", 2);
G([
  p({ type: String, reflect: !0 })
], T.prototype, "color", 2);
T = G([
  X("fk-spinner")
], T);
var St = Object.defineProperty, de = Object.getOwnPropertyDescriptor, ue = (s, t, e) => t in s ? St(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, M = (s, t, e, r) => {
  for (var i = r > 1 ? void 0 : r ? de(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (i = (r ? n(t, e, i) : n(i)) || i);
  return r && i && St(t, e, i), i;
}, fe = (s, t, e) => ue(s, t + "", e);
let w = class extends v {
  constructor() {
    super(...arguments);
    c(this, "position", "top");
    c(this, "delay", 500);
    c(this, "disabled", !1);
    c(this, "_visible", !1);
    c(this, "_timeoutId");
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("mouseenter", this._handleMouseEnter), this.addEventListener("mouseleave", this._handleMouseLeave), this.addEventListener("focusin", this._handleFocusIn), this.addEventListener("focusout", this._handleFocusOut);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("mouseenter", this._handleMouseEnter), this.removeEventListener("mouseleave", this._handleMouseLeave), this.removeEventListener("focusin", this._handleFocusIn), this.removeEventListener("focusout", this._handleFocusOut), this._clearTimeout();
  }
  render() {
    const t = {
      tooltip: !0,
      [`tooltip--${this.position}`]: !0,
      "tooltip--visible": this._visible
    };
    return E`
      <div part="trigger" class="trigger">
        <slot name="trigger"></slot>
      </div>
      <div part="tooltip" class=${B(t)} role="tooltip">
        <slot></slot>
      </div>
    `;
  }
  _handleMouseEnter() {
    this.disabled || (this._clearTimeout(), this._timeoutId = window.setTimeout(() => {
      this._visible = !0;
    }, this.delay));
  }
  _handleMouseLeave() {
    this._clearTimeout(), this._visible = !1;
  }
  _handleFocusIn() {
    this.disabled || (this._clearTimeout(), this._visible = !0);
  }
  _handleFocusOut() {
    this._clearTimeout(), this._visible = !1;
  }
  _clearTimeout() {
    this._timeoutId && (clearTimeout(this._timeoutId), this._timeoutId = void 0);
  }
};
fe(w, "styles", F`
    :host {
      display: inline-block;
      position: relative;
    }

    .trigger {
      display: inline-block;
    }

    .tooltip {
      position: absolute;
      z-index: var(--z-index-tooltip, 1060);
      padding: var(--fk-tooltip-padding, var(--spacing-2, 0.5rem) var(--spacing-3, 0.75rem));
      background-color: var(--fk-tooltip-bg, var(--color-neutral-900, #171717));
      color: var(--fk-tooltip-color, white);
      border-radius: var(--fk-tooltip-radius, var(--radius-md, 0.375rem));
      font-size: var(--fk-tooltip-font-size, var(--typography-fontSize-sm, 0.875rem));
      line-height: var(--typography-lineHeight-normal, 1.5);
      max-width: var(--fk-tooltip-max-width, 200px);
      word-wrap: break-word;
      opacity: 0;
      visibility: hidden;
      transform: translateY(4px);
      transition: all var(--motion-duration-fast, 150ms) var(--motion-easing-ease, cubic-bezier(0.4, 0, 0.2, 1));
      pointer-events: none;
    }

    .tooltip--visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    /* Positions */
    .tooltip--top {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(4px);
    }

    .tooltip--top.tooltip--visible {
      transform: translateX(-50%) translateY(-8px);
    }

    .tooltip--bottom {
      top: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(-4px);
    }

    .tooltip--bottom.tooltip--visible {
      transform: translateX(-50%) translateY(8px);
    }

    .tooltip--left {
      right: 100%;
      top: 50%;
      transform: translateY(-50%) translateX(4px);
    }

    .tooltip--left.tooltip--visible {
      transform: translateY(-50%) translateX(-8px);
    }

    .tooltip--right {
      left: 100%;
      top: 50%;
      transform: translateY(-50%) translateX(-4px);
    }

    .tooltip--right.tooltip--visible {
      transform: translateY(-50%) translateX(8px);
    }

    /* Arrow */
    .tooltip::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border: 4px solid transparent;
    }

    .tooltip--top::after {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-top-color: var(--fk-tooltip-bg, var(--color-neutral-900, #171717));
    }

    .tooltip--bottom::after {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-color: var(--fk-tooltip-bg, var(--color-neutral-900, #171717));
    }

    .tooltip--left::after {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-left-color: var(--fk-tooltip-bg, var(--color-neutral-900, #171717));
    }

    .tooltip--right::after {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-right-color: var(--fk-tooltip-bg, var(--color-neutral-900, #171717));
    }
  `);
M([
  p({ type: String, reflect: !0 })
], w.prototype, "position", 2);
M([
  p({ type: Number, reflect: !0 })
], w.prototype, "delay", 2);
M([
  p({ type: Boolean, reflect: !0 })
], w.prototype, "disabled", 2);
M([
  $t()
], w.prototype, "_visible", 2);
M([
  $t()
], w.prototype, "_timeoutId", 2);
w = M([
  X("fk-tooltip")
], w);
export {
  z as FkBadge,
  g as FkButton,
  A as FkIcon,
  T as FkSpinner,
  w as FkTooltip
};
//# sourceMappingURL=bootstrap-ai-components.esm.js.map
