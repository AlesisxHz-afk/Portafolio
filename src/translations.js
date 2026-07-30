export const translations = {
  es: {
    nav: {
      home: "Inicio",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      certificates: "Certificados"
    },
    hero: {
      role: "Desarrollador Full Stack",
      experience: "Tengo 6 meses de experiencia en desarrollo fullstack, construyendo aplicaciones web sencillas, robustas y de alto rendimiento.",
      cv: "Descargar CV"
    },
    sections: {
      skills: "Habilidades",
      experience: "Experiencia Laboral",
      projects: "Proyectos",
      certificates: "Certificaciones"
    },
    experience: [
      {
        role: "Full Stack Developer (Practicante Pre Profesional)",
        company: "Dicta Colombia",
        period: "Diciembre 2025 - Abril 2026",
        bullets: [
          "Desarrollé funcionalidades para una plataforma web utilizando NestJS, Angular y Prisma, participando en la construcción de módulos para la gestión de información.",
          "Implementé reglas de negocio, validaciones e integración con la base de datos, garantizando la consistencia y confiabilidad de la información procesada."
        ],
        tech: ["NestJS", "Angular", "Prisma", "PostgreSQL", "TypeScript"]
      },
      {
        role: "Full Stack Developer",
        company: "Partner Tech",
        period: "Marzo 2026 - Junio 2026",
        bullets: [
          "Implementé funcionalidades para aplicaciones web utilizando Spring Boot, Angular y PostgreSQL, asegurando el cumplimiento de los requerimientos funcionales y técnicos del proyecto.",
          "Integré la comunicación entre el frontend, backend y la base de datos mediante APIs REST, optimizando el flujo de información y el rendimiento de la aplicación."
        ],
        tech: ["Spring Boot", "Angular", "PostgreSQL", "Java", "REST API"]
      }
    ],
    projects: [
      {
        title: "Sistema de Distribución de Productos",
        company: "Agrícola Alaya S.A.C",
        description: "Plataforma web inteligente basada en Machine Learning y Flask para optimizar la planificación de stock, la distribución a almacenes y la logística de rutas de transporte de productos hortofrutícolas.",
        featuresTitle: "Características Clave",
        features: [
          "📈 Predicción de Stock: Estimación dinámica de demanda hortofrutícola.",
          "🏢 Distribución: Asignación óptima de envíos por capacidad.",
          "🗺️ Rutas inteligentes: Cálculo de riesgos considerando humedad y temperatura.",
          "🎨 Interfaz Moderna: Panel responsive con fondo dinámico."
        ],
        techTitle: "Tecnologías Clave",
        techDetails: "Python (Flask), PostgreSQL, Scikit-Learn (ML), HTML5/CSS3, JavaScript (ES6).",
        githubUrl: "https://github.com/AlesisxHz-afk/TesisDistribucionProductos",
        codeButton: "Código"
      },
      {
        title: "Aplicación Sordo (Reconocimiento de Lenguaje de Señas)",
        company: "Aplicación Móvil Android",
        description: "Aplicación móvil Android para la captura, entrenamiento y reconocimiento en tiempo real de gestos en lenguaje de señas mediante la cámara del dispositivo.",
        featuresTitle: "Características Clave",
        features: [
          "🔐 Autenticación de Usuarios: Registro e inicio de sesión con almacenamiento remoto en PostgreSQL y hash SHA-256.",
          "📷 Captura en Tiempo Real: Visualización y procesamiento de video con Android CameraX (cámara frontal y trasera).",
          "🤖 Modelo de Señas Local: Registro de muestras vectoriales de gestos y clasificación local basada en similitud de características.",
          "💾 Gestión de Sesión: Persistencia de estado de usuario con SharedPreferences."
        ],
        techTitle: "Tecnologías Clave",
        techDetails: "Java, Android CameraX, PostgreSQL (JDBC), SharedPreferences, Android Studio (Min SDK 26, Target SDK 36).",
        githubUrl: "https://github.com/AlesisxHz-afk/AplicacionSordo",
        codeButton: "Código"
      }
    ],
    certificates: [
      {
        title: "Gestión de Proyectos basado en el PMBOK® 7ma Edición",
        issuer: "Colegio de Ingenieros del Perú & Netcram Consultores",
        date: "Emisión: 09/02/2026",
        hours: "120 horas académicas",
        grade: "Promedio: 20/20",
        fileUrl: "/certificados/366.pdf",
        viewButton: "Ver Certificado"
      },
      {
        title: "Gestión de Seguridad de Procesos basada en Riesgos (RBPS)",
        issuer: "Colegio de Ingenieros del Perú & IED Stratton & CD Pasco",
        date: "Emisión: 11/02/2026",
        hours: "120 horas académicas",
        grade: "Nota: 20/20",
        fileUrl: "/certificados/47.pdf",
        viewButton: "Ver Certificado"
      }
    ],
    themes: {
      cyberpunk: "Ciberpunk",
      emerald: "Esmeralda",
      ocean: "Océano",
      sunset: "Atardecer",
      light: "Modo Claro"
    }
  },
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      certificates: "Certificates"
    },
    hero: {
      role: "Full Stack Developer",
      experience: "I have 6 months of experience in fullstack development, building simple, robust, and high-performance web applications.",
      cv: "Download CV"
    },
    sections: {
      skills: "Skills",
      experience: "Work Experience",
      projects: "Projects",
      certificates: "Certifications"
    },
    experience: [
      {
        role: "Full Stack Developer (Pre-Professional Intern)",
        company: "Dicta Colombia",
        period: "December 2025 - April 2026",
        bullets: [
          "Developed functionalities for a web platform using NestJS, Angular, and Prisma, participating in building modules for information management.",
          "Implemented business rules, validations, and database integrations, ensuring consistency and reliability of processed information."
        ],
        tech: ["NestJS", "Angular", "Prisma", "PostgreSQL", "TypeScript"]
      },
      {
        role: "Full Stack Developer",
        company: "Partner Tech",
        period: "March 2026 - June 2026",
        bullets: [
          "Implemented features for web applications using Spring Boot, Angular, and PostgreSQL, ensuring compliance with functional and technical project requirements.",
          "Integrated communication between frontend, backend, and database via REST APIs, optimizing information flow and application performance."
        ],
        tech: ["Spring Boot", "Angular", "PostgreSQL", "Java", "REST API"]
      }
    ],
    projects: [
      {
        title: "Product Distribution System",
        company: "Agrícola Alaya S.A.C",
        description: "Intelligent web platform based on Machine Learning and Flask to optimize stock planning, distribution to warehouses, and transport route logistics for fruit and vegetable products.",
        featuresTitle: "Key Features",
        features: [
          "📈 Stock Prediction: Dynamic demand forecasting.",
          "🏢 Distribution: Optimal capacity-based allocation.",
          "🗺️ Intelligent Routes: Transport risk calculations.",
          "🎨 Modern UI: Responsive layout with dynamic background."
        ],
        techTitle: "Key Tech",
        techDetails: "Python (Flask), PostgreSQL, Scikit-Learn (ML), HTML5/CSS3, JavaScript (ES6).",
        githubUrl: "https://github.com/AlesisxHz-afk/TesisDistribucionProductos",
        codeButton: "Code"
      },
      {
        title: "Deaf App (Sign Language Recognition)",
        company: "Android Mobile App",
        description: "Android mobile application for real-time capture, training, and recognition of sign language gestures using the device camera.",
        featuresTitle: "Key Features",
        features: [
          "🔐 User Authentication: Registration and login with remote PostgreSQL storage and SHA-256 hashing.",
          "📷 Real-Time Capture: Video visualization and processing using Android CameraX (front and rear camera support).",
          "🤖 Local Sign Model: Vector sample recording of gestures and local classification based on feature similarity.",
          "💾 Session Management: User state persistence with SharedPreferences."
        ],
        techTitle: "Key Tech",
        techDetails: "Java, Android CameraX, PostgreSQL (JDBC), SharedPreferences, Android Studio (Min SDK 26, Target SDK 36).",
        githubUrl: "https://github.com/AlesisxHz-afk/AplicacionSordo",
        codeButton: "Code"
      }
    ],
    certificates: [
      {
        title: "Project Management based on PMBOK® 7th Edition",
        issuer: "Colegio de Ingenieros del Perú & Netcram Consultores",
        date: "Issued: 09/02/2026",
        hours: "120 academic hours",
        grade: "GPA: 20/20",
        fileUrl: "/certificados/366.pdf",
        viewButton: "View Certificate"
      },
      {
        title: "Risk Based Process Safety (RBPS) Management",
        issuer: "Colegio de Ingenieros del Perú & IED Stratton",
        date: "Issued: 11/02/2026",
        hours: "120 academic hours",
        grade: "GPA: 20/20",
        fileUrl: "/certificados/47.pdf",
        viewButton: "View Certificate"
      }
    ],
    themes: {
      cyberpunk: "Cyberpunk",
      emerald: "Emerald",
      ocean: "Ocean",
      sunset: "Sunset",
      light: "Light Mode"
    }
  }
};
