import { css } from 'lit';

/**
 * Dark theme CSS custom properties
 */
export const darkTheme = css`
  [data-theme='dark'] {
    /* Color tokens - adjusted for dark mode */
    --color-primary-50: #082f49;
    --color-primary-100: #0c4a6e;
    --color-primary-200: #075985;
    --color-primary-300: #0369a1;
    --color-primary-400: #0284c7;
    --color-primary-500: #0ea5e9;
    --color-primary-600: #38bdf8;
    --color-primary-700: #7dd3fc;
    --color-primary-800: #bae6fd;
    --color-primary-900: #e0f2fe;
    --color-primary-950: #f0f9ff;

    --color-neutral-50: #0a0a0a;
    --color-neutral-100: #171717;
    --color-neutral-200: #262626;
    --color-neutral-300: #404040;
    --color-neutral-400: #525252;
    --color-neutral-500: #737373;
    --color-neutral-600: #a3a3a3;
    --color-neutral-700: #d4d4d4;
    --color-neutral-800: #e5e5e5;
    --color-neutral-900: #f5f5f5;
    --color-neutral-950: #fafafa;

    --color-success-50: #052e16;
    --color-success-500: #16a34a;
    --color-success-600: #22c55e;
    --color-success-700: #4ade80;

    --color-warning-50: #451a03;
    --color-warning-500: #d97706;
    --color-warning-600: #f59e0b;
    --color-warning-700: #fbbf24;

    --color-error-50: #450a0a;
    --color-error-500: #dc2626;
    --color-error-600: #ef4444;
    --color-error-700: #f87171;

    /* Surface colors */
    --color-surface: #0f172a;
    --color-surface-secondary: #1e293b;
    --color-surface-tertiary: #334155;
    --color-border: #334155;
    --color-border-secondary: #475569;

    /* Text colors */
    --color-text-primary: #f8fafc;
    --color-text-secondary: #cbd5e1;
    --color-text-tertiary: #94a3b8;
    --color-text-inverse: #0f172a;

    /* Background colors */
    --color-bg-primary: #0f172a;
    --color-bg-secondary: #1e293b;
    --color-bg-tertiary: #334155;
  }
`;

export default darkTheme;
