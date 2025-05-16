"use client";

import React, { JSX } from "react";

//components
import NavigationElement from "./NavigationElement";

function Navigation(): JSX.Element {
  type Data = {
    number: number;
    title: string;
    imgUrl: string;
  }[];

  const data: Data = [
    {
      number: 1,
      title: "Lapor KHS/Transkrip Nilai",
      imgUrl: "/1st.png",
    },
    {
      number: 2,
      title: "Lapor Pembayaran UKT",
      imgUrl: "/2nd.png",
    },
    {
      number: 3,
      title: "Lapor Prestasi",
      imgUrl: "/3rd.png",
    },
    {
      number: 4,
      title: "Lapor Perkembangan Diri",
      imgUrl: "/4th.png",
    },
  ];

  return (
    <div className="pt-4 pb-2 w-full overflow-x-auto">
      <div className="flex w-[1050px] xl:w-full gap-4 whitespace-nowrap">
        {data.map((items) => (
          <NavigationElement
            key={items.number}
            number={items.number}
            title={items.title}
            imgUrl={items.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Navigation;
