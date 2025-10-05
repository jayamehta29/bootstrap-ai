import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Extract CSS from template literals
const extractCSS = (tsContent) => {
  const cssMatch = tsContent.match(/css`([\s\S]*?)`/);
  return cssMatch ? cssMatch[1] : '';
};

// Read theme files
const lightTheme = readFileSync(join(__dirname, '../src/light/index.ts'), 'utf8');
const darkTheme = readFileSync(join(__dirname, '../src/dark/index.ts'), 'utf8');
const highContrastTheme = readFileSync(join(__dirname, '../src/high-contrast/index.ts'), 'utf8');

// Extract CSS content
const lightCSS = extractCSS(lightTheme);
const darkCSS = extractCSS(darkTheme);
const highContrastCSS = extractCSS(highContrastTheme);

// Write CSS files
writeFileSync(join(__dirname, '../dist/light.css'), lightCSS);
writeFileSync(join(__dirname, '../dist/dark.css'), darkCSS);
writeFileSync(join(__dirname, '../dist/high-contrast.css'), highContrastCSS);

console.log('✅ Theme CSS built successfully');
