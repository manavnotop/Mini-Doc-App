import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { LuDownload } from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'
import { motion } from 'framer-motion'

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{bounceStiffness:200, bounceDamping:10}} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='mt-5 text-sm leading-tight font-semibold font-sans'>
            {data.desc}
        </p>
        <div className='footer absolute bottom-0 left-0 w-full'>
            <div className='flex items-center justify-between py-2 px-8 mb-5 pb-0'>
                <h5 className='font-sans'>{data.fileSize}</h5>
                <span className='w-6 h-6 flex items-center justify-center rounded-full bg-zinc-600'>
                    {data.close ? <IoClose /> : <LuDownload size={'0.8em'} color='#fff'/>}
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full bg-${data.tag.tagColor}-600 py-4 flex items-center justify-center`}>
                        <h3 className='font-sans font-semibold text-sm'>
                            {data.tag.tagTitle}
                        </h3>
                    </div>
                )
            }
        </div>
    </motion.div>
  )
}

export default Card