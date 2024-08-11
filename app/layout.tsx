import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/theme.context";
import { NextTopLoader } from "./common/NextTopLoader";
import { cn } from "@/lib/utils";
import { geologica } from "@/src/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Patrick",
  description: "This is a personal portfolio website of Victor Patrick, A frontend developer",
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
