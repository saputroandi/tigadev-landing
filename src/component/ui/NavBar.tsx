import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnWindowScroll from "../../hooks/useOnWindowScroll";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type NavbarProps = {
  children?: React.ReactElement;
};

const Navbar: React.FC<NavbarProps> = (props) => {
  const [visible, setVisible] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { width, height } = useWindowDimensions();
  useOnWindowScroll((val) => {
    if (val > 270) {
      return setVisible((state) => (state = true));
    } else if (val < 270) {
      return setVisible((state) => (state = false));
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="w-full flex justify-between items-center py-10 px-20 z-10  bg-dark-blue text-sky-blue">
        <div className="text-2xl font-bold">
          <h2>TigaDev</h2>
        </div>
        {width > 768 && (
          <div className="w-1/4 flex flex-col md:flex-row justify-between items-center cursor-pointer">
            <div>
              <Link className="hover:border-b-4 hover:border-sky-blue" to={"/"}>
                Beranda
              </Link>
            </div>
            <div>
              <Link
                className="hover:border-b-4 hover:border-sky-blue"
                to={"/about-us"}
              >
                Profil Kami
              </Link>
            </div>
            <div>
              <Link
                className="hover:border-b-4 hover:border-sky-blue"
                to={"/contact-us"}
              >
                Kontak
              </Link>
            </div>
          </div>
        )}
        {width < 768 && (
          <div
            className="w-fit"
            onClick={() => setMobileMenu((state) => !state)}
          >
            <svg width="2em" height="2em" viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="M207.2 96H48.8a8 8 0 0 1-7.8-9.7C47.4 55.5 83.9 32 128 32s80.6 23.5 87 54.3a8 8 0 0 1-7.8 9.7ZM148 160l-40 16l-40-16l-20 8v16a32 32 0 0 0 32 32h96a32 32 0 0 0 32-32v-16l-20 8Z"
                opacity=".2"
              ></path>
              <path
                fill="currentColor"
                d="M48.8 104h158.4a16 16 0 0 0 15.6-19.4C215.5 49.5 175.6 24 128 24S40.5 49.5 33.2 84.6A16 16 0 0 0 48.8 104ZM128 40c39.4 0 73.4 20.6 79.2 47.9H48.8C54.6 60.6 88.6 40 128 40Zm97 112.6l-37 14.8l-37-14.8a7.8 7.8 0 0 0-6 0l-37 14.8l-37-14.8a7.8 7.8 0 0 0-6 0l-40 16a8 8 0 0 0 3 15.4a8 8 0 0 0 3-.6l9-3.6v4.2a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-10.6l15-6a8 8 0 0 0-6-14.8ZM200 184a24.1 24.1 0 0 1-24 24H80a24.1 24.1 0 0 1-24-24v-10.6l12-4.8l37 14.8a7.8 7.8 0 0 0 6 0l37-14.8l37 14.8a7.8 7.8 0 0 0 6 0l9-3.6Zm40-56a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h208a8 8 0 0 1 8 8Z"
              ></path>
            </svg>
          </div>
        )}
      </nav>

      {width < 768 && mobileMenu === true && (
        <div className="absolute top-32 right-0 left-0 w-9/12 flex flex-col items-center gap-2 p-8 mx-auto rounded-lg  bg-dark-blue text-sky-blue border-4 border-sky-blue z-10">
          <div onClick={() => setMobileMenu((state) => (state = false))}>
            <Link to={"/"}>Beranda</Link>
          </div>
          <div onClick={() => setMobileMenu((state) => (state = false))}>
            <Link to={"/about-us"}>Profil Kami</Link>
          </div>
          <div onClick={() => setMobileMenu((state) => (state = false))}>
            <Link to={"/contact-us"}>Kontak</Link>
          </div>
        </div>
      )}

      <div
        className="inline-block fixed bottom-0 right-0 mr-3 mb-3 z-20"
        style={{ display: visible ? "inline" : "none" }}
        onClick={() => scrollToTop()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 rounded-full bg-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
          />
        </svg>
      </div>
    </>
  );
};

export default Navbar;
