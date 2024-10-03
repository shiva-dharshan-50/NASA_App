import React from 'react'
import { FaInfoCircle } from "react-icons/fa";
export default function Footer(props) {
    const {handleMove,details}=props
  return (
    <div className='flex bg-opacity-50 bg-gray-900 w-[100%] justify-between px-10 items-center text-slate-300 fixed left-0 bottom-0'>
      <div className='lg:p-10'>
        <h1 className='font-semibold lg:text-2xl'>THE IMAGE IS :</h1>
        <h2 className='text-2xl lg:text-[3pc] lg:font-semibold'>{details?.title}</h2>
      </div>
      <div>
        <button onClick={handleMove}><FaInfoCircle className='text-2xl lg:text-[2pc]'/></button>
      </div>
    </div>
  )
}
