import { create } from 'zustand';

interface AuthModalStoreState {
  authModal: boolean;
  setAuthModal: (newAuthModal: boolean) => void;
}


const useAuthModalStore = create<AuthModalStoreState>((set) => ({
  authModal: false,

  setAuthModal: (newAuthModal) => set({ authModal: newAuthModal }),
}));

export default useAuthModalStore;