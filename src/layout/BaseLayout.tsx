import React from "react";
import Footer from "../component/ui/Footer";
import Navbar from "../component/ui/NavBar";

type BaseLayoutProps = {
  children: React.ReactElement[];
};

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default BaseLayout;
