'use client'

import { CardBody, CardContainer } from "@/components/3dCard";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { Banner } from "@/components/Banner";
import { HeroSection } from "@/components/HeroSection";
import { Swords } from "lucide-react";

export default function Home() {
  return (
    <section className="w-full h-full mt-[70px] xl:mt-[90px] bg-white flex flex-col justify-center items-center overflow-hidden">
      <Banner />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <AnimatedContainer
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full flex justify-center items-center"
        >
          <HeroSection className="w-full flex justify-center items-center gap-24 py-16" background="white">
            <div className="w-full md:w-[85%] lg:w-[75%] xl:w-[50%] px-5 md:px-0 xl:flex justify-between gap-24">
              <div className="w-full xl:w-[50%] flex flex-col gap-5">
                <h2 className="w-full text-2xl font-medieval font-bold flex">
                  <Swords className="mr-2 mt-1" />
                  O que é o Swordplay?
                </h2>
                <p className="text-lg indent-6 text-justify">
                  <span className="text-3xl font-medieval font-medium">O</span> <span className="font-medium underline">Swordplay</span>, também conhecido como Batalha de Campo, te convida a viajar no tempo e reviver a emoção dos combates medievais. Mais do que um esporte, é uma experiência imersiva que te transforma em um cavaleiro, guerreiro ou viking, empunhando espadas de espuma em batalhas épicas e jogos emocionantes.
                </p>
                <p className="text-lg indent-6 text-justify">
                  <span className="text-3xl font-medieval font-medium">I</span>magine um campo aberto, onde o som de espadas se chocando ecoa pelo ar. Adrenalina e estratégia se misturam enquanto você enfrenta seus oponentes em duelos emocionantes ou batalhas campais em grupo. Essa é a essência do Swordplay, uma simulação de combate medieval que te leva para o coração da Idade Média.
                </p>
              </div>
              <CardContainer className="mb-8">
                <CardBody className="flex flex-col justify-center items-center">
                  <img
                    src="https://utfs.io/f/3b4ed472-4e67-47e3-a753-6df1183d8ca5-jgbhhj.jpg"
                    alt="Foto do Swordplay realizado na Comic-Sul 2023"
                    className="w-[350px] xl:w-[300px]"
                  />
                  <span className="text-center mt-1 text-medium text-sm text-gray-500">Swordplay na Comic-Sul 2023</span>
                </CardBody>
              </CardContainer>
            </div>
          </HeroSection>
        </AnimatedContainer>
      </div>
    </section>
  );
}
