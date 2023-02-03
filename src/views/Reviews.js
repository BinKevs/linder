import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

function Reviews() {
  const [reviewSafety, setReviewSafety] = useState([
    {
      message:
        "As I thought about a review of Who's Really Driving Your Bus my initial response was to do it perfectly, or do nothing at all. Since I am only human and incapable of perfection; and, to do nothing would be a painful reminder of the life I've spent 'surviving', I chose New Program 'living' by writing this short note. Jim's coaching and the Fundamental Principles of Healthy Change from his book have allowed me to acquire the awareness and tools to examine my 'survival' perceptions and my resulting attitudes and choices...none of which served me well. The reality is I [once] was lost... but ...now am found..., grace grows within and without, graceful goodwill towards myself and you.",
      creator: "Ron DeLong",
    },
    {
      message:
        "Dr. Henman seems to welcome the reader into a Therapeutic Coaching session where you can bring whatever issues or problems you may be dealing with at the present time into the reading. It feels as if he is guiding you into how to approach the issues, bringing wonderful tools and concepts into the exploration. I have had some therapy in the past, but going through this book actually helped me more than the face to face sessions I had before. Dr. Henman created a safe, enriched environment for making healthy changes in my life. I will read it over and over.",
      creator: "Sonia",
    },
    {
      message: "Reviewed in the United States on June 4, 2020",
      creator: "Robert Mcquillan",
    },
    {
      message:
        "Love this book. I have both the hard copy and the kindle version. This book has been a challenge at times and yet so simple. I see myself and others with greater understanding and a lot less critically by applying what I have learned and experienced from this book.",
      creator: "Amazon Customer",
    },
    {
      message:
        "Got this for my husband and I to read recommended by my counselor. I would also recommend",
      creator: "Amazon Customer",
    },
    {
      message:
        "interesting book by a therapist. But seems 'too wordy', I like simplicity.",
      creator: "LOU8486",
    },
    {
      message: "Nice reading. Very impressed with James.",
      creator: "schmidt",
    },
    {
      message:
        "I finished reading this book in one sitting. It is a tour de force about what matters in our lives. In lucid prose, Henman outlines the mistakes we so often repeat as we allow events, misperceptions, and a host of other influences to guide,and all too often, misguide our lives. This book is a a lantern in the darkness, a balm to the wounded, and profound hope for those in despair.",
      creator: "Ron Vincent",
    },
    {
      message:
        "In his book, his YouTube videos, and in his therapeutic sessions Dr Henman twists scripture and God's character in order to distort God's love for His people and the freedom in Christ that was bought for us by the crucifixion and resurrection of the Lord Jesus Christ. The cross delivers us from the pain and trauma of our past while Dr Henman's model for recovery works to train our eyes on himself as the one true source of deliverance from our pain rather than Jesus Christ. His (the author's) model for recovery works to lock us in to the age and time of original wounding events by actively prodding us to go back in time to ten year old Jimmy, five year old Jimmy, 12 year old Jimmy, etc... and then look to him rather than Christ to heal the wounds incurred at the age wherein he (the author) works to trap us. Paul cautions us, as Christians, to test the spirits because satan will disguise himself as an angel of light to deceive, if possible, even God's elect and to lead us away from the truth of the knowledge of Christ. I was fortunate enough to discern this author's attempts to diminish my healing in Christ by redirecting my focus to his own deceptive and inherently flawed model for recovery and to terminate therapeutic involvement with him. I believe he works in a deceiving spirit bent on leading people away from Christ and in to confusion and darkness. I caution his patients, readers, and attendees of his lectures to stand firm in faith in the finished works of Jesus Christ in order to not slip and fall on the words of this author and psychologist",
      creator: "Kathy",
    },
    {
      message:
        "Who's really driving your bus has changed my life. I am a part of a support group who meets once a week to remind ourselves that we can take responsibility to change our attitudes in recovery whether it be addictions, co-dependency or whatever else we are struggling with. The name of the support group that comes out of this book is C.A.I.R. which means Changing attitudes in Recovery. I highly recommend this book to everyone struggling emotionally with any issue.",
      creator: "G. Eck",
    },
  ]);
  return (
    <>
      <div className="h-full bg-[#FFFEFE] relative flex md:mt-[88px] mt-[82px] ">
        <div className="m-auto w-[80%] text-white">
          <div className="">
            <div className="">
              <div className="text-center">
                <div className="text-9xl font-bold text-black text-center font-serif">
                  ''
                </div>
                <div className="pb-8 text-black md:text-6xl text-3xl font-semibold">
                  Experience Rather Than an Intellectual Exercise
                </div>
                {/* <div className="py-4 text-gray-400 text-xl font-semibold">
                  Silver Spring, MD – WEBWIRE – Friday, December 9, 2022
                </div> */}
                <div className="flex md:flex-row flex-col">
                  <div className="text-black text-md text-justify md:w-[40%] w-[90%] m-auto">
                    Dr. Henman began his professional career working in Head
                    Start and Migrant Education preschool programs in central
                    California in 1968. He has spent the last 30 years in full
                    time practice coaching and educating in the areas of self
                    esteem, addictions, relationship dysfunction, depression and
                    anxiety. He received his Ph.D. from the California School of
                    Professional Psychology in 1978, and became a licensed
                    psychologist in 1980. <br />
                    <br /> He is currently in full time practice with
                    Psychological Associates in Modesto, CA. He developed
                    Cognitive/Perceptual Reconstruction as an integrated
                    therapeutic approach to the treatment of Adult Children of
                    Dysfunction in 1985. <br />
                    <br /> With the help of a steering committee of recovering
                    individuals, he founded CAIR Self-Help Groups to support the
                    development of healthy self esteem in 1990. <br />
                    <br /> In 1997, in conjunction with Urban Care Ministries,
                    he helped form CAIRing Grace Groups, which are
                    Christ-centered support groups that combine Scripture and
                    Cognitive/Perceptual tools from the CAIR Handbook to allow a
                    safe place to experience God's Grace in recovery.
                  </div>
                  <div className="md:w-[40%] m-auto bg-[#3D8FAA] rounded-bl-[780px]">
                    {" "}
                    <img
                      className="w-[70%] mx-auto py-[10%]"
                      src="https://i.etsystatic.com/7413892/r/il/9179e0/1294147568/il_570xN.1294147568_3766.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <Link to="reviews" className="text-lg py-12 text-white flex ">
                  Source{" "}
                  <IconContext.Provider
                    value={{
                      size: "1.8em",
                    }}
                  >
                    <AiOutlineRight />
                  </IconContext.Provider>
                </Link>
                <div className="text-black">
                  <div className="text-5xl font-bold">Amazon</div>
                  <div className="text-4xl font-bold py-6 text-center">
                    “Who's Really Driving Your Bus”
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    {reviewSafety.map((item, index) => {
                      return (
                        <div className={`p-6 italic`} key={index}>
                          <div className="flex justify-center">
                            {" "}
                            <IconContext.Provider
                              value={{ color: "#FF9900", size: "1.5em" }}
                            >
                              <AiFillStar />
                            </IconContext.Provider>
                            <IconContext.Provider
                              value={{ color: "#FF9900", size: "1.5em" }}
                            >
                              <AiFillStar />
                            </IconContext.Provider>
                            <IconContext.Provider
                              value={{ color: "#FF9900", size: "1.5em" }}
                            >
                              <AiFillStar />
                            </IconContext.Provider>
                            <IconContext.Provider
                              value={{ color: "#FF9900", size: "1.5em" }}
                            >
                              <AiFillStar />
                            </IconContext.Provider>
                            <IconContext.Provider
                              value={{ color: "#FF9900", size: "1.5em" }}
                            >
                              <AiFillStar />
                            </IconContext.Provider>
                          </div>

                          <div className="">"{item.message}"</div>
                          <div className="font-semibold">
                            -{item.creator}{" "}
                            <span className="text-[#FF9900]">
                              Amazon Reviews
                            </span>{" "}
                          </div>
                        </div>
                      );
                    })}
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

export default Reviews;
