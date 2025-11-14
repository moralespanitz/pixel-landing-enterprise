import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function TechnologySection() {
  return (
    <section id="technology" className="relative">
      <div className="mr-5">
        {/* Main Content */}
        <div className="bg-[#f4f3ec] max-w-7xl mx-auto px-6 md:px-12 lg:pl-16 lg:pr-24 py-16 md:py-20">
          {/* Header with indicator */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#ff6464] w-[5px] h-[5px]" />
            <p className="font-['Source_Code_Pro',monospace] text-[10px] text-black uppercase tracking-wider">
              Technology
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
              Built on cutting-edge AI that learns from your voice
            </h2>
          </div>

          {/* Description Text */}
          <div className="max-w-3xl mb-12 mx-auto">
            <p className="text-[15px] text-[#31312f] font-['Sora',sans-serif] font-light leading-relaxed">
              <span className="font-['Source_Code_Pro',monospace] text-[14px] mr-4">04</span>
              Our proprietary technology combines large language models with deep learning algorithms trained on your unique content style. Pixel doesn't just mimic—it understands context, tone, and strategy, ensuring every piece feels authentically yours.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <button className="px-8 py-3 border border-black bg-transparent hover:bg-black hover:text-white transition-colors duration-300">
              <span className="font-['Source_Code_Pro',monospace] text-[12px] tracking-wider">
                Learn about the technology
              </span>
            </button>
          </div>

          {/* Visual Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-[#bebeb8] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614020661498-fef5b2293108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzAzMjE1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Advanced technology interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
