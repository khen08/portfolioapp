import React from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { AboutMe } from "@/components/AboutMe";
import { TechStack } from "@/components/TechStack";
import { AuroraBackground } from "@/components/ui/aurora-background";

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
  ];
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <SectionLabel data={data} />
    </div>
  );
};

export default MainPage;
