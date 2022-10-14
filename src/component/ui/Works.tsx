import React from "react";

type WorksProps = {
  children?: React.ReactElement;
};

const Works: React.FC<WorksProps> = (props) => {
  const worksData = [];
  const dummy = {
    srcImg:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    altImg: "work",
  };

  for (let i = 0; i < 8; i++) {
    worksData.push(dummy);
  }

  return (
    <>
      <section className="w-4/5 py-12 mx-auto">
        <div className="carousel carousel-center rounded-box">
          {worksData.map((work, idx) => {
            return (
              <div
                key={idx}
                id={`slide${idx}`}
                className="carousel-item w-2/3 relative"
              >
                <img src={work.srcImg} alt={work.altImg} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          {worksData.map((_, idx) => {
            return (
              <a href={`#slide${idx}`} className="btn btn-xs">
                {`${idx + 1}`}
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Works;
