import Star from '@mui/icons-material/Star'
import ShoppingCartOutline from '@mui/icons-material/ShoppingCartOutlined'
import truncateString from '../utils/truncateString.js'
import { urlFor } from '../sanityConfig'
import { expandProductView, incrementTotalAmount, incrementProductCount } from "./reducers/action";
import { useDispatch } from 'react-redux';
import Link from 'next/link.js';




function Product({ name, rating, category, price, images, description, _id }: any) {

    const dispatch = useDispatch()

    function handleProductClick() {
        dispatch(expandProductView(
            { name, rating, category, price, images, description }
        ))
    }

    function handleAddToCart() {
        dispatch(incrementTotalAmount(price))
        dispatch(incrementProductCount())
    }

    return (
        <Link href={`/product/${_id}`}>

            <div className={`md:w-[16rem] h-[28rem] md:mx-2 my-4 cursor-pointer xs:w-[48vw]`} onClick={handleProductClick}>
                <div className={`w-full md:h-[16rem] relative overflow-hidden xs:h-[48vw]`}>
                    <img className={`w-full `} src={urlFor(images[0].asset._ref).url()} alt='' />
                    {rating == 5 && <div className={`w-[9rem] h-[1.5rem] bg-[#0d800d] rounded-lg absolute top-2 left-2 flex items-center justify-center`}>
                        <h1 className={`text-white text-sm font-bold`}>Best Seller</h1>
                    </div>}
                    {rating == 4 && <div className={`w-[9rem] h-[1.5rem] bg-[#ffbd27] rounded-lg absolute top-2 left-2 flex items-center justify-center`}>
                        <h1 className={`text-white text-sm font-bold`}>Top Deal</h1>
                    </div>}
                </div>
                <div className={`w-full md:h-[12rem] xs:h-[43%]`}>
                    <div className={`w-full h-[25%]`}>
                        <h1 className={`text-sm font-[500]`}>{truncateString(name, 40)}</h1>
                    </div>
                    <div className={`w-full h-[20%] flex items-center justify-start`}>
                        {[...Array(rating)].map((elementInArray, index) => (
                            <Star className={`text-[#ffbd27] h-[35px] mr-[1px]`} key = {index} />))}
                    </div>
                    <div className={`w-full h-[55%] flex`}>
                        <div className={`w-[80%] h-full flex flex-col items-start justify-center`}>
                            <h1 className={`text-sm`}>#<b className={`line-through font-normal`}>{(price * 1.1).toLocaleString("en-US")}</b></h1>
                            <h1 className={`text-xl font-[600] text-[#ff0000]`}>#{price.toLocaleString("en-US")}</h1>
                        </div>
                        <div className={`w-[20%] h-full flex items-center justify-center`} onClick={handleAddToCart}>
                            <div className={`w-full h-[50px] flex items-center justify-center border-[1px] border-grey rounded-lg`}>
                                <ShoppingCartOutline className={`stroke-[1px] text-[#03fa0fb0] w-full`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Product