# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within NeoMeet, please send an email to the repository owner. All security vulnerabilities will be promptly addressed.

Please include the following information:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Security Best Practices

When deploying NeoMeet:
1. Always use HTTPS in production
2. Keep your JWT_SECRET secure and unique
3. Never commit `.env` files to version control
4. Regularly update dependencies
5. Use strong passwords for MongoDB
