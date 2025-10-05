import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Button component with variants, sizes, and accessibility features
 * 
 * @tag fk-button
 * @slot - Button content
 * @slot leading-icon - Icon before content
 * @slot trailing-icon - Icon after content
 * 
 * @csspart button - The button element
 * @csspart content - The content wrapper
 * @csspart leading-icon - The leading icon slot
 * @csspart trailing-icon - The trailing icon slot
 * 
 * @cssproperty --fk-button-bg - Button background color
 * @cssproperty --fk-button-color - Button text color
 * @cssproperty --fk-button-border - Button border color
 * @cssproperty --fk-button-padding - Button padding
 * @cssproperty --fk-button-radius - Button border radius
 * @cssproperty --fk-button-font-size - Button font size
 * @cssproperty --fk-button-font-weight - Button font weight
 */
@customElement('fk-button')
export class FkButton extends LitElement {
  static styles = css`
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
  `;

  @property({ type: String, reflect: true })
  variant: 'solid' | 'soft' | 'ghost' | 'link' = 'solid';

  @property({ type: String, reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: String, reflect: true })
  type: 'button' | 'submit' | 'reset' = 'button';

  @property({ type: String, reflect: true })
  href?: string;

  @property({ type: String, reflect: true })
  target?: string;

  @property({ type: String, reflect: true })
  rel?: string;

  render() {
    const classes = {
      button: true,
      [`button--${this.variant}`]: true,
      [`button--${this.size}`]: this.size !== 'md',
      'button--loading': this.loading,
    };

    const content = html`
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

    if (this.href) {
      return html`
        <a
          part="button"
          class=${classMap(classes)}
          href=${this.href}
          target=${this.target || undefined}
          rel=${this.rel || undefined}
          ?disabled=${this.disabled || this.loading}
          role="button"
          tabindex=${this.disabled || this.loading ? -1 : 0}
        >
          ${content}
        </a>
      `;
    }

    return html`
      <button
        part="button"
        class=${classMap(classes)}
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        @click=${this._handleClick}
      >
        ${content}
      </button>
    `;
  }

  private _handleClick(event: Event) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Dispatch custom event
    this.dispatchEvent(
      new CustomEvent('fk-click', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fk-button': FkButton;
  }
}
