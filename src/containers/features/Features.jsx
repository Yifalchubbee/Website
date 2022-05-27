import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Custom Software Development',
    text: 'Get full-cycle development for your online or mobile products, as well as specific services for backend and frontend operations including API, Database, and UX.',
  },
  {
    title: 'Mobile and App Development',
    text: 'Dating apps, mobile wallets, cloud data storage, credit platform, banking apps, payment services, audio streaming services and apps for cleaning businesses and crypto-wallets, we can develop mobile apps for all mobile app platform.',
  },
  {
    title: 'Cloud Migration',
    text: 'Get scalable cloud infrastructure to help your business develop smoothly, save money, and apply modern cybersecurity measures. You may create a high-level strategy or migrate to Microsoft Azure, Amazon Web Services, and Google Cloud.',
  },
  {
    title: 'Sofware Testing',
    text: 'Get new features implemented without delays! Improve the delivery of personalized products, using a team of manual and automation testers that can be scaled up and down to your needs. Performance testing, cybersecurity testing, and more.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">We are here to help you step into future today & make it happen.</h1>
      <p>Technologies We Use</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;