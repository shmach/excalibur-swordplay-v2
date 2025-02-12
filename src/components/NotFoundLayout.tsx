import { motion } from "motion/react";
import Link from "next/link";

export default function NotFoundLayout() {
  return (
    <section className="min-w-full min-h-screen px-5 py-6 bg-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-medium font-medieval">
        <span className="text-5xl font-medieval font-medium">E</span>rro!!!
      </h1>
      <p className="text-xl text-center mt-4">Parece que o conteúdo que você acessou está com problemas ou não existe.</p>
      <div className="w-80 h-80 flex justify-center items-center mt-8 mb-4">
        <img
          src="/images/error-page-img.jpeg"
          alt="botão para grupo do whatsapp"
          className="w-full h-full"
        />
      </div>
      <p className="text-xl text-center mt-4">Use o botão abaixo para retornar a página inicial.</p>

      <motion.div
        whileHover={{
          scale: 1.1,
          color: "#9ca3af",
        }}
        className="mt-6"
      >
        <Link href="/" className="text-white bg-primary font-medium text-lg w-[200px] rounded-lg py-2 transition-colors hover:text-primary hover:bg-secondary flex justify-center items-center mb-16">
          Voltar ao Início
        </Link>
      </motion.div>
    </section>
  )
}
