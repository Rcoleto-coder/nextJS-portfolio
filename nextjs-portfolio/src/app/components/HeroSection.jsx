'use client'
import React from "react";
import Image from "next/image";
import HeaderTypewriter from "./TypeAnimation";

const HeroSection = () => {
  return (
    <header>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Hello I'm {" "}</span>
            <HeaderTypewriter />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos
            minima nihil possimus aliquid dolore similique exercitationem
            tempora sint. Beatae, illo iusto id explicabo provident numquam
            obcaecati at totam sint.
          </p>
          <div>
            <button
              className="px-6 py-3 mr-4 w-full sm:w-fit font-semibold rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white"
            >
              Hire Me
            </button>
            <button
              className="px-1 py-1 mt-4 w-full sm:w-fit font-semibold rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
            >
              <span className="px-5 py-2 block rounded-full bg-[#121212] hover:bg-slate-800">Download CV</span>
            </button>
          </div>
        </div>
        
        <div className="col-span-5 mt-4 lg:mt-0 flex items-center justify-center ml-4">
          <div className="rounded-full bg-[#181818] w-[360px] h-[360px] md:w-[400px] md:h-[400px] relative">
            <Image
              src="/img/memoji-removebg.png"
              alt="Profile picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
