"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import slide1 from "@/public/images/slide1.jpg";
import slide2 from "@/public/images/slide2.jpg";
import slide3 from "@/public/images/slide3.jpg";
import slide4 from "@/public/images/slide4.jpg";
import slide5 from "@/public/images/slide5.jpg";
import slide6 from "@/public/images/slide6.jpg";
import Link from "next/link";

const slides = [
  {
    url:"https://staging.gettrendstack.com/",
    img: slide1
  }, 
  {
    url:"https://theparkdb.vercel.app/",
    img: slide2
  },
  {
    url:"https://clone-a92f6.web.app/",
    img: slide3
  },
  {
    url:"https://blog-app-6ea90.web.app/?",
    img: slide4
  },
  {
    url:"http://cay-point-app-adea.vercel.app/",
    img: slide5
  },
  {
    url:"https://crowdfundco.vercel.app/",
    img: slide6
  },
];

const ImageSlider = () => {
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <Link href={slide.url} target="_blank" className="embla__slide" key={index}>
              <Image
                src={slide.img}
                className="rounded-md cursor-pointer h-64"
                priority
                alt="slide"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
