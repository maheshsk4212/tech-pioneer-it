# Security Policy

## Overview

Tech Pioneer IT takes security seriously. This document outlines our security practices and how to report security vulnerabilities.

## Security Measures Implemented

### 1. Frontend Security

#### XSS Protection
- **Content Security Policy (CSP)**: Strict CSP headers prevent injection of malicious scripts
- **Angular Sanitization**: All user inputs are automatically sanitized by Angular
- **Safe DOM Operations**: No use of dangerous operations like `innerHTML`, `eval`, or `document.write`
- **Template Security**: Angular templates provide automatic escaping

#### Input Validation
- Client-side validation for all forms
- Server-side validation via EmailJS
- Type-safe TypeScript throughout the codebase

### 2. HTTP Security Headers

Our Netlify configuration includes:

- **Content-Security-Policy**: Restricts sources for scripts, styles, images, and other resources
- **X-Frame-Options**: Prevents clickjacking by denying iframe embedding
- **X-Content-Type-Options**: Prevents MIME-type sniffing
- **Referrer-Policy**: Controls referrer information leakage
- **Permissions-Policy**: Disables unnecessary browser features
- **X-XSS-Protection**: Enables browser XSS filtering

### 3. HTTPS Enforcement

- All HTTP traffic is redirected to HTTPS (301 redirect)
- Strict Transport Security enforced
- `upgrade-insecure-requests` CSP directive

### 4. Dependency Security

- Regular `npm audit` scans
- Locked dependency versions via `package-lock.json`
- Only trusted, well-maintained libraries used
- Automated dependency updates with security checks

### 5. Build & Deployment Security

- Source code in private/controlled Git repository
- CI/CD pipeline with automated security checks
- No secrets in source code
- Environment variables managed securely via hosting platform

## What We DON'T Do

❌ **Never**:
- Store sensitive API keys in frontend code
- Use `innerHTML` with untrusted data
- Bypass Angular's security without documentation
- Use unknown/untrusted npm packages
- Commit secrets to Git
- Deploy without HTTPS

## Third-Party Services

### EmailJS
- Public API keys are safe (designed for frontend use)
- Backend validation performed by EmailJS
- Rate limiting on EmailJS side
- See: https://www.emailjs.com/docs/faq/is-it-safe-to-use-emailjs-in-the-frontend/

### Google Maps
- Embed URL is hardcoded (not user-controlled)
- Using iframe with restricted permissions
- CSP allows only trusted Google domains

## Security Scanning

We recommend regular scans with:

- **Mozilla Observatory**: https://observatory.mozilla.org/
- **SecurityHeaders.com**: https://securityheaders.com/
- **SSL Labs**: https://www.ssllabs.com/ssltest/
- **Sucuri SiteCheck**: https://sitecheck.sucuri.net/

## Reporting Security Issues

If you discover a security vulnerability, please:

1. **DO NOT** create a public GitHub issue
2. Email: security@techpioneerit.com (replace with actual email)
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We aim to respond within 48 hours and will credit researchers who responsibly disclose issues.

## Security Checklist for Developers

Before deployment, verify:

- [ ] `npm audit` shows 0 vulnerabilities
- [ ] No secrets/keys in code (check environment files)
- [ ] Security headers configured correctly
- [ ] HTTPS enforced
- [ ] All dependencies from trusted sources
- [ ] Build succeeds without warnings
- [ ] CSP doesn't block legitimate resources

## Security Best Practices

### For Developers

1. **Never bypass Angular security** without documentation
2. **Always validate user input** on both client and server
3. **Use environment variables** for configuration
4. **Keep dependencies updated** regularly
5. **Review code changes** for security implications

### For Deployment

1. **Use strong passwords** and 2FA on all accounts
2. **Restrict repository access** to trusted team members
3. **Review build logs** for warnings/errors
4. **Test security headers** after deployment
5. **Monitor for security alerts** from GitHub/npm

## Updates to This Policy

This security policy is reviewed and updated quarterly. Last update: 2025-11-25

## Resources

- OWASP Top 10: https://owasp.org/www-project-top-ten/
- Angular Security Guide: https://angular.dev/best-practices/security
- CSP Guide: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
- Netlify Security: https://docs.netlify.com/security/secure-access-to-sites/

---

**Version**: 1.0  
**Last Updated**: November 25, 2025  
**Maintained By**: Tech Pioneer IT Development Team
