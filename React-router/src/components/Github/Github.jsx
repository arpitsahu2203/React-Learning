import React from 'react'
import { useLoaderData } from 'react-router'

function Github() {
  const data=useLoaderData()
  return (
    <div className='bg-gray-400 p-3'>
        <h1>Github Followers: {data.followers} </h1>
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader= async()=>{
  const response= await fetch('https://api.github.com/users/arpitsahu2203')
  return response.json();
}