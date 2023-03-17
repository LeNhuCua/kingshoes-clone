import React from 'react'
import { ChangeTitle } from '../hook/ChangeTitle'

const Introduce = () => {
  ChangeTitle("Giới thiệu")
  return (
    <div className='mt-12'>
      <h1 className='text-center text-3xl font-bold'>
      Đang thực hiên
      </h1>
    
    </div>
  )
}

export default Introduce