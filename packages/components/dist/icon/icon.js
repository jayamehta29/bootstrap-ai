var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * Icon component for displaying SVG icons
 *
 * @tag fk-icon
 *
 * @csspart icon - The icon element
 *
 * @cssproperty --fk-icon-size - Icon size (default: 1em)
 * @cssproperty --fk-icon-color - Icon color (default: currentColor)
 */
let FkIcon = class FkIcon extends LitElement {
    static styles = css `
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
  `;
    name = '';
    size;
    color;
    stroke = false;
    viewBox = '0 0 24 24';
    render() {
        const classes = {
            icon: true,
            'icon--stroke': this.stroke,
        };
        const style = {
            '--fk-icon-size': this.size,
            '--fk-icon-color': this.color,
        };
        return html `
      <svg
        part="icon"
        class=${classes}
        style=${Object.entries(style)
            .filter(([, value]) => value)
            .map(([key, value]) => `${key}: ${value}`)
            .join('; ')}
        viewBox=${this.viewBox}
        aria-hidden="true"
      >
        <slot></slot>
      </svg>
    `;
    }
};
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FkIcon.prototype, "name", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], FkIcon.prototype, "size", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], FkIcon.prototype, "color", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FkIcon.prototype, "stroke", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], FkIcon.prototype, "viewBox", void 0);
FkIcon = __decorate([
    customElement('fk-icon')
], FkIcon);
export { FkIcon };
//# sourceMappingURL=icon.js.map