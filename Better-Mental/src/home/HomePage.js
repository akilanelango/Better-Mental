import React from 'react';
import './HomePage.css'
import { useState,useEffect } from 'react';
const Main = () => {
    const [text,settext]=useState("")
    const txt = 'Welcome to Better Mental, a place where hope, healing, and happiness converge to support your journey towards improved mental well-being. At Better Mental, we understand that mental health is a fundamental part of living a fulfilling and balanced life. Our mission is to provide a safe and compassionate space where you can find the guidance and resources you need to navigate the challenges of life and nurture your mental health.';
    const  speed = 90;
    
  useEffect(()=>{
    let i=0
    function typeWriter()
    {
      if(i<txt.length)
      {
        settext(text=>text+txt.charAt(i++))
        setTimeout(typeWriter,speed)
      }
    }
    typeWriter();
  },[])
    return (
      <div>
    <header>
    </header>
    <main>
        <div class="container">
            <h1 id="main-title">BETTER MENTAL</h1>
            <div class="button-array">
                <a href="about"><button>About Us</button></a>
                <a href="therapists"><button id="down">Top Therapists</button></a>
                <a href="rehab"><button>Rehab Events</button></a>
                <a href="tips"><button id="down">Health Tips</button></a>
                <a href="testimonials"><button>Testimonials</button></a>
            </div>
            <div id="demo">
              {text}
            </div>
        </div>
    </main>
</div>
    );
};


function Home() {
    return (
      <div>
        <Main />
      </div>
    );
}
export default Home;
