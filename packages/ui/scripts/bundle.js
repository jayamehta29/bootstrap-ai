import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  copyFileSync,
  existsSync,
  readdirSync,
} from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create dist directory
const distDir = join(__dirname, '../dist');
mkdirSync(distDir, { recursive: true });

// Copy built packages to dist
const packages = ['core', 'components', 'themes', 'icons'];

packages.forEach(pkg => {
  const srcDir = join(__dirname, `../../${pkg}/dist`);
  const destDir = join(distDir, pkg);

  try {
    // Check if source directory exists
    if (existsSync(srcDir)) {
      // Copy entire dist folder
      copyDir(srcDir, destDir);
      console.log(`✅ Copied ${pkg} package`);
    } else {
      console.log(`⚠️  Package ${pkg} dist directory not found at ${srcDir}`);
    }
  } catch (error) {
    console.log(`⚠️  Error copying ${pkg} package:`, error.message);
  }
});

// Create main index file
const mainIndex = `
// Re-export everything from core
export * from './core/index.js';

// Re-export components
export * from './components/index.js';

// Re-export themes
export * from './themes/index.js';

// Re-export icons
export * from './icons/index.js';

// Note: lit imports are removed to avoid browser resolution issues
// Users should install lit separately: npm install lit
`;

writeFileSync(join(distDir, 'index.js'), mainIndex);

// Create TypeScript declarations
const mainTypes = `
// Re-export everything from core
export * from './core/index';

// Re-export components
export * from './components/index';

// Re-export themes
export * from './themes/index';

// Re-export icons
export * from './icons/index';

// Note: lit imports are removed to avoid browser resolution issues
// Users should install lit separately: npm install lit
`;

writeFileSync(join(distDir, 'index.d.ts'), mainTypes);

// Copy CSS files
try {
  copyFileSync(
    join(__dirname, '../../core/dist/styles.css'),
    join(distDir, 'styles.css')
  );
  console.log('✅ Copied styles.css');
} catch (error) {
  console.log('⚠️  styles.css not found');
}

// Copy theme CSS files
const themes = ['light', 'dark', 'high-contrast'];
themes.forEach(theme => {
  try {
    copyFileSync(
      join(__dirname, `../../themes/dist/${theme}.css`),
      join(distDir, `themes/${theme}.css`)
    );
    console.log(`✅ Copied ${theme}.css`);
  } catch (error) {
    console.log(`⚠️  ${theme}.css not found`);
  }
});

console.log('✅ Bundle created successfully');

// Helper function to copy directories recursively
function copyDir(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}
