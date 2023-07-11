import React, { useState } from "react";
import Cards from "./Cards";
import {  MdLocationSearching, MdAvTimer } from "react-icons/md";


function Home() {
  const [data, setData] = useState([
    {
      img: "https://avatars.mds.yandex.net/i?id=184f5decc5b25ee9b550c455c5eac4dfdf77165d-8132087-images-thumbs&n=13",
      price: "14 600 тг",
      info: "RENAULT Корпус фильтра масляного (с радиатором)",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=2a0000017a100935cd00a38330d8c114c421-4346943-images-thumbs&n=13",

      price: "15 250 тг",
      info: "   Выбирайте по цене, скорости доставки или расположению",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=6e6a191fabc4a7212c42fd7d2e567a17-5332098-images-thumbs&n=13",

      price: "19 540 тг",
      info: "RENAULT Корпус фильтра масляного (с радиатором)",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=e138ac859ff1e12b22ca3c6b24669c8b27359958-8549420-images-thumbs&n=13",

      price: "17 500 тг",
      info: "Свечи зажигания, свечи накала фильтра масляного",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=1b4b09ac6036a3126a19afb671dd65b49054a984-7025550-images-thumbs&n=13",
      price: "16 500 тг",
      info: "RENAULT Корпус фильтра масляного (с радиатором)",
    },
  ]);

  return (
    <div>
      <div className="container">
        <header>
          <div className="header ">
            <div className="hero w-[70%] ml-[15%] border-2 py-4 mb-20 relative">
              <div className="title">
                <h1 className="text-5xl text-[#333333] mt-4 font-bold capitalize text-center">
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
                  <option value="2021">2020</option>
                  <option value="2021">2023</option>
                </select>
                <select>
                  <option value="2021">Марка</option>
                  <option value="2021">2021</option>
                  <option value="2021">2020</option>
                  <option value="2021">2023</option>
                </select>
                <select>
                  <option value="2021">Модель</option>
                  <option value="2021">2021</option>
                  <option value="2021">2020</option>
                  <option value="2021">2023</option>
                </select>
                <select>
                  <option value="2021">Тип кузова</option>
                  <option value="2021">2021</option>
                  <option value="2021">2020</option>
                  <option value="2021">2023</option>
                </select>
              </div>
              <button className='btn bg-[#E11C43] rounded-[20px] text-[white] mb-12 text-center m-auto w-[280px] flex justify-center  py-2'>СТАТЬ ПРОДАВЦОМ</button>

            </div>
            <div className="hero_c flex items-center justify-center gap-5 mt-7 ml-[13%] absolute bottom-[-150px]">
              <div className="card bg-[#FFFFFF] h-[160px] w-[24%] py-5 rounded-lg">
                <img className=" m-auto" src="./assets/h-1.png" alt="" />
                <p className="text-[18px] mt-4 font-medium text-[#333333] text-center">
                  Выбирайте по цене, скорости доставки или расположению
                </p>
              </div>
              <div className="card bg-[#FFFFFF] h-[160px] w-[24%] py-5 rounded-lg">
                <img className=" m-auto" src="./assets/h-2.png" alt="" />
                <p className="text-[18px] mt-4 font-medium text-[#333333] text-center">
                <span className="font-bold">589 837</span> <br />
запчастей
и масел в каталоге
                </p>
              </div>
              <div className="card bg-[#FFFFFF] h-[160px] w-[24%] py-5 rounded-lg">
                <img className=" m-auto" src="./assets/h-3.png" alt="" />
                <p className="text-[18px] mt-4 font-medium text-[#333333] text-center">
                Средний рейтинг <br />
продавцов <span className="font-bold">4.83 из 5</span>
                </p>
              </div>
              <div className="card bg-[#FFFFFF] w-[24%] h-[150px] py-5 rounded-lg">
                <img className=" m-auto" src="./assets/h-1.png" alt="" />
                <p className="text-[18px] mt-4 font-medium text-[#333333] text-center">
                Подать объявление
                </p>
              </div>
            </div>
          </div>
          <section className="px-20">
            <div className="title text-[#18A7A7] font-semiboldbold text-5xl mt-[150px]">
              Хиты продаж
            </div>
            <div className="cards flex mt-16 gap-5">
              {data.map((item) => {
                return <Cards item = {item} />;
              })}
            </div>
          </section>
          <section className="px-20">
            <div className="title text-[#18A7A7] font-semiboldbold text-5xl mt-[100px]">
              Необходимое для каждого авто
            </div>
            <div className="zapchasti flex justify-center gap-5 mt-20">
              <div className="motors">
                <div className="motor flex gap-6 items-center bg-[#F5F8F8] py-2 px-3 mb-5">
                  <div className="sveci">
                    <h1 className="font-semibold text-2xl">Свечи</h1>
                    <p>Свечи зажигания, свечи накала</p>
                  </div>
                  <img src="./assets/motor.png" alt="" />
                </div>
                <div className="motor h-[328px] flex gap-6 items-center bg-[#F5F8F8] py-2 px-3">
                  <div className="litr">
                    <div className="sveci">
                      <h1 className="font-semibold text-2xl mb-3">
                        Моторные масла
                      </h1>
                      <p>Свечи зажигания, свечи накала</p>
                    </div>
                    <button className="btn text-[#18A7A7] font-bold py-3 mt-3 border-2 px-8 rounded-lg border-[#18A7A7]">
                      {" "}
                      1 л
                    </button>{" "}
                    <br />
                    <button className="btn text-[#18A7A7] font-bold py-3 mt-3 border-2 px-8 rounded-lg border-[#18A7A7]">
                      {" "}
                      3 л
                    </button>{" "}
                    <br />
                    <button className="btn text-[#18A7A7] font-bold py-3  mt-3 border-2 px-8 rounded-lg border-[#18A7A7]">
                      {" "}
                      5 л
                    </button>
                  </div>
                  <img src="./assets/motor3.png" alt="" />
                </div>
                <div className="motor mt-5 flex gap-6 items-center bg-[#F5F8F8] py-2 px-3">
                  <div className="sveci">
                    <h1 className="font-semibold text-2xl">
                      Кузовные запчасти
                    </h1>
                    <p>Свечи зажигания, свечи накала</p>
                  </div>
                  <img src="./assets/cat1.png" alt="" />
                </div>
              </div>
              <div className="catalog">
                <div className="motor flex gap-6 items-center bg-[#F5F8F8] py-2 px-3 mb-5">
                  <div className="sveci">
                    <h1 className="font-semibold text-2xl">
                    Каталог ТО
                    </h1>
                    <p>Свечи зажигания, свечи накала</p>
                  </div>
                  <img src="./assets/cat2.png" alt="" />
                </div>
                <div className="motor flex gap-6 items-center bg-[#F5F8F8] py-2 px-3 mb-5">
                  <div className="sveci">
                    <h1 className="font-semibold text-2xl">
                    Каталог
                    </h1>
                    <p>Свечи зажигания, свечи накала</p>
                  </div>
                  <img src="./assets/cat3.png" alt="" />
                </div>
                <div className="motor flex gap-6 items-center bg-[#F5F8F8] py-2 px-3 mb-5">
                  <div className="sveci">
                    <h1 className="font-semibold text-2xl">
                    Коврики
                    </h1>
                    <p>Свечи зажигания, свечи накала</p>
                  </div>
                  <img src="./assets/motor2.png" alt="" />
                </div>
                <div className="motor flex gap-6 items-center bg-[#F5F8F8] py-2 px-3">
                  <div className="sveci">
                    <h1 className="font-semibold text-2xl">
                    Трансмиссионные
масла
                    </h1>
                    <p>Свечи зажигания, свечи накала</p>
                  </div>
                  <img src="./assets/cat4.png" alt="" />
                </div>
              </div>
              <div className="poisk">
                <div className="motor  h-[328px]  gap-6 bg-[#18A7A7] items-center rounded-[15px] py-2 px-6 mb-5">
                 <h1 className=" mt-10 text-2xl text-white">Поиск запчастей <br /> по VIN номеру авто</h1> <br />
                 <div className="search w-[90%]  relative cursor-pointer">
              <input
                type="text"
                class="search-i cursor-pointer text-[18px] py-3 px-2"
                placeholder="Введите номер детали"
              />
              <p className="absolute top-[16px] text-[22px] text-[#867777] right-[10px]"> <MdLocationSearching/> </p>
             <img className="absolute right-0" src="./assets/poisk.png" alt="" />
             <img className="absolute right-[-80px] top-[70px]" src="./assets/poisk1.png" alt="" />
            </div>
                </div>

                <div className="motor h-[328px] flex gap-6 items-center bg-[#F5F8F8] py-2 px-3">
                  <div className="litr">
                    <div className="sveci">
                      <h1 className="font-semibold text-2xl mb-3">АКБ</h1>
                      <p>Свечи зажигания, свечи накала</p>
                    </div>
                    <button className="btn p-[2px] font-bold text-[#18A7A7] mt-12 border-2 px-8 rounded-lg border-[#18A7A7]">
                      {" "}
                      Прямая <br />
                      полярность
                    </button>{" "}
                    <br />
                    <button className="btn p-[2px]  mt-3 border-2 px-8 font-bold text-[#18A7A7] rounded-lg border-[#18A7A7]">
                      Обратная <br />
                      полярность
                    </button>{" "}
                    <br />
                  </div>
                  <img src="./assets/poly.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
    </div>
  );
}

export default Home;
