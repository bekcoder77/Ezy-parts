import React from 'react'
import {AiOutlineEye} from "react-icons/ai"

function Shina({item}) {
  return (
    <div>
         <div className="kolodca flex gap-10 items-center bg-[#F5F8F8] py-2 px-4 mb-5">
          <img className='w-[200px] h-[150px]' src={item.images} alt="" />
          <div className="sveci">
            <div className="fl-el flex gap-20 justify-between">
              <h1 className="font-semibold text-2xl">Шины зимние</h1>
              <h1 className="font-semibold text-2xl">99 999 тг.</h1>
            </div>
            <p className="text-[#867777] font-medium text-[18px] pt-2">
              б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин{" "}
            </p>
            <div className="prosmort flex items-center justify-between pt-10">
              <p>Алматы</p>
              <p>22 сентября</p>
              
             <div className="p flex items-center gap-3">
             <AiOutlineEye/>
             <p>  22 просмотра</p>
             </div>
              <p>
                {" "}
                <img className="mt-[-25px]" src="./assets/korzin.png" alt="" />
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Shina