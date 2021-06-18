import Head from "next/head";
import { Header } from "../components";

const Artists = () => {
  return (
    <div className="app">
      <Head>
        <title>Artists</title>
        <meta name="description" content="Artists Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main main--home"></div>
    </div>
  );
};

export default Artists;
