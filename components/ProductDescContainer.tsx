import Star from '@mui/icons-material/Star'
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import PortableText from "react-portable-text"
import { useSelector } from 'react-redux';
import { urlFor } from '../sanityConfig'
import {useEffect} from 'react'
import { useRouter } from 'next/router';
import businessName from '../utils/businessName'


function ProductDescContainer({product}: any) {
    console.log(product.name)

    const router = useRouter()

    const { asPath } = useRouter();

    const link = asPath.split('#')[0].split('?')[0];
    // const link = 'localhost:3000/product/product'

    // const expandedProduct = useSelector((state: any) => { return state.expandedProduct })

    return (
        <div className={`w-[100vw] h-[85vh] `}>
            <div className={`w-full h-[2rem] flex items-center justify-start px-4`}>
                <h1 className={`text-sm text-[#000000]`}>{`${businessName} ${link.replace(/\//g, ' > ')}`}</h1>
            </div>
            <div className={`w-full md:h-[82vh] flex md:flex-row xs:flex-col xs:h-auto`}>
                <div className={`md:w-[50%] h-full xs:w-full`}>
                    <div className={`h-[80%] w-full flex items-center justify-center overflow-hidden`}>
                        <img className={`h-full `} src={`${urlFor(product.images[0].asset._ref).url()}`} alt='' />
                    </div>
                    <div className={`h-[20%] w-full md:my-0 flex items-center justify-center xs:my-4`}>
                        {product.images.map((_image: any) => {
                            return <div className={`h-[4rem] w-[4rem] mx-2 overflow-hidden cursor-pointer`}>
                                <img className={`h-full `} src={`${urlFor(_image.asset._ref).url()}`} alt='' />
                            </div>
                        })}
                        {/* <div className={`h-[4rem] w-[4rem] mx-2 overflow-hidden`}>
                            <img className={`h-full `} src={`${urlFor(expandedProduct.images[1].asset._ref).url()}`} alt='' />
                        </div>
                        <div className={`h-[4rem] w-[4rem] mx-2 overflow-hidden`}>
                            <img className={`h-full `} src={`${urlFor(expandedProduct.images[2].asset._ref).url()}`} alt='' />
                        </div>
                        <div className={`h-[4rem] w-[4rem] mx-2 overflow-hidden`}>
                            <img className={`h-full `} src={`${urlFor(expandedProduct.images[3].asset._ref).url()}`} alt='' />
                        </div>
                        <div className={`h-[4rem] w-[4rem] mx-2 overflow-hidden`}>
                            <img className={`h-full `} src={`${urlFor(expandedProduct.images[4].asset._ref).url()}`} alt='' />
                        </div> */}
                    </div>
                </div>
                <div className={`md:w-[50%] h-full md:min-h-auto xs:w-full `}>
                    <div className={`w-full h-[4rem] md:my-0 flex items-center md:justify-start px-2 xs:justify-center xs:my-4`}>
                        <h1 className={`text-2xl font-[500]`}>{product.name}</h1>
                    </div>
                    <div className={`w-full h-[3rem] flex items-center md:justify-start px-2 xs:justify-center`}>
                        {[...Array(product.rating)].map((elementInArray, index) => (
                            <Star className={`text-[#ffbd27] h-[35px] mr-[1px]`} />))}
                    </div>
                    <div className={`w-full h-[4rem] flex items-end md:justify-start p-2 xs:justify-center`}>
                        <h1 className={`text-3xl font-[500] text-[#ff0000]`}>#{product.price.toLocaleString("en-US")}</h1>
                        <h1 className={`text-lg font-[500] line-through text-[#000000a4] ml-2`}>#{(product.price * 1.1).toLocaleString("en-US")}</h1>
                    </div>
                    <div className={`w-full h-[5rem] flex items-center md:justify-start px-2 my-2 xs:justify-around`}>
                        <div className={`w-[9rem] h-[3rem] flex`}>
                            <div className={`w-[3rem] h-[3rem] flex items-center justify-center border-2 border-grey`}>
                                <h1 className={`text-3xl font-[500] text-[#000000a4] cursor-pointer`}>+</h1>
                            </div>
                            <div className={`w-[3rem] h-[3rem] flex items-center justify-center border-2 border-grey`}>
                                <h1 className={`text-3xl font-[500]`}>1</h1>
                            </div>
                            <div className={`w-[3rem] h-[3rem] flex items-center justify-center border-2 border-grey`}>
                                <h1 className={`text-3xl font-[500] text-[#000000a4] cursor-pointer`}>-</h1>
                            </div>
                        </div>
                        <div className={`w-[9rem] h-[3rem] flex items-center justify-center mx-3 bg-[#149714] rounded-lg cursor-pointer`}>
                            <h1 className={`text-lg font-[500] text-white`}>Add To Cart</h1>
                        </div>
                    </div>
                    <div className={`w-full h-[2rem] flex items-center justify-start px-4`}>
                        {/* <h1 className={`text-sm text-[#000000]`}>Category: <b className={`text-[#0000ff]`}>{product.category.name}</b></h1> */}
                    </div>
                    <div className={`w-full min-h-[10rem] flex flex-col items-start justify-start p-2`}>
                        <h1 className={`my-2 font-bold`}>Description</h1>
                        <PortableText
                            content={product.description}
                        />
                    </div>
                </div>
            </div>
            <Newsletter />
        </div>
    );
}


export default ProductDescContainer;
