import { useState } from "react";
import { Menu, X } from "lucide-react";
import svgPaths from "../imports/svg-3p9lnd0gic";

function Logo() {
  return (
    <div className="size-[45px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g clipPath="url(#clip0_1_43)" id="Frame">
          <path d="M45 0H0V45H45V0Z" fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2889a80} fill="var(--fill-0, #6F6F6F)" id="Vector_2" />
          <path d={svgPaths.p31eb2a00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pbfa6280} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p3c30e080} fill="var(--fill-0, black)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_43">
            <rect fill="white" height="45" width="45" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#101118] w-full px-5 py-4">
      <div className="max-w-[1728px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <Logo />
          <div className="hidden md:block h-[27px] w-px bg-[#D5D5D5]" />
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#" className="font-['Inter:Regular',sans-serif] font-normal text-[15px] text-white text-nowrap">Home</a>
            <a href="#" className="font-['Inter:Regular',sans-serif] font-normal text-[15px] text-white text-nowrap">Pricing</a>
            <a href="#" className="font-['Inter:Regular',sans-serif] font-normal text-[15px] text-white text-nowrap">Use cases</a>
            <a href="#" className="font-['Inter:Regular',sans-serif] font-normal text-[15px] text-white text-nowrap">View demo</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-white px-[17px] py-[7px] rounded-[6px] h-[38px]">
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-black text-nowrap whitespace-pre">Get started</span>
          </button>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <nav className="flex flex-col gap-4">
            <a href="#" className="font-['Inter:Regular',sans-serif] font-normal text-[15px] text-white">Home</a>
            <a href="#" className="font-['Inter:Regular',sans-serif] font-normal text-[15px] text-white">Pricing</a>
            <a href="#" className="font-['Inter:Regular',sans-serif] font-normal text-[15px] text-white">Use cases</a>
            <a href="#" className="font-['Inter:Regular',sans-serif] font-normal text-[15px] text-white">View demo</a>
            <button className="bg-white px-[17px] py-[7px] rounded-[6px] h-[38px] w-full mt-2">
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-black text-nowrap whitespace-pre">Get started</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
