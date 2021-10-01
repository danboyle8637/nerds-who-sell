import create, { SetState } from "zustand";

type NerdsWhoSellState = {
  isQuizOverlayOpen: boolean;
  toggleQuizOverlay: () => void;
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
  })
);
