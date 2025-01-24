import { Navbar } from "../Navbar/Navbar";
import { Header } from "../Header/Header";
import { useMemo } from "react";

export const HeaderLayout = ({ videoUrl, title, children }) => {
  // Memorizar el Header para evitar recargas innecesarias
  const memoizedHeader = useMemo(
    () => <Header videoUrl={videoUrl} title={title} />,
    [videoUrl, title]
  );

  return (
    <>
      <Navbar />
      {memoizedHeader}
      <main>{children}</main> {/* Contenido específico de cada página */}
    </>
  );
};
