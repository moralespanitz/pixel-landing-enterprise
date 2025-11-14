import svgPaths from "./svg-3p9lnd0gic";

function GetStarted() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] h-[38px] items-center justify-center left-[1563px] px-[17px] py-[7px] rounded-[6px] top-[17px] w-[135px]" data-name="Get started">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">Get started</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[20px] size-[45px] top-[14px]" data-name="Frame">
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
  return (
    <div className="bg-[#101118] relative size-full" data-name="Header">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1431px] not-italic text-[15px] text-nowrap text-white top-[27px] whitespace-pre">View demo</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1317px] not-italic text-[15px] text-nowrap text-white top-[27px] whitespace-pre">Use cases</p>
      <p className="absolute bottom-[27px] font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[192px] not-italic text-[15px] text-nowrap text-white top-[27px] whitespace-pre">Pricing</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[114px] not-italic text-[15px] text-nowrap text-white top-[27px] whitespace-pre">Home</p>
      <GetStarted />
      <div className="absolute h-[27px] left-[87px] top-[23px] w-0">
        <div className="absolute inset-[-1.85%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 28">
            <path d="M0.5 0.5V27.5" id="Vector 7" stroke="var(--stroke-0, #D5D5D5)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Frame />
    </div>
  );
}