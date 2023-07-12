import React from "react";
import Stars from "../components/Stars";
import { Link } from "react-router-dom";

function Servis() {
  return (
    <div>
      <section>
        <div className="container_div flex my-10 pb-16">
          <div className="left mt-10 mx-10 w-[50%]">
            <h2>Главная / Моторные масла / GAZPROMNEFT Super 10W-40</h2>
            <div className="oil mt-5">
              <img src="./assets/maclo.png" alt="" />
            </div>
            <div className="oils flex gap-1">
              <img src="./assets/mac1.png" alt="" />
              <img src="./assets/mac1.png" alt="" />
              <img src="./assets/mac1.png" alt="" />
              <img src="./assets/mac1.png" alt="" />
              <img src="./assets/mac1.png" alt="" />
            </div>
          </div>
          <div className="right">
            <h1 className="text-5xl px-5 text-[#333333] pt-20 font-[500] w-[90%]">
              Моторное масло GAZPROMNEFT Super 10W-40 5л
            </h1>
            <div className="raiting flex gap-10 ml-5 mt-5">
              <p>
                {" "}
                <Stars stars={5} />{" "}
              </p>
              <p>130 отзывов</p>
              <p>288 заказов </p>
            </div>
            <h1 className="ml-5 mt-5 mb-3 text-[#867777]">Цена</h1>
            <p className="text-3xl font-bold ml-5 text-[#333333]">18 585 ₸</p>
            <div className="buttons flex mt-5 gap-4 ml-5">
              <button className="btn bg-[#E11C43] duration-[.3s] hover:bg-[#18A7A7] rounded-[20px] text-[white]  text-center w-[280px]  py-2">
                ВЫБРАТЬ ПРОДАВЦА
              </button>
              <button className="btn  duration-[.3s] hover:bg-[#18A7A7] hover:text-[#ffff] rounded-[20px] text-[#333] border-2 text-center  w-[280px]   py-2">
                СТАТЬ ПРОДАВЦОМ
              </button>
            </div>
            <p className="text-xl mt-5 ml-7">Комплектация</p>
            <li className="ml-7 mt-2">объем: 5 л</li>
          </div>
        </div>
      </section>

      <div className="btns ">
        <div className="buttons flex mt-5 gap-10 ml-5 justify-center">
          <button className="btn hover:border-[#E11C43] border-2 duration-[.3s] text-[#333333]  rounded-md  text-center w-[450px]  py-2">
            <Link to="/kompleks"> Продавцы</Link>
          </button>
          <button className="btn  duration-[.3s] hover:bg-[#18A7A7] hover:text-[#ffff] rounded-md text-[#333333] border-2 text-center  w-[450px]   py-2">
            Отзывы
          </button>
          <button className="btn  duration-[.3s] hover:bg-[#18A7A7] hover:text-[#ffff] rounded-md text-[#333333] border-2 text-center  w-[450px]   py-2">
            <Link to="/info"> Характеристики</Link>
          </button>
        </div>
      </div>
      <div className="products flex justify-center gap-20 items-center py-10 flex-wrap">
        <div className="buttons flex mt-5 gap-8 ml-5">
          <button className="btn border-[#E11C43] duration-[.3s] border-2 hover:bg-[#E11C43] rounded-[20px] text-[#333333] hover:text-white text-center w-[280px]  py-2">
            Войдите, чтобы оставить отзыв
          </button>
        </div>
      </div>
    </div>
  );
}

export default Servis;
