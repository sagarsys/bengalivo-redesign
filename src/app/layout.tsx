import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { UserProvider } from "@/components/user-provider";
import { I18nProvider } from "@/components/i18n-provider";
import { CookieBanner } from "@/components/cookie-banner";
import { NewsletterPopup } from "@/components/newsletter-popup";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.NEXTAUTH_URL || 'https://bengalivo.com'),
  title: "Bengalivo - Bengal Cat Cattery in the Netherlands | Breeding Black Tabby and Snow Bengals",
  description: "Bengalivo cattery in Drunen, Netherlands. Since 2004 breeding healthy, well-socialized Bengal cats with focus on health, character, and wild look. TICA registered cattery with champion bloodlines.",
  keywords: "Bengal cats, Bengal kittens, cat breeder Netherlands, Drunen, TICA registered, black tabby bengals, snow bengals, Bengal cat cattery, Ivonne van Dreumel, champion bengals, healthy bengals",
  authors: [{ name: "Ivonne van Dreumel", url: "https://bengalivo.com" }],
  creator: "Bengalivo Cattery",
  publisher: "Bengalivo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Bengalivo - Bengal Cat Cattery in the Netherlands",
    description: "Bengal cat breeding with focus on health, temperament, and wild beauty. TICA registered cattery since 2004.",
    type: "website",
    url: "https://bengalivo.com",
    siteName: "Bengalivo",
    locale: "en_US",
    images: [
      {
        url: "/images/slide1.jpg",
        width: 1200,
        height: 630,
        alt: "Bengalivo Bengal Cat Cattery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengalivo - Bengal Cat Cattery in the Netherlands",
    description: "Bengal cat breeding with focus on health, temperament, and wild beauty.",
    images: ["/images/slide1.jpg"],
  },
  alternates: {
    canonical: "https://bengalivo.com",
    languages: {
      'en-US': 'https://bengalivo.com',
      'nl-NL': 'https://bengalivo.com',
    },
  },
  category: "Pets",
  classification: "Bengal Cat Breeding",
  other: {
    'geo.region': 'NL',
    'geo.placename': 'Drunen',
    'geo.position': '51.6872;5.1333',
    'ICBM': '51.6872, 5.1333',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.variable} ${oswald.variable} antialiased`}
      >
        <I18nProvider>
          <UserProvider>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
              <CookieBanner />
              <NewsletterPopup />
            </div>
          </UserProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
