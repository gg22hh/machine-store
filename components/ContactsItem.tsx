import { FC } from "react";

interface Props {
  title: string;
  text: string;
}

export const ContactsItem: FC<Props> = ({ title, text, children }) => {
  return (
    <div className="contacts-item">
      <h3 className="contacts-item__title">{title}</h3>
      <p className="contacts-item__text">{text}</p>
      {children}
    </div>
  );
};
