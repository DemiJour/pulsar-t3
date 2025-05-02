/* eslint-disable @next/next/no-img-element */

export default function HeaderPage() {
    return (
      <div className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="h-20 bg-custom_black_1 w-full py-6 px-8 flex gap-10">
          <img src="/logos/Logotype.svg" alt="" className="pl-[42px]" />
          <div className="flex py-1 gap-8">
            <div className="text-white font-medium">Home</div>
            <div className="text-white font-medium flex gap-2">Products <img src="/icons/chevron-down.svg" className="w-5 h-5" alt="" /></div>
            <div className="text-white font-medium flex gap-2">Resources <img src="/icons/chevron-down.svg" className="w-5 h-5" alt="" /></div>
            <div className="text-white font-medium">Pricing</div>
          </div>
        </div>
      </div>
    );
  }
  