import React from "react";
import "./TestCard.css";

const TestCard = (props) => {
  const {
    name,
    testimonial,
    username,
    instagram,
    profilePic,
    profession,
    pic,
  } = props;

  return (
    <div className="testCard" style={{ "--x": pic }}>
      <div>
        <div className="testCardContainer">
          <div>
            <div>
              <img loading="lazy" src={pic} alt="pic" />
            </div>
            <span>
              <p>{name}</p>
              <p>{profession}</p>
            </span>
          </div>
          {/*  */}
          <div>
            <span>
              <img
                loading="lazy"
                src="https://assets-global.website-files.com/64fad25f8884cb2d680a1052/64fb0d9a3dc59b592ac6cf08_quote.svg"
                alt="idk"
              />
            </span>
            <p>{`"${testimonial}"`}</p>
            {/*  */}
            <div>
              <img loading="lazy" className="testClientImage" src={profilePic} alt="aryan" />
              <a href={instagram}>{username}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
