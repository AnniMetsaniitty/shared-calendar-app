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
  const [currentUser, setCurrentUser] = useState("Anni"); // default user

  // For calendar logic:
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const todayString = new Date().toISOString().slice(0, 10);
  const [selectedDay, setSelectedDay] = useState(todayString); // default: today

  // Load data from localStorage when app starts
  useEffect(() => {
    const savedEvents = localStorage.getItem("events");
    if (savedEvents) setEvents(JSON.parse(savedEvents));

    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) setCurrentUser(savedUser);
  }, []);

  // Save data to localStorage when events or user changes
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
    localStorage.setItem("currentUser", currentUser);
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

