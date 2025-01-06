import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'

export default function SignupLayout({
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
 