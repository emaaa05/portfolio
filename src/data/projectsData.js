import bcra from '../assets/bcra.png';
import ecommerce1 from '../assets/ecommerce1.jpg';
import ecommerce2 from '../assets/ecommerce2.jpg';
import music1 from '../assets/music1.png';
import clima1 from '../assets/clima1.png';
import clima2 from '../assets/clima2.png';
import dev from '../assets/dev.jpg';
// If you prefer external demo links, you can omit the video import and set demoExternalUrl instead

const projects = [
  {
    featured: true,
    title: "College Connect USA",
    tagline: "A campus mobile app for universities in the USA: enrollment, courses, notifications, and integrated payments",
    description:
      "I'm the co‑founder. Together with Blaine Oler, I co‑designed and co‑built the app end‑to‑end: auth, academic management, communication, and payments. Scalable architecture, code quality, and native‑first UX.",
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
        "Goal: centralize students' and teachers' academic life in a single performant app with a simple UI. The stack enables fast iteration and scale.",
      ownership: [
        "Product ownership: roadmap, UX/UI decisions and strategy",
        "Fullstack architecture and hands-on development",
        "Infrastructure and continuous delivery",
      ],
      architecture: [
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
    title: "Ecommerce",
    description:
      "A mobile e-commerce app built with React Native + Expo. Includes a product catalog, cart system, and a clean, responsive UI. Focused on replicating a real-world shopping experience with plans to expand functionality.",
    tech: ["React Native", "Expo", "React Navigation"],
    images: [ecommerce1, ecommerce2],
    link: "https://github.com/emaaa05/ecommerce",
  },
  {
    title: "BCRA Connect",
    description:
      "Internal app for a law firm to manage tasks and integrate BCRA data. Built with Electron Js and React for future versions.",
    tech: ["Electron Js", "React"],
    images: [bcra],
    link: "Code is private for commercial reason",
  },
  {
    title: "React Native Music Player",
    description:
      "A React Native music player using Expo AV. Features album art, background playback and navigation through songs.",
    tech: ["React Native", "Expo AV", "JavaScript"],
    images: [music1],
    link: "https://github.com/emaaa05/MusicPlayer",
  },
  {
    title: "React Native Weather App",
    description:
      "A clean weather app made with React Native and Expo. Automatically fetches user location and displays weather with custom UI.",
    tech: ["React Native", "Expo", "Weather API"],
    images: [clima1, clima2],
    link: "https://github.com/emaaa05/ClimaApp",
  },
];

export default projects;
