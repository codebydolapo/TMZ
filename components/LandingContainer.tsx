import styles from "../styles/login.module.css";
import Link from 'next/link'
import TvOutline from '@mui/icons-material/Tv'
import StarOutline from '@mui/icons-material/StarOutline'
import Star from '@mui/icons-material/Star'
import PhoneAndroid from '@mui/icons-material/PhoneAndroid'
import Power from '@mui/icons-material/Power'
import AcUnit from '@mui/icons-material/AcUnit'
import SurroundSound from '@mui/icons-material/SurroundSound'
import Devices from '@mui/icons-material/Devices'
import Kitchen from '@mui/icons-material/Kitchen'
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import { productArray } from './productArray'
import Newsletter from "./Newsletter";
import bannerData from './bannerData'
import { useSelector, useDispatch } from "react-redux";
import businessName from "../utils/businessName";


function LandingContainer({products}: any) {

    // const dispatch = useDispatch()

    // const allProductData = useSelector((state: any) => { return state.allProductData })

    

    return (
        <div className={`w-[100vw] h-[85vh] `}>
            <div className={`h-[4rem] w-full my-2 px-2 flex items-center overflow-x-scroll`}>
                <div className={`h-[3rem] md:min-w-[11rem] bg-[#0000001f] flex items-center justify-center rounded-lg md:mx-2 cursor-pointer xs:min-w-[10rem] xs:mx-1`}>
                    {/* <StarOutline className={`stroke-[1px] text-[#ffbd27] h-[35px] mx-2`} /> */}
                    <Star className={`stroke-[1px] text-[#ffbd27] h-[35px] mx-2`} />
                    <h1 className={`text-sm `}>All</h1>
                </div>
                <div className={`h-[3rem] md:min-w-[11rem] bg-[#0000001f] flex items-center justify-center rounded-lg md:mx-2 cursor-pointer xs:min-w-[10rem] xs:mx-1`}>
                    <TvOutline className={`stroke-[1px] text-[#000000b0] h-[35px] mx-2`} />
                    <h1 className={`md:text-base xs:text-sm`}>Televisions</h1>
                </div>
                <div className={`h-[3rem] md:min-w-[11rem] bg-[#0000001f] flex items-center justify-center rounded-lg md:mx-2 cursor-pointer xs:min-w-[10rem] xs:mx-1`}>
                    <SurroundSound className={`stroke-[1px] text-[#000000b0] h-[35px] mx-2`} />
                    <h1 className={`md:text-base xs:text-sm`}>Home Theaters</h1>
                </div>
                <div className={`h-[3rem] md:min-w-[11rem] bg-[#0000001f] flex items-center justify-center rounded-lg md:mx-2 cursor-pointer xs:min-w-[10rem] xs:mx-1`}>
                    <PhoneAndroid className={`stroke-[1px] text-[#000000b0] h-[35px] mx-2`} />
                    <h1 className={`md:text-base xs:text-sm`}>Mobile Phones</h1>
                </div>
                <div className={`h-[3rem] md:min-w-[11rem] bg-[#0000001f] flex items-center justify-center rounded-lg md:mx-2 cursor-pointer xs:min-w-[10rem] xs:mx-1`}>
                    <Power className={`stroke-[1px] text-[#000000b0] h-[35px] mx-2`} />
                    <h1 className={`md:text-base xs:text-sm`}>Generators</h1>
                </div>
                <div className={`h-[3rem] md:min-w-[11rem] bg-[#0000001f] flex items-center justify-center rounded-lg md:mx-2 cursor-pointer xs:min-w-[10rem] xs:mx-1`}>
                    <AcUnit className={`stroke-[1px] text-[#000000b0] h-[35px] mx-2`} />
                    <h1 className={`md:text-base xs:text-sm`}>Fridges</h1>
                </div>
                <div className={`h-[3rem] md:min-w-[11rem] bg-[#0000001f] flex items-center justify-center rounded-lg md:mx-2 cursor-pointer xs:min-w-[10rem] xs:mx-1`}>
                    <Devices className={`stroke-[1px] text-[#000000b0] h-[35px] mx-2`} />
                    <h1 className={`md:text-base xs:text-sm`}>Accessories</h1>
                </div>
                <div className={`h-[3rem] md:min-w-[11rem] bg-[#0000001f] flex items-center justify-center rounded-lg md:mx-2 cursor-pointer xs:min-w-[10rem] xs:mx-1`}>
                    <Kitchen className={`stroke-[1px] text-[#000000b0] h-[35px] mx-2`} />
                    <h1 className={`md:text-base xs:text-sm`}>Kitchen Appliances</h1>
                </div>
            </div>

            <div className={`w-full h-[15rem] flex items-center md:justify-around overflow-x-scroll`}>
                {bannerData.map(({ hype, name, percentage, image }) => {
                    return <Banner
                        hype={hype}
                        name={name}
                        percentage={percentage}
                        image={image}
                        key = {hype}
                    />
                })}
            </div>
                <div className={`w-full min-h-[40rem] flex flex-wrap justify-center items-start`}>
                    {products.all.map(({ name, rating, category, price, images, description, _id }: any) => {
                        return <ProductCard
                            name={name}
                            rating={rating}
                            category={category}
                            price={price}
                            images={images}
                            description = {description}
                            key = {_id}
                            _id = {_id}
                        />
                        //images[0].asset._ref
                    })}
                </div>

            <Newsletter />

            <div className={`w-full h-[5rem] mb-[3rem] flex`}>
                <div className={`w-[25%] h-full flex items-center justify-start`}>
                    <img src='/icons/logo.jpg' alt='' className={`w-[40px] h-[40px] rounded-full mx-2`} />
                    <h1 className={`font-bold text-4xl text-[#041e42]`}>{businessName}</h1>
                </div>
            </div>

        </div>
    );
}


export default LandingContainer;
