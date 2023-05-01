import styles from "../styles/login.module.css";
import Link from 'next/link'
import Newsletter from "./Newsletter";
import { XIcon } from "@heroicons/react/outline";

function CheckoutContainer() {


    return (
        <div className={`w-[100vw] h-[85vh] `}>

            <div className={`w-full min-h-[30rem]`}>
                <div className={`w-full min-h-[6rem] flex flex-col`}>
                    <div className={`w-full h-[6rem] flex items-center justify-between border-2 border-grey`}>
                        <div className={`h-full w-[6rem] flex items-center justify-center`}>
                            <img src={`/images/gadgets/bose.jpg`} className={`w-[5rem] h-[5rem]`} alt='' />
                        </div>
                        <div className={`h-full w-1/2 flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>Bose SoundLink Micro- Small Portable Bluetooth Speaker</h1>
                        </div>
                        <div className={`h-full w-[10rem] flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>1Pc (17,000)</h1>
                        </div>
                        <div className={`h-full w-[10rem] flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>#17,000</h1>
                        </div>
                        <div className={`h-full w-[5rem] flex items-center justify-start`}>
                            <XIcon className={`stroke-[1px] h-[25px] cursor-pointer`}/>
                        </div>
                    </div>
                </div>
                <div className={`w-full min-h-[6rem] flex flex-col`}>
                    <div className={`w-full h-[6rem] flex items-center justify-between border-2 border-grey`}>
                        <div className={`h-full w-[6rem] flex items-center justify-center`}>
                            <img src={`/images/gadgets/bose.jpg`} className={`w-[5rem] h-[5rem]`} alt='' />
                        </div>
                        <div className={`h-full w-1/2 flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>Bose SoundLink Micro- Small Portable Bluetooth Speaker</h1>
                        </div>
                        <div className={`h-full w-[10rem] flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>1Pc (17,000)</h1>
                        </div>
                        <div className={`h-full w-[10rem] flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>#17,000</h1>
                        </div>
                        <div className={`h-full w-[5rem] flex items-center justify-start`}>
                            <XIcon className={`stroke-[1px] h-[25px] cursor-pointer`}/>
                        </div>
                    </div>
                </div>
                <div className={`w-full min-h-[6rem] flex flex-col`}>
                    <div className={`w-full h-[6rem] flex items-center justify-between border-2 border-grey`}>
                        <div className={`h-full w-[6rem] flex items-center justify-center`}>
                            <img src={`/images/gadgets/bose.jpg`} className={`w-[5rem] h-[5rem]`} alt='' />
                        </div>
                        <div className={`h-full w-1/2 flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>Bose SoundLink Micro- Small Portable Bluetooth Speaker</h1>
                        </div>
                        <div className={`h-full w-[10rem] flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>1Pc (17,000)</h1>
                        </div>
                        <div className={`h-full w-[10rem] flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>#17,000</h1>
                        </div>
                        <div className={`h-full w-[5rem] flex items-center justify-start`}>
                            <XIcon className={`stroke-[1px] h-[25px] cursor-pointer`}/>
                        </div>
                    </div>
                </div>
                <div className={`w-full min-h-[6rem] flex flex-col`}>
                    <div className={`w-full h-[6rem] flex items-center justify-between border-2 border-grey`}>
                        <div className={`h-full w-[6rem] flex items-center justify-center`}>
                            <img src={`/images/gadgets/bose.jpg`} className={`w-[5rem] h-[5rem]`} alt='' />
                        </div>
                        <div className={`h-full w-1/2 flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>Bose SoundLink Micro- Small Portable Bluetooth Speaker</h1>
                        </div>
                        {/* <div className={`h-full w-[10rem] flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>1Pc (17,000)</h1>
                        </div> */}
                        <div className={`h-full w-[10rem] flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>#17,000</h1>
                        </div>
                        <div className={`h-full w-[5rem] flex items-center justify-start`}>
                            <XIcon className={`stroke-[1px] h-[25px] cursor-pointer`}/>
                        </div>
                    </div>
                </div>
                <div className={`w-full h-[6rem] flex`}>
                    <div className={`w-[50%] h-full flex items-center justify-start`}>
                        <h1 className={`text-xl font-bold`}>Total: <b className={`text-[red] text-3xl`}>17,000</b> <b className={`font-normal line-through text-lg`}>{17000 * 1.1}</b></h1>
                    </div>
                    <div className={`w-[50%] h-full flex items-center justify-end`}>
                        <button className={`mx-4 bg-[green] w-[15rem] h-[3rem] rounded-lg text-white`}>Order On Whatsapp</button>
                        <button className={`mx-4 bg-[#ffbd27] w-[15rem] h-[3rem] rounded-lg text-black`}>Clear Cart</button>
                    </div>
                </div>
            </div>



            <Newsletter />

            <div className={`w-full h-[5rem] mb-[3rem] flex`}>
                <div className={`w-[25%] h-full flex items-center justify-start`}>
                    <img src='/icons/logo.jpg' alt='' className={`w-[40px] h-[40px] rounded-full mx-2`} />
                    <h1 className={`font-bold text-4xl text-[#041e42]`}>Lorem</h1>
                </div>
            </div>

        </div>
    );
}


export default CheckoutContainer;
