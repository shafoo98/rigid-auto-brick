import React from "react";

import SolidBrick from "../assets/Solid Brick.png";
import HollowBrick from "../assets/Hollow Brick.png";
import Pavement from "../assets/Pavement.png";
import Card from "./card";

const Gallery = () => {
  return (
    <div>
      <h1 className="w-full text-6xl font-semibold text-center mt-36 md:mt-32">
        Our Products
      </h1>
      <div className="md:max-w-[1240px] w-full px-8 mx-auto grid lg:grid-cols-3 gap-8 h-screen">
        <Card
          name="Solid Brick"
          src={SolidBrick}
          color="Grey"
          minimumOrderQty={1000}
          price={14}
          type="Solid"
          size="400 x 200 x 200 mm"
        />
        <Card
          name="Hollow Brick"
          src={HollowBrick}
          color="Grey"
          minimumOrderQty={1000}
          price={20}
          type="Hollow"
          size="400 x 200 x 200 mm"
        />
        <Card
          name="Pavement Block"
          src={Pavement}
          color="Grey"
          minimumOrderQty={1000}
          price={30}
          type="Pavement Block"
          size="400 x 200 x 200 mm"
        />
      </div>
    </div>
  );
};

export default Gallery;
