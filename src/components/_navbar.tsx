"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface TaskCategory {
  title: string;
  link: string;
}

const CategoryList: React.FC<TaskCategory> = ({ title, link }) => {
  return (
    <motion.a
      href={link}
      whileHover={{ scale: 1.1 }}
      className="self-start text-regular md:text-xl text-gray-600/75 hover:text-gray-700"
    >
      <p className="whitespace-nowrap">{title}</p>
    </motion.a>
  );
}

const categories: TaskCategory[] = [
  { title: "Graphics & Design", link: "/graphicsAnddesign" },
  { title: "Digital Marketing", link: "/digitalmarket" },
  { title: "Writing & Translation", link: "/writingAndtranslation" },
  { title: "Video & Animation", link: "/videoAndanimation" },
  { title: "Music & Video", link: "/musicAndvideo" },
  { title: "Programming & Tech", link: "/programmingAndtech" },
  { title: "Photography", link: "/photography" },
  { title: "Business", link: "/business" },
  { title: "Graphics & Design", link: "/graphicsAnddesign" },
  { title: "Digital Marketing", link: "/digitalmarket" },
  { title: "Writing & Translation", link: "/writingAndtranslation" },
  { title: "Video & Animation", link: "/videoAndanimation" },
  { title: "Music & Video", link: "/musicAndvideo" },
  { title: "Programming & Tech", link: "/programmingAndtech" },
  { title: "Photography", link: "/photography" },
  { title: "Business", link: "/business" },
  { title: "Graphics & Design", link: "/graphicsAnddesign" },
  { title: "Digital Marketing", link: "/digitalmarket" },
  { title: "Writing & Translation", link: "/writingAndtranslation" },
  { title: "Video & Animation", link: "/videoAndanimation" },
  { title: "Music & Video", link: "/musicAndvideo" },
  { title: "Programming & Tech", link: "/programmingAndtech" },
  { title: "Photography", link: "/photography" },
  { title: "Business", link: "/business" },
  { title: "Graphics & Design", link: "/graphicsAnddesign" },
  { title: "Digital Marketing", link: "/digitalmarket" },
  { title: "Writing & Translation", link: "/writingAndtranslation" },
  { title: "Video & Animation", link: "/videoAndanimation" },
  { title: "Music & Video", link: "/musicAndvideo" },
  { title: "Programming & Tech", link: "/programmingAndtech" },
  { title: "Photography", link: "/photography" },
  { title: "Business", link: "/business" },
];

const _Navbar: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent text selection on mouse down
    if (scrollContainerRef.current) {
      setIsMouseDown(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent text selection on touch start
    if (scrollContainerRef.current) {
      setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMouseDown]);

  return (
    <header className="bg-white text-black md:px-4 py-2">
      <nav className="flex items-center px-4 lg:px-8">
        <motion.div
          ref={scrollContainerRef}
          className="flex flex-nowrap gap-5 overflow-x-auto no-scrollbar"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          whileTap={{ cursor: "grabbing" }}
        >
          {categories.map((category, index) => (
            <CategoryList key={index} {...category} />
          ))}
        </motion.div>
      </nav>
    </header>
  );
};

export default _Navbar;
