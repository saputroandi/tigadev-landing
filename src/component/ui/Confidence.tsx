import React from "react";

type ConfidenceProps = {
  children?: React.ReactElement;
};

const Confidence: React.FC<ConfidenceProps> = (props) => {
  const featuresData = [];
  const testimonialsData = [];
  const dummyFeature = {
    srcImg: "logo",
    featureHeader: "work",
    featureContent:
      "Kami memprioritaskan projek anda ditangani lebih cepat dengan hasil rapih dan profesional di mata konsumen anda.",
  };
  const dummyTestimonials = {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis cumque consequatur vero, voluptate dolor amet pariatur dolores unde ab.",
    testimonialPerson: "Pak Bambang",
    testimonialCompany: "PT. Cinta Sejati",
  };

  for (let i = 0; i < 6; i++) {
    featuresData.push(dummyFeature);
    testimonialsData.push(dummyTestimonials);
  }

  return (
    <>
      <section className="w-4/5 flex flex-col items-center text-center mx-auto py-12 gap-3">
        <div>
          <div className="text-sm">
            <p>Kami adalah solusi</p>
          </div>
          <div className="text-5xl">
            <p>
              Kami tahu pasti cara mengoptimasi bisnis anda di Era Digital.
              Hubungi kami untuk konsultasi & informasi lebih lanjut.
            </p>
          </div>
        </div>
        <div className="w-fit p-3 rounded-lg bg-blue-400">
          <p>Konsultasi gratis</p>
        </div>
      </section>
      <section className="w-4/5 flex justify-around items-center py-12 mx-auto">
        <div>
          <div className="w-96 h-96 bg-slate-500 rounded-lg"></div>
        </div>
        <div className="w-2/5">
          <div className="text-sm">
            <p>Keberhasilan anda adalah kebanggaan kami</p>
          </div>
          <div className="text-2xl mb-3">
            <p>Kami adalah solusi</p>
          </div>
          <div className="text-justify mb-8">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              velit dolorum, saepe perferendis non voluptate expedita culpa,
              consectetur tempora maiores error magni, blanditiis doloribus
              dolore soluta voluptatibus suscipit magnam porro.
            </p>
          </div>
          <div className="w-fit p-3 rounded-lg bg-blue-400">
            <p>Konsultasi gratis</p>
          </div>
        </div>
      </section>
      <section className="w-4/5  mx-auto py-12 gap-3">
        <div className="text-center">
          <div className="text-xl font-thin">
            <p>Our Features</p>
          </div>
          <div className=" mb-3 text-2xl font-bold">
            <p>Apa yang membuat kami berbeda dengan yang lainnya?</p>
          </div>
        </div>
        <div className="grid grid-cols-3 place-items-center gap-2">
          {featuresData.map((data, idx) => {
            return (
              <div className="flex justify-center items-center p-4 gap-2 ">
                <div className="w-3/5 h-20 rounded-lg bg-slate-400">
                  {data.srcImg}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-lg">{data.featureHeader}</div>
                  <div className="text-sm font-thin">{data.featureContent}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="w-4/5 flex justify-around items-center py-12 mx-auto">
        <div>
          <div className="w-96 h-96 bg-slate-500 rounded-lg"></div>
        </div>
        <div className="w-2/5">
          <div className="text-sm">
            <p>Testimonials</p>
          </div>
          <div className="text-2xl mb-3">
            <p>Apa Kata Klien Kami</p>
          </div>
          <div>
            <div className="carousel rounded-box">
              {testimonialsData.map((data, idx) => {
                return (
                  <div
                    className="w-full carousel-item flex flex-col cursor-pointer"
                    key={idx}
                  >
                    <div className="mb-3 break-words">
                      <p>{data.testimonial}</p>
                    </div>
                    <div className="text-lg">
                      <p>{data.testimonialPerson}</p>
                    </div>
                    <div className="font-thin">
                      <p>{data.testimonialCompany}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Confidence;
