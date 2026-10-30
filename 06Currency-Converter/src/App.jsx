/**
 * ============================================================================
 * REVISION NOTES: Currency-Converter -> App.jsx
 * (Lifting State Up, Form Submission, Custom Hook Consumption)
 * ============================================================================
 * 
 * 1. LIFTING STATE UP:
 *    - In React, when multiple sibling components need to share data or stay in sync
 *      (e.g., the "From" input, the "To" input, and the "Swap" button), the state is
 *      "lifted up" to their closest common ancestor (`App.jsx`).
 *    - The parent holds state (`amount`, `from`, `to`, `convertedAmount`) and passes down
 *      values and setter callbacks to child components via props.
 * 
 * 2. CONSUMING CUSTOM HOOKS:
 *    - `const currencyInfo = useCurrencyInfo(from)` calls our custom hook.
 *    - Whenever `from` changes, the hook automatically fetches new rates and updates
 *      `currencyInfo`, causing `App` to re-render with the latest exchange rates.
 * 
 * 3. OBJECT.KEYS FOR DROPDOWN OPTIONS:
 *    - `Object.keys(currencyInfo)` extracts an array of currency strings (e.g., `["usd", "inr", "eur"]`)
 *      from the API data object to populate the `<select>` options.
 * 
 * 4. FORM HANDLING & e.preventDefault():
 *    - By default, submitting an HTML `<form>` causes a full browser page refresh.
 *    - `e.preventDefault()` suppresses this default browser behavior, allowing React
 *      to handle calculations completely clientside without resetting application state.
 * 
 * 5. STATE SWAP LOGIC:
 *    - Demonstrates swapping multiple states simultaneously:
 *      from <-> to, and amount <-> convertedAmount.
 * ============================================================================
 */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './Components/Index'
import useCurrencyInfo from './hooks/convertCurrency'

function App() {
  // Application-level state
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  // Consume custom hook to fetch live currency conversion rates based on 'from'
  const currencyInfo = useCurrencyInfo(from)

  // Extract currency code list for select dropdowns
  const options = Object.keys(currencyInfo)

  // Swap currencies and their respective amounts
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // Calculate converted amount based on the rate for 'to' currency
  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    }
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/4025825/pexels-photo-4025825.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent full-page browser refresh
              convert();
            }}
          >
            {/* "From" Currency Input */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amt) => setAmount(amt)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700 transition-colors"
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* "To" Currency Input */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable // Disables amount typing for the result field
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
