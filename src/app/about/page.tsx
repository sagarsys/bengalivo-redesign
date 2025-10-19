"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Mail } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutPage() {
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
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            About Bengalivo
          </h1>
          
          {/* Intro Slideshow */}
          <div className="relative w-full max-w-4xl mx-auto h-[400px] rounded-2xl overflow-hidden">
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
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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
        </motion.div>

        {/* Quote Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 bg-gradient-to-b from-primary/5 to-transparent py-20"
        >
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative">
              <svg className="w-16 h-16 text-primary/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                My name is Ivonne van Dreumel and since 2004 owner of Bengal cats.
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I live in Drunen which is in the southern part of the Netherlands. Since 2004 my addiction for Bengals started and in 2006 I started breeding with the bengals.
              </p>
            </div>
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
                If the weather somewhat admits, then the cats go outside which they like very much. Apart from that they staying also in the house….. and helping with everything (cleaning, working at the PC, showering). <em>Everything I do, they do!</em>
              </p>
              
              <p>
                In my cattery several rooms are available like a &quot;nursing room&quot; (for the girls to give labour and stay apart from the rest) and &quot;kitten area&quot; (special area where the kittens can stay till they leave to their new home and were they have a big play area and can go outside in the outdoor enclosure). The kittens are staying in the living room from 5 weeks onwards to get used to a normal house situation 😉
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
              <h3 className="text-3xl sm:text-4xl font-bold">Nursing Room</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                On the picture the double kitten cage which is in the nursing room. The cage can be used to separate pregnant girls or if a new kitten/cat needs to be in isolation. Normally the pregnant girls can go in the cage based on free choice but often prefer another place in the room 😉
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about/nursing-room.jpg"
                alt="Nursing room with kitten cage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Living Room Section - Image Left */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/about/living-room.jpg"
                alt="Living room with cats"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl sm:text-4xl font-bold">Living Room</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                On the pictures below the new separated area in the livingroom which is connected with one of the outdoor enclosures. The area can be open or closed with sliding glass doors.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Toys & Catwheels Section - Image Right */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold">Toys & Catwheels</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The cats live in several parts of the house including the living room. The cats have also an outdoor enclosure (see picture above) with a catswheel, cat tree, climbing tower and shelves.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about/toys-and-catwheels.jpg"
                alt="Toys and catwheels"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Outdoors Section - Image Left */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/about/outdoors.jpg"
                alt="Outdoor enclosure"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl sm:text-4xl font-bold">Outdoors</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Two outdoor enclosures are available for the cats. One is attached to the house and the other is at the end of the garden attached to the barn. This outdoor enclosure has also two houses in which the cats can stay during the night. During the summer months the boys are allowed to stay in the outside enclosure (in winter they will be transferred inside due to difference in temperature.)
              </p>
            </div>
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
              <h2 className="text-2xl font-bold mb-4">Get the latest updates!</h2>
              <p className="text-muted-foreground mb-6">Subscribe to our newsletter</p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                  />
                  <Button>Subscribe</Button>
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
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">About Bengalivo</h2>
              <p className="text-muted-foreground leading-relaxed">
                My name is Ivonne van Dreumel and since 2004 owner of Bengal cats. I live in Drunen which is in the southern part of the Netherlands. Since 2004 my addiction for Bengals started and in 2006 I started breeding with the bengals.
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
              <h2 className="text-2xl font-bold mb-6">Contact</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">How to get in touch?</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Preferred way to get in contact, is by sending an e-mail. I will respond to your emails as soon as possible, usually within 24 hours.
                </p>
                <p className="text-muted-foreground mb-6">Thank you !</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">catterybengalivo@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Drunen - NL</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                <p className="text-muted-foreground mb-4">
                  Do you want to receive the lastest updates in you mailbox? Subscribe to our newsletter and stay in touch!
                </p>
                <div className="max-w-md">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                    />
                    <Button>Subscribe</Button>
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
