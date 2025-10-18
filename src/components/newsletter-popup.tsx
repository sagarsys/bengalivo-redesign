"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Mail, Heart } from "lucide-react";
import { useTranslation } from 'react-i18next';

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    // Check if user has already subscribed or dismissed
    const hasSubscribed = localStorage.getItem('newsletter-subscribed');
    const hasDismissed = localStorage.getItem('newsletter-dismissed');
    const lastInteraction = localStorage.getItem('newsletter-last-interaction');
    
    if (hasSubscribed || hasDismissed) {
      return;
    }

    // Show popup after user has interacted with the site for a bit
    const checkInteraction = () => {
      const currentCount = interactionCount + 1;
      setInteractionCount(currentCount);
      
      // Show popup after 3 interactions (clicks, scrolls, etc.)
      if (currentCount >= 3) {
        // Add a small delay to make it feel natural
        setTimeout(() => {
          setIsVisible(true);
        }, 2000);
      }
    };

    // Track various user interactions
    const handleInteraction = () => {
      checkInteraction();
    };

    // Add event listeners for user interactions
    document.addEventListener('click', handleInteraction);
    document.addEventListener('scroll', handleInteraction, { passive: true });
    document.addEventListener('keydown', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [interactionCount]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store subscription status
      localStorage.setItem('newsletter-subscribed', 'true');
      setIsSubscribed(true);
      
      // Hide popup after success
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDismiss = () => {
    localStorage.setItem('newsletter-dismissed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl border border-border/40 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            aria-label="Close newsletter popup"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>

          {/* Content */}
          <div className="p-8 text-center">
            {!isSubscribed ? (
              <>
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <Mail className="h-8 w-8 text-primary" />
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold mb-2"
                >
                  {t('newsletter.popupTitle', 'Stay Updated!')}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground mb-6 leading-relaxed"
                >
                  {t('newsletter.popupDescription', 'Get the latest updates about our Bengal cats, new litters, and special offers delivered to your inbox!')}
                </motion.p>

                {/* Form */}
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onSubmit={handleSubscribe}
                  className="space-y-4"
                >
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder={t('newsletter.emailPlaceholder', 'Enter your email address')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pr-12"
                    />
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t('newsletter.subscribing', 'Subscribing...')}
                      </div>
                    ) : (
                      t('newsletter.subscribe', 'Subscribe Now')
                    )}
                  </Button>
                </motion.form>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 text-sm text-muted-foreground"
                >
                  <p>✨ {t('newsletter.benefit1', 'Exclusive photos of new litters')}</p>
                  <p>🎉 {t('newsletter.benefit2', 'Special offers and discounts')}</p>
                  <p>📧 {t('newsletter.benefit3', 'No spam, unsubscribe anytime')}</p>
                </motion.div>
              </>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center"
                >
                  <Heart className="h-8 w-8 text-green-600" />
                </motion.div>
                
                <h2 className="text-2xl font-bold text-green-600">
                  {t('newsletter.successTitle', 'Welcome to our family!')}
                </h2>
                
                <p className="text-muted-foreground">
                  {t('newsletter.successMessage', 'Thank you for subscribing! You\'ll receive our latest updates soon.')}
                </p>
              </motion.div>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/5 rounded-full" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
