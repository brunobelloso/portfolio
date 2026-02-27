# portfolio-bruno

Portfolio personal construido con Next.js 16 y React 19. Muestra proyectos, skills y un formulario de contacto. Diseño dark mode, animaciones con Framer Motion y tipado completo en TypeScript.

## Stack

- **Next.js 16** con App Router y Turbopack
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4**
- **Framer Motion 11** — animaciones scroll-triggered
- **React Hook Form** + **Zod** — validación del formulario de contacto

## Instalación

```bash
git clone https://github.com/brunobelloso/portfolio
cd portfolio
npm install
npm run dev        # http://localhost:3002
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en puerto 3002 |
| `npm run build` | Build de producción |
| `npm start` | Servidor de producción en puerto 3002 |
| `npm run lint` | ESLint |

## Estructura

```
src/
  app/
    page.tsx              # Página principal
    layout.tsx            # Layout global (metadata, fuentes)
    globals.css           # Variables CSS y Tailwind 4
    api/contact/route.ts  # API route para el formulario de contacto
  components/
    layout/               # Header, Footer
    sections/             # Hero, About, Skills, Projects, Contact
    ui/                   # Button, Input, Textarea, ProjectModal
  config/
    site.ts               # Texto, links, proyectos y skills del sitio
  lib/
    utils.ts              # cn() — clsx + tailwind-merge
```

## Configuración

Todo el contenido del sitio (nombre, descripción, links, proyectos, skills) se edita en `src/config/site.ts`. No hay variables de entorno requeridas para correr el proyecto en local.

## Licencia

MIT
