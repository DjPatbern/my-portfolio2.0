"use client";
import Image from "next/image";
import Link from "next/link";
import moonIcon from "@/public/svg/moon.svg";
import sunIcon from "@/public/svg/sun.svg";
import { useTheme } from "@/src/theme.context";
import styles from "../common/styles.module.css";
import { cn } from "@/lib/utils";
import LinkItems from "./LayoutFragments/LinkItems";
import PhoneHamburger from "./LayoutFragments/PhoneHamburger";

const Layout = ({
  children,
  ignoreLinks,
}: {
  children: React.ReactNode;
  ignoreLinks?: boolean;
}) => {
  const { darkMode, setDarkMode } = useTheme();
  const modeImg = darkMode ? sunIcon : moonIcon;
  const template = darkMode
    ? `${cn(styles["bg-gradient-to-custom-dark"])} text-ts-white `
    : `${cn(styles["bg-gradient-to-custom-light"])} text-ts-faded-dark `;
  const logoTemplate = darkMode
    ? "border-ts-faded-light text-ts-faded-light"
    : "text-ts-faded-dark border-ts-faded-dark";
  const bgImgClass = darkMode ? "darkMode" : "lightMode";

  return (
    <main className={`${bgImgClass} md:py-8 min-h-[100vh]`}>
      <div
        className={`${template} md:p-10 p-4 md:rounded-3xl  md:mx-24 md:min-h-[85vh] min-h-[100vh] scroll-bar`}
      >
        <div className="flex justify-between">
          <div
            className={`${logoTemplate} border-2  inline-block px-4 py-2 rounded-xl`}
          >
            <Link href="/">VICTOR PATRICK</Link>
          </div>
          {!ignoreLinks && (
            <div className="hidden lg:block">
              <LinkItems />
            </div>
          )}
          <div className="flex gap-1 justify-center items-center">
            <div className="lg:hidden block">
              <PhoneHamburger />
            </div>
            <div
              className="w-10 h-10  flex justify-center items-center cursor-pointer"
              onClick={() => setDarkMode(!darkMode)}
            >
              <Image src={modeImg} alt="mode" />
            </div>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default Layout;
