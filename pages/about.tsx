import { FC } from "react";
import { MainLayout, AboutText } from "../components";
import { AboutItemList } from "../components/AboutItemList";

const About: FC = () => {
  return (
    <MainLayout
      title="About"
      metaDescription="About Page"
      backgroundImageName="about-and-contacts.jpg"
    >
      <div className="about">
        <div className="container">
          <div className="about__inner">
            <AboutText />
            <AboutItemList />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
