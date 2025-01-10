import { Modal } from '@/components/Modal'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div>pageCategory</div>
    <Link href="/dashboard/expense/category/addexpense">Next Step</Link>
    </>
  )
}

export default page