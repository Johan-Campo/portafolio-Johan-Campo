export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },

    hero: {
      role: "Full-Stack Developer",
      subtitle:
        "Full-stack developer with a strong backend focus using C# and .NET, experienced in building services, integrating platforms and developing solutions that support real business workflows.",
      downloadCV: "Download CV",
      downloadCVSpanish: "Download CV (Spanish)",
      downloadCVEnglish: "Download CV (English)",
      viewProjects: "View Projects",
    },

    about: {
      title: "About",
      p1:
        "Full-stack developer specialized in C#, .NET and ASP.NET Core, with experience building backend services, REST APIs and web applications. I also work with modern frontend technologies including React and Next.js.",
      p2:
        "My background in Electronic Engineering has strengthened my analytical thinking and understanding of system logic, which supports the way I design and structure software solutions.",
      p3:
        "I enjoy working across both backend and frontend layers, building maintainable applications and continuously improving my skills in modern development practices and system design.",
    },

    skills: {
      title: "Skills",
      categories: {
        backend: "Backend Development",
        frontend: "Frontend Development",
        automation: "Tools & Integration",
        databases: "Databases",
        soft: "Soft Skills",
      },
      softSkills: [
        "Problem Solving",
        "Analytical Thinking",
        "Clear Communication",
      ],
    },

    experience: {
      title: "Experience",
      jobs: [
        {
          title: "Full-Stack Developer",
          company: "A13AGENCY",
          location: "Santa Marta, Colombia",
          period: "February 2026 – Present",
          responsibilities: [
            "Developing a SaaS platform for interactive digital menus targeting the restaurant and hospitality sector, built from scratch with a modern tech stack.",
            "Built a full-featured admin panel with Next.js 15 and MongoDB via Prisma ORM, including CRUD operations, drag & drop reordering and dynamic content management.",
            "Implemented real-time cross-device communication combining Pusher Channels and BroadcastChannel API for order synchronization and live table state management.",
            "Developed a headless CMS and REST API with secure session-based authentication, bilingual support (ES/EN) and a reusable multi-client architecture.",
            "Integrated text-to-speech (TTS) synthesis and AI-powered product recommendation modules into the customer-facing menu experience.",
            "Managed the complete order lifecycle: cart management, kitchen dispatch, billing with tax calculations and multiple payment method support.",
          ],
        },
        {
          title: "Full-Stack Developer",
          company: "WantDigital S.A.S",
          location: "Bogotá, Colombia",
          period: "February 2025 – October 2025",
          responsibilities: [
            "Designed and implemented backend solutions using C# and .NET for enterprise administrative systems focused on document management and accounting processes.",
            "Developed data processing workflows integrating external services and APIs for automated processing of financial documents.",
            "Extracted and structured key information from business documents (reference numbers, dates, concepts, amounts and banks) for integration into internal systems.",
            "Implemented automated insertion, update and validation of records in SQL Server databases as part of data processing pipelines.",
            "Generated consolidated Excel reports organized by year and month to support audit and financial control processes.",
            "Designed a document automation architecture based on integration between .NET services and external APIs.",
            "Reduced manual operational workload in the accounting department through automated processing of repetitive tasks.",
            "Improved financial information traceability and reduced operational errors in administrative processes.",
          ],
        },
      ],
    },

    projects: {
      title: "Projects",
      items: [
        {
          title: "MarTree",
          description:
            "Customizable personal link management platform built with Next.js, React and MongoDB, designed to centralize online presence through a clean and modern interface.",
          github:
            "https://github.com/Johan-Campo/deploy_MarTree_frontend",
          demo:
            "https://johancampo-martree.netlify.app/",
          previewImage: "/project1-preview.png",
        },

        {
          title: "Estadero Parador Turístico",
          description:
            "Administrative web application built with ASP.NET Core MVC to manage branches, categories, and products through a secure panel with authentication using Identity. Deployed on Microsoft Azure using App Service and Azure SQL Database.",
          github:
            "",
          demo:
            "https://estadero-parador-arbyh6gdb0g3ceg7.canadacentral-01.azurewebsites.net/",
          previewImage: "/estadero-preview.png",
        },
      ],

      buildingMessage:
        "Currently expanding the portfolio with new backend-focused projects.",
    },

    education: {
      title: "Education",
      degree: "Electronic Engineering",
      university: "Universidad del Magdalena",
    },

    contact: {
      title: "Contact",
      heading: "Let's work together",
      description:
        "I'm open to opportunities where I can contribute to full-stack development, integrations or technical solutions with real impact.",
      email: "Email",
      phone: "Phone",
      location: "Location",
    },

    footer: {
      role: "Full-Stack Developer · C# / .NET",
    },

    technologies: {
      title: "Technologies",
    },
  },

  es: {
    nav: {
      about: "Acerca",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Educación",
      contact: "Contacto",
    },

    hero: {
      role: "Desarrollador Full-Stack",
      subtitle:
        "Desarrollador full-stack con enfoque en backend usando C# y .NET, con experiencia en la construcción de servicios, integración de plataformas y desarrollo de soluciones orientadas a procesos reales.",
      downloadCV: "Descargar CV",
      downloadCVSpanish: "Descargar CV (Español)",
      downloadCVEnglish: "Descargar CV (Inglés)",
      viewProjects: "Ver Proyectos",
    },

    about: {
      title: "Acerca",
      p1:
        "Desarrollador full-stack especializado en C#, .NET y ASP.NET Core, con experiencia en la construcción de servicios backend, APIs REST y aplicaciones web. También trabajo con tecnologías modernas de frontend como React y Next.js.",
      p2:
        "Mi formación en Ingeniería Electrónica ha fortalecido mi pensamiento analítico y mi comprensión de la lógica de sistemas, lo que influye en la forma en que diseño y estructuro soluciones de software.",
      p3:
        "Disfruto trabajar tanto en backend como en frontend, construyendo aplicaciones mantenibles y fortaleciendo continuamente mis habilidades en desarrollo moderno y diseño de sistemas.",
    },
    skills: {
      title: "Habilidades",
      categories: {
        backend: "Desarrollo Backend",
        frontend: "Desarrollo Frontend",
        automation: "Herramientas e Integración",
        databases: "Bases de Datos",
        soft: "Habilidades Blandas",
      },
      softSkills: [
        "Resolución de Problemas",
        "Pensamiento Analítico",
        "Comunicación Clara",
      ],
    },

    experience: {
      title: "Experiencia",
      jobs: [
        {
          title: "Desarrollador Full-Stack",
          company: "A13AGENCY",
          location: "Santa Marta, Colombia",
          period: "Febrero 2026 – Presente",
          responsibilities: [
            "Desarrollo de plataforma SaaS de menú digital interactivo para el sector de restaurantes y hospitalidad, construida desde cero con stack moderno.",
            "Implementación de panel de administración con Next.js 15 y MongoDB mediante Prisma ORM, con CRUD completo, reordenamiento drag & drop y gestión de contenido dinámico.",
            "Desarrollo de comunicación en tiempo real multiplataforma combinando Pusher Channels y BroadcastChannel API para sincronización de pedidos y estado de mesas entre dispositivos.",
            "Desarrollo de CMS headless y API REST con autenticación segura por sesiones, soporte bilingüe (ES/EN) y arquitectura multi-cliente reutilizable con configuración centralizada.",
            "Integración de módulos de síntesis de voz (TTS) e inteligencia artificial para recomendaciones de productos dentro del menú del cliente.",
            "Gestión del ciclo de vida completo de pedidos: carrito, envío a cocina, facturación con impuestos y múltiples métodos de pago.",
          ],
        },
        {
          title: "Desarrollador Full-Stack",
          company: "WantDigital S.A.S",
          location: "Bogotá, Colombia",
          period: "Febrero 2025 – Octubre 2025",
          responsibilities: [
            "Diseñé e implementé soluciones backend con C# y .NET para sistemas administrativos empresariales enfocados en gestión documental y contable.",
            "Desarrollé flujos de procesamiento de datos integrando servicios externos y APIs para el procesamiento automatizado de comprobantes financieros.",
            "Extraje y estructuré información clave desde documentos empresariales (número de soporte, fecha, concepto, valor y entidad bancaria) para su integración en sistemas internos.",
            "Implementé procesos automáticos de inserción, actualización y validación de registros en bases de datos SQL Server como parte de pipelines de procesamiento de datos.",
            "Generé reportes consolidados en Excel organizados por año y mes, optimizados para procesos internos y auditoría contable.",
            "Diseñé una arquitectura de automatización documental basada en la integración entre servicios .NET y APIs externas.",
            "Reduje significativamente la carga operativa manual del área contable mediante la automatización de tareas repetitivas.",
            "Mejoré la trazabilidad de la información financiera y reduje errores operativos en los procesos administrativos.",
          ],
        },
      ],
    },

    projects: {
      title: "Proyectos",
      items: [
        {
          title: "MarTree",
          description:
            "Plataforma personalizable de gestión de enlaces construida con Next.js, React y MongoDB, diseñada para centralizar la presencia digital mediante una interfaz limpia y moderna.",
          github:
            "https://github.com/Johan-Campo/deploy_MarTree_frontend",
          demo:
            "https://johancampo-martree.netlify.app/",
          previewImage: "/project1-preview.png",
        },

        {
          title: "Estadero Parador Turístico",
          description:
            "Aplicación web administrativa desarrollada con ASP.NET Core MVC para gestionar sucursales, categorías y productos mediante un panel con autenticación segura usando Identity. Desplegada en Microsoft Azure con App Service y Azure SQL Database.",
          github:
            "",
          demo:
            "https://estadero-parador-arbyh6gdb0g3ceg7.canadacentral-01.azurewebsites.net/",
          previewImage: "/estadero-preview.png",
        },
      ],

      buildingMessage:
        "Actualmente ampliando el portafolio con nuevos proyectos orientados a backend.",
    },

    education: {
      title: "Educación",
      degree: "Ingeniería Electrónica",
      university: "Universidad del Magdalena",
    },

    contact: {
      title: "Contacto",
      heading: "Trabajemos juntos",
      description:
        "Estoy abierto a oportunidades donde pueda aportar en desarrollo full-stack, integraciones o soluciones técnicas con impacto real.",
      email: "Correo",
      phone: "Teléfono",
      location: "Ubicación",
    },

    footer: {
      role: "Desarrollador Full-Stack",
    },

    technologies: {
      title: "Tecnologías",
    },
  },
}

export type Language = "en" | "es"
export type Translations = typeof translations.en