import { FC } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useUserInPage } from "../hooks";

interface Props {
  title: string;
  metaDescription: string;
}

export const MainLayout: FC<Props> = ({ children, title, metaDescription }) => {
  const isHomePage = useUserInPage("/");

  return (
    <div className="app">
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={`${isHomePage ? "main main--home" : "main"}`}>
        {children}
      </div>
      {!isHomePage && <Footer />}
    </div>
  );
};
