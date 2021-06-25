import React, { FC } from "react";

interface Props {
  title: string;
  text: string;
}

export const ContactsItem: FC<Props> = ({ title, text, children }) => {
  return (
    <div className="contacts__item">
      <div className="item__title">{title}</div>
      <div className="item__text">{text}</div>
      {children}
    </div>
  );
};
