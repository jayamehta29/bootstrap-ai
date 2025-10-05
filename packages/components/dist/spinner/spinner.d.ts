import { LitElement } from 'lit';
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
export declare class FkSpinner extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'spinner' | 'dots' | 'pulse';
    size: 'sm' | 'md' | 'lg' | 'xl';
    color?: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fk-spinner': FkSpinner;
    }
}
//# sourceMappingURL=spinner.d.ts.map