import React from 'react'
import Heading from './_components/Heading'
import Heroes from './_components/Heroes'
import Footer from './_components/Footer'

const page:React.FC = () => {
  return (
    <div className='min-h-full flex flex-col dark:bg-[#1f1f1f]'>
      <div className="flex flex-col justify-center gap-y-8 items-center md:justify-start text-center flex-1 pb-10 px-6">
        <Heading/>
        <Heroes/>
        <Footer/>
      </div>
    </div>
  )
}

export default page
