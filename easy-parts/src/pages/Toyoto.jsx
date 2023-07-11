import React, { useState } from "react";
import Hero from "./Hero";
import Toyot from "./Toyot";
import { BsFire } from "react-icons/bs";

function Toyoto() {
  const [kolod, setKolod] = useState([
    {
      img: "https://avatars.mds.yandex.net/i?id=184f5decc5b25ee9b550c455c5eac4dfdf77165d-8132087-images-thumbs&n=13",
      price: "49 921 тг",
      title: "Toyota Camry",
      info: "Колодки тормозные дисковые",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=90c53850952e943f01b96657e02f0da66a575ff3-6392895-images-thumbs&n=13",
      price: "53 631 тг",
      title: "Toyota Camry",
      info: "Колодки тормозные дисковые",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=8d2b09e6518d0c6e334ea47d77401e9c6e293af3-9235545-images-thumbs&n=13",
      price: "38 441 тг",
      title: "Toyota Camry",
      info: "Колодки тормозные дисковые",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=6e6a191fabc4a7212c42fd7d2e567a17-5332098-images-thumbs&n=13",
      price: "32 631 тг",
      title: "Toyota Camry",
      info: "Колодки тормозные дисковые",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=ec93c87ab2bfb59176ef430915ee9562249da995-9147160-images-thumbs&n=13",
      price: "23 121 тг",
      title: "Toyota Camry",
      info: "Колодки тормозные дисковые",
    },
  
    {
        img: "https://avatars.mds.yandex.net/i?id=4e1b8bea27d09c96eb9fcb9a4546e818983e23f9-8177077-images-thumbs&n=13",
        price: "43 221 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=2a0000017a100935cd00a38330d8c114c421-4346943-images-thumbs&n=13",
        price: "32 141 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=369b124cc5b7c3ff83adcc41ec315cca55736ad9-9107119-images-thumbs&n=13",
        price: "23 451 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      
      {
        img: "https://avatars.mds.yandex.net/i?id=1dfee2ae3ccfede0cb017261034e634852ccec59-9086612-images-thumbs&n=13",
        price: "23 441 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=1b4b09ac6036a3126a19afb671dd65b49054a984-7025550-images-thumbs&n=13",
        price: "66 711 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=bc611e653964e8ffafbaa35520cf5e1d6f18c7dc-9056327-images-thumbs&n=13",
        price: "32 571 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=89da0db8564895789349d4661fa4a57ac4ab62bd-9069209-images-thumbs&n=13",
        price: "51 421 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=944525eb85fa7d3cdea39be646f2e16b3e490f07-9592077-images-thumbs&n=13",
        price: "35 841 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=a525e0c8d5f1ed0de308f267f35d7ae1c2d21f11-9181645-images-thumbs&n=13",
        price: "56 561 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=eccb5dd09c114f176fac97882540023720cc0ad6-10355098-images-thumbs&n=13",
        price: "54 691 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=e138ac859ff1e12b22ca3c6b24669c8b27359958-8549420-images-thumbs&n=13",
        price: "68 811 тг",
        title: "Toyota Camry",
        info: "Колодки тормозные дисковые",
      },
  ]);
  return (
    <section>
     
      <main>
       
        <div className="container_div flex  justify-around gap-16 py-5 px-10">
        <div className="asd ">
           <div className="menu flex gap-5 mb-5 mt-[200px] ">
           <img className="w-[50px] object-cover" src="./assets/menu1.png" alt="" />
            <img className="w-[50px] object-cover"src="./assets/menu2.png" alt="" />
           </div>
        <select className="border-[#1FAFAC] border-2 outline-none w-[200px] h-[40px] text-black">
            <option value="2021">Алматы</option>
            <option value="2021">2021</option>
            <option value="2021">2020</option>
            <option value="2021">2023</option>
          </select>
        </div>
         <div className="d">
         <div className="parent_t">
            <p className="text-xl font-medium text-[#867777]  mt-10">
        Главная / Запчасти / Колодки тормозные дисковые
      </p>
      <h1 className="text-5xl font-bold  mt-2">
        Колодки тормозные дисковые
      </h1>
      <div className="title flex items-center mt-20 mb-4 ">
          <p className="text-3xl text-[#f89c41]">  <BsFire /></p>
          <h2 className="text-2xl font-bold  ">
            {" "}
            Горящие предложения недели
          </h2>
        </div>
            </div>
         <div className="kolods flex flex-wrap gap-6">
            {kolod.map((item) => {
              return <Toyot item={item} />;
            })}
          </div>
         </div>
        </div>
      </main>
    </section>
  );
}

export default Toyoto;
