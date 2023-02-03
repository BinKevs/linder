import stoneHenge from "../assets/StoneHengeLogoBlack.png";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Outlet, Link } from "react-router-dom";
function FooterPart() {
  return (
    <>
      <footer class="p-4 bg-white shadow  md:p-6 text-black">
        <div className="w-[80%] mx-auto space-y-8">
          {" "}
          <img className="mx-auto" src={stoneHenge} alt="" />
          <div className="flex justify-center space-x-16">
            <a
              href="https://www.facebook.com/stonhenge-literary-media-102558429187060"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ color: "black", size: "2em" }}>
                <FaFacebookSquare />
              </IconContext.Provider>
            </a>
            <a
              href="https://www.instagram.com/stonehengeliterarymedia/"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ color: "black", size: "2em" }}>
                <FaInstagram />
              </IconContext.Provider>
            </a>
            <a
              href="https://twitter.com/literary_media"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ color: "black", size: "2em" }}>
                <FaTwitterSquare />
              </IconContext.Provider>
            </a>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-between w-[80%] mx-auto text-center">
          <span class="text-sm ">
            © 2022 Stonehenge Literary & Media
            <div className="text-center"> All Rights Reserved.</div>
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm justify-center">
            <li>
              <Link to="/" class="mr-4 hover:underline md:mr-6 ">
                Home
              </Link>
            </li>
            <li>
              <Link to="author" class="mr-4 hover:underline md:mr-6">
                About
              </Link>
            </li>

            <li>
              <Link to="review" class="mr-4 hover:underline">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="order" class="hover:underline">
                Order
              </Link>
            </li>
            <li>
              <Link to="contact" class="hover:underline ml-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default FooterPart;
