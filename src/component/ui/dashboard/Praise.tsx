import React from "react";

type PraiseProps = {
  children?: React.ReactElement;
};

const Praise: React.FC<PraiseProps> = (props) => {
  const featuresData = [];
  const dummyFeature = {
    srcImg: "logo",
    featureHeader: "work",
    featureContent:
      "Kami memprioritaskan projek anda ditangani lebih cepat dengan hasil rapih dan profesional di mata konsumen anda.",
  };
  for (let i = 0; i < 6; i++) {
    featuresData.push(dummyFeature);
  }
  return (
    <>
      <section className="w-4/5 flex flex-col md:flex-row justify-around items-center py-12 mx-auto gap-10 md:gap-0">
        <div>
          <div className="w-80 h-80 md:w-96 md:h-96 bg-slate-500 rounded-lg"></div>
        </div>
        <div className="flex flex-col items-center w-11/12 md:w-2/5">
          <div className="text-xs md:text-sm">
            <p>Keberhasilan anda adalah kebanggaan kami</p>
          </div>
          <div className="text-2xl mb-3">
            <p>Kami adalah solusi</p>
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
      <section className="w-4/5  mx-auto py-12 gap-3">
        <div className="text-center">
          <div className="text-xl font-thin">
            <p>Our Features</p>
          </div>
          <div className="mb-8 md:mb-3 text-2xl font-bold">
            <p>Apa yang membuat kami berbeda dengan yang lainnya?</p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
          {featuresData.map((data, idx) => {
            return (
              <div className="flex flex-col md:flex-row justify-center items-center md:p-4 gap-2">
                <div className="w-3/5 h-20 rounded-lg bg-slate-400">
                  {data.srcImg}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-lg">{data.featureHeader}</div>
                  <div className="text-xs md:text-sm font-thin">
                    {data.featureContent}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Praise;
