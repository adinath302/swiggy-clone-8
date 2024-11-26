import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
  const [toggle, settoggle] = useState(false);

  const showsidemenu = () => {
    settoggle(true);
  };

  const hidesidemenu = () => {
    settoggle(false);
  };
  const links = [
    {
      icon: <IoIosSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: "Help",
    },
    {
      icon: <IoPersonOutline />,
      name: "SignIn",
    },
    {
      icon: "",
      name: "Cart",
      sup: "(0)",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hidesidemenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="z-[9999] bg-white sticky top-0 p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[30px] mr-5 ml-5">
            <img src="images/logo.svg" className="w-full" alt="" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-[black]">
              Ratanada{" "}
            </span>
            Jodhpur, Rajasthan, India{" "}
            <RxCaretDown
              fontSize={25}
              className="inline font-bold text-[#fc8019] cursor-pointer"
              onClick={showsidemenu}
            />
          </div>
          <nav className="flex list-none gap-5 ml-auto font-semibold text-[18px]">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex hover:  [#fc8019] cursor-pointer items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
