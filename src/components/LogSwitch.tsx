"use client"

import { clientStates } from "@/state/clientState"
import { observer  } from "@legendapp/state/react"
import { Button } from "./ui/button"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast" 
 
import { handleLogout } from "@/actions/actions"



const LogSwitch = observer(() => {
 
  const { toast } = useToast()
  
    const token = clientStates.token.get()
  const responseLogout = async () => {
    try {
      
      const res = await handleLogout(token)
      clientStates.token.set("")
      toast({
        title: "Success",
        description: "Logout is indeed success",
 
      })

    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "An unknown error occurred.",
 
      })
    }
    

  }
    return (
    <div>
        {token ?        
                    <form action={responseLogout}>
                    
                      <Button
                        type="submit"
                        className="mg-1 bg-tealify hover:bg-dtealify"
                        aria-label="Login"
                      >
                       Logout
                      </Button>
                      
                      </form> :         
                    <Link href="/login"> <Button
                        className="mg-1 bg-tealify hover:bg-dtealify"
                        aria-label="Login"
                      >
                        Login
                      </Button>
                      </Link>}
    </div>
  )
})

export default LogSwitch