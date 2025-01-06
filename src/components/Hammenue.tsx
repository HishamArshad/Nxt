import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import Link from "next/link";
import Image from "next/image"; 
 
const Hammenue = () => { 
    return (

     <Sheet>
        <SheetTrigger>     
        <div className="md:hidden flex items-center">
        <Image src="./hammenue.svg" alt="Logo" width={35} height={50} />
            
        </div>
        </SheetTrigger>
        <SheetContent className="w-[200px]">
          <SheetHeader>
            <SheetTitle className="flex items-start"><div className="text-grayfy font-bold">Navigation</div></SheetTitle>
            <SheetDescription className="flex items-start flex-col text-grayfy gap-5 mt-12">
        
                <Link href="/">Home</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/about">About</Link>
                <Link href="/howitworks">How It Works</Link>
        
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      
    )
  }
  
  export default Hammenue