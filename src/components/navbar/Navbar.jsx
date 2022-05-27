import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.css'
import './navbar.css';
import '../../assets/Special.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div>
          <meta charSet="'utf-8" />
          <title>logo</title>
          <link rel="stylesheet" href="logo.css" />
          <div className="loader" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Who is Ouroboros</a></p>
          <p><a href="#possibility">Possibilities</a></p>
          <p><a href="#features">Technology</a></p>
          <p><a href="#blog">Blog</a></p>
        </div>
            </div>
            <div className="gpt3__navbar-sign">
        <button type="button">Contact Us</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Technology</a></p>
            <p><a href="#blog">Blog</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button type="button">Contact Us</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;