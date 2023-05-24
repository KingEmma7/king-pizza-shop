import { useContext,useState } from "react";
import {IoCloseOutline} from 'react-icons/io5'
import CheckoutDetails from "./CheckoutDetails";
import Modal from "react-modal";
import { CartContext } from "../context/CartContext";

const CartBottom = () => {

const {setIsOpen, cart} = useContext(CartContext)



  return (<> 
  {cart.length >=1 ? (
<div className="px-6 py-3 lg:py-6 mt-auto">
  <div className="flex items-center justify-between mb-6 text-lg font-semibold font-robotoCondensed">
    <div>Total:</div>
    <div>GH&#162;320</div>
  </div>

  <div className="flex flex-col gap-y-3">
    <button className="btn btn-lg gradient font-semibold flex justify-center">Checkout</button>
  </div>
</div>
  ) : (
<div className="absolute top-o w-full h-full flex justify-center items-center -z-10">
  <div className="font-semibold">Your cart is empty!</div>
</div>
  ) }
  
  </>)
};

export default CartBottom;
