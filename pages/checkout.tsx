import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import CheckoutCard from '../components/CheckoutCard'
import { useSelector, useDispatch } from 'react-redux'
import CheckoutTotal from '../components/CheckoutTotal'
import Navbar from "../components/Navbar";




const Checkout: any | NextPage = () => {

    interface CartItem {
        map(arg0: (item: CartItem) => JSX.Element): import("react").ReactNode
        image: string,
        price: number;
        title: string;
        availability: boolean;
        description: string,
        id: number;
    }





    const cart = useSelector((state: { checkoutItems: CartItem }) => state.checkoutItems)

    return (
        <div className={`w-[100vw] h-[100vh] pt-[60px] ${styles.container}`}>
            <Head>
                <title>Purple Collections | Checkout</title>
                <link rel="icon" href="/images/logo.jpg" />
            </Head>
            <Navbar/>
            <div className={`h-full w-[100vw] flex flex-col items-center overflow-y-scroll`}>
                <div className={`h-auto w-[100vw] flex items-start justify-start flex-wrap `}>
                    {
                        cart.map((item: CartItem) => {
                            return (
                                <CheckoutCard
                                    image={item.image}
                                    price={item.price}
                                    title={item.title}
                                    availability={item.availability}
                                    description={item.description}
                                    key={item.id}
                                    id={item.id}
                                />
                            );
                        })
                    }
                </div>
                <div className={`w-full h-auto flex items-center justify-center my-[2.5rem]`}>
                    <CheckoutTotal />
                </div>
            </div>
        </div>

    );

}
export default Checkout;
//main #8f329d
//purple black #2b072a
//lighter purple #a03cae