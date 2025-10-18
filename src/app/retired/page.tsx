"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Heart, Filter, Search, Calendar, MapPin, Phone, Mail, Crown } from "lucide-react";
import Link from "next/link";

// Mock data for retired cats
const retiredCats = [
  {
    id: 1,
    name: "Thunder",
    age: "5 years",
    gender: "Male",
    color: "Brown Spotted",
    price: "$1,200",
    available: true,
    retirementDate: "November 2024",
    description: "Thunder is a magnificent retired stud with a gentle soul. After years of successful breeding, he's ready to enjoy his golden years in a loving home.",
    achievements: ["Grand Champion", "Best in Show 2022", "50+ Healthy Offspring"],
    healthStatus: "Excellent",
    images: ["/placeholder-cat.jpg"],
    location: "California, USA",
    specialNeeds: "None",
    personality: "Calm, affectionate, loves attention"
  },
  {
    id: 2,
    name: "Storm",
    age: "4 years",
    gender: "Female",
    color: "Silver Spotted",
    price: "$1,000",
    available: true,
    retirementDate: "October 2024",
    description: "Storm is a beautiful retired queen with a sweet disposition. She's been an excellent mother and is now looking for a quiet home to call her own.",
    achievements: ["Champion", "Mother of Champions", "30+ Healthy Kittens"],
    healthStatus: "Excellent",
    images: ["/placeholder-cat.jpg"],
    location: "California, USA",
    specialNeeds: "None",
    personality: "Gentle, loving, enjoys quiet time"
  },
  {
    id: 3,
    name: "River",
    age: "6 years",
    gender: "Male",
    color: "Marble",
    price: "$800",
    available: false,
    retirementDate: "September 2024",
    description: "River is a distinguished gentleman who has contributed greatly to our breeding program. He's already found his forever home with a wonderful family.",
    achievements: ["Grand Champion", "Breeder of Merit", "60+ Offspring"],
    healthStatus: "Excellent",
    images: ["/placeholder-cat.jpg"],
    location: "California, USA",
    specialNeeds: "None",
    personality: "Regal, intelligent, very social"
  },
  {
    id: 4,
    name: "Mist",
    age: "3 years",
    gender: "Female",
    color: "Brown Spotted",
    price: "$1,100",
    available: true,
    retirementDate: "December 2024",
    description: "Mist is a young retiree who decided to step back from breeding early. She's full of energy and would love an active family to call her own.",
    achievements: ["Champion", "Excellent Mother", "20+ Healthy Kittens"],
    healthStatus: "Excellent",
    images: ["/placeholder-cat.jpg"],
    location: "California, USA",
    specialNeeds: "None",
    personality: "Playful, energetic, very social"
  }
];

export default function RetiredCatsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("available");

  const filteredCats = retiredCats.filter(cat => {
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cat.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = genderFilter === "all" || cat.gender.toLowerCase() === genderFilter;
    const matchesAvailability = availabilityFilter === "all" || 
                               (availabilityFilter === "available" && cat.available) ||
                               (availabilityFilter === "adopted" && !cat.available);
    
    return matchesSearch && matchesGender && matchesAvailability;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Retired <span className="text-gradient">Breeding Cats</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Give a loving home to our retired breeding cats. These magnificent Bengals have 
            contributed to our breeding program and are now ready to enjoy their golden years 
            in a forever home.
          </p>
        </motion.div>

        {/* Why Adopt Retired Cats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Crown className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Proven Quality</h3>
                  <p className="text-muted-foreground text-sm">
                    These cats have proven their excellent genetics and temperament through successful breeding.
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Loving Companions</h3>
                  <p className="text-muted-foreground text-sm">
                    Retired breeding cats are typically very social and make excellent family pets.
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Mature & Calm</h3>
                  <p className="text-muted-foreground text-sm">
                    These cats are past the high-energy kitten stage and are more settled and calm.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filter Cats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search cats..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={genderFilter} onValueChange={setGenderFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Genders</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="adopted">Adopted</SelectItem>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-muted-foreground">
            Showing {filteredCats.length} of {retiredCats.length} retired cats
          </p>
        </motion.div>

        {/* Cats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCats.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Crown className="h-12 w-12 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Cat Photo</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant={cat.available ? "default" : "secondary"}>
                      {cat.available ? "Available" : "Adopted"}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{cat.age} old</span>
                        <span>•</span>
                        <span>{cat.gender}</span>
                        <span>•</span>
                        <span>Retired {cat.retirementDate}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        <strong>Color:</strong> {cat.color}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Health Status:</strong> {cat.healthStatus}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Special Needs:</strong> {cat.specialNeeds}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Achievements:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cat.achievements.map((achievement, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed">{cat.description}</p>

                    <div>
                      <h4 className="font-semibold mb-1">Personality:</h4>
                      <p className="text-sm text-muted-foreground">{cat.personality}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-2xl font-bold text-primary">{cat.price}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{cat.location}</span>
                        </div>
                      </div>
                      
                      {cat.available ? (
                        <Button asChild className="group-hover:shadow-glow">
                          <Link href={`/retired/${cat.id}`}>
                            Learn More
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" disabled>
                          Adopted
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCats.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No cats found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or check back later for new retirees.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setGenderFilter("all");
                setAvailabilityFilter("available");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Adoption Process */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle>Adoption Process for Retired Cats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">What&apos;s Included</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Complete health records and vaccination history</li>
                    <li>• Spay/neuter certificate (if applicable)</li>
                    <li>• Microchip registration</li>
                    <li>• 30-day health guarantee</li>
                    <li>• Lifetime breeder support</li>
                    <li>• Care guide and feeding instructions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Adoption Requirements</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Completed adoption application</li>
                    <li>• Phone interview with our team</li>
                    <li>• Home visit (if local) or video call</li>
                    <li>• Proof of pet-friendly housing</li>
                    <li>• Commitment to provide proper care</li>
                    <li>• Adoption fee payment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Interested in Adopting a Retired Cat?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These amazing cats deserve loving homes where they can enjoy their retirement. 
                Contact us to learn more about our adoption process and available cats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="mailto:adoptions@bengalivo.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
