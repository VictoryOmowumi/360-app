import React from 'react'

const Unauthorized = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-gray-300'>You are not authorized to view this page.</h1>
        <h2 className='text-2xl text-gray-300'>Please contact your administrator.</h2>
    </div>

  )
}

export default Unauthorized