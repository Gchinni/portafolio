export type Language = "es" | "en";

export type ProjectItem = {
  id: string;
  name: string;
  stack: string[];
  description: string;
  images?: string[];
  aspectRatio?: "16/10" | "9/16";
  isPrivate?: boolean;
  teamType?: "team" | "solo";
  webLink?: string;
  requestAccessSubject?: string;
};

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
      workflow: {
        title: "Metodología y Calidad de Código",
        tags: [
          "Arquitectura Escalable",
          "Code Reviews",
          "Integración Continua (CI/CD)",
          "Metodologías Ágiles (Jira)",
          "QA Testing",
        ],
      },
    },
    tech: {
      title: "Tech Stack",
    },
    projects: {
      title: "Experiencia y Proyectos Destacados",
      badges: {
        nda: "Código Privado (NDA)",
        team: "En Equipo",
        solo: "Solo",
      },
      links: {
        web: "Visitar Web",
        requestAccess: "Solicitar Acceso",
      },
      items: [
        {
          id: "legal-ai",
          name: "Asistente Legal con IA",
          stack: ["React", "Next.js", "LLMs", "LangChain"],
          description:
            "Construcción de un pipeline RAG con LangChain y bases de datos vectoriales para el sector legal.",
          images: Array.from(
            { length: 5 },
            (_, i) =>
              `https://res.cloudinary.com/dhydaltmh/image/upload/veritia${i + 1}.png`,
          ),
          aspectRatio: "16/10",
          isPrivate: false,
          teamType: "team",
          webLink: "https://www.veritia.cl",
        },
        {
          id: "family-office",
          name: "Plataforma Family Office",
          stack: ["Next.js", "MongoDB", "Serverless"],
          description:
            "Plataforma web Serverless desplegada en Vercel con bases de datos documentales y mapas interactivos globales.",
          images: Array.from(
            { length: 6 },
            (_, i) =>
              `https://res.cloudinary.com/dhydaltmh/image/upload/family-office${i + 1}.png`,
          ),
          aspectRatio: "16/10",
          isPrivate: true,
          teamType: "solo",
          requestAccessSubject:
            "Consulta sobre proyecto Plataforma Family Office",
        },
        {
          id: "cmms",
          name: "Sistema CMMS (Mantenimiento)",
          stack: ["NestJS", "React", "Monorepo"],
          description:
            "Sistema de gestión de mantenimiento en tiempo real con arquitectura Monorepo y Control de Acceso Basado en Roles.",
          images: Array.from(
            { length: 6 },
            (_, i) =>
              `https://res.cloudinary.com/dhydaltmh/image/upload/CMMS${i + 1}.png`,
          ),
          aspectRatio: "16/10",
          isPrivate: true,
          teamType: "solo",
          requestAccessSubject: "Consulta sobre proyecto Sistema CMMS",
        },
        {
          id: "offline-app",
          name: "App Móvil Offline",
          stack: ["React Native", "Expo", "File System"],
          description:
            "Solución móvil de alta disponibilidad con optimización de memoria mediante File System para entornos sin red.",
          images: Array.from(
            { length: 7 },
            (_, i) =>
              `https://res.cloudinary.com/dhydaltmh/image/upload/app-movil${i + 1}.png`,
          ),
          aspectRatio: "9/16",
          isPrivate: true,
          teamType: "solo",
          requestAccessSubject: "Consulta sobre proyecto App Móvil Offline",
        },
      ] as ProjectItem[],
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
      workflow: {
        title: "Methodology & Code Quality",
        tags: [
          "Scalable Architecture",
          "Code Reviews",
          "Continuous Integration (CI/CD)",
          "Agile (Jira)",
          "QA Testing",
        ],
      },
    },
    tech: {
      title: "Tech Stack",
    },
    projects: {
      title: "Experience & Featured Projects",
      badges: {
        nda: "Private Code (NDA)",
        team: "Team",
        solo: "Solo",
      },
      links: {
        web: "Visit Website",
        requestAccess: "Request Access",
      },
      items: [
        {
          id: "legal-ai",
          name: "AI Legal Assistant",
          stack: ["React", "Next.js", "LLMs", "LangChain"],
          description:
            "Built a RAG pipeline using LangChain and vector databases for the legal sector.",
          images: Array.from(
            { length: 5 },
            (_, i) =>
              `https://res.cloudinary.com/dhydaltmh/image/upload/veritia${i + 1}.png`,
          ),
          aspectRatio: "16/10",
          isPrivate: false,
          teamType: "team",
          webLink: "https://www.veritia.cl",
        },
        {
          id: "family-office",
          name: "Family Office Platform",
          stack: ["Next.js", "MongoDB", "Serverless"],
          description:
            "Serverless web platform deployed on Vercel with document databases and global interactive maps.",
          images: Array.from(
            { length: 6 },
            (_, i) =>
              `https://res.cloudinary.com/dhydaltmh/image/upload/family-office${i + 1}.png`,
          ),
          aspectRatio: "16/10",
          isPrivate: true,
          teamType: "solo",
          requestAccessSubject: "Inquiry about Family Office Platform project",
        },
        {
          id: "cmms",
          name: "CMMS Platform (Maintenance)",
          stack: ["NestJS", "React", "Monorepo"],
          description:
            "Real-time maintenance management system with Monorepo architecture and Role-Based Access Control.",
          images: Array.from(
            { length: 6 },
            (_, i) =>
              `https://res.cloudinary.com/dhydaltmh/image/upload/CMMS${i + 1}.png`,
          ),
          aspectRatio: "16/10",
          isPrivate: true,
          teamType: "solo",
          requestAccessSubject: "Inquiry about CMMS Platform project",
        },
        {
          id: "offline-app",
          name: "Offline Mobile App",
          stack: ["React Native", "Expo", "File System"],
          description:
            "High-availability mobile solution with memory optimization via File System for offline environments.",
          images: Array.from(
            { length: 7 },
            (_, i) =>
              `https://res.cloudinary.com/dhydaltmh/image/upload/app-movil${i + 1}.png`,
          ),
          aspectRatio: "9/16",
          isPrivate: true,
          teamType: "solo",
          requestAccessSubject: "Inquiry about Offline Mobile App project",
        },
      ] as ProjectItem[],
    },
    footer: {
      connectText: "Let’s build something amazing together.",
      copyright: `© ${new Date().getFullYear()} Guillermo Chinni. All rights reserved.`,
    },
  },
};
