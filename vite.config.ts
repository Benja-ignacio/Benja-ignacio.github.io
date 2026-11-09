import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// El repositorio es Benja-ignacio/Benja-ignacio.github.io, por lo que el
// sitio se publica en la raíz: https://benja-ignacio.github.io/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
});
