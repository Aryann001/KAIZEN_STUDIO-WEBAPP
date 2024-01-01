import React, { useEffect, useState } from "react";
import "./FAQsSection.css";
import { IoIosArrowDown } from "react-icons/io";
import { LiaQuestionSolid } from "react-icons/lia";
import { AiOutlineQuestion } from "react-icons/ai";
import { SiAnswer } from "react-icons/si";
import { useAnimate, useInView, motion } from "framer-motion";

const FAQsSection = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  // const [scope1, animate1] = useAnimate();
  // const isInView1 = useInView(scope1);

  // const ref = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end start", "start start"],
  // });

  // const scrollWave = useTransform(scrollYProgress, [0, 1], ["100%", "90%"]);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { animation: "popup 2s forwards" });
    }

    // if (isInView1) {
    //   animate1(scrollWave.current, { animation: "bottom 2s forwards" });
    // }
  }, [isInView, animate, scope]);

  return (
    <motion.div className="FAQs">
      <div>
        <div className="FAQsContainer">
          <div ref={scope}>
            <span className="FAQspan-1">
              <LiaQuestionSolid />
            </span>
            <span className="FAQspan-2">
              <AiOutlineQuestion />
            </span>
            <span className="FAQspan-3">
              <SiAnswer />
            </span>
            <h1>FAQ's</h1>
          </div>
          {/*  */}
          <div>
            <div className="FAQsContent">
              <div>
                <div onClick={() => setOpen1(!open1)}>
                  <h2>What types of videos do you edit?</h2>
                  <span>
                    <IoIosArrowDown
                      className={open1 === true ? `openFaq` : `closeFaq`}
                    />
                  </span>
                </div>
                {/*  */}
                <div className={open1 === true ? `show` : `notShow`}>
                  We specialize in editing various types of videos, including
                  corporate content, social media videos, and wedding footage.
                </div>
              </div>
            </div>
            {/*  */}
            <div className="FAQsContent">
              <div>
                <div onClick={() => setOpen2(!open2)}>
                  <h2>How does your video editing process work?</h2>
                  <span>
                    <IoIosArrowDown
                      className={open2 === true ? `openFaq` : `closeFaq`}
                    />
                  </span>
                </div>
                {/*  */}
                <div className={open2 === true ? `show` : `notShow`}>
                  Our process involves initial consultation, file submission,
                  editing, and final delivery to ensure a smooth experience for
                  our clients.
                </div>
              </div>
            </div>
            {/*  */}
            <div className="FAQsContent">
              <div>
                <div onClick={() => setOpen3(!open3)}>
                  <h2>
                    What is the typical turnaround time for video editing
                    projects?
                  </h2>
                  <span>
                    <IoIosArrowDown
                      className={open3 === true ? `openFaq` : `closeFaq`}
                    />
                  </span>
                </div>
                {/*  */}
                <div className={open3 === true ? `show` : `notShow`}>
                  Turnaround times vary based on project complexity, but we
                  strive to provide estimated completion times during the
                  consultation phase. Additionally, for short-form videos, we
                  offer a swift delivery option, aiming to complete and deliver
                  them within 24 hours.
                </div>
              </div>
            </div>
            {/*  */}
            <div className="FAQsContent">
              <div>
                <div onClick={() => setOpen4(!open4)}>
                  <h2>
                    What software and tools do you use for video editing?{" "}
                  </h2>
                  <span>
                    <IoIosArrowDown
                      className={open4 === true ? `openFaq` : `closeFaq`}
                    />
                  </span>
                </div>
                {/*  */}
                <div className={open4 === true ? `show` : `notShow`}>
                  We use industry-standard software and tools, including Adobe
                  Premiere Pro and After Effects, to guarantee high-quality
                  video editing that meets professional standards.
                </div>
              </div>
            </div>
            {/*  */}
            <div className="FAQsContent">
              <div>
                <div onClick={() => setOpen5(!open5)}>
                  <h2>Can I request revisions to the edited video?</h2>
                  <span>
                    <IoIosArrowDown
                      className={open5 === true ? `openFaq` : `closeFaq`}
                    />
                  </span>
                </div>
                {/*  */}
                <div className={open5 === true ? `show` : `notShow`}>
                  Yes, we allow revisions, and our policy details the number of
                  revisions included with each package.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQsSection;
