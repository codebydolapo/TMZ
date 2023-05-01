import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import ProductDesc from "../../components/ProductDesc";
import client from "../../sanityConfig";

const Product: any | NextPage = ({ product, params }: any) => {

  console.log(params)
  console.log(product)

  return (
    <div className={`w-[100vw] h-[100vh]`}>
      <Head>
        <title>Timzzy | Product</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <ProductDesc product={product} />
    </div>
  );

};

export default Product;

export async function getStaticPaths() {

  const query = `*[_type == "product"]{_id}`

  const products = await client.fetch(query)

  const paths = products.map(({_id}: any) => {
    return {
      params: { id: _id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {


  // const query = '*[_type == "product"]'
  const query = `*[_type == "product" && _id == $id]{_id, name, images, description, price, rating}`

  const _product = await client.fetch(query, {
    id: params.id.toString()
  })

  if (!_product) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        product: _product[0],
        params
      },
    }
  }
}




