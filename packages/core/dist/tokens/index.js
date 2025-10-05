import tokens from './tokens.json';
export const designTokens = tokens;
/**
 * Convert design tokens to CSS custom properties
 */
export function tokensToCSS(tokens, prefix = '') {
    let css = '';
    for (const [key, value] of Object.entries(tokens)) {
        const fullKey = prefix ? `${prefix}-${key}` : key;
        if ('value' in value && 'type' in value) {
            // This is a token
            const token = value;
            const cssValue = Array.isArray(token.value)
                ? token.value.join(', ')
                : token.value;
            css += `  --${fullKey}: ${cssValue};\n`;
        }
        else {
            // This is a group, recurse
            css += tokensToCSS(value, fullKey);
        }
    }
    return css;
}
/**
 * Generate CSS custom properties from design tokens
 */
export function generateCSSVariables() {
    return `:root {\n${tokensToCSS(designTokens)}\n}`;
}
/**
 * Get a specific token value
 */
export function getToken(path) {
    const keys = path.split('.');
    let current = designTokens;
    for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
            current = current[key];
        }
        else {
            return undefined;
        }
    }
    if (current && 'value' in current) {
        return Array.isArray(current.value)
            ? current.value.join(', ')
            : String(current.value);
    }
    return undefined;
}
export default designTokens;
//# sourceMappingURL=index.js.map