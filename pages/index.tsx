import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";
import styles from "../styles/index.module.css";
import { purpleAddress } from '../src/purpleAddress'
import purpleABI from '../artifacts/contracts/Purple.sol/Purple.json'
import { saveContract, saveAccount } from '../components/reducers/action'
import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { ethers } from "ethers";



const Landing: any | NextPage = () => {

  

  const [connectSwitch, setconnectSwitch] = useState(false)
  const [account, setAccount] = useState("")

  const dispatch = useDispatch()

  let _account

  useEffect(() => {
    let Window: any = window
    if (connectSwitch && Window.ethereum !== undefined) {
      // setAccount("")
      _account = ""
      dispatch(saveAccount(""))
      dispatch(saveContract([]))

      let provider = Window.ethereum
      let ethersProvider = new ethers.providers.Web3Provider(provider);

      Window.ethereum.request({ method: "eth_requestAccounts" })
        .then((accounts: any) => {
          _account = useMemo(()=> {return accounts[0]}, [accounts])
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
    <div className={`w-[100vw] h-[100vh] reative ${styles.container}`}>
      <Head>
        <title>Purple Collections</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Login />
      {_account !== "" ?
        <div className={`w-[15rem] md:h-[50px] bg-[#1266e4] rounded-lg xs:h-[45px] flex justify-center items-around cursor-pointer absolute bottom-[3rem] left-5`} onClick={connectMetamask}>
          <h1 className={`text-white lg:text-base xs:text-sm flex justify-center items-center`}>{`${account.slice(0, 6)}...${account.slice(38, 42)}`}</h1>
        </div>
        :
        <div className={`w-[12rem] md:h-[45px] bg-[#1266e4] rounded-lg xs:h-[45px] xs:w-[100%] flex justify-center items-around cursor-pointer`} onClick={connectMetamask}>
          <h1 className={`text-white lg:text-base xs:text-sm flex justify-center items-center`}>Connect Wallet</h1>
        </div>
      }
    </div>
  );

};

export default Landing;

//main #8f329d
//purple black #2b072a
//lighter purple #a03cae