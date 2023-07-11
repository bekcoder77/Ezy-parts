import React from 'react'

function Toyot({item}) {
  return (
    <div>
         <div className="kolodca  gap-6 items-center bg-[#E9F7F7] py-2 px-3 mb-5 cursor-pointer">
          <img className='w-[230px] mb-3 h-[140px] m-auto object-cover' src={item.img} alt="" />
          <div className="sveci">
            <p className='font-bold w-[80%] mb-3'>Колодки тормозные дисковые</p>
            <p>Toyota Camry</p>
            <div className="korzin flex items-center mb-2 mt-3 justify-between">
            <h1 className="  font-semibold text-2xl pt-5">{item.price}</h1>
            <img src="./assets/korzin.png" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Toyot