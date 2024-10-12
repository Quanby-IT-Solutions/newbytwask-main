"use client";

import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, backgroundImageSrc }) => {
  return (
    <section className="flex flex-col h-fit w-full">
      <div className="relative flex flex-col justify-center items-center w-full h-64 md:h-[310px]">
        <div className="z-10 object-cover absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-gray-700 from-1% to-white/0"></div>
        <img
          loading="lazy"
          src={backgroundImageSrc}
          alt="background"
          className="object-cover absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-gray-700 from-1% to-white/0"
        />
        <div className="z-20 relative w-full h-full p-10 text-white">
          <h1 className="text-5xl font-bold tracking-tighter max-md:text-4xl max-md:leading-[45px]">
            {title}
          </h1>
          <p className="self-start text-2xl text-gray bg-blend-normal max-md:max-w-full max-md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

const heroItems: HeroSectionProps[] = [
  {
    title: "5 steps to take your service online",
    description: "We're here to help you transition, launch & grow your new online business.",
    backgroundImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3b5527c38a4dadb97d1aef405b2163175c3b585f1ee0c7c8f10673a2b8467708?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd",
  },
  {
    title: "Furniture Assembly",
    description: "We're here to help you transition, launch & grow your new online business.",
    backgroundImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3b5527c38a4dadb97d1aef405b2163175c3b585f1ee0c7c8f10673a2b8467708?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd",
  },
  {
    title: "Home Repairs",
    description: "We're here to help you transition, launch & grow your new online business.",
    backgroundImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3b5527c38a4dadb97d1aef405b2163175c3b585f1ee0c7c8f10673a2b8467708?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd",
  },
  {
    title: "Errands",
    description: "We're here to help you transition, launch & grow your new online business.",
    backgroundImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3b5527c38a4dadb97d1aef405b2163175c3b585f1ee0c7c8f10673a2b8467708?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd",
  },
];

const _HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroItems.length);
    }, 3000);
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <main className="flex flex-col items-center overflow-hidden relative mx-5 md:mx-10 mt-10 rounded-xl">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full max-w-full" // Adjusting the width to match your design
      >
        <CarouselContent>
          {heroItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex-shrink-0 w-full">
                <HeroSection {...item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Circle Indicators */}
      <div className="absolute bottom-0 left-0 p-10 flex justify-center space-x-2">
        {heroItems.map((_, index) => (
          <div
            key={index}
            className={`w-2 md:w-3 h-2 md:h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </main>
  );
};

export default _HeroCarousel;
