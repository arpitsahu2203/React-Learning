/**
 * ============================================================================
 * REVISION NOTES: Currency-Converter -> convertCurrency.js (Custom Hooks)
 * ============================================================================
 * 
 * 1. WHAT IS A CUSTOM HOOK?
 *    - A custom hook is a standard JavaScript function whose name starts with "use"
 *      (e.g., `useCurrencyInfo`, `useFetch`, `useLocalStorage`).
 *    - The "use" prefix is a strict React convention that signals to React's linter
 *      to enforce the "Rules of Hooks" inside it.
 *    - Unlike regular JS helper functions, custom hooks CAN call other built-in React
 *      hooks (like `useState`, `useEffect`, `useCallback`, etc.).
 * 
 * 2. PURPOSE & BENEFITS:
 *    - Separation of Concerns: Keeps UI components clean by extracting asynchronous
 *      data-fetching, business logic, or subscriptions.
 *    - Reusability: Multiple components can consume the same hook without duplicating
 *      state management or network call logic.
 * 
 * 3. LIFECYCLE IN THIS HOOK:
 *    - `useEffect` listens to changes in the `currency` parameter.
 *    - Whenever the currency changes (e.g., 'usd' -> 'inr'), it executes the `fetch` call,
 *      converts the JSON response, and sets state with `res[currency]`.
 *    - Returns `data` to whichever component calls `useCurrencyInfo(currency)`.
 * ============================================================================
 */

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  // State to hold the currency exchange rate data object
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch exchange rates for the specified base currency
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.error("Error fetching currency rates:", err));
  }, [currency]); // Re-run effect only when 'currency' argument changes

  return data;
}

export default useCurrencyInfo;
