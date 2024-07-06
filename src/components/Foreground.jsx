import React from 'react'
import Card from './Card'

function Foreground() {
  const data = [{
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    fileSize: ".9mb",
    close: true,
    tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
  }]
  
  return (
    <div className='h-full w-full top-0 left-0 z-[3] fixed'>
        <Card />
    </div>
  )
}

export default Foreground