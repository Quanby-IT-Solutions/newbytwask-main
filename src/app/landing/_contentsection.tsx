"use client";
import Image from "next/image";
import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const StepItem: React.FC<Step> = ({ number, title, description }) => {
  return (
    <div className="flex w-fit items-start gap-4 md:gap-6">
      <div className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-blue-700 rounded-full shrink-0">
        {number}
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-base md:text-lg text-gray-600">{description}</p>
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

const Content: React.FC = () => {
  return (
    <section className="container mx-auto px-10 py-24 md:px-20 md:py-44">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl min-[850px]:text-5xl font-bold mb-4">
          Find task with 3 easy steps
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
        <div className="w-fit md:w-1/2">
          <Image 
            src="/IMG.png" 
            width={510} 
            height={685} 
            alt="</task.png>" 
            className="rounded-lg w-full h-auto"
          />
        </div>
        
        <div className="self-center w-full md:w-1/2 space-y-10 md:space-y-16">
          {steps.map((step, index) => (
            <StepItem key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;