import solutionImage from "figma:asset/4b9fbea1e0d0d374e7f7622011f46979ee04bcc8.png";

export default function SolutionSection() {
  return (
    <section id="solution" className="relative scroll-mt-12 lg:scroll-mt-20">
      <div className="w-full">
        {/* Main Content */}
        <div className="bg-[#f4f3ec] max-w-7xl mx-auto px-6 md:px-12 lg:pl-16 lg:pr-24 py-16 md:py-20">
          {/* Header with indicator */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#ff6464] w-[5px] h-[5px]" />
            <p className="font-['Source_Code_Pro',monospace] text-[10px] text-black uppercase tracking-wider">
              SOLUTION
            </p>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-[#7D7D7D] mb-12" />

          {/* Main Headlines */}
          <div className="max-w-4xl mb-12">
            <h2
              className="text-[32px] md:text-[48px] lg:text-[56px] leading-tight mb-4"
              style={{ fontFamily: "'HvDTrial Livory', serif" }}
            >
              Stop Guessing What to Post.
            </h2>
            <h2
              className="text-[32px] md:text-[48px] lg:text-[56px] leading-tight"
              style={{ fontFamily: "'HvDTrial Livory', serif" }}
            >
              Start Knowing{" "}
              <span className="bg-[#beffbe] px-2">What Converts.</span>
            </h2>
          </div>

          {/* Description Text */}
          <div className="max-w-3xl mb-16">
            <p className="text-[15px] text-[#31312f] font-['Sora',sans-serif] font-light leading-relaxed">
              <span className="font-['Source_Code_Pro',monospace] text-[12px] mr-4">
                02
              </span>
              We've trained specialized AI agents to discover what your market actually wants to know—connecting global trends, audience interests, and your company's unique insights.
            </p>
          </div>

          {/* Visual Content Box */}
          <div className="mb-16">
            <div className="bg-[#eeede6] border border-[#bebeb8] min-h-[300px] sm:min-h-[400px] md:min-h-[519px] relative flex items-center justify-center p-4 sm:p-6 md:p-8">
              {/* Header Tag */}
              <div className="absolute top-0 left-0 bg-[#f4f3ec] border-b border-r border-[#bebeb8] px-3 py-2">
                <p className="font-['Source_Code_Pro',monospace] text-[10px] text-[#626260]">
                  FIG 2.A
                </p>
              </div>
              
              {/* Centered Image */}
              <img 
                src={solutionImage} 
                alt="Market Intelligence Dashboard"
                className="w-full h-auto max-w-full object-contain"
              />
            </div>
          </div>

          {/* Three Columns with Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Company insights */}
            <div className="border-t border-[#BEBEB8] pt-4">
              <h3 className="font-['Sora',sans-serif] text-[18px] text-black mb-4">
                Company insights
              </h3>
              <p className="font-['Sora',sans-serif] text-[14px] text-[#676767] leading-[1.589]">
                Your brand DNA—wins, failures, customer conversations, and your unique perspective. Your answers to 2-3 strategic questions weekly. The insight only you can provide.
              </p>
            </div>

            {/* Niche interests */}
            <div className="border-t border-[#BEBEB8] pt-4">
              <h3 className="font-['Sora',sans-serif] text-[18px] text-black mb-4">
                Niche interests
              </h3>
              <p className="font-['Sora',sans-serif] text-[14px] text-[#676767] leading-[1.589]">
                What your specific audience actually cares about. The technical problems they're solving. The debates happening in your corner of the world.
              </p>
            </div>

            {/* Global Trends */}
            <div className="border-t border-[#BEBEB8] pt-4">
              <h3 className="font-['Sora',sans-serif] text-[18px] text-black mb-4">
                Global Trends
              </h3>
              <p className="font-['Sora',sans-serif] text-[14px] text-[#676767] leading-[1.589]">
                Hot topics breaking right now. Major announcements, viral discussions, regulatory changes. The broad conversations everyone's talking about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
