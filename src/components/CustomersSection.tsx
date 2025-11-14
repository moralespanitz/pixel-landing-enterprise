import { useRef, useState } from "react";
import customerPoster from "../assets/customer.png";

const imgVector46 = "https://www.figma.com/api/mcp/asset/0e76608a-f227-4c0f-bbd0-b30aa51ed528";
const imgAlteraLogo = "https://www.figma.com/api/mcp/asset/d7a0b397-d8c3-4242-b56f-fde09166c937";

function CustomerCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // CDN URLs
  const videoUrl = "https://cdn-agents.trypixel.dev/content/Sarah+Fernandez+-+Founder+of+Altera.mov";
  const posterUrl = customerPoster; // Video thumbnail from local assets
  const alteraLogoUrl = imgAlteraLogo; // Altera logo from Figma


  return (
    <div
      className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-gray-900"
      data-name="Customer"
    >
      {/* Video element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster={posterUrl}
        preload="metadata"
        controls
        onPlay={() => {
          setIsPlaying(true);
          setHasStarted(true);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none z-[1]" />

      {/* Bottom gradient overlay for text visibility */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/3 pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)'
        }}
      />

      {/* Bottom content - only show before video starts */}
      {!hasStarted && (
        <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
          {/* Company logo */}
          <div className="absolute h-[24px] left-[27px] bottom-[62px] w-[76px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt="Altera logo"
                className="absolute h-[531.25%] left-[-31.4%] max-w-none top-[-214.06%] w-[164.25%]"
                src={imgAlteraLogo}
              />
            </div>
          </div>

          {/* Result text */}
          <p
            className="absolute font-['HvDTrial_Livory',sans-serif] leading-normal left-[27px] bottom-[32px] not-italic text-[#acacac] text-[28px]"
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
