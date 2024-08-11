"use client";
import { stacks } from "@/src/data";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import ImageSlider from "./fragments/ImageSlider";
import Link from "next/link";
import { garamond } from "@/src/font";
import { useTheme } from "@/src/theme.context";

const Home = () => {
  const { darkMode } = useTheme();
  // const textColor = darkMode ? "text-ts-faded-light" : "text-ts-faded-dark";
  const Portfoliobtn = darkMode
    ? "text-ts-faded-dark bg-ts-faded-light hover:text-ts-dark hover:bg-ts-light"
    : "hover:text-ts-light hover:bg-ts-dark text-ts-faded-light bg-ts-faded-dark";

  const Resumebtn = darkMode
    ? "text-ts-faded-light border-ts-faded-light hover:text-ts-light hover:border-ts-light"
    : "hover:text-ts-dark hover:border-ts-dark text-ts-faded-dark border-ts-faded-dark";

  return (
    <div className="2xl:max-w-7xl mx-auto w-full">
      <div className="md:flex w-full mt-10 gap-10 md:justify-between 4xl:py-24 flex-row-reverse">
        <div className="flex-1 md:mb-0 mb-12 flex justify-center items-center flex-col rounded-md">
          <ImageSlider />
        </div>
        <div className="flex-1 text-left gap-4 flex flex-col">
          <h1
            className={`${garamond.className}  md:min-h-32 lg:text-[3.5rem] text-[1.75rem] font-semibold leading-10 lg:leading-[3.625rem] lg:tracking-[-0.07rem]`}
          >
            <TypeAnimation
              sequence={stacks}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p>Choose here to download my resume or see my portfolio</p>
          <div className="flex gap-10 mt-4 items-center justify-start">
            <Link
              href="/portfolio"
              className={`${Portfoliobtn} text-center  zoom-animation  font-bold py-2 px-4 rounded-2xl`}
            >
              Explore My Portfolio
            </Link>
            <Link
              href="https://od.lk/d/M18zMDc1MDcwMDlf/PatRes02.pdf"
              className={`${Resumebtn} text-center  zoom-animation border font-bold py-2 px-4 rounded-2xl`}
            >
              Download My Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
