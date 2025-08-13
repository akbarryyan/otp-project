import { useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

// Import landing page components
import {
  Navigation,
  HeroSection,
  FeaturesSection,
  OTPServicesSection,
  HowItWorksSection,
  TestimonialsSection,
  FooterSection,
  MobileBottomNavigation,
} from "../components/landingPage";

function Landing() {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = [
        "home",
        "services",
        "how-it-works",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#services" },
    { name: "Cara Kerja", href: "#how-it-works" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Kontak", href: "#contact" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden pb-20 md:pb-0">
      <Navigation
        isScrolled={isScrolled}
        navItems={navItems}
        handleSmoothScroll={handleSmoothScroll}
      />

      <HeroSection yRange={yRange} />

      <FeaturesSection />

      <OTPServicesSection />

      <HowItWorksSection />

      <TestimonialsSection />

      <FooterSection />

      <MobileBottomNavigation
        navItems={navItems}
        activeSection={activeSection}
        handleSmoothScroll={handleSmoothScroll}
      />
    </div>
  );
}

export default Landing;
