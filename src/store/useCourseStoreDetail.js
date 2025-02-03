import { create } from "zustand";

export const useCourseStoreDetail = create((set) => ({
  course: null,
  loading: false,
  error: null,

  // Función para obtener el curso por slug
  fetchCourseBySlug: async (slug) => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://api.jsconsulting.pe/course/get/url?tUrlSlug=${slug}`
      );
      const data = await response.json();

      // Verifica si la respuesta contiene datos válidos
      if (!data || Object.keys(data).length === 0) {
        throw new Error("Curso no encontrado");
      }

      set({ course: data, loading: false });
    } catch (error) {
      set({ error: "Error al cargar el curso", loading: false });
    }
  },
}));
