import { create } from "zustand";

const useCarouselStore = create((set) => ({
  cursos: [],
  loading: false,
  error: null,

  fetchCursos: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("https://api.jsconsulting.pe/carousel/get");
      const data = await response.json();
      set({ cursos: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useCarouselStore;
