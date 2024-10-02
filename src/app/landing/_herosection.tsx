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
    <section className="flex flex-col">
      <div className="flex relative flex-col justify-center items-center w-full min-h-[895px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img loading="lazy" src={backgroundImageSrc} alt="" className="object-cover absolute inset-0 size-full" />
        <div className="relative flex flex-col mb-0 max-w-full w-[1332px] max-md:mb-2.5">
          <h1 className="text-7xl font-bold tracking-tighter text-gray-900 leading-[78px] w-[770px] max-md:leading-10">
            {title}
          </h1>
          <p className="self-start mt-8 text-xl text-gray bg-blend-normal w-[710px] max-md:max-w-full">
            {description}
          </p>
          <div className="w-fit container flex gap-4 bg-[#93c5fd] mt-20 p-[18px] rounded-lg content-around justify-around">
            <form className="mx-auto" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="search-input" className="sr-only">Search</label>
              <div className="relative">
                
                <input
                  type="text"
                  id="search-input"
                  className="w-[300px] h-[60px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                  placeholder="Search"
                />
              </div>
            </form>
            <form className="mx-auto" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="search-input" className="sr-only">Location</label>
              <div className="relative">
                <input
                  type="text"
                  id="search-input"
                  className="w-[300px] h-[60px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                  placeholder="Location"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none"> 
                  <LocationOnIcon sx={{ color: red[600], fontSize: 40 }}/>                
                </div>
              </div>
            </form>
            <button className="bg-[#2563eb] text-white p-[12px_50px] rounded-lg hover:bg-[#558bff] transition">
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
}

export default _HeroSection;
