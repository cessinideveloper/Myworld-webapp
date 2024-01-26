import React from 'react'
import dynamic from 'next/dynamic'
const Home=dynamic(()=>import('home/homeIndex'))
const home = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default home
