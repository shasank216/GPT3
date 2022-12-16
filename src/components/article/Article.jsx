import React from "react";
import "./article.css";

const Article = ({ imgURL, date, heading }) => {
  return (
    <div className="card">
      <div className="card_img">
        <img src={imgURL} alt="blog" />
      </div>
      <div className="card_container">
        <p>{date}</p>
        <h3>{heading}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
