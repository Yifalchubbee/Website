import React from 'react';
import{ Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        <div className="bg-circle1"></div>
        <div className="bg-circle2"></div>
        <div className="brand">
        <Brand /></div>
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
        </div>
    </div>
  )
}

export default App