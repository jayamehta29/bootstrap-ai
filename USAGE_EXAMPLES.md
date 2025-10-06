# Bootstrap AI Usage Examples

This document provides different ways to use Bootstrap AI components, each addressing different scenarios and requirements.

## 🚀 Quick Start Options

### 1. Vite Development Server (Recommended)

**Best for**: Development, modern bundlers, TypeScript projects

```bash
cd example-vite
npm install
npm run dev
```

**Access**: http://localhost:5173

**Features**:

- ✅ Automatic module resolution
- ✅ Hot reload
- ✅ TypeScript support
- ✅ No MIME type issues
- ✅ Production-ready builds

### 2. Simple HTTP Server

**Best for**: Quick testing, static hosting

```bash
cd example-simple
python3 -m http.server 8081
```

**Access**: http://localhost:8081

**Features**:

- ✅ Direct file imports
- ✅ No build step required
- ✅ Works with any static server
- ⚠️ Requires proper MIME types

### 3. CDN Usage (When Published)

**Best for**: Quick demos, CDN-based projects

```html
<script type="importmap">
  {
    "imports": {
      "@bootstrap-ai/ui": "https://cdn.jsdelivr.net/npm/@bootstrap-ai/ui@latest/dist/index.js",
      "lit": "https://cdn.jsdelivr.net/npm/lit@latest/index.js",
      "lit/": "https://cdn.jsdelivr.net/npm/lit@latest/"
    }
  }
</script>
```

## 🔧 Installation Methods

### Method 1: npm + Bundler (Recommended)

```bash
npm install @bootstrap-ai/ui lit
```

```javascript
// In your JavaScript/TypeScript file
import '@bootstrap-ai/ui';
```

### Method 2: npm + Import Map

```bash
npm install @bootstrap-ai/ui lit
```

```html
<script type="importmap">
  {
    "imports": {
      "@bootstrap-ai/ui": "./node_modules/@bootstrap-ai/ui/dist/index.js",
      "lit": "./node_modules/lit/index.js",
      "lit/": "./node_modules/lit/"
    }
  }
</script>
<script type="module">
  import '@bootstrap-ai/ui';
</script>
```

### Method 3: Direct File Import

```html
<script type="module">
  import './node_modules/@bootstrap-ai/ui/dist/index.js';
</script>
```

## 🎨 Styling Options

### Option 1: Core Styles

```html
<link rel="stylesheet" href="node_modules/@bootstrap-ai/ui/dist/styles.css" />
```

### Option 2: Theme-Specific Styles

```html
<!-- Light theme -->
<link
  rel="stylesheet"
  href="node_modules/@bootstrap-ai/ui/dist/themes/light.css"
/>

<!-- Dark theme -->
<link
  rel="stylesheet"
  href="node_modules/@bootstrap-ai/ui/dist/themes/dark.css"
/>

<!-- High contrast theme -->
<link
  rel="stylesheet"
  href="node_modules/@bootstrap-ai/ui/dist/themes/high-contrast.css"
/>
```

### Option 3: CDN Styles

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@bootstrap-ai/ui@latest/dist/styles.css"
/>
```

## 🛠️ Framework Integration

### React

```jsx
import '@bootstrap-ai/ui';

function MyComponent() {
  return (
    <fk-button variant="solid" size="lg">
      Click me
    </fk-button>
  );
}
```

### Vue

```vue
<template>
  <fk-button variant="solid" size="lg"> Click me </fk-button>
</template>

<script>
import '@bootstrap-ai/ui';
</script>
```

### Angular

```typescript
import { Component } from '@angular/core';
import '@bootstrap-ai/ui';

@Component({
  selector: 'app-my-component',
  template: ` <fk-button variant="solid" size="lg"> Click me </fk-button> `,
})
export class MyComponent {}
```

### Svelte

```svelte
<script>
  import '@bootstrap-ai/ui';
</script>

<fk-button variant="solid" size="lg">
  Click me
</fk-button>
```

## 🐛 Troubleshooting

### Common Issues

#### 1. "Failed to resolve module specifier"

**Cause**: Browser can't resolve npm packages

**Solutions**:

- Use a bundler (Vite, Webpack, etc.)
- Use import maps
- Use direct file paths

#### 2. "Expected a JavaScript module but got JSON"

**Cause**: Server serving JSON files with wrong MIME type

**Solutions**:

- Use a proper development server (Vite, Webpack dev server)
- Configure server MIME types
- Use direct file imports

#### 3. "lit is not defined"

**Cause**: Lit dependency not installed or not resolved

**Solutions**:

- Install lit: `npm install lit`
- Add lit to import map
- Use bundler that handles dependencies

### Server Configuration

#### Python HTTP Server

```bash
# Basic server
python3 -m http.server 8080

# With proper MIME types (if available)
python3 -m http.server 8080 --bind 127.0.0.1
```

#### Node.js serve

```bash
npx serve . -p 8080
```

#### Vite (Recommended)

```bash
npm create vite@latest my-project
cd my-project
npm install @bootstrap-ai/ui lit
npm run dev
```

## 📦 Production Deployment

### Static Hosting

1. Build your project with a bundler
2. Include Bootstrap AI in your build
3. Deploy static files

### CDN Deployment

1. Publish package to npm
2. Use CDN links in import map
3. No build step required

### Framework Deployment

- **Vite**: `npm run build` → deploy `dist/` folder
- **Webpack**: `npm run build` → deploy build output
- **Next.js**: `npm run build` → deploy `.next/` folder
- **Nuxt**: `npm run generate` → deploy `dist/` folder

## 🔍 Debugging

### Check Module Resolution

```javascript
// Test if modules are loading
console.log(
  'Bootstrap AI loaded:',
  typeof window.customElements !== 'undefined'
);
console.log('Lit loaded:', typeof window.LitElement !== 'undefined');
```

### Check Component Registration

```javascript
// Check if components are registered
console.log('fk-button defined:', customElements.get('fk-button'));
console.log('fk-icon defined:', customElements.get('fk-icon'));
```

### Check Styles Loading

```javascript
// Check if styles are loaded
const styles = document.querySelector('link[href*="bootstrap-ai"]');
console.log('Styles loaded:', !!styles);
```

## 📚 Examples

- **example-vite/**: Vite-based development setup
- **example-simple/**: Simple HTTP server setup
- **example-cdn/**: CDN-based setup (when published)
- **example-with-importmap/**: Import map setup

Choose the example that best fits your use case!

