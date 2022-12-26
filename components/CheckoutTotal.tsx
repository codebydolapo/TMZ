import styles from "../styles/checkouttotal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { revealContainer, removeCheckout, clearCart, clearTotal, scrubCart } from "./reducers/action";
import { link } from "fs";
import { useState } from "react";
import { ethers } from "ethers";

interface CartItem {
  image: string;
  price: number;
  title: string;
  availability: boolean;
  description: string;
  id: number;
}

function CheckoutTotal() {
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const amount = useSelector((state: any | unknown) => state.productAmount);
  const cart = useSelector((state: any | unknown) => state.checkoutItems);
  const dispatch = useDispatch();

  function combineDispatches() {
    dispatch(revealContainer());
    dispatch(removeCheckout());
  }

  function clearBasket() {
    dispatch(clearCart())
    dispatch(clearTotal())
    dispatch(scrubCart())
    dispatch(revealContainer());
    dispatch(removeCheckout());
  }

  //FUNCTION THAT COMPILES THE MESSAGE TO SEND ON WHATSAPP
  // function whatsappOrder(e: any) {
  //   e.preventDefault();
  //   const arrayOfNames: string[] = [];

  //   let combinedArrayOfNames = cart.map((item: CartItem) => {
  //     return [...arrayOfNames, item.title];
  //   });
  //   let _combinedArrayOfNames = combinedArrayOfNames.join(", and a ");
  //   let _sendMessage = `Hello Nasie! I would like to order a ${_combinedArrayOfNames}. My name is `;

  //   let sendMessage: string = _sendMessage.replace(/ /g, "%20");
  //   setMessage(sendMessage);
  //   console.log(message);
  //   setLink(`https://wa.me/2348180593602?text=${message}`);
  //   window.open(link, "_blank");
  // }

  const purple = useSelector((state: any)=>{
    return state.contract
  })

  const account = useSelector((state: {account: string})=>{
    return state.account
  })

  async function makePayment(){
    if(account){
      const transactionReceipt = await purple.acceptPayment({from: account, value: ethers.utils.parseUnits(amount, "ether")})
      console.log(transactionReceipt)
    }
    else{
      alert("Please connect your wallet!")
    }
  }

  return (
    <div className={`md:w-[32rem] md:h-[18rem] flex items-center justify-between flex-col text-left rounded-lg md:px-5 my-5 xs:w-[98vw] xs:h-[18rem] ${styles.checkoutTotal}`}>
      <div className={`w-full h-[5rem] border-2 border-white flex justify-center items-center`}>
        <h1 className={`md:text-5xl xs:text-3xl`}>Total: {Math.ceil(amount) / 100}</h1>
        <img src="/icons/ether.png" className={`md:w-[3rem] md:h-[3rem] xs:w-[2.5rem] xs:h-[2.5rem]`} />
      </div>
      <div className={`h-[13rem] w-full flex flex-col items-center justify-around`}>
        <button className={`md:w-[98%] h-[3rem] rounded-lg bg-[#e72ee4] xs:w-[95%] text-white ${styles.button1}`} onClick={clearBasket}>
          Clear Cart
        </button>
        <button className={`md:w-[98%] h-[3rem] rounded-lg bg-[#7e0c47] xs:w-[95%] text-white ${styles.button2}`} onClick={makePayment}>
          Pay With Ether
        </button>
        {/* <button className={`md:w-[98%] h-[3rem] rounded-lg bg-[#7e0c47] xs:w-[95%] text-white ${styles.button2}`} onClick={whatsappOrder}>
          Order On Whatsapp
        </button> */}
        <button className={`md:w-[98%] h-[3rem] rounded-lg bg-[#d90077] xs:w-[95%] text-white ${styles.button3}`} onClick={combineDispatches}>
          Back To Marketplace
        </button>
      </div>
    </div>
  );
}

export default CheckoutTotal;
