import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-amber-200 text-2xl text-black p-4 rounded-4xl mb-5'>Tailwind test</h1>
      <Card username="Arpit" button="Click Me" />
      <Card username="Chai" button="tap me" />
    </>
  )
}

export default App
