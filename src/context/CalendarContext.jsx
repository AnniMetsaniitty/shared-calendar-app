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
  const [currentUser, setCurrentUser] = useState("Anna"); // default user

  // Add more shared state as we're building

  // Context value
  const value = {
    events,
    setEvents,
    currentUser,
    setCurrentUser,
    // Add more if needed
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}
