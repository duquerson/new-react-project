import { create } from 'zustand'

const useFormStore = create((set) => ({
  currentStep: 1,
  goToNextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  goToPrevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  goToStep: (step) => set({ currentStep: step }),
}));

export default useFormStore;