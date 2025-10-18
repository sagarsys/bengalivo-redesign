"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Heart, Filter, Search, Calendar, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

// Data based on original website content
const retiredCats = [
  {
    id: 1,
    name: "MioDollarBaby Unik aka Gold",
    age: "5 years",
    gender: "Female",
    color: "Brown Spotted",
    status: "AVAILABLE",
    description: "Gold is recently spayed due to a pyometra and is looking for a new home. She can live alone but also with other cats.",
    adoptionFee: "350 euro",
    updateDate: "21 september 2025",
    lookingFor: "5 ⭐️ home"
  }
];

const kittens = [
  {
    id: 1,
    name: "Bengalivo Push The Button",
    age: "Born 12 april 2025",
    gender: "Male",
    color: "Brown Spotted",
    price: "Available",
    available: false,
    status: "RESERVED",
    birthDate: "April 12, 2025",
    description: "Beautiful brown spotted Bengal kitten with excellent temperament.",
    parents: "Bengalivo Armed With Love x Batifoleurs Zawadi",
    neutered: true
  }
];

const plannedLitters = [
  {
    id: 1,
    parents: "Bengalivo Armed With Love x Batifoleurs Zawadi",
    expected: "brown kittens expected",
    season: "Winter 2025",
    note: "only pets/breeders on request"
  },
  {
    id: 2,
    parents: "Bengalivo Cry Baby x Bengalivo Another One Bites Dust",
    expected: "brown and mink kittens expected",
    season: "Kittens born 18 september 2025"
  },
  {
    id: 3,
    parents: "Bengalivo Stumblin'In x Hypnotic'bengal Unstoppable",
    expected: "brown and sepia kittens expected",
    season: "Kittens born 31 august 2025",
    note: "only pets"
  },
  {
    id: 4,
    parents: "Bengalivo Just Give Me A Reason x TBA",
    expected: "brown kittens expected",
    season: "Winter 2025"
  },
  {
    id: 5,
    parents: "Bengalivo Femme Fatale x Hypnotic'bengal Unstoppable",
    expected: "sepia kittens expected",
    season: "Kittens born 10 october 2025",
    note: "only pets"
  },
  {
    id: 6,
    parents: "MioDollarBaby Maya x Hypnotic'bengal Unstoppable",
    expected: "brown kittens expected",
    season: "Autumn 2025 (last litter Maya)",
    note: "only pets"
  }
];

export default function KittensPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("available");

  const filteredKittens = kittens.filter(kitten => {
    const matchesSearch = kitten.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         kitten.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = genderFilter === "all" || kitten.gender.toLowerCase() === genderFilter;
    const matchesColor = colorFilter === "all" || kitten.color.toLowerCase().includes(colorFilter.toLowerCase());
    const matchesAvailability = availabilityFilter === "all" || 
                               (availabilityFilter === "available" && kitten.available) ||
                               (availabilityFilter === "reserved" && !kitten.available);
    
    return matchesSearch && matchesGender && matchesColor && matchesAvailability;
  });

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Available Bengal Kittens",
    "description": "Beautiful Bengal kittens available for adoption from Bengalivo cattery",
    "url": "https://bengalivo.com/kittens",
    "numberOfItems": filteredKittens.length,
    "itemListElement": filteredKittens.map((kitten, index) => ({
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
        "price": kitten.price,
        "priceCurrency": "EUR",
        "availability": kitten.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
      }
    }))
  };

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
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {cat.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Heart className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Adoption fee is {cat.adoptionFee}</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Searching for a {cat.lookingFor}
                  </p>
                  <p className="text-sm leading-relaxed">{cat.description}</p>
                  <p className="text-xs text-muted-foreground">
                    In case you are interested, please send a message to: catterybengalivo@gmail.com
                  </p>
                  <p className="text-xs text-muted-foreground">
                    In case you are interested in a retired bengal, please send me a PM to discuss the details! Sometimes I already decide to retire some bengals.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

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
              <em>Follow our Group on Facebook to see the latest photo's and video's</em>
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
                    <Badge variant="secondary">
                      {kitten.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Heart className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Age: {kitten.age}</p>
                  <p className="text-sm text-muted-foreground">Gender: {kitten.gender}</p>
                  <p className="text-sm text-muted-foreground">Color: {kitten.color}</p>
                  <p className="text-sm text-muted-foreground">Parents: {kitten.parents}</p>
                  {kitten.neutered && (
                    <Badge variant="outline" className="text-xs">
                      Neutered
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
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
