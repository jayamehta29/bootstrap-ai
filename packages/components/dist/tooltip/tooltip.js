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
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
/**
 * Tooltip component for contextual information
 *
 * @tag fk-tooltip
 * @slot - Tooltip content
 * @slot trigger - Element that triggers the tooltip
 *
 * @csspart tooltip - The tooltip element
 * @csspart trigger - The trigger element
 *
 * @cssproperty --fk-tooltip-bg - Tooltip background color
 * @cssproperty --fk-tooltip-color - Tooltip text color
 * @cssproperty --fk-tooltip-padding - Tooltip padding
 * @cssproperty --fk-tooltip-radius - Tooltip border radius
 * @cssproperty --fk-tooltip-font-size - Tooltip font size
 * @cssproperty --fk-tooltip-max-width - Tooltip max width
 */
let FkTooltip = class FkTooltip extends LitElement {
    static styles = css `
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
  `;
    position = 'top';
    delay = 500;
    disabled = false;
    _visible = false;
    _timeoutId;
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('mouseenter', this._handleMouseEnter);
        this.addEventListener('mouseleave', this._handleMouseLeave);
        this.addEventListener('focusin', this._handleFocusIn);
        this.addEventListener('focusout', this._handleFocusOut);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('mouseenter', this._handleMouseEnter);
        this.removeEventListener('mouseleave', this._handleMouseLeave);
        this.removeEventListener('focusin', this._handleFocusIn);
        this.removeEventListener('focusout', this._handleFocusOut);
        this._clearTimeout();
    }
    render() {
        const tooltipClasses = {
            tooltip: true,
            [`tooltip--${this.position}`]: true,
            'tooltip--visible': this._visible,
        };
        return html `
      <div part="trigger" class="trigger">
        <slot name="trigger"></slot>
      </div>
      <div part="tooltip" class=${classMap(tooltipClasses)} role="tooltip">
        <slot></slot>
      </div>
    `;
    }
    _handleMouseEnter() {
        if (this.disabled)
            return;
        this._clearTimeout();
        this._timeoutId = window.setTimeout(() => {
            this._visible = true;
        }, this.delay);
    }
    _handleMouseLeave() {
        this._clearTimeout();
        this._visible = false;
    }
    _handleFocusIn() {
        if (this.disabled)
            return;
        this._clearTimeout();
        this._visible = true;
    }
    _handleFocusOut() {
        this._clearTimeout();
        this._visible = false;
    }
    _clearTimeout() {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            this._timeoutId = undefined;
        }
    }
};
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], FkTooltip.prototype, "position", void 0);
__decorate([
    property({ type: Number, reflect: true }),
    __metadata("design:type", Object)
], FkTooltip.prototype, "delay", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FkTooltip.prototype, "disabled", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], FkTooltip.prototype, "_visible", void 0);
__decorate([
    state(),
    __metadata("design:type", Number)
], FkTooltip.prototype, "_timeoutId", void 0);
FkTooltip = __decorate([
    customElement('fk-tooltip')
], FkTooltip);
export { FkTooltip };
//# sourceMappingURL=tooltip.js.map