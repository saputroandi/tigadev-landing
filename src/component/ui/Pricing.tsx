import React from "react";

type PricingProps = {
  children?: React.ReactElement;
};

const Pricing: React.FC<PricingProps> = (props) => {
  const pricingData = [
    {
      logo: "Logo",
      price: "Call Us",
      packages: [
        "Gratis Hosting 1 Tahun",
        "Gratis Domain di tahun pertama",
        "Dokumentasi dan Video Tutorial",
        "Website siap di iklankan",
      ],
    },
    {
      logo: "Logo",
      price: "Call Us",
      packages: [
        "Gratis Hosting 1 Tahun",
        "Gratis Domain di tahun pertama",
        "Dokumentasi dan Video Tutorial",
        "Website siap di iklankan",
      ],
    },
    {
      logo: "Logo",
      price: "Call Us",
      packages: [
        "Gratis Hosting 1 Tahun",
        "Gratis Domain di tahun pertama",
        "Dokumentasi dan Video Tutorial",
        "Website siap di iklankan",
      ],
    },
  ];

  return (
    <>
      <section className="w-4/5 grid grid-cols-3 place-items-center py-12 mx-auto gap-3">
        {pricingData.map((data, idx) => {
          return (
            <div className="w-full flex flex-col items-center" key={idx}>
              <div className="w-full h-20 mb-8 bg-blue-400 text-center rounded-lg">
                {data.logo}
              </div>
              <div className="w-10/12 flex flex-col gap-8">
                <div>
                  <p>{data.price}</p>
                </div>
                <div>
                  <ul className="flex flex-col gap-3 text-xs">
                    {data.packages.map((packageData, idx) => {
                      return <li key={idx}>{packageData}</li>;
                    })}
                  </ul>
                </div>
                <div className="w-fit p-3 rounded-lg font-thin text-xs bg-blue-500">
                  <p>Info Lebih Lanjut</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Pricing;
