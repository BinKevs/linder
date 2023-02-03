import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";

import whoReallyDrivingYourBusBook from "../assets/whoReallyDrivingYourBusBook.jpg";
import yellowSchoolBusToyModel from "../assets/yellowSchoolBusToyModel.jpeg";
import prettyPleaseBook from "../assets/prettyPleaseBook.jpeg";
import paulCollectionImages from "../assets/paulCollectionImages.jpg";
import amazonCom from "../assets/amazonCom.png";
function Landing() {
  return (
    <>
      {/* https://t3.ftcdn.net/jpg/01/44/89/90/360_F_144899041_31mF1BTdxHWxD5n0MRjszvrGp05x430x.jpg */}
      <div
        className={`landingDiv bg-[url(assets/yellowSchoolBusToyModel.jpeg)] bg-no-repeat bg-cover bg-left-bottom`}
      >
        <div className="flex md:flex-row flex-col md:h-screen relative">
          <div className="md:w-[60%] w-[80%] md:mx-0 mx-auto md:h-[100%] h-screen flex md:text-[#E6EFF3]">
            <div className="m-auto w-[80%] space-y-8 ">
              <div className="md:text-7xl text-4xl font-bold ">
                James O. Henman
              </div>
              <div className="text-2xl font-semibold ">
                You can learn to recognize who is really driving your emotional
                bus in the most difficult "traffic" areas of your life.
              </div>
            </div>
          </div>
          <div className="md:w-[40%] w-[80%] md:mx-0 mx-auto  h-[100%]">
            <div className="bg-[#FFFEFE] mx-auto md:w-[40%] w-[80%] h-[65%] md:absolute bottom-0 flex justify-center text-black">
              <div className="my-auto">
                <div className="flex lg:flex-row flex-col justify-center">
                  <div className="lg:w-[40%] w-[80%] lg:mx-0 mx-auto flex">
                    <img
                      className="max-w-[75%] min-w-[120px] mx-auto lg:my-auto my-[8%]"
                      src={whoReallyDrivingYourBusBook}
                      alt=""
                    />
                  </div>
                  <div className="lg:w-[40%] w-[80%] lg:mx-0 mx-auto my-auto space-y-4 lg:text-left text-center">
                    <div className="text-2xl font-bold">
                      Who's Really Driving Your Bus
                    </div>
                    <div>by James O. Henman</div>
                    <div>
                      You can learn to recognize who is really driving your
                      emotional bus in the most difficult "traffic" areas of
                      your life. Dr. Henman invites you to sit across from him
                      as if you were actually in a Therapeutic Coaching session.{" "}
                    </div>
                    <a
                      target="_blank"
                      href="https://www.amazon.com/Whos-Really-Driving-Your-Bus/dp/1553956028"
                      class="inline-flex text-white bg-[#FF9900] border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg font-semibold"
                      rel="noreferrer"
                    >
                      Buy on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full bg-gradient-to-b from-[#FFFEFE] to-[#3D8FAA] flex text-white">
        <div>
          <div className="h-screen flex">
            <div className="w-[60%] m-auto text-center space-y-8">
              {/* <div className="text-6xl font-semibold">
                More About James Henman
              </div> */}
              <div className="font-light md:text-2xl text-xl text-black">
                The material on this site is incredibly deep and yet suprisingly
                simple. It shares wisdom on how to approach the process of
                change. Wisdom requires time and thought. Please give your self
                the time to digest these nuggets of wisdom. Healthy change is a
                participation process practice. Practice. and more practice.
              </div>
              {/* <a
                target="_blank"
                href="https://www.amazon.com/Big-Trains-Backyard-Edmund-Fischetti-ebook/dp/B00CHVBARM?ref_=ast_sto_dp"
                class="inline-flex text-white bg-[#2b6c78] border-0 py-2 px-6 focus:outline-none rounded text-lg font-semibold"
                rel="noreferrer"
              >
                Meet The Author
              </a> */}
            </div>
          </div>
          <div className="h-screen flex ">
            <div className="w-[60%] m-auto text-center space-y-8">
              <div className="md:text-6xl text-4xl font-semibold">
                1. The power of choosing
              </div>
            </div>
          </div>
          <div className="h-screen flex">
            <div className="w-[60%] m-auto text-center space-y-8">
              <div className="md:text-6xl text-4xl font-semibold">
                2. Perceptual Filters
              </div>
            </div>
          </div>
          <div className="h-screen flex">
            <div className="w-[60%] m-auto text-center space-y-8">
              <div className="md:text-6xl text-4xl font-semibold">3. I am not my story</div>
            </div>
          </div>
          <div className="h-screen flex">
            <div className="w-[60%] m-auto text-center space-y-8">
              <div className="md:text-6xl text-4xl font-semibold">
                4. Change is the participation process
              </div>
            </div>
          </div>
          <div className="h-screen flex">
            <div className="w-[60%] m-auto text-center space-y-8">
              <div className="md:text-6xl text-4xl font-semibold">
                5. Freedom is accepting the consequences of our choices
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white md:h-screen flex ">
        <div className="m-auto w-[80%] flex md:flex-row flex-col">
          <div className="md:w-[50%] w-[100%] space-y-16 md:my-0 my-[8%]">
            <div className="space-y-4">
              <div className="text-5xl text-black font-semibold">
                What The Critics Says
              </div>
              <div className="text-2xl text-gray-500 font-semibold">
                Review By "Goodreads"
              </div>
            </div>
            <div>
              <img
                className="rounded-br-[50px]"
                src="https://img.huffingtonpost.com/asset/59f9f667180000bb70dfd3cb.jpeg?ops=scalefit_720_noupscale"
                alt=""
              />
            </div>
          </div>
          <div className="md:w-[50%] w-[100%] m-auto">
            <div className="md:w-[70%] w-[100%] m-auto space-y-16 text-md">
              <div className="text-2xl font-semibold">
                <div>Who's Really Driving Your Bus</div>
                <div>by James O. Henman</div>
              </div>
              <div>
                From the first page on, readers learn that they do not have to
                struggle with emotional and addictive problems alone- whether
                the problems are related to low self-esteem, depression,
                anxiety/panic problems, relationship difficulties, or the gamut
                of addictive problems.
              </div>
              <div>
                {" "}
                You can learn to recognize who is really driving your emotional
                bus is the most difficult "traffic" areas of your life. Dr.
                Henman invites you to sit across from him as if you were
                actually in a Therapeutic Coaching session. It is an intimate
                experience rather than an intellectual exercise, as you are
                encouraged to reflect deeply on Nuggets of Wisdom about the
                process of change
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" bg-black ">
        <div className="text-white w-[90%] mx-auto pt-[80px] gridLandingDivParent ">
          <div className="gridLandingDiv m-auto grid grid-cols-3 space-x-8 ">
            <div className=" md:min-w-[45%] flex collectionDiv mx-auto">
              <img
                className="shadow-lg shadow-white/60 my-auto"
                src={paulCollectionImages}
                alt=""
              />
            </div>

            <div className="md:text-lg sm:text-sm text-lg md:text-start text-center flex flex-col justify-center">
              <div className="lg:text-4xl md:text-2xl pb-4 font-semibold">
                Paul Edmund Fischetti
              </div>
              <div className="text-justify">
                P. E. Fischetti, born and raised in the suburbs of Washington
                DC, attended Walter Johnson High School and the University of
                Maryland, where he earned a B.A. in Criminology and a M.S. in
                Marriage and Family Therapy. He currently lives in Silver
                Spring, MD with his wife of 34 years. They have two young adult
                children who live locally.
              </div>
              <Link to="reviews" className="text-lg my-6 text-white flex">
                Read More{" "}
                <IconContext.Provider
                  value={{
                    size: "2.1em",
                  }}
                >
                  <AiOutlineRight />
                </IconContext.Provider>
              </Link>
            </div>

            <div className=" md:min-w-[25%]  mx-auto flex">
              <img
                className="shadow-lg shadow-white/60 my-auto"
                src="https://m.media-amazon.com/images/S/amzn-author-media-prod/jrp2e8rjck0vf86if1boqanc2f._SX450_.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center h-[60vh]">
          <div className="flex flex-col justify-center w-[75%]">
            <div className="space-y-8">
              <div className=" text-white sm:text-7xl text-5xl">
                Book talks on <span className="text-[#1DB954]">Spotify</span>{" "}
              </div>{" "}
              <iframe
                className=""
                src="https://open.spotify.com/embed/episode/5hdoHPPcDxcAyqHFG1rCbS?utm_source=generator"
                width="100%"
                height="280"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-[75%] mx-auto">
          <div className="grid grid-cols-2 gap-8  glimpseReviewDiv">
            <div className="">
              <div className="py-8 uppercase text-white text-3xl font-semibold">
                Let the Wonders of Second Chances Captivate You in P.E.
                Fischetti’s Book “The Safety”
              </div>
              <div className="py-4 text-gray-400 text-xl font-semibold">
                Silver Spring, MD – WEBWIRE – Friday, December 9, 2022
              </div>
              <div className="text-gray-400 text-md text-justify">
                The narrative, which takes place in the year 2029 and beyond,
                centers on Annie Finelli, a fifteen-year-old football star and
                Russell Santucci, a twenty-six-year-old pianist and baseball
                hero Alex Santucci’s nephew. Twenty years early in his midlife
                crisis, Russell only discovers meaning in his life by playing
                the piano. He battles in managing his desire for sex, drug use,
                and alcohol consumption.
              </div>
              <Link to="reviews" className="text-lg py-12 text-white flex ">
                Read More{" "}
                <IconContext.Provider
                  value={{
                    size: "1.8em",
                  }}
                >
                  <AiOutlineRight />
                </IconContext.Provider>
              </Link>
            </div>
            <div className="">
              <div className="py-8 uppercase text-white text-3xl font-semibold">
                Explore Intriguing Lives in “Miss Pretty Please” by P.E.
                Fischetti
              </div>
              <div className="py-4 text-gray-400 text-xl font-semibold">
                Oro Valley, AZ and Silver Spring, MD – WEBWIRE – Monday,
                December 5, 2022
              </div>
              <div className="text-gray-400 text-md text-justify">
                The narrative, which takes place in the year 2029 and beyond,
                centers on Annie Finelli, a fifteen-year-old football star and
                Russell Santucci, a twenty-six-year-old pianist and baseball
                hero Alex Santucci’s nephew. Twenty years early in his midlife
                crisis, Russell only discovers meaning in his life by playing
                the piano. He battles in managing his desire for sex, drug use,
                and alcohol consumption.
              </div>
              <Link to="reviews" className="text-lg py-12 text-white flex ">
                Read More{" "}
                <IconContext.Provider
                  value={{
                    size: "1.8em",
                  }}
                >
                  <AiOutlineRight />
                </IconContext.Provider>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Landing;
