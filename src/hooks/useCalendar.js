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

// Weekday index (0=Sunday...6=Saturday) for 1st day of month
function getStartPadding(year, month) {
  return new Date(year, month, 1).getDay();
}

// Returns the array of dayCells for a calendar grid, with nulls as padding
function getCalendarGrid(year, month) {
  const daysInMonth = getMonthDays(year, month);
  const startPadding = getStartPadding(year, month);

  // For a 7-column grid, pad before and after as needed
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
  return dayCells;
}

// The hook itself: usage: const { days, startPadding, grid } = useCalendar(currentMonth);
export default function useCalendar(currentMonth) {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const days = getMonthDays(year, month);
  const startPadding = getStartPadding(year, month);
  const grid = getCalendarGrid(year, month);

  return {
    year,
    month,
    days,
    startPadding,
    grid, // full array (with nulls for padding)
    monthName: currentMonth.toLocaleString("default", { month: "long", year: "numeric" }),
  };
}
