function TryDemo() {
  return (
    <button className="relative box-border flex gap-[10px] h-[33px] items-center justify-center px-[14px] py-[7px] rounded-[6px] border border-solid border-white hover:bg-white hover:text-black transition-colors">
      <p className="font-['Inter',sans-serif] text-[15px] text-white hover:text-black whitespace-nowrap">
        Try demo
      </p>
    </button>
  );
}

function GetStarted() {
  return (
    <button className="relative bg-white box-border flex gap-[10px] h-[33px] items-center justify-center px-[17px] py-[7px] rounded-[6px] border border-solid border-white hover:bg-gray-100 transition-colors">
      <p className="font-['Inter',sans-serif] text-[15px] text-black whitespace-nowrap">
        Get started
      </p>
    </button>
  );
}

function CtaButtons() {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <GetStarted />
      <TryDemo />
    </div>
  );
}

export default function FinalCTASection() {
  return (
    <section className="relative">
      <div className="w-full pr-5 md:pr-8 lg:pr-12">
        {/* Main Content - Dark background */}
        <div id="final-cta" className="bg-[rgb(16,17,24)] max-w-7xl mx-auto px-6 md:px-12 lg:pl-16 lg:pr-24 py-16 md:py-24">
          {/* Border container */}
          <div className="border border-[#2a2e3a] p-8 md:p-12 lg:p-16">
            {/* Header with orange dot */}
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#ff6464] w-[8px] h-[8px] rounded-full" />
              <p className="font-['Sora',sans-serif] text-[10px] text-white uppercase tracking-wider">
                PIXEL VISION
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left: Headline */}
              <div>
                <h2
                  className="text-[32px] md:text-[40px] lg:text-[48px] leading-tight text-white"
                  style={{ fontFamily: "'HvDTrial Livory', serif" }}
                >
                  Our vision—AI Agents that turn insights into influence
                </h2>
              </div>

              {/* Right: Description and CTA */}
              <div className="flex flex-col gap-8">
                <div>
                  <p className="font-['Sora',sans-serif] text-[14px] md:text-[15px] text-[#b2b2b2] leading-relaxed mb-4">
                    Imagine specialized AI research agents working 24/7 to monitor your markets, identify opportunities, and create content that sounds exactly like you. A future where your unique insights reach the right people at the right time, every time.{" "}
                    <a 
                      href="#" 
                      className="text-white underline hover:text-[#b2b2b2] transition-colors"
                    >
                      Learn more
                    </a>
                  </p>
                </div>

                {/* CTA Buttons */}
                <div>
                  <CtaButtons />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Headline */}
          <div className="mt-16 text-center">
            <h2
              className="text-[32px] md:text-[48px] lg:text-[56px] leading-tight text-white max-w-4xl mx-auto"
              style={{ fontFamily: "'HvDTrial Livory', serif" }}
            >
              Get started with the
              <br />
              #1 AI Agent Content Machine now
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
