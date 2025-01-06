
import SearchP from '@/components/SearchP' 
 
 

const page = () => {
  return (
    <div>
 
     <SearchP />
     
     <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Cards */}
          <div className="h-60 bg-red-700 text-white  animate-pulse">
            Card 1
          </div>
          <div className="h-60 bg-red-700 text-white animate-pulse">
            Card 2
          </div>
          <div className="h-60 md:col-span-2 lg:col-span-1 animate-pulse bg-red-700 text-white">
            Card 3
          </div>
        </div>
    <div className='w-full h-96 bg-red-500 animate-pulse mt-4'>dd</div>
    </div>
  )
}

export default page