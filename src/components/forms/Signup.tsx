"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Toaster } from "@/components/ui/toaster"
import { Button } from "../ui/button"
import { handleSignup } from "@/actions/actions"
import { useFormStatus } from "react-dom"
import { useObservable, observer } from "@legendapp/state/react"
import { useToast } from "@/hooks/use-toast" 
import { clientStates } from "@/state/clientState" 
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Signup = observer(() => {
    const { toast } = useToast()
    const {pending} = useFormStatus()
    const res = useObservable({token: "" , err: "", detail: "", pen: false})
    const handleResponse = async (formData) => {
        try{
            res.pen.set(true)
            const result = await handleSignup(formData)
             res.token.set(result.token)
             clientStates.token.set(result.token)
             res.detail.set(result.message)
             toast({
                title: "Your account has been created!",
                description: "Login now.",
              })
              res.pen.set(false)
        } catch (error) {
            res.detail.set(error.message)
            toast({
                title: "Error",
                description: error.detail || "An unknown error occurred.",
         
              })
              res.pen.set(false)
        }
    }
  return (
    <form
    action={handleResponse}
    >
 
        <Toaster />
         <div className="grid gap-6">
            <div className="flex flex-col">
            <div className="grid gap-2">
                  <Label htmlFor="fname">First Name</Label>
                  <Input
                  name="fname"
                    id="fname"
                    type="fname"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lname">Last Name</Label>
                  <Input
                  name="lname"
                    id="lname"
                    type="lname"
                    placeholder="m@example.com"
                    required
                  />
                </div>
            </div>
          
                <div className="grid gap-2">
                <span className="text-red-500 font-normal text-sm"> {res.detail.get()}</span>
                  <Label htmlFor="email">Email</Label>
                  <Input
                  name="email"
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input name="password" id="password" type="password" required />
                </div>
                <Button disabled={res.pen.get()} type="submit" className="w-full">
                {res.pen.get() ? <AiOutlineLoading3Quarters className="animate-spin"/> : "SignUp"}
                </Button>
              </div>
              </form>
  )
})

export default Signup