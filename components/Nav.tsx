import { FC } from "react";
import { NavItem } from "./NavItem";

export const Nav: FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavItem text="Home" href="/" />
        <NavItem text="Products" href="/products" />
        <NavItem text="Artists" href="/artists" />
        <NavItem text="Contact Us" href="/contact-us" />
        <NavItem text="About" href="/about" />
      </ul>
    </nav>
  );
};
