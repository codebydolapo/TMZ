import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";
import styles from "../styles/index.module.css";
// import { purpleAddress } from '../src/purpleAddress'
// import purpleABI from '../artifacts/contracts/Purple.sol/Purple.json'
// import { saveContract, saveAccount } from '../components/reducers/action'
// import { useState, useEffect, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ethers } from "ethers";



const Landing: any | NextPage = () => {



  // const [connectSwitch, setconnectSwitch] = useState(false)
  // const [account, setAccount] = useState("")

  // const dispatch = useDispatch()

  
  // let __account: string = useSelector((state: any) => {
  //     return state.account
  // })

  // let _account = useMemo(()=>{return __account}, [__account])

  // useEffect(() => {
  //     let Window: any = window
  //     // console.log("hello")
  //   if (connectSwitch && Window.ethereum !== undefined && account == "") {
  //     // setAccount("")
  //     // _account = ""
  //     dispatch(saveAccount(""))
  //     dispatch(saveContract([]))

  //     let provider = Window.ethereum
  //     let ethersProvider = new ethers.providers.Web3Provider(provider);

  //     Window.ethereum.request({ method: "eth_requestAccounts" })
  //       .then((accounts: any) => {
  //         // _account = useMemo(() => { return accounts[0] }, [accounts])
  //         setAccount(accounts[0])
  //         dispatch(saveAccount(accounts[0]))
  //         console.log(accounts[0])

  //       })
  //       .catch((err: any) => console.log(err))

  //     let signer = ethersProvider.getSigner()

  //     const purple: any | undefined = new ethers.Contract(purpleAddress, purpleABI.abi, signer)


  //     if (purple) {
  //       dispatch(saveContract(purple))
  //       // console.log(marketplace)
  //       // console.log(account)
  //     }

  //   } else if (connectSwitch && Window.ethereum == undefined) {
  //     alert("Please Download Metamask")
  //   }
  //   setconnectSwitch(false)
  // }, [connectSwitch])



  // function connectMetamask() {
  //   setconnectSwitch(true)
  // }

  return (
    <div className={`w-[100vw] h-[100vh] ${styles.container}`}>
      <Head>
        <title>Purple Collections</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Login />
      {/* {account !== "" ?
        <div className={`w-[20rem] md:h-[60px] bg-[#1266e4] rounded-xl xs:h-[45px] flex justify-center items-around cursor-pointer absolute bottom-[5rem] left-[5rem] hover:scale-[110%] ease-in-out duration-[500ms]`} onClick={connectMetamask}>
          <h1 className={`text-white md:text-xl xs:text-sm flex justify-center items-center`}>{_account && `${_account.slice(0, 6)}...${_account.slice(38, 42)}`}</h1>
        </div>
        :
        <div className={`w-[20rem] md:h-[60px] bg-[#1266e4] rounded-xl xs:h-[45px] flex justify-center items-around cursor-pointer absolute bottom-[5rem] left-[5rem] hover:scale-[110%] ease-in-out duration-[500ms]`} onClick={connectMetamask}>
          <h1 className={`text-white md:text-xl xs:text-sm flex justify-center items-center`}>Connect Wallet</h1>
        </div>
      } */}
    </div>
  );

};

export default Landing;

//main #8f329d
//purple black #2b072a
//lighter purple #a03cae