import { CalendarProvider } from "./context/CalendarContext";
import UserSelector from "./components/UserSelector";
import Navigation from "./components/Navigation";
import CalendarView from "./components/CalendarView";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";

function App() {

  return (
    <CalendarProvider>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: 16 }}>
        <UserSelector />
        <Navigation />
        <CalendarView />
        <EventList />
      </div>
    </CalendarProvider>
  );
}

export default App;

// We’re not using DayCell directly here—CalendarView will render 
// multiple DayCell components later. For now, just render the main structure.