import React, { useState } from "react";
import Cards from "./Cards";
import Hero from "./Hero";
import Shina from "./Shina";
import { BsFire } from "react-icons/bs";

function Catalog() {
  const [card, setCard] = useState([
    {
      images:
        "https://avatars.mds.yandex.net/i?id=e138ac859ff1e12b22ca3c6b24669c8b27359958-8549420-images-thumbs&n=13",
      price: " 54 851 тг",
      almat: "New York",
      korzin: "./assets/korzin.png",
      moth: " 15 Август",
      prosmot: " 57 просмотра ",
      info: " Зимние шипованные 265/65/R17 состояние новых шин)",
    },
    {
      images:
        "https://avatars.mds.yandex.net/i?id=6e6a191fabc4a7212c42fd7d2e567a17-5332098-images-thumbs&n=13",
      price: " 99 871 тг",
      almat: "Madrid",
      korzin: "./assets/korzin.png",
      moth: " 19 Июнь",
      prosmot: " 98 просмотра ",
      info: " Зимние шипованные 265/65/R17 состояние новых шин)",
    },
    {
      images:
        "https://avatars.mds.yandex.net/i?id=8d2b09e6518d0c6e334ea47d77401e9c6e293af3-9235545-images-thumbs&n=13",
      price: " 65 651 тг",
      almat: "Piter",
      korzin: "./assets/korzin.png",
      moth: " 23 Май",
      prosmot: " 36 просмотра ",
      info: " Зимние шипованные 265/65/R17 состояние новых шин)",
    },
    {
      images:
        "https://avatars.mds.yandex.net/i?id=fb4989a2858e840060aed577a737089bda06c763-8266553-images-thumbs&n=13",
      price: " 97 871 тг",
      almat: "Los Angeles",
      korzin: "./assets/korzin.png",
      moth: " 28 Июнь",
      prosmot: " 54 просмотра ",
      info: " Зимние шипованные 265/65/R17 состояние новых шин)",
    },
    {
      images:
        "https://avatars.mds.yandex.net/i?id=eccb5dd09c114f176fac97882540023720cc0ad6-10355098-images-thumbs&n=13",
      price: " 34 561 тг",
      almat: "London",
      korzin: "./assets/korzin.png",
      moth: " 12 сентябрь",
      prosmot: " 71 просмотра ",
      info: " Зимние шипованные 265/65/R17 состояние новых шин)",
    },
    {
      images:
        "https://avatars.mds.yandex.net/i?id=90c53850952e943f01b96657e02f0da66a575ff3-6392895-images-thumbs&n=13",
      price: " 78 541 тг",
      almat: "Paris",
      korzin: "./assets/korzin.png",
      moth: " 24 Январь",
      prosmot: " 84 просмотра ",
      info: " Зимние шипованные 265/65/R17 состояние новых шин)",
    },
    {
      images:
        "https://avatars.mds.yandex.net/i?id=184f5decc5b25ee9b550c455c5eac4dfdf77165d-8132087-images-thumbs&n=13",

      price: " 21 421 тг",
      almat: "Tashkent",
      korzin: "./assets/korzin.png",
      moth: " 14 сентябрь",
      prosmot: " 64 просмотра ",
      info: " Зимние шипованные 265/65/R17 состояние новых шин)",
    },
  ]);

  const [kolod, setKolod] = useState([
    {
      images:
        "https://avatars.mds.yandex.net/i?id=e138ac859ff1e12b22ca3c6b24669c8b27359958-8549420-images-thumbs&n=13",
      price: "  81 541 тг",
      title: "Toyota Camry",
      info: "Колодки тормозные дисковые",
    },
    {
      images:
        "https://avatars.mds.yandex.net/i?id=90c53850952e943f01b96657e02f0da66a575ff3-6392895-images-thumbs&n=13",
      price: "  55 548 тг",
      title: "Toyota Camry",
      info: "Колодки тормозные дисковые",
    },
    {
      images:
        "https://avatars.mds.yandex.net/i?id=eccb5dd09c114f176fac97882540023720cc0ad6-10355098-images-thumbs&n=13",
      price: "  77 598 тг",
      title: "Toyota Camry",
      info: "Колодки тормозные дисковые",
    },
    {
      images:
        "https://avatars.mds.yandex.net/i?id=fb4989a2858e840060aed577a737089bda06c763-8266553-images-thumbs&n=13",
      price: "  65 121 тг",
      title: "Toyota Camry",
      info: "Колодки тормозные дисковые",
    },
    {
      images:
        "https://avatars.mds.yandex.net/i?id=8d2b09e6518d0c6e334ea47d77401e9c6e293af3-9235545-images-thumbs&n=13",
      price: "  58 584 тг",
      title: "Toyota Camry",
      info: "Колодки тормозные дисковые",
    },
    {
      images:
        "https://avatars.mds.yandex.net/i?id=6e6a191fabc4a7212c42fd7d2e567a17-5332098-images-thumbs&n=13",
      price: "  75 199 тг",
      title: "Toyota Camry",
      info: "Колодки тормозные дисковые",
    },
  ]);

  return (
    <div>
      <div className="parent_t ml-[320px] pt-10">
        <p className="text-xl font-medium text-[#867777]  mt-10">
          Главная / Запчасти / Колодки тормозные дисковые
        </p>
        <h1 className="text-5xl font-bold  mt-2">Колодки тормозные дисковые</h1>
        <div className="title flex items-center mt-20 mb-4 ">
          <p className="text-3xl text-[#f89c41]">
            {" "}
            <BsFire />
          </p>
          <h2 className="text-2xl font-bold  "> Горящие предложения недели</h2>
        </div>
      </div>
      <div className="catalog flex  justify-between  px-10 mt-5">
        <div className="selects ">
          <div className="menu flex gap-5 mb-5 mt-[-50px] ">
            <img
              className="w-[50px] object-cover"
              src="./assets/menu1.png"
              alt=""
            />
            <img
              className="w-[50px] object-cover"
              src="./assets/menu2.png"
              alt=""
            />
          </div>
          <select className="hover:border-[#1FAFAC] duration-[.3s] hover:cursor-pointer border-2 outline-none w-[200px] h-[40px] text-black">
            <option value="2021">Алматы</option>
            <option value="2021"> London</option>
            <option value="2021">Madrid</option>
            <option value="2021">Paris</option>
          </select>
          <div className="chesk  flex gap-5">
            <input
              className="text-2xl  cursor-pointer mt-3 w-[20px]"
              type="checkbox"
            />
            <p className="mt-8">
              {" "}
              Доставка из других <br /> регионов
            </p>
          </div>
          <div className="title text-xl mt-6 font-bold text-[#333333] ">
            Производитель
          </div>
          <div className="chesk  flex gap-5 mt-3">
            <input
              className="text-2xl  cursor-pointer mt-4 w-[20px]"
                   type="checkbox"
            />
            <p className="mt-4"> DENSO</p>
          </div>
          <div className="chesk  flex gap-5 ">
            <input
              className="text-2xl  cursor-pointer mt-4 w-[20px]"
              type="checkbox"
            />
            <p className="mt-4"> FEBI</p>
          </div>
          <div className="chesk  flex gap-5 ">
            <input
              className="text-2xl  cursor-pointer mt-4 w-[20px]"
              type="checkbox"
            />
            <p className="mt-4"> NISSAN</p>
          </div>
          <div className="chesk  flex gap-5">
            <input
              className="text-2xl  cursor-pointer mt-4 w-[20px]"
              type="checkbox"
            />
            <p className="mt-4"> BMW</p>
          </div>

          <div className="title text-xl mt-6  text-[#333333]  font-bold">
            Состяние
          </div>
          <div className="chesk  flex gap-5 mt-3">
            <input
              className="text-2xl  cursor-pointer mt-4 w-[20px]"
              type="radio"
            />
            <p className="mt-4"> Все</p>
          </div>
          <div className="chesk  flex gap-5 ">
            <input
              className="text-2xl  cursor-pointer mt-4 w-[20px]"
              type="radio"
            />
            <p className="mt-4"> Новые</p>
          </div>
          <div className="chesk  flex gap-5 ">
            <input
              className="text-2xl  cursor-pointer mt-4 w-[20px]"
              type="radio"
            />
            <p className="mt-4"> Б/у</p>
          </div>
          <div className="title text-xl mt-6 font-bold text-[#333333]">
            Сортировать
          </div>
          <div className="chesk  flex gap-5 mt-3">
            <input
              className="text-2xl  cursor-pointer mt-4 w-[20px]"
              type="radio"
            />
            <p className="mt-4"> по дате объявления</p>
          </div>
          <div className="chesk  flex gap-5 ">
            <input
              className="text-2xl  cursor-pointer mt-4 w-[20px]"
              type="radio"
            />
            <p className="mt-4"> по цене</p>
          </div>
          <div className="chesk  flex gap-5 ">
            <input
              className="text-2xl  cursor-pointer mt-4 w-[20px]"
              type="radio"
            />
            <p className="mt-4"> по рейтингу</p>
          </div>
        </div>

        <div className="shina mt-4">
          {card.map((item, idx) => {
            // return <Banner key={idx} shina ={item}/>
            return <Shina key={idx} item={item} />;
          })}
        </div>
        <div className="kolods mt-4">
          {kolod.map((item, idx) => {
            return <Hero key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
