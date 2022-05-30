import React from 'react';
import './blog5.css';
import blog05 from '../../assets/blog05.png'

export default function Blog5() {
    return (
      <div className="blog5">
        <div className="blog5Wrapper">
          <img
            className="blog5Img"
            src={blog05}
            alt=""
          />
          <h1 className="blog5Title">
          7 Tips For Aspiring Young Entrepreneurs
            <div className="blog5Edit">
              <i className="blog5Icon far fa-edit"></i>
              <i className="blog5Icon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="blog5Info">
            <span>
              Author: THE All Myght Rakon
              <b className="blog5Author">
              </b>
            </span>
            <span>1 day ago</span>
          </div>
          <p className="blog5Desc">
            Patrick Scherzinger is the Managing Shareholder of Scherzinger Holding GmbH and considered among the youngest entrepreneurs in Germany.
            <br />
            Often, younger entrepreneurs don’t have the capital saved that older entrepreneurs do as a result of working and saving over many years. However, this doesn’t have to prevent you from succeeding.
            <br />
            <br />

            According to the majority of participants in the Small Business Trends survey — and countless leaders in the entrepreneurship sphere — the best way to learn about entrepreneurship is simply: Start a business.
            <br />
            <br />
            You can do all the reading, preparation and planning in the world, but the only way you’re going to learn how to succeed in entrepreneurship is to take the plunge and begin your entrepreneurial journey.
            <br />
            <br />
            Forbes Business Council is the foremost growth and networking organization for business owners and leaders. Do I qualify?
            <br />
            <br />
          </p>
        </div>
      </div>
    );
  }
  