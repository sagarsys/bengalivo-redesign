"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useKittensData } from "@/hooks/use-kittens-data";
import { useScrollRestoration } from "@/hooks/use-scroll-restoration";
import { getKittensStructuredData, kittensPageMeta } from "@/seo/kittens";
import { CONTACT_EMAIL, CONTACT_LOCATION, KITTEN_UPDATE_DATE, KITTEN_BIRTH_DATE, RETIRED_UPDATE_DATE } from "@/constants";
import { LoadingPage } from "@/components/loading-page";
import { ErrorDisplay } from "@/components/error-display";
import { KittensPageSkeleton } from "@/components/skeletons/kittens-page-skeleton";

export default function KittensPage() {
  const { kittens, retiredCats, plannedLitters, loading, error } = useKittensData();
  useScrollRestoration();

  const structuredData = getKittensStructuredData(kittens);

  if (loading) {
    return <LoadingPage skeleton={<KittensPageSkeleton />} />;
  }
  
  if (error) return <ErrorDisplay message={error} onRetry={() => window.location.reload()} />;

  return (
    <div className="min-h-screen py-12">
      <Head>
        <title>{kittensPageMeta.title}</title>
        <meta name="description" content={kittensPageMeta.description} />
        <meta name="keywords" content={kittensPageMeta.keywords} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Kittens
          </h1>
        </motion.div>

        {/* Kittens Expected/Available Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Kittens expected / available</h2>
          
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-4">
              <em>Follow our Group on Facebook to see the latest photo&apos;s and video&apos;s</em>
            </p>
            <p className="text-muted-foreground">
              <strong>– Update {KITTEN_UPDATE_DATE} –</strong>
            </p>
            <p className="text-muted-foreground">
              <strong>{KITTEN_BIRTH_DATE}</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kittens.map((kitten) => (
              <Card key={kitten.id} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-lg">{kitten.name}</span>
                    <Badge variant={kitten.isAvailable ? "default" : "secondary"}>
                      {kitten.isAvailable ? "AVAILABLE" : "RESERVED"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={kitten.imageUrl || "/images/featured-cat.jpg"}
                      alt={kitten.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/featured-cat.jpg";
                      }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Age: {kitten.age}</p>
                  <p className="text-sm text-muted-foreground">Gender: {kitten.gender}</p>
                  <p className="text-sm text-muted-foreground">Color: {kitten.color}</p>
                  {kitten.price && (
                    <p className="text-sm text-muted-foreground">Price: {kitten.price}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Retired Cats Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Retired cats available</h2>
          
          <div className="mb-6">
            <p className="text-muted-foreground text-center">
              <strong>Update {RETIRED_UPDATE_DATE}</strong> – at this moment some retired cats are available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {retiredCats.map((cat) => (
              <Card key={cat.id} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-lg">{cat.name}</span>
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      AVAILABLE
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={cat.imageUrl || "/images/breeder1.jpg"}
                      alt={cat.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/breeder1.jpg";
                      }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Age: {cat.age}</p>
                  <p className="text-sm text-muted-foreground">Gender: {cat.gender}</p>
                  <p className="text-sm text-muted-foreground">Color: {cat.color}</p>
                  <p className="text-sm leading-relaxed">{cat.description}</p>
                  <p className="text-xs text-muted-foreground">
                    In case you are interested, please send a message to: {CONTACT_EMAIL}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Planned Litters Section - Timeline Design */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Planned Litters for 2025/2026</h2>
            <p className="text-center text-muted-foreground mb-8">
              The following litters are planned for coming period 😉
            </p>

            <div className="space-y-4">
              {plannedLitters.map((litter, index) => (
                <motion.div
                  key={litter.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 pb-6 border-l-2 border-primary/30 last:border-0 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 border-primary ${
                    litter.status === 'born' ? 'bg-primary' : 'bg-background'
                  }`}></div>
                  
                  <div className="bg-card rounded-lg p-6 hover:shadow-elegant transition-all duration-300 border border-border/50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <div>
                        <Badge variant={litter.status === 'born' ? 'default' : 'secondary'} className="mb-2">
                          {litter.status === 'born' ? '✓ Born' : 'Planned'}
                        </Badge>
                        <p className="text-sm text-muted-foreground font-medium">{litter.displayDate}</p>
                      </div>
                      {litter.note && (
                        <Badge variant="outline" className="text-xs w-fit">
                          {litter.note}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{litter.parents}</h3>
                    <p className="text-muted-foreground text-sm">{litter.expected}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Adopting a Kitten Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Adopting a Kitten?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Click here to learn everything you need to know about adopting a kitten from Cattery Bengalivo.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Info about Kitten adoption
                <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.section>

        {/* About Bengalivo Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15">
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

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Latest Kittens news in your mailbox?</h3>
              <p className="text-muted-foreground mb-6">Subscribe to our newsletter!</p>
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
                    <span className="text-muted-foreground">{CONTACT_EMAIL}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{CONTACT_LOCATION}</span>
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
