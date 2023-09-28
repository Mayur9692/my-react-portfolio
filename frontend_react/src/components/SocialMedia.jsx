import React from 'react';
import { BsTwitter, BsInstagram,BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/mayur-panchal-250042215/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/your-instagram-profile">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/your-twitter-profile">
        <BsTwitter />
      </a>
    </div>
   
    
  </div>
);

export default SocialMedia;
