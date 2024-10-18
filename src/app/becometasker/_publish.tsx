"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player"; 



const _Publish = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.main className="gap-10">
        <div className="flex flex-col w-full h-fit pb-10 items-center rounded-none md:rounded-2xl shadow-input bg-white dark:bg-black">
          <p className="flex font-bold text-lg text-neutral-800 dark:text-neutral-200">
            Your submission is under review
          </p>

          <div className="py-12">
            <Player
                autoplay
                loop
                src="https://lottie.host/4c92da63-7f7d-4907-b6be-e72e86394404/RT5eoYeu1M.json" // Update path to the correct src location
                style={{ height: '300px', width: '300px' }} // Set height and width
              />
          </div>

          <p className="w-[500px] text-sm text-gray-500 text-center font-regular">
            Thanks for signing up! Your application to becomming a <span className="text-lg text-blue-500 font-semibold">Tasker </span> is under review. We’ll notify you shortly once it’s approved. Stay tuned!
          </p>
          
        </div>
      </motion.main>
    </AnimatePresence>
  );
};

export default _Publish;
