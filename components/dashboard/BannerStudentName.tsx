"use client";

import React, { JSX } from "react";

function BannerStudentName(): JSX.Element {
  const [name] = React.useState<string>("Belva Chelsea Anggara Hartyanto");
  return (
    <p className="font-poppins font-bold">
      <span className="text-md font-light">Selamat Bergabung, </span>
      {name}! BESTRO siap menemani perjalanan suksesmu!
    </p>
  );
}

export default BannerStudentName;
