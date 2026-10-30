


/**
 * ============================================================================
 * REVISION NOTES: my-react-app -> App.jsx (First React Component & JSX Basics)
 * ============================================================================
 * 
 * 1. WHAT IS A REACT COMPONENT?
 *    - A React component is a regular JavaScript function that returns JSX (markup).
 *    - Component names MUST start with a Capital letter (PascalCase), e.g., `App`, `Header`.
 *      Lowercase names (like `<div>` or `<h1>`) are reserved by React for built-in HTML tags.
 * 
 * 2. WHAT IS JSX (JavaScript XML)?
 *    - A syntax extension for JavaScript that looks like HTML.
 *    - Under the hood, Babel / Vite / SWC transpiles JSX into `React.createElement()` or `jsxRuntime` function calls.
 *    - Rules of JSX:
 *        a) Return a single root element (or use Fragment `<> ... </>` or `<React.Fragment>`).
 *        b) Close every tag (e.g., `<img />`, `<br />`, `<input />`).
 *        c) Use camelCase for attributes (e.g., `className` instead of `class`, `htmlFor` instead of `for`).
 *        d) Embed JavaScript expressions inside curly braces: `{variableName}` or `{2 + 2}`.
 * 
 * 3. EXPORT / IMPORT:
 *    - `export default App`: Allows importing this component in `main.jsx` using `import App from './App.jsx'`.
 * ============================================================================
 */

function App() {
  return (
    <h1> Chai aur react with vite </h1>
  )
}

export default App

