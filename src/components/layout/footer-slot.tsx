"use client";

import { usePathname } from "next/navigation";

export function FooterSlot({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return children;
}
