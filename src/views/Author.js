import linderWtOutBg from "../assets/linder_wtout_bg.png";
function Author() {
  return (
    <>
      <div className="md:h-screen bg-white flex md:mt-0 mt-[88px] relative">
        <div className="m-auto w-[80%] flex md:flex-row flex-col">
          <div className=" my-auto text-justify md:mr-[32px] md:order-first order-last z-50">
            Hello, my name is{" "}
            <span className="md:text-7xl text-4xl font-semibold text-[#3D8FAA]">
              Jeralynne Linder{" "}
            </span>{" "}
            , if you met the 14-year-old Jeralynne and told her, she can be an
            aspiring author one day, she'd laugh and say stop playing! Little
            did I know, my hobby for writing love songs? Would open the door, to
            a future in writing books. As I got older my priorities shifted. I
            had a baby boy and had to focus on work. Writing love songs was
            placed on hold but not forgotten. Christmas of 2015, Me and some of
            my colleagues were laid off and waiting for instructions from our
            superiors. One morning I found myself sitting on the edge of my bed,
            wondering what was going to happen next. Then, a thought came to me.
            Remember my uncle used to say whenever you come to a cliffhanger in
            your life. "Try writing about it, it helps. You see the clarity you
            couldn't see before, after writing out my grievances." I realized
            that I found an outlet to express my thoughts and feelings. One day.
            I was driving with my fiancé and it was pouring rain and we stopped
            at a red light, Then I saw a young mother with her daughter getting
            ready to cross the street and saw her daughter pulling on the leash,
            trying to get her dog to budge but no matter how hard she pulled he
            wouldn't bark. We watched the little girl and the puppy and at that
            moment an idea came to my mind. I turned to my fiancé and said "I
            bet you I can write a story about that dog that couldn't bark. "His
            response was "try it, I know you can do it." From that moment I
            never looked back, now here we are, you are actually reading about
            me And how I got started. I will forever be grateful.
          </div>

          <div className="bg-[#46B0C8] rounded-tr-[780px] rounded-br-[50px] rounded-bl-[50px] min-w-[600px] object-cover object-top">
            <img
              className="mx-auto rounded-3xl min-w-[350px] mb-12"
              src={linderWtOutBg}
              alt=""
            />
          </div>
        </div>
        <img
          className="absolute bottom-0 left-1/4 !z-40"
          src="https://media.istockphoto.com/id/465870776/photo/sleeping-husky-puppy.jpg?s=612x612&w=0&k=20&c=fUIXgIiNnd6HIV5ccGdnMldp27KaMhXpILxPn0wqWLc="
          alt=""
        />
      </div>
    </>
  );
}

export default Author;
