import styles from '../styles/checkoutcard.module.css'
import {useDispatch} from 'react-redux'
import {removeCheckoutItem, decrementProductAmount, decrementProductCount} from './reducers/action'


interface Props {
  image: string;
  price: number;
  title: string;
  availability: boolean;
  description: string;
  id: number;
}

function CheckoutCard({image, title, availability, description, price, id}: Props){
  //makes sure the text doesn't overflow and cause problems
  function truncateString(text: string, n: number) {
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  }

  const dispatch = useDispatch()

  function combinedDispatches(){
    dispatch(removeCheckoutItem({id}))
    dispatch(decrementProductCount())
    dispatch(decrementProductAmount(price))
  }

  return (
    <div className={`max-w-[14rem] min-w-[14rem] max-h-[23rem] min-h-[23rem] rounded-lg mx-5 my-[auto] flex flex-col justify-between items-center py-2 ${styles.productMain}`} onClick = {combinedDispatches}>
      <img
        src={image ? image : "/images/imageError.webp"}
        alt=""
        className={`w-full max-h-[14rem] min-h-[14rem] rounded-[inherit] rounded-b-none`}
      />
      <div className={`w-full min-h-[7.5rem] max-h-[7.5rem] flex flex-col justify-between items-center p-2`}>
        <div className={`w-full max-h-1/2 min-h-1/2 overflow-hidden text-wrap`}>
          <p className={`text-sm font-bold`}>
            {title ? truncateString(title, 20) : "No-Name"}
          </p>
          <p className={`text-xs overflow-hidden`}>{truncateString(description, 35)}</p>
        </div>
        {availability && (
          <div className={`w-full h-[25%] flex flex-col items-center justify-center`}>
            <p className={`text-xs w-[70%] h-full text-center rounded-lg text-white bg-[#27f11c] capitalize`}>available</p>
          </div>
        )}
        {!availability && (
          <div className={`w-full h-[25%] flex flex-col items-center justify-center`}>
            <p className={`text-xs w-[70%] h-full text-center rounded-lg text-white bg-[#fd0d0d] capitalize`}>unavailable</p>
          </div>
        )}
        <div className={`w-full h-[20%] flex items-center justify-around`}>
          <p className={`text-base font-bold px-5`}>#{price ? price : "0000"}</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard