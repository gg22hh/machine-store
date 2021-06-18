import Head from "next/head";
import { Header } from "../components";

const Products = () => {
  return (
    <div className="app">
      <Head>
        <title>Products</title>
        <meta name="description" content="Products Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main main--home"></div>
    </div>
  );
};

export default Products;
