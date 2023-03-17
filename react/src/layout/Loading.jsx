import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
const Loading = () => {
  return (
    <div className='fixed top-1/2 left-1/2  animate-spin'>
        <AiOutlineLoading3Quarters size={40} className="text-yellow-500"/>
    </div>
  )
}

export default Loading