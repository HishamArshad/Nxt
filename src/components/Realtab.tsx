import Video from "./Video"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"
export function Realtab() {
  return (
    <Tabs defaultValue="subscription" className="container mx-auto border border-[#D7D7D7] rounded-lg px-2 py-2 md:px-5 md:py-6">
      <TabsList className="flex flex-col gap-4 md:flex-row">
        <TabsTrigger className="" value="subscription">
                <div className=' px-4 py-4 flex flex-col gap-4 text-wrap text-start sm:w-full md:max-w-96'>
                  <div className='flex gap-3 items-center'>
                      <Image src="/subscription.svg" alt="Logo" width={36} height={36} />
                      <h1 className='text-grayfy font-bold'>Track Your Subscriptions Efortlessly.</h1>
                  </div>
                  <h1 className='text-grayfy text-sm hidden sm:block'>
                  Stay on top of your subscriptions with ease! Add your subscriptions, set reminders, and let TrackifySub handle the rest—no more missed renewals or unexpected charges.
                  </h1>  
                </div>
        </TabsTrigger>
        <TabsTrigger value="todo">
                <div className=' px-4 py-4 flex flex-col gap-4 text-wrap text-start sm:w-full md:max-w-96'>
                  <div className='flex gap-3 items-center'>
                      <Image src="/todo.svg" alt="Logo" width={36} height={36} />
                      <h1 className='text-grayfy font-bold'>Organize Your To-Dos with Ease.</h1>
                  </div>
                  <h1 className='text-grayfy text-sm hidden sm:block'>
                  Keep track of your tasks and never miss a deadline. Plan, prioritize, and stay productive with a simple, intuitive to-do management system that fits your busy life.
                  </h1>
                </div>
        </TabsTrigger>
        <TabsTrigger value="analytics">
                <div className=' px-4 py-4 flex flex-col gap-4 text-wrap text-start sm:w-full md:max-w-96'>
                  <div className='flex gap-3 items-center'>
                      <Image src="/analytics.svg" alt="Logo" width={36} height={36} />
                      <h1 className='text-grayfy font-bold'>Gain Insights with Powerful Analytics.</h1>
                  </div>
                  <h1 className='text-grayfy text-sm hidden sm:block'>
                  Understand your spending habits and optimize your budget. With detailed analytics, TrackifySub helps you identify trends, cut unnecessary costs, and make smarter financial decisions.
                  </h1>
                </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="subscription">
      <div>
      <Video urls="/trackify.mp4" />
    </div>
      </TabsContent>
      <TabsContent value="todo">
      <div>
      <Video urls="/video2.mp4"/>
    </div>
      </TabsContent>
      <TabsContent value="analytics">
      <div>
      <Video urls="/video3.mp4"/>
    </div>
      </TabsContent>
    </Tabs>
  )
}
