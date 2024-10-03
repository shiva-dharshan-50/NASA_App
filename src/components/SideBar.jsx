import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
export default function SideBar(props) {
    const{checked,handleMove,details}=props

  return (
    <div style={{display:checked?'none':'flex'}}  className='bg-gray-800 absolute z-10 max-w-[50%] h-[100vh] lg:max-w-[30%] right-0 top-0 p-5 rounded-sm flex flex-col justify-between'>
        <div className='h-[100vh] overflow-scroll'>
        <h2 className='lg:text-2xl font-bold'>{details.date}</h2>
      <div>
        <p className='lg:text-2xl font-medium'>Description</p>
        <p className='text-sm lg:text-lg lg:mt-4'>{details.explanation}</p>
      </div>
        </div>
        <div>
            <button onClick={()=>handleMove()}><FaArrowRight className='mt-4 text-2xl hover:translate-x-2 duration-200'/></button>
        </div>
    </div>
  )
}
