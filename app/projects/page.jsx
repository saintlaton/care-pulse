"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import Cta from "@/components/Cta";

const projectData = [
  {
    image: "/work/w1.png",
    category: "full-stack",
    name: "HomeService",
    description:
      "Home repair and maintenance services. Users can easily book appointments, and make secure payments , include admin dashboard for managing services, technicians,  and promotion management system.",
    link: "https://lilac-homeservices.vercel.app",
    github: "https://github.com/APIktn/Final-Project-Lilac-HomeService",
  },
  {
    image: "/work/w2.png",
    category: "react js",
    name: "React Quiz Game",
    description:
      "It is a React quiz using useReducer to calculate and collect points. Test yourself with 15 React quiz questions and aim for a perfect score to become a React Unstoppable !",
    link: "https://react-quize-game.vercel.app/",
    github: "https://github.com/saintlaton/react-quize-game",
  },
  {
    image: "/work/w3.png",
    category: "next.js",
    name: "IndieGamer",
    description:
      "Only the best Indie game review for you. Using Nextjs new feature, Headless CMS (Strapi) for content Managing game reviews.",
    link: "https://indie-gamer-delta.vercel.app/",
    github: "https://github.com/saintlaton/indie-gamer",
  },
  {
    image: "/work/w4.png",
    category: "next.js",
    name: "MakeSaint Portfolio",
    description:
      "My portfolio with next.js and tailwind, shadcnui, and framer motion.  ",
    link: "/",
    github: "https://github.com/saintlaton/saint-wongsathon",
  },
  {
    image: "/work/w5.png",
    category: "full-stack",
    name: "GreatProperty",
    description:
      "Property platform using react js with vite, firebase, firestore. User can login with google and sign up.  ",
    link: "https://great-property.vercel.app/",
    github: "https://github.com/saintlaton/great-property",
  },
  {
    image: "/work/w6.png",
    category: "react js",
    name: "TravaLocel",
    description:
      "Travalocel is a React project where users can search, filter by tags, and expand pictures.",
    link: "https://travolacel.vercel.app/",
    github: "https://github.com/saintlaton/travolacel",
  },
  {
    image: "/work/w7.png",
    category: "html/css",
    name: "OmniFood",
    description:
      "OmniFood is a HTML/CSS project using Flexbox, Grid with best practice and fully responsive for any device  ",
    link: "https://omnifood-saintwst.netlify.app/?full-name=Xczdxcsdv&email=worawut%40theiconweb.com&select-where=friend",
    github: "/",
  },
];

//remove catagory duplicate
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-28">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto "
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
      <Cta />
    </section>
  );
};

export default Projects;
