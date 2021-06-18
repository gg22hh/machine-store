import { FC } from "react";
import Head from "next/head";
import { Header } from "./Header";

interface Props {
  title: string;
  metaDescription: string;
}

export const MainLayout: FC<Props> = ({ children, title, metaDescription }) => {
  return (
    <div className="app">
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main main--home">{children}</div>
    </div>
  );
};
