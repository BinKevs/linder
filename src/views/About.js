import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function About() {
  return (
    <>
      <div className="md:h-screen h-full bg-black  bg-cover bg-no-repeat flex justify-center align-middle">
        {" "}
        <Carousel
          showThumbs={false}
          showIndicators={false}
          autoPlay={true}
          swipeable={true}
          showArrows={false}
          emulateTouch={true}
          showStatus={false}
          className="w-[80%] my-auto"
        >
          <div className="flex flex-col justify-center align-middle md:flex-row md:space-x-20">
            <div className=" text-left font-Montserrat text-white space-y-6 w-[60%]">
              <div className=" font-light">New Book</div>
              <div className="text-3xl font-medium">
                How to Be a (Young) Antiracist
              </div>
              <div className="font-light">Coming soon: January 31, 2023</div>
              <div className=" font-medium">
                {" "}
                How to be a (Young) Antiracist is a dynamic reframing of the
                concepts shared in the adult book, with young adulthood front
                and center. Aimed at readers 12 and up, and co-authored by
                award-winning children's book author Nic Stone, How to be a
                (Young) Antiracist empowers teen readers to help create a more
                just society. Antiracism is a journey--and now young adults will
                have a map to carve their own path. Kendi and Stone have revised
                this work to provide anecdotes and data that speaks directly to
                the experiences and concerns of younger readers, encouraging
                them to think critically and build a more equitable world in
                doing so.
              </div>
              <div></div>
            </div>
            <div className="my-auto">
              <img
                className="max-w-[300px] "
                src="https://images.squarespace-cdn.com/content/v1/6036bf6d46a72e136be8eee1/55a98909-5295-4737-a23c-5e9c0aa642fa/9780593461600.jpeg?format=300w"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default About;
