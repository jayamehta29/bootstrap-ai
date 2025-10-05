import { LitElement } from 'lit';
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
export declare class FkButton extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'solid' | 'soft' | 'ghost' | 'link';
    size: 'sm' | 'md' | 'lg';
    disabled: boolean;
    loading: boolean;
    type: 'button' | 'submit' | 'reset';
    href?: string;
    target?: string;
    rel?: string;
    render(): import("lit-html").TemplateResult<1>;
    private _handleClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'fk-button': FkButton;
    }
}
//# sourceMappingURL=button.d.ts.map