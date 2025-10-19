"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Mail, MapPin, Star, Sparkles, Brain, Users, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

export default function BengalPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t('bengal.title')}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            {t('bengal.subtitle')}
          </h2>
        </motion.div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {t('bengal.introduction')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Wild Heritage */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">{t('bengal.wildHeritage.title')}</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {t('bengal.wildHeritage.content')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Patterns */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">{t('bengal.patterns.title')}</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {t('bengal.patterns.content')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* History */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">{t('bengal.history.title')}</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {t('bengal.history.content')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Not just for everyone */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">{t('bengal.notForEveryone.title')}</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {t('bengal.notForEveryone.content')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* What made the Bengal such an instant hit */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">
              {t('bengal.instantHit.title')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Rich Coat */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center">{t('bengal.instantHit.richCoat.title')}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('bengal.instantHit.richCoat.content')}
                  </p>
                </CardContent>
              </Card>

              {/* Variety of Coat Patterns */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center">{t('bengal.instantHit.variety.title')}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('bengal.instantHit.variety.content')}
                  </p>
                </CardContent>
              </Card>

              {/* Bengal Personality */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center">{t('bengal.instantHit.personality.title')}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('bengal.instantHit.personality.content')}
                  </p>
                </CardContent>
              </Card>

              {/* Very Smart */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center">{t('bengal.instantHit.smart.title')}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('bengal.instantHit.smart.content')}
                  </p>
                </CardContent>
              </Card>

              {/* Focused on You */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center">{t('bengal.instantHit.focused.title')}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('bengal.instantHit.focused.content')}
                  </p>
                </CardContent>
              </Card>

              {/* Water Loving */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Droplets className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center">{t('bengal.instantHit.waterLoving.title')}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('bengal.instantHit.waterLoving.content')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Summary - Myths */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">{t('bengal.summary.title')}</h3>
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4">{t('bengal.summary.subtitle')}</h4>
                <div className="space-y-4 text-muted-foreground">
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

        {/* About Bengalivo */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">{t('bengal.aboutBengalivo.title')}</h3>
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-muted-foreground text-center">
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
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">{t('bengal.contact.title')}</h3>
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4">{t('bengal.contact.subtitle')}</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {t('bengal.contact.content')}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>{t('bengal.contact.email')}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
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
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{t('bengal.newsletter.title')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('bengal.newsletter.content')}
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder={t('bengal.newsletter.placeholder')}
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                  />
                  <Button>{t('bengal.newsletter.subscribe')}</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}