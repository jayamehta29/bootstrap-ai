import tokens from './tokens.json';

export interface DesignToken {
  value: string | string[] | number;
  type: string;
  description?: string;
}

export interface DesignTokens {
  [key: string]: DesignToken | DesignTokens;
}

export const designTokens = tokens as any;

/**
 * Convert design tokens to CSS custom properties
 */
export function tokensToCSS(tokens: DesignTokens, prefix = ''): string {
  let css = '';
  
  for (const [key, value] of Object.entries(tokens)) {
    const fullKey = prefix ? `${prefix}-${key}` : key;
    
    if ('value' in value && 'type' in value) {
      // This is a token
      const token = value as DesignToken;
      const cssValue = Array.isArray(token.value) 
        ? token.value.join(', ') 
        : token.value;
      css += `  --${fullKey}: ${cssValue};\n`;
    } else {
      // This is a group, recurse
      css += tokensToCSS(value as DesignTokens, fullKey);
    }
  }
  
  return css;
}

/**
 * Generate CSS custom properties from design tokens
 */
export function generateCSSVariables(): string {
  return `:root {\n${tokensToCSS(designTokens)}\n}`;
}

/**
 * Get a specific token value
 */
export function getToken(path: string): string | undefined {
  const keys = path.split('.');
  let current: any = designTokens;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
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
