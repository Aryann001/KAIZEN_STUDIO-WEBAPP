import React from "react";
import "./TestCard.css";
import Aryan from "../../../assets/Aryan.jpeg";

const TestCard = () => {
  return (
    <div className="testCard">
      <div>
        <div className="testCardContainer">
          <div>
            <div></div>
            <p>Maria Puche</p>
          </div>
          {/*  */}
          <div>
            <span>
              <img
                src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb0d9a3dc59b592ac6cf08_quote.svg"
                alt="idk"
              />
            </span>
            <p>
              "Content flow was amazing to work with! They really create amazing
              captivating content that really hooks the viewers! siness"
            </p>
            {/*  */}
            <div>
              <img className="testClientImage" src={Aryan} alt="aryan" />
              <p>Ella Ringrose</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
