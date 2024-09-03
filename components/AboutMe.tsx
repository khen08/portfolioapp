"use client";

import { motion } from "framer-motion";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { TextEffect } from "./TextEffect";
import { Highlight } from "@/components/ui/hero-highlight";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SnapSection } from "./SnapSection";

export function AboutMe() {
  return (
    <SnapSection>
      <div className="relative flex flex-col gap-6 items-center justify-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 1 }}
        >
          <Avatar>
            <AvatarImage src="/khen.jpeg" alt="khen's avatar" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
        </motion.div>
        <TextEffect
          per="char"
          className="text-2xl md:text-5xl font-bold dark:text-white text-center"
        >
          Hello! I'm Louiskhen Yagdulas
        </TextEffect>
        <MaxWidthWrapper>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: false, amount: 1 }}
            className="relative flex flex-col gap-6 items-center justify-center px-4 md:px-8"
          >
            <TextEffect
              as="div"
              per="word"
              preset="slide"
              className="tracking-tight font-extralight text-base md:text-2xl dark:text-neutral-200 py-4 text-center leading-relaxed md:leading-snug"
            >
              I'm a Computer Engineering student and web developer, passionate
              about creating{" "}
              <Highlight
                className="tracking-tight text-base md:text-2xl text-center leading-relaxed md:leading-snug"
                initialColor="black"
                animateColor="white"
              >
                efficient
              </Highlight>{" "}
              and{" "}
              <Highlight
                className="tracking-tight text-base md:text-2xl text-center leading-relaxed md:leading-snug"
                initialColor="black"
                animateColor="white"
              >
                user-friendly
              </Highlight>{" "}
              applications.
            </TextEffect>
          </motion.div>
        </MaxWidthWrapper>
      </div>
    </SnapSection>
  );
}
