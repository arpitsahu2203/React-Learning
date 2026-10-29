/**
 * ============================================================================
 * REVISION NOTES: React-router -> Root.jsx (Layout Route & <Outlet />)
 * ============================================================================
 * 
 * 1. THE LAYOUT PATTERN IN REACT ROUTER:
 *    - Often, web applications have consistent UI elements across every page,
 *      such as a navigation `<Header />` and `<Footer />`.
 *    - Instead of importing `<Header />` and `<Footer />` into every single page component,
 *      we create a Layout component (`Root.jsx`) that wraps all routes.
 * 
 * 2. WHAT IS <Outlet />?
 *    - `<Outlet />` acts as a dynamic placeholder / slot provided by React Router.
 *    - When the URL changes to `/about`, React Router leaves `<Header />` and `<Footer />`
 *      intact and renders the `<About />` component inside the `<Outlet />`.
 *    - Benefits:
 *        * Performance: Header and Footer do not re-mount or reset state during navigation.
 *        * DRY Code: Eliminates repetitive layout code across individual pages.
 * ============================================================================
 */

import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Root() {
  return (
    <>
      {/* Persistent Header across all routes */}
      <Header />

      {/* Dynamic child route component will be rendered here */}
      <Outlet />

      {/* Persistent Footer across all routes */}
      <Footer />
    </>
  )
}

export default Root
