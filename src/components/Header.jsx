import { useState } from "react";
import HeaderItem from "./HeaderItem";
import logo from "../assets/logo.png";
import { HiPlus, HiStar, HiHome, HiDotsVertical } from "react-icons/hi";
import { HiMagnifyingGlass, HiPlayCircle } from "react-icons/hi2";
import { MdLiveTv } from "react-icons/md";
import profileIcon from "../assets/profile-icon.png";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { icon: HiHome, name: "Home" },
    { icon: HiMagnifyingGlass, name: "Search" },
    { icon: HiPlus, name: "Watchlist" },
    { icon: HiStar, name: "Originals" },
    { icon: HiPlayCircle, name: "Movies" },
    { icon: MdLiveTv, name: "Series" },
  ];

  return (
    <div className="flex items-center   justify-between text-white  p-5 ">
      {" "}
      <div className="flex gap-8 items-center">
        <img src={logo} alt="Logo" className="w-20 md:w-25 object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />,
          )}
        </div>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={" "} Icon={HiDotsVertical} />
          {toggle ? (
            <div className="absolute mt-3 bg-[#ffffff] border border-gray-700 p-3 px-5 py-4">
              {menu.map(
                (item, index) =>
                  index > 2 && <HeaderItem name={item.name} Icon={item.icon} />,
              )}
            </div>
          ) : null}
        </div>
      </div>
      <img src={profileIcon} alt="Profile" className="w-10 h-10 rounded-full" />
    </div>
  );
}

export default Header;
