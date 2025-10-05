export interface DesignToken {
    value: string | string[] | number;
    type: string;
    description?: string;
}
export interface DesignTokens {
    [key: string]: DesignToken | DesignTokens;
}
export declare const designTokens: any;
/**
 * Convert design tokens to CSS custom properties
 */
export declare function tokensToCSS(tokens: DesignTokens, prefix?: string): string;
/**
 * Generate CSS custom properties from design tokens
 */
export declare function generateCSSVariables(): string;
/**
 * Get a specific token value
 */
export declare function getToken(path: string): string | undefined;
export default designTokens;
//# sourceMappingURL=index.d.ts.map