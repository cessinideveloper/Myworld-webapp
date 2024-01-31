import React from 'react'
import Image from 'next/image'
import Text from '../atoms/Text'
import PropTypes from 'prop-types';

const StreamFollowCard = ({imgSrc, name}) => {
  return (
    <div className='flex items-center gap-3 p-3'>
      <Image src={imgSrc} width={15} height={15} alt='user'/>
      <Text label={name} style='myspace-name'/>
      <Text label='Follow' style='follow-text1'/>
    </div>
  )
}

StreamFollowCard.defaultProps = {
    imgSrc: '',
    name: 'username'
}

StreamFollowCard.propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string
}

export default StreamFollowCard
