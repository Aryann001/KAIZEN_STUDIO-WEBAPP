import React, { Fragment, useEffect, useRef } from "react";
import "./Testimonial.css";
import {
  useScroll,
  useTransform,
  motion,
  useAnimate,
  useInView,
} from "framer-motion";
import TestCard from "../TestCard/TestCard";
import { MdThumbUp } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import a1 from "../../../assets/TESTCLIENTPROFILE/Jeet.jpg";
import a2 from "../../../assets/TESTCLIENTPROFILE/cloutpropic.jpg";
import a3 from "../../../assets/TESTCLIENTPROFILE/G1Propic.jpg";
import a4 from "../../../assets/TESTCLIENTPROFILE/riyapropic.jpg";
import a5 from "../../../assets/TESTCLIENTPROFILE/rachnapropic.jpg";
import b1 from "../../../assets/TITS/1.png";
import b2 from "../../../assets/TITS/2.png";
import b3 from "../../../assets/TITS/3.png";
import b4 from "../../../assets/TITS/4.png";

const Test = [
  {
    name: "Ms. Park Jiwon",
    testimonial:
      "I had the privilege of hiring Asim as a video editor for my K-pop event and I must say he exceeded all expectations! His professionalism, attention to detail, and creative eye truly made the memories come alive!",
    username: "korean.g1",
    instagram: "https://www.instagram.com/korean.g1/",
    profilePic: a3,
    profession: "Youtuber with Over 400k Subscribers",
    pic: b2,
  },
  {
    name: "Thomas Sharpe",
    testimonial:
      "Shoutout to Asim for turning my raw footage into pure gold. No frills, just straight-up cold, calculated edits that make my content pop. If you're not following them, you're missing out on some serious editing prowess.",
    username: "cloutom",
    instagram: "https://www.instagram.com/cloutom/",
    profilePic: a2,
    profession: "Tik-Toker with 9 Million + Followers",
    pic: b1,
  },
  {
    name: "Mr. Jeet Dubay",
    testimonial:
      "It was such a Seamless Experience to work with Asim & Yashna. They make an Elephant like Task feel like Childs play. Asims Editing and Yashnas Writing makes them an unbeatable Duo. Highly Recommended Agency!",
    username: "jeetdubeyy",
    instagram: "https://www.instagram.com/jeetdubeyy/",
    profilePic: a1,
    profession: "Financial Influencers & Stock Expert",
    pic: b4,
  },
  {
    name: "Riya Yadav",
    testimonial:
      "Working with professional video editors has been a game-changer for our projects. Their creative flair and technical expertise brought our vision to life, enhancing the overall quality of our content.",
    username: "cryptoriya",
    instagram: "https://www.instagram.com/cryptoriya/",
    profilePic: a4,
    profession: "Finance Creator with 40k + Followers",
    pic: b3,
  },
  {
    name: "Ms. Rachna Bhagat",
    testimonial:
      "To Asim The efforts and results him and his team had made just to make that one day special for each one of us was commendable. I really appreciate how supportive and active he was while making everyone come together for memories and pictures. Videography skills I would say one of the cleanest shots Asim took and edited exactly the way it should have been CLASSY I would say. Had a great time Thanks for your efforts",
    username: "rchna_bhght",
    instagram: "https://www.instagram.com/rchna_bhght/",
    profilePic: a5,
    profession: "Dancer & Influencer",
    pic: b2,
  },
];

const Testimonial = () => {
  const ref = useRef(null);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scrollX = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const reverseScrollX = useTransform(scrollYProgress, [0, 1], ["60%", "-40%"]);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { animation: "popup 2s forwards" });
    }
  }, [isInView, animate, scope]);

  return (
    <Fragment ref={ref}>
      <div className="testimonial">
        <motion.div className="testimonialHeadingContainer" ref={scope}>
          <h1>
            Snippets of <span>Satisfaction</span>
          </h1>
          <span className="thf-1">
            <CiStar />
          </span>
          <span className="thf-2">
            <FaHeart />
          </span>
          <span className="thf-3">
            <MdThumbUp />
          </span>
        </motion.div>
        <motion.div style={{ x: scrollX }}>
          {Test &&
            Test.map((item) => <TestCard key={item.username} {...item} />)}
        </motion.div>
        <motion.div style={{ x: reverseScrollX }}>
          {Test &&
            Test.map((item) => <TestCard key={item.username} {...item} />)}
        </motion.div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
