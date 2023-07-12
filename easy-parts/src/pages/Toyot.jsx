import React from "react";
import Stars from "../components/Stars";

function Toyot({ item }) {
  // const random = Math.floor(Math.random() * 6);
  const random = Math.random() * 5;

  return (
    <div>
      <div className="kolodca hover:scale-[1.1] duration-[.5s]  gap-6 items-center bg-[#E9F7F7] py-2 px-3 mb-5 cursor-pointer">
        <img
          className="w-[230px] mb-3 h-[140px] m-auto object-cover"
          src={item.img}
          alt=""
        />
        <div className="sveci">
          <p className="font-bold w-[80%] mb-3  hover:text-[#1FAFAC] hover:text duration-[.3s]   ">
            Колодки тормозные дисковые
          </p>
          <div className="d">
            <p className=" flex">
              {" "}
              <Stars stars={random} />{" "}
            </p>
          </div>
          <div className="korzin flex items-center mb-2 mt-3 justify-between">
            <h1 className="  font-semibold text-2xl pt-5  hover:text-[#1FAFAC] hover:text duration-[.3s]   ">
              {item.price}
            </h1>
            <img src="./assets/korzin.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toyot;
