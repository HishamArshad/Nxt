import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'
import { AppSidebar } from '@/components/app-sidebar'
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar" 
import { NavUser } from '@/components/nav-user';
import { NavUsers } from '@/components/NavUsers';
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
}
export default function DashboardLayout({
    children, 
    dashchart
  }: Readonly<{
    children: React.ReactNode
    dashchart: React.ReactNode
 
  }>) {
    return (
    <div>
     
        <main>
          <SidebarProvider>
            
     <AppSidebar className='bg-slate-600'/>
     <SidebarInset>
        <header className=" ">
          <div className="flex  items-center justify-between gap-2  px-4 py-4">
            <div className='flex items-center  gap-2'>
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            <div> 
        
            <NavUsers user={data.user}/>
               
            </div>
          </div>
        </header>
        <main className='px-4 py-4'>
     
        {children}
   
        </main>
        </SidebarInset>
     
       
          </SidebarProvider>
          </main>
 
    </div>
  )
}
 