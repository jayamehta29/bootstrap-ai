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
import { classMap } from 'lit/directives/class-map.js';
/**
 * Badge component for displaying status indicators
 *
 * @tag fk-badge
 * @slot - Badge content
 *
 * @csspart badge - The badge element
 *
 * @cssproperty --fk-badge-bg - Badge background color
 * @cssproperty --fk-badge-color - Badge text color
 * @cssproperty --fk-badge-padding - Badge padding
 * @cssproperty --fk-badge-radius - Badge border radius
 * @cssproperty --fk-badge-font-size - Badge font size
 */
let FkBadge = class FkBadge extends LitElement {
    static styles = css `
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
  `;
    variant = 'neutral';
    size = 'md';
    dot = false;
    render() {
        const classes = {
            badge: true,
            [`badge--${this.variant}`]: true,
            [`badge--${this.size}`]: this.size !== 'md',
            'badge--dot': this.dot,
        };
        return html `
      <span part="badge" class=${classMap(classes)}>
        <slot></slot>
      </span>
    `;
    }
};
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], FkBadge.prototype, "variant", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String)
], FkBadge.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], FkBadge.prototype, "dot", void 0);
FkBadge = __decorate([
    customElement('fk-badge')
], FkBadge);
export { FkBadge };
//# sourceMappingURL=badge.js.map