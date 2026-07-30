import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { geologica } from "@/src/font";

export const metadata: Metadata = {
  metadataBase: new URL("https://victorpatrick.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Victor Patrick — Frontend Engineer",
  description:
    "Frontend engineer building clear, scalable digital products with React, Next.js and TypeScript.",
  openGraph: {
    description:
      "Frontend engineer building clear, scalable digital products with React, Next.js and TypeScript.",
    siteName: "Victor Patrick",
    url: "https://victorpatrick.vercel.app/",
    title: "Victor Patrick",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cn(geologica.className, "font-sans")}`}>
        {children}
      </body>
    </html>
  );
}
