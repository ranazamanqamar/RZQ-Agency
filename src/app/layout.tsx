import type { Metadata } from "next";
import { Libre_Baskerville, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en" className={`${jakarta.variable} ${baskerville.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#0b0b0b] font-sans text-white">
        <Header />
        <main className="flex-1 pt-[72px] md:pt-[97px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
