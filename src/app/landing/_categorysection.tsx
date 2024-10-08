"use client";

import React from 'react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

interface TaskCategory {
  title: string;
  jobCount: number;
}

const CategoryCard: React.FC<TaskCategory> = ({ title, jobCount }) => {
  return (
    <div className="group relative flex flex-col items-start py-5 min-[1046px]:py-9 pl-8 pr-8 min-[1046px]:pr-16 w-full h-fit text-gray-900 bg-white rounded-xl hover:bg-blue-500 ">
      <h2 className="self-start text-lg min-[1046px]:text-xl font-bold text-gray bg-blend-normal max-md:max-w-full max-md:text-lg group-hover:text-white">{title}</h2>
      <p className="mt-1.5 text-lg group-hover:text-white">{jobCount} Jobs</p>

      <button className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out bg-blue-100/10 text-black p-2 rounded-full shadow-md">
        <ArrowForwardRoundedIcon className="m-px min-[1280px]:m-2" />
      </button>
    </div>
  );
};

const categories: TaskCategory[] = [
  { title: "Cleaning Services", jobCount: 47 },
  { title: "Furniture Assembly", jobCount: 51 },
  { title: "Home Repairs", jobCount: 89 },
  { title: "Errands", jobCount: 16 },
  { title: "Moving Help", jobCount: 23 },
  { title: "Personal Assistant", jobCount: 34 },
];

const Category: React.FC = () => {
  return (
    <section className="relative px-10 py-24 md:px-20 md:py-44 h-fit">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/deb2881c40db3459284d41b14c86ce0718e973a5768975e1b446e31d1af2813c?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative max-w-[1332px] mx-auto">
        <div className="flex flex-col min-[820px]:flex-row justify-between mb-10 md:mb-20"> 
          <div className="text-white w-fit mb-0 md:mb-10">
            <h1 className="mb-6 text-3xl md:text-4xl min-[850px]:text-5xl font-bold tracking-tighter text-white leading-[78px] max-w-[770px] max-md:leading-[45px]">
              Task by category
            </h1>
            <p className="text-lg min-[850px]:text-xl leading-9 w-[300px] min-[660px]:w-[450px] max-w-[650px] text-gray-400">
              With a wide range of task categories, you can easily post jobs or find the right help - no hassle required.
            </p>
          </div>
          <div className="flex gap-5 self-end mt-10 text-md min-[850px]:text-xl font-bold tracking-tighter text-green-400 hover:text-green-300">
              <button className="basis-auto">
                Explore all categories
                <ArrowForwardRoundedIcon className="ml-4" />
              </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;