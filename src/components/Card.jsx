import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { LuDownload } from 'react-icons/lu'

function Card() {
  return (
    <div className='relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='mt-5 text-sm leading-tight font-semibold font-sans'>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
        <div className='footer absolute bottom-0 left-0 w-full'>
            <div className='flex items-center justify-between py-2 px-8 mb-5 pb-0'>
                <h5 className='font-sans'>.4mb</h5>
                <span className='w-6 h-6 flex items-center justify-center rounded-full bg-zinc-600'>
                    <LuDownload size={'0.8em'} color='#fff'/>
                </span>
            </div>
            <div className='tag w-full bg-green-500 py-4 flex items-center justify-center'>
                <h3 className='font-sans font-semibold text-sm'>
                    Download Now
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Card