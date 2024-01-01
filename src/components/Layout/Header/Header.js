import React, { Fragment, useState } from "react";
import "./Header.css";
import Logo from "../../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <Fragment>
      <div className="header">
        <div>
          <div className="headerContainer">
            <div className="hc-1">
              <img src={Logo} alt="logo" />
            </div>
            {/*  */}
            {window.innerWidth <= Number(1050) ? (
              <div className="burgerContainer">
                <RxHamburgerMenu
                  className="burgerSvg"
                  onClick={() => setActive(!active)}
                />
              </div>
            ) : (
              <Fragment>
                <div className="hc-2">
                  <nav>
                    <ul>
                      <li>
                        <a href="#ourCraft">Our Craft</a>
                      </li>
                      {/*  */}
                      <li>
                        <a href="#results">Results</a>
                      </li>
                      {/*  */}
                      <li>
                        <a href="#process">The Process</a>
                      </li>
                      {/*  */}
                      <li>
                        <a href="#faqs">FAQs</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/*  */}
                <div className="hc-3">
                  <a href="#contact" className="navBtn">Start Now</a>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${
          active === true ? `displayBlock` : `displayNone`
        } navSlider`}
      >
        <div>
          <span>
            <ImCross onClick={() => setActive(!active)} />
          </span>
          <ul>
            <li>
              <a href="#ourCraft" onClick={() => setActive(!active)}>
                Our Craft
              </a>
            </li>
            {/*  */}
            <li>
              <a href="#results" onClick={() => setActive(!active)}>
                Results
              </a>
            </li>
            {/*  */}
            <li>
              <a href="#process" onClick={() => setActive(!active)}>
                The Process
              </a>
            </li>
            {/*  */}
            <li>
              <a href="#faqs" onClick={() => setActive(!active)}>
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
