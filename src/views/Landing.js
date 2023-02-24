import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";

import dogThatCouldNotBarkFrontBlue from "../assets/dogThatCouldNotBarkFrontBlue.jpeg";
import dogThatCouldNotBarkFrontGreen from "../assets/dogThatCouldNotBarkFrontGreen.jpeg";
import linderWtOutBg from "../assets/linder_wtout_bg.png";
import siberianWtInfo from "../assets/siberianWtInfo.jpg";
import paulCollectionImages from "../assets/paulCollectionImages.jpg";
import amazonCom from "../assets/amazonCom.png";
function Landing() {
  return (
    <>
      <div className="bg-[#46B0C8] ">
        <div className="flex md:flex-row flex-col md:h-screen relative md:w-[80%] mx-auto justify-center">
          <div className="md:w-[50%]  md:mx-0 mx-auto md:h-[100%] h-[80vh] md:mt-0 mt-[20vh] flex text-white">
            <div className="m-auto md:w-[80%] w-[90%] space-y-8 text-center font-RobotoSlab ">
              <div className="xl:text-7xl text-4xl font-bold ">
                The Dog That Couldn't{" "}
                <span className="text-[#AC3318]">Bark</span>
                <div className="xl:text-4xl text-2xl font-semibold mt-4">
                  By Jeralynne Linder
                </div>
              </div>
              <div className="md:text-2xl text-xl font-semibold ">
                "A family is introduced to a litter of puppies, but one special
                pup stands out from the rest―a cute little Alaskan Husky who
                turned this story into a mystery."
              </div>
            </div>
          </div>{" "}
          <div className="md:w-[50%] w-[80%] mx-auto flex md:h-screen justify-center items-center  ">
            <div className=" m-auto flex flex-col justify-center items-center w-full">
              <div className="md:flex-row flex-col min-w-[320px] flex md:space-x-8 md:space-y-0 space-y-8 justify-center ">
                <img
                  className="md:w-[400px] md:min-w-[200px] w-[200px] mx-auto"
                  src={dogThatCouldNotBarkFrontGreen}
                  alt=""
                />
                <img
                  className="md:w-[400px] md:min-w-[200px] w-[200px] mx-auto"
                  src={dogThatCouldNotBarkFrontBlue}
                  alt=""
                />
              </div>

              <a
                target="_blank"
                href="https://www.amazon.com/Dog-That-Couldnt-Bark-ebook/dp/B0BPJYXGXQ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1675090646&sr=8-1"
                class="uppercase font-bold text-white bg-[#AC3318] border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded md:text-lg my-8 max-w-[50%] md:min-w-[320px] w-full text-center "
                rel="noreferrer"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1675515602 md:block hidden">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="h-full bg-white flex text-white">
        <div>
          <div className="md:h-screen flex">
            <div className="w-[70%] m-auto md:text-center flex md:flex-row flex-col md:space-x-16 md:space-y-0 space-y-8 ">
              <div className="bg-[#46B0C8] rounded-bl-[780px] xl:min-w-[600px] min-w-[250px]">
                <img
                  className="mx-auto rounded-3xl xl:min-w-[350px] min-w-[150px]"
                  src={linderWtOutBg}
                  alt=""
                />
              </div>

              <div className=" md:text-2xl text-md text-black my-auto md:text-justify">
                Hello, my name is{" "}
                <span className="font-bold md:text-7xl text-2xl text-[#46B0C8] p-8">
                  {" "}
                  Jeralynne Linder{" "}
                </span>
                , if you met the 14-year-old Jeralynne and told her, she can be
                an aspiring author one day, she'd laugh and say stop playing!
                Little did I know, my hobby for writing love songs? Would open
                the door, to a future in writing books. As I got older my
                priorities shifted. I had a baby boy and had to focus on work.
                Writing love songs was placed on hold but not forgotten.
                Christmas of 2015, Me and some of my colleagues were laid off
                and waiting for instructions from our superiors.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white md:h-screen flex pt-[10vh]">
        <div className="m-auto md:w-[100%] w-[80%] ">
          <div className="space-y-4 text-center">
            <div className="md:text-6xl text-4xl text-black font-bold">
              What The Critics <span className="text-[#46B0C8]"> Says</span>
            </div>
            <div className="md:text-2xl text-lg text-gray-500 font-semibold">
              Review By "Kate​D From SOUNDCLOUD"
            </div>
          </div>
          <div className="space-y-4 text-center">
            <div className="md:text-2xl text-lg text-gray-500 font-semibold">
              Click below to listen the review
            </div>
            <a
              href="https://soundcloud.com/kated-294710598/jeralynne-linder/s-B0Z9GcLSfZS"
              className="md:text-5xl text-2xl text-[#F07D00] font-bold animate-pulse"
            >
              SOUNDCLOUD
            </a>
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="md:w-[50%] w-[100%] space-y-16 md:my-0 my-[8%]">
              <div>
                <img
                  className="rounded-br-[50px]"
                  src="https://images.squarespace-cdn.com/content/v1/53334ebde4b0ea9993c6ddbd/1630962901977-X5EZ9Q88NGJKKKGL7H22/close-up-shot-adorable-little-siberian-husky-puppy-with-blue-eyes-lying-near-his-food-bowl-isolated-white.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-[50%] w-[100%] m-auto md:text-left text-center">
              <div className="md:w-[70%] w-[100%] m-auto md:space-y-16 space-y-8 ">
                <div className=" fspace-y-8">
                  <div className="md:text-5xl text-2xl ">
                    The Dog That Couldn't Bark
                  </div>
                  <div className="md:text-4xl text-xl text-gray-500">
                    By Jeralynne Linder
                  </div>
                </div>
                <div className="md:text-2xl text-xl md:text-justify">
                  "I love the way this Author thinks. Jeralynne's work is a gift
                  to all. This book is very clever."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={siberianWtInfo} className="w-full md:my-0 my-[10vh]" alt="" />
      </div>
    </>
  );
}

export default Landing;
