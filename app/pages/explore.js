import React from 'react'
import dynamic from 'next/dynamic'
const Explore = dynamic(()=>import('explore/exploreIndex'))

const explore = () => {
  return (
    <div>
      <Explore/>
    </div>
  )
}

export default explore
