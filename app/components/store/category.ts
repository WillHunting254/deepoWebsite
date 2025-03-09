import { create } from 'zustand'

interface StoreState {
  category: string;
  setCategory: (category: string) => void;
}

// Create the store with type annotation
export const categoryStore = create<StoreState>((set) => ({
  category: "Alle",
  setCategory: (category) => set({ category }),
}));

