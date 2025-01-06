 
import Social from "./Social"

export default function Lform({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
<div className="flex justify-center items-center flex-col gap-28">

                <Social />
          
      <div className="text-balance text-center text-xs text-gray-500 [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-gray-900  dark:text-gray-400 dark:[&_a]:hover:text-gray-50">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{""}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>    
  )
}
