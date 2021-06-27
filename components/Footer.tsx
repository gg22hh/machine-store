import { FC } from "react";
import { FooterItem } from "./FooterItem";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer-main">
          <FooterItem title="Networks">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Behance</a>
            </li>
          </FooterItem>

          <FooterItem title="Menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Artists</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </FooterItem>

          <FooterItem title="Products">
            <li>
              <a href="#">Jackets</a>
            </li>
            <li>
              <a href="#">Sweatshirts</a>
            </li>
            <li>
              <a href="#">Hoodies</a>
            </li>
            <li>
              <a href="#">Tees</a>
            </li>
            <li>
              <a href="#">Hoodies + T-shirt packs</a>
            </li>
            <li>
              <a href="#">Pants</a>
            </li>
            <li>
              <a href="#">Backpacks/carriers</a>
            </li>
            <li>
              <a href="#">Vault hunters</a>
            </li>
          </FooterItem>

          <FooterItem title="Accessoires">
            <div className="accessoires-link">
              <ul className="accessoires-link__list">
                <li>
                  <a href="#">Bonehead helmets</a>
                </li>
                <li>
                  <a href="#">Demon plate series</a>
                </li>
                <li>
                  <a href="#">Hf/bat</a>
                </li>
                <li>
                  <a href="#">Masks</a>
                </li>
                <li>
                  <a href="#">Moleskine jackets</a>
                </li>
                <li>
                  <a href="#">Wall arts</a>
                </li>
              </ul>
              <ul className="accessoires-link__list">
                <li>
                  <a href="#">1/6 figures</a>
                </li>
                <li>
                  <a href="#">Sticker packs</a>
                </li>
                <li>
                  <a href="#">Vector packs</a>
                </li>
                <li>
                  <a href="#">Posters</a>
                </li>
                <li>
                  <a href="#">Fonts</a>
                </li>
              </ul>
            </div>
          </FooterItem>
        </div>
        <div className="footer-secondary">
          <p className="footer-secondary__text">
            This site is protected by recaptcha and the google privacy policy
            and terms of service apply
          </p>
          <p className="footer-secondary__subtext">
            <span className="subtext-first__icon">Copyright</span>{" "}
            <span className="subtext-second__icon">5060</span>
            {""}
            <span className="subtext-third__icon">/machine 56</span>
            <p>All rights reserved</p>
          </p>
        </div>
      </div>
    </div>
  );
};
