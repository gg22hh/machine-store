import { FC } from "react";
import { MainLayout, Contacts, Footer } from "../components";

const ContactUs: FC = () => {
  return (
    <MainLayout title="Contact Us" metaDescription="Contact Us Page">
      <Contacts />
      <Footer />
    </MainLayout>
  );
};

export default ContactUs;
