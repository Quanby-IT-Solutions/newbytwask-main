"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, backgroundImageSrc }) => {
  return (
    <section className="flex flex-col h-fit w-full">
      <div className="relative flex flex-col justify-center items-center w-full h-[310px]">
        <img loading="lazy" src={backgroundImageSrc} alt="background" className="object-cover absolute inset-0 w-full h-full" />
        <div className="absolute w-full h-full p-10 bg-gradient-to-r from-gray-700 from-1% to-white/0 text-white "></div>
        <div className="relative flex flex-col w-full h-full p-10 text-white">
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
  { title: "5 steps to take your service online", description: "We're here to help you transition, launch & grow your new online business.", backgroundImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b5527c38a4dadb97d1aef405b2163175c3b585f1ee0c7c8f10673a2b8467708?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd" },
  { title: "Furniture Assembly", description: "We're here to help you transition, launch & grow your new online business.", backgroundImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b5527c38a4dadb97d1aef405b2163175c3b585f1ee0c7c8f10673a2b8467708?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd" },
  { title: "Home Repairs", description: "We're here to help you transition, launch & grow your new online business.", backgroundImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b5527c38a4dadb97d1aef405b2163175c3b585f1ee0c7c8f10673a2b8467708?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd" },
  { title: "Errands", description: "We're here to help you transition, launch & grow your new online business.", backgroundImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b5527c38a4dadb97d1aef405b2163175c3b585f1ee0c7c8f10673a2b8467708?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd" },
];

const _HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const duration = 3000;

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroItems.length);
  };

  useEffect(() => {
    const timer = setInterval(nextItem, duration);
    return () => clearInterval(timer); 
  }, []);

  return (
    <main className="flex flex-col items-center overflow-hidden h-[310px] relative mx-10 mt-10 rounded-xl">
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * 100}%` }} 
        transition={{ duration: 0.5 }} 
      >
        {heroItems.map((item, index) => (
          <div className="flex-shrink-0 w-full" key={index}>
            <HeroSection {...item} />
          </div>
        ))}
        <div className="flex-shrink-0 w-full">
          <HeroSection {...heroItems[0]} />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 p-10 flex space-x-2">
        {heroItems.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </main>
  );
};

export default _HeroCarousel;
