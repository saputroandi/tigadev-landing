import React from "react";
import Hero from "../component/ui/contactUs/Hero";
import BaseLayout from "../layout/BaseLayout";

type ContactUsProps = {
  children?: React.ReactElement;
};

const ContactUs: React.FC<ContactUsProps> = (props) => {
  const components = [Hero];
  return (
    <>
      <BaseLayout>
        {components.map((Component, idx) => {
          return <Component key={idx} />;
        })}
      </BaseLayout>
    </>
  );
};

export default ContactUs;
