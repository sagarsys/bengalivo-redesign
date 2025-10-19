"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Mail } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const introSlides = [
    "/images/about/intro-slide-1.jpg",
    "/images/about/intro-slide-2.jpg",
    "/images/about/intro-slide-3.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % introSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [introSlides.length]);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('about.title')}
          </h1>
        </motion.div>

        {/* Quote Section with Slideshow */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-b from-primary/8 to-transparent py-8"
        >
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative mb-6">
              <svg className="w-10 h-10 text-primary/40 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                {t('about.quoteTitle')}
              </h2>
              <div className="w-20 h-0.5 bg-primary mx-auto"></div>
            </div>
            
            {/* Intro Slideshow - Moved Inside Quote Section */}
            <div className="relative w-full max-w-4xl mx-auto h-[300px] sm:h-[350px] rounded-2xl overflow-hidden mb-5">
              {introSlides.map((slide, index) => (
                <Image
                  key={slide}
                  src={slide}
                  alt={`About Bengalivo ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority={index === 0}
                />
              ))}
              
              {/* Slide Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {introSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('about.quoteSubtitle')}
            </p>
          </div>
        </motion.section>

        {/* Main Content */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg text-center mb-12">
              <p>
                {t('about.paragraph1')} <em>{t('about.paragraph1Emphasis')}</em>
              </p>
              
              <p>
                {t('about.paragraph2')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Nursing Room Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold">{t('about.nursingRoomTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('about.nursingRoomContent')}
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about/nursing-room.jpg"
                alt={t('about.nursingRoomTitle')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.section>

        {/* 3 Cards Section - Living Room, Toys, Outdoors */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Living Room Card */}
            <Card className="hover:shadow-elegant transition-all duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/about/living-room.jpg"
                  alt={t('about.livingRoomTitle')}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{t('about.livingRoomTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.livingRoomContent')}
                </p>
              </CardContent>
            </Card>

            {/* Toys & Catwheels Card */}
            <Card className="hover:shadow-elegant transition-all duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/about/toys-and-catwheels.jpg"
                  alt={t('about.toysTitle')}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{t('about.toysTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.toysContent')}
                </p>
              </CardContent>
            </Card>

            {/* Outdoors Card */}
            <Card className="hover:shadow-elegant transition-all duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/about/outdoors.jpg"
                  alt={t('about.outdoorsTitle')}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{t('about.outdoorsTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.outdoorsContent')}
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{t('about.newsletterTitle')}</h2>
              <p className="text-muted-foreground mb-6">{t('about.newsletterSubtitle')}</p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder={t('about.emailPlaceholder')}
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                  />
                  <Button>{t('about.subscribe')}</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* About Bengalivo Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t('about.aboutBengalivoTitle')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.quoteTitle')} {t('about.quoteSubtitle')}
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">{t('about.contactTitle')}</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{t('about.contactSubtitle')}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t('about.contactContent')}
                </p>
                <p className="text-muted-foreground mb-6">{t('about.thankYou')}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t('about.email')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t('about.location')}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">{t('about.newsletterSectionTitle')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('about.newsletterSectionContent')}
                </p>
                <div className="max-w-md">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder={t('about.emailPlaceholder')}
                      className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                    />
                    <Button>{t('about.subscribe')}</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
