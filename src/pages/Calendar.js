import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment/moment";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/data.json");
      const data = response.data;
      const transformedData = transformData(data);
      setEvents(transformedData);
      // console.log(transformedData);
    } catch (error) {
      console.log(error);
    }
  };

  const transformData = (data) => {                                                                                                                                              
                                                                                                                    
    
    return data.map(event => ({
      title: event.title,
      start: event.start,
      end: moment(event.end).add(1, 'day').format('YYYY-MM-DD'),
      color: event.color,
    })
    );
  };


  const navigate = useNavigate();

  const handleEventClick = () => {
    navigate("/edit");
  };
  return (
    <>
      <Header />
      <div style={{ padding: 50, gridTemplateColumns: "3fr 1fr" }}>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          eventClick={handleEventClick}
          locale="ko"
          height={"85vh"}
          events={events}
          
        />
      </div>
    </>
  );
};

export default Calendar;
