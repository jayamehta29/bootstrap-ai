# Contributing to Bootstrap AI

Thank you for your interest in contributing to Bootstrap AI! This document provides guidelines and information for contributors.

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [email@example.com].

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher
- Git

### Development Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/bootstrap-ai.git
   cd bootstrap-ai
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build all packages:
   ```bash
   npm run build
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

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
├── .github/            # GitHub workflows and templates
└── docs/               # Additional documentation
```

## Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

- Follow the coding standards (see below)
- Add tests for new functionality
- Update documentation as needed
- Ensure all tests pass

### 3. Commit Your Changes

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(button): add loading state
fix(tooltip): correct positioning on mobile
docs: update installation guide
```

### 4. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub.

## Coding Standards

### TypeScript

- Use strict TypeScript configuration
- Provide type definitions for all public APIs
- Use meaningful type names
- Avoid `any` type when possible

### Code Style

- Use ESLint and Prettier for consistent formatting
- Follow the existing code patterns
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### Component Development

When creating new components:

1. **Follow the component template** (see below)
2. **Include accessibility features**:
   - Proper ARIA attributes
   - Keyboard navigation support
   - Screen reader compatibility
   - Focus management

3. **Add CSS custom properties** for theming:
   ```css
   .component {
     --fk-component-bg: var(--color-primary-500);
     --fk-component-color: white;
   }
   ```

4. **Use CSS parts** for styling hooks:
   ```css
   .component::part(button) {
     /* Custom styling */
   }
   ```

5. **Include TypeScript definitions**:
   ```typescript
   declare global {
     interface HTMLElementTagNameMap {
       'fk-component': FkComponent;
     }
   }
   ```

### Testing

- Write unit tests for component behavior
- Test accessibility features
- Test keyboard navigation
- Test theme switching
- Test framework adapters

### Documentation

- Update component documentation
- Add usage examples
- Document CSS custom properties
- Update API documentation

## Component Template

When creating a new component, use this template:

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Component description
 * 
 * @tag fk-component
 * @slot - Default content
 * @slot named-slot - Named slot description
 * 
 * @csspart component - The main component element
 * 
 * @cssproperty --fk-component-bg - Component background color
 * @cssproperty --fk-component-color - Component text color
 */
@customElement('fk-component')
export class FkComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .component {
      background-color: var(--fk-component-bg, var(--color-primary-500));
      color: var(--fk-component-color, white);
    }
  `;

  @property({ type: String, reflect: true })
  variant: 'primary' | 'secondary' = 'primary';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  render() {
    const classes = {
      component: true,
      [`component--${this.variant}`]: true,
    };

    return html`
      <div part="component" class=${classMap(classes)}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fk-component': FkComponent;
  }
}
```

## Pull Request Process

### Before Submitting

1. **Run tests**: `npm test`
2. **Check linting**: `npm run lint`
3. **Format code**: `npm run format`
4. **Build packages**: `npm run build`
5. **Test documentation**: `npm run dev` and verify docs site

### Pull Request Template

When creating a pull request, please include:

- **Description**: What changes were made and why
- **Type**: Feature, bug fix, documentation, etc.
- **Testing**: How the changes were tested
- **Screenshots**: If applicable, include screenshots
- **Breaking Changes**: List any breaking changes
- **Checklist**: Complete the PR checklist

### Review Process

1. **Automated checks** must pass (CI, linting, tests)
2. **Code review** by maintainers
3. **Accessibility review** for new components
4. **Documentation review** for API changes
5. **Approval** from at least one maintainer

## Issue Guidelines

### Reporting Bugs

When reporting bugs, please include:

- **Description**: Clear description of the issue
- **Steps to reproduce**: Detailed steps to reproduce the bug
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: Browser, OS, version information
- **Screenshots**: If applicable

### Feature Requests

When requesting features, please include:

- **Description**: Clear description of the feature
- **Use case**: Why this feature is needed
- **Proposed solution**: How you think it should work
- **Alternatives**: Other solutions you've considered

## Release Process

Releases are automated using [semantic-release](https://github.com/semantic-release/semantic-release):

- **Version bumping**: Based on conventional commits
- **Changelog generation**: Automatic from commit messages
- **Package publishing**: Automatic to npm
- **GitHub releases**: Automatic with release notes

## Community

- **GitHub Discussions**: For questions and general discussion
- **GitHub Issues**: For bug reports and feature requests
- **Discord**: For real-time chat (if available)

## License

By contributing to Bootstrap AI, you agree that your contributions will be licensed under the MIT License.

## Questions?

If you have questions about contributing, please:

1. Check the [documentation](https://bootstrap-ai.dev)
2. Search existing [issues](https://github.com/your-org/bootstrap-ai/issues)
3. Start a [discussion](https://github.com/your-org/bootstrap-ai/discussions)
4. Contact maintainers directly

Thank you for contributing to Bootstrap AI! 🎉
