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

export type AboutCard = {
  title: string;
  text: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export const dictionaries = {
  es: {
    nav: {
      about: "Sobre mí",
      tech: "Stack",
      projects: "Proyectos",
      contact: "Contacto",
      downloadCv: "Descargar CV",
    },
    hero: {
      hiIm: "Hola, soy",
      description:
        "Construyo soluciones web y móviles escalables centradas en la experiencia del usuario, convirtiendo problemas complejos en productos digitales elegantes.",
      ctaProjects: "Ver Proyectos",
      ctaContact: "Contáctame",
      ctaCv: "Descargar CV",
      cvLink: "/cv/CV_Guillermo_Chinni_espanol.pdf",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Me especializo en navegar el ciclo de vida completo del producto, desde el concepto inicial y diseño UI/UX hasta la arquitectura de backend robusta y el despliegue.",
        "Mi experiencia se centra en el stack MERN, con enfoque profundo en arquitecturas modernas como Monorepos, Serverless e integraciones con LLMs. Creo en escribir código limpio y mantenible que entregue experiencias de usuario excepcionales.",
      ],
      cards: [
        {
          title: "Educación",
          text: "Ingeniería Informática, Duoc UC",
        },
        {
          title: "Idiomas",
          text: "Español (Nativo)\nInglés (B2)",
        },
        {
          title: "Más allá del código",
          text: "Bombero Voluntario en la 18ª Compañía, Cuerpo de Bomberos de Santiago. Dedicado al servicio comunitario y al trabajo en equipo bajo presión.",
        },
      ] as AboutCard[],
    },
    tech: {
      title: "Tech Stack",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        dbAndDevops: "Bases de datos & DevOps",
        aiAgents: "IA, Agentes & Herramientas Generativas",
      },
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Trabajos seleccionados que muestran amplitud técnica y enfoque en diseño.",
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
            "Pipeline RAG con LangChain y bases de datos vectoriales para el sector legal.",
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
            "Plataforma web Serverless en Vercel con bases de datos documentales y mapas interactivos globales.",
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
            "Gestión de mantenimiento en tiempo real con arquitectura Monorepo y control de acceso basado en roles.",
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
            "App móvil de alta disponibilidad con optimización de memoria via File System para entornos sin red.",
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
      copyright: `© ${new Date().getFullYear()} Guillermo Chinni. Todos los derechos reservados.`,
    },
    contact: {
      title: "Conectemos",
      description:
        "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión.",
      items: [
        {
          label: "Email",
          value: "guillechinni2001@gmail.com",
          href: "mailto:guillechinni2001@gmail.com",
        },
        {
          label: "Teléfono",
          value: "+56 9 42499667",
          href: "tel:+56942499667",
        },
        {
          label: "LinkedIn",
          value: "Guillermo Chinni",
          href: "https://www.linkedin.com/in/guillermo-chinni-aylwin/",
        },
      ] as ContactItem[],
      name: "Nombre completo",
      email: "Correo electrónico",
      subject: "Asunto",
      message: "Tu mensaje",
      submit: "Enviar mensaje",
      submitting: "Enviando...",
      success: "¡Mensaje enviado con éxito! Te responderé pronto.",
      error: "Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.",
      captchaError: "Por favor, completa el Captcha.",
    },
  },
  en: {
    nav: {
      about: "About",
      tech: "Stack",
      projects: "Projects",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    hero: {
      hiIm: "Hi, I'm",
      description:
        "I build scalable web and mobile solutions focused on user experience, turning complex problems into elegant digital products.",
      ctaProjects: "View Projects",
      ctaContact: "Contact Me",
      ctaCv: "Download CV",
      cvLink: "/cv/CV_Guillermo_Chinni_english.pdf",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I specialize in navigating the complete product lifecycle, from initial concept and UI/UX design to robust backend architecture and deployment.",
        "My expertise centers around the MERN stack, with a deep focus on modern architectures like Monorepos, Serverless, and LLM integrations. I believe in writing clean, maintainable code that delivers exceptional user experiences.",
      ],
      cards: [
        {
          title: "Education",
          text: "Computer Engineering, Duoc UC",
        },
        {
          title: "Languages",
          text: "Spanish (Native)\nEnglish (B2)",
        },
        {
          title: "Beyond Code",
          text: "Volunteer Firefighter at 18ª Compañía, Cuerpo de Bomberos de Santiago. Dedicated to community service and high-pressure teamwork.",
        },
      ] as AboutCard[],
    },
    tech: {
      title: "Tech Stack",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        dbAndDevops: "Databases & DevOps",
        aiAgents: "AI, Agents & Generative Tools",
      },
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Selected works showcasing technical breadth and design focus.",
      badges: {
        nda: "Private Code (NDA)",
        team: "Team",
        solo: "Alone",
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
            "RAG pipeline with LangChain and vector databases for the legal sector.",
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
            "Serverless web platform on Vercel with document databases and global interactive maps.",
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
            "Real-time maintenance management with Monorepo architecture and Role-Based Access Control.",
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
            "High-availability mobile app with File System memory optimization for offline environments.",
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
      copyright: `© ${new Date().getFullYear()} Guillermo Chinni. All rights reserved.`,
    },
    contact: {
      title: "Let's Connect",
      description:
        "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
      items: [
        {
          label: "Email",
          value: "guillechinni2001@gmail.com",
          href: "mailto:guillechinni2001@gmail.com",
        },
        {
          label: "Phone",
          value: "+56 9 42499667",
          href: "tel:+56942499667",
        },
        {
          label: "LinkedIn",
          value: "Guillermo Chinni",
          href: "https://www.linkedin.com/in/guillermo-chinni-aylwin/",
        },
      ] as ContactItem[],
      name: "Full Name",
      email: "Email Address",
      subject: "Subject",
      message: "Your Message",
      submit: "Send Message",
      submitting: "Sending...",
      success: "Message sent successfully! I'll get back to you soon.",
      error: "An error occurred while sending the message. Please try again.",
      captchaError: "Please complete the Captcha.",
    },
  },
};
