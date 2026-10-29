/**
 * ============================================================================
 * REVISION NOTES: Counter-Project -> App.jsx (React State & useState Hook)
 * ============================================================================
 * 
 * 1. THE PROBLEM REACT SOLVES (UI vs Data Sync):
 *    - In vanilla JavaScript, updating a variable (e.g. `let counter = 15; counter++`)
 *      does NOT automatically update what the user sees in the DOM. You would have to
 *      manually call `document.querySelector('h3').innerText = counter`.
 *    - In React, you do NOT manipulate the DOM directly. Instead, you update STATE.
 *    - When state changes, React's reconciliation engine re-renders the component,
 *      diffs the new Virtual DOM tree against the old one, and efficiently updates
 *      only the changed nodes in the actual browser DOM.
 * 
 * 2. useState HOOK ANATOMY:
 *    - `const [Counter, setCounter] = useState(initialValue);`
 *    - Array destructuring:
 *        * Index 0 (`Counter`): The current state value for this render.
 *        * Index 1 (`setCounter`): The dispatcher / setter function used to request a state update.
 *    - Naming convention: `[something, setSomething]` (camelCase).
 * 
 * 3. BATCHING & PREVIOUS STATE (CRITICAL INTERVIEW TOPIC):
 *    - State updates are asynchronous and batched by React for performance.
 *    - If you write:
 *        setCounter(Counter + 1);
 *        setCounter(Counter + 1);
 *        setCounter(Counter + 1);
 *      React batches all three calls using the SAME snapshot of `Counter` (e.g., 15 + 1),
 *      resulting in an increase of only 1!
 *    - To base the update on the latest pending state, use the updater callback:
 *        setCounter(prevCounter => prevCounter + 1);
 *        setCounter(prevCounter => prevCounter + 1); // Now increases by 2!
 * 
 * 4. BOUNDS & DISABLED STATES:
 *    - State can be checked inside handlers (e.g., `Counter < 30`) to enforce business rules.
 *    - HTML element attributes like `disabled={Counter === 30}` can directly react to state.
 * ============================================================================
 */

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  // useState initializes Counter with 15; setCounter triggers re-renders when called.
  let [Counter, setCounter] = useState(15)

  // Handler to increment Counter with upper limit check (max 30)
  const addValue = () => {
    console.log("clicked");
    if (Counter < 30) {
      // Direct update: setCounter(Counter + 1)
      // Best practice updater form: setCounter(prev => prev + 1)
      setCounter(Counter + 1);
    }
  }

  // Handler to decrement Counter with lower limit check (min 0)
  const reduceValue = () => {
    console.log("clicked");
    if (Counter > 0) {
      setCounter(Counter - 1);
    }
  }

  return (
    <>
      <h1>Simple Counter Project</h1>
      {/* Dynamic state interpolated into JSX using curly braces */}
      <h3>Counter : {Counter}</h3>

      {/* Button click calls addValue; disabled dynamically when limit is reached */}
      <button onClick={addValue} disabled={Counter === 30}>
        Add Counter
      </button>
      <br></br>
      <button onClick={reduceValue} disabled={Counter === 0}>
        Reduce Counter
      </button>
    </>
  )
}

export default App

