import React from "react";

type ConfidenceProps = {
  children?: React.ReactElement;
};

const Confidence: React.FC<ConfidenceProps> = (props) => {
  return (
    <>
      <section className="w-4/5 flex flex-col items-center text-center mx-auto py-12 gap-3">
        <div>
          <div className="text-sm">
            <p>Kami adalah solusi</p>
          </div>
          <div className="text-3xl md:text-5xl">
            <p>
              Kami tahu pasti cara mengoptimasi bisnis anda di Era Digital.
              Hubungi kami untuk konsultasi & informasi lebih lanjut.
            </p>
          </div>
        </div>
        <div className="w-fit p-3 rounded-lg bg-blue-400 text-xs md:text-base">
          <p>Konsultasi gratis</p>
        </div>
      </section>
    </>
  );
};

export default Confidence;
