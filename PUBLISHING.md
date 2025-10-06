# Publishing Bootstrap AI to npm

This guide explains how to publish the Bootstrap AI package to npm so it can be consumed from anywhere.

## Package Structure

The Bootstrap AI project is set up as a monorepo with multiple packages:

- `@bootstrap-ai/ui` - Main distributable package (recommended for most users)
- `@bootstrap-ai/core` - Core design tokens and utilities
- `@bootstrap-ai/components` - Web Components
- `@bootstrap-ai/themes` - Theme definitions
- `@bootstrap-ai/icons` - Icon library
- `@bootstrap-ai/adapters` - Framework adapters

## Publishing Options

### Option 1: Publish Main Package Only (Recommended)

Publish only the `@bootstrap-ai/ui` package, which bundles everything:

```bash
cd packages/ui
npm publish
```

### Option 2: Publish All Packages

Publish all packages individually:

```bash
# Publish core package
cd packages/core
npm publish

# Publish components package
cd packages/components
npm publish

# Publish themes package
cd packages/themes
npm publish

# Publish icons package
cd packages/icons
npm publish

# Publish adapters package
cd packages/adapters
npm publish
```

## Pre-Publishing Checklist

### 1. Update Package Information

Update the package.json files with correct information:

```json
{
  "name": "@bootstrap-ai/ui",
  "version": "1.0.0",
  "description": "A lightweight, accessible, design-token–driven UI component library using Web Components (Lit)",
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/bootstrap-ai.git"
  },
  "bugs": {
    "url": "https://github.com/your-username/bootstrap-ai/issues"
  },
  "homepage": "https://github.com/your-username/bootstrap-ai#readme"
}
```

### 2. Build the Package

```bash
# Build all packages
npm run build

# Or build just the UI package
npm run build --workspace=@bootstrap-ai/ui
```

### 3. Test the Package Locally

```bash
# Test with the example project
cd example
npm install
# Open index.html in a browser to test
```

### 4. Update Version Numbers

```bash
# Update version using npm version
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes
```

## Publishing Steps

### 1. Login to npm

```bash
npm login
```

### 2. Publish the Package

```bash
cd packages/ui
npm publish
```

### 3. Verify Publication

```bash
npm view @bootstrap-ai/ui
```

## Usage After Publishing

Once published, users can install and use the package:

### Installation

```bash
npm install @bootstrap-ai/ui
```

### Basic Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Import styles -->
    <link rel="stylesheet" href="node_modules/@bootstrap-ai/ui/styles.css" />
  </head>
  <body>
    <!-- Use components -->
    <fk-button variant="solid">Click me</fk-button>

    <!-- Import components -->
    <script type="module">
      import '@bootstrap-ai/ui';
    </script>
  </body>
</html>
```

### ES Modules Usage

```javascript
// Import everything
import '@bootstrap-ai/ui';

// Or import specific components
import '@bootstrap-ai/ui/components/button';
import '@bootstrap-ai/ui/components/icon';
```

### Framework Integration

#### React

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

#### Vue

```vue
<template>
  <fk-button variant="solid" size="lg"> Click me </fk-button>
</template>

<script>
import '@bootstrap-ai/ui';
</script>
```

#### Angular

```typescript
import { Component } from '@angular/core';
import '@bootstrap-ai/ui';

@Component({
  selector: 'app-my-component',
  template: ` <fk-button variant="solid" size="lg"> Click me </fk-button> `,
})
export class MyComponent {}
```

## Package Features

The published package includes:

- **Components**: Button, Icon, Badge, Spinner, Tooltip
- **Design Tokens**: CSS custom properties for colors, spacing, typography
- **Themes**: Light, dark, and high-contrast themes
- **TypeScript Support**: Full type definitions
- **Tree-shaking**: Import only what you need
- **Framework Agnostic**: Works with any framework or vanilla HTML

## Maintenance

### Updating the Package

1. Make changes to the source code
2. Update version number: `npm version patch/minor/major`
3. Build the package: `npm run build`
4. Publish: `npm publish`

### Unpublishing

```bash
npm unpublish @bootstrap-ai/ui@version
```

**Note**: You can only unpublish within 24 hours of publishing.

## Troubleshooting

### Common Issues

1. **Package already exists**: Update the version number
2. **Build errors**: Check that all dependencies are installed
3. **Import errors**: Verify the package exports are correct
4. **CSS not loading**: Check the file paths in the exports

### Getting Help

- Check the [README.md](packages/ui/README.md) for detailed usage instructions
- Open an issue on GitHub for bugs or feature requests
- Check the example project for usage patterns

## Security Considerations

- Never commit API keys or secrets
- Use `.npmignore` to exclude sensitive files
- Regularly update dependencies
- Use `npm audit` to check for vulnerabilities

## Best Practices

1. **Semantic Versioning**: Use semantic versioning (semver)
2. **Changelog**: Maintain a changelog for each release
3. **Documentation**: Keep documentation up to date
4. **Testing**: Test the package before publishing
5. **CI/CD**: Consider setting up automated publishing

## Example Package.json for Consumers

```json
{
  "dependencies": {
    "@bootstrap-ai/ui": "^1.0.0"
  }
}
```

This setup allows users to easily install and use Bootstrap AI components in any project!
