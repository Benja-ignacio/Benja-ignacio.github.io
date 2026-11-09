# Portafolio personal · Benjamín Pérez

Portafolio profesional construido con **React + TypeScript + Vite + Tailwind CSS v4**.

## Características

- Diseño responsive para móvil, tablet y escritorio.
- Modo claro/oscuro con persistencia en `localStorage` y detección de la preferencia del sistema.
- Componentes semánticos y accesibles (navegación por teclado, landmarks, `aria-labels`).
- Secciones de perfil, experiencia, formación, habilidades, proyectos y contacto.
- Tipografías Inter y Sora, paleta basada en tokens de color para ambos temas.

## Desarrollo

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — servidor de desarrollo.
- `npm run build` — compilación de producción.
- `npm run preview` — vista previa del build.
- `npm run lint` — análisis estático con ESLint.

## Estructura

```
src/
├── components/   # Secciones y componentes de la interfaz
├── core/         # Lógica de temas (claro/oscuro)
├── App.tsx       # Composición de la página
└── index.css     # Tokens de diseño y estilos globales
```
