'use client';

import { cn } from "@/lib/utils";
import type { AnimationControls, TargetAndTransition, VariantLabels } from "motion/react";
import { motion } from "motion/react";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: "dark" | "white";
  initial?: boolean | TargetAndTransition | VariantLabels | undefined;
  animate?: boolean | TargetAndTransition | VariantLabels | AnimationControls | undefined;
  whileInView?: TargetAndTransition | VariantLabels | undefined;
  transition?: Record<string, number | string | boolean>;
}

export function AnimatedContainer({
  children,
  initial,
  animate,
  whileInView,
  transition,
  className
}: AnimatedContainerProps) {
  return (
    <motion.div
      className={cn(
        className, "relative"
      )}
      initial={initial ?? undefined}
      animate={animate ?? undefined}
      whileInView={whileInView ?? undefined}
      transition={transition ?? undefined}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
