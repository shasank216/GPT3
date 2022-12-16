import React from 'react'

const Card = ({ head, para }) => {
  return (
    <>
         <div className='card-gradient' />
        <div className="card__content">
            <h1>{ head }</h1>
            <p>{ para }</p>
        </div>
    </>
  )
}

export default Card