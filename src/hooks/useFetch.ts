import { useEffect, useState } from 'react';

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: any;
}

export const useFetch = <T>(
  fetchFunction: (prevData: T | null) => Promise<T>,
  dependencies: any[] = [],
): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchFunction(data);

      setData(result);
    } catch (err: any) {
      setError(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return { data, loading, error };
};
