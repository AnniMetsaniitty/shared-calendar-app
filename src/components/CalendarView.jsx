import { useCalendarContext } from "../context/CalendarContext";
import DayCell from "./DayCell";

// Get days for a given month as array of Date objects
function getMonthDays(year, month) {
  const days = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push(new Date(year, month, i));
  }
  return days;
}

//  Weekday index (0=Sunday...6=Saturday) for 1st day of month
function getStartPadding(year, month) {
  return new Date(year, month, 1).getDay();
}

function CalendarView() {
  const { events, currentMonth, selectedDay, setSelectedDay } = useCalendarContext();

  // Assume currentMonth is a Date object at first of month
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const daysInMonth = getMonthDays(year, month);
  const startPadding = getStartPadding(year, month);

  // For a 7-column grid, we pad before the 1st and after the last day if needed
  const totalCells = Math.ceil((startPadding + daysInMonth.length) / 7) * 7;
  const dayCells = [];

  for (let i = 0; i < totalCells; i++) {
    const dayNum = i - startPadding + 1;
    let dayDate = null;
    if (dayNum > 0 && dayNum <= daysInMonth.length) {
      dayDate = new Date(year, month, dayNum);
    }
    dayCells.push(dayDate);
  }

  // Render as 7x5 or 7x6 grid (rows depend on month length)
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