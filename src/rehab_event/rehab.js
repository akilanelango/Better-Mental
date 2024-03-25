import './rehab.css';
import React from 'react';

function ChangeLink(data,num)
{
    for(var i = 0;i<data.length;i++)
    {
        if(num==data[i]['id']) {
            document.getElementById("rehab_event_info").innerHTML = data[i]['location'] + ' ' + data[i]['time'];
            document.getElementById("rsvp_link").style = "display: block;";
        }
    }
}

function RehabEvent() {    
    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      fetch("/rehab_event")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    return (
        <div id="rehab_event">
            <div id="home-button-main">
                <a href="home"><div id="home-button-internal"><p>Home</p></div></a>
            </div>
            <h1 id="heading" align="center">EVENTS NEAR YOU</h1>
            <div id="flexbox-container-div" class="flexbox-container">
                <div id="event_list">
                    <button onClick = {() => ChangeLink(data,1)}>EVENT 1</button>
                    <button onClick={() => ChangeLink(data,2)}>EVENT 2</button>
                    <button onClick={() => ChangeLink(data,3)}>EVENT 3</button>
                    <button onClick={() => ChangeLink(data,4)}>EVENT 4</button>
                    <button onClick={() => ChangeLink(data,5)}>EVENT 5</button>
                    <button onClick={() => ChangeLink(data,6)}>EVENT 6</button>
                </div>
                <div>
                    <h3 id="rehab_event_info"></h3>
                    <a href="rehab_form"><button id="rsvp_link">RSVP</button></a>
                </div>
            </div>
        </div>
  );
}


export default RehabEvent;