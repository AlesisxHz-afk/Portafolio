export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos"
    },
    hero: {
      greeting: "Hola, Soy Alejandro Purizaca",
      role: "Ingeniero en sistemas y computacion",
      experience: "Tengo 6 meses de experiencia en desarrollo fullstack, construyendo aplicaciones web sencillas, robustas y de alto rendimiento.",
      cv: "Descargar CV"
    },
    about: {
      title: "Sobre mí",
      description: "¡Hola! Soy Alejandro Purizaca, Bachiller en Ingeniería de Sistemas y Computación y desarrollador de software. Me especializo en el desarrollo Full Stack con Laravel, Vue.js, APIs REST y SQL. Me apasiona aprender, resolver problemas y crear soluciones web eficientes mientras sigo creciendo profesionalmente."
    },
    sections: {
      aboutSkills: "Perfil & Conocimientos",
      about: "Sobre mí",
      skills: "Habilidades",
      experience: "Experiencia Laboral",
      projects: "Proyectos Destacados"
    },
    skillsCategories: {
      frameworks: "Frameworks & Librerías",
      languages: "Lenguajes de Programación",
      databases: "Bases de Datos"
    },
    experience: {
      role: "Full Stack Developer",
      company: "Partner Tech",
      period: "Marzo 2026 - Julio 2026",
      bullets: [
        "Desarrollé módulos web con Laravel y Vue.js, implementando interfaces para el registro, consulta y actualización de información.",
        "Implementé servicios REST en Laravel para gestionar operaciones CRUD y comunicación entre frontend y backend.",
        "Gestioné consultas SQL en MySQL y PostgreSQL para obtener, filtrar y relacionar información requerida por los módulos del sistema.",
        "Integré modelos, relaciones y validaciones en Laravel para asegurar la correcta aplicación de las reglas de negocio.",
        "Resolví incidencias en funcionalidades frontend y backend, identificando errores en la lógica, consultas y procesamiento de datos."
      ],
      technologiesTitle: "Tecnologías utilizadas:"
    },
    projects: [
      {
        id: "proj-1",
        title: "Sistema de Distribución de Productos",
        company: "Agrícola Alaya S.A.C",
        image: "/img/proyecto01.png",
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
        id: "proj-2",
        title: "Aplicación Sordo (Reconocimiento de Lenguaje de Señas)",
        company: "Aplicación Móvil Android",
        image: "/img/proyecto02.png",
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
      },
      {
        id: "proj-3",
        title: "Anime Quiz",
        company: "Aplicación Móvil & Web",
        image: "/img/proyecto03.png",
        description: "Plataforma interactiva multiplataforma de trivias y preguntas sobre anime que combina una aplicación móvil nativa en Android Studio (Java) con una aplicación web en React, respaldadas por una API REST de alto rendimiento en FastAPI (Python).",
        featuresTitle: "Características Clave",
        features: [
          "📱 App Móvil Nativa: Desarrollada en Android Studio con Java para una experiencia táctil fluida y optimizada.",
          "🌐 Cliente Web Moderno: Frontend responsivo e interactivo implementado con React para jugar desde cualquier navegador.",
          "⚡ Backend de Alto Rendimiento: API REST construida con FastAPI (Python) para la entrega dinámica de preguntas y cálculo de puntajes.",
          "🎮 Trivia Interactiva: Modos de juego cronometrados, categorización por dificultades y retroalimentación en tiempo real."
        ],
        techTitle: "Tecnologías Clave",
        techDetails: "Android Studio, Java, FastAPI (Python), React, JavaScript, REST APIs.",
        githubUrl: "https://github.com/AlesisxHz-afk/AnimeQuizMovil",
        githubLinks: [
          { label: "Móvil", url: "https://github.com/AlesisxHz-afk/AnimeQuizMovil" },
          { label: "Web", url: "https://github.com/AlesisxHz-afk/FrontendAnimeQuiz" },
          { label: "Backend", url: "https://github.com/AlesisxHz-afk/BackendAnimeQuiz" }
        ],
        codeButton: "Código"
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
      about: "About Me",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects"
    },
    hero: {
      greeting: "Hello, I'm Alejandro Purizaca",
      role: "Systems and Computer Engineer",
      experience: "I have 6 months of experience in fullstack development, building simple, robust, and high-performance web applications.",
      cv: "Download CV"
    },
    about: {
      title: "About Me",
      description: "Hello! I'm Alejandro Purizaca, Bachelor in Systems and Computer Engineering and software developer. I specialize in Full Stack development with Laravel, Vue.js, REST APIs, and SQL. I am passionate about learning, solving problems, and building efficient web solutions while continuing to grow professionally."
    },
    sections: {
      aboutSkills: "Profile & Skills",
      about: "About Me",
      skills: "Skills",
      experience: "Work Experience",
      projects: "Featured Projects"
    },
    skillsCategories: {
      frameworks: "Frameworks & Libraries",
      languages: "Programming Languages",
      databases: "Databases"
    },
    experience: {
      role: "Full Stack Developer",
      company: "Partner Tech",
      period: "March 2026 - July 2026",
      bullets: [
        "Developed web modules with Laravel and Vue.js, implementing interfaces for registering, querying, and updating information.",
        "Implemented REST services in Laravel to manage CRUD operations and communication between frontend and backend.",
        "Managed SQL queries in MySQL and PostgreSQL to retrieve, filter, and relate information required by system modules.",
        "Integrated models, relationships, and validations in Laravel to ensure strict application of business rules.",
        "Resolved issues in frontend and backend functionalities, identifying errors in logic, queries, and data processing."
      ],
      technologiesTitle: "Technologies used:"
    },
    projects: [
      {
        id: "proj-1",
        title: "Product Distribution System",
        company: "Agrícola Alaya S.A.C",
        image: "/img/proyecto01.png",
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
        id: "proj-2",
        title: "Deaf App (Sign Language Recognition)",
        company: "Android Mobile App",
        image: "/img/proyecto02.png",
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
      },
      {
        id: "proj-3",
        title: "Anime Quiz",
        company: "Mobile & Web Application",
        image: "/img/proyecto03.png",
        description: "Interactive cross-platform anime trivia application that pairs a native mobile experience developed in Android Studio (Java) with a web client in React, backed by a high-performance FastAPI (Python) REST backend.",
        featuresTitle: "Key Features",
        features: [
          "📱 Native Mobile App: Developed in Android Studio with Java for smooth, optimized mobile touch interactions.",
          "🌐 Modern Web Client: Interactive and responsive frontend built with React for playing quizzes directly from the browser.",
          "⚡ High-Performance Backend: REST API built with FastAPI (Python) to dynamically manage trivia questions and score processing.",
          "🎮 Trivia Gameplay: Timed rounds, difficulty levels, real-time question validation, and score tracking."
        ],
        techTitle: "Key Tech",
        techDetails: "Android Studio, Java, FastAPI (Python), React, JavaScript, REST APIs.",
        githubUrl: "https://github.com/AlesisxHz-afk/AnimeQuizMovil",
        githubLinks: [
          { label: "Mobile", url: "https://github.com/AlesisxHz-afk/AnimeQuizMovil" },
          { label: "Web", url: "https://github.com/AlesisxHz-afk/FrontendAnimeQuiz" },
          { label: "Backend", url: "https://github.com/AlesisxHz-afk/BackendAnimeQuiz" }
        ],
        codeButton: "Code"
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
