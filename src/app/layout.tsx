import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Richmond Dental Care | Richmond, TX",
  description:
    "Comfortable, modern dental care for Richmond, TX families. All major PPO insurance plans accepted. Schedule your appointment today.",
  keywords: "dentist Richmond TX, dental care Richmond, PPO dental insurance, Invisalign Richmond TX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
