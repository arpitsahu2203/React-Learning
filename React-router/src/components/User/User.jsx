/**
 * ============================================================================
 * REVISION NOTES: React-router -> User.jsx (useParams Hook & Dynamic Segments)
 * ============================================================================
 * 
 * 1. DYNAMIC ROUTING & useParams():
 *    - In `main.jsx`, the route is defined as: `path: "user/:userId"`
 *    - Any path segment preceded by a colon (`:`) is captured as a dynamic parameter.
 *    - The `useParams()` hook extracts all dynamic route parameters from the current URL
 *      and returns them as an object: `{ userId: "..." }`.
 * 
 * 2. REAL-WORLD USE CASES:
 *    - User profiles: `/user/:username` or `/profile/:id`
 *    - Product details: `/products/:productId`
 *    - Blog posts: `/blog/:slug`
 *    - Fetching data dynamically: inside a `useEffect`, you can fetch user data using `userId`.
 * ============================================================================
 */

import React from 'react'
import { useParams } from 'react-router'

function User() {
  // Destructure dynamic route parameter defined in route path: "user/:userId"
  const { userId } = useParams()

  return (
    <div className='text-4xl bg-gray-500 text-white text-center p-4 font-mono'>
      User: {userId}
    </div>
  )
}

export default User
