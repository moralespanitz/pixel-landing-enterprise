import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function AITeamSection() {
  return (
    <section id="ai-team" className="relative">
      <div className="mr-5">
        {/* Main Content */}
        <div className="bg-[#f4f3ec] max-w-7xl mx-auto px-6 md:px-12 lg:pl-16 lg:pr-24 py-16 md:py-20">
          {/* Header with indicator */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#ff6464] w-[5px] h-[5px]" />
            <p className="font-['Source_Code_Pro',monospace] text-[10px] text-black uppercase tracking-wider">
              AI Team
            </p>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-[#7D7D7D] mb-12" />

          {/* Main Headline */}
          <div className="max-w-4xl text-center mb-12 mx-auto">
            <h2
              className="text-[32px] md:text-[48px] lg:text-[56px] leading-tight mb-8"
              style={{ fontFamily: "'HvDTrial Livory', serif" }}
            >
              Your 24/7 content team that never sleeps
            </h2>
          </div>

          {/* Description Text */}
          <div className="max-w-3xl mb-12 mx-auto">
            <p className="text-[15px] text-[#31312f] font-['Sora',sans-serif] font-light leading-relaxed">
              <span className="font-['Source_Code_Pro',monospace] text-[14px] mr-4">05</span>
              Think of Pixel as your always-on content department. Our AI team monitors trends, identifies opportunities, and creates strategic content around the clock. While you sleep, Pixel is researching, writing, and preparing content that positions you ahead of the competition.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <button className="px-8 py-3 border border-black bg-transparent hover:bg-black hover:text-white transition-colors duration-300">
              <span className="font-['Source_Code_Pro',monospace] text-[12px] tracking-wider">
                Meet your AI team
              </span>
            </button>
          </div>

          {/* Visual Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-[#bebeb8] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618758992242-2d4bc63a1be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzYyOTc4Mzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI artificial intelligence visualization"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
