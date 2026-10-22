import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-cairo",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6b1d7a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://israaosman.com"),
  title: {
    default: "د. إسراء عثمان | أول استشارية علاقات في مصر والوطن العربي",
    template: "%s | د. إسراء عثمان",
  },
  description:
    "المنصة الرقمية الرسمية لـ د. إسراء عثمان (Dr. Israa Osman) — أول استشارية علاقات في مصر والوطن العربي. استشارات فردية وثنائية، برامج تدريبية، أدلة رقمية، وعضويات بمنهجية تجمع بين السيكولوجي، السلوك الإنساني، علوم الطاقة، ولغة الجسد.",
  keywords: [
    "د. إسراء عثمان",
    "إسراء عثمان",
    "Israa Osman",
    "Dr Israa Osman",
    "استشارية علاقات",
    "أول استشارية علاقات في مصر والوطن العربي",
    "استشارات زوجية",
    "السيكولوجي والسلوك الإنساني",
    "علوم الطاقة ولغة الجسد",
    "تخطي علاقة صعبة",
    "استعادة الشغف",
  ],
  authors: [{ name: "د. إسراء عثمان - Dr. Israa Osman", url: "https://israaosman.com" }],
  creator: "Dr. Israa Osman",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://israaosman.com",
    siteName: "منصة د. إسراء عثمان الرقمية",
    title: "د. إسراء عثمان | أول استشارية علاقات في مصر والوطن العربي",
    description:
      "هنوفر عليك ونحط إيدك ع المشكلة وعلى حلها — احجز جلستك الاستشارية أو تصفح البرامج والكتب الرقمية مع د. إسراء عثمان.",
    images: [
      {
        url: "/images/esraa-profile.png",
        width: 800,
        height: 800,
        alt: "د. إسراء عثمان - أول استشارية علاقات في مصر والوطن العربي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "د. إسراء عثمان | أول استشارية علاقات في مصر والوطن العربي",
    description:
      "منصة متكاملة للاستشارات، البرامج، المتجر الرقمي، والعضويات بمنهجية السيكولوجي والسلوك الإنساني وعلوم الطاقة ولغة الجسد.",
    images: ["/images/esraa-profile.png"],
  },
  icons: {
    icon: "/images/esraa-logo.jpg",
    apple: "/images/esraa-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body
        className={`${cairo.className} min-h-screen bg-[#fdf4f8] text-[#1f1224] antialiased selection:bg-[#db1a69] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
