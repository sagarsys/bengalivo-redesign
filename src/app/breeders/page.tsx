"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";
import { ImageGallery } from "@/components/image-gallery";
import { BREEDER_CATS_DATA } from "@/constants/breeders";
import { FALLBACK_IMAGE } from "@/utils/image-utils";
import { useTranslation } from 'react-i18next';

export default function BreedersPage() {
  const { t } = useTranslation();
  
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
            {t('breeders.title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('breeders.subtitle')}
          </p>
        </motion.div>

        {/* Breeder Cats Grid */}
        <div className="space-y-16">
          {BREEDER_CATS_DATA.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div>
                      <ImageGallery 
                        images={cat.images || [FALLBACK_IMAGE]} 
                        alt={cat.name}
                      />
                    </div>

                    {/* Cat Info */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">{cat.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                            {cat.sex}
                          </span>
                          <span className="text-sm bg-muted px-3 py-1 rounded-full">
                            {cat.color}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-muted-foreground">{t('breeders.dateOfBirth')}</span>
                          <span className="font-medium">{cat.dob}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-muted-foreground">{t('breeders.generation')}</span>
                          <span className="font-medium">{cat.generation}</span>
                        </div>
                        {cat.coi && (
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-muted-foreground">{t('breeders.coi')}</span>
                            <span className="font-medium">{cat.coi}</span>
                          </div>
                        )}
                      </div>

                      {/* Parents Section */}
                      <div className="border-t border-border pt-4">
                        <h4 className="font-semibold mb-3">{t('breeders.parents')}</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {/* Father */}
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground uppercase">{t('breeders.father')}</p>
                            <div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                              <Image
                                src={cat.fatherImageUrl || FALLBACK_IMAGE}
                                alt={cat.father || "Father"}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = FALLBACK_IMAGE;
                                }}
                              />
                            </div>
                            <p className="text-xs font-medium">{cat.father}</p>
                          </div>

                          {/* Mother */}
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground uppercase">{t('breeders.mother')}</p>
                            <div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                              <Image
                                src={cat.motherImageUrl || FALLBACK_IMAGE}
                                alt={cat.mother || "Mother"}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = FALLBACK_IMAGE;
                                }}
                              />
                            </div>
                            <p className="text-xs font-medium">{cat.mother}</p>
                          </div>
                        </div>
                      </div>

                      {/* Genetics */}
                      <div className="border-t border-border pt-4">
                        <h4 className="font-semibold mb-2">{t('breeders.genetics')}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {cat.genetics}
                        </p>
                      </div>

                      {/* Pedigree Link */}
                      {cat.pedigree && (
                        <div className="pt-2">
                          <Button variant="outline" size="sm" className="w-full">
                            {t('breeders.viewPedigree')} {cat.pedigree}
                          </Button>
                        </div>
                      )}
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
          <Card className="bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                {t('breeders.aboutBengalivo')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('breeders.aboutContent')}
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
