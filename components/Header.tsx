import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <img className="header__logo" src="/images/logo.png" alt="" />
          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Artists</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
          <div className="header__cart">
            <div className="header__cart-number">1</div>
            <a href="#"><img src="/images/card.svg" alt="" /></a>
          </div>
        </div>

      </div>
    </header>
  );
};
