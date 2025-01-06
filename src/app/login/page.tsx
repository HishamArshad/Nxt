 
import { LoginForm } from '@/components/forms/LoginForm'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center flex-col  h-screen mt-24'>
      <div className='flex flex-col items-center text-grayfy font-bold gap-10'>
 
        <LoginForm />
        </div>
    </div>
  )
}

export default page