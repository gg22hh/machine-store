import Head from "next/head";
import { Header } from "../components";

const About = () => {
  return (
    <div className="app">
      <Head>
        <title>About</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main main--home"></div>
    </div>
  );
};

export default About;
