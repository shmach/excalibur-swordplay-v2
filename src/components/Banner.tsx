'use client'

import { motion } from 'motion/react';

export function Banner() {
  return (
    <div className="w-full h-full bg-primary py-6 relative font-medieval">
      <motion.div
        className='absolute w-full h-full top-0 left-0 bg-primary'
        initial={{
          width: '100%',
        }}
        animate={{
          width: "0%",
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      <div className="w-full flex gap-2 justify-center items-center mt-6">
        <span className="text-2xl lg:text-3xl font-bold text-white">Excalibur</span>
        <img src="images/logo-excalibur-swordplay-md.png" alt="Logo do Excalibur Swordplay" className="w-32 h-32 lg:w-40 lg:h-40" />
        <span className="text-2xl lg:text-3xl font-bold text-white">Swordplay</span>
      </div>
      <div className='w-full flex gap-1 text-white justify-center items-center px-5'>
        <h1 className='text-center text-2xl lg:text-3xl font-bold mt-3'>
          <span className='text-4xl lg:text-6xl'>M</span>ergulhe em um Mundo Medieval!
        </h1>
      </div>
    </div>
  )
}
