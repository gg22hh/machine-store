import { FC, useState } from "react";

interface Props {
  title: string;
}

export const FooterItem: FC<Props> = ({ title, children }) => {
  return (
    <div className="footer__item">
      <div className="footer__item-title">{title}</div>
      <div className="footer__item-inner">{children}</div>
    </div>
  );
};
