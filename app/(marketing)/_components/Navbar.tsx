"use client"

import React,{ useState,useEffect } from 'react'
import { useScrollTop } from '../../../hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/Button"
import Logo from './Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useConvexAuth } from 'convex/react'
import { SignInButton, UserButton } from "@clerk/clerk-react"
import { Spinner } from '@/components/Spinner'
import Link from 'next/link'

const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated,isLoading } = useConvexAuth();
  
  const [mounted,setMounted] = useState<boolean>(false);
  useEffect(()=>{
    setMounted(true);
  },[]);
  if(!mounted) return null;

  return (
    <div className={cn('z-50 bg-background dark:bg-[#1f1f1f] flex top-0 w-full p-6 items-center fixed',scrolled && 'border-b shadow-sm')}>
      <Logo/>
      <div className='md:ml-auto flex items-center gap-x-2 w-full justify-between md:justify-end'>
        {isLoading && (
          <Spinner></Spinner>
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode='modal'>
              <Button size={'sm'} variant={'ghost'}>Log in</Button>
            </SignInButton>
            <SignInButton mode='modal'>
              <Button size={'sm'}>Get TaskSync free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading &&(<>
          <Button size={'sm'} variant={'ghost'} className='hidden md:block'><Link href='/documents'>Enter TaskSync</Link></Button>
          <UserButton afterSignOutUrl='/'></UserButton>
        </>
        )}
        <ThemeSwitcher/>
      </div>
    </div>
  )
}

export default Navbar
