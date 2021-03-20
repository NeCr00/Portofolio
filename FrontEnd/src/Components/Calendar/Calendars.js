import React from 'react';
import Calendar from "@ericz1803/react-google-calendar";

function Calendars (){

    const API_KEY = "AIzaSyAjmZYpDq82eJWKd2BylugCES0fGJ23ppQ";
let calendars = [
  {calendarId: "giannisxristodoulakos@gmail.com"},
 
];


return (
    <div>
      <Calendar apiKey={API_KEY} calendars={calendars} />
    </div>
  )


}

export default Calendars