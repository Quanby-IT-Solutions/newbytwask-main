"use client";

import React from 'react';
import Image from 'next/image';

interface NewsInput {
  newsCat: string;
  description: string;
  imgPath: string;
}

interface NewsCardProps {
  newsCat: string;
  description: string;
  imgPath: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ newsCat, description, imgPath }) => {
  return (
    <div className="flex flex-col grow items-start w-fit text-gray-900 bg-white rounded-xl max-md:px-5 max-md:mt-9 hover:bg-[#c6dffe]">
      <div className="grid content-start max-md:grid-col">
        <Image src={imgPath} width={420} height={360} alt="content_img" />
        <div className="flex flex-col p-8 max-md:ml-0 max-md:w-full">
          <h2 className="self-start mt-1.5 text-lg tracking-normal leading-8 bg-blend-normal">{newsCat}</h2>
          <p className="text-2xl font-bold tracking-tight leading-loose">{description}</p>
        </div>
      </div>
    </div>
  );
};

const news: NewsInput[] = [
  { newsCat: "Careeer", description: "How to win any job you want. Get started with 5 steps.", imgPath: "/IMG-2.png" },
  { newsCat: "Lifestyle", description: "10 ways to reduce your office work depression.", imgPath: "/IMG-3.png" },
  { newsCat: "Career", description: "Why should you work as a team even on small projects.", imgPath: "/IMG-1.png" },
];

const _News: React.FC = () => {
  return (
    <section className="flex flex-col bg-[#f4f7fa]">
      <div className="flex relative flex-col justify-center items-center px-20 py-40 w-full min-h-[895px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex relative flex-col mb-0 w-full max-w-[1332px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-col items-center rounded-none">
                <h1 className="z-10 mt-0 text-5xl font-bold tracking-tighter leading-none text-center text-gray-900 max-md:max-w-full">
                    News that helps
                </h1>
                <p className="mt-5 text-2xl tracking-tight leading-10 text-center text-gray-900 bg-blend-normal w-[707px] max-md:max-w-full">
                With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                </p>
          </div>
          <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
            <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
              {news.map((category, index) => (
                <NewsCard key={index} {...category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default _News;