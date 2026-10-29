/**
 * ============================================================================
 * REVISION NOTES: Currency-Converter -> InputBox.jsx (useId, Controlled Input, Keys)
 * ============================================================================
 * 
 * 1. useId HOOK (REACT 18):
 *    - Purpose: Generates a unique, stable ID for HTML form accessibility attributes.
 *    - Links `<label htmlFor={amountInputId}>` to `<input id={amountInputId}>`.
 *    - Why use it instead of hardcoding `id="amount"`?
 *        If `InputBox` is rendered twice on the same screen (like "From" and "To"),
 *        hardcoded IDs would collide (`id="amount"` duplicated). `useId()` guarantees
 *        a unique ID for each rendered instance (e.g., `:r1:`, `:r2:`).
 *    - RULE: Do NOT use `useId` to generate `key` attributes in `.map()` loops. Keys must come from data.
 * 
 * 2. DEFENSIVE PROP INVOCATION (`onAmountChange && onAmountChange(...)`):
 *    - If the parent component fails to provide `onAmountChange`, calling it directly
 *      (`onAmountChange(val)`) would throw a `TypeError: onAmountChange is not a function`.
 *    - Using `&&` ensures the function is only executed if it was actually passed as a prop.
 * 
 * 3. NUMBER PARSING:
 *    - `e.target.value` in HTML inputs is ALWAYS a string, even if `type="number"`.
 *    - Converting with `Number(e.target.value)` prevents mathematical bugs (e.g., "10" + 5 = "105").
 * 
 * 4. RECONCILIATION & KEYS IN LISTS:
 *    - When rendering lists using `.map()`, React requires a unique `key` prop on each element.
 *    - Keys give elements a stable identity so React's Virtual DOM algorithm knows which
 *      items were added, removed, or reordered without re-rendering the entire list.
 * ============================================================================
 */

import React from 'react'
import { useId } from 'react' 

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  // Generate unique ID for accessibility link between label and input
  const amountInputId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          // Guard with && and convert string input to Number
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/* Each item rendered in a loop must have a unique, stable key */}
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
