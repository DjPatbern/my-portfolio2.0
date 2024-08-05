"use client";
import Image from "next/image";
import Link from "next/link";
import moonIcon from "@/public/svg/moon.svg";
import sunIcon from "@/public/svg/sun.svg";
import { useTheme } from "@/src/theme.context";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { darkMode, setDarkMode } = useTheme();
  const modeImg = darkMode ? sunIcon : moonIcon;
  const template = darkMode ? "bg-ts-purple text-ts-white" : "bg-ts-white"

  return (
    <main className="md:p-10 p-4 md:rounded-3xl md:my-8 md:mx-24 bg-white">
      <div className="flex justify-between">
        <div className="text-[#F9F871] border-2 border-dotted border-[#F9F871] inline-block px-4 py-2 rounded-xl">
          <Link href="/">PATBERN</Link>
        </div>
        <div
          className="w-10 h-10 rounded-full bg-white border flex justify-center items-center cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        >
          <Image src={modeImg} alt="mode" />
        </div>
      </div>
      {children}
    </main>
  );
};

export default Layout;
