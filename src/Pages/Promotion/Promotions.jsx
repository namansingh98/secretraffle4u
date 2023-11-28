import spclofr from "../../assets/special offers.png";
import gift from "../../assets/gifts.png";
import gifttwo from "../../assets/gift2.png";
import giftthree from "../../assets/gift3.png";

const Promotions = () => {
  return (
    <>
      <div className="Promotions flex flex-col flex-wrap content-center justify-items-center mt-10">
        <div className="w-10/12  flex flex-wrap  justify-center">
          <img src={spclofr} alt="special offer" />
        </div>

        <div className="w-[80%] justify-center text-white">
          <h5>
            Created on 7th August 2021
            <br />
            Last Updated on 2nd August 2023
          </h5>
          <div className="flex justify-center flex-col">
            <h1 className="text-4xl text-center text-[#009900] font-semibold">
              Promotion Details
            </h1>
            <h2 className="text-xl font-semibold">
              Promotion 1{" "}
              <span className="text-[#009900] ">(FREE! Raffle Ticket)</span>
            </h2>
            <p>
              To claim your &#34;Free Raffle Ticket&#34;, please like and follow
              our page on &#34;Facebook, Instagram and Tik Tok so will be
              notified of all new lucky draw games. You will have to create a
              &#34;Players Account&#34; go to &#34;Promotion Tab&#34; click
              &#34;Promotion 1&#34; and upload your images/screenshot, choose
              the &#34;Raffle Ticket&#34; of a &#34;Lucky Draw Game&#34; you
              prefer from the drop-down options, and click submit. Please bear
              with us, depending on how many approvals we have to confirm.
              Usually it will be done within a few hours, max 24hrs.
            </p>
            <h2 className="text-xl font-semibold mt-5">
              Promotion 2<span className="text-[#009900] "> (FREE! $15)</span>
            </h2>
            <p>
              To claim your &#34;Free $15&#34;, please &#34;Like&#34; any 5
              post, add 5 &#34;Comments&#34; on the same post you liked and
              finally invite 5 friends who would also enjoying playing
              &#34;Lucky Draw Games&#34;. You will need to create a free
              &#34;Players Account&#34; go to &#34;Promotion Tab&#34; click
              &#34;Promotion 2&#34; and upload your images/screenshot as per the
              instructions in the &#34;Promotion Tab&#34;. Please bear with us,
              depending on how many approvals we have to confirm. Usually it
              will be done within a few hours, max 24hrs. Note* If you do not
              have &#34;Social Media Accounts&#34;, than you can still claim
              your FREE! $15 when you make your first deposit from any of the 2
              &#34;Deposit Options Available&#34;
            </p>
            <h2 className="text-xl font-semibold mt-5">
              Promotion 3<span className="text-[#009900] "> (FREE! $25)</span>
              50% Bonus
            </h2>
            <p>
              This is a &#34;Monthly Promotion&#34; which is available every
              &#34;30 Days&#34; from when you &#34;Click&#34; and make payment.
              Deposit $50 and receive FREE! $25, in your &#34;Players
              Account&#34; which you will receive $75 in your &#34;Players
              Account&#34;. (This &#34;Promotion&#34; is ONLY useable once a
              month). Please bear with us, depending on how many approvals we
              have to confirm. Usually it will be done within a few hours, max
              24hrs.
            </p>
            <h2 className="text-xl font-semibold mt-5">
              Promotion 4<span className="text-[#009900] "> (FREE! $100)</span>
              Double-Up Bonus 100% MATCHED!!!
            </h2>
            <p>
              This is a basic &#34;Sign-up Bonus&#34;, which is available only
              to use once. To claim your &#34;Free $100&#34;, deposit $100 and
              you will receive $200 in your &#34;Players Account&#34;. (This
              &#34;Sign-Up Bonus&#34; is ONLY! useable once on your &#34;First
              Deposit&#34;). Please bear with us, depending on how many
              approvals we have to confirm. Usually it will be done within a few
              hours, max 24hrs.
            </p>
            <h2 className="text-xl font-semibold mt-5">
              Promotion 5
              <span className="text-[#009900] ">
                {" "}
                (FREE! $555 & Special Gifts)
              </span>
              Double-Up Bonus 100% MATCHED!!!
            </h2>
            <p>
              This is a V.I.P &#34;Sign-up Bonus&#34;, which is available only
              to use once. To claim your &#34;Free $555&#34;, deposit $555 and
              you will receive $1,110 in your &#34;Players Account&#34;. (This
              V.I.P &#34;Sign-Up Bonus&#34;. ONLY! useable once on your
              &#34;First Deposit&#34;). With VIP Sign-Up, you will also get the
              following FREE! special gifts. 5 Raffle Tickets to &#34;Fluffy
              Snowy Christmas Eve&#34; lucky draw game. 5 Bonus &#34;V.I.P
              Scratch Card&#34; game. Please bear with us, depending on how many
              approvals we have to confirm. Usually it will be done within a few
              hours, max 24hrs.
            </p>
            <div className="flex justify-center">
              <img src={gift} alt="" />
            </div>
            <div className="flex justify-center">
              <img src={gifttwo} alt="" />
              <img src={giftthree} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotions;
