import Head from "next/head";
import { Header, MainTopContent, Points } from "../components";

const Home = () => {
  return (
    <div className="app">
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main main--home">
        <MainTopContent />
        <Points />
      </div>
    </div>
  );
};

export default Home;
