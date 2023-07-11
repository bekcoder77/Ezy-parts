import React from "react";

function Cards({item}) {
  return (
   <div>
     <div>
      <div className="card border-2 bg-[#FFFFFF] gap-10 py-5 rounded-lg ">
        <img className=" m-auto" src={item.img} alt="" />
        <h1 className="text-[#18A7A7] font-bold text-3xl ml-3 mt-6">
        {item.price}
        </h1>
        <p className="text-[16px]    mt-4 font-bold text-[#333333] text-center">
       {item.info}
        </p>
      </div>
      
    </div>


   </div>
  );
}

export default Cards;
