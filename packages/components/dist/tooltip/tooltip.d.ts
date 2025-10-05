import { LitElement } from 'lit';
/**
 * Tooltip component for contextual information
 *
 * @tag fk-tooltip
 * @slot - Tooltip content
 * @slot trigger - Element that triggers the tooltip
 *
 * @csspart tooltip - The tooltip element
 * @csspart trigger - The trigger element
 *
 * @cssproperty --fk-tooltip-bg - Tooltip background color
 * @cssproperty --fk-tooltip-color - Tooltip text color
 * @cssproperty --fk-tooltip-padding - Tooltip padding
 * @cssproperty --fk-tooltip-radius - Tooltip border radius
 * @cssproperty --fk-tooltip-font-size - Tooltip font size
 * @cssproperty --fk-tooltip-max-width - Tooltip max width
 */
export declare class FkTooltip extends LitElement {
    static styles: import("lit").CSSResult;
    position: 'top' | 'bottom' | 'left' | 'right';
    delay: number;
    disabled: boolean;
    private _visible;
    private _timeoutId?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private _handleMouseEnter;
    private _handleMouseLeave;
    private _handleFocusIn;
    private _handleFocusOut;
    private _clearTimeout;
}
declare global {
    interface HTMLElementTagNameMap {
        'fk-tooltip': FkTooltip;
    }
}
//# sourceMappingURL=tooltip.d.ts.map