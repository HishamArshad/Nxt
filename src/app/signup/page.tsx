import { SignupForm } from '@/components/forms/SignupForm'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center flex-col  h-screen mt-32'>
      <div className='flex flex-col items-center text-grayfy font-bold gap-10'>
 
        <SignupForm />
        </div>
    </div>
  )
}

export default page