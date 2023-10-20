"use client"
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const Heroes = () => {
  return (
    <div className='flex max-w-5xl dark:bg-[#1f1f1f] flex-col justify-center items-center'>
      <div className='flex items-center'>
        <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]'>
          <Image src='/documents.png' className='object-contain block dark:hidden' alt='Documents' fill></Image>
          <Image src='/documents-dark.png' className='object-contain hidden dark:block' alt='Documents' fill></Image>
        </div>
        <div className='relative h-[400px] w-[400px] hidden md:block'>
        <Image src='/reading.png' className='object-contain block dark:hidden' alt='Reading' fill></Image>
        <Image src='/reading-dark.png' className='object-contain hidden dark:block' alt='Reading' fill></Image>
        </div>
      </div>      
    </div>
  )
}

export default Heroes
