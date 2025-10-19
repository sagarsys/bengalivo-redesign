"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Mail, PawPrint, TreePine, Baby } from "lucide-react";
import Image from "next/image";

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
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              My name is Ivonne van Dreumel and since 2004 owner of Bengal cats.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <TreePine className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Outdoor Run</h3>
                </CardContent>
              </Card>
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">New area</h3>
                </CardContent>
              </Card>
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Baby className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Kitten area</h3>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong>I live in Drunen which is in the southern part of the Netherlands. Since 2004 my addiction for Bengals started and in 2006 I started breeding with the bengals.</strong>
              </p>
              
              <p>
                If the weather somewhat admits, then the cats go outside which they like very much. Apart from that they staying also in the house….. and helping with everything (cleaning, working at the PC, showering). <em>Everything I do, they do!</em>
              </p>
              
              <p>
                In my cattery several rooms are available like a &quot;nursing room&quot; (for the girls to give labour and stay apart from the rest) and &quot;kitten area&quot; (special area where the kittens can stay till they leave to their new home and were they have a big play area and can go outside in the outdoor enclosure). The kittens are staying in the living room from 5 weeks onwards to get used to a normal house situation 😉
              </p>
            </div>
          </div>
        </motion.section>

        {/* Kitten Cage Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Kitten cage</h2>
            <h3 className="text-xl font-semibold mb-4">Nursing room</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  On the picture the double kitten cage which is in the nursing room. The cage can be used to separate pregnant girls or if a new kitten/cat needs to be in isolation. Normally the pregnant girls can go in the cage based on free choice but often prefer another place in the room 😉
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about-kitten-cage.jpg"
                    alt="Kitten cage in nursing room"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center hidden">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Baby className="h-16 w-16 text-primary" />
                      </div>
                      <p className="text-muted-foreground">Kitten Cage Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Discover More Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Discover More</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Living Room */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Living Room</h3>
                  <div className="relative h-48 w-full mb-4">
                    <Image
                      src="/images/about-living-room.jpg"
                      alt="Living room with cats"
                      fill
                      className="object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center hidden">
                      <Home className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    On the pictures below the new separated area in the livingroom which is connected with one of the outdoor enclosures. The area can be open or closed with sliding glass doors.
                  </p>
                </CardContent>
              </Card>

              {/* Toys & Catwheels */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Toys & Catwheels</h3>
                  <div className="relative h-48 w-full mb-4">
                    <Image
                      src="/images/about-toys-catwheels.jpg"
                      alt="Catwheels and toys"
                      fill
                      className="object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center hidden">
                      <PawPrint className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The cats live in several parts of the house including the living room. The cats have also an outdoor enclosure (see picture above) with a catswheel, cat tree, climbing tower and shelves.
                  </p>
                </CardContent>
              </Card>

              {/* Outdoors */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Outdoors</h3>
                  <div className="relative h-48 w-full mb-4">
                    <Image
                      src="/images/about-outdoors.jpg"
                      alt="Outdoor enclosure"
                      fill
                      className="object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center hidden">
                      <TreePine className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Two outdoor enclosures are available for the cats. One is attached to the house and the other is at the end of the garden attached to the barn. This outdoor enclosure has also two houses in which the cats can stay during the night. During the summer months the boys are allowed to stay in the outside enclosure (in winter they will be transferred inside due to difference in temperature.)
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
