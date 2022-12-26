import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/home.module.css";
import Navbar from '../components/Navbar'
import Mainbody from '../components/Mainbody'
import { footwear} from "../data/footwear";
import { bags} from "../data/bags";
import { watches} from "../data/watches";
import { gadgets } from "../data/gadgets";
import { clothing} from "../data/clothing";
import { purpleAddress } from '../src/purpleAddress'
import purpleABI from '../artifacts/contracts/Purple.sol/Purple.json'
import { saveContract, saveAccount } from '../components/reducers/action'
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ethers } from "ethers";

const Marketplace: any | NextPage = () => {

  const [connectSwitch, setconnectSwitch] = useState(false)
    const [account, setAccount] = useState("")

    const dispatch = useDispatch()

  useEffect(() => {
    let Window: any = window
    if (connectSwitch && Window.ethereum !== undefined) {
      setAccount("")
      dispatch(saveAccount(""))
      dispatch(saveContract([]))

      let provider = Window.ethereum
      let ethersProvider = new ethers.providers.Web3Provider(provider);

      Window.ethereum.request({ method: "eth_requestAccounts" })
        .then((accounts: any) => {
          setAccount(accounts[0])
          dispatch(saveAccount(accounts[0]))
          console.log(accounts[0])
        })
        .catch((err: any) => console.log(err))

      let signer = ethersProvider.getSigner()

      const purple: any | undefined = new ethers.Contract(purpleAddress, purpleABI.abi, signer)


      if (purple) {
        dispatch(saveContract(purple))
        // console.log(marketplace)
        // console.log(account)
      }

    } else if (connectSwitch && Window.ethereum == undefined) {
      alert("Please Download Metamask")
    }
    setconnectSwitch(false)
  }, [connectSwitch])



  function connectMetamask() {
    setconnectSwitch(true)
  }
 

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
