"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Mail, PawPrint, TreePine, Baby } from "lucide-react";

export default function AboutUsPage() {

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
            About
          </h1>
        </motion.div>

        {/* Main Content */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <strong>My name is Ivonne van Dreumel and since 2004 owner of Bengal cats.</strong>
              </p>
              <p>
                I live in Drunen which is in the southern part of the Netherlands. Since 2004 my addiction for Bengals started 
                and in 2006 I started breeding with the bengals.
              </p>
              <p>
                If the weather somewhat admits, then the cats go outside which they like very much. Apart from that they staying 
                also in the house….. and helping with everything (cleaning, working at the PC, showering). <em>Everything I do, they do!</em>
              </p>
              <p>
                In my cattery several rooms are available like a &quot;nursing room&quot; (for the girls to give labour and stay apart from the rest) 
                and &quot;kitten area&quot; (special area where the kittens can stay till they leave to their new home and were they have a big play 
                area and can go outside in the outdoor enclosure). The kittens are staying in the living room from 5 weeks onwards to get 
                used to a normal house situation 😉
              </p>
            </div>
          </div>
        </motion.section>

        {/* Cattery Areas */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Outdoor Run */}
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <TreePine className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Outdoor Run</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  Large outdoor enclosure where cats can enjoy fresh air and natural environment.
                </p>
              </CardContent>
            </Card>

            {/* New Area */}
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">New Area</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  Modern living space with sliding glass doors connecting to outdoor enclosures.
                </p>
              </CardContent>
            </Card>

            {/* Kitten Area */}
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Baby className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Kitten Area</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  Special area with big play space and outdoor access for kittens until they go to new homes.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Nursing Room */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Nursing Room</h2>
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <PawPrint className="h-12 w-12 text-primary" />
                </div>
                <p className="text-muted-foreground text-center">
                  On the picture the double kitten cage which is in the nursing room. The cage can be used to separate pregnant girls 
                  or if a new kitten/cat needs to be in isolation. Normally the pregnant girls can go in the cage based on free choice 
                  but often prefer another place in the room 😉
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Discover More */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Discover More</h2>
            
            <div className="space-y-8">
              {/* Living Room */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Living Room</h3>
                  <div className="w-full h-48 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Home className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    On the pictures below the new separated area in the livingroom which is connected with one of the outdoor enclosures. 
                    The area can be open or closed with sliding glass doors.
                  </p>
                </CardContent>
              </Card>

              {/* Toys & Catwheels */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Toys & Catwheels</h3>
                  <div className="w-full h-48 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <PawPrint className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    The cats live in several parts of the house including the living room. The cats have also an outdoor enclosure 
                    (see picture above) with a catswheel, cat tree, climbing tower and shelves.
                  </p>
                </CardContent>
              </Card>

              {/* Outdoors */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Outdoors</h3>
                  <div className="w-full h-48 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TreePine className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Two outdoor enclosures are available for the cats. One is attached to the house and the other is at the end of the 
                    garden attached to the barn. This outdoor enclosure has also two houses in which the cats can stay during the night. 
                    During the summer months the boys are allowed to stay in the outside enclosure (in winter they will be transferred 
                    inside due to difference in temperature.)
                  </p>
                </CardContent>
              </Card>
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
              <h3 className="text-2xl font-bold mb-4">Get the latest updates!</h3>
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

        {/* About Bengalivo */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">About Bengalivo</h2>
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-muted-foreground text-center">
                  My name is Ivonne van Dreumel and since 2004 owner of Bengal cats. I live in Drunen which is in the southern part 
                  of the Netherlands. Since 2004 my addiction for Bengals started and in 2006 I started breeding with the bengals.
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
            <h2 className="text-2xl font-bold mb-6 text-center">Contact</h2>
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">catterybengalivo@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Home className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Drunen - NL</span>
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
