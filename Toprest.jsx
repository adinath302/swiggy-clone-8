import React, { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

const Toprest = () => {
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/Top-restaurant-Chains");
    const apidata = await response.json();
    setData(apidata);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between my-5">
        <div className="text-[25px] font-blod">
          Top restaurant chains in India
        </div>
        <div className="flex">
          <div className=" flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer">
            <FaArrowLeftLong />
          </div>
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer ">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-3 overflow-hidden">
        {data.map((d, i) => {
          return <Card {...d} key={i} />;
        })}
      </div>
      <hr className="my-4 border-[1px]" />
    </div>
  );
};

export default Toprest;
