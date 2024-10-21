import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  className,
  hoverAnimationClassName,
  children,
}: {
  className?: string;
  hoverAnimationClassName?: string;
  children: React.ReactNode;
}) => {

  return (
    <div
      className={cn(
        className
      )}
    >
      <AnimatePresence>
              <motion.span
                className={cn("absolute inset-0 h-full w-ful rounded-3xl", hoverAnimationClassName)}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
      </AnimatePresence>
      {children}
    </div>
  );
};