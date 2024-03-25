import React, { useState } from "react";
import './rehab_form.css';

const Header = () => {
  return (
    <div id="home-button-main">
      <a href="home"><div id="home-button-internal"><p>Home</p></div></a>
      </div>
  );
};

const Main = () => {
  const [style, setStyle] = useState("rsvp_confirm_hidden");
  const changeStyle = () => {
    
    if (style === "rsvp_confirm_hidden") 
      setStyle("rsvp_confirm_shown");
};

  return (
    <div id="main_container">
      <div className="container_sub">
        <h1 id="rehab-title">Event RSVP</h1>
        <div className="text-area">
        <input type="email" id="rsvp_email" placeholder="Email" required /><br></br>
        <input type="text" pattern="[0-9]+" placeholder="Mobile Number"  id="rsvp_mobile" required/><br></br>
        <div  id="rsvp_submit" onClick={changeStyle}><div>Submit</div></div>
        </div>
        <div id={style}>
          <div>Your RSVP is confirmed!</div>
          <div id="confirm_text">You will shortly recieve your invite on your email</div>
        </div>
      </div>
    </div>
    
  );
};

function RehabForm() {
  return (
    <div>
      <header></header>
      <Header />
      <Main />
    </div>
  );
}

export default RehabForm;