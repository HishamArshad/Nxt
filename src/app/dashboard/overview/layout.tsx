import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'
import {
  SidebarInset,
} from "@/components/ui/sidebar" 
export default function DashboardLayout({
    children, 
    dashchart
  }: Readonly<{
    children: React.ReactNode
    dashchart: React.ReactNode
 
  }>) {
    return (
    <div>
       
        {children}
        {dashchart}
 
  
 
    </div>
  )
}
 