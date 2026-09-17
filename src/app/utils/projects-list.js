import { PROJECT_STATUS, PROJECT_TAG } from "./constants";

export const projectsList = [
  {
    id: 1,
    title: "Eldertable",
    description:
      "A virtual tabletop platform for creating and playing tabletop RPG campaigns online.",
    image: "/images/projects/eldertable.png",
    tag: [PROJECT_TAG.ALL, PROJECT_TAG.WEB],
    gitUrl: "https://github.com/victordevicta/rpg-tabletop",
    previewUrl: "https://rpg-tabletop-api-weld.vercel.app",
    status: PROJECT_STATUS.IN_DEVELOPMENT,
  },
  {
    id: 2,
    title: "Next.js Portfolio Website",
    description:
      "My personal portfolio, built with Next.js. In fact, you're looking at it right now.",
    image: "/images/projects/steampunk-atom.png",
    tag: [PROJECT_TAG.ALL, PROJECT_TAG.WEB],
    gitUrl: "https://github.com/victordevicta/my-portfolio",
    previewUrl: "https://victordevicta.dev",
    status: PROJECT_STATUS.COMPLETED,
  },
  {
    id: 3,
    title: "Macrocounter O' Doom and Dispair",
    description:
      "A mobile app for tracking daily calories and macronutrients with a dark fantasy twist.",
    image: "/images/projects/macrocounter.png",
    tag: [PROJECT_TAG.ALL, PROJECT_TAG.MOBILE],
    gitUrl: "https://github.com/victordevicta/macro-counter-o-doom-and-dispair",
    // previewUrl: "https://macro-counter-o-doom-and-dispair-lg.vercel.app",
    status: PROJECT_STATUS.IN_DEVELOPMENT,
  },
  {
    id: 4,
    title: "Pokedex",
    description:
      "A catalogue where we can see details from the first 250 pokemons.",
    image: "/images/projects/pokedex.jpg",
    tag: [PROJECT_TAG.ALL, PROJECT_TAG.WEB],
    gitUrl: "https://github.com/victordevicta/pokedex",
    previewUrl: "https://onboarding-inlight.vercel.app",
    status: PROJECT_STATUS.COMPLETED,
  },
  {
    id: 5,
    title: "LumiMotion",
    description:
      "An AI-powered web app that turns static images into seamless animated wallpapers.",
    image: "/images/projects/lumiMotion.png",
    tag: [PROJECT_TAG.ALL, PROJECT_TAG.WEB],
    gitUrl: "https://github.com/victordevicta/lumi-motion",
    // previewUrl: "/",
    status: PROJECT_STATUS.IN_DEVELOPMENT,
  },
  {
    id: 6,
    title: "Password Generator",
    description:
      "A simple desktop app for generating secure and customizable random passwords.",
    image: "/images/projects/password-generator.png",
    tag: [PROJECT_TAG.ALL, PROJECT_TAG.DESKTOP],
    gitUrl: "https://github.com/victordevicta/password-generator",
    previewUrl: "https://password-generator-dun-rho.vercel.app",
    status: PROJECT_STATUS.COMPLETED,
  },
];
