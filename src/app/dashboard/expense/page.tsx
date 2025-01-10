
import SearchP from '@/components/SearchP' 
import DashChart from '@/components/DashChart'
import Link from 'next/link'
 

const page = () => {
  return (
     
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className="h-60 bg-red-200 text-white ">
            
          </div>
          <div className="h-60 bg-red-200 text-white">
           
          </div>
          <div className="h-60 md:col-span-2 lg:col-span-1 bg-gray-200 animate-pulse text-white">
            
          </div>
       <Link href='/dashboard/expense/category'>add expnce</Link>
  
    {/* <div className='w-full h-96 mt-4'>
    <DashChart />
    </div> */}
    
    </div>
  )
}

export default page