import React from "react";
import { LuBuilding2 } from "react-icons/lu";
import fitto from "@/public/fitto.png";
import filmverse from "@/public/filmverse.png";
import dressify from "@/public/dressify.png";
import worksphere from "@/public/worksphere.png";

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
    title: "Frontend Developer",
    location: "Devize, Kerala, IN",
    description:
      "Working as Frontend Developer. Responsible for designing and implementing key frontend features to ensure a seamless and user-friendly experience.",
    icon: React.createElement(LuBuilding2),
    date: "3/15/2024 - 7/31/2025",
  },
] as const;

export const projectsData = [
  // {
  //   title: "Dressify",
  //   description:
  //     "Dressify is a Next.js-powered ecommerce redefining online shopping with seamless performance and style",
  //   tags: [
  //     "Next.js",
  //     "Strapi CMS",
  //     "Tailwind",
  //     "Redux Toolkit",
  //     "Framer Motion",
  //     "TypeScript",
  //   ],
  //   imageUrl: dressify,
  //   link: "https://dressify-ecommerce-app.vercel.app/",
  // },

  {
    title: "WorkSphere",
    description:
      "WorkSphere is a multi-tenant app for streamlined workplace management.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Shadcn/UI", "Multi-Tenant", "JWT Auth"],
    imageUrl: worksphere,
    link: "https://www.worksphere.icu",
    underDevelopment: true,
  }
  ,
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
    underDevelopment: false,
  },
  {
    title: "Fitto",
    description:
      "Fitto is a fitness app that provides users with access to thousands of exercises, video demonstrations, and personalized training plans.",
    tags: ["React.js", "Material UI", "Rapid API"],
    imageUrl: fitto,
    link: "https://fitto-fitness.netlify.app/",
    underDevelopment: false,
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
  "Magic UI",
  "Next UI",
  "Shadcn",
  "Prisma",
  "PostgreSQL",
  "Tanstack Table",
  "React Hook Form",
  "Yup",
  "Zod",
] as const;
