/**
 * ============================================================================
 * REVISION NOTES: Password-Generator -> App.jsx
 * (useCallback, useEffect, useRef & Controlled Inputs)
 * ============================================================================
 * 
 * 1. useCallback HOOK (FUNCTION MEMOIZATION):
 *    - Purpose: Caches (memoizes) a function definition between component re-renders.
 *    - Syntax: `const cachedFn = useCallback(fn, [dependencies]);`
 *    - Why is it needed?
 *        * In React, every re-render recreates all functions declared inside the component,
 *          giving them brand new function reference pointers in memory.
 *        * `useCallback` tells React: "Do NOT recreate this function on re-renders unless
 *          one of its dependencies in the dependency array has changed."
 *        * Used here for `passwordGenerator` (memoized based on length, numberAllowed, charAllowed)
 *          and `copyToClipboard` (memoized based on password).
 * 
 * 2. useEffect HOOK (LIFECYCLE & SIDE EFFECTS):
 *    - Purpose: Executes side effects (API calls, DOM updates, event listeners, timer setup)
 *      AFTER the component renders.
 *    - Syntax: `useEffect(() => { ... }, [dependencies]);`
 *    - Dependency Array Rules:
 *        * No dependency array `useEffect(() => {})`: Runs after EVERY single render.
 *        * Empty array `useEffect(() => {}, [])`: Runs ONCE when component mounts (loads).
 *        * With dependencies `useEffect(() => {}, [a, b])`: Runs on mount AND whenever `a` or `b` changes.
 *    - Here, whenever `length`, `numberAllowed`, or `charAllowed` updates, `useEffect` triggers
 *      `passwordGenerator()` to automatically regenerate the password.
 * 
 * 3. useRef HOOK (DOM ACCESS WITHOUT RE-RENDERS):
 *    - Purpose: Returns a persistent mutable object `{ current: initialValue }` that stays
 *      alive across renders WITHOUT triggering a re-render when updated.
 *    - Common Use Case: Referencing and directly interacting with DOM elements (focus, text selection, measurements).
 *    - Here: `const passwordRef = useRef(null)` is passed to `<input ref={passwordRef} />`.
 *      When copying, `passwordRef.current?.select()` highlights the text in the input box for user feedback!
 * 
 * 4. CONTROLLED INPUTS & PREVIOUS STATE:
 *    - Range: `value={length}` + `onChange={(e) => setLength(e.target.value)}`
 *    - Checkbox: `checked={numberAllowed}` + `onChange={() => setNumberAllowed(prev => !prev)}`
 *      (Uses functional updater `prev => !prev` to safely toggle boolean state based on latest state).
 * ============================================================================
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  // State variables for password generation criteria
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook to obtain a direct DOM reference to the password input element
  const passwordRef = useRef(null)

  /**
   * passwordGenerator:
   * Memoized with useCallback so the function is not recreated on every render.
   * Only re-created if length, numberAllowed, or charAllowed changes.
   */
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*(){}:<>?,./;[]|/*+-~`";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed])

  /**
   * useEffect:
   * Automatically executes passwordGenerator whenever any of its criteria changes,
   * as well as when the component first mounts.
   */
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  /**
   * copyToClipboard:
   * Uses useRef to select input text and navigator.clipboard API to copy to OS clipboard.
   */
  const copyToClipboard = useCallback(() => {
    // Optional chaining (?.) prevents crashes if current is null/undefined
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999); // Cross-browser / mobile selection range
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3 text-xl font-bold'>Password Generator</h1>
        
        {/* Password Display and Copy Row */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type='text' 
            value={password}
            className="outline-none w-full py-1 px-3 bg-amber-50 text-black font-mono"
            placeholder="Password"
            readOnly
            ref={passwordRef} // Hook DOM reference to input element
          />
          <button
            className='outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0 transition-colors'
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>

        {/* Controls: Length slider, Numbers toggle, Characters toggle */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                // Functional state updater toggles current boolean value reliably
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
