import React, { useState } from "react";
import Cards from "./Cards";

function Home() {

    const [data,setData] = useState([
        {
            img: "./assets/img.png",
            price:"12 500 тг",
            info: "RENAULT Корпус фильтра масляного (с радиатором)",
          },
          {
            img: "./assets/img.png",
            price:"12 500 тг",
            info: "RENAULT Корпус фильтра масляного (с радиатором)",
          },
          {
            img: "./assets/img.png",
            price:"12 500 тг",
            info: "RENAULT Корпус фильтра масляного (с радиатором)",
          },
          {
            img: "./assets/img.png",
            price:"12 500 тг",
            info: "RENAULT Корпус фильтра масляного (с радиатором)",
          },
          {
            img: "./assets/img.png",
            price:"12 500 тг",
            info: "RENAULT Корпус фильтра масляного (с радиатором)",
          },
          
       
    ])

  return (
    <div>
      <div className="container">
        <header>
          <div className="header ">
            <div className="hero w-[70%] ml-[15%] border-2 py-10 mb-20 relative">
              <div className="title">
                <h1 className="text-5xl text-[#333333] font-bold capitalize text-center">
                  подобрать детали
                </h1>
                <p className="text-xl mt-4 font-bold text-[#333333] text-center">
                  найдите недостающие детали именно на ваше транспортное
                  стредство
                </p>
              </div>
              <div className="select">
                <select>
                  <option value="2021">Год выпуска</option>
                  <option value="2021">2021</option>
                  <option value="2021">2022</option>
                  <option value="2021">2023</option>
                </select>
                <select>
                  <option value="2021">Год выпуска</option>
                  <option value="2021">2021</option>
                  <option value="2021">2022</option>
                  <option value="2021">2023</option>
                </select>
                <select>
                  <option value="2021">Год выпуска</option>
                  <option value="2021">2021</option>
                  <option value="2021">2022</option>
                  <option value="2021">2023</option>
                </select>
                <select>
                  <option value="2021">Год выпуска</option>
                  <option value="2021">2021</option>
                  <option value="2021">2022</option>
                  <option value="2021">2023</option>
                </select>
              </div>
            </div>
            <div className="hero_c flex items-center justify-center gap-5 mt-7 absolute top-[600px]">
              <div className="card bg-[#FFFFFF] w-[22%] py-5 rounded-lg">
                <img className=" m-auto" src="./assets/h-1.png" alt="" />
                <p className="text-[18px] mt-4 font-bold text-[#333333] text-center">
                  Выбирайте по цене, скорости доставки или расположению
                </p>
              </div>
              <div className="card bg-[#FFFFFF] w-[22%] py-5 rounded-lg">
                <img className=" m-auto" src="./assets/h-1.png" alt="" />
                <p className="text-[18px] mt-4 font-bold text-[#333333] text-center">
                  Выбирайте по цене, скорости доставки или расположению
                </p>
              </div>
              <div className="card bg-[#FFFFFF] w-[22%] py-5 rounded-lg">
                <img className=" m-auto" src="./assets/h-1.png" alt="" />
                <p className="text-[18px] mt-4 font-bold text-[#333333] text-center">
                  Выбирайте по цене, скорости доставки или расположению
                </p>
              </div>
              <div className="card bg-[#FFFFFF] w-[22%] py-5 rounded-lg">
                <img className=" m-auto" src="./assets/h-1.png" alt="" />
                <p className="text-[18px] mt-4 font-bold text-[#333333] text-center">
                  Выбирайте по цене, скорости доставки или расположению
                </p>
              </div>
            </div>
          </div>
        <section className="px-20">
        <div className="title text-[#18A7A7] font-semiboldbold text-5xl mt-[200px]">
            Хиты продаж
            </div>
            <div className="cards flex mt-16 gap-5">
                {data.map((item)=>{
                    return <Cards/>
                })}
          
            </div>
        </section>
        <section className="px-20">
        <div className="title text-[#18A7A7] font-semiboldbold text-5xl mt-[100px]">
        Необходимое для каждого авто 
            </div>
        </section>
        </header>
      </div>
    </div>
  );
}

export default Home;
