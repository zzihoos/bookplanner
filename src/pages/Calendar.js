import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import "../style/Calendar.css";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/calendar");
      const data = response.data;
      const transformedData = transformData(data);
      // console.log(data);
      setEvents(transformedData);
      // console.log(transformedData);
    } catch (error) {
      console.log(error);
    }
  };
  const transformData = data => {
    return data.map(event => ({
      itodo: event.itodo,
      title: event.title,
      start: event.start,
      end: moment(event.end).add(1, "day").format("YYYY-MM-DD"),
      color: event.color,
    }));
  };
  const navigate = useNavigate();

  const handleEventClick = eventInfo => {
    const { itodo } = eventInfo.event.extendedProps;
    navigate(`/edit/${itodo}`);
  };
  return (
    <>
      <Header />
      <div className="w-4/5 m-auto">
        <FullCalendar
          initialView="dayGridMonth"
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
