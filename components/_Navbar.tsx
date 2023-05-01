// import styles from "../styles/navbar.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { revealCheckout, removeContainer } from "./reducers/action";
import Link from "next/link";
import { useMemo } from "react";
import { ShoppingCartIcon, CashIcon } from "@heroicons/react/outline";

function Navbar() {
  const counter = useSelector((state: any | unknown) => state.productCounter);
  const amount = useSelector((state: any | unknown) => state.productAmount);

  const dispatch = useDispatch();

  function combineDispatches() {
    dispatch(revealCheckout());
    dispatch(removeContainer());
  }

  return (
    <div className={`w-[100vw] bg-black h-[4rem] flex items-center justify-between fixed z-[5] top-0`}>
      <Link href="/">
        <div className={`h-[50px] w-[50%] flex items-center justify-start`}>
          <img src={"/icons/purpleIcon.jpg"} className={`md:w-[2.5rem] md:h-[2.5rem] rounded-full md:mx-2 xs:w-[2rem] xs:h-[2rem] xs:mx-[5px]`} alt="" />
          <p className={`md:text-4xl text-white xs:text-2xl`}>
            <strong>Purple</strong>Collections
          </p>
        </div>
      </Link>
      <Link href="/checkout">

        <div className={`h-full md:w-[30%] flex justify-center items-center xs:w-[40%]`}>
          <div
            className={`w-full h-full flex md:flex-row md:items-center justify-around md:px-3 cursor-pointer xs:flex-col xs:items-end  `}
          >
            {/* <div
            className={`w-full h-full flex md:flex-row md:items-center justify-around md:px-3 cursor-pointer xs:flex-col xs:items-end  `}
            onChange={(e) => e.preventDefault()}
            onClick={combineDispatches}
          > */}
            <div className={`h-full md:w-[50%] flex items-center md:justify-center xs:w-[100%] xs:justify-end`}>
              <div className={`text-white md:text-xl xs:text-sm flex items-center justify-center`}>
                <ShoppingCartIcon className = {`md:w-[2.5rem] xs:w-[1.8rem] stroke-[1px]`}/>
                <span>: {counter}</span>
              </div>
            </div>
            <div className={`h-full md:w-[50%] flex items-center md:justify-center xs:w-[100%] xs:justify-end`}>
              <div className={`text-white md:text-xl xs:text-sm flex items-center justify-center`}>
              <CashIcon className = {`md:w-[2.5rem] xs:w-[1.8rem] stroke-[1px]`}/>
                 <span>: {Math.ceil(amount) / 100}</span>
              </div>
              <img src="/icons/ether.png" className={`md:w-[2rem] md:h-[2rem] xs:w-[0rem] xs:h-[0rem]`} />
              {/* <img src="/icons/ether.png" className={`md:w-[2rem] md:h-[2rem] xs:w-[1.3rem] xs:h-[1.3rem]`} /> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
