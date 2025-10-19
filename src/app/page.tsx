"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, PawPrint, Facebook, Instagram, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Slideshow } from "@/components/slideshow";
import Head from "next/head";
import type { PageContent } from "@/types";

export default function Home() {
  const { t } = useTranslation();
  const [, setContent] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch homepage content
        const contentResponse = await fetch('/api/content?page=home');
        const contentData = await contentResponse.json();
        setContent(contentData);

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Dynamic content from database
  
  // Static content (hardcoded - matches original website exactly)
  
  const whoWeAreContent = {
    title: 'WHO WE ARE',
    content: 'My name is Ivonne van Dreumel and since 2004 owner of Bengal cats. I live in Drunen which is in the southern part of the Netherlands. Since 2004 my addiction for Bengals started and in 2006 I started breeding with the bengals. Read more about the cattery…'
  };
  
  const whatWeStandForContent = {
    title: 'What we stand for!'
  };
  
  const healthContent = {
    title: 'Health',
    content: 'All breeding cats will be screened for HCM and PKD around the age of 1 year. HCM screening will also be repeated each year for the boys and each 2 year for girls. Also the breeding cats are tested for PKdef and PRA-b. The kittens stay with their mother till they leave to the new owner at the age of 13 – 16 weeks. The kittens receive 2 vaccinations (9 & 12 weeks) and will be dewormed several times.'
  };
  
  const characterContent = {
    title: 'Character',
    content: 'Regularly there are kittens born and raised in the house. Socialization is something which I find most important, and therefore a lot of time is spend on this during the time the kittens are living with me. Next to it I find it important that there is a match between the future owners and the character of the Bengal cat.'
  };
  
  const wildLookContent = {
    title: 'Wild look',
    content: 'Priorities are "no rib bars" and "small rosettes", "a strong and energetic but elegant cat". Breeding bengals who have the wild look is one of my new goals. The most important is to reach this goal by working together with other catteries.'
  };

          // Structured data for SEO
          const structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bengalivo",
            "description": "Bengal cat cattery in Drunen, Netherlands. Since 2004 breeding healthy, well-socialized Bengal cats.",
            "url": "https://bengalivo.com",
            "logo": "https://bengalivo.com/images/logo-wit.png",
            "image": "https://bengalivo.com/images/slide1.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Drunen",
              "addressCountry": "NL"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info@bengalivo.com",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.facebook.com/bengalivo",
              "https://www.instagram.com/bengalivo"
            ],
            "foundingDate": "2004",
            "founder": {
              "@type": "Person",
              "name": "Ivonne van Dreumel"
            }
          };

          return (
            <div className="min-h-screen">
              <Head>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
              </Head>
              {/* Slideshow Hero Section */}
              <Slideshow />



      {/* Who We Are Section */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                {whoWeAreContent.title}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {whoWeAreContent.content}
              </p>
              <Button asChild className="mt-4">
                <Link href="/about-us">
                  {t('home.readMoreAboutCattery')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-elegant">
                <Image
                  src="/images/ivonne.jpg"
                  alt="Ivonne van Dreumel"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 px-4">
              {whatWeStandForContent.title}
            </h2>
          </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <Card className="shadow-elegant h-full overflow-hidden">
                        <div className="relative h-48 w-full">
                          <Image
                            src="/images/cattery1.jpg"
                            alt="Health screening"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <Heart className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-3">{healthContent.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{healthContent.content}</p>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <Card className="shadow-elegant h-full overflow-hidden">
                        <div className="relative h-48 w-full">
                          <Image
                            src="/images/cattery2.jpg"
                            alt="Character and socialization"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <PawPrint className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-3">{characterContent.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{characterContent.content}</p>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <Card className="shadow-elegant h-full overflow-hidden">
                        <div className="relative h-48 w-full">
                          <Image
                            src="/images/slide1.jpg"
                            alt="Wild look breeding"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <Star className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-3">{wildLookContent.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{wildLookContent.content}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 px-4">
              We&apos;re Social!
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 mb-8">
              Follow us on social media for the latest updates, photos, and news about our Bengal cats!
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://www.facebook.com/bengalivo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Facebook className="h-6 w-6" />
                <span className="font-semibold">Facebook</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/bengalivo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Instagram className="h-6 w-6" />
                <span className="font-semibold">Instagram</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Our Bengal Family
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Take a look at our beautiful Bengal cats and the loving environment they call home.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/images/slide1.jpg", alt: "Bengal cat in natural habitat" },
              { src: "/images/slide2.jpg", alt: "Kittens playing together" },
              { src: "/images/slide3.jpg", alt: "Champion Bengal cat" },
              { src: "/images/cattery1.jpg", alt: "Cattery environment" },
              { src: "/images/cattery2.jpg", alt: "Bengal cat portrait" },
              { src: "/images/ivonne.jpg", alt: "Cattery owner with cats" }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-elegant h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link href="/kittens">
                View More Photos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}