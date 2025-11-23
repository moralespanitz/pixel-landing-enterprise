"use client";
import { useState, useEffect, useRef } from "react";

interface NavItem {
  id: string;
  number: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "capabilities", number: "01", label: "problem" },
  { id: "solution", number: "02", label: "solution" },
  { id: "performance", number: "03", label: "how it works" },
  { id: "integrations", number: "04", label: "customers" },
  { id: "pricing", number: "05", label: "pricing" },
  { id: "faqs", number: "06", label: "faqs" },
];

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState("capabilities");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // IntersectionObserver for scrollspy behavior
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Keep FAQs active when scrolling past it to the end
    const handleScroll = () => {
      const faqsElement = document.getElementById("faqs");
      if (faqsElement) {
        const faqsRect = faqsElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If we've scrolled past FAQs (it's above the viewport)
        if (faqsRect.bottom < windowHeight * 0.3) {
          setActiveSection("faqs");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Different offset for mobile (sticky nav height + padding) vs desktop
      const isMobile = window.innerWidth < 1024;
      const offset = isMobile ? 50 : 100; // Mobile sticky nav is about 50px tall
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Mobile Horizontal Navigation - Sticky at top */}
      <nav 
        aria-label="Chapter navigation" 
        className="lg:hidden sticky top-0 z-30 bg-black border-b border-[#2a2e3a]"
      >
        <ul className="flex overflow-x-auto scrollbar-hide">
          {navItems.map((item) => (
            <li key={item.id} className="flex-shrink-0">
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`font-['Source_Code_Pro',monospace] text-[10px] tracking-wider uppercase inline-flex items-center gap-2 px-4 py-3 whitespace-nowrap transition-colors duration-300 border-b-2 ${
                  activeSection === item.id
                    ? "text-white border-[#ff6464]"
                    : "text-[#81827b] border-transparent hover:text-white"
                }`}
              >
                <span>{item.number}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Vertical Navigation - Sticky on left */}
      <nav 
        aria-label="Chapter navigation"
        className="hidden lg:block sticky top-20 z-10 h-fit w-[260px] float-left p-8 bg-[rgb(16,17,24)]"
      >
        <ul className="space-y-0">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`w-full font-['Source_Code_Pro',monospace] text-xs tracking-wider uppercase inline-flex items-baseline gap-y-1 py-4 md:py-2.5 transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-white hover:text-white"
                    : "text-[#81827b] hover:text-white"
                }`}
              >
                <span className="shrink-0 pr-2 md:pr-3">{item.number}</span>
                <span className="gap-y-1 leading-4">{item.label}</span>
              </a>
              <span className="relative block h-[1px] w-full bg-[#81827b]">
                <span
                  className="absolute top-0 left-0 h-[1px] w-full origin-left bg-[#ff6b35] transition-transform duration-300"
                  style={{
                    transform:
                      activeSection === item.id ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
