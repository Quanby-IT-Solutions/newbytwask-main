"use client"

import React from "react";
import { Button } from "@nextui-org/react";


const _InfoData = () => {
  return (
    <div className="flex flex-col w-[340px] h-fit px-5 py-6 gap-6 bg-white border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-base text-gray-800 font-normal">
          Inbox
        </p>
        <Button
          variant="light"
        >
          <p className="text-base text-blue-500 font-regular">
            View All
          </p>
        </Button>
      </div>
    </div>
  );
};

export default _InfoData;
