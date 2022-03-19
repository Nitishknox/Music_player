
import React from 'react'
import './sidebarOptions.css'


export default function SidebarOptions({title,Icon}) {
  return (
    <div className='sidebarOptions' >
    <div className='sidebarOptions__Icon'>{Icon}</div>
   
     {Icon? <h4>{title}</h4>:<p>{title}</p>}
      </div>
  )
}
