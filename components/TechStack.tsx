"use client";
import React, { useState } from "react";
import { SnapSection } from "./SnapSection";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandPhp,
  IconDatabase,
  IconBrandMongodb,
  IconBrandPython,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandPrisma,
  IconBrandMysql,
} from "@tabler/icons-react";
import { TextEffect } from "./TextEffect";

export function TechStack() {
  const techStackCards = [
    {
      title: "HTML5",
      icon: <IconBrandHtml5 size="2.5rem" />,
      description: "The standard markup language for creating web pages.",
    },
    {
      title: "CSS3",
      icon: <IconBrandCss3 size="2.5rem" />,
      description:
        "A style sheet language used for describing the presentation of a document.",
    },
    {
      title: "JavaScript",
      icon: <IconBrandJavascript size="2.5rem" />,
      description:
        "A scripting language for creating dynamic web page content.",
    },
    {
      title: "PHP",
      icon: <IconBrandPhp size="2.5rem" />,
      description:
        "A popular general-purpose scripting language that is especially suited to web development.",
    },
    {
      title: "Microsoft SQL Server",
      icon: <IconDatabase size="2.5rem" />,
      description:
        "A relational database management system developed by Microsoft.",
    },
    {
      title: "MongoDB",
      icon: <IconBrandMongodb size="2.5rem" />,
      description:
        "A source-available cross-platform document-oriented database program.",
    },
    {
      title: "Python",
      icon: <IconBrandPython size="2.5rem" />,
      description:
        "An interpreted, high-level, general-purpose programming language.",
    },
    {
      title: "Next.JS",
      icon: <IconBrandNextjs size="2.5rem" />,
      description: "A React framework for production.",
    },
    {
      title: "TypeScript",
      icon: <IconBrandTypescript size="2.5rem" />,
      description:
        "A strongly typed programming language that builds on JavaScript.",
    },
    {
      title: "Tailwind CSS",
      icon: <IconBrandTailwind size="2.5rem" />,
      description:
        "A utility-first CSS framework for rapidly building custom designs.",
    },
    {
      title: "Prisma",
      icon: <IconBrandPrisma size="2.5rem" />,
      description: "Next-generation Node.js and TypeScript ORM.",
    },
    {
      title: "MySQL",
      icon: <IconBrandMysql size="2.5rem" />,
      description: "An open-source relational database management system.",
    },
  ];

  const [flipped, setFlipped] = useState(
    Array(techStackCards.length).fill(false)
  );

  const handleFlip = (index: number) => {
    setFlipped((prevFlipped) =>
      prevFlipped.map((flip, i) => (i === index ? !flip : flip))
    );
  };

  return (
    <SnapSection>
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-center space-y-4 overflow-hidden px-4">
        <TextEffect
          as="h2"
          per="char"
          className="text-2xl md:text-4xl lg:text-5xl font-bold dark:text-white my-10"
        >
          My Tech Stack
        </TextEffect>
        <MaxWidthWrapper>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStackCards.map((card, index) => (
              <motion.div
                key={index}
                className="relative w-full h-[30vh] md:h-[25vh] lg:h-[20vh] flex items-center justify-center"
                onClick={() => handleFlip(index)}
                style={{ perspective: "1000px" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Front Side */}
                <motion.div
                  className={`absolute inset-0 flex flex-col items-center justify-center p-2 lg:p-4 rounded-lg shadow-lg cursor-pointer border border-transparent hover:border-indigo-500 transition-colors ${
                    flipped[index]
                      ? "bg-indigo-500 text-white"
                      : "bg-white dark:bg-gray-800"
                  }`}
                  animate={{ rotateY: flipped[index] ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {card.icon}
                  <p className="mt-2 lg:mt-4 text-base md:text-lg lg:text-xl font-medium">
                    {card.title}
                  </p>
                </motion.div>
                {/* Back Side */}
                <motion.div
                  className={`absolute inset-0 flex flex-col items-center justify-center p-2 lg:p-4 rounded-lg shadow-lg cursor-pointer border border-transparent hover:border-indigo-500 transition-colors ${
                    flipped[index]
                      ? "bg-white dark:bg-gray-800 text-black dark:text-white"
                      : "bg-indigo-500 text-white"
                  }`}
                  animate={{ rotateY: flipped[index] ? 0 : -180 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <p className="text-sm md:text-base lg:text-lg">
                    {card.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </SnapSection>
  );
}
