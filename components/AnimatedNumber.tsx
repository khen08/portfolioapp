"use client";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: Parameters<typeof useSpring>[1];
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
}: AnimatedNumberProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const spring = useSpring(0, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (inView) {
      spring.set(0); // Reset to 0
      setTimeout(() => spring.set(value), 100);
    }
  }, [inView, value, spring]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
