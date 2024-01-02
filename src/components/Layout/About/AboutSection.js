import React, { useEffect } from "react";
import "./AboutSection.css";
import Aryan from "../../../assets/Aryan.jpeg";
import { useAnimate, useInView } from "framer-motion";

const AboutSection = () => {
  const [scope1, animate1] = useAnimate();
  const isInView1 = useInView(scope1);

  const [scope2, animate2] = useAnimate();
  const isInView2 = useInView(scope2);

  const [scope3, animate3] = useAnimate();
  const isInView3 = useInView(scope3);

  useEffect(() => {
    if (isInView1) {
      animate1(scope1.current, { animation: "popup 1.25s forwards" });
    }
    if (isInView2) {
      animate2(scope2.current, { animation: "popup 2.5s forwards" });
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
    <div className="about">
      <div>
        <div className="aboutContainer">
          <div ref={scope1}>
            <h3>WHO WE ARE?</h3>
          </div>
          {/*  */}
          <div>
            <div ref={scope2} className="a-card1">
              <div>
                <img className="aboutImage" src={Aryan} alt="aryan" />
              </div>
              {/*  */}
              <div>
                <h4>ASIM SAHIL</h4>
                <div>
                  <p>
                    You have 3 seconds to capture your audience's attention. If
                    you don't hook them in the start, they're gone.
                  </p>
                  <p>
                    That's where I come in, I use my skills and experience to
                    transform raw footage into engaging and visually stunning
                    videos that will capture your audience's attention from
                    start to finish.
                  </p>
                </div>
                <div className="social">
                  <a href="https://www.instagram.com/asimsahiledits">
                    Instagram
                  </a>
                  <a href="https://drive.google.com/file/d/1uhKqedKi5ehrE1QP1kqcrn_pHX_QWHm8/view?usp=drivesdk">
                    Resume
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
            <div ref={scope3} className="a-card2">
              <div>
                <img className="aboutImage" src={Aryan} alt="aryan" />
              </div>
              {/*  */}
              <div>
                <h4>YASH SONI</h4>
                <div>
                  <p>
                    Hey there! I'm Yash Soni, a 22-year-old video editor and
                    aspiring cinematographer. My passion lies in crafting
                    compelling visual narratives that captivate and inform.
                  </p>
                  <p>
                    Whether it's through editing techniques or the lens of a
                    camera, I thrive on bringing stories to life where every
                    frame tells a story, and every story makes an impact. Let's
                    create magic together!
                  </p>
                </div>
                <div className="social s2">
                  <a href="https://drive.google.com/file/d/14-uJ9CbAzKxp2ynb3JF88jCaK4DqRvH-/view?usp=drive_link">
                    Resume
                  </a>
                  <a href="https://www.instagram.com/psykick.tunes">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
