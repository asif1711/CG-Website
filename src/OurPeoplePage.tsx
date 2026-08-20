import React, { useEffect } from 'react';
import TeamsSection from './components/Teams/TeamsSection';

export default function OurPeoplePage() {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Our People - Chelson Gordon';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans pt-[90px] lg:pt-[95px] xl:pt-[115px] 2xl:pt-[130px]">
      <TeamsSection />
    </div>
  );
}
