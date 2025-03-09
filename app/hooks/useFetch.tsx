import React, { useEffect, useState } from 'react'

function useFetch<T = any>(url: string) {
  const [data,setData] = useState<T | null>(null);
  const [loading,setLoading] = useState<boolean>(true);
  const [error,setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data as T);
        setError(null);
      } catch (error) {
        setError('Error bij ophalen van producten');
        setData(null);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url])

  return {data, error, loading}
  
}

export default useFetch