import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Ouroboros starts with the business challenge, opportunity, or the outcome you want to achieve. We research the market and mine our collective experience to advise and guide you on the right technology and processes to solve even the most complex challenges.</p>
    </div>
  </div>
);

export default Possibility;