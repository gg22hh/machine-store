import React from "react";
import { PointsItem } from "./PointsItem";

export const Points = () => {
  return (
    <div className="points">
      <div className="container">
        <div className="points__inner">
          <PointsItem text="Follow us in different social networks to have information about our shop and our clothing">
            <div className="points__links">
              <a className="points__link" href="#">
                Instagram
              </a>
              <a className="points__link" href="#">
                Facebook
              </a>
            </div>
          </PointsItem>
          <PointsItem text="Machine 56 official web-shop present to you wear of future and give you perfect opportunity to get any cool clothing">
            <a className="points__link" href="#">
              Shop
            </a>
          </PointsItem>
          <PointsItem text="If you want to find here some small prices, you can chek out our sales page and choose something">
            <a className="points__link" href="#">
              Sales
            </a>
          </PointsItem>
          <PointsItem text="Have any questions? You can send us a letter using special page of our site and we will answer you">
            <a className="points__link" href="#">
              Send message
            </a>
          </PointsItem>
          <PointsItem text="If you are local customer of our shop (Indonesia), please, directly shop on our official Tokopedia page">
            <a className="points__link" href="#">
              Tokopedia
            </a>
          </PointsItem>
        </div>
      </div>
    </div>
  );
};
