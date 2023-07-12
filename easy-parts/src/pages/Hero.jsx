import React from "react";

function Hero({item}) {
  return (
    <div>
      <div className="kolodca flex gap-6 items-center bg-[#E9F7F7] py-2 px-3 mb-5">
        <img className="w-[80px]" src={item.images} alt="" />
        <div className="sveci">
          <p>Колодки тормозные дисковые</p>
          <p>Toyota Camry</p>
          <h1 className="font-semibold text-2xl mt-3">{item.price}</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
