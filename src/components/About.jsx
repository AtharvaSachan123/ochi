import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

const About = () => {
  return (
    <div id='ffam' className='w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl'>
        <h1 className='font-geko text-[4.5vw] tracking-tight leading-[3.5vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full pt-10 border-t-[1px] mt-20 border-[#a1b562]'>
            <div className='w-1/2 '>
                <h1 className='text-7xl'>Our approach :</h1>
                <button className='px-5 w-44 flex uppercase gap-5 items-centerpx-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                <div className='w-3 h-3 mt-1 bg-zinc-100 rounded-full'></div>
                
                </button>
            </div>
        </div>
    </div>
  )
}

export default About