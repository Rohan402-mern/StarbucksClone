import React from 'react'
import './ReuseHead.css'
const ReuseHead = ({route}) => {
  return (
    <div className='reusehead'>
      Home &gt; {route}
    </div>
  )
}

export default ReuseHead
