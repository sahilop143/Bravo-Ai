'use client';

import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './sections/Hero';
import Showcase from './sections/Showcase';
import FeatureStrip from './sections/FeatureStrip';
import CTA from './sections/CTA';
import Footer from './Footer';
import WaitlistModal from './WaitlistModal';
import BackgroundAnimation from './BackgroundAnimation';
import { initInteractions, initSocialPopupHandler } from '@/lib/interactions';

export default function HomePage() {
  useEffect(() => {
    initInteractions();
    initSocialPopupHandler();
    return () => {
      // Cleanup on unmount
      // Note: cleanupInteractions would need to be called if we tracked all handlers
    };
  }, []);

  return (
    <>
      <BackgroundAnimation />
      <Header />
      <main>
        <Hero />
        <Showcase />
        <FeatureStrip />
        <CTA />
      </main>
      <Footer />
      <WaitlistModal />
    </>
  );
}
