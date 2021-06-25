import { FC } from "react";
import { ContactsItem } from "./ContactsItem";

export const Contacts: FC = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__inner">
          <ContactsItem
            title="Contact"
            text="Here you can send us a message with your
            wishes or questions and we will answer you"
          >
            <input
              type="text"
              className="contact__input"
              placeholder="Name"
              required
            />
            <input
              type="text"
              className="contact__input"
              placeholder="e-mail"
              required
            />
            <input
              type="text"
              className="contact__input"
              placeholder="Subject"
              required
            />
            <textarea
              className="contact__textarea"
              placeholder="Message"
              required
            />
            <input
              type="submit"
              value="Send message"
              className="contact__button"
            />
          </ContactsItem>

          <ContactsItem
            title="Newslette"
            text="Also you can subscribe to get actual infirmation from shop about our products"
          >
            <input
              type="text"
              className="contact__input"
              placeholder="First name"
              required
            />
            <input
              type="text"
              className="contact__input"
              placeholder="Last name"
              required
            />
            <input
              type="text"
              className="contact__input"
              placeholder="e-mail"
              required
            />
            <input
              type="submit"
              value="Subscribe"
              className="contact__button"
            />
          </ContactsItem>
        </div>
      </div>
    </div>
  );
};
