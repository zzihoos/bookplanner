
import React from "react";
import Header from "../components/Header";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useNavigate } from "react-router-dom";


const Calendar = () => {
  const navigate = useNavigate();
  const handleEventClick = () => {
    navigate("./edit");
  };
  return (

    <>
    <Header />
    <div
    style={{padding: 50, gridTemplateColumns: "3fr 1fr" }}
  >
    
    <FullCalendar
   
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin]}
      eventClick={handleEventClick}
      locale="ko"
      height={"85vh"}
      events={[
        {
          title: "책읽기",
          start: "2023-06-23",
          end: `2023-06-${29 + 1}`,
        },
        { title: "event 2", date: "2023-04-03" },
      ]}
    />
  </div>
  </>
  );
};

export default Calendar