import React from "react";
import { useNavigate } from "react-router-dom";

import "./hero.css";

import Typed from "react-typed";

const Hero = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div
        className="text-6xl md:text-7xl text-center max-w-[1240px] w-full h-screen mx-auto flex justify-around items-center"
        loading="lazy"
        onClick={() => navigate("/gallery")}
      >
        <Typed
          className="text-[#292020]"
          strings={[
            "RIGID AUTO BRICKS",
            "Quality Is Our Only Priority",
            "Click Here To See Our Products",
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
