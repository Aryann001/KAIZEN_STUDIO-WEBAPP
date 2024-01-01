import React, { useEffect } from "react";
import "./PerkSection.css";
import { BsStars } from "react-icons/bs";
import { motion, useAnimate, useInView } from "framer-motion";

const PerkSection = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { animation: "popup 2s forwards" });
    }
  }, [isInView, animate, scope]);

  return (
    <div className="perk">
      <div>
        <motion.div className="perkContainer" ref={scope}>
          <div>
            <span className="pcsp-1">
              <BsStars />
            </span>
            <span className="pcsp-2">
              <BsStars />
            </span>
            <span className="pcsp-3">
              <BsStars />
            </span>
            <div>
              <h3>
                <span>Perks</span> So Good
              </h3>
              <h3>you will never go back</h3>
            </div>
          </div>
          {/*  */}
          <div>
            <div className="perkBox">
              <img
                src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb53c72a285a671b1cdbef_video%20camera%20(1)%20(1).gif"
                alt="1"
              />
              <p>
                Transform your existing videos or podcasts into viral shorts
              </p>
            </div>
            {/*  */}
            <div className="perkBox">
              <img
                src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb52420e80154f5c60fc99_rocket.gif"
                alt="2"
              />
              <p>Grow on Instagram, YouTube, Tik-Tok all at once</p>
            </div>
            {/*  */}
            <div className="perkBox">
              <img
                src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb535287cbe288917fd4c4_hourglass.gif"
                alt="3"
              />
              <p>Start posting viral videos in 48 hours</p>
            </div>
            {/*  */}
            <div className="perkBox">
              <img
                src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb536dd2321642c7342702_teamwork.gif"
                alt="4"
              />
              <p>Get a personalized team that you can trust in a click</p>
            </div>
            {/*  */}
            <div className="perkBox">
              <img
                src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb526b232682e302a8e228_magic%20wand.gif"
                alt="5"
              />
              <p>Grow even faster with motion graphics animations</p>
            </div>
            {/*  */}
            <div className="perkBox">
              <img
                src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb538f519da6e91901e297_certificate.gif"
                alt="6"
              />
              <p>Stop wasting time with amateur freelancers.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PerkSection;
