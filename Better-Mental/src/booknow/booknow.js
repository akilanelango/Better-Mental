import React from 'react';
import "./booknow.css"
import { useState} from 'react';
function Booking(){
    const [input,setInput] = useState({
        name: '',
        age: '',
        gender: '',
        address: '',
        email: '',
        mob: '',
        date: ''
    })

    function handleChange(event){
        const {name,value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const newAppn = {
            name: input.name,
            age: input.age,
            gender: input.gender,
            address: input.address,
            email: input.email,
            mob: input.mob,
            date: input.date
        }
        // console.log(newAppn);
        async function postData(url = "http://localhost:3001/therapist_booking", data = newAppn) {
            // Default options are marked with *
            const response = await fetch(url, {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              mode: "no-cors", // no-cors, *cors, same-origin
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: newAppn, // body data type must match "Content-Type" header
            });
            // console.log(data);
            return response; // parses JSON response into native JavaScript objects
          }
          console.log(JSON.stringify(newAppn));
          postData().then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
          });
    }

    return(
    <div id="better_thera">
        <header></header>
    <h1 id="heading">BOOK APPOINTMENT</h1>
    <form id="form_pa">
       <label id="name_pa">Name: </label><input onChange={handleChange} autoComplete="off" id="name_pa_1" name="name" value={input.name} placeholder="enter your name"></input><br></br>
       <label id="age_pa">Age:</label><input onChange={handleChange} autoComplete="off" id="age_pa_1" name ="age" value={input.age} type="number" min="10"  max="90"></input><br></br>
       <label id="pa_gender" name="pa_gender_2">Gender<br></br><input autoComplete="off" onChange={handleChange} id="gender_pa_1" name="gender" value={input.gender} type="text"  placeholder="enter your gender" required></input></label><br></br>
       <label id="add_pa">Address:</label><textarea onChange={handleChange} id="add_pa_1" autoComplete="off" name="address" value={input.address} cols="50" placeholder="enter your address" required></textarea>
       <br></br>
       <label id="pa_email">Email:</label><input onChange={handleChange} autoComplete="off" type="email" id="pa_email_1" name="email" value={input.email} placeholder="@gmail.com" required /><br></br>
       <label id="pa_mobile">Mobile No:</label><input onChange={handleChange} autoComplete="off" type="text" pattern="[0-9]+" name="mob" value={input.mob} placeholder="+91"  id="pa_mobile_1" required/><br></br>
       <label id="pa_appo_date">Appointment Date:</label><input onChange={handleChange} autoComplete="off" type="date"  name="date" value={input.date} id="pa_appo_date_1"/><br></br>
       <div><br></br>
       <label id="pa_appo_time">Appointment Time:</label>
       <ul id="time_ul"><li><button id="nine" type="button" >9:30</button></li>
        <li><button id="ten" type="button" >10:30</button></li>
        <li><button id="eleven" type="button">11:50</button></li>
        <li><button id="forteen" type="button">14:20</button></li>
        <li><button id="eigtheen" type="button">18:10</button></li>
        </ul>
       </div><br></br>
        <input  onClick={handleClick} id="SUBMIT" type="button" value="SUBMIT"></input>
    </form>
</div>
);}

export default Booking