'use client';

import { AnimatedContainer } from "@/components/AnimatedContainer";
import Carousel, { SlideData } from "@/components/Carousel";
import { NextEventCard } from "@/components/NextEventCard";
import { swordplay2023Photos, swordplay2024VerticalPhotos } from "@/lib/swordplayPictures";

export default function EventsPage() {
  const swordplay2023Carousel: SlideData[] = swordplay2023Photos.map((photo) => {
    return {
      src: photo.src
    }
  })

  const swordplay2024Carousel: SlideData[] = swordplay2024VerticalPhotos.map((photo) => {
    return {
      src: photo.src
    }
  })

  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-white mt-[100px] px-5 py-6 overflow-x-hidden">
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
        <section className="min-w-full min-h-full flex flex-col justify-center items-center gap-8">
          <div className="w-full mt-16 flex flex-col justify-center items-center mb-24 gap-8">
            <h2 className="font-medieval font-semibold text-xl text-center border-b border-gray-500 py-1">
              Swordplay na Comic-Sul 2024
            </h2>
            <Carousel slides={swordplay2024Carousel} />
          </div>
          <div className="w-full mt-16 flex flex-col justify-center items-center mb-24 gap-8">
            <h2 className="font-medieval font-semibold text-xl text-center border-b border-gray-500 py-1">
              Swordplay na Comic-Sul 2023
            </h2>
            <Carousel slides={swordplay2023Carousel} />
          </div>
        </section>
      </AnimatedContainer>
    </section>
  )
}
