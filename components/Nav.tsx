import { FC } from "react"

export const Nav: FC = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a className="nav__link" href="#">Home</a></li>
          <li className="nav__item"><a className="nav__link" href="#">Products</a></li>
          <li className="nav__item"><a className="nav__link" href="#">Artists</a></li>
          <li className="nav__item"><a className="nav__link" href="#">Contact us</a></li>
          <li className="nav__item"><a className="nav__link" href="#">About</a></li>
        </ul>
      </nav>
    </div>
  )
}
