import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='bg-[#1F1F1F] px-9 py-24 mt-24'>
        <div className='flex justify-between'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
              <Image src="./logo.svg" alt="Logo" width={150} height={50} />
            <h1 className='text-white ml-7'>trackifysub@gmail.com</h1>
            </div>
            <div className='flex flex-col text-white gap-5'>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Pricing</h1>
                <h1>How it Works</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer