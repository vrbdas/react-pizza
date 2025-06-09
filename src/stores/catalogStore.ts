import { create } from 'zustand';

export interface CatalogItem {
  id: number;
  title: string;
  descr: string;
  price: number;
  image: string;
  tags: string[];
  rating: number;
}

interface CategoryMapItem {
  id: number;
  value: string;
  label: string;
}

interface SortMapItem {
  id: number;
  value: string;
  label: string;
}

interface CatalogStoreState {
  catalog: CatalogItem[];
  categoryMap: CategoryMapItem[];
  sortMap: SortMapItem[];
  category: string;
  sort: string;
  order: string;
  setCatalog: (newCatalog: CatalogItem[]) => void;
  setCategory: (newCategory: string) => void;
  setSort: (newSort: string) => void;
  setOrder: (newOrder: string) => void;
  getCatalogFiltered: () => CatalogItem[];
  getItem: (id: number) => CatalogItem | undefined;
}

const useCatalogStore = create<CatalogStoreState>((set) => ({
  catalog: [],

  categoryMap: [
    {
      id: 0,
      value: '',
      label: 'Все',
    },
    {
      id: 1,
      value: 'new',
      label: 'Новинки',
    },
    {
      id: 2,
      value: 'veg',
      label: 'Вегетарианские',
    },
    {
      id: 3,
      value: 'hot',
      label: 'Острые',
    },
  ],

  sortMap: [
    {
      id: 0,
      value: 'rating',
      label: 'популярности',
    },
    {
      id: 1,
      value: 'price',
      label: 'по цене',
    },
    {
      id: 2,
      value: 'title',
      label: 'по алфавиту',
    },
  ],

  category: '',

  sort: 'rating',

  order: 'descending',

  setCatalog: (newCatalog: CatalogItem[]) => set({ catalog: newCatalog }),

  setCategory: (newCategory: string) => set({ category: newCategory }),

  setSort: (newSort: string) => set({ sort: newSort }),

  setOrder: (newOrder: string) => set({ order: newOrder }),

  getCatalogFiltered: (): CatalogItem[] => {
    const { catalog, category } = useCatalogStore.getState();

    return category
      ? catalog.filter((item: CatalogItem) => item.tags?.includes(category))
      : [...catalog];
  },

  getItem: (id: number): CatalogItem | undefined => {
    const { catalog } = useCatalogStore.getState();
    return catalog.find((item: CatalogItem) => item.id === id);
  },
}));

export default useCatalogStore;
