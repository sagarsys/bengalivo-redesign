"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Facebook, Instagram, Settings } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSession, signOut } from "next-auth/react";
import { useTranslation } from 'react-i18next';

const getNavigationItems = (t: (key: string) => string) => [
  { name: t('navigation.home'), href: "/" },
  { name: t('navigation.about'), href: "/about-us" },
  { name: t('navigation.kittens'), href: "/kittens" },
  { name: t('navigation.breederCats'), href: "/breeders" },
  { name: t('navigation.theBengal'), href: "/bengal" },
  { name: t('navigation.contact'), href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigationItems = getNavigationItems(t);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={`sticky top-0 z-50 w-full border-b border-border/40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md' 
        : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <Image
                src="/images/logo-wit.png"
                alt="Bengalivo"
                width={50}
                height={50}
                className="h-10 w-auto"
              />
              <span className="text-lg font-semibold text-gradient">Bengalivo</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group"
              >
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{
                    width: pathname === item.href ? "100%" : 0,
                  }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
            
                    {/* Language Switcher */}
                    <Select value={i18n.language} onValueChange={changeLanguage}>
                      <SelectTrigger className="w-16 h-8 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">EN</SelectItem>
                        <SelectItem value="nl">NL</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Social Media Links */}
                    <div className="flex items-center space-x-2">
                      <motion.a
                        href="https://www.facebook.com/bengalivo"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-foreground/60 hover:text-primary transition-colors"
                        aria-label="Follow us on Facebook"
                      >
                        <Facebook className="h-4 w-4" />
                      </motion.a>
                      <motion.a
                        href="https://www.instagram.com/bengalivo"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-foreground/60 hover:text-primary transition-colors"
                        aria-label="Follow us on Instagram"
                      >
                        <Instagram className="h-4 w-4" />
                      </motion.a>
                    </div>
            
            {/* Admin Login - Only show for authenticated users */}
            {session && (
              <>
                <Link
                  href="/admin"
                  className="relative group flex items-center gap-1"
                >
                  <Settings className="h-4 w-4" />
                  <span
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === "/admin"
                        ? "text-primary"
                        : "text-foreground/80"
                    }`}
                  >
                    Admin
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    animate={{
                      width: pathname === "/admin" ? "100%" : 0,
                    }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => signOut()}
                  className="text-sm"
                >
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                        {/* Language Switcher */}
                        <div className="flex items-center gap-4 pt-4 border-t border-border">
                          <span className="text-sm text-muted-foreground">Language:</span>
                          <Select 
                            value={i18n.language} 
                            onValueChange={(value) => {
                              changeLanguage(value);
                              setIsOpen(false);
                            }}
                          >
                            <SelectTrigger className="w-20">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="nl">Nederlands</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                
                {/* Admin Login - Only show for authenticated users */}
                {session && (
                  <>
                    <Link
                      href="/admin"
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-primary flex items-center gap-2 ${
                        pathname === "/admin"
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      <Settings className="h-4 w-4" />
                      Admin
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setIsOpen(false);
                      }}
                      className="text-lg font-medium transition-colors hover:text-primary text-left"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
