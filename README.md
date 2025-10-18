# Bengalivo - Premium Bengal Cat Breeder Website

A modern, elegant website for a Bengal cat breeder built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Elegant Design**: Black-based theme with gold accents for a classy, premium feel
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Content Management**: Simple admin dashboard for managing cats and kittens
- **Authentication**: NextAuth.js integration for secure admin access
- **Modern Stack**: Built with the latest web technologies

## Pages

- **Home**: Hero section with new litters showcase
- **Kittens for Sale**: Available kittens with filtering and detailed profiles
- **Retired Cats**: Retired breeding cats available for adoption
- **Breeder Cats**: Information about breeding cats with lineage details
- **About Bengals**: Comprehensive information about Bengal cats
- **Contact**: Contact form and location information
- **Admin Dashboard**: Content management for authenticated users

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Authentication**: NextAuth.js
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bengalivo-redesign
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create "OAuth 2.0 Client IDs"
5. Set the application type to "Web application"
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)
7. Copy the Client ID and Client Secret to your `.env.local` file

## Admin Access

The admin dashboard is accessible at `/admin` for authenticated users. To access:

1. Set up Google OAuth authentication
2. Click the "Login" button in the navigation
3. Sign in with your Google account
4. Navigate to `/admin` to manage content

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── admin/             # Admin dashboard
│   ├── kittens/           # Kittens page
│   ├── retired/           # Retired cats page
│   ├── breeders/          # Breeder cats page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Main navigation
│   ├── footer.tsx        # Footer component
│   └── user-provider.tsx # Auth0 user provider
└── lib/                  # Utility functions
```

## Customization

### Colors and Theme

The design system is defined in `src/app/globals.css`. The main colors are:
- **Background**: Deep black (`oklch(0.05 0 0)`)
- **Primary**: Warm gold (`oklch(0.7 0.15 45)`)
- **Text**: Pure white (`oklch(0.95 0 0)`)

### Content Management

The admin dashboard allows you to:
- Add/edit/delete kittens
- Manage retired cats
- Update breeder information
- All changes are currently stored in memory (mock data)

For production, you'll want to integrate with a database like:
- Vercel Postgres
- Supabase
- PlanetScale
- MongoDB Atlas

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## Future Enhancements

- [ ] Database integration for persistent data
- [ ] Image upload functionality
- [ ] Email notifications for contact form
- [ ] Blog section for cat care tips
- [ ] Newsletter subscription
- [ ] Social media integration
- [ ] SEO optimization
- [ ] Analytics integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact [your-email@example.com](mailto:your-email@example.com).