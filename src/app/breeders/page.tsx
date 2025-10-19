"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ImageGallery } from "@/components/image-gallery";
import { FALLBACK_IMAGE } from "@/utils/image-utils";
import { useTranslation } from 'react-i18next';
import { useBreedersData } from "@/hooks/use-breeders-data";
import { LoadingPage } from "@/components/loading-page";
import { ErrorDisplay } from "@/components/error-display";
import { BreedersPageSkeleton } from "@/components/skeletons/breeders-page-skeleton";
import { PageHeader } from "@/components/page-header";
import { StatusBadges } from "@/components/status-badges";
import { InfoGrid } from "@/components/info-grid";
import { AboutBengalivoSection } from "@/components/about-bengalivo-section";

export default function BreedersPage() {
  const { t } = useTranslation();
  const { breeders, loading, error } = useBreedersData();

  if (loading) {
    return <LoadingPage skeleton={<BreedersPageSkeleton />} />;
  }
  
  if (error) {
    return <ErrorDisplay message={error} onRetry={() => window.location.reload()} />;
  }
  
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title={t('breeders.title')} 
          subtitle={t('breeders.subtitle')} 
        />

        {/* Breeder Cats Grid */}
        <div className="space-y-16">
          {breeders.map((cat, index) => (
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
                        images={cat.images && cat.images.length > 0 ? cat.images : [cat.imageUrl || FALLBACK_IMAGE]} 
                        alt={cat.name}
                      />
                    </div>

                    {/* Cat Info */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">{cat.name}</h3>
                        <StatusBadges 
                          items={[cat.gender || '', cat.color || '']} 
                          variant="primary"
                        />
                      </div>

                      <InfoGrid 
                        items={[
                          { label: t('breeders.dateOfBirth'), value: cat.dob || '' },
                          { label: t('breeders.generation'), value: cat.generation || '' },
                          ...(cat.coi ? [{ label: t('breeders.coi'), value: cat.coi }] : [])
                        ]}
                      />

                      {/* Parents Section */}
                      <div className="border-t border-border pt-4">
                        <h4 className="font-semibold mb-3">{t('breeders.parents')}</h4>
                        <div className="flex gap-6">
                          {/* Father */}
                          {cat.father && (
                            <div className="flex items-center gap-3 flex-1">
                              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-border flex-shrink-0">
                                <Image
                                  src={cat.fatherImageUrl || FALLBACK_IMAGE}
                                  alt={cat.father}
                                  fill
                                  className="object-cover"
                                  sizes="64px"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs text-muted-foreground uppercase mb-1">{t('breeders.father')}</p>
                                <p className="text-xs font-medium truncate">{cat.father}</p>
                              </div>
                            </div>
                          )}

                          {/* Mother */}
                          {cat.mother && (
                            <div className="flex items-center gap-3 flex-1">
                              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-border flex-shrink-0">
                                <Image
                                  src={cat.motherImageUrl || FALLBACK_IMAGE}
                                  alt={cat.mother}
                                  fill
                                  className="object-cover"
                                  sizes="64px"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs text-muted-foreground uppercase mb-1">{t('breeders.mother')}</p>
                                <p className="text-xs font-medium truncate">{cat.mother}</p>
                              </div>
                            </div>
                          )}
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

        <AboutBengalivoSection 
          title={t('breeders.aboutBengalivo')} 
          content={t('breeders.aboutContent')} 
        />
      </div>
    </div>
  );
}
