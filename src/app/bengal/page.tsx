"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Mail, MapPin, Star, Sparkles, Brain, Users, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import { useState } from "react";

export default function BengalPage() {
  const { t } = useTranslation();
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  const carouselImages = [
    "/images/bengal/not-just-for-everyone-1.jpg",
    "/images/bengal/not-just-for-everyone-2.jpg",
    "/images/bengal/not-just-for-everyone-3.jpg",
    "/images/bengal/not-just-for-everyone-4.jpg",
    "/images/bengal/not-just-for-everyone-5.jpg",
    "/images/bengal/not-just-for-everyone-6.jpg",
  ];
  
  const galleryImages = [
    "/images/bengal/bewitching-beauty.jpg",
    "/images/bengal/wild-heritage.png",
    "/images/bengal/patterns.jpg",
    "/images/bengal/history.jpg",
    ...carouselImages,
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t('bengal.title')}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-8">
            {t('bengal.subtitle')}
          </h2>
          <div className="relative w-full max-w-4xl mx-auto h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/bengal/bewitching-beauty.jpg"
              alt="Bengal Cat - A Bewitching Beauty"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6 text-muted-foreground text-center leading-relaxed text-lg">
              <p>
                {t('bengal.introduction')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Wild Heritage - Image Right */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold">{t('bengal.wildHeritage.title')}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('bengal.wildHeritage.content')}
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/bengal/wild-heritage.png"
                alt="Wild Heritage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Patterns - Image Left */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/bengal/patterns.jpg"
                alt="Bengal Cat Patterns"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl sm:text-4xl font-bold">{t('bengal.patterns.title')}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('bengal.patterns.content')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* History - Image Right */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold">{t('bengal.history.title')}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('bengal.history.content')}
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/bengal/history.jpg"
                alt="Bengal Cat History"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Not just for everyone - With Carousel */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center">{t('bengal.notForEveryone.title')}</h3>
            
            {/* Carousel */}
            <div className="relative mb-8">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={carouselImages[carouselIndex]}
                  alt={`Bengal Cat ${carouselIndex + 1}`}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
              
              {/* Carousel Controls */}
              <button
                onClick={() => setCarouselIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCarouselIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCarouselIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === carouselIndex ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center text-muted-foreground leading-relaxed text-lg max-w-4xl mx-auto">
              <p>
                {t('bengal.notForEveryone.content')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* What made the Bengal such an instant hit - Redesigned */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 bg-gradient-to-b from-primary/8 to-transparent py-20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quote Section */}
            <div className="max-w-5xl mx-auto mb-16 text-center">
              <div className="relative">
                <svg className="w-16 h-16 text-primary/40 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {t('bengal.instantHit.title')}
                </h3>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
              </div>
            </div>
            
            {/* Features Grid - Modern Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Rich Coat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/8">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-center">{t('bengal.instantHit.richCoat.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {t('bengal.instantHit.richCoat.content')}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Variety of Coat Patterns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/8">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Star className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-center">{t('bengal.instantHit.variety.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {t('bengal.instantHit.variety.content')}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Bengal Personality */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/8">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-center">{t('bengal.instantHit.personality.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {t('bengal.instantHit.personality.content')}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Very Smart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/8">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Brain className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-center">{t('bengal.instantHit.smart.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {t('bengal.instantHit.smart.content')}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Focused on You */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/8">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-center">{t('bengal.instantHit.focused.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {t('bengal.instantHit.focused.content')}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Water Loving */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/8">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Droplets className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-center">{t('bengal.instantHit.waterLoving.title')}</h4>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {t('bengal.instantHit.waterLoving.content')}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Summary - Myths */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center">{t('bengal.summary.title')}</h3>
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6">{t('bengal.summary.subtitle')}</h4>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    <strong>1.</strong> {t('bengal.summary.myths.1')}
                  </p>
                  <p>
                    <strong>2.</strong> {t('bengal.summary.myths.2')}
                  </p>
                  <p>
                    <strong>3.</strong> {t('bengal.summary.myths.3')}
                  </p>
                  <p>
                    <strong>4.</strong> {t('bengal.summary.myths.4')}
                  </p>
                  <p>
                    <strong>5.</strong> {t('bengal.summary.myths.5')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Image Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Beautiful Bengals</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`Bengal Cat ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About Bengalivo */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center">{t('bengal.aboutBengalivo.title')}</h3>
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-muted-foreground text-center text-lg leading-relaxed">
                  {t('bengal.aboutBengalivo.content')}
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center">{t('bengal.contact.title')}</h3>
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">{t('bengal.contact.subtitle')}</h4>
                <div className="space-y-6 text-muted-foreground text-lg">
                  <p className="text-center">
                    {t('bengal.contact.content')}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <span>{t('bengal.contact.email')}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>{t('bengal.contact.location')}</span>
                  </div>
                </div>
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
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-4">{t('bengal.newsletter.title')}</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  {t('bengal.newsletter.content')}
                </p>
                <div className="max-w-md mx-auto">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder={t('bengal.newsletter.placeholder')}
                      className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground"
                    />
                    <Button className="px-6">{t('bengal.newsletter.subscribe')}</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </div>
  );
}