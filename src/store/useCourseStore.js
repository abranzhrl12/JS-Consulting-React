import { create } from "zustand";

export const useCourseStore = create((set) => ({
  courses: [],
  loading: false,
  error: null,

  // Función para obtener los cursos según el tUrlSlug
  fetchCoursesBySlug: async (tUrlSlug) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://api.jsconsulting.pe/course/url?tUrlSlug=${tUrlSlug}`
      );
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();
      // Suponemos que la data es un array de cursos
      set({ courses: data, loading: false });
    } catch (error) {
      console.error("Error fetching courses:", error);
      set({ error: error.message, loading: false });
    }
  },
}));
