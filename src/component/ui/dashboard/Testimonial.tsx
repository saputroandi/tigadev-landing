import React from "react";

type TestimonialProps = {
  children?: React.ReactElement;
};

const Testimonial: React.FC<TestimonialProps> = (props) => {
  const testimonialsData = [];

  const dummyTestimonials = {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis cumque consequatur vero, voluptate dolor amet pariatur dolores unde ab.",
    testimonialPerson: "Pak Bambang",
    testimonialCompany: "PT. Cinta Sejati",
  };

  for (let i = 0; i < 6; i++) {
    testimonialsData.push(dummyTestimonials);
  }

  return (
    <>
      <section className="w-4/5 flex flex-col md:flex-row justify-around items-center py-12 mx-auto gap-10 md:gap-0">
        <div>
          <div className="w-80 h-80 md:w-96 md:h-96 bg-slate-500 rounded-lg"></div>
        </div>
        <div className="w-11/12 md:w-2/5">
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
                    className="w-full carousel-item flex flex-col p-2 cursor-pointer"
                    key={idx}
                  >
                    <div className="mb-3 break-words">
                      <p>{data.testimonial}</p>
                    </div>
                    <div className="text-lg">
                      <p>{data.testimonialPerson}</p>
                    </div>
                    <div className="text-sm md:text-base font-thin">
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

export default Testimonial;
