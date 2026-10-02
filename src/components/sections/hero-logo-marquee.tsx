import type { ReactNode } from "react";

function LogoMark({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 text-white/80" aria-hidden>
      {children}
    </span>
  );
}

const logoMarks = {
  automattic: (
    <LogoMark>
      <span className="text-[15px] font-bold tracking-[0.32em]">AUTOMATTIC</span>
    </LogoMark>
  ),
  wordpress: (
    <LogoMark>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.2 16.6 12 7.2l3.8 9.4h-1.5l-.7-1.8H10.4l-.7 1.8H8.2Zm3-7.2-1.4 3.6h2.8L11.2 9.4Z" />
      </svg>
      <span className="text-[15px] font-medium">WordPress.com</span>
    </LogoMark>
  ),
  chalhoub: (
    <LogoMark>
      <span className="flex flex-col items-center leading-tight">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">Chalhoub Group</span>
        <span className="mt-0.5 text-[13px] font-medium" dir="rtl">
          مجموعة شلهوب
        </span>
      </span>
    </LogoMark>
  ),
  greif: (
    <LogoMark>
      <span className="text-[15px] font-bold tracking-[0.28em]">GREIF</span>
    </LogoMark>
  ),
  interprefy: (
    <LogoMark>
      <svg viewBox="0 0 22 14" className="h-3.5 w-5" fill="currentColor">
        <circle cx="4" cy="10" r="3" />
        <circle cx="11" cy="4" r="3" />
        <circle cx="18" cy="10" r="3" />
      </svg>
      <span className="text-[15px] font-medium tracking-tight">interprefy</span>
    </LogoMark>
  ),
  players: (
    <LogoMark>
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
        <path d="M10 2c2.8 2.4 4.6 4.2 5.5 6.2C16.4 10 16.6 11.6 15.8 13c-.9 1.5-2.9 2.6-5.8 2.6S5.1 14.5 4.2 13C3.4 11.6 3.6 10 4.5 8.2 5.4 6.2 7.2 4.4 10 2Z" />
      </svg>
      <span className="text-[12px] font-semibold uppercase tracking-[0.08em]">Players Health</span>
    </LogoMark>
  ),
  myso: (
    <LogoMark>
      <span className="text-[13px] font-semibold tracking-[0.22em]">MYSO FINANCE</span>
    </LogoMark>
  ),
  enzyme: (
    <LogoMark>
      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
        <path d="M2 8h4l2-5 2 10 2-5h2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[16px] font-medium tracking-tight">enzyme</span>
    </LogoMark>
  ),
  mojo: (
    <LogoMark>
      <span className="text-[18px] font-semibold leading-none">M</span>
      <span className="text-[15px] font-medium">mojo cx</span>
    </LogoMark>
  ),
  voxe: (
    <LogoMark>
      <span className="text-[16px] font-bold tracking-[0.28em]">VOXE</span>
    </LogoMark>
  ),
};

const marks = (
  <>
    {logoMarks.automattic}
    {logoMarks.wordpress}
    {logoMarks.chalhoub}
    {logoMarks.greif}
    {logoMarks.interprefy}
    {logoMarks.players}
  </>
);

export const partnerLogoMarks = [
  logoMarks.greif,
  logoMarks.interprefy,
  logoMarks.players,
  logoMarks.automattic,
  logoMarks.wordpress,
  logoMarks.chalhoub,
];

export const partnerGridMarks = [
  { id: "automattic", node: logoMarks.automattic },
  { id: "players", node: logoMarks.players },
  { id: "greif", node: logoMarks.greif },
  { id: "wordpress", node: logoMarks.wordpress },
  { id: "interprefy", node: logoMarks.interprefy },
  { id: "chalhoub", node: logoMarks.chalhoub },
  { id: "myso", node: logoMarks.myso },
  { id: "enzyme", node: logoMarks.enzyme },
  { id: "mojo", node: logoMarks.mojo },
  { id: "voxe", node: logoMarks.voxe },
];

export function HeroLogoMarquee() {
  return (
    <div className="overflow-hidden py-8 md:py-10">
      <div className="marquee flex w-max items-center gap-12 pr-12 md:gap-16">
        <div className="flex items-center gap-12 md:gap-16">{marks}</div>
        <div className="flex items-center gap-12 md:gap-16" aria-hidden>
          {marks}
        </div>
      </div>
    </div>
  );
}
