import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

// Create the context
const CalendarContext = createContext();

// Custom hook for easy context use
export function useCalendarContext() {
  return useContext(CalendarContext);
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

// Provider component
export function CalendarProvider({ children }) {
  // Shared state
  const [events, setEvents] = useState([]);
  const [currentUser, setCurrentUser] = useState(""); // default user

  // For calendar logic:
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(getTodayKey());

  // Load data from localStorage when app starts
  useEffect(() => {
    const savedEvents = localStorage.getItem("events");
    const savedCurrentUser = localStorage.getItem("currentUser");

    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }

    if (savedCurrentUser) {
      setCurrentUser(savedCurrentUser);
    }
  }, []);

  // Save data to localStorage when shared state changes
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem("currentUser", currentUser);
  }, [currentUser]);


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
