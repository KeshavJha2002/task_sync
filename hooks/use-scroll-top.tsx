import React,{ useState,useEffect } from 'react'

export const useScrollTop = ( threshold=10 ):boolean => {
  const [scrolled,setScrolled] = useState<boolean>(false);

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > threshold){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }

    window.addEventListener( 'scroll',handleScroll);
    return () => window.removeEventListener( 'scroll', handleScroll );
  },[threshold,scrolled] );

  return scrolled;
}
