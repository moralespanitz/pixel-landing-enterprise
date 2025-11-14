import svgPaths from "../imports/svg-rkfhe35aq8";

function StashCheck() {
  return (
    <div className="size-[24px] shrink-0" data-name="stash:check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="stash:check">
          <path d={svgPaths.p123a400} fill="var(--fill-0, #C3C3C3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

interface FeatureItemProps {
  text: string;
}

function FeatureItem({ text }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3">
      <StashCheck />
      <p className="font-['Sora',sans-serif] text-[12px] text-[#c3c3c3] leading-relaxed">
        {text}
      </p>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
}

function PricingCard({ title, description, features }: PricingCardProps) {
  return (
    <div className="relative border border-[#676b74] p-6 md:p-8 lg:p-10">
      {/* Decorative corner lines - top */}
      <div className="absolute left-0 top-0 h-[42px] w-[1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 42">
          <path d="M0.5 0V42" stroke="url(#paint0_linear_top)" strokeDasharray="2 2" />
          <defs>
            <linearGradient id="paint0_linear_top" x1="1" x2="1" y1="0" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C2C9DA" stopOpacity="0" />
              <stop offset="1" stopColor="#676B74" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Title and Description */}
      <div className="mb-8">
        <h3 className="font-['Sora',sans-serif] text-[24px] md:text-[32px] text-white mb-4">
          {title}
        </h3>
        <p className="font-['Sora',sans-serif] text-[14px] md:text-[16px] text-[#9e9fa3] leading-relaxed max-w-[280px]">
          {description}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-12">
        <button className="bg-white px-[17px] py-[7px] rounded-[6px] hover:bg-gray-100 transition-colors">
          <span className="font-['Inter',sans-serif] font-medium text-[15px] text-black">
            Get started
          </span>
        </button>
        <a 
          href="#" 
          className="font-['Sora',sans-serif] text-[16px] text-[gainsboro] underline hover:text-white transition-colors"
        >
          Try demo
        </a>
      </div>

      {/* Features Section */}
      <div>
        <p className="font-['Sora',sans-serif] text-[16px] text-[gainsboro] mb-6 tracking-wide">
          KEY FEATURES INCLUDE:
        </p>
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </div>
      </div>

      {/* Decorative corner lines - bottom */}
      <div className="absolute left-0 bottom-0 h-[239px] w-[1px] scale-y-[-100%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 239">
          <path d="M0.5 0V239" stroke="url(#paint0_linear_bottom)" strokeDasharray="2 2" />
          <defs>
            <linearGradient id="paint0_linear_bottom" x1="1" x2="1" y1="0" y2="239" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C2C9DA" stopOpacity="0" />
              <stop offset="1" stopColor="#676B74" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const foundationFeatures = [
    "25 pieces per month",
    "LinkedIn, X (Twitter), Instagram and Tiktok",
    "Weekly batches",
    "Attribution dashboard"
  ];

  const growthFeatures = [
    "40 pieces per month",
    "All relevant platforms",
    "Long-form content (Blogs, Podcasts, Videos)",
    "Dedicated strategist"
  ];

  return (
    <section id="pricing" className="relative scroll-mt-12 lg:scroll-mt-20">
      <div className="w-full">
        {/* Main Content - Dark background */}
        <div className="bg-[#101118] max-w-7xl mx-auto px-6 md:px-12 lg:pl-16 lg:pr-24 py-16 md:py-24">
          {/* Main Headline */}
          <div className="mb-16">
            <h2
              className="font-['HvDTrial_Livory',sans-serif] text-[32px] md:text-[48px] leading-tight text-white mb-6"
            >
              Get specialized AI research agents
              <br />
              for Content Pipelines
            </h2>
            <p 
              className="font-['HvDTrial_Livory','Noto_Sans',sans-serif] text-[16px] md:text-[20px] text-[#b2b2b2] max-w-4xl leading-relaxed"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}
            >
              We offer 90 days money back guarantee. If you don't see results by day 90, we refund months 2 and 3.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Foundation Plan */}
            <PricingCard
              title="Foundation"
              description="Perfect for seed-stage founders starting from zero"
              features={foundationFeatures}
            />

            {/* Growth Plan */}
            <PricingCard
              title="Growth"
              description="For Series A founders ready to dominate their category"
              features={growthFeatures}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
