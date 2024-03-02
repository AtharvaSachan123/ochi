import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {

  return (
    <div className='w-full py-20 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-400 flex gap-10 overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5, repeatDelay: 0, }} className='text-[22vw] -mb-[5vw] leading-none font-teko font-semibold uppercase  pt-10  text-white' >we are ochi</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5, repeatDelay: 0, }} className='text-[22vw] -mb-[5vw] leading-none font-teko font-semibold uppercase  pt-10 text-white'>we are ochi</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5, repeatDelay: 0, }} className='text-[22vw] -mb-[5vw] leading-none font-teko font-semibold uppercase  pt-10 text-white'>we are ochi</motion.h1>

      </div>

    </div>
  )
}

export default Marquee