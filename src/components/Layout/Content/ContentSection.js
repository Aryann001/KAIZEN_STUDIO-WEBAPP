import React, { useEffect } from "react";
import "./ContentSection.css";
import v1 from "../../../assets/videos/v1.mp4";
import v2 from "../../../assets/videos/v2.mp4";
import v3 from "../../../assets/videos/v3.mp4";
import v4 from "../../../assets/videos/v4.mp4";
import Arrow from "../../../assets/arrow.png";
import Star1 from "../../../assets/Hero.png";
import Star2 from "../../../assets/Hero2.png";
import { useAnimate, useInView } from "framer-motion";
import jeet from "../../../assets/TESTCLIENTPROFILE/Jeet.jpg";
import riya from "../../../assets/TESTCLIENTPROFILE/riyapropic.jpg";
import Rachel from "../../../assets/TESTCLIENTPROFILE/Rachel Pedersen propic.jpg";
import ALEX from "../../../assets/TESTCLIENTPROFILE/ALEX WALA.jpg";

const ContentSection = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { animation: "popup 2s forwards" });
    }
  }, [isInView, animate, scope]);

  return (
    <div className="content">
      <div>
        <div className="contentContainer">
          <div ref={scope}>
            <div>
              <span className="ccspan-1">
                <img src={Arrow} alt="star" />
              </span>
              <span className="ccspan-2">
                <img src={Star1} alt="star" />
              </span>
              <span className="ccspan-3">
                <img src={Star2} alt="star" />
              </span>
              <h3 className="cch-1">
                <span>FROM</span> START-UP TO STAR{" "}
              </h3>
              <h3 className="cch-2">
                ON SOCIAL MEDIA WITH <span>OUR</span>
              </h3>
              <h3 className="cch-3">CRAFTED VIDEOS</h3>
            </div>
          </div>
          {/*  */}
          <div>
            <div>
              <div>
                <div className="mobileImage mi-1">
                  <div>
                    <div>
                      <video src={v1} loop autoPlay muted></video>
                    </div>
                    <div>
                      <div>
                        <div>
                          <img src={jeet} alt="aryan" />
                          <h3>Mr. Jeet Dubay</h3>
                        </div>
                        <p>40K+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div>
                <div className="mobileImage mi-2">
                  <div>
                    <div>
                      <video src={v2} loop autoPlay muted></video>
                    </div>
                    <div>
                      <div>
                        <div>
                          <img src={ALEX} alt="aryan" />
                          <h3>Max Muller</h3>
                        </div>
                        <p>250K+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div>
                <div className="mobileImage mi-3">
                  <div>
                    <div>
                      <video src={v3} loop autoPlay muted></video>
                    </div>
                    <div>
                      <div>
                        <div>
                          <img src={riya} alt="aryan" />
                          <h3>Riya Yadav</h3>
                        </div>
                        <p>150K+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div>
                <div className="mobileImage mi-4">
                  <div>
                    <div>
                      <video src={v4} loop autoPlay muted></video>
                    </div>
                    <div>
                      <div>
                        <div>
                          <img src={Rachel} alt="aryan" />
                          <h3>Rachel Pedersen</h3>
                        </div>
                        <p>2M+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
