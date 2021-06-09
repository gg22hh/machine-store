import Head from "next/head";
import { Header } from "../components";

const Home = () => {
  return (
    <div className="app">
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main main--home"></div>
    </div>
  );
};

export default Home;
