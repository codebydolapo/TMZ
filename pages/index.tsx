import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";
import styles from "../styles/index.module.css";


const Landing: any | NextPage = () => {
  
  return (
    <div className={`w-[100vw] h-[100vh] ${styles.container}`}>
      <Head>
        <title>Purple Collections</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Login/>
    </div>
  );
  
};

export default Landing;

//main #8f329d
//purple black #2b072a
//lighter purple #a03cae