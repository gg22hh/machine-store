import { FC } from "react";
import { MainLayout, MainTopContent, Points } from "../components";

const Home: FC = () => {
  return (
    <MainLayout title="Home" metaDescription="Home page">
      <MainTopContent />
      <Points />
    </MainLayout>
  );
};

export default Home;
