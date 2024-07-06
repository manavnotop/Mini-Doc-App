import React from 'react'
import Card from './Card'

function Foreground() {
  const data = [
    {
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    fileSize: ".9mb",
    close: false,
    tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"}
    }
]
  
  return (
    <div className='h-full w-full top-0 left-0 z-[3] fixed flex gap-10 flex-wrap p-7'>
        {data.map((item, index)=>(
          <Card data = {item}/>
        ))}
    </div>
  )
}

export default Foreground