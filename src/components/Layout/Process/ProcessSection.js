import React from "react";
import "./ProcessSection.css";
import Aryan from "../../../assets/Aryan.jpeg";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Process from "../../../assets/Prosses.png"

const ProcessSection = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 0]);
  const y2 = useTransform(scrollY, [0, 500], [0, 0]);
  const y3 = useTransform(scrollY, [0, 500], [0, 0]);
  const y4 = useTransform(scrollY, [0, 500], [0, 0]);

  return (
    <div className="process">
      <div className="processStatic">
        <div className="processCardContainer">
          <div>
            <img src={Process} alt="Process" />
          </div>

          <div className="processCard">
            <div>
              <img src={Aryan} alt="aryan" />
              <h3>Send your raw footage</h3>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <motion.div
        style={{
          y: y1,
          position: "sticky",
          inset: 0,
          zIndex: 3,
        }}
        className="processCardContainer processCardContainerBack"
      >
        <div></div>

        <div className="processCard">
          <div>
            <img src={Aryan} alt="aryan" />
            <h3>We help you with scripting and hooks on notion if required</h3>
          </div>
        </div>
      </motion.div>
      {/*  */}
      <motion.div
        style={{
          y: y2,
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 4,
        }}
        className="processCardContainer processCardContainerBack"
      >
        <div></div>

        <div className="processCard">
          <div>
            <img src={Aryan} alt="aryan" />
            <h3>Communicate with the team on slack.</h3>
          </div>
        </div>
      </motion.div>
      {/*  */}
      <motion.div
        style={{
          y: y3,
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 5,
        }}
        className="processCardContainer processCardContainerBack"
      >
        <div></div>

        <div className="processCard">
          <div>
            <img src={Aryan} alt="aryan" />
            <h3>Give us feedback on Frame.io</h3>
          </div>
        </div>
      </motion.div>
      {/*  */}
      <motion.div
        style={{
          y: y4,
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 6,
        }}
        className="processCardContainer processCardContainerBack"
      >
        <div></div>

        <div className="processCard">
          <div>
            <img src={Aryan} alt="aryan" />
            <h3>Pubilsh or let our managers take care of publishing with hootsuite</h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProcessSection;
