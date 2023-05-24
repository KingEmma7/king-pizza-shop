import { useContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import CheckoutDetails from "./CheckoutDetails";
import Modal from "react-modal";
import { CartContext } from "../context/CartContext";

const modalStyles = {
  overlay: {
    backgroundColor: "rgb(0,0,0,0.5",
  },
};

Modal.setAppElement('body')

const CartBottom = () => {
  const { setIsOpen, cart, cartTotal } = useContext(CartContext);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (


    <>
      {cart.length >= 1 ? (
        <div className="px-6 py-3 lg:py-6 mt-auto">
          <div className="flex items-center justify-between mb-6 text-lg font-semibold font-robotoCondensed">
            <div>Total:</div>
            <div>GH&#162;{parseFloat(cartTotal).toFixed(2)}</div>
          </div>

          <div className="flex flex-col gap-y-3">
            <button
              onClick={() => {
                setIsOpen(false), openModal(true);
              }}
              className="btn btn-lg gradient font-semibold flex justify-center"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-o w-full h-full flex justify-center items-center -z-10">
          <div className="font-semibold">Your cart is empty!</div>
        </div>
      )}

      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Checkout Modal"
          className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        >
          <div onClick={closeModal} className="absolute top-2 right-2 z-30 hover:scale-110 duration-300 transition-all cursor-pointer">
            <IoCloseOutline className="text-4xl text-orange"/>
            </div>
            
          <CheckoutDetails setModal={setModal}/>
        </Modal>
      )}
    </>
  );
};

export default CartBottom;
