 


import { Button } from './ui/button'
import { navSession } from "@/state/global"; 
import Logout from './Logout';
import Link from 'next/link';  
const Log = () => {
    
      
   

  
    const isLoggedIn = navSession.log.get()
    
  return (
    <>
 
    {isLoggedIn ? (
        <Logout />
      ) : (
        <Link href="/login">
          <Button
            className="mg-1 bg-tealify hover:bg-dtealify"
            aria-label="Login"
          >
            Login
          </Button>
        </Link>
      )}
    </>
  )
}

export default Log