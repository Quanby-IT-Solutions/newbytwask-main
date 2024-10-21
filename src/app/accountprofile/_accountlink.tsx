"use client"

import { blue } from "@mui/material/colors";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';


const _AccountLink = () => {

  return (
    <div className="flex flex-col w-[340px] h-fit px-5 py-6 gap-6 bg-white border border-gray-200 rounded-lg">
      <div className="flex items-center gap-2">
        <p className="text-base text-gray-700 font-bold">Link your social Networks</p>
        <HelpRoundedIcon className="self-center text-gray-500" sx={{ fontSize: 16 }}/>
      </div>
      <div className="grid grid-cols-5">
        <button className='self-center relative flex items-center justify-center w-fit h-fit rounded-full group hover:scale-75 transition ease-in-out duration-300'>
          <Avatar>
            <AvatarImage className="w-15 h-15 opacity-50 group-hover:opacity-25 transition ease-in-out duration-300" src="https://img.icons8.com/color/500/github--v1.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <AddCircleIcon sx={{ fontSize: 24, color: blue[500] }} className="absolute bottom-0 group-hover:-translate-y-5 right-0 bg-white rounded-full border-2 border-white opacity-75 group-hover:opacity-100 group-hover:scale-150 transition ease-in-out duration-300" />
        </button>

        <button className='self-center relative flex items-center justify-center w-fit h-fit rounded-full group hover:scale-75 transition ease-in-out duration-300'>
          <Avatar>
            <AvatarImage className="w-15 h-15 opacity-50 group-hover:opacity-25 transition ease-in-out duration-300" src="https://img.icons8.com/color/500/google-logo.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <AddCircleIcon sx={{ fontSize: 24, color: blue[500] }} className="absolute bottom-0 group-hover:-translate-y-5 right-0 bg-white rounded-full border-2 border-white opacity-75 group-hover:opacity-100 group-hover:scale-150 transition ease-in-out duration-300" />
        </button>

        <button className='self-center relative flex items-center justify-center w-fit h-fit rounded-full group hover:scale-75 transition ease-in-out duration-300'>
          <Avatar>
            <AvatarImage className="w-15 h-15 opacity-50 group-hover:opacity-25 transition ease-in-out duration-300" src="https://img.icons8.com/fluency/500/facebook-new.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <AddCircleIcon sx={{ fontSize: 24, color: blue[500] }} className="absolute bottom-0 group-hover:-translate-y-5 right-0 bg-white rounded-full border-2 border-white opacity-75 group-hover:opacity-100 group-hover:scale-150 transition ease-in-out duration-300" />
        </button>

        <button className='self-center relative flex items-center justify-center w-fit h-fit rounded-full group hover:scale-75 transition ease-in-out duration-300'>
          <Avatar>
            <AvatarImage className="w-15 h-15 opacity-50 group-hover:opacity-25 transition ease-in-out duration-300" src="https://img.icons8.com/fluency/500/instagram-new.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <AddCircleIcon sx={{ fontSize: 24, color: blue[500] }} className="absolute bottom-0 group-hover:-translate-y-5 right-0 bg-white rounded-full border-2 border-white opacity-75 group-hover:opacity-100 group-hover:scale-150 transition ease-in-out duration-300" />
        </button>

        <button className='self-center relative flex items-center justify-center w-fit h-fit rounded-full group hover:scale-75 transition ease-in-out duration-300'>
          <Avatar>
            <AvatarImage className="w-15 h-15 opacity-50 group-hover:opacity-25 transition ease-in-out duration-300" src="https://img.icons8.com/ios-filled/500/twitterx--v1.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <AddCircleIcon sx={{ fontSize: 24, color: blue[500] }} className="absolute bottom-0 group-hover:-translate-y-5 right-0 bg-white rounded-full border-2 border-white opacity-75 group-hover:opacity-100 group-hover:scale-150 transition ease-in-out duration-300" />
        </button>
      </div>
    </div>
  );
};

export default _AccountLink;
