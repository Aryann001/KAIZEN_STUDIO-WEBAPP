import React, { useRef, useState } from "react";
import "./Footer.css";
import { InlineWidget } from "react-calendly";
import Aryan from "../../../assets/asimxpsykick.png";
import { useScroll, useTransform, motion } from "framer-motion";

const Footer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMoveHandler = (e) => {
    setPosition({
      x: e.nativeEvent.offsetX / 12,
      y: e.nativeEvent.offsetY / 12,
    });
  };

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scrollHeading = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  const date = new Date();
  const timeZone = "Asia/Kolkata";

  const fmt = new Intl.DateTimeFormat("en-US", {
    timeStyle: "long",
    timeZone,
    hour12: false,
  });

  return (
    <div className="footer" ref={ref}>
      <div className="f-1">
        <div>
          <div className="f-1-1">
            <motion.div style={{ y: scrollHeading }}>
              <img src={Aryan} alt="Kaizen Studio" />
              <p>A NEW ERA OF SOCIAL MEDIA</p>
            </motion.div>
            {/*  */}
            <motion.div style={{ y: scrollHeading }}>
              DOMINANCE BEGINS HERE
            </motion.div>
          </div>
          {/*  */}
          <div className="f-1-2">
            <InlineWidget url="https://calendly.com/yashsoni" />
          </div>
          {/*  */}
          <div className="f-1-3">
            <a
              className="parallax-button"
              href="mailto:asimsahilk@gmail.com"
              onMouseMove={mouseMoveHandler}
              style={{
                "--x": `${position.x}px`,
                "--y": `${position.y}px`,
              }}
            >
              asimsahilk@gmail.com
            </a>
            {/*  */}
            <a
              className="parallax-button"
              href="tel:7976718018"
              onMouseMove={mouseMoveHandler}
              style={{
                "--x": `${position.x}px`,
                "--y": `${position.y}px`,
              }}
            >
              7976718018
            </a>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="f-2">
        <div>
          <div className="f-2-1-1">
            <h3>VERSION</h3>
            <p>2024 © Edition</p>
          </div>
          {/*  */}
          <div className="f-2-1-2">
            <h3>LOCAL TIME</h3>
            <p>{fmt.format(date)}</p>
          </div>
        </div>
        {/*  */}
        <div>
          <h3>SOCIALS</h3>
          <ul>
            <li>
              <a
                href="/"
                onMouseMove={mouseMoveHandler}
                style={{
                  "--x": `${position.x}px`,
                  "--y": `${position.y}px`,
                }}
              >
                <div
                  onMouseMove={mouseMoveHandler}
                  style={{
                    "--x": `${position.x}px`,
                    "--y": `${position.y}px`,
                  }}
                >
                  Awwwards
                </div>
              </a>
            </li>
            {/*  */}
            <li>
              <a
                href="/"
                onMouseMove={mouseMoveHandler}
                style={{
                  "--x": `${position.x}px`,
                  "--y": `${position.y}px`,
                }}
              >
                <div
                  onMouseMove={mouseMoveHandler}
                  style={{
                    "--x": `${position.x}px`,
                    "--y": `${position.y}px`,
                  }}
                >
                  Instagram
                </div>
              </a>
            </li>
            {/*  */}
            <li>
              <a
                href="/"
                onMouseMove={mouseMoveHandler}
                style={{
                  "--x": `${position.x}px`,
                  "--y": `${position.y}px`,
                }}
              >
                <div
                  onMouseMove={mouseMoveHandler}
                  style={{
                    "--x": `${position.x}px`,
                    "--y": `${position.y}px`,
                  }}
                >
                  Twitter
                </div>
              </a>
            </li>
            {/*  */}
            <li>
              <a
                href="/"
                onMouseMove={mouseMoveHandler}
                style={{
                  "--x": `${position.x}px`,
                  "--y": `${position.y}px`,
                }}
              >
                <div
                  onMouseMove={mouseMoveHandler}
                  style={{
                    "--x": `${position.x}px`,
                    "--y": `${position.y}px`,
                  }}
                >
                  LinkedIn
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
