/**
 * ============================================================================
 * REVISION NOTES: React-router -> main.jsx (Modern Routing Architecture)
 * ============================================================================
 * 
 * 1. MODERN ROUTER ARCHITECTURE (createBrowserRouter & RouterProvider):
 *    - In React Router (v6.4+), `createBrowserRouter()` is the recommended method.
 *    - It enables advanced data APIs: loaders, actions, fetchers, and deferred data.
 *    - `<RouterProvider router={router} />` supplies the routing context to the application tree.
 * 
 * 2. NESTED ROUTING & LAYOUT PATTERN:
 *    - Top-level object with `path: '/'` renders `<Root />` as the persistent layout wrapper.
 *    - The `children` array defines sub-routes that will be dynamically rendered inside
 *      the `<Outlet />` component in `Root.jsx`.
 *    - Notice that child paths can be relative (e.g., `about` instead of `/about`).
 * 
 * 3. DYNAMIC URL PARAMETERS:
 *    - `path: "user/:userId"`: The colon `:` indicates that `userId` is a dynamic URL parameter.
 *    - When the user visits `/user/100` or `/user/arpit`, the child component `<User />`
 *      can retrieve this dynamic segment using the `useParams()` hook.
 * 
 * 4. ROUTE DATA LOADERS (HIGH PERFORMANCE PRE-FETCHING):
 *    - `loader: githubInfoLoader` attached directly to the `github` route.
 *    - Instead of rendering an empty component and fetching data inside `useEffect` (which causes waterfalls),
 *      the loader starts fetching data AS SOON AS the user clicks or hovers the link!
 *    - The component `<Github />` retrieves the ready data synchronously using `useLoaderData()`.
 * 
 * 5. ALTERNATIVE SYNTAX (createRoutesFromElements):
 *    - The same router can also be created with JSX syntax:
 *      ```jsx
 *      const router = createBrowserRouter(
 *        createRoutesFromElements(
 *          <Route path="/" element={<Root />}>
 *            <Route path="" element={<Home />} />
 *            <Route path="about" element={<About />} />
 *            <Route path="user/:userId" element={<User />} />
 *            <Route loader={githubInfoLoader} path="github" element={<Github />} />
 *          </Route>
 *        )
 *      )
 *      ```
 * ============================================================================
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './components/About/About.jsx'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// Define the route configuration tree
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // Top-level persistent layout (Header, Outlet, Footer)
    children: [
      {
        path: '', // Index / default route matching '/'
        element: <Home />
      },
      {
        path: "about", // Matches '/about'
        element: <About />
      },
      {
        path: "contact-us", // Matches '/contact-us'
        element: <Contact />
      },
      {
        path: "user/:userId", // Dynamic segment :userId captures parameters
        element: <User />
      },
      {
        loader: githubInfoLoader, // Route loader pre-fetches data before rendering
        path: "github",
        element: <Github />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provides router configuration to the entire app */}
    <RouterProvider router={router} />
  </StrictMode>,
)
