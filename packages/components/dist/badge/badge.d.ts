import { LitElement } from 'lit';
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
export declare class FkBadge extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'primary' | 'success' | 'warning' | 'error' | 'neutral';
    size: 'sm' | 'md' | 'lg';
    dot: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fk-badge': FkBadge;
    }
}
//# sourceMappingURL=badge.d.ts.map