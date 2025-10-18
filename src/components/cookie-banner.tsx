"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Cookie, Settings } from "lucide-react";
import { useTranslation } from 'react-i18next';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookies, setCookies] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });
  const { t } = useTranslation();

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allCookies = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setCookies(allCookies);
    localStorage.setItem('cookie-consent', JSON.stringify(allCookies));
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setCookies(necessaryOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(cookies));
    setIsVisible(false);
  };

  const handleCookieChange = (type: keyof typeof cookies) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    setCookies(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border/40 shadow-lg"
      >
        <div className="container mx-auto px-4 py-4">
          {!showSettings ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {t('cookies.title', 'We use cookies')}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('cookies.description', 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.')}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  className="flex items-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  {t('cookies.settings', 'Settings')}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAcceptNecessary}
                >
                  {t('cookies.necessary', 'Necessary Only')}
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="bg-primary hover:bg-primary/90"
                >
                  {t('cookies.acceptAll', 'Accept All')}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">
                  {t('cookies.preferences', 'Cookie Preferences')}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-3">
                {/* Necessary Cookies */}
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">
                      {t('cookies.necessaryTitle', 'Necessary Cookies')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t('cookies.necessaryDesc', 'Essential for the website to function properly. Cannot be disabled.')}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={cookies.necessary}
                      disabled
                      className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">
                      {t('cookies.analyticsTitle', 'Analytics Cookies')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t('cookies.analyticsDesc', 'Help us understand how visitors interact with our website.')}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={cookies.analytics}
                      onChange={() => handleCookieChange('analytics')}
                      className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">
                      {t('cookies.marketingTitle', 'Marketing Cookies')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t('cookies.marketingDesc', 'Used to track visitors across websites for advertising purposes.')}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={cookies.marketing}
                      onChange={() => handleCookieChange('marketing')}
                      className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSettings(false)}
                >
                  {t('cookies.cancel', 'Cancel')}
                </Button>
                <Button
                  size="sm"
                  onClick={handleSavePreferences}
                  className="bg-primary hover:bg-primary/90"
                >
                  {t('cookies.save', 'Save Preferences')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
