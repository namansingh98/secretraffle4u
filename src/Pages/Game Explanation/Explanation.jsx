import arrowBack from "../../assets/horizontal-right.png";
import arrowFace from "../../assets/horizontal-left-white.png";
import raffleClassic from "../../assets/raffle-classic.jpg";
import raffleOnline from "../../assets/raffle-online.png";
import rightMark from "../../assets/done_all.svg";
import scratchOnline from "../../assets/scratch-online.png";
import scratchClassic from "../../assets/scratch-classic.jpg";
import lotteryClassic from "../../assets/lottery-classic.jpg";

const Explanation = () => {
  return (
    <>
      <div className="sitebg w-full mt-10">
        <div className="flex justify-center  place-items-center ">
          <div className="main_heading ">
            <h1 className="text-6xl text-center reward_sub font-semibold ">
              Game Explanation
            </h1>
            <div className=" mt-5 mb-5 sub_heading flex justify-center items-center gap-1 text-4xl font-semibold text-white">
              <img src={arrowBack} alt="" className="h-3" />
              <h2>What is Raffle Game </h2>
              <img src={arrowFace} alt="" className="h-3" />
            </div>
            <div className="flex justify-center justify-items-center items-center">
              <div className="w-10/12 text-[#D4C07E] ">
                <p>
                  A raffle is a game competition in which people buy numbered
                  tickets, each of which has the chance of winning a prize, if
                  their ticket is randomly drawn at a set time given by the
                  organizers. A raffle may involve several separate prizes few
                  dozen, few hundred or few thousand, it is up to the
                  organizers. With a different ticket drawn for each prize, so a
                  purchaser of a ticket may not be attracted to a specific
                  prize, but for the possibility of winning any of those prizes
                  offered. The draw for prizes may be held at a special event,
                  with many onlookers and overseen by a club official or
                  well-known person. In the prize draw, one ticket is drawn for
                  the initial prize; that ticket is then left out of the
                  container. A second ticket is then drawn for the next prize,
                  and that ticket also is discarded, and so on. This continues
                  until all prizes have been won.
                </p>
                <div className="mt-5 text-center">
                  <h2 className="text-4xl mb-3  font-semibold">
                    Raffle Game and Lucky Draw
                  </h2>
                  <p>
                    are popular fun time game in many countries, so we decide to
                    create our own but better. Everything “Online!”, easy with a
                    click of a button.
                  </p>
                </div>

                {/* Image and Text Container */}
                <div className="flex w-full justify-center items-center">
                  {/* Image on the left side */}
                  <div className="flex justify-center items-center">
                    <img
                      src={raffleClassic}
                      alt="raffle Classic"
                      className="w-1/2 border-white border-2"
                    />
                  </div>

                  {/* Text content on the right side */}
                  <div className="w-full p-8">
                    <h2 className="text-3xl font-bold mb-4 -mr-3">
                      ORIGINAL CLASSIC METHOD
                    </h2>

                    <ul className="list-none pl-6 mb-4 ">
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        You would go to an event, at the entrance they would
                        usually sell you “Numbered Raffle Tickets” which are in
                        a sequence.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        Once you buy these raffle tickets at the event, you will
                        have a copy and organizers have a copy of your tickets.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        All the “Raffle Tickets” are than put in a bowl or
                        container and someone would put their hand inside the
                        bowl and pick a ticket randomly without looking inside.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        The winning raffle ticket picked are than checked
                        against a collection of prizes and the holder of the
                        chosen raffle ticket wins that prize
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center">
                  {/* Text content on the left side */}
                  <div className="w-full p-8">
                    <h2 className="text-3xl font-bold mb-4 -ml-3">
                      NEW ONLINE METHOD
                    </h2>

                    <ul className="list-none pl-6 mb-4">
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        We have created our own “Online Raffle Game” system so
                        you don’t have to go to any events, you can just do it
                        by a click of a button now.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        You can buy “Raffle Tickets” for any game you like,
                        however many tickets you want.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        Our system will generate your random ticket numbers from
                        the available numbers left in the system.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        Once we have sold the minimum amount of tickets, our
                        countdown timer will stop atomically.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        Within 5 minutes of the game stopping, our system will
                        pick random tickets from all the tickets sold and will
                        allocate winners for every prize position we have
                        available.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        You can than check in your user’s dashboard under “My
                        Raffle Winnings”.
                      </li>
                    </ul>
                  </div>

                  {/* Image on the right side */}
                  <div className="flex justify-center items-center">
                    <img
                      src={raffleOnline}
                      alt="raffle Online"
                      className="w-8/12 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center  place-items-center ">
          <div className="main_heading ">
            <div className=" mt-5 mb-5 sub_heading flex justify-center items-center gap-1 text-4xl font-semibold text-white">
              <img src={arrowBack} alt="" className="h-3" />
              <h2> What is Lottery Game </h2>
              <img src={arrowFace} alt="" className="h-3" />
            </div>
            <div className="flex justify-center justify-items-center items-center">
              <div className="w-10/12 text-[#D4C07E] ">
                <p>
                  A scratch card (also called a scratch off, scratch ticket,
                  scratcher, scratch-it, scratch game, scratch-and-win, instant
                  game, instant lottery) is a card designed for competitions,
                  often made of thin cardstock or plastic to conceal PINs, where
                  one or more areas contain concealed information which can be
                  revealed by scratching off an opaque covering. In some cases,
                  the entire scratch card area needs to be scratched to see
                  whether a prize has been won the card is printed either to be
                  a winner or not, or to reveal the secret code; the result does
                  not depend upon what portions are scratched off.
                </p>

                {/* Image and Text Container */}
                <div className="flex w-full justify-center items-center">
                  {/* Image on the left side */}
                  <div className="flex justify-center items-center">
                    <img
                      src={scratchClassic}
                      alt="raffle Classic"
                      className="w-1/2 border-white border-2"
                    />
                  </div>

                  {/* Text content on the right side */}
                  <div className="w-full p-8">
                    <h2 className="text-3xl font-bold mb-4 -mr-3">
                      ORIGINAL CLASSIC METHOD
                    </h2>

                    <ul className="list-none pl-6 mb-4 ">
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        When scratch cards first came out, you could walk into
                        your local groceries store and buy various scratch cards
                        with different jackpots.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        Once you have purchased your scratch cards, you would
                        either use a coin or your finger to scratch the card to
                        see if you have won any prizes.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        If you have won a prize, small prize amounts can be
                        claimed at the same groceries store and for bigger
                        amounts you would have to contact the number behind the
                        scratch card to make claim of your winnings.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        After a month or two, you would receive a cheque or bank
                        transfer of your winnings.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center">
                  {/* Text content on the left side */}
                  <div className="w-full p-8">
                    <h2 className="text-3xl font-bold mb-4 -ml-3">
                      ORIGINAL CLASSIC METHOD
                    </h2>

                    <ul className="list-none pl-6 mb-4">
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        You would go to an event, at the entrance they would
                        usually sell you “Numbered Raffle Tickets” which are in
                        a sequence.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        Once you buy these raffle tickets at the event, you will
                        have a copy and organizers have a copy of your tickets.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        All the “Raffle Tickets” are than put in a bowl or
                        container and someone would put their hand inside the
                        bowl and pick a ticket randomly without looking inside.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        The winning raffle ticket picked are than checked
                        against a collection of prizes and the holder of the
                        chosen raffle ticket wins that prize
                      </li>
                    </ul>
                  </div>

                  {/* Image on the right side */}
                  <div className="flex justify-center items-center">
                    <img
                      src={scratchOnline}
                      alt="raffle Classic"
                      className="w-8/2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center  place-items-center ">
          <div className="main_heading ">
            <div className=" mt-5 mb-5 sub_heading flex justify-center items-center gap-1 text-4xl font-semibold text-white">
              <img src={arrowBack} alt="" className="h-3" />
              <h2> What is Lottery Game </h2>
              <img src={arrowFace} alt="" className="h-3" />
            </div>
            <div className="flex justify-center justify-items-center items-center">
              <div className="w-10/12 text-[#D4C07E] ">
                <p>
                  A scratch card (also called a scratch off, scratch ticket,
                  scratcher, scratch-it, scratch game, scratch-and-win, instant
                  game, instant lottery) is a card designed for competitions,
                  often made of thin cardstock or plastic to conceal PINs, where
                  one or more areas contain concealed information which can be
                  revealed by scratching off an opaque covering. In some cases,
                  the entire scratch card area needs to be scratched to see
                  whether a prize has been won the card is printed either to be
                  a winner or not, or to reveal the secret code; the result does
                  not depend upon what portions are scratched off.
                </p>

                {/* Image and Text Container */}
                <div className="flex w-full justify-center items-center">
                  {/* Image on the left side */}
                  <div className="flex justify-center items-center">
                    <img
                      src={lotteryClassic}
                      alt="raffle Classic"
                      className="w-1/2 border-white border-2"
                    />
                  </div>

                  {/* Text content on the right side */}
                  <div className="w-full p-8">
                    <h2 className="text-3xl font-bold mb-4 -mr-3">
                      ORIGINAL CLASSIC METHOD
                    </h2>

                    <ul className="list-none pl-6 mb-4 ">
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        You would go to your local licensed lottery tickets
                        vendor and various groceries and super stores before a
                        certain time.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        In the shop/store, you would take a blank lottery ticket
                        and start choosing your numbers, or you would buy
                        lottery tickets with various numbers on them already.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        Once the lottery draw has been done, you would check to
                        see if you have won anything, if yes you would follow
                        the process behind the lottery ticket to claim your
                        winnings.
                      </li>
                      <li className="flex items-center mt-5 gap-2">
                        <img src={rightMark} alt="" />
                        Similar process to claiming your winnings from “Scratch
                        Cards”.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explanation;
