import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import businessName from '../utils/businessName'


function Navbar() {

    const total = 17000
    return (
        <div className={`h-[3.5rem] w-full flex items-center md:justify-center my-2 xs:justify-between`}>
            <div className={`md:w-[25%] h-full flex items-center justify-center xs:w-[50%]`}>
                <img src='/icons/logo.jpg' alt='' className={`w-[40px] h-[40px] rounded-full mx-2`} />
                <h1 className={`font-bold text-4xl text-[#041e42]`}>{businessName}</h1>
            </div>
            <div className={`md:w-[50%] h-full flex items-center justify-around border-[#0000002d] md:border-[1px] rounded-lg xs:w-[0rem]`}>
                {/* <div className={`w-[15%] h-full flex items-center justify-center`}>
                    <h1 className={`font-bold text-base text-[#00000098]`}>All</h1>
                </div>
                <div className={`w-[70%] h-full border-[#0000002d] border-[1px] flex`}>
                    <div className={`w-[15%] h-full flex items-center justify-center`}>
                        <SearchIcon className={`stroke-[1px] text-[#00000071] h-[35px]`} />
                    </div>
                    <input type='text' className={`w-[85%] h-full border-0 outline-0 border-black`} placeholder='Search for your favourite product' />
                </div>
                <div className={`w-[15%] h-full border-[#0000002d] border-[1px] bg-[#041e42] flex items-center justify-center rounded-r-lg`}>
                    <h1 className={`font-bold text-base text-white`}>Search</h1>
                </div> */}
            </div>
            <div className={`md:w-[25%] h-full flex items-center justify-end md:px-3 xs:w-[50%]`}>
                <Link href='/checkout'>
                    <div className={`w-[3rem] h-full mx-2 flex items-center justify-center relative cursor-pointer `}>
                        <ShoppingCartIcon className={`stroke-[1px] h-[35px] `} />
                        <div className={`absolute w-[1.1rem] h-[1.1rem] bg-[#ffbd27] rounded-full top-0 right-0 flex items-center justify-center`}>
                            <h1 className={`text-black text-sm font-bold`}>4</h1>
                        </div>
                    </div>
                </Link>
                <Link href='/checkout'>
                    <div className={`md:w-[7rem] h-full md:mx-2 flex flex-col items-center md:justify-center cursor-pointer xs:justify-end xs:w-[5rem]`}>
                        <div className={`h-[50%] w-full flex items-center md:justify-start md:px-0 xs:justify-end xs:px-2`}>
                            <h1 className={`text-sm text-[#000000de]`}>Total</h1>
                        </div>
                        <div className={`h-[50%] w-full flex items-center md:justify-start md:px-0 xs:justify-end xs:px-2`}>
                            <h1 className={` font-bold text-lg text-[#000000de]`}>#{total.toLocaleString("en-US")}</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar