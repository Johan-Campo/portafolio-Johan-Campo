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
      roles: ["AI Software Engineer", "Full-Stack Developer", "Backend Developer"],
      subtitle:
        "Backend-focused engineer building AI-powered SaaS platforms and robust APIs with Node.js, Next.js and React.",
      downloadCV: "Download CV",
      downloadCVSpanish: "Download CV (Spanish)",
      downloadCVEnglish: "Download CV (English)",
      viewProjects: "View Projects",
    },

    about: {
      title: "About",
      p1:
        "Software engineer with 2+ years of experience building web applications, APIs and enterprise platforms for both public and private sector clients. I focus on internal systems, multi-tenant SaaS platforms and AI integrations, writing clean, maintainable code oriented toward real business impact.",
      p3:
        "I specialize in designing and shipping robust REST APIs with Node.js, Express.js and Next.js, applying layered architecture over MongoDB, MySQL and PostgreSQL with Prisma and Sequelize. I also work hands-on with real-time systems (WebSockets, Pusher Channels) and AI integrations (Claude API, OpenAI API), plus practical frontend experience with React and Next.js for complete full-stack solutions.",
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
          title: "Software Developer & AI Integration",
          company: "A13 Agency",
          location: "Santa Marta, Colombia",
          period: "May 2026 – Present",
          responsibilities: [
            "Built the backend for Mesero IA, a production multi-tenant SaaS platform, using Node.js, Next.js and MongoDB via Prisma ORM — shipping 25+ REST endpoints with complete per-client data isolation and JWT/NextAuth.js authorization.",
            "Solved real-time cross-device state sync with Pusher Channels and the BroadcastChannel API, keeping the Kitchen Display System consistent through bidirectional events, 4-stage delivery tracking and atomic stock decrements.",
            "Architected the application around a layered Controller-Service-Repository pattern with a microservices mindset, backed by Jest test coverage, Dockerized environments and GitHub Actions CI/CD pipelines under Scrum.",
          ],
        },
        {
          title: "Software Developer & Automation",
          company: "Cámara de Representantes – Unidad de Trabajo Legislativo",
          location: "Bogotá, Colombia",
          period: "December 2023 – June 2026",
          responsibilities: [
            "Led the institutional website's technology overhaul, migrating it from PHP to Next.js with React and TypeScript on a headless CMS — cutting Time-to-Interactive by 60% (from ~4s to ~1.5s) and enabling staff to publish content independently.",
            "Spearheaded the full digitization of document management, correspondence and asset inventory, replacing spreadsheet-based workflows with a version-controlled (Git) platform that established clear administrative traceability and ownership.",
            "Designed an omnichannel citizen request (PQR) platform with automated workflows, proactive Nodemailer notifications and a Node.js + Express REST API secured with JWT, giving full traceability from intake to resolution.",
            "Automated backups, reporting and data synchronization with Node.js and cron jobs, cutting manual intervention by 80%, while managing the codebase with Git (GitFlow) and coordinating integrations with institutional tools like Kactus and VPN.",
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
      role: "Software Engineer · Node.js · AI Integrations",
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
      roles: ["Ingeniero de Software IA", "Desarrollador Full-Stack", "Desarrollador Backend"],
      subtitle:
        "Ingeniero de software enfocado en backend, construyendo plataformas SaaS con IA y APIs robustas con Node.js, Next.js y React.",
      downloadCV: "Descargar CV",
      downloadCVSpanish: "Descargar CV (Español)",
      downloadCVEnglish: "Descargar CV (Inglés)",
      viewProjects: "Ver Proyectos",
    },

    about: {
      title: "Acerca",
      p1:
        "Ingeniero de software con más de 2 años de experiencia construyendo aplicaciones web, APIs y plataformas empresariales para clientes de los sectores público y privado. Me enfoco en sistemas internos, plataformas SaaS multi-tenant e integraciones de IA, escribiendo código limpio y mantenible orientado a generar impacto real en el negocio.",
      p3:
        "Me especializo en diseñar e implementar APIs REST robustas con Node.js, Express.js y Next.js, aplicando arquitectura en capas sobre MongoDB, MySQL y PostgreSQL con Prisma y Sequelize. También trabajo con sistemas en tiempo real (WebSockets, Pusher Channels) e integraciones de IA (Claude API, OpenAI API), además de experiencia práctica en frontend con React y Next.js para soluciones full-stack completas.",
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
          title: "Software Developer & AI Integration",
          company: "A13 Agency",
          location: "Santa Marta, Colombia",
          period: "Mayo 2026 – Actualidad",
          responsibilities: [
            "Construí el backend de Mesero IA, una plataforma SaaS multi-tenant en producción, con Node.js, Next.js y MongoDB vía Prisma ORM — entregando más de 25 endpoints REST con aislamiento completo de datos por cliente y autorización JWT/NextAuth.js.",
            "Resolví la sincronización de estado en tiempo real entre dispositivos con Pusher Channels y la BroadcastChannel API, manteniendo la consistencia del Kitchen Display System mediante eventos bidireccionales, seguimiento de domicilios en 4 estados y descuentos atómicos de stock.",
            "Diseñé la arquitectura de la aplicación con el patrón en capas Controller-Service-Repository y enfoque de microservicios, respaldada por pruebas con Jest, entornos Dockerizados y pipelines CI/CD con GitHub Actions bajo metodología Scrum.",
          ],
        },
        {
          title: "Software Developer & Automation",
          company: "Cámara de Representantes – Unidad de Trabajo Legislativo",
          location: "Bogotá, Colombia",
          period: "Diciembre 2023 – Junio 2026",
          responsibilities: [
            "Lideré la reconversión tecnológica del sitio web institucional, migrándolo de PHP a Next.js con React y TypeScript sobre un CMS headless — reduciendo el Time-to-Interactive en un 60% (de ~4s a ~1.5s) y permitiendo que el equipo publicara contenido de forma autónoma.",
            "Impulsé la digitalización integral de la gestión documental, correspondencia e inventario de activos, reemplazando flujos basados en hojas de cálculo por una plataforma con control de versiones (Git) que estableció trazabilidad administrativa y responsabilidades claras.",
            "Diseñé una plataforma omnicanal de solicitudes ciudadanas (PQR) con workflows automatizados, notificaciones proactivas vía Nodemailer y una API REST en Node.js + Express asegurada con JWT, garantizando trazabilidad completa desde el ingreso hasta la resolución.",
            "Automaticé respaldos, reportes y sincronización de datos con Node.js y cron jobs, reduciendo la intervención manual en un 80%, gestionando el código con Git (GitFlow) y coordinando integraciones con herramientas institucionales como Kactus y VPN.",
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
      role: "Ingeniero de Software · Node.js · Integraciones de IA",
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
