import { useCalendarContext } from "../context/CalendarContext";

function Navigation() {
  const { currentMonth, setCurrentMonth } = useCalendarContext();

  function goToPreviousMonth() {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  }

  function goToNextMonth() {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  }

  return (
    <div className="navigation-bar">
      <button onClick={goToPreviousMonth}>Prev</button>
      <span>{currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}</span>
      <button onClick={goToNextMonth}>Next</button>
    </div>
  );
}

export default Navigation;
