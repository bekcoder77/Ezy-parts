import React from 'react'

function Hero() {
  return (
    <div>
          <div className="kolodca flex gap-6 items-center bg-[#E9F7F7] py-2 px-3 mb-5">
          <img src="./assets/kolodc.png" alt="" />
          <div className="sveci">
            <p>Колодки тормозные дисковые</p>
            <p>Toyota Camry</p>
            <h1 className="font-semibold text-2xl">99 999 тг.</h1>
          </div>
        </div>
    </div>
  )
}

export default Hero