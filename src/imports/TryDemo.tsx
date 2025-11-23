export default function TryDemo() {
  return (
    <div className="relative rounded-[6px] size-full" data-name="Try demo">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[7px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Try demo</p>
        </div>
      </div>
    </div>
  );
}