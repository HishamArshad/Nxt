"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
} from "@/components/ui/carousel"
const cardData = [
    {
      id: 1,
      title: "Automatic Payment Reminders.",
      description: "Never Miss a Payment Again! Stay ahead of your subscription payments with timely reminders for upcoming due dates.",
      company: "TrackifySub."
    },
    {
      id: 2,
      title: "Expense Tracking & Analytics",
      description: "Understand Your Spending Habits. Get detailed insights into your recurring expenses and identify opportunities to save money.",
      company: "TrackifySub."
    },
    {
      id: 3,
      title: "Cross-Platform Access For you.",
      description: "Track Subscriptions Anywhere. Whether on your phone, tablet, or desktop, access your subscription manager seamlessly.",
      company: "TrackifySub."
    },
    {
      id: 4,
      title: "Notifications for Expiry Dates At Ease",
      description: "Renew or Cancel with Confidence. Get notified when your subscriptions are about to expire, so you're always in control.",
      company: "TrackifySub."
    },
    {
      id: 5,
      title: "Secure and Private right now!",
      description: "Your Data, Your Privacy. We prioritize your security with robust encryption, ensuring your sensitive information stays safe.",
      company: "TrackifySub."
    },
    {
      id: 6,
      title: "Customizable Dashboard and More.",
      description: "See What Matters Most. Personalize your dashboard to display the subscriptions and metrics that matter to you.",
      company: "TrackifySub."
    }
  ];
  
  
export function CarouselSize() {
  return (
    <>
    <Carousel
         plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false
            }),
          ]}
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {cardData.map((item) => (
         <CarouselItem key={item.id} className="basis-1/1 lg:basis-1/3">
         <div className="p-1">
           <Card className="bg-[#5a68a162] w-72 h-44">
             <CardContent className="text-white text-wrap ">
                <div className="flex justify-between gap-3 flex-col mt-2">
                <div>
               <h1 className="font-bold text-[1.2rem]">{item.title}</h1>
               <h1 className="text-[0.65rem]">{item.description}</h1>
               </div>
               <h1 className="mt-5 font-medium">{item.company}</h1>
               </div>
             </CardContent>
           </Card>
         </div>
       </CarouselItem>
        ))}
 

      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
 
    </>
  )
}
