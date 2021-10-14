import create, { SetState } from "zustand";

type NerdsWhoSellState = {
  isQuizOverlayOpen: boolean;
  toggleQuizOverlay: () => void;
  activeBlogPage: number;
  incrementActiveBlogPage: () => void;
  decrementActiveBlogPage: () => void;
  updateActiveBlogPage: (page: number) => void;
};

export const nerdsWhoSellStore = create<NerdsWhoSellState>(
  (set: SetState<NerdsWhoSellState>) => ({
    isQuizOverlayOpen: false,
    toggleQuizOverlay: () =>
      set((state) => {
        return {
          ...state,
          isQuizOverlayOpen: !state.isQuizOverlayOpen,
        };
      }),
    activeBlogPage: 0,
    incrementActiveBlogPage: () =>
      set((state) => ({
        ...state,
        activeBlogPage: state.activeBlogPage++,
      })),
    decrementActiveBlogPage: () =>
      set((state) => ({
        ...state,
        activeBlogPage: state.activeBlogPage--,
      })),
    updateActiveBlogPage: (page: number) =>
      set((state) => ({
        ...state,
        activeBlogPage: page,
      })),
  })
);
