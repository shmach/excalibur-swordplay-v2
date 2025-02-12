import { Instagram, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./Card";

export function NextEventCard() {
  return (
    <Card className="w-full md:w-[90%] lg:w-[700px] bg-primary text-white mt-4">
      <CardHeader>
        <CardTitle className="text-center font-medieval">Swordplay na Comic-Sul 2024</CardTitle>
      </CardHeader>
      <CardContent className="w-full flex-col justify-center items-center">
        <div className="w-full flex gap-8 justify-center items-center">
          <img src="/images/logo-excalibur-swordplay-md.png" alt="logo do Excalibur Swordplay" className="w-32 h-32" />
          <div className="w-32 h-32 text-center">
            <img src="/images/logo-comic-sul.png" alt="logo da Comic-Sul" className="w-32 h-32" />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center text-center font-semibold text-xl mt-6 gap-2">
          <h3>23 de Novembro de 2024</h3>
          <h4 className="text-lg flex gap-2 items-center"><MapPin /> Shopping Santa Cruz</h4>
        </div>
      </CardContent>
      <CardFooter className="text-center flex flex-col justify-center items-center">
        <span className="text-lg mb-2">Para mais informações</span>
        <motion.div
          whileHover={{
            scale: 1.05,
            color: "#9ca3af",
          }}
        >
          <a
            href="https://www.instagram.com/excalibur.swordplay/"
            target="_blank"
            rel="noreferrer"
            className="text-primary bg-secondary font-medium text-base w-full rounded-lg p-3 transition-colors hover:text-primary hover:bg-secondary flex justify-center items-center gap-2"
          >
            Nos siga para mais informações
            <Instagram />
          </a>
        </motion.div>
      </CardFooter>
    </Card>
  )
}
