import { useEffect } from "react";
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
  const [currentUser, setCurrentUser] = useState(""); // default user

  // For calendar logic:
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null); // default: today

  // Load data from localStorage when app starts
useEffect(() => {
  const savedEvents = localStorage.getItem("events");
  if (savedEvents) setEvents(JSON.parse(savedEvents));

    setCurrentUser(""); // forces placeholder on every load
}, []);

  // Save data to localStorage when events or user changes
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events, currentUser]);


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

