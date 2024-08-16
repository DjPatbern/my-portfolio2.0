import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/src/theme.context";
import { NextTopLoader } from "./common/NextTopLoader";
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
  title: {
    default: "Victor Patrick",
    template: "%s - Victor Patrick",
  },
  description:
    "This is a personal portfolio website of Victor Patrick, A frontend developer and frontend engineer",
  openGraph: {
    description:
      "This is a personal portfolio website of Victor Patrick, A frontend developer and frontend engineer",
    siteName: "Victor Patrick",
    url: "https://theparkdb.vercel.app/",
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
        <ThemeProvider>
          <NextTopLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
