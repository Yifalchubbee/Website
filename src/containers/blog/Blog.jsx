import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import { useNavigate } from 'react-router-dom';
const Blog = () => {
  const navigate = useNavigate();

  return (
  
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA" onClick={() => navigate('/blog1')}>
          <Article 
          imgUrl={blog01} 
          date="Sep 29, 2021" 
          text="7 Tips For Aspiring Young Entrepreneurs" />
        </div>
        <div className='blog-containerB'>
          <div className="gpt3__blog-container_groupB" onClick={() => navigate('/blog2')}>
            <Article 
            imgUrl={blog02} 
            date="Feb 26, 2022" 
            text="Top 7 Ways to Cultivate Creative Excellence with AI" />
          </div> 
          <div className="gpt3__blog-container_groupC" onClick={() => navigate('/blog3')}>
            <Article 
            imgUrl={blog03} 
            date="Sep 26, 2021" 
            text="Ouroboros Open AI is the future. Let us exlore how it is?" />
          </div> 
          <div className="gpt3__blog-container_groupD" onClick={() => navigate('/blog4')}>
            <Article 
            imgUrl={blog04} 
            date="Sep 26, 2021" 
            text="Ouroboros Open AI is the future. Let us exlore how it is?" />
          </div>
          <div className="gpt3__blog-container_groupE" onClick={() => navigate('/blog5')}> 
            <Article 
            imgUrl={blog05} 
            date="Sep 26, 2021" 
            text="Ouroboros Open AI is the future. Let us exlore how it is?" />
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Blog;