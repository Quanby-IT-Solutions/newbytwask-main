"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface JobsInput {
  jobsCategory: string;
  startingPrice: number;
  imgPath: string;
}

const JobsCard: React.FC<JobsInput> = ({ jobsCategory, startingPrice, imgPath }) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image src={imgPath} width={320} height={217} className='w-full h-55 object-cover' alt={`${jobsCategory} image`} />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">{jobsCategory}</h3>
        <p className="text-gray-600">Projects starting at ${startingPrice}</p>
      </div>
    </div>
  );
};

const jobs: JobsInput[] = [
  { jobsCategory: "Website Development", startingPrice: 49, imgPath: "/Image.png" },
  { jobsCategory: "Logo Design", startingPrice: 65, imgPath: "/Image-1.png" },
  { jobsCategory: "Architecture & Interior design", startingPrice: 69, imgPath: "/Image-2.png" },
  { jobsCategory: "Social Media Marketing", startingPrice: 67, imgPath: "/Image-3.png" },
];

const _Jobs: React.FC = () => {
  const router = useRouter()


  return (
    <section className="bg-[#C6DFFE] flex relative flex-col justify-center items-center w-full min-h-[895px]">
      <div className="container mx-auto flex relative flex-col mb-0 w-full max-md:mb-2.5 px-10 py-24 md:px-20 md:py-44">
        <div className="flex flex-col lg:flex-row justify-between mb-10 md:mb-20">
          <div className='w-fit mb-0 md:mb-10 max-[470px]:self-start max-[470px]:mb-4'>
            <h1 className="mb-6 text-4xl md:text-4xl min-[850px]:text-5xl font-bold tracking-tighter text-blue-900 leading-[78px] max-w-[770px] max-md:leading-[45px]">
              Featured jobs
            </h1>
            <p className="text-lg min-[850px]:text-xl leading-9 w-[300px] min-[660px]:w-[450px] max-w-[650px] text-blue-900/50">
              Top opportunities handpicked for you. Browse and apply today!
            </p>
          </div>
          <div className="flex max-lg:self-end max-[583px]:mt-5 text-md min-[850px]:text-xl font-bold tracking-tighter text-gray-600 hover:text-gray-500">
            <button onClick={() => router.push('/homepage')} className="basis-auto">
              Browse all available task
              <ArrowForwardIosRoundedIcon sx={{ color: 'primary', fontSize: 20 }}/>
            </button>
          </div>
        </div>
        
        <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobs.map((category, index) => (
            <JobsCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default _Jobs;