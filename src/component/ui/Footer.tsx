import React from "react";
import WaveInvert from "../assets/WaveInvert";

type FooterProps = {
  children?: React.ReactElement;
};

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <section className="relative w-full flex justify-center items-center py-12 mx-auto">
        <WaveInvert />
        <p className="text-xs text-sky-blue">TigaDev</p>
      </section>
    </>
  );
};

export default Footer;
