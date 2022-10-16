import React from "react";
import Clients from "../component/ui/dashboard/Clients";
import Confidence from "../component/ui/dashboard/Confidence";
import Hero from "../component/ui/dashboard/Hero";
import Praise from "../component/ui/dashboard/Praise";
import Skills from "../component/ui/dashboard/Skills";
import Testimonial from "../component/ui/dashboard/Testimonial";
import Works from "../component/ui/dashboard/Works";
import BaseLayout from "../layout/BaseLayout";

type DashboardProps = {
  children?: React.ReactElement;
};

const Dashboard: React.FC<DashboardProps> = (props) => {
  const components = [
    Hero,
    Skills,
    Clients,
    // Pricing,
    Works,
    Confidence,
    Praise,
    Testimonial,
  ];
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

export default Dashboard;
