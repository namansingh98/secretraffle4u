import bgbanner from "../../assets/banner-img.png";
import Hall_of_fame from "../../assets/Hall-of-fame.png";
import Pro from "../../assets/Pro.png";
import Protwo from "../../assets/protwo.png";
import Champion from "../../assets/Champion.png";
import Championtwo from "../../assets/Championtwo.png";
import rookie from "../../assets/Rookie.png";
import rookietwo from "../../assets/Rookietwo.png";
import Recruit from "../../assets/Recruit.png";
import right from "../../assets/Rectangle%2035.png";
import left from "../../assets/Rectangle%2034.png";
import bgshape from "../../assets/bg-shape-3.png";
import bgshape2 from "../../assets/bg-shape-4.png";
import icon from "../../assets/icon-1.png";
import crown from "../../assets/2.png";
import halloffamer from "../../assets/hall_of_famer.png";
import bgshape3 from "../../assets/Rectangle%2046.png";
import bgshape4 from "../../assets/Rectangle%2047.png";
const Reward = () => {
  return (
    <>
      <div className="w-full">
        <div className="banner_reward w-full flex justify-center items-center">
          <img src={bgbanner} alt="" className="max-w-full w-2/4 p-5" />
        </div>
        <div className="w-full mt-20 reward_status">
          <div className="overflow-x-auto">
            <div className="flex justify-end flex-start ">
              <img
                src={Recruit}
                alt="recruit"
                className="w-[10%] object-fill h-[10%]"
              />
              <img
                src={rookie}
                alt="rookie"
                className="w-[10%] object-fill h-[10%]"
              />
              <img
                src={Pro}
                alt="pro"
                className="w-[10%] object-fill h-[10%]"
              />
              <img
                src={Hall_of_fame}
                alt="famer"
                className="w-[10%] object-fill h-[10%]"
              />
              <img
                src={Champion}
                alt="champion"
                className="w-[10%] object-fill h-[10%]"
              />
            </div>
            <div className="flex justify-center items-center">
              <table className="w-4/5 rounded-t-xl  text-center table-auto">
                <thead className="thead_none" style={{ border: "none" }}>
                  <tr className="reward_table_heading text-[#252525]">
                    <th className="border px-4 py-2 rounded-t-xl">
                      Level Upgrade Requirements
                    </th>
                    <th className="border px-4 py-2 rounded-t-xl">Level 1</th>
                    <th className="border px-4 py-2 rounded-t-xl">Level 2</th>
                    <th className="border px-4 py-2 rounded-t-xl">Level 3</th>
                    <th className="border px-4 py-2 rounded-t-xl">Level 4</th>
                    <th className="border px-4 py-2 rounded-t-xl">Level 5</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr>
                    <td className="border px-4 py-2">Monthly Commission</td>
                    <td className="border px-4 py-2">1%</td>
                    <td className="border px-4 py-2">1.5%</td>
                    <td className="border px-4 py-2">2%</td>
                    <td className="border px-4 py-2">2.5%</td>
                    <td className="border px-4 py-2">3%</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Monthly Deposit</td>
                    <td className="border px-4 py-2">N/A</td>
                    <td className="border px-4 py-2">$60,000</td>
                    <td className="border px-4 py-2">$90,000</td>
                    <td className="border px-4 py-2">$120,000</td>
                    <td className="border px-4 py-2">$155,555</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Minimum Players</td>
                    <td className="border px-4 py-2">1 - 1,000</td>
                    <td className="border px-4 py-2">1,001 - 2,000</td>
                    <td className="border px-4 py-2">2,001 - 3,000</td>
                    <td className="border px-4 py-2">3,001 - 4,000</td>
                    <td className="border px-4 py-2">4,001 - 5,555</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full  h-full ">
        <div className="reward_title  relative reward_cover_imgs mt-10">
          <img
            src={bgshape}
            alt=""
            className="absolute left-0 bottom-0 w-[18%] -z-[1]"
          />
          <img
            src={bgshape2}
            alt=""
            className="absolute right-0 bottom-0 w-[5%] -z-[1]"
          />

          <div className=" flex justify-center items-center mt-20">
            <h1 className="text-6xl font-bold reward_heading">
              <img src={left} alt="" className="" />
              Commision <span className="reward_sub"> Rules</span>
              <img src={right} alt="" />
            </h1>
          </div>
          <div className=" flex m-20 justify-center items-center text-white font-semibold text-xl">
            <div className="w-3/4 ">
              <ul>
                <li className="mb-10 flex">
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-5" />
                  To earn commission, all the players under you have to deposit
                  $50 by the 7th of each month. Commission will be calculated
                  last week of each month and then deposited to your
                  playersaccount.
                </li>
                <li className="mb-10 flex">
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-5" />
                  If you have 1,000 players under you. Minimum 10% of players
                  must deposit $50 before the 7th of each month to be eligible
                  for commission. 900+ players minimum to receive commission.
                </li>
                <li className="mb-10 flex">
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-5" />
                  For example: If 899 make deposit, commission will be canceled.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 ">
        <div className="flex justify-center items-center">
          <h1 className="reward_heading font-semibold text-6xl relative flex">
            <img src={left} alt="" />
            Secret Raffle 4U
            <span className="reward_sub">
              VIP
              <img src={crown} alt="" className="absolute bottom-12 " />
            </span>
            <img src={right} alt="" />
          </h1>
        </div>
      </div>
      <div className="mt-20 flex justify-center justify-items-center">
        <div className="flex  items-center">
          <h1 className="text-8xl font-semibold reward_heading">
            Level <span className="reward_sub font-bold">1</span>{" "}
          </h1>
          <img src={Recruit} alt="" />
          <div className="justify-items-center">
            <span className="reward_sub text-6xl  font-semibold ">
              {" "}
              RECRUIT
            </span>
            <div className="mt-5 text-white">
              <ul>
                <li className="mb-10 flex justify-start">
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  All new players begin as a recruit.
                </li>
                <li className="mb-10 flex">
                  {" "}
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  You will receive 1% commission for every sign up under
                  referral link.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center justify-items-center">
        <div className="flex  items-center">
          <h1 className="text-8xl font-semibold reward_heading">
            Level <span className="reward_sub font-bold">2</span>{" "}
          </h1>
          <img src={rookietwo} alt="" />
          <div className="justify-items-center">
            <span className="reward_sub text-6xl uppercase  font-semibold ">
              {" "}
              Rookie
            </span>
            <div className="mt-5 text-white">
              <ul>
                <li className="mb-10 flex justify-start">
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  To become Rookie, you have to have 2,000 players.
                </li>
                <li className="mb-10 flex">
                  {" "}
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  All 2,000 players must deposit $50 minimum/month to get 1.5%
                  commission.
                </li>
                <li className="mb-10 flex">
                  {" "}
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  Deposit $60,000 to move to level - 2
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center justify-items-center">
        <div className="flex  items-center">
          <h1 className="text-8xl font-semibold reward_heading">
            Level <span className="reward_sub font-bold">3</span>{" "}
          </h1>
          <img src={Protwo} alt="" />
          <div className="justify-items-center">
            <span className="reward_sub text-6xl uppercase font-semibold ">
              {" "}
              Pro
            </span>
            <div className="mt-5 text-white">
              <ul>
                <li className="mb-10 flex justify-start">
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  To become Pro, you have to have 3,000 players.
                </li>
                <li className="mb-10 flex">
                  {" "}
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  All 3,000 players must deposit $50 minimum/month to get 2%
                  commission.
                </li>
                <li className="mb-10 flex">
                  {" "}
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  Deposit $90,000 to move to level - 3
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center justify-items-center">
        <div className="flex  items-center">
          <h1 className="text-8xl font-semibold reward_heading">
            Level <span className="reward_sub font-bold">4</span>{" "}
          </h1>
          <img src={Championtwo} alt="" />
          <div className="justify-items-center">
            <span className="reward_sub text-6xl uppercase font-semibold ">
              {" "}
              CHAMPION
            </span>
            <div className="mt-5 text-white">
              <ul>
                <li className="mb-10 flex justify-start">
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  To become Champion, you have to have 4,000 players.
                </li>
                <li className="mb-10 flex">
                  {" "}
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  All 4,000 players must deposit $50 minimum/month to get 2.5%
                  commission.
                </li>
                <li className="mb-10 flex">
                  {" "}
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  Deposit $120,000 to move to level - 4
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center justify-items-center">
        <div className="flex  items-center">
          <h1 className="text-8xl font-semibold reward_heading">
            Level <span className="reward_sub font-bold">5</span>{" "}
          </h1>
          <img src={halloffamer} alt="" />
          <div className="justify-items-center">
            <span className="reward_sub text-6xl uppercase font-semibold ">
              {" "}
              HALL OF FAMER
            </span>
            <div className="mt-5 text-white">
              <ul>
                <li className="mb-10 flex justify-start">
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  To become Hall of Famer, you have to have 5,555 players.
                </li>
                <li className="mb-10 flex">
                  {" "}
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  All 5,555 players must deposit $50 minimum/month to get 3%
                  commission.
                </li>
                <li className="mb-10 flex">
                  {" "}
                  <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
                  Deposit $155,000 to move to level - 5
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 ">
        <div className="flex justify-center items-center">
          <h1 className="reward_heading font-semibold text-4xl relative flex mb-2">
            <img src={bgshape3} alt="" />
            Enjoy Earning Referral Commission With Us
            <img src={bgshape4} alt="" />
          </h1>
        </div>
        <div className="subtext flex justify-center items-center justify-items-center text-white font-semibold ">
          <ul>
            <li className="flex mb-2">
              <img src={icon} alt="" className="w-[30px] h-[30px] mr-3 " />
              We have created “5 Levels” for various commissions, starting from
              1% to 3%.
            </li>

            <li className="flex mb-2">
              <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
              Our “Referral Commission” structure starts everyone on 1%.
            </li>
            <li className="flex mb-2">
              <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
              As you build your lucky draw community under your referral link,
              you will gradually increase you commission percentage.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 ">
        <div className="flex justify-center items-center">
          <h1 className="reward_heading font-semibold text-4xl relative flex mb-2">
            <img src={bgshape3} alt="" />
            Secret Raffle 4U VIP Members Club
            <img src={bgshape4} alt="" />
          </h1>
        </div>
        <div className="subtext flex justify-center items-center justify-items-center text-white font-semibold ">
          <div className="flex text-center justify-items-center justify-center text-white">
            <h2>
              Sign Up Bonus
              <br />
              Your first sign-up after completing your registration. 100%
              “Double Up” Deposit $555 and we give you $555
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-20 ">
        <div className="flex justify-center items-center">
          <h1 className="reward_sub font-semibold text-4xl relative flex mb-2">
            <img src={bgshape3} alt="" />
            VIP Membership Bonus
            <img src={bgshape4} alt="" />
          </h1>
        </div>
        <div className="flex text-center justify-items-center justify-center text-white">
          <h2>
            Deposit same amount every month for 12 months to receive free cash
            bonus
          </h2>
        </div>

        <div className="subtext flex justify-center  justify-items-center text-white font-semibold ">
          <ul>
            <li className="flex mb-2">
              <img src={icon} alt="" className="w-[30px] h-[30px] mr-3 " />
              $1,000 receive 10%
            </li>

            <li className="flex mb-2">
              <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
              $2,000 receive 20%
            </li>
            <li className="flex mb-2">
              <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
              $3,000 receive 30%
            </li>
            <li className="flex mb-2">
              <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
              $4,000 receive 40%
            </li>
            <li className="flex mb-2">
              <img src={icon} alt="" className="w-[30px] h-[30px] mr-3" />
              $5,000 receive 55.5%
            </li>
          </ul>
        </div>
        <div className="flex text-white justify-center">
          <h2>
            For more information on the VIP bonus, please contact support to
            activate your VIP Membership
          </h2>
        </div>
      </div>
      <div className="mt-20 ">
        <div className="flex justify-center items-center">
          <h1 className="reward_sub font-semibold text-4xl relative flex mb-2">
            <img src={bgshape3} alt="" />
            Secret Raffle 4U VIP Members Club
            <img src={bgshape4} alt="" />
          </h1>
        </div>
        <div className="subtext flex justify-center items-center justify-items-center text-white font-semibold ">
          <h2>
            To become a VIP Member, please contact support who will create you a
            Gold Account.
            <br />
            Increase your VIP Level and experience rich rewards and taste of the
            VIP high life.
          </h2>
        </div>
      </div>
      <div className="mt-20 ">
        <div className="flex justify-center items-center">
          <h1 className="reward_sub font-semibold text-4xl relative flex mb-2">
            <img src={bgshape3} alt="" />
            Secret Raffle 4U VIP Members Club
            <img src={bgshape4} alt="" />
          </h1>
        </div>
        <div className="subtext flex justify-center flex-col items-center  text-white font-semibold ">
          <h2>
            To become a VIP Member, please contact support who will create you a
            Gold Account.
            <br />
            Increase your VIP Level and experience rich rewards and taste of the
            VIP high life.
          </h2>
          <a href="/signup">
            <button
              type="button"
              className="hover:text-black text-white p-2 mt-3 text-xl bg-[#ffbe00] rounded-sm"
            >
              Register
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Reward;
