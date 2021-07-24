import { FC } from "react";
import { MainLayout, MainTopContent, Points } from "../components";

const Home: FC = () => {
  return (
    <MainLayout
      title="Home"
      metaDescription="Home page"
      backgroundImageName="homepage.jpg"
    >
      <MainTopContent />
      <Points />
    </MainLayout>
  );
};

export default Home;
