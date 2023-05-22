'use client'
import { useState } from "react";
import Image from "next/image";
import ReactModal from "react-modal";
import PizzaDetails from "./PizzaDetails";
import { IoCloseOutline} from 'react-icons/io5'

const Pizza = ({pizza}) => {
  return <div className="group py-2 bg-blue-200 px-3 xl:py-4 xl:px-2 rounded-r-xl">

  <Image width={270} height={270} src={pizza.image} alt="" priority={1} />

  </div>;
};

export default Pizza;
