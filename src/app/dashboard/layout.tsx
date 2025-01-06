 
import Navbar from '@/components/Navbar';
import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'
import { AppSidebar } from '@/components/app-sidebar'
 
  

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
 
  SidebarTrigger,
} from "@/components/ui/sidebar" 
export default function DashboardLayout({
    children 
  }: Readonly<{
    children: React.ReactNode;
 
  }>) {
    return (
    <div>
        <Navbar />
        <main>
          <SidebarProvider className='bg-red-500'>
            
     <AppSidebar className='bg-slate-600'/>
     <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage >Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>
        </header>
        <main className='bg-red-400 px-4 py-4'>
     
        {children}
        
        </main>
        </SidebarInset>
     
       
          </SidebarProvider>
          </main>
 
    </div>
  )
}
 