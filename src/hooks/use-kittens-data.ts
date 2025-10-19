// Hook for fetching kittens page data
import { useState, useEffect } from 'react';
import type { Kitten, RetiredCat, PlannedLitter } from '@/types';
import { getCatsByType, getContentUrl } from '@/constants';

type KittensData = {
  kittens: Kitten[];
  retiredCats: RetiredCat[];
  plannedLitters: PlannedLitter[];
  loading: boolean;
  error: string | null;
};

export function useKittensData(): KittensData {
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
        const kittensResponse = await fetch(getCatsByType('kitten'));
        const kittensData = await kittensResponse.json();
        setKittens(kittensData || []);

        // Fetch retired cats
        const retiredResponse = await fetch(getCatsByType('retired'));
        const retiredData = await retiredResponse.json();
        setRetiredCats(retiredData || []);

        // Fetch planned litters
        const littersResponse = await fetch(getContentUrl('kittens', 'planned-litters'));
        const littersData = await littersResponse.json();
        if (littersData && littersData.length > 0 && littersData[0].content) {
          const litters = JSON.parse(littersData[0].content);
          // Sort by date, most recent first
          litters.sort((a: PlannedLitter, b: PlannedLitter) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setPlannedLitters(litters);
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

  return { kittens, retiredCats, plannedLitters, loading, error };
}

