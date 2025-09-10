'use client'
import { useEffect } from 'react';
import HomeSection1 from '@/components/Home/HomeSection1';
import HomeSection2 from '@/components/Home/HomeSection2';
import HomeSection3 from '@/components/Home/HomeSection3';
import HomeSection4 from '@/components/Home/HomeSection4';
import HomeSection5 from '@/components/Home/HomeSection5';
import HomeSection6 from '@/components/Home/HomeSection6';
import HomeSection7 from '@/components/Home/HomeSection7';
import React from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';

function App() {
  useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <main>
      <div className="lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto flex flex-col items-center">
        {/* section 1 */}
        <HomeSection1 />
        {/* section 2 */}
        <HomeSection2 />
        {/* section 3 */}
        <HomeSection3 />
        {/* section 4 */}
        <HomeSection4 />
        {/* section 5 */}
        <HomeSection5 />
        {/* section 6 */}
        <HomeSection6 />
        {/* section 7 */}
        <HomeSection7 />
      </div>
    </main>
  );
}

export default App;