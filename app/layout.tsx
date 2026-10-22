import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "إسراء عثمان | استشارات العلاقات",
  description: "تعرفي على خدمات الاستشارات واحجزي موعدك بسهولة.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
