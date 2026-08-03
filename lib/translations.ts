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
      roles: ["Software Engineer", "Backend Developer", "Full-Stack Developer"],
      subtitle:
        "Backend-focused software developer building robust APIs and full-stack apps with Node.js, .NET and React.",
      downloadCV: "Download CV",
      downloadCVSpanish: "Download CV (Spanish)",
      downloadCVEnglish: "Download CV (English)",
      viewProjects: "View Projects",
    },

    about: {
      title: "About",
      p1:
        "Software developer with over 1 year of experience building web applications and enterprise solutions, with a primary focus on backend using Node.js and .NET. I focus on writing clean, maintainable code oriented to generate real impact.",
      p3:
        "I specialize in designing and implementing robust APIs with Express.js, Next.js and ASP.NET Core, applying layered architecture and design patterns over SQL and NoSQL databases like SQL Server, MySQL and MongoDB. With practical experience in frontend development with React and Next.js for full-stack solutions.",
    },

    skills: {
      title: "Skills",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        databases: "Databases",
        architecture: "Architecture & Integration",
        tools: "Tools & Cloud",
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
      showMore: "Show more",
      showLess: "Show less",
      jobs: [
        {
          title: "Software Developer",
          company: "Cámara de Representantes – Unidad de Trabajo Legislativo",
          location: "Bogotá, Colombia",
          period: "December 2023 – June 2026",
          responsibilities: [
            "Modernized the office's institutional website, migrating a static HTML implementation to a Single Page Application (SPA) built with React and TypeScript, cutting load time from ~4s to ~1.5s and streamlining content publishing for citizens.",
            "Designed and built a citizen request tracking platform (PQR) with React, Node.js, Express and MySQL, including status traceability, automated email notifications via Nodemailer and a REST API connecting frontend and backend.",
            "Developed a document management, correspondence and asset inventory system that replaced manual Excel-based workflows with digital flows featuring ownership control, movement history and full administrative traceability.",
            "Built operational dashboards in React backed by optimized MySQL queries, consolidating metrics on citizen requests, legislative project tracking, office agenda and inventory to support decision-making.",
            "Automated internal processes with cron-scheduled Node.js scripts for periodic backups, report generation and data updates supporting the office's administrative and legislative workflows.",
            "Managed the development lifecycle with Git and provided technical support to the office, coordinating with the House of Representatives' IT department on incidents and integrations with institutional tools such as Kactus, corporate email, VPN and other administrative platforms.",
          ],
        },
        {
          title: "Software Engineer & AI Integration (Freelance)",
          company: "A13 Agency",
          location: "Santa Marta, Colombia",
          period: "May 2026 – August 2026",
          responsibilities: [
            "Designed and implemented 25+ REST endpoints with Node.js and Next.js App Router: input validation, error handling, server-side authorization via NextAuth.js (JWT) and resource ownership check by businessId on every sensitive operation across a fully isolated multi-tenant architecture.",
            "Modeled the database schema in MongoDB via Prisma ORM with 15+ interrelated entities, migrated to multi-tenant in production without downtime, and implemented complete per-client data isolation at API and database level with ownership validation on every mutation.",
            "Solved cross-device state synchronization with Pusher Channels and BroadcastChannel API, eliminating polling: real-time KDS with bidirectional events, delivery tracking across 4 states, atomic stock decrement ($inc) and state recovery from database on session loss.",
            "Extended the platform with an image processing pipeline (sharp → WebP → iterative compression ≤200KB → Cloudflare R2 via S3 protocol), dynamic tax engine per product (VAT/consumption tax), electronic invoicing with full financial snapshot, and Claude API + ElevenLabs TTS integration.",
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
            "Link management platform on a decoupled architecture — Express REST API backed by MongoDB and React + TypeScript on the frontend. Chose JWT with refresh token rotation for stateless auth, with custom middleware enforcing route protection and hashed credentials. Drag & drop reordering, dynamic per-username routes, real-time profile preview and Cloudinary image uploads. Server state managed with TanStack Query for cache invalidation on mutations. Deployed to Netlify and Render.",
          github:
            "https://github.com/Johan-Campo/deploy_MarTree_frontend",
          demo:
            "https://johancampo-martree.netlify.app/",
          previewImage: "/martree-preview.webp",
          highlights: ["JWT + refresh tokens", "Drag & drop UI", "Real-time preview"],
        },

        {
          title: "Ceyrus Joyería — E-commerce & Admin Dashboard",
          description:
            "E-commerce storefront and back-office for a jewelry boutique, built on Next.js 16 App Router with route groups separating the public store, auth flows and admin panel under a single codebase. Supabase as the backend — Postgres with RLS for products, orders and analytics, and Supabase Auth for customer accounts and admin roles. Online payment integration with Wompi (Colombian gateway): SHA256 integrity signature generation, checkout redirect and webhook for automatic order confirmation. The dashboard tracks product views and cart events with Recharts. Bilingual (ES/EN) storefront, dynamic sitemap, OpenGraph/JSON-LD metadata, and custom SMTP with transactional email templates. Deployed to Vercel.",
          demo:
            "https://e-commerce-ceyrus.vercel.app/",
          previewImage: "/ceyrus-preview.webp",
          highlights: ["RLS + role-based auth", "Wompi payments", "Analytics dashboard"],
        },

        {
          title: "MiniVend — POS & Inventory System",
          description:
            "POS and inventory management system in PHP with MVC pattern, built for businesses running multiple cash registers simultaneously. Chose server-side PDF generation with FPDF to produce invoices and thermal tickets without runtime dependencies on external services. Barcode-based product lookup, atomic per-sale stock deduction, per-till cash balance tracking and bcrypt-protected sessions. Containerized with Docker and deployed to Render with MySQL on Aiven.",
          github:
            "https://github.com/Johan-Campo/POS-PHP",
          demo:
            "https://pos-php.onrender.com/",
          previewImage: "/minivend-preview.webp",
          highlights: ["Multi-register POS", "Server-side PDF", "Dockerized"],
        },

        {
          title: "Estadero Parador Turístico",
          description:
            "Restaurant management system for a live business, built on ASP.NET Core MVC. Modeled the order lifecycle as a directional state machine (Pending → In Preparation → Ready → Delivered), applied role-based access control to separate Admin and Waiter responsibilities, and automated image cleanup on the server to prevent storage drift. AJAX-driven dashboards provide real-time order status without full page reloads. Authenticated with ASP.NET Core Identity, shipped to Azure via CI/CD with GitHub Actions.",
          github:
            "https://github.com/Johan-Campo/Restaurante-parador",
          demo:
            "https://estadero-parador-arbyh6gdb0g3ceg7.canadacentral-01.azurewebsites.net/",
          previewImage: "/estadero-logo.svg",
          highlights: ["Order state machine", "Role-based access", "CI/CD to Azure"],
        },
      ],

      buildingMessage:
        "Currently expanding the portfolio with new backend-focused projects.",
    },

    education: {
      title: "Education",
      degree: "Systems Engineering",
      university: "Universidad Nacional Abierta y a Distancia (UNAD)",
    },

    contact: {
      title: "Contact",
      heading: "Let's work together",
      description:
        "I'm open to opportunities where I can contribute to backend development, API design or technical solutions with real impact.",
      email: "Email",
      phone: "Phone",
      location: "Location",
    },

    footer: {
      role: "Software Developer · Node.js · .NET",
    },

    technologies: {
      title: "Technologies",
    },
    stats: {
      years: "Years of Experience",
      projects: "Projects Completed",
      technologies: "Technologies",
      apis: "APIs Built",
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
      roles: ["Software Engineer", "Desarrollador Backend", "Desarrollador Full-Stack"],
      subtitle:
        "Desarrollador de software enfocado en backend, construyendo APIs robustas y aplicaciones full-stack con Node.js, .NET y React.",
      downloadCV: "Descargar CV",
      downloadCVSpanish: "Descargar CV (Español)",
      downloadCVEnglish: "Descargar CV (Inglés)",
      viewProjects: "Ver Proyectos",
    },

    about: {
      title: "Acerca",
      p1:
        "Desarrollador de software con más de 1 año de experiencia construyendo aplicaciones web y soluciones empresariales, con enfoque principal en backend usando Node.js y .NET. Me enfoco en escribir código limpio y mantenible orientado a generar impacto real.",
      p3:
        "Me especializo en diseñar e implementar APIs robustas con Express.js, Next.js y ASP.NET Core, aplicando arquitectura en capas y patrones de diseño sobre bases de datos SQL y NoSQL como SQL Server, MySQL y MongoDB. Con experiencia práctica en desarrollo frontend con React y Next.js para soluciones full-stack.",
    },

    skills: {
      title: "Habilidades",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        databases: "Bases de Datos",
        architecture: "Arquitectura e Integración",
        tools: "Herramientas & Cloud",
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
      showMore: "Ver más",
      showLess: "Ver menos",
      jobs: [
        {
          title: "Software Developer",
          company: "Cámara de Representantes – Unidad de Trabajo Legislativo",
          location: "Bogotá, Colombia",
          period: "Diciembre 2023 – Junio 2026",
          responsibilities: [
            "Modernicé el sitio web institucional del despacho migrando una implementación basada en HTML estático hacia una Single Page Application (SPA) desarrollada con React y TypeScript, reduciendo el tiempo de carga de aproximadamente 4 segundos a 1.5 segundos y facilitando la publicación y actualización de contenidos para la ciudadanía.",
            "Diseñé e implementé una plataforma para la gestión y seguimiento de solicitudes ciudadanas (PQR) utilizando React, Node.js, Express y MySQL, incorporando trazabilidad de estados, notificaciones automáticas mediante Nodemailer y una API REST para la comunicación entre frontend y backend.",
            "Desarrollé un sistema de gestión documental, correspondencia e inventario de activos que reemplazó procesos manuales en Excel por flujos digitales con control de responsables, historial de movimientos y trazabilidad de la información administrativa.",
            "Construí herramientas y dashboards operativos en React, alimentados mediante consultas optimizadas en MySQL, consolidando indicadores relacionados con solicitudes ciudadanas, seguimiento de proyectos legislativos, agenda del despacho e inventario para apoyar la toma de decisiones.",
            "Automaticé procesos internos mediante scripts en Node.js programados con cron, orientados a respaldos periódicos, generación de reportes y actualización de información utilizada en los procesos administrativos y legislativos del despacho.",
            "Gestioné el ciclo de desarrollo mediante Git y brindé soporte tecnológico al despacho, coordinando con el área de Sistemas de la Cámara la atención de incidencias e integraciones relacionadas con herramientas institucionales como Kactus, correo corporativo, VPN y otras plataformas administrativas.",
          ],
        },
        {
          title: "Ingeniero de Software e Integración de IA (Freelance)",
          company: "A13 Agency",
          location: "Santa Marta, Colombia",
          period: "Mayo 2026 – Agosto 2026",
          responsibilities: [
            "Diseñé e implementé 25+ endpoints REST con Node.js y Next.js App Router: validación de entrada, manejo de errores, autorización server-side vía NextAuth.js (JWT) y verificación de propiedad del recurso por businessId en cada operación sensible dentro de una arquitectura multi-tenant completamente aislada.",
            "Modelé el esquema de base de datos en MongoDB vía Prisma ORM con 15+ entidades interrelacionadas, migré a multi-tenant en producción sin downtime e implementé aislamiento completo de datos por cliente a nivel de API y base de datos con validación de propiedad en cada mutación.",
            "Resolví la sincronización de estado entre dispositivos con Pusher Channels y BroadcastChannel API, eliminando el polling: KDS en tiempo real con eventos bidireccionales, seguimiento de entregas en 4 estados, decremento atómico de stock ($inc) y recuperación de estado desde base de datos ante pérdida de sesión.",
            "Extendí la plataforma con un pipeline de procesamiento de imágenes (sharp → WebP → compresión iterativa ≤200KB → Cloudflare R2 vía protocolo S3), motor de impuestos dinámico por producto (IVA/impuesto al consumo), facturación electrónica con snapshot financiero completo e integración de Claude API + ElevenLabs TTS.",
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
            "Plataforma de gestión de enlaces sobre arquitectura desacoplada — API REST con Express y MongoDB en el backend, React + TypeScript en el frontend. Elegí JWT con rotación de refresh tokens para autenticación stateless, con middleware personalizado para protección de rutas y credenciales hasheadas. Reordenamiento con drag & drop, rutas dinámicas por usuario, vista previa de perfil en tiempo real y carga de imágenes con Cloudinary. Estado del servidor gestionado con TanStack Query para invalidación de caché en mutaciones. Desplegado en Netlify y Render.",
          github:
            "https://github.com/Johan-Campo/deploy_MarTree_frontend",
          demo:
            "https://johancampo-martree.netlify.app/",
          previewImage: "/martree-preview.webp",
          highlights: ["JWT + refresh tokens", "Drag & drop UI", "Vista previa en tiempo real"],
        },

        {
          title: "Ceyrus Joyería — E-commerce y Panel de Administración",
          description:
            "Tienda en línea y back-office para una joyería, construido sobre Next.js 16 App Router con grupos de rutas que separan la tienda pública, los flujos de autenticación y el panel de administración dentro de un mismo código base. Supabase como backend — Postgres con RLS para productos, pedidos y analítica, y Supabase Auth para cuentas de clientes y roles de administrador. Integración de pagos online con Wompi (pasarela colombiana): generación de firma de integridad SHA256, redirect al checkout y webhook para confirmación automática de pedidos. El panel rastrea vistas de productos y eventos de carrito con Recharts. Tienda bilingüe (ES/EN), sitemap dinámico, metadata OpenGraph/JSON-LD y SMTP personalizado con plantillas de email transaccional. Desplegado en Vercel.",
          demo:
            "https://e-commerce-ceyrus.vercel.app/",
          previewImage: "/ceyrus-preview.webp",
          highlights: ["RLS + roles de auth", "Pagos con Wompi", "Dashboard de analítica"],
        },

        {
          title: "MiniVend — Sistema POS e Inventario",
          description:
            "Sistema POS y de gestión de inventario en PHP con patrón MVC, construido para negocios que operan múltiples cajas registradoras en simultáneo. Elegí generación de PDF server-side con FPDF para producir facturas y tickets térmicos sin depender de servicios externos en tiempo de ejecución. Búsqueda de productos por código de barras, descuento atómico de stock por venta, seguimiento de saldo por caja y sesiones protegidas con bcrypt. Containerizado con Docker y desplegado en Render con MySQL en Aiven.",
          github:
            "https://github.com/Johan-Campo/POS-PHP",
          demo:
            "https://pos-php.onrender.com/",
          previewImage: "/minivend-preview.webp",
          highlights: ["POS multi-caja", "PDF server-side", "Dockerizado"],
        },

        {
          title: "Estadero Parador Turístico",
          description:
            "Sistema de gestión para un restaurante real, construido con ASP.NET Core MVC. Modelé el ciclo de vida de pedidos como máquina de estados direccional (Pendiente → En Preparación → Listo → Entregado), apliqué control de acceso por roles para separar responsabilidades de Admin y Mesero, y automaticé la limpieza de imágenes en el servidor para evitar acumulación en almacenamiento. Dashboards con AJAX proveen estado de pedidos en tiempo real sin recargas completas. Autenticación con ASP.NET Core Identity, desplegado en Azure mediante CI/CD con GitHub Actions.",
          github:
            "https://github.com/Johan-Campo/Restaurante-parador",
          demo:
            "https://estadero-parador-arbyh6gdb0g3ceg7.canadacentral-01.azurewebsites.net/",
          previewImage: "/estadero-logo.svg",
          highlights: ["Máquina de estados", "Acceso por roles", "CI/CD a Azure"],
        },
      ],

      buildingMessage:
        "Actualmente ampliando el portafolio con nuevos proyectos orientados a backend.",
    },

    education: {
      title: "Educación",
      degree: "Ingeniería de Sistemas",
      university: "Universidad Nacional Abierta y a Distancia (UNAD)",
    },

    contact: {
      title: "Contacto",
      heading: "Trabajemos juntos",
      description:
        "Estoy abierto a oportunidades donde pueda aportar en desarrollo backend, diseño de APIs o soluciones técnicas con impacto real.",
      email: "Correo",
      phone: "Teléfono",
      location: "Ubicación",
    },

    footer: {
      role: "Desarrollador de Software · Node.js · .NET",
    },

    technologies: {
      title: "Tecnologías",
    },
    stats: {
      years: "Años de Experiencia",
      projects: "Proyectos Completados",
      technologies: "Tecnologías",
      apis: "APIs Construidas",
    },
  },
}

export type Language = "en" | "es"
export type Translations = typeof translations.en
