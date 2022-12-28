import React from "react";
import animated from "../Images/animated.gif"

const Animation = () => {
  return (
    <div>
    <div className="animation-wrapper">
      <img src= {animated} alt="animated gif" />
    </div>

    <p className="animation-text">Add A  New Task Below!</p>
    </div>

  );
};

export default Animation;
