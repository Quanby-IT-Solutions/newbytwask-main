"use client";

import React from 'react';

interface TaskCategory {
  title: string;
  jobCount: number;
  isHighlighted?: boolean;
}

interface CategoryCardProps {
  title: string;
  jobCount: number;
  isHighlighted?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, jobCount }) => {
  return (
    <div className="flex flex-col grow items-start py-8 pr-20 pl-10 w-full text-gray-900 bg-white rounded-xl max-md:px-5 max-md:mt-9 hover:bg-[#c6dffe]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
            <div className={`flex flex-col grow max-md:mt-10`}>
              <h2 className="text-2xl font-bold tracking-tight leading-loose">{title}</h2>
              <p className="self-start mt-1.5 text-lg tracking-normal leading-8 bg-blend-normal">{jobCount} Jobs</p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 self-stretch m-auto bg-red rounded-full bg-blend-normal h-[51px] w-[51px] max-md:mt-10" />
          </div>
        </div>
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

const _Catgory: React.FC = () => {
  return (
    <section className="flex flex-col">
      <div className="flex relative flex-col justify-center items-center px-20 py-40 w-full min-h-[895px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/deb2881c40db3459284d41b14c86ce0718e973a5768975e1b446e31d1af2813c?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
        <div className="flex relative flex-col mb-0 w-full max-w-[1332px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex justify-between">
            <div className="mt-6 w-fit leading-10 max-md:mr-0.5 max-md:max-w-full">
              <h1 className="text-5xl font-bold w-[400px] mb-6 tracking-tighter leading-none text-white">
                Task by category
              </h1>
              <p className="text-2xl tracking-tight w-[650px] text-white bg-blend-normal max-md:max-w-full">
                With a wide range of task categories, you can easily post jobs or find the right help - no hassle required.
              </p>
            </div>
            <div className="flex gap-7 self-end mt-10 text-xl font-bold tracking-tighter text-green-400">
              <span className="basis-auto">Explore all categories</span>
            </div>
          </div>
          
          <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
            <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default _Catgory;