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
@customElement('fk-icon')
export class FkIcon extends LitElement {
  static styles = css`
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

  @property({ type: String, reflect: true })
  name = '';

  @property({ type: String, reflect: true })
  size?: string;

  @property({ type: String, reflect: true })
  color?: string;

  @property({ type: Boolean, reflect: true })
  stroke = false;

  @property({ type: String, reflect: true })
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

    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'fk-icon': FkIcon;
  }
}
