import React from "react";
import Therapist from "./therapist_render";
import Therapist_datainfo from "./therapist_info";
import './therapist.css';
 function TherapistFinal()
{
   
    const Therapist_data=Therapist_datainfo.map((item)=>{
       return(
        <Therapist
        image={item.image}
        name={item.name}
        profession={item.profession}
        review={item.review}
        exprience={item.experince}
        quote={item.quote}
        ></Therapist>
       )
    })
    
    return(
        <div id="better_thera">
        <header></header>
        <div id="home-button-main">
      <a href="home"><div id="home-button-internal"><p>Home</p></div></a>
      </div>
        <div>
            <div id="section_therapist">
                <h1 id="heading_therapist">TOP THERAPISTS IN BANGALORE</h1>
            </div>
        <div>
            <section>{Therapist_data}</section>
        </div>
        </div>
        </div>
    )
}
export default TherapistFinal;