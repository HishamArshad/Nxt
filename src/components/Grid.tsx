import React from 'react'

const Grid = () => {
  return (
    <div
      className="mt-24 gridimage flex justify-center items-center container mx-auto px-4 bg-center bg-no-repeat bg-cover w-full h-[800px] sm:bg-[url('/gridbg.svg')] bg-[url('/gridbg2.svg')]"
   
    >
        <div className='bg-white text-center flex flex-col gap-6 justify-center items-center max-w-[900px] border border-[#8C8C8C] rounded-lg px-2 py-4 md:px-24 md:py-24'>
            <h1 className='text-xl md:text-4xl text-grayfy font-bold'>All-in-One Solution for Managing Subscriptions, Tracking Expenses, and Planning To-Dos</h1>
            <h1 className='text-grayfy text-xs'>Get smarter with your money, time, and tasks in one powerful tool.</h1>
        </div>
    </div>
  )
}

export default Grid