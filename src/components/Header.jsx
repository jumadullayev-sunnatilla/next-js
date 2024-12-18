import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#232536] p-5">
      <div className="containerM mx-auto  flex justify-between items-center text-white">
        <Image src={"/logo.png"} width={122} height={25} alt="1234" />
        <ul>
          <li className="flex gap-5">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
