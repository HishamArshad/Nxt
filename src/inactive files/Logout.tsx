
import React from 'react' 
 
import { Button } from './ui/button' 
import { logoutAction } from '@/actions/actions';

 
const Logout = () => {
    
 
  return (
        <div>
        <form
      action={logoutAction}
    >
          <Button type="submit"className="mg-1 bg-tealify hover:bg-dtealify">
            logout
        </Button>

    </form>
      
       
        </div>
  )
}

export default Logout