import { Button, Card } from "flowbite-react";
import React from "react";
import contoh from "../assets/contoh.jpg";

const Portfolio = () => {
  
  const projects = [
    {
      title: "Project 1",
      description: "Ini adalah deskripsi untuk project 1.",
      image: contoh,
      link: "#",
    },
    {
      title: "Project 2",
      description: "Ini adalah deskripsi untuk project 2.",
      image: contoh,
      link: "#",
    },
    {
      title: "Project 3",
      description: "Ini adalah deskripsi untuk project 3.",
      image: contoh,
      link: "#",
    },
  ];

  return (
    <div
      className="relative py-16 px-4 md:px-16 min-h-screen"
      id="Portfolio"
    >
      <h5
        className="mb-8 text-2xl font-bold text-center text-gray-900 dark:text-white"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        My Project
      </h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
        {projects.map((project, index) => (
          <div key={index} data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}>
            <Card imgSrc={project.image}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button color="blue" pill>
                  Lihat Project
                </Button>
              </a>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
