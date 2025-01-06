import React from 'react'
import { Button } from './ui/button'

const Banner = () => {
  return (
    <div className='bg-tealify mt-24 '>
        <div className='container mx-auto flex flex-col gap-5  py-5 px-3 md:py-16 justify-center items-center text-center md:flex-row md:justify-between md:text-start '>
<h1 className='font-bold text-white text-2xl md:max-w-xl'>Master Your Life – Track Subscriptions, Expenses, and To-Dos in One Place!</h1>
<Button className='border bg-[#24242400] border-white rounded-xl hover:bg-dtealify md:mt-4 text-xs'>Get Started Now!</Button>
        </div>
    </div>
  )
}

export default Banner