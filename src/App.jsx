import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import SocialPopup from './components/SocialPopup';
import ErrorBoundary from './components/ErrorBoundary';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { initInteractions, cleanupInteractions } from './lib/interactions';

/**
 * Hook to handle scroll-based header styling
 */
function useHeaderScroll(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.pageYOffset > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}

/**
 * Hook to handle mobile menu state
 */
function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  
  return { isOpen, open, close, toggle };
}

/**
 * Home Page Component
 */
function HomePage({ scrolled, mobileMenu }) {
  return (
    <>
      <BackgroundAnimation />
      <Header scrolled={scrolled} mobileMenu={mobileMenu} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Showcase />
        <FeaturedAgents />
        <FeatureStrip />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

/**
 * Main App Component
 */
export default function App() {
  const location = useLocation();
  const scrolled = useHeaderScroll();
  const mobileMenu = useMobileMenu();

  useEffect(() => {
    initInteractions();
    return () => cleanupInteractions();
  }, [location.pathname]);

  useEffect(() => {
    mobileMenu.close();
  }, [location.pathname, mobileMenu.close]);

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomePage scrolled={scrolled} mobileMenu={mobileMenu} />} />
        <Route path="/terms" element={<Terms scrolled={scrolled} mobileMenu={mobileMenu} />} />
        <Route path="/privacy" element={<Privacy scrolled={scrolled} mobileMenu={mobileMenu} />} />
      </Routes>
      <WaitlistModal />
      <SocialPopup />
    </ErrorBoundary>
  );
}
