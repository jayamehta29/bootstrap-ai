import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
// import { generateCSSVariables } from '../src/tokens/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate CSS variables from tokens
const cssVariables = ':root { /* CSS variables will be generated here */ }';

// Read the reset and utility CSS
const resetCSS = readFileSync(join(__dirname, '../src/reset/index.ts'), 'utf8');
const utilityCSS = readFileSync(join(__dirname, '../src/utilities/index.ts'), 'utf8');

// Extract CSS from the template literals
const extractCSS = (tsContent) => {
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
