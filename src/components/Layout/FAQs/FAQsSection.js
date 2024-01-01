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
                  <h2>Quetion</h2>
                  <span>
                    <IoIosArrowDown
                      className={open1 === true ? `openFaq` : `closeFaq`}
                    />
                  </span>
                </div>
                {/*  */}
                <div className={open1 === true ? `show` : `notShow`}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt ab inventore necessitatibus, eius corrupti
                  perspiciatis. Quia voluptas rem laboriosam, perspiciatis ipsam
                  dicta soluta, magnam, inventore nulla est expedita! Natus
                  voluptatem iure ducimus in sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perferendis eius reiciendis quisquam tempore illo ducimus saepe labore exercitationem suscipit, veniam recusandae non debitis quibusdam. Odit incidunt qui quis nesciunt autem libero perspiciatis reiciendis doloribus ducimus molestias sapiente molestiae quam, dolores voluptatem nostrum, voluptates natus sequi cumque, quas rerum repudiandae et inventore. Asperiores voluptatibus reiciendis neque magnam temporibus, ipsum voluptatum cum fugit impedit vitae fugiat aperiam consequuntur voluptatem. Labore hic accusamus quas quam ipsam provident quo consectetur optio repudiandae, fugiat, sequi nobis! Libero, eius voluptatibus? Illum nisi omnis, totam non vero tempora culpa. Sint esse laboriosam ipsam provident consequuntur nostrum.
                </div>
              </div>
            </div>
            {/*  */}
            <div className="FAQsContent">
              <div>
                <div onClick={() => setOpen2(!open2)}>
                  <h2>Quetion</h2>
                  <span>
                    <IoIosArrowDown
                      className={open2 === true ? `openFaq` : `closeFaq`}
                    />
                  </span>
                </div>
                {/*  */}
                <div className={open2 === true ? `show` : `notShow`}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt ab inventore necessitatibus, eius corrupti
                  perspiciatis. Quia voluptas rem laboriosam, perspiciatis ipsam
                  dicta soluta, magnam, inventore nulla est expedita! Natus
                  voluptatem iure ducimus in sapiente.
                </div>
              </div>
            </div>
            {/*  */}
            <div className="FAQsContent">
              <div>
                <div onClick={() => setOpen3(!open3)}>
                  <h2>Quetion</h2>
                  <span>
                    <IoIosArrowDown
                      className={open3 === true ? `openFaq` : `closeFaq`}
                    />
                  </span>
                </div>
                {/*  */}
                <div className={open3 === true ? `show` : `notShow`}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt ab inventore necessitatibus, eius corrupti
                  perspiciatis. Quia voluptas rem laboriosam, perspiciatis ipsam
                  dicta soluta, magnam, inventore nulla est expedita! Natus
                  voluptatem iure ducimus in sapiente.
                </div>
              </div>
            </div>
            {/*  */}
            <div className="FAQsContent">
              <div>
                <div onClick={() => setOpen4(!open4)}>
                  <h2>Quetion</h2>
                  <span>
                    <IoIosArrowDown
                      className={open4 === true ? `openFaq` : `closeFaq`}
                    />
                  </span>
                </div>
                {/*  */}
                <div className={open4 === true ? `show` : `notShow`}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt ab inventore necessitatibus, eius corrupti
                  perspiciatis. Quia voluptas rem laboriosam, perspiciatis ipsam
                  dicta soluta, magnam, inventore nulla est expedita! Natus
                  voluptatem iure ducimus in sapiente.
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
