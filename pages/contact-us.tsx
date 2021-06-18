import Head from "next/head";
import { Header } from "../components";

const ContactUs = () => {
  return (
    <div className="app">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main main--home"></div>
    </div>
  );
};

export default ContactUs;
