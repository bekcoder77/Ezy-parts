import React from "react";
import { MdLocationPin, MdLocationSearching, MdAvTimer } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import { Link } from "react-router-dom";
import Toyoto from "../pages/Toyoto";
import Catalog from "../pages/Catalog";

function Navbar() {
  return (
    <div>
      <div className="container min-w-[100%] ">
        <div className="city bg-[#3F3F3F] h-14 flex px-10 items-center justify-between cursor-pointer ">
          <div className="al flex items-center gap-2">
            <p className="text-white text-2xl">
              {" "}
              <MdLocationPin />
            </p>{" "}
            <span className="text-white text-xl border-b border-dotted">
              Алматы{" "}
            </span>
          </div>
          <h1 className="text-white text-[14]">
            Бесплатная доставка заказов до конца декабря!
          </h1>
          <p>.</p>
        </div>
        <nav>
          <div className="navbar flex items-center justify-between py-3 px-6 cursor-pointer">
            <div className="logo flex gap-10 items-center w-[40%] ">
              {/* <img src="./assets/logo.png" alt="" /> */}
              <Link to="/">
                {" "}
                <img src="./assets/logo.png" alt="" />{" "}
              </Link>
              <div className="links flex gap-5 list-none cursor-pointer">
                <li className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] ">
                  О нас
                </li>
                <li className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
                  Помощь
                </li>
                <li className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
                  Продавцу
                </li>
                <li className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:translate-y-[-5px]  ">
                  Покупателю
                </li>
                <li className="link   hover:text-[#1FAFAC] hover: duration-[.3s]  hover:translate-y-[-5px]  ">
                  Контакты
                </li>
              </div>
            </div>

            <div className="search w-[30%] relative cursor-pointer">
              <input
                type="text"
                class="search-i cursor-pointer"
                placeholder="Введите номер детали, название или VIN"
              />
              <p className="absolute top-1 gap-1 text-[20px] right-0 flex items-center">
                {" "}
                <RxLapTimer /> <MdLocationSearching />
              </p>
            </div>
            <div className="user flex gap-3">
              <img src="./assets/korzina.png" alt="" />
              <img src="./assets/user.png" alt="" />
            </div>
          </div>
          <div className="katalog bg-[#F5F5F5] py-3 cursor-pointer  flex items-center justify-between gap-2 list-none px-10">
            {/* <li>Каталог</li> */}
            <Link
              className="link  hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] "
              to="/toyoto"
            >
              Каталог{" "}
            </Link>
            <Link
              className="link  hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] "
              to="/catalog"
            >
              Тормозная система{" "}
            </Link>
            <Link
              className="link  hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] "
              to="/kompleks"
            >
              Двигатель <br />/ выхлоп{" "}
            </Link>

            <li className="link  hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] ">
              Подвеска <br /> / рулевое
            </li>
            <li className="link  hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] ">
              Коробка передач{" "}
            </li>
            <li className="link  hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] ">
              Охлождение <br /> / отопление
            </li>
            <li className="link  hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] ">
              Электрика <br /> / освещение
            </li>
            <li className="link  hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:translate-y-[-5px] ">
              Кузов <br /> / элементы
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
