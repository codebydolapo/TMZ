// import styles from "../styles/navbar.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { revealCheckout, removeContainer } from "./reducers/action";
import Link from "next/link";

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
          <img src={"/icons/purpleIcon.jpg"} className={`w-[2.5rem] h-[2.5rem] rounded-full mx-3`} alt="" />
          <p className = {`text-4xl text-white`}>
            <strong>Purple</strong>Collections
          </p>
        </div>
      </Link>
      <div className={`h-full w-[30%] flex justify-center items-center`}>
        <div
          className={`w-full h-full flex items-center justify-around px-3 cursor-pointer`}
          onChange={(e) => e.preventDefault()}
          onClick={combineDispatches}
        >
          <p className = {`text-white text-2xl`}>
            Cart: <span>{counter}</span>
          </p>
          <p className = {`text-white text-2xl`}>
            Total: <span>#{amount}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
