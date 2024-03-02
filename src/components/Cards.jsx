import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex items-center px-32 gap-5'>
      <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004d43]'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute px-5 py-1 rounded-full border-[1px] left-10 border-[#CDEA68] bottom-10 text-[#CDEA68]'>&copy;2019-2022</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-zinc-800'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute px-5 py-1 rounded-full border-[1px] left-10 border-white uppercase tracking-tighter bottom-10 text-zinc-100'>Rating 5.0 on clutch</button>
        </div>
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-zinc-800'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute px-5 py-1 rounded-full border-[1px] left-10 border-white bottom-10 uppercase tracking-tighter text-zinc-100'>business bootcamp alumni</button>
        </div>

      </div>
    </div>
  )
}

export default Cards