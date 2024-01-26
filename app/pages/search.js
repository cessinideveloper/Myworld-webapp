import React from 'react'
import dynamic from 'next/dynamic'
const Search = dynamic(()=>import('search/searchIndex'))

const search = () => {
  return (
    <div>
      <Search/>
    </div>
  )
}

export default search
