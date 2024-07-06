import React from 'react'

function Background() {
  return (
    <div className='fixed w-full h-screen z-[2]'>
      <div className='absolute top-[5%] w-full py-10 text-zinc-600 font-semibold text-xl flex justify-center'>
          Documents.
      </div>
      <h1 className='absolute text-[13vw] -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 leading-none tracking-tight font-semibold text-zinc-900'>
          mnop.
      </h1>
    </div>
  )
}

export default Background