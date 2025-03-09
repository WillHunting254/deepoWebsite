import { create } from 'zustand'

interface StoreState {
  isAuthenticated: boolean;
  setCategory: (category: boolean) => void;
}

// Create the store with type annotation
export const authStore = create<StoreState>((set) => ({
  isAuthenticated: false,
  setCategory: (isAuthenticated) => set({ isAuthenticated }),
}));