import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Poppins({
  weight: ['400','600'],
  subsets: ['latin']
})

const Logo:React.FC = () => {
  return (
    <div className='hidden md:flex items-center gap-x-2'>
      <Image src='/logo.svg' className='block dark:hidden' alt='Logo' width={"40"} height={"40"}></Image>
      <Image src='/logo-dark.svg' className='hidden dark:block' alt='Logo' width={"40"} height={"40"}></Image>
      <p className={cn('font-semibold',font.className)}>TaskSync</p>
    </div>
  )
}

export default Logo
