import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFE6D2] p-5">
      <div className="containerM mx-auto  flex justify-between items-center text-white">
        <Image src={"/Logo.svg"} width={122} height={25} alt="1234" />
        <ul>
          <li className="flex gap-5 text-[#232536]">
            <Link
              href={
                "https://www.facebook.com/profile.php?id=61556696439341&locale=ru_RU"
              }
            >
              <FaFacebook />
            </Link>
            <Link href={"https://www.instagram.com/jumadullayev__"}>
              <FaInstagram />
            </Link>
            <Link href={"https://x.com/jumaduullayev"}>
              <FaTwitter />
            </Link>
            <Link href={"https://github.com/jumadullayev-sunnatilla"}>
              <FaGithub />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
