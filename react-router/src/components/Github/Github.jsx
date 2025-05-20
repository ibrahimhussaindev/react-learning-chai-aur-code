import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/ibrahimhussaindev')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   })
  // }, [])
  

  return (
    <div className='text-center m-4 p-4 text-3xl bg-gray-600 text-white'>Github Followers: {data.followers}
      <div className='flex gap-4 items-center'>
        <img src={data.avatar_url} alt="Git Picture" />
        <div className='flex flex-col items-start gap-3'>
        <h2>Username: {data.login}</h2>
        <h3>Public Repos: {data.public_repos}</h3>
        </div>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ibrahimhussaindev')
  return response.json()
}