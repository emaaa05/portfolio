import bcra from '../assets/bcra.png';
import ecommerce1 from '../assets/ecommerce1.jpg';
import ecommerce2 from '../assets/ecommerce2.jpg';
import music1 from '../assets/music1.png';
import clima1 from '../assets/clima1.png';
import clima2 from '../assets/clima2.png';

const projects = [
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
