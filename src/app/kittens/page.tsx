"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Kitten {
  id: string;
  name: string;
  age: string;
  gender: string;
  color: string;
  price?: string;
  isAvailable: boolean;
  description: string;
  imageUrl?: string;
}

interface RetiredCat {
  id: string;
  name: string;
  age: string;
  gender: string;
  color: string;
  description: string;
  isAvailable: boolean;
  imageUrl?: string;
}

interface PlannedLitter {
  id: string;
  parents: string;
  expected: string;
  season: string;
  note?: string;
}


export default function KittensPage() {
  const [kittens, setKittens] = useState<Kitten[]>([]);
  const [retiredCats, setRetiredCats] = useState<RetiredCat[]>([]);
  const [plannedLitters, setPlannedLitters] = useState<PlannedLitter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch kittens
        const kittensResponse = await fetch('/api/cats?type=kitten');
        const kittensData = await kittensResponse.json();
        setKittens(kittensData || []);

        // Fetch retired cats
        const retiredResponse = await fetch('/api/cats?type=retired');
        const retiredData = await retiredResponse.json();
        setRetiredCats(retiredData || []);

        // Fetch planned litters from content API
        const littersResponse = await fetch('/api/content?page=kittens&section=planned-litters');
        const littersData = await littersResponse.json();
        if (littersData && littersData.length > 0 && littersData[0].content) {
          setPlannedLitters(JSON.parse(littersData[0].content));
        } else {
          setPlannedLitters([]);
        }

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Available Bengal Kittens",
    "description": "Beautiful Bengal kittens available for adoption from Bengalivo cattery",
    "url": "https://bengalivo.com/kittens",
    "numberOfItems": kittens.length,
    "itemListElement": kittens.map((kitten, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": kitten.name,
      "description": kitten.description,
      "category": "Bengal Kitten",
      "brand": {
        "@type": "Brand",
        "name": "Bengalivo"
      },
      "offers": {
        "@type": "Offer",
        "price": kitten.price || "Contact for price",
        "priceCurrency": "EUR",
        "availability": kitten.isAvailable ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
      }
    }))
  };

  if (loading) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading kittens...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-500 mb-4">Error: {error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <Head>
        <title>Bengal Kittens for Sale | Bengalivo Cattery Netherlands</title>
        <meta name="description" content="Beautiful Bengal kittens available for adoption. Healthy, well-socialized kittens from our TICA registered cattery in Drunen, Netherlands." />
        <meta name="keywords" content="Bengal kittens for sale, Bengal kittens Netherlands, Bengal kittens Drunen, TICA registered kittens, healthy Bengal kittens" />
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
              <strong>– Update 01 october 2025 –</strong>
            </p>
            <p className="text-muted-foreground">
              <strong>Born 12 april 2025</strong>
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
              <strong>Update 21 september 2025</strong> – at this moment some retired cats are available.
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
                    In case you are interested, please send a message to: catterybengalivo@gmail.com
                  </p>
                </CardContent>
              </Card>
            ))}
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

        {/* Planned Litters Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Planned Litters for 2025/2026</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center">
              The following litters are planned for coming period 😉
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plannedLitters.map((litter) => (
              <Card key={litter.id} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <p className="font-semibold">{litter.parents}</p>
                    <p className="text-muted-foreground">({litter.expected})</p>
                    <p className="text-sm text-muted-foreground">{litter.season}</p>
                    {litter.note && (
                      <Badge variant="outline" className="text-xs">
                        {litter.note}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
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

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
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
                    <span className="text-muted-foreground">catterybengalivo@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Drunen - NL</span>
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
