import {  Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  const [hamBurgetState, setHamBurgetState] = useState(false);
  const [colorBgNav, setColorBgNav] = useState(false);
  const listenScrollEvent = (e) => {
    if (window.scrollY > 200) {
      setColorBgNav(true);
    } else {
      setColorBgNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <>
      {" "}
      <nav
        className={`px-4 sm:px-8 py-4 fixed top-0 w-full z-50 font-Montserrat ${
          location.pathname === "/"
            ? colorBgNav
              ? hamBurgetState ? 'bg-transparent md:text-[#3E8FAA] text-black' : "bg-white md:text-[#3E8FAA] text-black"
              : "bg-transparent  md:text-[#E6EFF3] text-black"
            : hamBurgetState ? 'bg-transparent md:text-[#3E8FAA] text-black' : "bg-white md:text-[#3E8FAA] text-black"
             }`}
        id="navbar"
      >
        <div className=" flex flex-wrap justify-between items-center mx-auto">
          <Link to="author" className="flex items-center">
            {!hamBurgetState && (
              <span className={` ${location.pathname === "/" ? 'md:text-[#3E8FAA]' : ""} md:text-5xl text-xl font-bold whitespace-nowrap py-4 pr-4`}>
                <span className=" p-2"> James O. </span> Henman
              </span>
            )}
         
          </Link>

          <div class="hamburgerDiv">
            <div
              id="hamburger"
              className={hamBurgetState ? "open" : ""}
              onClick={() => setHamBurgetState(!hamBurgetState)}
            >
              <svg width="50" height="50" viewBox="0 0 100 100">
                <path
                  class="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path class="line line2" d="M 20,50 H 80" />
                <path
                  class="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </div>
          </div>
          <div
            className="navLink navLinkDiv  w-full  md:w-auto"
            id="navbar-default"
          >
            <ul className="flex  p-4  space-x-12 mt-0 lg:mr-8 mr-4 text-xl font-medium ">
              <li>
                <Link
                  to="/"
                  className="py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 md:hover:text-[#2A4C9A] "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {/* <li onClick={() => setAboutState(!aboutState)}>
                <div className="relative py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">
                  <span className="md:hover:text-[#2A4C9A]  ">About</span>
                 {aboutState && (
                    <div className="absolute top-12 left-0 bg-transparent px-10 py-2 space-y-2 rounded-lg !text-white">
                      <div>
                        <Link
                          to="author"
                          className="py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 md:hover:text-[#2A4C9A] "
                          aria-current="page"
                        >
                          Author
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="book"
                          className="py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 md:hover:text-[#2A4C9A] "
                          aria-current="page"
                        >
                          Book
                        </Link>
                      </div>
                    </div>
                  )} 
                </div>
              </li> */}
              <li>
                <Link
                  to="author"
                  className=" py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2A4C9A] md:p-0 "
                >
                   Author
                </Link>
              </li>
              <li>
                <Link
                  to="book"
                  className=" py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2A4C9A] md:p-0 "
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  className=" py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2A4C9A] md:p-0 "
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="order"
                  className=" py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2A4C9A] md:p-0 "
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className=" py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2A4C9A] md:p-0 "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {hamBurgetState && (
          <motion.div
            className="h-screen bg-white  w-[60%]  right-0 z-40 fixed flex justify-center items-center"
            initial={{ opacity: 0, x: "100vw", scale: 0.1 }}
            animate={{ opacity: 1, x: "0px", scale: 1 }}
            exit={{ opacity: 0, x: "100vw", scale: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="text-black space-y-4 text-xl font-Montserrat font-medium text-center pb-[82px]">
              {" "}
              <li>
                <Link
                  onClick={() => setHamBurgetState(!hamBurgetState)}
                  to="/"
                  className=""
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {/* <li onClick={() => setAboutState(!aboutState)}>
                About
                {aboutState && (
                  <div className=" space-y-2 ml-[80px] text-left border-l-4 border-[#2A4C9A] pl-2">
                    <div>
                      <Link
                        onClick={() => setHamBurgetState(!hamBurgetState)}
                        to="author"
                        className=""
                        aria-current="page"
                      >
                        Author
                      </Link>
                    </div>
                    <div>
                      <Link
                        onClick={() => setHamBurgetState(!hamBurgetState)}
                        to="book"
                        className=""
                        aria-current="page"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                )}
              </li> */}
               <li>
                <Link
                  onClick={() => setHamBurgetState(!hamBurgetState)}
                  to="author"
                  className=" "
                >
                  Author
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setHamBurgetState(!hamBurgetState)}
                  to="book"
                  className=" "
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setHamBurgetState(!hamBurgetState)}
                  to="order"
                  className=" py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2A4C9A] md:p-0 "
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setHamBurgetState(!hamBurgetState)}
                  to="reviews"
                  className=" "
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setHamBurgetState(!hamBurgetState)}
                  to="contact"
                  className=""
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
