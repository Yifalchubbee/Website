import React from 'react';
import ai from '../../assets/ai.gif';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">We Help You Do What Was Previously Unimaginable</h1>
      <p>How? We are on a mission to help humans solve hard problems with our AI, IoT and Data Automation</p>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);
export default Header;