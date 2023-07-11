import React, { useState } from "react";
import Cards from "./Cards";
import Hero from "./Hero";
import Shina from "./Shina";

function Catalog() {
  const [card, setCard] = useState([
      {
        images: "https://avatars.mds.yandex.net/i?id=e138ac859ff1e12b22ca3c6b24669c8b27359958-8549420-images-thumbs&n=13",
        price: "14 600 тг",
        almat: "Алматы",
        korzin: "./assets/korzin.png",
        moth: " 22 сентября",
        prosmot: " 22 просмотра ",
        info: "б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин)",
      },
      {
        images: "https://avatars.mds.yandex.net/i?id=6e6a191fabc4a7212c42fd7d2e567a17-5332098-images-thumbs&n=13",
        price: "14 600 тг",
        almat: "Алматы",
        korzin: "./assets/korzin.png",
        moth: " 22 сентября",
        prosmot: " 22 просмотра ",
        info: "б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин)",
      },
      {
        images: "https://avatars.mds.yandex.net/i?id=8d2b09e6518d0c6e334ea47d77401e9c6e293af3-9235545-images-thumbs&n=13",
        price: "14 600 тг",
        almat: "Алматы",
        korzin: "./assets/korzin.png",
        moth: " 22 сентября",
        prosmot: " 22 просмотра ",
        info: "б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин)",
      },
      {
        images: "https://avatars.mds.yandex.net/i?id=fb4989a2858e840060aed577a737089bda06c763-8266553-images-thumbs&n=13",
        price: "14 600 тг",
        almat: "Алматы",
        korzin: "./assets/korzin.png",
        moth: " 22 сентября",
        prosmot: " 22 просмотра ",
        info: "б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин)",
      },
      {
        images: "https://avatars.mds.yandex.net/i?id=eccb5dd09c114f176fac97882540023720cc0ad6-10355098-images-thumbs&n=13",
          price: "14 600 тг",
          almat: "Алматы",
          korzin: "./assets/korzin.png",
          moth: " 22 сентября",
          prosmot: " 22 просмотра ",
          info: "б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин)",
        },
      {
        images: "https://avatars.mds.yandex.net/i?id=90c53850952e943f01b96657e02f0da66a575ff3-6392895-images-thumbs&n=13",
        price: "14 600 тг",
        almat: "Алматы",
        korzin: "./assets/korzin.png",
        moth: " 22 сентября",
        prosmot: " 22 просмотра ",
        info: "б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин)",
      },
      {
        images: "https://avatars.mds.yandex.net/i?id=184f5decc5b25ee9b550c455c5eac4dfdf77165d-8132087-images-thumbs&n=13",

        price: "14 600 тг",
        almat: "Алматы",
        korzin: "./assets/korzin.png",
        moth: " 22 сентября",
        prosmot: " 22 просмотра ",
        info: "б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин)",
      },
  ]);

  const [kolod,setKolod] =useState([
  
      {
        img: "./assets/img.png",
        price: "14 600 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "./assets/img.png",
        price: "14 600 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "./assets/img.png",
        price: "14 600 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "./assets/img.png",
        price: "14 600 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "./assets/img.png",
        price: "14 600 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "./assets/img.png",
        price: "14 600 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
  ])

  return (
    <div>
      <div className="catalog flex  justify-between py-24 px-10">
        <select className="border-[#1FAFAC] border-2 outline-none w-[200px] h-[40px] text-black">
          <option value="2021">Алматы</option>
          <option value="2021">2021</option>
          <option value="2021">2020</option>
          <option value="2021">2023</option>
        </select>
        
        <div className="shina">
        {card.map((item,idx)=>{
            // return <Banner key={idx} shina ={item}/>
            return <Shina item ={item}/>
        })}
        </div>
      <div className="kolods">
        {kolod.map((item,idx) =>{
            return <Hero key={idx} item ={item}/>
        })}
      </div>
      </div>
    </div>
  );
}

export default Catalog;
