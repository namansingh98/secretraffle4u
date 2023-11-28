import phonePe from "../../../assets/phonepe.png";
import paypal from "../../../assets/paypal.png";
import expat from "../../../assets/expat.png";
import plus from "../../../assets/18plus.png";
import responsibly from "../../../assets/responsibly.png";
import satisfaction from "../../../assets/satisfaction.png";
import guaranteed from "../../../assets/guaranteed.png";

import logo from "../../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#252A25]  py-12 mt-10">
      <div className="container mx-auto justify-center items-center  flex flex-wrap">
        {/* First Column */}
        <div className="w-full flex flex-col items-center justify-center  md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
          <img src={logo} alt="logo" className="w-[50%] " />
          <h2 className="text-md  mb-4 text-white">
            Website is operated by EU International Gaming Ltd.
          </h2>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-[#F5D148]">
            Information
          </h2>
          <ul className="list-none text-white text-xl leading-10 font-semibold">
            <li>Terms and Condition</li>
            <li>Privacy and Policy</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Payment Guaranteed Policy</li>
            <li><a href="/promotions">Promotions Details</a></li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col ">
          {/* First Row */}
          <div className="flex flex-col flex-wrap items-center mb-4">
            <h2 className="text-2xl  text-[#F5D148]  font-bold mr-4">
              Security & Game Integrity
            </h2>
            {/* Add 4 images here */}
            <div className="flex gap-3 flex-wrap flex-row">
              <img src={plus} alt="18plus" className="w-[130px]  " />
              <img
                src={responsibly}
                alt="responsibly"
                className="w-[130px]  "
              />
              <img
                src={satisfaction}
                alt="satisfaction"
                className="w-[130px]  "
              />
              <img src={guaranteed} alt="guaranteed" className="w-[130px] " />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex  flex-col items-center">
            <h2 className="text-2xl text-[#F5D148] font-bold mr-4">
              Payment Partner
            </h2>
            {/* Add 3 images here */}
            <div className="flex  flex-wrap gap-3 flex-row">
              <img src={phonePe} alt="phonepe" className="w-[130px]  " />

              <img src={expat} alt="expat" className="w-[130px]  " />
              <img src={paypal} alt="paypal" className="w-[130px] " />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-8 text-center bg-[#252A25] py-4">
        <p className="text-xl font-semibold text-white">
          Copyright © 2021 EU International Gaming Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
