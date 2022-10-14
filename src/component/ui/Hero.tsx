import React from "react";

type HeroProps = {
  children?: React.ReactElement;
};

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <>
      <section className="w-4/5 flex justify-around items-center py-12 mx-auto">
        <div className="w-2/5">
          <div className="text-xl">
            <p>Kami adalah solusi</p>
          </div>
          <div className="text-5xl">
            <p>Kebutuhan Bisnis Anda di Era Digital</p>
          </div>
        </div>
        <div>
          <div className="w-96 h-96 bg-slate-500 rounded-lg"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
