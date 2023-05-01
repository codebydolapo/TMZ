import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Landing from "../components/Landing";
import client from '../sanityConfig.js'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addAllProductData } from "../components/reducers/action";


const Home: any | NextPage = ({products}: any) => {

  console.log(products)

  // const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(
  //     addAllProductData(products)
  //   )
  // })

  return (
    <div className={`w-[100vw] h-[100vh]`}>
      <Head>
        <title>Timzzy</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Landing products = {products}/>
    </div>
  );

};

export default Home;

export async function getStaticProps() {
  const televisions = await client.fetch('*[_type == "product" && category->name == "Televisions"]{_id, name, images, description, price, rating}')
  const generators = await client.fetch('*[_type == "product" && category->name == "Generators"]{_id, name, images, description, price, rating}')
  const mobilePhones = await client.fetch('*[_type == "product" && category->name == "Mobile Phones"]{_id, name, images, description, price, rating}')
  const kitchenAppliances = await client.fetch('*[_type == "product" && category->name == "Kitchen Appliances"]{_id, name, images, description, price, rating}')
  const accessories = await client.fetch('*[_type == "product" && category->name == "Accessories"]{_id, name, images, description, price, rating}')
  let _all = []
  const all = [...televisions, ...generators, ...mobilePhones, ...kitchenAppliances, ...accessories]


  return {
    props: {
      products: {
        televisions,
        generators,
        mobilePhones,
        kitchenAppliances,
        accessories,
        all
      }
    },
  }
}

