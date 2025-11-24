import agencyImage from "figma:asset/f5fdd65054ae77f6db5de6cb7b76f4d0b794039e.png";
import ChatInterface from "./figma/ChatInterface";
import AgencyChat from "./figma/AgencyChat";
import GhostwriterChat from "./figma/GhostwriterChat";

export default function ProblemSection() {
  return (
    <section
      id="capabilities"
      className="relative scroll-mt-12 lg:scroll-mt-20"
    >
      <div className="w-full">
        {/* Main Content */}
        <div className="bg-[#f4f3ec] max-w-7xl mx-auto px-6 md:px-12 lg:pl-16 lg:pr-24 py-16 md:py-20">
          {/* Header with indicator */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#ff6464] w-[5px] h-[5px]" />
            <p className="font-['Source_Code_Pro',monospace] text-[10px] text-black uppercase tracking-wider">
              PROBLEM
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
              You Know Content Drives Revenue,{" "}
              <span className="bg-[#ff8d8d] px-2">
                You Just Can't Do It.
              </span>
            </h2>
          </div>

          {/* Description Text */}
          <div className="max-w-3xl mb-16 mx-auto">
            <p className="text-[15px] text-[#31312f] font-['Sora',sans-serif] font-light leading-relaxed">
              <span className="font-['Source_Code_Pro',monospace] text-[14px] mr-4">
                01
              </span>
              Your competitor with the worse product is
              everywhere. They're closing your deals because
              they showed up for 6 months while you were in
              back-to-back meetings.
            </p>
          </div>

          {/* Cards with Text - Mobile: stacked, Desktop: grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8 mb-20">
            {/* Card 1 - ChatGPT with its text */}
            <div className="flex flex-col-reverse xl:flex-col">
              <div className="bg-[#eeede6] border border-[#bebeb8] relative mb-6 xl:mb-6">
                {/* Header Tag */}
                <div className="bg-[#f4f3ec] border-b border-[#bebeb8] px-3 py-2">
                  <p className="font-['Source_Code_Pro',monospace] text-[10px] text-[#626260]">
                    FIG 1.A
                  </p>
                </div>

                {/* Card Content */}
                <div className="p-6 w-full">
                  <ChatInterface />
                </div>
              </div>
              
              <p className="font-['Sora',sans-serif] text-[14px] md:text-[16px] xl:text-[18px] text-[#676767] leading-relaxed mb-6 xl:mb-0">
                ChatGPT sounds{" "}
                <span className="bg-[#fff3be]">generic</span>{" "}
                and kills{" "}
                <span className="bg-[#fff3be]">
                  credibility
                </span>
              </p>
            </div>

            {/* Card 2 - Ghostwriter with its text */}
            <div className="flex flex-col-reverse xl:flex-col">
              <div className="bg-[#eeede6] border border-[#bebeb8] relative mb-6 xl:mb-6">
                {/* Header Tag */}
                <div className="bg-[#f4f3ec] border-b border-[#bebeb8] px-3 py-2">
                  <p className="font-['Source_Code_Pro',monospace] text-[10px] text-[#626260]">
                    FIG 1.B
                  </p>
                </div>

                {/* Card Content */}
                <div className="p-6 w-full">
                  <GhostwriterChat />
                </div>
              </div>
              
              <p className="font-['Sora',sans-serif] text-[14px] md:text-[16px] xl:text-[18px] text-[#676767] leading-relaxed mb-6 xl:mb-0">
                Ghostwriter{" "}
                <span className="bg-[#fff3be]">
                  never understand
                </span>{" "}
                your business
              </p>
            </div>

            {/* Card 3 - Agency with its text */}
            <div className="flex flex-col-reverse xl:flex-col">
              <div className="bg-[#eeede6] border border-[#bebeb8] relative mb-6 xl:mb-6">
                {/* Header Tag */}
                <div className="bg-[#f4f3ec] border-b border-[#bebeb8] px-3 py-2">
                  <p className="font-['Source_Code_Pro',monospace] text-[10px] text-[#626260]">
                    FIG 1.C
                  </p>
                </div>

                {/* Card Content */}
                <div className="p-6 w-full">
                  <AgencyChat />
                </div>
              </div>
              
              <p className="font-['Sora',sans-serif] text-[14px] md:text-[16px] xl:text-[18px] text-[#676767] leading-relaxed mb-6 xl:mb-0">
                Agency gives your{" "}
                <span className="bg-[#fff3be]">
                  generic posts
                </span>
                , you're still the bottleneck
              </p>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="max-w-2xl text-center mx-auto">
            <p
              className="text-[32px] md:text-[40px] text-neutral-900 leading-tight"
              style={{ fontFamily: "'HvDTrial Livory', serif" }}
            >
              The gap isn't your product. It's your content
              system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}