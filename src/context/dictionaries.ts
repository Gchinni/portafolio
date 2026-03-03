export type Language = "es" | "en";

export const dictionaries = {
  es: {
    nav: {
      about: "Sobre mí",
      tech: "Tecnologías",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "Construyendo ecosistemas digitales robustos y escalables.",
      subtitle:
        "Guillermo Chinni - Full-Stack Developer especializado en React, Next.js, Node.js y arquitecturas Cloud.",
      ctaProjects: "Ver Proyectos",
      ctaCv: "Descargar CV",
    },
    about: {
      title: "Sobre mí",
      text: "Soy Ingeniero Informático con sólida experiencia en el diseño y desarrollo de aplicaciones web y móviles. Me especializo en arquitecturas modernas (Monorepos, Serverless, integraciones LLM). Fuera del código, sirvo como Bombero Voluntario en la 18ª Compañía de Santiago; una vocación que ha forjado mi capacidad para tomar decisiones críticas, liderar equipos y mantener la claridad bajo escenarios de alta presión.",
    },
    tech: {
      title: "Tech Stack",
    },
    projects: {
      title: "Experiencia y Proyectos Destacados",
      items: [
        {
          id: "veritia",
          name: "Veritia (AI Legal Assistant)",
          stack: ["React", "Next.js", "LLMs", "LangChain"],
          description:
            "Construcción de un pipeline RAG con LangChain y bases de datos vectoriales para el sector legal.",
          images: [
            "https://picsum.photos/seed/veritia1/800/600",
            "https://picsum.photos/seed/veritia2/800/600",
            "https://picsum.photos/seed/veritia3/800/600",
          ],
        },
        {
          id: "cmpc",
          name: "CMPC App (Offline-First)",
          stack: ["React Native", "Expo", "File System"],
          description:
            "Solución móvil de alta disponibilidad con optimización de memoria mediante File System para entornos sin red.",
          images: [
            "https://picsum.photos/seed/cmpc1/800/600",
            "https://picsum.photos/seed/cmpc2/800/600",
            "https://picsum.photos/seed/cmpc3/800/600",
          ],
        },
        {
          id: "vina",
          name: "Viña Pérez Cruz (Family Office)",
          stack: ["Next.js", "MongoDB", "Serverless"],
          description:
            "Plataforma web Serverless desplegada en Vercel con bases de datos documentales y mapas interactivos globales.",
          images: [
            "https://picsum.photos/seed/vina1/800/600",
            "https://picsum.photos/seed/vina2/800/600",
          ],
        },
        {
          id: "rmh",
          name: "RMH Operations (Plataforma CMMS)",
          stack: ["NestJS", "React", "Monorepo"],
          description:
            "Sistema de gestión de mantenimiento en tiempo real con arquitectura Monorepo y Control de Acceso Basado en Roles.",
          images: [
            "https://picsum.photos/seed/rmh1/800/600",
            "https://picsum.photos/seed/rmh2/800/600",
            "https://picsum.photos/seed/rmh3/800/600",
          ],
        },
      ],
    },
    footer: {
      connectText: "¿Construimos algo increíble? Hablemos.",
      copyright: `© ${new Date().getFullYear()} Guillermo Chinni. Todos los derechos reservados.`,
    },
  },
  en: {
    nav: {
      about: "About",
      tech: "Tech Stack",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Building robust and scalable digital ecosystems.",
      subtitle:
        "Guillermo Chinni - Full-Stack Developer specialized in React, Next.js, Node.js, and Cloud architectures.",
      ctaProjects: "View Projects",
      ctaCv: "Download CV",
    },
    about: {
      title: "About Me",
      text: "I am a Software Engineer with solid experience in designing and developing web and mobile applications. I specialize in modern architectures (Monorepos, Serverless, LLM integrations). Beyond coding, I serve as a Volunteer Firefighter at the 18th Fire Company of Santiago; a calling that has forged my ability to make critical decisions, lead teams, and maintain clarity under high-pressure scenarios.",
    },
    tech: {
      title: "Tech Stack",
    },
    projects: {
      title: "Experience & Featured Projects",
      items: [
        {
          id: "veritia",
          name: "Veritia (AI Legal Assistant)",
          stack: ["React", "Next.js", "LLMs", "LangChain"],
          description:
            "Built a RAG pipeline using LangChain and vector databases for the legal sector.",
          images: [
            "https://picsum.photos/seed/veritia1/800/600",
            "https://picsum.photos/seed/veritia2/800/600",
            "https://picsum.photos/seed/veritia3/800/600",
          ],
        },
        {
          id: "cmpc",
          name: "CMPC App (Offline-First)",
          stack: ["React Native", "Expo", "File System"],
          description:
            "High-availability mobile solution with memory optimization via File System for offline environments.",
          images: [
            "https://picsum.photos/seed/cmpc1/800/600",
            "https://picsum.photos/seed/cmpc2/800/600",
            "https://picsum.photos/seed/cmpc3/800/600",
          ],
        },
        {
          id: "vina",
          name: "Viña Pérez Cruz (Family Office)",
          stack: ["Next.js", "MongoDB", "Serverless"],
          description:
            "Serverless web platform deployed on Vercel with document databases and global interactive maps.",
          images: [
            "https://picsum.photos/seed/vina1/800/600",
            "https://picsum.photos/seed/vina2/800/600",
          ],
        },
        {
          id: "rmh",
          name: "RMH Operations (CMMS Platform)",
          stack: ["NestJS", "React", "Monorepo"],
          description:
            "Real-time maintenance management system with Monorepo architecture and Role-Based Access Control.",
          images: [
            "https://picsum.photos/seed/rmh1/800/600",
            "https://picsum.photos/seed/rmh2/800/600",
            "https://picsum.photos/seed/rmh3/800/600",
          ],
        },
      ],
    },
    footer: {
      connectText: "Let’s build something amazing together.",
      copyright: `© ${new Date().getFullYear()} Guillermo Chinni. All rights reserved.`,
    },
  },
};
