"use client";

import React from 'react';
import Image from 'next/image';

interface NewsItem {
  category: string;
  title: string;
  imgPath: string;
}

const NewsCard: React.FC<NewsItem> = ({ category, title, imgPath }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image 
        src={imgPath} 
        width={420} 
        height={360} 
        alt={title}
        className="w-full  md:h-[360px] object-cover rounded-t-xl"
      />
      <div className="p-7 w-full">
        <p className="text-sm font-semibold text-gray-500 mb-4">{category}</p>
        <h3 className="max-sm:text-md sm:text-lg md:text-xl font-bold text-gray bg-blend-normal text-gray-900 leading-tight mb-2">{title}</h3>
      </div>
    </div>
  );
};

const newsItems: NewsItem[] = [
  { category: "Career", title: "How to win any job you want. Get started with 5 steps.", imgPath: "/IMG-2.png" },
  { category: "Lifestyle", title: "10 ways to reduce your office work depression.", imgPath: "/IMG-3.png" },
  { category: "Career", title: "Why should you work as a team even on small projects.", imgPath: "/IMG-1.png" },
];

const News: React.FC = () => {
  return (
    <section className="bg-gray-100 ">
      <div className="container mx-auto px-10 py-24 md:px-20 md:py-44">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl min-[850px]:text-5xl font-bold mb-8 text-gray-900">
            News that helps
          </h2>
          <p className="text-lg min-[850px]:text-xl leading-9 text-gray-600 max-w-2xl mx-auto">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:px-5 max-md:px-10">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;