import React from 'react';
import './cta.css';

const CTA = () => {
  return (
    <div className='gpt3__CTA'>
      <p>Request Early Access to Get Started</p>
      <div className="gpt3__CTA-container">
        <div className="gpt3__CTA-container-head">
          <h2>
          Register today & start exploring the endless possiblities.
          </h2>
        </div>

        <div className="gpt3__CTA-container-button">
          <button type='button'>
            Get Started
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default CTA