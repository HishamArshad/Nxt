
import { CarouselSize } from './carousel'
import { Button } from './ui/button'
import Image from 'next/image'
const Hero = () => {
  return (
    <div   style={{
      backgroundImage: "url('/meshbg.svg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "800px"
    }} 
    className=''
    >

      <div className='flex flex-col gap-5 container mx-auto items-center justify-center'>
        {/* Title Section */}
        <h1 className='font-bold text-[1.5rem] md:text-[2rem] flex-wrap text-white text-center mt-24'>
          Effortlessly Track and Manage <span className='md:block'> Your Subscriptions. </span>
        </h1>
         
        <h1 className='text-xs px-2 text-white opacity-95 md:text-[1rem] text-center'>
          Never miss a payment again. Stay on top of your subscriptions and <span className='block'>save money with <span className='font-medium'>TrackifySub</span>.</span> 
        </h1>
  
        <div>
          <Button className='bg-tealify hover:bg-dtealify md:mt-4'>Get Started Now!</Button>
        </div>
        <div className='flex gap-8 text-white text-xs mb-16 md:mb-24 px-2'>

          <div className='flex gap-4 items-center'>
          <Image src="./check.svg" alt="Logo" width={15} height={15} />
          <h1>No Credit Card Required.</h1>
          </div>
          <div className='flex gap-4 items-center'>
          <Image src="./check.svg" alt="Logo" width={15} height={15} />
          <h1>Cancel Anytime.</h1>
          </div>
          <div className='flex gap-4 items-center'>
          <Image src="./check.svg" alt="Logo" width={15} height={15} />
          <h1>24/7 Customer Support.</h1>
          </div>
        </div>
        <CarouselSize />
      </div>
   
    </div>
  )
}

export default Hero
