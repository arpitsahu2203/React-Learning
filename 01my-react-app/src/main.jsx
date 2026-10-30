/**
 * ============================================================================
 * REVISION NOTES: my-react-app -> main.jsx (Application Entry Point)
 * ============================================================================
 * 
 * 1. WHAT HAPPENS HERE:
 *    - This is the main JavaScript/JSX entry point for a Vite + React application.
 *    - In index.html, Vite loads this script via: <script type="module" src="/src/main.jsx"></script>
 * 
 * 2. createRoot (React 18+ Concurrent Mode):
 *    - `createRoot(domNode)` creates a React root container at the HTML element with id="root".
 *    - `.render(<Component />)` renders the React element tree into the DOM.
 *    - Replaces the legacy `ReactDOM.render()` from React 17 and earlier.
 * 
 * 3. <StrictMode>:
 *    - A React developer tool that does NOT render any visible UI.
 *    - In Development Mode:
 *        * Intentionally double-invokes components, lifecycle hooks, and effects to detect unexpected side-effects.
 *        * Warns about deprecated APIs, legacy string refs, and unsafe lifecycles.
 *    - In Production Mode: StrictMode checks are completely ignored; no double-renders occur.
 * ============================================================================
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

