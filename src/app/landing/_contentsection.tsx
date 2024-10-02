"use client";
import Image from "next/image";
import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface StepItemProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

const StepItem: React.FC<StepItemProps> = ({ number, title, description, className }) => {
  return (
    <div className={`flex gap-7 ${className}`}>
      <div className="flex items-center justify-center self-start px-5 mt-2 text-xl font-bold tracking-tight leading-9 text-center text-white whitespace-nowrap bg-blue-900 rounded-full h-[52px] w-[52px] max-md:pl-5">
        {number}
      </div>
      <div className="flex flex-col grow shrink-0 text-gray-900 basis-0 w-fit">
        <h2 className="self-start text-2xl font-bold tracking-tight leading-loose">
          {title}
        </h2>
        <p className="mt-3 text-xl tracking-tight leading-9 bg-blend-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

const steps: Step[] = [
  {
    number: '1',
    title: 'Browse Tasks',
    description: 'Explore available jobs in your area by category.',
  },
  {
    number: '2',
    title: 'Submit an Offer',
    description: 'Apply for the tasks that match your skills.',
  },
  {
    number: '3',
    title: 'Complete & Earn',
    description: 'Finish the task and get paid securely.',
  },
];

const _Content: React.FC = () => {
  return (
    <section className="flex flex-col mt-44 items-center rounded-none">
      <h1 className="z-10 mt-0 text-5xl font-bold tracking-tighter leading-none text-center text-gray-900 max-md:max-w-full">
        Find task with 3 easy steps
      </h1>
      <p className="mt-5 text-2xl tracking-tight leading-10 text-center text-gray-900 bg-blend-normal w-[707px] max-md:max-w-full">
        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
      </p>
      <div className="mt-28 max-w-full w-[1127px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <Image src="/IMG.png" width={510} height={685} alt="content_img" />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              {steps.map((step, index) => (
                <StepItem
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  className={index > 0 ? "mt-24 max-md:mt-10" : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/349e292a7e3a170dbcf64c02939090e20f7fc600c443a87dd7ac567029488beb?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd"
        alt=""
        className="object-contain self-stretch mt-36 w-full aspect-[1000] max-md:mt-10 max-md:max-w-full"
      />
    </section>
  );
};


export default _Content;

