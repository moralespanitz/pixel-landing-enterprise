import svgPaths from "../imports/svg-ykluxphx84";
import imgGeminiGeneratedImage4L6Hts4L6Hts4L6HPhotoroom1 from "figma:asset/7659427e4253c36638461f6a543da32cdebfd914.png";
import customerBackgroundImage from "figma:asset/d76f89eb6ea7404976249be486be4505ac9d9206.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

function PlayButton() {
  return (
    <div className="absolute h-[41px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px]" data-name="Play Button">
      <div className="absolute backdrop-blur-[2px] backdrop-filter bg-[rgba(217,217,217,0.3)] h-[41px] left-0 rounded-[40px] top-0 w-[80px]">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40px]" />
      </div>
      <div className="absolute h-[11px] left-[18px] top-[15px] w-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
          <path d={svgPaths.p21773080} fill="var(--fill-0, #D9D9D9)" id="Vector 46" />
        </svg>
      </div>
      <p className="absolute font-['Roboto:Light',sans-serif] font-light leading-[normal] left-[32px] text-[#cfd1d4] text-[15px] text-nowrap top-[12px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PLAY
      </p>
    </div>
  );
}

function CustomerCard() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden" data-name="Customer">
      {/* Video element - hidden until play is clicked */}
      {isPlaying ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn-agents.trypixel.dev/content/Sarah+Fernandez+-+Founder+of+Altera.mov"
          controls
          autoPlay
        />
      ) : (
        <>
          {/* Background image */}
          <ImageWithFallback 
            src={customerBackgroundImage}
            alt="Customer testimonial"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute bg-[rgba(0,0,0,0.45)] inset-0" />
          
          {/* Play button - clickable */}
          <button 
            onClick={handlePlayClick}
            className="cursor-pointer border-none bg-transparent p-0"
            aria-label="Play video"
          >
            <PlayButton />
          </button>
        </>
      )}
      
      {/* Bottom content - hide when video is playing */}
      {!isPlaying && (
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
          {/* Company logo */}
          <div className="h-[24px] w-[76px] mb-3" data-name="Gemini_Generated_Image_4l6hts4l6hts4l6h-Photoroom 1">
            <div className="relative h-full w-full overflow-hidden">
              <img 
                alt="Altera logo" 
                className="absolute h-[531.25%] left-[-31.4%] max-w-none top-[-214.06%] w-[164.25%]" 
                src={imgGeminiGeneratedImage4L6Hts4L6Hts4L6HPhotoroom1} 
              />
            </div>
          </div>
          
          {/* Result text */}
          <p 
            className="font-['HvDTrial_Livory:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] text-[#acacac] text-[20px] md:text-[28px] text-nowrap whitespace-pre" 
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}
          >
            $2,000 after one month
          </p>
        </div>
      )}
    </div>
  );
}

export default function CustomersSection() {
  return (
    <section id="integrations" className="relative scroll-mt-12 lg:scroll-mt-20">
      <div className="w-full">
        {/* Main Content */}
        <div className="bg-[#080e1e] max-w-7xl mx-auto px-6 md:px-12 lg:pl-16 lg:pr-24 py-16 md:py-20">
          {/* Header with label */}
          <div className="mb-8">
            <p className="font-['Sora',sans-serif] text-[10px] text-white uppercase tracking-wider">
              Customers
            </p>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-[#393E4B] mb-12" />

          {/* Main Headlines */}
          <div className="mb-16 text-center lg:text-left">
            <h2
              className="text-[32px] md:text-[48px] leading-tight text-white mb-2"
              style={{ fontFamily: "'HvDTrial Livory', serif" }}
            >
              They Built the System.
            </h2>
            <h2
              className="text-[32px] md:text-[48px] leading-tight text-white"
              style={{ fontFamily: "'HvDTrial Livory', serif" }}
            >
              Now Pipeline Comes to them.
            </h2>
          </div>

          {/* Customer Testimonial Card */}
          <div className="w-full">
            <CustomerCard />
          </div>
        </div>
      </div>
    </section>
  );
}