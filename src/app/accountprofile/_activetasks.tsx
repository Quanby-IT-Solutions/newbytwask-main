"use client"

import React from "react";
import { Button } from "@nextui-org/react";
import { Select, SelectItem} from "@nextui-org/select";


const _InfoData = () => {

  const viewOption = [
    { key: "viewtask", label: "View Task" },
  ];

  return (
    <div className="flex flex-col w-full h-fit p-5 gap-6 bg-white border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-base text-gray-800 font-normal">
          Active Task
        </p>
        <div className="flex w-36 flex-wrap md:flex-nowrap gap-4">
          <Select 
            placeholder="Select state"
            size="md"
            radius="sm"
            variant="bordered"
            isRequired
          >
            {viewOption.map((view) => (
              <SelectItem key={view.key}>
                {view.label}
              </SelectItem>
           ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default _InfoData;
