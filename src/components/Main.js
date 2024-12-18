import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <div className="bg-[#232536]">
      <div className="containerM mx-auto text-white flex justify-between items-center pt-24 pb-8">
        <div className="w-[624px]">
          <h1 className="text-[56px] leading-[60px] font-bold ">
            Transform Your Idea Into Reality with Finsweet
          </h1>
          <p className="text-base font-normal my-8">
            The entire Finsweet team knows what's good with Webflow and you can
            too with 1 week and a good attitude.
          </p>
          <button className="px-[32px] py-5 bg-blue-800">Request Quote</button>
        </div>
        <Image src={"/image.png"} width={563} height={632} alt="iamge" />
      </div>
      <div className="containerM mx-auto flex justify-between items-center pb-10">
        <Image src={"/mainlogo.png"} width={187} height={106} alt="logoChas" />
        <Image src={"/mainlogo.png"} width={187} height={106} alt="logoChas" />
        <Image src={"/mainlogo.png"} width={187} height={106} alt="logoChas" />
        <Image src={"/mainlogo.png"} width={187} height={106} alt="logoChas" />
        <Image src={"/mainlogo.png"} width={187} height={106} alt="logoChas" />
        <Image src={"/mainlogo.png"} width={187} height={106} alt="logoChas" />
      </div>
    </div>
  );
};

export default Main;
