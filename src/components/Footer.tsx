'use client';

import { Instagram } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="w-full h-[90px] bg-primary text-white flex justify-between md:justify-center md:gap-20 items-center px-5">
      <div className="w-fit flex justify-center items-center transition-transform gap-2">
        <img src="/images/logo-excalibur-swordplay-md.png" alt="Logo do Excalibur Swordplay" className="w-16 h-16" />
        <span className="text-lg font-bold text-white">Excalibur</span>
        <span className="text-lg font-bold text-white">Swordplay</span>
      </div>
      <div className="font-medium flex justify-center items-center gap-2">
        <span className="hidden md:block text-lg">Nos siga:</span>
        <motion.a
          href="https://www.instagram.com/excalibur.swordplay/"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            scale: 1.1,
            color: "#9ca3af",
          }}
        >
          <Instagram />
        </motion.a>
      </div>
    </footer>
  )
}
