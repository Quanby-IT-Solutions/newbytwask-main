"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useState, useEffect, useRef } from "react";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface TaskCategory {
  username: string;
  level: number;
  description: string
  avgreview: number;
  reviews: number;
  startingprice: string;
}

const CategoryCard: React.FC<TaskCategory> = ({ username, level, description, avgreview, reviews, startingprice }) => {
  const isMdScreen = useMediaQuery('(min-width: 768px)');
  const fontSize = isMdScreen ? 25 : 20;

  return (
    <div className="group relative flex flex-col items-start w-[242px] md:w-[322px] h-fit text-gray-900  bg-white border-2 border-gray-200 rounded-xl">
      <div className='w-full h-[142px] md:h-[190px]'>
        <img src={'/IMG-1.png'} alt='image' className='w-full h-full'/>
      </div>
      <div className="flex flex-col items-start p-3 md:p-4 w-[240px] md:w-[322px] h-fit text-gray-900">
        <div className='flex gap-4 pb-2.5 md:pb-5'>
            <div className='self-center relative flex items-center justify-center w-fit h-fit rounded-full'>
              <Avatar>
                <AvatarImage className="w-[30px] h-[30px]" src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
                <p className="self-start text-sm md:text-base font-semibold text-gray bg-blend-normal">{username}</p>
                <p className="self-start text-sm md:text-base text-gray-500 font-medium text-gray bg-blend-normal">Level {level} Tasker</p>
            </div>
        </div>
        
        <p className="w-full h-[150px] md:h-[100px] mb-2.5 md:mb-5 text-base md:text-lg font-regular overflow-x-hidden overflow-y-auto no-scrollbar">{description}</p>
        <div className='flex gap-1'>
          <div className='flex gap-1 text-yellow-400'>
            <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
            <p className="mt-1.5 text-sm md:text-base font-bold">{avgreview}</p>
          </div>
          <p className="mt-1.5 text-sm md:text-base text-gray-400 font-regular">({reviews})</p>
        </div>
      </div>
      <div className="flex justify-between w-full p-3 md:p-4 border-t border-gray-200">
        <div className="flex text-gray-400">
          <MenuRoundedIcon className='self-center' sx={{ fontSize }}/>
          <FavoriteRoundedIcon className='self-center' sx={{ fontSize }}/>
        </div>
        <div className="flex flex-col content-center text-gray-400">
          <p className="text-xs md:text-sm font-bold">Starting at</p>
          <p className="place-self-end text-lg md:text-xl text-gray-800 font-regular">{startingprice}</p>
        </div>
      </div>
    </div>
  );
};

const categories: TaskCategory[] = [
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/DeveloperHardworking UI/UX and Frontend Designer/DeveloperHardworking UI/UX and Frontend Designer/DeveloperHardworking UI/UX and Frontend Designer/DeveloperHardworking UI/UX and Frontend Designer/DeveloperHardworking UI/UX and Frontend Designer/DeveloperHardworking UI/UX and Frontend Designer/DeveloperHardworking UI/UX and Frontend Designer/DeveloperHardworking UI/UX and Frontend Designer/DeveloperHardworking UI/UX and Frontend Designer/DeveloperHardworking UI/UX and Frontend Designer/DeveloperHardworking UI/UXsdfsdfsffdhdngnhjmhngbfdv cbnhtgfvvggegjejgnenge gjoegeg jege gorengor gorgwk gjrgrke ge gdfgdfggdfg and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
];

const _Recommended: React.FC = () => {
  const [isAtStart, setIsAtStart] = useState(true); 
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isMdScreen = useMediaQuery('(min-width: 768px)');
  const fontSize = isMdScreen ? 30 : 20;

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft === 0); // If scrolled all the way to the left
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth); // If scrolled all the way to the right
    }
  };

  // UseEffect to listen for scroll changes and update button states
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScrollPosition);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative h-fit mb-20 text-gray-700 bg-gray-50/50 border border-gray-200 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex flex-row max-[480px]:flex-col px-4 sm:px-10 pt-4 sm:pt-10 text-xl sm:text-2xl md:text-3xl font-bold ">
          <p>Recommended For You</p>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute z-10 top-1/2 w-full flex justify-between  px-0 md:px-4 gap-4"> 
            <div className={`w-fit h-fit rounded-full ${isAtStart ? "bg-gray-100/50 border border-gray-200 cursor-not-allowed" : "bg-white border border-gray-200"}`}>
              <button
                onClick={() => scroll("left")}
                hidden={isAtStart} // Disable if at the start
                className={`p-1.5  md:p-2 h-full w-full`}
              >
                <ArrowBackIosRoundedIcon sx={{ fontSize }}/>
              </button>
            </div>
            <div className={`w-fit h-fit rounded-full ${isAtEnd ? "bg-gray-100/50 border border-gray-200 cursor-not-allowed" : "bg-white border border-gray-200"}`}>
              <button
                onClick={() => scroll("right")}
                hidden={isAtEnd} // Disable if at the end
                className={`p-1.5 md:p-2 h-full w-full`}
              >
                <ArrowForwardIosRoundedIcon sx={{ fontSize }}/>
              </button>
            </div>
          </div>
        <div className="p-4 sm:p-10 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-3 md:gap-6 overflow-x-auto no-scrollbar"
          >
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default _Recommended;