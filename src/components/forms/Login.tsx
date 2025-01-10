"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label" 
import { Button } from "../ui/button"
import { handleLogin, navigate } from "@/actions/actions"
 
import { useObservable, observer } from "@legendapp/state/react"
import { useToast } from "@/hooks/use-toast" 
import { clientStates } from "@/state/clientState" 
import { AiOutlineLoading3Quarters } from "react-icons/ai"
 
import { emailAndPasswordSchema } from "@/lib/zod"
import LoadingOverlay from "../LoadingOverlay"
 

const Login = observer(() => {
     const { toast } = useToast()
     const res = useObservable({
      token: "",
      emailErrors: [], // Store multiple errors for email
      passwordErrors: [], // Store multiple errors for password
      pen: false,
      redir: false
  }) 
  const clearErrors = () => {
    setTimeout(() => {
        res.emailErrors.set([])
        res.passwordErrors.set([])
    }, 5000) // Clear errors after 5 seconds
}

    const handleResponse = async (formData) => {
        const empw = {
          email: formData.get('email'),
          password: formData.get('password')
        }
        const validationResult = emailAndPasswordSchema.safeParse(empw)
    
        if (!validationResult.success) {
          // Reset errors
          res.emailErrors.set([])
          res.passwordErrors.set([])
          
          
          // Display validation errors for email and password separately
          validationResult.error.issues.forEach(issue => {
            if (issue.path[0] === "email") {
              res.emailErrors.set([...res.emailErrors.get(), issue.message])
          } else if (issue.path[0] === "password") {
              res.passwordErrors.set([...res.passwordErrors.get(), issue.message])
          }
          })
          clearErrors()
          return
      }

        try{
          clientStates.isLoad.set(true)
        
          res.pen.set(true)
            const result = await handleLogin(formData)
             res.token.set(result.token)
             clientStates.token.set(result.token)
             toast({
                title: "Login Success",
                description: "Welcome to Trackify",
 
              })
              res.pen.set(false)
              res.redir.set(true)
              const path = "dashboard"
              navigate(path)
        } catch (error) {
            toast({
                title: "Error",
                description: error.message || "An unknown error occurred.",
         
              })
              res.pen.set(false)
        } finally {
          clientStates.isLoad.set(false)
        }
    }
  
  return (
    <form
    action={handleResponse}
    >
          <LoadingOverlay  />
         <div className="grid gap-6">
         {res.emailErrors.get() && (
                        <div className="text-sm text-red-600 font-medium">
                            {res.emailErrors.get().map((error, index) => (
                                <p key={index}>{error}</p>
                            ))}
                        </div>
                    )}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                  name="email"
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                  
                  />
                </div>
                <div className="grid gap-2">
                {res.passwordErrors.get() && (
                        <div className="text-sm text-red-600 font-medium">
                            {res.passwordErrors.get().map((error, index) => (
                                <p key={index}>{error}</p>
                            ))}
                        </div> 
                    )}
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input name="password" id="password" type="password"  />
                </div>
               <Button disabled={res.pen.get()} type="submit" className="w-full">
                {res.pen.get() ? <AiOutlineLoading3Quarters className="animate-spin"/> : "Login"}
                </Button>
              </div>
              </form>
  )
})

export default Login