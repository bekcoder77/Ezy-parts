import React, { useState } from "react";
import Cards from "./Cards";
import Banner from "./Banner";
import Hero from "./Hero";

function Catalog() {
  const [card, setCard] = useState([
    {
      img: "./assets/img.png",
      price: "14 600 тг",
      almat: "Алматы",
      korzin: "./assets/korzin.png",
      moth: " 22 сентября",
      prosmot: " 22 просмотра ",
      info: "б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин)",
    },
    {
        img: "./assets/img.png",
        price: "14 600 тг",
        almat: "Алматы",
        korzin: "./assets/korzin.png",
        moth: " 22 сентября",
        prosmot: " 22 просмотра ",
        info: "б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин)",
      },
      {
        img: "./assets/img.png",
        price: "14 600 тг",
        almat: "Алматы",
        korzin: "./assets/korzin.png",
        moth: " 22 сентября",
        prosmot: " 22 просмотра ",
        info: "б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин)",
      },
      {
        img: "./assets/img.png",
        price: "14 600 тг",
        almat: "Алматы",
        korzin: "./assets/korzin.png",
        moth: " 22 сентября",
        prosmot: " 22 просмотра ",
        info: "б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин)",
      },
      {
        img: "./assets/img.png",
        price: "14 600 тг",
        almat: "Алматы",
        korzin: "./assets/korzin.png",
        moth: " 22 сентября",
        prosmot: " 22 просмотра ",
        info: "б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин)",
      },
      {
        img: "./assets/img.png",
        price: "14 600 тг",
        almat: "Алматы",
        korzin: "./assets/korzin.png",
        moth: " 22 сентября",
        prosmot: " 22 просмотра ",
        info: "б/у, 265/65/R17 Зимние шипованные 265/65/R17 состояние новых шин)",
      },
      {
        img: "./assets/img.png",
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
            return <Banner key={idx} shina ={item}/>
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
