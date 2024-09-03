"use client";

import { motion } from "framer-motion";
import React from "react";

type SnapSectionProps = {
  children: React.ReactNode;
};

export function SnapSection({ children }: SnapSectionProps) {
  return (
    <motion.div
      className="snap-start w-full h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
