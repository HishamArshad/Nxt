 
import React from 'react'
 
export default function ExpenseLayout({
    children, 
    modal
  }: Readonly<{
    children: React.ReactNode
    modal: React.ReactNode
 
  }>) {
    return (
    <div>
       
        {modal}
        {children}
 
  
 
    </div>
  )
}
 