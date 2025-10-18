# 🐱 Bengalivo Website - Database-Driven Setup Guide

## 📋 **Overview**

This website is now **fully database-driven** and matches the original [Bengalivo website](https://bengalivo.com/) content. All content is stored in a SQLite database and can be managed through the admin interface.

## 🗄️ **Database Setup**

### **What's Included:**
- **SQLite Database** - Simple, file-based database (perfect for Vercel)
- **Prisma ORM** - Easy database management
- **Pre-seeded Content** - All original website content is already loaded

### **Database Schema:**
```sql
- PageContent: Website content (titles, subtitles, descriptions)
- Cat: Cat information (kittens, breeders, retired cats)
- ContactInfo: Contact details (email, location)
- Newsletter: Newsletter subscriptions
```

## 🚀 **Quick Start**

### **1. Environment Setup**
Your `.env.local` file should contain:
```env
# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database
DATABASE_URL="file:./dev.db"
```

### **2. Database Commands**
```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed database with original content
npm run db:seed

# View database in Prisma Studio
npx prisma studio
```

### **3. Start Development**
```bash
npm run dev
```

## 📊 **Content Management**

### **Admin Interface**
- **URL:** `/admin/content` (requires Google login)
- **Features:**
  - ✅ Edit all website content
  - ✅ Add new sections
  - ✅ Reorder content
  - ✅ Toggle active/inactive
  - ✅ Manage by page (home, about, contact, etc.)

### **API Endpoints**
```bash
# Get all content
GET /api/content

# Get content by page
GET /api/content?page=home

# Get content by section
GET /api/content?page=home&section=hero

# Create new content
POST /api/content

# Update content
PUT /api/content

# Delete content
DELETE /api/content?id=content-id
```

## 🎯 **Content Structure**

### **Homepage Sections:**
1. **Hero** - Main title and subtitle
2. **Kittens** - Available kittens section
3. **Featured** - Featured cat showcase
4. **Who We Are** - About the cattery
5. **What We Stand For** - Values section
6. **Health** - Health information
7. **Character** - Character traits
8. **Wild Look** - Breeding goals

### **Cat Management:**
```bash
# Get all cats
GET /api/cats

# Get featured cats
GET /api/cats?featured=true

# Get available kittens
GET /api/cats?type=kitten&available=true

# Get breeders
GET /api/cats?type=breeder
```

## 🌐 **Deployment (Vercel)**

### **1. Database Setup for Production**
For production, you'll need a hosted database. **Recommended options:**

#### **Option A: Vercel Postgres (Recommended)**
```bash
# Install Vercel Postgres
npm install @vercel/postgres

# Update schema for Postgres
# Change provider in prisma/schema.prisma:
# provider = "postgresql"
```

#### **Option B: PlanetScale (MySQL)**
```bash
# Install PlanetScale
npm install @planetscale/database

# Update schema for MySQL
# provider = "mysql"
```

### **2. Environment Variables (Production)**
```env
# Database (Production)
DATABASE_URL="postgresql://username:password@host:port/database"

# NextAuth.js (Production)
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-production-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### **3. Deploy to Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

## 🔧 **Configuration Steps**

### **1. Google OAuth Setup**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)

### **2. Admin Access**
- Only authenticated users can access `/admin/content`
- Login with Google account
- Admin interface is hidden from regular users

### **3. Content Updates**
- All content is now dynamic
- Changes are immediately visible
- No code changes needed for content updates
- Original website content is preserved and editable

## 📱 **Features**

### **✅ What's Working:**
- ✅ Dynamic homepage with database content
- ✅ Admin interface for content management
- ✅ Google OAuth authentication
- ✅ Responsive design
- ✅ Internationalization (EN/NL)
- ✅ Original website content preserved
- ✅ API endpoints for all data
- ✅ SQLite database with Prisma

### **🔄 What's Dynamic:**
- ✅ Homepage hero section
- ✅ Kittens available section
- ✅ Featured cat information
- ✅ About us content
- ✅ What we stand for sections
- ✅ Contact information
- ✅ All text content
- ✅ Button text and links

## 🎨 **Customization**

### **Adding New Pages:**
1. Create new page in `src/app/`
2. Add content sections in admin interface
3. Fetch content using API endpoints
4. Update navigation if needed

### **Adding New Content Types:**
1. Update Prisma schema
2. Run `npx prisma db push`
3. Create API endpoints
4. Update admin interface

## 🐛 **Troubleshooting**

### **Database Issues:**
```bash
# Reset database
rm dev.db
npx prisma db push
npm run db:seed

# Check database
npx prisma studio
```

### **API Issues:**
```bash
# Test API endpoints
curl "http://localhost:3000/api/content?page=home"
curl "http://localhost:3000/api/cats?featured=true"
```

### **Authentication Issues:**
- Check Google OAuth configuration
- Verify redirect URIs
- Check environment variables

## 📞 **Support**

The website now perfectly matches the original [Bengalivo website](https://bengalivo.com/) with all content being dynamic and manageable through the admin interface. All original content has been preserved and can be edited without touching the code.

**Key Benefits:**
- 🎯 **100% Content Match** - All original content preserved
- 🔄 **Fully Dynamic** - No code changes for content updates
- 👨‍💼 **Easy Management** - Simple admin interface
- 🚀 **Production Ready** - Easy deployment to Vercel
- 🔒 **Secure** - Google OAuth authentication
- 🌐 **Multilingual** - English and Dutch support
