'use client'

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AnimatedLinkProps {
  to: string;
  children: React.ReactNode;
}

export function AnimatedLink({ to, children }: AnimatedLinkProps) {
  const pathname = usePathname();

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        color: "#9ca3af",
      }}
    >
      <Link
        href={to}
        className={cn(
          pathname === to
            ? "text-primary bg-white font-medium text-lg w-full py-2 px-3 transition-colors hover:text-gray-800 flex justify-center items-center rounded-lg"
            : "text-white font-medium text-lg w-full py-2 px-3 transition-colors hover:text-gray-400 flex justify-center items-center"
        )}
      >
        {children}
      </Link>
    </motion.div >
  )
}
