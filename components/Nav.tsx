import { FC, useState } from "react";
import { NavList } from "./NavList";

export const Nav: FC = () => {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <nav className="nav">
      <button className="nav__burger" onClick={() => setMenuActive(prevState => !prevState)}>
        <span />
      </button>

    <NavList active={menuActive}/>
    </nav>
  );
};
