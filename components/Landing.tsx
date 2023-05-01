import styles from "../styles/login.module.css";
import UniversalLogo from "./_UniversalLogo";
import Link from 'next/link'
import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";
import LandingContainer from "./LandingContainer";
import Navbar from "./Navbar";



function Landing({products}: any) {

  return (
    <div className={`w-[100vw] h-[100vh] flex flex-col justify-between`}>
      <Navbar/>
      <LandingContainer products = {products}/>
    </div>
  );
}


export default Landing;
