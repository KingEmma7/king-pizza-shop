import { useState, useEffect } from "react";
import Image from "next/image";
import SizeSelection from "./SizeSelection";
import CrustSelection from "./CrustSelection";
import Topping from "./Topping";

const PizzaDetails = ({ pizza }) => {
  const [size, setSize] = useState("small");
  const [crust, setCrust] = useState("traditional");
  const [topping, setTopping] = useState([]);
  const [toppingPrice, setToppingPrice] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    size === "small"
      ? setPrice(parseFloat(pizza.priceSm + toppingPrice).toFixed(2))
      : size === "medium"
      ? setPrice(parseFloat(pizza.priceMd + toppingPrice).toFixed(2))
      : size === "large"
      ? setPrice(parseFloat(pizza.priceLg + toppingPrice).toFixed(2))
      : null;
  }, []);

  useEffect(() => {
    if (topping.length > 0) {
      const toppingPrice = topping.reduce((a, c) => a + c.price, 0);
      setToppingPrice(toppingPrice);
    } else setToppingPrice(0);
  }, [topping]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8">
      <div className="lg:flex-1 flex justify-center items-center">
        <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
          <Image width={450} height={450} src={pizza.image} alt="" priority={1} className="mx-auto relative"/>
        </div>
      </div>

      <div className="bg-secondary flex flex-col flex-1">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div className="flex-1 bg-white overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white pr-2">
            <div className="font-semibold">
              <h2 className="capitalize text-3xl mb-1">{pizza.name}</h2>
              <div className="bg-yellow-200 mb-6 text-lg font-medium">
                <span>
                  {size === "small"
                    ? "25 cm"
                    : size === "medium"
                    ? "30 cm"
                    : size === "large"
                    ? "35 cm"
                    : null}
                </span>
                <span>, {crust} crust</span>
              </div>
            </div>
            <SizeSelection pizza={pizza} size={size} setSize={setSize}  />
            <CrustSelection />

            <div>Choose Topping</div>
            <div>
              {pizza.toppings?.map((topping, index) => {
                return <Topping key={index} />;
              })}
            </div>
          </div>
        </div>

        <div className="h-full flex items-center px-2 lg:items-end">
          <button className="btn btn-lg gradient w-full flex justify-center gap-x-2">
            <div>
              <div>Add to cart for:</div>
              <div>GH {price}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
