"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Project 1 Desc.",
    image: "https://placehold.co/500x400",
    gitUrl: "https://github.com/Rcoleto-coder",
    previewUrl: "/",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2 Desc.",
    image: "https://placehold.co/500x400",
    gitUrl: "https://github.com/Rcoleto-coder",
    previewUrl: "/",
    tag: ["All", "Mobile"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project 3 Desc.",
    image: "https://placehold.co/500x400",
    gitUrl: "https://github.com/Rcoleto-coder",
    previewUrl: "/",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Project 4",
    description: "Project 4 Desc.",
    image: "https://placehold.co/500x400",
    gitUrl: "https://github.com/Rcoleto-coder",
    previewUrl: "/",
    tag: ["All", "Mobile"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  // I am filtering the projectsData using the tag (hook)
  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    <>
      <h2
        id="projects"
        className="text-center text-4xl font-bold text-white, mt-4 mb-4"
      >
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={setTag} tagName="All" isSelected={tag === "All"} />
        <ProjectTag onClick={setTag} tagName="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={setTag} tagName="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <section className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            tags={project.tag}
          />
        ))}
      </section>
    </>
  );
};

export default ProjectsSection;
