import styles from "../styles/login.module.css";
import UniversalLogo from "./_UniversalLogo";
import Link from 'next/link'
import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";
import CheckoutContainer from "./CheckoutContainer";
import Navbar from "./Navbar";



function CheckoutBody() {

  return (
    <div className={`w-[100vw] h-[100vh] flex flex-col justify-between`}>
      <Navbar/>
      <CheckoutContainer />
    </div>
  );
}


export default CheckoutBody;
