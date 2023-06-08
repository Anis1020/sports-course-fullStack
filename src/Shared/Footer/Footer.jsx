import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="mx-auto">
          <h2 className="text-2xl text-center ml-10">Gym School</h2>
          <p>
            Address: <br />
            Rajshahi Pabna
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Contact Info</span>
          <div className="grid grid-flow-col gap-4 mx-auto">
            <a className="text-3xl">
              <FaFacebook />
            </a>
            <a className="text-3xl">
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>Copyright © 2023 - All right reserved by Gym School</p>
      </div>
    </>
  );
};

export default Footer;
