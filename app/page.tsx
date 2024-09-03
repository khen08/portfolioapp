import React from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { AboutMe } from "@/components/AboutMe";
import { TechStack } from "@/components/TechStack";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MyProjects } from "@/components/MyProjects";

const MainPage = () => {
  const data = [
    {
      title: "About Me",
      content: (
        <AuroraBackground>
          <AboutMe />
        </AuroraBackground>
      ),
    },
    {
      title: "Tech Stack",
      content: <TechStack />,
    },
    {
      title: "My Projects",
      content: <MyProjects />,
    },
  ];

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <SectionLabel data={data} />
    </div>
  );
};

export default MainPage;
