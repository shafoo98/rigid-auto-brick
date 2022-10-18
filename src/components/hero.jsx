import React from "react";

import "./hero.css";

import Typed from "react-typed";

const Hero = () => {
  return (
    <div>
      <div
        id="background-image"
        className="text-7xl md:text-8xl text-center max-w-[1240px] w-full h-screen mx-auto flex justify-around items-center"
        loading="lazy"
      >
        <Typed className="text-[#292020]"
          strings={[
            "Thinking Of Your Dream Infrastructure?",
            "Think Quality!",
            "Think Best Prices!",
            "Think Of Us!",
            "RIGID AUTO BRICKS",
          ]}
          loop
          typeSpeed={40}
          backSpeed={60}
        />
      </div>
    </div>
  );
};

export default Hero;
