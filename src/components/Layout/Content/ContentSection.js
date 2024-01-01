import React, { useEffect } from "react";
import "./ContentSection.css";
import Aryan from "../../../assets/Aryan.jpeg";
import v1 from "../../../assets/videos/v1.mp4";
import v2 from "../../../assets/videos/v2.mp4";
import v3 from "../../../assets/videos/v3.mp4";
import v4 from "../../../assets/videos/v4.mp4";
import Arrow from "../../../assets/arrow.png";
import Star1 from "../../../assets/Hero.png";
import Star2 from "../../../assets/Hero2.png";
import { useAnimate, useInView } from "framer-motion";

const ContentSection = () => {

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(scope.current, {animation: "popup 2s forwards"})
    }
  }, [isInView, animate, scope])

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
                          <img src={Aryan} alt="aryan" />
                          <h3>Aryan</h3>
                        </div>
                        <p>20M+</p>
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
                          <img src={Aryan} alt="aryan" />
                          <h3>Aryan</h3>
                        </div>
                        <p>20M+</p>
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
                          <img src={Aryan} alt="aryan" />
                          <h3>Aryan</h3>
                        </div>
                        <p>20M+</p>
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
                          <img src={Aryan} alt="aryan" />
                          <h3>Aryan</h3>
                        </div>
                        <p>20M+</p>
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