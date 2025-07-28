import { useCalendarContext } from "../context/CalendarContext";
import useCalendar from "../hooks/useCalendar";
import DayCell from "./DayCell";

function CalendarView() {
  const { events, currentMonth, selectedDay, setSelectedDay } = useCalendarContext();

  const { grid: dayCells, monthName } = useCalendar(currentMonth);

  return (
    <div className="calendar-grid">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(w => (
        <div key={w} className="calendar-weekday">{w}</div>
      ))}
      {dayCells.map((date, idx) =>
        date ? (
          <DayCell
            key={date.toISOString()}
            date={date}
            isToday={date.toDateString() === new Date().toDateString()}
            isSelected={selectedDay === date.toISOString().slice(0,10)}
            onClick={() => setSelectedDay(date.toISOString().slice(0,10))}
            events={events.filter(e => e.date === date.toISOString().slice(0,10))}
          />
        ) : (
          <div key={idx} className="calendar-empty"></div>
        )
      )}
    </div>
  );
}

export default CalendarView;
