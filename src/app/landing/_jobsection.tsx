"use client";

import React from 'react';
import Image from 'next/image';

interface JobsInput {
  jobsCategory: string;
  startingPrice: number;
  imgPath: string;
}

interface JobsCardProps {
  jobsCategory: string;
  startingPrice: number;
  imgPath: string;
}

const JobsCard: React.FC<JobsCardProps> = ({ jobsCategory, startingPrice, imgPath }) => {
  return (
    <div className="flex flex-col grow items-start w-fit h-fit text-gray-900 bg-white rounded-3xl max-md:px-5 max-md:mt-9 hover:bg-[#93c5fd]">
      <div className="grid content-start max-md:grid-col rounded-t-3xl">
        <Image src={imgPath} width={320} height={180} className='rounded-t-3xl' alt="content_img" />
        <div className="flex flex-col p-5 max-md:ml-0 max-md:w-full text-center">
          <h3 className="text-2xl font-bold tracking-tight leading-loose">{jobsCategory}</h3>
          <p className="mt-1.5 text-lg tracking-normal leading-8 bg-blend-normal">Project starts at ${startingPrice}</p>
        </div>
      </div>
    </div>
  );
};

const jobs: JobsInput[] = [
  { jobsCategory: "Web Development", startingPrice: 49, imgPath: "/Image.png" },
  { jobsCategory: "Logo Design", startingPrice: 65, imgPath: "/Image-1.png" },
  { jobsCategory: "Architecture & Interiour Design", startingPrice: 69, imgPath: "/Image-2.png" },
  { jobsCategory: "Social Media Marketing", startingPrice: 67, imgPath: "/Image-3.png" },
];

const _Jobs: React.FC = () => {
  return (
    <section className="flex flex-col  bg-[#C6DFFE]">
      <div className="flex relative flex-col justify-center items-center px-20 py-40 w-full min-h-[895px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex relative flex-col mb-0 w-full max-w-[1332px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex justify-between">
            <div className="mt-6 w-fit leading-10 max-md:mr-0.5 max-md:max-w-full">
              <h1 className="text-5xl font-bold w-[400px] mb-6 tracking-tighter leading-none text-blue-900">
                Featured jobs
              </h1>
              <p className="text-2xl tracking-tight w-[650px] text-blue-900 bg-blend-normal max-md:max-w-full">
              Top opportunities handpicked for you. Browse and apply today!
              </p>
            </div>
            <div className="flex gap-7 self-end mt-10 text-xl font-bold tracking-tighter text-green-400">
              <span className="basis-auto">Explore all jobs</span>
            </div>
          </div>
          
          <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
            <div className="grid grid-cols-4 gap-10 max-md:grid-cols-1">
              {jobs.map((category, index) => (
                <JobsCard key={index} {...category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default _Jobs;