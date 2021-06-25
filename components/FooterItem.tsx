import { FC } from "react";

interface Props {
  title: string;
}

export const FooterItem: FC<Props> = ({ title, children }) => {
  return (
    <div className="footer__item">
      <div className="footer-item__title">{title}</div>
      <ul className="footer-item__link">{children}</ul>
    </div>
  );
};
