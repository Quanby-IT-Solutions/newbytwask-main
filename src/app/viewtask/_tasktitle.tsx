"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"


import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


import React from 'react';
import { useMediaQuery } from '@mui/material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const _TaskTitle = () => {
  const isMdScreen = useMediaQuery('(min-width: 768px)');
  const fontSize = isMdScreen ? 25 : 20;

  return (
    <section className="relative h-fit pt-4 text-gray-700">
      <Breadcrumb className="my-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-base md:text-lg text-blue-500">Vudei & Animation</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components" className="text-base md:text-lg text-blue-500">App & website Previews</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <p className="text-4xl text-gray-700 font-bold">Furniture Assembly Technician</p>

      <div className="flex items-center h-10 my-6">
        <div className='flex items-center gap-4'>
          <div className='relative flex items-center justify-center w-fit h-fit rounded-full'>
            <Avatar>
              <AvatarImage className="w-10 h-10" src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <p className="text-base md:text-lg font-semibold text-gray bg-blend-normal">airb123</p>
          <p className="text-lg md:text-xl text-gray text-gray-500 font-medium text-gray bg-blend-normal">Level 2 Tasker</p>
        </div>

        <Separator orientation="vertical" className="mx-2 h-4"/>

        <div className='flex items-center gap-4'>
          <div className='flex gap-2'>
            <div className='flex gap-1 text-yellow-400'>
              <div className='flex text-yellow-400'>
                <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                <StarRateRoundedIcon className='self-center' sx={{ fontSize }}/>
                </div>
              <p className="mt-1.5 text-base md:text-lg font-bold">4.9</p>
            </div>
            <p className="mt-1.5 text-base md:text-lg text-gray-400 font-regular">(902)</p>
            <p className="mt-1.5 text-lg md:text-xl text-gray-400 font-regular">3 Orders in Queue</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default _TaskTitle;