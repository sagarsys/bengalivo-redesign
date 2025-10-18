"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Heart, Filter, Search, Calendar, MapPin, Phone, Mail, Crown, Award, Users, TreePine } from "lucide-react";
import Link from "next/link";

// Data based on original website content
const breederCats = [
  {
    id: 1,
    name: "Bengalivo Stumblin'In (aka Lilo)",
    color: "black spotted tabby",
    sex: "girl (proven)",
    dob: "8 july 2024",
    parents: "LA SGC Bengalivo Million Reasons x SilverCrown Supernatural",
    coi: "24.186",
    generation: "9G",
    genetics: "PKdef carrier (N/K), PRA-b N/N by parentage & not tested for colour (could be melanistic carrier)",
    pedigree: "Stamboom van Bengalivo"
  },
  {
    id: 2,
    name: "MioDollarBaby Maya (aka Maya)",
    color: "black spotted tabby",
    sex: "girl (proven)",
    dob: "16 june 2021",
    parents: "MioDollarBaby Atta x MioDollarBaby Gaja",
    coi: "24.995",
    generation: "9G",
    genetics: "PKdef N/N by parentage, N/PRA-b, no snow carrier",
    pedigree: "Pedigree"
  },
  {
    id: 3,
    name: "IW SGC Bengalivo Another One Bites Dust (aka Dust)",
    color: "black spotted tabby",
    sex: "neutered boy (now showing in alter class for his LA)",
    dob: "25 july 2023",
    parents: "LA SGC Bengalivo Million Reasons x MioDollarBaby Maya",
    coi: "24.481",
    generation: "9G",
    genetics: "PKdef N/K, N/PRA-b, sepia carrier (C/cb)",
    pedigree: "Pedigree"
  },
  {
    id: 4,
    name: "LA SGC Bengalivo Million Reasons (aka Eos)",
    color: "black spotted tabby",
    sex: "boy (neutered)",
    dob: "11 february 2021",
    parents: "RW SGC Pixel des Griffes de Feu x Queshua des Griffes de Feu",
    coi: "27.676",
    generation: "8G",
    genetics: "PKdef N/K, PRA-b N/N by parentage, sepia carrier (C/cb)",
    pedigree: "Pedigree"
  },
  {
    id: 5,
    name: "Hypnotic'bengal Unstoppable (aka Copper)",
    color: "seal sepia spotted tabby",
    sex: "boy (proven)",
    dob: "2 october 2023",
    parents: "Hypnotic'bengal Raoni x Wild Paradise Tigrinha",
    coi: "",
    generation: "8G",
    genetics: "PKdef N/N and PRA-b N/N by parentage, sepia (cb/cb)",
    pedigree: "Pedigree"
  },
  {
    id: 6,
    name: "Bengalivo Armed With Love (aka Blue)",
    color: "black spotted tabby",
    sex: "girl (proven)",
    dob: "19 may 2022",
    parents: "LA SGC Bengalivo Million Reasons x MioDollarBaby Maya",
    coi: "24.481",
    generation: "9G",
    genetics: "PKdef N/N, N/PRA-b, no carrier of snow",
    pedigree: "Pedigree"
  },
  {
    id: 7,
    name: "Bengalivo Just Give Me A Reason (aka Pink)",
    color: "black spotted tabby",
    sex: "girl (proven)",
    dob: "22 november 2022",
    parents: "LA SGC Bengalivo Million Reasons x SilverCrown Supernatural",
    coi: "24.186",
    generation: "9G",
    genetics: "PKdef and PRA-b N/N, melanistic carrier & no snow carrier",
    pedigree: "Pedigree"
  },
  {
    id: 8,
    name: "Goralguru Noblesse",
    color: "black spotted tabby",
    sex: "girl (upcoming)",
    dob: "23 october 2024",
    parents: "IW SGC Goralguru CoupDe Coeur x DGC Guru Luna Nera",
    coi: "25.005",
    generation: "6G",
    genetics: "PKdef N/N by parentage & PRA-b (test pending)",
    pedigree: "Pedigree"
  },
  {
    id: 9,
    name: "Bengalivo Cry Baby (aka Moana)",
    color: "black spotted tabby",
    sex: "girl (proven)",
    dob: "19 july 2024",
    parents: "SGC Minileo Gandalf x Bengalivo Jump For Joy",
    coi: "",
    generation: "7G",
    genetics: "PKdef N/N, PRA-b N/N by parentage & seal lynx (C/cs) carrier",
    pedigree: "Pedigree"
  },
  {
    id: 10,
    name: "Bengalivo Femme Fatale (aka Ivory)",
    color: "seal sepia spotted tabby",
    sex: "girl (upcoming)",
    dob: "20 may 2023",
    parents: "SGC Minileo Gandalf x Bengalivo Jump For Joy",
    coi: "",
    generation: "7G",
    genetics: "PKdef N/K, PRA-b N/N by parentage & sepia (cb/cb)",
    pedigree: "Pedigree"
  },
  {
    id: 11,
    name: "RW SGC Batifoleurs Zawadi",
    color: "black spotted tabby",
    sex: "boy (upcoming)",
    dob: "3 july 2024",
    parents: "RW SGC Batifoleurs Anando x RW TGC Cooperdolls Bella Rose",
    coi: "29.064",
    generation: "9G",
    genetics: "PKdef N/K and PRA-b N/N by parentage & sepia carrier (C/cb)",
    pedigree: "Pedigree"
  }
];

export default function BreedersPage() {
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
            Breeder cats
          </h1>
        </motion.div>

        {/* Breeder Cats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {breederCats.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Crown className="h-12 w-12 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Cat Photo</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                    </div>

                    <div className="space-y-2 text-sm">
                      <p><strong>Colour:</strong> {cat.color}</p>
                      <p><strong>Sex:</strong> {cat.sex}</p>
                      <p><strong>DOB:</strong> {cat.dob}</p>
                      <p><strong>Parents:</strong> {cat.parents}</p>
                      <p><strong>COI (%):</strong> {cat.coi}</p>
                      <p><strong>Generation:</strong> {cat.generation}</p>
                      <p><strong>Genetics:</strong> {cat.genetics}</p>
                      <p><strong>Pedigree:</strong> {cat.pedigree}</p>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong>Pictures Parents</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* About Bengalivo Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
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
          className="mt-16"
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
