import Image from "next/image";
import React from "react";

const Company = () => {
  return (
    <div className="containerM flex flex-col gap-8 mx-auto my-20">
      <div className="containerM flex flex-col gap-3 w-[624px]">
        <p>Copmany</p>
        <h1 className="text-[40px] leading-[60px] font-bold ">
          Award-winning Company seen and used by millions around the world.
        </h1>
        <p className="text-base font-normal  text-[#232536]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The Maker is a
          decentralized.
        </p>
      </div>
      <div className="flex justify-between">
        <Image src={"/company.png"} width={400} height={420} alt="imageS" />
        <Image src={"/company.png"} width={400} height={420} alt="imageS" />
        <Image src={"/company.png"} width={400} height={420} alt="imageS" />
      </div>
    </div>
  );
};

export default Company;
