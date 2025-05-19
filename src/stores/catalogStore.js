import { create } from 'zustand';

const useCatalogStore = create((set) => ({
  catalog: [
    {
      id: 0,
      title: 'Креветка и песто',
      descr:
        'Креветки, томаты, шампиньоны, соус песто, моцарелла, итальянские травы, фирменный томатный соус',
      price: 679,
      image: '/images/shrimp-pesto.avif',
      tags: ['new'],
      rating: 4.2,
    },
    {
      id: 1,
      title: 'Четыре сыра',
      descr: 'Сыр блю чиз, сыры чеддер и пармезан, моцарелла, фирменный соус альфредо',
      price: 569,
      image: '/images/four-cheese.avif',
      tags: ['veg'],
      rating: 4.3,
    },
    {
      id: 2,
      title: 'Чилл Грилл',
      descr:
        'Цыпленок, маринованные огурчики, красный лук, соус гриль, моцарелла, чеснок, фирменный соус альфредо',
      price: 549,
      image: '/images/chill-grill.avif',
      tags: ['new'],
      rating: 4.1,
    },
    {
      id: 3,
      title: 'Креветки блю чиз',
      descr: 'Креветки, сыр блю чиз, моцарелла, фирменный соус альфредо',
      price: 699,
      image: '/images/shrimp-blue-cheese.avif',
      tags: ['new'],
      rating: 4.4,
    },
    {
      id: 4,
      title: 'Сырная',
      descr: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
      price: 339,
      image: '/images/cheese.avif',
      tags: ['veg'],
      rating: 3.9,
    },
    {
      id: 5,
      title: 'Пепперони фреш',
      descr: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
      price: 369,
      image: '/images/pepperoni-fresh.avif',
      tags: [],
      rating: 4.0,
    },
    {
      id: 6,
      title: 'Чоризо фреш',
      descr: 'Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус',
      price: 339,
      image: '/images/chorizo-fresh.avif',
      tags: ['hot'],
      rating: 4.2,
    },
    {
      id: 7,
      title: 'Ветчина и грибы',
      descr: 'Ветчина, шампиньоны, увеличенная порция моцареллы, фирменный томатный соус',
      price: 519,
      image: '/images/ham-mushrooms.avif',
      tags: [],
      rating: 4.1,
    },
    {
      id: 8,
      title: 'Двойной цыпленок',
      descr: 'Цыпленок, моцарелла, фирменный соус альфредо',
      price: 489,
      image: '/images/double-chicken.avif',
      tags: [],
      rating: 4.0,
    },
    {
      id: 9,
      title: 'Ветчина и сыр ',
      descr: 'Ветчина, моцарелла, фирменный соус альфредо',
      price: 479,
      image: '/images/ham-cheese.avif',
      tags: [],
      rating: 3.9,
    },
    {
      id: 10,
      title: 'Баварская',
      descr:
        'Баварские колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла, фирменный томатный соус',
      price: 579,
      image: '/images/bavarian.avif',
      tags: ['new'],
      rating: 4.3,
    },
    {
      id: 11,
      title: 'Аррива!',
      descr:
        'Цыпленок, острые колбаски чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок',
      price: 669,
      image: '/images/arriva.avif',
      tags: ['hot'],
      rating: 4.8,
    },
    {
      id: 12,
      title: 'Креветки со сладким чили',
      descr:
        'Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, фирменный соус альфредо',
      price: 689,
      image: '/images/shrimp-sweet-chili.avif',
      tags: [],
      rating: 4.7,
    },
    {
      id: 13,
      title: 'Бефстроганов',
      descr:
        'Пряная говядина, шампиньоны, ароматный грибной соус, маринованные огурчики, моцарелла, красный лук, фирменный соус альфредо',
      price: 549,
      image: '/images/beef-stroganoff.avif',
      tags: [],
      rating: 4.2,
    },
    {
      id: 14,
      title: 'Карбонара',
      descr:
        'Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы',
      price: 659,
      image: '/images/carbonara.avif',
      tags: [],
      rating: 4.8,
    },
    {
      id: 15,
      title: 'Жюльен',
      descr:
        'Цыпленок, шампиньоны, ароматный грибной соус, лук, сухой чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо',
      price: 619,
      image: '/images/julienne.avif',
      tags: [],
      rating: 4.3,
    },
    {
      id: 16,
      title: 'Песто',
      descr: 'Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, фирменный соус альфредо',
      price: 649,
      image: '/images/pesto.avif',
      tags: [],
      rating: 4.7,
    },
    {
      id: 17,
      title: 'Мясная',
      descr:
        'Цыпленок, ветчина, пикантная пепперони, острые колбаски чоризо, моцарелла, фирменный томатный соус',
      price: 609,
      image: '/images/meat.avif',
      tags: ['hot'],
      rating: 4.4,
    },
    {
      id: 18,
      title: 'Бургер-пицца',
      descr:
        'Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус',
      price: 559,
      image: '/images/burger.avif',
      tags: [],
      rating: 4.2,
    },
    {
      id: 19,
      title: 'Сырный цыпленок',
      descr:
        'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок',
      price: 669,
      image: '/images/cheese-chicken.avif',
      tags: [],
      rating: 4.5,
    },
    {
      id: 20,
      title: 'Фирменная',
      descr:
        'Бекон, митболы, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, фирменный томатный соус',
      price: 829,
      image: '/images/signature.avif',
      tags: [],
      rating: 4.8,
    },
    {
      id: 21,
      title: 'Пепперони',
      descr: 'Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус',
      price: 519,
      image: '/images/pepperoni.avif',
      tags: [],
      rating: 4.3,
    },
    {
      id: 22,
      title: 'Гавайская',
      descr: 'Двойная порция цыпленка, ананасы, моцарелла, фирменный соус альфредо',
      price: 539,
      image: '/images/hawaiian.avif',
      tags: [],
      rating: 4.1,
    },
    {
      id: 23,
      title: 'Цыпленок барбекю',
      descr: 'Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус',
      price: 679,
      image: '/images/chicken-barbecue.avif',
      tags: [],
      rating: 4.4,
    },
    {
      id: 24,
      title: 'Цыпленок Ранч',
      descr: 'Цыпленок, ветчина, соус ранч, моцарелла, томаты, чеснок, фирменный соус альфредо',
      price: 699,
      image: '/images/chicken-ranch.avif',
      tags: [],
      rating: 4.5,
    },
    {
      id: 25,
      title: 'Маргарита',
      descr: 'Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус',
      price: 529,
      image: '/images/margherita.avif',
      tags: ['veg'],
      rating: 4.0,
    },
    {
      id: 26,
      title: 'Диабло',
      descr:
        'Острые колбаски чоризо, острый перец халапеньо, соус барбекю, митболы из говядины, томаты, сладкий перец, красный лук, моцарелла, фирменный томатный соус',
      price: 679,
      image: '/images/diablo.avif',
      tags: ['hot'],
      rating: 4.6,
    },
    {
      id: 27,
      title: 'Колбаски барбекю',
      descr:
        'Острые колбаски чоризо, соус барбекю, томаты, красный лук, моцарелла, фирменный томатный соус',
      price: 549,
      image: '/images/sausages-barbecue.avif',
      tags: ['hot'],
      rating: 4.3,
    },
    {
      id: 28,
      title: 'Двойная пепперони',
      descr:
        'Двойная порция пикантной пепперони, увеличенная порция моцареллы, фирменный томатный соус',
      price: 639,
      image: '/images/double-pepperoni.avif',
      tags: [],
      rating: 4.4,
    },
    {
      id: 29,
      title: 'Четыре сезона',
      descr:
        'Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, итальянские травы, фирменный томатный соус',
      price: 529,
      image: '/images/four-seasons.avif',
      tags: [],
      rating: 4.2,
    },
    {
      id: 30,
      title: 'Овощи и грибы',
      descr:
        'Шампиньоны, томаты, сладкий перец, красный лук, кубики брынзы, моцарелла, фирменный томатный соус, итальянские травы',
      price: 609,
      image: '/images/vegetables-mushrooms.avif',
      tags: ['veg', 'new'],
      rating: 4.1,
    },
    {
      id: 31,
      title: 'Фирменная микс',
      descr:
        'Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы',
      price: 659,
      image: '/images/signature-mix.avif',
      tags: [],
      rating: 4.6,
    },
  ],

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

  setCategory: (newCategory) => set({ category: newCategory }),

  setSort: (newSort) => set({sort: newSort}),

  setOrder: (newOrder) => set({order: newOrder}),

  getCatalogFiltered: () => {
    const { catalog, category } = useCatalogStore.getState(); // текущее состояние
    return category ? catalog.filter((item) => item.tags.includes(category)) : [...catalog]; // возвращает копию каталога, чтобы не изменять оригинал
  },
}));

export default useCatalogStore;
