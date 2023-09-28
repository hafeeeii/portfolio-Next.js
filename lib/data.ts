import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import youtubeCloneImg from "@/public/youtubeClone.png";
import foodRecipeApp from "@/public/foodRecipeApp.png";
import fitto from "@/public/fitto.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Self-taught",
    location: "Kerala, IN",
    description:
      "Learning and exploring Web development to build a career in tech by utalizing free online resources and applying for oppertunity.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "YoutubeClone",
    description: "A YouTube clone app with a modern UI. It have features of the original YouTube app, such as the ability to search for videos, watch videos in full screen.",
    tags: ["React", "Rapid API", "Material UI", "Git"],
    imageUrl: youtubeCloneImg,
    link:'https://youtube-clone-hafis.netlify.app/',
  },
  {
    title: "Delicious",
    description:
      "Delicious is a food recipe app that contains a wide variety of recipes. the app includes images of each recipe to help you get inspired.",
    tags: ["React", "Material UI", "Spoonacular API", "Git"],
    imageUrl: foodRecipeApp,
    link:'https://food-recipeee.netlify.app/',
  },
  {
    title: "Fitto",
    description:
      "Fitto is a fitness app that provides users with access to thousands of exercises, video demonstrations, and personalized training plans.",
    tags: ["React", "Material UI", "Rapid API", "Git"],
    imageUrl: fitto,
    link:'https://fitto-fitness.netlify.app/',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion"
  "Material UI",
] as const;
