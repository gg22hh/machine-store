import { FC } from 'react';
import { Cart } from './Cart';
import { Nav } from './Nav';

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <img className="header__logo" src="/images/logo.png" alt="" />
          <Nav />
          <Cart />
        </div>
      </div>
    </header>
  );
};
