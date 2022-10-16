import React from "react";

type HeroProps = {
  children?: React.ReactElement;
};

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <>
      <section className=" w-full bg-dark-blue text-sky-blue">
        <div className="w-3/5 flex flex-col-reverse md:flex-row justify-around items-center py-12 gap-10 md:gap-0 mx-auto">
          <div className="w-4/5 md:w-2/5">
            <div className="text-lg md:text-xl">
              <p>Kami adalah solusi</p>
            </div>
            <div className="text-3xl md:text-5xl">
              <p>Kebutuhan Bisnis Anda di Era Digital</p>
            </div>
          </div>
          <div>
            <div className="w-80 h-80 md:w-96 md:h-96 bg-slate-500 rounded-lg"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
