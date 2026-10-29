/**
 * ============================================================================
 * REVISION NOTES: tailwind-props -> App.jsx (Props Passing & Tailwind CSS)
 * ============================================================================
 * 
 * 1. WHAT ARE PROPS (PROPERTIES)?
 *    - Props are inputs passed from a Parent component to a Child component.
 *    - Data flow in React is strictly UNIDIRECTIONAL (one-way: top to bottom).
 *    - Props are IMMUTABLE (read-only): a child component must never modify its received props.
 * 
 * 2. PASSING PROPS:
 *    - Strings can be passed directly with quotes: `username="Arpit"`
 *    - Numbers, booleans, objects, arrays, and functions MUST be wrapped in curly braces:
 *        * Number: `age={25}`
 *        * Boolean: `isOnline={true}`
 *        * Object: `myObj={{ name: "Arpit", age: 25 }}`
 *        * Array: `myArr={[1, 2, 3]}`
 *        * Function: `handleClick={() => console.log('clicked')}`
 * 
 * 3. TAILWIND CSS IN REACT:
 *    - Utility-first CSS framework applied using the `className` attribute.
 *    - `className='bg-amber-200 text-2xl text-black p-4 rounded-4xl mb-5'`
 *    - Remember: In JSX, always use `className` instead of HTML `class` because `class`
 *      is a reserved keyword in JavaScript.
 * ============================================================================
 */

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
      {/* Reusable Card component rendered with distinct props */}
      <Card username="Arpit" button="Click Me" />
      <Card username="Chai" button="tap me" />
      {/* If props are omitted, Card's default values will kick in */}
    </>
  )
}

export default App

