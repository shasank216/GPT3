import React from "react";
import "./whatGPT3.css";
import Card from "./Card";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 bac" id="whatGPT">
      <div className="gpt3__card gpt3__whatgpt3-first">
        <div className="card-graident" />
        <div className="gpt3__card-new">
          <h1>What is GPT-3</h1>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
      </div>

      <div className="gpt3__whatgpt3-content">
        <h1>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className="gpt3__card-container">
        <div className="gpt3__card ">
          <Card
            head="Chatbots"
            para="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
        </div>
        <div className="gpt3__card ">
          <Card
            head="Knowledgebase"
            para="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
        <div className="gpt3__card ">
          <Card
            head="Education"
            para="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
      
    </div>
  );
};

export default WhatGPT3;
