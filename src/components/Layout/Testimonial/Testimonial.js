import React, { Fragment, useEffect, useRef } from "react";
import "./Testimonial.css";
import { useScroll, useTransform, motion, useAnimate, useInView } from "framer-motion";
import TestCard from "../TestCard/TestCard";
import { MdThumbUp } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Testimonial = () => {
  const ref = useRef(null);

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scrollX = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const reverseScrollX = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, {animation: "popup 2s forwards"})
    }
  }, [isInView, animate, scope])
  

  return (
    <Fragment ref={ref}>
      <div className="testimonial">
        <motion.div className="testimonialHeadingContainer" ref={scope}>
          <h1>Snippets of <span>Satisfaction</span></h1>
          <span className="thf-1"><CiStar /></span>
          <span className="thf-2"><FaHeart /></span>
          <span className="thf-3"><MdThumbUp /></span>
        </motion.div>
        <motion.div style={{ x: scrollX }}>
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
        </motion.div>
        <motion.div style={{ x: reverseScrollX }}>
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
        </motion.div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
