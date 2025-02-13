'use client';

import { AnimatedContainer } from "@/components/AnimatedContainer";
import { NextEventCard } from "@/components/NextEventCard";
import { swordplay2023Photos } from "@/lib/swordplayPictures";

export default function EventsPage() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-white mt-[100px] px-5 py-6">
      <AnimatedContainer
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full md:w-[85%] lg:w-[75%] xl:w-[70%] flex flex-col justify-center"
      >
        <h1 className="font-medieval font-bold text-2xl text-center mt-4 lg:mt-8">
          <span className="text-4xl">E</span>ventos de Swordplay
        </h1>
        <div className="w-full mt-10 flex flex-col justify-center items-center">
          <h2 className="w-fit font-medieval font-semibold text-xl text-center border-b border-gray-500 py-1">Próximo Evento de Swordplay:</h2>
          <NextEventCard />
        </div>
        <div className="w-full mt-16 flex flex-col justify-center items-center mb-24">
          <h2 className="font-medieval font-semibold text-xl text-center border-b border-gray-500 py-1">
            Swordplay na Comic-Sul 2023
          </h2>
          <ul className="w-full flex flex-col justify-center items-center gap-4 lg:gap-x-8 lg:flex-row lg:flex-wrap xl:gap-x-32">
            {
              swordplay2023Photos.map((photo) => (
                <li key={photo.src} className="mt-10">
                  <img
                    loading="lazy"
                    src={photo.src}
                    alt={photo.alt}
                    className="w-[350px] xl:w-[400px] object-cover rounded-lg shadow-md hover:scale-110 transition-transform"
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </AnimatedContainer>
    </section>
  )
}
