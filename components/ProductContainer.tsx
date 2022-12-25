import styles from "../styles/productcontainer.module.css";
import Product from "./Product";
import { useSelector } from "react-redux";
// import {urlFor} from '../sanity'

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

  // category != [] ? console.log(category): null
  // name != '' ? console.log(name): null

  return (
    <div className={`h-[auto] w-full flex flex-col justify-start items-center`}>
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
              key={category._id}
              id={Math.floor(Math.random() * 10000000)}
            />
          );
        })}
      </div>
      
    </div>
  );
}

export default ProductContainer;
