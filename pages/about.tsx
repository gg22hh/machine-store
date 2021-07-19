import { urlObjectKeys } from "next/dist/next-server/lib/utils";
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
            <div className="about-content">
              <AboutItemList
              links={["BK100-MD", "GD205-MD", "SV405-MD", "SV255-MD", "CF-Series", "NX-Series"]}
              sSize={["53", "74"]}
              mSize={["56", "76"]}
              lSize={["59", "78"]}
              xlSize={["62", "80"]}
              xxlSize={["65", "82"]}>
                <div className="about-item__image" style={{backgroundImage:"url(/images/item-image-first.jpg)"}}></div>
              </AboutItemList>
              <AboutItemList
              links={["MS-BOMDER D1", "PANZER VR-G1", "MS-BOMBER D2", "PANZER VR-G2"]}
              sSize={["63", "69"]}
              mSize={["66", "72"]}
              lSize={["69", "74"]}
              xlSize={["71", "76"]}
              xxlSize={["74", "79"]}>
                <div className="about-item__image" style={{backgroundImage:"url(/images/item-image-second.jpg)"}}></div>
              </AboutItemList>
              <AboutItemList
              links={["B/TYPE56 OG-01", "B/TYPE56 GL-02", "B/TYPE56 WT-03", "B/TYPE56 BK-04", "BLACK BOMBER", "WHITE BOMBER"]}
              sSize={["59", "66"]}
              mSize={["62", "68"]}
              lSize={["65", "70"]}
              xlSize={["68", "72"]}
              xxlSize={["71", "74"]}>
                <div className="about-item__image" style={{backgroundImage:"url(/images/item-image-third.jpg)"}}></div>
              </AboutItemList>
              <AboutItemList
              links={["M56BD7-V2/BK", "M56BD7-V2RD"]}
              sSize={["58", "80"]}
              mSize={["59", "81"]}
              lSize={["60", "82"]}
              xlSize={["63", "81"]}
              xxlSize={["62", "84"]}>
                <div className="about-item__image" style={{backgroundImage:"url(/images/item-image-fourth.jpg)"}}></div>
              </AboutItemList>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
