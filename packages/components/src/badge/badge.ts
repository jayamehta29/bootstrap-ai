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
@customElement('fk-badge')
export class FkBadge extends LitElement {
  static styles = css`
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

  @property({ type: String, reflect: true })
  variant: 'primary' | 'success' | 'warning' | 'error' | 'neutral' = 'neutral';

  @property({ type: String, reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';

  @property({ type: Boolean, reflect: true })
  dot = false;

  render() {
    const classes = {
      badge: true,
      [`badge--${this.variant}`]: true,
      [`badge--${this.size}`]: this.size !== 'md',
      'badge--dot': this.dot,
    };

    return html`
      <span part="badge" class=${classMap(classes)}>
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fk-badge': FkBadge;
  }
}
