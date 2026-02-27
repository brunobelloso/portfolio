export const siteConfig = {
  name: "Bruno Belloso",
  role: "Full Stack Developer · AI & Automation",
  description:
    "Desarrollador Full Stack especializado en construir productos digitales de alto impacto, desde MVPs hasta plataformas SaaS, con integración de IA y automatización.",
  url: "https://brunobelloso.dev",
};

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export const socialLinks = {
  github: "https://github.com/brunobelloso",
  linkedin: "https://linkedin.com/in/brunobelloso",
};

export type ThumbnailVariant =
  | "tasko"
  | "realestate"
  | "pasamontanas"
  | "authapi"
  | "webcambot"
  | "rpa";

export const featuredProjects = [
  {
    title: "Tasko SaaS Boilerplate",
    description:
      "SaaS completo con org management, Stripe, dashboard de campañas y autenticación con Supabase SSR. Arquitectura lista para escalar desde el primer día.",
    tags: ["Next.js", "Prisma", "Stripe", "Supabase", "TypeScript"],
    github: "https://github.com/brunobelloso/tasko-saas-boilerplate",
    demo: "#",
    thumbnail: "tasko" as ThumbnailVariant,
    detailedDescription:
      "Boilerplate SaaS production-ready con arquitectura multi-tenant. Incluye sistema de organizaciones con roles (owner, admin, member), autenticación SSR con Supabase, billing con Stripe Checkout + portal de cliente, dashboard de campañas con métricas en tiempo real y onboarding flow completo. Pensado para lanzar un SaaS desde cero sin perder semanas en infraestructura.",
    highlights: [
      "Multi-tenant org management con roles",
      "Auth SSR con Supabase",
      "Stripe Checkout + webhooks + portal de cliente",
      "Dashboard de campañas con métricas en tiempo real",
      "Onboarding flow completo",
      "TypeScript end-to-end",
    ],
  },
  {
    title: "MVP Real Estate",
    description:
      "MVP de leads inmobiliarios con IA (Anthropic SDK), dashboard de captación y backend Fastify. Automatización del pipeline de ventas con análisis inteligente.",
    tags: ["Fastify", "Vite", "Anthropic AI", "Supabase", "TypeScript"],
    github: "https://github.com/brunobelloso/mvp-real-estate",
    demo: "#",
    thumbnail: "realestate" as ThumbnailVariant,
    detailedDescription:
      "MVP para captación de leads inmobiliarios con integración de IA. El backend en Fastify expone APIs REST consumidas por un dashboard Vite/React. La IA (Anthropic SDK) analiza leads y sugiere acciones comerciales basadas en historial y contexto. Supabase actúa como BaaS con auth, storage y DB en tiempo real.",
    highlights: [
      "Backend Fastify con API REST tipada",
      "IA con Anthropic SDK para scoring de leads",
      "Dashboard Vite + React",
      "Supabase como BaaS",
      "Filtros avanzados por zona/precio",
      "Pipeline de ventas automatizado",
    ],
  },
  {
    title: "Filtro Pasamontanas",
    description:
      "Filtro AR en tiempo real con detección de 468 landmarks faciales, reemplazo de fondo y grabación de video+audio. Procesamiento de imágenes de alta precisión.",
    tags: ["Python", "OpenCV", "MediaPipe", "FFmpeg"],
    github: "https://github.com/brunobelloso/filtro-pasamontanas",
    demo: "#",
    thumbnail: "pasamontanas" as ThumbnailVariant,
    detailedDescription:
      "Aplicación de realidad aumentada en tiempo real que detecta 468 landmarks faciales con MediaPipe y aplica filtros gráficos sobre el rostro del usuario. Incluye reemplazo de fondo con máscara segmentada, múltiples filtros combinables y capacidad de grabación simultánea de video y audio mediante FFmpeg.",
    highlights: [
      "468 landmarks faciales con MediaPipe",
      "Reemplazo de fondo en tiempo real",
      "Múltiples filtros combinables",
      "Grabación video+audio con FFmpeg",
      "Procesamiento a 30fps sin lag",
      "Pipeline OpenCV optimizado",
    ],
  },
];

export const otherProjects = [
  {
    title: "Auth API",
    description:
      "Microservicio de autenticación con JWT, Argon2, MFA, Magic Links y rate limiting.",
    tags: ["Node.js", "Express", "JWT", "PostgreSQL", "Jest"],
    github: "https://github.com/brunobelloso/auth-api",
    thumbnail: "authapi" as ThumbnailVariant,
    detailedDescription:
      "Microservicio de autenticación standalone. JWT con refresh token rotation, passwords hasheadas con Argon2id, MFA via TOTP compatible con Google Authenticator, Magic Links por email, rate limiting por IP y endpoint. Suite de tests con Jest con cobertura superior al 80%.",
    highlights: [
      "JWT + refresh token rotation",
      "Argon2id password hashing",
      "MFA via TOTP (Google Authenticator)",
      "Magic Links por email",
      "Rate limiting por IP y endpoint",
      "Jest tests con >80% cobertura",
    ],
  },
  {
    title: "Webcam Telegram Bot",
    description:
      "Monitoreo de seguridad con detección de movimiento y alertas vía Telegram API.",
    tags: ["Python", "OpenCV", "Telegram API", "Threading"],
    github: "https://github.com/brunobelloso/webcam-telegram-bot",
    thumbnail: "webcambot" as ThumbnailVariant,
    detailedDescription:
      "Sistema de vigilancia doméstica con detección de movimiento por diferencia de frames. Al detectar movimiento captura imagen y envía alerta con foto a un chat de Telegram vía Bot API. Usa threading para no bloquear el loop de captura. Configurable por JSON (sensibilidad, cooldown, destinatarios).",
    highlights: [
      "Detección de movimiento por diferencia de frames",
      "Alertas con foto a Telegram vía Bot API",
      "Threading no bloqueante",
      "Configurable por JSON",
      "Cooldown configurable entre alertas",
      "Bajo consumo de recursos",
    ],
  },
  {
    title: "Planilla RPA",
    description:
      "Automatización empresarial de planillas farmacéuticas con configuración declarativa JSON.",
    tags: ["Python", "PyAutoGUI", "Pandas", "JSON Config"],
    github: "https://github.com/brunobelloso/planilla-rpa",
    thumbnail: "rpa" as ThumbnailVariant,
    detailedDescription:
      "Automatización RPA para planillas de farmacias. Lee configuración declarativa desde JSON (campos, coordenadas, secuencias de pasos) y ejecuta la automatización usando PyAutoGUI + Pandas. Genera reportes de ejecución y maneja errores con reintentos automáticos. Elimina carga manual repetitiva en procesos administrativos.",
    highlights: [
      "Configuración 100% declarativa en JSON",
      "PyAutoGUI para control de UI",
      "Pandas para procesamiento de datos",
      "Reintentos automáticos en errores",
      "Reportes de ejecución detallados",
      "Adaptable a distintas planillas",
    ],
  },
];

export const skillCategories = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express", "Fastify", "Python", "FastAPI"],
  },
  {
    category: "DB & Infra",
    icon: "Database",
    skills: ["PostgreSQL", "Supabase", "Prisma", "Docker"],
  },
  {
    category: "AI & Automation",
    icon: "Bot",
    skills: ["Anthropic SDK", "OpenCV", "MediaPipe", "PyAutoGUI", "Selenium"],
  },
];

export const stats = [
  { value: "10+", label: "Proyectos" },
  { value: "3 años", label: "Experiencia" },
  { value: "Multi-stack", label: "Versatilidad" },
];
