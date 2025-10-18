# Bengalivo Website - Production Deployment Guide

## Prerequisites

- Node.js 20+ 
- npm or yarn
- Vercel account (recommended) or other hosting platform
- Google OAuth credentials for admin login

## Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Database
DATABASE_URL="file:./dev.db"

# NextAuth.js
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (for admin login)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Production settings
NODE_ENV="production"
```

## Deployment Steps

### 1. Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### 2. Manual Deployment

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the application:
   ```bash
   npm run build
   ```

3. Start the production server:
   ```bash
   npm start
   ```

## Database Setup

The application uses SQLite with Prisma. The database will be automatically created on first run.

To seed initial data:
```bash
npm run db:seed
```

## Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add your domain to authorized origins
6. Copy Client ID and Secret to environment variables

## Production Checklist

- [ ] Environment variables configured
- [ ] Google OAuth credentials set up
- [ ] Database seeded with initial data
- [ ] SSL certificate configured
- [ ] Domain configured
- [ ] Analytics tracking set up (if needed)
- [ ] Backup strategy in place

## Monitoring

- Check Vercel dashboard for deployment status
- Monitor application logs
- Set up error tracking (Sentry recommended)
- Monitor database performance

## Security Considerations

- Keep environment variables secure
- Regularly update dependencies
- Monitor for security vulnerabilities
- Use HTTPS in production
- Implement rate limiting for API endpoints

## Performance Optimization

- Images are automatically optimized by Next.js
- Static assets are cached
- Database queries are optimized
- Consider implementing Redis for session storage in high-traffic scenarios
