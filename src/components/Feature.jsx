import React from 'react'

const Feature = () => {
  return (
    <div className='w-full py-20 '>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-16'>
            <h1 className='text-8xl font-geko tracking-tight'>Featured Projects</h1>
          
        </div>
        <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>
             
                <div className='cardcontainer  relative w-1/2 h-[75vh]  '>
                  <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-8xl  leading-none tracking-tighter font-teko'>
                     {"FYDE".split('').map((item,index)=><span>{item}</span>)}
                     </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden '> 
                        <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>

                <div className='cardcontainer relative   w-1/2 h-[75vh]   '>
                <h1 className='absolute right-full translate-x-1/2 top-1/2 translate-y-1/2 text-[#CDEA68] z-[9] text-8xl  leading-none tracking-tighter font-teko'>
                  {"VISE".split('').map((item,index)=><span>{item}</span>)}
                </h1>

                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover '   src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>

                
            </div>
        </div>
       
    </div>
  )
}

export default Feature