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
    <div className='py-8'>
      <ExploreContent />
    </div>
  );
}
