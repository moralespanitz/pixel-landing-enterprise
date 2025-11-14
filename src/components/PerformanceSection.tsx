import image_b2822d757c5aacdd1d5ac70aa88289152d0b72b1 from 'figma:asset/b2822d757c5aacdd1d5ac70aa88289152d0b72b1.png';
import performanceImage from 'figma:asset/d76f89eb6ea7404976249be486be4505ac9d9206.png';
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function PerformanceSection() {
  return (
    <section id="performance" className="relative scroll-mt-12 lg:scroll-mt-20">
      <div className="w-full">
        {/* Main Content */}
        <div className="bg-[#f4f3ec] max-w-7xl mx-auto px-6 md:px-12 lg:pl-16 lg:pr-24 py-16 md:py-20">
          {/* Header with indicator */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#ff6464] w-[5px] h-[5px]" />
            <p className="font-['Source_Code_Pro',monospace] text-[10px] text-black uppercase tracking-wider">
              Performance
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
              Unrivalled performance on every metric that matters
            </h2>
          </div>

          {/* Description Text */}
          <div className="max-w-3xl mb-12 mx-auto">
            <p className="text-[15px] text-[#31312f] font-['Sora',sans-serif] font-light leading-relaxed">
              <span className="font-['Source_Code_Pro',monospace] text-[14px] mr-4">02</span>
              Pixel doesn't just create content—it creates content that performs. Our AI tracks engagement, learns from what works, and continuously optimizes your strategy. Every piece of content is designed to drive measurable results, from increased traffic to qualified leads.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <button className="px-8 py-3 border border-black bg-transparent hover:bg-black hover:text-white transition-colors duration-300">
              <span className="font-['Source_Code_Pro',monospace] text-[12px] tracking-wider">
                See performance metrics
              </span>
            </button>
          </div>

          {/* Visual Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-[#bebeb8] overflow-hidden">
              <ImageWithFallback
                src={image_b2822d757c5aacdd1d5ac70aa88289152d0b72b1}
                alt="Performance analytics dashboard"
                className="w-full h-auto rounded-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
