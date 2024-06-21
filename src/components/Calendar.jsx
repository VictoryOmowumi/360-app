import React, { useState, useEffect, useContext } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import ThemeContext from "../context/ThemeContext";
const localizer = momentLocalizer(moment);

const Calendar = () => {
  const { theme, themeColor } = useContext(ThemeContext);
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    if (savedEvents) {
      return JSON.parse(savedEvents);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };
  

  const eventStyleGetter = (event, start, end, isSelected) => {
    let style = {
      backgroundColor: theme === "dark" ? themeColor : "#1A97F5",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
      border: "0px",
      display: "block",
    };
    return {
      style,
    };
  };

  return (
    <div className="w-full h-[350px]">
      <BigCalendar
        localizer={localizer}
        events={events}
        defaultDate={new Date()}
        defaultView="month"
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelect}
        selectable
        eventPropGetter={eventStyleGetter}
        toolbar={false}
      />
    </div>
  );
};

export default Calendar;
