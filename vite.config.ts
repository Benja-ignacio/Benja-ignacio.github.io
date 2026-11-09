import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// En GitHub Pages el sitio se publica en https://<usuario>.github.io/cv/
// por lo que los assets compilados deben resolverse bajo /cv/.
// En desarrollo se mantiene la raíz para evitar rutas innecesarias.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/cv/" : "/",
  plugins: [react(), tailwindcss()],
}));
