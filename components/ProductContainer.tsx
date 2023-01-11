import styles from "../styles/productcontainer.module.css";
import Product from "./Product";
// import {urlFor} from '../sanity'
import { purpleAddress } from '../src/purpleAddress'
import purpleABI from '../artifacts/contracts/Purple.sol/Purple.json'
import { saveContract, saveAccount } from '../components/reducers/action'
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
// import fs from "fs"
// import { clientAddress } from "../src/clientAddress"



interface Category {
  images: [{
    asset: {
      _ref: string
    }
  }];
  image: string;
  price: number;
  name: string;
  availability: boolean,
  description: string,
  _id: string
}

function ProductContainer() {

  const category = useSelector((state: any | unknown) => state.category);
  const name = useSelector((state: any | unknown) => state.categoryName);

  const [connectSwitch, setconnectSwitch] = useState(false)
  const [account, setAccount] = useState("")
  

  const dispatch = useDispatch()

  let _account: any = useSelector((state: any) => {return state.account})

  useEffect(() => {
    let Window: any = window
    if (connectSwitch && Window.ethereum !== undefined) {

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
      }

    } else if (connectSwitch && Window.ethereum == undefined) {
      alert("Please Download Metamask")
    }
    setconnectSwitch(false)
  }, [connectSwitch])

  // useEffect(()=>{
  //   let Window: any = window
  //   Window.ethereum.request({ method: "eth_requestAccounts" })
  //       .then((accounts: any) => {
  //         setAccount(accounts[0])
  //         dispatch(saveAccount(accounts[0]))
  //         console.log(accounts[0])
  //       })
  //       .catch((err: any) => console.log(err))
  // }, [])




  async function connectMetamask() {
    setconnectSwitch(true)
  }

  return (
    <div className={`h-[auto] w-full flex flex-col justify-start items-center relative`}>
      <h1 className={`w-full min-h-[2rem] text-xl font-bold text-black capitalize my-[1rem] px-[1rem]`}>{name}</h1>
      <div className={`h-[auto] w-full flex items-start justify-center flex-wrap`}>

        {category && category.map((category: Category) => {
          return (
            <Product
              image={category.image}
              price={category.price}
              title={category.name}
              availability={category.availability}
              description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit."}
              key={Math.floor(Math.random() * 10000000)}
              id={Math.floor(Math.random() * 10000000)}
            />
          );
        })}
      </div>
      {_account ?
        <div className={`md:w-[20rem] md:h-[60px] bg-[#1266e4] rounded-xl xs:h-[45px] flex justify-center items-around cursor-pointer fixed md:bottom-[5rem] md:left-[5rem] hover:scale-[110%] ease-in-out duration-[500ms] xs:bottom-[1rem] xs:left-[1rem] xs:w-[15rem]`} onClick={connectMetamask}>
          <h1 className={`text-white md:text-xl xs:text-sm flex justify-center items-center`}>{`${_account.slice(0, 6)}...${_account.slice(38, 42)}`}</h1>
        </div>
        :
        <div className={`md:w-[20rem] md:h-[60px] bg-[#1266e4] rounded-xl xs:h-[45px] flex justify-center items-around cursor-pointer fixed md:bottom-[5rem] md:left-[5rem] hover:scale-[110%] ease-in-out duration-[500ms] xs:bottom-[1rem] xs:left-[1rem] xs:w-[15rem]`} onClick={connectMetamask}>
          <h1 className={`text-white md:text-xl xs:text-sm flex justify-center items-center`}>Connect Wallet</h1>
        </div>
      }
    </div>
);
}

export default ProductContainer;

