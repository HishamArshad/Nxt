import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'

export default function PageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}
 