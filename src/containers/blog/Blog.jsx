import React from "react";
import "./blog.css";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";
import { Article } from "../../components";

const Blog = () => {
  return (
    <div className="gpt3__blog" id="library">
      <h1>
        A lot is happening, <br /> We are blogging about it.
      </h1>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_cardA">
          <Article 
            imgURL={blog01}
            date='Sep 26, 2021'
            heading='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
        </div>

        <div className="gpt3__blog-container_cardB">
        <Article 
            imgURL={blog02}
            date='Sep 26, 2021'
            heading='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article 
            imgURL={blog03}
            date='Sep 26, 2021'
            heading='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article 
            imgURL={blog04}
            date='Sep 26, 2021'
            heading='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article 
            imgURL={blog05}
            date='Sep 26, 2021'
            heading='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
