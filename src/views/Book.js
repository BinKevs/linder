import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import hotAugustWtStyle from "../assets/hotAugustWtStyle.jpeg";
import safetyWtStyle from "../assets/safetyWtStyle.jpeg";
import siberianWtKindle from "../assets/siberianWtKindle.jpg";
import dogThatCouldNotBard from "../assets/dog_that_could_not_bark_bg-remove.png";
import React, { useState } from "react";
function Book() {
  const [firstBookHidden, setFirstBook] = useState(false);
  const [secondBookHidden, setSecondBook] = useState(false);
  const [thirdBookHidden, setThirdBook] = useState(false);
  return (
    <>
      <section class="text-white body-font bg-white md:h-screen flex">
        <div class="mx-auto flex px-5 py-24 md:flex-row flex-col items-center w-[80%]">
          <div class="text-black lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col mb-16 md:mb-0 items-center text-center md:order-first order-last md:mt-0 mt-[32px]">
            <h1 class="md:text-7xl text-3xl mb-4 font-bold">
              {" "}
              The Dog That Couldn't <span className="text-[#AC3318]">Bark</span>
              <div className="text-4xl font-semibold text-gray-500 mt-4">
                By Jeralynne Linder
              </div>
            </h1>
            <p className={`mb-8 leading-relaxed`}>
              Look out for my other adventures "A family is introduced to a
              litter of puppies, but one special pup stands out from the rest―a
              cute little Alaskan Husky who turned this story into a mystery."
            </p>
            <div class="flex justify-center">
              <a
                target="_blank"
                href="https://www.amazon.com/Whos-Really-Driving-Your-Bus/dp/1553956028"
                class="inline-flex text-white bg-[#AC3318] border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg font-semibold"
                rel="noreferrer"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
          <div class=" md:w-[50%] w-[120%] py-[5%] rounded-bl-[80px]">
            <img
              class="object-cover object-center rounded md:ml-auto rounded-bl-[80px] md:w-auto md:w-[60%] mx-auto"
              alt="hero"
              src={siberianWtKindle}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Book;
