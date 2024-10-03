import React from 'react'

export default function Main(props) {
  const {details}=props
  return (
    <div >
        <img  src={`${details.hdurl}`} alt='mars image' className='w-[100vp] h-[100vh] bg-cover'></img>
    </div>
      
  )
}
