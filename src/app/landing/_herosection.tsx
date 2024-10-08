"use client";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { red } from '@mui/material/colors';

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, backgroundImageSrc }) => {
  return (
    <section className="flex flex-col ">
      <div className="flex relative flex-col justify-center items-center w-full min-h-[895px] max-md:min-h-[500px] max-w-full">
        <img loading="lazy" src={backgroundImageSrc} alt="background" className="object-cover absolute inset-0 w-full h-full" />
        
        <div className="relative px-10 py-24 md:px-20 md:py-44 h-fit flex flex-col w-full max-w-[1332px] max-md:mb-2.5">
          <h1 className="text-7xl font-bold tracking-tighter text-gray-900 leading-[78px] max-w-[770px] max-md:text-4xl max-md:leading-[45px]">
            {title}
          </h1>
          <p className="self-start mt-8 text-xl text-gray bg-blend-normal max-w-[710px] max-md:max-w-full max-md:text-lg">
            {description}
          </p>
          <div className="w-fit container flex max-[820px]:self-center gap-4 bg-[#93c5fd] mt-20 p-6 max-md:flex-col max-md:gap-4 rounded-lg justify-around">
            <form className="flex gap-4 max-[600px]:flex-col max-md:gap-4 rounded-lg justify-around" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="search-input" className="sr-only">Search</label>
              <div className="relative">
                <input
                  type="text"
                  id="search-input"
                  className="w-full h-[60px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none max-md:w-full"
                  placeholder="Search"
                />
              </div>
              <label htmlFor="location-input" className="sr-only">Location</label>
              <div className="relative">
                <input
                  type="text"
                  id="location-input"
                  className="w-full h-[60px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none max-md:w-full"
                  placeholder="Location"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <LocationOnIcon sx={{ color: red[600], fontSize: 40 }} />
                </div>
              </div>
            </form>

            <button className="bg-[#2563eb] text-white p-[12px_50px] rounded-lg hover:bg-[#558bff] transition max-md:w-full">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const _HeroSection = () => {
  return (
    <main className="flex flex-col">
      <HeroSection
        title="Discover tasks near you and start earning now!"
        description="Instantly connect with skilled Taskers for cleaning, furniture assembly, home repairs, running errands, and more."
        backgroundImageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3b5527c38a4dadb97d1aef405b2163175c3b585f1ee0c7c8f10673a2b8467708?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd"
      />
    </main>
  );
};

export default _HeroSection;
