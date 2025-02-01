import { create } from "zustand";

export const useServiceDetailStore = create((set, get) => ({
  details: {}, // Guardaremos los detalles por slug: { [slug]: serviceDetail }
  fetchServiceDetail: async (slug) => {
    // Si ya tenemos la data para este slug, la retornamos sin hacer petición.
    const current = get().details[slug];
    if (current) {
      return current;
    }
    try {
      // Llamamos al endpoint con el query parameter tUrlSlug
      const response = await fetch(
        `https://api.jsconsulting.pe/category/get/url?tUrlSlug=${slug}`
      );
      if (!response.ok) throw new Error("Error en la API");
      const data = await response.json();
      set((state) => ({
        details: { ...state.details, [slug]: data },
      }));
      return data;
    } catch (error) {
      console.error("❌ Error al obtener el detalle del servicio:", error);
      throw error;
    }
  },
}));

// export default useServiceDetailStore;
