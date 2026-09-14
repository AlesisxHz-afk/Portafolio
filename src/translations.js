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
      experience: "Tengo 1 año de experiencia en desarrollo fullstack, construyendo aplicaciones web sencillas, robustas y de alto rendimiento.",
      cv: "Descargar CV"
    },
    about: {
      title: "Sobre mí",
      description: "¡Hola! Soy Alejandro Purizaca, Bachiller en Ingeniería de Sistemas y Computación con experiencia en desarrollo Full Stack. Manejo de Angular, NestJS, Spring Boot, PostgreSQL y MongoDB para el desarrollo de aplicaciones web, APIs REST y gestión de datos. Enfocado en resolver problemas y desarrollar soluciones eficientes.",
      highlights: [
        "Bachiller en Ing. de Sistemas y Computación",
        "Especializado en Angular, NestJS, Spring Boot, PostgreSQL & MongoDB",
        "Enfoque en resolver problemas y soluciones eficientes"
      ]
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
      role: "Desarrollador de Software Full Stack",
      company: "Dicta Colombia",
      period: "Septiembre 2025 - Febrero 2026",
      bullets: [
        "Desarrollé módulos web utilizando Angular y NestJS, implementando funcionalidades para el registro, consulta y actualización de información según los requerimientos del sistema.",
        "Implementé APIs REST para conectar el frontend con el backend, incorporando validaciones y lógica necesaria para el correcto funcionamiento de las funcionalidades desarrolladas.",
        "Trabajé con MongoDB para la consulta y gestión de información, realizando operaciones sobre los datos requeridos por los diferentes módulos de la aplicación."
      ],
      technologiesTitle: "Tecnologías utilizadas:"
    },
    experiences: [
      {
        id: "exp-1",
        role: "Desarrollador de Software Full Stack",
        company: "Dicta Colombia",
        period: "Septiembre 2025 - Febrero 2026",
        bullets: [
          "Desarrollé módulos web utilizando Angular y NestJS, implementando funcionalidades para el registro, consulta y actualización de información según los requerimientos del sistema.",
          "Implementé APIs REST para conectar el frontend con el backend, incorporando validaciones y lógica necesaria para el correcto funcionamiento de las funcionalidades desarrolladas.",
          "Trabajé con MongoDB para la consulta y gestión de información, realizando operaciones sobre los datos requeridos por los diferentes módulos de la aplicación."
        ],
        technologiesTitle: "Tecnologías utilizadas:"
      },
      {
        id: "exp-2",
        role: "Desarrollador de Software Full Stack",
        company: "Partner Tech",
        period: "Marzo 2026 - Agosto 2026",
        bullets: [
          "Desarrollé funcionalidades para módulos web utilizando Angular y Spring Boot, trabajando en la implementación y mejora de componentes de acuerdo con los requerimientos del sistema.",
          "Implementé servicios backend con Spring Boot, utilizando entidades, relaciones y validaciones para procesar la información y aplicar las reglas de negocio correspondientes.",
          "Realicé consultas y operaciones sobre PostgreSQL mediante SQL, obteniendo y relacionando información necesaria para el funcionamiento de los diferentes módulos de la aplicación."
        ],
        technologiesTitle: "Tecnologías utilizadas:"
      }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Sistema de Distribución de Productos",
        company: "Aplicación Web",
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
      experience: "I have 1 year of experience in fullstack development, building simple, robust, and high-performance web applications.",
      cv: "Download CV"
    },
    about: {
      title: "About Me",
      description: "Hello! I'm Alejandro Purizaca, Bachelor in Systems and Computer Engineering with experience in Full Stack development. Proficient in Angular, NestJS, Spring Boot, PostgreSQL, and MongoDB for developing web applications, REST APIs, and data management. Focused on problem-solving and delivering efficient solutions.",
      highlights: [
        "Bachelor in Systems and Computer Engineering",
        "Specialized in Angular, NestJS, Spring Boot, PostgreSQL & MongoDB",
        "Focus on problem solving and efficient solutions"
      ]
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
      role: "Full Stack Software Developer",
      company: "Dicta Colombia",
      period: "September 2025 - February 2026",
      bullets: [
        "Developed web modules using Angular and NestJS, implementing features for registering, querying, and updating information according to system requirements.",
        "Implemented REST APIs to connect the frontend with the backend, incorporating validations and necessary logic for the proper operation of developed features.",
        "Worked with MongoDB for querying and managing information, executing operations on data required by the application modules."
      ],
      technologiesTitle: "Technologies used:"
    },
    experiences: [
      {
        id: "exp-1",
        role: "Full Stack Software Developer",
        company: "Dicta Colombia",
        period: "September 2025 - February 2026",
        bullets: [
          "Developed web modules using Angular and NestJS, implementing features for registering, querying, and updating information according to system requirements.",
          "Implemented REST APIs to connect the frontend with the backend, incorporating validations and necessary logic for the proper operation of developed features.",
          "Worked with MongoDB for querying and managing information, executing operations on data required by the application modules."
        ],
        technologiesTitle: "Technologies used:"
      },
      {
        id: "exp-2",
        role: "Full Stack Software Developer",
        company: "Partner Tech",
        period: "March 2026 - August 2026",
        bullets: [
          "Developed features for web modules using Angular and Spring Boot, working on component implementation and enhancement according to system requirements.",
          "Implemented backend services with Spring Boot, using entities, relationships, and validations to process information and enforce business rules.",
          "Executed queries and operations on PostgreSQL via SQL, retrieving and relating data required for the operation of application modules."
        ],
        technologiesTitle: "Technologies used:"
      }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Product Distribution System",
        company: "Application Web",
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
