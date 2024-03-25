import React from "react";
export default function Therapist(props)
{
    let url="booknow"
    return(
        <div id="info_therapist">
            <img src={props.image} id="image_therapist"></img>
            <div id="info_therapist_2">
                <div id="name_therapist">Name: {props.name}<img src="https://media.istockphoto.com/id/1443278850/vector/blue-check-mark-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=hbfLgp6DI_Hlf9f2BI_K9aZ_0kMojgXc-GefXbHeDqs=" id="tick_image"></img></div>
                <div id="profession_therapist">Specialization: {props.profession}</div>
                <div id="reviews_therapist">Review: {props.review}</div>
                <div id="exp_therapist">Experience: {props.exprience}</div>
                <div id="info_therapist_bookings">
                    <div>{props.quote}</div>
                </div>
                <div id="therapist_book_now_button">
            
                    <button id="book_therapist"><a href={url} target="_blank">BOOK NOW</a></button>            
                </div>
            </div>
        </div>
    )
}
