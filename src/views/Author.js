import authorPaulPrettyPlease from "../assets/prettyPleaseWthAuthor-removeBg.png";

function Author() {
  return (
    <>
      <div className="md:h-screen bg-white flex md:mt-0 mt-[88px]">
        <div className="m-auto w-[80%] flex md:flex-row flex-col">
          <div className=" my-auto text-justify md:mr-[32px] md:order-first order-last">
            <span className="md:text-7xl text-4xl font-semibold text-[#3D8FAA]">
              Dr.Henman{" "}
            </span>{" "}
            began his professional career working in Head Start and Migrant
            Education preschool programs in central California in 1968. He has
            spent the last 30 years in full time practice coaching and educating
            in the areas of self esteem, addictions, relationship dysfunction,
            depression and anxiety. He received his Ph.D. from the California
            School of Professional Psychology in 1978, and became a licensed
            psychologist in 1980. He is currently in full time practice with
            Psychological Associates in Modesto, CA. He developed
            Cognitive/Perceptual Reconstruction as an integrated therapeutic
            approach to the treatment of Adult Children of Dysfunction in 1985.
            With the help of a steering committee of recovering individuals, he
            founded CAIR Self-Help Groups to support the development of healthy
            self esteem in 1990. In 1997, in conjunction with Urban Care
            Ministries, he helped form CAIRing Grace Groups, which are
            Christ-centered support groups that combine Scripture and
            Cognitive/Perceptual tools from the CAIR Handbook to allow a safe
            place to experience God's Grace in recovery
          </div>
          <img
            className="h-[550px] md:w-[50%] object-cover object-top md:rounded-tl-[280px] rounded-tl-[180px]"
            src="https://s3-media0.fl.yelpcdn.com/bphoto/B14y2Hj7mOFSlvC-G_KaJw/348s.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Author;
