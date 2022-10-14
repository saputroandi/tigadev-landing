import React from "react";

type FooterProps = {
  children?: React.ReactElement;
};

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <section className="w-full flex justify-center items-center py-12 bg-slate-400 mx-auto">
        <p className="text-xs">TigaDev</p>
      </section>
    </>
  );
};

export default Footer;
