import React from 'react'
import Navbar from './_components/Navbar'

const layout = ( {children} : {children:React.ReactNode} ) => {
  return (
    <div className='h-full dark:bg-[#1f1f1f]'>
      <Navbar/>
      <main className="pt-40 h-full">
        {children}
      </main>
    </div>
  )
}

export default layout
