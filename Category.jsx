import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Category = () => {
  const [categeries, setcategory] = useState([]);
  const [slide, setslide] = useState(0);

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setcategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const nextSlide = () => { 
    if (categeries.length - 8 == slide) return false; 
    setslide(slide + 3); 
  };
  
  const prevSlide = () => {
    if (slide == 0) return false;
    setslide(slide - 3);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between my-5">
        <div className="text-[25px] font-blod">What's on your mind?</div>
        <div className="flex">
          <div className=" flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer">
            <FaArrowLeftLong onClick={prevSlide} />
          </div>
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer ">
            <FaArrowRight onClick={nextSlide} />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {categeries.map((cat, index) => {
          return (
            <div
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
              key={index}
              className="flex-grow shrink-0 w-[150px] duration-500"
            >
              <img src={"http://localhost:5000/images/" + cat.image} alt="" />
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
};

export default Category;
