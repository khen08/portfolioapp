"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Component
      className={cn(
        "relative h-[40rem] flex items-center bg-white dark:bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className={cn("relative z-20", className)}>{children}</div>
    </Component>
  );
};

// Define the duration for the animations
const ANIMATION_DURATION = 1.5;

export const Highlight = ({
  children,
  className,
  initialColor = "black",
  animateColor = "white",
}: {
  children: React.ReactNode;
  className?: string;
  initialColor?: string;
  animateColor?: string;
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHighlighted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const characterVariants = {
    initial: { color: initialColor }, // Use the initialColor prop
    animate: { color: animateColor }, // Use the animateColor prop
  };

  const textVariants = {
    initial: { backgroundSize: "0% 100%" },
    animate: { backgroundSize: "100% 100%" },
  };

  const splitText = (text: React.ReactNode) => {
    if (typeof text === "string") {
      return text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={characterVariants}
          initial="initial"
          animate={isHighlighted ? "animate" : "initial"}
          transition={{
            duration: ANIMATION_DURATION,
            ease: "linear",
            delay: (index / text.length) * ANIMATION_DURATION,
          }}
        >
          {char}
        </motion.span>
      ));
    }
    return text;
  };

  return (
    <motion.span
      initial="initial"
      animate={isHighlighted ? "animate" : "initial"}
      variants={textVariants}
      transition={{
        backgroundSize: {
          duration: ANIMATION_DURATION,
          ease: "linear",
        },
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-500 dark:to-blue-700`,
        className
      )}
    >
      {splitText(children)}
    </motion.span>
  );
};
