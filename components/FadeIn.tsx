"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = MotionProps & {
  as?: "div" | "article" | "section";
  delay?: number;
  duration?: number;
  className?: string;
  children: ReactNode;
};

export default function FadeIn({
  as = "div",
  delay = 0,
  duration = 0.8,
  className,
  children,
  ...motionProps
}: FadeInProps) {
  const Component =
    (as === "article"
      ? motion.article
      : as === "section"
      ? motion.section
      : motion.div) as any;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-80px" }}
      {...motionProps}
    >
      {children}
    </Component>
  );
}
