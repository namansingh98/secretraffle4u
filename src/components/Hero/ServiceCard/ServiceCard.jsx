import { IoMdCheckmark } from "react-icons/io";

const ServiceCard = () => {
  return (
    <div className="Service w-full">
      <div className="service_title items-center flex font-semibold justify-center text-white md:text-2xl xl:text-4xl text-xl ">
        <img
          src="https://secretraffle4u.com/assets/images/icon/horizontal-right.png"
          alt=""
          className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]   "
        />
        <div className="flex items-center">
        &nbsp; Asia&#39;s Newest Amazing
        <span className="text-[#F5D148]">
          &nbsp; &#34;Online Lucky Draw Games &#34;
        </span>
        &nbsp; &nbsp;{" "}
        <img
          src="https://secretraffle4u.com/assets/images/icon/horizontal-left.png"
          alt=""
          className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]"
        />
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row xl:flex-row justify-center">
        {/* Service Card 1 */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg mx-4 my-4 flex flex-col items-center w-full sm:w-1/2 md:w-1/3">
          <div className="flex items-center justify-between w-full mb-4">
            <img
              src="https://secretraffle4u.com/assets/images/cardslogo/ticket.png"
              alt="Service Image 1"
              className="w-[75px] h-[75px] object-cover rounded-md"
            />
            <div className="w-2/3 pl-4">
              <h3 className="text-xl font-semibold text-[#F5D148] mb-2">
                Play Multiple Lucky Draw Games
              </h3>
              <ul className="list-disc list-inside text-white ">
                <div className="flex">
                  <IoMdCheckmark color={"#F5D148"} /> Weekly, Monthly & Yearly.
                  Buy Tickets 24/7
                </div>
                <div className="flex">
                  <IoMdCheckmark color={"#F5D148"} /> Multiple Prize Positions
                  and Amounts
                </div>
                <div className="inline-flex">
                  <IoMdCheckmark color={"#F5D148"} size={24}/> Rollover Games if Minimum
                  Tickets Not Sold, So, All Your Tickets Are Safe and Stored.
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg mx-4 my-4 flex flex-col items-center w-full sm:w-1/2 md:w-1/3">
          <div className="flex items-center justify-between w-full mb-4">
            <img
              src="https://secretraffle4u.com/assets/images/cardslogo/scratch.png"
              alt="Service Image 2"
              className="w-[75px] h-[75px] object-cover rounded-md"
            />
            <div className="w-2/3 pl-4">
              <h3 className="text-xl font-semibold mb-2 [#F5D148]">
                Service Title 2
              </h3>
              <p className="text-gray-700">
                Description of the service. You can add more details here.
              </p>
            </div>
          </div>
          <ul className="list-disc list-inside">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>

        {/* Service Card 3 */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg mx-4 my-4 flex flex-col items-center w-full sm:w-1/2 md:w-1/3">
          <div className="flex items-center justify-between w-full mb-4">
            <img
              src="https://secretraffle4u.com/assets/images/cardslogo/withdrawal.png"
              alt="Service Image 3"
              className="w-[75px] h-[75px] object-cover rounded-md"
            />
            <div className="w-2/3 pl-4">
              <h3 className="text-xl font-semibold mb-2 [#F5D148]">
                Service Title 3
              </h3>
              <p className="text-gray-700">
                Description of the service. You can add more details here.
              </p>
            </div>
          </div>
          <ul className="list-disc list-inside">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
