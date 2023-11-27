import {accordionData} from "./Data.js"
import Accordion from "./Accordion";
import horizontalRight from "../../../assets/horizontal-right.png"
import horizontalLeft from "../../../assets/horizontal-left.png"
export default function Faq() {

  return (
    <>
    <div className=" w-full flex items-center justify-center mb-8">
      <div className="w-full flex items-center justify-center text-white md:text-xl xl:text-2xl text-md  font-semibold">
        <img
          src={horizontalRight}
          alt=""
          className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]    "
        />
        <div className="flex items-center">
          &nbsp;Frequently Asked
          <span className="text-[#F5D148]">&nbsp; &#34;QUESTIONS &#34;</span>
          &nbsp; &nbsp;{" "}
          <img
            src={horizontalLeft}
            alt=""
            className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]"
          />
        </div>
      </div>

    
    </div>
    <div className="w-[86%] m-auto  p-10 border border-[#CEB776] rounded-3xl ">
      {accordionData.map(({ title, content }) => (
          <Accordion title={title} key={title} content={content} />
        ))}
      </div>
    </>
  );
}
