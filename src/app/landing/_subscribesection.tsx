"use client";
import React from "react";

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const _Subscribe: React.FC = () => {
  return (
    <section className="flex flex-col items-center container mx-auto w-fit px-10 py-24 md:px-20 md:py-44">
      <div className="w-16 h-16 flex items-center justify-center p-4 text-xl font-bold text-white bg-blue-500 rounded-full">
        <EmailIcon />
      </div>
      <div className="text-center mt-8">
        <h1 className="text-2xl md:text-4xl min-[850px]:text-5xl font-bold tracking-tight text-gray-900">
          Get our latest updates
        </h1>
        <p className="mt-4 text-md min-[850px]:text-xl text-gray-600 max-w-2xl mx-auto">
          Stay updated with our latest news and job opportunities!
        </p>
      </div>

      <div className="w-full max-w-2xl mt-12">
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex-grow">
            <label htmlFor="email-input" className="sr-only">
              Enter your email
            </label>
            <input
              type="email"
              id="email-input"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <button className="w-full sm:w-auto bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Well never share your details with third parties.
          <br />
          View our Privacy Policy for more info.
        </p>
      </div>
    </section>
  );
};

export default _Subscribe;