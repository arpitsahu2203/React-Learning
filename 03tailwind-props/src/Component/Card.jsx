/**
 * ============================================================================
 * REVISION NOTES: tailwind-props -> Card.jsx (Props Destructuring & Default Values)
 * ============================================================================
 * 
 * 1. PROPS OBJECT VS DESTRUCTURING:
 *    - Standard signature: `function Card(props)` -> access via `props.username`, `props.button`.
 *    - Modern ES6 Destructuring: `function Card({ username, button })` -> unpacks properties
 *      directly from the props object in the function parameter list.
 * 
 * 2. DEFAULT PROPS VALUES:
 *    - Providing defaults: `{ username = "username", button = "read me" }`
 *    - If the parent component fails to provide `username` or passes `undefined`,
 *      React falls back to the default value provided here.
 * 
 * 3. COMPONENT REUSABILITY:
 *    - The Card acts as a blueprint/template.
 *    - By passing dynamic values via props, the same layout structure can display
 *      hundreds of different cards across an application without code duplication.
 * 
 * 4. JSX SYNTAX REMINDER:
 *    - In JSX, HTML `class` attribute must be written as `className`.
 * ============================================================================
 */

import React from 'react'

export default function Card({ username = "username", button = "read me" }) {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs mb-4">
      <a href="#">
        <img
          className="rounded-base"
          src="https://media.istockphoto.com/id/1207173246/photo/the-web-designer-team-is-helping-to-design-applications-for-mobile-phones-ux-ui-designer.jpg?s=2048x2048&w=is&k=20&c=AKCMmP2yPFVtRsCuKHIoHXR26TCmXaJdmwvC79iY9Io="
          alt="Card preview"
        />
      </a>
      <a href="#">
        {/* Dynamic prop interpolated into markup */}
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{username}</h5>
      </a>
      <p className="mb-6 text-body">
        In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.
      </p>
      <a
        href="#"
        className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        {/* Dynamic button text passed as prop */}
        {button}
        <svg
          className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
        </svg>
      </a>
    </div>
  )
}
