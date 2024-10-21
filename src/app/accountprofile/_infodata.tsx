"use client"

import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"


const _InfoData = () => {
    // Define individual review counts
    const reviewdata = {
      inboxresponserate: 100,
      inboxresponsetime: 0,
      orderresponserate: 100,
      deliveryontime: 100,
      taskcompletion: 100,
    }

  return (
    <div className="flex flex-col w-[340px] h-fit px-5 py-6 gap-6 bg-white border border-gray-200 rounded-lg">
      <div className="flex justify-between">
        <div className="flex">
          <div className='relative flex items-center justify-center w-fit h-fit rounded-full'>
                <Avatar>
                  <AvatarImage className="w-16 h-16" src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
          <p className="pl-5 self-center text-xl text-gray-700 font-bold text-gray bg-blend-normal">Boss JOSK</p>
        </div>
      </div>

      <Separator />
      
      <div className="flex justify-between w-full gap-2">
                <div className="flex flex-col gap-3">
                  <p className="text-base text-gray-700 font-regular">
                    Inbox response rate
                  </p>
                  <p className="text-base text-gray-700 font-regular">
                    Inbox response time
                  </p>
                  <p className="text-base text-gray-700 font-regular">
                    Order response rate
                  </p>
                  <p className="text-base text-gray-700 font-regular">
                    Delivered on time
                  </p>
                  <p className="text-base text-gray-700 font-regular">
                    Task completion
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Progress value={reviewdata.inboxresponserate} className="w-16" color="bg-green-500"/>
                    <p className="text-lg text-gray-700 font-normal">
                      {reviewdata.inboxresponserate}%
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={reviewdata.inboxresponsetime} className="w-16" color="bg-green-500"/>
                    <p className="text-lg text-gray-700 font-normal">
                      {reviewdata.inboxresponsetime}%
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={reviewdata.orderresponserate} className="w-16" color="bg-green-500"/>
                    <p className="text-lg text-gray-700 font-normal">
                      {reviewdata.orderresponserate}%
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={reviewdata.deliveryontime} className="w-16" color="bg-green-500"/>
                    <p className="text-lg text-gray-700 font-normal">
                      {reviewdata.deliveryontime}%
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={reviewdata.taskcompletion} className="w-16" color="bg-green-500"/>
                    <p className="text-lg text-gray-700 font-normal">
                      {reviewdata.taskcompletion}%
                    </p>
                  </div>
                </div>
              </div>

      <Separator />
      
      <div className="flex justify-between">
        <p className="text-lg text-gray-700 font-normal">
          Earned in March
        </p>
        <p className="text-lg text-gray-700 font-bold">
          $0
        </p>
      </div>
    </div>
  );
};

export default _InfoData;
