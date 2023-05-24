import Image from "next/image";
import {BiPlus, BiMinus} from 'react-icons/bi'
import {IoCloseOutline} from 'react-icons/io5'


const CartItem = ({pizza}) => {
  return <div >
    
    <div>
      <div>
        <Image src={pizza.image} width={90} height={90} alt=""/>
      </div>

      <div>
        <div>{pizza.name}</div>
        <div>
          <div>{pizza.crust} crust</div>
          <div>{pizza.size} size</div>

          <div className="flex items-center gap-x-1 ">
            <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full">
              <BiMinus/></div>
            <div>1</div>
            <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full">
              <BiPlus/></div>
          </div>
        </div>
      </div>

    </div>


  </div>;
};

export default CartItem;
