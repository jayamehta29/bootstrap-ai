import { css } from 'lit';

/**
 * Light theme CSS custom properties
 */
export const lightTheme = css`
  :root,
  [data-theme='light'] {
    /* Color tokens */
    --color-primary-50: #f0f9ff;
    --color-primary-100: #e0f2fe;
    --color-primary-200: #bae6fd;
    --color-primary-300: #7dd3fc;
    --color-primary-400: #38bdf8;
    --color-primary-500: #0ea5e9;
    --color-primary-600: #0284c7;
    --color-primary-700: #0369a1;
    --color-primary-800: #075985;
    --color-primary-900: #0c4a6e;
    --color-primary-950: #082f49;

    --color-neutral-50: #fafafa;
    --color-neutral-100: #f5f5f5;
    --color-neutral-200: #e5e5e5;
    --color-neutral-300: #d4d4d4;
    --color-neutral-400: #a3a3a3;
    --color-neutral-500: #737373;
    --color-neutral-600: #525252;
    --color-neutral-700: #404040;
    --color-neutral-800: #262626;
    --color-neutral-900: #171717;
    --color-neutral-950: #0a0a0a;

    --color-success-50: #f0fdf4;
    --color-success-500: #22c55e;
    --color-success-600: #16a34a;
    --color-success-700: #15803d;

    --color-warning-50: #fffbeb;
    --color-warning-500: #f59e0b;
    --color-warning-600: #d97706;
    --color-warning-700: #b45309;

    --color-error-50: #fef2f2;
    --color-error-500: #ef4444;
    --color-error-600: #dc2626;
    --color-error-700: #b91c1c;

    /* Surface colors */
    --color-surface: #ffffff;
    --color-surface-secondary: #f8fafc;
    --color-surface-tertiary: #f1f5f9;
    --color-border: #e2e8f0;
    --color-border-secondary: #cbd5e1;

    /* Text colors */
    --color-text-primary: #0f172a;
    --color-text-secondary: #475569;
    --color-text-tertiary: #64748b;
    --color-text-inverse: #ffffff;

    /* Background colors */
    --color-bg-primary: #ffffff;
    --color-bg-secondary: #f8fafc;
    --color-bg-tertiary: #f1f5f9;
  }
`;

export default lightTheme;
