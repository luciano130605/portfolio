export const profile = {
  name: "Luciano de la Peña",
  shortName: "Luciano",
  lastName: "de la Peña",
  monogram: "LdP",
  email: "luciano.delapena@gmail.com",
  location: "Buenos Aires",
  timezone: "America/Argentina/Buenos_Aires",
  github: "https://github.com/luciano130605",
  githubHandle: "luciano130605",
  linkedin: "https://www.linkedin.com/in/luciano-de-la-pe%C3%B1a-520095203/",
  site: "https://www.lucianodelapena.com/",
} as const;

export type Lang = "es" | "en";
export type Theme = "dark" | "light";

export const nav = [
  { id: "intro", n: "01" },
  { id: "proyectos", n: "02" },
  { id: "educacion", n: "03" },
  { id: "cursos", n: "04" },
  { id: "habilidades", n: "05" },
  { id: "contacto", n: "06" },
] as const;

export const copy = {
  es: {
    role: "Estudiante de Desarrollo de Software",
    available: "Abierto a prácticas y primeros roles",
    locationLine: "Buenos Aires, Argentina",
    languages: "Español nativo · Inglés A2",
    intro:
      " Me gusta crear proyectos web, aprender nuevas tecnologías y seguir mejorando mis habilidades como desarrollador.",
    introLead: "Estudiante de Desarrollo de Software.",
    nav: {
      intro: "Inicio",
      proyectos: "Proyectos",
      educacion: "Educación",
      cursos: "Cursos",
      habilidades: "Habilidades",
      contacto: "Contacto",
    },
    sections: {
      proyectos: "Proyectos",
      proyectosNote: "Seleccionado",
      educacion: "Educación",
      cursos: "Cursos y certificaciones",
      habilidades: "Habilidades",
      contacto: "Contacto",
    },
    cta: {
      write: "Escribime",
      github: "GitHub",
      linkedin: "LinkedIn",
      copy: "Copiar email",
      copied: "Email copiado",
      repo: "Repo",
      live: "Web",
      cert: "Ver certificado",
      menu: "Menú",
      close: "Cerrar",
      skip: "Saltar al contenido",
      themeLight: "Tema claro",
      themeDark: "Tema oscuro",
      langEs: "Español",
      langEn: "English",
    },
    clockLabel: "Hora local",
    footerNote: "Hecho en Buenos Aires",
    projects: [

      {
        title: "Portfolio & Servicios Web",
        status: "En línea",
        kicker: "Página web",
        desc: "Landing page para ofrecer servicios de diseño y desarrollo web. Incluye plantillas de demostración por rubro y un flujo de contacto directo por WhatsApp y email.",
        points: [
          "Plantillas demo por rubro",
          "Proceso de trabajo claro",
          "Contacto directo vía WhatsApp y email",
        ],
        tags: ["React", "TypeScript", "TailwindCSS"],
        image: "/projects/landing.png",
        repo: "",
        live: "https://lucianodelapena.com/landing",
      },

      {
        title: "Evently",
        status: "En línea",
        kicker: "Página web",
        desc: "Plataforma para crear y gestionar invitaciones digitales, entradas con código QR y diseños. Pensada para que un organizador arme el evento, lo comparta y controle el acceso desde un solo lugar.",
        points: [
          "Invitaciones digitales con diseño propio",
          "Entradas con código QR",
          "Gestión del evento en un solo tablero",
        ],
        tags: ["React", "JavaScript", "Supabase"],
        image: "/projects/evently.png",
        repo: "https://github.com/luciano130605/evently",
        live: "https://evently-azure-six.vercel.app/",
      },
      {
        title: "Che",
        status: "En desarrollo",
        kicker: "Página web",
        desc: "Aplicación de organización personal que permite gestionar tareas, recordatorios y prioridades mediante lenguaje natural. Che interpreta lo que el usuario necesita hacer y se encarga de organizarlo y recordárselo en el momento adecuado.",
        points: [
          "Organización de tareas mediante lenguaje natural",
          "Clasificación y priorización automática",
          "Recordatorios mediante Push y Telegram",
          "Desarrollado como trabajo de tesis",
        ],
        tags: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express", "Prisma"],
        image: "/projects/che.png",
        repo: "",
        live: "",
      },

    ],

    education: [
      {
        title: "Tecnicatura en Desarrollo de Software",
        school: "IFTS N°11",
        dates: "2024 — Actual",
      },

    ],
    courses: [
      {
        title: "Cloud Foundations — Training Badge",
        org: "AWS Academy",
        year: "2026",
        href: "https://www.credly.com/badges/03ea76cc-4582-409e-a52d-458f830d363a/public_url",
      },
      {
        title: "Introducción a la Ciencia de Datos",
        org: "Santander Open Academy",
        year: "2026",
        href: "/certificados/data-science.pdf",
      },
      {
        title: "Diseño UX",
        org: "Buenos Aires Aprende",
        year: "2025",
        href: "/certificados/ux.pdf",
      },
      {
        title: "Tester QA Manual",
        org: "Educación IT",
        year: "2025",
        href: "/certificados/qa.pdf",
      },

    ],
    skillGroups: [
      {
        label: "Frontend",
        items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      },
      {
        label: "Backend",
        items: ["Node.js", "Express"],
      },
      {
        label: "Base de datos",
        items: ["MySQL", "MongoDB"],
      },
      {
        label: "Herramientas",
        items: ["Git", "GitHub", "Supabase", "Postman"],
      },
    ],
    contactLead: "Si tenés un proyecto, una práctica o simplemente querés charlar sobre código, escribime.",
  },
  en: {
    role: "Software Development student",
    available: "Open to internships and junior roles",
    locationLine: "Buenos Aires, Argentina",
    languages: "Native Spanish · English A2",
    intro:
      "I enjoy creating web projects, learning new technologies, and continuing to improve my skills as a developer.",
    introLead: "Software Development student.",
    nav: {
      intro: "Intro",
      proyectos: "Work",
      educacion: "Education",
      cursos: "Courses",
      habilidades: "Skills",
      contacto: "Contact",
    },
    sections: {
      proyectos: "Work",
      proyectosNote: "Selected",
      educacion: "Education",
      cursos: "Courses & certificates",
      habilidades: "Skills",
      contacto: "Contact",
    },
    cta: {
      write: "Email me",
      github: "GitHub",
      linkedin: "LinkedIn",
      copy: "Copy email",
      copied: "Email copied",
      repo: "Repo",
      live: "Web",
      cert: "View certificate",
      menu: "Menu",
      close: "Close",
      skip: "Skip to content",
      themeLight: "Light theme",
      themeDark: "Dark theme",
      langEs: "Español",
      langEn: "English",
    },
    clockLabel: "Local time",
    footerNote: "Made in Buenos Aires",
    projects: [
      {
        title: "Portfolio & Services Website",
        status: "Live",
        kicker: "Website",
        desc: "Landing page offering web design and development services. Includes demo templates by industry and a direct contact flow via WhatsApp and email.",
        points: [
          "Demo templates by industry",
          "Clear working process",
          "Direct contact via WhatsApp and email",
        ],
        tags: ["React", "TypeScript", "TailwindCSS"],
        image: "/projects/landing.png",
        repo: "",
        live: "https://lucianodelapena.com/landing",
      },
      {
        title: "Evently",
        status: "Live",
        kicker: "Website",
        desc: "A platform for creating and managing digital invitations, QR-code tickets, and designs. It allows organizers to set up an event, share it, and manage access from a single place.",
        points: [
          "Digital invitations with custom design",
          "QR-code tickets",
          "Event management in a single dashboard",
        ],
        tags: ["React", "JavaScript", "Supabase"],
        image: "/projects/evently.png",
        repo: "https://github.com/luciano130605/evently",
        live: "https://evently-azure-six.vercel.app/",
      },
      {
        title: "Che",
        status: "In development",
        kicker: "Website",
        desc: "A personal organization app that allows you to manage tasks, reminders, and priorities using natural language. Che interprets what the user needs to do and handles organizing and reminding them at the right time.",
        points: [
          "Task organization using natural language",
          "Automatic classification and prioritization",
          "Reminders via push notifications and Telegram",
          "Developed as a thesis project"
        ],
        tags: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express", "Prisma"],
        image: "/projects/che.png",
        repo: "",
        live: "",
      },
    ],
    education: [

      {
        title: "High school, sports orientation",
        school: "Instituto Comunicaciones",
        dates: "2018 — 2022",
      },
    ],
    courses: [
      {
        title: "Cloud Foundations — Training Badge",
        org: "AWS Academy",
        year: "2026",
        href: "https://www.credly.com/badges/03ea76cc-4582-409e-a52d-458f830d363a/public_url",
      },
      {
        title: "Introduction to Data Science",
        org: "Santander Open Academy",
        year: "2026",
        href: "/certificados/data-science.pdf",
      },
      {
        title: "UX Design",
        org: "Buenos Aires Aprende",
        year: "2025",
        href: "/certificados/ux.pdf",
      },
      {
        title: "Manual QA Tester",
        org: "Educación IT",
        year: "2025",
        href: "/certificados/qa.pdf",
      },

    ],
    skillGroups: [
      {
        label: "Frontend",
        items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      },
      {
        label: "Backend",
        items: ["Node.js", "Express"],
      },
      {
        label: "Database",
        items: ["MySQL", "MongoDB"],
      },
      {
        label: "Tools",
        items: ["Git", "GitHub", "Supabase", "Postman"],
      },
    ],
    contactLead: "If you have a project, an internship, or just want to talk about code — write to me.",
  },
} as const;

export type Copy = (typeof copy)[Lang];
