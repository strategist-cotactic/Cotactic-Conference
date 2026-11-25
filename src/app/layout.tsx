import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { event } from "@/data/event";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "@fontsource/montserrat/latin-400.css";
import "@fontsource/montserrat/latin-500.css";
import "@fontsource/montserrat/latin-700.css";
import "@fontsource/montserrat/latin-700-italic.css";
import "@fontsource/ibm-plex-sans-thai/thai-400.css";
import "@fontsource/ibm-plex-sans-thai/thai-500.css";
import "./globals.css";
import "./motion.css";

export const metadata: Metadata = {
  title: `${event.name} | ${event.anniversary}`,
  description: `ขอเชิญร่วมงาน ${event.name} ฉลองครบรอบ 10 ปี พร้อมเปิดมุมมองการตลาดและ AI ค้นหาโอกาสใหม่ให้แบรนด์ วันที่ 30 พฤศจิกายน 2026 ณ ${event.venue} ${event.transit}`,
  robots: { index: false, follow: false },
  other: { "page-type": "place", "site-kind": "other", "page-kind": "place" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F6F3EE" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" data-type="place" data-motion="on" data-radius="soft" data-buttons="solid">
      <body>
        {children}
        <Script src="/assets/motion/motion.js" type="module" strategy="afterInteractive" />
      </body>
    </html>
  );
}
