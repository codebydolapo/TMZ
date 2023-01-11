import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from '../components/Navbar'
import Mainbody from '../components/Mainbody'
import { footwear} from "../data/footwear";
import { bags} from "../data/bags";
import { watches} from "../data/watches";
import { gadgets } from "../data/gadgets";
import { clothing} from "../data/clothing";
import { useState} from "react";


const Marketplace: any | NextPage = () => {

  const [connectSwitch, setconnectSwitch] = useState(false)
 

  return (
    <div className={`w-[100w] h-[100vh] flex flex-col items-center justify-end ${styles.homeMain}`}>
      <Head>
        <title>Purple Collections | Marketplace</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Navbar />
      <Mainbody
        watches={watches}
        bags={bags}
        clothing={clothing}
        footwear={footwear}
        gadgets={gadgets}
      />
      
    </div>
  );
};

export default Marketplace;
