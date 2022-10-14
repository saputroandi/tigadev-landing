import React from "react";

type ClientsProps = {
  children?: React.ReactElement;
};

const Clients: React.FC<ClientsProps> = (props) => {
  const clientsData = [];
  const dummyObj = {
    clientLogo: "logo",
  };

  for (let i = 0; i < 12; i++) {
    clientsData.push(dummyObj);
  }

  return (
    <>
      <section className="w-2/3 py-10 mx-auto text-center">
        <div className="py-5 text-4xl">
          <h2>Our Precious Clients:</h2>
        </div>
        <div className="grid grid-cols-6 place-items-center">
          {clientsData.map((data, idx) => {
            return (
              <div>
                <div className="py-5">{data.clientLogo}</div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Clients;
