import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import PerformanceSection from "./components/PerformanceSection";
import CustomersSection from "./components/CustomersSection";
import TechnologySection from "./components/TechnologySection";
import AITeamSection from "./components/AITeamSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import StickyNav from "./components/StickyNav";

export default function App() {
  return (
    <div className="min-h-screen bg-[#101118]">
      <Header />
      <Hero />

      {/* Container for sections with sticky nav */}
      <div className="relative">
        {/* Sticky navigation wrapper */}
        <StickyNav />

        <div className="lg:flex">
          {/* Main content with flex-grow */}
          <div className="flex-1 flex flex-col pr-5 md:pr-8 lg:pr-12 gap-8">
            <ProblemSection />
            <SolutionSection />
            <PerformanceSection />
            <CustomersSection />
            <PricingSection />
            <FAQSection />
          </div>
        </div>
      </div>

      {/* Final CTA - Full width without sidebar */}
      <FinalCTASection />
    </div>
  );
}