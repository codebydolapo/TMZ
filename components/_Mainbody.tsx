import styles from "../styles/mainbody.module.css";
import Subnav from "./_Subnav";
import ProductContainer from "./ProductContainer";
// import Checkout from "./Checkout";
import { useSelector } from "react-redux";

function Mainbody({
  watches,
  clothing,
  bags,
  stationery,
  footwear,
  gadgets,
}: any) {
  const containerState = useSelector(
    (state: { container: boolean }) => state.container
  );
  const checkoutState = useSelector(
    (state: { checkout: boolean }) => state.checkout
  );

  return (
    <div className={`w-[100w] h-[90vh] flrx flex-col items-center justify-center `}>
      {containerState && (
        <Subnav
          watches={watches}
          bags={bags}
          stationery={stationery}
          clothing={clothing}
          footwear={footwear}
          gadgets={gadgets}
        />
      )}
      <ProductContainer />
      {/* {checkoutState && <Checkout />} */}
    </div>
  );
}

export default Mainbody;
