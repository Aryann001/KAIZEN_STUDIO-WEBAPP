import React, { Fragment, useEffect } from "react";
import "./ServiceSection.css";
import Service1 from "../../../assets/Service.png";
import Service2 from "../../../assets/Service2.png";
import Service3 from "../../../assets/Service3.png";
import { motion, useAnimate, useInView } from "framer-motion";

const ServiceSection = () => {
  const [scope1, animate1] = useAnimate();
  const isInView1 = useInView(scope1);

  const [scope2, animate2] = useAnimate();
  const isInView2 = useInView(scope2);

  const [scope3, animate3] = useAnimate();
  const isInView3 = useInView(scope3);

  useEffect(() => {
    if (isInView1) {
      animate1(scope1.current, { animation: "popup 1s forwards" });
    }
    if (isInView2) {
      animate2(scope2.current, { animation: "popup 4s forwards" });
    }
    if (isInView3) {
      animate3(scope3.current, { animation: "popup 7s forwards" });
    }
  }, [isInView1, animate1, scope1, isInView2, animate2, scope2, isInView3, animate3, scope3]);

  return (
    <Fragment>
      <div className="service">
        <div>
          <div className="serviceContainer">
            <div>
              <h3>3 SIMPLE STEPS TO MAKE YOUR</h3>
              <h3>BRAND GO VIRAL</h3>
            </div>
            {/*  */}
            <div>
              <motion.div className="s-card1" ref={scope1}>
                <div>
                  <img src={Service1} alt="service1" />
                </div>
                <h4>SHARE YOUR RAW FOOTAGE WITH US</h4>
                <p>
                  OUR WRITERS WILL PICK THE BEST PARTS OF YOUR RAW/LONG-FORM
                  VIDEOS
                </p>
              </motion.div>
              {/*  */}
              <motion.div className="s-card2" ref={scope2}>
                <div>
                  <img src={Service2} alt="service2" />
                </div>
                <h4>CREATE A FRESH STYLE</h4>
                <p>
                  OUR VIDEO ARTISTS WILL CREATE A UNIQUE STYLE FOR YOUR BRAND.
                </p>
              </motion.div>
              {/*  */}
              <motion.div className="s-card3" ref={scope3}>
                <div>
                  <img src={Service3} alt="service3" />
                </div>
                <h4>PACKAGING FOR GROWTH</h4>
                <p>
                  OUR MANAGERS AND COPYWRITERS WILL WRITE HOOKS TO STOP THE
                  SCROLLS AND LEAVE THE VIEWERS IN AWE.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServiceSection;
