import React from "react";

function Cards() {
  return (
    <div>
      <div className="card border-2 bg-[#FFFFFF] gap-10 py-5 rounded-lg">
        <img className=" m-auto" src="./assets/img.png" alt="" />
        <h1 className="text-[#18A7A7] font-bold text-3xl ml-3 mt-6">
          12 500 тг
        </h1>
        <p className="text-[16px]    mt-4 font-bold text-[#333333] text-center">
          Выбирайте по цене, скорости доставки или расположению
        </p>
      </div>
    </div>
  );
}

export default Cards;
