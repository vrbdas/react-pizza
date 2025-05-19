import AppCard from '@/components/AppCard.jsx';

import useCatalogStore from '@/stores/catalogStore.js';

export default function TheCatalog() {
  const { getCatalogFiltered, sort, order } = useCatalogStore();
  const catalogFiltered = getCatalogFiltered();

  let catalogFilteredSorted = [];

  const sortFunctions = {
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

  catalogFilteredSorted = catalogFiltered.sort(sortFunctions[sort][order]);
  return (
    <>
      <section className="catalog">
        <h2 className="catalog__title">Все пиццы</h2>
        <div className="catalog__items">
          {catalogFilteredSorted.map((item) => (
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
