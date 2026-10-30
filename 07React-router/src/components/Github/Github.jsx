/**
 * ============================================================================
 * REVISION NOTES: React-router -> Github.jsx (Loaders & useLoaderData Hook)
 * ============================================================================
 * 
 * 1. TRADITIONAL FETCHING VS ROUTE LOADERS:
 *    - Traditional way (useEffect):
 *        Component mounts -> Renders blank/loading skeleton -> useEffect triggers fetch ->
 *        Data returns -> setState called -> Component re-renders with data.
 *        Drawbacks: Loading waterfalls, layout shifts, boilerplate `useState` & `useEffect`.
 * 
 *    - Modern React Router Way (Loaders):
 *        Define an async `loader` function and attach it to the route in `main.jsx`:
 *        `{ path: "github", element: <Github />, loader: githubInfoLoader }`
 *        React Router begins fetching the data as soon as the user starts navigating
 *        (even on link hover in optimized configurations!).
 * 
 * 2. useLoaderData() HOOK:
 *    - Hook provided by React Router to access the value resolved by the route's `loader`.
 *    - Synchronously provides the resolved JSON data inside the component.
 * ============================================================================
 */

import React from 'react'
import { useLoaderData } from 'react-router'

function Github() {
  // Access data pre-fetched by githubInfoLoader before this component was mounted
  const data = useLoaderData()

  return (
    <div className='bg-gray-700 text-white p-6 text-center max-w-xl mx-auto my-8 rounded-xl shadow-lg'>
      <h1 className='text-3xl font-bold mb-4'>Github Profile</h1>
      <p className='text-xl mb-4 text-orange-400'>Followers: {data?.followers ?? 0}</p>
      {data?.avatar_url && (
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          width={200}
          className='rounded-full mx-auto border-4 border-orange-500 shadow-md'
        />
      )}
    </div>
  )
}

export default Github

/**
 * githubInfoLoader:
 * Exported async function used as the `loader` in route configuration (main.jsx).
 * React Router automatically awaits promises returned from loaders.
 */
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/arpitsahu2203')
  return response.json();
}
