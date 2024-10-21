"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import React from 'react';
import { Button } from "@nextui-org/react";
import { useMediaQuery } from '@mui/material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
interface MyTasks {
  username: string;
  level: number;
  description: string
  avgreview: number;
  reviews: number;
  startingprice: string;
}

const TasksCards: React.FC<MyTasks> = ({ username, level, description, avgreview, reviews, startingprice }) => {
  const isMdScreen = useMediaQuery('(min-width: 768px)');
  const fontSize = isMdScreen ? 30 : 25;
  return (
    <div className="group relative flex flex-col items-start w-[242px] md:w-[322px] h-fit text-gray-900  bg-white border-2 border-gray-200 rounded-xl">
      <div className='w-full h-[142px] md:h-[190px]'>
        <img src={'/IMG-1.png'} alt='image' className='w-full h-full'/>
      </div>
      <div className="flex flex-col items-start p-3 md:p-4 w-[240px] md:w-[322px] h-fit text-gray-900">
        <div className='flex gap-4 pb-2.5 md:pb-5'>
            <div className='self-center relative flex items-center justify-center w-fit h-fit rounded-full'>
              <Avatar>
                <AvatarImage className="w-10 h-10" src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
                <p className="self-start text-sm md:text-base font-semibold text-gray bg-blend-normal">{username}</p>
                <p className="self-start text-base md:text-lg text-gray-500 font-medium text-gray bg-blend-normal">Level {level} Tasker</p>
            </div>
        </div>
        
        <p className="w-full h-[100px] mb-2.5 md:mb-5 text-lg md:text-xl font-regular overflow-x-hidden overflow-y-auto no-scrollbar">{description}</p>
        <div className='flex gap-1'>
          <div className='flex gap-1 text-yellow-400'>
            <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
            <p className="mt-1.5 text-base md:text-lg font-bold">{avgreview}</p>
          </div>
          <p className="mt-1.5 text-base md:text-lg text-gray-400 font-regular">({reviews})</p>
        </div>
      </div>
      <div className="flex justify-between w-full p-3 md:p-4 border-t border-gray-200">
        <div className="flex text-gray-400">
          <MenuRoundedIcon className='self-center' sx={{ fontSize }}/>
          <FavoriteRoundedIcon className='self-center' sx={{ fontSize }}/>
        </div>
        <div className="flex flex-col content-center text-gray-400">
          <p className="text-base md:text-lg font-bold">Starting at</p>
          <p className="place-self-end text-lg md:text-xl text-gray-800 font-regular">{startingprice}</p>
        </div>
      </div>
    </div>
  );
};

const tasks: MyTasks[] = [
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworkadbifbkbfibfsu  hehgeug g iuege ge giing UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworking UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
  { username: "Boss Angelo", level: 10, description: "Hardworkadbifbkbfibfsu  hehgeug g iuege ge giing UI/UX and Frontend Designer/Developer", avgreview: 10, reviews: 7, startingprice: "1,000",},
];

const _MyTask: React.FC = () => {

  return (
    <section className="w-fit relative mx-auto px-4 md:px-10 pb-10 md:pb-20 h-fit text-gray-700">
      <div className="relative">
        <div className="flex justify-between pb-4 ">
          <div className="flex flex-col w-full justify-between"> 
            <div className="flex justify-between items-center py-2 md:py-4 text-xl sm:text-2xl md:text-3xl font-bold ">
              <div className="flex flex-col gap-3">
                <p className="text-3xl text-gray-700 font-bold">My Task</p>
                <p className="text-base text-gray-400 font-light">Effortlessly create new tasks and seamlessly edit existing ones to enhance your productivity and stay organized.</p>
              </div>
              <Button 
                radius="sm"
                className="py-3 px-6 bg-green-500 hover:scale-110 transition ease-in-out duration-300">
                <span className="text-base text-white font-semibold">
                  Create Task
                </span>
              </Button>
            </div>
          </div>
        </div> 
        
        <div 
        className={`grid grid-cols-4 gap-3 mx-aut`}>
          {tasks.map((task, index) => (
            <TasksCards key={index} {...task} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default _MyTask;