
import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'
//async and await function with above loader

function Github() {

    const[data , setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/viralsp')
        .then(res => res.json())
        .then(data=> setData(data))
    },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git profile img" width={300} />
    </div>
  )
}

export default Github
