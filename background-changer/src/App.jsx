/**
 * ============================================================================
 * REVISION NOTES: background-changer -> App.jsx (Event Handling & Inline Styles)
 * ============================================================================
 * 
 * 1. EVENT HANDLING IN REACT:
 *    - In React, events are named in camelCase (e.g., `onClick`, `onChange`, `onSubmit`).
 *    - You pass a FUNCTION REFERENCE to the handler, NOT a function call!
 * 
 *    * WRONG: `onClick={setback("red")}`
 *      Why? Because JavaScript immediately executes `setback("red")` during component render!
 *      This triggers a state update -> which triggers a re-render -> which calls `setback` again,
 *      resulting in the infamous error: "Too many re-renders. React limits the number of renders to prevent an infinite loop."
 * 
 *    * CORRECT: `onClick={() => setback("red")}`
 *      Wrapping it inside an anonymous arrow function ensures it is ONLY executed when
 *      the user actually clicks the button.
 * 
 *    * NO ARGUMENTS: `onClick={myHandler}`
 *      If no custom parameters are needed, simply pass the function reference directly without calling it.
 * 
 * 2. DYNAMIC INLINE STYLES:
 *    - In JSX, inline styles are passed as a JavaScript object: `style={{ backgroundColor: back }}`
 *    - Outer `{}` = Evaluates a JavaScript expression inside JSX.
 *    - Inner `{}` = The JavaScript object containing style rules.
 *    - CSS properties use camelCase: `backgroundColor` instead of `background-color`.
 * ============================================================================
 */

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  // State storing the current background color as a CSS string (name or hex)
  let [back, setback] = useState("white");

  return (
    // Dynamic inline style bound to 'back' state; updates full viewport background on change
    <div className='h-screen w-full flex justify-center items-end pb-12 transition-colors duration-300' style={{ backgroundColor: back }}>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl border border-gray-200'>
        {/* Each button passes an arrow callback with its respective color */}
        <button onClick={() => setback("red")} className='bg-red-700 px-4 py-1 text-white font-semibold rounded-full shadow-md'>Red</button>
        <button onClick={() => setback("blue")} className='bg-blue-700 px-4 py-1 text-white font-semibold rounded-full shadow-md'>Blue</button>
        <button onClick={() => setback("green")} className='bg-green-600 px-4 py-1 text-white font-semibold rounded-full shadow-md'>Green</button>
        <button onClick={() => setback("yellow")} className='bg-amber-300 px-4 py-1 text-black font-semibold rounded-full shadow-md'>Yellow</button>
        <button onClick={() => setback("purple")} className='bg-purple-600 px-4 py-1 text-white font-semibold rounded-full shadow-md'>Purple</button>
        <button onClick={() => setback("#000080")} className='bg-blue-900 px-4 py-1 text-white font-semibold rounded-full shadow-md'>Navy Blue</button>
      </div>      
    </div>
  )
}

export default App
