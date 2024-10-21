"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface TipsItemsProps {
  title: string;
  description: string;
  backgroundImageSrc: string;
}

const HeroSection: React.FC<TipsItemsProps> = ({ title, description, backgroundImageSrc }) => {
  return (
    <section className="flex flex-col h-fit w-full">
      <div className="relative flex flex-col justify-center items-center w-full h-64 md:h-[240px]">
        <div className="z-10 object-cover absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-gray-700 from-1% to-white/0"></div>
        <Image
          fill
          loading="lazy"
          src={backgroundImageSrc}
          alt="background"
          className="object-cover absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-gray-700 from-1% to-white/0"
        />
        <div className="z-20 relative w-full h-full p-10 text-white">
          <h1 className="text-3xl font-bold tracking-tighter max-md:text-4xl max-md:leading-[45px]">
            {title}
          </h1>
          <p className="self-start text-lg text-gray bg-blend-normal max-md:max-w-full max-md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

const tipsItems: TipsItemsProps[] = [
  {
    title: "5 steps to take your service online",
    description: "Take your design and illustration skills to the next level.",
    backgroundImageSrc:
      "https://s3-alpha-sig.figma.com/img/5d2d/b0cd/12f22a781194622075309e7c76871f99?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W~JVE~x0gwVRfF3yO99EAVOAZHD5HcR7b-y7Qm7RA5uOeJwVbma0PkV8XzBW-FbzRaeZDD94I-Lf0dWlubPbjNPFtw44jLamaLb6NhKRNb~ZCav4GMIeHoyNPRLhHQbtfIB3ZqnhdISOFIXRsBqHmv4WQ0Kt-QTV8VCs5txS0yJZFnaUyvMSFRNPF3EjunkD0-~RUUuPg7COrwl0fbk6MeQPPgV4dNNfGeR7HxUZ4EPLbZspPvRETomWMJpW-CPRCQNjcBAoQJIj9lgi98HL5ttN3a240pyx~qUeB9q8kR0uLfnCVvraDhRRa0nuj0yYvnWRpOaE~XlCD4-CZoAnlA__",
  },
  {
    title: "Adobe Illustrator Pro tricks",
    description: "Take your design and illustration skills to the next level.",
    backgroundImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3b5527c38a4dadb97d1aef405b2163175c3b585f1ee0c7c8f10673a2b8467708?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd",
  },
  {
    title: "Adobe Illustrator Pro tricks",
    description: "Take your design and illustration skills to the next level.",
    backgroundImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3b5527c38a4dadb97d1aef405b2163175c3b585f1ee0c7c8f10673a2b8467708?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd",
  },
  {
    title: "Adobe Illustrator Pro tricks",
    description: "Take your design and illustration skills to the next level.",
    backgroundImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3b5527c38a4dadb97d1aef405b2163175c3b585f1ee0c7c8f10673a2b8467708?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd",
  },
];

const _CarouselAddTips = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % tipsItems.length);
    }, 3000);
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <main className="flex flex-col items-center w-[936px] overflow-hidden relative mt-10 rounded-lg">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full max-w-full" // Adjusting the width to match your design
      >
        <CarouselContent>
          {tipsItems.map((item, index) => (
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
        {tipsItems.map((_, index) => (
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

export default _CarouselAddTips;
