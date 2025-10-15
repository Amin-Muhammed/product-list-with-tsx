import { useEffect, useState } from "react";

interface UseSessionDataOptions<T> {
  key: string; // sessionStorage key
  fetcher: () => Promise<T>; // API fetch function
  expireMs?: number; // optional expiry in ms
}

interface UseSessionDataResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refresh: () => Promise<void>;
}

export function useSessionData<T>({
  key,
  fetcher,
  expireMs,
}: UseSessionDataOptions<T>): UseSessionDataResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // helper to check expiry
  const isExpired = (timestamp: number) =>
    expireMs ? Date.now() - timestamp > expireMs : false;

  const loadData = async () => {
    setLoading(true);
    setError(null);

    try {
      const cached = sessionStorage.getItem(key);
      if (cached) {
        const { value, timestamp } = JSON.parse(cached) as {
          value: T;
          timestamp: number;
        };
        if (!isExpired(timestamp)) {
          setData(value);
          setLoading(false);
          return;
        }
      }

      const fresh = await fetcher();
      setData(fresh);

      sessionStorage.setItem(
        key,
        JSON.stringify({ value: fresh, timestamp: Date.now() })
      );
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return { data, loading, error, refresh: loadData };
}
