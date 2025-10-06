# Bootstrap AI

A lightweight, accessible, design-token–driven UI component library using Web Components (Lit).

## Features

- 🎨 **Design Tokens**: Comprehensive design system with CSS custom properties
- ♿ **Accessible**: WCAG 2.2 AA compliant with full keyboard support
- 🚀 **Framework Agnostic**: Works with React, Vue, Angular, Svelte, or plain HTML
- 📦 **Tree-shakable**: Import only what you need
- 🎯 **TypeScript**: Full TypeScript support with type definitions
- 🎭 **Themes**: Built-in light, dark, and high-contrast themes

## Installation

```bash
npm install @bootstrap-ai/ui lit
```

## Quick Start

### 1. Import Styles

```html
<!-- Import core styles -->
<link rel="stylesheet" href="node_modules/@bootstrap-ai/ui/styles.css" />

<!-- Or import a specific theme -->
<link rel="stylesheet" href="node_modules/@bootstrap-ai/ui/themes/light.css" />
```

### 2. Set up Import Map

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
```

### 3. Import Components

```javascript
// Import everything
import '@bootstrap-ai/ui';

// Or import specific components
import '@bootstrap-ai/ui/components/button';
import '@bootstrap-ai/ui/components/icon';
```

### 4. Use Components

```html
<!-- Button component -->
<fk-button variant="solid" size="lg">
  <fk-icon name="check" slot="leading-icon"></fk-icon>
  Click me
</fk-button>

<!-- Badge component -->
<fk-badge variant="success">Success</fk-badge>

<!-- Spinner component -->
<fk-spinner variant="dots" size="lg"></fk-spinner>

<!-- Tooltip component -->
<fk-tooltip position="top">
  <fk-button slot="trigger">Hover me</fk-button>
  This is a tooltip
</fk-tooltip>
```

## Components

### Button (`fk-button`)

```html
<!-- Variants -->
<fk-button variant="solid">Solid</fk-button>
<fk-button variant="soft">Soft</fk-button>
<fk-button variant="ghost">Ghost</fk-button>
<fk-button variant="link">Link</fk-button>

<!-- Sizes -->
<fk-button size="sm">Small</fk-button>
<fk-button size="md">Medium</fk-button>
<fk-button size="lg">Large</fk-button>

<!-- States -->
<fk-button disabled>Disabled</fk-button>
<fk-button loading>Loading</fk-button>

<!-- With icons -->
<fk-button>
  <fk-icon name="check" slot="leading-icon"></fk-icon>
  Save
</fk-button>
```

### Icon (`fk-icon`)

```html
<!-- Basic usage -->
<fk-icon name="check"></fk-icon>

<!-- Custom size and color -->
<fk-icon name="close" size="24px" color="#ff0000"></fk-icon>

<!-- Stroke variant -->
<fk-icon name="arrow-right" stroke></fk-icon>
```

### Badge (`fk-badge`)

```html
<!-- Variants -->
<fk-badge variant="primary">Primary</fk-badge>
<fk-badge variant="success">Success</fk-badge>
<fk-badge variant="warning">Warning</fk-badge>
<fk-badge variant="error">Error</fk-badge>

<!-- Sizes -->
<fk-badge size="sm">Small</fk-badge>
<fk-badge size="lg">Large</fk-badge>

<!-- Dot variant -->
<fk-badge variant="success" dot></fk-badge>
```

### Spinner (`fk-spinner`)

```html
<!-- Variants -->
<fk-spinner variant="spinner"></fk-spinner>
<fk-spinner variant="dots"></fk-spinner>
<fk-spinner variant="pulse"></fk-spinner>

<!-- Sizes -->
<fk-spinner size="sm"></fk-spinner>
<fk-spinner size="lg"></fk-spinner>
<fk-spinner size="xl"></fk-spinner>
```

### Tooltip (`fk-tooltip`)

```html
<!-- Positions -->
<fk-tooltip position="top">Top tooltip</fk-tooltip>
<fk-tooltip position="bottom">Bottom tooltip</fk-tooltip>
<fk-tooltip position="left">Left tooltip</fk-tooltip>
<fk-tooltip position="right">Right tooltip</fk-tooltip>

<!-- With trigger -->
<fk-tooltip position="top" delay="300">
  <fk-button slot="trigger">Hover me</fk-button>
  This is a tooltip
</fk-tooltip>
```

## Design Tokens

Bootstrap AI includes comprehensive design tokens as CSS custom properties:

```css
/* Colors */
--color-primary-500: #0ea5e9;
--color-neutral-100: #f5f5f5;
--color-success-500: #22c55e;

/* Spacing */
--spacing-1: 0.25rem;
--spacing-4: 1rem;
--spacing-8: 2rem;

/* Typography */
--typography-fontSize-base: 1rem;
--typography-fontWeight-medium: 500;

/* Border radius */
--radius-md: 0.375rem;
--radius-lg: 0.5rem;

/* Shadows */
--elevation-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--elevation-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
```

## Themes

### Light Theme (Default)

```html
<link rel="stylesheet" href="node_modules/@bootstrap-ai/ui/themes/light.css" />
```

### Dark Theme

```html
<link rel="stylesheet" href="node_modules/@bootstrap-ai/ui/themes/dark.css" />
```

### High Contrast Theme

```html
<link
  rel="stylesheet"
  href="node_modules/@bootstrap-ai/ui/themes/high-contrast.css"
/>
```

## Framework Integration

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

## TypeScript Support

Full TypeScript support is included:

```typescript
import { FkButton, FkIcon } from '@bootstrap-ai/ui';

// Type-safe component usage
const button = document.createElement('fk-button') as FkButton;
button.variant = 'solid';
button.size = 'lg';
```

## Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## License

MIT © 2024 Bootstrap AI

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## Support

- 📖 [Documentation](https://github.com/your-org/bootstrap-ai)
- 🐛 [Report Issues](https://github.com/your-org/bootstrap-ai/issues)
- 💬 [Discussions](https://github.com/your-org/bootstrap-ai/discussions)
