import React from 'react';
import './AboutUs.css';

const Header = () => {
  return (
    <div id="home-button-main">
      <a href="home"><div id="home-button-internal"><p>Home</p></div></a>
      </div>
  );
};

const Main = () => {
  return (
    
    <main>
      <div className="container">
        <h1 id="main-title">ABOUT US</h1>
        <div className="text-area">
          <p>
          At Better Mental, we are committed to breaking down the stigma surrounding mental health and making it accessible to everyone. We believe that seeking help for mental health concerns is a sign of strength, not weakness. Our team of experienced mental health professionals, counselors, and support staff are dedicated to providing you with the highest level of care and support.

          </p>
        </div>
      </div>
    </main>
  );
};

function AboutUs() {
  return (
    <div>
      <header></header>
      <Header />
      <Main />
    </div>
  );
}

export default AboutUs;