

import horizontalRight from "../../../assets/horizontal-right.png"
import scratch from "../../../assets/scratch.png"
import withdrawal from "../../../assets/withdrawal.png"
import compliant from "../../../assets/compliant.png"
import verify from "../../../assets/verify.png"
import giftcard from "../../../assets/giftcard.png"
import ticket from "../../../assets/ticket.png"
import horizontalLeft from "../../../assets/horizontal-left.png"
import jackpot from "../../../assets/jackpot.gif"
const ServiceCard = () => {
  return (
    <div className="Service w-[90%] md:w-full xl:w-full">
      <div className="service_title items-center flex font-semibold justify-center text-white md:text-2xl xl:text-4xl text-md ">
        <img
          src={horizontalRight}
          alt=""
          className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]   "
        />
        <div className="flex items-center text-sm">
          &nbsp; Asia&#39;s Newest Amazing
          <span className="text-[#F5D148]">
            &nbsp; &#34;Online Lucky Draw Games &#34;
          </span>
          &nbsp; &nbsp;{" "}
          <img
            src={horizontalLeft}
            alt=""
            className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]"
          />
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row xl:flex-row justify-center">
        {/* Service Card 1 */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg mx-4 my-4 flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
  <div className="flex items-center justify-between w-full mb-4">
            <span className="bg-[#487644] p-5 rounded-full border  border-[#F5D148]">
              <img
                src={ticket}
                alt="ticket"
                className="w-[50px] h-[50px]  object-cover rounded-md "
              />
            </span>
            <div className="w-2/3 pl-4">
              <h3 className="text-md font-semibold mb-2 text-[#F5D148]">
                Play Multiple Lucky Draw Games
              </h3>
              <ul className="list-none list-inside text-sm text-white leading-6		 ">
                <li>✓ Weekly, Monthly & Yearly. Buy Tickets 24/7</li>
                <li>✓ Multiple Prize Positions and Amounts</li>
                <li>
                  ✓ Rollover Games if Minimum Tickets Not Sold, So, All Your
                  Tickets Are Safe and Stored.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg mx-4 my-4 flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
        <div className="flex items-center justify-between w-full mb-4">
            <span className="bg-[#487644] p-5 rounded-full border  border-[#F5D148]">
              {" "}
              <img
                src={scratch}
                alt="scratch"
                className="w-[55px] h-[55px] object-cover rounded-md"
              />
            </span>
            <div className="w-2/3 pl-4">
              <h3 className="text-md font-semibold mb-2 text-[#F5D148]">
                Various Scratch Cards
              </h3>
              <ul className="list-none list-inside text-sm text-white leading-9		">
                <li>✓ Easy Clickable Scratch cards</li>
                <li>✓ Multiple Prize Positions and Amounts</li>
                <li>✓ Instant Payouts on Prize winnings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg mx-4 my-4 flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
        <div className="flex items-center justify-between w-full mb-4">
            <span className="bg-[#487644] p-5 rounded-full border  border-[#F5D148]">
              {" "}
              <img
                src={withdrawal}
                alt="scratch"
                className="w-[55px] h-[55px] object-cover rounded-md "
              />
            </span>
            <div className="w-2/3 pl-4">
              <h3 className=" font-semibold text-md mb-2 text-[#F5D148]">
                Easy and “Quick Withdrawals”
              </h3>
              <ul className="list-none list-inside text-sm text-white leading-7	">
                <li>✓ Track All Your Payouts Easily.</li>
                <li>✓ We Send Money Worldwide to Any Bank</li>
                <li>
                  ✓ All “Withdrawals” Will Be in Your Bank 3-5 Days (excluding
                  public holidays)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row xl:flex-row justify-center">
        {/* Service Card 1 */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg mx-4 my-4 flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
  <div className="flex items-center justify-between w-full mb-4">
            <span className="bg-[#487644] p-5 rounded-full border  border-[#F5D148]">
              <img
                src={compliant}
                alt="complaint"
                className="w-[50px] h-[50px]  object-cover rounded-md "
              />
            </span>
            <div className="w-2/3 pl-4">
              <h3 className="text-md font-semibold mb-2 text-[#F5D148]">
              Responsible Gaming
              </h3>
              <ul className="list-none list-inside text-sm text-white leading-6		 ">
                <li>✓ We Have A Strict but Fair Play Policy</li>
                <li>✓ You Can Set-Up Deposit Limits</li>
                <li>
                  ✓ Top of The Range Anti-Fraud and Anti-Money Laundering Detection
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg mx-4 my-4 flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
        <div className="flex items-center justify-between w-full mb-4">
            <span className="bg-[#487644] p-5 rounded-full border  border-[#F5D148]">
              {" "}
              <img
                src={verify}
                alt="verify"
                className="w-[55px] h-[55px] object-cover rounded-md"
              />
            </span>
            <div className="w-2/3 pl-4">
              <h3 className="text-md font-semibold mb-2 text-[#F5D148]">
              World Class Security

              </h3>
              <ul className="list-none list-inside text-sm text-white leading-7		">
                <li>✓ 100% Secure Payment and Transactions</li>
                <li>✓ SSL Secured and Gaming Compliance Level Security</li>
                <li>✓ All Data Are Secured Under Layers of Security Software’s.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-lg mx-4 my-4 flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
        <div className="flex items-center justify-between w-full mb-4">
            <span className="bg-[#487644] p-5 rounded-full border  border-[#F5D148]">
              {" "}
              <img
                src={giftcard}
                alt="giftcard"
                className="w-[55px] h-[55px] object-cover rounded-md "
              />
            </span>
            <div className="w-2/3 pl-4">
              <h3 className=" font-semibold text-md mb-2 text-[#F5D148]">
              Easy “Deposit” with Gift Cards
              </h3>
              <ul className="list-none list-inside text-sm text-white leading-7	">
                <li>✓ Only $5 as minimal deposits</li>
                <li>✓ We Have Partnered Up With “Expat Gift cards”. So, You can purchase gift cards, which will automatically be deposited in your “Player Account”</li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="service_title items-center flex font-semibold justify-center text-white md:text-2xl xl:text-4xl text-md mb-5 mt-10">
        <img
          src={horizontalRight}
          alt=""
          className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]   "
        />
        <div className="flex items-center text-sm md:text-md xl:text-xl">
          &nbsp; Total Jackpot for 


          <span className="text-[#F5D148]">
            &nbsp; &#34;LUCKY DRAW GAMES&#34;
          </span>
          &nbsp; &nbsp;{" "}
          <img
            src={horizontalLeft}
            alt=""
            className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]"
          />
        </div>
      </div>

      <div className="items-center relative justify-center flex">

        <div>

            <img src={jackpot} alt="lucky-draw" />
        </div>
      <div className="z-5 absolute text-white text-6xl font-bold">
      ฿ 346,551,357
      </div>
      </div>
    </div>
  );
};

export default ServiceCard;
