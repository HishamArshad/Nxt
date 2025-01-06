import React from 'react'

const Video = ({urls}) => {
  return (
    <div className=''>
         <video className='object-cover md:mt-14 pointer-events-none rounded-lg' controls preload="none" loop autoPlay muted>
      <source src={urls} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
  )
}

export default Video