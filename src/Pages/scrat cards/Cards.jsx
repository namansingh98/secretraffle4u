import arrowFace from "../../assets/horizontal-left.png";
import arrowBack from "../../assets/horizontal-right.png";
import silver from "../../assets/silver.png";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Cards = () => {
  return (
    <section className="secretCard">
      <div className=" mt-5 mb-5 sub_heading flex justify-center items-center gap-1 text-4xl font-semibold text-white">
        <img src={arrowBack} alt="" className="h-3" />
        <h2 className="secretHeading">What is Raffle Game </h2>
        <img src={arrowFace} alt="" className="h-3" />
      </div>
      <div className="flex justify-center justify-items-center ">
        <div className="max-w-md  overflow-hidden shadow-lg m-4 border-[#AC8A4D] border-2 text-center">
          <div className="px-6 py-4 bg-[#2A2522] border-b-2 border-[#AC8A4D] ">
            <div className="font-semibold text-xl text-white  mb-2">SLIVER</div>
            <p className="card-Text_heading text-gray-700 text-base mb-2">
              JACKPOT ฿ 3,000,000.00
            </p>
          </div>
          <div className="card_bgmain p-5 w-full flex">
          <img
            className="w-10/12 mx-auto h-48  object-fill  border-2 border-[#AC8A4D] bgshadow"
            src={silver}
            alt="Card Image"
          />
</div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
            <div className="text-gray-700 text-base mt-2">Free </div>
            <IoMdInformationCircleOutline className="text-blue-500 text-2xl mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
