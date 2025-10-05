import { LitElement } from 'lit';
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
export declare class FkIcon extends LitElement {
    static styles: import("lit").CSSResult;
    name: string;
    size?: string;
    color?: string;
    stroke: boolean;
    viewBox: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fk-icon': FkIcon;
    }
}
//# sourceMappingURL=icon.d.ts.map