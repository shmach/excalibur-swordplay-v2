'use client';

import { AnimatedContainer } from "@/components/AnimatedContainer";
import { Plans } from "@/components/Plans";
import { Instagram, Swords } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export function AboutPage() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-white mt-[100px] px-5 py-6">
      <h1 className="font-medieval font-bold text-2xl text-center mt-4 lg:mt-8">
        <span className="text-4xl">S</span>obre o Excalibur Swordplay
      </h1>

      <AnimatedContainer
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full md:w-[85%] lg:w-[75%] mt-10 xl:flex justify-center gap-24
        "
      >
        <div className="w-full xl:w-[50%] flex flex-col gap-5">
          <h2 className="w-full text-2xl font-medieval font-bold flex">
            <Swords className="mr-2 mt-1" />
            Quem nós somos?
          </h2>
          <p className="text-lg indent-6 text-justify">
            <span className="text-3xl font-medieval font-medium">O</span> <span className="font-medium underline">Excalibur Swordplay</span> é organizado por três amigos de forma independente que gostam muito do tema medieval, seja tanto de fantasia como nos RPGs, como também gostamos do medieval "realista".
          </p>
          <div className="w-full flex justify-center items-center">
            <div className="bg-primary w-fit p-3 rounded-lg">
              <Image
                src="/images/logo-excalibur-swordplay-md.png"
                alt="Logo do Excalibur Swordplay"
                width={176}
                height={176}
              />
            </div>
          </div>
        </div>
      </AnimatedContainer>

      <AnimatedContainer
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full md:w-[85%] lg:w-[75%] mt-10 xl:flex justify-center gap-24"
      >
        <div className="w-full xl:w-[50%] flex flex-col gap-5">
          <h2 className="w-full text-2xl font-medieval font-bold flex">
            <Swords className="mr-2 mt-1" />
            O Swordplay sempre será junto com o Comic-Sul?
          </h2>
          <p className="text-lg indent-6 text-justify">
            <span className="text-3xl font-medieval font-medium">N</span>ão, o <span className="font-medium underline">Excalibur Swordplay</span> é independente e sempre que for possível terá mais eventos ao decorrer do ano, no qual serão noticiados, tanto no nosso site, como na página no instagram, além do nosso grupo oficial no whatsapp
          </p>
        </div>
      </AnimatedContainer>

      <AnimatedContainer
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full md:w-[85%] lg:w-[75%] mt-10 xl:flex justify-center gap-24"
      >
        <div className="w-full xl:w-[50%] flex flex-col gap-5">
          <h2 className="w-full text-2xl font-medieval font-bold flex">
            <Swords className="mr-2 mt-1" />
            Eu posso apoiar o evento?
          </h2>
          <p className="text-lg indent-6 text-justify">
            <span className="text-3xl font-medieval font-medium">S</span>im, como foi dito anteriomente, o <span className="font-medium underline">Excalibur Swordplay</span> é independente, então iremos em breve disponibilizar campanhas para apoio financeiro.
          </p>
          <Plans />
        </div>
      </AnimatedContainer>

      <AnimatedContainer
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full md:w-[85%] lg:w-[75%] xl:w-[70%] mt-10 xl:flex justify-center gap-24"
      >
        <div className="w-full xl:w-[50%] flex flex-col gap-5">
          <p className="text-lg text-center">
            <span className="text-3xl font-medieval font-medium">S</span>iga o <span className="font-medium underline">Excalibur Swordplay</span> nas redes sociais!
          </p>
          <div className="w-full flex justify-center items-center">
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
        </div>
      </AnimatedContainer>
    </section>
  )
}
