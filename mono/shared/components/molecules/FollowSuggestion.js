import React from 'react'
import Image from 'next/image'
import Text from '../atoms/Text'
import Button from '../atoms/Button'

const FollowSuggestion = () => {
  return (
    <div className='flex gap-5'>
      <Image src={''} width={25} height={25} alt='user'/>
      <div className='flex flex-col'>
      <Text label='Username' style='follow-text1'/>
      <Text label='user profession' style='follow-text2'/>
      </div>
      <Button label='Follow'/>
    </div>
  )
}

export default FollowSuggestion
