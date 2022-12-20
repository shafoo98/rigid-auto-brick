import React from "react";

import FactoryInterior from "../assets/Factory-Interior.jpeg"

import { AiFillFacebook, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <div className="max-w-[1240px] w-full h-screen mx-auto flex flex-col">
        <h1 className="w-full text-2xl font-semibold px-8 py-6">About Us</h1>
        <p className="md:text-xl px-8 text-stone-700 ">
          We provide you with the best quality concrete blocks. We are based in
          the Port City of Chattogram. Our journey started in the year 2022. Our
          primary motive is to give our customers the best quality products at
          the most competitive prices so that they can fulfill their
          infrastructural needs.
        </p>
        <img src={FactoryInterior} alt="Factory Interior" className="w-50 mx-auto my-5" loading="lazy"/>
        <h1 className="w-full text-2xl font-semibold px-8 py-6">Motivation</h1>
        <p className="md:text-xl px-8 text-stone-700 ">
          Concrete Blocks are a great option for partition walls because they
          are quick and easy to install. The inclusion of steel reinforcement
          adds to the structure’s strength. Exterior and Interior Load-bearing
          Walls, Partition Walls, Panel Walls, and Boundary Walls are common
          uses for Hollow Concrete Blocks. Solid Concrete Blocks are perfect for
          Chimney and Fireplace building, but they also work well for Non-load
          Bearing Walls and Garden Walls. Concrete blocks are also used in a
          variety of smaller landscaping projects. Many Outdoor Furniture &
          Patio ideas, for example, include Outdoor Seating, Decorative screens,
          Outdoor Bar, Flower Bed, and many others. Concrete blocks can cover
          stored commodities from the effects of changing weather. It’s no
          surprise that engineers prefer it to construct Material Bins.
        </p>
        <h1 className="w-full text-2xl font-semibold px-8 py-6">
          Advantages of Concrete Blocks
        </h1>
        <p className="text-md md:text-xl px-8 text-stone-700">
          The reduced wall thickness due to narrower Concrete Blocks than a
          traditional brick masonry wall makes the space is larger by increasing
          the carpet surface. Concrete block building is more systematic,
          faster, and stronger than brick masonry because of the vast size of
          the blocks. Better thermal insulation is provided. It effectively
          absorbs sound and protects the interiors from noise pollution. Using
          concrete blocks provides additional fire protection. Protects precious
          agricultural land that is extensively mined to produce clay bricks.
          Individual pieces can be manufactured to a larger customized size and
          shape, allowing for a quick building cycle turnaround. Concrete
          Blocks, unlike traditional bricks, have a consistent size that lowers
          the need for plaster, making them a more cost-effective solution. The
          mortar consumption rate is lower than in traditional masonry
          construction, but the overall strength of the structure is increased.
        </p>
        <h1 className="w-full text-xl font-semibold px-8 pt-6 text-center">
          To Contact With Us and Place Your Orders, Please Find Us On The
          Following Social Media Platforms
        </h1>
        <div className="my-8 py-4 flex justify-center items-center">
          <AiFillFacebook size={75} className="mx-5" />
          <AiFillYoutube size={75} className="mx-5" />
          <AiFillInstagram size={75} className="mx-5" />
        </div>
      </div>
    </div>
  );
};

export default About;
