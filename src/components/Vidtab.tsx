import React from 'react' 
import { Realtab } from './Realtab'
const Vidtabs = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
    <div className='flex flex-col gap-6'>
        <h1 className='font-bold text-[1.5rem] md:text-[2rem] flex-wrap text-grayfy text-center mt-24 leading-8'>
        Manage Expenses, Track Subscriptions, and <span className='md:block'>Conquer To-Dos – All in One Place. </span>
        </h1>
        <h1 className='text-xs px-2 text-grayfy opacity-95 md:text-[1rem] text-center'>
        Stay organized, save money, and never miss a task or renewal again.
        </h1>
    </div>
    <Realtab />
{/* <Tabcompo /> */}
      </div>
  )
}

export default Vidtabs