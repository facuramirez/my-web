import React from "../components/React.tech.astro";
import Next from "../components/Next.tech.astro";
import Tailwind from "../components/Tailwind.tech.astro";
import Nest from "../components/Nest.tech.astro";
import MongoDB from "../components/MongoDB.tech.astro";
import Firebase from "../components/Firebase.tech.astro";

type ProjectsT = {
  id: number;
  name: string;
  description: string;
  img: any;
  technologies: any[];
  link: string;
};

export const projects: ProjectsT[] = [
  {
    id: 1,
    name: "Jira Reload",
    description: "Una version minimalista de Jira",
    img: 'https://i.imgur.com/fEUmKfF.jpeg',
    technologies: [React, Tailwind, Nest, MongoDB],
    link: "#",
  },
  {
    id: 2,
    name: "Sport Managment",
    description: "Gestiona tu centro deportivo aqui",    
    img: 'https://i.imgur.com/26j75xi.png',
    technologies: [Next, Tailwind, Nest, Firebase ],
    link: "#",
  },
  {
    id: 3,
    name: "Dragon Ball",
    description: "Revivi la mejor serie con todos sus personajes",
    img: 'https://i.imgur.com/hrBnhV7.jpeg',
    technologies: [React, Tailwind, Firebase],
    link: "#",
  },
  {
    id: 4,
    name: "Weather App",
    description: "¿Día frío o caluroso? Descubrilo",
    img: 'https://i.imgur.com/ZpgKrxp.png',
    technologies: [React, Tailwind],
    link: "https://weather-app-facudev.netlify.app/",
  },
];
