import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import fitto from "@/public/fitto.png";
import filmverse from "@/public/filmverse.png";
import dressify from "@/public/dressify.png";

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
    title: "Dressify",
    description:
      "Dressify is a Next.js-powered ecommerce redefining online shopping with seamless performance and style",
    tags: [
      "Next.js",
      "Strapi CMS",
      "Tailwind",
      "Redux Toolkit",
      "Framer Motion",
      "TypeScript",
    ],
    imageUrl: dressify,
    link: "https://dressify-ecommerce-app.vercel.app/",
  },

  {
    title: "Fitto",
    description:
      "Fitto is a fitness app that provides users with access to thousands of exercises, video demonstrations, and personalized training plans.",
    tags: ["React.js", "Material UI", "Rapid API"],
    imageUrl: fitto,
    link: "https://fitto-fitness.netlify.app/",
  },
  {
    title: "Filmverse",
    description:
      "Filmverse is a React movie app for searching, bookmarking movies and TV shows.",
    tags: [
      "React.js",
      "TMDB API",
      "Tailwind",
      "Firebase",
      "Redux Toolkit",
      "Framer Motion",
    ],
    imageUrl: filmverse,
    link: "https://filmverse-ink.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
  "Material UI",
] as const;
