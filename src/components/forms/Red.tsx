import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

const Red = () => {
    redirect('/dashboard')
  return (
    <div>
        Red
    </div>
  )
}

export default Red