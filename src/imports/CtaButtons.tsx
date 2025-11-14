function TryDemo() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] h-[33px] items-center justify-center left-0 px-[14px] py-[7px] rounded-[6px] top-0 w-[97px]" data-name="Try demo">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Try demo</p>
    </div>
  );
}

function GetStarted() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] h-[33px] items-center justify-center left-[104px] px-[17px] py-[7px] rounded-[6px] top-0 w-[116px]" data-name="Get started">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">Get started</p>
    </div>
  );
}

export default function CtaButtons() {
  return (
    <div className="relative size-full" data-name="CTA Buttons">
      <TryDemo />
      <GetStarted />
    </div>
  );
}