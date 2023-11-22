import horizontalLeft from "../../../assets/horizontal-left.png";
import horizontalRight from "../../../assets/horizontal-right.png";
import deposit_withdraw from "../../../assets/deposit_withdraw.png";
const Explanation = () => {
  return (
    <>
      <div className="items-center flex font-semibold justify-center text-white md:text-2xl xl:text-4xl text-md ">
        <img
          src={horizontalRight}
          alt=""
          className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]   "
        />
        <div className="flex items-center text-sm">
          &nbsp; Easy Steps to Sign-Up and
          <span className="text-[#F5D148]">
            &nbsp; get $15 FREE to&#34;Play &#34;
          </span>
          &nbsp; &nbsp;{" "}
          <img
            src={horizontalLeft}
            alt=""
            className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap justify-center items-center gap-4 p-4">
          {/* Card 1 */}
           <div className="w-1/5 bg-[#F5D148] clippedPath">
          <div className="max-w-xs bg_gradient  text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Step 1</h2>
            <p>
              Create an “Account” and get $15 FREE , please follow instructions
              in your account.
            </p>
          </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/5 bg-[#F5D148] clippedPath">
          <div className="max-w-xs bg_gradient text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Step 2</h2>
            <p>Buy “Raffle Tickets” for any games you like.
All your tickets will be under “My Raffle Tickets” in your “Players Dashboard”.</p>
          </div>
          </div>

          {/* Card 3 */}
          <div className="w-1/5 bg-[#F5D148] clippedPath ">
          <div className="max-w-xs bg_gradient text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Step 3</h2>
            <p>Wait for “Minimum Tickets” to be sold. our system will pick
“Random Winners” From tickets sold.</p>
          </div>
          </div>

          {/* Card 4 */}
          <div className="w-1/5 bg-[#F5D148] clippedPath">
          <div className="max-w-xs bg_gradient text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Step 4</h2>
            <p>Once the game is over. You can instantly withdraw your “Prize Winnings”.</p>
          </div>
          </div>

          {/* Card 5 */}
          <div className=" w-1/5 bg-[#F5D148] clippedPath">
          <div className="max-w-xs bg_gradient text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Step 5</h2>
            <p>Enjoy spending your &#34;Winnings&#34;.</p>
          </div>
        </div>
        </div>
      </div>

      <div className="w-full mt-5 mb-2">
        <div className="items-center flex font-semibold justify-center text-white md:text-2xl xl:text-4xl text-xl ">
          <img
            src={horizontalRight}
            alt=""
            className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]   "
          />
          <div className="flex items-center">
            &nbsp; Explanation &nbsp; &nbsp;{" "}
            <img
              src={horizontalLeft}
              alt=""
              className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]"
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center flex-col m-8">
        <div className="w-2/4 text-white text-md leading-7">
          <h3 className="text-2xl font-semibold">
            What is{" "}
            <span className="text-[#F5D148]">&#34;Online Raffle Game&#34;</span>
            ?
          </h3>
          <p>
            A raffle game is where people buy numbered tickets, each of which
            has the chance of winning a prize, if their ticket is randomly drawn
            at a set time given by the organizers. Our raffle games involve
            several separate prizes from few dozen, few hundred to few thousand.
          </p>
          <ul>
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> We have created an
              amazing online website so you don’t need to go anywhere to buy our
              tickets.
            </li>
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> All your tickets are
              also backed-up on our servers for any game issues, cancelation or
              server errors.
            </li>{" "}
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> We store ticket date so
              we know which players to refund and give tickets for next game.
            </li>
            <li>
              <span className="text-[#F5D148]">✓</span> s So, you can rest
              ensure to have a peace of mind and enjoy our games knowing your
              tickets are safely.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col m-5">
        <div className="w-2/4 text-white text-md leading-7">
          <h3 className="text-2xl font-semibold">
            What is the difference between{" "}
            <span className="text-[#F5D148]">
              &#34;Raffle Games and Lucky Draw&#34;
            </span>
            ?
          </h3>
          <p>
            There is no difference between them. Different people from different
            part of the world has different names. ome people call it “Raffle
            Game” some people call it “Lucky Draw”.
          </p>
          <ul>
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> “Raffle Game” and “Lucky
              Draw” have the same end results.
            </li>{" "}
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> Someone will always win
              as long as “minimum tickets” have been sold.
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-center items-center flex-col m-5">
        <div className="w-2/4 text-white text-md leading-7">
          <h3 className="text-2xl font-semibold">
            What is the difference between
            <span className="text-[#F5D148]">
              &#34;Lucky Draw Games and Lottery Games&#34;
            </span>
            ?
          </h3>
          <p>
            Lucky Draw games tend to have a range of prizes available, even up
            to thousands of prizes positions. With lottery games it has minimal
            range available usually 5 – 10 various prizes. o win a lottery games
            main jackpot or the smaller prizes, you have to match all the
            numbers chosen with their numbers (for main jackpot), or some
            numbers for (smaller prizes). With Lucky Draw games, as long as
            minimum tickets are sold there is “Always a Winner” from Lucky Draw
            tickets sold, every time, every game.
          </p>
          <ul>
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> Lucky Draw games always
              has a winner, unlike lottery games.
            </li>
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> Win multiple prize
              positions with multiple tickets.
            </li>{" "}
          </ul>
          <div className="flex justify-center m-5">
            <button className="border border-[#F5D148] bg-[#487644] p-[3px]">
              More Details
            </button>
          </div>
        </div>
      </div>
      <div className="items-center flex font-semibold justify-center text-white md:text-2xl xl:text-4xl text-md ">
        <img
          src={horizontalRight}
          alt=""
          className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]   "
        />
        <div className="flex items-center text-[25px]">
          &nbsp; Prize Settlement
          <span className="text-[#F5D148]">
            &nbsp; &#34;Deposits & Withdrawals &#34;
          </span>
          &nbsp; &nbsp;{" "}
          <img
            src={horizontalLeft}
            alt=""
            className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col m-10">
        <div className="flex justify-center items-center w-full">
          {/* Text on the left */}
          <div className="w-1/3 text-white text-xl leading-10">
            <ul>
              <li>
                {" "}
                <span className="text-[#F5D148]">✓</span> Global Debit/Credit
                Card options.
              </li>{" "}
              <li>
                {" "}
                <span className="text-[#F5D148]">✓</span> Instant Bank Transfer
                (Various Countries Only).
              </li>
              <li>
                {" "}
                <span className="text-[#F5D148]">✓</span> Withdrawal your prize
                winnings via bank transfer or receive through TransferWise.
              </li>
              <li>
                {" "}
                <span className="text-[#F5D148]">✓</span> Payment settlements
                from UK banks, 3–5 working days some countries 24-48 hours.
              </li>
              <li>
                {" "}
                <span className="text-[#F5D148]">✓</span> All transactions
                carried out are safe and 100% secured.
              </li>
            </ul>
          </div>

          {/* Image on the right */}
          <div className="w-1/4  ml-4">
            <img
              src={deposit_withdraw}
              alt="Description of the image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explanation;
