# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability, please follow these steps:

### 1. Do not create a public issue

**Do not** create a public GitHub issue for security vulnerabilities. This could put users at risk.

### 2. Report privately

Please report security vulnerabilities by emailing us at [security@bootstrap-ai.dev](mailto:security@bootstrap-ai.dev).

Include the following information:
- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Suggested fix (if any)

### 3. Response timeline

We will respond to security reports within 48 hours and provide regular updates on our progress.

### 4. Disclosure timeline

- **Initial response**: Within 48 hours
- **Status update**: Within 7 days
- **Fix release**: Within 30 days (for critical vulnerabilities)
- **Public disclosure**: After the fix is released and users have had time to update

## Security Best Practices

### For Users

- Keep your dependencies up to date
- Use the latest version of Bootstrap AI
- Review and audit your dependencies regularly
- Use security scanning tools in your CI/CD pipeline

### For Contributors

- Follow secure coding practices
- Validate all user inputs
- Use parameterized queries
- Avoid exposing sensitive information
- Keep dependencies updated
- Use security linters and tools

## Security Features

Bootstrap AI includes several security features:

- **CSP-friendly**: No inline scripts or styles
- **XSS protection**: Proper input sanitization
- **Secure defaults**: Safe component configurations
- **Dependency security**: Regular security audits

## Vulnerability Types

We are particularly interested in reports about:

- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)
- Injection attacks
- Authentication bypass
- Authorization flaws
- Information disclosure
- Denial of service
- Supply chain attacks

## Bug Bounty

We do not currently offer a formal bug bounty program, but we appreciate security researchers who help us improve the security of Bootstrap AI.

## Security Updates

Security updates will be released as patch versions (e.g., 1.0.1, 1.0.2) and will be clearly marked in the changelog.

## Contact

For security-related questions or concerns, please contact us at [security@bootstrap-ai.dev](mailto:security@bootstrap-ai.dev).

## Acknowledgments

We thank the security researchers who have helped us improve the security of Bootstrap AI.
