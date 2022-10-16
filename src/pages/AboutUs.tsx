import React from "react";
import Hero from "../component/ui/aboutUs/Hero";
import BaseLayout from "../layout/BaseLayout";

type AboutUsProps = {
  children?: React.ReactElement;
};

const AboutUs: React.FC<AboutUsProps> = (props) => {
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

export default AboutUs;
