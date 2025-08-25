import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type CartState = {
  items: number[];
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  getTotalCount: () => number;
};

const persistConfig: PersistOptions<CartState> = {
  name: 'cart-storage',
};

export const useCartStore = create<CartState>()(
  persist<CartState>(
    (set, get) => ({
      items: [],
      addItem: (id: number) => {
        if (!get().items.includes(id)) {
          set({ items: [...get().items, id] });
        }
      },
      removeItem: (id: number) => {
        set({ items: get().items.filter((itemId) => itemId !== id) });
      },
      clearCart: () => set({ items: [] }),
      getTotalCount: () => get().items.length,
    }),
    persistConfig
  )
);

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key === 'cart-storage' && event.newValue) {
      useCartStore.setState(JSON.parse(event.newValue).state);
    }
  });
}
