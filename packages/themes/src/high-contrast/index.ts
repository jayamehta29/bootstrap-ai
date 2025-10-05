import { css } from 'lit';

/**
 * High contrast theme CSS custom properties for accessibility
 */
export const highContrastTheme = css`
  [data-theme='high-contrast'] {
    /* High contrast color tokens */
    --color-primary-50: #000000;
    --color-primary-100: #000000;
    --color-primary-200: #000000;
    --color-primary-300: #000000;
    --color-primary-400: #000000;
    --color-primary-500: #0000ff;
    --color-primary-600: #0000ff;
    --color-primary-700: #0000ff;
    --color-primary-800: #0000ff;
    --color-primary-900: #0000ff;
    --color-primary-950: #0000ff;

    --color-neutral-50: #000000;
    --color-neutral-100: #000000;
    --color-neutral-200: #000000;
    --color-neutral-300: #000000;
    --color-neutral-400: #000000;
    --color-neutral-500: #000000;
    --color-neutral-600: #000000;
    --color-neutral-700: #000000;
    --color-neutral-800: #000000;
    --color-neutral-900: #000000;
    --color-neutral-950: #000000;

    --color-success-50: #000000;
    --color-success-500: #00ff00;
    --color-success-600: #00ff00;
    --color-success-700: #00ff00;

    --color-warning-50: #000000;
    --color-warning-500: #ffff00;
    --color-warning-600: #ffff00;
    --color-warning-700: #ffff00;

    --color-error-50: #000000;
    --color-error-500: #ff0000;
    --color-error-600: #ff0000;
    --color-error-700: #ff0000;

    /* Surface colors */
    --color-surface: #ffffff;
    --color-surface-secondary: #ffffff;
    --color-surface-tertiary: #ffffff;
    --color-border: #000000;
    --color-border-secondary: #000000;

    /* Text colors */
    --color-text-primary: #000000;
    --color-text-secondary: #000000;
    --color-text-tertiary: #000000;
    --color-text-inverse: #ffffff;

    /* Background colors */
    --color-bg-primary: #ffffff;
    --color-bg-secondary: #ffffff;
    --color-bg-tertiary: #ffffff;

    /* Enhanced focus indicators */
    --focus-ring-width: 3px;
    --focus-ring-color: #0000ff;
  }
`;

export default highContrastTheme;
