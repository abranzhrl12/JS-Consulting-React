import { useState, useEffect, useRef } from "react";

// Datos de los clientes (puedes moverlo a un archivo aparte)
const clientLogos = [
  {
    src: "/assets/LogosClientes/LogoCliente1.svg",
    alt: "Logo del cliente Empresa 1",
  },
  {
    src: "/assets/LogosClientes/LogoCliente2.svg",
    alt: "Logo del cliente Empresa 2",
  },
  {
    src: "/assets/LogosClientes/LogoCliente3.svg",
    alt: "Logo del cliente Empresa 3",
  },
  {
    src: "/assets/LogosClientes/LogoCliente4.svg",
    alt: "Logo del cliente Empresa 4",
  },
  {
    src: "/assets/LogosClientes/LogoCliente5.svg",
    alt: "Logo del cliente Empresa 5",
  },
  {
    src: "/assets/LogosClientes/LogoCliente6.svg",
    alt: "Logo del cliente Empresa 6",
  },
  {
    src: "/assets/LogosClientes/LogoCliente7.svg",
    alt: "Logo del cliente Empresa 7",
  },
];
export const Clientes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Selecciona el elemento original
    const originalSlide = container.querySelector(".logos-slide");
    if (!originalSlide) return;

    // Clona el contenido dinámicamente
    const clone = originalSlide.cloneNode(true);
    clone.classList.add("clone"); // Clase opcional para identificar el clon
    container.appendChild(clone);

    // Limpieza del efecto para evitar múltiples clonaciones
    return () => {
      if (container.contains(clone)) {
        container.removeChild(clone);
      }
    };
  }, []);

  return (
    <section className="Clientes" aria-labelledby="clientes-title">
      <div className="Clientes__contentall">
        <h2 className="Clientes__titles">Nuestros Clientes</h2>
        <div
          className="Clientes__Carrousel"
          aria-label="Carrusel de logos de clientes"
        >
          <div className="logos" ref={containerRef}>
            <div className="logos-slide">
              {clientLogos.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
