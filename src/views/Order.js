import { IconContext } from "react-icons";
import { AiOutlineAmazon } from "react-icons/ai";
function Order() {
  return (
    <>
      <div className="md:h-screen flex">
        <div className="w-[80%] m-auto md:pt-[80px] pt-[90px]">
          <div className="">
            <div className="flex md:flex-row flex-col relative ">
              <div className="md:w-[50%] w-[90%] md:mx-0 mx-auto bg-[3D8FAA] text-center md:text-5xl text-2xl font-semibold my-auto ">
                <div className="md:text-3xl text-xl text-center font-normal text-gray-500 md:absolute top-1 left-1">
                  Grab Your Copy Now{" "}
                </div>
                "Who's Really Driving Your Bus"
              </div>
              <div className="md:w-[50%] w-[90%]">
                {" "}
                <img
                  className=" h-[200px] w-[100%] object-cover"
                  src="https://www.wallpaperflare.com/static/772/242/451/bulli-volkswagen-auto-model-car-wallpaper.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center md:space-x-16 md:space-y-0 space-y-8 pt-[32px]">
              <div>
                <div class="min-w-md rounded-lg ">
                  <div class="p-5">
                    <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                      Kindle
                    </h5>
                    <h5 class="mb-2 text-4xl font-bold tracking-tight">
                      $2.99
                    </h5>
                    <div class="mb-3 font-normal space-y-4">
                      <div>Print length : 256 pages</div>
                      <div>Language: English </div>
                      <div>File size : 1687 KB</div>
                      <div>Page Flip : Enabled</div>
                    </div>
                    <a
                      href="https://www.amazon.com/Whos-Really-Driving-Your-Bus-ebook/dp/B0791M84PR/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr="
                      target="_blank"
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                      rel="noreferrer"
                    >
                      BUY NOW ON
                      <div>
                        <IconContext.Provider
                          value={{ color: "white", size: "2em" }}
                        >
                          <AiOutlineAmazon />
                        </IconContext.Provider>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="min-w-md rounded-lg ">
                  <div class="p-5">
                    <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                      Paperback
                    </h5>
                    <h5 class="mb-2 text-4xl font-bold tracking-tight">
                      $15.02
                    </h5>
                    <div class="mb-3 font-normal space-y-4">
                      <div>Print length : 256 pages</div>
                      <div>Language: English </div>
                      <div>ISBN-10 : 0962901458</div>
                      <div>ISBN-13 : 978-1553956020</div>
                    </div>
                    <a
                      href="https://www.amazon.com/Whos-Really-Driving-Your-Bus/dp/1553956028/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="
                      target="_blank"
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                      rel="noreferrer"
                    >
                      BUY NOW ON
                      <div>
                        <IconContext.Provider
                          value={{ color: "white", size: "2em" }}
                        >
                          <AiOutlineAmazon />
                        </IconContext.Provider>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
