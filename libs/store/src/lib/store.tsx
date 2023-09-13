import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface GlobalStore {
  count: number;
  increaseCount: () => void;
  resetCount: () => void;
}

export const useGlobalStore = create<GlobalStore>()(devtools((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set({ count: 0 }),
})));
