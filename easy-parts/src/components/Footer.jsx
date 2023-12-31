import React from "react";

function Footer() {
  return (
    <div>
      <div className="container bg-[#F7EEEC] mb-8 py-10 mt-28 min-w-[100%] ">
        <div className="title relative ">
          <h1 className="f-title text-[#18A7A7] text-center font-bold text-5xl">
            Начните продавать <br /> на EZY Parts!
          </h1>
          <button className="btn bg-[#18A7A7] duration-[.5s] hover:bg-red-600 rounded-lg text-[white] mb-12 text-center m-auto w-[330px] flex justify-center mt-8 py-2">
            СТАТЬ ПРОДАВЦОМ
          </button>
          <img className="w-[100%] mt-5" src="./assets/footer-i.png" alt="" />
          <img
            className=" absolute top-[-70px] left-10"
            src="./assets/f-left.png"
            alt=""
          />
          <img
            className=" absolute top-[-70px] left-0"
            src="./assets/tor.png"
            alt=""
          />
          <img
            className=" absolute top-[10px] object-cover right-0"
            src="./assets/f-right.png"
            alt=""
          />
          <img
            className=" absolute top-[-78px] object-cover right-0"
            src="./assets/tor-r.png"
            alt=""
          />
        </div>
        <div className="footer-links flex justify-between  px-16 py-14">
          <div className="links flex gap-[200px]  list-none cursor-pointer">
            <div className="left">
              <li className="link  hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:scale-[1.08] ">
                О нас
              </li>
              <li className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:scale-[1.08]  ">
                Помощь
              </li>
              <li className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:scale-[1.08]  ">
                Продавцу
              </li>
              <li className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:scale-[1.08]  ">
                Покупателю
              </li>
            </div>
            <div className="right">
              <li className="link  hover:text-[#1FAFAC] hover:text duration-[.3s]   hover:scale-[1.08] ">
                О компании
              </li>
              <li className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:scale-[1.08]  ">
                Реклама на сайте
              </li>
              <li className="link   hover:text-[#1FAFAC] hover:text duration-[.3s]  hover:scale-[1.08]  ">
                Контакты
              </li>
            </div>
          </div>
          <div className="social flex gap-2 mt-[-60px]">
            <img
              className="w-[30px] object-contain   cursor-pointer hover:text duration-[.3s]   hover:translate-y-[-5px]"
              src="./assets/vk.png"
              alt=""
            />
            <img
              className="w-[30px] object-contain   cursor-pointer hover:text duration-[.3s]   hover:translate-y-[-5px]"
              src="./assets/ins.png"
              alt=""
            />
            <img
              className="w-[30px] object-contain   cursor-pointer hover:text duration-[.3s]   hover:translate-y-[-5px]"
              src="./assets/fs.png"
              alt=""
            />
          </div>
          <div className="logo">
            <img src="./assets/logo.png" alt="" />
            <p>© 2023, EZY parts</p>
          </div>
        </div>
        <div className="f_end px-16 flex gap-[300px]">
          <p>
            Используя ezyparts.kz, вы принимаете условия использования сайта
          </p>
          <p>Разработка: busnesscenter.kz</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
