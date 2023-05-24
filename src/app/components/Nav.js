"use client";

import Image from "next/image";
import Link from "next/link";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Nav = () => {
  const { isOpen, setIsOpen, cart, itemAmount } = useContext(CartContext);

  return (
    <nav className="w-full absolute py-3 bg-pink-50/10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-y-8">
        <Link href="" className="max-w-[160px] lg:max-w-max">
          <span className="text-white font-bangers text-3xl mb-3">
            KING EMMA's
          </span>
          <Image src={"logo.svg"} height={180} width={180} alt="" />
        </Link>

        <div className="flex flex-gap-8 text-white items-center gap-x-5">
          <div className="flex gap-x-3 items-center">
            <Image src={"phone.svg"} height={42} width={42} alt="" />
            <div>
              <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">
                24/7 Delivery Service
              </div>
              <div className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide">
                +233 54 555 9070
              </div>
            </div>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden lg:flex"
          >
            <Image src={"bag.svg"} alt="" width={38} height={38} />
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
