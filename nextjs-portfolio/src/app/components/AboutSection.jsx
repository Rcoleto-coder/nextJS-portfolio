"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li>TODO</li>
        <li>TODO</li>
        <li>TODO</li>
        <li>TODO</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <p>TODO 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        sint assumenda, veritatis reiciendis quia aliquam dolore ab
        exercitationem minus, praesentium cum architecto magni laborum est eaque
        aperiam, debitis eos officiis.
      </p>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
        <>
            <p>TODO</p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
                sint assumenda, veritatis reiciendis quia aliquam dolore ab
                exercitationem minus, praesentium cum architecto magni laborum est eaque
                aperiam, debitis eos officiis.
            </p>
        </>
    )
  }
];

const AboutSection = () => {
  // Tracks the tab State
  const [tabState, setTab] = useState("skills");
  // Controls the transition between tabs
  // Transition is being used here to update the tab state without blocking the UI
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="sm:px-16 sm:py-16 px-4 py-8 md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center">
        <Image
          src="/img/robot_placeholder.jpg"
          width={500}
          height={500}
          alt="humanoid robot sitting on a chair programming"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 id="about" className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            laboriosam, error sed dolores iure culpa quas similique, suscipit,
            doloremque quibusdam harum quo dolor totam. Magni aliquid ratione
            autem alias fugiat!
          </p>
          <div className="mt-8 flex flex-row">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tabState === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tabState === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tabState === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">{tabData.find((tab) => tab.id === tabState).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
