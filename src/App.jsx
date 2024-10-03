import React, { useEffect, useState } from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import { data } from 'autoprefixer'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function App() {
  const [details,setDetails]=useState(null)
  useEffect(()=>{
    const fetchData=async ()=>{
      const NASA_KEY=import.meta.env.VITE_NASA_API_KEY
      const url='https://api.nasa.gov/planetary/apod'+`?api_key=${NASA_KEY}`
      const today=(new Date()).toDateString()
      const localkey=`NASA-${today}`
      if(localStorage.getItem(localkey)!=null)
      {
        const apiData=JSON.parse(localStorage.getItem(localkey))
        setDetails(apiData)
        console.log('fetched from cache today')
        return 
      }
      localStorage.clear()
      try{
        const res=await fetch(url)
        const data=await res.json()
        localStorage.setItem(localkey,JSON.stringify(data))
        setDetails(data)
        console.log('fetched from api today')
       
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchData()
  },[])
  const[checked,setChecked]=useState(true)
  const handleMove=()=>{
    setChecked(!checked)
}
  return (
    <div className=''>
      {details? <Main details={details}/>:<div className='text-4xl gap-10 w-[100%] h-[100vh] flex justify-center items-center'>
        Please wait...<AiOutlineLoading3Quarters className='text-[5pc] text-slate-300 animate-spin duration-200 '/></div>}
      {details && <SideBar handleMove={handleMove} checked={checked} setChecked={setChecked} details={details}/>}
      {details && <Footer handleMove={handleMove} details={details}/>}
      
    </div>
  )
}

export default App
// ngrok config add-authtoken 2fceptsaHPpGXb4htvyfl1pNtcS_6TenrL4tqgbfEyskiK2V2 
// ngrok http http://localhost:8080
