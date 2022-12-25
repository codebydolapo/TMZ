import styles from "../styles/product.module.css";
import { useDispatch } from "react-redux";
import {
  incrementProductCount,
  incrementProductAmount,
  addCheckoutItem
} from "./reducers/action";
//import PortableText from "react-portable-text";

interface Props {
  image: string;
  price: number;
  title: string;
  availability: boolean;
  description: string;
  id: number
}

function Product({ image, price, title, availability, description, id }: Props) {
  //makes sure the text doesn't overflow and cause problems
  function truncateString(text: string, n: number) {
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  }

  const dispatch = useDispatch();

  function combinedDispatches() {
    dispatch(incrementProductCount());
    dispatch(incrementProductAmount(price ? price : 0));
    dispatch(
      addCheckoutItem({
        image,
        price,
        id,
        title,
        description: truncateString(description, 35),
        availability
      })
    );
  }

  return (
    <div className={`max-w-[15.5rem] min-w-[15.5rem] max-h-[25rem] min-h-[25rem] rounded-lg mx-2 my-2 flex flex-col justify-between items-center cursor-pointer ${styles.productMain}`} onClick={combinedDispatches}>
      <img
        src={image ? image : "/images/imageError.webp"}
        alt=""
        className={`w-full max-h-[15.5rem] min-h-[15.5rem] rounded-[inherit] rounded-b-none `}
      />
      <div className={`w-full min-h-[10rem] max-h-[10rem] flex flex-col justify-between items-center p-2 `}>
        <div className={`w-full max-h-[5rem] min-h-[5rem] overflow-hidden text-wrap `}>
          <p className={`text-base capitalize font-bold my-1`}>
            {title ? truncateString(title, 20) : "No-Name"}
          </p>
          <p className={`text-xs overflow-hidden `}>{truncateString(description, 35)}</p>
        </div>
        {availability && (
          <div className={`w-full h-[2.5rem] flex flex-col items-center justify-center`}>
            <p className={`text-xs w-[90%] h-full text-center rounded-[5px] flex items-center justify-center text-white bg-[#8f329d] capitalize`}>available</p>
          </div>
        )}
        {!availability && (
          <div className={`w-full h-[2.5rem] flex flex-col items-center justify-center`}>
            <p className={`text-xs w-[90%] h-full text-center rounded-[5px] flex items-center justify-center text-white bg-[#fd0d0d] capitalize`}>unavailable</p>
          </div>
        )}
        <div className={`w-full h-[2.5rem] flex items-center justify-center`}>
          <p className={`text-base font-bold`}>Price:&nbsp;</p>
          <p className={`text-base font-bold`}>{price ? price : + "0.000"}</p>
          <img src = "/icons/ether.png" className = {`w-[1.5rem] h-[1.5rem]`}/>
        </div>
      </div>
    </div>
  );
}

export default Product;
