"use client"
import React, {useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { wrapHindiWords  } from '@/utils/fontInjector';
const page = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/philosophy/in-brief')
    },[])
      useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div>page</div>
  )
}

export default page