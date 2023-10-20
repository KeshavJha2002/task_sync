import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/Button'

const Footer:React.FC = () => {
  return (
    <div className='flex bg-background dark:bg-[#1f1f1f] z-50 w-full items-center p-6'>
      <Logo/>
      <div className='w-full md:ml-auto justify-between flex items-center text-center md:justify-end gap-x-2 text-muted-foreground'>
        <Button variant={'ghost'} size={'sm'}>Privacy Policy</Button>
        <Button variant={'ghost'} size={'sm'}>Terms & Conditions</Button>
      </div>
    </div>
  )
}

export default Footer
