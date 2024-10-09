"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
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
  return (
    <div className="group relative flex flex-col items-start w-fit h-fit text-gray-900  bg-white border-2 border-gray-200 rounded-xl">
      <Image 
            src={'/IMG-1.png'}
            width={322}
            height={193}
            alt='image'/>
      <div className="items-start p-4 w-[322px] h-fit text-gray-900 border border-gray-200">
        <div className='flex gap-4 pb-5'>
            <div className='self-center relative flex items-center justify-center w-fit h-fit rounded-full'>
              <AccountCircleRoundedIcon className='self-center text-gray-400' sx={{ fontSize: 30 }}/>
              <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
                <p className="self-start text-base font-semibold text-gray bg-blend-normal">{username}</p>
                <p className="self-start text-lg text-gray-500 font-medium text-gray bg-blend-normal">Level {level} Tasker</p>
            </div>
        </div>
        
        <p className="pb-5 text-xl font-regular">{description}</p>
        <div className='flex gap-1'>
          <div className='flex gap-1 text-base text-yellow-400'>
            <StarRateRoundedIcon className='self-center' sx={{ fontSize: 30 }}/>
            <p className="mt-1.5 text-lg font-bold">{avgreview}</p>
          </div>
          <p className="mt-1.5 text-lg text-gray-400 font-regular">({reviews})</p>
        </div>
      </div>
      <div className="flex justify-between w-full p-4 border border-t-gray-200">
        <div className="flex text-gray-400">
          <MenuRoundedIcon className='self-center' sx={{ fontSize: 30 }}/>
          <FavoriteRoundedIcon className='self-center' sx={{ fontSize: 30 }}/>
        </div>
        <div className="flex flex-col content-center text-gray-400">
          <p className="text-md font-bold text-gray-400">Starting at</p>
          <p className="place-self-end text-xl font-regular">{startingprice}</p>
        </div>
      </div>
    </div>
  );
};

const categories: TaskCategory[] = [
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
];

const _VeriProService: React.FC = () => {
  const router = useRouter()

  return (
    <section className="relative px-10 pb-20 h-fit text-gray-700">
      <div className="relative mx-auto">
        <div className="flex flex-row justify-between pb-16 px-10">
          <div className="flex flex-col justify-between"> 
              <p className="flex text-3xl font-bold tracking-tighter leading-10">
                  Verified Pro services in <p className="ml-3 text-3xl text-teal-500 font-bold tracking-tighter leading-10">Nearby Task </p>
              </p>
              <p className="flex text-base text-gray-400 leading-8 font-regular tracking-tighter">
                Hand-vetted talent for all your professional needs. 
              </p>
          </div> 
          <div className="flex flex-col justify-between"> 
            <div className="flex">
              <button onClick={() => router.push('/homepage')} className=" p-2 rounded-l-xl text-xl text-teal-500 font-regular">
                See all
                <ArrowForwardIosRoundedIcon className='pl-2' sx={{ color: 'primary', fontSize: 20 }}/>
              </button>
            </div>
          </div> 
        </div> 
        
        <div className="grid grid-cols-5 gap-y-10 gap-x-16">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default _VeriProService;