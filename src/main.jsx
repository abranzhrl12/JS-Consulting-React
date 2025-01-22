import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { Navbar } from "./components/Navbar/Navbar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
  </StrictMode>
);
