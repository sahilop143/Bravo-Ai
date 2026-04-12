import React, { useEffect } from 'react';
import BackgroundAnimation from './components/BackgroundAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import FeaturedAgents from './components/FeaturedAgents';
import FeatureStrip from './components/FeatureStrip';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import { initInteractions, cleanupInteractions } from './lib/interactions';

export default function App() {
  useEffect(() => {
    initInteractions();
    return () => cleanupInteractions();
  }, []);

  return (
    <>
      <BackgroundAnimation />
      <Header />
      <main>
        <Hero />
        <Showcase />
        <FeaturedAgents />
        <FeatureStrip />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
      <WaitlistModal />
    </>
  );
}
