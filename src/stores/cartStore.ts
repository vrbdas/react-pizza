import { create } from 'zustand';

interface CartItem {
  id: number;
  dough: string;
  size: number;
  quant: number;
}

interface CartStoreState {
  cart: CartItem[];
  addItem: (newItem: CartItem) => void;
  setQuant: (index: number, quant: number) => void;
  deleteItem: (index: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStoreState>((set) => ({

  cart: JSON.parse(localStorage.getItem('cart') || '[]'),

  addItem: (newItem) => {
    const { cart } = useCartStore.getState();

    // если такая пицца с тем же размером и тестом уже в корзине, увеличивает количество
    const idx = cart.findIndex(
      (item) => item.id === newItem.id && item.dough === newItem.dough && item.size === newItem.size
    );
    let updatedCart;
    if (idx > -1) { 
      updatedCart = cart.map((item, i) => (i === idx ? { ...item, quant: item.quant + 1 } : item));
    } else {
      updatedCart = [...cart, { ...newItem, quant: 1 }];
    }
    set({ cart: updatedCart });

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  },

  setQuant: (index, quant) => {
    const { cart } = useCartStore.getState();
    let updatedCart;
    updatedCart = cart.map((item, i) => (i === index ? { ...item, quant: quant } : item));
    set({ cart: updatedCart });

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  },

  deleteItem: (index) => {
    const { cart } = useCartStore.getState();
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    set({ cart: updatedCart });

    if (updatedCart.length === 0) {
      localStorage.removeItem('cart');
    } else {
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  },

  clearCart: () => {
    set({ cart: [] });
    localStorage.removeItem('cart');
  },

  // totalPrice: () => {
  //   const { cart } = useCartStore.getState();
  //   return cart.reduce((summ, item) => summ + catalogItem(item.id).price * item.quant, 0);
  // },

}));


export default useCartStore;
