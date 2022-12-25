import styles from '../styles/checkout.module.css'
import CheckoutCard from './CheckoutCard'
import {useSelector, useDispatch} from 'react-redux'
import CheckoutTotal from './CheckoutTotal'


interface CartItem {
  map(arg0: (item: CartItem) => JSX.Element): import("react").ReactNode
  image: string,
  price: number;
  title: string;
  availability: boolean;
  description:string,
  id: number;
}


function Checkout(){


    const cart = useSelector((state: {checkoutItems: CartItem}) => state.checkoutItems)

    return(
        <div className = {`h-auto w-full flex items-start justify-start flex-wrap text-left`}>
            {
                cart.map((item: CartItem)=>{
                    return (
                      <CheckoutCard
                        image={item.image}
                        price={item.price}
                        title={item.title}
                        availability={item.availability}
                        description={item.description}
                        key={item.id}
                        id={item.id}
                      />
                    );
                })
            }
            <div className = {`w-full h-auto flex items-center justify-center my-[2.5rem]`}>
                <CheckoutTotal/>
            </div>
        </div>
    )
}

export default Checkout;