import { useState } from 'react';
import './testimonial.css';

function Testimonial() {
  const [isHovered001, setIsHovered001] = useState(false);
  const [isHovered002, setIsHovered002] = useState(false);
  const [isHovered003, setIsHovered003] = useState(false);
  const [isHovered004, setIsHovered004] = useState(false);
  return (
    <div className="App1">
      <header></header>
      <div id="home-button-main">
      <a href="home"><div id="home-button-internal"><p>Home</p></div></a>
      </div>
      <div id="testimonials-header">
        <p>Testimonials</p>
      </div>
      <div id="testimonials-content">
        <div id="testimonial" onMouseEnter={() => setIsHovered001(true)} onMouseLeave={() => setIsHovered001(false)}>{isHovered001?<div id="hovertext_test">Better Mental has been a lifeline for me during challenging times in my life. The counselors here are not only highly skilled but also genuinely caring. They made me feel heard and understood. With their support, I've made significant progress in managing my anxiety.</div>:<div>Aman</div>}</div>
        <div id="testimonial" onMouseEnter={() => setIsHovered002(true)} onMouseLeave={() => setIsHovered002(false)}>{isHovered002?<div id="hovertext_test">I was skeptical about online therapy at first, but Better Mental exceeded my expectations. The insights I gained and connections I made have been invaluable. This platform has played a crucial role in my journey towards healing and personal growth.</div>:<div>Deepa</div>}</div>
        <div id="testimonial" onMouseEnter={() => setIsHovered003(true)} onMouseLeave={() => setIsHovered003(false)}>{isHovered003?<div id="hovertext_test">Better Mental has been a game-changer for me. There have been times when I needed someone to talk to, and the compassionate individuals from the meetings I went to were there for me. It's reassuring to know that I'm never alone on this journey to better mental health.</div>:<div>Mike</div>}</div>
        <div id="testimonial" onMouseEnter={() => setIsHovered004(true)} onMouseLeave={() => setIsHovered004(false)}>{isHovered004?<div id="hovertext_test">I can't express how grateful I am for the wealth of resources available on Better Mental. The heealth tips have given me the knowledge and skills to better understand and manage my mental health. The guidance I've found here has been a tremendous help in my ongoing mental wellness journey.</div>:<div>Oxmaul</div>}</div>
      </div>
      <br></br>
    </div>
  );
}

export default Testimonial;
