"use client";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";

import { useMediaQuery } from '@mui/material';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import { ChevronRightIcon } from "@radix-ui/react-icons"

const _HirePackages = () => {
  const isMdScreen = useMediaQuery('(min-width: 768px)');
  const fontSize = isMdScreen ? 25 : 20;
  

  return (
    <section className="w-[650px] flex flex-col py-10">
      <Tabs defaultValue="basic" className="w-full border rounded-xl">
        <TabsList className="h-20 flex justify-between p-0 gap-0 border-gray-300 rounded-t-xl ">
          <TabsTrigger className="w-full h-full py-5 text-[22px] text-gray-500 font-medium bg-gray-100/75 border rounded-tl-xl data-[state=active]:font-bold data-[state=active]:bg-white data-[state=active]:border border-gray-300 data-[state=active]:text-green-500/90 hover:scale-110" value="basic">Basic</TabsTrigger>
          <TabsTrigger className="w-full h-full py-5 text-[22px] text-gray-500 font-medium bg-gray-100/75 border data-[state=active]:font-bold data-[state=active]:bg-white data-[state=active]:border border-gray-300 data-[state=active]:text-green-500/90 hover:scale-110" value="standard">Standard</TabsTrigger>
          <TabsTrigger className="w-full h-full py-5 text-[22px] text-gray-500 font-medium bg-gray-100/75 border rounded-tr-xl data-[state=active]:font-bold data-[state=active]:bg-white data-[state=active]:border border-gray-300 data-[state=active]:text-green-500/90 hover:scale-110" value="premium">Premium</TabsTrigger>
        </TabsList>
        <TabsContent value="basic">
          <div className="flex justify-between p-10">
            <p className="text-2xl text-gray-700 font-bold">
              Basic Package
            </p>
            <p className="text-3xl text-gray-700 font-regular">
              P1000
            </p>
          </div>

          <div className="flex flex-col px-10 pt-6 pb-20 gap-6">
            <p className="text-xl text-gray-600 font-regular">
              Asembly of up to 3 small items (chairs, tables, etc.)
            </p>
            <div className="flex text-gray-600 gap-2">
              <AccessTimeRoundedIcon sx={{fontSize}}/>
              <p className="text-base font-bold">
                Estimated Delivery Time: 1-3 days availability based on location.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xl text-gray-600 font-bold">
              <p>
                Availability
              </p>
              <p>
                Hours:
              </p>
              <ul className="list-disc list-inside pl-2">
                <li>Monday - Saturday: 9 AM - 6 PM</li>
                <li>Sunday: By Appointment Only</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col px-10 pt-6 pb-10 gap-4">
            <Button variant="ghost" className="relative h-fit text-[22px] text-white font-semibold bg-green-500/90">
              Hire Now 
              <ChevronRightIcon className="absolute right-5 text-xl h-6 w-6" />
            </Button>
            <Button variant="ghost" className="relative h-fit text-xl text-green-500/90 font-regular hover:bg-white">
              Compare Packages 
            </Button>
          </div>          
        </TabsContent>
        <TabsContent value="standard">
        <div className="flex justify-between p-10">
            <p className="text-2xl text-gray-700 font-bold">
              Standard Package
            </p>
            <p className="text-3xl text-gray-700 font-regular">
              P1000
            </p>
          </div>

          <div className="flex flex-col px-10 pt-6 pb-20 gap-6">
            <p className="text-xl text-gray-600 font-regular">
              Asembly of up to 3 small items (chairs, tables, etc.)
            </p>
            <div className="flex text-gray-600 gap-2">
              <AccessTimeRoundedIcon sx={{fontSize}}/>
              <p className="text-base font-bold">
                Estimated Delivery Time: 1-3 days availability based on location.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xl text-gray-600 font-bold">
              <p>
                Availability
              </p>
              <p>
                Hours:
              </p>
              <ul className="list-disc list-inside pl-2">
                <li>Monday - Saturday: 9 AM - 6 PM</li>
                <li>Sunday: By Appointment Only</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col px-10 pt-6 pb-10 gap-4">
            <Button variant="ghost" className="relative h-fit text-[22px] text-white font-semibold bg-green-500/90">
              Hire Now 
              <ChevronRightIcon className="absolute right-5 text-xl h-6 w-6" />
            </Button>
            <Button variant="ghost" className="relative h-fit text-xl text-green-500/90 font-regular hover:bg-white">
              Compare Packages 
            </Button>
          </div> 
        </TabsContent>
        <TabsContent value="premium">
        <div className="flex justify-between p-10">
            <p className="text-2xl text-gray-700 font-bold">
              Premium Package
            </p>
            <p className="text-3xl text-gray-700 font-regular">
              P1000
            </p>
          </div>

          <div className="flex flex-col px-10 pt-6 pb-20 gap-6">
            <p className="text-xl text-gray-600 font-regular">
              Asembly of up to 3 small items (chairs, tables, etc.)
            </p>
            <div className="flex text-gray-600 gap-2">
              <AccessTimeRoundedIcon sx={{fontSize}}/>
              <p className="text-base font-bold">
                Estimated Delivery Time: 1-3 days availability based on location.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xl text-gray-600 font-bold">
              <p>
                Availability
              </p>
              <p>
                Hours:
              </p>
              <ul className="list-disc list-inside pl-2">
                <li>Monday - Saturday: 9 AM - 6 PM</li>
                <li>Sunday: By Appointment Only</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col px-10 pt-6 pb-10 gap-4">
            <Button variant="ghost" className="relative h-fit text-[22px] text-white font-semibold bg-green-500/90">
              Hire Now 
              <ChevronRightIcon className="absolute right-5 text-xl h-6 w-6" />
            </Button>
            <Button variant="ghost" className="relative h-fit text-xl text-green-500/90 font-regular hover:bg-white">
              Compare Packages 
            </Button>
          </div> 
        </TabsContent>
      </Tabs>
    </section>  
  );
};

export default _HirePackages;
