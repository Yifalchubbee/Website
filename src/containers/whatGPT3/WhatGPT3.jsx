import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Who Is Ouroboros" text="Ouroboros has a team of employees who aim to become one of the most recognized names as a technology-intensive startup with an impressive 100% client retention and a 98% satisfaction rating. With an operation mostly focused on reducing operating costs, running and scaling." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore our Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Healtcare" text="Expand your reach – Innovate to increase revenue, lower the costs of your operations, and improve patient experience" />
      <Feature title="Finance" text="We know every industry is changing, but it can feel like change is happening overnight. With our consulting, you can take advantage of the opportunities in the data-driven economy." />
      <Feature title="Hospitality" text="Apps are changing how people interact with companies. Data insight is transforming how customers experience customer service. Customers expect a personalized and tailored experience on their schedule." />
    </div>
  </div>
);

export default WhatGPT3;