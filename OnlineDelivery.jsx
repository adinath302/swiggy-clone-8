import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const OnlineDelivery = () => {
  const [data, setData] = useState([]);
  //
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //
  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/Top-restaurant-Chains");
    const apidata = await response.json();
    setData(apidata);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto" ref={componentRef}>
      <div className="flex items-center justify-between my-5">
        <div className="text-[25px] font-blod">
          Restaurants with online food delivery in India
        </div>
      </div>
      <div className={isAtTop ? 'fixed top-0 z-[9999999] bg-white w-full left-0 top-0' : ''}>
        <div className="max-w-[1200px] mx-auto flex my-4 gap-3">
          <div className="p-3 rounded-md  shadow">Filter</div>
          <div className="p-3 rounded-md  shadow">Sort By</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {data.map((d, i) => {
          return <Card {...d} key={i} />;
        })}
      </div>
    </div>
  );
};

export default OnlineDelivery;
