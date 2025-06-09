import AppCard from '@/components/AppCard';
import useCatalogStore from '@/stores/catalogStore';
import { useLoadCatalog } from '@/hooks/useLoadCatalog';
import AppCardLoader from '@/components/AppCardLoader';

interface CatalogItem {
  id: number;
  title: string;
  descr: string;
  price: number;
  image: string;
  rating: number;
}

export default function TheCatalog() {
  const { getCatalogFiltered, sort, order } = useCatalogStore();
  const catalogFiltered: CatalogItem[] = getCatalogFiltered();

  let catalogFilteredSorted: CatalogItem[] = [];

  const sortFunctions: Record<
    string,
    Record<string, (a: CatalogItem, b: CatalogItem) => number>
  > = {
    rating: {
      ascending: (a, b) => a.rating - b.rating,
      descending: (a, b) => b.rating - a.rating,
    },
    price: {
      ascending: (a, b) => a.price - b.price,
      descending: (a, b) => b.price - a.price,
    },
    title: {
      ascending: (a, b) => a.title.localeCompare(b.title),
      descending: (a, b) => b.title.localeCompare(a.title),
    },
  };

  const { catalog, loading } = useLoadCatalog();

  catalogFilteredSorted = [...catalogFiltered].sort(sortFunctions[sort][order]);

  return (
    <>
      <section className="catalog">
        <div className="catalog__items">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <AppCardLoader key={i} />)
            : catalogFilteredSorted.map((item) => (
                <AppCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  descr={item.descr}
                  price={item.price}
                  image={item.image}
                />
              ))}
        </div>
      </section>
    </>
  );
}
