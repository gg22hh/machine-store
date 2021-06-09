import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <img className="header__logo" src="/images/logo.png" alt="" />

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item"><a className="nav__link" href="#">Home</a></li>
              <li className="nav__item"><a className="nav__link" href="#">Products</a></li>
              <li className="nav__item"><a className="nav__link" href="#">Artists</a></li>
              <li className="nav__item"><a className="nav__link" href="#">Contact us</a></li>
              <li className="nav__item"><a className="nav__link" href="#">About</a></li>
            </ul>
          </nav>

          <a href="#" className="cart">
            <span className="cart__count">1</span>
            <img className="cart__image" src="/images/card.svg" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};
