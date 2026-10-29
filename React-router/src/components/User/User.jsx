import React from 'react'
import { useParams } from 'react-router'


function User() {
    const {userId}=useParams()
  return (
    <div className='text-4xl bg-gray-500 text-white text-center p-2'>User: {userId} </div>
  )
}

export default User