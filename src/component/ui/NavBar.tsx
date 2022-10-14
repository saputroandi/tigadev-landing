import React, { useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type NavbarProps = {
  children?: React.ReactElement;
};

const Navbar: React.FC<NavbarProps> = (props) => {
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <>
      <nav className="sticky w-full flex justify-between items-center py-10 px-20 bg-slate-300">
        <div className="text-2xl">
          <h2>TigaDev</h2>
        </div>
        {width > 768 && (
          <div className="w-2/5 flex flex-col md:flex-row justify-between items-center">
            <div>
              <p>Beranda</p>
            </div>
            <div>
              <p>Profil Kami</p>
            </div>
            <div>
              <p>Layanan</p>
            </div>
            <div>
              <p>Kontak</p>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
