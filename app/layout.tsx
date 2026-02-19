import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "VidMax – AI Short Video Generator & Scheduler",
  description:
    "Create stunning AI-powered short videos and auto-schedule them across YouTube, Instagram, TikTok, and Email – all in one SaaS platform.",
  keywords:
    "AI video generator, short video creator, TikTok scheduler, Instagram reels, YouTube Shorts, email marketing video",
  openGraph: {
    title: "VidMax – AI Short Video Generator & Scheduler",
    description:
      "Automate your short-form video content with AI. Schedule to YouTube, Instagram, TikTok & Email.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={`${outfit.variable} antialiased font-[var(--font-outfit)]`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
