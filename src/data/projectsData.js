import bcra from '../assets/bcra.png';
import ecommerce1 from '../assets/ecommerce1.jpg';
import ecommerce2 from '../assets/ecommerce2.jpg';
import music1 from '../assets/music1.png';
import clima1 from '../assets/clima1.png';
import clima2 from '../assets/clima2.png';
import dev from '../assets/dev.jpg';
import turnoya from '../assets/turnoya.jpg';
// If you prefer external demo links, you can omit the video import and set demoExternalUrl instead.

const projects = [
  {
    category: "fullstack",
    title: "College Connect USA",
    tagline: "A campus mobile app for universities in the USA: enrollment, courses, notifications, and integrated payments",
    description:
      "Soy cofundador. Junto con Blaine Oler, diseñé y desarrollé la aplicación de punta a punta: autenticación, gestión académica, comunicación y pagos. Con foco en una arquitectura escalable, calidad de código y una experiencia nativa.",
    descriptionEn:
      "I'm the co-founder. Together with Blaine Oler, I co-designed and co-built the app end-to-end: authentication, academic management, communication, and payments. Focused on scalable architecture, code quality, and a native-first experience.",
    role: "Co‑founder",
    cofounder: "Blaine Oler",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "Firebase", "Stripe"],
    backend: "Node.js + Express + Firebase",
    frontend: "React Native + Expo + React Query",
    infrastructure: "Docker, Railway/VPS, CI/CD (GitHub Actions)",
    payments: ["Stripe", "Card payments"],
    images: [dev],
    // Prefer external link to keep the bundle light (OneDrive/YouTube/Vimeo)
    demoExternalUrl: 'https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F1CE6ADE93FA26D88%21s339869e3ffac4c7c9cb75946df91231d%3Fithint%3Dvideo%26migratedtospo%3Dtrue&cid=1CE6ADE93FA26D88&id=1CE6ADE93FA26D88%21s339869e3ffac4c7c9cb75946df91231d&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy8xY2U2YWRlOTNmYTI2ZDg4L0VlTnBtRE9zXzN4TW5MZFpSdC1SSXgwQmtuZ3N3YS1jME1uX2RTWldvY1BQSGc&v=photos',
    contactEmail: "emacorradini.contacto@gmail.com",
    storeLinks: [
      // Example, uncomment when you have real links
      // { label: 'App Store', href: 'https://apps.apple.com/...' },
      // { label: 'Google Play', href: 'https://play.google.com/...' },
    ],
    caseStudy: {
      overview:
        "Objetivo: centralizar la vida académica de estudiantes y docentes en una sola aplicación, con buen rendimiento y una interfaz simple. La tecnología permite iterar rápido y escalar.",
      overviewEn:
        "Goal: centralize students' and teachers' academic life in a single performant app with a simple UI. The stack enables fast iteration and scale.",
      ownership: [
        "Product ownership: roadmap, UX/UI decisions and strategy",
        "Fullstack architecture and hands-on development",
        "Infrastructure and continuous delivery",
      ],
      architecture: [
        "Autenticación con JWT y tokens de renovación",
        "API REST modular con validación y versionado",
        "Firebase (Firestore/RTDB) para los modelos académicos (estudiantes, materias, inscripciones y pagos)",
      ],
      architectureEn: [
        "Authentication with JWT + refresh tokens",
        "Modular REST API with validation and versioning",
        "Firebase (Firestore/RTDB) for academic domain models (students, subjects, enrollments, payments)",
      ],
      payments: [
        "Stripe Checkout + Webhooks for payment confirmation",
        "Secure key vault and idempotent error handling",
      ],
      roadmap: [
        "Push notifications (Expo) segmented by role",
        "Metrics and admin panel dashboards",
        "Multi-tenant support",
      ],
    },
  },
  {
    title: "TurnoYA",
    category: "fullstack",
    description:
      "Aplicación fullstack para gestionar turnos de servicios profesionales. Incluye una API desarrollada con ASP.NET Core y una interfaz web construida con React y Vite.",
    descriptionEn:
      "A fullstack application for managing appointments for professional services. It includes an ASP.NET Core API and a web interface built with React and Vite.",
    tech: ["C#", ".NET 10", "ASP.NET Core", "React", "Vite"],
    images: [turnoya],
    link: "https://github.com/emaaa05/TurnoYA",
    caseStudy: {
      overview:
        "TurnoYA es una agenda de turnos para servicios profesionales. El proyecto conecta una interfaz web en React y Vite con una API desarrollada en ASP.NET Core sobre .NET 10.",
      overviewEn:
        "TurnoYA is an appointment management app for professional services. It connects a React and Vite web interface to an API built with ASP.NET Core on .NET 10.",
      architecture: [
        "Frontend web construido con React y Vite",
        "API REST desarrollada con ASP.NET Core y C#",
        "Persistencia en memoria para mantener la demo simple y fácil de ejecutar",
      ],
      architectureEn: [
        "Web frontend built with React and Vite",
        "REST API built with ASP.NET Core and C#",
        "In-memory persistence keeps the demo simple and easy to run",
      ],
    },
  },
  {
    title: "Ecommerce",
    titleEs: "Tienda online",
    category: "mobile",
    description:
      "Aplicación de comercio electrónico para móviles, desarrollada con React Native y Expo. Incluye catálogo de productos, carrito e interfaz adaptable, con foco en una experiencia de compra similar a la de una tienda real.",
    descriptionEn:
      "A mobile e-commerce app built with React Native + Expo. Includes a product catalog, cart system, and a clean, responsive UI. Focused on replicating a real-world shopping experience with plans to expand functionality.",
    tech: ["React Native", "Expo", "React Navigation"],
    images: [ecommerce1, ecommerce2],
    link: "https://github.com/emaaa05/ecommerce",
  },
  {
    title: "BCRA Connect",
    category: "desktop",
    description:
      "Aplicación interna para un estudio jurídico, orientada a gestionar tareas e integrar datos del BCRA. Desarrollada con Electron y React.",
    descriptionEn:
      "Internal app for a law firm to manage tasks and integrate BCRA data. Built with Electron and React.",
    tech: ["Electron Js", "React"],
    images: [bcra],
    link: "Code is private for commercial reason",
  },
  {
    title: "React Native Music Player",
    titleEs: "Reproductor de música React Native",
    category: "mobile",
    description:
      "Reproductor de música desarrollado con React Native y Expo AV. Incluye portadas de álbumes, reproducción en segundo plano y navegación entre canciones.",
    descriptionEn:
      "A React Native music player using Expo AV. Features album art, background playback, and navigation through songs.",
    tech: ["React Native", "Expo AV", "JavaScript"],
    images: [music1],
    link: "https://github.com/emaaa05/MusicPlayer",
  },
  {
    title: "React Native Weather App",
    titleEs: "App del clima React Native",
    category: "mobile",
    description:
      "Aplicación del clima desarrollada con React Native y Expo. Obtiene la ubicación del usuario y muestra el pronóstico en una interfaz personalizada.",
    descriptionEn:
      "A weather app built with React Native and Expo. It gets the user's location and displays the forecast in a custom interface.",
    tech: ["React Native", "Expo", "Weather API"],
    images: [clima1, clima2],
    link: "https://github.com/emaaa05/ClimaApp",
  },
];

export default projects;
