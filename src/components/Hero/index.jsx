import Slider from "./Swiper/Slider";
import ServiceCard from "./ServiceCard/ServiceCard"
import Faq from "./Faq/Faq"
import Testimonials from "./Testimonials/Testimonials";
import Explanation from "./Explanaittion/Explanation"
import CardCounter from "./Counter/CardCounter";

const index = () => {
  return (
    <>
      <Slider />
      <div className="hero_heading mt-5">
        <div className="flex flex-col items-center text-[#D4C07E]">
          <div className="Hero_welcome_text text-3xl font-medium">
            <h4>Welcome To</h4>
          </div>
          <div className="Hero_Sub_text text-[30px]  text-center font-bold mt-5">
            <h1>SECRET RAFFLE 4U</h1>
          </div>
          <div className="mt-5 Hero_para text-[20px] text-center max-w-6xl  font-semibold w-8/12">
            <p>
              Welcome to our exciting monetized lucky draw website, where you
              have the chance to win big and change your fortune with every
              ticket purchased with us.
            </p>
          </div>
        </div>
      </div>
      <div className="Hero_Video  flex  justify-center m-5">
        <div className="w-10/12 md:1/2 xl:w-3/5">
          <video src="https://secretraffle4u.com/assets/video/welcome.mp4" controls/>
        </div>
      </div>
<ServiceCard/>
<CardCounter/>
<Explanation/>

<Testimonials/>

<Faq/>
    </>
  );
};

export default index;
