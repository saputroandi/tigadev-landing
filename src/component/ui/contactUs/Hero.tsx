import React from "react";
import Wave from "../../assets/Wave";

type HeroProps = {
  children?: React.ReactElement;
};

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <>
      <section className="relative w-full h-full flex flex-col justify-around items-center py-12 mx-auto gap-10 md:gap-0">
        <Wave />
        <div className="w-10/12 md:w-2/5 py-10 text-center text-5xl font-bold">
          <h2>Contact Us</h2>
        </div>

        <div className="w-10/12 rounded-xl overflow-hidden">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Office"
          />
        </div>
        <div className="w-4/5 flex flex-col-reverse md:flex-row justify-around items-center py-12 mx-auto gap-10 md:gap-0">
          <div className="w-100 md:w-2/5">
            <div className="text-lg md:text-xl">
              <p>Get In Touch</p>
            </div>
            <div className="text-2xl md:text-4xl font-bold mb-3">
              <p>Kontak Kami</p>
            </div>
            <div className="text-lg font-extralight mb-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                eaque praesentium accusantium rerum ullam veniam ipsum illo
                dicta, tempora eveniet, modi maiores molestiae a non rem ipsam
                nemo deleniti. Itaque.
              </p>
            </div>
            <div>
              <div>
                <p>Phone:</p>
              </div>
              <div>
                <p>0812-3456-7891</p>
              </div>
            </div>
          </div>
          <div className="w-80 h-80 md:w-96 md:h-96">
            <div>
              <p>Kirim Pesan</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <form action="#">
              <div className="w-full grid grid-cols-2 p-4">
                <div className="">
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                      className="w-full p-2 focus:outline-none"
                    />
                  </label>
                </div>
                <div className="">
                  <label>
                    Email:
                    <input
                      type="text"
                      name="name"
                      className="w-full p-2 focus:outline-none"
                    />
                  </label>
                </div>
                <div className="">
                  <label>
                    Phone:
                    <input
                      type="text"
                      name="name"
                      className="w-full p-2 focus:outline-none"
                    />
                  </label>
                </div>
                <div className="">
                  <label>
                    Website:
                    <input
                      type="text"
                      name="name"
                      className="w-full p-2 focus:outline-none"
                    />
                  </label>
                </div>
                <div className="col-span-2">
                  <label>
                    Website:
                    <input
                      type="text"
                      name="name"
                      className="w-full p-2 focus:outline-none"
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
