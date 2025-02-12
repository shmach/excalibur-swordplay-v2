import { Check } from "lucide-react";

export function Plans() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 xl:gap-3 text-white mt-8">

      <div className="bg-primary w-full h-[390px] flex flex-col gap-3 justify-center items-center border border-gray-200 rounded-lg">
        <div className="w-full h-16 border-b border-gray-500 flex justify-center items-center">
          <h3 className="font-bold text-xl"><span className="text-3xl font-medieval font-medium">E</span>scudeiro</h3>
        </div>
        <ul className="w-full h-full flex flex-col gap-2 px-2">
          <li className="flex gap-2"><Check /> Logo no Banner do evento</li>
          <li className="flex gap-2 text-gray-600"> Logo no site</li>
          <li className="flex gap-2 text-gray-600"> Bandeiras na arena com a logo</li>
          <li className="flex gap-2 text-gray-600"> Logo em material</li>
          <li className="flex gap-2 text-gray-600"> Divulgação da marca em vídeo</li>
          <li className="flex gap-2"><Check /> Divulgação no Evento</li>
        </ul>
        <div className="w-full h-20 flex justify-center items-center border-t">
          <p className="font-bold text-3xl ">
            R$ 40,00
          </p>
        </div>
      </div>

      <div className="bg-primary w-full h-[390px] flex flex-col gap-3 justify-center items-center border border-gray-200 rounded-lg">
        <div className="w-full h-16 border-b border-gray-500 flex justify-center items-center">
          <h3 className="font-bold text-xl"><span className="text-3xl font-medieval font-medium">C</span>avaleiro</h3>
        </div>
        <ul className="w-full h-full flex flex-col gap-2 px-2">
          <li className="flex gap-2"><Check /> Logo no Banner do evento</li>
          <li className="flex gap-2"><Check /> Logo no site</li>
          <li className="flex gap-2 text-gray-600">Bandeiras na arena com a logo</li>
          <li className="flex gap-2 text-gray-600"> Logo em material</li>
          <li className="flex gap-2"><Check /> Divulgação da marca em vídeo</li>
          <li className="flex gap-2"><Check /> Divulgação no Evento</li>
        </ul>
        <div className="w-full h-20 flex justify-center items-center border-t">
          <p className="font-bold text-3xl ">
            R$ 80,00
          </p>
        </div>
      </div>


      <div className="bg-primary w-full h-[390px] flex flex-col gap-3 justify-center items-center border border-gray-200 rounded-lg">
        <div className="w-full h-16 border-b border-gray-500 flex justify-center items-center">
          <h3 className="font-bold text-xl"><span className="text-3xl font-medieval font-medium">N</span>obre</h3>
        </div>
        <ul className="w-full h-full flex flex-col gap-2 px-2">
          <li className="flex gap-2"><Check /> Logo no Banner do evento</li>
          <li className="flex gap-2"><Check /> Logo no site</li>
          <li className="flex gap-2"><Check /> Bandeiras na arena com a logo</li>
          <li className="flex gap-2"><Check /> Logo em material</li>
          <li className="flex gap-2"><Check /> Divulgação da marca em vídeo</li>
          <li className="flex gap-2"><Check /> Divulgação no Evento</li>
        </ul>
        <div className="w-full h-20 flex justify-center items-center border-t">
          <p className="font-bold text-3xl ">
            R$ 100,00
          </p>
        </div>
      </div>

    </div>
  )
}
