"use client"

import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { WobbleCard } from "@/components/ui/wobble-card-content_custom";
import { Button } from "@nextui-org/react";

interface TaskTips {
  icon: string;
  title: string;
  description: string
  link: string;
  button: string;
}

const TaskCards: React.FC<TaskTips> = ({ icon, title, description, button }) => {

  return (
    <WobbleCard 
      contentClassName="flex flex-col justify-between p-6 gap-8 bg-white group hover:bg-transparent rounded-lg"
    >
      <div className="flex flex-col gap-4">
        <div className="w-10 h-10">
          <Avatar>
            <AvatarImage src={icon} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-5">
          <p className="max-w-80 text-base text-gray-800 group-hover:text-gray-900 font-bold tracking-[-0.015em]">
          {title}
          </p>
          <p className="text-sm text-gray-500 group-hover:text-gray-700">
            {description}
          </p>
        </div>
      </div>
      <Button
        variant="bordered"
        radius="sm"
        className="w-fit p-6 group-hover:bg-blue-500 border-blue-500 group-hover:none hover:scale-110" 
      >
        <span className="text-base text-blue-500 group-hover:text-white font-semibold">
          {button}
        </span>
      </Button>
    </WobbleCard>
  );
};

const tasktips: TaskTips[] = [
  {
    icon: "https://img.icons8.com/ios/100/22c55e/speaker_1.png",
    title: "Get noticed",
    description:
      "Tap into the power of social media by sharing your Gig, and get expert help to grow your impact. ",
    link: "",
    button:"Share your Gigs",
  },
  {
    icon: "https://img.icons8.com/ios/100/22c55e/speaker_1.png",
    title: "Get more skills & exposure",
    description:
      "Hone your skills and expand your knowledge with online courses. You’ll be able to offer more services and gain more exposure with every course completed.",
    link: "",
    button:"Explore and Learn",
  },
  {
    icon: "https://img.icons8.com/ios/100/22c55e/speaker_1.png",
    title: "Become a successful seller!",
    description:
      "Watch this free online course to learn how to create an outstanding service experience for your buyer and grow your career as an online freelancer.",
    link: "",
    button:"Watch Free Course",
  },
];

const _TaskTips = () => {
  return (
    <main className="flex bg-blue flex-col w-[936px] h-fit px-8 py-11 mt-10 mb-5 gap-6 bg-white border border-gray-200 rounded-lg">
      <div className="flex flex-col gap-4">
        <p className="text-2xl text-gray-800 font-bold">
          3 steps to become a top Tasker in NearbyTask
        </p>
        <p className="text-base text-gray-500 font-normal">
          The key to your success on Nearby Task is the brand you build for yourself through your reputation on the platform. We gathered some tips and resources to help you become a leading tasker on Nearby Task.
        </p>
      </div>
      <div className="flex flex-row gap-2">
        {tasktips.map((tasktip, index) => (
            <TaskCards key={index} {...tasktip} />
        ))}
      </div>
    </main>
  );
};

export default _TaskTips;
