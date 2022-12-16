import React from 'react'

const Feature = ({ title, text }) => {
  return (
    <div className='gpt3__feature-card'>
        <div className="gpt3-feature-card_head">
        <div className="card-linearGradient" />

        <h2>{ title }</h2>
        </div>

        <div className="gpt3-feature-card_text">
        <p>{ text }</p>
        </div>
    </div>
  )
}

export default Feature