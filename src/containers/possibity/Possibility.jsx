import React from "react";
import "./possibility.css";
import image from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility bac">
      {/* <div className="gpt3__possibiity-image"> */}
        <img src={image} alt="possibility" />
      {/* </div> */}

      <div className="gpt3__possibility-container">
        <p className="gpt3__possibility-container_firstPara">Request Early Access to Get Started</p>
        <h1>The possibilities are beyond your imagination</h1>
        <p className="gpt3__possibility-container_secondPara">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="gpt3__possibility-container_thirdPara">Request Early Access to Get Started</p>
      </div>
    </div>
  );
};

export default Possibility;
