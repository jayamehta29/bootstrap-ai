import { css } from 'lit';
/**
 * Utility classes for common patterns
 */
export const utilityCSS = css `
  /* Focus ring utility */
  .fk-focus-ring {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .fk-focus-ring:focus-visible {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
  }

  /* Visually hidden utility */
  .fk-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Container queries utility */
  .fk-container {
    container-type: inline-size;
  }

  /* Spacing utilities */
  .fk-p-0 { padding: var(--spacing-0); }
  .fk-p-1 { padding: var(--spacing-1); }
  .fk-p-2 { padding: var(--spacing-2); }
  .fk-p-3 { padding: var(--spacing-3); }
  .fk-p-4 { padding: var(--spacing-4); }
  .fk-p-5 { padding: var(--spacing-5); }
  .fk-p-6 { padding: var(--spacing-6); }
  .fk-p-8 { padding: var(--spacing-8); }

  .fk-m-0 { margin: var(--spacing-0); }
  .fk-m-1 { margin: var(--spacing-1); }
  .fk-m-2 { margin: var(--spacing-2); }
  .fk-m-3 { margin: var(--spacing-3); }
  .fk-m-4 { margin: var(--spacing-4); }
  .fk-m-5 { margin: var(--spacing-5); }
  .fk-m-6 { margin: var(--spacing-6); }
  .fk-m-8 { margin: var(--spacing-8); }

  /* Typography utilities */
  .fk-text-xs { font-size: var(--typography-fontSize-xs); }
  .fk-text-sm { font-size: var(--typography-fontSize-sm); }
  .fk-text-base { font-size: var(--typography-fontSize-base); }
  .fk-text-lg { font-size: var(--typography-fontSize-lg); }
  .fk-text-xl { font-size: var(--typography-fontSize-xl); }

  .fk-font-normal { font-weight: var(--typography-fontWeight-normal); }
  .fk-font-medium { font-weight: var(--typography-fontWeight-medium); }
  .fk-font-semibold { font-weight: var(--typography-fontWeight-semibold); }
  .fk-font-bold { font-weight: var(--typography-fontWeight-bold); }

  /* Color utilities */
  .fk-text-primary { color: var(--color-primary-600); }
  .fk-text-neutral { color: var(--color-neutral-600); }
  .fk-text-success { color: var(--color-success-600); }
  .fk-text-warning { color: var(--color-warning-600); }
  .fk-text-error { color: var(--color-error-600); }

  /* Border radius utilities */
  .fk-rounded-none { border-radius: var(--radius-none); }
  .fk-rounded-sm { border-radius: var(--radius-sm); }
  .fk-rounded-md { border-radius: var(--radius-md); }
  .fk-rounded-lg { border-radius: var(--radius-lg); }
  .fk-rounded-xl { border-radius: var(--radius-xl); }
  .fk-rounded-2xl { border-radius: var(--radius-2xl); }
  .fk-rounded-full { border-radius: var(--radius-full); }

  /* Shadow utilities */
  .fk-shadow-none { box-shadow: var(--elevation-none); }
  .fk-shadow-sm { box-shadow: var(--elevation-sm); }
  .fk-shadow-md { box-shadow: var(--elevation-md); }
  .fk-shadow-lg { box-shadow: var(--elevation-lg); }
  .fk-shadow-xl { box-shadow: var(--elevation-xl); }

  /* Display utilities */
  .fk-hidden { display: none; }
  .fk-block { display: block; }
  .fk-inline { display: inline; }
  .fk-inline-block { display: inline-block; }
  .fk-flex { display: flex; }
  .fk-inline-flex { display: inline-flex; }
  .fk-grid { display: grid; }

  /* Flex utilities */
  .fk-flex-col { flex-direction: column; }
  .fk-flex-row { flex-direction: row; }
  .fk-items-center { align-items: center; }
  .fk-items-start { align-items: flex-start; }
  .fk-items-end { align-items: flex-end; }
  .fk-justify-center { justify-content: center; }
  .fk-justify-between { justify-content: space-between; }
  .fk-justify-start { justify-content: flex-start; }
  .fk-justify-end { justify-content: flex-end; }

  /* Gap utilities */
  .fk-gap-1 { gap: var(--spacing-1); }
  .fk-gap-2 { gap: var(--spacing-2); }
  .fk-gap-3 { gap: var(--spacing-3); }
  .fk-gap-4 { gap: var(--spacing-4); }
  .fk-gap-5 { gap: var(--spacing-5); }
  .fk-gap-6 { gap: var(--spacing-6); }
  .fk-gap-8 { gap: var(--spacing-8); }
`;
export default utilityCSS;
//# sourceMappingURL=index.js.map