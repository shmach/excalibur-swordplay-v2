'use client'

import { CardBody, CardContainer } from "@/components/3dCard";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { Banner } from "@/components/Banner";
import { HeroSection } from "@/components/HeroSection";
import { NextEventCard } from "@/components/NextEventCard";
import { Plans } from "@/components/Plans";
import { Rules } from "@/components/Rules";
import { BicepsFlexed, Calendar, Mail, Scroll, ShieldBanIcon, Sword, Swords, User } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

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

        <AnimatedContainer
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full flex justify-center items-center"
        >
          <HeroSection className="w-full flex flex-col xl:flex-row justify-center items-center px-5 md:px-0 gap-24 text-white py-20" background="dark">
            <div className="w-full md:w-[85%] lg:w-[75%] xl:w-[50%] flex flex-col justify-center gap-5">
              <h2 className="w-full text-2xl font-medieval font-bold flex">
                <ShieldBanIcon size={25} className="mr-2 mt-1" />
                Equipamentos e Segurança
              </h2>
              <p className="text-lg indent-6 text-justify">
                <span className="text-3xl font-medieval font-medium">P</span>ara garantir a segurança e o realismo dos combates, os participantes usam espadas, machados, escudos e armaduras feitos de materiais como espuma e cano. Equipamentos leves e seguros que permitem golpes realistas sem causar danos.
              </p>
              <CardContainer className="mb-8">
                <CardBody className="flex flex-col justify-center items-center">
                  <img
                    src="https://utfs.io/f/aeL4FiT9yPbUyQxB6P1COezcd6rJwuYl5ZnkpbBV9AaXLfKN"
                    alt="Foto do Swordplay realizado na Comic-Sul 2023"
                    className="w-[500px] mt-8"
                  />
                  <span className="text-center mt-1 text-medium text-sm text-gray-500">Escudos utilizados no Swordplay</span>
                </CardBody>
              </CardContainer>
            </div>
          </HeroSection>
        </AnimatedContainer>

        <AnimatedContainer
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full flex justify-center items-center"
        >
          <HeroSection className="w-full flex justify-center items-center gap-24 py-16" background="white">
            <div className="w-full md:w-[85%] lg:w-[75%] xl:w-[50%] xl:flex px-5 md:px-0 justify-between gap-24">
              <div className="w-full xl:w-[50%] flex flex-col gap-5">
                <h2 className="w-full text-2xl font-medieval font-bold flex">
                  <BicepsFlexed className="mr-2 mt-1" />
                  Benefícios para o Corpo e Mente
                </h2>
                <p className="text-lg indent-6 text-justify">
                  <span className="text-3xl font-medieval font-medium">O</span> <span className="font-medium underline">Swordplay</span> vai além da diversão. A prática oferece diversos benefícios para o corpo e a mente:
                </p>
                <ul className="w-full flex flex-col gap-6 text-lg">
                  <li className="text-justify">
                    <span className="font-bold font-medieval flex text-xl">
                      <Sword className="rotate-[135deg] mt-0.5 mr-2" />
                      Exercício Físico Completo:
                    </span>
                    <p className="indent-6 text-base">
                      <span className="text-xl font-medieval font-medium">O</span> Swordplay trabalha todo o corpo, proporcionando um treino cardiovascular intenso. Agilidade, força, coordenação e resistência são alguns dos benefícios físicos que você pode alcançar.
                    </p>
                  </li>

                  <li className="text-justify">
                    <span className="font-bold font-medieval flex text-xl">
                      <Sword className="rotate-[135deg] mt-0.5 mr-2" />
                      Desenvolvimento Mental:
                    </span>
                    <p className="indent-6 text-base">
                      <span className="text-xl font-medieval font-medium">A</span> estratégia é fundamental para vencer os combates. O Swordplay te desafia a pensar rápido, tomar decisões estratégicas e trabalhar em equipe para alcançar a vitória.
                    </p>
                  </li>

                  <li className="text-justify">
                    <span className="font-bold font-medieval flex text-xl">
                      <Sword className="rotate-[135deg] mt-0.5 mr-2" />
                      Socialização e Diversão:
                    </span>
                    <p className="indent-6 text-base">
                      <span className="text-xl font-medieval font-medium">O</span> Swordplay é uma ótima maneira de conhecer novas pessoas, fazer amigos e se divertir em um ambiente descontraído e cheio de adrenalina.
                    </p>
                  </li>

                  <li className="text-justify">
                    <span className="font-bold font-medieval flex text-xl">
                      <Sword className="rotate-[135deg] mt-0.5 mr-2" />
                      Autoconfiança e Superação:
                    </span>
                    <p className="indent-6 text-base">
                      <span className="text-xl font-medieval font-medium">C</span>ada desafio superado no campo de batalha te leva a um novo nível de autoconfiança e te incentiva a superar seus limites.
                    </p>
                  </li>
                </ul>
              </div>
              <CardContainer className="mb-16 xl:mb-0">
                <CardBody className="flex flex-col justify-center items-center">
                  <img
                    src="https://utfs.io/f/962e3484-6f26-4d76-9373-7651942660f7-jgbhhk.jpg"
                    alt="Foto do Swordplay realizado na Comic-Sul 2023"
                    className="w-[350px] xl:w-[300px]"
                  />
                  <span className="text-center mt-1 text-medium text-sm text-gray-500">Swordplay na Comic-Sul 2023</span>
                </CardBody>
              </CardContainer>
            </div>
          </HeroSection>
        </AnimatedContainer>

        <AnimatedContainer
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full flex justify-center items-center"
        >
          <HeroSection className="w-full flex flex-col xl:flex-row justify-center items-center gap-24 text-white py-20" background="dark">
            <div className="w-full md:w-[85%] lg:w-[75%] xl:w-[50%] flex flex-col px-5 md:px-0 justify-center">
              <div className="w-full flex flex-col gap-5">
                <h2 className="w-full text-2xl font-medieval font-bold flex">
                  <User className="mr-2 mt-1" />
                  Eu posso jogar o Swordplay?
                </h2>
                <p className="text-lg indent-6 text-justify">
                  <span className="text-3xl font-medieval font-medium">O</span> <span className="font-medium underline">Swordplay</span> é uma atividade para todas as idades e níveis de experiência. Homens e mulheres, jovens e adultos, todos podem se divertir e se beneficiar com a prática.
                </p>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-center gap-10 items-center mt-8">
                <CardContainer>
                  <CardBody className="flex flex-col justify-center items-center">
                    <img
                      src="https://utfs.io/f/b79d5010-430d-4604-ad75-1bf2bfd3a6eb-jgbhhh.jpg"
                      alt="Crianças jogam Swordplay no evento realizado na Comic-Sul 2023"
                      className="w-[350px] xl:w-[300px]"
                    />
                  </CardBody>
                </CardContainer>
                <CardContainer>
                  <CardBody className="flex flex-col justify-center items-center">
                    <img
                      src="https://utfs.io/f/ed6e5f65-e039-4707-8474-caf41596d804-jgbhhi.jpg"
                      alt="novamente crianças jogam Swordplay no evento realizado na Comic-Sul 2023"
                      className="w-[350px] xl:w-[300px]"
                    />
                  </CardBody>
                </CardContainer>
              </div>
              <span className="text-center text-medium text-sm mt-3 text-gray-500">
                Swordplay na Comic-Sul 2023
              </span>
            </div>
          </HeroSection>
        </AnimatedContainer>

        <AnimatedContainer
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full flex justify-center items-center"
        >
          <HeroSection className="w-full flex flex-col justify-center items-center px-5 md:px-0 gap-24 py-20" background="white">
            <div className="w-full md:w-[85%] lg:w-[75%] xl:w-[50%] flex flex-col justify-center">
              <div className="w-full flex flex-col gap-5 mb-8">
                <h2 className="w-full text-2xl font-medieval font-bold flex">
                  <Scroll size={25} className="mr-2 mt-1" />
                  Como funciona as regras do Swordplay?
                </h2>
                <p className="text-lg indent-6 text-justify">
                  <span className="text-3xl font-medieval font-medium">P</span>ara aprender as regras do <span className="font-bold text-medieval">swordplay</span> intereja com sessão abaixo que contém as regras básicas para você já poder começar a jogar!
                </p>
              </div>
              <Rules duration={9} />
            </div>
          </HeroSection>
        </AnimatedContainer>

        <AnimatedContainer
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full flex justify-center items-center"
        >
          <HeroSection className="w-full flex flex-col justify-center items-center px-5 md:px-0 gap-24 py-20 text-white" background="dark">
            <div className="w-full md:w-[85%] lg:w-[75%] xl:w-[50%] flex flex-col justify-center">
              <div className="w-full flex flex-col gap-5">
                <h2 className="w-full text-2xl font-medieval font-bold flex">
                  <Calendar size={25} className="mr-2 mt-1" />
                  Quando será o próximo evento?
                </h2>
                <p className="text-lg indent-6 text-justify">
                  <span className="text-3xl font-medieval font-medium">O</span> próximo evento do <span className="font-bold text-medieval">Excalibur Swordplay</span> será na Comic-Sul 2024 no dia 23 de Novembro de 2024, no Shopping Santa Cruz.
                </p>
                <div className="w-full flex justify-center items-center">
                  <NextEventCard />
                </div>
                <p className="text-lg indent-6 text-justify">
                  <span className="text-3xl font-medieval font-medium">P</span>ara mais informações ou deseja visualizar eventos anteriores, verifique a página de Eventos para mais!
                </p>
              </div>

              <div className="w-full flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: "#9ca3af",
                  }}
                  className="mt-6"
                >
                  <Link href="/eventos" className="text-white bg-primary font-medium text-lg w-[200px] rounded-lg py-2 transition-colors hover:text-primary hover:bg-secondary flex justify-center items-center mb-16">
                    Ver Eventos
                  </Link>
                </motion.div>
              </div>

            </div>
          </HeroSection>
        </AnimatedContainer>

        <AnimatedContainer
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full flex justify-center items-center"
        >
          <HeroSection className="w-full flex flex-col justify-center items-center px-5 md:px-0 gap-24 py-20" background="white">
            <div className="w-full md:w-[85%] lg:w-[75%] xl:w-[50%] flex flex-col justify-center">
              <div className="w-full flex flex-col gap-5">
                <h2 className="w-full text-2xl font-medieval font-bold flex">
                  <Calendar size={25} className="mr-2 mt-1" />
                  Patrocinadores
                </h2>
                <p className="text-lg indent-6 text-justify">
                  <span className="text-3xl font-medieval font-medium">O</span> próximo evento do <span className="font-bold text-medieval">Excalibur Swordplay</span> contará com o Apoio das seguintes empresas
                </p>
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      color: "#9ca3af",
                    }}
                    className="mt-4"
                  >
                    <a
                      href="https://www.instagram.com/maisfacilengenharia/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/images/mais-facil-patrocinador.png"
                        className="w-[250px] rounded-lg"
                        alt="Logo da Mais Fácil Engenharia e Construção" />
                    </a>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      color: "#9ca3af",
                    }}
                    className="mt-4"
                  >
                    <a
                      href="https://www.instagram.com/sulbox"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/images/sulbox-patrocinador.png"
                        className="w-[250px] rounded-lg"
                        alt="Logo da Mais Fácil Engenharia e Construção" />
                    </a>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      color: "#9ca3af",
                    }}
                    className="mt-4"
                  >
                    <a
                      href="https://www.instagram.com/aspenodontologia/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/images/aspen-odontologia-patrocinador.jpg"
                        className="w-[250px] rounded-lg"
                        alt="Logo da Aspen Odontologia" />
                    </a>
                  </motion.div>

                </div>
                <p className="text-lg indent-6 text-justify">
                  <span className="text-3xl font-medieval font-medium">A</span>poie o Excalibur Swordplay você também! Oferecemos os seguintes planos:
                </p>
              </div>

              <Plans />

              <div className="w-full flex flex-col justify-center items-center mt-5">
                <p className="text-lg">Ficou interessado? Entre em contato conosco:</p>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    color: "#9ca3af",
                  }}
                  className="mt-4"
                >
                  <a
                    href="https://wa.me/+555198660606"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary bg-secondary font-medium text-base w-full rounded-lg p-3 transition-colors hover:text-primary hover:bg-secondary flex justify-center items-center"
                  >
                    Entre em contato conosco
                    <img
                      src="/images/whatsapp.svg"
                      alt="botão para grupo do whatsapp"
                      className="w-6 h-6 ml-2"
                    />
                  </a>
                </motion.div>
                <p className="text-lg mt-3">Ou entre em contato por e-mail:</p>
                <h4 className="flex justify-center items-center gap-2 text-lg bg-gray-400 px-3 py-1 font-medium rounded-full mt-2">
                  <Mail /> excaliburswordplay@gmail.com
                </h4>
              </div>
            </div>
          </HeroSection>
        </AnimatedContainer>
      </div>
    </section>
  );
}
