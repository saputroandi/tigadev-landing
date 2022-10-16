import React from "react";
import Wave from "../../assets/Wave";

type SkillsProps = {
  children?: React.ReactElement;
};

const Skills: React.FC<SkillsProps> = (props) => {
  const captions = [
    {
      logo: "",
      header: "Website Development",
      content: "Jasa pembuatan website menggunakan teknologi terbaru",
      link: "",
    },
    {
      logo: "",
      header: "Digital Marketing and advertising",
      content:
        "Jasa iklan google search, google display, network, juga iklan sosial media facebook dan instagram",
      link: "",
    },
    {
      logo: "",
      header: "Search Engine Optimization",
      content:
        "Jasa optimasi website dengan target peringkat teratas google untuk menjangkau lebih banyak konsumen",
      link: "",
    },
  ];

  return (
    <>
      <section className="relative w-full grid grid-cols-1 md:grid-cols-3 place-items-center text-center">
        <Wave />
        {captions.map((caption, idx) => {
          return (
            <div className="flex flex-col items-center mt-20">
              <div className="py-5">Logo</div>
              <div className="w-3/4 py-1 font-semibold">
                <p>{caption.header}</p>
              </div>
              <div className="w-3/4 py-1 font-thin">
                <p>{caption.content}</p>
              </div>
              <div className="py-5 text-xs">
                <p>Konsultasi gratis</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Skills;
