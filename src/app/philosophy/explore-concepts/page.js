// page.tsx or a Server Component
'use client'
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const ExploreContent = dynamic(() => import('@/components/explore-concepts/ExploreConcepts'), {
  ssr: false,
});

export default function Page() {
    useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className='px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6'>
      <ExploreContent  />
    </div>
  );
}
