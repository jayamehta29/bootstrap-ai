import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Spinner component for loading states
 * 
 * @tag fk-spinner
 * 
 * @csspart spinner - The spinner element
 * 
 * @cssproperty --fk-spinner-size - Spinner size (default: 1em)
 * @cssproperty --fk-spinner-color - Spinner color (default: currentColor)
 * @cssproperty --fk-spinner-stroke-width - Spinner stroke width (default: 2)
 */
@customElement('fk-spinner')
export class FkSpinner extends LitElement {
  static styles = css`
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
  `;

  @property({ type: String, reflect: true })
  variant: 'spinner' | 'dots' | 'pulse' = 'spinner';

  @property({ type: String, reflect: true })
  size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  @property({ type: String, reflect: true })
  color?: string;

  render() {
    const classes = {
      spinner: true,
      [`spinner--${this.variant}`]: true,
      [`spinner--${this.size}`]: this.size !== 'md',
    };

    const style = {
      '--fk-spinner-color': this.color,
    };

    return html`
      <div
        part="spinner"
        class=${classMap(classes)}
        style=${Object.entries(style)
          .filter(([, value]) => value)
          .map(([key, value]) => `${key}: ${value}`)
          .join('; ')}
        role="status"
        aria-label="Loading"
      >
        <span class="fk-sr-only">Loading...</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fk-spinner': FkSpinner;
  }
}
