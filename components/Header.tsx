import { FC } from "react";
import Link from "next/link";
import { Cart } from "./Cart";
import { Nav } from "./Nav";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link href="/">
            <a className="header__logo">
              <img src="/images/logo.png" alt="" />
            </a>
          </Link>
          <Nav />
          <Cart />
        </div>
      </div>
    </header>
  );
};
