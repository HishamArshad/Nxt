 
import { Modal } from '@/components/Modal'
import React from 'react'
 
export default function CategoryLayout({
    children
 
  }: Readonly<{
    children: React.ReactNode
 
  }>) {
    return (
    <div>
        <Modal>
        {children}
        </Modal>
  
 
    </div>
  )
}
 