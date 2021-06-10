import { FC } from "react"


export const Cart: FC = () => {
  return (
    <a href="#" className="cart">
      <span className="cart__count">1</span>
      <img className="cart__image" src="/images/card.svg" alt="" />
    </a>
  )
}
