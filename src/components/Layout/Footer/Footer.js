import React, { useRef, useState } from "react";
import "./Footer.css";
import { InlineWidget } from "react-calendly";
import Aryan from "../../../assets/Aryan.jpeg";
import { Link } from "react-router-dom";
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

  const scrollHeading = useTransform(scrollYProgress, [0, 1], ["-100%%", "0%"]);

  return (
    <div className="footer" ref={ref}>
      <div className="f-1">
        <div>
          <div className="f-1-1" >
            <motion.div style={{ y: scrollHeading }}>
              <img src={Aryan} alt="Kaizen Studio" />
              <p>A NEW ERA OF SOCIAL MEDIA</p>
            </motion.div>
            {/*  */}
            <motion.div style={{ y: scrollHeading }}>DOMINANCE BEGINS HERE</motion.div>
          </div>
          {/*  */}
          <div className="f-1-2">
            <InlineWidget url="https://calendly.com/yashsoni" />
          </div>
          {/*  */}
          <div className="f-1-3">
            <Link
              className="parallax-button"
              href="mailto:aryanbaghel.dev@gmail.com"
              onMouseMove={mouseMoveHandler}
              style={{
                "--x": `${position.x}px`,
                "--y": `${position.y}px`,
              }}
            >
              aryanbaghel.dev@gmail.com
            </Link>
            {/*  */}
            <Link
              className="parallax-button"
              href="tel:7999190099"
              onMouseMove={mouseMoveHandler}
              style={{
                "--x": `${position.x}px`,
                "--y": `${position.y}px`,
              }}
            >
              7999190099
            </Link>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="f-2">
        <div>
          <div className="f-2-1-1">
            <h3>VERSION</h3>
            <p>2022 © Edition</p>
          </div>
          {/*  */}
          <div className="f-2-1-2">
            <h3>LOCAL TIME</h3>
            <p>07:41 PM GMT+1</p>
          </div>
        </div>
        {/*  */}
        <div>
          <h3>SOCIALS</h3>
          <ul>
            <li>
              <a
                href="https://instagram.com"
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
                href="https://instagram.com"
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
                href="https://instagram.com"
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
                href="https://instagram.com"
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
