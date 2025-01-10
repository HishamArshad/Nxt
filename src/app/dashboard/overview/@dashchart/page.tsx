import React from 'react'
import DashChart from '@/components/DashChart'
const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div className='w-full h-96 mt-4'>
    <DashChart />
    </div>
  )
}

export default page