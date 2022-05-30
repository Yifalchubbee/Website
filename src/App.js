import React from 'react';
// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar } from './components';
import Blog1 from './pages/blog1';
import Blog2 from './pages/blog2';
import Blog3 from './pages/blog3';
import Blog4 from './pages/blog4';
import Blog5 from './pages/blog5';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/Website' element={<Home />} />
        <Route path='/blog1' element={<Blog1 />} />
        <Route path='/blog2' element={<Blog2 />} />
        <Route path='/blog3' element={<Blog3 />} />
        <Route path='/blog4' element={<Blog4 />} />
        <Route path='/blog5' element={<Blog5/>} />
      </Routes>
    </Router>
  )
}

export default App