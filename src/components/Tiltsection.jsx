import React from 'react'
import Image from 'next/image'
const data = [
    {
        title: "Add",
        subtitle: "Seamlessly Add and Manage Your Subscriptions",
        description: "Effortlessly input your subscriptions and let us handle the rest. Get timely alerts before renewals and avoid unexpected charges—stay organized and stress-free.",
    },
    {
        title: "CREATE",
        subtitle: "Create, Plan, and Conquer Your Tasks",
        description: "Organize your daily tasks with ease. Create to-do lists, set deadlines, and stay productive. TrackifySub ensures you never miss what’s important.",
        reversed: "reverse"
    },
    {
        title: "ANALYZE",
        subtitle: "Analyze Your Spending and Make Smarter Decisions",
        description: "Dive into detailed analytics to uncover spending patterns and trends. Identify where your money goes and optimize your budget like a pro.",
        
    }
]
const Tiltsection = () => {
  return (
    <section>
        {data.map((item) => (
            <div>
         <div
            className={`px-5 flex gap-10 justify-between flex-col items-center md:flex-row ${
                item.reversed === "reverse" ? "md:flex-row-reverse" : ""
            } container mx-auto mt-16 mb-16`}
            >

                <div className='flex flex-col gap-5'>
                    <div>
                    <h1 className='font-bold text-grayfy'>{item.title}</h1>
                    <h1 className='font-medium text-grayfy'>{item.subtitle}</h1>
                    </div>
                    <h1 className='text-grayfy'>{item.description}</h1>
                </div>
                <div>
                     <Image className='w-40 md:w-64' src="/tilt1.svg" alt="Logo" width={0} height={0} />
                </div>
            </div>
            <hr className=' bg-grayfy h-0.5'/>
            </div>
        ))}
    </section>
  )
}

export default Tiltsection