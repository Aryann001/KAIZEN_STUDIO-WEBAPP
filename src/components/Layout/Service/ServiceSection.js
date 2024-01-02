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
      animate1(scope1.current, { animation: "popup 0.75s forwards" });
    }
    if (isInView2) {
      animate2(scope2.current, { animation: "popup 2s forwards" });
    }
    if (isInView3) {
      animate3(scope3.current, { animation: "popup 4s forwards" });
    }
  }, [
    isInView1,
    animate1,
    scope1,
    isInView2,
    animate2,
    scope2,
    isInView3,
    animate3,
    scope3,
  ]);

  return (
    <Fragment>
      <div className="service">
        <div>
          <div className="serviceContainer">
            <div>
              <h3>THREE SIMPLE STEPS</h3>
              <h3>FOR SUCCESS</h3>
            </div>
            {/*  */}
            <div>
              <motion.div className="s-card1" ref={scope1}>
                <div>
                  <img src={Service1} alt="service1" />
                </div>
                <h4>CONCEPTUALIZE & CRAFT</h4>
                <p>
                  IN THIS INITIAL PHASE, WE COLLABORATE CLOSELY TO UNDERSTAND
                  AND ALIGN WITH YOUR VISION, CRAFTING A CONCEPT THAT RESONATES
                  WITH YOUR BRAND AND AUDIENCE.
                </p>
              </motion.div>
              {/*  */}
              <motion.div className="s-card2" ref={scope2}>
                <div>
                  <img src={Service2} alt="service2" />
                </div>
                <h4>EXPERT EDITING & ENHANCEMENT</h4>
                <p>
                  OUR EDITING TEAM TAKES CHARGE, EMPLOYING ADVANCED TECHNIQUES
                  TO REFINE YOUR FOOTAGE INTO A VISUALLY STUNNING AND ENGAGING
                  NARRATIVE.
                </p>
              </motion.div>
              {/*  */}
              <motion.div className="s-card3" ref={scope3}>
                <div>
                  <img src={Service3} alt="service3" />
                </div>
                <h4>OPTIMIZE FOR VIRALITY</h4>
                <p>
                  THE FINAL TOUCH INVOLVES OPTIMIZING YOUR VIDEO FOR MAXIMUM
                  SOCIAL MEDIA IMPACT, USING STRATEGIC TACTICS TO BOOST
                  SHAREABILITY AND AUDIENCE REACH.
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
