import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fetchclicks from "@/public/fetchclicks.png";
import propublic from "@/public/propublic.png";
import nikewebsite from "@/public/nikewebsite.png";
import campingsite from "@/public/campingsite.png";
import expensetracker from "@/public/expensetracker.png";
import gooutnight from "@/public/gooutnight.png";
import flowandrecharts from "@/public/flowandrecharts.png";
import rickandmorty from "@/public/rickandmorty.png";

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
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "Tasked with creating and maintaining various websites along with other company web platforms, aligning with the latest web standards and technologies. Utilized a tech stack including JavaScript, TypeScript, ReactJS, NextJS, and Tailwind CSS to ensure modern, efficient site operations. Deployed updates and new features via Vercel, focusing on optimal performance and user engagement.",
    icon: React.createElement(FaReact),
    date: "Futuromy - 10/2021 – Present",
  },
  {
    title: "Data Curator",
    location: "Remote",
    description:
      "Annotated and refined data within specified parameters for companies related to health sciences. Familiar with HTML, CSS, and JSON to gather data from various websites to enhance information value. Managed deadlines, overtime efficiency, and conducted thorough web searches.",
    icon: React.createElement(CgWorkAlt),
    date: " Veeva Systems - 02/2023 – 05/2024",
  },
  {
    title: "Data Curator (Short Term)",
    location: "Remote",
    description:
      "Created and collected utterances based on various situational contents and scenarios for AI training purposes. Gained experience in remote collaboration and adhering to project requirements.",
    icon: React.createElement(CgWorkAlt),
    date: " Telus - 10/2022 - 02/2023",
  },
  {
    title: "Data Clerk",
    location: "Turkey, Ankara",
    description:
      "Managed CRUD operations based on a cellular tech company database and their respective CRUD app. Handled XML file formats to transfer Excel data and developed a simple app for an automated mass email system for notifying payers about repossession.",
    icon: React.createElement(CgWorkAlt),
    date: " Yılmaz Law Office - 12/2019 - 09/2022",
  },
  {
    title: "Associate Degree in Web Design and Coding",
    location: "Eskisehir, Turkey",
    description:
      "Studied web design and coding, mastering HTML, CSS, JavaScript, and React. Developed skills in UX/UI design and built responsive web applications. Gained practical experience with coding projects and problem-solving.",
    icon: React.createElement(LuGraduationCap),
    date: " Anadolu University  - 2018 - 2020",
  },
  {
    title: "Customer Advisor",
    location: "Remote",
    description:
      "Answered questions about products and services, provided troubleshooting and tech support via chat, email, and phone. Became familiar with the Apple ecosystem and their conduct in working with third-party firms and apps.",
    icon: React.createElement(CgWorkAlt),
    date: " Apple Inc. - 07/2017 - 05/2018",
  },
  {
    title: "Bachelors Degree in Archeology",
    location: "Eskisehir, Turkey",
    description:
      "Studied archaeology, developing strong analytical skills and attention to detail. Conducted research and interpreted data, enhancing problem-solving abilities. Gained experience in documenting findings and creating reports, and collaborated effectively on team projects.",
    icon: React.createElement(LuGraduationCap),
    date: " Anadolu University - 2012 - 2019",
  },
] as const;

export const certificatesData = [
  {
    title: "Pearson Tests of English - Academics - 71/90",
    url: "https://drive.google.com/file/d/1tytI8vr5d43cVSPROcXchw1qm3czGtSY/view?usp=drive_link",
  },
  {
    title:
      "YDS- Foreign Language Knowledge Level Determination Exam - 82.5/100",
    url: "https://drive.google.com/file/d/1i1BiN8Eu4P9yrUqPPf60XhDDErpK8QMf/view",
  },
  {
    title: "Turkish Aeronautical Association University - Python Bootcamp",
    url: "https://drive.google.com/file/d/13FHh0Z22MMHnbvF3ts2ixVD2e_3xhDSC/view",
  },
  {
    title: "A.B.B. Techbridge Technology Academy - 3D Modeling, Animation",
    url: "https://www.abbtechbridge.com",
  },
  {
    title: "Beltek - Network Database Programming /MsSQL Server",
    url: "https://drive.google.com/file/d/1YdpDZynWjYzAeyFxNCplUM6RhMEjvg8x/view",
  },
  {
    title: "Beltek - C# ASP.NET MVC Web Programming",
    url: "https://drive.google.com/file/d/1XRMOn1HHZvP0DBF9CenYeOcG9C1Dhb-2/view",
  },
  {
    title: "freeCodeCamp - Responsive Web Design",
    url: "https://www.freecodecamp.org/certification/Alicansan/responsive-web-design",
  },
  {
    title: "freeCodeCamp -  JavaScript Algorithms and Data Structures",
    url: "https://www.freecodecamp.org/certification/Alicansan/javascript-algorithms-and-data-structures-v8",
  },
  {
    title: "HackerRank - javascript (Basic)",
    url: "https://www.hackerrank.com/certificates/c4d8728b924a",
  },
  {
    title: "HackerRank - javascript (Intermediate)",
    url: "https://www.hackerrank.com/certificates/e43f50205dfe",
  },
  {
    title: "HackerRank - React (Basic)",
    url: "https://www.hackerrank.com/certificates/7a4a15dde486",
  },
  {
    title: "HackerRank - REST Api (Intermediate)",
    url: "https://www.hackerrank.com/certificates/da056d56e7aa",
  },
] as const;

export const projectsData = [
  {
    title: "Rick & Morty Status Check",
    description:
      "I built a character listing app with Next.js 15 and SSR using the Rick and Morty API. I added filters for status and gender synced with URL via nuqs. State is managed with Zustand, data with React Query. I followed modern UI principles using shadcn/ui and ensured full type safety.",
    tags: ["Nextjs", "TypeScript", "Tailwind", "Zustand", "React Query"],
    imageUrl: rickandmorty,
    link: "https://rick-and-morty-app-roan-omega.vercel.app/",
  },
  {
    title: "React Flow & Recharts",
    description:
      "I built a team management tool with React, TypeScript, and Vite. I used React Flow to visualize teams and members, and Recharts to display data. I handled state with Context API and added right-click features for better UX. The UI follows modern design principles.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts", "React Flow"],
    imageUrl: flowandrecharts,
    link: "https://reactflow-recharts-ts.vercel.app/",
  },
  {
    title: "GoOutNight",
    description:
      "This project is a night-time venue listing app, showcasing places to explore after dark. The frontend is entirely custom-built, and I integrated Payload CMS to manage content via an admin UI. Though the project wasn't completed, this MVP demonstrates my skills in frontend development and CMS integration.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Payload CMS",
    ],
    imageUrl: gooutnight,
    link: "https://gooutnight.vercel.app/",
  },
  {
    title: "Fetchclicks",
    description:
      "A public responsive web app for discovering movies, TV shows, and celebrities. It features trending content and allows users to search for their favorite media using data fetched from the TMDB API. This project highlights my ability to work with APIs and develop responsive front-end applications.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Embla Carousel",
    ],
    imageUrl: fetchclicks,
    link: "https://fetchclicks-ssbq.vercel.app/",
  },
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense tracker built with Prisma, Clerk, and Neon Postgres. Users can sign in, manage transactions, and track spending. The app features real-time updates, secure data storage, and a responsive design.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Neon Postgres",
      "Prisma",
      "Clerk",
    ],
    imageUrl: expensetracker,
    link: "https://expense-tracker-beta-dun.vercel.app/",
  },
  {
    title: "Propublic",
    description:
      "A public web app for e-sports coaching. This project involved translating a Figma design into a landing page and coach profile pages. The highlight of this project is the precise implementation of the design, demonstrating my ability to convert Figma mockups into  functional webpages.",
    tags: ["Next.js", "Shadcn", "Tailwind"],
    imageUrl: propublic,
    link: "https://mockup-propublic.vercel.app/",
  },

  {
    title: "Camping Area Site",
    description:
      "A landing page for a camping area. This project highlights my skills in front-end development and design, providing a visually appealing and informative webpage for potential visitors.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    imageUrl: campingsite,
    link: "https://travel-app-seven-murex.vercel.app/",
  },
  {
    title: "Nike Landing Page",
    description:
      "A clone of the Nike shoes landing page. This project focuses on replicating the visual design of the original site without adding functionality. It showcases my ability to accurately recreate complex web layouts.",
    tags: ["Vite", "Tailwind"],
    imageUrl: nikewebsite,
    link: " https://nike-website-rosy.vercel.app/",
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
  "TailwindCSS",
  "Framer",
  "Material UI",
  "Aceternity",
  "Shadcn-UI",
  "MsSql",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Firebase",
  "Vercel",
  "Blender",
  "3DsMax",
  "Photoshop",
  "After Effects",
  "Figma",
  "Unity",
  "Unreal Engine",
  "Git",
  "GitHub",
  "Browser Developer Tools",
] as const;
