import Link from "next/link";
import { FC } from "react";
import { useUserInPage } from "../hooks";

interface Props {
  href: string;
  text: string;
}

export const NavItem: FC<Props> = ({ href, text,}) => {
  const isUserInPage = useUserInPage(href);

  return (
    <li className="nav__item">
      <Link href={href}>
        <a className={`nav__link ${isUserInPage ? "active" : ""}`}>{text}</a>
      </Link>
    </li>
  );
};
