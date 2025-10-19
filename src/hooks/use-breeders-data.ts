// Hook for fetching breeders data
import { useState, useEffect } from 'react';
import type { Cat } from '@/types';
import { API_ROUTES } from '@/constants';

type BreedersData = {
  breeders: Cat[];
  loading: boolean;
  error: string | null;
};

export function useBreedersData(): BreedersData {
  const [breeders, setBreeders] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const response = await fetch(API_ROUTES.BREEDERS);
        const data = await response.json();
        setBreeders(Array.isArray(data) ? data : []);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch breeder cats');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { breeders, loading, error };
}

