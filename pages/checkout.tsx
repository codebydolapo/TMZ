import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Landing from "../components/Landing";
import CheckoutBody from "../components/CheckoutBody";

const Checkout: any | NextPage = () => {

  return (
    <div className={`w-[100vw] h-[100vh]`}>
      <Head>
        <title>Timzzy</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <CheckoutBody/>
    </div>
  );

};

export default Checkout;

