import React, { useState } from "react";
import hamburgerIconDark from "@/public/svg/icon_hamburgerDark.svg";
import closeLight from "@/public/svg/cancelPurple.svg";
import closeDark from "@/public/svg/cancelWhite.svg";
import hamburgerIconLight from "@/public/svg/hamburgerIcon.svg";
import Image from "next/image";
import { Drawer } from "@/app/common/Drawer";
import Link from "next/link";
import { links } from "@/src/data";
import { useTheme } from "@/src/theme.context";

const PhoneHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useTheme();
  const hamburgerIcon = darkMode ? hamburgerIconDark : hamburgerIconLight;
  const cancelIcon = darkMode ? closeDark : closeLight
  return (
    <>
      <div>
        <div className="flex gap-5 w-full mr-4">
          <Image
            priority
            src={hamburgerIcon}
            className="cursor-pointer"
            alt="icon"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <Drawer isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
          <div className="p-5 w-full">
            <div className="flex justify-end cursor-pointer">
              <Image
                src={cancelIcon}
                onClick={() => setIsOpen(!isOpen)}
                className="max-w-5 max-h-5"
                alt="cancel"
                priority
              />
            </div>
            <div className="w-full my-5">
              {links.map((link, index) => (
                <div className="w-full my-1 border-b" key={index}>
                  <div className="w-full cursor-pointer py-2 px-4 rounded font-medium text-lg">
                    <Link
                      href={link.href}
                      className="w-full"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <p className="w-full">{link.name}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default PhoneHamburger;
