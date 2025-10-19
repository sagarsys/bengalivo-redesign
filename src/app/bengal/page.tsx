"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BengalPage() {

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
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            A Bewitching Beauty
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
                Quite a few cat breeds boast a wild feline look: Norwegian Forest cats resemble huge arctic feline predators; 
                Pixie Bob cats look a lot like American Bobcats; Abyssinian cats wear the wild agouti coat pattern with pride. 
                In fact, one of the reasons we love cats so much is the distinct uncultivated touch in their appearance and character.
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
            <h3 className="text-2xl font-bold mb-6">Wild Heritage</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                However, not many breeds possess a documented wild heritage like the Bengal does. The Bengal cat is a beautiful cat 
                that is a cross between a domestic cat and the Asian leopard cat. It has beautiful markings that are similar to those 
                of the wild Asian leopard, with stripes and other marks adding to their appearance. In terms of size, the Bengal cat 
                is similar in size to a domestic cat and they range from 7 to 10 pounds for females and 9 and 12 pounds for males. 
                Males may grow to reach close to 20 pounds.
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
            <h3 className="text-2xl font-bold mb-6">Patterns</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The markings on the Bengal cat vary based on body part. The face has horizontal stripes that almost make it look like 
                the cat is wearing mascara. The sides of the body have spots similar to those of a leopard or jaguar. The back of the 
                body has symmetrical stripes. They have two distinct coat patterns, either marble or spotted. Unlike any other breed, 
                some Bengals appear as if they were dipped in gold or silver glitter. Its distinctive leopard spotted or marbled coat 
                enhances its wild appearance as it roams the house.
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
            <h3 className="text-2xl font-bold mb-6">History</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong>Brief History</strong> – As the story goes, Jean Sugden Mills, around 1982 bred a domestic cat with a feral Indian Mau. 
                At about the same time, Greg and Elizabeth Kent started their own breed of Bengal Cats using an Egyptian Mau. Both Jean Mills 
                the Kents worked hard to popularize the breed, and in 1986, The International Cat Association adopted the first written breed 
                standard. Today Bengal Cats are the most popular registered cat breed. Bengal breeders and breeding programs now outnumber most 
                other breeds.
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
            <h3 className="text-2xl font-bold mb-6">Not just for everyone..</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Bengal cats are smart and cunning animals that crave attention and are always exploring. These cats aren&apos;t recommended 
                for casual pet owners, as they can be a handful, but you can rest assured that life with one will never be boring.
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
            <h2 className="text-3xl font-bold mb-8 text-center">
              So what made the Bengal such an instant hit in the cat fanciers&apos; world?
            </h2>

            <div className="space-y-8">
              {/* Rich Coat */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">1. Rich Coat – Little Grooming</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Bengal has a smooth rich coat that does not require any out of the ordinary grooming rituals. 
                    Some brushing is always recommended, for bonding purposes if nothing else, but the coat remains 
                    bright and beautiful even without that additional care. The coat has a distinct &quot;undomesticated&quot; 
                    appearance, courtesy of the Bengal&apos;s wild heritage, and some cats are said to have an actual 
                    golden glitter over their coat.
                  </p>
                </CardContent>
              </Card>

              {/* Variety of Coat Patterns */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">2. Variety of Coat Patterns and Colors</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bengals always display the tabby markings pattern, but that does not mean a uniform look. Bengal cats 
                    come in various shades of brown, with various yellowish and reddish tinges. There are even white &quot;snow&quot; 
                    Bengals that support a light silvery tabby pattern (some of them even have blue eyes). With their tabby 
                    patterns ranging between blotched (marble) and spots, the most spectacular Bengal cats present the viewer 
                    with a display of leopard-like rosettes. The rosettes, the joy and pride of many a breeder, can be anything 
                    from a largish bi-color spot, to a fully developed and clearly marked rosette. Some Bengals also inherit 
                    something called the &quot;glitter gene,&quot; which gives their coats a bright, iridescent look.
                  </p>
                </CardContent>
              </Card>

              {/* Bengal Personality */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">3. Bengal Purrrsonality</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The personality of the Bengal cat is what makes it such a great pet for animal lovers. Ultimately, cat lovers 
                    seek out the companionship of a feline, and not just good looks. And this is where the Bengal cat truly stands 
                    out, creating a huge appeal to ailurophiles everywhere. They are anything but ferocious or feral: Bengal cats 
                    today, adopted into loving homes, have to be at least four generations removed from their wild ancestors. These 
                    kitties are sweet and loving, yet incredibly agile, intelligent and active.
                  </p>
                </CardContent>
              </Card>

              {/* Very Smart */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">4. Very Smart</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Part of the Bengal personality is its extraordinary ability to critically think. The Bengal can figure out things 
                    and actually try to get it done on its own. The Bengal cat is a breed whose personality enables it to easily absorb 
                    information. With this, you can teach your Bengal different tricks to show everyone how smart your cat is. This aspect 
                    of the Bengal cat personality has earned the breed distinguishing labels like &quot;dog-like cat&quot; or &quot;dog-cat&quot;.
                  </p>
                </CardContent>
              </Card>

              {/* Focused on You */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">5. Focused on You</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As the immediate source of care and security, you are the cat&apos;s parent. This being a given, you and your Bengal 
                    cat get to bond a lot deeper. This cat is so attached to you that a major part of its personality is to be with you 
                    at all times. &quot;Talking&quot; is inherent to the Bengal cat personality. Somehow, you understand each other even if you 
                    don&apos;t really speak each others language. The Bengal expresses itself vocally, which is another very intriguing aspect 
                    of its personality.
                  </p>
                </CardContent>
              </Card>
            </div>
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
