function DayCell({ date, isToday, isSelected, onClick, events }) {
  return (
    <div
      className={`day-cell${isToday ? " today" : ""}${isSelected ? " selected" : ""}`}
      onClick={onClick}
    >
      <div>{date.getDate()}</div>
      {/* Show dot if events exist */}
      {events.length > 0 && <div className="event-dot"></div>}
    </div>
  );
}

export default DayCell;