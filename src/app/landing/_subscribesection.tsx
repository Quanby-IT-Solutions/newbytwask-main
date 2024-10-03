"use client";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";

const _Subscribe: React.FC = () => {
  return (
    <section className="flex flex-col mt-44 gap-5 items-center rounded-none">
      <div className="w-fit flex items-center justify-center p-7 text-xl font-bold tracking-tight leading-9 text-center text-white whitespace-nowrap bg-[#3b82f6] rounded-full max-md:pl-5">
        <EmailIcon sx={{ fontSize: 40 }} />
      </div>
      <div className="text-center">
        <h1 className="z-10 mt-0 text-5xl font-bold tracking-tighter leading-none text-gray-900 max-md:max-w-full">
          Get our latest updates
        </h1>
        <p className="mt-5 text-2xl tracking-tight leading-10 text-gray-900 bg-blend-normal w-[707px] max-md:max-w-full">
          Stay updated with our latest news and job opportunities!
        </p>
      </div>

      <div className="w-[707px] grid content-center max-md:mt-10">
        <div className="w-full container flex gap-4 p-[18px] rounded-lg self-center justify-around">
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search-input" className="sr-only">
              Enter your email
            </label>
            <div className="relative">
              <input
                type="text"
                id="search-input"
                className="w-full h-[60px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Search"
              />
            </div>
          </form>

          <button className="bg-[#1c3c8c] text-white p-[12px_50px] rounded-lg hover:bg-[#558bff] transition">
            Subscribe
          </button>
        </div>
        <p className="mt-2 text-lg tracking-tight leading-10text-base-6  text-center text-[#161C2D] bg-blend-normal max-md:max-w-full">
          We’ll never share your details with third parties.
          <br />
          View our Privacy Policy for more info.
        </p>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/349e292a7e3a170dbcf64c02939090e20f7fc600c443a87dd7ac567029488beb?placeholderIfAbsent=true&apiKey=dc67fb80454e414ca23e0d25fe2402bd"
        alt=""
        className="object-contain self-stretch mt-36 w-full aspect-[1000] max-md:mt-10 max-md:max-w-full"
      />
    </section>
  );
};

export default _Subscribe;
