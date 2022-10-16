import React from "react";
import Wave from "../../assets/Wave";

type HeroProps = {
  children?: React.ReactElement;
};

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <>
      <section className="w-full h-full flex flex-col justify-around items-center py-12 mx-auto gap-10 md:gap-0 bg-dark-blue text-sky-blue">
        <div className="w-10/12 md:w-2/5 text-center text-5xl font-bold">
          <h2>About Us</h2>
        </div>
        <div className="w-8/12 h-full grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
          <div className="h-full flex flex-col items-center p-12 text-center md:text-justify border-2 border-sky-blue rounded-xl">
            <div className="w-20 h-20">
              <p>Logo</p>
            </div>
            <div className="text-xl font-bold mb-2">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quas praesentium, vitae rerum eum temporibus.
              </p>
            </div>
          </div>
          <div className="h-full flex flex-col items-center p-12 text-center md:text-justify border-2 border-sky-blue rounded-xl">
            <div className="w-20 h-20">
              <p>Logo</p>
            </div>
            <div className="text-xl font-bold mb-2">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quas praesentium, vitae rerum eum temporibus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full flex flex-col md:flex-row-reverse justify-around items-center py-12 mx-auto gap-10 md:gap-0">
        <Wave />
        <div>
          <div className="w-80 h-80 md:w-96 md:h-96 bg-slate-500 rounded-lg mt-16"></div>
        </div>
        <div className="flex flex-col items-center w-11/12 md:w-2/5 mt-16">
          <div className="text-xs md:text-sm">
            <p>About Us</p>
          </div>
          <div className="text-2xl mb-3">
            <p>Tiga Dev</p>
          </div>
          <div className="text-justify mb-8 text-sm md:text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              velit dolorum, saepe perferendis non voluptate expedita culpa,
              consectetur tempora maiores error magni, blanditiis doloribus
              dolore soluta voluptatibus suscipit magnam porro.
            </p>
          </div>
          <div className="w-fit p-3 rounded-lg bg-blue-400 text-xs md:text-base">
            <p>Konsultasi gratis</p>
          </div>
        </div>
      </section>
      <section className="w-4/5 flex flex-col md:flex-row justify-around items-center py-12 mx-auto gap-10 md:gap-0">
        <div>
          <div className="w-80 h-80 md:w-96 md:h-96 bg-slate-500 rounded-lg"></div>
        </div>
        <div className="flex flex-col items-center w-11/12 md:w-2/5">
          <div className="text-xs md:text-sm">
            <p>why Choose Us</p>
          </div>
          <div className="text-4xl mb-3 font-bold">
            <p>Save Time & Effort With the Tiga Dev</p>
          </div>
          <div className="text-justify mb-8 text-sm md:text-base">
            <div>
              <div className="font-bold text-lg">
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  minima suscipit quam vero inventore commodi ducimus dolor aut,
                  fugit voluptatum.
                </p>
              </div>
            </div>
            <div>
              <div className="font-bold text-lg">
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  minima suscipit quam vero inventore commodi ducimus dolor aut,
                  fugit voluptatum.
                </p>
              </div>
            </div>
            <div>
              <div className="font-bold text-lg">
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  minima suscipit quam vero inventore commodi ducimus dolor aut,
                  fugit voluptatum.
                </p>
              </div>
            </div>
          </div>
          <div className="w-fit p-3 rounded-lg bg-blue-400 text-xs md:text-base">
            <p>Konsultasi gratis</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
