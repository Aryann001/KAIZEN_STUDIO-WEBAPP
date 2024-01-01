import React, { Fragment, useRef } from "react";
import "./HeroSection.css";
import Facebook from "../../../assets/FB.png";
import Instagram from "../../../assets/instagram.png";
import Tiktok from "../../../assets/Tk.png";
import Youtube from "../../../assets/Yt.png";
import Arrow from "../../../assets/arrow.png";
import Challa from "../../../assets/Challa.png";
import { useScroll, useTransform, motion } from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scrollHeading = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scrollChalla = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <Fragment>
      <div className="Hero" ref={ref}>
        <motion.span className="heroChalla-1" style={{ y: scrollChalla }}>
          <img src={Challa} alt="Challa" />
        </motion.span>
        <motion.span className="heroChalla-2" style={{ y: scrollChalla }}>
          <img src={Challa} alt="Challa" />
        </motion.span>
        <div>
          <div className="HeroContainer">
            <div className="h-1">
              <div>
                <img className="heroImage" src={Facebook} alt="facebook" />
              </div>
              {/*  */}
              <div>
                <img className="heroImage tiktok" src={Tiktok} alt="facebook" />
              </div>
            </div>
            {/*  */}
            <motion.div className="h-2" style={{ y: scrollHeading, zIndex: 10 }}>
              <div>
                <span className="heroimgspan">
                  <img src={Arrow} alt="arrow" />
                </span>
                <div>
                  <h3>START, SCALE & SKYROCKET</h3>
                  <h3>YOUR SOCIAL MEDIA WITH</h3>
                </div>
                <p>EDITING EXPERTS</p>
              </div>
            </motion.div>
            {/*  */}
            <div className="h-3">
              <div>
                <img
                  className="heroImage instagram"
                  src={Instagram}
                  alt="facebook"
                />
              </div>
              {/*  */}
              <div>
                <img className="heroImage" src={Youtube} alt="facebook" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </Fragment>
  );
};

export default HeroSection;
