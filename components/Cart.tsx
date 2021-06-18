import { FC } from "react";
import Link from "next/link";

export const Cart: FC = () => {
  return (
    <Link href="/cart">
      <a className="cart">
        <span className="cart__count">1</span>
        <img className="cart__image" src="/images/card.svg" alt="" />
      </a>
    </Link>
  );
};
