import './tips.css';
import React, { useState } from "react";

function Tips() {
  const [isHovered01, setIsHovered01] = useState(false);
  const [isHovered02, setIsHovered02] = useState(false);
  const [isHovered03, setIsHovered03] = useState(false);
  const [isHovered04, setIsHovered04] = useState(false);
  const [isHovered05, setIsHovered05] = useState(false);
  const [isHovered06, setIsHovered06] = useState(false);
  return (
    <div className="App">
      <header></header>
      <div id="home-button-main">
      <a href="home"><div id="home-button-internal"><p>Home</p></div></a>
      </div>
      <div id="tips-header">
        <p>Health Tips</p>
      </div>
      <div id="tips-content">
        <div id="tip-0" onMouseEnter={() => setIsHovered01(true)} onMouseLeave={() => setIsHovered01(false)}>{isHovered01?<p id="hovertext">Drinking enough water is essential for good health</p>:<p>Water</p>}</div>
        <div id="tip-0" onMouseEnter={() => setIsHovered02(true)} onMouseLeave={() => setIsHovered02(false)}>{isHovered02?<p id="hovertext">Take five to 10 minutes to warm up and cool down properly everyday</p>:<p>Exercise</p>}</div>
        <div id="tip-0" onMouseEnter={() => setIsHovered03(true)} onMouseLeave={() => setIsHovered03(false)}>{isHovered03?<p id="hovertext">Deep breathing can help reduce stress and promote feelings of well-being</p>:<p>Stress</p>}</div>
        <div id="tip-0" onMouseEnter={() => setIsHovered04(true)} onMouseLeave={() => setIsHovered04(false)}>{isHovered04?<p id="hovertext">Meditation and yoga help with breathing and gives sense of calmness</p>:<p>Calm</p>}</div>
        <div id="tip-0" onMouseEnter={() => setIsHovered05(true)} onMouseLeave={() => setIsHovered05(false)}>{isHovered05?<p id="hovertext">Interact with the people around you to develop meaningful connections</p>:<p>Connect</p>}</div>
        <div id="tip-0" onMouseEnter={() => setIsHovered06(true)} onMouseLeave={() => setIsHovered06(false)}>{isHovered06?<p id="hovertext">Sleep is very essential as it boosts your confidence to face a new day</p>:<p>Sleep</p>}</div>
      </div>
    </div>
  );
}

export default Tips;
