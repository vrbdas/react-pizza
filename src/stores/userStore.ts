import { create } from 'zustand';
import { User } from 'firebase/auth';

type OrderItem = {
  id: number;
  size: number;
  dough: string;
  quant: number;
};

type Order = {
  address: string;
  cart: OrderItem[];
  comment: string;
  name: string;
  phone: string;
};

type UserData = {
  userName?: string;
  userAddress?: string;
  orders?: Record<string, Order>;
};

interface UserStoreState {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  setUser: (newUser: User | null) => void;
  setUserData: (newUserData: UserData | null) => void,
  setLoading: (newLoading: boolean) => void,
}

const useUserStore = create<UserStoreState>((set) => ({
  user: null,
  userData: null,
  loading: false,

  setUser: (newUser) => set({ user: newUser }),
  setUserData: (newUserData) => set({ userData: newUserData }),
  setLoading: (newLoading) => set({ loading: newLoading }),
}));

export default useUserStore;
