import React, { useEffect } from "react";
import "./AboutSection.css"
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
      animate1(scope1.current, { animation: "popup 2s forwards" });
    }
    if (isInView2) {
      animate2(scope2.current, { animation: "popup 4s forwards" });
    }
    if (isInView3) {
      animate3(scope3.current, { animation: "popup 6s forwards" });
    }
  }, [isInView1, animate1, scope1, isInView2, animate2, scope2, isInView3, animate3, scope3]);

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
                    HI, I'M ASIM SAHIL, A 22-YEAR-OLD VIDEO EDITOR. I'M A VISUAL
                    STORYTELLER WITH A LOVE FOR CREATING CONTENT THAT ENGAGES
                    AND INFORMS.
                  </p>
                  <p>
                    I'M ALSO A STUDENT OF HUMAN PSYCHOLOGY, WHICH HELPS ME TO
                    UNDERSTAND WHAT MAKES PEOPLE TICK AND HOW TO CREATE CONTENT
                    THAT RESONATES WITH THEM.
                  </p>
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
                    A 22-YEAR-OLD VIDEO EDITOR. I'M A VISUAL STORYTELLER WITH A
                    LOVE FOR CREATING CONTENT THAT ENGAGES AND INFORMS.
                  </p>
                  <p>
                    I'M ALSO A STUDENT OF HUMAN PSYCHOLOGY, WHICH HELPS ME TO
                    UNDERSTAND WHAT MAKES PEOPLE TICK AND HOW TO CREATE CONTENT
                    THAT RESONATES WITH THEM.
                  </p>
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
