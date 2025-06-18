import { useEffect, useState } from 'react';
import axios from 'axios';
import useCatalogStore from '@/stores/catalogStore';

export function useLoadCatalog() {
  const catalog = useCatalogStore((state) => state.catalog); // подписка только на catalog
  const setCatalog = useCatalogStore.getState().setCatalog; // метод без подписки, чтобы не вызвать циклическую перезагрузку

  const url = 'https://react-pizza-f1a05-default-rtdb.asia-southeast1.firebasedatabase.app';

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (catalog.length > 0) return;

    const loadCatalog = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/catalog/.json`);
        setCatalog(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadCatalog();

  }, [catalog]); // чтобы обновлять при изменении catalog

  return { catalog, loading };
}
