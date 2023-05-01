import styles from "../styles/login.module.css";
import Link from 'next/link'
import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";
import ProductDescContainer from "./ProductDescContainer";
import Navbar from "./Navbar";



function ProductDesc({product}: any) {

    return (
        <div className={`w-[100vw] h-[100vh] flex flex-col justify-between`}>
            <Navbar />
            <ProductDescContainer  product = {product}/>
        </div>
    );
}


export default ProductDesc;
