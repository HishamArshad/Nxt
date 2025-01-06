import React from 'react'
import Image from 'next/image'
import Video from './Video'
const Tabcompo = () => {
  return (
    <div className='border border-grayfy'>
      <div>
    <div className='max-w-80 px-4 py-4 flex flex-col gap-4 border border-grayfy'>
      <div className='flex gap-3 items-center'>
          <Image src="./subscription.svg" alt="Logo" width={36} height={36} />
          <h1 className='text-grayfy font-bold'>Track Your Subscriptions Efortlessly.</h1>
      </div>
      <h1 className='text-grayfy text-sm'>
      Stay on top of your subscriptions with ease! Add your subscriptions, set reminders, and let TrackifySub handle the rest—no more missed renewals or unexpected charges.
      </h1>
    </div>
    
    </div>
    <div>
      <Video />
    </div>
   </div>
  )
}

export default Tabcompo