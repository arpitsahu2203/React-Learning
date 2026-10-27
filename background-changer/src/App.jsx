import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [back, setback]=useState("white");

  const apply=()=>{
    setback={}
  }

  return (
      <div className='h-screen w-ful' style={{backgroundColor: back}}>
        <div className='rounded-2xl m-3 border-1 border-black bg-white'>
          <button onClick={()=>setback("red")} className='bg-red-700 p-3 text-white font-bold m-1 rounded-2xl'>Red</button>
          <button onClick={()=>setback("blue")} className='bg-blue-700 p-3 text-white font-bold m-1 rounded-2xl'>Blue</button>
          <button onClick={()=>setback("green")} className='bg-green-600 p-3 text-white font-bold m-1 rounded-2xl'>Green</button>
          <button onClick={()=>setback("yellow")} className='bg-amber-300 p-3 text-white font-bold m-1 rounded-2xl'>Yellow</button>
          <button onClick={()=>setback("purple")} className='bg-purple-600 p-3 text-white font-bold m-1 rounded-2xl'>Purple</button>
          <button onClick={()=>setback("#000080")} className='bg-blue-900 p-3 text-white font-bold m-1 rounded-2xl'>Navy Blue</button>
          </div>      
      </div>
  )
}

export default App
