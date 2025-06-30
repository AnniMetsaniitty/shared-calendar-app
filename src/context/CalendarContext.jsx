import { createContext, useContext, useState } from "react";

// Create the context
const CalendarContext = createContext();

// Custom hook for easy context use
export function useCalendarContext() {
  return useContext(CalendarContext);
}

// Provider component
export function CalendarProvider({ children }) {
  // Shared state
  const [events, setEvents] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // default user

  // 👉 ADD these for calendar logic:
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const todayString = new Date().toISOString().slice(0, 10);
  const [selectedDay, setSelectedDay] = useState(todayString); // default: today

  // Context value (export everything that components need)
  const value = {
    events,
    setEvents,
    currentUser,
    setCurrentUser,
    currentMonth,
    setCurrentMonth,
    selectedDay,
    setSelectedDay,
    // Add more if needed
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}

