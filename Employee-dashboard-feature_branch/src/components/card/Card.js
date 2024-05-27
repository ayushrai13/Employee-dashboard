import React from 'react';
import './card.css';

import bgImage from '../images/6815332.jpg';
const Card = (props) => {
  console.log(props);
  return (
    <>
      <div className="">
        <div className="cardDiv">
          <div className="top_filter"></div>
          <div className="top">
            <img
              src={props.props?.profile_url}
              alt="profilePic"
              className="profilePic"
            />
          </div>
          <div className="mid">
            <h2>Employee of the Month</h2>
            <p>{props.props.name}</p>
            <span>{props.props.designation}</span>
          </div>
          <div className="bottom">
            <img className="bgImg" src={bgImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
