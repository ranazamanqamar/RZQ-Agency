import type { Metadata } from "next";
import { Libre_Baskerville, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FooterSlot } from "@/components/layout/footer-slot";
import { site } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: `Digital Product Design And Development Company - ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Your design & dev partner that unites brand, website, ui/ux design into a holistic product",
  metadataBase: new URL("http://localhost:4317"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${baskerville.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#0b0b0b] font-sans font-normal text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <FooterSlot>
          <Footer />
        </FooterSlot>
      </body>
    </html>
  );
}
