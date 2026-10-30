/**
 * ============================================================================
 * REVISION NOTES: Currency-Converter -> Components/Index.js (Barrel Export Pattern)
 * ============================================================================
 * 
 * 1. WHAT IS A BARREL EXPORT FILE?
 *    - An `index.js` file inside a directory that gathers and re-exports exports from
 *      multiple individual component files.
 * 
 * 2. WHY USE IT?
 *    - Clean import syntax:
 *        Without barrel export:
 *            `import InputBox from './Components/InputBox'`
 *            `import Button from './Components/Button'`
 *        With barrel export:
 *            `import { InputBox, Button } from './Components'`
 *    - Encapsulation: The outside world only imports from the folder itself,
 *      making folder reorganizations easier to manage without breaking external imports.
 * ============================================================================
 */

import InputBox from "./InputBox";

export { InputBox };
