# Bengalivo - Premium Bengal Cat Breeder Website

A modern, elegant website for a Bengal cat breeder built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. This is a complete redesign of the original Bengalivo website (https://bengalivo.com/) with enhanced functionality and modern design.

## Features

- **Elegant Design**: Black-based theme with gold accents for a classy, premium feel
- **Responsive**: Fully responsive design that works on all devices (desktop, tablet, mobile)
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Content Management**: Simple admin dashboard for managing cats and kittens
- **Authentication**: NextAuth.js integration for secure admin access
- **Internationalization**: Multi-language support (English/Dutch) with react-i18next
- **SEO Optimized**: Comprehensive SEO with structured data, sitemap, and meta tags
- **Image Optimization**: Next.js Image component with automatic optimization
- **Database Integration**: SQLite with Prisma ORM for data persistence
- **Modern Stack**: Built with the latest web technologies

## Pages

- **Home**: Slideshow hero section with featured content and social media integration
- **About Us**: Information about the cattery and breeder (Ivonne van Dreumel)
- **The Bengal**: Comprehensive information about Bengal cat breed
- **Kittens**: Available kittens, retired cats, and planned litters
- **Breeder Cats**: Detailed information about breeding cats with lineage and genetics
- **Contact**: Contact form, location information, and newsletter signup
- **Admin Dashboard**: Content management for authenticated users

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Authentication**: NextAuth.js
- **Database**: SQLite with Prisma ORM
- **Internationalization**: react-i18next
- **Icons**: Lucide React
- **Code Quality**: ESLint, Prettier, Unicorn

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn
- Google OAuth credentials for admin login

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
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. Set up the database:
```bash
npm run db:generate
npm run db:push
npm run db:seed
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

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
│   │   ├── auth/          # NextAuth.js authentication
│   │   ├── cats/          # Cat management API
│   │   ├── content/       # Content management API
│   │   └── upload/        # Image upload API
│   ├── admin/             # Admin dashboard
│   │   ├── cats/          # Cat management
│   │   └── content/       # Content management
│   ├── about/             # About Bengal cats page
│   ├── about-us/          # About the cattery page
│   ├── kittens/           # Kittens page
│   ├── breeders/          # Breeder cats page
│   ├── contact/           # Contact page
│   ├── robots.ts          # SEO robots.txt
│   ├── sitemap.ts         # SEO sitemap
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Main navigation with i18n
│   ├── footer.tsx        # Footer component
│   ├── slideshow.tsx     # Homepage slideshow
│   ├── cookie-banner.tsx # GDPR cookie banner
│   ├── newsletter-popup.tsx # Newsletter signup popup
│   └── i18n-provider.tsx # Internationalization provider
├── lib/                  # Utility functions
│   ├── db.ts            # Database connection
│   └── utils.ts         # Utility functions
└── i18n.ts              # Internationalization configuration
```

## Customization

### Colors and Theme

The design system is defined in `src/app/globals.css`. The main colors are:
- **Background**: Deep black (`oklch(0.05 0 0)`)
- **Primary**: Warm gold (`oklch(0.7 0.15 45)`)
- **Text**: Pure white (`oklch(0.95 0 0)`)

### Content Management

The admin dashboard allows you to:
- Add/edit/delete kittens, retired cats, and breeder cats
- Manage page content dynamically
- Upload and manage images
- All changes are stored in SQLite database with Prisma ORM

### Database

The application uses SQLite with Prisma ORM for data persistence:
- **Cats**: Kitten, retired, and breeder cat information
- **Content**: Dynamic page content management
- **Images**: File upload and management
- **Authentication**: NextAuth.js session management

For production, you can easily migrate to:
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

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push database schema
- `npm run db:seed` - Seed database with initial data

## Future Enhancements

- [x] Database integration for persistent data
- [x] Image upload functionality
- [x] Newsletter subscription
- [x] Social media integration
- [x] SEO optimization
- [ ] Email notifications for contact form
- [ ] Blog section for cat care tips
- [ ] Analytics integration
- [ ] Advanced search and filtering
- [ ] Mobile app

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