"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  logo?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    title: "Bengalivo",
    subtitle: "Breeding black tabby and snow bengals",
    buttonText: "LEARN MORE",
    buttonLink: "/about-us",
    logo: "/images/logo-wit-groot.png"
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    title: "KITTENS AVAILABLE",
    subtitle: "For more pictures of the current kittens.....",
    buttonText: "I want to look at those CUTIES!",
    buttonLink: "/kittens"
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    title: "Home of LA SGC Bengalivo Million Reasons",
    subtitle: "21th Best Allbreed Cat of TICA 2021-2022",
    description: "IW SGC Bengalivo Million Reasons aka Eos",
    buttonText: "READ more",
    buttonLink: "/breeders"
  }
];

export function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds like the original

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority={currentSlide === 0}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Logo for first slide */}
              {slides[currentSlide].logo && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8"
                >
                  <Image
                    src={slides[currentSlide].logo}
                    alt="Bengalivo Logo"
                    width={400}
                    height={80}
                    className="mx-auto h-20 w-auto"
                  />
                </motion.div>
              )}

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
                style={{
                  fontFamily: 'var(--font-oswald)',
                  fontWeight: currentSlide === 0 ? 600 : 500,
                  letterSpacing: '3px',
                  textTransform: 'uppercase'
                }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-white/90 mb-6"
                style={{
                  fontFamily: 'var(--font-roboto)',
                  fontWeight: 400
                }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Description */}
              {slides[currentSlide].description && (
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-lg text-white mb-8"
                >
                  {slides[currentSlide].description}
                </motion.p>
              )}

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg border border-primary/20">
                  <Link href={slides[currentSlide].buttonLink}>
                    {slides[currentSlide].buttonText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 text-white/70 text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
