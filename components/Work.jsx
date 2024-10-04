"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swipper react cpmponents
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import require modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/w1.png",
    category: "Full-stack",
    name: "HomeService",
    description: "The platform for all of home service.",
    link: "https://lilac-homeservices.vercel.app",
    github: "https://github.com/APIktn/Final-Project-Lilac-HomeService",
  },
  {
    image: "/work/w2.png",
    category: "react js",
    name: "React quiz Game",
    description: "Test your React Skill with 15 questions. ",
    link: "https://react-quize-game.vercel.app/",
    github: "https://github.com/saintlaton/react-quize-game",
  },
  {
    image: "/work/w3.png",
    category: "Next.js",
    name: "IndieGamer",
    description: "Only the best Indie game review for you. ",
    link: "https://indie-gamer-delta.vercel.app/",
    github: "https://github.com/saintlaton/indie-gamer",
  },
  {
    image: "/work/w5.png",
    category: "Full-stack",
    name: "GreatProperty",
    description: "Only the Great Property for you.",
    link: "https://great-property.vercel.app/",
    github: "https://github.com/saintlaton/great-property",
  },
  {
    image: "/work/w5.png",
    category: "react js",
    name: "TravaLocel",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.  ",
    link: "https://great-property.vercel.app/",
    github: "https://github.com/saintlaton/great-property",
  },
  {
    image: "/work/w6.png",
    category: "Next.js/TypeScript",
    name: "SupportMe",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.  ",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Discover all of my projects here.</p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only 4 projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
