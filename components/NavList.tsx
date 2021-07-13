import { NavItem } from "./NavItem";

export const NavList = ({active}) => {
  return (
    <ul className={active ? "nav__list active" : "nav__list"}>
      <NavItem text="Home" href="/" />
      <NavItem text="Products" href="/products" />
      <NavItem text="Artists" href="/artists" />
      <NavItem text="Contact Us" href="/contact-us" />
      <NavItem text="About" href="/about" />
    </ul>
  )
}

