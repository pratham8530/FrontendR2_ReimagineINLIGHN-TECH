import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CertificationSection from "./components/CertificationSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import MissionVisionCarousel from "./components/MissionVisionCarousel";
import StatisticsSection from "./components/StatisticsSection";
import WhyChooseSection from "./components/WhyChooseSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import LoginPage from "./components/LoginPage";
import AboutPage from "./components/AboutPage";
import ProgramsPage from "./components/ProgramsPage";
import VerifyCertificatePage from "./components/VerifyCertificatePage";
import WhatsSpecialPage from "./components/WhatsSpecialPage";
import ContactPage from "./components/ContactPage";

function HomePage() {
  return (
    <main>
      <section id="home">
        <HeroSection />
      </section>
      <CertificationSection />
      <AboutSection />
      <FeaturesSection />
      <MissionVisionCarousel />
      <StatisticsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [historyStack, setHistoryStack] = useState([location.pathname]);

  // Track navigation history to determine direction
  React.useEffect(() => {
    setHistoryStack((prev) => [...prev, location.pathname]);
  }, [location.pathname]);

  // Determine if navigation is forward or backward
  const getDirection = () => {
    const currentIndex = historyStack.length - 1;
    const prevPath = historyStack[currentIndex - 1];
    const currentPath = location.pathname;

    const routeOrder = [
      "/",
      "/about",
      "/programs",
      "/verify-certificate",
      "/whats-special",
      "/contact",
      "/login",
    ];
    const currentRouteIndex = routeOrder.indexOf(currentPath);
    const prevRouteIndex = routeOrder.indexOf(prevPath);

    return currentRouteIndex > prevRouteIndex ? "right" : "left";
  };

  const direction = getDirection();

  return (
    <>
      {/* Render Header and WhatsAppButton outside PageTransition to keep them fixed */}
      <Header />
      <div className="relative min-h-screen">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/login"
              element={
                <PageTransition direction={direction}>
                  <LoginPage />
                </PageTransition>
              }
            />
            <Route
              path="/*"
              element={
                <PageTransition direction={direction}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/programs" element={<ProgramsPage />} />
                    <Route path="/verify-certificate" element={<VerifyCertificatePage />} />
                    <Route path="/whats-special" element={<WhatsSpecialPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                  </Routes>
                  <Footer />
                  <ScrollToTop />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
        <WhatsAppButton /> {/* Moved outside PageTransition to ensure it stays fixed */}
      </div>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#0c0c0c] via-[#1a1a2e] to-[#16213e] text-white relative">
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
        {!isLoading && <AppContent />}
      </div>
    </Router>
  );
}

export default App;