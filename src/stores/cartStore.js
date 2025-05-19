import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [
    {
    id: 5,
    dough: 'standart',
    size: 30,
    quant: 3,
  },
  {
    id: 3,
    dough: 'thin',
    size: 35,
    quant: 1,
  }
],

  addToCart: () => {
    const { cart } = useCartStore.getState();
  }

}));

export default useCartStore;
