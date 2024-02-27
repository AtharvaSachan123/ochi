import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import home from '../images/homeimage.jpg'
const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return <div className='masker '>
            <div className='w-fit flex items-start  '>
              {index === 1 &&
                (<div className=' mr-[1vw] w-[9vw] rounded-md h-[7vw] relative -top[1.2vw] flex flex-col justify-center'><img className='rounded-md' src={home} /></div>)}

              <h1 id='fontfam' key={index} className='mt-4  uppercase text-[9vw] leading-[6vw] tracking-tighter font-teko font-optical-sizing-auto font-semibold'>{item}
              </h1>
            </div>
          </div>
        })}
      </div>
      <div className='border-t-[1px] border-zwhite mt-20 flex justify-between items-center py-5 px-20 '>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p className='text-md font-light tracking-tight leading-none '>{item}</p>




        ))}
        <div className='start flex items-center gap-5'>
          <div class='px-5 py-2 border-[2px] uppercase text-md font-light border-zinc-500 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-black'> Start the Project </div>
          <div className='w-10 h-10 flex items-center justify-center border-zinc-500   border-[2px] rounded-full  cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-black'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>

          </div>

        </div>
      </div>


    </div>
  )
}

export default LandingPage