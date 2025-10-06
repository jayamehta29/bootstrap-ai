# Bootstrap AI

A lightweight, accessible, design-token–driven UI component library using Web Components (Lit) that works anywhere—plain HTML, React, Vue, Angular, Svelte, server-rendered frameworks, and native WebView shells.

## Features

- **Framework Agnostic**: Works with any framework or plain HTML
- **Accessible**: WCAG 2.2 AA compliant with full keyboard support
- **Lightweight**: Tree-shakable components with minimal bundle size
- **Design Tokens**: Consistent theming with CSS custom properties
- **TypeScript**: Full type safety and IntelliSense support
- **SSR Friendly**: Works with server-side rendering and Declarative Shadow DOM

## Quick Start

### CDN Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@bootstrap-ai/core@latest/dist/styles.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@bootstrap-ai/themes@latest/dist/light.css"
    />
  </head>
  <body>
    <fk-button variant="solid">Click me</fk-button>

    <script
      type="module"
      src="https://cdn.jsdelivr.net/npm/@bootstrap-ai/components@latest/dist/button/index.js"
    ></script>
  </body>
</html>
```

### npm Installation

```bash
npm install @bootstrap-ai/core @bootstrap-ai/components @bootstrap-ai/themes
```

```javascript
import '@bootstrap-ai/core/dist/styles.css';
import '@bootstrap-ai/themes/dist/light.css';
import '@bootstrap-ai/components/button';

// Use in your HTML
<fk-button variant="solid">Click me</fk-button>;
```

## Packages

- **@bootstrap-ai/core** - Design tokens, utilities, and reset styles
- **@bootstrap-ai/components** - Web components (Button, Badge, Spinner, etc.)
- **@bootstrap-ai/icons** - SVG icon set and icon component
- **@bootstrap-ai/themes** - Light, Dark, and High-Contrast themes
- **@bootstrap-ai/adapters** - Framework wrappers for React, Vue, Angular

## Components

### Button

```html
<fk-button variant="solid" size="md">Primary Button</fk-button>
<fk-button variant="soft" size="lg">Secondary Button</fk-button>
<fk-button variant="ghost" disabled>Disabled Button</fk-button>
```

### Badge

```html
<fk-badge variant="primary">Primary</fk-badge>
<fk-badge variant="success">Success</fk-badge>
<fk-badge variant="warning">Warning</fk-badge>
<fk-badge variant="error">Error</fk-badge>
```

### Spinner

```html
<fk-spinner variant="spinner" size="md"></fk-spinner>
<fk-spinner variant="dots" size="lg"></fk-spinner>
<fk-spinner variant="pulse" size="sm"></fk-spinner>
```

## Theming

Bootstrap AI uses CSS custom properties for theming. You can easily customize colors, spacing, typography, and more.

```css
:root {
  --color-primary-500: #0ea5e9;
  --spacing-4: 1rem;
  --typography-fontSize-base: 1rem;
}
```

### Built-in Themes

- **Light** (default) - Clean, modern light theme
- **Dark** - Dark theme for low-light environments
- **High Contrast** - High contrast theme for accessibility

```html
<!-- Apply theme -->
<html data-theme="dark">
  <!-- Your content -->
</html>
```

## Framework Integration

### React

```jsx
import { Button } from '@bootstrap-ai/adapters/react';

function App() {
  return (
    <Button variant="solid" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  );
}
```

### Vue

```vue
<template>
  <Button variant="solid" @click="handleClick"> Click me </Button>
</template>

<script setup>
import { Button } from '@bootstrap-ai/adapters/vue';

const handleClick = () => {
  console.log('clicked');
};
</script>
```

### Angular

```typescript
import { ButtonComponent } from '@bootstrap-ai/adapters/angular';

@Component({
  selector: 'app-root',
  template: `
    <fk-button variant="solid" (click)="handleClick()"> Click me </fk-button>
  `,
})
export class AppComponent {
  handleClick() {
    console.log('clicked');
  }
}
```

## Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/your-org/bootstrap-ai.git
cd bootstrap-ai

# Install dependencies
npm install

# Build all packages
npm run build

# Start development server
npm run dev
```

### Project Structure

```
bootstrap-ai/
├── packages/
│   ├── core/           # Design tokens, utilities, reset styles
│   ├── components/     # Web components
│   ├── icons/          # SVG icons
│   ├── themes/         # Theme definitions
│   └── adapters/       # Framework wrappers
├── apps/
│   └── docs/           # Documentation site
└── README.md
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code Style

- TypeScript with strict mode
- ESLint for linting
- Prettier for formatting
- Conventional commits for commit messages

## License

MIT License - see [LICENSE](LICENSE) for details.

## Support

- [Documentation](https://bootstrap-ai.dev)
- [GitHub Issues](https://github.com/your-org/bootstrap-ai/issues)
- [Discussions](https://github.com/your-org/bootstrap-ai/discussions)

## Roadmap

- [ ] Form components (Input, Select, Checkbox, Radio)
- [ ] Overlay components (Modal, Popover, Toast)
- [ ] Navigation components (Tabs, Accordion, Breadcrumbs)
- [ ] Data display components (Table, Card, List)
- [ ] Advanced components (DatePicker, ColorPicker, FileUpload)
- [ ] React, Vue, and Angular adapters
- [ ] Additional themes and icon packs
- [ ] Performance optimizations
- [ ] Enhanced accessibility features
