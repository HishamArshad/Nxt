import Image from "next/image"; 
 
 
import Hammenue from "./Hammenue";
import Link from "next/link";    
 
import LoginSwitch from './LogSwitch' 
export default async function Navbar() {
 
 
  return (
    
      <nav
        className="sticky top-0 bg-[#1F1F1F] z-50 transition-all duration-300 ease-in-out transform"
        id="navbar"
      >
 
        <div className="flex justify-between items-center px-3 py-2 container mx-auto">
        <Link href="/" className="md:hidden">

      <Image src="./logo.svg" alt="Logo" width={100} height={50} />
        </Link>
        <Link href="/" className="hidden md:block">
      <Image src="./logo.svg" alt="Logo" width={150} height={50} />
        </Link>
            <Hammenue />
        <div className="hidden md:block">
            <div className="flex justify-center items-center gap-14">
            <ul className="flex justify-center items-center text-white gap-10 md:text-[1rem]">
                <Link className="group transition duration-300" href='/'>Home<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600"></span></Link>
                <Link className="group transition duration-300" href='/pricing'>Pricing<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600"></span></Link>
                <Link className="group transition duration-300" href='/About'>About<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600"></span></Link>
                <Link className="group transition duration-300" href='/howitworks'>How It Works<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600"></span></Link>
            </ul>
            <div>
 
   <LoginSwitch />
            </div>
            </div>
        </div>
        </div>
    </nav>
  )
}