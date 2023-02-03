import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import hotAugustWtStyle from "../assets/hotAugustWtStyle.jpeg";
import safetyWtStyle from "../assets/safetyWtStyle.jpeg";
import missPrettyPleaseWtStyle from "../assets/missPrettyPleaseWtStyle.jpg";

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
            <h1 class="md:text-4xl text-3xl mb-4 font-bold text-[#3D8FAA]">
              {" "}
              Who's Really Driving Your Bus
            </h1>
            <p
              className={`mb-8 leading-relaxed border-t-[4px] border-[#3D8FAA] pt-2`}
            >
              Who has REALLY been driving your emotional bus during the most
              stressful times of your life? Dr. Henman helps you gain the skills
              and tools necessary for healthy growth and change, offering to
              join you in a Therapeutic Coaching relationship through the book.
              He presents a "No-Fault" approach to change that allows you to
              deepen your core esteem and spirituality.
            </p>
            <div class="flex justify-center">
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
          <div class="bg-gradient-to-r from-[#FFFEFE] to-[#3D8FAA] md:w-[50%] w-[90%] py-[5%] rounded-bl-[80px]">
            <img
              class="object-cover object-center rounded md:ml-auto rounded-bl-[80px] md:w-auto w-[60%] mx-auto"
              alt="hero"
              src="https://m.media-amazon.com/images/I/51xzUpaHZUL._SX331_BO1,204,203,200_.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Book;
