import type { ReactNode } from "react";

function LogoMark({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 text-white" aria-hidden>
      {children}
    </span>
  );
}

export function ClientLogos() {
  return (
    <div>
      <h2 className="mb-4 text-center text-sm font-medium text-white/75 md:mb-5 md:text-base">
        Over 500+ businesses globally have relied on us to craft their digital products
      </h2>
      <div className="rounded-[40px] bg-[#141515] px-6 py-8 md:px-8 md:py-9">
      <div className="flex flex-nowrap items-center justify-between gap-x-4 overflow-x-auto whitespace-nowrap [scrollbar-width:none] md:gap-x-6 [&::-webkit-scrollbar]:hidden">
        <LogoMark>
          <span className="text-[15px] font-bold tracking-[0.28em]">GREIF</span>
        </LogoMark>

        <LogoMark>
          <svg viewBox="0 0 22 14" className="h-3.5 w-5" fill="currentColor">
            <circle cx="4" cy="10" r="3" />
            <circle cx="11" cy="4" r="3" />
            <circle cx="18" cy="10" r="3" />
          </svg>
          <span className="text-[15px] font-medium tracking-tight">interprefy</span>
        </LogoMark>

        <LogoMark>
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
            <path d="M10 2c2.8 2.4 4.6 4.2 5.5 6.2C16.4 10 16.6 11.6 15.8 13c-.9 1.5-2.9 2.6-5.8 2.6S5.1 14.5 4.2 13C3.4 11.6 3.6 10 4.5 8.2 5.4 6.2 7.2 4.4 10 2Z" />
          </svg>
          <span className="text-[12px] font-semibold uppercase tracking-[0.08em]">
            Players Health
          </span>
        </LogoMark>

        <LogoMark>
          <span className="text-[13px] font-bold tracking-[0.32em]">AUTOMATTIC</span>
        </LogoMark>

        <LogoMark>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="M8.2 16.6 12 7.2l3.8 9.4h-1.5l-.7-1.8H10.4l-.7 1.8H8.2Zm3-7.2-1.4 3.6h2.8L11.2 9.4Z" />
          </svg>
          <span className="text-[15px] font-medium">WordPress.com</span>
        </LogoMark>

        <LogoMark>
          <span className="flex flex-col items-center leading-tight">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
              Chalhoub Group
            </span>
            <span className="mt-0.5 text-[13px] font-medium" dir="rtl">
              مجموعة شلهوب
            </span>
          </span>
        </LogoMark>
      </div>
      </div>
    </div>
  );
}
