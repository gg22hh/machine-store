import { FC } from "react";

interface Props {
  title: string;
  text: string;
}

export const ContactsItem: FC<Props> = ({ title, text, children }) => {
  return (
    <div className="contacts-item">
      <h1 className="item__title">{title}</h1>
      <p className="item__text">{text}</p>
      {children}
    </div>
  );
};
