"use client"

import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const Heading:React.FC = () => {
  return (
    <div className='max-w-3xl space-y-8'>
      <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold'>
        Your Ideas, Documents & Plans.<br/> Unified. <br/> Welcome to <span className='underline'>TaskSync</span>
      </h1>
      <h3 className=' font-medium sm:text-xl md:text-2xl text-base'>
        TaskSync is the connected workspace where <br/>
        better and faster work happens.
      </h3>
      <Button>
        Enter TaskSync 
        <ArrowRight className='h-4 w-4 ml-2'/>
      </Button>
    </div>
  )
}

export default Heading
