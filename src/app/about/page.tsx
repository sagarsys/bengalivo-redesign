"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Users, Leaf, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {

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
            The Bengal
          </h1>
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
                The Bengal cat is a domestic cat breed created from hybrids of domestic cats, 
                especially the spotted Egyptian Mau, with the Asian leopard cat. The breed name 
                comes from the leopard cat&apos;s taxonomic name.
              </p>
              <p>
                Bengals have a wild appearance with large spots, rosettes, and a light/white belly, 
                and a body structure reminiscent of the Asian leopard cat. The Bengal cat is usually 
                either classed as brown-spotted, snow-spotted, or silver-spotted.
              </p>
              <p>
                Despite their wild appearance, Bengals are domestic cats that are friendly, 
                confident, and loving companions. They are known for their high energy levels, 
                intelligence, and playful nature.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Characteristics */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bengal Characteristics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="h-full text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Affectionate</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bengals are known for their loving and social nature, forming strong bonds with their families.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Intelligent</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  These cats are highly intelligent and can be trained to perform tricks and follow commands.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Active</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bengals are energetic and playful, requiring plenty of mental and physical stimulation.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Social</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  They thrive in social environments and generally get along well with other pets and children.
                </p>
              </CardContent>
            </Card>
          </div>
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
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                About Bengalivo
              </h3>
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
              <h3 className="text-2xl font-bold mb-6">Contact</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">How to get in touch?</h4>
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
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Drunen - NL</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
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
