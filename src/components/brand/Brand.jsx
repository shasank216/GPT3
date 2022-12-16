import React from 'react';
import Google from '../../assets/google.png';
import Slack from '../../assets/slack.png';
import Atlassian from '../../assets/atlassian.png';
import Dropbox from '../../assets/dropbox.png';
import Sopify from '../../assets/shopify.png';
import './brand.css';

const Brand = () => {
  return (
<div className='gpt3__brand'>
        <img src={Google} alt="partner" />
        <img src={Slack} alt="partner" />
        <img src={Atlassian} alt="partner" />
        <img src={Dropbox} alt="partner" />
        <img src={Sopify} alt="partner" />
    </div>  )
}

export default Brand