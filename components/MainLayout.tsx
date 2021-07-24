import { FC } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useUserInPage } from "../hooks";

interface Props {
  title: string;
  metaDescription: string;
  backgroundImageName?: string;
}

export const MainLayout: FC<Props> = ({
  children,
  title,
  metaDescription,
  backgroundImageName = "default.jpg",
}) => {
  const isHomePage = useUserInPage("/");

  return (
    <div className="app">
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div
        style={{
          backgroundImage: `url(/images/backgrounds/${backgroundImageName})`,
        }}
        className="main"
      >
        {children}
      </div>
      {!isHomePage && <Footer />}
    </div>
  );
};
