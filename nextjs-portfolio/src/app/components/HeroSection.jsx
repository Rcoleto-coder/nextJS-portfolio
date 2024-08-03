import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello I'm Rafael
            </h1>
            <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos
            minima nihil possimus aliquid dolore similique exercitationem tempora
            sint. Beatae, illo iusto id explicabo provident numquam obcaecati at
            totam sint.
            </p>
        </div>
        
        <div className="col-span-5">
            <Image 
                src="/img/robot.png"
                alt="Profile picture"
                width={300}
                height={300}
            />
           

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
