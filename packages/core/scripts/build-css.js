import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read tokens JSON
const tokensPath = join(__dirname, '../src/tokens/tokens.json');
const tokens = JSON.parse(readFileSync(tokensPath, 'utf8'));

// Generate CSS variables from tokens
function tokensToCSS(tokens, prefix = '') {
  let css = '';

  for (const [key, value] of Object.entries(tokens)) {
    const fullKey = prefix ? `${prefix}-${key}` : key;

    if (
      value &&
      typeof value === 'object' &&
      'value' in value &&
      'type' in value
    ) {
      // This is a token
      const tokenValue = Array.isArray(value.value)
        ? value.value.join(', ')
        : value.value;
      css += `  --${fullKey}: ${tokenValue};\n`;
    } else if (value && typeof value === 'object') {
      // This is a group, recurse
      css += tokensToCSS(value, fullKey);
    }
  }

  return css;
}

const cssVariables = `:root {\n${tokensToCSS(tokens)}\n}`;

// Read the reset and utility CSS
const resetCSS = readFileSync(join(__dirname, '../src/reset/index.ts'), 'utf8');
const utilityCSS = readFileSync(
  join(__dirname, '../src/utilities/index.ts'),
  'utf8'
);

// Extract CSS from the template literals
const extractCSS = tsContent => {
  const cssMatch = tsContent.match(/css`([\s\S]*?)`/);
  return cssMatch ? cssMatch[1] : '';
};

const resetCSSContent = extractCSS(resetCSS);
const utilityCSSContent = extractCSS(utilityCSS);

// Combine all CSS
const combinedCSS = `${cssVariables}\n\n/* Reset styles */\n${resetCSSContent}\n\n/* Utility classes */\n${utilityCSSContent}`;

// Write to dist/styles.css
writeFileSync(join(__dirname, '../dist/styles.css'), combinedCSS);

console.log('✅ CSS built successfully');
